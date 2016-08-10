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
var args36407 = [];
var len__31083__auto___36413 = arguments.length;
var i__31084__auto___36414 = (0);
while(true){
if((i__31084__auto___36414 < len__31083__auto___36413)){
args36407.push((arguments[i__31084__auto___36414]));

var G__36415 = (i__31084__auto___36414 + (1));
i__31084__auto___36414 = G__36415;
continue;
} else {
}
break;
}

var G__36409 = args36407.length;
switch (G__36409) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36407.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async36410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36410 = (function (f,blockable,meta36411){
this.f = f;
this.blockable = blockable;
this.meta36411 = meta36411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36412,meta36411__$1){
var self__ = this;
var _36412__$1 = this;
return (new cljs.core.async.t_cljs$core$async36410(self__.f,self__.blockable,meta36411__$1));
});

cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36412){
var self__ = this;
var _36412__$1 = this;
return self__.meta36411;
});

cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36411","meta36411",887568906,null)], null);
});

cljs.core.async.t_cljs$core$async36410.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36410";

cljs.core.async.t_cljs$core$async36410.cljs$lang$ctorPrWriter = (function (this__30614__auto__,writer__30615__auto__,opt__30616__auto__){
return cljs.core._write.call(null,writer__30615__auto__,"cljs.core.async/t_cljs$core$async36410");
});

cljs.core.async.__GT_t_cljs$core$async36410 = (function cljs$core$async$__GT_t_cljs$core$async36410(f__$1,blockable__$1,meta36411){
return (new cljs.core.async.t_cljs$core$async36410(f__$1,blockable__$1,meta36411));
});

}

return (new cljs.core.async.t_cljs$core$async36410(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args36419 = [];
var len__31083__auto___36422 = arguments.length;
var i__31084__auto___36423 = (0);
while(true){
if((i__31084__auto___36423 < len__31083__auto___36422)){
args36419.push((arguments[i__31084__auto___36423]));

var G__36424 = (i__31084__auto___36423 + (1));
i__31084__auto___36423 = G__36424;
continue;
} else {
}
break;
}

var G__36421 = args36419.length;
switch (G__36421) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36419.length)].join('')));

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
var args36426 = [];
var len__31083__auto___36429 = arguments.length;
var i__31084__auto___36430 = (0);
while(true){
if((i__31084__auto___36430 < len__31083__auto___36429)){
args36426.push((arguments[i__31084__auto___36430]));

var G__36431 = (i__31084__auto___36430 + (1));
i__31084__auto___36430 = G__36431;
continue;
} else {
}
break;
}

var G__36428 = args36426.length;
switch (G__36428) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36426.length)].join('')));

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
var args36433 = [];
var len__31083__auto___36436 = arguments.length;
var i__31084__auto___36437 = (0);
while(true){
if((i__31084__auto___36437 < len__31083__auto___36436)){
args36433.push((arguments[i__31084__auto___36437]));

var G__36438 = (i__31084__auto___36437 + (1));
i__31084__auto___36437 = G__36438;
continue;
} else {
}
break;
}

var G__36435 = args36433.length;
switch (G__36435) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36433.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36440 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36440);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36440,ret){
return (function (){
return fn1.call(null,val_36440);
});})(val_36440,ret))
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
var args36441 = [];
var len__31083__auto___36444 = arguments.length;
var i__31084__auto___36445 = (0);
while(true){
if((i__31084__auto___36445 < len__31083__auto___36444)){
args36441.push((arguments[i__31084__auto___36445]));

var G__36446 = (i__31084__auto___36445 + (1));
i__31084__auto___36445 = G__36446;
continue;
} else {
}
break;
}

var G__36443 = args36441.length;
switch (G__36443) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36441.length)].join('')));

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
var n__30923__auto___36448 = n;
var x_36449 = (0);
while(true){
if((x_36449 < n__30923__auto___36448)){
(a[x_36449] = (0));

var G__36450 = (x_36449 + (1));
x_36449 = G__36450;
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

var G__36451 = (i + (1));
i = G__36451;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36455 = (function (alt_flag,flag,meta36456){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta36456 = meta36456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36457,meta36456__$1){
var self__ = this;
var _36457__$1 = this;
return (new cljs.core.async.t_cljs$core$async36455(self__.alt_flag,self__.flag,meta36456__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36457){
var self__ = this;
var _36457__$1 = this;
return self__.meta36456;
});})(flag))
;

cljs.core.async.t_cljs$core$async36455.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36455.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36455.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36456","meta36456",1053361091,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36455";

cljs.core.async.t_cljs$core$async36455.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30614__auto__,writer__30615__auto__,opt__30616__auto__){
return cljs.core._write.call(null,writer__30615__auto__,"cljs.core.async/t_cljs$core$async36455");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36455 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36455(alt_flag__$1,flag__$1,meta36456){
return (new cljs.core.async.t_cljs$core$async36455(alt_flag__$1,flag__$1,meta36456));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36455(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36461 = (function (alt_handler,flag,cb,meta36462){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta36462 = meta36462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36463,meta36462__$1){
var self__ = this;
var _36463__$1 = this;
return (new cljs.core.async.t_cljs$core$async36461(self__.alt_handler,self__.flag,self__.cb,meta36462__$1));
});

cljs.core.async.t_cljs$core$async36461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36463){
var self__ = this;
var _36463__$1 = this;
return self__.meta36462;
});

cljs.core.async.t_cljs$core$async36461.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36461.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36461.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36461.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36462","meta36462",1119872457,null)], null);
});

cljs.core.async.t_cljs$core$async36461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36461";

cljs.core.async.t_cljs$core$async36461.cljs$lang$ctorPrWriter = (function (this__30614__auto__,writer__30615__auto__,opt__30616__auto__){
return cljs.core._write.call(null,writer__30615__auto__,"cljs.core.async/t_cljs$core$async36461");
});

cljs.core.async.__GT_t_cljs$core$async36461 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36461(alt_handler__$1,flag__$1,cb__$1,meta36462){
return (new cljs.core.async.t_cljs$core$async36461(alt_handler__$1,flag__$1,cb__$1,meta36462));
});

}

return (new cljs.core.async.t_cljs$core$async36461(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36464_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36464_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36465_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36465_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30008__auto__ = wport;
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36466 = (i + (1));
i = G__36466;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30008__auto__ = ret;
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__29996__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__29996__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__29996__auto__;
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
var args__31090__auto__ = [];
var len__31083__auto___36472 = arguments.length;
var i__31084__auto___36473 = (0);
while(true){
if((i__31084__auto___36473 < len__31083__auto___36472)){
args__31090__auto__.push((arguments[i__31084__auto___36473]));

var G__36474 = (i__31084__auto___36473 + (1));
i__31084__auto___36473 = G__36474;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((1) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31091__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36469){
var map__36470 = p__36469;
var map__36470__$1 = ((((!((map__36470 == null)))?((((map__36470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36470):map__36470);
var opts = map__36470__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36467){
var G__36468 = cljs.core.first.call(null,seq36467);
var seq36467__$1 = cljs.core.next.call(null,seq36467);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36468,seq36467__$1);
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
var args36475 = [];
var len__31083__auto___36525 = arguments.length;
var i__31084__auto___36526 = (0);
while(true){
if((i__31084__auto___36526 < len__31083__auto___36525)){
args36475.push((arguments[i__31084__auto___36526]));

var G__36527 = (i__31084__auto___36526 + (1));
i__31084__auto___36526 = G__36527;
continue;
} else {
}
break;
}

var G__36477 = args36475.length;
switch (G__36477) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36475.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36362__auto___36529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___36529){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___36529){
return (function (state_36501){
var state_val_36502 = (state_36501[(1)]);
if((state_val_36502 === (7))){
var inst_36497 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36503_36530 = state_36501__$1;
(statearr_36503_36530[(2)] = inst_36497);

(statearr_36503_36530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (1))){
var state_36501__$1 = state_36501;
var statearr_36504_36531 = state_36501__$1;
(statearr_36504_36531[(2)] = null);

(statearr_36504_36531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (4))){
var inst_36480 = (state_36501[(7)]);
var inst_36480__$1 = (state_36501[(2)]);
var inst_36481 = (inst_36480__$1 == null);
var state_36501__$1 = (function (){var statearr_36505 = state_36501;
(statearr_36505[(7)] = inst_36480__$1);

return statearr_36505;
})();
if(cljs.core.truth_(inst_36481)){
var statearr_36506_36532 = state_36501__$1;
(statearr_36506_36532[(1)] = (5));

} else {
var statearr_36507_36533 = state_36501__$1;
(statearr_36507_36533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (13))){
var state_36501__$1 = state_36501;
var statearr_36508_36534 = state_36501__$1;
(statearr_36508_36534[(2)] = null);

(statearr_36508_36534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (6))){
var inst_36480 = (state_36501[(7)]);
var state_36501__$1 = state_36501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36501__$1,(11),to,inst_36480);
} else {
if((state_val_36502 === (3))){
var inst_36499 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36501__$1,inst_36499);
} else {
if((state_val_36502 === (12))){
var state_36501__$1 = state_36501;
var statearr_36509_36535 = state_36501__$1;
(statearr_36509_36535[(2)] = null);

(statearr_36509_36535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (2))){
var state_36501__$1 = state_36501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36501__$1,(4),from);
} else {
if((state_val_36502 === (11))){
var inst_36490 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
if(cljs.core.truth_(inst_36490)){
var statearr_36510_36536 = state_36501__$1;
(statearr_36510_36536[(1)] = (12));

} else {
var statearr_36511_36537 = state_36501__$1;
(statearr_36511_36537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (9))){
var state_36501__$1 = state_36501;
var statearr_36512_36538 = state_36501__$1;
(statearr_36512_36538[(2)] = null);

(statearr_36512_36538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (5))){
var state_36501__$1 = state_36501;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36513_36539 = state_36501__$1;
(statearr_36513_36539[(1)] = (8));

} else {
var statearr_36514_36540 = state_36501__$1;
(statearr_36514_36540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (14))){
var inst_36495 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36515_36541 = state_36501__$1;
(statearr_36515_36541[(2)] = inst_36495);

(statearr_36515_36541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (10))){
var inst_36487 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36516_36542 = state_36501__$1;
(statearr_36516_36542[(2)] = inst_36487);

(statearr_36516_36542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (8))){
var inst_36484 = cljs.core.async.close_BANG_.call(null,to);
var state_36501__$1 = state_36501;
var statearr_36517_36543 = state_36501__$1;
(statearr_36517_36543[(2)] = inst_36484);

(statearr_36517_36543[(1)] = (10));


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
});})(c__36362__auto___36529))
;
return ((function (switch__36250__auto__,c__36362__auto___36529){
return (function() {
var cljs$core$async$state_machine__36251__auto__ = null;
var cljs$core$async$state_machine__36251__auto____0 = (function (){
var statearr_36521 = [null,null,null,null,null,null,null,null];
(statearr_36521[(0)] = cljs$core$async$state_machine__36251__auto__);

(statearr_36521[(1)] = (1));

return statearr_36521;
});
var cljs$core$async$state_machine__36251__auto____1 = (function (state_36501){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_36501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e36522){if((e36522 instanceof Object)){
var ex__36254__auto__ = e36522;
var statearr_36523_36544 = state_36501;
(statearr_36523_36544[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36545 = state_36501;
state_36501 = G__36545;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$state_machine__36251__auto__ = function(state_36501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36251__auto____1.call(this,state_36501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36251__auto____0;
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36251__auto____1;
return cljs$core$async$state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___36529))
})();
var state__36364__auto__ = (function (){var statearr_36524 = f__36363__auto__.call(null);
(statearr_36524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___36529);

return statearr_36524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___36529))
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
return (function (p__36733){
var vec__36734 = p__36733;
var v = cljs.core.nth.call(null,vec__36734,(0),null);
var p = cljs.core.nth.call(null,vec__36734,(1),null);
var job = vec__36734;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36362__auto___36920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___36920,res,vec__36734,v,p,job,jobs,results){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___36920,res,vec__36734,v,p,job,jobs,results){
return (function (state_36741){
var state_val_36742 = (state_36741[(1)]);
if((state_val_36742 === (1))){
var state_36741__$1 = state_36741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36741__$1,(2),res,v);
} else {
if((state_val_36742 === (2))){
var inst_36738 = (state_36741[(2)]);
var inst_36739 = cljs.core.async.close_BANG_.call(null,res);
var state_36741__$1 = (function (){var statearr_36743 = state_36741;
(statearr_36743[(7)] = inst_36738);

return statearr_36743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36741__$1,inst_36739);
} else {
return null;
}
}
});})(c__36362__auto___36920,res,vec__36734,v,p,job,jobs,results))
;
return ((function (switch__36250__auto__,c__36362__auto___36920,res,vec__36734,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0 = (function (){
var statearr_36747 = [null,null,null,null,null,null,null,null];
(statearr_36747[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__);

(statearr_36747[(1)] = (1));

return statearr_36747;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1 = (function (state_36741){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_36741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e36748){if((e36748 instanceof Object)){
var ex__36254__auto__ = e36748;
var statearr_36749_36921 = state_36741;
(statearr_36749_36921[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36922 = state_36741;
state_36741 = G__36922;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__ = function(state_36741){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1.call(this,state_36741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___36920,res,vec__36734,v,p,job,jobs,results))
})();
var state__36364__auto__ = (function (){var statearr_36750 = f__36363__auto__.call(null);
(statearr_36750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___36920);

return statearr_36750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___36920,res,vec__36734,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36751){
var vec__36752 = p__36751;
var v = cljs.core.nth.call(null,vec__36752,(0),null);
var p = cljs.core.nth.call(null,vec__36752,(1),null);
var job = vec__36752;
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
var n__30923__auto___36923 = n;
var __36924 = (0);
while(true){
if((__36924 < n__30923__auto___36923)){
var G__36755_36925 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36755_36925) {
case "compute":
var c__36362__auto___36927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36924,c__36362__auto___36927,G__36755_36925,n__30923__auto___36923,jobs,results,process,async){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (__36924,c__36362__auto___36927,G__36755_36925,n__30923__auto___36923,jobs,results,process,async){
return (function (state_36768){
var state_val_36769 = (state_36768[(1)]);
if((state_val_36769 === (1))){
var state_36768__$1 = state_36768;
var statearr_36770_36928 = state_36768__$1;
(statearr_36770_36928[(2)] = null);

(statearr_36770_36928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (2))){
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36768__$1,(4),jobs);
} else {
if((state_val_36769 === (3))){
var inst_36766 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36768__$1,inst_36766);
} else {
if((state_val_36769 === (4))){
var inst_36758 = (state_36768[(2)]);
var inst_36759 = process.call(null,inst_36758);
var state_36768__$1 = state_36768;
if(cljs.core.truth_(inst_36759)){
var statearr_36771_36929 = state_36768__$1;
(statearr_36771_36929[(1)] = (5));

} else {
var statearr_36772_36930 = state_36768__$1;
(statearr_36772_36930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (5))){
var state_36768__$1 = state_36768;
var statearr_36773_36931 = state_36768__$1;
(statearr_36773_36931[(2)] = null);

(statearr_36773_36931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (6))){
var state_36768__$1 = state_36768;
var statearr_36774_36932 = state_36768__$1;
(statearr_36774_36932[(2)] = null);

(statearr_36774_36932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (7))){
var inst_36764 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36775_36933 = state_36768__$1;
(statearr_36775_36933[(2)] = inst_36764);

(statearr_36775_36933[(1)] = (3));


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
});})(__36924,c__36362__auto___36927,G__36755_36925,n__30923__auto___36923,jobs,results,process,async))
;
return ((function (__36924,switch__36250__auto__,c__36362__auto___36927,G__36755_36925,n__30923__auto___36923,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0 = (function (){
var statearr_36779 = [null,null,null,null,null,null,null];
(statearr_36779[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__);

(statearr_36779[(1)] = (1));

return statearr_36779;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1 = (function (state_36768){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_36768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e36780){if((e36780 instanceof Object)){
var ex__36254__auto__ = e36780;
var statearr_36781_36934 = state_36768;
(statearr_36781_36934[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36935 = state_36768;
state_36768 = G__36935;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__ = function(state_36768){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1.call(this,state_36768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__;
})()
;})(__36924,switch__36250__auto__,c__36362__auto___36927,G__36755_36925,n__30923__auto___36923,jobs,results,process,async))
})();
var state__36364__auto__ = (function (){var statearr_36782 = f__36363__auto__.call(null);
(statearr_36782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___36927);

return statearr_36782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(__36924,c__36362__auto___36927,G__36755_36925,n__30923__auto___36923,jobs,results,process,async))
);


break;
case "async":
var c__36362__auto___36936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36924,c__36362__auto___36936,G__36755_36925,n__30923__auto___36923,jobs,results,process,async){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (__36924,c__36362__auto___36936,G__36755_36925,n__30923__auto___36923,jobs,results,process,async){
return (function (state_36795){
var state_val_36796 = (state_36795[(1)]);
if((state_val_36796 === (1))){
var state_36795__$1 = state_36795;
var statearr_36797_36937 = state_36795__$1;
(statearr_36797_36937[(2)] = null);

(statearr_36797_36937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36796 === (2))){
var state_36795__$1 = state_36795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36795__$1,(4),jobs);
} else {
if((state_val_36796 === (3))){
var inst_36793 = (state_36795[(2)]);
var state_36795__$1 = state_36795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36795__$1,inst_36793);
} else {
if((state_val_36796 === (4))){
var inst_36785 = (state_36795[(2)]);
var inst_36786 = async.call(null,inst_36785);
var state_36795__$1 = state_36795;
if(cljs.core.truth_(inst_36786)){
var statearr_36798_36938 = state_36795__$1;
(statearr_36798_36938[(1)] = (5));

} else {
var statearr_36799_36939 = state_36795__$1;
(statearr_36799_36939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36796 === (5))){
var state_36795__$1 = state_36795;
var statearr_36800_36940 = state_36795__$1;
(statearr_36800_36940[(2)] = null);

(statearr_36800_36940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36796 === (6))){
var state_36795__$1 = state_36795;
var statearr_36801_36941 = state_36795__$1;
(statearr_36801_36941[(2)] = null);

(statearr_36801_36941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36796 === (7))){
var inst_36791 = (state_36795[(2)]);
var state_36795__$1 = state_36795;
var statearr_36802_36942 = state_36795__$1;
(statearr_36802_36942[(2)] = inst_36791);

(statearr_36802_36942[(1)] = (3));


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
});})(__36924,c__36362__auto___36936,G__36755_36925,n__30923__auto___36923,jobs,results,process,async))
;
return ((function (__36924,switch__36250__auto__,c__36362__auto___36936,G__36755_36925,n__30923__auto___36923,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0 = (function (){
var statearr_36806 = [null,null,null,null,null,null,null];
(statearr_36806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__);

(statearr_36806[(1)] = (1));

return statearr_36806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1 = (function (state_36795){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_36795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e36807){if((e36807 instanceof Object)){
var ex__36254__auto__ = e36807;
var statearr_36808_36943 = state_36795;
(statearr_36808_36943[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36944 = state_36795;
state_36795 = G__36944;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__ = function(state_36795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1.call(this,state_36795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__;
})()
;})(__36924,switch__36250__auto__,c__36362__auto___36936,G__36755_36925,n__30923__auto___36923,jobs,results,process,async))
})();
var state__36364__auto__ = (function (){var statearr_36809 = f__36363__auto__.call(null);
(statearr_36809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___36936);

return statearr_36809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(__36924,c__36362__auto___36936,G__36755_36925,n__30923__auto___36923,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36945 = (__36924 + (1));
__36924 = G__36945;
continue;
} else {
}
break;
}

var c__36362__auto___36946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___36946,jobs,results,process,async){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___36946,jobs,results,process,async){
return (function (state_36831){
var state_val_36832 = (state_36831[(1)]);
if((state_val_36832 === (1))){
var state_36831__$1 = state_36831;
var statearr_36833_36947 = state_36831__$1;
(statearr_36833_36947[(2)] = null);

(statearr_36833_36947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36832 === (2))){
var state_36831__$1 = state_36831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36831__$1,(4),from);
} else {
if((state_val_36832 === (3))){
var inst_36829 = (state_36831[(2)]);
var state_36831__$1 = state_36831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36831__$1,inst_36829);
} else {
if((state_val_36832 === (4))){
var inst_36812 = (state_36831[(7)]);
var inst_36812__$1 = (state_36831[(2)]);
var inst_36813 = (inst_36812__$1 == null);
var state_36831__$1 = (function (){var statearr_36834 = state_36831;
(statearr_36834[(7)] = inst_36812__$1);

return statearr_36834;
})();
if(cljs.core.truth_(inst_36813)){
var statearr_36835_36948 = state_36831__$1;
(statearr_36835_36948[(1)] = (5));

} else {
var statearr_36836_36949 = state_36831__$1;
(statearr_36836_36949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36832 === (5))){
var inst_36815 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36831__$1 = state_36831;
var statearr_36837_36950 = state_36831__$1;
(statearr_36837_36950[(2)] = inst_36815);

(statearr_36837_36950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36832 === (6))){
var inst_36812 = (state_36831[(7)]);
var inst_36817 = (state_36831[(8)]);
var inst_36817__$1 = cljs.core.async.chan.call(null,(1));
var inst_36818 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36819 = [inst_36812,inst_36817__$1];
var inst_36820 = (new cljs.core.PersistentVector(null,2,(5),inst_36818,inst_36819,null));
var state_36831__$1 = (function (){var statearr_36838 = state_36831;
(statearr_36838[(8)] = inst_36817__$1);

return statearr_36838;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36831__$1,(8),jobs,inst_36820);
} else {
if((state_val_36832 === (7))){
var inst_36827 = (state_36831[(2)]);
var state_36831__$1 = state_36831;
var statearr_36839_36951 = state_36831__$1;
(statearr_36839_36951[(2)] = inst_36827);

(statearr_36839_36951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36832 === (8))){
var inst_36817 = (state_36831[(8)]);
var inst_36822 = (state_36831[(2)]);
var state_36831__$1 = (function (){var statearr_36840 = state_36831;
(statearr_36840[(9)] = inst_36822);

return statearr_36840;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36831__$1,(9),results,inst_36817);
} else {
if((state_val_36832 === (9))){
var inst_36824 = (state_36831[(2)]);
var state_36831__$1 = (function (){var statearr_36841 = state_36831;
(statearr_36841[(10)] = inst_36824);

return statearr_36841;
})();
var statearr_36842_36952 = state_36831__$1;
(statearr_36842_36952[(2)] = null);

(statearr_36842_36952[(1)] = (2));


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
});})(c__36362__auto___36946,jobs,results,process,async))
;
return ((function (switch__36250__auto__,c__36362__auto___36946,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0 = (function (){
var statearr_36846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36846[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__);

(statearr_36846[(1)] = (1));

return statearr_36846;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1 = (function (state_36831){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_36831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e36847){if((e36847 instanceof Object)){
var ex__36254__auto__ = e36847;
var statearr_36848_36953 = state_36831;
(statearr_36848_36953[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36954 = state_36831;
state_36831 = G__36954;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__ = function(state_36831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1.call(this,state_36831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___36946,jobs,results,process,async))
})();
var state__36364__auto__ = (function (){var statearr_36849 = f__36363__auto__.call(null);
(statearr_36849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___36946);

return statearr_36849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___36946,jobs,results,process,async))
);


var c__36362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto__,jobs,results,process,async){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto__,jobs,results,process,async){
return (function (state_36887){
var state_val_36888 = (state_36887[(1)]);
if((state_val_36888 === (7))){
var inst_36883 = (state_36887[(2)]);
var state_36887__$1 = state_36887;
var statearr_36889_36955 = state_36887__$1;
(statearr_36889_36955[(2)] = inst_36883);

(statearr_36889_36955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (20))){
var state_36887__$1 = state_36887;
var statearr_36890_36956 = state_36887__$1;
(statearr_36890_36956[(2)] = null);

(statearr_36890_36956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (1))){
var state_36887__$1 = state_36887;
var statearr_36891_36957 = state_36887__$1;
(statearr_36891_36957[(2)] = null);

(statearr_36891_36957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (4))){
var inst_36852 = (state_36887[(7)]);
var inst_36852__$1 = (state_36887[(2)]);
var inst_36853 = (inst_36852__$1 == null);
var state_36887__$1 = (function (){var statearr_36892 = state_36887;
(statearr_36892[(7)] = inst_36852__$1);

return statearr_36892;
})();
if(cljs.core.truth_(inst_36853)){
var statearr_36893_36958 = state_36887__$1;
(statearr_36893_36958[(1)] = (5));

} else {
var statearr_36894_36959 = state_36887__$1;
(statearr_36894_36959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (15))){
var inst_36865 = (state_36887[(8)]);
var state_36887__$1 = state_36887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36887__$1,(18),to,inst_36865);
} else {
if((state_val_36888 === (21))){
var inst_36878 = (state_36887[(2)]);
var state_36887__$1 = state_36887;
var statearr_36895_36960 = state_36887__$1;
(statearr_36895_36960[(2)] = inst_36878);

(statearr_36895_36960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (13))){
var inst_36880 = (state_36887[(2)]);
var state_36887__$1 = (function (){var statearr_36896 = state_36887;
(statearr_36896[(9)] = inst_36880);

return statearr_36896;
})();
var statearr_36897_36961 = state_36887__$1;
(statearr_36897_36961[(2)] = null);

(statearr_36897_36961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (6))){
var inst_36852 = (state_36887[(7)]);
var state_36887__$1 = state_36887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36887__$1,(11),inst_36852);
} else {
if((state_val_36888 === (17))){
var inst_36873 = (state_36887[(2)]);
var state_36887__$1 = state_36887;
if(cljs.core.truth_(inst_36873)){
var statearr_36898_36962 = state_36887__$1;
(statearr_36898_36962[(1)] = (19));

} else {
var statearr_36899_36963 = state_36887__$1;
(statearr_36899_36963[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (3))){
var inst_36885 = (state_36887[(2)]);
var state_36887__$1 = state_36887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36887__$1,inst_36885);
} else {
if((state_val_36888 === (12))){
var inst_36862 = (state_36887[(10)]);
var state_36887__$1 = state_36887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36887__$1,(14),inst_36862);
} else {
if((state_val_36888 === (2))){
var state_36887__$1 = state_36887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36887__$1,(4),results);
} else {
if((state_val_36888 === (19))){
var state_36887__$1 = state_36887;
var statearr_36900_36964 = state_36887__$1;
(statearr_36900_36964[(2)] = null);

(statearr_36900_36964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (11))){
var inst_36862 = (state_36887[(2)]);
var state_36887__$1 = (function (){var statearr_36901 = state_36887;
(statearr_36901[(10)] = inst_36862);

return statearr_36901;
})();
var statearr_36902_36965 = state_36887__$1;
(statearr_36902_36965[(2)] = null);

(statearr_36902_36965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (9))){
var state_36887__$1 = state_36887;
var statearr_36903_36966 = state_36887__$1;
(statearr_36903_36966[(2)] = null);

(statearr_36903_36966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (5))){
var state_36887__$1 = state_36887;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36904_36967 = state_36887__$1;
(statearr_36904_36967[(1)] = (8));

} else {
var statearr_36905_36968 = state_36887__$1;
(statearr_36905_36968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (14))){
var inst_36867 = (state_36887[(11)]);
var inst_36865 = (state_36887[(8)]);
var inst_36865__$1 = (state_36887[(2)]);
var inst_36866 = (inst_36865__$1 == null);
var inst_36867__$1 = cljs.core.not.call(null,inst_36866);
var state_36887__$1 = (function (){var statearr_36906 = state_36887;
(statearr_36906[(11)] = inst_36867__$1);

(statearr_36906[(8)] = inst_36865__$1);

return statearr_36906;
})();
if(inst_36867__$1){
var statearr_36907_36969 = state_36887__$1;
(statearr_36907_36969[(1)] = (15));

} else {
var statearr_36908_36970 = state_36887__$1;
(statearr_36908_36970[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (16))){
var inst_36867 = (state_36887[(11)]);
var state_36887__$1 = state_36887;
var statearr_36909_36971 = state_36887__$1;
(statearr_36909_36971[(2)] = inst_36867);

(statearr_36909_36971[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (10))){
var inst_36859 = (state_36887[(2)]);
var state_36887__$1 = state_36887;
var statearr_36910_36972 = state_36887__$1;
(statearr_36910_36972[(2)] = inst_36859);

(statearr_36910_36972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (18))){
var inst_36870 = (state_36887[(2)]);
var state_36887__$1 = state_36887;
var statearr_36911_36973 = state_36887__$1;
(statearr_36911_36973[(2)] = inst_36870);

(statearr_36911_36973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36888 === (8))){
var inst_36856 = cljs.core.async.close_BANG_.call(null,to);
var state_36887__$1 = state_36887;
var statearr_36912_36974 = state_36887__$1;
(statearr_36912_36974[(2)] = inst_36856);

(statearr_36912_36974[(1)] = (10));


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
});})(c__36362__auto__,jobs,results,process,async))
;
return ((function (switch__36250__auto__,c__36362__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0 = (function (){
var statearr_36916 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__);

(statearr_36916[(1)] = (1));

return statearr_36916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1 = (function (state_36887){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_36887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e36917){if((e36917 instanceof Object)){
var ex__36254__auto__ = e36917;
var statearr_36918_36975 = state_36887;
(statearr_36918_36975[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36976 = state_36887;
state_36887 = G__36976;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__ = function(state_36887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1.call(this,state_36887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto__,jobs,results,process,async))
})();
var state__36364__auto__ = (function (){var statearr_36919 = f__36363__auto__.call(null);
(statearr_36919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto__);

return statearr_36919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto__,jobs,results,process,async))
);

return c__36362__auto__;
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
var args36977 = [];
var len__31083__auto___36980 = arguments.length;
var i__31084__auto___36981 = (0);
while(true){
if((i__31084__auto___36981 < len__31083__auto___36980)){
args36977.push((arguments[i__31084__auto___36981]));

var G__36982 = (i__31084__auto___36981 + (1));
i__31084__auto___36981 = G__36982;
continue;
} else {
}
break;
}

var G__36979 = args36977.length;
switch (G__36979) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36977.length)].join('')));

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
var args36984 = [];
var len__31083__auto___36987 = arguments.length;
var i__31084__auto___36988 = (0);
while(true){
if((i__31084__auto___36988 < len__31083__auto___36987)){
args36984.push((arguments[i__31084__auto___36988]));

var G__36989 = (i__31084__auto___36988 + (1));
i__31084__auto___36988 = G__36989;
continue;
} else {
}
break;
}

var G__36986 = args36984.length;
switch (G__36986) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36984.length)].join('')));

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
var args36991 = [];
var len__31083__auto___37044 = arguments.length;
var i__31084__auto___37045 = (0);
while(true){
if((i__31084__auto___37045 < len__31083__auto___37044)){
args36991.push((arguments[i__31084__auto___37045]));

var G__37046 = (i__31084__auto___37045 + (1));
i__31084__auto___37045 = G__37046;
continue;
} else {
}
break;
}

var G__36993 = args36991.length;
switch (G__36993) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36991.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__36362__auto___37048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___37048,tc,fc){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___37048,tc,fc){
return (function (state_37019){
var state_val_37020 = (state_37019[(1)]);
if((state_val_37020 === (7))){
var inst_37015 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
var statearr_37021_37049 = state_37019__$1;
(statearr_37021_37049[(2)] = inst_37015);

(statearr_37021_37049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (1))){
var state_37019__$1 = state_37019;
var statearr_37022_37050 = state_37019__$1;
(statearr_37022_37050[(2)] = null);

(statearr_37022_37050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (4))){
var inst_36996 = (state_37019[(7)]);
var inst_36996__$1 = (state_37019[(2)]);
var inst_36997 = (inst_36996__$1 == null);
var state_37019__$1 = (function (){var statearr_37023 = state_37019;
(statearr_37023[(7)] = inst_36996__$1);

return statearr_37023;
})();
if(cljs.core.truth_(inst_36997)){
var statearr_37024_37051 = state_37019__$1;
(statearr_37024_37051[(1)] = (5));

} else {
var statearr_37025_37052 = state_37019__$1;
(statearr_37025_37052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (13))){
var state_37019__$1 = state_37019;
var statearr_37026_37053 = state_37019__$1;
(statearr_37026_37053[(2)] = null);

(statearr_37026_37053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (6))){
var inst_36996 = (state_37019[(7)]);
var inst_37002 = p.call(null,inst_36996);
var state_37019__$1 = state_37019;
if(cljs.core.truth_(inst_37002)){
var statearr_37027_37054 = state_37019__$1;
(statearr_37027_37054[(1)] = (9));

} else {
var statearr_37028_37055 = state_37019__$1;
(statearr_37028_37055[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (3))){
var inst_37017 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37019__$1,inst_37017);
} else {
if((state_val_37020 === (12))){
var state_37019__$1 = state_37019;
var statearr_37029_37056 = state_37019__$1;
(statearr_37029_37056[(2)] = null);

(statearr_37029_37056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (2))){
var state_37019__$1 = state_37019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37019__$1,(4),ch);
} else {
if((state_val_37020 === (11))){
var inst_36996 = (state_37019[(7)]);
var inst_37006 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37019__$1,(8),inst_37006,inst_36996);
} else {
if((state_val_37020 === (9))){
var state_37019__$1 = state_37019;
var statearr_37030_37057 = state_37019__$1;
(statearr_37030_37057[(2)] = tc);

(statearr_37030_37057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (5))){
var inst_36999 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37000 = cljs.core.async.close_BANG_.call(null,fc);
var state_37019__$1 = (function (){var statearr_37031 = state_37019;
(statearr_37031[(8)] = inst_36999);

return statearr_37031;
})();
var statearr_37032_37058 = state_37019__$1;
(statearr_37032_37058[(2)] = inst_37000);

(statearr_37032_37058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (14))){
var inst_37013 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
var statearr_37033_37059 = state_37019__$1;
(statearr_37033_37059[(2)] = inst_37013);

(statearr_37033_37059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (10))){
var state_37019__$1 = state_37019;
var statearr_37034_37060 = state_37019__$1;
(statearr_37034_37060[(2)] = fc);

(statearr_37034_37060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (8))){
var inst_37008 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
if(cljs.core.truth_(inst_37008)){
var statearr_37035_37061 = state_37019__$1;
(statearr_37035_37061[(1)] = (12));

} else {
var statearr_37036_37062 = state_37019__$1;
(statearr_37036_37062[(1)] = (13));

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
});})(c__36362__auto___37048,tc,fc))
;
return ((function (switch__36250__auto__,c__36362__auto___37048,tc,fc){
return (function() {
var cljs$core$async$state_machine__36251__auto__ = null;
var cljs$core$async$state_machine__36251__auto____0 = (function (){
var statearr_37040 = [null,null,null,null,null,null,null,null,null];
(statearr_37040[(0)] = cljs$core$async$state_machine__36251__auto__);

(statearr_37040[(1)] = (1));

return statearr_37040;
});
var cljs$core$async$state_machine__36251__auto____1 = (function (state_37019){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_37019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e37041){if((e37041 instanceof Object)){
var ex__36254__auto__ = e37041;
var statearr_37042_37063 = state_37019;
(statearr_37042_37063[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37064 = state_37019;
state_37019 = G__37064;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$state_machine__36251__auto__ = function(state_37019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36251__auto____1.call(this,state_37019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36251__auto____0;
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36251__auto____1;
return cljs$core$async$state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___37048,tc,fc))
})();
var state__36364__auto__ = (function (){var statearr_37043 = f__36363__auto__.call(null);
(statearr_37043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___37048);

return statearr_37043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___37048,tc,fc))
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
var c__36362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto__){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto__){
return (function (state_37128){
var state_val_37129 = (state_37128[(1)]);
if((state_val_37129 === (7))){
var inst_37124 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
var statearr_37130_37151 = state_37128__$1;
(statearr_37130_37151[(2)] = inst_37124);

(statearr_37130_37151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (1))){
var inst_37108 = init;
var state_37128__$1 = (function (){var statearr_37131 = state_37128;
(statearr_37131[(7)] = inst_37108);

return statearr_37131;
})();
var statearr_37132_37152 = state_37128__$1;
(statearr_37132_37152[(2)] = null);

(statearr_37132_37152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (4))){
var inst_37111 = (state_37128[(8)]);
var inst_37111__$1 = (state_37128[(2)]);
var inst_37112 = (inst_37111__$1 == null);
var state_37128__$1 = (function (){var statearr_37133 = state_37128;
(statearr_37133[(8)] = inst_37111__$1);

return statearr_37133;
})();
if(cljs.core.truth_(inst_37112)){
var statearr_37134_37153 = state_37128__$1;
(statearr_37134_37153[(1)] = (5));

} else {
var statearr_37135_37154 = state_37128__$1;
(statearr_37135_37154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (6))){
var inst_37115 = (state_37128[(9)]);
var inst_37111 = (state_37128[(8)]);
var inst_37108 = (state_37128[(7)]);
var inst_37115__$1 = f.call(null,inst_37108,inst_37111);
var inst_37116 = cljs.core.reduced_QMARK_.call(null,inst_37115__$1);
var state_37128__$1 = (function (){var statearr_37136 = state_37128;
(statearr_37136[(9)] = inst_37115__$1);

return statearr_37136;
})();
if(inst_37116){
var statearr_37137_37155 = state_37128__$1;
(statearr_37137_37155[(1)] = (8));

} else {
var statearr_37138_37156 = state_37128__$1;
(statearr_37138_37156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (3))){
var inst_37126 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37128__$1,inst_37126);
} else {
if((state_val_37129 === (2))){
var state_37128__$1 = state_37128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37128__$1,(4),ch);
} else {
if((state_val_37129 === (9))){
var inst_37115 = (state_37128[(9)]);
var inst_37108 = inst_37115;
var state_37128__$1 = (function (){var statearr_37139 = state_37128;
(statearr_37139[(7)] = inst_37108);

return statearr_37139;
})();
var statearr_37140_37157 = state_37128__$1;
(statearr_37140_37157[(2)] = null);

(statearr_37140_37157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (5))){
var inst_37108 = (state_37128[(7)]);
var state_37128__$1 = state_37128;
var statearr_37141_37158 = state_37128__$1;
(statearr_37141_37158[(2)] = inst_37108);

(statearr_37141_37158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (10))){
var inst_37122 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
var statearr_37142_37159 = state_37128__$1;
(statearr_37142_37159[(2)] = inst_37122);

(statearr_37142_37159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (8))){
var inst_37115 = (state_37128[(9)]);
var inst_37118 = cljs.core.deref.call(null,inst_37115);
var state_37128__$1 = state_37128;
var statearr_37143_37160 = state_37128__$1;
(statearr_37143_37160[(2)] = inst_37118);

(statearr_37143_37160[(1)] = (10));


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
});})(c__36362__auto__))
;
return ((function (switch__36250__auto__,c__36362__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__36251__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36251__auto____0 = (function (){
var statearr_37147 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37147[(0)] = cljs$core$async$reduce_$_state_machine__36251__auto__);

(statearr_37147[(1)] = (1));

return statearr_37147;
});
var cljs$core$async$reduce_$_state_machine__36251__auto____1 = (function (state_37128){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_37128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e37148){if((e37148 instanceof Object)){
var ex__36254__auto__ = e37148;
var statearr_37149_37161 = state_37128;
(statearr_37149_37161[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37162 = state_37128;
state_37128 = G__37162;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36251__auto__ = function(state_37128){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36251__auto____1.call(this,state_37128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36251__auto____0;
cljs$core$async$reduce_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36251__auto____1;
return cljs$core$async$reduce_$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto__))
})();
var state__36364__auto__ = (function (){var statearr_37150 = f__36363__auto__.call(null);
(statearr_37150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto__);

return statearr_37150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto__))
);

return c__36362__auto__;
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
var args37163 = [];
var len__31083__auto___37215 = arguments.length;
var i__31084__auto___37216 = (0);
while(true){
if((i__31084__auto___37216 < len__31083__auto___37215)){
args37163.push((arguments[i__31084__auto___37216]));

var G__37217 = (i__31084__auto___37216 + (1));
i__31084__auto___37216 = G__37217;
continue;
} else {
}
break;
}

var G__37165 = args37163.length;
switch (G__37165) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37163.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto__){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto__){
return (function (state_37190){
var state_val_37191 = (state_37190[(1)]);
if((state_val_37191 === (7))){
var inst_37172 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
var statearr_37192_37219 = state_37190__$1;
(statearr_37192_37219[(2)] = inst_37172);

(statearr_37192_37219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (1))){
var inst_37166 = cljs.core.seq.call(null,coll);
var inst_37167 = inst_37166;
var state_37190__$1 = (function (){var statearr_37193 = state_37190;
(statearr_37193[(7)] = inst_37167);

return statearr_37193;
})();
var statearr_37194_37220 = state_37190__$1;
(statearr_37194_37220[(2)] = null);

(statearr_37194_37220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (4))){
var inst_37167 = (state_37190[(7)]);
var inst_37170 = cljs.core.first.call(null,inst_37167);
var state_37190__$1 = state_37190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37190__$1,(7),ch,inst_37170);
} else {
if((state_val_37191 === (13))){
var inst_37184 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
var statearr_37195_37221 = state_37190__$1;
(statearr_37195_37221[(2)] = inst_37184);

(statearr_37195_37221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (6))){
var inst_37175 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
if(cljs.core.truth_(inst_37175)){
var statearr_37196_37222 = state_37190__$1;
(statearr_37196_37222[(1)] = (8));

} else {
var statearr_37197_37223 = state_37190__$1;
(statearr_37197_37223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (3))){
var inst_37188 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37190__$1,inst_37188);
} else {
if((state_val_37191 === (12))){
var state_37190__$1 = state_37190;
var statearr_37198_37224 = state_37190__$1;
(statearr_37198_37224[(2)] = null);

(statearr_37198_37224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (2))){
var inst_37167 = (state_37190[(7)]);
var state_37190__$1 = state_37190;
if(cljs.core.truth_(inst_37167)){
var statearr_37199_37225 = state_37190__$1;
(statearr_37199_37225[(1)] = (4));

} else {
var statearr_37200_37226 = state_37190__$1;
(statearr_37200_37226[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (11))){
var inst_37181 = cljs.core.async.close_BANG_.call(null,ch);
var state_37190__$1 = state_37190;
var statearr_37201_37227 = state_37190__$1;
(statearr_37201_37227[(2)] = inst_37181);

(statearr_37201_37227[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (9))){
var state_37190__$1 = state_37190;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37202_37228 = state_37190__$1;
(statearr_37202_37228[(1)] = (11));

} else {
var statearr_37203_37229 = state_37190__$1;
(statearr_37203_37229[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (5))){
var inst_37167 = (state_37190[(7)]);
var state_37190__$1 = state_37190;
var statearr_37204_37230 = state_37190__$1;
(statearr_37204_37230[(2)] = inst_37167);

(statearr_37204_37230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (10))){
var inst_37186 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
var statearr_37205_37231 = state_37190__$1;
(statearr_37205_37231[(2)] = inst_37186);

(statearr_37205_37231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (8))){
var inst_37167 = (state_37190[(7)]);
var inst_37177 = cljs.core.next.call(null,inst_37167);
var inst_37167__$1 = inst_37177;
var state_37190__$1 = (function (){var statearr_37206 = state_37190;
(statearr_37206[(7)] = inst_37167__$1);

return statearr_37206;
})();
var statearr_37207_37232 = state_37190__$1;
(statearr_37207_37232[(2)] = null);

(statearr_37207_37232[(1)] = (2));


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
});})(c__36362__auto__))
;
return ((function (switch__36250__auto__,c__36362__auto__){
return (function() {
var cljs$core$async$state_machine__36251__auto__ = null;
var cljs$core$async$state_machine__36251__auto____0 = (function (){
var statearr_37211 = [null,null,null,null,null,null,null,null];
(statearr_37211[(0)] = cljs$core$async$state_machine__36251__auto__);

(statearr_37211[(1)] = (1));

return statearr_37211;
});
var cljs$core$async$state_machine__36251__auto____1 = (function (state_37190){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_37190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e37212){if((e37212 instanceof Object)){
var ex__36254__auto__ = e37212;
var statearr_37213_37233 = state_37190;
(statearr_37213_37233[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37234 = state_37190;
state_37190 = G__37234;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$state_machine__36251__auto__ = function(state_37190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36251__auto____1.call(this,state_37190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36251__auto____0;
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36251__auto____1;
return cljs$core$async$state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto__))
})();
var state__36364__auto__ = (function (){var statearr_37214 = f__36363__auto__.call(null);
(statearr_37214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto__);

return statearr_37214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto__))
);

return c__36362__auto__;
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
var x__30671__auto__ = (((_ == null))?null:_);
var m__30672__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30671__auto__)]);
if(!((m__30672__auto__ == null))){
return m__30672__auto__.call(null,_);
} else {
var m__30672__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30672__auto____$1 == null))){
return m__30672__auto____$1.call(null,_);
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
var x__30671__auto__ = (((m == null))?null:m);
var m__30672__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30671__auto__)]);
if(!((m__30672__auto__ == null))){
return m__30672__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30672__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30672__auto____$1 == null))){
return m__30672__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__30671__auto__ = (((m == null))?null:m);
var m__30672__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30671__auto__)]);
if(!((m__30672__auto__ == null))){
return m__30672__auto__.call(null,m,ch);
} else {
var m__30672__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30672__auto____$1 == null))){
return m__30672__auto____$1.call(null,m,ch);
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
var x__30671__auto__ = (((m == null))?null:m);
var m__30672__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30671__auto__)]);
if(!((m__30672__auto__ == null))){
return m__30672__auto__.call(null,m);
} else {
var m__30672__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30672__auto____$1 == null))){
return m__30672__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async37460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37460 = (function (mult,ch,cs,meta37461){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta37461 = meta37461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37462,meta37461__$1){
var self__ = this;
var _37462__$1 = this;
return (new cljs.core.async.t_cljs$core$async37460(self__.mult,self__.ch,self__.cs,meta37461__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37462){
var self__ = this;
var _37462__$1 = this;
return self__.meta37461;
});})(cs))
;

cljs.core.async.t_cljs$core$async37460.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37460.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37460.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async37460.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37460.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37460.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37460.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37461","meta37461",-1370387097,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37460";

cljs.core.async.t_cljs$core$async37460.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30614__auto__,writer__30615__auto__,opt__30616__auto__){
return cljs.core._write.call(null,writer__30615__auto__,"cljs.core.async/t_cljs$core$async37460");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37460 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37460(mult__$1,ch__$1,cs__$1,meta37461){
return (new cljs.core.async.t_cljs$core$async37460(mult__$1,ch__$1,cs__$1,meta37461));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37460(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36362__auto___37685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___37685,cs,m,dchan,dctr,done){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___37685,cs,m,dchan,dctr,done){
return (function (state_37597){
var state_val_37598 = (state_37597[(1)]);
if((state_val_37598 === (7))){
var inst_37593 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37599_37686 = state_37597__$1;
(statearr_37599_37686[(2)] = inst_37593);

(statearr_37599_37686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (20))){
var inst_37496 = (state_37597[(7)]);
var inst_37508 = cljs.core.first.call(null,inst_37496);
var inst_37509 = cljs.core.nth.call(null,inst_37508,(0),null);
var inst_37510 = cljs.core.nth.call(null,inst_37508,(1),null);
var state_37597__$1 = (function (){var statearr_37600 = state_37597;
(statearr_37600[(8)] = inst_37509);

return statearr_37600;
})();
if(cljs.core.truth_(inst_37510)){
var statearr_37601_37687 = state_37597__$1;
(statearr_37601_37687[(1)] = (22));

} else {
var statearr_37602_37688 = state_37597__$1;
(statearr_37602_37688[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (27))){
var inst_37465 = (state_37597[(9)]);
var inst_37540 = (state_37597[(10)]);
var inst_37545 = (state_37597[(11)]);
var inst_37538 = (state_37597[(12)]);
var inst_37545__$1 = cljs.core._nth.call(null,inst_37538,inst_37540);
var inst_37546 = cljs.core.async.put_BANG_.call(null,inst_37545__$1,inst_37465,done);
var state_37597__$1 = (function (){var statearr_37603 = state_37597;
(statearr_37603[(11)] = inst_37545__$1);

return statearr_37603;
})();
if(cljs.core.truth_(inst_37546)){
var statearr_37604_37689 = state_37597__$1;
(statearr_37604_37689[(1)] = (30));

} else {
var statearr_37605_37690 = state_37597__$1;
(statearr_37605_37690[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (1))){
var state_37597__$1 = state_37597;
var statearr_37606_37691 = state_37597__$1;
(statearr_37606_37691[(2)] = null);

(statearr_37606_37691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (24))){
var inst_37496 = (state_37597[(7)]);
var inst_37515 = (state_37597[(2)]);
var inst_37516 = cljs.core.next.call(null,inst_37496);
var inst_37474 = inst_37516;
var inst_37475 = null;
var inst_37476 = (0);
var inst_37477 = (0);
var state_37597__$1 = (function (){var statearr_37607 = state_37597;
(statearr_37607[(13)] = inst_37474);

(statearr_37607[(14)] = inst_37515);

(statearr_37607[(15)] = inst_37476);

(statearr_37607[(16)] = inst_37477);

(statearr_37607[(17)] = inst_37475);

return statearr_37607;
})();
var statearr_37608_37692 = state_37597__$1;
(statearr_37608_37692[(2)] = null);

(statearr_37608_37692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (39))){
var state_37597__$1 = state_37597;
var statearr_37612_37693 = state_37597__$1;
(statearr_37612_37693[(2)] = null);

(statearr_37612_37693[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (4))){
var inst_37465 = (state_37597[(9)]);
var inst_37465__$1 = (state_37597[(2)]);
var inst_37466 = (inst_37465__$1 == null);
var state_37597__$1 = (function (){var statearr_37613 = state_37597;
(statearr_37613[(9)] = inst_37465__$1);

return statearr_37613;
})();
if(cljs.core.truth_(inst_37466)){
var statearr_37614_37694 = state_37597__$1;
(statearr_37614_37694[(1)] = (5));

} else {
var statearr_37615_37695 = state_37597__$1;
(statearr_37615_37695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (15))){
var inst_37474 = (state_37597[(13)]);
var inst_37476 = (state_37597[(15)]);
var inst_37477 = (state_37597[(16)]);
var inst_37475 = (state_37597[(17)]);
var inst_37492 = (state_37597[(2)]);
var inst_37493 = (inst_37477 + (1));
var tmp37609 = inst_37474;
var tmp37610 = inst_37476;
var tmp37611 = inst_37475;
var inst_37474__$1 = tmp37609;
var inst_37475__$1 = tmp37611;
var inst_37476__$1 = tmp37610;
var inst_37477__$1 = inst_37493;
var state_37597__$1 = (function (){var statearr_37616 = state_37597;
(statearr_37616[(13)] = inst_37474__$1);

(statearr_37616[(15)] = inst_37476__$1);

(statearr_37616[(16)] = inst_37477__$1);

(statearr_37616[(17)] = inst_37475__$1);

(statearr_37616[(18)] = inst_37492);

return statearr_37616;
})();
var statearr_37617_37696 = state_37597__$1;
(statearr_37617_37696[(2)] = null);

(statearr_37617_37696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (21))){
var inst_37519 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37621_37697 = state_37597__$1;
(statearr_37621_37697[(2)] = inst_37519);

(statearr_37621_37697[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (31))){
var inst_37545 = (state_37597[(11)]);
var inst_37549 = done.call(null,null);
var inst_37550 = cljs.core.async.untap_STAR_.call(null,m,inst_37545);
var state_37597__$1 = (function (){var statearr_37622 = state_37597;
(statearr_37622[(19)] = inst_37549);

return statearr_37622;
})();
var statearr_37623_37698 = state_37597__$1;
(statearr_37623_37698[(2)] = inst_37550);

(statearr_37623_37698[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (32))){
var inst_37539 = (state_37597[(20)]);
var inst_37540 = (state_37597[(10)]);
var inst_37537 = (state_37597[(21)]);
var inst_37538 = (state_37597[(12)]);
var inst_37552 = (state_37597[(2)]);
var inst_37553 = (inst_37540 + (1));
var tmp37618 = inst_37539;
var tmp37619 = inst_37537;
var tmp37620 = inst_37538;
var inst_37537__$1 = tmp37619;
var inst_37538__$1 = tmp37620;
var inst_37539__$1 = tmp37618;
var inst_37540__$1 = inst_37553;
var state_37597__$1 = (function (){var statearr_37624 = state_37597;
(statearr_37624[(22)] = inst_37552);

(statearr_37624[(20)] = inst_37539__$1);

(statearr_37624[(10)] = inst_37540__$1);

(statearr_37624[(21)] = inst_37537__$1);

(statearr_37624[(12)] = inst_37538__$1);

return statearr_37624;
})();
var statearr_37625_37699 = state_37597__$1;
(statearr_37625_37699[(2)] = null);

(statearr_37625_37699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (40))){
var inst_37565 = (state_37597[(23)]);
var inst_37569 = done.call(null,null);
var inst_37570 = cljs.core.async.untap_STAR_.call(null,m,inst_37565);
var state_37597__$1 = (function (){var statearr_37626 = state_37597;
(statearr_37626[(24)] = inst_37569);

return statearr_37626;
})();
var statearr_37627_37700 = state_37597__$1;
(statearr_37627_37700[(2)] = inst_37570);

(statearr_37627_37700[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (33))){
var inst_37556 = (state_37597[(25)]);
var inst_37558 = cljs.core.chunked_seq_QMARK_.call(null,inst_37556);
var state_37597__$1 = state_37597;
if(inst_37558){
var statearr_37628_37701 = state_37597__$1;
(statearr_37628_37701[(1)] = (36));

} else {
var statearr_37629_37702 = state_37597__$1;
(statearr_37629_37702[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (13))){
var inst_37486 = (state_37597[(26)]);
var inst_37489 = cljs.core.async.close_BANG_.call(null,inst_37486);
var state_37597__$1 = state_37597;
var statearr_37630_37703 = state_37597__$1;
(statearr_37630_37703[(2)] = inst_37489);

(statearr_37630_37703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (22))){
var inst_37509 = (state_37597[(8)]);
var inst_37512 = cljs.core.async.close_BANG_.call(null,inst_37509);
var state_37597__$1 = state_37597;
var statearr_37631_37704 = state_37597__$1;
(statearr_37631_37704[(2)] = inst_37512);

(statearr_37631_37704[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (36))){
var inst_37556 = (state_37597[(25)]);
var inst_37560 = cljs.core.chunk_first.call(null,inst_37556);
var inst_37561 = cljs.core.chunk_rest.call(null,inst_37556);
var inst_37562 = cljs.core.count.call(null,inst_37560);
var inst_37537 = inst_37561;
var inst_37538 = inst_37560;
var inst_37539 = inst_37562;
var inst_37540 = (0);
var state_37597__$1 = (function (){var statearr_37632 = state_37597;
(statearr_37632[(20)] = inst_37539);

(statearr_37632[(10)] = inst_37540);

(statearr_37632[(21)] = inst_37537);

(statearr_37632[(12)] = inst_37538);

return statearr_37632;
})();
var statearr_37633_37705 = state_37597__$1;
(statearr_37633_37705[(2)] = null);

(statearr_37633_37705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (41))){
var inst_37556 = (state_37597[(25)]);
var inst_37572 = (state_37597[(2)]);
var inst_37573 = cljs.core.next.call(null,inst_37556);
var inst_37537 = inst_37573;
var inst_37538 = null;
var inst_37539 = (0);
var inst_37540 = (0);
var state_37597__$1 = (function (){var statearr_37634 = state_37597;
(statearr_37634[(20)] = inst_37539);

(statearr_37634[(10)] = inst_37540);

(statearr_37634[(21)] = inst_37537);

(statearr_37634[(27)] = inst_37572);

(statearr_37634[(12)] = inst_37538);

return statearr_37634;
})();
var statearr_37635_37706 = state_37597__$1;
(statearr_37635_37706[(2)] = null);

(statearr_37635_37706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (43))){
var state_37597__$1 = state_37597;
var statearr_37636_37707 = state_37597__$1;
(statearr_37636_37707[(2)] = null);

(statearr_37636_37707[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (29))){
var inst_37581 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37637_37708 = state_37597__$1;
(statearr_37637_37708[(2)] = inst_37581);

(statearr_37637_37708[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (44))){
var inst_37590 = (state_37597[(2)]);
var state_37597__$1 = (function (){var statearr_37638 = state_37597;
(statearr_37638[(28)] = inst_37590);

return statearr_37638;
})();
var statearr_37639_37709 = state_37597__$1;
(statearr_37639_37709[(2)] = null);

(statearr_37639_37709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (6))){
var inst_37529 = (state_37597[(29)]);
var inst_37528 = cljs.core.deref.call(null,cs);
var inst_37529__$1 = cljs.core.keys.call(null,inst_37528);
var inst_37530 = cljs.core.count.call(null,inst_37529__$1);
var inst_37531 = cljs.core.reset_BANG_.call(null,dctr,inst_37530);
var inst_37536 = cljs.core.seq.call(null,inst_37529__$1);
var inst_37537 = inst_37536;
var inst_37538 = null;
var inst_37539 = (0);
var inst_37540 = (0);
var state_37597__$1 = (function (){var statearr_37640 = state_37597;
(statearr_37640[(20)] = inst_37539);

(statearr_37640[(10)] = inst_37540);

(statearr_37640[(21)] = inst_37537);

(statearr_37640[(30)] = inst_37531);

(statearr_37640[(29)] = inst_37529__$1);

(statearr_37640[(12)] = inst_37538);

return statearr_37640;
})();
var statearr_37641_37710 = state_37597__$1;
(statearr_37641_37710[(2)] = null);

(statearr_37641_37710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (28))){
var inst_37556 = (state_37597[(25)]);
var inst_37537 = (state_37597[(21)]);
var inst_37556__$1 = cljs.core.seq.call(null,inst_37537);
var state_37597__$1 = (function (){var statearr_37642 = state_37597;
(statearr_37642[(25)] = inst_37556__$1);

return statearr_37642;
})();
if(inst_37556__$1){
var statearr_37643_37711 = state_37597__$1;
(statearr_37643_37711[(1)] = (33));

} else {
var statearr_37644_37712 = state_37597__$1;
(statearr_37644_37712[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (25))){
var inst_37539 = (state_37597[(20)]);
var inst_37540 = (state_37597[(10)]);
var inst_37542 = (inst_37540 < inst_37539);
var inst_37543 = inst_37542;
var state_37597__$1 = state_37597;
if(cljs.core.truth_(inst_37543)){
var statearr_37645_37713 = state_37597__$1;
(statearr_37645_37713[(1)] = (27));

} else {
var statearr_37646_37714 = state_37597__$1;
(statearr_37646_37714[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (34))){
var state_37597__$1 = state_37597;
var statearr_37647_37715 = state_37597__$1;
(statearr_37647_37715[(2)] = null);

(statearr_37647_37715[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (17))){
var state_37597__$1 = state_37597;
var statearr_37648_37716 = state_37597__$1;
(statearr_37648_37716[(2)] = null);

(statearr_37648_37716[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (3))){
var inst_37595 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37597__$1,inst_37595);
} else {
if((state_val_37598 === (12))){
var inst_37524 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37649_37717 = state_37597__$1;
(statearr_37649_37717[(2)] = inst_37524);

(statearr_37649_37717[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (2))){
var state_37597__$1 = state_37597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37597__$1,(4),ch);
} else {
if((state_val_37598 === (23))){
var state_37597__$1 = state_37597;
var statearr_37650_37718 = state_37597__$1;
(statearr_37650_37718[(2)] = null);

(statearr_37650_37718[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (35))){
var inst_37579 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37651_37719 = state_37597__$1;
(statearr_37651_37719[(2)] = inst_37579);

(statearr_37651_37719[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (19))){
var inst_37496 = (state_37597[(7)]);
var inst_37500 = cljs.core.chunk_first.call(null,inst_37496);
var inst_37501 = cljs.core.chunk_rest.call(null,inst_37496);
var inst_37502 = cljs.core.count.call(null,inst_37500);
var inst_37474 = inst_37501;
var inst_37475 = inst_37500;
var inst_37476 = inst_37502;
var inst_37477 = (0);
var state_37597__$1 = (function (){var statearr_37652 = state_37597;
(statearr_37652[(13)] = inst_37474);

(statearr_37652[(15)] = inst_37476);

(statearr_37652[(16)] = inst_37477);

(statearr_37652[(17)] = inst_37475);

return statearr_37652;
})();
var statearr_37653_37720 = state_37597__$1;
(statearr_37653_37720[(2)] = null);

(statearr_37653_37720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (11))){
var inst_37474 = (state_37597[(13)]);
var inst_37496 = (state_37597[(7)]);
var inst_37496__$1 = cljs.core.seq.call(null,inst_37474);
var state_37597__$1 = (function (){var statearr_37654 = state_37597;
(statearr_37654[(7)] = inst_37496__$1);

return statearr_37654;
})();
if(inst_37496__$1){
var statearr_37655_37721 = state_37597__$1;
(statearr_37655_37721[(1)] = (16));

} else {
var statearr_37656_37722 = state_37597__$1;
(statearr_37656_37722[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (9))){
var inst_37526 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37657_37723 = state_37597__$1;
(statearr_37657_37723[(2)] = inst_37526);

(statearr_37657_37723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (5))){
var inst_37472 = cljs.core.deref.call(null,cs);
var inst_37473 = cljs.core.seq.call(null,inst_37472);
var inst_37474 = inst_37473;
var inst_37475 = null;
var inst_37476 = (0);
var inst_37477 = (0);
var state_37597__$1 = (function (){var statearr_37658 = state_37597;
(statearr_37658[(13)] = inst_37474);

(statearr_37658[(15)] = inst_37476);

(statearr_37658[(16)] = inst_37477);

(statearr_37658[(17)] = inst_37475);

return statearr_37658;
})();
var statearr_37659_37724 = state_37597__$1;
(statearr_37659_37724[(2)] = null);

(statearr_37659_37724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (14))){
var state_37597__$1 = state_37597;
var statearr_37660_37725 = state_37597__$1;
(statearr_37660_37725[(2)] = null);

(statearr_37660_37725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (45))){
var inst_37587 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37661_37726 = state_37597__$1;
(statearr_37661_37726[(2)] = inst_37587);

(statearr_37661_37726[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (26))){
var inst_37529 = (state_37597[(29)]);
var inst_37583 = (state_37597[(2)]);
var inst_37584 = cljs.core.seq.call(null,inst_37529);
var state_37597__$1 = (function (){var statearr_37662 = state_37597;
(statearr_37662[(31)] = inst_37583);

return statearr_37662;
})();
if(inst_37584){
var statearr_37663_37727 = state_37597__$1;
(statearr_37663_37727[(1)] = (42));

} else {
var statearr_37664_37728 = state_37597__$1;
(statearr_37664_37728[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (16))){
var inst_37496 = (state_37597[(7)]);
var inst_37498 = cljs.core.chunked_seq_QMARK_.call(null,inst_37496);
var state_37597__$1 = state_37597;
if(inst_37498){
var statearr_37665_37729 = state_37597__$1;
(statearr_37665_37729[(1)] = (19));

} else {
var statearr_37666_37730 = state_37597__$1;
(statearr_37666_37730[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (38))){
var inst_37576 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37667_37731 = state_37597__$1;
(statearr_37667_37731[(2)] = inst_37576);

(statearr_37667_37731[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (30))){
var state_37597__$1 = state_37597;
var statearr_37668_37732 = state_37597__$1;
(statearr_37668_37732[(2)] = null);

(statearr_37668_37732[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (10))){
var inst_37477 = (state_37597[(16)]);
var inst_37475 = (state_37597[(17)]);
var inst_37485 = cljs.core._nth.call(null,inst_37475,inst_37477);
var inst_37486 = cljs.core.nth.call(null,inst_37485,(0),null);
var inst_37487 = cljs.core.nth.call(null,inst_37485,(1),null);
var state_37597__$1 = (function (){var statearr_37669 = state_37597;
(statearr_37669[(26)] = inst_37486);

return statearr_37669;
})();
if(cljs.core.truth_(inst_37487)){
var statearr_37670_37733 = state_37597__$1;
(statearr_37670_37733[(1)] = (13));

} else {
var statearr_37671_37734 = state_37597__$1;
(statearr_37671_37734[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (18))){
var inst_37522 = (state_37597[(2)]);
var state_37597__$1 = state_37597;
var statearr_37672_37735 = state_37597__$1;
(statearr_37672_37735[(2)] = inst_37522);

(statearr_37672_37735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (42))){
var state_37597__$1 = state_37597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37597__$1,(45),dchan);
} else {
if((state_val_37598 === (37))){
var inst_37565 = (state_37597[(23)]);
var inst_37465 = (state_37597[(9)]);
var inst_37556 = (state_37597[(25)]);
var inst_37565__$1 = cljs.core.first.call(null,inst_37556);
var inst_37566 = cljs.core.async.put_BANG_.call(null,inst_37565__$1,inst_37465,done);
var state_37597__$1 = (function (){var statearr_37673 = state_37597;
(statearr_37673[(23)] = inst_37565__$1);

return statearr_37673;
})();
if(cljs.core.truth_(inst_37566)){
var statearr_37674_37736 = state_37597__$1;
(statearr_37674_37736[(1)] = (39));

} else {
var statearr_37675_37737 = state_37597__$1;
(statearr_37675_37737[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37598 === (8))){
var inst_37476 = (state_37597[(15)]);
var inst_37477 = (state_37597[(16)]);
var inst_37479 = (inst_37477 < inst_37476);
var inst_37480 = inst_37479;
var state_37597__$1 = state_37597;
if(cljs.core.truth_(inst_37480)){
var statearr_37676_37738 = state_37597__$1;
(statearr_37676_37738[(1)] = (10));

} else {
var statearr_37677_37739 = state_37597__$1;
(statearr_37677_37739[(1)] = (11));

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
});})(c__36362__auto___37685,cs,m,dchan,dctr,done))
;
return ((function (switch__36250__auto__,c__36362__auto___37685,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__36251__auto__ = null;
var cljs$core$async$mult_$_state_machine__36251__auto____0 = (function (){
var statearr_37681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37681[(0)] = cljs$core$async$mult_$_state_machine__36251__auto__);

(statearr_37681[(1)] = (1));

return statearr_37681;
});
var cljs$core$async$mult_$_state_machine__36251__auto____1 = (function (state_37597){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_37597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e37682){if((e37682 instanceof Object)){
var ex__36254__auto__ = e37682;
var statearr_37683_37740 = state_37597;
(statearr_37683_37740[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37741 = state_37597;
state_37597 = G__37741;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36251__auto__ = function(state_37597){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36251__auto____1.call(this,state_37597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36251__auto____0;
cljs$core$async$mult_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36251__auto____1;
return cljs$core$async$mult_$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___37685,cs,m,dchan,dctr,done))
})();
var state__36364__auto__ = (function (){var statearr_37684 = f__36363__auto__.call(null);
(statearr_37684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___37685);

return statearr_37684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___37685,cs,m,dchan,dctr,done))
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
var args37742 = [];
var len__31083__auto___37745 = arguments.length;
var i__31084__auto___37746 = (0);
while(true){
if((i__31084__auto___37746 < len__31083__auto___37745)){
args37742.push((arguments[i__31084__auto___37746]));

var G__37747 = (i__31084__auto___37746 + (1));
i__31084__auto___37746 = G__37747;
continue;
} else {
}
break;
}

var G__37744 = args37742.length;
switch (G__37744) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37742.length)].join('')));

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
var x__30671__auto__ = (((m == null))?null:m);
var m__30672__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30671__auto__)]);
if(!((m__30672__auto__ == null))){
return m__30672__auto__.call(null,m,ch);
} else {
var m__30672__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30672__auto____$1 == null))){
return m__30672__auto____$1.call(null,m,ch);
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
var x__30671__auto__ = (((m == null))?null:m);
var m__30672__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30671__auto__)]);
if(!((m__30672__auto__ == null))){
return m__30672__auto__.call(null,m,ch);
} else {
var m__30672__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30672__auto____$1 == null))){
return m__30672__auto____$1.call(null,m,ch);
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
var x__30671__auto__ = (((m == null))?null:m);
var m__30672__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30671__auto__)]);
if(!((m__30672__auto__ == null))){
return m__30672__auto__.call(null,m);
} else {
var m__30672__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30672__auto____$1 == null))){
return m__30672__auto____$1.call(null,m);
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
var x__30671__auto__ = (((m == null))?null:m);
var m__30672__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30671__auto__)]);
if(!((m__30672__auto__ == null))){
return m__30672__auto__.call(null,m,state_map);
} else {
var m__30672__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30672__auto____$1 == null))){
return m__30672__auto____$1.call(null,m,state_map);
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
var x__30671__auto__ = (((m == null))?null:m);
var m__30672__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30671__auto__)]);
if(!((m__30672__auto__ == null))){
return m__30672__auto__.call(null,m,mode);
} else {
var m__30672__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30672__auto____$1 == null))){
return m__30672__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31090__auto__ = [];
var len__31083__auto___37759 = arguments.length;
var i__31084__auto___37760 = (0);
while(true){
if((i__31084__auto___37760 < len__31083__auto___37759)){
args__31090__auto__.push((arguments[i__31084__auto___37760]));

var G__37761 = (i__31084__auto___37760 + (1));
i__31084__auto___37760 = G__37761;
continue;
} else {
}
break;
}

var argseq__31091__auto__ = ((((3) < args__31090__auto__.length))?(new cljs.core.IndexedSeq(args__31090__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31091__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37753){
var map__37754 = p__37753;
var map__37754__$1 = ((((!((map__37754 == null)))?((((map__37754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37754):map__37754);
var opts = map__37754__$1;
var statearr_37756_37762 = state;
(statearr_37756_37762[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__37754,map__37754__$1,opts){
return (function (val){
var statearr_37757_37763 = state;
(statearr_37757_37763[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37754,map__37754__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_37758_37764 = state;
(statearr_37758_37764[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37749){
var G__37750 = cljs.core.first.call(null,seq37749);
var seq37749__$1 = cljs.core.next.call(null,seq37749);
var G__37751 = cljs.core.first.call(null,seq37749__$1);
var seq37749__$2 = cljs.core.next.call(null,seq37749__$1);
var G__37752 = cljs.core.first.call(null,seq37749__$2);
var seq37749__$3 = cljs.core.next.call(null,seq37749__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37750,G__37751,G__37752,seq37749__$3);
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
if(typeof cljs.core.async.t_cljs$core$async37930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37930 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37931){
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
this.meta37931 = meta37931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37932,meta37931__$1){
var self__ = this;
var _37932__$1 = this;
return (new cljs.core.async.t_cljs$core$async37930(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37931__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37932){
var self__ = this;
var _37932__$1 = this;
return self__.meta37931;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37930.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37930.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async37930.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37930.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37930.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37930.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37930.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async37930.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37931","meta37931",50015976,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37930";

cljs.core.async.t_cljs$core$async37930.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30614__auto__,writer__30615__auto__,opt__30616__auto__){
return cljs.core._write.call(null,writer__30615__auto__,"cljs.core.async/t_cljs$core$async37930");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37930 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37930(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37931){
return (new cljs.core.async.t_cljs$core$async37930(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37931));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37930(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36362__auto___38095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___38095,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___38095,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38032){
var state_val_38033 = (state_38032[(1)]);
if((state_val_38033 === (7))){
var inst_37948 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
var statearr_38034_38096 = state_38032__$1;
(statearr_38034_38096[(2)] = inst_37948);

(statearr_38034_38096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (20))){
var inst_37960 = (state_38032[(7)]);
var state_38032__$1 = state_38032;
var statearr_38035_38097 = state_38032__$1;
(statearr_38035_38097[(2)] = inst_37960);

(statearr_38035_38097[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (27))){
var state_38032__$1 = state_38032;
var statearr_38036_38098 = state_38032__$1;
(statearr_38036_38098[(2)] = null);

(statearr_38036_38098[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (1))){
var inst_37936 = (state_38032[(8)]);
var inst_37936__$1 = calc_state.call(null);
var inst_37938 = (inst_37936__$1 == null);
var inst_37939 = cljs.core.not.call(null,inst_37938);
var state_38032__$1 = (function (){var statearr_38037 = state_38032;
(statearr_38037[(8)] = inst_37936__$1);

return statearr_38037;
})();
if(inst_37939){
var statearr_38038_38099 = state_38032__$1;
(statearr_38038_38099[(1)] = (2));

} else {
var statearr_38039_38100 = state_38032__$1;
(statearr_38039_38100[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (24))){
var inst_37983 = (state_38032[(9)]);
var inst_37992 = (state_38032[(10)]);
var inst_38006 = (state_38032[(11)]);
var inst_38006__$1 = inst_37983.call(null,inst_37992);
var state_38032__$1 = (function (){var statearr_38040 = state_38032;
(statearr_38040[(11)] = inst_38006__$1);

return statearr_38040;
})();
if(cljs.core.truth_(inst_38006__$1)){
var statearr_38041_38101 = state_38032__$1;
(statearr_38041_38101[(1)] = (29));

} else {
var statearr_38042_38102 = state_38032__$1;
(statearr_38042_38102[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (4))){
var inst_37951 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
if(cljs.core.truth_(inst_37951)){
var statearr_38043_38103 = state_38032__$1;
(statearr_38043_38103[(1)] = (8));

} else {
var statearr_38044_38104 = state_38032__$1;
(statearr_38044_38104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (15))){
var inst_37977 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
if(cljs.core.truth_(inst_37977)){
var statearr_38045_38105 = state_38032__$1;
(statearr_38045_38105[(1)] = (19));

} else {
var statearr_38046_38106 = state_38032__$1;
(statearr_38046_38106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (21))){
var inst_37982 = (state_38032[(12)]);
var inst_37982__$1 = (state_38032[(2)]);
var inst_37983 = cljs.core.get.call(null,inst_37982__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37984 = cljs.core.get.call(null,inst_37982__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37985 = cljs.core.get.call(null,inst_37982__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38032__$1 = (function (){var statearr_38047 = state_38032;
(statearr_38047[(9)] = inst_37983);

(statearr_38047[(13)] = inst_37984);

(statearr_38047[(12)] = inst_37982__$1);

return statearr_38047;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38032__$1,(22),inst_37985);
} else {
if((state_val_38033 === (31))){
var inst_38014 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
if(cljs.core.truth_(inst_38014)){
var statearr_38048_38107 = state_38032__$1;
(statearr_38048_38107[(1)] = (32));

} else {
var statearr_38049_38108 = state_38032__$1;
(statearr_38049_38108[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (32))){
var inst_37991 = (state_38032[(14)]);
var state_38032__$1 = state_38032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38032__$1,(35),out,inst_37991);
} else {
if((state_val_38033 === (33))){
var inst_37982 = (state_38032[(12)]);
var inst_37960 = inst_37982;
var state_38032__$1 = (function (){var statearr_38050 = state_38032;
(statearr_38050[(7)] = inst_37960);

return statearr_38050;
})();
var statearr_38051_38109 = state_38032__$1;
(statearr_38051_38109[(2)] = null);

(statearr_38051_38109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (13))){
var inst_37960 = (state_38032[(7)]);
var inst_37967 = inst_37960.cljs$lang$protocol_mask$partition0$;
var inst_37968 = (inst_37967 & (64));
var inst_37969 = inst_37960.cljs$core$ISeq$;
var inst_37970 = (inst_37968) || (inst_37969);
var state_38032__$1 = state_38032;
if(cljs.core.truth_(inst_37970)){
var statearr_38052_38110 = state_38032__$1;
(statearr_38052_38110[(1)] = (16));

} else {
var statearr_38053_38111 = state_38032__$1;
(statearr_38053_38111[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (22))){
var inst_37992 = (state_38032[(10)]);
var inst_37991 = (state_38032[(14)]);
var inst_37990 = (state_38032[(2)]);
var inst_37991__$1 = cljs.core.nth.call(null,inst_37990,(0),null);
var inst_37992__$1 = cljs.core.nth.call(null,inst_37990,(1),null);
var inst_37993 = (inst_37991__$1 == null);
var inst_37994 = cljs.core._EQ_.call(null,inst_37992__$1,change);
var inst_37995 = (inst_37993) || (inst_37994);
var state_38032__$1 = (function (){var statearr_38054 = state_38032;
(statearr_38054[(10)] = inst_37992__$1);

(statearr_38054[(14)] = inst_37991__$1);

return statearr_38054;
})();
if(cljs.core.truth_(inst_37995)){
var statearr_38055_38112 = state_38032__$1;
(statearr_38055_38112[(1)] = (23));

} else {
var statearr_38056_38113 = state_38032__$1;
(statearr_38056_38113[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (36))){
var inst_37982 = (state_38032[(12)]);
var inst_37960 = inst_37982;
var state_38032__$1 = (function (){var statearr_38057 = state_38032;
(statearr_38057[(7)] = inst_37960);

return statearr_38057;
})();
var statearr_38058_38114 = state_38032__$1;
(statearr_38058_38114[(2)] = null);

(statearr_38058_38114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (29))){
var inst_38006 = (state_38032[(11)]);
var state_38032__$1 = state_38032;
var statearr_38059_38115 = state_38032__$1;
(statearr_38059_38115[(2)] = inst_38006);

(statearr_38059_38115[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (6))){
var state_38032__$1 = state_38032;
var statearr_38060_38116 = state_38032__$1;
(statearr_38060_38116[(2)] = false);

(statearr_38060_38116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (28))){
var inst_38002 = (state_38032[(2)]);
var inst_38003 = calc_state.call(null);
var inst_37960 = inst_38003;
var state_38032__$1 = (function (){var statearr_38061 = state_38032;
(statearr_38061[(15)] = inst_38002);

(statearr_38061[(7)] = inst_37960);

return statearr_38061;
})();
var statearr_38062_38117 = state_38032__$1;
(statearr_38062_38117[(2)] = null);

(statearr_38062_38117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (25))){
var inst_38028 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
var statearr_38063_38118 = state_38032__$1;
(statearr_38063_38118[(2)] = inst_38028);

(statearr_38063_38118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (34))){
var inst_38026 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
var statearr_38064_38119 = state_38032__$1;
(statearr_38064_38119[(2)] = inst_38026);

(statearr_38064_38119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (17))){
var state_38032__$1 = state_38032;
var statearr_38065_38120 = state_38032__$1;
(statearr_38065_38120[(2)] = false);

(statearr_38065_38120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (3))){
var state_38032__$1 = state_38032;
var statearr_38066_38121 = state_38032__$1;
(statearr_38066_38121[(2)] = false);

(statearr_38066_38121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (12))){
var inst_38030 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38032__$1,inst_38030);
} else {
if((state_val_38033 === (2))){
var inst_37936 = (state_38032[(8)]);
var inst_37941 = inst_37936.cljs$lang$protocol_mask$partition0$;
var inst_37942 = (inst_37941 & (64));
var inst_37943 = inst_37936.cljs$core$ISeq$;
var inst_37944 = (inst_37942) || (inst_37943);
var state_38032__$1 = state_38032;
if(cljs.core.truth_(inst_37944)){
var statearr_38067_38122 = state_38032__$1;
(statearr_38067_38122[(1)] = (5));

} else {
var statearr_38068_38123 = state_38032__$1;
(statearr_38068_38123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (23))){
var inst_37991 = (state_38032[(14)]);
var inst_37997 = (inst_37991 == null);
var state_38032__$1 = state_38032;
if(cljs.core.truth_(inst_37997)){
var statearr_38069_38124 = state_38032__$1;
(statearr_38069_38124[(1)] = (26));

} else {
var statearr_38070_38125 = state_38032__$1;
(statearr_38070_38125[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (35))){
var inst_38017 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
if(cljs.core.truth_(inst_38017)){
var statearr_38071_38126 = state_38032__$1;
(statearr_38071_38126[(1)] = (36));

} else {
var statearr_38072_38127 = state_38032__$1;
(statearr_38072_38127[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (19))){
var inst_37960 = (state_38032[(7)]);
var inst_37979 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37960);
var state_38032__$1 = state_38032;
var statearr_38073_38128 = state_38032__$1;
(statearr_38073_38128[(2)] = inst_37979);

(statearr_38073_38128[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (11))){
var inst_37960 = (state_38032[(7)]);
var inst_37964 = (inst_37960 == null);
var inst_37965 = cljs.core.not.call(null,inst_37964);
var state_38032__$1 = state_38032;
if(inst_37965){
var statearr_38074_38129 = state_38032__$1;
(statearr_38074_38129[(1)] = (13));

} else {
var statearr_38075_38130 = state_38032__$1;
(statearr_38075_38130[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (9))){
var inst_37936 = (state_38032[(8)]);
var state_38032__$1 = state_38032;
var statearr_38076_38131 = state_38032__$1;
(statearr_38076_38131[(2)] = inst_37936);

(statearr_38076_38131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (5))){
var state_38032__$1 = state_38032;
var statearr_38077_38132 = state_38032__$1;
(statearr_38077_38132[(2)] = true);

(statearr_38077_38132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (14))){
var state_38032__$1 = state_38032;
var statearr_38078_38133 = state_38032__$1;
(statearr_38078_38133[(2)] = false);

(statearr_38078_38133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (26))){
var inst_37992 = (state_38032[(10)]);
var inst_37999 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37992);
var state_38032__$1 = state_38032;
var statearr_38079_38134 = state_38032__$1;
(statearr_38079_38134[(2)] = inst_37999);

(statearr_38079_38134[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (16))){
var state_38032__$1 = state_38032;
var statearr_38080_38135 = state_38032__$1;
(statearr_38080_38135[(2)] = true);

(statearr_38080_38135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (38))){
var inst_38022 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
var statearr_38081_38136 = state_38032__$1;
(statearr_38081_38136[(2)] = inst_38022);

(statearr_38081_38136[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (30))){
var inst_37983 = (state_38032[(9)]);
var inst_37992 = (state_38032[(10)]);
var inst_37984 = (state_38032[(13)]);
var inst_38009 = cljs.core.empty_QMARK_.call(null,inst_37983);
var inst_38010 = inst_37984.call(null,inst_37992);
var inst_38011 = cljs.core.not.call(null,inst_38010);
var inst_38012 = (inst_38009) && (inst_38011);
var state_38032__$1 = state_38032;
var statearr_38082_38137 = state_38032__$1;
(statearr_38082_38137[(2)] = inst_38012);

(statearr_38082_38137[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (10))){
var inst_37936 = (state_38032[(8)]);
var inst_37956 = (state_38032[(2)]);
var inst_37957 = cljs.core.get.call(null,inst_37956,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37958 = cljs.core.get.call(null,inst_37956,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37959 = cljs.core.get.call(null,inst_37956,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37960 = inst_37936;
var state_38032__$1 = (function (){var statearr_38083 = state_38032;
(statearr_38083[(16)] = inst_37958);

(statearr_38083[(7)] = inst_37960);

(statearr_38083[(17)] = inst_37959);

(statearr_38083[(18)] = inst_37957);

return statearr_38083;
})();
var statearr_38084_38138 = state_38032__$1;
(statearr_38084_38138[(2)] = null);

(statearr_38084_38138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (18))){
var inst_37974 = (state_38032[(2)]);
var state_38032__$1 = state_38032;
var statearr_38085_38139 = state_38032__$1;
(statearr_38085_38139[(2)] = inst_37974);

(statearr_38085_38139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (37))){
var state_38032__$1 = state_38032;
var statearr_38086_38140 = state_38032__$1;
(statearr_38086_38140[(2)] = null);

(statearr_38086_38140[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38033 === (8))){
var inst_37936 = (state_38032[(8)]);
var inst_37953 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37936);
var state_38032__$1 = state_38032;
var statearr_38087_38141 = state_38032__$1;
(statearr_38087_38141[(2)] = inst_37953);

(statearr_38087_38141[(1)] = (10));


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
});})(c__36362__auto___38095,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__36250__auto__,c__36362__auto___38095,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__36251__auto__ = null;
var cljs$core$async$mix_$_state_machine__36251__auto____0 = (function (){
var statearr_38091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38091[(0)] = cljs$core$async$mix_$_state_machine__36251__auto__);

(statearr_38091[(1)] = (1));

return statearr_38091;
});
var cljs$core$async$mix_$_state_machine__36251__auto____1 = (function (state_38032){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_38032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e38092){if((e38092 instanceof Object)){
var ex__36254__auto__ = e38092;
var statearr_38093_38142 = state_38032;
(statearr_38093_38142[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38143 = state_38032;
state_38032 = G__38143;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36251__auto__ = function(state_38032){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36251__auto____1.call(this,state_38032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36251__auto____0;
cljs$core$async$mix_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36251__auto____1;
return cljs$core$async$mix_$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___38095,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__36364__auto__ = (function (){var statearr_38094 = f__36363__auto__.call(null);
(statearr_38094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___38095);

return statearr_38094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___38095,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__30671__auto__ = (((p == null))?null:p);
var m__30672__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30671__auto__)]);
if(!((m__30672__auto__ == null))){
return m__30672__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30672__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30672__auto____$1 == null))){
return m__30672__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__30671__auto__ = (((p == null))?null:p);
var m__30672__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30671__auto__)]);
if(!((m__30672__auto__ == null))){
return m__30672__auto__.call(null,p,v,ch);
} else {
var m__30672__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30672__auto____$1 == null))){
return m__30672__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args38144 = [];
var len__31083__auto___38147 = arguments.length;
var i__31084__auto___38148 = (0);
while(true){
if((i__31084__auto___38148 < len__31083__auto___38147)){
args38144.push((arguments[i__31084__auto___38148]));

var G__38149 = (i__31084__auto___38148 + (1));
i__31084__auto___38148 = G__38149;
continue;
} else {
}
break;
}

var G__38146 = args38144.length;
switch (G__38146) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38144.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30671__auto__ = (((p == null))?null:p);
var m__30672__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30671__auto__)]);
if(!((m__30672__auto__ == null))){
return m__30672__auto__.call(null,p);
} else {
var m__30672__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30672__auto____$1 == null))){
return m__30672__auto____$1.call(null,p);
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
var x__30671__auto__ = (((p == null))?null:p);
var m__30672__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30671__auto__)]);
if(!((m__30672__auto__ == null))){
return m__30672__auto__.call(null,p,v);
} else {
var m__30672__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30672__auto____$1 == null))){
return m__30672__auto____$1.call(null,p,v);
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
var args38152 = [];
var len__31083__auto___38277 = arguments.length;
var i__31084__auto___38278 = (0);
while(true){
if((i__31084__auto___38278 < len__31083__auto___38277)){
args38152.push((arguments[i__31084__auto___38278]));

var G__38279 = (i__31084__auto___38278 + (1));
i__31084__auto___38278 = G__38279;
continue;
} else {
}
break;
}

var G__38154 = args38152.length;
switch (G__38154) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38152.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30008__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30008__auto__,mults){
return (function (p1__38151_SHARP_){
if(cljs.core.truth_(p1__38151_SHARP_.call(null,topic))){
return p1__38151_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38151_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30008__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38155 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38155 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38156){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38156 = meta38156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38157,meta38156__$1){
var self__ = this;
var _38157__$1 = this;
return (new cljs.core.async.t_cljs$core$async38155(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38156__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38157){
var self__ = this;
var _38157__$1 = this;
return self__.meta38156;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38155.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38155.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38155.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async38155.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38155.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async38155.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38155.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38155.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38156","meta38156",828155917,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38155.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38155";

cljs.core.async.t_cljs$core$async38155.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30614__auto__,writer__30615__auto__,opt__30616__auto__){
return cljs.core._write.call(null,writer__30615__auto__,"cljs.core.async/t_cljs$core$async38155");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38155 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38155(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38156){
return (new cljs.core.async.t_cljs$core$async38155(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38156));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38155(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36362__auto___38281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___38281,mults,ensure_mult,p){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___38281,mults,ensure_mult,p){
return (function (state_38229){
var state_val_38230 = (state_38229[(1)]);
if((state_val_38230 === (7))){
var inst_38225 = (state_38229[(2)]);
var state_38229__$1 = state_38229;
var statearr_38231_38282 = state_38229__$1;
(statearr_38231_38282[(2)] = inst_38225);

(statearr_38231_38282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (20))){
var state_38229__$1 = state_38229;
var statearr_38232_38283 = state_38229__$1;
(statearr_38232_38283[(2)] = null);

(statearr_38232_38283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (1))){
var state_38229__$1 = state_38229;
var statearr_38233_38284 = state_38229__$1;
(statearr_38233_38284[(2)] = null);

(statearr_38233_38284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (24))){
var inst_38208 = (state_38229[(7)]);
var inst_38217 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38208);
var state_38229__$1 = state_38229;
var statearr_38234_38285 = state_38229__$1;
(statearr_38234_38285[(2)] = inst_38217);

(statearr_38234_38285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (4))){
var inst_38160 = (state_38229[(8)]);
var inst_38160__$1 = (state_38229[(2)]);
var inst_38161 = (inst_38160__$1 == null);
var state_38229__$1 = (function (){var statearr_38235 = state_38229;
(statearr_38235[(8)] = inst_38160__$1);

return statearr_38235;
})();
if(cljs.core.truth_(inst_38161)){
var statearr_38236_38286 = state_38229__$1;
(statearr_38236_38286[(1)] = (5));

} else {
var statearr_38237_38287 = state_38229__$1;
(statearr_38237_38287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (15))){
var inst_38202 = (state_38229[(2)]);
var state_38229__$1 = state_38229;
var statearr_38238_38288 = state_38229__$1;
(statearr_38238_38288[(2)] = inst_38202);

(statearr_38238_38288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (21))){
var inst_38222 = (state_38229[(2)]);
var state_38229__$1 = (function (){var statearr_38239 = state_38229;
(statearr_38239[(9)] = inst_38222);

return statearr_38239;
})();
var statearr_38240_38289 = state_38229__$1;
(statearr_38240_38289[(2)] = null);

(statearr_38240_38289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (13))){
var inst_38184 = (state_38229[(10)]);
var inst_38186 = cljs.core.chunked_seq_QMARK_.call(null,inst_38184);
var state_38229__$1 = state_38229;
if(inst_38186){
var statearr_38241_38290 = state_38229__$1;
(statearr_38241_38290[(1)] = (16));

} else {
var statearr_38242_38291 = state_38229__$1;
(statearr_38242_38291[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (22))){
var inst_38214 = (state_38229[(2)]);
var state_38229__$1 = state_38229;
if(cljs.core.truth_(inst_38214)){
var statearr_38243_38292 = state_38229__$1;
(statearr_38243_38292[(1)] = (23));

} else {
var statearr_38244_38293 = state_38229__$1;
(statearr_38244_38293[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (6))){
var inst_38160 = (state_38229[(8)]);
var inst_38208 = (state_38229[(7)]);
var inst_38210 = (state_38229[(11)]);
var inst_38208__$1 = topic_fn.call(null,inst_38160);
var inst_38209 = cljs.core.deref.call(null,mults);
var inst_38210__$1 = cljs.core.get.call(null,inst_38209,inst_38208__$1);
var state_38229__$1 = (function (){var statearr_38245 = state_38229;
(statearr_38245[(7)] = inst_38208__$1);

(statearr_38245[(11)] = inst_38210__$1);

return statearr_38245;
})();
if(cljs.core.truth_(inst_38210__$1)){
var statearr_38246_38294 = state_38229__$1;
(statearr_38246_38294[(1)] = (19));

} else {
var statearr_38247_38295 = state_38229__$1;
(statearr_38247_38295[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (25))){
var inst_38219 = (state_38229[(2)]);
var state_38229__$1 = state_38229;
var statearr_38248_38296 = state_38229__$1;
(statearr_38248_38296[(2)] = inst_38219);

(statearr_38248_38296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (17))){
var inst_38184 = (state_38229[(10)]);
var inst_38193 = cljs.core.first.call(null,inst_38184);
var inst_38194 = cljs.core.async.muxch_STAR_.call(null,inst_38193);
var inst_38195 = cljs.core.async.close_BANG_.call(null,inst_38194);
var inst_38196 = cljs.core.next.call(null,inst_38184);
var inst_38170 = inst_38196;
var inst_38171 = null;
var inst_38172 = (0);
var inst_38173 = (0);
var state_38229__$1 = (function (){var statearr_38249 = state_38229;
(statearr_38249[(12)] = inst_38173);

(statearr_38249[(13)] = inst_38171);

(statearr_38249[(14)] = inst_38172);

(statearr_38249[(15)] = inst_38170);

(statearr_38249[(16)] = inst_38195);

return statearr_38249;
})();
var statearr_38250_38297 = state_38229__$1;
(statearr_38250_38297[(2)] = null);

(statearr_38250_38297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (3))){
var inst_38227 = (state_38229[(2)]);
var state_38229__$1 = state_38229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38229__$1,inst_38227);
} else {
if((state_val_38230 === (12))){
var inst_38204 = (state_38229[(2)]);
var state_38229__$1 = state_38229;
var statearr_38251_38298 = state_38229__$1;
(statearr_38251_38298[(2)] = inst_38204);

(statearr_38251_38298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (2))){
var state_38229__$1 = state_38229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38229__$1,(4),ch);
} else {
if((state_val_38230 === (23))){
var state_38229__$1 = state_38229;
var statearr_38252_38299 = state_38229__$1;
(statearr_38252_38299[(2)] = null);

(statearr_38252_38299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (19))){
var inst_38160 = (state_38229[(8)]);
var inst_38210 = (state_38229[(11)]);
var inst_38212 = cljs.core.async.muxch_STAR_.call(null,inst_38210);
var state_38229__$1 = state_38229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38229__$1,(22),inst_38212,inst_38160);
} else {
if((state_val_38230 === (11))){
var inst_38184 = (state_38229[(10)]);
var inst_38170 = (state_38229[(15)]);
var inst_38184__$1 = cljs.core.seq.call(null,inst_38170);
var state_38229__$1 = (function (){var statearr_38253 = state_38229;
(statearr_38253[(10)] = inst_38184__$1);

return statearr_38253;
})();
if(inst_38184__$1){
var statearr_38254_38300 = state_38229__$1;
(statearr_38254_38300[(1)] = (13));

} else {
var statearr_38255_38301 = state_38229__$1;
(statearr_38255_38301[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (9))){
var inst_38206 = (state_38229[(2)]);
var state_38229__$1 = state_38229;
var statearr_38256_38302 = state_38229__$1;
(statearr_38256_38302[(2)] = inst_38206);

(statearr_38256_38302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (5))){
var inst_38167 = cljs.core.deref.call(null,mults);
var inst_38168 = cljs.core.vals.call(null,inst_38167);
var inst_38169 = cljs.core.seq.call(null,inst_38168);
var inst_38170 = inst_38169;
var inst_38171 = null;
var inst_38172 = (0);
var inst_38173 = (0);
var state_38229__$1 = (function (){var statearr_38257 = state_38229;
(statearr_38257[(12)] = inst_38173);

(statearr_38257[(13)] = inst_38171);

(statearr_38257[(14)] = inst_38172);

(statearr_38257[(15)] = inst_38170);

return statearr_38257;
})();
var statearr_38258_38303 = state_38229__$1;
(statearr_38258_38303[(2)] = null);

(statearr_38258_38303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (14))){
var state_38229__$1 = state_38229;
var statearr_38262_38304 = state_38229__$1;
(statearr_38262_38304[(2)] = null);

(statearr_38262_38304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (16))){
var inst_38184 = (state_38229[(10)]);
var inst_38188 = cljs.core.chunk_first.call(null,inst_38184);
var inst_38189 = cljs.core.chunk_rest.call(null,inst_38184);
var inst_38190 = cljs.core.count.call(null,inst_38188);
var inst_38170 = inst_38189;
var inst_38171 = inst_38188;
var inst_38172 = inst_38190;
var inst_38173 = (0);
var state_38229__$1 = (function (){var statearr_38263 = state_38229;
(statearr_38263[(12)] = inst_38173);

(statearr_38263[(13)] = inst_38171);

(statearr_38263[(14)] = inst_38172);

(statearr_38263[(15)] = inst_38170);

return statearr_38263;
})();
var statearr_38264_38305 = state_38229__$1;
(statearr_38264_38305[(2)] = null);

(statearr_38264_38305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (10))){
var inst_38173 = (state_38229[(12)]);
var inst_38171 = (state_38229[(13)]);
var inst_38172 = (state_38229[(14)]);
var inst_38170 = (state_38229[(15)]);
var inst_38178 = cljs.core._nth.call(null,inst_38171,inst_38173);
var inst_38179 = cljs.core.async.muxch_STAR_.call(null,inst_38178);
var inst_38180 = cljs.core.async.close_BANG_.call(null,inst_38179);
var inst_38181 = (inst_38173 + (1));
var tmp38259 = inst_38171;
var tmp38260 = inst_38172;
var tmp38261 = inst_38170;
var inst_38170__$1 = tmp38261;
var inst_38171__$1 = tmp38259;
var inst_38172__$1 = tmp38260;
var inst_38173__$1 = inst_38181;
var state_38229__$1 = (function (){var statearr_38265 = state_38229;
(statearr_38265[(17)] = inst_38180);

(statearr_38265[(12)] = inst_38173__$1);

(statearr_38265[(13)] = inst_38171__$1);

(statearr_38265[(14)] = inst_38172__$1);

(statearr_38265[(15)] = inst_38170__$1);

return statearr_38265;
})();
var statearr_38266_38306 = state_38229__$1;
(statearr_38266_38306[(2)] = null);

(statearr_38266_38306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (18))){
var inst_38199 = (state_38229[(2)]);
var state_38229__$1 = state_38229;
var statearr_38267_38307 = state_38229__$1;
(statearr_38267_38307[(2)] = inst_38199);

(statearr_38267_38307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38230 === (8))){
var inst_38173 = (state_38229[(12)]);
var inst_38172 = (state_38229[(14)]);
var inst_38175 = (inst_38173 < inst_38172);
var inst_38176 = inst_38175;
var state_38229__$1 = state_38229;
if(cljs.core.truth_(inst_38176)){
var statearr_38268_38308 = state_38229__$1;
(statearr_38268_38308[(1)] = (10));

} else {
var statearr_38269_38309 = state_38229__$1;
(statearr_38269_38309[(1)] = (11));

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
});})(c__36362__auto___38281,mults,ensure_mult,p))
;
return ((function (switch__36250__auto__,c__36362__auto___38281,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__36251__auto__ = null;
var cljs$core$async$state_machine__36251__auto____0 = (function (){
var statearr_38273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38273[(0)] = cljs$core$async$state_machine__36251__auto__);

(statearr_38273[(1)] = (1));

return statearr_38273;
});
var cljs$core$async$state_machine__36251__auto____1 = (function (state_38229){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_38229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e38274){if((e38274 instanceof Object)){
var ex__36254__auto__ = e38274;
var statearr_38275_38310 = state_38229;
(statearr_38275_38310[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38311 = state_38229;
state_38229 = G__38311;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$state_machine__36251__auto__ = function(state_38229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36251__auto____1.call(this,state_38229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36251__auto____0;
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36251__auto____1;
return cljs$core$async$state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___38281,mults,ensure_mult,p))
})();
var state__36364__auto__ = (function (){var statearr_38276 = f__36363__auto__.call(null);
(statearr_38276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___38281);

return statearr_38276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___38281,mults,ensure_mult,p))
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
var args38312 = [];
var len__31083__auto___38315 = arguments.length;
var i__31084__auto___38316 = (0);
while(true){
if((i__31084__auto___38316 < len__31083__auto___38315)){
args38312.push((arguments[i__31084__auto___38316]));

var G__38317 = (i__31084__auto___38316 + (1));
i__31084__auto___38316 = G__38317;
continue;
} else {
}
break;
}

var G__38314 = args38312.length;
switch (G__38314) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38312.length)].join('')));

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
var args38319 = [];
var len__31083__auto___38322 = arguments.length;
var i__31084__auto___38323 = (0);
while(true){
if((i__31084__auto___38323 < len__31083__auto___38322)){
args38319.push((arguments[i__31084__auto___38323]));

var G__38324 = (i__31084__auto___38323 + (1));
i__31084__auto___38323 = G__38324;
continue;
} else {
}
break;
}

var G__38321 = args38319.length;
switch (G__38321) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38319.length)].join('')));

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
var args38326 = [];
var len__31083__auto___38397 = arguments.length;
var i__31084__auto___38398 = (0);
while(true){
if((i__31084__auto___38398 < len__31083__auto___38397)){
args38326.push((arguments[i__31084__auto___38398]));

var G__38399 = (i__31084__auto___38398 + (1));
i__31084__auto___38398 = G__38399;
continue;
} else {
}
break;
}

var G__38328 = args38326.length;
switch (G__38328) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38326.length)].join('')));

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
var c__36362__auto___38401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___38401,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___38401,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38367){
var state_val_38368 = (state_38367[(1)]);
if((state_val_38368 === (7))){
var state_38367__$1 = state_38367;
var statearr_38369_38402 = state_38367__$1;
(statearr_38369_38402[(2)] = null);

(statearr_38369_38402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (1))){
var state_38367__$1 = state_38367;
var statearr_38370_38403 = state_38367__$1;
(statearr_38370_38403[(2)] = null);

(statearr_38370_38403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (4))){
var inst_38331 = (state_38367[(7)]);
var inst_38333 = (inst_38331 < cnt);
var state_38367__$1 = state_38367;
if(cljs.core.truth_(inst_38333)){
var statearr_38371_38404 = state_38367__$1;
(statearr_38371_38404[(1)] = (6));

} else {
var statearr_38372_38405 = state_38367__$1;
(statearr_38372_38405[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (15))){
var inst_38363 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
var statearr_38373_38406 = state_38367__$1;
(statearr_38373_38406[(2)] = inst_38363);

(statearr_38373_38406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (13))){
var inst_38356 = cljs.core.async.close_BANG_.call(null,out);
var state_38367__$1 = state_38367;
var statearr_38374_38407 = state_38367__$1;
(statearr_38374_38407[(2)] = inst_38356);

(statearr_38374_38407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (6))){
var state_38367__$1 = state_38367;
var statearr_38375_38408 = state_38367__$1;
(statearr_38375_38408[(2)] = null);

(statearr_38375_38408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (3))){
var inst_38365 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38367__$1,inst_38365);
} else {
if((state_val_38368 === (12))){
var inst_38353 = (state_38367[(8)]);
var inst_38353__$1 = (state_38367[(2)]);
var inst_38354 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38353__$1);
var state_38367__$1 = (function (){var statearr_38376 = state_38367;
(statearr_38376[(8)] = inst_38353__$1);

return statearr_38376;
})();
if(cljs.core.truth_(inst_38354)){
var statearr_38377_38409 = state_38367__$1;
(statearr_38377_38409[(1)] = (13));

} else {
var statearr_38378_38410 = state_38367__$1;
(statearr_38378_38410[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (2))){
var inst_38330 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38331 = (0);
var state_38367__$1 = (function (){var statearr_38379 = state_38367;
(statearr_38379[(7)] = inst_38331);

(statearr_38379[(9)] = inst_38330);

return statearr_38379;
})();
var statearr_38380_38411 = state_38367__$1;
(statearr_38380_38411[(2)] = null);

(statearr_38380_38411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (11))){
var inst_38331 = (state_38367[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38367,(10),Object,null,(9));
var inst_38340 = chs__$1.call(null,inst_38331);
var inst_38341 = done.call(null,inst_38331);
var inst_38342 = cljs.core.async.take_BANG_.call(null,inst_38340,inst_38341);
var state_38367__$1 = state_38367;
var statearr_38381_38412 = state_38367__$1;
(statearr_38381_38412[(2)] = inst_38342);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38367__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (9))){
var inst_38331 = (state_38367[(7)]);
var inst_38344 = (state_38367[(2)]);
var inst_38345 = (inst_38331 + (1));
var inst_38331__$1 = inst_38345;
var state_38367__$1 = (function (){var statearr_38382 = state_38367;
(statearr_38382[(10)] = inst_38344);

(statearr_38382[(7)] = inst_38331__$1);

return statearr_38382;
})();
var statearr_38383_38413 = state_38367__$1;
(statearr_38383_38413[(2)] = null);

(statearr_38383_38413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (5))){
var inst_38351 = (state_38367[(2)]);
var state_38367__$1 = (function (){var statearr_38384 = state_38367;
(statearr_38384[(11)] = inst_38351);

return statearr_38384;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38367__$1,(12),dchan);
} else {
if((state_val_38368 === (14))){
var inst_38353 = (state_38367[(8)]);
var inst_38358 = cljs.core.apply.call(null,f,inst_38353);
var state_38367__$1 = state_38367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38367__$1,(16),out,inst_38358);
} else {
if((state_val_38368 === (16))){
var inst_38360 = (state_38367[(2)]);
var state_38367__$1 = (function (){var statearr_38385 = state_38367;
(statearr_38385[(12)] = inst_38360);

return statearr_38385;
})();
var statearr_38386_38414 = state_38367__$1;
(statearr_38386_38414[(2)] = null);

(statearr_38386_38414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (10))){
var inst_38335 = (state_38367[(2)]);
var inst_38336 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38367__$1 = (function (){var statearr_38387 = state_38367;
(statearr_38387[(13)] = inst_38335);

return statearr_38387;
})();
var statearr_38388_38415 = state_38367__$1;
(statearr_38388_38415[(2)] = inst_38336);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38367__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38368 === (8))){
var inst_38349 = (state_38367[(2)]);
var state_38367__$1 = state_38367;
var statearr_38389_38416 = state_38367__$1;
(statearr_38389_38416[(2)] = inst_38349);

(statearr_38389_38416[(1)] = (5));


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
});})(c__36362__auto___38401,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__36250__auto__,c__36362__auto___38401,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__36251__auto__ = null;
var cljs$core$async$state_machine__36251__auto____0 = (function (){
var statearr_38393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38393[(0)] = cljs$core$async$state_machine__36251__auto__);

(statearr_38393[(1)] = (1));

return statearr_38393;
});
var cljs$core$async$state_machine__36251__auto____1 = (function (state_38367){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_38367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e38394){if((e38394 instanceof Object)){
var ex__36254__auto__ = e38394;
var statearr_38395_38417 = state_38367;
(statearr_38395_38417[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38418 = state_38367;
state_38367 = G__38418;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$state_machine__36251__auto__ = function(state_38367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36251__auto____1.call(this,state_38367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36251__auto____0;
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36251__auto____1;
return cljs$core$async$state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___38401,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__36364__auto__ = (function (){var statearr_38396 = f__36363__auto__.call(null);
(statearr_38396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___38401);

return statearr_38396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___38401,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args38420 = [];
var len__31083__auto___38478 = arguments.length;
var i__31084__auto___38479 = (0);
while(true){
if((i__31084__auto___38479 < len__31083__auto___38478)){
args38420.push((arguments[i__31084__auto___38479]));

var G__38480 = (i__31084__auto___38479 + (1));
i__31084__auto___38479 = G__38480;
continue;
} else {
}
break;
}

var G__38422 = args38420.length;
switch (G__38422) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38420.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36362__auto___38482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___38482,out){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___38482,out){
return (function (state_38454){
var state_val_38455 = (state_38454[(1)]);
if((state_val_38455 === (7))){
var inst_38433 = (state_38454[(7)]);
var inst_38434 = (state_38454[(8)]);
var inst_38433__$1 = (state_38454[(2)]);
var inst_38434__$1 = cljs.core.nth.call(null,inst_38433__$1,(0),null);
var inst_38435 = cljs.core.nth.call(null,inst_38433__$1,(1),null);
var inst_38436 = (inst_38434__$1 == null);
var state_38454__$1 = (function (){var statearr_38456 = state_38454;
(statearr_38456[(7)] = inst_38433__$1);

(statearr_38456[(9)] = inst_38435);

(statearr_38456[(8)] = inst_38434__$1);

return statearr_38456;
})();
if(cljs.core.truth_(inst_38436)){
var statearr_38457_38483 = state_38454__$1;
(statearr_38457_38483[(1)] = (8));

} else {
var statearr_38458_38484 = state_38454__$1;
(statearr_38458_38484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38455 === (1))){
var inst_38423 = cljs.core.vec.call(null,chs);
var inst_38424 = inst_38423;
var state_38454__$1 = (function (){var statearr_38459 = state_38454;
(statearr_38459[(10)] = inst_38424);

return statearr_38459;
})();
var statearr_38460_38485 = state_38454__$1;
(statearr_38460_38485[(2)] = null);

(statearr_38460_38485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38455 === (4))){
var inst_38424 = (state_38454[(10)]);
var state_38454__$1 = state_38454;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38454__$1,(7),inst_38424);
} else {
if((state_val_38455 === (6))){
var inst_38450 = (state_38454[(2)]);
var state_38454__$1 = state_38454;
var statearr_38461_38486 = state_38454__$1;
(statearr_38461_38486[(2)] = inst_38450);

(statearr_38461_38486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38455 === (3))){
var inst_38452 = (state_38454[(2)]);
var state_38454__$1 = state_38454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38454__$1,inst_38452);
} else {
if((state_val_38455 === (2))){
var inst_38424 = (state_38454[(10)]);
var inst_38426 = cljs.core.count.call(null,inst_38424);
var inst_38427 = (inst_38426 > (0));
var state_38454__$1 = state_38454;
if(cljs.core.truth_(inst_38427)){
var statearr_38463_38487 = state_38454__$1;
(statearr_38463_38487[(1)] = (4));

} else {
var statearr_38464_38488 = state_38454__$1;
(statearr_38464_38488[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38455 === (11))){
var inst_38424 = (state_38454[(10)]);
var inst_38443 = (state_38454[(2)]);
var tmp38462 = inst_38424;
var inst_38424__$1 = tmp38462;
var state_38454__$1 = (function (){var statearr_38465 = state_38454;
(statearr_38465[(11)] = inst_38443);

(statearr_38465[(10)] = inst_38424__$1);

return statearr_38465;
})();
var statearr_38466_38489 = state_38454__$1;
(statearr_38466_38489[(2)] = null);

(statearr_38466_38489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38455 === (9))){
var inst_38434 = (state_38454[(8)]);
var state_38454__$1 = state_38454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38454__$1,(11),out,inst_38434);
} else {
if((state_val_38455 === (5))){
var inst_38448 = cljs.core.async.close_BANG_.call(null,out);
var state_38454__$1 = state_38454;
var statearr_38467_38490 = state_38454__$1;
(statearr_38467_38490[(2)] = inst_38448);

(statearr_38467_38490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38455 === (10))){
var inst_38446 = (state_38454[(2)]);
var state_38454__$1 = state_38454;
var statearr_38468_38491 = state_38454__$1;
(statearr_38468_38491[(2)] = inst_38446);

(statearr_38468_38491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38455 === (8))){
var inst_38433 = (state_38454[(7)]);
var inst_38435 = (state_38454[(9)]);
var inst_38424 = (state_38454[(10)]);
var inst_38434 = (state_38454[(8)]);
var inst_38438 = (function (){var cs = inst_38424;
var vec__38429 = inst_38433;
var v = inst_38434;
var c = inst_38435;
return ((function (cs,vec__38429,v,c,inst_38433,inst_38435,inst_38424,inst_38434,state_val_38455,c__36362__auto___38482,out){
return (function (p1__38419_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38419_SHARP_);
});
;})(cs,vec__38429,v,c,inst_38433,inst_38435,inst_38424,inst_38434,state_val_38455,c__36362__auto___38482,out))
})();
var inst_38439 = cljs.core.filterv.call(null,inst_38438,inst_38424);
var inst_38424__$1 = inst_38439;
var state_38454__$1 = (function (){var statearr_38469 = state_38454;
(statearr_38469[(10)] = inst_38424__$1);

return statearr_38469;
})();
var statearr_38470_38492 = state_38454__$1;
(statearr_38470_38492[(2)] = null);

(statearr_38470_38492[(1)] = (2));


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
});})(c__36362__auto___38482,out))
;
return ((function (switch__36250__auto__,c__36362__auto___38482,out){
return (function() {
var cljs$core$async$state_machine__36251__auto__ = null;
var cljs$core$async$state_machine__36251__auto____0 = (function (){
var statearr_38474 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38474[(0)] = cljs$core$async$state_machine__36251__auto__);

(statearr_38474[(1)] = (1));

return statearr_38474;
});
var cljs$core$async$state_machine__36251__auto____1 = (function (state_38454){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_38454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e38475){if((e38475 instanceof Object)){
var ex__36254__auto__ = e38475;
var statearr_38476_38493 = state_38454;
(statearr_38476_38493[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38494 = state_38454;
state_38454 = G__38494;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$state_machine__36251__auto__ = function(state_38454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36251__auto____1.call(this,state_38454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36251__auto____0;
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36251__auto____1;
return cljs$core$async$state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___38482,out))
})();
var state__36364__auto__ = (function (){var statearr_38477 = f__36363__auto__.call(null);
(statearr_38477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___38482);

return statearr_38477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___38482,out))
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
var args38495 = [];
var len__31083__auto___38544 = arguments.length;
var i__31084__auto___38545 = (0);
while(true){
if((i__31084__auto___38545 < len__31083__auto___38544)){
args38495.push((arguments[i__31084__auto___38545]));

var G__38546 = (i__31084__auto___38545 + (1));
i__31084__auto___38545 = G__38546;
continue;
} else {
}
break;
}

var G__38497 = args38495.length;
switch (G__38497) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38495.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36362__auto___38548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___38548,out){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___38548,out){
return (function (state_38521){
var state_val_38522 = (state_38521[(1)]);
if((state_val_38522 === (7))){
var inst_38503 = (state_38521[(7)]);
var inst_38503__$1 = (state_38521[(2)]);
var inst_38504 = (inst_38503__$1 == null);
var inst_38505 = cljs.core.not.call(null,inst_38504);
var state_38521__$1 = (function (){var statearr_38523 = state_38521;
(statearr_38523[(7)] = inst_38503__$1);

return statearr_38523;
})();
if(inst_38505){
var statearr_38524_38549 = state_38521__$1;
(statearr_38524_38549[(1)] = (8));

} else {
var statearr_38525_38550 = state_38521__$1;
(statearr_38525_38550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38522 === (1))){
var inst_38498 = (0);
var state_38521__$1 = (function (){var statearr_38526 = state_38521;
(statearr_38526[(8)] = inst_38498);

return statearr_38526;
})();
var statearr_38527_38551 = state_38521__$1;
(statearr_38527_38551[(2)] = null);

(statearr_38527_38551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38522 === (4))){
var state_38521__$1 = state_38521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38521__$1,(7),ch);
} else {
if((state_val_38522 === (6))){
var inst_38516 = (state_38521[(2)]);
var state_38521__$1 = state_38521;
var statearr_38528_38552 = state_38521__$1;
(statearr_38528_38552[(2)] = inst_38516);

(statearr_38528_38552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38522 === (3))){
var inst_38518 = (state_38521[(2)]);
var inst_38519 = cljs.core.async.close_BANG_.call(null,out);
var state_38521__$1 = (function (){var statearr_38529 = state_38521;
(statearr_38529[(9)] = inst_38518);

return statearr_38529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38521__$1,inst_38519);
} else {
if((state_val_38522 === (2))){
var inst_38498 = (state_38521[(8)]);
var inst_38500 = (inst_38498 < n);
var state_38521__$1 = state_38521;
if(cljs.core.truth_(inst_38500)){
var statearr_38530_38553 = state_38521__$1;
(statearr_38530_38553[(1)] = (4));

} else {
var statearr_38531_38554 = state_38521__$1;
(statearr_38531_38554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38522 === (11))){
var inst_38498 = (state_38521[(8)]);
var inst_38508 = (state_38521[(2)]);
var inst_38509 = (inst_38498 + (1));
var inst_38498__$1 = inst_38509;
var state_38521__$1 = (function (){var statearr_38532 = state_38521;
(statearr_38532[(8)] = inst_38498__$1);

(statearr_38532[(10)] = inst_38508);

return statearr_38532;
})();
var statearr_38533_38555 = state_38521__$1;
(statearr_38533_38555[(2)] = null);

(statearr_38533_38555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38522 === (9))){
var state_38521__$1 = state_38521;
var statearr_38534_38556 = state_38521__$1;
(statearr_38534_38556[(2)] = null);

(statearr_38534_38556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38522 === (5))){
var state_38521__$1 = state_38521;
var statearr_38535_38557 = state_38521__$1;
(statearr_38535_38557[(2)] = null);

(statearr_38535_38557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38522 === (10))){
var inst_38513 = (state_38521[(2)]);
var state_38521__$1 = state_38521;
var statearr_38536_38558 = state_38521__$1;
(statearr_38536_38558[(2)] = inst_38513);

(statearr_38536_38558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38522 === (8))){
var inst_38503 = (state_38521[(7)]);
var state_38521__$1 = state_38521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38521__$1,(11),out,inst_38503);
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
});})(c__36362__auto___38548,out))
;
return ((function (switch__36250__auto__,c__36362__auto___38548,out){
return (function() {
var cljs$core$async$state_machine__36251__auto__ = null;
var cljs$core$async$state_machine__36251__auto____0 = (function (){
var statearr_38540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38540[(0)] = cljs$core$async$state_machine__36251__auto__);

(statearr_38540[(1)] = (1));

return statearr_38540;
});
var cljs$core$async$state_machine__36251__auto____1 = (function (state_38521){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_38521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e38541){if((e38541 instanceof Object)){
var ex__36254__auto__ = e38541;
var statearr_38542_38559 = state_38521;
(statearr_38542_38559[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38560 = state_38521;
state_38521 = G__38560;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$state_machine__36251__auto__ = function(state_38521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36251__auto____1.call(this,state_38521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36251__auto____0;
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36251__auto____1;
return cljs$core$async$state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___38548,out))
})();
var state__36364__auto__ = (function (){var statearr_38543 = f__36363__auto__.call(null);
(statearr_38543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___38548);

return statearr_38543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___38548,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38568 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38568 = (function (map_LT_,f,ch,meta38569){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38569 = meta38569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38570,meta38569__$1){
var self__ = this;
var _38570__$1 = this;
return (new cljs.core.async.t_cljs$core$async38568(self__.map_LT_,self__.f,self__.ch,meta38569__$1));
});

cljs.core.async.t_cljs$core$async38568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38570){
var self__ = this;
var _38570__$1 = this;
return self__.meta38569;
});

cljs.core.async.t_cljs$core$async38568.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38568.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38568.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38568.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38568.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38571 = (function (map_LT_,f,ch,meta38569,_,fn1,meta38572){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38569 = meta38569;
this._ = _;
this.fn1 = fn1;
this.meta38572 = meta38572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38573,meta38572__$1){
var self__ = this;
var _38573__$1 = this;
return (new cljs.core.async.t_cljs$core$async38571(self__.map_LT_,self__.f,self__.ch,self__.meta38569,self__._,self__.fn1,meta38572__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38573){
var self__ = this;
var _38573__$1 = this;
return self__.meta38572;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38571.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38561_SHARP_){
return f1.call(null,(((p1__38561_SHARP_ == null))?null:self__.f.call(null,p1__38561_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38571.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38569","meta38569",-813514092,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38568","cljs.core.async/t_cljs$core$async38568",-1030494860,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38572","meta38572",491718052,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38571";

cljs.core.async.t_cljs$core$async38571.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30614__auto__,writer__30615__auto__,opt__30616__auto__){
return cljs.core._write.call(null,writer__30615__auto__,"cljs.core.async/t_cljs$core$async38571");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38571 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38571(map_LT___$1,f__$1,ch__$1,meta38569__$1,___$2,fn1__$1,meta38572){
return (new cljs.core.async.t_cljs$core$async38571(map_LT___$1,f__$1,ch__$1,meta38569__$1,___$2,fn1__$1,meta38572));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38571(self__.map_LT_,self__.f,self__.ch,self__.meta38569,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__29996__auto__ = ret;
if(cljs.core.truth_(and__29996__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__29996__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38568.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38568.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38569","meta38569",-813514092,null)], null);
});

cljs.core.async.t_cljs$core$async38568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38568";

cljs.core.async.t_cljs$core$async38568.cljs$lang$ctorPrWriter = (function (this__30614__auto__,writer__30615__auto__,opt__30616__auto__){
return cljs.core._write.call(null,writer__30615__auto__,"cljs.core.async/t_cljs$core$async38568");
});

cljs.core.async.__GT_t_cljs$core$async38568 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38568(map_LT___$1,f__$1,ch__$1,meta38569){
return (new cljs.core.async.t_cljs$core$async38568(map_LT___$1,f__$1,ch__$1,meta38569));
});

}

return (new cljs.core.async.t_cljs$core$async38568(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38577 = (function (map_GT_,f,ch,meta38578){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38578 = meta38578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38579,meta38578__$1){
var self__ = this;
var _38579__$1 = this;
return (new cljs.core.async.t_cljs$core$async38577(self__.map_GT_,self__.f,self__.ch,meta38578__$1));
});

cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38579){
var self__ = this;
var _38579__$1 = this;
return self__.meta38578;
});

cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38578","meta38578",773164419,null)], null);
});

cljs.core.async.t_cljs$core$async38577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38577";

cljs.core.async.t_cljs$core$async38577.cljs$lang$ctorPrWriter = (function (this__30614__auto__,writer__30615__auto__,opt__30616__auto__){
return cljs.core._write.call(null,writer__30615__auto__,"cljs.core.async/t_cljs$core$async38577");
});

cljs.core.async.__GT_t_cljs$core$async38577 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38577(map_GT___$1,f__$1,ch__$1,meta38578){
return (new cljs.core.async.t_cljs$core$async38577(map_GT___$1,f__$1,ch__$1,meta38578));
});

}

return (new cljs.core.async.t_cljs$core$async38577(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38583 = (function (filter_GT_,p,ch,meta38584){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38584 = meta38584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38585,meta38584__$1){
var self__ = this;
var _38585__$1 = this;
return (new cljs.core.async.t_cljs$core$async38583(self__.filter_GT_,self__.p,self__.ch,meta38584__$1));
});

cljs.core.async.t_cljs$core$async38583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38585){
var self__ = this;
var _38585__$1 = this;
return self__.meta38584;
});

cljs.core.async.t_cljs$core$async38583.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38583.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38583.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38583.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38583.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38583.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38583.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38584","meta38584",-333431583,null)], null);
});

cljs.core.async.t_cljs$core$async38583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38583";

cljs.core.async.t_cljs$core$async38583.cljs$lang$ctorPrWriter = (function (this__30614__auto__,writer__30615__auto__,opt__30616__auto__){
return cljs.core._write.call(null,writer__30615__auto__,"cljs.core.async/t_cljs$core$async38583");
});

cljs.core.async.__GT_t_cljs$core$async38583 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38583(filter_GT___$1,p__$1,ch__$1,meta38584){
return (new cljs.core.async.t_cljs$core$async38583(filter_GT___$1,p__$1,ch__$1,meta38584));
});

}

return (new cljs.core.async.t_cljs$core$async38583(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args38586 = [];
var len__31083__auto___38630 = arguments.length;
var i__31084__auto___38631 = (0);
while(true){
if((i__31084__auto___38631 < len__31083__auto___38630)){
args38586.push((arguments[i__31084__auto___38631]));

var G__38632 = (i__31084__auto___38631 + (1));
i__31084__auto___38631 = G__38632;
continue;
} else {
}
break;
}

var G__38588 = args38586.length;
switch (G__38588) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38586.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36362__auto___38634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___38634,out){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___38634,out){
return (function (state_38609){
var state_val_38610 = (state_38609[(1)]);
if((state_val_38610 === (7))){
var inst_38605 = (state_38609[(2)]);
var state_38609__$1 = state_38609;
var statearr_38611_38635 = state_38609__$1;
(statearr_38611_38635[(2)] = inst_38605);

(statearr_38611_38635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38610 === (1))){
var state_38609__$1 = state_38609;
var statearr_38612_38636 = state_38609__$1;
(statearr_38612_38636[(2)] = null);

(statearr_38612_38636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38610 === (4))){
var inst_38591 = (state_38609[(7)]);
var inst_38591__$1 = (state_38609[(2)]);
var inst_38592 = (inst_38591__$1 == null);
var state_38609__$1 = (function (){var statearr_38613 = state_38609;
(statearr_38613[(7)] = inst_38591__$1);

return statearr_38613;
})();
if(cljs.core.truth_(inst_38592)){
var statearr_38614_38637 = state_38609__$1;
(statearr_38614_38637[(1)] = (5));

} else {
var statearr_38615_38638 = state_38609__$1;
(statearr_38615_38638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38610 === (6))){
var inst_38591 = (state_38609[(7)]);
var inst_38596 = p.call(null,inst_38591);
var state_38609__$1 = state_38609;
if(cljs.core.truth_(inst_38596)){
var statearr_38616_38639 = state_38609__$1;
(statearr_38616_38639[(1)] = (8));

} else {
var statearr_38617_38640 = state_38609__$1;
(statearr_38617_38640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38610 === (3))){
var inst_38607 = (state_38609[(2)]);
var state_38609__$1 = state_38609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38609__$1,inst_38607);
} else {
if((state_val_38610 === (2))){
var state_38609__$1 = state_38609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38609__$1,(4),ch);
} else {
if((state_val_38610 === (11))){
var inst_38599 = (state_38609[(2)]);
var state_38609__$1 = state_38609;
var statearr_38618_38641 = state_38609__$1;
(statearr_38618_38641[(2)] = inst_38599);

(statearr_38618_38641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38610 === (9))){
var state_38609__$1 = state_38609;
var statearr_38619_38642 = state_38609__$1;
(statearr_38619_38642[(2)] = null);

(statearr_38619_38642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38610 === (5))){
var inst_38594 = cljs.core.async.close_BANG_.call(null,out);
var state_38609__$1 = state_38609;
var statearr_38620_38643 = state_38609__$1;
(statearr_38620_38643[(2)] = inst_38594);

(statearr_38620_38643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38610 === (10))){
var inst_38602 = (state_38609[(2)]);
var state_38609__$1 = (function (){var statearr_38621 = state_38609;
(statearr_38621[(8)] = inst_38602);

return statearr_38621;
})();
var statearr_38622_38644 = state_38609__$1;
(statearr_38622_38644[(2)] = null);

(statearr_38622_38644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38610 === (8))){
var inst_38591 = (state_38609[(7)]);
var state_38609__$1 = state_38609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38609__$1,(11),out,inst_38591);
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
});})(c__36362__auto___38634,out))
;
return ((function (switch__36250__auto__,c__36362__auto___38634,out){
return (function() {
var cljs$core$async$state_machine__36251__auto__ = null;
var cljs$core$async$state_machine__36251__auto____0 = (function (){
var statearr_38626 = [null,null,null,null,null,null,null,null,null];
(statearr_38626[(0)] = cljs$core$async$state_machine__36251__auto__);

(statearr_38626[(1)] = (1));

return statearr_38626;
});
var cljs$core$async$state_machine__36251__auto____1 = (function (state_38609){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_38609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e38627){if((e38627 instanceof Object)){
var ex__36254__auto__ = e38627;
var statearr_38628_38645 = state_38609;
(statearr_38628_38645[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38646 = state_38609;
state_38609 = G__38646;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$state_machine__36251__auto__ = function(state_38609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36251__auto____1.call(this,state_38609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36251__auto____0;
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36251__auto____1;
return cljs$core$async$state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___38634,out))
})();
var state__36364__auto__ = (function (){var statearr_38629 = f__36363__auto__.call(null);
(statearr_38629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___38634);

return statearr_38629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___38634,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38647 = [];
var len__31083__auto___38650 = arguments.length;
var i__31084__auto___38651 = (0);
while(true){
if((i__31084__auto___38651 < len__31083__auto___38650)){
args38647.push((arguments[i__31084__auto___38651]));

var G__38652 = (i__31084__auto___38651 + (1));
i__31084__auto___38651 = G__38652;
continue;
} else {
}
break;
}

var G__38649 = args38647.length;
switch (G__38649) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38647.length)].join('')));

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
var c__36362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto__){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto__){
return (function (state_38819){
var state_val_38820 = (state_38819[(1)]);
if((state_val_38820 === (7))){
var inst_38815 = (state_38819[(2)]);
var state_38819__$1 = state_38819;
var statearr_38821_38862 = state_38819__$1;
(statearr_38821_38862[(2)] = inst_38815);

(statearr_38821_38862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (20))){
var inst_38785 = (state_38819[(7)]);
var inst_38796 = (state_38819[(2)]);
var inst_38797 = cljs.core.next.call(null,inst_38785);
var inst_38771 = inst_38797;
var inst_38772 = null;
var inst_38773 = (0);
var inst_38774 = (0);
var state_38819__$1 = (function (){var statearr_38822 = state_38819;
(statearr_38822[(8)] = inst_38772);

(statearr_38822[(9)] = inst_38796);

(statearr_38822[(10)] = inst_38774);

(statearr_38822[(11)] = inst_38773);

(statearr_38822[(12)] = inst_38771);

return statearr_38822;
})();
var statearr_38823_38863 = state_38819__$1;
(statearr_38823_38863[(2)] = null);

(statearr_38823_38863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (1))){
var state_38819__$1 = state_38819;
var statearr_38824_38864 = state_38819__$1;
(statearr_38824_38864[(2)] = null);

(statearr_38824_38864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (4))){
var inst_38760 = (state_38819[(13)]);
var inst_38760__$1 = (state_38819[(2)]);
var inst_38761 = (inst_38760__$1 == null);
var state_38819__$1 = (function (){var statearr_38825 = state_38819;
(statearr_38825[(13)] = inst_38760__$1);

return statearr_38825;
})();
if(cljs.core.truth_(inst_38761)){
var statearr_38826_38865 = state_38819__$1;
(statearr_38826_38865[(1)] = (5));

} else {
var statearr_38827_38866 = state_38819__$1;
(statearr_38827_38866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (15))){
var state_38819__$1 = state_38819;
var statearr_38831_38867 = state_38819__$1;
(statearr_38831_38867[(2)] = null);

(statearr_38831_38867[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (21))){
var state_38819__$1 = state_38819;
var statearr_38832_38868 = state_38819__$1;
(statearr_38832_38868[(2)] = null);

(statearr_38832_38868[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (13))){
var inst_38772 = (state_38819[(8)]);
var inst_38774 = (state_38819[(10)]);
var inst_38773 = (state_38819[(11)]);
var inst_38771 = (state_38819[(12)]);
var inst_38781 = (state_38819[(2)]);
var inst_38782 = (inst_38774 + (1));
var tmp38828 = inst_38772;
var tmp38829 = inst_38773;
var tmp38830 = inst_38771;
var inst_38771__$1 = tmp38830;
var inst_38772__$1 = tmp38828;
var inst_38773__$1 = tmp38829;
var inst_38774__$1 = inst_38782;
var state_38819__$1 = (function (){var statearr_38833 = state_38819;
(statearr_38833[(8)] = inst_38772__$1);

(statearr_38833[(10)] = inst_38774__$1);

(statearr_38833[(14)] = inst_38781);

(statearr_38833[(11)] = inst_38773__$1);

(statearr_38833[(12)] = inst_38771__$1);

return statearr_38833;
})();
var statearr_38834_38869 = state_38819__$1;
(statearr_38834_38869[(2)] = null);

(statearr_38834_38869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (22))){
var state_38819__$1 = state_38819;
var statearr_38835_38870 = state_38819__$1;
(statearr_38835_38870[(2)] = null);

(statearr_38835_38870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (6))){
var inst_38760 = (state_38819[(13)]);
var inst_38769 = f.call(null,inst_38760);
var inst_38770 = cljs.core.seq.call(null,inst_38769);
var inst_38771 = inst_38770;
var inst_38772 = null;
var inst_38773 = (0);
var inst_38774 = (0);
var state_38819__$1 = (function (){var statearr_38836 = state_38819;
(statearr_38836[(8)] = inst_38772);

(statearr_38836[(10)] = inst_38774);

(statearr_38836[(11)] = inst_38773);

(statearr_38836[(12)] = inst_38771);

return statearr_38836;
})();
var statearr_38837_38871 = state_38819__$1;
(statearr_38837_38871[(2)] = null);

(statearr_38837_38871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (17))){
var inst_38785 = (state_38819[(7)]);
var inst_38789 = cljs.core.chunk_first.call(null,inst_38785);
var inst_38790 = cljs.core.chunk_rest.call(null,inst_38785);
var inst_38791 = cljs.core.count.call(null,inst_38789);
var inst_38771 = inst_38790;
var inst_38772 = inst_38789;
var inst_38773 = inst_38791;
var inst_38774 = (0);
var state_38819__$1 = (function (){var statearr_38838 = state_38819;
(statearr_38838[(8)] = inst_38772);

(statearr_38838[(10)] = inst_38774);

(statearr_38838[(11)] = inst_38773);

(statearr_38838[(12)] = inst_38771);

return statearr_38838;
})();
var statearr_38839_38872 = state_38819__$1;
(statearr_38839_38872[(2)] = null);

(statearr_38839_38872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (3))){
var inst_38817 = (state_38819[(2)]);
var state_38819__$1 = state_38819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38819__$1,inst_38817);
} else {
if((state_val_38820 === (12))){
var inst_38805 = (state_38819[(2)]);
var state_38819__$1 = state_38819;
var statearr_38840_38873 = state_38819__$1;
(statearr_38840_38873[(2)] = inst_38805);

(statearr_38840_38873[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (2))){
var state_38819__$1 = state_38819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38819__$1,(4),in$);
} else {
if((state_val_38820 === (23))){
var inst_38813 = (state_38819[(2)]);
var state_38819__$1 = state_38819;
var statearr_38841_38874 = state_38819__$1;
(statearr_38841_38874[(2)] = inst_38813);

(statearr_38841_38874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (19))){
var inst_38800 = (state_38819[(2)]);
var state_38819__$1 = state_38819;
var statearr_38842_38875 = state_38819__$1;
(statearr_38842_38875[(2)] = inst_38800);

(statearr_38842_38875[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (11))){
var inst_38785 = (state_38819[(7)]);
var inst_38771 = (state_38819[(12)]);
var inst_38785__$1 = cljs.core.seq.call(null,inst_38771);
var state_38819__$1 = (function (){var statearr_38843 = state_38819;
(statearr_38843[(7)] = inst_38785__$1);

return statearr_38843;
})();
if(inst_38785__$1){
var statearr_38844_38876 = state_38819__$1;
(statearr_38844_38876[(1)] = (14));

} else {
var statearr_38845_38877 = state_38819__$1;
(statearr_38845_38877[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (9))){
var inst_38807 = (state_38819[(2)]);
var inst_38808 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38819__$1 = (function (){var statearr_38846 = state_38819;
(statearr_38846[(15)] = inst_38807);

return statearr_38846;
})();
if(cljs.core.truth_(inst_38808)){
var statearr_38847_38878 = state_38819__$1;
(statearr_38847_38878[(1)] = (21));

} else {
var statearr_38848_38879 = state_38819__$1;
(statearr_38848_38879[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (5))){
var inst_38763 = cljs.core.async.close_BANG_.call(null,out);
var state_38819__$1 = state_38819;
var statearr_38849_38880 = state_38819__$1;
(statearr_38849_38880[(2)] = inst_38763);

(statearr_38849_38880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (14))){
var inst_38785 = (state_38819[(7)]);
var inst_38787 = cljs.core.chunked_seq_QMARK_.call(null,inst_38785);
var state_38819__$1 = state_38819;
if(inst_38787){
var statearr_38850_38881 = state_38819__$1;
(statearr_38850_38881[(1)] = (17));

} else {
var statearr_38851_38882 = state_38819__$1;
(statearr_38851_38882[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (16))){
var inst_38803 = (state_38819[(2)]);
var state_38819__$1 = state_38819;
var statearr_38852_38883 = state_38819__$1;
(statearr_38852_38883[(2)] = inst_38803);

(statearr_38852_38883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38820 === (10))){
var inst_38772 = (state_38819[(8)]);
var inst_38774 = (state_38819[(10)]);
var inst_38779 = cljs.core._nth.call(null,inst_38772,inst_38774);
var state_38819__$1 = state_38819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38819__$1,(13),out,inst_38779);
} else {
if((state_val_38820 === (18))){
var inst_38785 = (state_38819[(7)]);
var inst_38794 = cljs.core.first.call(null,inst_38785);
var state_38819__$1 = state_38819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38819__$1,(20),out,inst_38794);
} else {
if((state_val_38820 === (8))){
var inst_38774 = (state_38819[(10)]);
var inst_38773 = (state_38819[(11)]);
var inst_38776 = (inst_38774 < inst_38773);
var inst_38777 = inst_38776;
var state_38819__$1 = state_38819;
if(cljs.core.truth_(inst_38777)){
var statearr_38853_38884 = state_38819__$1;
(statearr_38853_38884[(1)] = (10));

} else {
var statearr_38854_38885 = state_38819__$1;
(statearr_38854_38885[(1)] = (11));

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
});})(c__36362__auto__))
;
return ((function (switch__36250__auto__,c__36362__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36251__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36251__auto____0 = (function (){
var statearr_38858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38858[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36251__auto__);

(statearr_38858[(1)] = (1));

return statearr_38858;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36251__auto____1 = (function (state_38819){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_38819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e38859){if((e38859 instanceof Object)){
var ex__36254__auto__ = e38859;
var statearr_38860_38886 = state_38819;
(statearr_38860_38886[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38887 = state_38819;
state_38819 = G__38887;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36251__auto__ = function(state_38819){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36251__auto____1.call(this,state_38819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36251__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36251__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto__))
})();
var state__36364__auto__ = (function (){var statearr_38861 = f__36363__auto__.call(null);
(statearr_38861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto__);

return statearr_38861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto__))
);

return c__36362__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args38888 = [];
var len__31083__auto___38891 = arguments.length;
var i__31084__auto___38892 = (0);
while(true){
if((i__31084__auto___38892 < len__31083__auto___38891)){
args38888.push((arguments[i__31084__auto___38892]));

var G__38893 = (i__31084__auto___38892 + (1));
i__31084__auto___38892 = G__38893;
continue;
} else {
}
break;
}

var G__38890 = args38888.length;
switch (G__38890) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38888.length)].join('')));

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
var args38895 = [];
var len__31083__auto___38898 = arguments.length;
var i__31084__auto___38899 = (0);
while(true){
if((i__31084__auto___38899 < len__31083__auto___38898)){
args38895.push((arguments[i__31084__auto___38899]));

var G__38900 = (i__31084__auto___38899 + (1));
i__31084__auto___38899 = G__38900;
continue;
} else {
}
break;
}

var G__38897 = args38895.length;
switch (G__38897) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38895.length)].join('')));

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
var args38902 = [];
var len__31083__auto___38953 = arguments.length;
var i__31084__auto___38954 = (0);
while(true){
if((i__31084__auto___38954 < len__31083__auto___38953)){
args38902.push((arguments[i__31084__auto___38954]));

var G__38955 = (i__31084__auto___38954 + (1));
i__31084__auto___38954 = G__38955;
continue;
} else {
}
break;
}

var G__38904 = args38902.length;
switch (G__38904) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38902.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36362__auto___38957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___38957,out){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___38957,out){
return (function (state_38928){
var state_val_38929 = (state_38928[(1)]);
if((state_val_38929 === (7))){
var inst_38923 = (state_38928[(2)]);
var state_38928__$1 = state_38928;
var statearr_38930_38958 = state_38928__$1;
(statearr_38930_38958[(2)] = inst_38923);

(statearr_38930_38958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38929 === (1))){
var inst_38905 = null;
var state_38928__$1 = (function (){var statearr_38931 = state_38928;
(statearr_38931[(7)] = inst_38905);

return statearr_38931;
})();
var statearr_38932_38959 = state_38928__$1;
(statearr_38932_38959[(2)] = null);

(statearr_38932_38959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38929 === (4))){
var inst_38908 = (state_38928[(8)]);
var inst_38908__$1 = (state_38928[(2)]);
var inst_38909 = (inst_38908__$1 == null);
var inst_38910 = cljs.core.not.call(null,inst_38909);
var state_38928__$1 = (function (){var statearr_38933 = state_38928;
(statearr_38933[(8)] = inst_38908__$1);

return statearr_38933;
})();
if(inst_38910){
var statearr_38934_38960 = state_38928__$1;
(statearr_38934_38960[(1)] = (5));

} else {
var statearr_38935_38961 = state_38928__$1;
(statearr_38935_38961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38929 === (6))){
var state_38928__$1 = state_38928;
var statearr_38936_38962 = state_38928__$1;
(statearr_38936_38962[(2)] = null);

(statearr_38936_38962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38929 === (3))){
var inst_38925 = (state_38928[(2)]);
var inst_38926 = cljs.core.async.close_BANG_.call(null,out);
var state_38928__$1 = (function (){var statearr_38937 = state_38928;
(statearr_38937[(9)] = inst_38925);

return statearr_38937;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38928__$1,inst_38926);
} else {
if((state_val_38929 === (2))){
var state_38928__$1 = state_38928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38928__$1,(4),ch);
} else {
if((state_val_38929 === (11))){
var inst_38908 = (state_38928[(8)]);
var inst_38917 = (state_38928[(2)]);
var inst_38905 = inst_38908;
var state_38928__$1 = (function (){var statearr_38938 = state_38928;
(statearr_38938[(7)] = inst_38905);

(statearr_38938[(10)] = inst_38917);

return statearr_38938;
})();
var statearr_38939_38963 = state_38928__$1;
(statearr_38939_38963[(2)] = null);

(statearr_38939_38963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38929 === (9))){
var inst_38908 = (state_38928[(8)]);
var state_38928__$1 = state_38928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38928__$1,(11),out,inst_38908);
} else {
if((state_val_38929 === (5))){
var inst_38908 = (state_38928[(8)]);
var inst_38905 = (state_38928[(7)]);
var inst_38912 = cljs.core._EQ_.call(null,inst_38908,inst_38905);
var state_38928__$1 = state_38928;
if(inst_38912){
var statearr_38941_38964 = state_38928__$1;
(statearr_38941_38964[(1)] = (8));

} else {
var statearr_38942_38965 = state_38928__$1;
(statearr_38942_38965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38929 === (10))){
var inst_38920 = (state_38928[(2)]);
var state_38928__$1 = state_38928;
var statearr_38943_38966 = state_38928__$1;
(statearr_38943_38966[(2)] = inst_38920);

(statearr_38943_38966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38929 === (8))){
var inst_38905 = (state_38928[(7)]);
var tmp38940 = inst_38905;
var inst_38905__$1 = tmp38940;
var state_38928__$1 = (function (){var statearr_38944 = state_38928;
(statearr_38944[(7)] = inst_38905__$1);

return statearr_38944;
})();
var statearr_38945_38967 = state_38928__$1;
(statearr_38945_38967[(2)] = null);

(statearr_38945_38967[(1)] = (2));


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
});})(c__36362__auto___38957,out))
;
return ((function (switch__36250__auto__,c__36362__auto___38957,out){
return (function() {
var cljs$core$async$state_machine__36251__auto__ = null;
var cljs$core$async$state_machine__36251__auto____0 = (function (){
var statearr_38949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38949[(0)] = cljs$core$async$state_machine__36251__auto__);

(statearr_38949[(1)] = (1));

return statearr_38949;
});
var cljs$core$async$state_machine__36251__auto____1 = (function (state_38928){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_38928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e38950){if((e38950 instanceof Object)){
var ex__36254__auto__ = e38950;
var statearr_38951_38968 = state_38928;
(statearr_38951_38968[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38969 = state_38928;
state_38928 = G__38969;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$state_machine__36251__auto__ = function(state_38928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36251__auto____1.call(this,state_38928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36251__auto____0;
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36251__auto____1;
return cljs$core$async$state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___38957,out))
})();
var state__36364__auto__ = (function (){var statearr_38952 = f__36363__auto__.call(null);
(statearr_38952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___38957);

return statearr_38952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___38957,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args38970 = [];
var len__31083__auto___39040 = arguments.length;
var i__31084__auto___39041 = (0);
while(true){
if((i__31084__auto___39041 < len__31083__auto___39040)){
args38970.push((arguments[i__31084__auto___39041]));

var G__39042 = (i__31084__auto___39041 + (1));
i__31084__auto___39041 = G__39042;
continue;
} else {
}
break;
}

var G__38972 = args38970.length;
switch (G__38972) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38970.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36362__auto___39044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___39044,out){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___39044,out){
return (function (state_39010){
var state_val_39011 = (state_39010[(1)]);
if((state_val_39011 === (7))){
var inst_39006 = (state_39010[(2)]);
var state_39010__$1 = state_39010;
var statearr_39012_39045 = state_39010__$1;
(statearr_39012_39045[(2)] = inst_39006);

(statearr_39012_39045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (1))){
var inst_38973 = (new Array(n));
var inst_38974 = inst_38973;
var inst_38975 = (0);
var state_39010__$1 = (function (){var statearr_39013 = state_39010;
(statearr_39013[(7)] = inst_38974);

(statearr_39013[(8)] = inst_38975);

return statearr_39013;
})();
var statearr_39014_39046 = state_39010__$1;
(statearr_39014_39046[(2)] = null);

(statearr_39014_39046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (4))){
var inst_38978 = (state_39010[(9)]);
var inst_38978__$1 = (state_39010[(2)]);
var inst_38979 = (inst_38978__$1 == null);
var inst_38980 = cljs.core.not.call(null,inst_38979);
var state_39010__$1 = (function (){var statearr_39015 = state_39010;
(statearr_39015[(9)] = inst_38978__$1);

return statearr_39015;
})();
if(inst_38980){
var statearr_39016_39047 = state_39010__$1;
(statearr_39016_39047[(1)] = (5));

} else {
var statearr_39017_39048 = state_39010__$1;
(statearr_39017_39048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (15))){
var inst_39000 = (state_39010[(2)]);
var state_39010__$1 = state_39010;
var statearr_39018_39049 = state_39010__$1;
(statearr_39018_39049[(2)] = inst_39000);

(statearr_39018_39049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (13))){
var state_39010__$1 = state_39010;
var statearr_39019_39050 = state_39010__$1;
(statearr_39019_39050[(2)] = null);

(statearr_39019_39050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (6))){
var inst_38975 = (state_39010[(8)]);
var inst_38996 = (inst_38975 > (0));
var state_39010__$1 = state_39010;
if(cljs.core.truth_(inst_38996)){
var statearr_39020_39051 = state_39010__$1;
(statearr_39020_39051[(1)] = (12));

} else {
var statearr_39021_39052 = state_39010__$1;
(statearr_39021_39052[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (3))){
var inst_39008 = (state_39010[(2)]);
var state_39010__$1 = state_39010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39010__$1,inst_39008);
} else {
if((state_val_39011 === (12))){
var inst_38974 = (state_39010[(7)]);
var inst_38998 = cljs.core.vec.call(null,inst_38974);
var state_39010__$1 = state_39010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39010__$1,(15),out,inst_38998);
} else {
if((state_val_39011 === (2))){
var state_39010__$1 = state_39010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39010__$1,(4),ch);
} else {
if((state_val_39011 === (11))){
var inst_38990 = (state_39010[(2)]);
var inst_38991 = (new Array(n));
var inst_38974 = inst_38991;
var inst_38975 = (0);
var state_39010__$1 = (function (){var statearr_39022 = state_39010;
(statearr_39022[(7)] = inst_38974);

(statearr_39022[(8)] = inst_38975);

(statearr_39022[(10)] = inst_38990);

return statearr_39022;
})();
var statearr_39023_39053 = state_39010__$1;
(statearr_39023_39053[(2)] = null);

(statearr_39023_39053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (9))){
var inst_38974 = (state_39010[(7)]);
var inst_38988 = cljs.core.vec.call(null,inst_38974);
var state_39010__$1 = state_39010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39010__$1,(11),out,inst_38988);
} else {
if((state_val_39011 === (5))){
var inst_38983 = (state_39010[(11)]);
var inst_38974 = (state_39010[(7)]);
var inst_38975 = (state_39010[(8)]);
var inst_38978 = (state_39010[(9)]);
var inst_38982 = (inst_38974[inst_38975] = inst_38978);
var inst_38983__$1 = (inst_38975 + (1));
var inst_38984 = (inst_38983__$1 < n);
var state_39010__$1 = (function (){var statearr_39024 = state_39010;
(statearr_39024[(11)] = inst_38983__$1);

(statearr_39024[(12)] = inst_38982);

return statearr_39024;
})();
if(cljs.core.truth_(inst_38984)){
var statearr_39025_39054 = state_39010__$1;
(statearr_39025_39054[(1)] = (8));

} else {
var statearr_39026_39055 = state_39010__$1;
(statearr_39026_39055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (14))){
var inst_39003 = (state_39010[(2)]);
var inst_39004 = cljs.core.async.close_BANG_.call(null,out);
var state_39010__$1 = (function (){var statearr_39028 = state_39010;
(statearr_39028[(13)] = inst_39003);

return statearr_39028;
})();
var statearr_39029_39056 = state_39010__$1;
(statearr_39029_39056[(2)] = inst_39004);

(statearr_39029_39056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (10))){
var inst_38994 = (state_39010[(2)]);
var state_39010__$1 = state_39010;
var statearr_39030_39057 = state_39010__$1;
(statearr_39030_39057[(2)] = inst_38994);

(statearr_39030_39057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39011 === (8))){
var inst_38983 = (state_39010[(11)]);
var inst_38974 = (state_39010[(7)]);
var tmp39027 = inst_38974;
var inst_38974__$1 = tmp39027;
var inst_38975 = inst_38983;
var state_39010__$1 = (function (){var statearr_39031 = state_39010;
(statearr_39031[(7)] = inst_38974__$1);

(statearr_39031[(8)] = inst_38975);

return statearr_39031;
})();
var statearr_39032_39058 = state_39010__$1;
(statearr_39032_39058[(2)] = null);

(statearr_39032_39058[(1)] = (2));


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
});})(c__36362__auto___39044,out))
;
return ((function (switch__36250__auto__,c__36362__auto___39044,out){
return (function() {
var cljs$core$async$state_machine__36251__auto__ = null;
var cljs$core$async$state_machine__36251__auto____0 = (function (){
var statearr_39036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39036[(0)] = cljs$core$async$state_machine__36251__auto__);

(statearr_39036[(1)] = (1));

return statearr_39036;
});
var cljs$core$async$state_machine__36251__auto____1 = (function (state_39010){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_39010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e39037){if((e39037 instanceof Object)){
var ex__36254__auto__ = e39037;
var statearr_39038_39059 = state_39010;
(statearr_39038_39059[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39060 = state_39010;
state_39010 = G__39060;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$state_machine__36251__auto__ = function(state_39010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36251__auto____1.call(this,state_39010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36251__auto____0;
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36251__auto____1;
return cljs$core$async$state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___39044,out))
})();
var state__36364__auto__ = (function (){var statearr_39039 = f__36363__auto__.call(null);
(statearr_39039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___39044);

return statearr_39039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___39044,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args39061 = [];
var len__31083__auto___39135 = arguments.length;
var i__31084__auto___39136 = (0);
while(true){
if((i__31084__auto___39136 < len__31083__auto___39135)){
args39061.push((arguments[i__31084__auto___39136]));

var G__39137 = (i__31084__auto___39136 + (1));
i__31084__auto___39136 = G__39137;
continue;
} else {
}
break;
}

var G__39063 = args39061.length;
switch (G__39063) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39061.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36362__auto___39139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___39139,out){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___39139,out){
return (function (state_39105){
var state_val_39106 = (state_39105[(1)]);
if((state_val_39106 === (7))){
var inst_39101 = (state_39105[(2)]);
var state_39105__$1 = state_39105;
var statearr_39107_39140 = state_39105__$1;
(statearr_39107_39140[(2)] = inst_39101);

(statearr_39107_39140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (1))){
var inst_39064 = [];
var inst_39065 = inst_39064;
var inst_39066 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39105__$1 = (function (){var statearr_39108 = state_39105;
(statearr_39108[(7)] = inst_39066);

(statearr_39108[(8)] = inst_39065);

return statearr_39108;
})();
var statearr_39109_39141 = state_39105__$1;
(statearr_39109_39141[(2)] = null);

(statearr_39109_39141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (4))){
var inst_39069 = (state_39105[(9)]);
var inst_39069__$1 = (state_39105[(2)]);
var inst_39070 = (inst_39069__$1 == null);
var inst_39071 = cljs.core.not.call(null,inst_39070);
var state_39105__$1 = (function (){var statearr_39110 = state_39105;
(statearr_39110[(9)] = inst_39069__$1);

return statearr_39110;
})();
if(inst_39071){
var statearr_39111_39142 = state_39105__$1;
(statearr_39111_39142[(1)] = (5));

} else {
var statearr_39112_39143 = state_39105__$1;
(statearr_39112_39143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (15))){
var inst_39095 = (state_39105[(2)]);
var state_39105__$1 = state_39105;
var statearr_39113_39144 = state_39105__$1;
(statearr_39113_39144[(2)] = inst_39095);

(statearr_39113_39144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (13))){
var state_39105__$1 = state_39105;
var statearr_39114_39145 = state_39105__$1;
(statearr_39114_39145[(2)] = null);

(statearr_39114_39145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (6))){
var inst_39065 = (state_39105[(8)]);
var inst_39090 = inst_39065.length;
var inst_39091 = (inst_39090 > (0));
var state_39105__$1 = state_39105;
if(cljs.core.truth_(inst_39091)){
var statearr_39115_39146 = state_39105__$1;
(statearr_39115_39146[(1)] = (12));

} else {
var statearr_39116_39147 = state_39105__$1;
(statearr_39116_39147[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (3))){
var inst_39103 = (state_39105[(2)]);
var state_39105__$1 = state_39105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39105__$1,inst_39103);
} else {
if((state_val_39106 === (12))){
var inst_39065 = (state_39105[(8)]);
var inst_39093 = cljs.core.vec.call(null,inst_39065);
var state_39105__$1 = state_39105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39105__$1,(15),out,inst_39093);
} else {
if((state_val_39106 === (2))){
var state_39105__$1 = state_39105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39105__$1,(4),ch);
} else {
if((state_val_39106 === (11))){
var inst_39069 = (state_39105[(9)]);
var inst_39073 = (state_39105[(10)]);
var inst_39083 = (state_39105[(2)]);
var inst_39084 = [];
var inst_39085 = inst_39084.push(inst_39069);
var inst_39065 = inst_39084;
var inst_39066 = inst_39073;
var state_39105__$1 = (function (){var statearr_39117 = state_39105;
(statearr_39117[(7)] = inst_39066);

(statearr_39117[(11)] = inst_39085);

(statearr_39117[(12)] = inst_39083);

(statearr_39117[(8)] = inst_39065);

return statearr_39117;
})();
var statearr_39118_39148 = state_39105__$1;
(statearr_39118_39148[(2)] = null);

(statearr_39118_39148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (9))){
var inst_39065 = (state_39105[(8)]);
var inst_39081 = cljs.core.vec.call(null,inst_39065);
var state_39105__$1 = state_39105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39105__$1,(11),out,inst_39081);
} else {
if((state_val_39106 === (5))){
var inst_39069 = (state_39105[(9)]);
var inst_39066 = (state_39105[(7)]);
var inst_39073 = (state_39105[(10)]);
var inst_39073__$1 = f.call(null,inst_39069);
var inst_39074 = cljs.core._EQ_.call(null,inst_39073__$1,inst_39066);
var inst_39075 = cljs.core.keyword_identical_QMARK_.call(null,inst_39066,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39076 = (inst_39074) || (inst_39075);
var state_39105__$1 = (function (){var statearr_39119 = state_39105;
(statearr_39119[(10)] = inst_39073__$1);

return statearr_39119;
})();
if(cljs.core.truth_(inst_39076)){
var statearr_39120_39149 = state_39105__$1;
(statearr_39120_39149[(1)] = (8));

} else {
var statearr_39121_39150 = state_39105__$1;
(statearr_39121_39150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (14))){
var inst_39098 = (state_39105[(2)]);
var inst_39099 = cljs.core.async.close_BANG_.call(null,out);
var state_39105__$1 = (function (){var statearr_39123 = state_39105;
(statearr_39123[(13)] = inst_39098);

return statearr_39123;
})();
var statearr_39124_39151 = state_39105__$1;
(statearr_39124_39151[(2)] = inst_39099);

(statearr_39124_39151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (10))){
var inst_39088 = (state_39105[(2)]);
var state_39105__$1 = state_39105;
var statearr_39125_39152 = state_39105__$1;
(statearr_39125_39152[(2)] = inst_39088);

(statearr_39125_39152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39106 === (8))){
var inst_39069 = (state_39105[(9)]);
var inst_39065 = (state_39105[(8)]);
var inst_39073 = (state_39105[(10)]);
var inst_39078 = inst_39065.push(inst_39069);
var tmp39122 = inst_39065;
var inst_39065__$1 = tmp39122;
var inst_39066 = inst_39073;
var state_39105__$1 = (function (){var statearr_39126 = state_39105;
(statearr_39126[(7)] = inst_39066);

(statearr_39126[(14)] = inst_39078);

(statearr_39126[(8)] = inst_39065__$1);

return statearr_39126;
})();
var statearr_39127_39153 = state_39105__$1;
(statearr_39127_39153[(2)] = null);

(statearr_39127_39153[(1)] = (2));


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
});})(c__36362__auto___39139,out))
;
return ((function (switch__36250__auto__,c__36362__auto___39139,out){
return (function() {
var cljs$core$async$state_machine__36251__auto__ = null;
var cljs$core$async$state_machine__36251__auto____0 = (function (){
var statearr_39131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39131[(0)] = cljs$core$async$state_machine__36251__auto__);

(statearr_39131[(1)] = (1));

return statearr_39131;
});
var cljs$core$async$state_machine__36251__auto____1 = (function (state_39105){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_39105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e39132){if((e39132 instanceof Object)){
var ex__36254__auto__ = e39132;
var statearr_39133_39154 = state_39105;
(statearr_39133_39154[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39155 = state_39105;
state_39105 = G__39155;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
cljs$core$async$state_machine__36251__auto__ = function(state_39105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36251__auto____1.call(this,state_39105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36251__auto____0;
cljs$core$async$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36251__auto____1;
return cljs$core$async$state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___39139,out))
})();
var state__36364__auto__ = (function (){var statearr_39134 = f__36363__auto__.call(null);
(statearr_39134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___39139);

return statearr_39134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___39139,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1470795671312