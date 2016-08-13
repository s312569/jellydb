// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args37534 = [];
var len__32159__auto___37540 = arguments.length;
var i__32160__auto___37541 = (0);
while(true){
if((i__32160__auto___37541 < len__32159__auto___37540)){
args37534.push((arguments[i__32160__auto___37541]));

var G__37542 = (i__32160__auto___37541 + (1));
i__32160__auto___37541 = G__37542;
continue;
} else {
}
break;
}

var G__37536 = args37534.length;
switch (G__37536) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37534.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37537 = (function (f,blockable,meta37538){
this.f = f;
this.blockable = blockable;
this.meta37538 = meta37538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37539,meta37538__$1){
var self__ = this;
var _37539__$1 = this;
return (new cljs.core.async.t_cljs$core$async37537(self__.f,self__.blockable,meta37538__$1));
});

cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37539){
var self__ = this;
var _37539__$1 = this;
return self__.meta37538;
});

cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37538","meta37538",1755232938,null)], null);
});

cljs.core.async.t_cljs$core$async37537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37537";

cljs.core.async.t_cljs$core$async37537.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cljs.core.async/t_cljs$core$async37537");
});

cljs.core.async.__GT_t_cljs$core$async37537 = (function cljs$core$async$__GT_t_cljs$core$async37537(f__$1,blockable__$1,meta37538){
return (new cljs.core.async.t_cljs$core$async37537(f__$1,blockable__$1,meta37538));
});

}

return (new cljs.core.async.t_cljs$core$async37537(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args37546 = [];
var len__32159__auto___37549 = arguments.length;
var i__32160__auto___37550 = (0);
while(true){
if((i__32160__auto___37550 < len__32159__auto___37549)){
args37546.push((arguments[i__32160__auto___37550]));

var G__37551 = (i__32160__auto___37550 + (1));
i__32160__auto___37550 = G__37551;
continue;
} else {
}
break;
}

var G__37548 = args37546.length;
switch (G__37548) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37546.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args37553 = [];
var len__32159__auto___37556 = arguments.length;
var i__32160__auto___37557 = (0);
while(true){
if((i__32160__auto___37557 < len__32159__auto___37556)){
args37553.push((arguments[i__32160__auto___37557]));

var G__37558 = (i__32160__auto___37557 + (1));
i__32160__auto___37557 = G__37558;
continue;
} else {
}
break;
}

var G__37555 = args37553.length;
switch (G__37555) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37553.length)].join('')));

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
var args37560 = [];
var len__32159__auto___37563 = arguments.length;
var i__32160__auto___37564 = (0);
while(true){
if((i__32160__auto___37564 < len__32159__auto___37563)){
args37560.push((arguments[i__32160__auto___37564]));

var G__37565 = (i__32160__auto___37564 + (1));
i__32160__auto___37564 = G__37565;
continue;
} else {
}
break;
}

var G__37562 = args37560.length;
switch (G__37562) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37560.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37567 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37567);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37567,ret){
return (function (){
return fn1.call(null,val_37567);
});})(val_37567,ret))
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
var args37568 = [];
var len__32159__auto___37571 = arguments.length;
var i__32160__auto___37572 = (0);
while(true){
if((i__32160__auto___37572 < len__32159__auto___37571)){
args37568.push((arguments[i__32160__auto___37572]));

var G__37573 = (i__32160__auto___37572 + (1));
i__32160__auto___37572 = G__37573;
continue;
} else {
}
break;
}

var G__37570 = args37568.length;
switch (G__37570) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37568.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__31999__auto___37575 = n;
var x_37576 = (0);
while(true){
if((x_37576 < n__31999__auto___37575)){
(a[x_37576] = (0));

var G__37577 = (x_37576 + (1));
x_37576 = G__37577;
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

var G__37578 = (i + (1));
i = G__37578;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37582 = (function (alt_flag,flag,meta37583){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta37583 = meta37583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37584,meta37583__$1){
var self__ = this;
var _37584__$1 = this;
return (new cljs.core.async.t_cljs$core$async37582(self__.alt_flag,self__.flag,meta37583__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37584){
var self__ = this;
var _37584__$1 = this;
return self__.meta37583;
});})(flag))
;

cljs.core.async.t_cljs$core$async37582.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37582.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37583","meta37583",-645806881,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37582";

cljs.core.async.t_cljs$core$async37582.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cljs.core.async/t_cljs$core$async37582");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37582 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37582(alt_flag__$1,flag__$1,meta37583){
return (new cljs.core.async.t_cljs$core$async37582(alt_flag__$1,flag__$1,meta37583));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37582(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37588 = (function (alt_handler,flag,cb,meta37589){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta37589 = meta37589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37590,meta37589__$1){
var self__ = this;
var _37590__$1 = this;
return (new cljs.core.async.t_cljs$core$async37588(self__.alt_handler,self__.flag,self__.cb,meta37589__$1));
});

cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37590){
var self__ = this;
var _37590__$1 = this;
return self__.meta37589;
});

cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37589","meta37589",-533555573,null)], null);
});

cljs.core.async.t_cljs$core$async37588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37588";

cljs.core.async.t_cljs$core$async37588.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cljs.core.async/t_cljs$core$async37588");
});

cljs.core.async.__GT_t_cljs$core$async37588 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37588(alt_handler__$1,flag__$1,cb__$1,meta37589){
return (new cljs.core.async.t_cljs$core$async37588(alt_handler__$1,flag__$1,cb__$1,meta37589));
});

}

return (new cljs.core.async.t_cljs$core$async37588(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37591_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37591_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37592_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37592_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__31084__auto__ = wport;
if(cljs.core.truth_(or__31084__auto__)){
return or__31084__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37593 = (i + (1));
i = G__37593;
continue;
}
} else {
return null;
}
break;
}
})();
var or__31084__auto__ = ret;
if(cljs.core.truth_(or__31084__auto__)){
return or__31084__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__31072__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__31072__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__31072__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__32166__auto__ = [];
var len__32159__auto___37599 = arguments.length;
var i__32160__auto___37600 = (0);
while(true){
if((i__32160__auto___37600 < len__32159__auto___37599)){
args__32166__auto__.push((arguments[i__32160__auto___37600]));

var G__37601 = (i__32160__auto___37600 + (1));
i__32160__auto___37600 = G__37601;
continue;
} else {
}
break;
}

var argseq__32167__auto__ = ((((1) < args__32166__auto__.length))?(new cljs.core.IndexedSeq(args__32166__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32167__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37596){
var map__37597 = p__37596;
var map__37597__$1 = ((((!((map__37597 == null)))?((((map__37597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37597):map__37597);
var opts = map__37597__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37594){
var G__37595 = cljs.core.first.call(null,seq37594);
var seq37594__$1 = cljs.core.next.call(null,seq37594);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37595,seq37594__$1);
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
var args37602 = [];
var len__32159__auto___37652 = arguments.length;
var i__32160__auto___37653 = (0);
while(true){
if((i__32160__auto___37653 < len__32159__auto___37652)){
args37602.push((arguments[i__32160__auto___37653]));

var G__37654 = (i__32160__auto___37653 + (1));
i__32160__auto___37653 = G__37654;
continue;
} else {
}
break;
}

var G__37604 = args37602.length;
switch (G__37604) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37602.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37489__auto___37656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___37656){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___37656){
return (function (state_37628){
var state_val_37629 = (state_37628[(1)]);
if((state_val_37629 === (7))){
var inst_37624 = (state_37628[(2)]);
var state_37628__$1 = state_37628;
var statearr_37630_37657 = state_37628__$1;
(statearr_37630_37657[(2)] = inst_37624);

(statearr_37630_37657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (1))){
var state_37628__$1 = state_37628;
var statearr_37631_37658 = state_37628__$1;
(statearr_37631_37658[(2)] = null);

(statearr_37631_37658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (4))){
var inst_37607 = (state_37628[(7)]);
var inst_37607__$1 = (state_37628[(2)]);
var inst_37608 = (inst_37607__$1 == null);
var state_37628__$1 = (function (){var statearr_37632 = state_37628;
(statearr_37632[(7)] = inst_37607__$1);

return statearr_37632;
})();
if(cljs.core.truth_(inst_37608)){
var statearr_37633_37659 = state_37628__$1;
(statearr_37633_37659[(1)] = (5));

} else {
var statearr_37634_37660 = state_37628__$1;
(statearr_37634_37660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (13))){
var state_37628__$1 = state_37628;
var statearr_37635_37661 = state_37628__$1;
(statearr_37635_37661[(2)] = null);

(statearr_37635_37661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (6))){
var inst_37607 = (state_37628[(7)]);
var state_37628__$1 = state_37628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37628__$1,(11),to,inst_37607);
} else {
if((state_val_37629 === (3))){
var inst_37626 = (state_37628[(2)]);
var state_37628__$1 = state_37628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37628__$1,inst_37626);
} else {
if((state_val_37629 === (12))){
var state_37628__$1 = state_37628;
var statearr_37636_37662 = state_37628__$1;
(statearr_37636_37662[(2)] = null);

(statearr_37636_37662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (2))){
var state_37628__$1 = state_37628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37628__$1,(4),from);
} else {
if((state_val_37629 === (11))){
var inst_37617 = (state_37628[(2)]);
var state_37628__$1 = state_37628;
if(cljs.core.truth_(inst_37617)){
var statearr_37637_37663 = state_37628__$1;
(statearr_37637_37663[(1)] = (12));

} else {
var statearr_37638_37664 = state_37628__$1;
(statearr_37638_37664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (9))){
var state_37628__$1 = state_37628;
var statearr_37639_37665 = state_37628__$1;
(statearr_37639_37665[(2)] = null);

(statearr_37639_37665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (5))){
var state_37628__$1 = state_37628;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37640_37666 = state_37628__$1;
(statearr_37640_37666[(1)] = (8));

} else {
var statearr_37641_37667 = state_37628__$1;
(statearr_37641_37667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (14))){
var inst_37622 = (state_37628[(2)]);
var state_37628__$1 = state_37628;
var statearr_37642_37668 = state_37628__$1;
(statearr_37642_37668[(2)] = inst_37622);

(statearr_37642_37668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (10))){
var inst_37614 = (state_37628[(2)]);
var state_37628__$1 = state_37628;
var statearr_37643_37669 = state_37628__$1;
(statearr_37643_37669[(2)] = inst_37614);

(statearr_37643_37669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (8))){
var inst_37611 = cljs.core.async.close_BANG_.call(null,to);
var state_37628__$1 = state_37628;
var statearr_37644_37670 = state_37628__$1;
(statearr_37644_37670[(2)] = inst_37611);

(statearr_37644_37670[(1)] = (10));


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
});})(c__37489__auto___37656))
;
return ((function (switch__37377__auto__,c__37489__auto___37656){
return (function() {
var cljs$core$async$state_machine__37378__auto__ = null;
var cljs$core$async$state_machine__37378__auto____0 = (function (){
var statearr_37648 = [null,null,null,null,null,null,null,null];
(statearr_37648[(0)] = cljs$core$async$state_machine__37378__auto__);

(statearr_37648[(1)] = (1));

return statearr_37648;
});
var cljs$core$async$state_machine__37378__auto____1 = (function (state_37628){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_37628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e37649){if((e37649 instanceof Object)){
var ex__37381__auto__ = e37649;
var statearr_37650_37671 = state_37628;
(statearr_37650_37671[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37672 = state_37628;
state_37628 = G__37672;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$state_machine__37378__auto__ = function(state_37628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37378__auto____1.call(this,state_37628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37378__auto____0;
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37378__auto____1;
return cljs$core$async$state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___37656))
})();
var state__37491__auto__ = (function (){var statearr_37651 = f__37490__auto__.call(null);
(statearr_37651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___37656);

return statearr_37651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___37656))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37860){
var vec__37861 = p__37860;
var v = cljs.core.nth.call(null,vec__37861,(0),null);
var p = cljs.core.nth.call(null,vec__37861,(1),null);
var job = vec__37861;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37489__auto___38047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___38047,res,vec__37861,v,p,job,jobs,results){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___38047,res,vec__37861,v,p,job,jobs,results){
return (function (state_37868){
var state_val_37869 = (state_37868[(1)]);
if((state_val_37869 === (1))){
var state_37868__$1 = state_37868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37868__$1,(2),res,v);
} else {
if((state_val_37869 === (2))){
var inst_37865 = (state_37868[(2)]);
var inst_37866 = cljs.core.async.close_BANG_.call(null,res);
var state_37868__$1 = (function (){var statearr_37870 = state_37868;
(statearr_37870[(7)] = inst_37865);

return statearr_37870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37868__$1,inst_37866);
} else {
return null;
}
}
});})(c__37489__auto___38047,res,vec__37861,v,p,job,jobs,results))
;
return ((function (switch__37377__auto__,c__37489__auto___38047,res,vec__37861,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0 = (function (){
var statearr_37874 = [null,null,null,null,null,null,null,null];
(statearr_37874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__);

(statearr_37874[(1)] = (1));

return statearr_37874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1 = (function (state_37868){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_37868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e37875){if((e37875 instanceof Object)){
var ex__37381__auto__ = e37875;
var statearr_37876_38048 = state_37868;
(statearr_37876_38048[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38049 = state_37868;
state_37868 = G__38049;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__ = function(state_37868){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1.call(this,state_37868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___38047,res,vec__37861,v,p,job,jobs,results))
})();
var state__37491__auto__ = (function (){var statearr_37877 = f__37490__auto__.call(null);
(statearr_37877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___38047);

return statearr_37877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___38047,res,vec__37861,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37878){
var vec__37879 = p__37878;
var v = cljs.core.nth.call(null,vec__37879,(0),null);
var p = cljs.core.nth.call(null,vec__37879,(1),null);
var job = vec__37879;
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
var n__31999__auto___38050 = n;
var __38051 = (0);
while(true){
if((__38051 < n__31999__auto___38050)){
var G__37882_38052 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37882_38052) {
case "compute":
var c__37489__auto___38054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38051,c__37489__auto___38054,G__37882_38052,n__31999__auto___38050,jobs,results,process,async){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (__38051,c__37489__auto___38054,G__37882_38052,n__31999__auto___38050,jobs,results,process,async){
return (function (state_37895){
var state_val_37896 = (state_37895[(1)]);
if((state_val_37896 === (1))){
var state_37895__$1 = state_37895;
var statearr_37897_38055 = state_37895__$1;
(statearr_37897_38055[(2)] = null);

(statearr_37897_38055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (2))){
var state_37895__$1 = state_37895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37895__$1,(4),jobs);
} else {
if((state_val_37896 === (3))){
var inst_37893 = (state_37895[(2)]);
var state_37895__$1 = state_37895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37895__$1,inst_37893);
} else {
if((state_val_37896 === (4))){
var inst_37885 = (state_37895[(2)]);
var inst_37886 = process.call(null,inst_37885);
var state_37895__$1 = state_37895;
if(cljs.core.truth_(inst_37886)){
var statearr_37898_38056 = state_37895__$1;
(statearr_37898_38056[(1)] = (5));

} else {
var statearr_37899_38057 = state_37895__$1;
(statearr_37899_38057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (5))){
var state_37895__$1 = state_37895;
var statearr_37900_38058 = state_37895__$1;
(statearr_37900_38058[(2)] = null);

(statearr_37900_38058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (6))){
var state_37895__$1 = state_37895;
var statearr_37901_38059 = state_37895__$1;
(statearr_37901_38059[(2)] = null);

(statearr_37901_38059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (7))){
var inst_37891 = (state_37895[(2)]);
var state_37895__$1 = state_37895;
var statearr_37902_38060 = state_37895__$1;
(statearr_37902_38060[(2)] = inst_37891);

(statearr_37902_38060[(1)] = (3));


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
});})(__38051,c__37489__auto___38054,G__37882_38052,n__31999__auto___38050,jobs,results,process,async))
;
return ((function (__38051,switch__37377__auto__,c__37489__auto___38054,G__37882_38052,n__31999__auto___38050,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0 = (function (){
var statearr_37906 = [null,null,null,null,null,null,null];
(statearr_37906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__);

(statearr_37906[(1)] = (1));

return statearr_37906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1 = (function (state_37895){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_37895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e37907){if((e37907 instanceof Object)){
var ex__37381__auto__ = e37907;
var statearr_37908_38061 = state_37895;
(statearr_37908_38061[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38062 = state_37895;
state_37895 = G__38062;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__ = function(state_37895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1.call(this,state_37895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__;
})()
;})(__38051,switch__37377__auto__,c__37489__auto___38054,G__37882_38052,n__31999__auto___38050,jobs,results,process,async))
})();
var state__37491__auto__ = (function (){var statearr_37909 = f__37490__auto__.call(null);
(statearr_37909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___38054);

return statearr_37909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(__38051,c__37489__auto___38054,G__37882_38052,n__31999__auto___38050,jobs,results,process,async))
);


break;
case "async":
var c__37489__auto___38063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38051,c__37489__auto___38063,G__37882_38052,n__31999__auto___38050,jobs,results,process,async){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (__38051,c__37489__auto___38063,G__37882_38052,n__31999__auto___38050,jobs,results,process,async){
return (function (state_37922){
var state_val_37923 = (state_37922[(1)]);
if((state_val_37923 === (1))){
var state_37922__$1 = state_37922;
var statearr_37924_38064 = state_37922__$1;
(statearr_37924_38064[(2)] = null);

(statearr_37924_38064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37923 === (2))){
var state_37922__$1 = state_37922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37922__$1,(4),jobs);
} else {
if((state_val_37923 === (3))){
var inst_37920 = (state_37922[(2)]);
var state_37922__$1 = state_37922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37922__$1,inst_37920);
} else {
if((state_val_37923 === (4))){
var inst_37912 = (state_37922[(2)]);
var inst_37913 = async.call(null,inst_37912);
var state_37922__$1 = state_37922;
if(cljs.core.truth_(inst_37913)){
var statearr_37925_38065 = state_37922__$1;
(statearr_37925_38065[(1)] = (5));

} else {
var statearr_37926_38066 = state_37922__$1;
(statearr_37926_38066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37923 === (5))){
var state_37922__$1 = state_37922;
var statearr_37927_38067 = state_37922__$1;
(statearr_37927_38067[(2)] = null);

(statearr_37927_38067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37923 === (6))){
var state_37922__$1 = state_37922;
var statearr_37928_38068 = state_37922__$1;
(statearr_37928_38068[(2)] = null);

(statearr_37928_38068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37923 === (7))){
var inst_37918 = (state_37922[(2)]);
var state_37922__$1 = state_37922;
var statearr_37929_38069 = state_37922__$1;
(statearr_37929_38069[(2)] = inst_37918);

(statearr_37929_38069[(1)] = (3));


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
});})(__38051,c__37489__auto___38063,G__37882_38052,n__31999__auto___38050,jobs,results,process,async))
;
return ((function (__38051,switch__37377__auto__,c__37489__auto___38063,G__37882_38052,n__31999__auto___38050,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0 = (function (){
var statearr_37933 = [null,null,null,null,null,null,null];
(statearr_37933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__);

(statearr_37933[(1)] = (1));

return statearr_37933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1 = (function (state_37922){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_37922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e37934){if((e37934 instanceof Object)){
var ex__37381__auto__ = e37934;
var statearr_37935_38070 = state_37922;
(statearr_37935_38070[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38071 = state_37922;
state_37922 = G__38071;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__ = function(state_37922){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1.call(this,state_37922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__;
})()
;})(__38051,switch__37377__auto__,c__37489__auto___38063,G__37882_38052,n__31999__auto___38050,jobs,results,process,async))
})();
var state__37491__auto__ = (function (){var statearr_37936 = f__37490__auto__.call(null);
(statearr_37936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___38063);

return statearr_37936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(__38051,c__37489__auto___38063,G__37882_38052,n__31999__auto___38050,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38072 = (__38051 + (1));
__38051 = G__38072;
continue;
} else {
}
break;
}

var c__37489__auto___38073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___38073,jobs,results,process,async){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___38073,jobs,results,process,async){
return (function (state_37958){
var state_val_37959 = (state_37958[(1)]);
if((state_val_37959 === (1))){
var state_37958__$1 = state_37958;
var statearr_37960_38074 = state_37958__$1;
(statearr_37960_38074[(2)] = null);

(statearr_37960_38074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37959 === (2))){
var state_37958__$1 = state_37958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37958__$1,(4),from);
} else {
if((state_val_37959 === (3))){
var inst_37956 = (state_37958[(2)]);
var state_37958__$1 = state_37958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37958__$1,inst_37956);
} else {
if((state_val_37959 === (4))){
var inst_37939 = (state_37958[(7)]);
var inst_37939__$1 = (state_37958[(2)]);
var inst_37940 = (inst_37939__$1 == null);
var state_37958__$1 = (function (){var statearr_37961 = state_37958;
(statearr_37961[(7)] = inst_37939__$1);

return statearr_37961;
})();
if(cljs.core.truth_(inst_37940)){
var statearr_37962_38075 = state_37958__$1;
(statearr_37962_38075[(1)] = (5));

} else {
var statearr_37963_38076 = state_37958__$1;
(statearr_37963_38076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37959 === (5))){
var inst_37942 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37958__$1 = state_37958;
var statearr_37964_38077 = state_37958__$1;
(statearr_37964_38077[(2)] = inst_37942);

(statearr_37964_38077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37959 === (6))){
var inst_37944 = (state_37958[(8)]);
var inst_37939 = (state_37958[(7)]);
var inst_37944__$1 = cljs.core.async.chan.call(null,(1));
var inst_37945 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37946 = [inst_37939,inst_37944__$1];
var inst_37947 = (new cljs.core.PersistentVector(null,2,(5),inst_37945,inst_37946,null));
var state_37958__$1 = (function (){var statearr_37965 = state_37958;
(statearr_37965[(8)] = inst_37944__$1);

return statearr_37965;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37958__$1,(8),jobs,inst_37947);
} else {
if((state_val_37959 === (7))){
var inst_37954 = (state_37958[(2)]);
var state_37958__$1 = state_37958;
var statearr_37966_38078 = state_37958__$1;
(statearr_37966_38078[(2)] = inst_37954);

(statearr_37966_38078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37959 === (8))){
var inst_37944 = (state_37958[(8)]);
var inst_37949 = (state_37958[(2)]);
var state_37958__$1 = (function (){var statearr_37967 = state_37958;
(statearr_37967[(9)] = inst_37949);

return statearr_37967;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37958__$1,(9),results,inst_37944);
} else {
if((state_val_37959 === (9))){
var inst_37951 = (state_37958[(2)]);
var state_37958__$1 = (function (){var statearr_37968 = state_37958;
(statearr_37968[(10)] = inst_37951);

return statearr_37968;
})();
var statearr_37969_38079 = state_37958__$1;
(statearr_37969_38079[(2)] = null);

(statearr_37969_38079[(1)] = (2));


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
});})(c__37489__auto___38073,jobs,results,process,async))
;
return ((function (switch__37377__auto__,c__37489__auto___38073,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0 = (function (){
var statearr_37973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__);

(statearr_37973[(1)] = (1));

return statearr_37973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1 = (function (state_37958){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_37958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e37974){if((e37974 instanceof Object)){
var ex__37381__auto__ = e37974;
var statearr_37975_38080 = state_37958;
(statearr_37975_38080[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38081 = state_37958;
state_37958 = G__38081;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__ = function(state_37958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1.call(this,state_37958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___38073,jobs,results,process,async))
})();
var state__37491__auto__ = (function (){var statearr_37976 = f__37490__auto__.call(null);
(statearr_37976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___38073);

return statearr_37976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___38073,jobs,results,process,async))
);


var c__37489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto__,jobs,results,process,async){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto__,jobs,results,process,async){
return (function (state_38014){
var state_val_38015 = (state_38014[(1)]);
if((state_val_38015 === (7))){
var inst_38010 = (state_38014[(2)]);
var state_38014__$1 = state_38014;
var statearr_38016_38082 = state_38014__$1;
(statearr_38016_38082[(2)] = inst_38010);

(statearr_38016_38082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (20))){
var state_38014__$1 = state_38014;
var statearr_38017_38083 = state_38014__$1;
(statearr_38017_38083[(2)] = null);

(statearr_38017_38083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (1))){
var state_38014__$1 = state_38014;
var statearr_38018_38084 = state_38014__$1;
(statearr_38018_38084[(2)] = null);

(statearr_38018_38084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (4))){
var inst_37979 = (state_38014[(7)]);
var inst_37979__$1 = (state_38014[(2)]);
var inst_37980 = (inst_37979__$1 == null);
var state_38014__$1 = (function (){var statearr_38019 = state_38014;
(statearr_38019[(7)] = inst_37979__$1);

return statearr_38019;
})();
if(cljs.core.truth_(inst_37980)){
var statearr_38020_38085 = state_38014__$1;
(statearr_38020_38085[(1)] = (5));

} else {
var statearr_38021_38086 = state_38014__$1;
(statearr_38021_38086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (15))){
var inst_37992 = (state_38014[(8)]);
var state_38014__$1 = state_38014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38014__$1,(18),to,inst_37992);
} else {
if((state_val_38015 === (21))){
var inst_38005 = (state_38014[(2)]);
var state_38014__$1 = state_38014;
var statearr_38022_38087 = state_38014__$1;
(statearr_38022_38087[(2)] = inst_38005);

(statearr_38022_38087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (13))){
var inst_38007 = (state_38014[(2)]);
var state_38014__$1 = (function (){var statearr_38023 = state_38014;
(statearr_38023[(9)] = inst_38007);

return statearr_38023;
})();
var statearr_38024_38088 = state_38014__$1;
(statearr_38024_38088[(2)] = null);

(statearr_38024_38088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (6))){
var inst_37979 = (state_38014[(7)]);
var state_38014__$1 = state_38014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38014__$1,(11),inst_37979);
} else {
if((state_val_38015 === (17))){
var inst_38000 = (state_38014[(2)]);
var state_38014__$1 = state_38014;
if(cljs.core.truth_(inst_38000)){
var statearr_38025_38089 = state_38014__$1;
(statearr_38025_38089[(1)] = (19));

} else {
var statearr_38026_38090 = state_38014__$1;
(statearr_38026_38090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (3))){
var inst_38012 = (state_38014[(2)]);
var state_38014__$1 = state_38014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38014__$1,inst_38012);
} else {
if((state_val_38015 === (12))){
var inst_37989 = (state_38014[(10)]);
var state_38014__$1 = state_38014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38014__$1,(14),inst_37989);
} else {
if((state_val_38015 === (2))){
var state_38014__$1 = state_38014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38014__$1,(4),results);
} else {
if((state_val_38015 === (19))){
var state_38014__$1 = state_38014;
var statearr_38027_38091 = state_38014__$1;
(statearr_38027_38091[(2)] = null);

(statearr_38027_38091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (11))){
var inst_37989 = (state_38014[(2)]);
var state_38014__$1 = (function (){var statearr_38028 = state_38014;
(statearr_38028[(10)] = inst_37989);

return statearr_38028;
})();
var statearr_38029_38092 = state_38014__$1;
(statearr_38029_38092[(2)] = null);

(statearr_38029_38092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (9))){
var state_38014__$1 = state_38014;
var statearr_38030_38093 = state_38014__$1;
(statearr_38030_38093[(2)] = null);

(statearr_38030_38093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (5))){
var state_38014__$1 = state_38014;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38031_38094 = state_38014__$1;
(statearr_38031_38094[(1)] = (8));

} else {
var statearr_38032_38095 = state_38014__$1;
(statearr_38032_38095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (14))){
var inst_37992 = (state_38014[(8)]);
var inst_37994 = (state_38014[(11)]);
var inst_37992__$1 = (state_38014[(2)]);
var inst_37993 = (inst_37992__$1 == null);
var inst_37994__$1 = cljs.core.not.call(null,inst_37993);
var state_38014__$1 = (function (){var statearr_38033 = state_38014;
(statearr_38033[(8)] = inst_37992__$1);

(statearr_38033[(11)] = inst_37994__$1);

return statearr_38033;
})();
if(inst_37994__$1){
var statearr_38034_38096 = state_38014__$1;
(statearr_38034_38096[(1)] = (15));

} else {
var statearr_38035_38097 = state_38014__$1;
(statearr_38035_38097[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (16))){
var inst_37994 = (state_38014[(11)]);
var state_38014__$1 = state_38014;
var statearr_38036_38098 = state_38014__$1;
(statearr_38036_38098[(2)] = inst_37994);

(statearr_38036_38098[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (10))){
var inst_37986 = (state_38014[(2)]);
var state_38014__$1 = state_38014;
var statearr_38037_38099 = state_38014__$1;
(statearr_38037_38099[(2)] = inst_37986);

(statearr_38037_38099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (18))){
var inst_37997 = (state_38014[(2)]);
var state_38014__$1 = state_38014;
var statearr_38038_38100 = state_38014__$1;
(statearr_38038_38100[(2)] = inst_37997);

(statearr_38038_38100[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38015 === (8))){
var inst_37983 = cljs.core.async.close_BANG_.call(null,to);
var state_38014__$1 = state_38014;
var statearr_38039_38101 = state_38014__$1;
(statearr_38039_38101[(2)] = inst_37983);

(statearr_38039_38101[(1)] = (10));


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
});})(c__37489__auto__,jobs,results,process,async))
;
return ((function (switch__37377__auto__,c__37489__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0 = (function (){
var statearr_38043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38043[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__);

(statearr_38043[(1)] = (1));

return statearr_38043;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1 = (function (state_38014){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_38014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e38044){if((e38044 instanceof Object)){
var ex__37381__auto__ = e38044;
var statearr_38045_38102 = state_38014;
(statearr_38045_38102[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38103 = state_38014;
state_38014 = G__38103;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__ = function(state_38014){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1.call(this,state_38014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto__,jobs,results,process,async))
})();
var state__37491__auto__ = (function (){var statearr_38046 = f__37490__auto__.call(null);
(statearr_38046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto__);

return statearr_38046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto__,jobs,results,process,async))
);

return c__37489__auto__;
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
var args38104 = [];
var len__32159__auto___38107 = arguments.length;
var i__32160__auto___38108 = (0);
while(true){
if((i__32160__auto___38108 < len__32159__auto___38107)){
args38104.push((arguments[i__32160__auto___38108]));

var G__38109 = (i__32160__auto___38108 + (1));
i__32160__auto___38108 = G__38109;
continue;
} else {
}
break;
}

var G__38106 = args38104.length;
switch (G__38106) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38104.length)].join('')));

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
var args38111 = [];
var len__32159__auto___38114 = arguments.length;
var i__32160__auto___38115 = (0);
while(true){
if((i__32160__auto___38115 < len__32159__auto___38114)){
args38111.push((arguments[i__32160__auto___38115]));

var G__38116 = (i__32160__auto___38115 + (1));
i__32160__auto___38115 = G__38116;
continue;
} else {
}
break;
}

var G__38113 = args38111.length;
switch (G__38113) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38111.length)].join('')));

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
var args38118 = [];
var len__32159__auto___38171 = arguments.length;
var i__32160__auto___38172 = (0);
while(true){
if((i__32160__auto___38172 < len__32159__auto___38171)){
args38118.push((arguments[i__32160__auto___38172]));

var G__38173 = (i__32160__auto___38172 + (1));
i__32160__auto___38172 = G__38173;
continue;
} else {
}
break;
}

var G__38120 = args38118.length;
switch (G__38120) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38118.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37489__auto___38175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___38175,tc,fc){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___38175,tc,fc){
return (function (state_38146){
var state_val_38147 = (state_38146[(1)]);
if((state_val_38147 === (7))){
var inst_38142 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
var statearr_38148_38176 = state_38146__$1;
(statearr_38148_38176[(2)] = inst_38142);

(statearr_38148_38176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (1))){
var state_38146__$1 = state_38146;
var statearr_38149_38177 = state_38146__$1;
(statearr_38149_38177[(2)] = null);

(statearr_38149_38177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (4))){
var inst_38123 = (state_38146[(7)]);
var inst_38123__$1 = (state_38146[(2)]);
var inst_38124 = (inst_38123__$1 == null);
var state_38146__$1 = (function (){var statearr_38150 = state_38146;
(statearr_38150[(7)] = inst_38123__$1);

return statearr_38150;
})();
if(cljs.core.truth_(inst_38124)){
var statearr_38151_38178 = state_38146__$1;
(statearr_38151_38178[(1)] = (5));

} else {
var statearr_38152_38179 = state_38146__$1;
(statearr_38152_38179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (13))){
var state_38146__$1 = state_38146;
var statearr_38153_38180 = state_38146__$1;
(statearr_38153_38180[(2)] = null);

(statearr_38153_38180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (6))){
var inst_38123 = (state_38146[(7)]);
var inst_38129 = p.call(null,inst_38123);
var state_38146__$1 = state_38146;
if(cljs.core.truth_(inst_38129)){
var statearr_38154_38181 = state_38146__$1;
(statearr_38154_38181[(1)] = (9));

} else {
var statearr_38155_38182 = state_38146__$1;
(statearr_38155_38182[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (3))){
var inst_38144 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38146__$1,inst_38144);
} else {
if((state_val_38147 === (12))){
var state_38146__$1 = state_38146;
var statearr_38156_38183 = state_38146__$1;
(statearr_38156_38183[(2)] = null);

(statearr_38156_38183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (2))){
var state_38146__$1 = state_38146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38146__$1,(4),ch);
} else {
if((state_val_38147 === (11))){
var inst_38123 = (state_38146[(7)]);
var inst_38133 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38146__$1,(8),inst_38133,inst_38123);
} else {
if((state_val_38147 === (9))){
var state_38146__$1 = state_38146;
var statearr_38157_38184 = state_38146__$1;
(statearr_38157_38184[(2)] = tc);

(statearr_38157_38184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (5))){
var inst_38126 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38127 = cljs.core.async.close_BANG_.call(null,fc);
var state_38146__$1 = (function (){var statearr_38158 = state_38146;
(statearr_38158[(8)] = inst_38126);

return statearr_38158;
})();
var statearr_38159_38185 = state_38146__$1;
(statearr_38159_38185[(2)] = inst_38127);

(statearr_38159_38185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (14))){
var inst_38140 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
var statearr_38160_38186 = state_38146__$1;
(statearr_38160_38186[(2)] = inst_38140);

(statearr_38160_38186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (10))){
var state_38146__$1 = state_38146;
var statearr_38161_38187 = state_38146__$1;
(statearr_38161_38187[(2)] = fc);

(statearr_38161_38187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (8))){
var inst_38135 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
if(cljs.core.truth_(inst_38135)){
var statearr_38162_38188 = state_38146__$1;
(statearr_38162_38188[(1)] = (12));

} else {
var statearr_38163_38189 = state_38146__$1;
(statearr_38163_38189[(1)] = (13));

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
});})(c__37489__auto___38175,tc,fc))
;
return ((function (switch__37377__auto__,c__37489__auto___38175,tc,fc){
return (function() {
var cljs$core$async$state_machine__37378__auto__ = null;
var cljs$core$async$state_machine__37378__auto____0 = (function (){
var statearr_38167 = [null,null,null,null,null,null,null,null,null];
(statearr_38167[(0)] = cljs$core$async$state_machine__37378__auto__);

(statearr_38167[(1)] = (1));

return statearr_38167;
});
var cljs$core$async$state_machine__37378__auto____1 = (function (state_38146){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_38146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e38168){if((e38168 instanceof Object)){
var ex__37381__auto__ = e38168;
var statearr_38169_38190 = state_38146;
(statearr_38169_38190[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38191 = state_38146;
state_38146 = G__38191;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$state_machine__37378__auto__ = function(state_38146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37378__auto____1.call(this,state_38146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37378__auto____0;
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37378__auto____1;
return cljs$core$async$state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___38175,tc,fc))
})();
var state__37491__auto__ = (function (){var statearr_38170 = f__37490__auto__.call(null);
(statearr_38170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___38175);

return statearr_38170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___38175,tc,fc))
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
var c__37489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto__){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto__){
return (function (state_38255){
var state_val_38256 = (state_38255[(1)]);
if((state_val_38256 === (7))){
var inst_38251 = (state_38255[(2)]);
var state_38255__$1 = state_38255;
var statearr_38257_38278 = state_38255__$1;
(statearr_38257_38278[(2)] = inst_38251);

(statearr_38257_38278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (1))){
var inst_38235 = init;
var state_38255__$1 = (function (){var statearr_38258 = state_38255;
(statearr_38258[(7)] = inst_38235);

return statearr_38258;
})();
var statearr_38259_38279 = state_38255__$1;
(statearr_38259_38279[(2)] = null);

(statearr_38259_38279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (4))){
var inst_38238 = (state_38255[(8)]);
var inst_38238__$1 = (state_38255[(2)]);
var inst_38239 = (inst_38238__$1 == null);
var state_38255__$1 = (function (){var statearr_38260 = state_38255;
(statearr_38260[(8)] = inst_38238__$1);

return statearr_38260;
})();
if(cljs.core.truth_(inst_38239)){
var statearr_38261_38280 = state_38255__$1;
(statearr_38261_38280[(1)] = (5));

} else {
var statearr_38262_38281 = state_38255__$1;
(statearr_38262_38281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (6))){
var inst_38238 = (state_38255[(8)]);
var inst_38242 = (state_38255[(9)]);
var inst_38235 = (state_38255[(7)]);
var inst_38242__$1 = f.call(null,inst_38235,inst_38238);
var inst_38243 = cljs.core.reduced_QMARK_.call(null,inst_38242__$1);
var state_38255__$1 = (function (){var statearr_38263 = state_38255;
(statearr_38263[(9)] = inst_38242__$1);

return statearr_38263;
})();
if(inst_38243){
var statearr_38264_38282 = state_38255__$1;
(statearr_38264_38282[(1)] = (8));

} else {
var statearr_38265_38283 = state_38255__$1;
(statearr_38265_38283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (3))){
var inst_38253 = (state_38255[(2)]);
var state_38255__$1 = state_38255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38255__$1,inst_38253);
} else {
if((state_val_38256 === (2))){
var state_38255__$1 = state_38255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38255__$1,(4),ch);
} else {
if((state_val_38256 === (9))){
var inst_38242 = (state_38255[(9)]);
var inst_38235 = inst_38242;
var state_38255__$1 = (function (){var statearr_38266 = state_38255;
(statearr_38266[(7)] = inst_38235);

return statearr_38266;
})();
var statearr_38267_38284 = state_38255__$1;
(statearr_38267_38284[(2)] = null);

(statearr_38267_38284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (5))){
var inst_38235 = (state_38255[(7)]);
var state_38255__$1 = state_38255;
var statearr_38268_38285 = state_38255__$1;
(statearr_38268_38285[(2)] = inst_38235);

(statearr_38268_38285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (10))){
var inst_38249 = (state_38255[(2)]);
var state_38255__$1 = state_38255;
var statearr_38269_38286 = state_38255__$1;
(statearr_38269_38286[(2)] = inst_38249);

(statearr_38269_38286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (8))){
var inst_38242 = (state_38255[(9)]);
var inst_38245 = cljs.core.deref.call(null,inst_38242);
var state_38255__$1 = state_38255;
var statearr_38270_38287 = state_38255__$1;
(statearr_38270_38287[(2)] = inst_38245);

(statearr_38270_38287[(1)] = (10));


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
});})(c__37489__auto__))
;
return ((function (switch__37377__auto__,c__37489__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37378__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37378__auto____0 = (function (){
var statearr_38274 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38274[(0)] = cljs$core$async$reduce_$_state_machine__37378__auto__);

(statearr_38274[(1)] = (1));

return statearr_38274;
});
var cljs$core$async$reduce_$_state_machine__37378__auto____1 = (function (state_38255){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_38255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e38275){if((e38275 instanceof Object)){
var ex__37381__auto__ = e38275;
var statearr_38276_38288 = state_38255;
(statearr_38276_38288[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38289 = state_38255;
state_38255 = G__38289;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37378__auto__ = function(state_38255){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37378__auto____1.call(this,state_38255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37378__auto____0;
cljs$core$async$reduce_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37378__auto____1;
return cljs$core$async$reduce_$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto__))
})();
var state__37491__auto__ = (function (){var statearr_38277 = f__37490__auto__.call(null);
(statearr_38277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto__);

return statearr_38277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto__))
);

return c__37489__auto__;
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
var args38290 = [];
var len__32159__auto___38342 = arguments.length;
var i__32160__auto___38343 = (0);
while(true){
if((i__32160__auto___38343 < len__32159__auto___38342)){
args38290.push((arguments[i__32160__auto___38343]));

var G__38344 = (i__32160__auto___38343 + (1));
i__32160__auto___38343 = G__38344;
continue;
} else {
}
break;
}

var G__38292 = args38290.length;
switch (G__38292) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38290.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto__){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto__){
return (function (state_38317){
var state_val_38318 = (state_38317[(1)]);
if((state_val_38318 === (7))){
var inst_38299 = (state_38317[(2)]);
var state_38317__$1 = state_38317;
var statearr_38319_38346 = state_38317__$1;
(statearr_38319_38346[(2)] = inst_38299);

(statearr_38319_38346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (1))){
var inst_38293 = cljs.core.seq.call(null,coll);
var inst_38294 = inst_38293;
var state_38317__$1 = (function (){var statearr_38320 = state_38317;
(statearr_38320[(7)] = inst_38294);

return statearr_38320;
})();
var statearr_38321_38347 = state_38317__$1;
(statearr_38321_38347[(2)] = null);

(statearr_38321_38347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (4))){
var inst_38294 = (state_38317[(7)]);
var inst_38297 = cljs.core.first.call(null,inst_38294);
var state_38317__$1 = state_38317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38317__$1,(7),ch,inst_38297);
} else {
if((state_val_38318 === (13))){
var inst_38311 = (state_38317[(2)]);
var state_38317__$1 = state_38317;
var statearr_38322_38348 = state_38317__$1;
(statearr_38322_38348[(2)] = inst_38311);

(statearr_38322_38348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (6))){
var inst_38302 = (state_38317[(2)]);
var state_38317__$1 = state_38317;
if(cljs.core.truth_(inst_38302)){
var statearr_38323_38349 = state_38317__$1;
(statearr_38323_38349[(1)] = (8));

} else {
var statearr_38324_38350 = state_38317__$1;
(statearr_38324_38350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (3))){
var inst_38315 = (state_38317[(2)]);
var state_38317__$1 = state_38317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38317__$1,inst_38315);
} else {
if((state_val_38318 === (12))){
var state_38317__$1 = state_38317;
var statearr_38325_38351 = state_38317__$1;
(statearr_38325_38351[(2)] = null);

(statearr_38325_38351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (2))){
var inst_38294 = (state_38317[(7)]);
var state_38317__$1 = state_38317;
if(cljs.core.truth_(inst_38294)){
var statearr_38326_38352 = state_38317__$1;
(statearr_38326_38352[(1)] = (4));

} else {
var statearr_38327_38353 = state_38317__$1;
(statearr_38327_38353[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (11))){
var inst_38308 = cljs.core.async.close_BANG_.call(null,ch);
var state_38317__$1 = state_38317;
var statearr_38328_38354 = state_38317__$1;
(statearr_38328_38354[(2)] = inst_38308);

(statearr_38328_38354[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (9))){
var state_38317__$1 = state_38317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38329_38355 = state_38317__$1;
(statearr_38329_38355[(1)] = (11));

} else {
var statearr_38330_38356 = state_38317__$1;
(statearr_38330_38356[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (5))){
var inst_38294 = (state_38317[(7)]);
var state_38317__$1 = state_38317;
var statearr_38331_38357 = state_38317__$1;
(statearr_38331_38357[(2)] = inst_38294);

(statearr_38331_38357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (10))){
var inst_38313 = (state_38317[(2)]);
var state_38317__$1 = state_38317;
var statearr_38332_38358 = state_38317__$1;
(statearr_38332_38358[(2)] = inst_38313);

(statearr_38332_38358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (8))){
var inst_38294 = (state_38317[(7)]);
var inst_38304 = cljs.core.next.call(null,inst_38294);
var inst_38294__$1 = inst_38304;
var state_38317__$1 = (function (){var statearr_38333 = state_38317;
(statearr_38333[(7)] = inst_38294__$1);

return statearr_38333;
})();
var statearr_38334_38359 = state_38317__$1;
(statearr_38334_38359[(2)] = null);

(statearr_38334_38359[(1)] = (2));


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
});})(c__37489__auto__))
;
return ((function (switch__37377__auto__,c__37489__auto__){
return (function() {
var cljs$core$async$state_machine__37378__auto__ = null;
var cljs$core$async$state_machine__37378__auto____0 = (function (){
var statearr_38338 = [null,null,null,null,null,null,null,null];
(statearr_38338[(0)] = cljs$core$async$state_machine__37378__auto__);

(statearr_38338[(1)] = (1));

return statearr_38338;
});
var cljs$core$async$state_machine__37378__auto____1 = (function (state_38317){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_38317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e38339){if((e38339 instanceof Object)){
var ex__37381__auto__ = e38339;
var statearr_38340_38360 = state_38317;
(statearr_38340_38360[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38361 = state_38317;
state_38317 = G__38361;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$state_machine__37378__auto__ = function(state_38317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37378__auto____1.call(this,state_38317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37378__auto____0;
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37378__auto____1;
return cljs$core$async$state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto__))
})();
var state__37491__auto__ = (function (){var statearr_38341 = f__37490__auto__.call(null);
(statearr_38341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto__);

return statearr_38341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto__))
);

return c__37489__auto__;
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
var x__31747__auto__ = (((_ == null))?null:_);
var m__31748__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31747__auto__)]);
if(!((m__31748__auto__ == null))){
return m__31748__auto__.call(null,_);
} else {
var m__31748__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31748__auto____$1 == null))){
return m__31748__auto____$1.call(null,_);
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
var x__31747__auto__ = (((m == null))?null:m);
var m__31748__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31747__auto__)]);
if(!((m__31748__auto__ == null))){
return m__31748__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31748__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31748__auto____$1 == null))){
return m__31748__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__31747__auto__ = (((m == null))?null:m);
var m__31748__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31747__auto__)]);
if(!((m__31748__auto__ == null))){
return m__31748__auto__.call(null,m,ch);
} else {
var m__31748__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31748__auto____$1 == null))){
return m__31748__auto____$1.call(null,m,ch);
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
var x__31747__auto__ = (((m == null))?null:m);
var m__31748__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31747__auto__)]);
if(!((m__31748__auto__ == null))){
return m__31748__auto__.call(null,m);
} else {
var m__31748__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31748__auto____$1 == null))){
return m__31748__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async38587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38587 = (function (mult,ch,cs,meta38588){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta38588 = meta38588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38589,meta38588__$1){
var self__ = this;
var _38589__$1 = this;
return (new cljs.core.async.t_cljs$core$async38587(self__.mult,self__.ch,self__.cs,meta38588__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38589){
var self__ = this;
var _38589__$1 = this;
return self__.meta38588;
});})(cs))
;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38587.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38588","meta38588",-1746220169,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38587";

cljs.core.async.t_cljs$core$async38587.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cljs.core.async/t_cljs$core$async38587");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38587 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38587(mult__$1,ch__$1,cs__$1,meta38588){
return (new cljs.core.async.t_cljs$core$async38587(mult__$1,ch__$1,cs__$1,meta38588));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38587(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37489__auto___38812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___38812,cs,m,dchan,dctr,done){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___38812,cs,m,dchan,dctr,done){
return (function (state_38724){
var state_val_38725 = (state_38724[(1)]);
if((state_val_38725 === (7))){
var inst_38720 = (state_38724[(2)]);
var state_38724__$1 = state_38724;
var statearr_38726_38813 = state_38724__$1;
(statearr_38726_38813[(2)] = inst_38720);

(statearr_38726_38813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (20))){
var inst_38623 = (state_38724[(7)]);
var inst_38635 = cljs.core.first.call(null,inst_38623);
var inst_38636 = cljs.core.nth.call(null,inst_38635,(0),null);
var inst_38637 = cljs.core.nth.call(null,inst_38635,(1),null);
var state_38724__$1 = (function (){var statearr_38727 = state_38724;
(statearr_38727[(8)] = inst_38636);

return statearr_38727;
})();
if(cljs.core.truth_(inst_38637)){
var statearr_38728_38814 = state_38724__$1;
(statearr_38728_38814[(1)] = (22));

} else {
var statearr_38729_38815 = state_38724__$1;
(statearr_38729_38815[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (27))){
var inst_38672 = (state_38724[(9)]);
var inst_38592 = (state_38724[(10)]);
var inst_38665 = (state_38724[(11)]);
var inst_38667 = (state_38724[(12)]);
var inst_38672__$1 = cljs.core._nth.call(null,inst_38665,inst_38667);
var inst_38673 = cljs.core.async.put_BANG_.call(null,inst_38672__$1,inst_38592,done);
var state_38724__$1 = (function (){var statearr_38730 = state_38724;
(statearr_38730[(9)] = inst_38672__$1);

return statearr_38730;
})();
if(cljs.core.truth_(inst_38673)){
var statearr_38731_38816 = state_38724__$1;
(statearr_38731_38816[(1)] = (30));

} else {
var statearr_38732_38817 = state_38724__$1;
(statearr_38732_38817[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (1))){
var state_38724__$1 = state_38724;
var statearr_38733_38818 = state_38724__$1;
(statearr_38733_38818[(2)] = null);

(statearr_38733_38818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (24))){
var inst_38623 = (state_38724[(7)]);
var inst_38642 = (state_38724[(2)]);
var inst_38643 = cljs.core.next.call(null,inst_38623);
var inst_38601 = inst_38643;
var inst_38602 = null;
var inst_38603 = (0);
var inst_38604 = (0);
var state_38724__$1 = (function (){var statearr_38734 = state_38724;
(statearr_38734[(13)] = inst_38604);

(statearr_38734[(14)] = inst_38603);

(statearr_38734[(15)] = inst_38642);

(statearr_38734[(16)] = inst_38601);

(statearr_38734[(17)] = inst_38602);

return statearr_38734;
})();
var statearr_38735_38819 = state_38724__$1;
(statearr_38735_38819[(2)] = null);

(statearr_38735_38819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (39))){
var state_38724__$1 = state_38724;
var statearr_38739_38820 = state_38724__$1;
(statearr_38739_38820[(2)] = null);

(statearr_38739_38820[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (4))){
var inst_38592 = (state_38724[(10)]);
var inst_38592__$1 = (state_38724[(2)]);
var inst_38593 = (inst_38592__$1 == null);
var state_38724__$1 = (function (){var statearr_38740 = state_38724;
(statearr_38740[(10)] = inst_38592__$1);

return statearr_38740;
})();
if(cljs.core.truth_(inst_38593)){
var statearr_38741_38821 = state_38724__$1;
(statearr_38741_38821[(1)] = (5));

} else {
var statearr_38742_38822 = state_38724__$1;
(statearr_38742_38822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (15))){
var inst_38604 = (state_38724[(13)]);
var inst_38603 = (state_38724[(14)]);
var inst_38601 = (state_38724[(16)]);
var inst_38602 = (state_38724[(17)]);
var inst_38619 = (state_38724[(2)]);
var inst_38620 = (inst_38604 + (1));
var tmp38736 = inst_38603;
var tmp38737 = inst_38601;
var tmp38738 = inst_38602;
var inst_38601__$1 = tmp38737;
var inst_38602__$1 = tmp38738;
var inst_38603__$1 = tmp38736;
var inst_38604__$1 = inst_38620;
var state_38724__$1 = (function (){var statearr_38743 = state_38724;
(statearr_38743[(13)] = inst_38604__$1);

(statearr_38743[(14)] = inst_38603__$1);

(statearr_38743[(16)] = inst_38601__$1);

(statearr_38743[(18)] = inst_38619);

(statearr_38743[(17)] = inst_38602__$1);

return statearr_38743;
})();
var statearr_38744_38823 = state_38724__$1;
(statearr_38744_38823[(2)] = null);

(statearr_38744_38823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (21))){
var inst_38646 = (state_38724[(2)]);
var state_38724__$1 = state_38724;
var statearr_38748_38824 = state_38724__$1;
(statearr_38748_38824[(2)] = inst_38646);

(statearr_38748_38824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (31))){
var inst_38672 = (state_38724[(9)]);
var inst_38676 = done.call(null,null);
var inst_38677 = cljs.core.async.untap_STAR_.call(null,m,inst_38672);
var state_38724__$1 = (function (){var statearr_38749 = state_38724;
(statearr_38749[(19)] = inst_38676);

return statearr_38749;
})();
var statearr_38750_38825 = state_38724__$1;
(statearr_38750_38825[(2)] = inst_38677);

(statearr_38750_38825[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (32))){
var inst_38666 = (state_38724[(20)]);
var inst_38665 = (state_38724[(11)]);
var inst_38664 = (state_38724[(21)]);
var inst_38667 = (state_38724[(12)]);
var inst_38679 = (state_38724[(2)]);
var inst_38680 = (inst_38667 + (1));
var tmp38745 = inst_38666;
var tmp38746 = inst_38665;
var tmp38747 = inst_38664;
var inst_38664__$1 = tmp38747;
var inst_38665__$1 = tmp38746;
var inst_38666__$1 = tmp38745;
var inst_38667__$1 = inst_38680;
var state_38724__$1 = (function (){var statearr_38751 = state_38724;
(statearr_38751[(22)] = inst_38679);

(statearr_38751[(20)] = inst_38666__$1);

(statearr_38751[(11)] = inst_38665__$1);

(statearr_38751[(21)] = inst_38664__$1);

(statearr_38751[(12)] = inst_38667__$1);

return statearr_38751;
})();
var statearr_38752_38826 = state_38724__$1;
(statearr_38752_38826[(2)] = null);

(statearr_38752_38826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (40))){
var inst_38692 = (state_38724[(23)]);
var inst_38696 = done.call(null,null);
var inst_38697 = cljs.core.async.untap_STAR_.call(null,m,inst_38692);
var state_38724__$1 = (function (){var statearr_38753 = state_38724;
(statearr_38753[(24)] = inst_38696);

return statearr_38753;
})();
var statearr_38754_38827 = state_38724__$1;
(statearr_38754_38827[(2)] = inst_38697);

(statearr_38754_38827[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (33))){
var inst_38683 = (state_38724[(25)]);
var inst_38685 = cljs.core.chunked_seq_QMARK_.call(null,inst_38683);
var state_38724__$1 = state_38724;
if(inst_38685){
var statearr_38755_38828 = state_38724__$1;
(statearr_38755_38828[(1)] = (36));

} else {
var statearr_38756_38829 = state_38724__$1;
(statearr_38756_38829[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (13))){
var inst_38613 = (state_38724[(26)]);
var inst_38616 = cljs.core.async.close_BANG_.call(null,inst_38613);
var state_38724__$1 = state_38724;
var statearr_38757_38830 = state_38724__$1;
(statearr_38757_38830[(2)] = inst_38616);

(statearr_38757_38830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (22))){
var inst_38636 = (state_38724[(8)]);
var inst_38639 = cljs.core.async.close_BANG_.call(null,inst_38636);
var state_38724__$1 = state_38724;
var statearr_38758_38831 = state_38724__$1;
(statearr_38758_38831[(2)] = inst_38639);

(statearr_38758_38831[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (36))){
var inst_38683 = (state_38724[(25)]);
var inst_38687 = cljs.core.chunk_first.call(null,inst_38683);
var inst_38688 = cljs.core.chunk_rest.call(null,inst_38683);
var inst_38689 = cljs.core.count.call(null,inst_38687);
var inst_38664 = inst_38688;
var inst_38665 = inst_38687;
var inst_38666 = inst_38689;
var inst_38667 = (0);
var state_38724__$1 = (function (){var statearr_38759 = state_38724;
(statearr_38759[(20)] = inst_38666);

(statearr_38759[(11)] = inst_38665);

(statearr_38759[(21)] = inst_38664);

(statearr_38759[(12)] = inst_38667);

return statearr_38759;
})();
var statearr_38760_38832 = state_38724__$1;
(statearr_38760_38832[(2)] = null);

(statearr_38760_38832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (41))){
var inst_38683 = (state_38724[(25)]);
var inst_38699 = (state_38724[(2)]);
var inst_38700 = cljs.core.next.call(null,inst_38683);
var inst_38664 = inst_38700;
var inst_38665 = null;
var inst_38666 = (0);
var inst_38667 = (0);
var state_38724__$1 = (function (){var statearr_38761 = state_38724;
(statearr_38761[(27)] = inst_38699);

(statearr_38761[(20)] = inst_38666);

(statearr_38761[(11)] = inst_38665);

(statearr_38761[(21)] = inst_38664);

(statearr_38761[(12)] = inst_38667);

return statearr_38761;
})();
var statearr_38762_38833 = state_38724__$1;
(statearr_38762_38833[(2)] = null);

(statearr_38762_38833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (43))){
var state_38724__$1 = state_38724;
var statearr_38763_38834 = state_38724__$1;
(statearr_38763_38834[(2)] = null);

(statearr_38763_38834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (29))){
var inst_38708 = (state_38724[(2)]);
var state_38724__$1 = state_38724;
var statearr_38764_38835 = state_38724__$1;
(statearr_38764_38835[(2)] = inst_38708);

(statearr_38764_38835[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (44))){
var inst_38717 = (state_38724[(2)]);
var state_38724__$1 = (function (){var statearr_38765 = state_38724;
(statearr_38765[(28)] = inst_38717);

return statearr_38765;
})();
var statearr_38766_38836 = state_38724__$1;
(statearr_38766_38836[(2)] = null);

(statearr_38766_38836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (6))){
var inst_38656 = (state_38724[(29)]);
var inst_38655 = cljs.core.deref.call(null,cs);
var inst_38656__$1 = cljs.core.keys.call(null,inst_38655);
var inst_38657 = cljs.core.count.call(null,inst_38656__$1);
var inst_38658 = cljs.core.reset_BANG_.call(null,dctr,inst_38657);
var inst_38663 = cljs.core.seq.call(null,inst_38656__$1);
var inst_38664 = inst_38663;
var inst_38665 = null;
var inst_38666 = (0);
var inst_38667 = (0);
var state_38724__$1 = (function (){var statearr_38767 = state_38724;
(statearr_38767[(29)] = inst_38656__$1);

(statearr_38767[(30)] = inst_38658);

(statearr_38767[(20)] = inst_38666);

(statearr_38767[(11)] = inst_38665);

(statearr_38767[(21)] = inst_38664);

(statearr_38767[(12)] = inst_38667);

return statearr_38767;
})();
var statearr_38768_38837 = state_38724__$1;
(statearr_38768_38837[(2)] = null);

(statearr_38768_38837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (28))){
var inst_38683 = (state_38724[(25)]);
var inst_38664 = (state_38724[(21)]);
var inst_38683__$1 = cljs.core.seq.call(null,inst_38664);
var state_38724__$1 = (function (){var statearr_38769 = state_38724;
(statearr_38769[(25)] = inst_38683__$1);

return statearr_38769;
})();
if(inst_38683__$1){
var statearr_38770_38838 = state_38724__$1;
(statearr_38770_38838[(1)] = (33));

} else {
var statearr_38771_38839 = state_38724__$1;
(statearr_38771_38839[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (25))){
var inst_38666 = (state_38724[(20)]);
var inst_38667 = (state_38724[(12)]);
var inst_38669 = (inst_38667 < inst_38666);
var inst_38670 = inst_38669;
var state_38724__$1 = state_38724;
if(cljs.core.truth_(inst_38670)){
var statearr_38772_38840 = state_38724__$1;
(statearr_38772_38840[(1)] = (27));

} else {
var statearr_38773_38841 = state_38724__$1;
(statearr_38773_38841[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (34))){
var state_38724__$1 = state_38724;
var statearr_38774_38842 = state_38724__$1;
(statearr_38774_38842[(2)] = null);

(statearr_38774_38842[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (17))){
var state_38724__$1 = state_38724;
var statearr_38775_38843 = state_38724__$1;
(statearr_38775_38843[(2)] = null);

(statearr_38775_38843[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (3))){
var inst_38722 = (state_38724[(2)]);
var state_38724__$1 = state_38724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38724__$1,inst_38722);
} else {
if((state_val_38725 === (12))){
var inst_38651 = (state_38724[(2)]);
var state_38724__$1 = state_38724;
var statearr_38776_38844 = state_38724__$1;
(statearr_38776_38844[(2)] = inst_38651);

(statearr_38776_38844[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (2))){
var state_38724__$1 = state_38724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38724__$1,(4),ch);
} else {
if((state_val_38725 === (23))){
var state_38724__$1 = state_38724;
var statearr_38777_38845 = state_38724__$1;
(statearr_38777_38845[(2)] = null);

(statearr_38777_38845[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (35))){
var inst_38706 = (state_38724[(2)]);
var state_38724__$1 = state_38724;
var statearr_38778_38846 = state_38724__$1;
(statearr_38778_38846[(2)] = inst_38706);

(statearr_38778_38846[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (19))){
var inst_38623 = (state_38724[(7)]);
var inst_38627 = cljs.core.chunk_first.call(null,inst_38623);
var inst_38628 = cljs.core.chunk_rest.call(null,inst_38623);
var inst_38629 = cljs.core.count.call(null,inst_38627);
var inst_38601 = inst_38628;
var inst_38602 = inst_38627;
var inst_38603 = inst_38629;
var inst_38604 = (0);
var state_38724__$1 = (function (){var statearr_38779 = state_38724;
(statearr_38779[(13)] = inst_38604);

(statearr_38779[(14)] = inst_38603);

(statearr_38779[(16)] = inst_38601);

(statearr_38779[(17)] = inst_38602);

return statearr_38779;
})();
var statearr_38780_38847 = state_38724__$1;
(statearr_38780_38847[(2)] = null);

(statearr_38780_38847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (11))){
var inst_38623 = (state_38724[(7)]);
var inst_38601 = (state_38724[(16)]);
var inst_38623__$1 = cljs.core.seq.call(null,inst_38601);
var state_38724__$1 = (function (){var statearr_38781 = state_38724;
(statearr_38781[(7)] = inst_38623__$1);

return statearr_38781;
})();
if(inst_38623__$1){
var statearr_38782_38848 = state_38724__$1;
(statearr_38782_38848[(1)] = (16));

} else {
var statearr_38783_38849 = state_38724__$1;
(statearr_38783_38849[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (9))){
var inst_38653 = (state_38724[(2)]);
var state_38724__$1 = state_38724;
var statearr_38784_38850 = state_38724__$1;
(statearr_38784_38850[(2)] = inst_38653);

(statearr_38784_38850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (5))){
var inst_38599 = cljs.core.deref.call(null,cs);
var inst_38600 = cljs.core.seq.call(null,inst_38599);
var inst_38601 = inst_38600;
var inst_38602 = null;
var inst_38603 = (0);
var inst_38604 = (0);
var state_38724__$1 = (function (){var statearr_38785 = state_38724;
(statearr_38785[(13)] = inst_38604);

(statearr_38785[(14)] = inst_38603);

(statearr_38785[(16)] = inst_38601);

(statearr_38785[(17)] = inst_38602);

return statearr_38785;
})();
var statearr_38786_38851 = state_38724__$1;
(statearr_38786_38851[(2)] = null);

(statearr_38786_38851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (14))){
var state_38724__$1 = state_38724;
var statearr_38787_38852 = state_38724__$1;
(statearr_38787_38852[(2)] = null);

(statearr_38787_38852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (45))){
var inst_38714 = (state_38724[(2)]);
var state_38724__$1 = state_38724;
var statearr_38788_38853 = state_38724__$1;
(statearr_38788_38853[(2)] = inst_38714);

(statearr_38788_38853[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (26))){
var inst_38656 = (state_38724[(29)]);
var inst_38710 = (state_38724[(2)]);
var inst_38711 = cljs.core.seq.call(null,inst_38656);
var state_38724__$1 = (function (){var statearr_38789 = state_38724;
(statearr_38789[(31)] = inst_38710);

return statearr_38789;
})();
if(inst_38711){
var statearr_38790_38854 = state_38724__$1;
(statearr_38790_38854[(1)] = (42));

} else {
var statearr_38791_38855 = state_38724__$1;
(statearr_38791_38855[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (16))){
var inst_38623 = (state_38724[(7)]);
var inst_38625 = cljs.core.chunked_seq_QMARK_.call(null,inst_38623);
var state_38724__$1 = state_38724;
if(inst_38625){
var statearr_38792_38856 = state_38724__$1;
(statearr_38792_38856[(1)] = (19));

} else {
var statearr_38793_38857 = state_38724__$1;
(statearr_38793_38857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (38))){
var inst_38703 = (state_38724[(2)]);
var state_38724__$1 = state_38724;
var statearr_38794_38858 = state_38724__$1;
(statearr_38794_38858[(2)] = inst_38703);

(statearr_38794_38858[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (30))){
var state_38724__$1 = state_38724;
var statearr_38795_38859 = state_38724__$1;
(statearr_38795_38859[(2)] = null);

(statearr_38795_38859[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (10))){
var inst_38604 = (state_38724[(13)]);
var inst_38602 = (state_38724[(17)]);
var inst_38612 = cljs.core._nth.call(null,inst_38602,inst_38604);
var inst_38613 = cljs.core.nth.call(null,inst_38612,(0),null);
var inst_38614 = cljs.core.nth.call(null,inst_38612,(1),null);
var state_38724__$1 = (function (){var statearr_38796 = state_38724;
(statearr_38796[(26)] = inst_38613);

return statearr_38796;
})();
if(cljs.core.truth_(inst_38614)){
var statearr_38797_38860 = state_38724__$1;
(statearr_38797_38860[(1)] = (13));

} else {
var statearr_38798_38861 = state_38724__$1;
(statearr_38798_38861[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (18))){
var inst_38649 = (state_38724[(2)]);
var state_38724__$1 = state_38724;
var statearr_38799_38862 = state_38724__$1;
(statearr_38799_38862[(2)] = inst_38649);

(statearr_38799_38862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (42))){
var state_38724__$1 = state_38724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38724__$1,(45),dchan);
} else {
if((state_val_38725 === (37))){
var inst_38692 = (state_38724[(23)]);
var inst_38592 = (state_38724[(10)]);
var inst_38683 = (state_38724[(25)]);
var inst_38692__$1 = cljs.core.first.call(null,inst_38683);
var inst_38693 = cljs.core.async.put_BANG_.call(null,inst_38692__$1,inst_38592,done);
var state_38724__$1 = (function (){var statearr_38800 = state_38724;
(statearr_38800[(23)] = inst_38692__$1);

return statearr_38800;
})();
if(cljs.core.truth_(inst_38693)){
var statearr_38801_38863 = state_38724__$1;
(statearr_38801_38863[(1)] = (39));

} else {
var statearr_38802_38864 = state_38724__$1;
(statearr_38802_38864[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38725 === (8))){
var inst_38604 = (state_38724[(13)]);
var inst_38603 = (state_38724[(14)]);
var inst_38606 = (inst_38604 < inst_38603);
var inst_38607 = inst_38606;
var state_38724__$1 = state_38724;
if(cljs.core.truth_(inst_38607)){
var statearr_38803_38865 = state_38724__$1;
(statearr_38803_38865[(1)] = (10));

} else {
var statearr_38804_38866 = state_38724__$1;
(statearr_38804_38866[(1)] = (11));

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
});})(c__37489__auto___38812,cs,m,dchan,dctr,done))
;
return ((function (switch__37377__auto__,c__37489__auto___38812,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37378__auto__ = null;
var cljs$core$async$mult_$_state_machine__37378__auto____0 = (function (){
var statearr_38808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38808[(0)] = cljs$core$async$mult_$_state_machine__37378__auto__);

(statearr_38808[(1)] = (1));

return statearr_38808;
});
var cljs$core$async$mult_$_state_machine__37378__auto____1 = (function (state_38724){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_38724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e38809){if((e38809 instanceof Object)){
var ex__37381__auto__ = e38809;
var statearr_38810_38867 = state_38724;
(statearr_38810_38867[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38868 = state_38724;
state_38724 = G__38868;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37378__auto__ = function(state_38724){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37378__auto____1.call(this,state_38724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37378__auto____0;
cljs$core$async$mult_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37378__auto____1;
return cljs$core$async$mult_$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___38812,cs,m,dchan,dctr,done))
})();
var state__37491__auto__ = (function (){var statearr_38811 = f__37490__auto__.call(null);
(statearr_38811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___38812);

return statearr_38811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___38812,cs,m,dchan,dctr,done))
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
var args38869 = [];
var len__32159__auto___38872 = arguments.length;
var i__32160__auto___38873 = (0);
while(true){
if((i__32160__auto___38873 < len__32159__auto___38872)){
args38869.push((arguments[i__32160__auto___38873]));

var G__38874 = (i__32160__auto___38873 + (1));
i__32160__auto___38873 = G__38874;
continue;
} else {
}
break;
}

var G__38871 = args38869.length;
switch (G__38871) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38869.length)].join('')));

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
var x__31747__auto__ = (((m == null))?null:m);
var m__31748__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31747__auto__)]);
if(!((m__31748__auto__ == null))){
return m__31748__auto__.call(null,m,ch);
} else {
var m__31748__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31748__auto____$1 == null))){
return m__31748__auto____$1.call(null,m,ch);
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
var x__31747__auto__ = (((m == null))?null:m);
var m__31748__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31747__auto__)]);
if(!((m__31748__auto__ == null))){
return m__31748__auto__.call(null,m,ch);
} else {
var m__31748__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31748__auto____$1 == null))){
return m__31748__auto____$1.call(null,m,ch);
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
var x__31747__auto__ = (((m == null))?null:m);
var m__31748__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31747__auto__)]);
if(!((m__31748__auto__ == null))){
return m__31748__auto__.call(null,m);
} else {
var m__31748__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31748__auto____$1 == null))){
return m__31748__auto____$1.call(null,m);
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
var x__31747__auto__ = (((m == null))?null:m);
var m__31748__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31747__auto__)]);
if(!((m__31748__auto__ == null))){
return m__31748__auto__.call(null,m,state_map);
} else {
var m__31748__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31748__auto____$1 == null))){
return m__31748__auto____$1.call(null,m,state_map);
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
var x__31747__auto__ = (((m == null))?null:m);
var m__31748__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31747__auto__)]);
if(!((m__31748__auto__ == null))){
return m__31748__auto__.call(null,m,mode);
} else {
var m__31748__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31748__auto____$1 == null))){
return m__31748__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__32166__auto__ = [];
var len__32159__auto___38886 = arguments.length;
var i__32160__auto___38887 = (0);
while(true){
if((i__32160__auto___38887 < len__32159__auto___38886)){
args__32166__auto__.push((arguments[i__32160__auto___38887]));

var G__38888 = (i__32160__auto___38887 + (1));
i__32160__auto___38887 = G__38888;
continue;
} else {
}
break;
}

var argseq__32167__auto__ = ((((3) < args__32166__auto__.length))?(new cljs.core.IndexedSeq(args__32166__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32167__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38880){
var map__38881 = p__38880;
var map__38881__$1 = ((((!((map__38881 == null)))?((((map__38881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38881):map__38881);
var opts = map__38881__$1;
var statearr_38883_38889 = state;
(statearr_38883_38889[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38881,map__38881__$1,opts){
return (function (val){
var statearr_38884_38890 = state;
(statearr_38884_38890[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38881,map__38881__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38885_38891 = state;
(statearr_38885_38891[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38876){
var G__38877 = cljs.core.first.call(null,seq38876);
var seq38876__$1 = cljs.core.next.call(null,seq38876);
var G__38878 = cljs.core.first.call(null,seq38876__$1);
var seq38876__$2 = cljs.core.next.call(null,seq38876__$1);
var G__38879 = cljs.core.first.call(null,seq38876__$2);
var seq38876__$3 = cljs.core.next.call(null,seq38876__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38877,G__38878,G__38879,seq38876__$3);
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
if(typeof cljs.core.async.t_cljs$core$async39057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39057 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39058){
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
this.meta39058 = meta39058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39059,meta39058__$1){
var self__ = this;
var _39059__$1 = this;
return (new cljs.core.async.t_cljs$core$async39057(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39058__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39059){
var self__ = this;
var _39059__$1 = this;
return self__.meta39058;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39057.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39057.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39058","meta39058",-159933408,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39057";

cljs.core.async.t_cljs$core$async39057.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cljs.core.async/t_cljs$core$async39057");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39057 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39057(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39058){
return (new cljs.core.async.t_cljs$core$async39057(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39058));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39057(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37489__auto___39222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___39222,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___39222,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39159){
var state_val_39160 = (state_39159[(1)]);
if((state_val_39160 === (7))){
var inst_39075 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
var statearr_39161_39223 = state_39159__$1;
(statearr_39161_39223[(2)] = inst_39075);

(statearr_39161_39223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (20))){
var inst_39087 = (state_39159[(7)]);
var state_39159__$1 = state_39159;
var statearr_39162_39224 = state_39159__$1;
(statearr_39162_39224[(2)] = inst_39087);

(statearr_39162_39224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (27))){
var state_39159__$1 = state_39159;
var statearr_39163_39225 = state_39159__$1;
(statearr_39163_39225[(2)] = null);

(statearr_39163_39225[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (1))){
var inst_39063 = (state_39159[(8)]);
var inst_39063__$1 = calc_state.call(null);
var inst_39065 = (inst_39063__$1 == null);
var inst_39066 = cljs.core.not.call(null,inst_39065);
var state_39159__$1 = (function (){var statearr_39164 = state_39159;
(statearr_39164[(8)] = inst_39063__$1);

return statearr_39164;
})();
if(inst_39066){
var statearr_39165_39226 = state_39159__$1;
(statearr_39165_39226[(1)] = (2));

} else {
var statearr_39166_39227 = state_39159__$1;
(statearr_39166_39227[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (24))){
var inst_39119 = (state_39159[(9)]);
var inst_39110 = (state_39159[(10)]);
var inst_39133 = (state_39159[(11)]);
var inst_39133__$1 = inst_39110.call(null,inst_39119);
var state_39159__$1 = (function (){var statearr_39167 = state_39159;
(statearr_39167[(11)] = inst_39133__$1);

return statearr_39167;
})();
if(cljs.core.truth_(inst_39133__$1)){
var statearr_39168_39228 = state_39159__$1;
(statearr_39168_39228[(1)] = (29));

} else {
var statearr_39169_39229 = state_39159__$1;
(statearr_39169_39229[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (4))){
var inst_39078 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
if(cljs.core.truth_(inst_39078)){
var statearr_39170_39230 = state_39159__$1;
(statearr_39170_39230[(1)] = (8));

} else {
var statearr_39171_39231 = state_39159__$1;
(statearr_39171_39231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (15))){
var inst_39104 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
if(cljs.core.truth_(inst_39104)){
var statearr_39172_39232 = state_39159__$1;
(statearr_39172_39232[(1)] = (19));

} else {
var statearr_39173_39233 = state_39159__$1;
(statearr_39173_39233[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (21))){
var inst_39109 = (state_39159[(12)]);
var inst_39109__$1 = (state_39159[(2)]);
var inst_39110 = cljs.core.get.call(null,inst_39109__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39111 = cljs.core.get.call(null,inst_39109__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39112 = cljs.core.get.call(null,inst_39109__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39159__$1 = (function (){var statearr_39174 = state_39159;
(statearr_39174[(12)] = inst_39109__$1);

(statearr_39174[(13)] = inst_39111);

(statearr_39174[(10)] = inst_39110);

return statearr_39174;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39159__$1,(22),inst_39112);
} else {
if((state_val_39160 === (31))){
var inst_39141 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
if(cljs.core.truth_(inst_39141)){
var statearr_39175_39234 = state_39159__$1;
(statearr_39175_39234[(1)] = (32));

} else {
var statearr_39176_39235 = state_39159__$1;
(statearr_39176_39235[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (32))){
var inst_39118 = (state_39159[(14)]);
var state_39159__$1 = state_39159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39159__$1,(35),out,inst_39118);
} else {
if((state_val_39160 === (33))){
var inst_39109 = (state_39159[(12)]);
var inst_39087 = inst_39109;
var state_39159__$1 = (function (){var statearr_39177 = state_39159;
(statearr_39177[(7)] = inst_39087);

return statearr_39177;
})();
var statearr_39178_39236 = state_39159__$1;
(statearr_39178_39236[(2)] = null);

(statearr_39178_39236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (13))){
var inst_39087 = (state_39159[(7)]);
var inst_39094 = inst_39087.cljs$lang$protocol_mask$partition0$;
var inst_39095 = (inst_39094 & (64));
var inst_39096 = inst_39087.cljs$core$ISeq$;
var inst_39097 = (inst_39095) || (inst_39096);
var state_39159__$1 = state_39159;
if(cljs.core.truth_(inst_39097)){
var statearr_39179_39237 = state_39159__$1;
(statearr_39179_39237[(1)] = (16));

} else {
var statearr_39180_39238 = state_39159__$1;
(statearr_39180_39238[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (22))){
var inst_39118 = (state_39159[(14)]);
var inst_39119 = (state_39159[(9)]);
var inst_39117 = (state_39159[(2)]);
var inst_39118__$1 = cljs.core.nth.call(null,inst_39117,(0),null);
var inst_39119__$1 = cljs.core.nth.call(null,inst_39117,(1),null);
var inst_39120 = (inst_39118__$1 == null);
var inst_39121 = cljs.core._EQ_.call(null,inst_39119__$1,change);
var inst_39122 = (inst_39120) || (inst_39121);
var state_39159__$1 = (function (){var statearr_39181 = state_39159;
(statearr_39181[(14)] = inst_39118__$1);

(statearr_39181[(9)] = inst_39119__$1);

return statearr_39181;
})();
if(cljs.core.truth_(inst_39122)){
var statearr_39182_39239 = state_39159__$1;
(statearr_39182_39239[(1)] = (23));

} else {
var statearr_39183_39240 = state_39159__$1;
(statearr_39183_39240[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (36))){
var inst_39109 = (state_39159[(12)]);
var inst_39087 = inst_39109;
var state_39159__$1 = (function (){var statearr_39184 = state_39159;
(statearr_39184[(7)] = inst_39087);

return statearr_39184;
})();
var statearr_39185_39241 = state_39159__$1;
(statearr_39185_39241[(2)] = null);

(statearr_39185_39241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (29))){
var inst_39133 = (state_39159[(11)]);
var state_39159__$1 = state_39159;
var statearr_39186_39242 = state_39159__$1;
(statearr_39186_39242[(2)] = inst_39133);

(statearr_39186_39242[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (6))){
var state_39159__$1 = state_39159;
var statearr_39187_39243 = state_39159__$1;
(statearr_39187_39243[(2)] = false);

(statearr_39187_39243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (28))){
var inst_39129 = (state_39159[(2)]);
var inst_39130 = calc_state.call(null);
var inst_39087 = inst_39130;
var state_39159__$1 = (function (){var statearr_39188 = state_39159;
(statearr_39188[(15)] = inst_39129);

(statearr_39188[(7)] = inst_39087);

return statearr_39188;
})();
var statearr_39189_39244 = state_39159__$1;
(statearr_39189_39244[(2)] = null);

(statearr_39189_39244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (25))){
var inst_39155 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
var statearr_39190_39245 = state_39159__$1;
(statearr_39190_39245[(2)] = inst_39155);

(statearr_39190_39245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (34))){
var inst_39153 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
var statearr_39191_39246 = state_39159__$1;
(statearr_39191_39246[(2)] = inst_39153);

(statearr_39191_39246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (17))){
var state_39159__$1 = state_39159;
var statearr_39192_39247 = state_39159__$1;
(statearr_39192_39247[(2)] = false);

(statearr_39192_39247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (3))){
var state_39159__$1 = state_39159;
var statearr_39193_39248 = state_39159__$1;
(statearr_39193_39248[(2)] = false);

(statearr_39193_39248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (12))){
var inst_39157 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39159__$1,inst_39157);
} else {
if((state_val_39160 === (2))){
var inst_39063 = (state_39159[(8)]);
var inst_39068 = inst_39063.cljs$lang$protocol_mask$partition0$;
var inst_39069 = (inst_39068 & (64));
var inst_39070 = inst_39063.cljs$core$ISeq$;
var inst_39071 = (inst_39069) || (inst_39070);
var state_39159__$1 = state_39159;
if(cljs.core.truth_(inst_39071)){
var statearr_39194_39249 = state_39159__$1;
(statearr_39194_39249[(1)] = (5));

} else {
var statearr_39195_39250 = state_39159__$1;
(statearr_39195_39250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (23))){
var inst_39118 = (state_39159[(14)]);
var inst_39124 = (inst_39118 == null);
var state_39159__$1 = state_39159;
if(cljs.core.truth_(inst_39124)){
var statearr_39196_39251 = state_39159__$1;
(statearr_39196_39251[(1)] = (26));

} else {
var statearr_39197_39252 = state_39159__$1;
(statearr_39197_39252[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (35))){
var inst_39144 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
if(cljs.core.truth_(inst_39144)){
var statearr_39198_39253 = state_39159__$1;
(statearr_39198_39253[(1)] = (36));

} else {
var statearr_39199_39254 = state_39159__$1;
(statearr_39199_39254[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (19))){
var inst_39087 = (state_39159[(7)]);
var inst_39106 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39087);
var state_39159__$1 = state_39159;
var statearr_39200_39255 = state_39159__$1;
(statearr_39200_39255[(2)] = inst_39106);

(statearr_39200_39255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (11))){
var inst_39087 = (state_39159[(7)]);
var inst_39091 = (inst_39087 == null);
var inst_39092 = cljs.core.not.call(null,inst_39091);
var state_39159__$1 = state_39159;
if(inst_39092){
var statearr_39201_39256 = state_39159__$1;
(statearr_39201_39256[(1)] = (13));

} else {
var statearr_39202_39257 = state_39159__$1;
(statearr_39202_39257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (9))){
var inst_39063 = (state_39159[(8)]);
var state_39159__$1 = state_39159;
var statearr_39203_39258 = state_39159__$1;
(statearr_39203_39258[(2)] = inst_39063);

(statearr_39203_39258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (5))){
var state_39159__$1 = state_39159;
var statearr_39204_39259 = state_39159__$1;
(statearr_39204_39259[(2)] = true);

(statearr_39204_39259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (14))){
var state_39159__$1 = state_39159;
var statearr_39205_39260 = state_39159__$1;
(statearr_39205_39260[(2)] = false);

(statearr_39205_39260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (26))){
var inst_39119 = (state_39159[(9)]);
var inst_39126 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39119);
var state_39159__$1 = state_39159;
var statearr_39206_39261 = state_39159__$1;
(statearr_39206_39261[(2)] = inst_39126);

(statearr_39206_39261[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (16))){
var state_39159__$1 = state_39159;
var statearr_39207_39262 = state_39159__$1;
(statearr_39207_39262[(2)] = true);

(statearr_39207_39262[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (38))){
var inst_39149 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
var statearr_39208_39263 = state_39159__$1;
(statearr_39208_39263[(2)] = inst_39149);

(statearr_39208_39263[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (30))){
var inst_39111 = (state_39159[(13)]);
var inst_39119 = (state_39159[(9)]);
var inst_39110 = (state_39159[(10)]);
var inst_39136 = cljs.core.empty_QMARK_.call(null,inst_39110);
var inst_39137 = inst_39111.call(null,inst_39119);
var inst_39138 = cljs.core.not.call(null,inst_39137);
var inst_39139 = (inst_39136) && (inst_39138);
var state_39159__$1 = state_39159;
var statearr_39209_39264 = state_39159__$1;
(statearr_39209_39264[(2)] = inst_39139);

(statearr_39209_39264[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (10))){
var inst_39063 = (state_39159[(8)]);
var inst_39083 = (state_39159[(2)]);
var inst_39084 = cljs.core.get.call(null,inst_39083,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39085 = cljs.core.get.call(null,inst_39083,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39086 = cljs.core.get.call(null,inst_39083,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39087 = inst_39063;
var state_39159__$1 = (function (){var statearr_39210 = state_39159;
(statearr_39210[(16)] = inst_39085);

(statearr_39210[(7)] = inst_39087);

(statearr_39210[(17)] = inst_39086);

(statearr_39210[(18)] = inst_39084);

return statearr_39210;
})();
var statearr_39211_39265 = state_39159__$1;
(statearr_39211_39265[(2)] = null);

(statearr_39211_39265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (18))){
var inst_39101 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
var statearr_39212_39266 = state_39159__$1;
(statearr_39212_39266[(2)] = inst_39101);

(statearr_39212_39266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (37))){
var state_39159__$1 = state_39159;
var statearr_39213_39267 = state_39159__$1;
(statearr_39213_39267[(2)] = null);

(statearr_39213_39267[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (8))){
var inst_39063 = (state_39159[(8)]);
var inst_39080 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39063);
var state_39159__$1 = state_39159;
var statearr_39214_39268 = state_39159__$1;
(statearr_39214_39268[(2)] = inst_39080);

(statearr_39214_39268[(1)] = (10));


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
});})(c__37489__auto___39222,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37377__auto__,c__37489__auto___39222,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37378__auto__ = null;
var cljs$core$async$mix_$_state_machine__37378__auto____0 = (function (){
var statearr_39218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39218[(0)] = cljs$core$async$mix_$_state_machine__37378__auto__);

(statearr_39218[(1)] = (1));

return statearr_39218;
});
var cljs$core$async$mix_$_state_machine__37378__auto____1 = (function (state_39159){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_39159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e39219){if((e39219 instanceof Object)){
var ex__37381__auto__ = e39219;
var statearr_39220_39269 = state_39159;
(statearr_39220_39269[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39270 = state_39159;
state_39159 = G__39270;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37378__auto__ = function(state_39159){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37378__auto____1.call(this,state_39159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37378__auto____0;
cljs$core$async$mix_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37378__auto____1;
return cljs$core$async$mix_$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___39222,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37491__auto__ = (function (){var statearr_39221 = f__37490__auto__.call(null);
(statearr_39221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___39222);

return statearr_39221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___39222,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__31747__auto__ = (((p == null))?null:p);
var m__31748__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31747__auto__)]);
if(!((m__31748__auto__ == null))){
return m__31748__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31748__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31748__auto____$1 == null))){
return m__31748__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__31747__auto__ = (((p == null))?null:p);
var m__31748__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31747__auto__)]);
if(!((m__31748__auto__ == null))){
return m__31748__auto__.call(null,p,v,ch);
} else {
var m__31748__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31748__auto____$1 == null))){
return m__31748__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args39271 = [];
var len__32159__auto___39274 = arguments.length;
var i__32160__auto___39275 = (0);
while(true){
if((i__32160__auto___39275 < len__32159__auto___39274)){
args39271.push((arguments[i__32160__auto___39275]));

var G__39276 = (i__32160__auto___39275 + (1));
i__32160__auto___39275 = G__39276;
continue;
} else {
}
break;
}

var G__39273 = args39271.length;
switch (G__39273) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39271.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__31747__auto__ = (((p == null))?null:p);
var m__31748__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31747__auto__)]);
if(!((m__31748__auto__ == null))){
return m__31748__auto__.call(null,p);
} else {
var m__31748__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31748__auto____$1 == null))){
return m__31748__auto____$1.call(null,p);
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
var x__31747__auto__ = (((p == null))?null:p);
var m__31748__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31747__auto__)]);
if(!((m__31748__auto__ == null))){
return m__31748__auto__.call(null,p,v);
} else {
var m__31748__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31748__auto____$1 == null))){
return m__31748__auto____$1.call(null,p,v);
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
var args39279 = [];
var len__32159__auto___39404 = arguments.length;
var i__32160__auto___39405 = (0);
while(true){
if((i__32160__auto___39405 < len__32159__auto___39404)){
args39279.push((arguments[i__32160__auto___39405]));

var G__39406 = (i__32160__auto___39405 + (1));
i__32160__auto___39405 = G__39406;
continue;
} else {
}
break;
}

var G__39281 = args39279.length;
switch (G__39281) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39279.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__31084__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__31084__auto__)){
return or__31084__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__31084__auto__,mults){
return (function (p1__39278_SHARP_){
if(cljs.core.truth_(p1__39278_SHARP_.call(null,topic))){
return p1__39278_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39278_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__31084__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39282 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39283){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39283 = meta39283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39284,meta39283__$1){
var self__ = this;
var _39284__$1 = this;
return (new cljs.core.async.t_cljs$core$async39282(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39283__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39284){
var self__ = this;
var _39284__$1 = this;
return self__.meta39283;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39282.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39283","meta39283",-1170436466,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39282";

cljs.core.async.t_cljs$core$async39282.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cljs.core.async/t_cljs$core$async39282");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39282 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39282(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39283){
return (new cljs.core.async.t_cljs$core$async39282(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39283));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39282(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37489__auto___39408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___39408,mults,ensure_mult,p){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___39408,mults,ensure_mult,p){
return (function (state_39356){
var state_val_39357 = (state_39356[(1)]);
if((state_val_39357 === (7))){
var inst_39352 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
var statearr_39358_39409 = state_39356__$1;
(statearr_39358_39409[(2)] = inst_39352);

(statearr_39358_39409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (20))){
var state_39356__$1 = state_39356;
var statearr_39359_39410 = state_39356__$1;
(statearr_39359_39410[(2)] = null);

(statearr_39359_39410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (1))){
var state_39356__$1 = state_39356;
var statearr_39360_39411 = state_39356__$1;
(statearr_39360_39411[(2)] = null);

(statearr_39360_39411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (24))){
var inst_39335 = (state_39356[(7)]);
var inst_39344 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39335);
var state_39356__$1 = state_39356;
var statearr_39361_39412 = state_39356__$1;
(statearr_39361_39412[(2)] = inst_39344);

(statearr_39361_39412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (4))){
var inst_39287 = (state_39356[(8)]);
var inst_39287__$1 = (state_39356[(2)]);
var inst_39288 = (inst_39287__$1 == null);
var state_39356__$1 = (function (){var statearr_39362 = state_39356;
(statearr_39362[(8)] = inst_39287__$1);

return statearr_39362;
})();
if(cljs.core.truth_(inst_39288)){
var statearr_39363_39413 = state_39356__$1;
(statearr_39363_39413[(1)] = (5));

} else {
var statearr_39364_39414 = state_39356__$1;
(statearr_39364_39414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (15))){
var inst_39329 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
var statearr_39365_39415 = state_39356__$1;
(statearr_39365_39415[(2)] = inst_39329);

(statearr_39365_39415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (21))){
var inst_39349 = (state_39356[(2)]);
var state_39356__$1 = (function (){var statearr_39366 = state_39356;
(statearr_39366[(9)] = inst_39349);

return statearr_39366;
})();
var statearr_39367_39416 = state_39356__$1;
(statearr_39367_39416[(2)] = null);

(statearr_39367_39416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (13))){
var inst_39311 = (state_39356[(10)]);
var inst_39313 = cljs.core.chunked_seq_QMARK_.call(null,inst_39311);
var state_39356__$1 = state_39356;
if(inst_39313){
var statearr_39368_39417 = state_39356__$1;
(statearr_39368_39417[(1)] = (16));

} else {
var statearr_39369_39418 = state_39356__$1;
(statearr_39369_39418[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (22))){
var inst_39341 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
if(cljs.core.truth_(inst_39341)){
var statearr_39370_39419 = state_39356__$1;
(statearr_39370_39419[(1)] = (23));

} else {
var statearr_39371_39420 = state_39356__$1;
(statearr_39371_39420[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (6))){
var inst_39335 = (state_39356[(7)]);
var inst_39287 = (state_39356[(8)]);
var inst_39337 = (state_39356[(11)]);
var inst_39335__$1 = topic_fn.call(null,inst_39287);
var inst_39336 = cljs.core.deref.call(null,mults);
var inst_39337__$1 = cljs.core.get.call(null,inst_39336,inst_39335__$1);
var state_39356__$1 = (function (){var statearr_39372 = state_39356;
(statearr_39372[(7)] = inst_39335__$1);

(statearr_39372[(11)] = inst_39337__$1);

return statearr_39372;
})();
if(cljs.core.truth_(inst_39337__$1)){
var statearr_39373_39421 = state_39356__$1;
(statearr_39373_39421[(1)] = (19));

} else {
var statearr_39374_39422 = state_39356__$1;
(statearr_39374_39422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (25))){
var inst_39346 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
var statearr_39375_39423 = state_39356__$1;
(statearr_39375_39423[(2)] = inst_39346);

(statearr_39375_39423[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (17))){
var inst_39311 = (state_39356[(10)]);
var inst_39320 = cljs.core.first.call(null,inst_39311);
var inst_39321 = cljs.core.async.muxch_STAR_.call(null,inst_39320);
var inst_39322 = cljs.core.async.close_BANG_.call(null,inst_39321);
var inst_39323 = cljs.core.next.call(null,inst_39311);
var inst_39297 = inst_39323;
var inst_39298 = null;
var inst_39299 = (0);
var inst_39300 = (0);
var state_39356__$1 = (function (){var statearr_39376 = state_39356;
(statearr_39376[(12)] = inst_39300);

(statearr_39376[(13)] = inst_39299);

(statearr_39376[(14)] = inst_39322);

(statearr_39376[(15)] = inst_39298);

(statearr_39376[(16)] = inst_39297);

return statearr_39376;
})();
var statearr_39377_39424 = state_39356__$1;
(statearr_39377_39424[(2)] = null);

(statearr_39377_39424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (3))){
var inst_39354 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39356__$1,inst_39354);
} else {
if((state_val_39357 === (12))){
var inst_39331 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
var statearr_39378_39425 = state_39356__$1;
(statearr_39378_39425[(2)] = inst_39331);

(statearr_39378_39425[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (2))){
var state_39356__$1 = state_39356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39356__$1,(4),ch);
} else {
if((state_val_39357 === (23))){
var state_39356__$1 = state_39356;
var statearr_39379_39426 = state_39356__$1;
(statearr_39379_39426[(2)] = null);

(statearr_39379_39426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (19))){
var inst_39287 = (state_39356[(8)]);
var inst_39337 = (state_39356[(11)]);
var inst_39339 = cljs.core.async.muxch_STAR_.call(null,inst_39337);
var state_39356__$1 = state_39356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39356__$1,(22),inst_39339,inst_39287);
} else {
if((state_val_39357 === (11))){
var inst_39311 = (state_39356[(10)]);
var inst_39297 = (state_39356[(16)]);
var inst_39311__$1 = cljs.core.seq.call(null,inst_39297);
var state_39356__$1 = (function (){var statearr_39380 = state_39356;
(statearr_39380[(10)] = inst_39311__$1);

return statearr_39380;
})();
if(inst_39311__$1){
var statearr_39381_39427 = state_39356__$1;
(statearr_39381_39427[(1)] = (13));

} else {
var statearr_39382_39428 = state_39356__$1;
(statearr_39382_39428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (9))){
var inst_39333 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
var statearr_39383_39429 = state_39356__$1;
(statearr_39383_39429[(2)] = inst_39333);

(statearr_39383_39429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (5))){
var inst_39294 = cljs.core.deref.call(null,mults);
var inst_39295 = cljs.core.vals.call(null,inst_39294);
var inst_39296 = cljs.core.seq.call(null,inst_39295);
var inst_39297 = inst_39296;
var inst_39298 = null;
var inst_39299 = (0);
var inst_39300 = (0);
var state_39356__$1 = (function (){var statearr_39384 = state_39356;
(statearr_39384[(12)] = inst_39300);

(statearr_39384[(13)] = inst_39299);

(statearr_39384[(15)] = inst_39298);

(statearr_39384[(16)] = inst_39297);

return statearr_39384;
})();
var statearr_39385_39430 = state_39356__$1;
(statearr_39385_39430[(2)] = null);

(statearr_39385_39430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (14))){
var state_39356__$1 = state_39356;
var statearr_39389_39431 = state_39356__$1;
(statearr_39389_39431[(2)] = null);

(statearr_39389_39431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (16))){
var inst_39311 = (state_39356[(10)]);
var inst_39315 = cljs.core.chunk_first.call(null,inst_39311);
var inst_39316 = cljs.core.chunk_rest.call(null,inst_39311);
var inst_39317 = cljs.core.count.call(null,inst_39315);
var inst_39297 = inst_39316;
var inst_39298 = inst_39315;
var inst_39299 = inst_39317;
var inst_39300 = (0);
var state_39356__$1 = (function (){var statearr_39390 = state_39356;
(statearr_39390[(12)] = inst_39300);

(statearr_39390[(13)] = inst_39299);

(statearr_39390[(15)] = inst_39298);

(statearr_39390[(16)] = inst_39297);

return statearr_39390;
})();
var statearr_39391_39432 = state_39356__$1;
(statearr_39391_39432[(2)] = null);

(statearr_39391_39432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (10))){
var inst_39300 = (state_39356[(12)]);
var inst_39299 = (state_39356[(13)]);
var inst_39298 = (state_39356[(15)]);
var inst_39297 = (state_39356[(16)]);
var inst_39305 = cljs.core._nth.call(null,inst_39298,inst_39300);
var inst_39306 = cljs.core.async.muxch_STAR_.call(null,inst_39305);
var inst_39307 = cljs.core.async.close_BANG_.call(null,inst_39306);
var inst_39308 = (inst_39300 + (1));
var tmp39386 = inst_39299;
var tmp39387 = inst_39298;
var tmp39388 = inst_39297;
var inst_39297__$1 = tmp39388;
var inst_39298__$1 = tmp39387;
var inst_39299__$1 = tmp39386;
var inst_39300__$1 = inst_39308;
var state_39356__$1 = (function (){var statearr_39392 = state_39356;
(statearr_39392[(12)] = inst_39300__$1);

(statearr_39392[(13)] = inst_39299__$1);

(statearr_39392[(17)] = inst_39307);

(statearr_39392[(15)] = inst_39298__$1);

(statearr_39392[(16)] = inst_39297__$1);

return statearr_39392;
})();
var statearr_39393_39433 = state_39356__$1;
(statearr_39393_39433[(2)] = null);

(statearr_39393_39433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (18))){
var inst_39326 = (state_39356[(2)]);
var state_39356__$1 = state_39356;
var statearr_39394_39434 = state_39356__$1;
(statearr_39394_39434[(2)] = inst_39326);

(statearr_39394_39434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39357 === (8))){
var inst_39300 = (state_39356[(12)]);
var inst_39299 = (state_39356[(13)]);
var inst_39302 = (inst_39300 < inst_39299);
var inst_39303 = inst_39302;
var state_39356__$1 = state_39356;
if(cljs.core.truth_(inst_39303)){
var statearr_39395_39435 = state_39356__$1;
(statearr_39395_39435[(1)] = (10));

} else {
var statearr_39396_39436 = state_39356__$1;
(statearr_39396_39436[(1)] = (11));

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
});})(c__37489__auto___39408,mults,ensure_mult,p))
;
return ((function (switch__37377__auto__,c__37489__auto___39408,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37378__auto__ = null;
var cljs$core$async$state_machine__37378__auto____0 = (function (){
var statearr_39400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39400[(0)] = cljs$core$async$state_machine__37378__auto__);

(statearr_39400[(1)] = (1));

return statearr_39400;
});
var cljs$core$async$state_machine__37378__auto____1 = (function (state_39356){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_39356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e39401){if((e39401 instanceof Object)){
var ex__37381__auto__ = e39401;
var statearr_39402_39437 = state_39356;
(statearr_39402_39437[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39438 = state_39356;
state_39356 = G__39438;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$state_machine__37378__auto__ = function(state_39356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37378__auto____1.call(this,state_39356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37378__auto____0;
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37378__auto____1;
return cljs$core$async$state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___39408,mults,ensure_mult,p))
})();
var state__37491__auto__ = (function (){var statearr_39403 = f__37490__auto__.call(null);
(statearr_39403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___39408);

return statearr_39403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___39408,mults,ensure_mult,p))
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
var args39439 = [];
var len__32159__auto___39442 = arguments.length;
var i__32160__auto___39443 = (0);
while(true){
if((i__32160__auto___39443 < len__32159__auto___39442)){
args39439.push((arguments[i__32160__auto___39443]));

var G__39444 = (i__32160__auto___39443 + (1));
i__32160__auto___39443 = G__39444;
continue;
} else {
}
break;
}

var G__39441 = args39439.length;
switch (G__39441) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39439.length)].join('')));

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
var args39446 = [];
var len__32159__auto___39449 = arguments.length;
var i__32160__auto___39450 = (0);
while(true){
if((i__32160__auto___39450 < len__32159__auto___39449)){
args39446.push((arguments[i__32160__auto___39450]));

var G__39451 = (i__32160__auto___39450 + (1));
i__32160__auto___39450 = G__39451;
continue;
} else {
}
break;
}

var G__39448 = args39446.length;
switch (G__39448) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39446.length)].join('')));

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
var args39453 = [];
var len__32159__auto___39524 = arguments.length;
var i__32160__auto___39525 = (0);
while(true){
if((i__32160__auto___39525 < len__32159__auto___39524)){
args39453.push((arguments[i__32160__auto___39525]));

var G__39526 = (i__32160__auto___39525 + (1));
i__32160__auto___39525 = G__39526;
continue;
} else {
}
break;
}

var G__39455 = args39453.length;
switch (G__39455) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39453.length)].join('')));

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
var c__37489__auto___39528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___39528,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___39528,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39494){
var state_val_39495 = (state_39494[(1)]);
if((state_val_39495 === (7))){
var state_39494__$1 = state_39494;
var statearr_39496_39529 = state_39494__$1;
(statearr_39496_39529[(2)] = null);

(statearr_39496_39529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39495 === (1))){
var state_39494__$1 = state_39494;
var statearr_39497_39530 = state_39494__$1;
(statearr_39497_39530[(2)] = null);

(statearr_39497_39530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39495 === (4))){
var inst_39458 = (state_39494[(7)]);
var inst_39460 = (inst_39458 < cnt);
var state_39494__$1 = state_39494;
if(cljs.core.truth_(inst_39460)){
var statearr_39498_39531 = state_39494__$1;
(statearr_39498_39531[(1)] = (6));

} else {
var statearr_39499_39532 = state_39494__$1;
(statearr_39499_39532[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39495 === (15))){
var inst_39490 = (state_39494[(2)]);
var state_39494__$1 = state_39494;
var statearr_39500_39533 = state_39494__$1;
(statearr_39500_39533[(2)] = inst_39490);

(statearr_39500_39533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39495 === (13))){
var inst_39483 = cljs.core.async.close_BANG_.call(null,out);
var state_39494__$1 = state_39494;
var statearr_39501_39534 = state_39494__$1;
(statearr_39501_39534[(2)] = inst_39483);

(statearr_39501_39534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39495 === (6))){
var state_39494__$1 = state_39494;
var statearr_39502_39535 = state_39494__$1;
(statearr_39502_39535[(2)] = null);

(statearr_39502_39535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39495 === (3))){
var inst_39492 = (state_39494[(2)]);
var state_39494__$1 = state_39494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39494__$1,inst_39492);
} else {
if((state_val_39495 === (12))){
var inst_39480 = (state_39494[(8)]);
var inst_39480__$1 = (state_39494[(2)]);
var inst_39481 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39480__$1);
var state_39494__$1 = (function (){var statearr_39503 = state_39494;
(statearr_39503[(8)] = inst_39480__$1);

return statearr_39503;
})();
if(cljs.core.truth_(inst_39481)){
var statearr_39504_39536 = state_39494__$1;
(statearr_39504_39536[(1)] = (13));

} else {
var statearr_39505_39537 = state_39494__$1;
(statearr_39505_39537[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39495 === (2))){
var inst_39457 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39458 = (0);
var state_39494__$1 = (function (){var statearr_39506 = state_39494;
(statearr_39506[(9)] = inst_39457);

(statearr_39506[(7)] = inst_39458);

return statearr_39506;
})();
var statearr_39507_39538 = state_39494__$1;
(statearr_39507_39538[(2)] = null);

(statearr_39507_39538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39495 === (11))){
var inst_39458 = (state_39494[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39494,(10),Object,null,(9));
var inst_39467 = chs__$1.call(null,inst_39458);
var inst_39468 = done.call(null,inst_39458);
var inst_39469 = cljs.core.async.take_BANG_.call(null,inst_39467,inst_39468);
var state_39494__$1 = state_39494;
var statearr_39508_39539 = state_39494__$1;
(statearr_39508_39539[(2)] = inst_39469);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39495 === (9))){
var inst_39458 = (state_39494[(7)]);
var inst_39471 = (state_39494[(2)]);
var inst_39472 = (inst_39458 + (1));
var inst_39458__$1 = inst_39472;
var state_39494__$1 = (function (){var statearr_39509 = state_39494;
(statearr_39509[(10)] = inst_39471);

(statearr_39509[(7)] = inst_39458__$1);

return statearr_39509;
})();
var statearr_39510_39540 = state_39494__$1;
(statearr_39510_39540[(2)] = null);

(statearr_39510_39540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39495 === (5))){
var inst_39478 = (state_39494[(2)]);
var state_39494__$1 = (function (){var statearr_39511 = state_39494;
(statearr_39511[(11)] = inst_39478);

return statearr_39511;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39494__$1,(12),dchan);
} else {
if((state_val_39495 === (14))){
var inst_39480 = (state_39494[(8)]);
var inst_39485 = cljs.core.apply.call(null,f,inst_39480);
var state_39494__$1 = state_39494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39494__$1,(16),out,inst_39485);
} else {
if((state_val_39495 === (16))){
var inst_39487 = (state_39494[(2)]);
var state_39494__$1 = (function (){var statearr_39512 = state_39494;
(statearr_39512[(12)] = inst_39487);

return statearr_39512;
})();
var statearr_39513_39541 = state_39494__$1;
(statearr_39513_39541[(2)] = null);

(statearr_39513_39541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39495 === (10))){
var inst_39462 = (state_39494[(2)]);
var inst_39463 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39494__$1 = (function (){var statearr_39514 = state_39494;
(statearr_39514[(13)] = inst_39462);

return statearr_39514;
})();
var statearr_39515_39542 = state_39494__$1;
(statearr_39515_39542[(2)] = inst_39463);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39495 === (8))){
var inst_39476 = (state_39494[(2)]);
var state_39494__$1 = state_39494;
var statearr_39516_39543 = state_39494__$1;
(statearr_39516_39543[(2)] = inst_39476);

(statearr_39516_39543[(1)] = (5));


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
});})(c__37489__auto___39528,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37377__auto__,c__37489__auto___39528,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37378__auto__ = null;
var cljs$core$async$state_machine__37378__auto____0 = (function (){
var statearr_39520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39520[(0)] = cljs$core$async$state_machine__37378__auto__);

(statearr_39520[(1)] = (1));

return statearr_39520;
});
var cljs$core$async$state_machine__37378__auto____1 = (function (state_39494){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_39494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e39521){if((e39521 instanceof Object)){
var ex__37381__auto__ = e39521;
var statearr_39522_39544 = state_39494;
(statearr_39522_39544[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39545 = state_39494;
state_39494 = G__39545;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$state_machine__37378__auto__ = function(state_39494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37378__auto____1.call(this,state_39494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37378__auto____0;
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37378__auto____1;
return cljs$core$async$state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___39528,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37491__auto__ = (function (){var statearr_39523 = f__37490__auto__.call(null);
(statearr_39523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___39528);

return statearr_39523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___39528,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args39547 = [];
var len__32159__auto___39605 = arguments.length;
var i__32160__auto___39606 = (0);
while(true){
if((i__32160__auto___39606 < len__32159__auto___39605)){
args39547.push((arguments[i__32160__auto___39606]));

var G__39607 = (i__32160__auto___39606 + (1));
i__32160__auto___39606 = G__39607;
continue;
} else {
}
break;
}

var G__39549 = args39547.length;
switch (G__39549) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39547.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37489__auto___39609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___39609,out){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___39609,out){
return (function (state_39581){
var state_val_39582 = (state_39581[(1)]);
if((state_val_39582 === (7))){
var inst_39560 = (state_39581[(7)]);
var inst_39561 = (state_39581[(8)]);
var inst_39560__$1 = (state_39581[(2)]);
var inst_39561__$1 = cljs.core.nth.call(null,inst_39560__$1,(0),null);
var inst_39562 = cljs.core.nth.call(null,inst_39560__$1,(1),null);
var inst_39563 = (inst_39561__$1 == null);
var state_39581__$1 = (function (){var statearr_39583 = state_39581;
(statearr_39583[(7)] = inst_39560__$1);

(statearr_39583[(8)] = inst_39561__$1);

(statearr_39583[(9)] = inst_39562);

return statearr_39583;
})();
if(cljs.core.truth_(inst_39563)){
var statearr_39584_39610 = state_39581__$1;
(statearr_39584_39610[(1)] = (8));

} else {
var statearr_39585_39611 = state_39581__$1;
(statearr_39585_39611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (1))){
var inst_39550 = cljs.core.vec.call(null,chs);
var inst_39551 = inst_39550;
var state_39581__$1 = (function (){var statearr_39586 = state_39581;
(statearr_39586[(10)] = inst_39551);

return statearr_39586;
})();
var statearr_39587_39612 = state_39581__$1;
(statearr_39587_39612[(2)] = null);

(statearr_39587_39612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (4))){
var inst_39551 = (state_39581[(10)]);
var state_39581__$1 = state_39581;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39581__$1,(7),inst_39551);
} else {
if((state_val_39582 === (6))){
var inst_39577 = (state_39581[(2)]);
var state_39581__$1 = state_39581;
var statearr_39588_39613 = state_39581__$1;
(statearr_39588_39613[(2)] = inst_39577);

(statearr_39588_39613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (3))){
var inst_39579 = (state_39581[(2)]);
var state_39581__$1 = state_39581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39581__$1,inst_39579);
} else {
if((state_val_39582 === (2))){
var inst_39551 = (state_39581[(10)]);
var inst_39553 = cljs.core.count.call(null,inst_39551);
var inst_39554 = (inst_39553 > (0));
var state_39581__$1 = state_39581;
if(cljs.core.truth_(inst_39554)){
var statearr_39590_39614 = state_39581__$1;
(statearr_39590_39614[(1)] = (4));

} else {
var statearr_39591_39615 = state_39581__$1;
(statearr_39591_39615[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (11))){
var inst_39551 = (state_39581[(10)]);
var inst_39570 = (state_39581[(2)]);
var tmp39589 = inst_39551;
var inst_39551__$1 = tmp39589;
var state_39581__$1 = (function (){var statearr_39592 = state_39581;
(statearr_39592[(10)] = inst_39551__$1);

(statearr_39592[(11)] = inst_39570);

return statearr_39592;
})();
var statearr_39593_39616 = state_39581__$1;
(statearr_39593_39616[(2)] = null);

(statearr_39593_39616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (9))){
var inst_39561 = (state_39581[(8)]);
var state_39581__$1 = state_39581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39581__$1,(11),out,inst_39561);
} else {
if((state_val_39582 === (5))){
var inst_39575 = cljs.core.async.close_BANG_.call(null,out);
var state_39581__$1 = state_39581;
var statearr_39594_39617 = state_39581__$1;
(statearr_39594_39617[(2)] = inst_39575);

(statearr_39594_39617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (10))){
var inst_39573 = (state_39581[(2)]);
var state_39581__$1 = state_39581;
var statearr_39595_39618 = state_39581__$1;
(statearr_39595_39618[(2)] = inst_39573);

(statearr_39595_39618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (8))){
var inst_39551 = (state_39581[(10)]);
var inst_39560 = (state_39581[(7)]);
var inst_39561 = (state_39581[(8)]);
var inst_39562 = (state_39581[(9)]);
var inst_39565 = (function (){var cs = inst_39551;
var vec__39556 = inst_39560;
var v = inst_39561;
var c = inst_39562;
return ((function (cs,vec__39556,v,c,inst_39551,inst_39560,inst_39561,inst_39562,state_val_39582,c__37489__auto___39609,out){
return (function (p1__39546_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39546_SHARP_);
});
;})(cs,vec__39556,v,c,inst_39551,inst_39560,inst_39561,inst_39562,state_val_39582,c__37489__auto___39609,out))
})();
var inst_39566 = cljs.core.filterv.call(null,inst_39565,inst_39551);
var inst_39551__$1 = inst_39566;
var state_39581__$1 = (function (){var statearr_39596 = state_39581;
(statearr_39596[(10)] = inst_39551__$1);

return statearr_39596;
})();
var statearr_39597_39619 = state_39581__$1;
(statearr_39597_39619[(2)] = null);

(statearr_39597_39619[(1)] = (2));


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
});})(c__37489__auto___39609,out))
;
return ((function (switch__37377__auto__,c__37489__auto___39609,out){
return (function() {
var cljs$core$async$state_machine__37378__auto__ = null;
var cljs$core$async$state_machine__37378__auto____0 = (function (){
var statearr_39601 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39601[(0)] = cljs$core$async$state_machine__37378__auto__);

(statearr_39601[(1)] = (1));

return statearr_39601;
});
var cljs$core$async$state_machine__37378__auto____1 = (function (state_39581){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_39581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e39602){if((e39602 instanceof Object)){
var ex__37381__auto__ = e39602;
var statearr_39603_39620 = state_39581;
(statearr_39603_39620[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39621 = state_39581;
state_39581 = G__39621;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$state_machine__37378__auto__ = function(state_39581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37378__auto____1.call(this,state_39581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37378__auto____0;
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37378__auto____1;
return cljs$core$async$state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___39609,out))
})();
var state__37491__auto__ = (function (){var statearr_39604 = f__37490__auto__.call(null);
(statearr_39604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___39609);

return statearr_39604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___39609,out))
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
var args39622 = [];
var len__32159__auto___39671 = arguments.length;
var i__32160__auto___39672 = (0);
while(true){
if((i__32160__auto___39672 < len__32159__auto___39671)){
args39622.push((arguments[i__32160__auto___39672]));

var G__39673 = (i__32160__auto___39672 + (1));
i__32160__auto___39672 = G__39673;
continue;
} else {
}
break;
}

var G__39624 = args39622.length;
switch (G__39624) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39622.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37489__auto___39675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___39675,out){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___39675,out){
return (function (state_39648){
var state_val_39649 = (state_39648[(1)]);
if((state_val_39649 === (7))){
var inst_39630 = (state_39648[(7)]);
var inst_39630__$1 = (state_39648[(2)]);
var inst_39631 = (inst_39630__$1 == null);
var inst_39632 = cljs.core.not.call(null,inst_39631);
var state_39648__$1 = (function (){var statearr_39650 = state_39648;
(statearr_39650[(7)] = inst_39630__$1);

return statearr_39650;
})();
if(inst_39632){
var statearr_39651_39676 = state_39648__$1;
(statearr_39651_39676[(1)] = (8));

} else {
var statearr_39652_39677 = state_39648__$1;
(statearr_39652_39677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (1))){
var inst_39625 = (0);
var state_39648__$1 = (function (){var statearr_39653 = state_39648;
(statearr_39653[(8)] = inst_39625);

return statearr_39653;
})();
var statearr_39654_39678 = state_39648__$1;
(statearr_39654_39678[(2)] = null);

(statearr_39654_39678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (4))){
var state_39648__$1 = state_39648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39648__$1,(7),ch);
} else {
if((state_val_39649 === (6))){
var inst_39643 = (state_39648[(2)]);
var state_39648__$1 = state_39648;
var statearr_39655_39679 = state_39648__$1;
(statearr_39655_39679[(2)] = inst_39643);

(statearr_39655_39679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (3))){
var inst_39645 = (state_39648[(2)]);
var inst_39646 = cljs.core.async.close_BANG_.call(null,out);
var state_39648__$1 = (function (){var statearr_39656 = state_39648;
(statearr_39656[(9)] = inst_39645);

return statearr_39656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39648__$1,inst_39646);
} else {
if((state_val_39649 === (2))){
var inst_39625 = (state_39648[(8)]);
var inst_39627 = (inst_39625 < n);
var state_39648__$1 = state_39648;
if(cljs.core.truth_(inst_39627)){
var statearr_39657_39680 = state_39648__$1;
(statearr_39657_39680[(1)] = (4));

} else {
var statearr_39658_39681 = state_39648__$1;
(statearr_39658_39681[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (11))){
var inst_39625 = (state_39648[(8)]);
var inst_39635 = (state_39648[(2)]);
var inst_39636 = (inst_39625 + (1));
var inst_39625__$1 = inst_39636;
var state_39648__$1 = (function (){var statearr_39659 = state_39648;
(statearr_39659[(8)] = inst_39625__$1);

(statearr_39659[(10)] = inst_39635);

return statearr_39659;
})();
var statearr_39660_39682 = state_39648__$1;
(statearr_39660_39682[(2)] = null);

(statearr_39660_39682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (9))){
var state_39648__$1 = state_39648;
var statearr_39661_39683 = state_39648__$1;
(statearr_39661_39683[(2)] = null);

(statearr_39661_39683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (5))){
var state_39648__$1 = state_39648;
var statearr_39662_39684 = state_39648__$1;
(statearr_39662_39684[(2)] = null);

(statearr_39662_39684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (10))){
var inst_39640 = (state_39648[(2)]);
var state_39648__$1 = state_39648;
var statearr_39663_39685 = state_39648__$1;
(statearr_39663_39685[(2)] = inst_39640);

(statearr_39663_39685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (8))){
var inst_39630 = (state_39648[(7)]);
var state_39648__$1 = state_39648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39648__$1,(11),out,inst_39630);
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
});})(c__37489__auto___39675,out))
;
return ((function (switch__37377__auto__,c__37489__auto___39675,out){
return (function() {
var cljs$core$async$state_machine__37378__auto__ = null;
var cljs$core$async$state_machine__37378__auto____0 = (function (){
var statearr_39667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39667[(0)] = cljs$core$async$state_machine__37378__auto__);

(statearr_39667[(1)] = (1));

return statearr_39667;
});
var cljs$core$async$state_machine__37378__auto____1 = (function (state_39648){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_39648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e39668){if((e39668 instanceof Object)){
var ex__37381__auto__ = e39668;
var statearr_39669_39686 = state_39648;
(statearr_39669_39686[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39687 = state_39648;
state_39648 = G__39687;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$state_machine__37378__auto__ = function(state_39648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37378__auto____1.call(this,state_39648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37378__auto____0;
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37378__auto____1;
return cljs$core$async$state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___39675,out))
})();
var state__37491__auto__ = (function (){var statearr_39670 = f__37490__auto__.call(null);
(statearr_39670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___39675);

return statearr_39670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___39675,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39695 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39695 = (function (map_LT_,f,ch,meta39696){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39696 = meta39696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39697,meta39696__$1){
var self__ = this;
var _39697__$1 = this;
return (new cljs.core.async.t_cljs$core$async39695(self__.map_LT_,self__.f,self__.ch,meta39696__$1));
});

cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39697){
var self__ = this;
var _39697__$1 = this;
return self__.meta39696;
});

cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39698 = (function (map_LT_,f,ch,meta39696,_,fn1,meta39699){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39696 = meta39696;
this._ = _;
this.fn1 = fn1;
this.meta39699 = meta39699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39700,meta39699__$1){
var self__ = this;
var _39700__$1 = this;
return (new cljs.core.async.t_cljs$core$async39698(self__.map_LT_,self__.f,self__.ch,self__.meta39696,self__._,self__.fn1,meta39699__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39698.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39700){
var self__ = this;
var _39700__$1 = this;
return self__.meta39699;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39698.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39698.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39698.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39698.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39688_SHARP_){
return f1.call(null,(((p1__39688_SHARP_ == null))?null:self__.f.call(null,p1__39688_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39698.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39696","meta39696",422562071,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39695","cljs.core.async/t_cljs$core$async39695",-2131506008,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39699","meta39699",402063616,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39698.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39698";

cljs.core.async.t_cljs$core$async39698.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cljs.core.async/t_cljs$core$async39698");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39698 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39698(map_LT___$1,f__$1,ch__$1,meta39696__$1,___$2,fn1__$1,meta39699){
return (new cljs.core.async.t_cljs$core$async39698(map_LT___$1,f__$1,ch__$1,meta39696__$1,___$2,fn1__$1,meta39699));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39698(self__.map_LT_,self__.f,self__.ch,self__.meta39696,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__31072__auto__ = ret;
if(cljs.core.truth_(and__31072__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__31072__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39695.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39696","meta39696",422562071,null)], null);
});

cljs.core.async.t_cljs$core$async39695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39695";

cljs.core.async.t_cljs$core$async39695.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cljs.core.async/t_cljs$core$async39695");
});

cljs.core.async.__GT_t_cljs$core$async39695 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39695(map_LT___$1,f__$1,ch__$1,meta39696){
return (new cljs.core.async.t_cljs$core$async39695(map_LT___$1,f__$1,ch__$1,meta39696));
});

}

return (new cljs.core.async.t_cljs$core$async39695(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39704 = (function (map_GT_,f,ch,meta39705){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta39705 = meta39705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39706,meta39705__$1){
var self__ = this;
var _39706__$1 = this;
return (new cljs.core.async.t_cljs$core$async39704(self__.map_GT_,self__.f,self__.ch,meta39705__$1));
});

cljs.core.async.t_cljs$core$async39704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39706){
var self__ = this;
var _39706__$1 = this;
return self__.meta39705;
});

cljs.core.async.t_cljs$core$async39704.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39705","meta39705",-1560255600,null)], null);
});

cljs.core.async.t_cljs$core$async39704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39704";

cljs.core.async.t_cljs$core$async39704.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cljs.core.async/t_cljs$core$async39704");
});

cljs.core.async.__GT_t_cljs$core$async39704 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39704(map_GT___$1,f__$1,ch__$1,meta39705){
return (new cljs.core.async.t_cljs$core$async39704(map_GT___$1,f__$1,ch__$1,meta39705));
});

}

return (new cljs.core.async.t_cljs$core$async39704(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39710 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39710 = (function (filter_GT_,p,ch,meta39711){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta39711 = meta39711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39712,meta39711__$1){
var self__ = this;
var _39712__$1 = this;
return (new cljs.core.async.t_cljs$core$async39710(self__.filter_GT_,self__.p,self__.ch,meta39711__$1));
});

cljs.core.async.t_cljs$core$async39710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39712){
var self__ = this;
var _39712__$1 = this;
return self__.meta39711;
});

cljs.core.async.t_cljs$core$async39710.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39710.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39710.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39710.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39710.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39710.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39710.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39711","meta39711",-118992820,null)], null);
});

cljs.core.async.t_cljs$core$async39710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39710";

cljs.core.async.t_cljs$core$async39710.cljs$lang$ctorPrWriter = (function (this__31690__auto__,writer__31691__auto__,opt__31692__auto__){
return cljs.core._write.call(null,writer__31691__auto__,"cljs.core.async/t_cljs$core$async39710");
});

cljs.core.async.__GT_t_cljs$core$async39710 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39710(filter_GT___$1,p__$1,ch__$1,meta39711){
return (new cljs.core.async.t_cljs$core$async39710(filter_GT___$1,p__$1,ch__$1,meta39711));
});

}

return (new cljs.core.async.t_cljs$core$async39710(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args39713 = [];
var len__32159__auto___39757 = arguments.length;
var i__32160__auto___39758 = (0);
while(true){
if((i__32160__auto___39758 < len__32159__auto___39757)){
args39713.push((arguments[i__32160__auto___39758]));

var G__39759 = (i__32160__auto___39758 + (1));
i__32160__auto___39758 = G__39759;
continue;
} else {
}
break;
}

var G__39715 = args39713.length;
switch (G__39715) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39713.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37489__auto___39761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___39761,out){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___39761,out){
return (function (state_39736){
var state_val_39737 = (state_39736[(1)]);
if((state_val_39737 === (7))){
var inst_39732 = (state_39736[(2)]);
var state_39736__$1 = state_39736;
var statearr_39738_39762 = state_39736__$1;
(statearr_39738_39762[(2)] = inst_39732);

(statearr_39738_39762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39737 === (1))){
var state_39736__$1 = state_39736;
var statearr_39739_39763 = state_39736__$1;
(statearr_39739_39763[(2)] = null);

(statearr_39739_39763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39737 === (4))){
var inst_39718 = (state_39736[(7)]);
var inst_39718__$1 = (state_39736[(2)]);
var inst_39719 = (inst_39718__$1 == null);
var state_39736__$1 = (function (){var statearr_39740 = state_39736;
(statearr_39740[(7)] = inst_39718__$1);

return statearr_39740;
})();
if(cljs.core.truth_(inst_39719)){
var statearr_39741_39764 = state_39736__$1;
(statearr_39741_39764[(1)] = (5));

} else {
var statearr_39742_39765 = state_39736__$1;
(statearr_39742_39765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39737 === (6))){
var inst_39718 = (state_39736[(7)]);
var inst_39723 = p.call(null,inst_39718);
var state_39736__$1 = state_39736;
if(cljs.core.truth_(inst_39723)){
var statearr_39743_39766 = state_39736__$1;
(statearr_39743_39766[(1)] = (8));

} else {
var statearr_39744_39767 = state_39736__$1;
(statearr_39744_39767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39737 === (3))){
var inst_39734 = (state_39736[(2)]);
var state_39736__$1 = state_39736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39736__$1,inst_39734);
} else {
if((state_val_39737 === (2))){
var state_39736__$1 = state_39736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39736__$1,(4),ch);
} else {
if((state_val_39737 === (11))){
var inst_39726 = (state_39736[(2)]);
var state_39736__$1 = state_39736;
var statearr_39745_39768 = state_39736__$1;
(statearr_39745_39768[(2)] = inst_39726);

(statearr_39745_39768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39737 === (9))){
var state_39736__$1 = state_39736;
var statearr_39746_39769 = state_39736__$1;
(statearr_39746_39769[(2)] = null);

(statearr_39746_39769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39737 === (5))){
var inst_39721 = cljs.core.async.close_BANG_.call(null,out);
var state_39736__$1 = state_39736;
var statearr_39747_39770 = state_39736__$1;
(statearr_39747_39770[(2)] = inst_39721);

(statearr_39747_39770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39737 === (10))){
var inst_39729 = (state_39736[(2)]);
var state_39736__$1 = (function (){var statearr_39748 = state_39736;
(statearr_39748[(8)] = inst_39729);

return statearr_39748;
})();
var statearr_39749_39771 = state_39736__$1;
(statearr_39749_39771[(2)] = null);

(statearr_39749_39771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39737 === (8))){
var inst_39718 = (state_39736[(7)]);
var state_39736__$1 = state_39736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39736__$1,(11),out,inst_39718);
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
});})(c__37489__auto___39761,out))
;
return ((function (switch__37377__auto__,c__37489__auto___39761,out){
return (function() {
var cljs$core$async$state_machine__37378__auto__ = null;
var cljs$core$async$state_machine__37378__auto____0 = (function (){
var statearr_39753 = [null,null,null,null,null,null,null,null,null];
(statearr_39753[(0)] = cljs$core$async$state_machine__37378__auto__);

(statearr_39753[(1)] = (1));

return statearr_39753;
});
var cljs$core$async$state_machine__37378__auto____1 = (function (state_39736){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_39736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e39754){if((e39754 instanceof Object)){
var ex__37381__auto__ = e39754;
var statearr_39755_39772 = state_39736;
(statearr_39755_39772[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39773 = state_39736;
state_39736 = G__39773;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$state_machine__37378__auto__ = function(state_39736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37378__auto____1.call(this,state_39736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37378__auto____0;
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37378__auto____1;
return cljs$core$async$state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___39761,out))
})();
var state__37491__auto__ = (function (){var statearr_39756 = f__37490__auto__.call(null);
(statearr_39756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___39761);

return statearr_39756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___39761,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39774 = [];
var len__32159__auto___39777 = arguments.length;
var i__32160__auto___39778 = (0);
while(true){
if((i__32160__auto___39778 < len__32159__auto___39777)){
args39774.push((arguments[i__32160__auto___39778]));

var G__39779 = (i__32160__auto___39778 + (1));
i__32160__auto___39778 = G__39779;
continue;
} else {
}
break;
}

var G__39776 = args39774.length;
switch (G__39776) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39774.length)].join('')));

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
var c__37489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto__){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto__){
return (function (state_39946){
var state_val_39947 = (state_39946[(1)]);
if((state_val_39947 === (7))){
var inst_39942 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
var statearr_39948_39989 = state_39946__$1;
(statearr_39948_39989[(2)] = inst_39942);

(statearr_39948_39989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (20))){
var inst_39912 = (state_39946[(7)]);
var inst_39923 = (state_39946[(2)]);
var inst_39924 = cljs.core.next.call(null,inst_39912);
var inst_39898 = inst_39924;
var inst_39899 = null;
var inst_39900 = (0);
var inst_39901 = (0);
var state_39946__$1 = (function (){var statearr_39949 = state_39946;
(statearr_39949[(8)] = inst_39900);

(statearr_39949[(9)] = inst_39898);

(statearr_39949[(10)] = inst_39923);

(statearr_39949[(11)] = inst_39899);

(statearr_39949[(12)] = inst_39901);

return statearr_39949;
})();
var statearr_39950_39990 = state_39946__$1;
(statearr_39950_39990[(2)] = null);

(statearr_39950_39990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (1))){
var state_39946__$1 = state_39946;
var statearr_39951_39991 = state_39946__$1;
(statearr_39951_39991[(2)] = null);

(statearr_39951_39991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (4))){
var inst_39887 = (state_39946[(13)]);
var inst_39887__$1 = (state_39946[(2)]);
var inst_39888 = (inst_39887__$1 == null);
var state_39946__$1 = (function (){var statearr_39952 = state_39946;
(statearr_39952[(13)] = inst_39887__$1);

return statearr_39952;
})();
if(cljs.core.truth_(inst_39888)){
var statearr_39953_39992 = state_39946__$1;
(statearr_39953_39992[(1)] = (5));

} else {
var statearr_39954_39993 = state_39946__$1;
(statearr_39954_39993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (15))){
var state_39946__$1 = state_39946;
var statearr_39958_39994 = state_39946__$1;
(statearr_39958_39994[(2)] = null);

(statearr_39958_39994[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (21))){
var state_39946__$1 = state_39946;
var statearr_39959_39995 = state_39946__$1;
(statearr_39959_39995[(2)] = null);

(statearr_39959_39995[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (13))){
var inst_39900 = (state_39946[(8)]);
var inst_39898 = (state_39946[(9)]);
var inst_39899 = (state_39946[(11)]);
var inst_39901 = (state_39946[(12)]);
var inst_39908 = (state_39946[(2)]);
var inst_39909 = (inst_39901 + (1));
var tmp39955 = inst_39900;
var tmp39956 = inst_39898;
var tmp39957 = inst_39899;
var inst_39898__$1 = tmp39956;
var inst_39899__$1 = tmp39957;
var inst_39900__$1 = tmp39955;
var inst_39901__$1 = inst_39909;
var state_39946__$1 = (function (){var statearr_39960 = state_39946;
(statearr_39960[(8)] = inst_39900__$1);

(statearr_39960[(9)] = inst_39898__$1);

(statearr_39960[(14)] = inst_39908);

(statearr_39960[(11)] = inst_39899__$1);

(statearr_39960[(12)] = inst_39901__$1);

return statearr_39960;
})();
var statearr_39961_39996 = state_39946__$1;
(statearr_39961_39996[(2)] = null);

(statearr_39961_39996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (22))){
var state_39946__$1 = state_39946;
var statearr_39962_39997 = state_39946__$1;
(statearr_39962_39997[(2)] = null);

(statearr_39962_39997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (6))){
var inst_39887 = (state_39946[(13)]);
var inst_39896 = f.call(null,inst_39887);
var inst_39897 = cljs.core.seq.call(null,inst_39896);
var inst_39898 = inst_39897;
var inst_39899 = null;
var inst_39900 = (0);
var inst_39901 = (0);
var state_39946__$1 = (function (){var statearr_39963 = state_39946;
(statearr_39963[(8)] = inst_39900);

(statearr_39963[(9)] = inst_39898);

(statearr_39963[(11)] = inst_39899);

(statearr_39963[(12)] = inst_39901);

return statearr_39963;
})();
var statearr_39964_39998 = state_39946__$1;
(statearr_39964_39998[(2)] = null);

(statearr_39964_39998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (17))){
var inst_39912 = (state_39946[(7)]);
var inst_39916 = cljs.core.chunk_first.call(null,inst_39912);
var inst_39917 = cljs.core.chunk_rest.call(null,inst_39912);
var inst_39918 = cljs.core.count.call(null,inst_39916);
var inst_39898 = inst_39917;
var inst_39899 = inst_39916;
var inst_39900 = inst_39918;
var inst_39901 = (0);
var state_39946__$1 = (function (){var statearr_39965 = state_39946;
(statearr_39965[(8)] = inst_39900);

(statearr_39965[(9)] = inst_39898);

(statearr_39965[(11)] = inst_39899);

(statearr_39965[(12)] = inst_39901);

return statearr_39965;
})();
var statearr_39966_39999 = state_39946__$1;
(statearr_39966_39999[(2)] = null);

(statearr_39966_39999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (3))){
var inst_39944 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39946__$1,inst_39944);
} else {
if((state_val_39947 === (12))){
var inst_39932 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
var statearr_39967_40000 = state_39946__$1;
(statearr_39967_40000[(2)] = inst_39932);

(statearr_39967_40000[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (2))){
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39946__$1,(4),in$);
} else {
if((state_val_39947 === (23))){
var inst_39940 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
var statearr_39968_40001 = state_39946__$1;
(statearr_39968_40001[(2)] = inst_39940);

(statearr_39968_40001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (19))){
var inst_39927 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
var statearr_39969_40002 = state_39946__$1;
(statearr_39969_40002[(2)] = inst_39927);

(statearr_39969_40002[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (11))){
var inst_39912 = (state_39946[(7)]);
var inst_39898 = (state_39946[(9)]);
var inst_39912__$1 = cljs.core.seq.call(null,inst_39898);
var state_39946__$1 = (function (){var statearr_39970 = state_39946;
(statearr_39970[(7)] = inst_39912__$1);

return statearr_39970;
})();
if(inst_39912__$1){
var statearr_39971_40003 = state_39946__$1;
(statearr_39971_40003[(1)] = (14));

} else {
var statearr_39972_40004 = state_39946__$1;
(statearr_39972_40004[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (9))){
var inst_39934 = (state_39946[(2)]);
var inst_39935 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39946__$1 = (function (){var statearr_39973 = state_39946;
(statearr_39973[(15)] = inst_39934);

return statearr_39973;
})();
if(cljs.core.truth_(inst_39935)){
var statearr_39974_40005 = state_39946__$1;
(statearr_39974_40005[(1)] = (21));

} else {
var statearr_39975_40006 = state_39946__$1;
(statearr_39975_40006[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (5))){
var inst_39890 = cljs.core.async.close_BANG_.call(null,out);
var state_39946__$1 = state_39946;
var statearr_39976_40007 = state_39946__$1;
(statearr_39976_40007[(2)] = inst_39890);

(statearr_39976_40007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (14))){
var inst_39912 = (state_39946[(7)]);
var inst_39914 = cljs.core.chunked_seq_QMARK_.call(null,inst_39912);
var state_39946__$1 = state_39946;
if(inst_39914){
var statearr_39977_40008 = state_39946__$1;
(statearr_39977_40008[(1)] = (17));

} else {
var statearr_39978_40009 = state_39946__$1;
(statearr_39978_40009[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (16))){
var inst_39930 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
var statearr_39979_40010 = state_39946__$1;
(statearr_39979_40010[(2)] = inst_39930);

(statearr_39979_40010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (10))){
var inst_39899 = (state_39946[(11)]);
var inst_39901 = (state_39946[(12)]);
var inst_39906 = cljs.core._nth.call(null,inst_39899,inst_39901);
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39946__$1,(13),out,inst_39906);
} else {
if((state_val_39947 === (18))){
var inst_39912 = (state_39946[(7)]);
var inst_39921 = cljs.core.first.call(null,inst_39912);
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39946__$1,(20),out,inst_39921);
} else {
if((state_val_39947 === (8))){
var inst_39900 = (state_39946[(8)]);
var inst_39901 = (state_39946[(12)]);
var inst_39903 = (inst_39901 < inst_39900);
var inst_39904 = inst_39903;
var state_39946__$1 = state_39946;
if(cljs.core.truth_(inst_39904)){
var statearr_39980_40011 = state_39946__$1;
(statearr_39980_40011[(1)] = (10));

} else {
var statearr_39981_40012 = state_39946__$1;
(statearr_39981_40012[(1)] = (11));

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
});})(c__37489__auto__))
;
return ((function (switch__37377__auto__,c__37489__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37378__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37378__auto____0 = (function (){
var statearr_39985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39985[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37378__auto__);

(statearr_39985[(1)] = (1));

return statearr_39985;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37378__auto____1 = (function (state_39946){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_39946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e39986){if((e39986 instanceof Object)){
var ex__37381__auto__ = e39986;
var statearr_39987_40013 = state_39946;
(statearr_39987_40013[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40014 = state_39946;
state_39946 = G__40014;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37378__auto__ = function(state_39946){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37378__auto____1.call(this,state_39946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37378__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37378__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto__))
})();
var state__37491__auto__ = (function (){var statearr_39988 = f__37490__auto__.call(null);
(statearr_39988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto__);

return statearr_39988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto__))
);

return c__37489__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args40015 = [];
var len__32159__auto___40018 = arguments.length;
var i__32160__auto___40019 = (0);
while(true){
if((i__32160__auto___40019 < len__32159__auto___40018)){
args40015.push((arguments[i__32160__auto___40019]));

var G__40020 = (i__32160__auto___40019 + (1));
i__32160__auto___40019 = G__40020;
continue;
} else {
}
break;
}

var G__40017 = args40015.length;
switch (G__40017) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40015.length)].join('')));

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
var args40022 = [];
var len__32159__auto___40025 = arguments.length;
var i__32160__auto___40026 = (0);
while(true){
if((i__32160__auto___40026 < len__32159__auto___40025)){
args40022.push((arguments[i__32160__auto___40026]));

var G__40027 = (i__32160__auto___40026 + (1));
i__32160__auto___40026 = G__40027;
continue;
} else {
}
break;
}

var G__40024 = args40022.length;
switch (G__40024) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40022.length)].join('')));

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
var args40029 = [];
var len__32159__auto___40080 = arguments.length;
var i__32160__auto___40081 = (0);
while(true){
if((i__32160__auto___40081 < len__32159__auto___40080)){
args40029.push((arguments[i__32160__auto___40081]));

var G__40082 = (i__32160__auto___40081 + (1));
i__32160__auto___40081 = G__40082;
continue;
} else {
}
break;
}

var G__40031 = args40029.length;
switch (G__40031) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40029.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37489__auto___40084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___40084,out){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___40084,out){
return (function (state_40055){
var state_val_40056 = (state_40055[(1)]);
if((state_val_40056 === (7))){
var inst_40050 = (state_40055[(2)]);
var state_40055__$1 = state_40055;
var statearr_40057_40085 = state_40055__$1;
(statearr_40057_40085[(2)] = inst_40050);

(statearr_40057_40085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40056 === (1))){
var inst_40032 = null;
var state_40055__$1 = (function (){var statearr_40058 = state_40055;
(statearr_40058[(7)] = inst_40032);

return statearr_40058;
})();
var statearr_40059_40086 = state_40055__$1;
(statearr_40059_40086[(2)] = null);

(statearr_40059_40086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40056 === (4))){
var inst_40035 = (state_40055[(8)]);
var inst_40035__$1 = (state_40055[(2)]);
var inst_40036 = (inst_40035__$1 == null);
var inst_40037 = cljs.core.not.call(null,inst_40036);
var state_40055__$1 = (function (){var statearr_40060 = state_40055;
(statearr_40060[(8)] = inst_40035__$1);

return statearr_40060;
})();
if(inst_40037){
var statearr_40061_40087 = state_40055__$1;
(statearr_40061_40087[(1)] = (5));

} else {
var statearr_40062_40088 = state_40055__$1;
(statearr_40062_40088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40056 === (6))){
var state_40055__$1 = state_40055;
var statearr_40063_40089 = state_40055__$1;
(statearr_40063_40089[(2)] = null);

(statearr_40063_40089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40056 === (3))){
var inst_40052 = (state_40055[(2)]);
var inst_40053 = cljs.core.async.close_BANG_.call(null,out);
var state_40055__$1 = (function (){var statearr_40064 = state_40055;
(statearr_40064[(9)] = inst_40052);

return statearr_40064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40055__$1,inst_40053);
} else {
if((state_val_40056 === (2))){
var state_40055__$1 = state_40055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40055__$1,(4),ch);
} else {
if((state_val_40056 === (11))){
var inst_40035 = (state_40055[(8)]);
var inst_40044 = (state_40055[(2)]);
var inst_40032 = inst_40035;
var state_40055__$1 = (function (){var statearr_40065 = state_40055;
(statearr_40065[(7)] = inst_40032);

(statearr_40065[(10)] = inst_40044);

return statearr_40065;
})();
var statearr_40066_40090 = state_40055__$1;
(statearr_40066_40090[(2)] = null);

(statearr_40066_40090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40056 === (9))){
var inst_40035 = (state_40055[(8)]);
var state_40055__$1 = state_40055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40055__$1,(11),out,inst_40035);
} else {
if((state_val_40056 === (5))){
var inst_40035 = (state_40055[(8)]);
var inst_40032 = (state_40055[(7)]);
var inst_40039 = cljs.core._EQ_.call(null,inst_40035,inst_40032);
var state_40055__$1 = state_40055;
if(inst_40039){
var statearr_40068_40091 = state_40055__$1;
(statearr_40068_40091[(1)] = (8));

} else {
var statearr_40069_40092 = state_40055__$1;
(statearr_40069_40092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40056 === (10))){
var inst_40047 = (state_40055[(2)]);
var state_40055__$1 = state_40055;
var statearr_40070_40093 = state_40055__$1;
(statearr_40070_40093[(2)] = inst_40047);

(statearr_40070_40093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40056 === (8))){
var inst_40032 = (state_40055[(7)]);
var tmp40067 = inst_40032;
var inst_40032__$1 = tmp40067;
var state_40055__$1 = (function (){var statearr_40071 = state_40055;
(statearr_40071[(7)] = inst_40032__$1);

return statearr_40071;
})();
var statearr_40072_40094 = state_40055__$1;
(statearr_40072_40094[(2)] = null);

(statearr_40072_40094[(1)] = (2));


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
});})(c__37489__auto___40084,out))
;
return ((function (switch__37377__auto__,c__37489__auto___40084,out){
return (function() {
var cljs$core$async$state_machine__37378__auto__ = null;
var cljs$core$async$state_machine__37378__auto____0 = (function (){
var statearr_40076 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40076[(0)] = cljs$core$async$state_machine__37378__auto__);

(statearr_40076[(1)] = (1));

return statearr_40076;
});
var cljs$core$async$state_machine__37378__auto____1 = (function (state_40055){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_40055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e40077){if((e40077 instanceof Object)){
var ex__37381__auto__ = e40077;
var statearr_40078_40095 = state_40055;
(statearr_40078_40095[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40096 = state_40055;
state_40055 = G__40096;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$state_machine__37378__auto__ = function(state_40055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37378__auto____1.call(this,state_40055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37378__auto____0;
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37378__auto____1;
return cljs$core$async$state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___40084,out))
})();
var state__37491__auto__ = (function (){var statearr_40079 = f__37490__auto__.call(null);
(statearr_40079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___40084);

return statearr_40079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___40084,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args40097 = [];
var len__32159__auto___40167 = arguments.length;
var i__32160__auto___40168 = (0);
while(true){
if((i__32160__auto___40168 < len__32159__auto___40167)){
args40097.push((arguments[i__32160__auto___40168]));

var G__40169 = (i__32160__auto___40168 + (1));
i__32160__auto___40168 = G__40169;
continue;
} else {
}
break;
}

var G__40099 = args40097.length;
switch (G__40099) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40097.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37489__auto___40171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___40171,out){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___40171,out){
return (function (state_40137){
var state_val_40138 = (state_40137[(1)]);
if((state_val_40138 === (7))){
var inst_40133 = (state_40137[(2)]);
var state_40137__$1 = state_40137;
var statearr_40139_40172 = state_40137__$1;
(statearr_40139_40172[(2)] = inst_40133);

(statearr_40139_40172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (1))){
var inst_40100 = (new Array(n));
var inst_40101 = inst_40100;
var inst_40102 = (0);
var state_40137__$1 = (function (){var statearr_40140 = state_40137;
(statearr_40140[(7)] = inst_40101);

(statearr_40140[(8)] = inst_40102);

return statearr_40140;
})();
var statearr_40141_40173 = state_40137__$1;
(statearr_40141_40173[(2)] = null);

(statearr_40141_40173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (4))){
var inst_40105 = (state_40137[(9)]);
var inst_40105__$1 = (state_40137[(2)]);
var inst_40106 = (inst_40105__$1 == null);
var inst_40107 = cljs.core.not.call(null,inst_40106);
var state_40137__$1 = (function (){var statearr_40142 = state_40137;
(statearr_40142[(9)] = inst_40105__$1);

return statearr_40142;
})();
if(inst_40107){
var statearr_40143_40174 = state_40137__$1;
(statearr_40143_40174[(1)] = (5));

} else {
var statearr_40144_40175 = state_40137__$1;
(statearr_40144_40175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (15))){
var inst_40127 = (state_40137[(2)]);
var state_40137__$1 = state_40137;
var statearr_40145_40176 = state_40137__$1;
(statearr_40145_40176[(2)] = inst_40127);

(statearr_40145_40176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (13))){
var state_40137__$1 = state_40137;
var statearr_40146_40177 = state_40137__$1;
(statearr_40146_40177[(2)] = null);

(statearr_40146_40177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (6))){
var inst_40102 = (state_40137[(8)]);
var inst_40123 = (inst_40102 > (0));
var state_40137__$1 = state_40137;
if(cljs.core.truth_(inst_40123)){
var statearr_40147_40178 = state_40137__$1;
(statearr_40147_40178[(1)] = (12));

} else {
var statearr_40148_40179 = state_40137__$1;
(statearr_40148_40179[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (3))){
var inst_40135 = (state_40137[(2)]);
var state_40137__$1 = state_40137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40137__$1,inst_40135);
} else {
if((state_val_40138 === (12))){
var inst_40101 = (state_40137[(7)]);
var inst_40125 = cljs.core.vec.call(null,inst_40101);
var state_40137__$1 = state_40137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40137__$1,(15),out,inst_40125);
} else {
if((state_val_40138 === (2))){
var state_40137__$1 = state_40137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40137__$1,(4),ch);
} else {
if((state_val_40138 === (11))){
var inst_40117 = (state_40137[(2)]);
var inst_40118 = (new Array(n));
var inst_40101 = inst_40118;
var inst_40102 = (0);
var state_40137__$1 = (function (){var statearr_40149 = state_40137;
(statearr_40149[(7)] = inst_40101);

(statearr_40149[(10)] = inst_40117);

(statearr_40149[(8)] = inst_40102);

return statearr_40149;
})();
var statearr_40150_40180 = state_40137__$1;
(statearr_40150_40180[(2)] = null);

(statearr_40150_40180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (9))){
var inst_40101 = (state_40137[(7)]);
var inst_40115 = cljs.core.vec.call(null,inst_40101);
var state_40137__$1 = state_40137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40137__$1,(11),out,inst_40115);
} else {
if((state_val_40138 === (5))){
var inst_40101 = (state_40137[(7)]);
var inst_40105 = (state_40137[(9)]);
var inst_40110 = (state_40137[(11)]);
var inst_40102 = (state_40137[(8)]);
var inst_40109 = (inst_40101[inst_40102] = inst_40105);
var inst_40110__$1 = (inst_40102 + (1));
var inst_40111 = (inst_40110__$1 < n);
var state_40137__$1 = (function (){var statearr_40151 = state_40137;
(statearr_40151[(12)] = inst_40109);

(statearr_40151[(11)] = inst_40110__$1);

return statearr_40151;
})();
if(cljs.core.truth_(inst_40111)){
var statearr_40152_40181 = state_40137__$1;
(statearr_40152_40181[(1)] = (8));

} else {
var statearr_40153_40182 = state_40137__$1;
(statearr_40153_40182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (14))){
var inst_40130 = (state_40137[(2)]);
var inst_40131 = cljs.core.async.close_BANG_.call(null,out);
var state_40137__$1 = (function (){var statearr_40155 = state_40137;
(statearr_40155[(13)] = inst_40130);

return statearr_40155;
})();
var statearr_40156_40183 = state_40137__$1;
(statearr_40156_40183[(2)] = inst_40131);

(statearr_40156_40183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (10))){
var inst_40121 = (state_40137[(2)]);
var state_40137__$1 = state_40137;
var statearr_40157_40184 = state_40137__$1;
(statearr_40157_40184[(2)] = inst_40121);

(statearr_40157_40184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40138 === (8))){
var inst_40101 = (state_40137[(7)]);
var inst_40110 = (state_40137[(11)]);
var tmp40154 = inst_40101;
var inst_40101__$1 = tmp40154;
var inst_40102 = inst_40110;
var state_40137__$1 = (function (){var statearr_40158 = state_40137;
(statearr_40158[(7)] = inst_40101__$1);

(statearr_40158[(8)] = inst_40102);

return statearr_40158;
})();
var statearr_40159_40185 = state_40137__$1;
(statearr_40159_40185[(2)] = null);

(statearr_40159_40185[(1)] = (2));


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
});})(c__37489__auto___40171,out))
;
return ((function (switch__37377__auto__,c__37489__auto___40171,out){
return (function() {
var cljs$core$async$state_machine__37378__auto__ = null;
var cljs$core$async$state_machine__37378__auto____0 = (function (){
var statearr_40163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40163[(0)] = cljs$core$async$state_machine__37378__auto__);

(statearr_40163[(1)] = (1));

return statearr_40163;
});
var cljs$core$async$state_machine__37378__auto____1 = (function (state_40137){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_40137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e40164){if((e40164 instanceof Object)){
var ex__37381__auto__ = e40164;
var statearr_40165_40186 = state_40137;
(statearr_40165_40186[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40187 = state_40137;
state_40137 = G__40187;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$state_machine__37378__auto__ = function(state_40137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37378__auto____1.call(this,state_40137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37378__auto____0;
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37378__auto____1;
return cljs$core$async$state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___40171,out))
})();
var state__37491__auto__ = (function (){var statearr_40166 = f__37490__auto__.call(null);
(statearr_40166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___40171);

return statearr_40166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___40171,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args40188 = [];
var len__32159__auto___40262 = arguments.length;
var i__32160__auto___40263 = (0);
while(true){
if((i__32160__auto___40263 < len__32159__auto___40262)){
args40188.push((arguments[i__32160__auto___40263]));

var G__40264 = (i__32160__auto___40263 + (1));
i__32160__auto___40263 = G__40264;
continue;
} else {
}
break;
}

var G__40190 = args40188.length;
switch (G__40190) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40188.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37489__auto___40266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___40266,out){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___40266,out){
return (function (state_40232){
var state_val_40233 = (state_40232[(1)]);
if((state_val_40233 === (7))){
var inst_40228 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40234_40267 = state_40232__$1;
(statearr_40234_40267[(2)] = inst_40228);

(statearr_40234_40267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (1))){
var inst_40191 = [];
var inst_40192 = inst_40191;
var inst_40193 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40232__$1 = (function (){var statearr_40235 = state_40232;
(statearr_40235[(7)] = inst_40192);

(statearr_40235[(8)] = inst_40193);

return statearr_40235;
})();
var statearr_40236_40268 = state_40232__$1;
(statearr_40236_40268[(2)] = null);

(statearr_40236_40268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (4))){
var inst_40196 = (state_40232[(9)]);
var inst_40196__$1 = (state_40232[(2)]);
var inst_40197 = (inst_40196__$1 == null);
var inst_40198 = cljs.core.not.call(null,inst_40197);
var state_40232__$1 = (function (){var statearr_40237 = state_40232;
(statearr_40237[(9)] = inst_40196__$1);

return statearr_40237;
})();
if(inst_40198){
var statearr_40238_40269 = state_40232__$1;
(statearr_40238_40269[(1)] = (5));

} else {
var statearr_40239_40270 = state_40232__$1;
(statearr_40239_40270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (15))){
var inst_40222 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40240_40271 = state_40232__$1;
(statearr_40240_40271[(2)] = inst_40222);

(statearr_40240_40271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (13))){
var state_40232__$1 = state_40232;
var statearr_40241_40272 = state_40232__$1;
(statearr_40241_40272[(2)] = null);

(statearr_40241_40272[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (6))){
var inst_40192 = (state_40232[(7)]);
var inst_40217 = inst_40192.length;
var inst_40218 = (inst_40217 > (0));
var state_40232__$1 = state_40232;
if(cljs.core.truth_(inst_40218)){
var statearr_40242_40273 = state_40232__$1;
(statearr_40242_40273[(1)] = (12));

} else {
var statearr_40243_40274 = state_40232__$1;
(statearr_40243_40274[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (3))){
var inst_40230 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40232__$1,inst_40230);
} else {
if((state_val_40233 === (12))){
var inst_40192 = (state_40232[(7)]);
var inst_40220 = cljs.core.vec.call(null,inst_40192);
var state_40232__$1 = state_40232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40232__$1,(15),out,inst_40220);
} else {
if((state_val_40233 === (2))){
var state_40232__$1 = state_40232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40232__$1,(4),ch);
} else {
if((state_val_40233 === (11))){
var inst_40200 = (state_40232[(10)]);
var inst_40196 = (state_40232[(9)]);
var inst_40210 = (state_40232[(2)]);
var inst_40211 = [];
var inst_40212 = inst_40211.push(inst_40196);
var inst_40192 = inst_40211;
var inst_40193 = inst_40200;
var state_40232__$1 = (function (){var statearr_40244 = state_40232;
(statearr_40244[(7)] = inst_40192);

(statearr_40244[(8)] = inst_40193);

(statearr_40244[(11)] = inst_40210);

(statearr_40244[(12)] = inst_40212);

return statearr_40244;
})();
var statearr_40245_40275 = state_40232__$1;
(statearr_40245_40275[(2)] = null);

(statearr_40245_40275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (9))){
var inst_40192 = (state_40232[(7)]);
var inst_40208 = cljs.core.vec.call(null,inst_40192);
var state_40232__$1 = state_40232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40232__$1,(11),out,inst_40208);
} else {
if((state_val_40233 === (5))){
var inst_40200 = (state_40232[(10)]);
var inst_40196 = (state_40232[(9)]);
var inst_40193 = (state_40232[(8)]);
var inst_40200__$1 = f.call(null,inst_40196);
var inst_40201 = cljs.core._EQ_.call(null,inst_40200__$1,inst_40193);
var inst_40202 = cljs.core.keyword_identical_QMARK_.call(null,inst_40193,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40203 = (inst_40201) || (inst_40202);
var state_40232__$1 = (function (){var statearr_40246 = state_40232;
(statearr_40246[(10)] = inst_40200__$1);

return statearr_40246;
})();
if(cljs.core.truth_(inst_40203)){
var statearr_40247_40276 = state_40232__$1;
(statearr_40247_40276[(1)] = (8));

} else {
var statearr_40248_40277 = state_40232__$1;
(statearr_40248_40277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (14))){
var inst_40225 = (state_40232[(2)]);
var inst_40226 = cljs.core.async.close_BANG_.call(null,out);
var state_40232__$1 = (function (){var statearr_40250 = state_40232;
(statearr_40250[(13)] = inst_40225);

return statearr_40250;
})();
var statearr_40251_40278 = state_40232__$1;
(statearr_40251_40278[(2)] = inst_40226);

(statearr_40251_40278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (10))){
var inst_40215 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40252_40279 = state_40232__$1;
(statearr_40252_40279[(2)] = inst_40215);

(statearr_40252_40279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (8))){
var inst_40200 = (state_40232[(10)]);
var inst_40196 = (state_40232[(9)]);
var inst_40192 = (state_40232[(7)]);
var inst_40205 = inst_40192.push(inst_40196);
var tmp40249 = inst_40192;
var inst_40192__$1 = tmp40249;
var inst_40193 = inst_40200;
var state_40232__$1 = (function (){var statearr_40253 = state_40232;
(statearr_40253[(7)] = inst_40192__$1);

(statearr_40253[(14)] = inst_40205);

(statearr_40253[(8)] = inst_40193);

return statearr_40253;
})();
var statearr_40254_40280 = state_40232__$1;
(statearr_40254_40280[(2)] = null);

(statearr_40254_40280[(1)] = (2));


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
});})(c__37489__auto___40266,out))
;
return ((function (switch__37377__auto__,c__37489__auto___40266,out){
return (function() {
var cljs$core$async$state_machine__37378__auto__ = null;
var cljs$core$async$state_machine__37378__auto____0 = (function (){
var statearr_40258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40258[(0)] = cljs$core$async$state_machine__37378__auto__);

(statearr_40258[(1)] = (1));

return statearr_40258;
});
var cljs$core$async$state_machine__37378__auto____1 = (function (state_40232){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_40232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e40259){if((e40259 instanceof Object)){
var ex__37381__auto__ = e40259;
var statearr_40260_40281 = state_40232;
(statearr_40260_40281[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40282 = state_40232;
state_40232 = G__40282;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
cljs$core$async$state_machine__37378__auto__ = function(state_40232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37378__auto____1.call(this,state_40232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37378__auto____0;
cljs$core$async$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37378__auto____1;
return cljs$core$async$state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___40266,out))
})();
var state__37491__auto__ = (function (){var statearr_40261 = f__37490__auto__.call(null);
(statearr_40261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___40266);

return statearr_40261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___40266,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1471077518066