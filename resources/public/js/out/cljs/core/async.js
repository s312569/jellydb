// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args34638 = [];
var len__30779__auto___34644 = arguments.length;
var i__30780__auto___34645 = (0);
while(true){
if((i__30780__auto___34645 < len__30779__auto___34644)){
args34638.push((arguments[i__30780__auto___34645]));

var G__34646 = (i__30780__auto___34645 + (1));
i__30780__auto___34645 = G__34646;
continue;
} else {
}
break;
}

var G__34640 = args34638.length;
switch (G__34640) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34638.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34641 = (function (f,blockable,meta34642){
this.f = f;
this.blockable = blockable;
this.meta34642 = meta34642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34643,meta34642__$1){
var self__ = this;
var _34643__$1 = this;
return (new cljs.core.async.t_cljs$core$async34641(self__.f,self__.blockable,meta34642__$1));
});

cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34643){
var self__ = this;
var _34643__$1 = this;
return self__.meta34642;
});

cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34642","meta34642",-427050733,null)], null);
});

cljs.core.async.t_cljs$core$async34641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34641";

cljs.core.async.t_cljs$core$async34641.cljs$lang$ctorPrWriter = (function (this__30318__auto__,writer__30319__auto__,opt__30320__auto__){
return cljs.core._write.call(null,writer__30319__auto__,"cljs.core.async/t_cljs$core$async34641");
});

cljs.core.async.__GT_t_cljs$core$async34641 = (function cljs$core$async$__GT_t_cljs$core$async34641(f__$1,blockable__$1,meta34642){
return (new cljs.core.async.t_cljs$core$async34641(f__$1,blockable__$1,meta34642));
});

}

return (new cljs.core.async.t_cljs$core$async34641(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args34650 = [];
var len__30779__auto___34653 = arguments.length;
var i__30780__auto___34654 = (0);
while(true){
if((i__30780__auto___34654 < len__30779__auto___34653)){
args34650.push((arguments[i__30780__auto___34654]));

var G__34655 = (i__30780__auto___34654 + (1));
i__30780__auto___34654 = G__34655;
continue;
} else {
}
break;
}

var G__34652 = args34650.length;
switch (G__34652) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34650.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args34657 = [];
var len__30779__auto___34660 = arguments.length;
var i__30780__auto___34661 = (0);
while(true){
if((i__30780__auto___34661 < len__30779__auto___34660)){
args34657.push((arguments[i__30780__auto___34661]));

var G__34662 = (i__30780__auto___34661 + (1));
i__30780__auto___34661 = G__34662;
continue;
} else {
}
break;
}

var G__34659 = args34657.length;
switch (G__34659) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34657.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args34664 = [];
var len__30779__auto___34667 = arguments.length;
var i__30780__auto___34668 = (0);
while(true){
if((i__30780__auto___34668 < len__30779__auto___34667)){
args34664.push((arguments[i__30780__auto___34668]));

var G__34669 = (i__30780__auto___34668 + (1));
i__30780__auto___34668 = G__34669;
continue;
} else {
}
break;
}

var G__34666 = args34664.length;
switch (G__34666) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34664.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34671 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34671);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34671,ret){
return (function (){
return fn1.call(null,val_34671);
});})(val_34671,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args34672 = [];
var len__30779__auto___34675 = arguments.length;
var i__30780__auto___34676 = (0);
while(true){
if((i__30780__auto___34676 < len__30779__auto___34675)){
args34672.push((arguments[i__30780__auto___34676]));

var G__34677 = (i__30780__auto___34676 + (1));
i__30780__auto___34676 = G__34677;
continue;
} else {
}
break;
}

var G__34674 = args34672.length;
switch (G__34674) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34672.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__30624__auto___34679 = n;
var x_34680 = (0);
while(true){
if((x_34680 < n__30624__auto___34679)){
(a[x_34680] = (0));

var G__34681 = (x_34680 + (1));
x_34680 = G__34681;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34682 = (i + (1));
i = G__34682;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34686 = (function (alt_flag,flag,meta34687){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta34687 = meta34687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34688,meta34687__$1){
var self__ = this;
var _34688__$1 = this;
return (new cljs.core.async.t_cljs$core$async34686(self__.alt_flag,self__.flag,meta34687__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34688){
var self__ = this;
var _34688__$1 = this;
return self__.meta34687;
});})(flag))
;

cljs.core.async.t_cljs$core$async34686.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34686.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34687","meta34687",797384247,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34686";

cljs.core.async.t_cljs$core$async34686.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30318__auto__,writer__30319__auto__,opt__30320__auto__){
return cljs.core._write.call(null,writer__30319__auto__,"cljs.core.async/t_cljs$core$async34686");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34686 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34686(alt_flag__$1,flag__$1,meta34687){
return (new cljs.core.async.t_cljs$core$async34686(alt_flag__$1,flag__$1,meta34687));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34686(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34692 = (function (alt_handler,flag,cb,meta34693){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta34693 = meta34693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34694,meta34693__$1){
var self__ = this;
var _34694__$1 = this;
return (new cljs.core.async.t_cljs$core$async34692(self__.alt_handler,self__.flag,self__.cb,meta34693__$1));
});

cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34694){
var self__ = this;
var _34694__$1 = this;
return self__.meta34693;
});

cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34693","meta34693",840117525,null)], null);
});

cljs.core.async.t_cljs$core$async34692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34692";

cljs.core.async.t_cljs$core$async34692.cljs$lang$ctorPrWriter = (function (this__30318__auto__,writer__30319__auto__,opt__30320__auto__){
return cljs.core._write.call(null,writer__30319__auto__,"cljs.core.async/t_cljs$core$async34692");
});

cljs.core.async.__GT_t_cljs$core$async34692 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34692(alt_handler__$1,flag__$1,cb__$1,meta34693){
return (new cljs.core.async.t_cljs$core$async34692(alt_handler__$1,flag__$1,cb__$1,meta34693));
});

}

return (new cljs.core.async.t_cljs$core$async34692(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34695_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34695_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34696_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34696_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__29720__auto__ = wport;
if(cljs.core.truth_(or__29720__auto__)){
return or__29720__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34697 = (i + (1));
i = G__34697;
continue;
}
} else {
return null;
}
break;
}
})();
var or__29720__auto__ = ret;
if(cljs.core.truth_(or__29720__auto__)){
return or__29720__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__29708__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__29708__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__29708__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__30786__auto__ = [];
var len__30779__auto___34703 = arguments.length;
var i__30780__auto___34704 = (0);
while(true){
if((i__30780__auto___34704 < len__30779__auto___34703)){
args__30786__auto__.push((arguments[i__30780__auto___34704]));

var G__34705 = (i__30780__auto___34704 + (1));
i__30780__auto___34704 = G__34705;
continue;
} else {
}
break;
}

var argseq__30787__auto__ = ((((1) < args__30786__auto__.length))?(new cljs.core.IndexedSeq(args__30786__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30787__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34700){
var map__34701 = p__34700;
var map__34701__$1 = ((((!((map__34701 == null)))?((((map__34701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34701):map__34701);
var opts = map__34701__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34698){
var G__34699 = cljs.core.first.call(null,seq34698);
var seq34698__$1 = cljs.core.next.call(null,seq34698);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34699,seq34698__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args34706 = [];
var len__30779__auto___34756 = arguments.length;
var i__30780__auto___34757 = (0);
while(true){
if((i__30780__auto___34757 < len__30779__auto___34756)){
args34706.push((arguments[i__30780__auto___34757]));

var G__34758 = (i__30780__auto___34757 + (1));
i__30780__auto___34757 = G__34758;
continue;
} else {
}
break;
}

var G__34708 = args34706.length;
switch (G__34708) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34706.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34593__auto___34760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___34760){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___34760){
return (function (state_34732){
var state_val_34733 = (state_34732[(1)]);
if((state_val_34733 === (7))){
var inst_34728 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34734_34761 = state_34732__$1;
(statearr_34734_34761[(2)] = inst_34728);

(statearr_34734_34761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (1))){
var state_34732__$1 = state_34732;
var statearr_34735_34762 = state_34732__$1;
(statearr_34735_34762[(2)] = null);

(statearr_34735_34762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (4))){
var inst_34711 = (state_34732[(7)]);
var inst_34711__$1 = (state_34732[(2)]);
var inst_34712 = (inst_34711__$1 == null);
var state_34732__$1 = (function (){var statearr_34736 = state_34732;
(statearr_34736[(7)] = inst_34711__$1);

return statearr_34736;
})();
if(cljs.core.truth_(inst_34712)){
var statearr_34737_34763 = state_34732__$1;
(statearr_34737_34763[(1)] = (5));

} else {
var statearr_34738_34764 = state_34732__$1;
(statearr_34738_34764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (13))){
var state_34732__$1 = state_34732;
var statearr_34739_34765 = state_34732__$1;
(statearr_34739_34765[(2)] = null);

(statearr_34739_34765[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (6))){
var inst_34711 = (state_34732[(7)]);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34732__$1,(11),to,inst_34711);
} else {
if((state_val_34733 === (3))){
var inst_34730 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34732__$1,inst_34730);
} else {
if((state_val_34733 === (12))){
var state_34732__$1 = state_34732;
var statearr_34740_34766 = state_34732__$1;
(statearr_34740_34766[(2)] = null);

(statearr_34740_34766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (2))){
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(4),from);
} else {
if((state_val_34733 === (11))){
var inst_34721 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
if(cljs.core.truth_(inst_34721)){
var statearr_34741_34767 = state_34732__$1;
(statearr_34741_34767[(1)] = (12));

} else {
var statearr_34742_34768 = state_34732__$1;
(statearr_34742_34768[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (9))){
var state_34732__$1 = state_34732;
var statearr_34743_34769 = state_34732__$1;
(statearr_34743_34769[(2)] = null);

(statearr_34743_34769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (5))){
var state_34732__$1 = state_34732;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34744_34770 = state_34732__$1;
(statearr_34744_34770[(1)] = (8));

} else {
var statearr_34745_34771 = state_34732__$1;
(statearr_34745_34771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (14))){
var inst_34726 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34746_34772 = state_34732__$1;
(statearr_34746_34772[(2)] = inst_34726);

(statearr_34746_34772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (10))){
var inst_34718 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34747_34773 = state_34732__$1;
(statearr_34747_34773[(2)] = inst_34718);

(statearr_34747_34773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (8))){
var inst_34715 = cljs.core.async.close_BANG_.call(null,to);
var state_34732__$1 = state_34732;
var statearr_34748_34774 = state_34732__$1;
(statearr_34748_34774[(2)] = inst_34715);

(statearr_34748_34774[(1)] = (10));


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
});})(c__34593__auto___34760))
;
return ((function (switch__34481__auto__,c__34593__auto___34760){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_34752 = [null,null,null,null,null,null,null,null];
(statearr_34752[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_34752[(1)] = (1));

return statearr_34752;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_34732){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_34732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e34753){if((e34753 instanceof Object)){
var ex__34485__auto__ = e34753;
var statearr_34754_34775 = state_34732;
(statearr_34754_34775[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34776 = state_34732;
state_34732 = G__34776;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_34732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_34732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___34760))
})();
var state__34595__auto__ = (function (){var statearr_34755 = f__34594__auto__.call(null);
(statearr_34755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___34760);

return statearr_34755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___34760))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34960){
var vec__34961 = p__34960;
var v = cljs.core.nth.call(null,vec__34961,(0),null);
var p = cljs.core.nth.call(null,vec__34961,(1),null);
var job = vec__34961;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34593__auto___35143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___35143,res,vec__34961,v,p,job,jobs,results){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___35143,res,vec__34961,v,p,job,jobs,results){
return (function (state_34966){
var state_val_34967 = (state_34966[(1)]);
if((state_val_34967 === (1))){
var state_34966__$1 = state_34966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34966__$1,(2),res,v);
} else {
if((state_val_34967 === (2))){
var inst_34963 = (state_34966[(2)]);
var inst_34964 = cljs.core.async.close_BANG_.call(null,res);
var state_34966__$1 = (function (){var statearr_34968 = state_34966;
(statearr_34968[(7)] = inst_34963);

return statearr_34968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34966__$1,inst_34964);
} else {
return null;
}
}
});})(c__34593__auto___35143,res,vec__34961,v,p,job,jobs,results))
;
return ((function (switch__34481__auto__,c__34593__auto___35143,res,vec__34961,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0 = (function (){
var statearr_34972 = [null,null,null,null,null,null,null,null];
(statearr_34972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__);

(statearr_34972[(1)] = (1));

return statearr_34972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1 = (function (state_34966){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_34966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e34973){if((e34973 instanceof Object)){
var ex__34485__auto__ = e34973;
var statearr_34974_35144 = state_34966;
(statearr_34974_35144[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35145 = state_34966;
state_34966 = G__35145;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = function(state_34966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1.call(this,state_34966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___35143,res,vec__34961,v,p,job,jobs,results))
})();
var state__34595__auto__ = (function (){var statearr_34975 = f__34594__auto__.call(null);
(statearr_34975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___35143);

return statearr_34975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___35143,res,vec__34961,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34976){
var vec__34977 = p__34976;
var v = cljs.core.nth.call(null,vec__34977,(0),null);
var p = cljs.core.nth.call(null,vec__34977,(1),null);
var job = vec__34977;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__30624__auto___35146 = n;
var __35147 = (0);
while(true){
if((__35147 < n__30624__auto___35146)){
var G__34978_35148 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34978_35148) {
case "compute":
var c__34593__auto___35150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35147,c__34593__auto___35150,G__34978_35148,n__30624__auto___35146,jobs,results,process,async){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (__35147,c__34593__auto___35150,G__34978_35148,n__30624__auto___35146,jobs,results,process,async){
return (function (state_34991){
var state_val_34992 = (state_34991[(1)]);
if((state_val_34992 === (1))){
var state_34991__$1 = state_34991;
var statearr_34993_35151 = state_34991__$1;
(statearr_34993_35151[(2)] = null);

(statearr_34993_35151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (2))){
var state_34991__$1 = state_34991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34991__$1,(4),jobs);
} else {
if((state_val_34992 === (3))){
var inst_34989 = (state_34991[(2)]);
var state_34991__$1 = state_34991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34991__$1,inst_34989);
} else {
if((state_val_34992 === (4))){
var inst_34981 = (state_34991[(2)]);
var inst_34982 = process.call(null,inst_34981);
var state_34991__$1 = state_34991;
if(cljs.core.truth_(inst_34982)){
var statearr_34994_35152 = state_34991__$1;
(statearr_34994_35152[(1)] = (5));

} else {
var statearr_34995_35153 = state_34991__$1;
(statearr_34995_35153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (5))){
var state_34991__$1 = state_34991;
var statearr_34996_35154 = state_34991__$1;
(statearr_34996_35154[(2)] = null);

(statearr_34996_35154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (6))){
var state_34991__$1 = state_34991;
var statearr_34997_35155 = state_34991__$1;
(statearr_34997_35155[(2)] = null);

(statearr_34997_35155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34992 === (7))){
var inst_34987 = (state_34991[(2)]);
var state_34991__$1 = state_34991;
var statearr_34998_35156 = state_34991__$1;
(statearr_34998_35156[(2)] = inst_34987);

(statearr_34998_35156[(1)] = (3));


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
});})(__35147,c__34593__auto___35150,G__34978_35148,n__30624__auto___35146,jobs,results,process,async))
;
return ((function (__35147,switch__34481__auto__,c__34593__auto___35150,G__34978_35148,n__30624__auto___35146,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0 = (function (){
var statearr_35002 = [null,null,null,null,null,null,null];
(statearr_35002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__);

(statearr_35002[(1)] = (1));

return statearr_35002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1 = (function (state_34991){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_34991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35003){if((e35003 instanceof Object)){
var ex__34485__auto__ = e35003;
var statearr_35004_35157 = state_34991;
(statearr_35004_35157[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35158 = state_34991;
state_34991 = G__35158;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = function(state_34991){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1.call(this,state_34991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__;
})()
;})(__35147,switch__34481__auto__,c__34593__auto___35150,G__34978_35148,n__30624__auto___35146,jobs,results,process,async))
})();
var state__34595__auto__ = (function (){var statearr_35005 = f__34594__auto__.call(null);
(statearr_35005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___35150);

return statearr_35005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(__35147,c__34593__auto___35150,G__34978_35148,n__30624__auto___35146,jobs,results,process,async))
);


break;
case "async":
var c__34593__auto___35159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35147,c__34593__auto___35159,G__34978_35148,n__30624__auto___35146,jobs,results,process,async){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (__35147,c__34593__auto___35159,G__34978_35148,n__30624__auto___35146,jobs,results,process,async){
return (function (state_35018){
var state_val_35019 = (state_35018[(1)]);
if((state_val_35019 === (1))){
var state_35018__$1 = state_35018;
var statearr_35020_35160 = state_35018__$1;
(statearr_35020_35160[(2)] = null);

(statearr_35020_35160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (2))){
var state_35018__$1 = state_35018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35018__$1,(4),jobs);
} else {
if((state_val_35019 === (3))){
var inst_35016 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35018__$1,inst_35016);
} else {
if((state_val_35019 === (4))){
var inst_35008 = (state_35018[(2)]);
var inst_35009 = async.call(null,inst_35008);
var state_35018__$1 = state_35018;
if(cljs.core.truth_(inst_35009)){
var statearr_35021_35161 = state_35018__$1;
(statearr_35021_35161[(1)] = (5));

} else {
var statearr_35022_35162 = state_35018__$1;
(statearr_35022_35162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (5))){
var state_35018__$1 = state_35018;
var statearr_35023_35163 = state_35018__$1;
(statearr_35023_35163[(2)] = null);

(statearr_35023_35163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (6))){
var state_35018__$1 = state_35018;
var statearr_35024_35164 = state_35018__$1;
(statearr_35024_35164[(2)] = null);

(statearr_35024_35164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (7))){
var inst_35014 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35025_35165 = state_35018__$1;
(statearr_35025_35165[(2)] = inst_35014);

(statearr_35025_35165[(1)] = (3));


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
});})(__35147,c__34593__auto___35159,G__34978_35148,n__30624__auto___35146,jobs,results,process,async))
;
return ((function (__35147,switch__34481__auto__,c__34593__auto___35159,G__34978_35148,n__30624__auto___35146,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0 = (function (){
var statearr_35029 = [null,null,null,null,null,null,null];
(statearr_35029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__);

(statearr_35029[(1)] = (1));

return statearr_35029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1 = (function (state_35018){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35030){if((e35030 instanceof Object)){
var ex__34485__auto__ = e35030;
var statearr_35031_35166 = state_35018;
(statearr_35031_35166[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35167 = state_35018;
state_35018 = G__35167;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = function(state_35018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1.call(this,state_35018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__;
})()
;})(__35147,switch__34481__auto__,c__34593__auto___35159,G__34978_35148,n__30624__auto___35146,jobs,results,process,async))
})();
var state__34595__auto__ = (function (){var statearr_35032 = f__34594__auto__.call(null);
(statearr_35032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___35159);

return statearr_35032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(__35147,c__34593__auto___35159,G__34978_35148,n__30624__auto___35146,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__35168 = (__35147 + (1));
__35147 = G__35168;
continue;
} else {
}
break;
}

var c__34593__auto___35169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___35169,jobs,results,process,async){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___35169,jobs,results,process,async){
return (function (state_35054){
var state_val_35055 = (state_35054[(1)]);
if((state_val_35055 === (1))){
var state_35054__$1 = state_35054;
var statearr_35056_35170 = state_35054__$1;
(statearr_35056_35170[(2)] = null);

(statearr_35056_35170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (2))){
var state_35054__$1 = state_35054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35054__$1,(4),from);
} else {
if((state_val_35055 === (3))){
var inst_35052 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35054__$1,inst_35052);
} else {
if((state_val_35055 === (4))){
var inst_35035 = (state_35054[(7)]);
var inst_35035__$1 = (state_35054[(2)]);
var inst_35036 = (inst_35035__$1 == null);
var state_35054__$1 = (function (){var statearr_35057 = state_35054;
(statearr_35057[(7)] = inst_35035__$1);

return statearr_35057;
})();
if(cljs.core.truth_(inst_35036)){
var statearr_35058_35171 = state_35054__$1;
(statearr_35058_35171[(1)] = (5));

} else {
var statearr_35059_35172 = state_35054__$1;
(statearr_35059_35172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (5))){
var inst_35038 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35054__$1 = state_35054;
var statearr_35060_35173 = state_35054__$1;
(statearr_35060_35173[(2)] = inst_35038);

(statearr_35060_35173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (6))){
var inst_35040 = (state_35054[(8)]);
var inst_35035 = (state_35054[(7)]);
var inst_35040__$1 = cljs.core.async.chan.call(null,(1));
var inst_35041 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35042 = [inst_35035,inst_35040__$1];
var inst_35043 = (new cljs.core.PersistentVector(null,2,(5),inst_35041,inst_35042,null));
var state_35054__$1 = (function (){var statearr_35061 = state_35054;
(statearr_35061[(8)] = inst_35040__$1);

return statearr_35061;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35054__$1,(8),jobs,inst_35043);
} else {
if((state_val_35055 === (7))){
var inst_35050 = (state_35054[(2)]);
var state_35054__$1 = state_35054;
var statearr_35062_35174 = state_35054__$1;
(statearr_35062_35174[(2)] = inst_35050);

(statearr_35062_35174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35055 === (8))){
var inst_35040 = (state_35054[(8)]);
var inst_35045 = (state_35054[(2)]);
var state_35054__$1 = (function (){var statearr_35063 = state_35054;
(statearr_35063[(9)] = inst_35045);

return statearr_35063;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35054__$1,(9),results,inst_35040);
} else {
if((state_val_35055 === (9))){
var inst_35047 = (state_35054[(2)]);
var state_35054__$1 = (function (){var statearr_35064 = state_35054;
(statearr_35064[(10)] = inst_35047);

return statearr_35064;
})();
var statearr_35065_35175 = state_35054__$1;
(statearr_35065_35175[(2)] = null);

(statearr_35065_35175[(1)] = (2));


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
});})(c__34593__auto___35169,jobs,results,process,async))
;
return ((function (switch__34481__auto__,c__34593__auto___35169,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0 = (function (){
var statearr_35069 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__);

(statearr_35069[(1)] = (1));

return statearr_35069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1 = (function (state_35054){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35070){if((e35070 instanceof Object)){
var ex__34485__auto__ = e35070;
var statearr_35071_35176 = state_35054;
(statearr_35071_35176[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35177 = state_35054;
state_35054 = G__35177;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = function(state_35054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1.call(this,state_35054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___35169,jobs,results,process,async))
})();
var state__34595__auto__ = (function (){var statearr_35072 = f__34594__auto__.call(null);
(statearr_35072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___35169);

return statearr_35072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___35169,jobs,results,process,async))
);


var c__34593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto__,jobs,results,process,async){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto__,jobs,results,process,async){
return (function (state_35110){
var state_val_35111 = (state_35110[(1)]);
if((state_val_35111 === (7))){
var inst_35106 = (state_35110[(2)]);
var state_35110__$1 = state_35110;
var statearr_35112_35178 = state_35110__$1;
(statearr_35112_35178[(2)] = inst_35106);

(statearr_35112_35178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (20))){
var state_35110__$1 = state_35110;
var statearr_35113_35179 = state_35110__$1;
(statearr_35113_35179[(2)] = null);

(statearr_35113_35179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (1))){
var state_35110__$1 = state_35110;
var statearr_35114_35180 = state_35110__$1;
(statearr_35114_35180[(2)] = null);

(statearr_35114_35180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (4))){
var inst_35075 = (state_35110[(7)]);
var inst_35075__$1 = (state_35110[(2)]);
var inst_35076 = (inst_35075__$1 == null);
var state_35110__$1 = (function (){var statearr_35115 = state_35110;
(statearr_35115[(7)] = inst_35075__$1);

return statearr_35115;
})();
if(cljs.core.truth_(inst_35076)){
var statearr_35116_35181 = state_35110__$1;
(statearr_35116_35181[(1)] = (5));

} else {
var statearr_35117_35182 = state_35110__$1;
(statearr_35117_35182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (15))){
var inst_35088 = (state_35110[(8)]);
var state_35110__$1 = state_35110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35110__$1,(18),to,inst_35088);
} else {
if((state_val_35111 === (21))){
var inst_35101 = (state_35110[(2)]);
var state_35110__$1 = state_35110;
var statearr_35118_35183 = state_35110__$1;
(statearr_35118_35183[(2)] = inst_35101);

(statearr_35118_35183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (13))){
var inst_35103 = (state_35110[(2)]);
var state_35110__$1 = (function (){var statearr_35119 = state_35110;
(statearr_35119[(9)] = inst_35103);

return statearr_35119;
})();
var statearr_35120_35184 = state_35110__$1;
(statearr_35120_35184[(2)] = null);

(statearr_35120_35184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (6))){
var inst_35075 = (state_35110[(7)]);
var state_35110__$1 = state_35110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35110__$1,(11),inst_35075);
} else {
if((state_val_35111 === (17))){
var inst_35096 = (state_35110[(2)]);
var state_35110__$1 = state_35110;
if(cljs.core.truth_(inst_35096)){
var statearr_35121_35185 = state_35110__$1;
(statearr_35121_35185[(1)] = (19));

} else {
var statearr_35122_35186 = state_35110__$1;
(statearr_35122_35186[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (3))){
var inst_35108 = (state_35110[(2)]);
var state_35110__$1 = state_35110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35110__$1,inst_35108);
} else {
if((state_val_35111 === (12))){
var inst_35085 = (state_35110[(10)]);
var state_35110__$1 = state_35110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35110__$1,(14),inst_35085);
} else {
if((state_val_35111 === (2))){
var state_35110__$1 = state_35110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35110__$1,(4),results);
} else {
if((state_val_35111 === (19))){
var state_35110__$1 = state_35110;
var statearr_35123_35187 = state_35110__$1;
(statearr_35123_35187[(2)] = null);

(statearr_35123_35187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (11))){
var inst_35085 = (state_35110[(2)]);
var state_35110__$1 = (function (){var statearr_35124 = state_35110;
(statearr_35124[(10)] = inst_35085);

return statearr_35124;
})();
var statearr_35125_35188 = state_35110__$1;
(statearr_35125_35188[(2)] = null);

(statearr_35125_35188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (9))){
var state_35110__$1 = state_35110;
var statearr_35126_35189 = state_35110__$1;
(statearr_35126_35189[(2)] = null);

(statearr_35126_35189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (5))){
var state_35110__$1 = state_35110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35127_35190 = state_35110__$1;
(statearr_35127_35190[(1)] = (8));

} else {
var statearr_35128_35191 = state_35110__$1;
(statearr_35128_35191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (14))){
var inst_35090 = (state_35110[(11)]);
var inst_35088 = (state_35110[(8)]);
var inst_35088__$1 = (state_35110[(2)]);
var inst_35089 = (inst_35088__$1 == null);
var inst_35090__$1 = cljs.core.not.call(null,inst_35089);
var state_35110__$1 = (function (){var statearr_35129 = state_35110;
(statearr_35129[(11)] = inst_35090__$1);

(statearr_35129[(8)] = inst_35088__$1);

return statearr_35129;
})();
if(inst_35090__$1){
var statearr_35130_35192 = state_35110__$1;
(statearr_35130_35192[(1)] = (15));

} else {
var statearr_35131_35193 = state_35110__$1;
(statearr_35131_35193[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (16))){
var inst_35090 = (state_35110[(11)]);
var state_35110__$1 = state_35110;
var statearr_35132_35194 = state_35110__$1;
(statearr_35132_35194[(2)] = inst_35090);

(statearr_35132_35194[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (10))){
var inst_35082 = (state_35110[(2)]);
var state_35110__$1 = state_35110;
var statearr_35133_35195 = state_35110__$1;
(statearr_35133_35195[(2)] = inst_35082);

(statearr_35133_35195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (18))){
var inst_35093 = (state_35110[(2)]);
var state_35110__$1 = state_35110;
var statearr_35134_35196 = state_35110__$1;
(statearr_35134_35196[(2)] = inst_35093);

(statearr_35134_35196[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35111 === (8))){
var inst_35079 = cljs.core.async.close_BANG_.call(null,to);
var state_35110__$1 = state_35110;
var statearr_35135_35197 = state_35110__$1;
(statearr_35135_35197[(2)] = inst_35079);

(statearr_35135_35197[(1)] = (10));


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
}
}
}
}
});})(c__34593__auto__,jobs,results,process,async))
;
return ((function (switch__34481__auto__,c__34593__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0 = (function (){
var statearr_35139 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__);

(statearr_35139[(1)] = (1));

return statearr_35139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1 = (function (state_35110){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35140){if((e35140 instanceof Object)){
var ex__34485__auto__ = e35140;
var statearr_35141_35198 = state_35110;
(statearr_35141_35198[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35199 = state_35110;
state_35110 = G__35199;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = function(state_35110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1.call(this,state_35110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto__,jobs,results,process,async))
})();
var state__34595__auto__ = (function (){var statearr_35142 = f__34594__auto__.call(null);
(statearr_35142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto__);

return statearr_35142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto__,jobs,results,process,async))
);

return c__34593__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args35200 = [];
var len__30779__auto___35203 = arguments.length;
var i__30780__auto___35204 = (0);
while(true){
if((i__30780__auto___35204 < len__30779__auto___35203)){
args35200.push((arguments[i__30780__auto___35204]));

var G__35205 = (i__30780__auto___35204 + (1));
i__30780__auto___35204 = G__35205;
continue;
} else {
}
break;
}

var G__35202 = args35200.length;
switch (G__35202) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35200.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args35207 = [];
var len__30779__auto___35210 = arguments.length;
var i__30780__auto___35211 = (0);
while(true){
if((i__30780__auto___35211 < len__30779__auto___35210)){
args35207.push((arguments[i__30780__auto___35211]));

var G__35212 = (i__30780__auto___35211 + (1));
i__30780__auto___35211 = G__35212;
continue;
} else {
}
break;
}

var G__35209 = args35207.length;
switch (G__35209) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35207.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args35214 = [];
var len__30779__auto___35267 = arguments.length;
var i__30780__auto___35268 = (0);
while(true){
if((i__30780__auto___35268 < len__30779__auto___35267)){
args35214.push((arguments[i__30780__auto___35268]));

var G__35269 = (i__30780__auto___35268 + (1));
i__30780__auto___35268 = G__35269;
continue;
} else {
}
break;
}

var G__35216 = args35214.length;
switch (G__35216) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35214.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34593__auto___35271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___35271,tc,fc){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___35271,tc,fc){
return (function (state_35242){
var state_val_35243 = (state_35242[(1)]);
if((state_val_35243 === (7))){
var inst_35238 = (state_35242[(2)]);
var state_35242__$1 = state_35242;
var statearr_35244_35272 = state_35242__$1;
(statearr_35244_35272[(2)] = inst_35238);

(statearr_35244_35272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (1))){
var state_35242__$1 = state_35242;
var statearr_35245_35273 = state_35242__$1;
(statearr_35245_35273[(2)] = null);

(statearr_35245_35273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (4))){
var inst_35219 = (state_35242[(7)]);
var inst_35219__$1 = (state_35242[(2)]);
var inst_35220 = (inst_35219__$1 == null);
var state_35242__$1 = (function (){var statearr_35246 = state_35242;
(statearr_35246[(7)] = inst_35219__$1);

return statearr_35246;
})();
if(cljs.core.truth_(inst_35220)){
var statearr_35247_35274 = state_35242__$1;
(statearr_35247_35274[(1)] = (5));

} else {
var statearr_35248_35275 = state_35242__$1;
(statearr_35248_35275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (13))){
var state_35242__$1 = state_35242;
var statearr_35249_35276 = state_35242__$1;
(statearr_35249_35276[(2)] = null);

(statearr_35249_35276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (6))){
var inst_35219 = (state_35242[(7)]);
var inst_35225 = p.call(null,inst_35219);
var state_35242__$1 = state_35242;
if(cljs.core.truth_(inst_35225)){
var statearr_35250_35277 = state_35242__$1;
(statearr_35250_35277[(1)] = (9));

} else {
var statearr_35251_35278 = state_35242__$1;
(statearr_35251_35278[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (3))){
var inst_35240 = (state_35242[(2)]);
var state_35242__$1 = state_35242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35242__$1,inst_35240);
} else {
if((state_val_35243 === (12))){
var state_35242__$1 = state_35242;
var statearr_35252_35279 = state_35242__$1;
(statearr_35252_35279[(2)] = null);

(statearr_35252_35279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (2))){
var state_35242__$1 = state_35242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35242__$1,(4),ch);
} else {
if((state_val_35243 === (11))){
var inst_35219 = (state_35242[(7)]);
var inst_35229 = (state_35242[(2)]);
var state_35242__$1 = state_35242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35242__$1,(8),inst_35229,inst_35219);
} else {
if((state_val_35243 === (9))){
var state_35242__$1 = state_35242;
var statearr_35253_35280 = state_35242__$1;
(statearr_35253_35280[(2)] = tc);

(statearr_35253_35280[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (5))){
var inst_35222 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35223 = cljs.core.async.close_BANG_.call(null,fc);
var state_35242__$1 = (function (){var statearr_35254 = state_35242;
(statearr_35254[(8)] = inst_35222);

return statearr_35254;
})();
var statearr_35255_35281 = state_35242__$1;
(statearr_35255_35281[(2)] = inst_35223);

(statearr_35255_35281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (14))){
var inst_35236 = (state_35242[(2)]);
var state_35242__$1 = state_35242;
var statearr_35256_35282 = state_35242__$1;
(statearr_35256_35282[(2)] = inst_35236);

(statearr_35256_35282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (10))){
var state_35242__$1 = state_35242;
var statearr_35257_35283 = state_35242__$1;
(statearr_35257_35283[(2)] = fc);

(statearr_35257_35283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (8))){
var inst_35231 = (state_35242[(2)]);
var state_35242__$1 = state_35242;
if(cljs.core.truth_(inst_35231)){
var statearr_35258_35284 = state_35242__$1;
(statearr_35258_35284[(1)] = (12));

} else {
var statearr_35259_35285 = state_35242__$1;
(statearr_35259_35285[(1)] = (13));

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
});})(c__34593__auto___35271,tc,fc))
;
return ((function (switch__34481__auto__,c__34593__auto___35271,tc,fc){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_35263 = [null,null,null,null,null,null,null,null,null];
(statearr_35263[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_35263[(1)] = (1));

return statearr_35263;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_35242){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35264){if((e35264 instanceof Object)){
var ex__34485__auto__ = e35264;
var statearr_35265_35286 = state_35242;
(statearr_35265_35286[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35287 = state_35242;
state_35242 = G__35287;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_35242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_35242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___35271,tc,fc))
})();
var state__34595__auto__ = (function (){var statearr_35266 = f__34594__auto__.call(null);
(statearr_35266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___35271);

return statearr_35266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___35271,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto__){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto__){
return (function (state_35351){
var state_val_35352 = (state_35351[(1)]);
if((state_val_35352 === (7))){
var inst_35347 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
var statearr_35353_35374 = state_35351__$1;
(statearr_35353_35374[(2)] = inst_35347);

(statearr_35353_35374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (1))){
var inst_35331 = init;
var state_35351__$1 = (function (){var statearr_35354 = state_35351;
(statearr_35354[(7)] = inst_35331);

return statearr_35354;
})();
var statearr_35355_35375 = state_35351__$1;
(statearr_35355_35375[(2)] = null);

(statearr_35355_35375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (4))){
var inst_35334 = (state_35351[(8)]);
var inst_35334__$1 = (state_35351[(2)]);
var inst_35335 = (inst_35334__$1 == null);
var state_35351__$1 = (function (){var statearr_35356 = state_35351;
(statearr_35356[(8)] = inst_35334__$1);

return statearr_35356;
})();
if(cljs.core.truth_(inst_35335)){
var statearr_35357_35376 = state_35351__$1;
(statearr_35357_35376[(1)] = (5));

} else {
var statearr_35358_35377 = state_35351__$1;
(statearr_35358_35377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (6))){
var inst_35334 = (state_35351[(8)]);
var inst_35331 = (state_35351[(7)]);
var inst_35338 = (state_35351[(9)]);
var inst_35338__$1 = f.call(null,inst_35331,inst_35334);
var inst_35339 = cljs.core.reduced_QMARK_.call(null,inst_35338__$1);
var state_35351__$1 = (function (){var statearr_35359 = state_35351;
(statearr_35359[(9)] = inst_35338__$1);

return statearr_35359;
})();
if(inst_35339){
var statearr_35360_35378 = state_35351__$1;
(statearr_35360_35378[(1)] = (8));

} else {
var statearr_35361_35379 = state_35351__$1;
(statearr_35361_35379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (3))){
var inst_35349 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35351__$1,inst_35349);
} else {
if((state_val_35352 === (2))){
var state_35351__$1 = state_35351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35351__$1,(4),ch);
} else {
if((state_val_35352 === (9))){
var inst_35338 = (state_35351[(9)]);
var inst_35331 = inst_35338;
var state_35351__$1 = (function (){var statearr_35362 = state_35351;
(statearr_35362[(7)] = inst_35331);

return statearr_35362;
})();
var statearr_35363_35380 = state_35351__$1;
(statearr_35363_35380[(2)] = null);

(statearr_35363_35380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (5))){
var inst_35331 = (state_35351[(7)]);
var state_35351__$1 = state_35351;
var statearr_35364_35381 = state_35351__$1;
(statearr_35364_35381[(2)] = inst_35331);

(statearr_35364_35381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (10))){
var inst_35345 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
var statearr_35365_35382 = state_35351__$1;
(statearr_35365_35382[(2)] = inst_35345);

(statearr_35365_35382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (8))){
var inst_35338 = (state_35351[(9)]);
var inst_35341 = cljs.core.deref.call(null,inst_35338);
var state_35351__$1 = state_35351;
var statearr_35366_35383 = state_35351__$1;
(statearr_35366_35383[(2)] = inst_35341);

(statearr_35366_35383[(1)] = (10));


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
});})(c__34593__auto__))
;
return ((function (switch__34481__auto__,c__34593__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34482__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34482__auto____0 = (function (){
var statearr_35370 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35370[(0)] = cljs$core$async$reduce_$_state_machine__34482__auto__);

(statearr_35370[(1)] = (1));

return statearr_35370;
});
var cljs$core$async$reduce_$_state_machine__34482__auto____1 = (function (state_35351){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35371){if((e35371 instanceof Object)){
var ex__34485__auto__ = e35371;
var statearr_35372_35384 = state_35351;
(statearr_35372_35384[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35385 = state_35351;
state_35351 = G__35385;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34482__auto__ = function(state_35351){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34482__auto____1.call(this,state_35351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34482__auto____0;
cljs$core$async$reduce_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34482__auto____1;
return cljs$core$async$reduce_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto__))
})();
var state__34595__auto__ = (function (){var statearr_35373 = f__34594__auto__.call(null);
(statearr_35373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto__);

return statearr_35373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto__))
);

return c__34593__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args35386 = [];
var len__30779__auto___35438 = arguments.length;
var i__30780__auto___35439 = (0);
while(true){
if((i__30780__auto___35439 < len__30779__auto___35438)){
args35386.push((arguments[i__30780__auto___35439]));

var G__35440 = (i__30780__auto___35439 + (1));
i__30780__auto___35439 = G__35440;
continue;
} else {
}
break;
}

var G__35388 = args35386.length;
switch (G__35388) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35386.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto__){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto__){
return (function (state_35413){
var state_val_35414 = (state_35413[(1)]);
if((state_val_35414 === (7))){
var inst_35395 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35415_35442 = state_35413__$1;
(statearr_35415_35442[(2)] = inst_35395);

(statearr_35415_35442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (1))){
var inst_35389 = cljs.core.seq.call(null,coll);
var inst_35390 = inst_35389;
var state_35413__$1 = (function (){var statearr_35416 = state_35413;
(statearr_35416[(7)] = inst_35390);

return statearr_35416;
})();
var statearr_35417_35443 = state_35413__$1;
(statearr_35417_35443[(2)] = null);

(statearr_35417_35443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (4))){
var inst_35390 = (state_35413[(7)]);
var inst_35393 = cljs.core.first.call(null,inst_35390);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35413__$1,(7),ch,inst_35393);
} else {
if((state_val_35414 === (13))){
var inst_35407 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35418_35444 = state_35413__$1;
(statearr_35418_35444[(2)] = inst_35407);

(statearr_35418_35444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (6))){
var inst_35398 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
if(cljs.core.truth_(inst_35398)){
var statearr_35419_35445 = state_35413__$1;
(statearr_35419_35445[(1)] = (8));

} else {
var statearr_35420_35446 = state_35413__$1;
(statearr_35420_35446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (3))){
var inst_35411 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35413__$1,inst_35411);
} else {
if((state_val_35414 === (12))){
var state_35413__$1 = state_35413;
var statearr_35421_35447 = state_35413__$1;
(statearr_35421_35447[(2)] = null);

(statearr_35421_35447[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (2))){
var inst_35390 = (state_35413[(7)]);
var state_35413__$1 = state_35413;
if(cljs.core.truth_(inst_35390)){
var statearr_35422_35448 = state_35413__$1;
(statearr_35422_35448[(1)] = (4));

} else {
var statearr_35423_35449 = state_35413__$1;
(statearr_35423_35449[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (11))){
var inst_35404 = cljs.core.async.close_BANG_.call(null,ch);
var state_35413__$1 = state_35413;
var statearr_35424_35450 = state_35413__$1;
(statearr_35424_35450[(2)] = inst_35404);

(statearr_35424_35450[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (9))){
var state_35413__$1 = state_35413;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35425_35451 = state_35413__$1;
(statearr_35425_35451[(1)] = (11));

} else {
var statearr_35426_35452 = state_35413__$1;
(statearr_35426_35452[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (5))){
var inst_35390 = (state_35413[(7)]);
var state_35413__$1 = state_35413;
var statearr_35427_35453 = state_35413__$1;
(statearr_35427_35453[(2)] = inst_35390);

(statearr_35427_35453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (10))){
var inst_35409 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35428_35454 = state_35413__$1;
(statearr_35428_35454[(2)] = inst_35409);

(statearr_35428_35454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (8))){
var inst_35390 = (state_35413[(7)]);
var inst_35400 = cljs.core.next.call(null,inst_35390);
var inst_35390__$1 = inst_35400;
var state_35413__$1 = (function (){var statearr_35429 = state_35413;
(statearr_35429[(7)] = inst_35390__$1);

return statearr_35429;
})();
var statearr_35430_35455 = state_35413__$1;
(statearr_35430_35455[(2)] = null);

(statearr_35430_35455[(1)] = (2));


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
});})(c__34593__auto__))
;
return ((function (switch__34481__auto__,c__34593__auto__){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_35434 = [null,null,null,null,null,null,null,null];
(statearr_35434[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_35434[(1)] = (1));

return statearr_35434;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_35413){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35435){if((e35435 instanceof Object)){
var ex__34485__auto__ = e35435;
var statearr_35436_35456 = state_35413;
(statearr_35436_35456[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35457 = state_35413;
state_35413 = G__35457;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_35413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_35413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto__))
})();
var state__34595__auto__ = (function (){var statearr_35437 = f__34594__auto__.call(null);
(statearr_35437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto__);

return statearr_35437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto__))
);

return c__34593__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30375__auto__ = (((_ == null))?null:_);
var m__30376__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30375__auto__)]);
if(!((m__30376__auto__ == null))){
return m__30376__auto__.call(null,_);
} else {
var m__30376__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30376__auto____$1 == null))){
return m__30376__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30375__auto__ = (((m == null))?null:m);
var m__30376__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30375__auto__)]);
if(!((m__30376__auto__ == null))){
return m__30376__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30376__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30376__auto____$1 == null))){
return m__30376__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30375__auto__ = (((m == null))?null:m);
var m__30376__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30375__auto__)]);
if(!((m__30376__auto__ == null))){
return m__30376__auto__.call(null,m,ch);
} else {
var m__30376__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30376__auto____$1 == null))){
return m__30376__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30375__auto__ = (((m == null))?null:m);
var m__30376__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30375__auto__)]);
if(!((m__30376__auto__ == null))){
return m__30376__auto__.call(null,m);
} else {
var m__30376__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30376__auto____$1 == null))){
return m__30376__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35679 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35679 = (function (mult,ch,cs,meta35680){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta35680 = meta35680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35681,meta35680__$1){
var self__ = this;
var _35681__$1 = this;
return (new cljs.core.async.t_cljs$core$async35679(self__.mult,self__.ch,self__.cs,meta35680__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35681){
var self__ = this;
var _35681__$1 = this;
return self__.meta35680;
});})(cs))
;

cljs.core.async.t_cljs$core$async35679.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35679.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async35679.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35679.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35679.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35679.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35680","meta35680",-1575388967,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35679";

cljs.core.async.t_cljs$core$async35679.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30318__auto__,writer__30319__auto__,opt__30320__auto__){
return cljs.core._write.call(null,writer__30319__auto__,"cljs.core.async/t_cljs$core$async35679");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35679 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35679(mult__$1,ch__$1,cs__$1,meta35680){
return (new cljs.core.async.t_cljs$core$async35679(mult__$1,ch__$1,cs__$1,meta35680));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35679(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34593__auto___35900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___35900,cs,m,dchan,dctr,done){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___35900,cs,m,dchan,dctr,done){
return (function (state_35812){
var state_val_35813 = (state_35812[(1)]);
if((state_val_35813 === (7))){
var inst_35808 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35814_35901 = state_35812__$1;
(statearr_35814_35901[(2)] = inst_35808);

(statearr_35814_35901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (20))){
var inst_35713 = (state_35812[(7)]);
var inst_35723 = cljs.core.first.call(null,inst_35713);
var inst_35724 = cljs.core.nth.call(null,inst_35723,(0),null);
var inst_35725 = cljs.core.nth.call(null,inst_35723,(1),null);
var state_35812__$1 = (function (){var statearr_35815 = state_35812;
(statearr_35815[(8)] = inst_35724);

return statearr_35815;
})();
if(cljs.core.truth_(inst_35725)){
var statearr_35816_35902 = state_35812__$1;
(statearr_35816_35902[(1)] = (22));

} else {
var statearr_35817_35903 = state_35812__$1;
(statearr_35817_35903[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (27))){
var inst_35753 = (state_35812[(9)]);
var inst_35760 = (state_35812[(10)]);
var inst_35684 = (state_35812[(11)]);
var inst_35755 = (state_35812[(12)]);
var inst_35760__$1 = cljs.core._nth.call(null,inst_35753,inst_35755);
var inst_35761 = cljs.core.async.put_BANG_.call(null,inst_35760__$1,inst_35684,done);
var state_35812__$1 = (function (){var statearr_35818 = state_35812;
(statearr_35818[(10)] = inst_35760__$1);

return statearr_35818;
})();
if(cljs.core.truth_(inst_35761)){
var statearr_35819_35904 = state_35812__$1;
(statearr_35819_35904[(1)] = (30));

} else {
var statearr_35820_35905 = state_35812__$1;
(statearr_35820_35905[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (1))){
var state_35812__$1 = state_35812;
var statearr_35821_35906 = state_35812__$1;
(statearr_35821_35906[(2)] = null);

(statearr_35821_35906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (24))){
var inst_35713 = (state_35812[(7)]);
var inst_35730 = (state_35812[(2)]);
var inst_35731 = cljs.core.next.call(null,inst_35713);
var inst_35693 = inst_35731;
var inst_35694 = null;
var inst_35695 = (0);
var inst_35696 = (0);
var state_35812__$1 = (function (){var statearr_35822 = state_35812;
(statearr_35822[(13)] = inst_35730);

(statearr_35822[(14)] = inst_35694);

(statearr_35822[(15)] = inst_35695);

(statearr_35822[(16)] = inst_35693);

(statearr_35822[(17)] = inst_35696);

return statearr_35822;
})();
var statearr_35823_35907 = state_35812__$1;
(statearr_35823_35907[(2)] = null);

(statearr_35823_35907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (39))){
var state_35812__$1 = state_35812;
var statearr_35827_35908 = state_35812__$1;
(statearr_35827_35908[(2)] = null);

(statearr_35827_35908[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (4))){
var inst_35684 = (state_35812[(11)]);
var inst_35684__$1 = (state_35812[(2)]);
var inst_35685 = (inst_35684__$1 == null);
var state_35812__$1 = (function (){var statearr_35828 = state_35812;
(statearr_35828[(11)] = inst_35684__$1);

return statearr_35828;
})();
if(cljs.core.truth_(inst_35685)){
var statearr_35829_35909 = state_35812__$1;
(statearr_35829_35909[(1)] = (5));

} else {
var statearr_35830_35910 = state_35812__$1;
(statearr_35830_35910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (15))){
var inst_35694 = (state_35812[(14)]);
var inst_35695 = (state_35812[(15)]);
var inst_35693 = (state_35812[(16)]);
var inst_35696 = (state_35812[(17)]);
var inst_35709 = (state_35812[(2)]);
var inst_35710 = (inst_35696 + (1));
var tmp35824 = inst_35694;
var tmp35825 = inst_35695;
var tmp35826 = inst_35693;
var inst_35693__$1 = tmp35826;
var inst_35694__$1 = tmp35824;
var inst_35695__$1 = tmp35825;
var inst_35696__$1 = inst_35710;
var state_35812__$1 = (function (){var statearr_35831 = state_35812;
(statearr_35831[(14)] = inst_35694__$1);

(statearr_35831[(15)] = inst_35695__$1);

(statearr_35831[(16)] = inst_35693__$1);

(statearr_35831[(17)] = inst_35696__$1);

(statearr_35831[(18)] = inst_35709);

return statearr_35831;
})();
var statearr_35832_35911 = state_35812__$1;
(statearr_35832_35911[(2)] = null);

(statearr_35832_35911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (21))){
var inst_35734 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35836_35912 = state_35812__$1;
(statearr_35836_35912[(2)] = inst_35734);

(statearr_35836_35912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (31))){
var inst_35760 = (state_35812[(10)]);
var inst_35764 = done.call(null,null);
var inst_35765 = cljs.core.async.untap_STAR_.call(null,m,inst_35760);
var state_35812__$1 = (function (){var statearr_35837 = state_35812;
(statearr_35837[(19)] = inst_35764);

return statearr_35837;
})();
var statearr_35838_35913 = state_35812__$1;
(statearr_35838_35913[(2)] = inst_35765);

(statearr_35838_35913[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (32))){
var inst_35753 = (state_35812[(9)]);
var inst_35754 = (state_35812[(20)]);
var inst_35752 = (state_35812[(21)]);
var inst_35755 = (state_35812[(12)]);
var inst_35767 = (state_35812[(2)]);
var inst_35768 = (inst_35755 + (1));
var tmp35833 = inst_35753;
var tmp35834 = inst_35754;
var tmp35835 = inst_35752;
var inst_35752__$1 = tmp35835;
var inst_35753__$1 = tmp35833;
var inst_35754__$1 = tmp35834;
var inst_35755__$1 = inst_35768;
var state_35812__$1 = (function (){var statearr_35839 = state_35812;
(statearr_35839[(9)] = inst_35753__$1);

(statearr_35839[(22)] = inst_35767);

(statearr_35839[(20)] = inst_35754__$1);

(statearr_35839[(21)] = inst_35752__$1);

(statearr_35839[(12)] = inst_35755__$1);

return statearr_35839;
})();
var statearr_35840_35914 = state_35812__$1;
(statearr_35840_35914[(2)] = null);

(statearr_35840_35914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (40))){
var inst_35780 = (state_35812[(23)]);
var inst_35784 = done.call(null,null);
var inst_35785 = cljs.core.async.untap_STAR_.call(null,m,inst_35780);
var state_35812__$1 = (function (){var statearr_35841 = state_35812;
(statearr_35841[(24)] = inst_35784);

return statearr_35841;
})();
var statearr_35842_35915 = state_35812__$1;
(statearr_35842_35915[(2)] = inst_35785);

(statearr_35842_35915[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (33))){
var inst_35771 = (state_35812[(25)]);
var inst_35773 = cljs.core.chunked_seq_QMARK_.call(null,inst_35771);
var state_35812__$1 = state_35812;
if(inst_35773){
var statearr_35843_35916 = state_35812__$1;
(statearr_35843_35916[(1)] = (36));

} else {
var statearr_35844_35917 = state_35812__$1;
(statearr_35844_35917[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (13))){
var inst_35703 = (state_35812[(26)]);
var inst_35706 = cljs.core.async.close_BANG_.call(null,inst_35703);
var state_35812__$1 = state_35812;
var statearr_35845_35918 = state_35812__$1;
(statearr_35845_35918[(2)] = inst_35706);

(statearr_35845_35918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (22))){
var inst_35724 = (state_35812[(8)]);
var inst_35727 = cljs.core.async.close_BANG_.call(null,inst_35724);
var state_35812__$1 = state_35812;
var statearr_35846_35919 = state_35812__$1;
(statearr_35846_35919[(2)] = inst_35727);

(statearr_35846_35919[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (36))){
var inst_35771 = (state_35812[(25)]);
var inst_35775 = cljs.core.chunk_first.call(null,inst_35771);
var inst_35776 = cljs.core.chunk_rest.call(null,inst_35771);
var inst_35777 = cljs.core.count.call(null,inst_35775);
var inst_35752 = inst_35776;
var inst_35753 = inst_35775;
var inst_35754 = inst_35777;
var inst_35755 = (0);
var state_35812__$1 = (function (){var statearr_35847 = state_35812;
(statearr_35847[(9)] = inst_35753);

(statearr_35847[(20)] = inst_35754);

(statearr_35847[(21)] = inst_35752);

(statearr_35847[(12)] = inst_35755);

return statearr_35847;
})();
var statearr_35848_35920 = state_35812__$1;
(statearr_35848_35920[(2)] = null);

(statearr_35848_35920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (41))){
var inst_35771 = (state_35812[(25)]);
var inst_35787 = (state_35812[(2)]);
var inst_35788 = cljs.core.next.call(null,inst_35771);
var inst_35752 = inst_35788;
var inst_35753 = null;
var inst_35754 = (0);
var inst_35755 = (0);
var state_35812__$1 = (function (){var statearr_35849 = state_35812;
(statearr_35849[(9)] = inst_35753);

(statearr_35849[(20)] = inst_35754);

(statearr_35849[(27)] = inst_35787);

(statearr_35849[(21)] = inst_35752);

(statearr_35849[(12)] = inst_35755);

return statearr_35849;
})();
var statearr_35850_35921 = state_35812__$1;
(statearr_35850_35921[(2)] = null);

(statearr_35850_35921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (43))){
var state_35812__$1 = state_35812;
var statearr_35851_35922 = state_35812__$1;
(statearr_35851_35922[(2)] = null);

(statearr_35851_35922[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (29))){
var inst_35796 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35852_35923 = state_35812__$1;
(statearr_35852_35923[(2)] = inst_35796);

(statearr_35852_35923[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (44))){
var inst_35805 = (state_35812[(2)]);
var state_35812__$1 = (function (){var statearr_35853 = state_35812;
(statearr_35853[(28)] = inst_35805);

return statearr_35853;
})();
var statearr_35854_35924 = state_35812__$1;
(statearr_35854_35924[(2)] = null);

(statearr_35854_35924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (6))){
var inst_35744 = (state_35812[(29)]);
var inst_35743 = cljs.core.deref.call(null,cs);
var inst_35744__$1 = cljs.core.keys.call(null,inst_35743);
var inst_35745 = cljs.core.count.call(null,inst_35744__$1);
var inst_35746 = cljs.core.reset_BANG_.call(null,dctr,inst_35745);
var inst_35751 = cljs.core.seq.call(null,inst_35744__$1);
var inst_35752 = inst_35751;
var inst_35753 = null;
var inst_35754 = (0);
var inst_35755 = (0);
var state_35812__$1 = (function (){var statearr_35855 = state_35812;
(statearr_35855[(9)] = inst_35753);

(statearr_35855[(20)] = inst_35754);

(statearr_35855[(29)] = inst_35744__$1);

(statearr_35855[(21)] = inst_35752);

(statearr_35855[(12)] = inst_35755);

(statearr_35855[(30)] = inst_35746);

return statearr_35855;
})();
var statearr_35856_35925 = state_35812__$1;
(statearr_35856_35925[(2)] = null);

(statearr_35856_35925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (28))){
var inst_35771 = (state_35812[(25)]);
var inst_35752 = (state_35812[(21)]);
var inst_35771__$1 = cljs.core.seq.call(null,inst_35752);
var state_35812__$1 = (function (){var statearr_35857 = state_35812;
(statearr_35857[(25)] = inst_35771__$1);

return statearr_35857;
})();
if(inst_35771__$1){
var statearr_35858_35926 = state_35812__$1;
(statearr_35858_35926[(1)] = (33));

} else {
var statearr_35859_35927 = state_35812__$1;
(statearr_35859_35927[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (25))){
var inst_35754 = (state_35812[(20)]);
var inst_35755 = (state_35812[(12)]);
var inst_35757 = (inst_35755 < inst_35754);
var inst_35758 = inst_35757;
var state_35812__$1 = state_35812;
if(cljs.core.truth_(inst_35758)){
var statearr_35860_35928 = state_35812__$1;
(statearr_35860_35928[(1)] = (27));

} else {
var statearr_35861_35929 = state_35812__$1;
(statearr_35861_35929[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (34))){
var state_35812__$1 = state_35812;
var statearr_35862_35930 = state_35812__$1;
(statearr_35862_35930[(2)] = null);

(statearr_35862_35930[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (17))){
var state_35812__$1 = state_35812;
var statearr_35863_35931 = state_35812__$1;
(statearr_35863_35931[(2)] = null);

(statearr_35863_35931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (3))){
var inst_35810 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35812__$1,inst_35810);
} else {
if((state_val_35813 === (12))){
var inst_35739 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35864_35932 = state_35812__$1;
(statearr_35864_35932[(2)] = inst_35739);

(statearr_35864_35932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (2))){
var state_35812__$1 = state_35812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35812__$1,(4),ch);
} else {
if((state_val_35813 === (23))){
var state_35812__$1 = state_35812;
var statearr_35865_35933 = state_35812__$1;
(statearr_35865_35933[(2)] = null);

(statearr_35865_35933[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (35))){
var inst_35794 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35866_35934 = state_35812__$1;
(statearr_35866_35934[(2)] = inst_35794);

(statearr_35866_35934[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (19))){
var inst_35713 = (state_35812[(7)]);
var inst_35717 = cljs.core.chunk_first.call(null,inst_35713);
var inst_35718 = cljs.core.chunk_rest.call(null,inst_35713);
var inst_35719 = cljs.core.count.call(null,inst_35717);
var inst_35693 = inst_35718;
var inst_35694 = inst_35717;
var inst_35695 = inst_35719;
var inst_35696 = (0);
var state_35812__$1 = (function (){var statearr_35867 = state_35812;
(statearr_35867[(14)] = inst_35694);

(statearr_35867[(15)] = inst_35695);

(statearr_35867[(16)] = inst_35693);

(statearr_35867[(17)] = inst_35696);

return statearr_35867;
})();
var statearr_35868_35935 = state_35812__$1;
(statearr_35868_35935[(2)] = null);

(statearr_35868_35935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (11))){
var inst_35713 = (state_35812[(7)]);
var inst_35693 = (state_35812[(16)]);
var inst_35713__$1 = cljs.core.seq.call(null,inst_35693);
var state_35812__$1 = (function (){var statearr_35869 = state_35812;
(statearr_35869[(7)] = inst_35713__$1);

return statearr_35869;
})();
if(inst_35713__$1){
var statearr_35870_35936 = state_35812__$1;
(statearr_35870_35936[(1)] = (16));

} else {
var statearr_35871_35937 = state_35812__$1;
(statearr_35871_35937[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (9))){
var inst_35741 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35872_35938 = state_35812__$1;
(statearr_35872_35938[(2)] = inst_35741);

(statearr_35872_35938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (5))){
var inst_35691 = cljs.core.deref.call(null,cs);
var inst_35692 = cljs.core.seq.call(null,inst_35691);
var inst_35693 = inst_35692;
var inst_35694 = null;
var inst_35695 = (0);
var inst_35696 = (0);
var state_35812__$1 = (function (){var statearr_35873 = state_35812;
(statearr_35873[(14)] = inst_35694);

(statearr_35873[(15)] = inst_35695);

(statearr_35873[(16)] = inst_35693);

(statearr_35873[(17)] = inst_35696);

return statearr_35873;
})();
var statearr_35874_35939 = state_35812__$1;
(statearr_35874_35939[(2)] = null);

(statearr_35874_35939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (14))){
var state_35812__$1 = state_35812;
var statearr_35875_35940 = state_35812__$1;
(statearr_35875_35940[(2)] = null);

(statearr_35875_35940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (45))){
var inst_35802 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35876_35941 = state_35812__$1;
(statearr_35876_35941[(2)] = inst_35802);

(statearr_35876_35941[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (26))){
var inst_35744 = (state_35812[(29)]);
var inst_35798 = (state_35812[(2)]);
var inst_35799 = cljs.core.seq.call(null,inst_35744);
var state_35812__$1 = (function (){var statearr_35877 = state_35812;
(statearr_35877[(31)] = inst_35798);

return statearr_35877;
})();
if(inst_35799){
var statearr_35878_35942 = state_35812__$1;
(statearr_35878_35942[(1)] = (42));

} else {
var statearr_35879_35943 = state_35812__$1;
(statearr_35879_35943[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (16))){
var inst_35713 = (state_35812[(7)]);
var inst_35715 = cljs.core.chunked_seq_QMARK_.call(null,inst_35713);
var state_35812__$1 = state_35812;
if(inst_35715){
var statearr_35880_35944 = state_35812__$1;
(statearr_35880_35944[(1)] = (19));

} else {
var statearr_35881_35945 = state_35812__$1;
(statearr_35881_35945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (38))){
var inst_35791 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35882_35946 = state_35812__$1;
(statearr_35882_35946[(2)] = inst_35791);

(statearr_35882_35946[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (30))){
var state_35812__$1 = state_35812;
var statearr_35883_35947 = state_35812__$1;
(statearr_35883_35947[(2)] = null);

(statearr_35883_35947[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (10))){
var inst_35694 = (state_35812[(14)]);
var inst_35696 = (state_35812[(17)]);
var inst_35702 = cljs.core._nth.call(null,inst_35694,inst_35696);
var inst_35703 = cljs.core.nth.call(null,inst_35702,(0),null);
var inst_35704 = cljs.core.nth.call(null,inst_35702,(1),null);
var state_35812__$1 = (function (){var statearr_35884 = state_35812;
(statearr_35884[(26)] = inst_35703);

return statearr_35884;
})();
if(cljs.core.truth_(inst_35704)){
var statearr_35885_35948 = state_35812__$1;
(statearr_35885_35948[(1)] = (13));

} else {
var statearr_35886_35949 = state_35812__$1;
(statearr_35886_35949[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (18))){
var inst_35737 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35887_35950 = state_35812__$1;
(statearr_35887_35950[(2)] = inst_35737);

(statearr_35887_35950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (42))){
var state_35812__$1 = state_35812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35812__$1,(45),dchan);
} else {
if((state_val_35813 === (37))){
var inst_35771 = (state_35812[(25)]);
var inst_35684 = (state_35812[(11)]);
var inst_35780 = (state_35812[(23)]);
var inst_35780__$1 = cljs.core.first.call(null,inst_35771);
var inst_35781 = cljs.core.async.put_BANG_.call(null,inst_35780__$1,inst_35684,done);
var state_35812__$1 = (function (){var statearr_35888 = state_35812;
(statearr_35888[(23)] = inst_35780__$1);

return statearr_35888;
})();
if(cljs.core.truth_(inst_35781)){
var statearr_35889_35951 = state_35812__$1;
(statearr_35889_35951[(1)] = (39));

} else {
var statearr_35890_35952 = state_35812__$1;
(statearr_35890_35952[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (8))){
var inst_35695 = (state_35812[(15)]);
var inst_35696 = (state_35812[(17)]);
var inst_35698 = (inst_35696 < inst_35695);
var inst_35699 = inst_35698;
var state_35812__$1 = state_35812;
if(cljs.core.truth_(inst_35699)){
var statearr_35891_35953 = state_35812__$1;
(statearr_35891_35953[(1)] = (10));

} else {
var statearr_35892_35954 = state_35812__$1;
(statearr_35892_35954[(1)] = (11));

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
});})(c__34593__auto___35900,cs,m,dchan,dctr,done))
;
return ((function (switch__34481__auto__,c__34593__auto___35900,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34482__auto__ = null;
var cljs$core$async$mult_$_state_machine__34482__auto____0 = (function (){
var statearr_35896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35896[(0)] = cljs$core$async$mult_$_state_machine__34482__auto__);

(statearr_35896[(1)] = (1));

return statearr_35896;
});
var cljs$core$async$mult_$_state_machine__34482__auto____1 = (function (state_35812){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35897){if((e35897 instanceof Object)){
var ex__34485__auto__ = e35897;
var statearr_35898_35955 = state_35812;
(statearr_35898_35955[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35956 = state_35812;
state_35812 = G__35956;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34482__auto__ = function(state_35812){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34482__auto____1.call(this,state_35812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34482__auto____0;
cljs$core$async$mult_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34482__auto____1;
return cljs$core$async$mult_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___35900,cs,m,dchan,dctr,done))
})();
var state__34595__auto__ = (function (){var statearr_35899 = f__34594__auto__.call(null);
(statearr_35899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___35900);

return statearr_35899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___35900,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args35957 = [];
var len__30779__auto___35960 = arguments.length;
var i__30780__auto___35961 = (0);
while(true){
if((i__30780__auto___35961 < len__30779__auto___35960)){
args35957.push((arguments[i__30780__auto___35961]));

var G__35962 = (i__30780__auto___35961 + (1));
i__30780__auto___35961 = G__35962;
continue;
} else {
}
break;
}

var G__35959 = args35957.length;
switch (G__35959) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35957.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30375__auto__ = (((m == null))?null:m);
var m__30376__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30375__auto__)]);
if(!((m__30376__auto__ == null))){
return m__30376__auto__.call(null,m,ch);
} else {
var m__30376__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30376__auto____$1 == null))){
return m__30376__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30375__auto__ = (((m == null))?null:m);
var m__30376__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30375__auto__)]);
if(!((m__30376__auto__ == null))){
return m__30376__auto__.call(null,m,ch);
} else {
var m__30376__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30376__auto____$1 == null))){
return m__30376__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30375__auto__ = (((m == null))?null:m);
var m__30376__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30375__auto__)]);
if(!((m__30376__auto__ == null))){
return m__30376__auto__.call(null,m);
} else {
var m__30376__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30376__auto____$1 == null))){
return m__30376__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30375__auto__ = (((m == null))?null:m);
var m__30376__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30375__auto__)]);
if(!((m__30376__auto__ == null))){
return m__30376__auto__.call(null,m,state_map);
} else {
var m__30376__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30376__auto____$1 == null))){
return m__30376__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30375__auto__ = (((m == null))?null:m);
var m__30376__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30375__auto__)]);
if(!((m__30376__auto__ == null))){
return m__30376__auto__.call(null,m,mode);
} else {
var m__30376__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30376__auto____$1 == null))){
return m__30376__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__30786__auto__ = [];
var len__30779__auto___35974 = arguments.length;
var i__30780__auto___35975 = (0);
while(true){
if((i__30780__auto___35975 < len__30779__auto___35974)){
args__30786__auto__.push((arguments[i__30780__auto___35975]));

var G__35976 = (i__30780__auto___35975 + (1));
i__30780__auto___35975 = G__35976;
continue;
} else {
}
break;
}

var argseq__30787__auto__ = ((((3) < args__30786__auto__.length))?(new cljs.core.IndexedSeq(args__30786__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30787__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35968){
var map__35969 = p__35968;
var map__35969__$1 = ((((!((map__35969 == null)))?((((map__35969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35969):map__35969);
var opts = map__35969__$1;
var statearr_35971_35977 = state;
(statearr_35971_35977[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__35969,map__35969__$1,opts){
return (function (val){
var statearr_35972_35978 = state;
(statearr_35972_35978[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35969,map__35969__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_35973_35979 = state;
(statearr_35973_35979[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35964){
var G__35965 = cljs.core.first.call(null,seq35964);
var seq35964__$1 = cljs.core.next.call(null,seq35964);
var G__35966 = cljs.core.first.call(null,seq35964__$1);
var seq35964__$2 = cljs.core.next.call(null,seq35964__$1);
var G__35967 = cljs.core.first.call(null,seq35964__$2);
var seq35964__$3 = cljs.core.next.call(null,seq35964__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35965,G__35966,G__35967,seq35964__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36143 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36144){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36144 = meta36144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36145,meta36144__$1){
var self__ = this;
var _36145__$1 = this;
return (new cljs.core.async.t_cljs$core$async36143(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36144__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36145){
var self__ = this;
var _36145__$1 = this;
return self__.meta36144;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36144","meta36144",1243269825,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36143";

cljs.core.async.t_cljs$core$async36143.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30318__auto__,writer__30319__auto__,opt__30320__auto__){
return cljs.core._write.call(null,writer__30319__auto__,"cljs.core.async/t_cljs$core$async36143");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36143 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36143(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36144){
return (new cljs.core.async.t_cljs$core$async36143(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36144));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36143(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34593__auto___36306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___36306,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___36306,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36243){
var state_val_36244 = (state_36243[(1)]);
if((state_val_36244 === (7))){
var inst_36161 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36245_36307 = state_36243__$1;
(statearr_36245_36307[(2)] = inst_36161);

(statearr_36245_36307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (20))){
var inst_36173 = (state_36243[(7)]);
var state_36243__$1 = state_36243;
var statearr_36246_36308 = state_36243__$1;
(statearr_36246_36308[(2)] = inst_36173);

(statearr_36246_36308[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (27))){
var state_36243__$1 = state_36243;
var statearr_36247_36309 = state_36243__$1;
(statearr_36247_36309[(2)] = null);

(statearr_36247_36309[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (1))){
var inst_36149 = (state_36243[(8)]);
var inst_36149__$1 = calc_state.call(null);
var inst_36151 = (inst_36149__$1 == null);
var inst_36152 = cljs.core.not.call(null,inst_36151);
var state_36243__$1 = (function (){var statearr_36248 = state_36243;
(statearr_36248[(8)] = inst_36149__$1);

return statearr_36248;
})();
if(inst_36152){
var statearr_36249_36310 = state_36243__$1;
(statearr_36249_36310[(1)] = (2));

} else {
var statearr_36250_36311 = state_36243__$1;
(statearr_36250_36311[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (24))){
var inst_36217 = (state_36243[(9)]);
var inst_36196 = (state_36243[(10)]);
var inst_36203 = (state_36243[(11)]);
var inst_36217__$1 = inst_36196.call(null,inst_36203);
var state_36243__$1 = (function (){var statearr_36251 = state_36243;
(statearr_36251[(9)] = inst_36217__$1);

return statearr_36251;
})();
if(cljs.core.truth_(inst_36217__$1)){
var statearr_36252_36312 = state_36243__$1;
(statearr_36252_36312[(1)] = (29));

} else {
var statearr_36253_36313 = state_36243__$1;
(statearr_36253_36313[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (4))){
var inst_36164 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36164)){
var statearr_36254_36314 = state_36243__$1;
(statearr_36254_36314[(1)] = (8));

} else {
var statearr_36255_36315 = state_36243__$1;
(statearr_36255_36315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (15))){
var inst_36190 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36190)){
var statearr_36256_36316 = state_36243__$1;
(statearr_36256_36316[(1)] = (19));

} else {
var statearr_36257_36317 = state_36243__$1;
(statearr_36257_36317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (21))){
var inst_36195 = (state_36243[(12)]);
var inst_36195__$1 = (state_36243[(2)]);
var inst_36196 = cljs.core.get.call(null,inst_36195__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36197 = cljs.core.get.call(null,inst_36195__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36198 = cljs.core.get.call(null,inst_36195__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36243__$1 = (function (){var statearr_36258 = state_36243;
(statearr_36258[(10)] = inst_36196);

(statearr_36258[(12)] = inst_36195__$1);

(statearr_36258[(13)] = inst_36197);

return statearr_36258;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36243__$1,(22),inst_36198);
} else {
if((state_val_36244 === (31))){
var inst_36225 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36225)){
var statearr_36259_36318 = state_36243__$1;
(statearr_36259_36318[(1)] = (32));

} else {
var statearr_36260_36319 = state_36243__$1;
(statearr_36260_36319[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (32))){
var inst_36202 = (state_36243[(14)]);
var state_36243__$1 = state_36243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36243__$1,(35),out,inst_36202);
} else {
if((state_val_36244 === (33))){
var inst_36195 = (state_36243[(12)]);
var inst_36173 = inst_36195;
var state_36243__$1 = (function (){var statearr_36261 = state_36243;
(statearr_36261[(7)] = inst_36173);

return statearr_36261;
})();
var statearr_36262_36320 = state_36243__$1;
(statearr_36262_36320[(2)] = null);

(statearr_36262_36320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (13))){
var inst_36173 = (state_36243[(7)]);
var inst_36180 = inst_36173.cljs$lang$protocol_mask$partition0$;
var inst_36181 = (inst_36180 & (64));
var inst_36182 = inst_36173.cljs$core$ISeq$;
var inst_36183 = (inst_36181) || (inst_36182);
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36183)){
var statearr_36263_36321 = state_36243__$1;
(statearr_36263_36321[(1)] = (16));

} else {
var statearr_36264_36322 = state_36243__$1;
(statearr_36264_36322[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (22))){
var inst_36203 = (state_36243[(11)]);
var inst_36202 = (state_36243[(14)]);
var inst_36201 = (state_36243[(2)]);
var inst_36202__$1 = cljs.core.nth.call(null,inst_36201,(0),null);
var inst_36203__$1 = cljs.core.nth.call(null,inst_36201,(1),null);
var inst_36204 = (inst_36202__$1 == null);
var inst_36205 = cljs.core._EQ_.call(null,inst_36203__$1,change);
var inst_36206 = (inst_36204) || (inst_36205);
var state_36243__$1 = (function (){var statearr_36265 = state_36243;
(statearr_36265[(11)] = inst_36203__$1);

(statearr_36265[(14)] = inst_36202__$1);

return statearr_36265;
})();
if(cljs.core.truth_(inst_36206)){
var statearr_36266_36323 = state_36243__$1;
(statearr_36266_36323[(1)] = (23));

} else {
var statearr_36267_36324 = state_36243__$1;
(statearr_36267_36324[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (36))){
var inst_36195 = (state_36243[(12)]);
var inst_36173 = inst_36195;
var state_36243__$1 = (function (){var statearr_36268 = state_36243;
(statearr_36268[(7)] = inst_36173);

return statearr_36268;
})();
var statearr_36269_36325 = state_36243__$1;
(statearr_36269_36325[(2)] = null);

(statearr_36269_36325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (29))){
var inst_36217 = (state_36243[(9)]);
var state_36243__$1 = state_36243;
var statearr_36270_36326 = state_36243__$1;
(statearr_36270_36326[(2)] = inst_36217);

(statearr_36270_36326[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (6))){
var state_36243__$1 = state_36243;
var statearr_36271_36327 = state_36243__$1;
(statearr_36271_36327[(2)] = false);

(statearr_36271_36327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (28))){
var inst_36213 = (state_36243[(2)]);
var inst_36214 = calc_state.call(null);
var inst_36173 = inst_36214;
var state_36243__$1 = (function (){var statearr_36272 = state_36243;
(statearr_36272[(7)] = inst_36173);

(statearr_36272[(15)] = inst_36213);

return statearr_36272;
})();
var statearr_36273_36328 = state_36243__$1;
(statearr_36273_36328[(2)] = null);

(statearr_36273_36328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (25))){
var inst_36239 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36274_36329 = state_36243__$1;
(statearr_36274_36329[(2)] = inst_36239);

(statearr_36274_36329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (34))){
var inst_36237 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36275_36330 = state_36243__$1;
(statearr_36275_36330[(2)] = inst_36237);

(statearr_36275_36330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (17))){
var state_36243__$1 = state_36243;
var statearr_36276_36331 = state_36243__$1;
(statearr_36276_36331[(2)] = false);

(statearr_36276_36331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (3))){
var state_36243__$1 = state_36243;
var statearr_36277_36332 = state_36243__$1;
(statearr_36277_36332[(2)] = false);

(statearr_36277_36332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (12))){
var inst_36241 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36243__$1,inst_36241);
} else {
if((state_val_36244 === (2))){
var inst_36149 = (state_36243[(8)]);
var inst_36154 = inst_36149.cljs$lang$protocol_mask$partition0$;
var inst_36155 = (inst_36154 & (64));
var inst_36156 = inst_36149.cljs$core$ISeq$;
var inst_36157 = (inst_36155) || (inst_36156);
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36157)){
var statearr_36278_36333 = state_36243__$1;
(statearr_36278_36333[(1)] = (5));

} else {
var statearr_36279_36334 = state_36243__$1;
(statearr_36279_36334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (23))){
var inst_36202 = (state_36243[(14)]);
var inst_36208 = (inst_36202 == null);
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36208)){
var statearr_36280_36335 = state_36243__$1;
(statearr_36280_36335[(1)] = (26));

} else {
var statearr_36281_36336 = state_36243__$1;
(statearr_36281_36336[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (35))){
var inst_36228 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
if(cljs.core.truth_(inst_36228)){
var statearr_36282_36337 = state_36243__$1;
(statearr_36282_36337[(1)] = (36));

} else {
var statearr_36283_36338 = state_36243__$1;
(statearr_36283_36338[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (19))){
var inst_36173 = (state_36243[(7)]);
var inst_36192 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36173);
var state_36243__$1 = state_36243;
var statearr_36284_36339 = state_36243__$1;
(statearr_36284_36339[(2)] = inst_36192);

(statearr_36284_36339[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (11))){
var inst_36173 = (state_36243[(7)]);
var inst_36177 = (inst_36173 == null);
var inst_36178 = cljs.core.not.call(null,inst_36177);
var state_36243__$1 = state_36243;
if(inst_36178){
var statearr_36285_36340 = state_36243__$1;
(statearr_36285_36340[(1)] = (13));

} else {
var statearr_36286_36341 = state_36243__$1;
(statearr_36286_36341[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (9))){
var inst_36149 = (state_36243[(8)]);
var state_36243__$1 = state_36243;
var statearr_36287_36342 = state_36243__$1;
(statearr_36287_36342[(2)] = inst_36149);

(statearr_36287_36342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (5))){
var state_36243__$1 = state_36243;
var statearr_36288_36343 = state_36243__$1;
(statearr_36288_36343[(2)] = true);

(statearr_36288_36343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (14))){
var state_36243__$1 = state_36243;
var statearr_36289_36344 = state_36243__$1;
(statearr_36289_36344[(2)] = false);

(statearr_36289_36344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (26))){
var inst_36203 = (state_36243[(11)]);
var inst_36210 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36203);
var state_36243__$1 = state_36243;
var statearr_36290_36345 = state_36243__$1;
(statearr_36290_36345[(2)] = inst_36210);

(statearr_36290_36345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (16))){
var state_36243__$1 = state_36243;
var statearr_36291_36346 = state_36243__$1;
(statearr_36291_36346[(2)] = true);

(statearr_36291_36346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (38))){
var inst_36233 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36292_36347 = state_36243__$1;
(statearr_36292_36347[(2)] = inst_36233);

(statearr_36292_36347[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (30))){
var inst_36196 = (state_36243[(10)]);
var inst_36203 = (state_36243[(11)]);
var inst_36197 = (state_36243[(13)]);
var inst_36220 = cljs.core.empty_QMARK_.call(null,inst_36196);
var inst_36221 = inst_36197.call(null,inst_36203);
var inst_36222 = cljs.core.not.call(null,inst_36221);
var inst_36223 = (inst_36220) && (inst_36222);
var state_36243__$1 = state_36243;
var statearr_36293_36348 = state_36243__$1;
(statearr_36293_36348[(2)] = inst_36223);

(statearr_36293_36348[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (10))){
var inst_36149 = (state_36243[(8)]);
var inst_36169 = (state_36243[(2)]);
var inst_36170 = cljs.core.get.call(null,inst_36169,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36171 = cljs.core.get.call(null,inst_36169,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36172 = cljs.core.get.call(null,inst_36169,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36173 = inst_36149;
var state_36243__$1 = (function (){var statearr_36294 = state_36243;
(statearr_36294[(7)] = inst_36173);

(statearr_36294[(16)] = inst_36172);

(statearr_36294[(17)] = inst_36171);

(statearr_36294[(18)] = inst_36170);

return statearr_36294;
})();
var statearr_36295_36349 = state_36243__$1;
(statearr_36295_36349[(2)] = null);

(statearr_36295_36349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (18))){
var inst_36187 = (state_36243[(2)]);
var state_36243__$1 = state_36243;
var statearr_36296_36350 = state_36243__$1;
(statearr_36296_36350[(2)] = inst_36187);

(statearr_36296_36350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (37))){
var state_36243__$1 = state_36243;
var statearr_36297_36351 = state_36243__$1;
(statearr_36297_36351[(2)] = null);

(statearr_36297_36351[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36244 === (8))){
var inst_36149 = (state_36243[(8)]);
var inst_36166 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36149);
var state_36243__$1 = state_36243;
var statearr_36298_36352 = state_36243__$1;
(statearr_36298_36352[(2)] = inst_36166);

(statearr_36298_36352[(1)] = (10));


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
});})(c__34593__auto___36306,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34481__auto__,c__34593__auto___36306,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34482__auto__ = null;
var cljs$core$async$mix_$_state_machine__34482__auto____0 = (function (){
var statearr_36302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36302[(0)] = cljs$core$async$mix_$_state_machine__34482__auto__);

(statearr_36302[(1)] = (1));

return statearr_36302;
});
var cljs$core$async$mix_$_state_machine__34482__auto____1 = (function (state_36243){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_36243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e36303){if((e36303 instanceof Object)){
var ex__34485__auto__ = e36303;
var statearr_36304_36353 = state_36243;
(statearr_36304_36353[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36354 = state_36243;
state_36243 = G__36354;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34482__auto__ = function(state_36243){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34482__auto____1.call(this,state_36243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34482__auto____0;
cljs$core$async$mix_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34482__auto____1;
return cljs$core$async$mix_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___36306,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34595__auto__ = (function (){var statearr_36305 = f__34594__auto__.call(null);
(statearr_36305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___36306);

return statearr_36305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___36306,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30375__auto__ = (((p == null))?null:p);
var m__30376__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30375__auto__)]);
if(!((m__30376__auto__ == null))){
return m__30376__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30376__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30376__auto____$1 == null))){
return m__30376__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30375__auto__ = (((p == null))?null:p);
var m__30376__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30375__auto__)]);
if(!((m__30376__auto__ == null))){
return m__30376__auto__.call(null,p,v,ch);
} else {
var m__30376__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30376__auto____$1 == null))){
return m__30376__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args36355 = [];
var len__30779__auto___36358 = arguments.length;
var i__30780__auto___36359 = (0);
while(true){
if((i__30780__auto___36359 < len__30779__auto___36358)){
args36355.push((arguments[i__30780__auto___36359]));

var G__36360 = (i__30780__auto___36359 + (1));
i__30780__auto___36359 = G__36360;
continue;
} else {
}
break;
}

var G__36357 = args36355.length;
switch (G__36357) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36355.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30375__auto__ = (((p == null))?null:p);
var m__30376__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30375__auto__)]);
if(!((m__30376__auto__ == null))){
return m__30376__auto__.call(null,p);
} else {
var m__30376__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30376__auto____$1 == null))){
return m__30376__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30375__auto__ = (((p == null))?null:p);
var m__30376__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30375__auto__)]);
if(!((m__30376__auto__ == null))){
return m__30376__auto__.call(null,p,v);
} else {
var m__30376__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30376__auto____$1 == null))){
return m__30376__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args36363 = [];
var len__30779__auto___36488 = arguments.length;
var i__30780__auto___36489 = (0);
while(true){
if((i__30780__auto___36489 < len__30779__auto___36488)){
args36363.push((arguments[i__30780__auto___36489]));

var G__36490 = (i__30780__auto___36489 + (1));
i__30780__auto___36489 = G__36490;
continue;
} else {
}
break;
}

var G__36365 = args36363.length;
switch (G__36365) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36363.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__29720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__29720__auto__)){
return or__29720__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__29720__auto__,mults){
return (function (p1__36362_SHARP_){
if(cljs.core.truth_(p1__36362_SHARP_.call(null,topic))){
return p1__36362_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36362_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__29720__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36366 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36367){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36367 = meta36367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36368,meta36367__$1){
var self__ = this;
var _36368__$1 = this;
return (new cljs.core.async.t_cljs$core$async36366(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36367__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36368){
var self__ = this;
var _36368__$1 = this;
return self__.meta36367;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36366.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36367","meta36367",982316004,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36366";

cljs.core.async.t_cljs$core$async36366.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30318__auto__,writer__30319__auto__,opt__30320__auto__){
return cljs.core._write.call(null,writer__30319__auto__,"cljs.core.async/t_cljs$core$async36366");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36366 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36366(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36367){
return (new cljs.core.async.t_cljs$core$async36366(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36367));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36366(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34593__auto___36492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___36492,mults,ensure_mult,p){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___36492,mults,ensure_mult,p){
return (function (state_36440){
var state_val_36441 = (state_36440[(1)]);
if((state_val_36441 === (7))){
var inst_36436 = (state_36440[(2)]);
var state_36440__$1 = state_36440;
var statearr_36442_36493 = state_36440__$1;
(statearr_36442_36493[(2)] = inst_36436);

(statearr_36442_36493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (20))){
var state_36440__$1 = state_36440;
var statearr_36443_36494 = state_36440__$1;
(statearr_36443_36494[(2)] = null);

(statearr_36443_36494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (1))){
var state_36440__$1 = state_36440;
var statearr_36444_36495 = state_36440__$1;
(statearr_36444_36495[(2)] = null);

(statearr_36444_36495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (24))){
var inst_36419 = (state_36440[(7)]);
var inst_36428 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36419);
var state_36440__$1 = state_36440;
var statearr_36445_36496 = state_36440__$1;
(statearr_36445_36496[(2)] = inst_36428);

(statearr_36445_36496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (4))){
var inst_36371 = (state_36440[(8)]);
var inst_36371__$1 = (state_36440[(2)]);
var inst_36372 = (inst_36371__$1 == null);
var state_36440__$1 = (function (){var statearr_36446 = state_36440;
(statearr_36446[(8)] = inst_36371__$1);

return statearr_36446;
})();
if(cljs.core.truth_(inst_36372)){
var statearr_36447_36497 = state_36440__$1;
(statearr_36447_36497[(1)] = (5));

} else {
var statearr_36448_36498 = state_36440__$1;
(statearr_36448_36498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (15))){
var inst_36413 = (state_36440[(2)]);
var state_36440__$1 = state_36440;
var statearr_36449_36499 = state_36440__$1;
(statearr_36449_36499[(2)] = inst_36413);

(statearr_36449_36499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (21))){
var inst_36433 = (state_36440[(2)]);
var state_36440__$1 = (function (){var statearr_36450 = state_36440;
(statearr_36450[(9)] = inst_36433);

return statearr_36450;
})();
var statearr_36451_36500 = state_36440__$1;
(statearr_36451_36500[(2)] = null);

(statearr_36451_36500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (13))){
var inst_36395 = (state_36440[(10)]);
var inst_36397 = cljs.core.chunked_seq_QMARK_.call(null,inst_36395);
var state_36440__$1 = state_36440;
if(inst_36397){
var statearr_36452_36501 = state_36440__$1;
(statearr_36452_36501[(1)] = (16));

} else {
var statearr_36453_36502 = state_36440__$1;
(statearr_36453_36502[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (22))){
var inst_36425 = (state_36440[(2)]);
var state_36440__$1 = state_36440;
if(cljs.core.truth_(inst_36425)){
var statearr_36454_36503 = state_36440__$1;
(statearr_36454_36503[(1)] = (23));

} else {
var statearr_36455_36504 = state_36440__$1;
(statearr_36455_36504[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (6))){
var inst_36371 = (state_36440[(8)]);
var inst_36421 = (state_36440[(11)]);
var inst_36419 = (state_36440[(7)]);
var inst_36419__$1 = topic_fn.call(null,inst_36371);
var inst_36420 = cljs.core.deref.call(null,mults);
var inst_36421__$1 = cljs.core.get.call(null,inst_36420,inst_36419__$1);
var state_36440__$1 = (function (){var statearr_36456 = state_36440;
(statearr_36456[(11)] = inst_36421__$1);

(statearr_36456[(7)] = inst_36419__$1);

return statearr_36456;
})();
if(cljs.core.truth_(inst_36421__$1)){
var statearr_36457_36505 = state_36440__$1;
(statearr_36457_36505[(1)] = (19));

} else {
var statearr_36458_36506 = state_36440__$1;
(statearr_36458_36506[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (25))){
var inst_36430 = (state_36440[(2)]);
var state_36440__$1 = state_36440;
var statearr_36459_36507 = state_36440__$1;
(statearr_36459_36507[(2)] = inst_36430);

(statearr_36459_36507[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (17))){
var inst_36395 = (state_36440[(10)]);
var inst_36404 = cljs.core.first.call(null,inst_36395);
var inst_36405 = cljs.core.async.muxch_STAR_.call(null,inst_36404);
var inst_36406 = cljs.core.async.close_BANG_.call(null,inst_36405);
var inst_36407 = cljs.core.next.call(null,inst_36395);
var inst_36381 = inst_36407;
var inst_36382 = null;
var inst_36383 = (0);
var inst_36384 = (0);
var state_36440__$1 = (function (){var statearr_36460 = state_36440;
(statearr_36460[(12)] = inst_36382);

(statearr_36460[(13)] = inst_36384);

(statearr_36460[(14)] = inst_36381);

(statearr_36460[(15)] = inst_36406);

(statearr_36460[(16)] = inst_36383);

return statearr_36460;
})();
var statearr_36461_36508 = state_36440__$1;
(statearr_36461_36508[(2)] = null);

(statearr_36461_36508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (3))){
var inst_36438 = (state_36440[(2)]);
var state_36440__$1 = state_36440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36440__$1,inst_36438);
} else {
if((state_val_36441 === (12))){
var inst_36415 = (state_36440[(2)]);
var state_36440__$1 = state_36440;
var statearr_36462_36509 = state_36440__$1;
(statearr_36462_36509[(2)] = inst_36415);

(statearr_36462_36509[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (2))){
var state_36440__$1 = state_36440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36440__$1,(4),ch);
} else {
if((state_val_36441 === (23))){
var state_36440__$1 = state_36440;
var statearr_36463_36510 = state_36440__$1;
(statearr_36463_36510[(2)] = null);

(statearr_36463_36510[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (19))){
var inst_36371 = (state_36440[(8)]);
var inst_36421 = (state_36440[(11)]);
var inst_36423 = cljs.core.async.muxch_STAR_.call(null,inst_36421);
var state_36440__$1 = state_36440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36440__$1,(22),inst_36423,inst_36371);
} else {
if((state_val_36441 === (11))){
var inst_36395 = (state_36440[(10)]);
var inst_36381 = (state_36440[(14)]);
var inst_36395__$1 = cljs.core.seq.call(null,inst_36381);
var state_36440__$1 = (function (){var statearr_36464 = state_36440;
(statearr_36464[(10)] = inst_36395__$1);

return statearr_36464;
})();
if(inst_36395__$1){
var statearr_36465_36511 = state_36440__$1;
(statearr_36465_36511[(1)] = (13));

} else {
var statearr_36466_36512 = state_36440__$1;
(statearr_36466_36512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (9))){
var inst_36417 = (state_36440[(2)]);
var state_36440__$1 = state_36440;
var statearr_36467_36513 = state_36440__$1;
(statearr_36467_36513[(2)] = inst_36417);

(statearr_36467_36513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (5))){
var inst_36378 = cljs.core.deref.call(null,mults);
var inst_36379 = cljs.core.vals.call(null,inst_36378);
var inst_36380 = cljs.core.seq.call(null,inst_36379);
var inst_36381 = inst_36380;
var inst_36382 = null;
var inst_36383 = (0);
var inst_36384 = (0);
var state_36440__$1 = (function (){var statearr_36468 = state_36440;
(statearr_36468[(12)] = inst_36382);

(statearr_36468[(13)] = inst_36384);

(statearr_36468[(14)] = inst_36381);

(statearr_36468[(16)] = inst_36383);

return statearr_36468;
})();
var statearr_36469_36514 = state_36440__$1;
(statearr_36469_36514[(2)] = null);

(statearr_36469_36514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (14))){
var state_36440__$1 = state_36440;
var statearr_36473_36515 = state_36440__$1;
(statearr_36473_36515[(2)] = null);

(statearr_36473_36515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (16))){
var inst_36395 = (state_36440[(10)]);
var inst_36399 = cljs.core.chunk_first.call(null,inst_36395);
var inst_36400 = cljs.core.chunk_rest.call(null,inst_36395);
var inst_36401 = cljs.core.count.call(null,inst_36399);
var inst_36381 = inst_36400;
var inst_36382 = inst_36399;
var inst_36383 = inst_36401;
var inst_36384 = (0);
var state_36440__$1 = (function (){var statearr_36474 = state_36440;
(statearr_36474[(12)] = inst_36382);

(statearr_36474[(13)] = inst_36384);

(statearr_36474[(14)] = inst_36381);

(statearr_36474[(16)] = inst_36383);

return statearr_36474;
})();
var statearr_36475_36516 = state_36440__$1;
(statearr_36475_36516[(2)] = null);

(statearr_36475_36516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (10))){
var inst_36382 = (state_36440[(12)]);
var inst_36384 = (state_36440[(13)]);
var inst_36381 = (state_36440[(14)]);
var inst_36383 = (state_36440[(16)]);
var inst_36389 = cljs.core._nth.call(null,inst_36382,inst_36384);
var inst_36390 = cljs.core.async.muxch_STAR_.call(null,inst_36389);
var inst_36391 = cljs.core.async.close_BANG_.call(null,inst_36390);
var inst_36392 = (inst_36384 + (1));
var tmp36470 = inst_36382;
var tmp36471 = inst_36381;
var tmp36472 = inst_36383;
var inst_36381__$1 = tmp36471;
var inst_36382__$1 = tmp36470;
var inst_36383__$1 = tmp36472;
var inst_36384__$1 = inst_36392;
var state_36440__$1 = (function (){var statearr_36476 = state_36440;
(statearr_36476[(12)] = inst_36382__$1);

(statearr_36476[(13)] = inst_36384__$1);

(statearr_36476[(14)] = inst_36381__$1);

(statearr_36476[(17)] = inst_36391);

(statearr_36476[(16)] = inst_36383__$1);

return statearr_36476;
})();
var statearr_36477_36517 = state_36440__$1;
(statearr_36477_36517[(2)] = null);

(statearr_36477_36517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (18))){
var inst_36410 = (state_36440[(2)]);
var state_36440__$1 = state_36440;
var statearr_36478_36518 = state_36440__$1;
(statearr_36478_36518[(2)] = inst_36410);

(statearr_36478_36518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (8))){
var inst_36384 = (state_36440[(13)]);
var inst_36383 = (state_36440[(16)]);
var inst_36386 = (inst_36384 < inst_36383);
var inst_36387 = inst_36386;
var state_36440__$1 = state_36440;
if(cljs.core.truth_(inst_36387)){
var statearr_36479_36519 = state_36440__$1;
(statearr_36479_36519[(1)] = (10));

} else {
var statearr_36480_36520 = state_36440__$1;
(statearr_36480_36520[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__34593__auto___36492,mults,ensure_mult,p))
;
return ((function (switch__34481__auto__,c__34593__auto___36492,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_36484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36484[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_36484[(1)] = (1));

return statearr_36484;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_36440){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_36440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e36485){if((e36485 instanceof Object)){
var ex__34485__auto__ = e36485;
var statearr_36486_36521 = state_36440;
(statearr_36486_36521[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36522 = state_36440;
state_36440 = G__36522;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_36440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_36440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___36492,mults,ensure_mult,p))
})();
var state__34595__auto__ = (function (){var statearr_36487 = f__34594__auto__.call(null);
(statearr_36487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___36492);

return statearr_36487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___36492,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args36523 = [];
var len__30779__auto___36526 = arguments.length;
var i__30780__auto___36527 = (0);
while(true){
if((i__30780__auto___36527 < len__30779__auto___36526)){
args36523.push((arguments[i__30780__auto___36527]));

var G__36528 = (i__30780__auto___36527 + (1));
i__30780__auto___36527 = G__36528;
continue;
} else {
}
break;
}

var G__36525 = args36523.length;
switch (G__36525) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36523.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args36530 = [];
var len__30779__auto___36533 = arguments.length;
var i__30780__auto___36534 = (0);
while(true){
if((i__30780__auto___36534 < len__30779__auto___36533)){
args36530.push((arguments[i__30780__auto___36534]));

var G__36535 = (i__30780__auto___36534 + (1));
i__30780__auto___36534 = G__36535;
continue;
} else {
}
break;
}

var G__36532 = args36530.length;
switch (G__36532) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36530.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args36537 = [];
var len__30779__auto___36608 = arguments.length;
var i__30780__auto___36609 = (0);
while(true){
if((i__30780__auto___36609 < len__30779__auto___36608)){
args36537.push((arguments[i__30780__auto___36609]));

var G__36610 = (i__30780__auto___36609 + (1));
i__30780__auto___36609 = G__36610;
continue;
} else {
}
break;
}

var G__36539 = args36537.length;
switch (G__36539) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36537.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34593__auto___36612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___36612,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___36612,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36578){
var state_val_36579 = (state_36578[(1)]);
if((state_val_36579 === (7))){
var state_36578__$1 = state_36578;
var statearr_36580_36613 = state_36578__$1;
(statearr_36580_36613[(2)] = null);

(statearr_36580_36613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36579 === (1))){
var state_36578__$1 = state_36578;
var statearr_36581_36614 = state_36578__$1;
(statearr_36581_36614[(2)] = null);

(statearr_36581_36614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36579 === (4))){
var inst_36542 = (state_36578[(7)]);
var inst_36544 = (inst_36542 < cnt);
var state_36578__$1 = state_36578;
if(cljs.core.truth_(inst_36544)){
var statearr_36582_36615 = state_36578__$1;
(statearr_36582_36615[(1)] = (6));

} else {
var statearr_36583_36616 = state_36578__$1;
(statearr_36583_36616[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36579 === (15))){
var inst_36574 = (state_36578[(2)]);
var state_36578__$1 = state_36578;
var statearr_36584_36617 = state_36578__$1;
(statearr_36584_36617[(2)] = inst_36574);

(statearr_36584_36617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36579 === (13))){
var inst_36567 = cljs.core.async.close_BANG_.call(null,out);
var state_36578__$1 = state_36578;
var statearr_36585_36618 = state_36578__$1;
(statearr_36585_36618[(2)] = inst_36567);

(statearr_36585_36618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36579 === (6))){
var state_36578__$1 = state_36578;
var statearr_36586_36619 = state_36578__$1;
(statearr_36586_36619[(2)] = null);

(statearr_36586_36619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36579 === (3))){
var inst_36576 = (state_36578[(2)]);
var state_36578__$1 = state_36578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36578__$1,inst_36576);
} else {
if((state_val_36579 === (12))){
var inst_36564 = (state_36578[(8)]);
var inst_36564__$1 = (state_36578[(2)]);
var inst_36565 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36564__$1);
var state_36578__$1 = (function (){var statearr_36587 = state_36578;
(statearr_36587[(8)] = inst_36564__$1);

return statearr_36587;
})();
if(cljs.core.truth_(inst_36565)){
var statearr_36588_36620 = state_36578__$1;
(statearr_36588_36620[(1)] = (13));

} else {
var statearr_36589_36621 = state_36578__$1;
(statearr_36589_36621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36579 === (2))){
var inst_36541 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36542 = (0);
var state_36578__$1 = (function (){var statearr_36590 = state_36578;
(statearr_36590[(7)] = inst_36542);

(statearr_36590[(9)] = inst_36541);

return statearr_36590;
})();
var statearr_36591_36622 = state_36578__$1;
(statearr_36591_36622[(2)] = null);

(statearr_36591_36622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36579 === (11))){
var inst_36542 = (state_36578[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36578,(10),Object,null,(9));
var inst_36551 = chs__$1.call(null,inst_36542);
var inst_36552 = done.call(null,inst_36542);
var inst_36553 = cljs.core.async.take_BANG_.call(null,inst_36551,inst_36552);
var state_36578__$1 = state_36578;
var statearr_36592_36623 = state_36578__$1;
(statearr_36592_36623[(2)] = inst_36553);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36578__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36579 === (9))){
var inst_36542 = (state_36578[(7)]);
var inst_36555 = (state_36578[(2)]);
var inst_36556 = (inst_36542 + (1));
var inst_36542__$1 = inst_36556;
var state_36578__$1 = (function (){var statearr_36593 = state_36578;
(statearr_36593[(7)] = inst_36542__$1);

(statearr_36593[(10)] = inst_36555);

return statearr_36593;
})();
var statearr_36594_36624 = state_36578__$1;
(statearr_36594_36624[(2)] = null);

(statearr_36594_36624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36579 === (5))){
var inst_36562 = (state_36578[(2)]);
var state_36578__$1 = (function (){var statearr_36595 = state_36578;
(statearr_36595[(11)] = inst_36562);

return statearr_36595;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36578__$1,(12),dchan);
} else {
if((state_val_36579 === (14))){
var inst_36564 = (state_36578[(8)]);
var inst_36569 = cljs.core.apply.call(null,f,inst_36564);
var state_36578__$1 = state_36578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36578__$1,(16),out,inst_36569);
} else {
if((state_val_36579 === (16))){
var inst_36571 = (state_36578[(2)]);
var state_36578__$1 = (function (){var statearr_36596 = state_36578;
(statearr_36596[(12)] = inst_36571);

return statearr_36596;
})();
var statearr_36597_36625 = state_36578__$1;
(statearr_36597_36625[(2)] = null);

(statearr_36597_36625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36579 === (10))){
var inst_36546 = (state_36578[(2)]);
var inst_36547 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36578__$1 = (function (){var statearr_36598 = state_36578;
(statearr_36598[(13)] = inst_36546);

return statearr_36598;
})();
var statearr_36599_36626 = state_36578__$1;
(statearr_36599_36626[(2)] = inst_36547);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36578__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36579 === (8))){
var inst_36560 = (state_36578[(2)]);
var state_36578__$1 = state_36578;
var statearr_36600_36627 = state_36578__$1;
(statearr_36600_36627[(2)] = inst_36560);

(statearr_36600_36627[(1)] = (5));


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
});})(c__34593__auto___36612,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34481__auto__,c__34593__auto___36612,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_36604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36604[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_36604[(1)] = (1));

return statearr_36604;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_36578){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_36578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e36605){if((e36605 instanceof Object)){
var ex__34485__auto__ = e36605;
var statearr_36606_36628 = state_36578;
(statearr_36606_36628[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36629 = state_36578;
state_36578 = G__36629;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_36578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_36578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___36612,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34595__auto__ = (function (){var statearr_36607 = f__34594__auto__.call(null);
(statearr_36607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___36612);

return statearr_36607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___36612,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args36631 = [];
var len__30779__auto___36687 = arguments.length;
var i__30780__auto___36688 = (0);
while(true){
if((i__30780__auto___36688 < len__30779__auto___36687)){
args36631.push((arguments[i__30780__auto___36688]));

var G__36689 = (i__30780__auto___36688 + (1));
i__30780__auto___36688 = G__36689;
continue;
} else {
}
break;
}

var G__36633 = args36631.length;
switch (G__36633) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36631.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34593__auto___36691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___36691,out){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___36691,out){
return (function (state_36663){
var state_val_36664 = (state_36663[(1)]);
if((state_val_36664 === (7))){
var inst_36643 = (state_36663[(7)]);
var inst_36642 = (state_36663[(8)]);
var inst_36642__$1 = (state_36663[(2)]);
var inst_36643__$1 = cljs.core.nth.call(null,inst_36642__$1,(0),null);
var inst_36644 = cljs.core.nth.call(null,inst_36642__$1,(1),null);
var inst_36645 = (inst_36643__$1 == null);
var state_36663__$1 = (function (){var statearr_36665 = state_36663;
(statearr_36665[(7)] = inst_36643__$1);

(statearr_36665[(8)] = inst_36642__$1);

(statearr_36665[(9)] = inst_36644);

return statearr_36665;
})();
if(cljs.core.truth_(inst_36645)){
var statearr_36666_36692 = state_36663__$1;
(statearr_36666_36692[(1)] = (8));

} else {
var statearr_36667_36693 = state_36663__$1;
(statearr_36667_36693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36664 === (1))){
var inst_36634 = cljs.core.vec.call(null,chs);
var inst_36635 = inst_36634;
var state_36663__$1 = (function (){var statearr_36668 = state_36663;
(statearr_36668[(10)] = inst_36635);

return statearr_36668;
})();
var statearr_36669_36694 = state_36663__$1;
(statearr_36669_36694[(2)] = null);

(statearr_36669_36694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36664 === (4))){
var inst_36635 = (state_36663[(10)]);
var state_36663__$1 = state_36663;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36663__$1,(7),inst_36635);
} else {
if((state_val_36664 === (6))){
var inst_36659 = (state_36663[(2)]);
var state_36663__$1 = state_36663;
var statearr_36670_36695 = state_36663__$1;
(statearr_36670_36695[(2)] = inst_36659);

(statearr_36670_36695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36664 === (3))){
var inst_36661 = (state_36663[(2)]);
var state_36663__$1 = state_36663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36663__$1,inst_36661);
} else {
if((state_val_36664 === (2))){
var inst_36635 = (state_36663[(10)]);
var inst_36637 = cljs.core.count.call(null,inst_36635);
var inst_36638 = (inst_36637 > (0));
var state_36663__$1 = state_36663;
if(cljs.core.truth_(inst_36638)){
var statearr_36672_36696 = state_36663__$1;
(statearr_36672_36696[(1)] = (4));

} else {
var statearr_36673_36697 = state_36663__$1;
(statearr_36673_36697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36664 === (11))){
var inst_36635 = (state_36663[(10)]);
var inst_36652 = (state_36663[(2)]);
var tmp36671 = inst_36635;
var inst_36635__$1 = tmp36671;
var state_36663__$1 = (function (){var statearr_36674 = state_36663;
(statearr_36674[(10)] = inst_36635__$1);

(statearr_36674[(11)] = inst_36652);

return statearr_36674;
})();
var statearr_36675_36698 = state_36663__$1;
(statearr_36675_36698[(2)] = null);

(statearr_36675_36698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36664 === (9))){
var inst_36643 = (state_36663[(7)]);
var state_36663__$1 = state_36663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36663__$1,(11),out,inst_36643);
} else {
if((state_val_36664 === (5))){
var inst_36657 = cljs.core.async.close_BANG_.call(null,out);
var state_36663__$1 = state_36663;
var statearr_36676_36699 = state_36663__$1;
(statearr_36676_36699[(2)] = inst_36657);

(statearr_36676_36699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36664 === (10))){
var inst_36655 = (state_36663[(2)]);
var state_36663__$1 = state_36663;
var statearr_36677_36700 = state_36663__$1;
(statearr_36677_36700[(2)] = inst_36655);

(statearr_36677_36700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36664 === (8))){
var inst_36643 = (state_36663[(7)]);
var inst_36642 = (state_36663[(8)]);
var inst_36644 = (state_36663[(9)]);
var inst_36635 = (state_36663[(10)]);
var inst_36647 = (function (){var cs = inst_36635;
var vec__36640 = inst_36642;
var v = inst_36643;
var c = inst_36644;
return ((function (cs,vec__36640,v,c,inst_36643,inst_36642,inst_36644,inst_36635,state_val_36664,c__34593__auto___36691,out){
return (function (p1__36630_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36630_SHARP_);
});
;})(cs,vec__36640,v,c,inst_36643,inst_36642,inst_36644,inst_36635,state_val_36664,c__34593__auto___36691,out))
})();
var inst_36648 = cljs.core.filterv.call(null,inst_36647,inst_36635);
var inst_36635__$1 = inst_36648;
var state_36663__$1 = (function (){var statearr_36678 = state_36663;
(statearr_36678[(10)] = inst_36635__$1);

return statearr_36678;
})();
var statearr_36679_36701 = state_36663__$1;
(statearr_36679_36701[(2)] = null);

(statearr_36679_36701[(1)] = (2));


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
});})(c__34593__auto___36691,out))
;
return ((function (switch__34481__auto__,c__34593__auto___36691,out){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_36683 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36683[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_36683[(1)] = (1));

return statearr_36683;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_36663){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_36663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e36684){if((e36684 instanceof Object)){
var ex__34485__auto__ = e36684;
var statearr_36685_36702 = state_36663;
(statearr_36685_36702[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36703 = state_36663;
state_36663 = G__36703;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_36663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_36663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___36691,out))
})();
var state__34595__auto__ = (function (){var statearr_36686 = f__34594__auto__.call(null);
(statearr_36686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___36691);

return statearr_36686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___36691,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args36704 = [];
var len__30779__auto___36753 = arguments.length;
var i__30780__auto___36754 = (0);
while(true){
if((i__30780__auto___36754 < len__30779__auto___36753)){
args36704.push((arguments[i__30780__auto___36754]));

var G__36755 = (i__30780__auto___36754 + (1));
i__30780__auto___36754 = G__36755;
continue;
} else {
}
break;
}

var G__36706 = args36704.length;
switch (G__36706) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36704.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34593__auto___36757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___36757,out){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___36757,out){
return (function (state_36730){
var state_val_36731 = (state_36730[(1)]);
if((state_val_36731 === (7))){
var inst_36712 = (state_36730[(7)]);
var inst_36712__$1 = (state_36730[(2)]);
var inst_36713 = (inst_36712__$1 == null);
var inst_36714 = cljs.core.not.call(null,inst_36713);
var state_36730__$1 = (function (){var statearr_36732 = state_36730;
(statearr_36732[(7)] = inst_36712__$1);

return statearr_36732;
})();
if(inst_36714){
var statearr_36733_36758 = state_36730__$1;
(statearr_36733_36758[(1)] = (8));

} else {
var statearr_36734_36759 = state_36730__$1;
(statearr_36734_36759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (1))){
var inst_36707 = (0);
var state_36730__$1 = (function (){var statearr_36735 = state_36730;
(statearr_36735[(8)] = inst_36707);

return statearr_36735;
})();
var statearr_36736_36760 = state_36730__$1;
(statearr_36736_36760[(2)] = null);

(statearr_36736_36760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (4))){
var state_36730__$1 = state_36730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36730__$1,(7),ch);
} else {
if((state_val_36731 === (6))){
var inst_36725 = (state_36730[(2)]);
var state_36730__$1 = state_36730;
var statearr_36737_36761 = state_36730__$1;
(statearr_36737_36761[(2)] = inst_36725);

(statearr_36737_36761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (3))){
var inst_36727 = (state_36730[(2)]);
var inst_36728 = cljs.core.async.close_BANG_.call(null,out);
var state_36730__$1 = (function (){var statearr_36738 = state_36730;
(statearr_36738[(9)] = inst_36727);

return statearr_36738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36730__$1,inst_36728);
} else {
if((state_val_36731 === (2))){
var inst_36707 = (state_36730[(8)]);
var inst_36709 = (inst_36707 < n);
var state_36730__$1 = state_36730;
if(cljs.core.truth_(inst_36709)){
var statearr_36739_36762 = state_36730__$1;
(statearr_36739_36762[(1)] = (4));

} else {
var statearr_36740_36763 = state_36730__$1;
(statearr_36740_36763[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (11))){
var inst_36707 = (state_36730[(8)]);
var inst_36717 = (state_36730[(2)]);
var inst_36718 = (inst_36707 + (1));
var inst_36707__$1 = inst_36718;
var state_36730__$1 = (function (){var statearr_36741 = state_36730;
(statearr_36741[(8)] = inst_36707__$1);

(statearr_36741[(10)] = inst_36717);

return statearr_36741;
})();
var statearr_36742_36764 = state_36730__$1;
(statearr_36742_36764[(2)] = null);

(statearr_36742_36764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (9))){
var state_36730__$1 = state_36730;
var statearr_36743_36765 = state_36730__$1;
(statearr_36743_36765[(2)] = null);

(statearr_36743_36765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (5))){
var state_36730__$1 = state_36730;
var statearr_36744_36766 = state_36730__$1;
(statearr_36744_36766[(2)] = null);

(statearr_36744_36766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (10))){
var inst_36722 = (state_36730[(2)]);
var state_36730__$1 = state_36730;
var statearr_36745_36767 = state_36730__$1;
(statearr_36745_36767[(2)] = inst_36722);

(statearr_36745_36767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (8))){
var inst_36712 = (state_36730[(7)]);
var state_36730__$1 = state_36730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36730__$1,(11),out,inst_36712);
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
});})(c__34593__auto___36757,out))
;
return ((function (switch__34481__auto__,c__34593__auto___36757,out){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_36749 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36749[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_36749[(1)] = (1));

return statearr_36749;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_36730){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_36730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e36750){if((e36750 instanceof Object)){
var ex__34485__auto__ = e36750;
var statearr_36751_36768 = state_36730;
(statearr_36751_36768[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36769 = state_36730;
state_36730 = G__36769;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_36730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_36730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___36757,out))
})();
var state__34595__auto__ = (function (){var statearr_36752 = f__34594__auto__.call(null);
(statearr_36752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___36757);

return statearr_36752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___36757,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36777 = (function (map_LT_,f,ch,meta36778){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36778 = meta36778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36779,meta36778__$1){
var self__ = this;
var _36779__$1 = this;
return (new cljs.core.async.t_cljs$core$async36777(self__.map_LT_,self__.f,self__.ch,meta36778__$1));
});

cljs.core.async.t_cljs$core$async36777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36779){
var self__ = this;
var _36779__$1 = this;
return self__.meta36778;
});

cljs.core.async.t_cljs$core$async36777.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36777.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36777.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36777.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36777.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36780 = (function (map_LT_,f,ch,meta36778,_,fn1,meta36781){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36778 = meta36778;
this._ = _;
this.fn1 = fn1;
this.meta36781 = meta36781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36782,meta36781__$1){
var self__ = this;
var _36782__$1 = this;
return (new cljs.core.async.t_cljs$core$async36780(self__.map_LT_,self__.f,self__.ch,self__.meta36778,self__._,self__.fn1,meta36781__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36782){
var self__ = this;
var _36782__$1 = this;
return self__.meta36781;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36780.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36780.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36770_SHARP_){
return f1.call(null,(((p1__36770_SHARP_ == null))?null:self__.f.call(null,p1__36770_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36780.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36778","meta36778",-716606416,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36777","cljs.core.async/t_cljs$core$async36777",-1029587781,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36781","meta36781",-574594550,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36780";

cljs.core.async.t_cljs$core$async36780.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30318__auto__,writer__30319__auto__,opt__30320__auto__){
return cljs.core._write.call(null,writer__30319__auto__,"cljs.core.async/t_cljs$core$async36780");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36780 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36780(map_LT___$1,f__$1,ch__$1,meta36778__$1,___$2,fn1__$1,meta36781){
return (new cljs.core.async.t_cljs$core$async36780(map_LT___$1,f__$1,ch__$1,meta36778__$1,___$2,fn1__$1,meta36781));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36780(self__.map_LT_,self__.f,self__.ch,self__.meta36778,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__29708__auto__ = ret;
if(cljs.core.truth_(and__29708__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__29708__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36777.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36777.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36778","meta36778",-716606416,null)], null);
});

cljs.core.async.t_cljs$core$async36777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36777";

cljs.core.async.t_cljs$core$async36777.cljs$lang$ctorPrWriter = (function (this__30318__auto__,writer__30319__auto__,opt__30320__auto__){
return cljs.core._write.call(null,writer__30319__auto__,"cljs.core.async/t_cljs$core$async36777");
});

cljs.core.async.__GT_t_cljs$core$async36777 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36777(map_LT___$1,f__$1,ch__$1,meta36778){
return (new cljs.core.async.t_cljs$core$async36777(map_LT___$1,f__$1,ch__$1,meta36778));
});

}

return (new cljs.core.async.t_cljs$core$async36777(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36786 = (function (map_GT_,f,ch,meta36787){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta36787 = meta36787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36788,meta36787__$1){
var self__ = this;
var _36788__$1 = this;
return (new cljs.core.async.t_cljs$core$async36786(self__.map_GT_,self__.f,self__.ch,meta36787__$1));
});

cljs.core.async.t_cljs$core$async36786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36788){
var self__ = this;
var _36788__$1 = this;
return self__.meta36787;
});

cljs.core.async.t_cljs$core$async36786.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36786.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36786.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36786.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36786.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36786.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36787","meta36787",1512955545,null)], null);
});

cljs.core.async.t_cljs$core$async36786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36786";

cljs.core.async.t_cljs$core$async36786.cljs$lang$ctorPrWriter = (function (this__30318__auto__,writer__30319__auto__,opt__30320__auto__){
return cljs.core._write.call(null,writer__30319__auto__,"cljs.core.async/t_cljs$core$async36786");
});

cljs.core.async.__GT_t_cljs$core$async36786 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36786(map_GT___$1,f__$1,ch__$1,meta36787){
return (new cljs.core.async.t_cljs$core$async36786(map_GT___$1,f__$1,ch__$1,meta36787));
});

}

return (new cljs.core.async.t_cljs$core$async36786(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36792 = (function (filter_GT_,p,ch,meta36793){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta36793 = meta36793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36794,meta36793__$1){
var self__ = this;
var _36794__$1 = this;
return (new cljs.core.async.t_cljs$core$async36792(self__.filter_GT_,self__.p,self__.ch,meta36793__$1));
});

cljs.core.async.t_cljs$core$async36792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36794){
var self__ = this;
var _36794__$1 = this;
return self__.meta36793;
});

cljs.core.async.t_cljs$core$async36792.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36792.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36793","meta36793",-52467474,null)], null);
});

cljs.core.async.t_cljs$core$async36792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36792";

cljs.core.async.t_cljs$core$async36792.cljs$lang$ctorPrWriter = (function (this__30318__auto__,writer__30319__auto__,opt__30320__auto__){
return cljs.core._write.call(null,writer__30319__auto__,"cljs.core.async/t_cljs$core$async36792");
});

cljs.core.async.__GT_t_cljs$core$async36792 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36792(filter_GT___$1,p__$1,ch__$1,meta36793){
return (new cljs.core.async.t_cljs$core$async36792(filter_GT___$1,p__$1,ch__$1,meta36793));
});

}

return (new cljs.core.async.t_cljs$core$async36792(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args36795 = [];
var len__30779__auto___36839 = arguments.length;
var i__30780__auto___36840 = (0);
while(true){
if((i__30780__auto___36840 < len__30779__auto___36839)){
args36795.push((arguments[i__30780__auto___36840]));

var G__36841 = (i__30780__auto___36840 + (1));
i__30780__auto___36840 = G__36841;
continue;
} else {
}
break;
}

var G__36797 = args36795.length;
switch (G__36797) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36795.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34593__auto___36843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___36843,out){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___36843,out){
return (function (state_36818){
var state_val_36819 = (state_36818[(1)]);
if((state_val_36819 === (7))){
var inst_36814 = (state_36818[(2)]);
var state_36818__$1 = state_36818;
var statearr_36820_36844 = state_36818__$1;
(statearr_36820_36844[(2)] = inst_36814);

(statearr_36820_36844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36819 === (1))){
var state_36818__$1 = state_36818;
var statearr_36821_36845 = state_36818__$1;
(statearr_36821_36845[(2)] = null);

(statearr_36821_36845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36819 === (4))){
var inst_36800 = (state_36818[(7)]);
var inst_36800__$1 = (state_36818[(2)]);
var inst_36801 = (inst_36800__$1 == null);
var state_36818__$1 = (function (){var statearr_36822 = state_36818;
(statearr_36822[(7)] = inst_36800__$1);

return statearr_36822;
})();
if(cljs.core.truth_(inst_36801)){
var statearr_36823_36846 = state_36818__$1;
(statearr_36823_36846[(1)] = (5));

} else {
var statearr_36824_36847 = state_36818__$1;
(statearr_36824_36847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36819 === (6))){
var inst_36800 = (state_36818[(7)]);
var inst_36805 = p.call(null,inst_36800);
var state_36818__$1 = state_36818;
if(cljs.core.truth_(inst_36805)){
var statearr_36825_36848 = state_36818__$1;
(statearr_36825_36848[(1)] = (8));

} else {
var statearr_36826_36849 = state_36818__$1;
(statearr_36826_36849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36819 === (3))){
var inst_36816 = (state_36818[(2)]);
var state_36818__$1 = state_36818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36818__$1,inst_36816);
} else {
if((state_val_36819 === (2))){
var state_36818__$1 = state_36818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36818__$1,(4),ch);
} else {
if((state_val_36819 === (11))){
var inst_36808 = (state_36818[(2)]);
var state_36818__$1 = state_36818;
var statearr_36827_36850 = state_36818__$1;
(statearr_36827_36850[(2)] = inst_36808);

(statearr_36827_36850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36819 === (9))){
var state_36818__$1 = state_36818;
var statearr_36828_36851 = state_36818__$1;
(statearr_36828_36851[(2)] = null);

(statearr_36828_36851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36819 === (5))){
var inst_36803 = cljs.core.async.close_BANG_.call(null,out);
var state_36818__$1 = state_36818;
var statearr_36829_36852 = state_36818__$1;
(statearr_36829_36852[(2)] = inst_36803);

(statearr_36829_36852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36819 === (10))){
var inst_36811 = (state_36818[(2)]);
var state_36818__$1 = (function (){var statearr_36830 = state_36818;
(statearr_36830[(8)] = inst_36811);

return statearr_36830;
})();
var statearr_36831_36853 = state_36818__$1;
(statearr_36831_36853[(2)] = null);

(statearr_36831_36853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36819 === (8))){
var inst_36800 = (state_36818[(7)]);
var state_36818__$1 = state_36818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36818__$1,(11),out,inst_36800);
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
});})(c__34593__auto___36843,out))
;
return ((function (switch__34481__auto__,c__34593__auto___36843,out){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_36835 = [null,null,null,null,null,null,null,null,null];
(statearr_36835[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_36835[(1)] = (1));

return statearr_36835;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_36818){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_36818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e36836){if((e36836 instanceof Object)){
var ex__34485__auto__ = e36836;
var statearr_36837_36854 = state_36818;
(statearr_36837_36854[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36855 = state_36818;
state_36818 = G__36855;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_36818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_36818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___36843,out))
})();
var state__34595__auto__ = (function (){var statearr_36838 = f__34594__auto__.call(null);
(statearr_36838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___36843);

return statearr_36838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___36843,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36856 = [];
var len__30779__auto___36859 = arguments.length;
var i__30780__auto___36860 = (0);
while(true){
if((i__30780__auto___36860 < len__30779__auto___36859)){
args36856.push((arguments[i__30780__auto___36860]));

var G__36861 = (i__30780__auto___36860 + (1));
i__30780__auto___36860 = G__36861;
continue;
} else {
}
break;
}

var G__36858 = args36856.length;
switch (G__36858) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36856.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto__){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto__){
return (function (state_37028){
var state_val_37029 = (state_37028[(1)]);
if((state_val_37029 === (7))){
var inst_37024 = (state_37028[(2)]);
var state_37028__$1 = state_37028;
var statearr_37030_37071 = state_37028__$1;
(statearr_37030_37071[(2)] = inst_37024);

(statearr_37030_37071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (20))){
var inst_36994 = (state_37028[(7)]);
var inst_37005 = (state_37028[(2)]);
var inst_37006 = cljs.core.next.call(null,inst_36994);
var inst_36980 = inst_37006;
var inst_36981 = null;
var inst_36982 = (0);
var inst_36983 = (0);
var state_37028__$1 = (function (){var statearr_37031 = state_37028;
(statearr_37031[(8)] = inst_36982);

(statearr_37031[(9)] = inst_37005);

(statearr_37031[(10)] = inst_36981);

(statearr_37031[(11)] = inst_36980);

(statearr_37031[(12)] = inst_36983);

return statearr_37031;
})();
var statearr_37032_37072 = state_37028__$1;
(statearr_37032_37072[(2)] = null);

(statearr_37032_37072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (1))){
var state_37028__$1 = state_37028;
var statearr_37033_37073 = state_37028__$1;
(statearr_37033_37073[(2)] = null);

(statearr_37033_37073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (4))){
var inst_36969 = (state_37028[(13)]);
var inst_36969__$1 = (state_37028[(2)]);
var inst_36970 = (inst_36969__$1 == null);
var state_37028__$1 = (function (){var statearr_37034 = state_37028;
(statearr_37034[(13)] = inst_36969__$1);

return statearr_37034;
})();
if(cljs.core.truth_(inst_36970)){
var statearr_37035_37074 = state_37028__$1;
(statearr_37035_37074[(1)] = (5));

} else {
var statearr_37036_37075 = state_37028__$1;
(statearr_37036_37075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (15))){
var state_37028__$1 = state_37028;
var statearr_37040_37076 = state_37028__$1;
(statearr_37040_37076[(2)] = null);

(statearr_37040_37076[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (21))){
var state_37028__$1 = state_37028;
var statearr_37041_37077 = state_37028__$1;
(statearr_37041_37077[(2)] = null);

(statearr_37041_37077[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (13))){
var inst_36982 = (state_37028[(8)]);
var inst_36981 = (state_37028[(10)]);
var inst_36980 = (state_37028[(11)]);
var inst_36983 = (state_37028[(12)]);
var inst_36990 = (state_37028[(2)]);
var inst_36991 = (inst_36983 + (1));
var tmp37037 = inst_36982;
var tmp37038 = inst_36981;
var tmp37039 = inst_36980;
var inst_36980__$1 = tmp37039;
var inst_36981__$1 = tmp37038;
var inst_36982__$1 = tmp37037;
var inst_36983__$1 = inst_36991;
var state_37028__$1 = (function (){var statearr_37042 = state_37028;
(statearr_37042[(8)] = inst_36982__$1);

(statearr_37042[(10)] = inst_36981__$1);

(statearr_37042[(14)] = inst_36990);

(statearr_37042[(11)] = inst_36980__$1);

(statearr_37042[(12)] = inst_36983__$1);

return statearr_37042;
})();
var statearr_37043_37078 = state_37028__$1;
(statearr_37043_37078[(2)] = null);

(statearr_37043_37078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (22))){
var state_37028__$1 = state_37028;
var statearr_37044_37079 = state_37028__$1;
(statearr_37044_37079[(2)] = null);

(statearr_37044_37079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (6))){
var inst_36969 = (state_37028[(13)]);
var inst_36978 = f.call(null,inst_36969);
var inst_36979 = cljs.core.seq.call(null,inst_36978);
var inst_36980 = inst_36979;
var inst_36981 = null;
var inst_36982 = (0);
var inst_36983 = (0);
var state_37028__$1 = (function (){var statearr_37045 = state_37028;
(statearr_37045[(8)] = inst_36982);

(statearr_37045[(10)] = inst_36981);

(statearr_37045[(11)] = inst_36980);

(statearr_37045[(12)] = inst_36983);

return statearr_37045;
})();
var statearr_37046_37080 = state_37028__$1;
(statearr_37046_37080[(2)] = null);

(statearr_37046_37080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (17))){
var inst_36994 = (state_37028[(7)]);
var inst_36998 = cljs.core.chunk_first.call(null,inst_36994);
var inst_36999 = cljs.core.chunk_rest.call(null,inst_36994);
var inst_37000 = cljs.core.count.call(null,inst_36998);
var inst_36980 = inst_36999;
var inst_36981 = inst_36998;
var inst_36982 = inst_37000;
var inst_36983 = (0);
var state_37028__$1 = (function (){var statearr_37047 = state_37028;
(statearr_37047[(8)] = inst_36982);

(statearr_37047[(10)] = inst_36981);

(statearr_37047[(11)] = inst_36980);

(statearr_37047[(12)] = inst_36983);

return statearr_37047;
})();
var statearr_37048_37081 = state_37028__$1;
(statearr_37048_37081[(2)] = null);

(statearr_37048_37081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (3))){
var inst_37026 = (state_37028[(2)]);
var state_37028__$1 = state_37028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37028__$1,inst_37026);
} else {
if((state_val_37029 === (12))){
var inst_37014 = (state_37028[(2)]);
var state_37028__$1 = state_37028;
var statearr_37049_37082 = state_37028__$1;
(statearr_37049_37082[(2)] = inst_37014);

(statearr_37049_37082[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (2))){
var state_37028__$1 = state_37028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37028__$1,(4),in$);
} else {
if((state_val_37029 === (23))){
var inst_37022 = (state_37028[(2)]);
var state_37028__$1 = state_37028;
var statearr_37050_37083 = state_37028__$1;
(statearr_37050_37083[(2)] = inst_37022);

(statearr_37050_37083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (19))){
var inst_37009 = (state_37028[(2)]);
var state_37028__$1 = state_37028;
var statearr_37051_37084 = state_37028__$1;
(statearr_37051_37084[(2)] = inst_37009);

(statearr_37051_37084[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (11))){
var inst_36980 = (state_37028[(11)]);
var inst_36994 = (state_37028[(7)]);
var inst_36994__$1 = cljs.core.seq.call(null,inst_36980);
var state_37028__$1 = (function (){var statearr_37052 = state_37028;
(statearr_37052[(7)] = inst_36994__$1);

return statearr_37052;
})();
if(inst_36994__$1){
var statearr_37053_37085 = state_37028__$1;
(statearr_37053_37085[(1)] = (14));

} else {
var statearr_37054_37086 = state_37028__$1;
(statearr_37054_37086[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (9))){
var inst_37016 = (state_37028[(2)]);
var inst_37017 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37028__$1 = (function (){var statearr_37055 = state_37028;
(statearr_37055[(15)] = inst_37016);

return statearr_37055;
})();
if(cljs.core.truth_(inst_37017)){
var statearr_37056_37087 = state_37028__$1;
(statearr_37056_37087[(1)] = (21));

} else {
var statearr_37057_37088 = state_37028__$1;
(statearr_37057_37088[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (5))){
var inst_36972 = cljs.core.async.close_BANG_.call(null,out);
var state_37028__$1 = state_37028;
var statearr_37058_37089 = state_37028__$1;
(statearr_37058_37089[(2)] = inst_36972);

(statearr_37058_37089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (14))){
var inst_36994 = (state_37028[(7)]);
var inst_36996 = cljs.core.chunked_seq_QMARK_.call(null,inst_36994);
var state_37028__$1 = state_37028;
if(inst_36996){
var statearr_37059_37090 = state_37028__$1;
(statearr_37059_37090[(1)] = (17));

} else {
var statearr_37060_37091 = state_37028__$1;
(statearr_37060_37091[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (16))){
var inst_37012 = (state_37028[(2)]);
var state_37028__$1 = state_37028;
var statearr_37061_37092 = state_37028__$1;
(statearr_37061_37092[(2)] = inst_37012);

(statearr_37061_37092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37029 === (10))){
var inst_36981 = (state_37028[(10)]);
var inst_36983 = (state_37028[(12)]);
var inst_36988 = cljs.core._nth.call(null,inst_36981,inst_36983);
var state_37028__$1 = state_37028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37028__$1,(13),out,inst_36988);
} else {
if((state_val_37029 === (18))){
var inst_36994 = (state_37028[(7)]);
var inst_37003 = cljs.core.first.call(null,inst_36994);
var state_37028__$1 = state_37028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37028__$1,(20),out,inst_37003);
} else {
if((state_val_37029 === (8))){
var inst_36982 = (state_37028[(8)]);
var inst_36983 = (state_37028[(12)]);
var inst_36985 = (inst_36983 < inst_36982);
var inst_36986 = inst_36985;
var state_37028__$1 = state_37028;
if(cljs.core.truth_(inst_36986)){
var statearr_37062_37093 = state_37028__$1;
(statearr_37062_37093[(1)] = (10));

} else {
var statearr_37063_37094 = state_37028__$1;
(statearr_37063_37094[(1)] = (11));

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
}
}
}
}
}
}
});})(c__34593__auto__))
;
return ((function (switch__34481__auto__,c__34593__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34482__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34482__auto____0 = (function (){
var statearr_37067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37067[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34482__auto__);

(statearr_37067[(1)] = (1));

return statearr_37067;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34482__auto____1 = (function (state_37028){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_37028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e37068){if((e37068 instanceof Object)){
var ex__34485__auto__ = e37068;
var statearr_37069_37095 = state_37028;
(statearr_37069_37095[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37096 = state_37028;
state_37028 = G__37096;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34482__auto__ = function(state_37028){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34482__auto____1.call(this,state_37028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34482__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34482__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto__))
})();
var state__34595__auto__ = (function (){var statearr_37070 = f__34594__auto__.call(null);
(statearr_37070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto__);

return statearr_37070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto__))
);

return c__34593__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args37097 = [];
var len__30779__auto___37100 = arguments.length;
var i__30780__auto___37101 = (0);
while(true){
if((i__30780__auto___37101 < len__30779__auto___37100)){
args37097.push((arguments[i__30780__auto___37101]));

var G__37102 = (i__30780__auto___37101 + (1));
i__30780__auto___37101 = G__37102;
continue;
} else {
}
break;
}

var G__37099 = args37097.length;
switch (G__37099) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37097.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args37104 = [];
var len__30779__auto___37107 = arguments.length;
var i__30780__auto___37108 = (0);
while(true){
if((i__30780__auto___37108 < len__30779__auto___37107)){
args37104.push((arguments[i__30780__auto___37108]));

var G__37109 = (i__30780__auto___37108 + (1));
i__30780__auto___37108 = G__37109;
continue;
} else {
}
break;
}

var G__37106 = args37104.length;
switch (G__37106) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37104.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args37111 = [];
var len__30779__auto___37162 = arguments.length;
var i__30780__auto___37163 = (0);
while(true){
if((i__30780__auto___37163 < len__30779__auto___37162)){
args37111.push((arguments[i__30780__auto___37163]));

var G__37164 = (i__30780__auto___37163 + (1));
i__30780__auto___37163 = G__37164;
continue;
} else {
}
break;
}

var G__37113 = args37111.length;
switch (G__37113) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37111.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34593__auto___37166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___37166,out){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___37166,out){
return (function (state_37137){
var state_val_37138 = (state_37137[(1)]);
if((state_val_37138 === (7))){
var inst_37132 = (state_37137[(2)]);
var state_37137__$1 = state_37137;
var statearr_37139_37167 = state_37137__$1;
(statearr_37139_37167[(2)] = inst_37132);

(statearr_37139_37167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (1))){
var inst_37114 = null;
var state_37137__$1 = (function (){var statearr_37140 = state_37137;
(statearr_37140[(7)] = inst_37114);

return statearr_37140;
})();
var statearr_37141_37168 = state_37137__$1;
(statearr_37141_37168[(2)] = null);

(statearr_37141_37168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (4))){
var inst_37117 = (state_37137[(8)]);
var inst_37117__$1 = (state_37137[(2)]);
var inst_37118 = (inst_37117__$1 == null);
var inst_37119 = cljs.core.not.call(null,inst_37118);
var state_37137__$1 = (function (){var statearr_37142 = state_37137;
(statearr_37142[(8)] = inst_37117__$1);

return statearr_37142;
})();
if(inst_37119){
var statearr_37143_37169 = state_37137__$1;
(statearr_37143_37169[(1)] = (5));

} else {
var statearr_37144_37170 = state_37137__$1;
(statearr_37144_37170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (6))){
var state_37137__$1 = state_37137;
var statearr_37145_37171 = state_37137__$1;
(statearr_37145_37171[(2)] = null);

(statearr_37145_37171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (3))){
var inst_37134 = (state_37137[(2)]);
var inst_37135 = cljs.core.async.close_BANG_.call(null,out);
var state_37137__$1 = (function (){var statearr_37146 = state_37137;
(statearr_37146[(9)] = inst_37134);

return statearr_37146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37137__$1,inst_37135);
} else {
if((state_val_37138 === (2))){
var state_37137__$1 = state_37137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37137__$1,(4),ch);
} else {
if((state_val_37138 === (11))){
var inst_37117 = (state_37137[(8)]);
var inst_37126 = (state_37137[(2)]);
var inst_37114 = inst_37117;
var state_37137__$1 = (function (){var statearr_37147 = state_37137;
(statearr_37147[(10)] = inst_37126);

(statearr_37147[(7)] = inst_37114);

return statearr_37147;
})();
var statearr_37148_37172 = state_37137__$1;
(statearr_37148_37172[(2)] = null);

(statearr_37148_37172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (9))){
var inst_37117 = (state_37137[(8)]);
var state_37137__$1 = state_37137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37137__$1,(11),out,inst_37117);
} else {
if((state_val_37138 === (5))){
var inst_37114 = (state_37137[(7)]);
var inst_37117 = (state_37137[(8)]);
var inst_37121 = cljs.core._EQ_.call(null,inst_37117,inst_37114);
var state_37137__$1 = state_37137;
if(inst_37121){
var statearr_37150_37173 = state_37137__$1;
(statearr_37150_37173[(1)] = (8));

} else {
var statearr_37151_37174 = state_37137__$1;
(statearr_37151_37174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (10))){
var inst_37129 = (state_37137[(2)]);
var state_37137__$1 = state_37137;
var statearr_37152_37175 = state_37137__$1;
(statearr_37152_37175[(2)] = inst_37129);

(statearr_37152_37175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (8))){
var inst_37114 = (state_37137[(7)]);
var tmp37149 = inst_37114;
var inst_37114__$1 = tmp37149;
var state_37137__$1 = (function (){var statearr_37153 = state_37137;
(statearr_37153[(7)] = inst_37114__$1);

return statearr_37153;
})();
var statearr_37154_37176 = state_37137__$1;
(statearr_37154_37176[(2)] = null);

(statearr_37154_37176[(1)] = (2));


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
});})(c__34593__auto___37166,out))
;
return ((function (switch__34481__auto__,c__34593__auto___37166,out){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_37158 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37158[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_37158[(1)] = (1));

return statearr_37158;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_37137){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_37137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e37159){if((e37159 instanceof Object)){
var ex__34485__auto__ = e37159;
var statearr_37160_37177 = state_37137;
(statearr_37160_37177[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37178 = state_37137;
state_37137 = G__37178;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_37137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_37137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___37166,out))
})();
var state__34595__auto__ = (function (){var statearr_37161 = f__34594__auto__.call(null);
(statearr_37161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___37166);

return statearr_37161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___37166,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args37179 = [];
var len__30779__auto___37249 = arguments.length;
var i__30780__auto___37250 = (0);
while(true){
if((i__30780__auto___37250 < len__30779__auto___37249)){
args37179.push((arguments[i__30780__auto___37250]));

var G__37251 = (i__30780__auto___37250 + (1));
i__30780__auto___37250 = G__37251;
continue;
} else {
}
break;
}

var G__37181 = args37179.length;
switch (G__37181) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37179.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34593__auto___37253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___37253,out){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___37253,out){
return (function (state_37219){
var state_val_37220 = (state_37219[(1)]);
if((state_val_37220 === (7))){
var inst_37215 = (state_37219[(2)]);
var state_37219__$1 = state_37219;
var statearr_37221_37254 = state_37219__$1;
(statearr_37221_37254[(2)] = inst_37215);

(statearr_37221_37254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (1))){
var inst_37182 = (new Array(n));
var inst_37183 = inst_37182;
var inst_37184 = (0);
var state_37219__$1 = (function (){var statearr_37222 = state_37219;
(statearr_37222[(7)] = inst_37184);

(statearr_37222[(8)] = inst_37183);

return statearr_37222;
})();
var statearr_37223_37255 = state_37219__$1;
(statearr_37223_37255[(2)] = null);

(statearr_37223_37255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (4))){
var inst_37187 = (state_37219[(9)]);
var inst_37187__$1 = (state_37219[(2)]);
var inst_37188 = (inst_37187__$1 == null);
var inst_37189 = cljs.core.not.call(null,inst_37188);
var state_37219__$1 = (function (){var statearr_37224 = state_37219;
(statearr_37224[(9)] = inst_37187__$1);

return statearr_37224;
})();
if(inst_37189){
var statearr_37225_37256 = state_37219__$1;
(statearr_37225_37256[(1)] = (5));

} else {
var statearr_37226_37257 = state_37219__$1;
(statearr_37226_37257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (15))){
var inst_37209 = (state_37219[(2)]);
var state_37219__$1 = state_37219;
var statearr_37227_37258 = state_37219__$1;
(statearr_37227_37258[(2)] = inst_37209);

(statearr_37227_37258[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (13))){
var state_37219__$1 = state_37219;
var statearr_37228_37259 = state_37219__$1;
(statearr_37228_37259[(2)] = null);

(statearr_37228_37259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (6))){
var inst_37184 = (state_37219[(7)]);
var inst_37205 = (inst_37184 > (0));
var state_37219__$1 = state_37219;
if(cljs.core.truth_(inst_37205)){
var statearr_37229_37260 = state_37219__$1;
(statearr_37229_37260[(1)] = (12));

} else {
var statearr_37230_37261 = state_37219__$1;
(statearr_37230_37261[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (3))){
var inst_37217 = (state_37219[(2)]);
var state_37219__$1 = state_37219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37219__$1,inst_37217);
} else {
if((state_val_37220 === (12))){
var inst_37183 = (state_37219[(8)]);
var inst_37207 = cljs.core.vec.call(null,inst_37183);
var state_37219__$1 = state_37219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37219__$1,(15),out,inst_37207);
} else {
if((state_val_37220 === (2))){
var state_37219__$1 = state_37219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37219__$1,(4),ch);
} else {
if((state_val_37220 === (11))){
var inst_37199 = (state_37219[(2)]);
var inst_37200 = (new Array(n));
var inst_37183 = inst_37200;
var inst_37184 = (0);
var state_37219__$1 = (function (){var statearr_37231 = state_37219;
(statearr_37231[(7)] = inst_37184);

(statearr_37231[(8)] = inst_37183);

(statearr_37231[(10)] = inst_37199);

return statearr_37231;
})();
var statearr_37232_37262 = state_37219__$1;
(statearr_37232_37262[(2)] = null);

(statearr_37232_37262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (9))){
var inst_37183 = (state_37219[(8)]);
var inst_37197 = cljs.core.vec.call(null,inst_37183);
var state_37219__$1 = state_37219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37219__$1,(11),out,inst_37197);
} else {
if((state_val_37220 === (5))){
var inst_37192 = (state_37219[(11)]);
var inst_37187 = (state_37219[(9)]);
var inst_37184 = (state_37219[(7)]);
var inst_37183 = (state_37219[(8)]);
var inst_37191 = (inst_37183[inst_37184] = inst_37187);
var inst_37192__$1 = (inst_37184 + (1));
var inst_37193 = (inst_37192__$1 < n);
var state_37219__$1 = (function (){var statearr_37233 = state_37219;
(statearr_37233[(11)] = inst_37192__$1);

(statearr_37233[(12)] = inst_37191);

return statearr_37233;
})();
if(cljs.core.truth_(inst_37193)){
var statearr_37234_37263 = state_37219__$1;
(statearr_37234_37263[(1)] = (8));

} else {
var statearr_37235_37264 = state_37219__$1;
(statearr_37235_37264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (14))){
var inst_37212 = (state_37219[(2)]);
var inst_37213 = cljs.core.async.close_BANG_.call(null,out);
var state_37219__$1 = (function (){var statearr_37237 = state_37219;
(statearr_37237[(13)] = inst_37212);

return statearr_37237;
})();
var statearr_37238_37265 = state_37219__$1;
(statearr_37238_37265[(2)] = inst_37213);

(statearr_37238_37265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (10))){
var inst_37203 = (state_37219[(2)]);
var state_37219__$1 = state_37219;
var statearr_37239_37266 = state_37219__$1;
(statearr_37239_37266[(2)] = inst_37203);

(statearr_37239_37266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (8))){
var inst_37192 = (state_37219[(11)]);
var inst_37183 = (state_37219[(8)]);
var tmp37236 = inst_37183;
var inst_37183__$1 = tmp37236;
var inst_37184 = inst_37192;
var state_37219__$1 = (function (){var statearr_37240 = state_37219;
(statearr_37240[(7)] = inst_37184);

(statearr_37240[(8)] = inst_37183__$1);

return statearr_37240;
})();
var statearr_37241_37267 = state_37219__$1;
(statearr_37241_37267[(2)] = null);

(statearr_37241_37267[(1)] = (2));


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
});})(c__34593__auto___37253,out))
;
return ((function (switch__34481__auto__,c__34593__auto___37253,out){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_37245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37245[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_37245[(1)] = (1));

return statearr_37245;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_37219){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_37219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e37246){if((e37246 instanceof Object)){
var ex__34485__auto__ = e37246;
var statearr_37247_37268 = state_37219;
(statearr_37247_37268[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37269 = state_37219;
state_37219 = G__37269;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_37219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_37219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___37253,out))
})();
var state__34595__auto__ = (function (){var statearr_37248 = f__34594__auto__.call(null);
(statearr_37248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___37253);

return statearr_37248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___37253,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args37270 = [];
var len__30779__auto___37344 = arguments.length;
var i__30780__auto___37345 = (0);
while(true){
if((i__30780__auto___37345 < len__30779__auto___37344)){
args37270.push((arguments[i__30780__auto___37345]));

var G__37346 = (i__30780__auto___37345 + (1));
i__30780__auto___37345 = G__37346;
continue;
} else {
}
break;
}

var G__37272 = args37270.length;
switch (G__37272) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37270.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34593__auto___37348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___37348,out){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___37348,out){
return (function (state_37314){
var state_val_37315 = (state_37314[(1)]);
if((state_val_37315 === (7))){
var inst_37310 = (state_37314[(2)]);
var state_37314__$1 = state_37314;
var statearr_37316_37349 = state_37314__$1;
(statearr_37316_37349[(2)] = inst_37310);

(statearr_37316_37349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (1))){
var inst_37273 = [];
var inst_37274 = inst_37273;
var inst_37275 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37314__$1 = (function (){var statearr_37317 = state_37314;
(statearr_37317[(7)] = inst_37275);

(statearr_37317[(8)] = inst_37274);

return statearr_37317;
})();
var statearr_37318_37350 = state_37314__$1;
(statearr_37318_37350[(2)] = null);

(statearr_37318_37350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (4))){
var inst_37278 = (state_37314[(9)]);
var inst_37278__$1 = (state_37314[(2)]);
var inst_37279 = (inst_37278__$1 == null);
var inst_37280 = cljs.core.not.call(null,inst_37279);
var state_37314__$1 = (function (){var statearr_37319 = state_37314;
(statearr_37319[(9)] = inst_37278__$1);

return statearr_37319;
})();
if(inst_37280){
var statearr_37320_37351 = state_37314__$1;
(statearr_37320_37351[(1)] = (5));

} else {
var statearr_37321_37352 = state_37314__$1;
(statearr_37321_37352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (15))){
var inst_37304 = (state_37314[(2)]);
var state_37314__$1 = state_37314;
var statearr_37322_37353 = state_37314__$1;
(statearr_37322_37353[(2)] = inst_37304);

(statearr_37322_37353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (13))){
var state_37314__$1 = state_37314;
var statearr_37323_37354 = state_37314__$1;
(statearr_37323_37354[(2)] = null);

(statearr_37323_37354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (6))){
var inst_37274 = (state_37314[(8)]);
var inst_37299 = inst_37274.length;
var inst_37300 = (inst_37299 > (0));
var state_37314__$1 = state_37314;
if(cljs.core.truth_(inst_37300)){
var statearr_37324_37355 = state_37314__$1;
(statearr_37324_37355[(1)] = (12));

} else {
var statearr_37325_37356 = state_37314__$1;
(statearr_37325_37356[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (3))){
var inst_37312 = (state_37314[(2)]);
var state_37314__$1 = state_37314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37314__$1,inst_37312);
} else {
if((state_val_37315 === (12))){
var inst_37274 = (state_37314[(8)]);
var inst_37302 = cljs.core.vec.call(null,inst_37274);
var state_37314__$1 = state_37314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37314__$1,(15),out,inst_37302);
} else {
if((state_val_37315 === (2))){
var state_37314__$1 = state_37314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37314__$1,(4),ch);
} else {
if((state_val_37315 === (11))){
var inst_37278 = (state_37314[(9)]);
var inst_37282 = (state_37314[(10)]);
var inst_37292 = (state_37314[(2)]);
var inst_37293 = [];
var inst_37294 = inst_37293.push(inst_37278);
var inst_37274 = inst_37293;
var inst_37275 = inst_37282;
var state_37314__$1 = (function (){var statearr_37326 = state_37314;
(statearr_37326[(7)] = inst_37275);

(statearr_37326[(11)] = inst_37292);

(statearr_37326[(8)] = inst_37274);

(statearr_37326[(12)] = inst_37294);

return statearr_37326;
})();
var statearr_37327_37357 = state_37314__$1;
(statearr_37327_37357[(2)] = null);

(statearr_37327_37357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (9))){
var inst_37274 = (state_37314[(8)]);
var inst_37290 = cljs.core.vec.call(null,inst_37274);
var state_37314__$1 = state_37314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37314__$1,(11),out,inst_37290);
} else {
if((state_val_37315 === (5))){
var inst_37275 = (state_37314[(7)]);
var inst_37278 = (state_37314[(9)]);
var inst_37282 = (state_37314[(10)]);
var inst_37282__$1 = f.call(null,inst_37278);
var inst_37283 = cljs.core._EQ_.call(null,inst_37282__$1,inst_37275);
var inst_37284 = cljs.core.keyword_identical_QMARK_.call(null,inst_37275,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37285 = (inst_37283) || (inst_37284);
var state_37314__$1 = (function (){var statearr_37328 = state_37314;
(statearr_37328[(10)] = inst_37282__$1);

return statearr_37328;
})();
if(cljs.core.truth_(inst_37285)){
var statearr_37329_37358 = state_37314__$1;
(statearr_37329_37358[(1)] = (8));

} else {
var statearr_37330_37359 = state_37314__$1;
(statearr_37330_37359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (14))){
var inst_37307 = (state_37314[(2)]);
var inst_37308 = cljs.core.async.close_BANG_.call(null,out);
var state_37314__$1 = (function (){var statearr_37332 = state_37314;
(statearr_37332[(13)] = inst_37307);

return statearr_37332;
})();
var statearr_37333_37360 = state_37314__$1;
(statearr_37333_37360[(2)] = inst_37308);

(statearr_37333_37360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (10))){
var inst_37297 = (state_37314[(2)]);
var state_37314__$1 = state_37314;
var statearr_37334_37361 = state_37314__$1;
(statearr_37334_37361[(2)] = inst_37297);

(statearr_37334_37361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37315 === (8))){
var inst_37274 = (state_37314[(8)]);
var inst_37278 = (state_37314[(9)]);
var inst_37282 = (state_37314[(10)]);
var inst_37287 = inst_37274.push(inst_37278);
var tmp37331 = inst_37274;
var inst_37274__$1 = tmp37331;
var inst_37275 = inst_37282;
var state_37314__$1 = (function (){var statearr_37335 = state_37314;
(statearr_37335[(7)] = inst_37275);

(statearr_37335[(8)] = inst_37274__$1);

(statearr_37335[(14)] = inst_37287);

return statearr_37335;
})();
var statearr_37336_37362 = state_37314__$1;
(statearr_37336_37362[(2)] = null);

(statearr_37336_37362[(1)] = (2));


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
});})(c__34593__auto___37348,out))
;
return ((function (switch__34481__auto__,c__34593__auto___37348,out){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_37340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37340[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_37340[(1)] = (1));

return statearr_37340;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_37314){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_37314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e37341){if((e37341 instanceof Object)){
var ex__34485__auto__ = e37341;
var statearr_37342_37363 = state_37314;
(statearr_37342_37363[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37364 = state_37314;
state_37314 = G__37364;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_37314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_37314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___37348,out))
})();
var state__34595__auto__ = (function (){var statearr_37343 = f__34594__auto__.call(null);
(statearr_37343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___37348);

return statearr_37343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___37348,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map