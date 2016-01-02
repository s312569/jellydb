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
var args34207 = [];
var len__30571__auto___34213 = arguments.length;
var i__30572__auto___34214 = (0);
while(true){
if((i__30572__auto___34214 < len__30571__auto___34213)){
args34207.push((arguments[i__30572__auto___34214]));

var G__34215 = (i__30572__auto___34214 + (1));
i__30572__auto___34214 = G__34215;
continue;
} else {
}
break;
}

var G__34209 = args34207.length;
switch (G__34209) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34207.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34210 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34210 = (function (f,blockable,meta34211){
this.f = f;
this.blockable = blockable;
this.meta34211 = meta34211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34212,meta34211__$1){
var self__ = this;
var _34212__$1 = this;
return (new cljs.core.async.t_cljs$core$async34210(self__.f,self__.blockable,meta34211__$1));
});

cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34212){
var self__ = this;
var _34212__$1 = this;
return self__.meta34211;
});

cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34210.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34211","meta34211",-365008376,null)], null);
});

cljs.core.async.t_cljs$core$async34210.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34210";

cljs.core.async.t_cljs$core$async34210.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cljs.core.async/t_cljs$core$async34210");
});

cljs.core.async.__GT_t_cljs$core$async34210 = (function cljs$core$async$__GT_t_cljs$core$async34210(f__$1,blockable__$1,meta34211){
return (new cljs.core.async.t_cljs$core$async34210(f__$1,blockable__$1,meta34211));
});

}

return (new cljs.core.async.t_cljs$core$async34210(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args34219 = [];
var len__30571__auto___34222 = arguments.length;
var i__30572__auto___34223 = (0);
while(true){
if((i__30572__auto___34223 < len__30571__auto___34222)){
args34219.push((arguments[i__30572__auto___34223]));

var G__34224 = (i__30572__auto___34223 + (1));
i__30572__auto___34223 = G__34224;
continue;
} else {
}
break;
}

var G__34221 = args34219.length;
switch (G__34221) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34219.length)].join('')));

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
var args34226 = [];
var len__30571__auto___34229 = arguments.length;
var i__30572__auto___34230 = (0);
while(true){
if((i__30572__auto___34230 < len__30571__auto___34229)){
args34226.push((arguments[i__30572__auto___34230]));

var G__34231 = (i__30572__auto___34230 + (1));
i__30572__auto___34230 = G__34231;
continue;
} else {
}
break;
}

var G__34228 = args34226.length;
switch (G__34228) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34226.length)].join('')));

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
var args34233 = [];
var len__30571__auto___34236 = arguments.length;
var i__30572__auto___34237 = (0);
while(true){
if((i__30572__auto___34237 < len__30571__auto___34236)){
args34233.push((arguments[i__30572__auto___34237]));

var G__34238 = (i__30572__auto___34237 + (1));
i__30572__auto___34237 = G__34238;
continue;
} else {
}
break;
}

var G__34235 = args34233.length;
switch (G__34235) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34233.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34240 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34240);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34240,ret){
return (function (){
return fn1.call(null,val_34240);
});})(val_34240,ret))
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
var args34241 = [];
var len__30571__auto___34244 = arguments.length;
var i__30572__auto___34245 = (0);
while(true){
if((i__30572__auto___34245 < len__30571__auto___34244)){
args34241.push((arguments[i__30572__auto___34245]));

var G__34246 = (i__30572__auto___34245 + (1));
i__30572__auto___34245 = G__34246;
continue;
} else {
}
break;
}

var G__34243 = args34241.length;
switch (G__34243) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34241.length)].join('')));

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
var n__30416__auto___34248 = n;
var x_34249 = (0);
while(true){
if((x_34249 < n__30416__auto___34248)){
(a[x_34249] = (0));

var G__34250 = (x_34249 + (1));
x_34249 = G__34250;
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

var G__34251 = (i + (1));
i = G__34251;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34255 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34255 = (function (alt_flag,flag,meta34256){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta34256 = meta34256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34257,meta34256__$1){
var self__ = this;
var _34257__$1 = this;
return (new cljs.core.async.t_cljs$core$async34255(self__.alt_flag,self__.flag,meta34256__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34257){
var self__ = this;
var _34257__$1 = this;
return self__.meta34256;
});})(flag))
;

cljs.core.async.t_cljs$core$async34255.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34255.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34255.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34255.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34255.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34256","meta34256",1695619269,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34255";

cljs.core.async.t_cljs$core$async34255.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cljs.core.async/t_cljs$core$async34255");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34255 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34255(alt_flag__$1,flag__$1,meta34256){
return (new cljs.core.async.t_cljs$core$async34255(alt_flag__$1,flag__$1,meta34256));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34255(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34261 = (function (alt_handler,flag,cb,meta34262){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta34262 = meta34262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34263,meta34262__$1){
var self__ = this;
var _34263__$1 = this;
return (new cljs.core.async.t_cljs$core$async34261(self__.alt_handler,self__.flag,self__.cb,meta34262__$1));
});

cljs.core.async.t_cljs$core$async34261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34263){
var self__ = this;
var _34263__$1 = this;
return self__.meta34262;
});

cljs.core.async.t_cljs$core$async34261.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34262","meta34262",1220401395,null)], null);
});

cljs.core.async.t_cljs$core$async34261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34261";

cljs.core.async.t_cljs$core$async34261.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cljs.core.async/t_cljs$core$async34261");
});

cljs.core.async.__GT_t_cljs$core$async34261 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34261(alt_handler__$1,flag__$1,cb__$1,meta34262){
return (new cljs.core.async.t_cljs$core$async34261(alt_handler__$1,flag__$1,cb__$1,meta34262));
});

}

return (new cljs.core.async.t_cljs$core$async34261(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34264_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34264_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34265_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34265_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__29513__auto__ = wport;
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34266 = (i + (1));
i = G__34266;
continue;
}
} else {
return null;
}
break;
}
})();
var or__29513__auto__ = ret;
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__29501__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__29501__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__29501__auto__;
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
var args__30578__auto__ = [];
var len__30571__auto___34272 = arguments.length;
var i__30572__auto___34273 = (0);
while(true){
if((i__30572__auto___34273 < len__30571__auto___34272)){
args__30578__auto__.push((arguments[i__30572__auto___34273]));

var G__34274 = (i__30572__auto___34273 + (1));
i__30572__auto___34273 = G__34274;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((1) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30579__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34269){
var map__34270 = p__34269;
var map__34270__$1 = ((((!((map__34270 == null)))?((((map__34270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34270):map__34270);
var opts = map__34270__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34267){
var G__34268 = cljs.core.first.call(null,seq34267);
var seq34267__$1 = cljs.core.next.call(null,seq34267);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34268,seq34267__$1);
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
var args34275 = [];
var len__30571__auto___34325 = arguments.length;
var i__30572__auto___34326 = (0);
while(true){
if((i__30572__auto___34326 < len__30571__auto___34325)){
args34275.push((arguments[i__30572__auto___34326]));

var G__34327 = (i__30572__auto___34326 + (1));
i__30572__auto___34326 = G__34327;
continue;
} else {
}
break;
}

var G__34277 = args34275.length;
switch (G__34277) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34275.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32314__auto___34329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___34329){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___34329){
return (function (state_34301){
var state_val_34302 = (state_34301[(1)]);
if((state_val_34302 === (7))){
var inst_34297 = (state_34301[(2)]);
var state_34301__$1 = state_34301;
var statearr_34303_34330 = state_34301__$1;
(statearr_34303_34330[(2)] = inst_34297);

(statearr_34303_34330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34302 === (1))){
var state_34301__$1 = state_34301;
var statearr_34304_34331 = state_34301__$1;
(statearr_34304_34331[(2)] = null);

(statearr_34304_34331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34302 === (4))){
var inst_34280 = (state_34301[(7)]);
var inst_34280__$1 = (state_34301[(2)]);
var inst_34281 = (inst_34280__$1 == null);
var state_34301__$1 = (function (){var statearr_34305 = state_34301;
(statearr_34305[(7)] = inst_34280__$1);

return statearr_34305;
})();
if(cljs.core.truth_(inst_34281)){
var statearr_34306_34332 = state_34301__$1;
(statearr_34306_34332[(1)] = (5));

} else {
var statearr_34307_34333 = state_34301__$1;
(statearr_34307_34333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34302 === (13))){
var state_34301__$1 = state_34301;
var statearr_34308_34334 = state_34301__$1;
(statearr_34308_34334[(2)] = null);

(statearr_34308_34334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34302 === (6))){
var inst_34280 = (state_34301[(7)]);
var state_34301__$1 = state_34301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34301__$1,(11),to,inst_34280);
} else {
if((state_val_34302 === (3))){
var inst_34299 = (state_34301[(2)]);
var state_34301__$1 = state_34301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34301__$1,inst_34299);
} else {
if((state_val_34302 === (12))){
var state_34301__$1 = state_34301;
var statearr_34309_34335 = state_34301__$1;
(statearr_34309_34335[(2)] = null);

(statearr_34309_34335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34302 === (2))){
var state_34301__$1 = state_34301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34301__$1,(4),from);
} else {
if((state_val_34302 === (11))){
var inst_34290 = (state_34301[(2)]);
var state_34301__$1 = state_34301;
if(cljs.core.truth_(inst_34290)){
var statearr_34310_34336 = state_34301__$1;
(statearr_34310_34336[(1)] = (12));

} else {
var statearr_34311_34337 = state_34301__$1;
(statearr_34311_34337[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34302 === (9))){
var state_34301__$1 = state_34301;
var statearr_34312_34338 = state_34301__$1;
(statearr_34312_34338[(2)] = null);

(statearr_34312_34338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34302 === (5))){
var state_34301__$1 = state_34301;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34313_34339 = state_34301__$1;
(statearr_34313_34339[(1)] = (8));

} else {
var statearr_34314_34340 = state_34301__$1;
(statearr_34314_34340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34302 === (14))){
var inst_34295 = (state_34301[(2)]);
var state_34301__$1 = state_34301;
var statearr_34315_34341 = state_34301__$1;
(statearr_34315_34341[(2)] = inst_34295);

(statearr_34315_34341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34302 === (10))){
var inst_34287 = (state_34301[(2)]);
var state_34301__$1 = state_34301;
var statearr_34316_34342 = state_34301__$1;
(statearr_34316_34342[(2)] = inst_34287);

(statearr_34316_34342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34302 === (8))){
var inst_34284 = cljs.core.async.close_BANG_.call(null,to);
var state_34301__$1 = state_34301;
var statearr_34317_34343 = state_34301__$1;
(statearr_34317_34343[(2)] = inst_34284);

(statearr_34317_34343[(1)] = (10));


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
});})(c__32314__auto___34329))
;
return ((function (switch__32293__auto__,c__32314__auto___34329){
return (function() {
var cljs$core$async$state_machine__32294__auto__ = null;
var cljs$core$async$state_machine__32294__auto____0 = (function (){
var statearr_34321 = [null,null,null,null,null,null,null,null];
(statearr_34321[(0)] = cljs$core$async$state_machine__32294__auto__);

(statearr_34321[(1)] = (1));

return statearr_34321;
});
var cljs$core$async$state_machine__32294__auto____1 = (function (state_34301){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_34301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e34322){if((e34322 instanceof Object)){
var ex__32297__auto__ = e34322;
var statearr_34323_34344 = state_34301;
(statearr_34323_34344[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34345 = state_34301;
state_34301 = G__34345;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$state_machine__32294__auto__ = function(state_34301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32294__auto____1.call(this,state_34301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32294__auto____0;
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32294__auto____1;
return cljs$core$async$state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___34329))
})();
var state__32316__auto__ = (function (){var statearr_34324 = f__32315__auto__.call(null);
(statearr_34324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___34329);

return statearr_34324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___34329))
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
return (function (p__34529){
var vec__34530 = p__34529;
var v = cljs.core.nth.call(null,vec__34530,(0),null);
var p = cljs.core.nth.call(null,vec__34530,(1),null);
var job = vec__34530;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32314__auto___34712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___34712,res,vec__34530,v,p,job,jobs,results){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___34712,res,vec__34530,v,p,job,jobs,results){
return (function (state_34535){
var state_val_34536 = (state_34535[(1)]);
if((state_val_34536 === (1))){
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34535__$1,(2),res,v);
} else {
if((state_val_34536 === (2))){
var inst_34532 = (state_34535[(2)]);
var inst_34533 = cljs.core.async.close_BANG_.call(null,res);
var state_34535__$1 = (function (){var statearr_34537 = state_34535;
(statearr_34537[(7)] = inst_34532);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34535__$1,inst_34533);
} else {
return null;
}
}
});})(c__32314__auto___34712,res,vec__34530,v,p,job,jobs,results))
;
return ((function (switch__32293__auto__,c__32314__auto___34712,res,vec__34530,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0 = (function (){
var statearr_34541 = [null,null,null,null,null,null,null,null];
(statearr_34541[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__);

(statearr_34541[(1)] = (1));

return statearr_34541;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1 = (function (state_34535){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_34535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e34542){if((e34542 instanceof Object)){
var ex__32297__auto__ = e34542;
var statearr_34543_34713 = state_34535;
(statearr_34543_34713[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34714 = state_34535;
state_34535 = G__34714;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__ = function(state_34535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1.call(this,state_34535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___34712,res,vec__34530,v,p,job,jobs,results))
})();
var state__32316__auto__ = (function (){var statearr_34544 = f__32315__auto__.call(null);
(statearr_34544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___34712);

return statearr_34544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___34712,res,vec__34530,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34545){
var vec__34546 = p__34545;
var v = cljs.core.nth.call(null,vec__34546,(0),null);
var p = cljs.core.nth.call(null,vec__34546,(1),null);
var job = vec__34546;
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
var n__30416__auto___34715 = n;
var __34716 = (0);
while(true){
if((__34716 < n__30416__auto___34715)){
var G__34547_34717 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34547_34717) {
case "compute":
var c__32314__auto___34719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34716,c__32314__auto___34719,G__34547_34717,n__30416__auto___34715,jobs,results,process,async){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (__34716,c__32314__auto___34719,G__34547_34717,n__30416__auto___34715,jobs,results,process,async){
return (function (state_34560){
var state_val_34561 = (state_34560[(1)]);
if((state_val_34561 === (1))){
var state_34560__$1 = state_34560;
var statearr_34562_34720 = state_34560__$1;
(statearr_34562_34720[(2)] = null);

(statearr_34562_34720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (2))){
var state_34560__$1 = state_34560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34560__$1,(4),jobs);
} else {
if((state_val_34561 === (3))){
var inst_34558 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34560__$1,inst_34558);
} else {
if((state_val_34561 === (4))){
var inst_34550 = (state_34560[(2)]);
var inst_34551 = process.call(null,inst_34550);
var state_34560__$1 = state_34560;
if(cljs.core.truth_(inst_34551)){
var statearr_34563_34721 = state_34560__$1;
(statearr_34563_34721[(1)] = (5));

} else {
var statearr_34564_34722 = state_34560__$1;
(statearr_34564_34722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (5))){
var state_34560__$1 = state_34560;
var statearr_34565_34723 = state_34560__$1;
(statearr_34565_34723[(2)] = null);

(statearr_34565_34723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (6))){
var state_34560__$1 = state_34560;
var statearr_34566_34724 = state_34560__$1;
(statearr_34566_34724[(2)] = null);

(statearr_34566_34724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34561 === (7))){
var inst_34556 = (state_34560[(2)]);
var state_34560__$1 = state_34560;
var statearr_34567_34725 = state_34560__$1;
(statearr_34567_34725[(2)] = inst_34556);

(statearr_34567_34725[(1)] = (3));


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
});})(__34716,c__32314__auto___34719,G__34547_34717,n__30416__auto___34715,jobs,results,process,async))
;
return ((function (__34716,switch__32293__auto__,c__32314__auto___34719,G__34547_34717,n__30416__auto___34715,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0 = (function (){
var statearr_34571 = [null,null,null,null,null,null,null];
(statearr_34571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__);

(statearr_34571[(1)] = (1));

return statearr_34571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1 = (function (state_34560){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_34560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e34572){if((e34572 instanceof Object)){
var ex__32297__auto__ = e34572;
var statearr_34573_34726 = state_34560;
(statearr_34573_34726[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34727 = state_34560;
state_34560 = G__34727;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__ = function(state_34560){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1.call(this,state_34560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__;
})()
;})(__34716,switch__32293__auto__,c__32314__auto___34719,G__34547_34717,n__30416__auto___34715,jobs,results,process,async))
})();
var state__32316__auto__ = (function (){var statearr_34574 = f__32315__auto__.call(null);
(statearr_34574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___34719);

return statearr_34574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(__34716,c__32314__auto___34719,G__34547_34717,n__30416__auto___34715,jobs,results,process,async))
);


break;
case "async":
var c__32314__auto___34728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34716,c__32314__auto___34728,G__34547_34717,n__30416__auto___34715,jobs,results,process,async){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (__34716,c__32314__auto___34728,G__34547_34717,n__30416__auto___34715,jobs,results,process,async){
return (function (state_34587){
var state_val_34588 = (state_34587[(1)]);
if((state_val_34588 === (1))){
var state_34587__$1 = state_34587;
var statearr_34589_34729 = state_34587__$1;
(statearr_34589_34729[(2)] = null);

(statearr_34589_34729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (2))){
var state_34587__$1 = state_34587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34587__$1,(4),jobs);
} else {
if((state_val_34588 === (3))){
var inst_34585 = (state_34587[(2)]);
var state_34587__$1 = state_34587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34587__$1,inst_34585);
} else {
if((state_val_34588 === (4))){
var inst_34577 = (state_34587[(2)]);
var inst_34578 = async.call(null,inst_34577);
var state_34587__$1 = state_34587;
if(cljs.core.truth_(inst_34578)){
var statearr_34590_34730 = state_34587__$1;
(statearr_34590_34730[(1)] = (5));

} else {
var statearr_34591_34731 = state_34587__$1;
(statearr_34591_34731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (5))){
var state_34587__$1 = state_34587;
var statearr_34592_34732 = state_34587__$1;
(statearr_34592_34732[(2)] = null);

(statearr_34592_34732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (6))){
var state_34587__$1 = state_34587;
var statearr_34593_34733 = state_34587__$1;
(statearr_34593_34733[(2)] = null);

(statearr_34593_34733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (7))){
var inst_34583 = (state_34587[(2)]);
var state_34587__$1 = state_34587;
var statearr_34594_34734 = state_34587__$1;
(statearr_34594_34734[(2)] = inst_34583);

(statearr_34594_34734[(1)] = (3));


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
});})(__34716,c__32314__auto___34728,G__34547_34717,n__30416__auto___34715,jobs,results,process,async))
;
return ((function (__34716,switch__32293__auto__,c__32314__auto___34728,G__34547_34717,n__30416__auto___34715,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0 = (function (){
var statearr_34598 = [null,null,null,null,null,null,null];
(statearr_34598[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__);

(statearr_34598[(1)] = (1));

return statearr_34598;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1 = (function (state_34587){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_34587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e34599){if((e34599 instanceof Object)){
var ex__32297__auto__ = e34599;
var statearr_34600_34735 = state_34587;
(statearr_34600_34735[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34736 = state_34587;
state_34587 = G__34736;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__ = function(state_34587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1.call(this,state_34587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__;
})()
;})(__34716,switch__32293__auto__,c__32314__auto___34728,G__34547_34717,n__30416__auto___34715,jobs,results,process,async))
})();
var state__32316__auto__ = (function (){var statearr_34601 = f__32315__auto__.call(null);
(statearr_34601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___34728);

return statearr_34601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(__34716,c__32314__auto___34728,G__34547_34717,n__30416__auto___34715,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34737 = (__34716 + (1));
__34716 = G__34737;
continue;
} else {
}
break;
}

var c__32314__auto___34738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___34738,jobs,results,process,async){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___34738,jobs,results,process,async){
return (function (state_34623){
var state_val_34624 = (state_34623[(1)]);
if((state_val_34624 === (1))){
var state_34623__$1 = state_34623;
var statearr_34625_34739 = state_34623__$1;
(statearr_34625_34739[(2)] = null);

(statearr_34625_34739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34624 === (2))){
var state_34623__$1 = state_34623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34623__$1,(4),from);
} else {
if((state_val_34624 === (3))){
var inst_34621 = (state_34623[(2)]);
var state_34623__$1 = state_34623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34623__$1,inst_34621);
} else {
if((state_val_34624 === (4))){
var inst_34604 = (state_34623[(7)]);
var inst_34604__$1 = (state_34623[(2)]);
var inst_34605 = (inst_34604__$1 == null);
var state_34623__$1 = (function (){var statearr_34626 = state_34623;
(statearr_34626[(7)] = inst_34604__$1);

return statearr_34626;
})();
if(cljs.core.truth_(inst_34605)){
var statearr_34627_34740 = state_34623__$1;
(statearr_34627_34740[(1)] = (5));

} else {
var statearr_34628_34741 = state_34623__$1;
(statearr_34628_34741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34624 === (5))){
var inst_34607 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34623__$1 = state_34623;
var statearr_34629_34742 = state_34623__$1;
(statearr_34629_34742[(2)] = inst_34607);

(statearr_34629_34742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34624 === (6))){
var inst_34604 = (state_34623[(7)]);
var inst_34609 = (state_34623[(8)]);
var inst_34609__$1 = cljs.core.async.chan.call(null,(1));
var inst_34610 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34611 = [inst_34604,inst_34609__$1];
var inst_34612 = (new cljs.core.PersistentVector(null,2,(5),inst_34610,inst_34611,null));
var state_34623__$1 = (function (){var statearr_34630 = state_34623;
(statearr_34630[(8)] = inst_34609__$1);

return statearr_34630;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34623__$1,(8),jobs,inst_34612);
} else {
if((state_val_34624 === (7))){
var inst_34619 = (state_34623[(2)]);
var state_34623__$1 = state_34623;
var statearr_34631_34743 = state_34623__$1;
(statearr_34631_34743[(2)] = inst_34619);

(statearr_34631_34743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34624 === (8))){
var inst_34609 = (state_34623[(8)]);
var inst_34614 = (state_34623[(2)]);
var state_34623__$1 = (function (){var statearr_34632 = state_34623;
(statearr_34632[(9)] = inst_34614);

return statearr_34632;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34623__$1,(9),results,inst_34609);
} else {
if((state_val_34624 === (9))){
var inst_34616 = (state_34623[(2)]);
var state_34623__$1 = (function (){var statearr_34633 = state_34623;
(statearr_34633[(10)] = inst_34616);

return statearr_34633;
})();
var statearr_34634_34744 = state_34623__$1;
(statearr_34634_34744[(2)] = null);

(statearr_34634_34744[(1)] = (2));


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
});})(c__32314__auto___34738,jobs,results,process,async))
;
return ((function (switch__32293__auto__,c__32314__auto___34738,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0 = (function (){
var statearr_34638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__);

(statearr_34638[(1)] = (1));

return statearr_34638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1 = (function (state_34623){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_34623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e34639){if((e34639 instanceof Object)){
var ex__32297__auto__ = e34639;
var statearr_34640_34745 = state_34623;
(statearr_34640_34745[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34746 = state_34623;
state_34623 = G__34746;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__ = function(state_34623){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1.call(this,state_34623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___34738,jobs,results,process,async))
})();
var state__32316__auto__ = (function (){var statearr_34641 = f__32315__auto__.call(null);
(statearr_34641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___34738);

return statearr_34641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___34738,jobs,results,process,async))
);


var c__32314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto__,jobs,results,process,async){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto__,jobs,results,process,async){
return (function (state_34679){
var state_val_34680 = (state_34679[(1)]);
if((state_val_34680 === (7))){
var inst_34675 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
var statearr_34681_34747 = state_34679__$1;
(statearr_34681_34747[(2)] = inst_34675);

(statearr_34681_34747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (20))){
var state_34679__$1 = state_34679;
var statearr_34682_34748 = state_34679__$1;
(statearr_34682_34748[(2)] = null);

(statearr_34682_34748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (1))){
var state_34679__$1 = state_34679;
var statearr_34683_34749 = state_34679__$1;
(statearr_34683_34749[(2)] = null);

(statearr_34683_34749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (4))){
var inst_34644 = (state_34679[(7)]);
var inst_34644__$1 = (state_34679[(2)]);
var inst_34645 = (inst_34644__$1 == null);
var state_34679__$1 = (function (){var statearr_34684 = state_34679;
(statearr_34684[(7)] = inst_34644__$1);

return statearr_34684;
})();
if(cljs.core.truth_(inst_34645)){
var statearr_34685_34750 = state_34679__$1;
(statearr_34685_34750[(1)] = (5));

} else {
var statearr_34686_34751 = state_34679__$1;
(statearr_34686_34751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (15))){
var inst_34657 = (state_34679[(8)]);
var state_34679__$1 = state_34679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34679__$1,(18),to,inst_34657);
} else {
if((state_val_34680 === (21))){
var inst_34670 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
var statearr_34687_34752 = state_34679__$1;
(statearr_34687_34752[(2)] = inst_34670);

(statearr_34687_34752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (13))){
var inst_34672 = (state_34679[(2)]);
var state_34679__$1 = (function (){var statearr_34688 = state_34679;
(statearr_34688[(9)] = inst_34672);

return statearr_34688;
})();
var statearr_34689_34753 = state_34679__$1;
(statearr_34689_34753[(2)] = null);

(statearr_34689_34753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (6))){
var inst_34644 = (state_34679[(7)]);
var state_34679__$1 = state_34679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34679__$1,(11),inst_34644);
} else {
if((state_val_34680 === (17))){
var inst_34665 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
if(cljs.core.truth_(inst_34665)){
var statearr_34690_34754 = state_34679__$1;
(statearr_34690_34754[(1)] = (19));

} else {
var statearr_34691_34755 = state_34679__$1;
(statearr_34691_34755[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (3))){
var inst_34677 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34679__$1,inst_34677);
} else {
if((state_val_34680 === (12))){
var inst_34654 = (state_34679[(10)]);
var state_34679__$1 = state_34679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34679__$1,(14),inst_34654);
} else {
if((state_val_34680 === (2))){
var state_34679__$1 = state_34679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34679__$1,(4),results);
} else {
if((state_val_34680 === (19))){
var state_34679__$1 = state_34679;
var statearr_34692_34756 = state_34679__$1;
(statearr_34692_34756[(2)] = null);

(statearr_34692_34756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (11))){
var inst_34654 = (state_34679[(2)]);
var state_34679__$1 = (function (){var statearr_34693 = state_34679;
(statearr_34693[(10)] = inst_34654);

return statearr_34693;
})();
var statearr_34694_34757 = state_34679__$1;
(statearr_34694_34757[(2)] = null);

(statearr_34694_34757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (9))){
var state_34679__$1 = state_34679;
var statearr_34695_34758 = state_34679__$1;
(statearr_34695_34758[(2)] = null);

(statearr_34695_34758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (5))){
var state_34679__$1 = state_34679;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34696_34759 = state_34679__$1;
(statearr_34696_34759[(1)] = (8));

} else {
var statearr_34697_34760 = state_34679__$1;
(statearr_34697_34760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (14))){
var inst_34659 = (state_34679[(11)]);
var inst_34657 = (state_34679[(8)]);
var inst_34657__$1 = (state_34679[(2)]);
var inst_34658 = (inst_34657__$1 == null);
var inst_34659__$1 = cljs.core.not.call(null,inst_34658);
var state_34679__$1 = (function (){var statearr_34698 = state_34679;
(statearr_34698[(11)] = inst_34659__$1);

(statearr_34698[(8)] = inst_34657__$1);

return statearr_34698;
})();
if(inst_34659__$1){
var statearr_34699_34761 = state_34679__$1;
(statearr_34699_34761[(1)] = (15));

} else {
var statearr_34700_34762 = state_34679__$1;
(statearr_34700_34762[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (16))){
var inst_34659 = (state_34679[(11)]);
var state_34679__$1 = state_34679;
var statearr_34701_34763 = state_34679__$1;
(statearr_34701_34763[(2)] = inst_34659);

(statearr_34701_34763[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (10))){
var inst_34651 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
var statearr_34702_34764 = state_34679__$1;
(statearr_34702_34764[(2)] = inst_34651);

(statearr_34702_34764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (18))){
var inst_34662 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
var statearr_34703_34765 = state_34679__$1;
(statearr_34703_34765[(2)] = inst_34662);

(statearr_34703_34765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (8))){
var inst_34648 = cljs.core.async.close_BANG_.call(null,to);
var state_34679__$1 = state_34679;
var statearr_34704_34766 = state_34679__$1;
(statearr_34704_34766[(2)] = inst_34648);

(statearr_34704_34766[(1)] = (10));


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
});})(c__32314__auto__,jobs,results,process,async))
;
return ((function (switch__32293__auto__,c__32314__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0 = (function (){
var statearr_34708 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__);

(statearr_34708[(1)] = (1));

return statearr_34708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1 = (function (state_34679){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_34679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e34709){if((e34709 instanceof Object)){
var ex__32297__auto__ = e34709;
var statearr_34710_34767 = state_34679;
(statearr_34710_34767[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34768 = state_34679;
state_34679 = G__34768;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__ = function(state_34679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1.call(this,state_34679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto__,jobs,results,process,async))
})();
var state__32316__auto__ = (function (){var statearr_34711 = f__32315__auto__.call(null);
(statearr_34711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto__);

return statearr_34711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto__,jobs,results,process,async))
);

return c__32314__auto__;
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
var args34769 = [];
var len__30571__auto___34772 = arguments.length;
var i__30572__auto___34773 = (0);
while(true){
if((i__30572__auto___34773 < len__30571__auto___34772)){
args34769.push((arguments[i__30572__auto___34773]));

var G__34774 = (i__30572__auto___34773 + (1));
i__30572__auto___34773 = G__34774;
continue;
} else {
}
break;
}

var G__34771 = args34769.length;
switch (G__34771) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34769.length)].join('')));

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
var args34776 = [];
var len__30571__auto___34779 = arguments.length;
var i__30572__auto___34780 = (0);
while(true){
if((i__30572__auto___34780 < len__30571__auto___34779)){
args34776.push((arguments[i__30572__auto___34780]));

var G__34781 = (i__30572__auto___34780 + (1));
i__30572__auto___34780 = G__34781;
continue;
} else {
}
break;
}

var G__34778 = args34776.length;
switch (G__34778) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34776.length)].join('')));

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
var args34783 = [];
var len__30571__auto___34836 = arguments.length;
var i__30572__auto___34837 = (0);
while(true){
if((i__30572__auto___34837 < len__30571__auto___34836)){
args34783.push((arguments[i__30572__auto___34837]));

var G__34838 = (i__30572__auto___34837 + (1));
i__30572__auto___34837 = G__34838;
continue;
} else {
}
break;
}

var G__34785 = args34783.length;
switch (G__34785) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34783.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32314__auto___34840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___34840,tc,fc){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___34840,tc,fc){
return (function (state_34811){
var state_val_34812 = (state_34811[(1)]);
if((state_val_34812 === (7))){
var inst_34807 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
var statearr_34813_34841 = state_34811__$1;
(statearr_34813_34841[(2)] = inst_34807);

(statearr_34813_34841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (1))){
var state_34811__$1 = state_34811;
var statearr_34814_34842 = state_34811__$1;
(statearr_34814_34842[(2)] = null);

(statearr_34814_34842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (4))){
var inst_34788 = (state_34811[(7)]);
var inst_34788__$1 = (state_34811[(2)]);
var inst_34789 = (inst_34788__$1 == null);
var state_34811__$1 = (function (){var statearr_34815 = state_34811;
(statearr_34815[(7)] = inst_34788__$1);

return statearr_34815;
})();
if(cljs.core.truth_(inst_34789)){
var statearr_34816_34843 = state_34811__$1;
(statearr_34816_34843[(1)] = (5));

} else {
var statearr_34817_34844 = state_34811__$1;
(statearr_34817_34844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (13))){
var state_34811__$1 = state_34811;
var statearr_34818_34845 = state_34811__$1;
(statearr_34818_34845[(2)] = null);

(statearr_34818_34845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (6))){
var inst_34788 = (state_34811[(7)]);
var inst_34794 = p.call(null,inst_34788);
var state_34811__$1 = state_34811;
if(cljs.core.truth_(inst_34794)){
var statearr_34819_34846 = state_34811__$1;
(statearr_34819_34846[(1)] = (9));

} else {
var statearr_34820_34847 = state_34811__$1;
(statearr_34820_34847[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (3))){
var inst_34809 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34811__$1,inst_34809);
} else {
if((state_val_34812 === (12))){
var state_34811__$1 = state_34811;
var statearr_34821_34848 = state_34811__$1;
(statearr_34821_34848[(2)] = null);

(statearr_34821_34848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (2))){
var state_34811__$1 = state_34811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34811__$1,(4),ch);
} else {
if((state_val_34812 === (11))){
var inst_34788 = (state_34811[(7)]);
var inst_34798 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34811__$1,(8),inst_34798,inst_34788);
} else {
if((state_val_34812 === (9))){
var state_34811__$1 = state_34811;
var statearr_34822_34849 = state_34811__$1;
(statearr_34822_34849[(2)] = tc);

(statearr_34822_34849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (5))){
var inst_34791 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34792 = cljs.core.async.close_BANG_.call(null,fc);
var state_34811__$1 = (function (){var statearr_34823 = state_34811;
(statearr_34823[(8)] = inst_34791);

return statearr_34823;
})();
var statearr_34824_34850 = state_34811__$1;
(statearr_34824_34850[(2)] = inst_34792);

(statearr_34824_34850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (14))){
var inst_34805 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
var statearr_34825_34851 = state_34811__$1;
(statearr_34825_34851[(2)] = inst_34805);

(statearr_34825_34851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (10))){
var state_34811__$1 = state_34811;
var statearr_34826_34852 = state_34811__$1;
(statearr_34826_34852[(2)] = fc);

(statearr_34826_34852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (8))){
var inst_34800 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
if(cljs.core.truth_(inst_34800)){
var statearr_34827_34853 = state_34811__$1;
(statearr_34827_34853[(1)] = (12));

} else {
var statearr_34828_34854 = state_34811__$1;
(statearr_34828_34854[(1)] = (13));

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
});})(c__32314__auto___34840,tc,fc))
;
return ((function (switch__32293__auto__,c__32314__auto___34840,tc,fc){
return (function() {
var cljs$core$async$state_machine__32294__auto__ = null;
var cljs$core$async$state_machine__32294__auto____0 = (function (){
var statearr_34832 = [null,null,null,null,null,null,null,null,null];
(statearr_34832[(0)] = cljs$core$async$state_machine__32294__auto__);

(statearr_34832[(1)] = (1));

return statearr_34832;
});
var cljs$core$async$state_machine__32294__auto____1 = (function (state_34811){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_34811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e34833){if((e34833 instanceof Object)){
var ex__32297__auto__ = e34833;
var statearr_34834_34855 = state_34811;
(statearr_34834_34855[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34856 = state_34811;
state_34811 = G__34856;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$state_machine__32294__auto__ = function(state_34811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32294__auto____1.call(this,state_34811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32294__auto____0;
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32294__auto____1;
return cljs$core$async$state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___34840,tc,fc))
})();
var state__32316__auto__ = (function (){var statearr_34835 = f__32315__auto__.call(null);
(statearr_34835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___34840);

return statearr_34835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___34840,tc,fc))
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
var c__32314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto__){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto__){
return (function (state_34920){
var state_val_34921 = (state_34920[(1)]);
if((state_val_34921 === (7))){
var inst_34916 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34922_34943 = state_34920__$1;
(statearr_34922_34943[(2)] = inst_34916);

(statearr_34922_34943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (1))){
var inst_34900 = init;
var state_34920__$1 = (function (){var statearr_34923 = state_34920;
(statearr_34923[(7)] = inst_34900);

return statearr_34923;
})();
var statearr_34924_34944 = state_34920__$1;
(statearr_34924_34944[(2)] = null);

(statearr_34924_34944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (4))){
var inst_34903 = (state_34920[(8)]);
var inst_34903__$1 = (state_34920[(2)]);
var inst_34904 = (inst_34903__$1 == null);
var state_34920__$1 = (function (){var statearr_34925 = state_34920;
(statearr_34925[(8)] = inst_34903__$1);

return statearr_34925;
})();
if(cljs.core.truth_(inst_34904)){
var statearr_34926_34945 = state_34920__$1;
(statearr_34926_34945[(1)] = (5));

} else {
var statearr_34927_34946 = state_34920__$1;
(statearr_34927_34946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (6))){
var inst_34900 = (state_34920[(7)]);
var inst_34903 = (state_34920[(8)]);
var inst_34907 = (state_34920[(9)]);
var inst_34907__$1 = f.call(null,inst_34900,inst_34903);
var inst_34908 = cljs.core.reduced_QMARK_.call(null,inst_34907__$1);
var state_34920__$1 = (function (){var statearr_34928 = state_34920;
(statearr_34928[(9)] = inst_34907__$1);

return statearr_34928;
})();
if(inst_34908){
var statearr_34929_34947 = state_34920__$1;
(statearr_34929_34947[(1)] = (8));

} else {
var statearr_34930_34948 = state_34920__$1;
(statearr_34930_34948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (3))){
var inst_34918 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34920__$1,inst_34918);
} else {
if((state_val_34921 === (2))){
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34920__$1,(4),ch);
} else {
if((state_val_34921 === (9))){
var inst_34907 = (state_34920[(9)]);
var inst_34900 = inst_34907;
var state_34920__$1 = (function (){var statearr_34931 = state_34920;
(statearr_34931[(7)] = inst_34900);

return statearr_34931;
})();
var statearr_34932_34949 = state_34920__$1;
(statearr_34932_34949[(2)] = null);

(statearr_34932_34949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (5))){
var inst_34900 = (state_34920[(7)]);
var state_34920__$1 = state_34920;
var statearr_34933_34950 = state_34920__$1;
(statearr_34933_34950[(2)] = inst_34900);

(statearr_34933_34950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (10))){
var inst_34914 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34934_34951 = state_34920__$1;
(statearr_34934_34951[(2)] = inst_34914);

(statearr_34934_34951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (8))){
var inst_34907 = (state_34920[(9)]);
var inst_34910 = cljs.core.deref.call(null,inst_34907);
var state_34920__$1 = state_34920;
var statearr_34935_34952 = state_34920__$1;
(statearr_34935_34952[(2)] = inst_34910);

(statearr_34935_34952[(1)] = (10));


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
});})(c__32314__auto__))
;
return ((function (switch__32293__auto__,c__32314__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32294__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32294__auto____0 = (function (){
var statearr_34939 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34939[(0)] = cljs$core$async$reduce_$_state_machine__32294__auto__);

(statearr_34939[(1)] = (1));

return statearr_34939;
});
var cljs$core$async$reduce_$_state_machine__32294__auto____1 = (function (state_34920){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_34920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e34940){if((e34940 instanceof Object)){
var ex__32297__auto__ = e34940;
var statearr_34941_34953 = state_34920;
(statearr_34941_34953[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34954 = state_34920;
state_34920 = G__34954;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32294__auto__ = function(state_34920){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32294__auto____1.call(this,state_34920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32294__auto____0;
cljs$core$async$reduce_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32294__auto____1;
return cljs$core$async$reduce_$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto__))
})();
var state__32316__auto__ = (function (){var statearr_34942 = f__32315__auto__.call(null);
(statearr_34942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto__);

return statearr_34942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto__))
);

return c__32314__auto__;
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
var args34955 = [];
var len__30571__auto___35007 = arguments.length;
var i__30572__auto___35008 = (0);
while(true){
if((i__30572__auto___35008 < len__30571__auto___35007)){
args34955.push((arguments[i__30572__auto___35008]));

var G__35009 = (i__30572__auto___35008 + (1));
i__30572__auto___35008 = G__35009;
continue;
} else {
}
break;
}

var G__34957 = args34955.length;
switch (G__34957) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34955.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto__){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto__){
return (function (state_34982){
var state_val_34983 = (state_34982[(1)]);
if((state_val_34983 === (7))){
var inst_34964 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34984_35011 = state_34982__$1;
(statearr_34984_35011[(2)] = inst_34964);

(statearr_34984_35011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (1))){
var inst_34958 = cljs.core.seq.call(null,coll);
var inst_34959 = inst_34958;
var state_34982__$1 = (function (){var statearr_34985 = state_34982;
(statearr_34985[(7)] = inst_34959);

return statearr_34985;
})();
var statearr_34986_35012 = state_34982__$1;
(statearr_34986_35012[(2)] = null);

(statearr_34986_35012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (4))){
var inst_34959 = (state_34982[(7)]);
var inst_34962 = cljs.core.first.call(null,inst_34959);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34982__$1,(7),ch,inst_34962);
} else {
if((state_val_34983 === (13))){
var inst_34976 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34987_35013 = state_34982__$1;
(statearr_34987_35013[(2)] = inst_34976);

(statearr_34987_35013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (6))){
var inst_34967 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
if(cljs.core.truth_(inst_34967)){
var statearr_34988_35014 = state_34982__$1;
(statearr_34988_35014[(1)] = (8));

} else {
var statearr_34989_35015 = state_34982__$1;
(statearr_34989_35015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (3))){
var inst_34980 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34982__$1,inst_34980);
} else {
if((state_val_34983 === (12))){
var state_34982__$1 = state_34982;
var statearr_34990_35016 = state_34982__$1;
(statearr_34990_35016[(2)] = null);

(statearr_34990_35016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (2))){
var inst_34959 = (state_34982[(7)]);
var state_34982__$1 = state_34982;
if(cljs.core.truth_(inst_34959)){
var statearr_34991_35017 = state_34982__$1;
(statearr_34991_35017[(1)] = (4));

} else {
var statearr_34992_35018 = state_34982__$1;
(statearr_34992_35018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (11))){
var inst_34973 = cljs.core.async.close_BANG_.call(null,ch);
var state_34982__$1 = state_34982;
var statearr_34993_35019 = state_34982__$1;
(statearr_34993_35019[(2)] = inst_34973);

(statearr_34993_35019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (9))){
var state_34982__$1 = state_34982;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34994_35020 = state_34982__$1;
(statearr_34994_35020[(1)] = (11));

} else {
var statearr_34995_35021 = state_34982__$1;
(statearr_34995_35021[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (5))){
var inst_34959 = (state_34982[(7)]);
var state_34982__$1 = state_34982;
var statearr_34996_35022 = state_34982__$1;
(statearr_34996_35022[(2)] = inst_34959);

(statearr_34996_35022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (10))){
var inst_34978 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34997_35023 = state_34982__$1;
(statearr_34997_35023[(2)] = inst_34978);

(statearr_34997_35023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (8))){
var inst_34959 = (state_34982[(7)]);
var inst_34969 = cljs.core.next.call(null,inst_34959);
var inst_34959__$1 = inst_34969;
var state_34982__$1 = (function (){var statearr_34998 = state_34982;
(statearr_34998[(7)] = inst_34959__$1);

return statearr_34998;
})();
var statearr_34999_35024 = state_34982__$1;
(statearr_34999_35024[(2)] = null);

(statearr_34999_35024[(1)] = (2));


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
});})(c__32314__auto__))
;
return ((function (switch__32293__auto__,c__32314__auto__){
return (function() {
var cljs$core$async$state_machine__32294__auto__ = null;
var cljs$core$async$state_machine__32294__auto____0 = (function (){
var statearr_35003 = [null,null,null,null,null,null,null,null];
(statearr_35003[(0)] = cljs$core$async$state_machine__32294__auto__);

(statearr_35003[(1)] = (1));

return statearr_35003;
});
var cljs$core$async$state_machine__32294__auto____1 = (function (state_34982){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_34982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e35004){if((e35004 instanceof Object)){
var ex__32297__auto__ = e35004;
var statearr_35005_35025 = state_34982;
(statearr_35005_35025[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35026 = state_34982;
state_34982 = G__35026;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$state_machine__32294__auto__ = function(state_34982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32294__auto____1.call(this,state_34982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32294__auto____0;
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32294__auto____1;
return cljs$core$async$state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto__))
})();
var state__32316__auto__ = (function (){var statearr_35006 = f__32315__auto__.call(null);
(statearr_35006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto__);

return statearr_35006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto__))
);

return c__32314__auto__;
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
var x__30168__auto__ = (((_ == null))?null:_);
var m__30169__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30168__auto__)]);
if(!((m__30169__auto__ == null))){
return m__30169__auto__.call(null,_);
} else {
var m__30169__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30169__auto____$1 == null))){
return m__30169__auto____$1.call(null,_);
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
var x__30168__auto__ = (((m == null))?null:m);
var m__30169__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30168__auto__)]);
if(!((m__30169__auto__ == null))){
return m__30169__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30169__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30169__auto____$1 == null))){
return m__30169__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__30168__auto__ = (((m == null))?null:m);
var m__30169__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30168__auto__)]);
if(!((m__30169__auto__ == null))){
return m__30169__auto__.call(null,m,ch);
} else {
var m__30169__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30169__auto____$1 == null))){
return m__30169__auto____$1.call(null,m,ch);
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
var x__30168__auto__ = (((m == null))?null:m);
var m__30169__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30168__auto__)]);
if(!((m__30169__auto__ == null))){
return m__30169__auto__.call(null,m);
} else {
var m__30169__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30169__auto____$1 == null))){
return m__30169__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async35248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35248 = (function (mult,ch,cs,meta35249){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta35249 = meta35249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35250,meta35249__$1){
var self__ = this;
var _35250__$1 = this;
return (new cljs.core.async.t_cljs$core$async35248(self__.mult,self__.ch,self__.cs,meta35249__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35250){
var self__ = this;
var _35250__$1 = this;
return self__.meta35249;
});})(cs))
;

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35248.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35249","meta35249",-476274197,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35248";

cljs.core.async.t_cljs$core$async35248.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cljs.core.async/t_cljs$core$async35248");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35248 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35248(mult__$1,ch__$1,cs__$1,meta35249){
return (new cljs.core.async.t_cljs$core$async35248(mult__$1,ch__$1,cs__$1,meta35249));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35248(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32314__auto___35469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___35469,cs,m,dchan,dctr,done){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___35469,cs,m,dchan,dctr,done){
return (function (state_35381){
var state_val_35382 = (state_35381[(1)]);
if((state_val_35382 === (7))){
var inst_35377 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
var statearr_35383_35470 = state_35381__$1;
(statearr_35383_35470[(2)] = inst_35377);

(statearr_35383_35470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (20))){
var inst_35282 = (state_35381[(7)]);
var inst_35292 = cljs.core.first.call(null,inst_35282);
var inst_35293 = cljs.core.nth.call(null,inst_35292,(0),null);
var inst_35294 = cljs.core.nth.call(null,inst_35292,(1),null);
var state_35381__$1 = (function (){var statearr_35384 = state_35381;
(statearr_35384[(8)] = inst_35293);

return statearr_35384;
})();
if(cljs.core.truth_(inst_35294)){
var statearr_35385_35471 = state_35381__$1;
(statearr_35385_35471[(1)] = (22));

} else {
var statearr_35386_35472 = state_35381__$1;
(statearr_35386_35472[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (27))){
var inst_35253 = (state_35381[(9)]);
var inst_35324 = (state_35381[(10)]);
var inst_35329 = (state_35381[(11)]);
var inst_35322 = (state_35381[(12)]);
var inst_35329__$1 = cljs.core._nth.call(null,inst_35322,inst_35324);
var inst_35330 = cljs.core.async.put_BANG_.call(null,inst_35329__$1,inst_35253,done);
var state_35381__$1 = (function (){var statearr_35387 = state_35381;
(statearr_35387[(11)] = inst_35329__$1);

return statearr_35387;
})();
if(cljs.core.truth_(inst_35330)){
var statearr_35388_35473 = state_35381__$1;
(statearr_35388_35473[(1)] = (30));

} else {
var statearr_35389_35474 = state_35381__$1;
(statearr_35389_35474[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (1))){
var state_35381__$1 = state_35381;
var statearr_35390_35475 = state_35381__$1;
(statearr_35390_35475[(2)] = null);

(statearr_35390_35475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (24))){
var inst_35282 = (state_35381[(7)]);
var inst_35299 = (state_35381[(2)]);
var inst_35300 = cljs.core.next.call(null,inst_35282);
var inst_35262 = inst_35300;
var inst_35263 = null;
var inst_35264 = (0);
var inst_35265 = (0);
var state_35381__$1 = (function (){var statearr_35391 = state_35381;
(statearr_35391[(13)] = inst_35265);

(statearr_35391[(14)] = inst_35264);

(statearr_35391[(15)] = inst_35262);

(statearr_35391[(16)] = inst_35299);

(statearr_35391[(17)] = inst_35263);

return statearr_35391;
})();
var statearr_35392_35476 = state_35381__$1;
(statearr_35392_35476[(2)] = null);

(statearr_35392_35476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (39))){
var state_35381__$1 = state_35381;
var statearr_35396_35477 = state_35381__$1;
(statearr_35396_35477[(2)] = null);

(statearr_35396_35477[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (4))){
var inst_35253 = (state_35381[(9)]);
var inst_35253__$1 = (state_35381[(2)]);
var inst_35254 = (inst_35253__$1 == null);
var state_35381__$1 = (function (){var statearr_35397 = state_35381;
(statearr_35397[(9)] = inst_35253__$1);

return statearr_35397;
})();
if(cljs.core.truth_(inst_35254)){
var statearr_35398_35478 = state_35381__$1;
(statearr_35398_35478[(1)] = (5));

} else {
var statearr_35399_35479 = state_35381__$1;
(statearr_35399_35479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (15))){
var inst_35265 = (state_35381[(13)]);
var inst_35264 = (state_35381[(14)]);
var inst_35262 = (state_35381[(15)]);
var inst_35263 = (state_35381[(17)]);
var inst_35278 = (state_35381[(2)]);
var inst_35279 = (inst_35265 + (1));
var tmp35393 = inst_35264;
var tmp35394 = inst_35262;
var tmp35395 = inst_35263;
var inst_35262__$1 = tmp35394;
var inst_35263__$1 = tmp35395;
var inst_35264__$1 = tmp35393;
var inst_35265__$1 = inst_35279;
var state_35381__$1 = (function (){var statearr_35400 = state_35381;
(statearr_35400[(18)] = inst_35278);

(statearr_35400[(13)] = inst_35265__$1);

(statearr_35400[(14)] = inst_35264__$1);

(statearr_35400[(15)] = inst_35262__$1);

(statearr_35400[(17)] = inst_35263__$1);

return statearr_35400;
})();
var statearr_35401_35480 = state_35381__$1;
(statearr_35401_35480[(2)] = null);

(statearr_35401_35480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (21))){
var inst_35303 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
var statearr_35405_35481 = state_35381__$1;
(statearr_35405_35481[(2)] = inst_35303);

(statearr_35405_35481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (31))){
var inst_35329 = (state_35381[(11)]);
var inst_35333 = done.call(null,null);
var inst_35334 = cljs.core.async.untap_STAR_.call(null,m,inst_35329);
var state_35381__$1 = (function (){var statearr_35406 = state_35381;
(statearr_35406[(19)] = inst_35333);

return statearr_35406;
})();
var statearr_35407_35482 = state_35381__$1;
(statearr_35407_35482[(2)] = inst_35334);

(statearr_35407_35482[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (32))){
var inst_35324 = (state_35381[(10)]);
var inst_35321 = (state_35381[(20)]);
var inst_35323 = (state_35381[(21)]);
var inst_35322 = (state_35381[(12)]);
var inst_35336 = (state_35381[(2)]);
var inst_35337 = (inst_35324 + (1));
var tmp35402 = inst_35321;
var tmp35403 = inst_35323;
var tmp35404 = inst_35322;
var inst_35321__$1 = tmp35402;
var inst_35322__$1 = tmp35404;
var inst_35323__$1 = tmp35403;
var inst_35324__$1 = inst_35337;
var state_35381__$1 = (function (){var statearr_35408 = state_35381;
(statearr_35408[(10)] = inst_35324__$1);

(statearr_35408[(20)] = inst_35321__$1);

(statearr_35408[(22)] = inst_35336);

(statearr_35408[(21)] = inst_35323__$1);

(statearr_35408[(12)] = inst_35322__$1);

return statearr_35408;
})();
var statearr_35409_35483 = state_35381__$1;
(statearr_35409_35483[(2)] = null);

(statearr_35409_35483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (40))){
var inst_35349 = (state_35381[(23)]);
var inst_35353 = done.call(null,null);
var inst_35354 = cljs.core.async.untap_STAR_.call(null,m,inst_35349);
var state_35381__$1 = (function (){var statearr_35410 = state_35381;
(statearr_35410[(24)] = inst_35353);

return statearr_35410;
})();
var statearr_35411_35484 = state_35381__$1;
(statearr_35411_35484[(2)] = inst_35354);

(statearr_35411_35484[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (33))){
var inst_35340 = (state_35381[(25)]);
var inst_35342 = cljs.core.chunked_seq_QMARK_.call(null,inst_35340);
var state_35381__$1 = state_35381;
if(inst_35342){
var statearr_35412_35485 = state_35381__$1;
(statearr_35412_35485[(1)] = (36));

} else {
var statearr_35413_35486 = state_35381__$1;
(statearr_35413_35486[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (13))){
var inst_35272 = (state_35381[(26)]);
var inst_35275 = cljs.core.async.close_BANG_.call(null,inst_35272);
var state_35381__$1 = state_35381;
var statearr_35414_35487 = state_35381__$1;
(statearr_35414_35487[(2)] = inst_35275);

(statearr_35414_35487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (22))){
var inst_35293 = (state_35381[(8)]);
var inst_35296 = cljs.core.async.close_BANG_.call(null,inst_35293);
var state_35381__$1 = state_35381;
var statearr_35415_35488 = state_35381__$1;
(statearr_35415_35488[(2)] = inst_35296);

(statearr_35415_35488[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (36))){
var inst_35340 = (state_35381[(25)]);
var inst_35344 = cljs.core.chunk_first.call(null,inst_35340);
var inst_35345 = cljs.core.chunk_rest.call(null,inst_35340);
var inst_35346 = cljs.core.count.call(null,inst_35344);
var inst_35321 = inst_35345;
var inst_35322 = inst_35344;
var inst_35323 = inst_35346;
var inst_35324 = (0);
var state_35381__$1 = (function (){var statearr_35416 = state_35381;
(statearr_35416[(10)] = inst_35324);

(statearr_35416[(20)] = inst_35321);

(statearr_35416[(21)] = inst_35323);

(statearr_35416[(12)] = inst_35322);

return statearr_35416;
})();
var statearr_35417_35489 = state_35381__$1;
(statearr_35417_35489[(2)] = null);

(statearr_35417_35489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (41))){
var inst_35340 = (state_35381[(25)]);
var inst_35356 = (state_35381[(2)]);
var inst_35357 = cljs.core.next.call(null,inst_35340);
var inst_35321 = inst_35357;
var inst_35322 = null;
var inst_35323 = (0);
var inst_35324 = (0);
var state_35381__$1 = (function (){var statearr_35418 = state_35381;
(statearr_35418[(27)] = inst_35356);

(statearr_35418[(10)] = inst_35324);

(statearr_35418[(20)] = inst_35321);

(statearr_35418[(21)] = inst_35323);

(statearr_35418[(12)] = inst_35322);

return statearr_35418;
})();
var statearr_35419_35490 = state_35381__$1;
(statearr_35419_35490[(2)] = null);

(statearr_35419_35490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (43))){
var state_35381__$1 = state_35381;
var statearr_35420_35491 = state_35381__$1;
(statearr_35420_35491[(2)] = null);

(statearr_35420_35491[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (29))){
var inst_35365 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
var statearr_35421_35492 = state_35381__$1;
(statearr_35421_35492[(2)] = inst_35365);

(statearr_35421_35492[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (44))){
var inst_35374 = (state_35381[(2)]);
var state_35381__$1 = (function (){var statearr_35422 = state_35381;
(statearr_35422[(28)] = inst_35374);

return statearr_35422;
})();
var statearr_35423_35493 = state_35381__$1;
(statearr_35423_35493[(2)] = null);

(statearr_35423_35493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (6))){
var inst_35313 = (state_35381[(29)]);
var inst_35312 = cljs.core.deref.call(null,cs);
var inst_35313__$1 = cljs.core.keys.call(null,inst_35312);
var inst_35314 = cljs.core.count.call(null,inst_35313__$1);
var inst_35315 = cljs.core.reset_BANG_.call(null,dctr,inst_35314);
var inst_35320 = cljs.core.seq.call(null,inst_35313__$1);
var inst_35321 = inst_35320;
var inst_35322 = null;
var inst_35323 = (0);
var inst_35324 = (0);
var state_35381__$1 = (function (){var statearr_35424 = state_35381;
(statearr_35424[(29)] = inst_35313__$1);

(statearr_35424[(10)] = inst_35324);

(statearr_35424[(20)] = inst_35321);

(statearr_35424[(21)] = inst_35323);

(statearr_35424[(30)] = inst_35315);

(statearr_35424[(12)] = inst_35322);

return statearr_35424;
})();
var statearr_35425_35494 = state_35381__$1;
(statearr_35425_35494[(2)] = null);

(statearr_35425_35494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (28))){
var inst_35340 = (state_35381[(25)]);
var inst_35321 = (state_35381[(20)]);
var inst_35340__$1 = cljs.core.seq.call(null,inst_35321);
var state_35381__$1 = (function (){var statearr_35426 = state_35381;
(statearr_35426[(25)] = inst_35340__$1);

return statearr_35426;
})();
if(inst_35340__$1){
var statearr_35427_35495 = state_35381__$1;
(statearr_35427_35495[(1)] = (33));

} else {
var statearr_35428_35496 = state_35381__$1;
(statearr_35428_35496[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (25))){
var inst_35324 = (state_35381[(10)]);
var inst_35323 = (state_35381[(21)]);
var inst_35326 = (inst_35324 < inst_35323);
var inst_35327 = inst_35326;
var state_35381__$1 = state_35381;
if(cljs.core.truth_(inst_35327)){
var statearr_35429_35497 = state_35381__$1;
(statearr_35429_35497[(1)] = (27));

} else {
var statearr_35430_35498 = state_35381__$1;
(statearr_35430_35498[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (34))){
var state_35381__$1 = state_35381;
var statearr_35431_35499 = state_35381__$1;
(statearr_35431_35499[(2)] = null);

(statearr_35431_35499[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (17))){
var state_35381__$1 = state_35381;
var statearr_35432_35500 = state_35381__$1;
(statearr_35432_35500[(2)] = null);

(statearr_35432_35500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (3))){
var inst_35379 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35381__$1,inst_35379);
} else {
if((state_val_35382 === (12))){
var inst_35308 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
var statearr_35433_35501 = state_35381__$1;
(statearr_35433_35501[(2)] = inst_35308);

(statearr_35433_35501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (2))){
var state_35381__$1 = state_35381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35381__$1,(4),ch);
} else {
if((state_val_35382 === (23))){
var state_35381__$1 = state_35381;
var statearr_35434_35502 = state_35381__$1;
(statearr_35434_35502[(2)] = null);

(statearr_35434_35502[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (35))){
var inst_35363 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
var statearr_35435_35503 = state_35381__$1;
(statearr_35435_35503[(2)] = inst_35363);

(statearr_35435_35503[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (19))){
var inst_35282 = (state_35381[(7)]);
var inst_35286 = cljs.core.chunk_first.call(null,inst_35282);
var inst_35287 = cljs.core.chunk_rest.call(null,inst_35282);
var inst_35288 = cljs.core.count.call(null,inst_35286);
var inst_35262 = inst_35287;
var inst_35263 = inst_35286;
var inst_35264 = inst_35288;
var inst_35265 = (0);
var state_35381__$1 = (function (){var statearr_35436 = state_35381;
(statearr_35436[(13)] = inst_35265);

(statearr_35436[(14)] = inst_35264);

(statearr_35436[(15)] = inst_35262);

(statearr_35436[(17)] = inst_35263);

return statearr_35436;
})();
var statearr_35437_35504 = state_35381__$1;
(statearr_35437_35504[(2)] = null);

(statearr_35437_35504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (11))){
var inst_35282 = (state_35381[(7)]);
var inst_35262 = (state_35381[(15)]);
var inst_35282__$1 = cljs.core.seq.call(null,inst_35262);
var state_35381__$1 = (function (){var statearr_35438 = state_35381;
(statearr_35438[(7)] = inst_35282__$1);

return statearr_35438;
})();
if(inst_35282__$1){
var statearr_35439_35505 = state_35381__$1;
(statearr_35439_35505[(1)] = (16));

} else {
var statearr_35440_35506 = state_35381__$1;
(statearr_35440_35506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (9))){
var inst_35310 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
var statearr_35441_35507 = state_35381__$1;
(statearr_35441_35507[(2)] = inst_35310);

(statearr_35441_35507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (5))){
var inst_35260 = cljs.core.deref.call(null,cs);
var inst_35261 = cljs.core.seq.call(null,inst_35260);
var inst_35262 = inst_35261;
var inst_35263 = null;
var inst_35264 = (0);
var inst_35265 = (0);
var state_35381__$1 = (function (){var statearr_35442 = state_35381;
(statearr_35442[(13)] = inst_35265);

(statearr_35442[(14)] = inst_35264);

(statearr_35442[(15)] = inst_35262);

(statearr_35442[(17)] = inst_35263);

return statearr_35442;
})();
var statearr_35443_35508 = state_35381__$1;
(statearr_35443_35508[(2)] = null);

(statearr_35443_35508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (14))){
var state_35381__$1 = state_35381;
var statearr_35444_35509 = state_35381__$1;
(statearr_35444_35509[(2)] = null);

(statearr_35444_35509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (45))){
var inst_35371 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
var statearr_35445_35510 = state_35381__$1;
(statearr_35445_35510[(2)] = inst_35371);

(statearr_35445_35510[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (26))){
var inst_35313 = (state_35381[(29)]);
var inst_35367 = (state_35381[(2)]);
var inst_35368 = cljs.core.seq.call(null,inst_35313);
var state_35381__$1 = (function (){var statearr_35446 = state_35381;
(statearr_35446[(31)] = inst_35367);

return statearr_35446;
})();
if(inst_35368){
var statearr_35447_35511 = state_35381__$1;
(statearr_35447_35511[(1)] = (42));

} else {
var statearr_35448_35512 = state_35381__$1;
(statearr_35448_35512[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (16))){
var inst_35282 = (state_35381[(7)]);
var inst_35284 = cljs.core.chunked_seq_QMARK_.call(null,inst_35282);
var state_35381__$1 = state_35381;
if(inst_35284){
var statearr_35449_35513 = state_35381__$1;
(statearr_35449_35513[(1)] = (19));

} else {
var statearr_35450_35514 = state_35381__$1;
(statearr_35450_35514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (38))){
var inst_35360 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
var statearr_35451_35515 = state_35381__$1;
(statearr_35451_35515[(2)] = inst_35360);

(statearr_35451_35515[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (30))){
var state_35381__$1 = state_35381;
var statearr_35452_35516 = state_35381__$1;
(statearr_35452_35516[(2)] = null);

(statearr_35452_35516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (10))){
var inst_35265 = (state_35381[(13)]);
var inst_35263 = (state_35381[(17)]);
var inst_35271 = cljs.core._nth.call(null,inst_35263,inst_35265);
var inst_35272 = cljs.core.nth.call(null,inst_35271,(0),null);
var inst_35273 = cljs.core.nth.call(null,inst_35271,(1),null);
var state_35381__$1 = (function (){var statearr_35453 = state_35381;
(statearr_35453[(26)] = inst_35272);

return statearr_35453;
})();
if(cljs.core.truth_(inst_35273)){
var statearr_35454_35517 = state_35381__$1;
(statearr_35454_35517[(1)] = (13));

} else {
var statearr_35455_35518 = state_35381__$1;
(statearr_35455_35518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (18))){
var inst_35306 = (state_35381[(2)]);
var state_35381__$1 = state_35381;
var statearr_35456_35519 = state_35381__$1;
(statearr_35456_35519[(2)] = inst_35306);

(statearr_35456_35519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (42))){
var state_35381__$1 = state_35381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35381__$1,(45),dchan);
} else {
if((state_val_35382 === (37))){
var inst_35349 = (state_35381[(23)]);
var inst_35253 = (state_35381[(9)]);
var inst_35340 = (state_35381[(25)]);
var inst_35349__$1 = cljs.core.first.call(null,inst_35340);
var inst_35350 = cljs.core.async.put_BANG_.call(null,inst_35349__$1,inst_35253,done);
var state_35381__$1 = (function (){var statearr_35457 = state_35381;
(statearr_35457[(23)] = inst_35349__$1);

return statearr_35457;
})();
if(cljs.core.truth_(inst_35350)){
var statearr_35458_35520 = state_35381__$1;
(statearr_35458_35520[(1)] = (39));

} else {
var statearr_35459_35521 = state_35381__$1;
(statearr_35459_35521[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35382 === (8))){
var inst_35265 = (state_35381[(13)]);
var inst_35264 = (state_35381[(14)]);
var inst_35267 = (inst_35265 < inst_35264);
var inst_35268 = inst_35267;
var state_35381__$1 = state_35381;
if(cljs.core.truth_(inst_35268)){
var statearr_35460_35522 = state_35381__$1;
(statearr_35460_35522[(1)] = (10));

} else {
var statearr_35461_35523 = state_35381__$1;
(statearr_35461_35523[(1)] = (11));

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
});})(c__32314__auto___35469,cs,m,dchan,dctr,done))
;
return ((function (switch__32293__auto__,c__32314__auto___35469,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32294__auto__ = null;
var cljs$core$async$mult_$_state_machine__32294__auto____0 = (function (){
var statearr_35465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35465[(0)] = cljs$core$async$mult_$_state_machine__32294__auto__);

(statearr_35465[(1)] = (1));

return statearr_35465;
});
var cljs$core$async$mult_$_state_machine__32294__auto____1 = (function (state_35381){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_35381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e35466){if((e35466 instanceof Object)){
var ex__32297__auto__ = e35466;
var statearr_35467_35524 = state_35381;
(statearr_35467_35524[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35525 = state_35381;
state_35381 = G__35525;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32294__auto__ = function(state_35381){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32294__auto____1.call(this,state_35381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32294__auto____0;
cljs$core$async$mult_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32294__auto____1;
return cljs$core$async$mult_$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___35469,cs,m,dchan,dctr,done))
})();
var state__32316__auto__ = (function (){var statearr_35468 = f__32315__auto__.call(null);
(statearr_35468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___35469);

return statearr_35468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___35469,cs,m,dchan,dctr,done))
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
var args35526 = [];
var len__30571__auto___35529 = arguments.length;
var i__30572__auto___35530 = (0);
while(true){
if((i__30572__auto___35530 < len__30571__auto___35529)){
args35526.push((arguments[i__30572__auto___35530]));

var G__35531 = (i__30572__auto___35530 + (1));
i__30572__auto___35530 = G__35531;
continue;
} else {
}
break;
}

var G__35528 = args35526.length;
switch (G__35528) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35526.length)].join('')));

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
var x__30168__auto__ = (((m == null))?null:m);
var m__30169__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30168__auto__)]);
if(!((m__30169__auto__ == null))){
return m__30169__auto__.call(null,m,ch);
} else {
var m__30169__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30169__auto____$1 == null))){
return m__30169__auto____$1.call(null,m,ch);
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
var x__30168__auto__ = (((m == null))?null:m);
var m__30169__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30168__auto__)]);
if(!((m__30169__auto__ == null))){
return m__30169__auto__.call(null,m,ch);
} else {
var m__30169__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30169__auto____$1 == null))){
return m__30169__auto____$1.call(null,m,ch);
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
var x__30168__auto__ = (((m == null))?null:m);
var m__30169__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30168__auto__)]);
if(!((m__30169__auto__ == null))){
return m__30169__auto__.call(null,m);
} else {
var m__30169__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30169__auto____$1 == null))){
return m__30169__auto____$1.call(null,m);
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
var x__30168__auto__ = (((m == null))?null:m);
var m__30169__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30168__auto__)]);
if(!((m__30169__auto__ == null))){
return m__30169__auto__.call(null,m,state_map);
} else {
var m__30169__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30169__auto____$1 == null))){
return m__30169__auto____$1.call(null,m,state_map);
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
var x__30168__auto__ = (((m == null))?null:m);
var m__30169__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30168__auto__)]);
if(!((m__30169__auto__ == null))){
return m__30169__auto__.call(null,m,mode);
} else {
var m__30169__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30169__auto____$1 == null))){
return m__30169__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__30578__auto__ = [];
var len__30571__auto___35543 = arguments.length;
var i__30572__auto___35544 = (0);
while(true){
if((i__30572__auto___35544 < len__30571__auto___35543)){
args__30578__auto__.push((arguments[i__30572__auto___35544]));

var G__35545 = (i__30572__auto___35544 + (1));
i__30572__auto___35544 = G__35545;
continue;
} else {
}
break;
}

var argseq__30579__auto__ = ((((3) < args__30578__auto__.length))?(new cljs.core.IndexedSeq(args__30578__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30579__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35537){
var map__35538 = p__35537;
var map__35538__$1 = ((((!((map__35538 == null)))?((((map__35538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35538):map__35538);
var opts = map__35538__$1;
var statearr_35540_35546 = state;
(statearr_35540_35546[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__35538,map__35538__$1,opts){
return (function (val){
var statearr_35541_35547 = state;
(statearr_35541_35547[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35538,map__35538__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_35542_35548 = state;
(statearr_35542_35548[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35533){
var G__35534 = cljs.core.first.call(null,seq35533);
var seq35533__$1 = cljs.core.next.call(null,seq35533);
var G__35535 = cljs.core.first.call(null,seq35533__$1);
var seq35533__$2 = cljs.core.next.call(null,seq35533__$1);
var G__35536 = cljs.core.first.call(null,seq35533__$2);
var seq35533__$3 = cljs.core.next.call(null,seq35533__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35534,G__35535,G__35536,seq35533__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35712 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35713){
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
this.meta35713 = meta35713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35714,meta35713__$1){
var self__ = this;
var _35714__$1 = this;
return (new cljs.core.async.t_cljs$core$async35712(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35713__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35714){
var self__ = this;
var _35714__$1 = this;
return self__.meta35713;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35712.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35713","meta35713",-807514409,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35712";

cljs.core.async.t_cljs$core$async35712.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cljs.core.async/t_cljs$core$async35712");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35712 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35712(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35713){
return (new cljs.core.async.t_cljs$core$async35712(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35713));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35712(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32314__auto___35875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___35875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___35875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35812){
var state_val_35813 = (state_35812[(1)]);
if((state_val_35813 === (7))){
var inst_35730 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35814_35876 = state_35812__$1;
(statearr_35814_35876[(2)] = inst_35730);

(statearr_35814_35876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (20))){
var inst_35742 = (state_35812[(7)]);
var state_35812__$1 = state_35812;
var statearr_35815_35877 = state_35812__$1;
(statearr_35815_35877[(2)] = inst_35742);

(statearr_35815_35877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (27))){
var state_35812__$1 = state_35812;
var statearr_35816_35878 = state_35812__$1;
(statearr_35816_35878[(2)] = null);

(statearr_35816_35878[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (1))){
var inst_35718 = (state_35812[(8)]);
var inst_35718__$1 = calc_state.call(null);
var inst_35720 = (inst_35718__$1 == null);
var inst_35721 = cljs.core.not.call(null,inst_35720);
var state_35812__$1 = (function (){var statearr_35817 = state_35812;
(statearr_35817[(8)] = inst_35718__$1);

return statearr_35817;
})();
if(inst_35721){
var statearr_35818_35879 = state_35812__$1;
(statearr_35818_35879[(1)] = (2));

} else {
var statearr_35819_35880 = state_35812__$1;
(statearr_35819_35880[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (24))){
var inst_35772 = (state_35812[(9)]);
var inst_35765 = (state_35812[(10)]);
var inst_35786 = (state_35812[(11)]);
var inst_35786__$1 = inst_35765.call(null,inst_35772);
var state_35812__$1 = (function (){var statearr_35820 = state_35812;
(statearr_35820[(11)] = inst_35786__$1);

return statearr_35820;
})();
if(cljs.core.truth_(inst_35786__$1)){
var statearr_35821_35881 = state_35812__$1;
(statearr_35821_35881[(1)] = (29));

} else {
var statearr_35822_35882 = state_35812__$1;
(statearr_35822_35882[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (4))){
var inst_35733 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
if(cljs.core.truth_(inst_35733)){
var statearr_35823_35883 = state_35812__$1;
(statearr_35823_35883[(1)] = (8));

} else {
var statearr_35824_35884 = state_35812__$1;
(statearr_35824_35884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (15))){
var inst_35759 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
if(cljs.core.truth_(inst_35759)){
var statearr_35825_35885 = state_35812__$1;
(statearr_35825_35885[(1)] = (19));

} else {
var statearr_35826_35886 = state_35812__$1;
(statearr_35826_35886[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (21))){
var inst_35764 = (state_35812[(12)]);
var inst_35764__$1 = (state_35812[(2)]);
var inst_35765 = cljs.core.get.call(null,inst_35764__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35766 = cljs.core.get.call(null,inst_35764__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35767 = cljs.core.get.call(null,inst_35764__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35812__$1 = (function (){var statearr_35827 = state_35812;
(statearr_35827[(12)] = inst_35764__$1);

(statearr_35827[(10)] = inst_35765);

(statearr_35827[(13)] = inst_35766);

return statearr_35827;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35812__$1,(22),inst_35767);
} else {
if((state_val_35813 === (31))){
var inst_35794 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
if(cljs.core.truth_(inst_35794)){
var statearr_35828_35887 = state_35812__$1;
(statearr_35828_35887[(1)] = (32));

} else {
var statearr_35829_35888 = state_35812__$1;
(statearr_35829_35888[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (32))){
var inst_35771 = (state_35812[(14)]);
var state_35812__$1 = state_35812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35812__$1,(35),out,inst_35771);
} else {
if((state_val_35813 === (33))){
var inst_35764 = (state_35812[(12)]);
var inst_35742 = inst_35764;
var state_35812__$1 = (function (){var statearr_35830 = state_35812;
(statearr_35830[(7)] = inst_35742);

return statearr_35830;
})();
var statearr_35831_35889 = state_35812__$1;
(statearr_35831_35889[(2)] = null);

(statearr_35831_35889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (13))){
var inst_35742 = (state_35812[(7)]);
var inst_35749 = inst_35742.cljs$lang$protocol_mask$partition0$;
var inst_35750 = (inst_35749 & (64));
var inst_35751 = inst_35742.cljs$core$ISeq$;
var inst_35752 = (inst_35750) || (inst_35751);
var state_35812__$1 = state_35812;
if(cljs.core.truth_(inst_35752)){
var statearr_35832_35890 = state_35812__$1;
(statearr_35832_35890[(1)] = (16));

} else {
var statearr_35833_35891 = state_35812__$1;
(statearr_35833_35891[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (22))){
var inst_35771 = (state_35812[(14)]);
var inst_35772 = (state_35812[(9)]);
var inst_35770 = (state_35812[(2)]);
var inst_35771__$1 = cljs.core.nth.call(null,inst_35770,(0),null);
var inst_35772__$1 = cljs.core.nth.call(null,inst_35770,(1),null);
var inst_35773 = (inst_35771__$1 == null);
var inst_35774 = cljs.core._EQ_.call(null,inst_35772__$1,change);
var inst_35775 = (inst_35773) || (inst_35774);
var state_35812__$1 = (function (){var statearr_35834 = state_35812;
(statearr_35834[(14)] = inst_35771__$1);

(statearr_35834[(9)] = inst_35772__$1);

return statearr_35834;
})();
if(cljs.core.truth_(inst_35775)){
var statearr_35835_35892 = state_35812__$1;
(statearr_35835_35892[(1)] = (23));

} else {
var statearr_35836_35893 = state_35812__$1;
(statearr_35836_35893[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (36))){
var inst_35764 = (state_35812[(12)]);
var inst_35742 = inst_35764;
var state_35812__$1 = (function (){var statearr_35837 = state_35812;
(statearr_35837[(7)] = inst_35742);

return statearr_35837;
})();
var statearr_35838_35894 = state_35812__$1;
(statearr_35838_35894[(2)] = null);

(statearr_35838_35894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (29))){
var inst_35786 = (state_35812[(11)]);
var state_35812__$1 = state_35812;
var statearr_35839_35895 = state_35812__$1;
(statearr_35839_35895[(2)] = inst_35786);

(statearr_35839_35895[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (6))){
var state_35812__$1 = state_35812;
var statearr_35840_35896 = state_35812__$1;
(statearr_35840_35896[(2)] = false);

(statearr_35840_35896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (28))){
var inst_35782 = (state_35812[(2)]);
var inst_35783 = calc_state.call(null);
var inst_35742 = inst_35783;
var state_35812__$1 = (function (){var statearr_35841 = state_35812;
(statearr_35841[(7)] = inst_35742);

(statearr_35841[(15)] = inst_35782);

return statearr_35841;
})();
var statearr_35842_35897 = state_35812__$1;
(statearr_35842_35897[(2)] = null);

(statearr_35842_35897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (25))){
var inst_35808 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35843_35898 = state_35812__$1;
(statearr_35843_35898[(2)] = inst_35808);

(statearr_35843_35898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (34))){
var inst_35806 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35844_35899 = state_35812__$1;
(statearr_35844_35899[(2)] = inst_35806);

(statearr_35844_35899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (17))){
var state_35812__$1 = state_35812;
var statearr_35845_35900 = state_35812__$1;
(statearr_35845_35900[(2)] = false);

(statearr_35845_35900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (3))){
var state_35812__$1 = state_35812;
var statearr_35846_35901 = state_35812__$1;
(statearr_35846_35901[(2)] = false);

(statearr_35846_35901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (12))){
var inst_35810 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35812__$1,inst_35810);
} else {
if((state_val_35813 === (2))){
var inst_35718 = (state_35812[(8)]);
var inst_35723 = inst_35718.cljs$lang$protocol_mask$partition0$;
var inst_35724 = (inst_35723 & (64));
var inst_35725 = inst_35718.cljs$core$ISeq$;
var inst_35726 = (inst_35724) || (inst_35725);
var state_35812__$1 = state_35812;
if(cljs.core.truth_(inst_35726)){
var statearr_35847_35902 = state_35812__$1;
(statearr_35847_35902[(1)] = (5));

} else {
var statearr_35848_35903 = state_35812__$1;
(statearr_35848_35903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (23))){
var inst_35771 = (state_35812[(14)]);
var inst_35777 = (inst_35771 == null);
var state_35812__$1 = state_35812;
if(cljs.core.truth_(inst_35777)){
var statearr_35849_35904 = state_35812__$1;
(statearr_35849_35904[(1)] = (26));

} else {
var statearr_35850_35905 = state_35812__$1;
(statearr_35850_35905[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (35))){
var inst_35797 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
if(cljs.core.truth_(inst_35797)){
var statearr_35851_35906 = state_35812__$1;
(statearr_35851_35906[(1)] = (36));

} else {
var statearr_35852_35907 = state_35812__$1;
(statearr_35852_35907[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (19))){
var inst_35742 = (state_35812[(7)]);
var inst_35761 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35742);
var state_35812__$1 = state_35812;
var statearr_35853_35908 = state_35812__$1;
(statearr_35853_35908[(2)] = inst_35761);

(statearr_35853_35908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (11))){
var inst_35742 = (state_35812[(7)]);
var inst_35746 = (inst_35742 == null);
var inst_35747 = cljs.core.not.call(null,inst_35746);
var state_35812__$1 = state_35812;
if(inst_35747){
var statearr_35854_35909 = state_35812__$1;
(statearr_35854_35909[(1)] = (13));

} else {
var statearr_35855_35910 = state_35812__$1;
(statearr_35855_35910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (9))){
var inst_35718 = (state_35812[(8)]);
var state_35812__$1 = state_35812;
var statearr_35856_35911 = state_35812__$1;
(statearr_35856_35911[(2)] = inst_35718);

(statearr_35856_35911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (5))){
var state_35812__$1 = state_35812;
var statearr_35857_35912 = state_35812__$1;
(statearr_35857_35912[(2)] = true);

(statearr_35857_35912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (14))){
var state_35812__$1 = state_35812;
var statearr_35858_35913 = state_35812__$1;
(statearr_35858_35913[(2)] = false);

(statearr_35858_35913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (26))){
var inst_35772 = (state_35812[(9)]);
var inst_35779 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35772);
var state_35812__$1 = state_35812;
var statearr_35859_35914 = state_35812__$1;
(statearr_35859_35914[(2)] = inst_35779);

(statearr_35859_35914[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (16))){
var state_35812__$1 = state_35812;
var statearr_35860_35915 = state_35812__$1;
(statearr_35860_35915[(2)] = true);

(statearr_35860_35915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (38))){
var inst_35802 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35861_35916 = state_35812__$1;
(statearr_35861_35916[(2)] = inst_35802);

(statearr_35861_35916[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (30))){
var inst_35772 = (state_35812[(9)]);
var inst_35765 = (state_35812[(10)]);
var inst_35766 = (state_35812[(13)]);
var inst_35789 = cljs.core.empty_QMARK_.call(null,inst_35765);
var inst_35790 = inst_35766.call(null,inst_35772);
var inst_35791 = cljs.core.not.call(null,inst_35790);
var inst_35792 = (inst_35789) && (inst_35791);
var state_35812__$1 = state_35812;
var statearr_35862_35917 = state_35812__$1;
(statearr_35862_35917[(2)] = inst_35792);

(statearr_35862_35917[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (10))){
var inst_35718 = (state_35812[(8)]);
var inst_35738 = (state_35812[(2)]);
var inst_35739 = cljs.core.get.call(null,inst_35738,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35740 = cljs.core.get.call(null,inst_35738,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35741 = cljs.core.get.call(null,inst_35738,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35742 = inst_35718;
var state_35812__$1 = (function (){var statearr_35863 = state_35812;
(statearr_35863[(7)] = inst_35742);

(statearr_35863[(16)] = inst_35739);

(statearr_35863[(17)] = inst_35740);

(statearr_35863[(18)] = inst_35741);

return statearr_35863;
})();
var statearr_35864_35918 = state_35812__$1;
(statearr_35864_35918[(2)] = null);

(statearr_35864_35918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (18))){
var inst_35756 = (state_35812[(2)]);
var state_35812__$1 = state_35812;
var statearr_35865_35919 = state_35812__$1;
(statearr_35865_35919[(2)] = inst_35756);

(statearr_35865_35919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (37))){
var state_35812__$1 = state_35812;
var statearr_35866_35920 = state_35812__$1;
(statearr_35866_35920[(2)] = null);

(statearr_35866_35920[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35813 === (8))){
var inst_35718 = (state_35812[(8)]);
var inst_35735 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35718);
var state_35812__$1 = state_35812;
var statearr_35867_35921 = state_35812__$1;
(statearr_35867_35921[(2)] = inst_35735);

(statearr_35867_35921[(1)] = (10));


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
});})(c__32314__auto___35875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32293__auto__,c__32314__auto___35875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32294__auto__ = null;
var cljs$core$async$mix_$_state_machine__32294__auto____0 = (function (){
var statearr_35871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35871[(0)] = cljs$core$async$mix_$_state_machine__32294__auto__);

(statearr_35871[(1)] = (1));

return statearr_35871;
});
var cljs$core$async$mix_$_state_machine__32294__auto____1 = (function (state_35812){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_35812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e35872){if((e35872 instanceof Object)){
var ex__32297__auto__ = e35872;
var statearr_35873_35922 = state_35812;
(statearr_35873_35922[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35923 = state_35812;
state_35812 = G__35923;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32294__auto__ = function(state_35812){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32294__auto____1.call(this,state_35812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32294__auto____0;
cljs$core$async$mix_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32294__auto____1;
return cljs$core$async$mix_$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___35875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32316__auto__ = (function (){var statearr_35874 = f__32315__auto__.call(null);
(statearr_35874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___35875);

return statearr_35874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___35875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__30168__auto__ = (((p == null))?null:p);
var m__30169__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30168__auto__)]);
if(!((m__30169__auto__ == null))){
return m__30169__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30169__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30169__auto____$1 == null))){
return m__30169__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__30168__auto__ = (((p == null))?null:p);
var m__30169__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30168__auto__)]);
if(!((m__30169__auto__ == null))){
return m__30169__auto__.call(null,p,v,ch);
} else {
var m__30169__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30169__auto____$1 == null))){
return m__30169__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args35924 = [];
var len__30571__auto___35927 = arguments.length;
var i__30572__auto___35928 = (0);
while(true){
if((i__30572__auto___35928 < len__30571__auto___35927)){
args35924.push((arguments[i__30572__auto___35928]));

var G__35929 = (i__30572__auto___35928 + (1));
i__30572__auto___35928 = G__35929;
continue;
} else {
}
break;
}

var G__35926 = args35924.length;
switch (G__35926) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35924.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30168__auto__ = (((p == null))?null:p);
var m__30169__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30168__auto__)]);
if(!((m__30169__auto__ == null))){
return m__30169__auto__.call(null,p);
} else {
var m__30169__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30169__auto____$1 == null))){
return m__30169__auto____$1.call(null,p);
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
var x__30168__auto__ = (((p == null))?null:p);
var m__30169__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30168__auto__)]);
if(!((m__30169__auto__ == null))){
return m__30169__auto__.call(null,p,v);
} else {
var m__30169__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30169__auto____$1 == null))){
return m__30169__auto____$1.call(null,p,v);
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
var args35932 = [];
var len__30571__auto___36057 = arguments.length;
var i__30572__auto___36058 = (0);
while(true){
if((i__30572__auto___36058 < len__30571__auto___36057)){
args35932.push((arguments[i__30572__auto___36058]));

var G__36059 = (i__30572__auto___36058 + (1));
i__30572__auto___36058 = G__36059;
continue;
} else {
}
break;
}

var G__35934 = args35932.length;
switch (G__35934) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35932.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__29513__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__29513__auto__,mults){
return (function (p1__35931_SHARP_){
if(cljs.core.truth_(p1__35931_SHARP_.call(null,topic))){
return p1__35931_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35931_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__29513__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35935 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35936){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35936 = meta35936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35937,meta35936__$1){
var self__ = this;
var _35937__$1 = this;
return (new cljs.core.async.t_cljs$core$async35935(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35936__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35937){
var self__ = this;
var _35937__$1 = this;
return self__.meta35936;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35935.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35936","meta35936",-863620210,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35935";

cljs.core.async.t_cljs$core$async35935.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cljs.core.async/t_cljs$core$async35935");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35935 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35935(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35936){
return (new cljs.core.async.t_cljs$core$async35935(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35936));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35935(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32314__auto___36061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___36061,mults,ensure_mult,p){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___36061,mults,ensure_mult,p){
return (function (state_36009){
var state_val_36010 = (state_36009[(1)]);
if((state_val_36010 === (7))){
var inst_36005 = (state_36009[(2)]);
var state_36009__$1 = state_36009;
var statearr_36011_36062 = state_36009__$1;
(statearr_36011_36062[(2)] = inst_36005);

(statearr_36011_36062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (20))){
var state_36009__$1 = state_36009;
var statearr_36012_36063 = state_36009__$1;
(statearr_36012_36063[(2)] = null);

(statearr_36012_36063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (1))){
var state_36009__$1 = state_36009;
var statearr_36013_36064 = state_36009__$1;
(statearr_36013_36064[(2)] = null);

(statearr_36013_36064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (24))){
var inst_35988 = (state_36009[(7)]);
var inst_35997 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35988);
var state_36009__$1 = state_36009;
var statearr_36014_36065 = state_36009__$1;
(statearr_36014_36065[(2)] = inst_35997);

(statearr_36014_36065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (4))){
var inst_35940 = (state_36009[(8)]);
var inst_35940__$1 = (state_36009[(2)]);
var inst_35941 = (inst_35940__$1 == null);
var state_36009__$1 = (function (){var statearr_36015 = state_36009;
(statearr_36015[(8)] = inst_35940__$1);

return statearr_36015;
})();
if(cljs.core.truth_(inst_35941)){
var statearr_36016_36066 = state_36009__$1;
(statearr_36016_36066[(1)] = (5));

} else {
var statearr_36017_36067 = state_36009__$1;
(statearr_36017_36067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (15))){
var inst_35982 = (state_36009[(2)]);
var state_36009__$1 = state_36009;
var statearr_36018_36068 = state_36009__$1;
(statearr_36018_36068[(2)] = inst_35982);

(statearr_36018_36068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (21))){
var inst_36002 = (state_36009[(2)]);
var state_36009__$1 = (function (){var statearr_36019 = state_36009;
(statearr_36019[(9)] = inst_36002);

return statearr_36019;
})();
var statearr_36020_36069 = state_36009__$1;
(statearr_36020_36069[(2)] = null);

(statearr_36020_36069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (13))){
var inst_35964 = (state_36009[(10)]);
var inst_35966 = cljs.core.chunked_seq_QMARK_.call(null,inst_35964);
var state_36009__$1 = state_36009;
if(inst_35966){
var statearr_36021_36070 = state_36009__$1;
(statearr_36021_36070[(1)] = (16));

} else {
var statearr_36022_36071 = state_36009__$1;
(statearr_36022_36071[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (22))){
var inst_35994 = (state_36009[(2)]);
var state_36009__$1 = state_36009;
if(cljs.core.truth_(inst_35994)){
var statearr_36023_36072 = state_36009__$1;
(statearr_36023_36072[(1)] = (23));

} else {
var statearr_36024_36073 = state_36009__$1;
(statearr_36024_36073[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (6))){
var inst_35940 = (state_36009[(8)]);
var inst_35988 = (state_36009[(7)]);
var inst_35990 = (state_36009[(11)]);
var inst_35988__$1 = topic_fn.call(null,inst_35940);
var inst_35989 = cljs.core.deref.call(null,mults);
var inst_35990__$1 = cljs.core.get.call(null,inst_35989,inst_35988__$1);
var state_36009__$1 = (function (){var statearr_36025 = state_36009;
(statearr_36025[(7)] = inst_35988__$1);

(statearr_36025[(11)] = inst_35990__$1);

return statearr_36025;
})();
if(cljs.core.truth_(inst_35990__$1)){
var statearr_36026_36074 = state_36009__$1;
(statearr_36026_36074[(1)] = (19));

} else {
var statearr_36027_36075 = state_36009__$1;
(statearr_36027_36075[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (25))){
var inst_35999 = (state_36009[(2)]);
var state_36009__$1 = state_36009;
var statearr_36028_36076 = state_36009__$1;
(statearr_36028_36076[(2)] = inst_35999);

(statearr_36028_36076[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (17))){
var inst_35964 = (state_36009[(10)]);
var inst_35973 = cljs.core.first.call(null,inst_35964);
var inst_35974 = cljs.core.async.muxch_STAR_.call(null,inst_35973);
var inst_35975 = cljs.core.async.close_BANG_.call(null,inst_35974);
var inst_35976 = cljs.core.next.call(null,inst_35964);
var inst_35950 = inst_35976;
var inst_35951 = null;
var inst_35952 = (0);
var inst_35953 = (0);
var state_36009__$1 = (function (){var statearr_36029 = state_36009;
(statearr_36029[(12)] = inst_35975);

(statearr_36029[(13)] = inst_35952);

(statearr_36029[(14)] = inst_35950);

(statearr_36029[(15)] = inst_35951);

(statearr_36029[(16)] = inst_35953);

return statearr_36029;
})();
var statearr_36030_36077 = state_36009__$1;
(statearr_36030_36077[(2)] = null);

(statearr_36030_36077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (3))){
var inst_36007 = (state_36009[(2)]);
var state_36009__$1 = state_36009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36009__$1,inst_36007);
} else {
if((state_val_36010 === (12))){
var inst_35984 = (state_36009[(2)]);
var state_36009__$1 = state_36009;
var statearr_36031_36078 = state_36009__$1;
(statearr_36031_36078[(2)] = inst_35984);

(statearr_36031_36078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (2))){
var state_36009__$1 = state_36009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36009__$1,(4),ch);
} else {
if((state_val_36010 === (23))){
var state_36009__$1 = state_36009;
var statearr_36032_36079 = state_36009__$1;
(statearr_36032_36079[(2)] = null);

(statearr_36032_36079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (19))){
var inst_35940 = (state_36009[(8)]);
var inst_35990 = (state_36009[(11)]);
var inst_35992 = cljs.core.async.muxch_STAR_.call(null,inst_35990);
var state_36009__$1 = state_36009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36009__$1,(22),inst_35992,inst_35940);
} else {
if((state_val_36010 === (11))){
var inst_35964 = (state_36009[(10)]);
var inst_35950 = (state_36009[(14)]);
var inst_35964__$1 = cljs.core.seq.call(null,inst_35950);
var state_36009__$1 = (function (){var statearr_36033 = state_36009;
(statearr_36033[(10)] = inst_35964__$1);

return statearr_36033;
})();
if(inst_35964__$1){
var statearr_36034_36080 = state_36009__$1;
(statearr_36034_36080[(1)] = (13));

} else {
var statearr_36035_36081 = state_36009__$1;
(statearr_36035_36081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (9))){
var inst_35986 = (state_36009[(2)]);
var state_36009__$1 = state_36009;
var statearr_36036_36082 = state_36009__$1;
(statearr_36036_36082[(2)] = inst_35986);

(statearr_36036_36082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (5))){
var inst_35947 = cljs.core.deref.call(null,mults);
var inst_35948 = cljs.core.vals.call(null,inst_35947);
var inst_35949 = cljs.core.seq.call(null,inst_35948);
var inst_35950 = inst_35949;
var inst_35951 = null;
var inst_35952 = (0);
var inst_35953 = (0);
var state_36009__$1 = (function (){var statearr_36037 = state_36009;
(statearr_36037[(13)] = inst_35952);

(statearr_36037[(14)] = inst_35950);

(statearr_36037[(15)] = inst_35951);

(statearr_36037[(16)] = inst_35953);

return statearr_36037;
})();
var statearr_36038_36083 = state_36009__$1;
(statearr_36038_36083[(2)] = null);

(statearr_36038_36083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (14))){
var state_36009__$1 = state_36009;
var statearr_36042_36084 = state_36009__$1;
(statearr_36042_36084[(2)] = null);

(statearr_36042_36084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (16))){
var inst_35964 = (state_36009[(10)]);
var inst_35968 = cljs.core.chunk_first.call(null,inst_35964);
var inst_35969 = cljs.core.chunk_rest.call(null,inst_35964);
var inst_35970 = cljs.core.count.call(null,inst_35968);
var inst_35950 = inst_35969;
var inst_35951 = inst_35968;
var inst_35952 = inst_35970;
var inst_35953 = (0);
var state_36009__$1 = (function (){var statearr_36043 = state_36009;
(statearr_36043[(13)] = inst_35952);

(statearr_36043[(14)] = inst_35950);

(statearr_36043[(15)] = inst_35951);

(statearr_36043[(16)] = inst_35953);

return statearr_36043;
})();
var statearr_36044_36085 = state_36009__$1;
(statearr_36044_36085[(2)] = null);

(statearr_36044_36085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (10))){
var inst_35952 = (state_36009[(13)]);
var inst_35950 = (state_36009[(14)]);
var inst_35951 = (state_36009[(15)]);
var inst_35953 = (state_36009[(16)]);
var inst_35958 = cljs.core._nth.call(null,inst_35951,inst_35953);
var inst_35959 = cljs.core.async.muxch_STAR_.call(null,inst_35958);
var inst_35960 = cljs.core.async.close_BANG_.call(null,inst_35959);
var inst_35961 = (inst_35953 + (1));
var tmp36039 = inst_35952;
var tmp36040 = inst_35950;
var tmp36041 = inst_35951;
var inst_35950__$1 = tmp36040;
var inst_35951__$1 = tmp36041;
var inst_35952__$1 = tmp36039;
var inst_35953__$1 = inst_35961;
var state_36009__$1 = (function (){var statearr_36045 = state_36009;
(statearr_36045[(13)] = inst_35952__$1);

(statearr_36045[(17)] = inst_35960);

(statearr_36045[(14)] = inst_35950__$1);

(statearr_36045[(15)] = inst_35951__$1);

(statearr_36045[(16)] = inst_35953__$1);

return statearr_36045;
})();
var statearr_36046_36086 = state_36009__$1;
(statearr_36046_36086[(2)] = null);

(statearr_36046_36086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (18))){
var inst_35979 = (state_36009[(2)]);
var state_36009__$1 = state_36009;
var statearr_36047_36087 = state_36009__$1;
(statearr_36047_36087[(2)] = inst_35979);

(statearr_36047_36087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36010 === (8))){
var inst_35952 = (state_36009[(13)]);
var inst_35953 = (state_36009[(16)]);
var inst_35955 = (inst_35953 < inst_35952);
var inst_35956 = inst_35955;
var state_36009__$1 = state_36009;
if(cljs.core.truth_(inst_35956)){
var statearr_36048_36088 = state_36009__$1;
(statearr_36048_36088[(1)] = (10));

} else {
var statearr_36049_36089 = state_36009__$1;
(statearr_36049_36089[(1)] = (11));

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
});})(c__32314__auto___36061,mults,ensure_mult,p))
;
return ((function (switch__32293__auto__,c__32314__auto___36061,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32294__auto__ = null;
var cljs$core$async$state_machine__32294__auto____0 = (function (){
var statearr_36053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36053[(0)] = cljs$core$async$state_machine__32294__auto__);

(statearr_36053[(1)] = (1));

return statearr_36053;
});
var cljs$core$async$state_machine__32294__auto____1 = (function (state_36009){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_36009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e36054){if((e36054 instanceof Object)){
var ex__32297__auto__ = e36054;
var statearr_36055_36090 = state_36009;
(statearr_36055_36090[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36091 = state_36009;
state_36009 = G__36091;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$state_machine__32294__auto__ = function(state_36009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32294__auto____1.call(this,state_36009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32294__auto____0;
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32294__auto____1;
return cljs$core$async$state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___36061,mults,ensure_mult,p))
})();
var state__32316__auto__ = (function (){var statearr_36056 = f__32315__auto__.call(null);
(statearr_36056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___36061);

return statearr_36056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___36061,mults,ensure_mult,p))
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
var args36092 = [];
var len__30571__auto___36095 = arguments.length;
var i__30572__auto___36096 = (0);
while(true){
if((i__30572__auto___36096 < len__30571__auto___36095)){
args36092.push((arguments[i__30572__auto___36096]));

var G__36097 = (i__30572__auto___36096 + (1));
i__30572__auto___36096 = G__36097;
continue;
} else {
}
break;
}

var G__36094 = args36092.length;
switch (G__36094) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36092.length)].join('')));

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
var args36099 = [];
var len__30571__auto___36102 = arguments.length;
var i__30572__auto___36103 = (0);
while(true){
if((i__30572__auto___36103 < len__30571__auto___36102)){
args36099.push((arguments[i__30572__auto___36103]));

var G__36104 = (i__30572__auto___36103 + (1));
i__30572__auto___36103 = G__36104;
continue;
} else {
}
break;
}

var G__36101 = args36099.length;
switch (G__36101) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36099.length)].join('')));

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
var args36106 = [];
var len__30571__auto___36177 = arguments.length;
var i__30572__auto___36178 = (0);
while(true){
if((i__30572__auto___36178 < len__30571__auto___36177)){
args36106.push((arguments[i__30572__auto___36178]));

var G__36179 = (i__30572__auto___36178 + (1));
i__30572__auto___36178 = G__36179;
continue;
} else {
}
break;
}

var G__36108 = args36106.length;
switch (G__36108) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36106.length)].join('')));

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
var c__32314__auto___36181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___36181,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___36181,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36147){
var state_val_36148 = (state_36147[(1)]);
if((state_val_36148 === (7))){
var state_36147__$1 = state_36147;
var statearr_36149_36182 = state_36147__$1;
(statearr_36149_36182[(2)] = null);

(statearr_36149_36182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (1))){
var state_36147__$1 = state_36147;
var statearr_36150_36183 = state_36147__$1;
(statearr_36150_36183[(2)] = null);

(statearr_36150_36183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (4))){
var inst_36111 = (state_36147[(7)]);
var inst_36113 = (inst_36111 < cnt);
var state_36147__$1 = state_36147;
if(cljs.core.truth_(inst_36113)){
var statearr_36151_36184 = state_36147__$1;
(statearr_36151_36184[(1)] = (6));

} else {
var statearr_36152_36185 = state_36147__$1;
(statearr_36152_36185[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (15))){
var inst_36143 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
var statearr_36153_36186 = state_36147__$1;
(statearr_36153_36186[(2)] = inst_36143);

(statearr_36153_36186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (13))){
var inst_36136 = cljs.core.async.close_BANG_.call(null,out);
var state_36147__$1 = state_36147;
var statearr_36154_36187 = state_36147__$1;
(statearr_36154_36187[(2)] = inst_36136);

(statearr_36154_36187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (6))){
var state_36147__$1 = state_36147;
var statearr_36155_36188 = state_36147__$1;
(statearr_36155_36188[(2)] = null);

(statearr_36155_36188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (3))){
var inst_36145 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36147__$1,inst_36145);
} else {
if((state_val_36148 === (12))){
var inst_36133 = (state_36147[(8)]);
var inst_36133__$1 = (state_36147[(2)]);
var inst_36134 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36133__$1);
var state_36147__$1 = (function (){var statearr_36156 = state_36147;
(statearr_36156[(8)] = inst_36133__$1);

return statearr_36156;
})();
if(cljs.core.truth_(inst_36134)){
var statearr_36157_36189 = state_36147__$1;
(statearr_36157_36189[(1)] = (13));

} else {
var statearr_36158_36190 = state_36147__$1;
(statearr_36158_36190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (2))){
var inst_36110 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36111 = (0);
var state_36147__$1 = (function (){var statearr_36159 = state_36147;
(statearr_36159[(9)] = inst_36110);

(statearr_36159[(7)] = inst_36111);

return statearr_36159;
})();
var statearr_36160_36191 = state_36147__$1;
(statearr_36160_36191[(2)] = null);

(statearr_36160_36191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (11))){
var inst_36111 = (state_36147[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36147,(10),Object,null,(9));
var inst_36120 = chs__$1.call(null,inst_36111);
var inst_36121 = done.call(null,inst_36111);
var inst_36122 = cljs.core.async.take_BANG_.call(null,inst_36120,inst_36121);
var state_36147__$1 = state_36147;
var statearr_36161_36192 = state_36147__$1;
(statearr_36161_36192[(2)] = inst_36122);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36147__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (9))){
var inst_36111 = (state_36147[(7)]);
var inst_36124 = (state_36147[(2)]);
var inst_36125 = (inst_36111 + (1));
var inst_36111__$1 = inst_36125;
var state_36147__$1 = (function (){var statearr_36162 = state_36147;
(statearr_36162[(10)] = inst_36124);

(statearr_36162[(7)] = inst_36111__$1);

return statearr_36162;
})();
var statearr_36163_36193 = state_36147__$1;
(statearr_36163_36193[(2)] = null);

(statearr_36163_36193[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (5))){
var inst_36131 = (state_36147[(2)]);
var state_36147__$1 = (function (){var statearr_36164 = state_36147;
(statearr_36164[(11)] = inst_36131);

return statearr_36164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36147__$1,(12),dchan);
} else {
if((state_val_36148 === (14))){
var inst_36133 = (state_36147[(8)]);
var inst_36138 = cljs.core.apply.call(null,f,inst_36133);
var state_36147__$1 = state_36147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36147__$1,(16),out,inst_36138);
} else {
if((state_val_36148 === (16))){
var inst_36140 = (state_36147[(2)]);
var state_36147__$1 = (function (){var statearr_36165 = state_36147;
(statearr_36165[(12)] = inst_36140);

return statearr_36165;
})();
var statearr_36166_36194 = state_36147__$1;
(statearr_36166_36194[(2)] = null);

(statearr_36166_36194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (10))){
var inst_36115 = (state_36147[(2)]);
var inst_36116 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36147__$1 = (function (){var statearr_36167 = state_36147;
(statearr_36167[(13)] = inst_36115);

return statearr_36167;
})();
var statearr_36168_36195 = state_36147__$1;
(statearr_36168_36195[(2)] = inst_36116);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36147__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36148 === (8))){
var inst_36129 = (state_36147[(2)]);
var state_36147__$1 = state_36147;
var statearr_36169_36196 = state_36147__$1;
(statearr_36169_36196[(2)] = inst_36129);

(statearr_36169_36196[(1)] = (5));


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
});})(c__32314__auto___36181,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32293__auto__,c__32314__auto___36181,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32294__auto__ = null;
var cljs$core$async$state_machine__32294__auto____0 = (function (){
var statearr_36173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36173[(0)] = cljs$core$async$state_machine__32294__auto__);

(statearr_36173[(1)] = (1));

return statearr_36173;
});
var cljs$core$async$state_machine__32294__auto____1 = (function (state_36147){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_36147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e36174){if((e36174 instanceof Object)){
var ex__32297__auto__ = e36174;
var statearr_36175_36197 = state_36147;
(statearr_36175_36197[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36198 = state_36147;
state_36147 = G__36198;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$state_machine__32294__auto__ = function(state_36147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32294__auto____1.call(this,state_36147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32294__auto____0;
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32294__auto____1;
return cljs$core$async$state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___36181,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32316__auto__ = (function (){var statearr_36176 = f__32315__auto__.call(null);
(statearr_36176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___36181);

return statearr_36176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___36181,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args36200 = [];
var len__30571__auto___36256 = arguments.length;
var i__30572__auto___36257 = (0);
while(true){
if((i__30572__auto___36257 < len__30571__auto___36256)){
args36200.push((arguments[i__30572__auto___36257]));

var G__36258 = (i__30572__auto___36257 + (1));
i__30572__auto___36257 = G__36258;
continue;
} else {
}
break;
}

var G__36202 = args36200.length;
switch (G__36202) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36200.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32314__auto___36260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___36260,out){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___36260,out){
return (function (state_36232){
var state_val_36233 = (state_36232[(1)]);
if((state_val_36233 === (7))){
var inst_36212 = (state_36232[(7)]);
var inst_36211 = (state_36232[(8)]);
var inst_36211__$1 = (state_36232[(2)]);
var inst_36212__$1 = cljs.core.nth.call(null,inst_36211__$1,(0),null);
var inst_36213 = cljs.core.nth.call(null,inst_36211__$1,(1),null);
var inst_36214 = (inst_36212__$1 == null);
var state_36232__$1 = (function (){var statearr_36234 = state_36232;
(statearr_36234[(7)] = inst_36212__$1);

(statearr_36234[(8)] = inst_36211__$1);

(statearr_36234[(9)] = inst_36213);

return statearr_36234;
})();
if(cljs.core.truth_(inst_36214)){
var statearr_36235_36261 = state_36232__$1;
(statearr_36235_36261[(1)] = (8));

} else {
var statearr_36236_36262 = state_36232__$1;
(statearr_36236_36262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (1))){
var inst_36203 = cljs.core.vec.call(null,chs);
var inst_36204 = inst_36203;
var state_36232__$1 = (function (){var statearr_36237 = state_36232;
(statearr_36237[(10)] = inst_36204);

return statearr_36237;
})();
var statearr_36238_36263 = state_36232__$1;
(statearr_36238_36263[(2)] = null);

(statearr_36238_36263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (4))){
var inst_36204 = (state_36232[(10)]);
var state_36232__$1 = state_36232;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36232__$1,(7),inst_36204);
} else {
if((state_val_36233 === (6))){
var inst_36228 = (state_36232[(2)]);
var state_36232__$1 = state_36232;
var statearr_36239_36264 = state_36232__$1;
(statearr_36239_36264[(2)] = inst_36228);

(statearr_36239_36264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (3))){
var inst_36230 = (state_36232[(2)]);
var state_36232__$1 = state_36232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36232__$1,inst_36230);
} else {
if((state_val_36233 === (2))){
var inst_36204 = (state_36232[(10)]);
var inst_36206 = cljs.core.count.call(null,inst_36204);
var inst_36207 = (inst_36206 > (0));
var state_36232__$1 = state_36232;
if(cljs.core.truth_(inst_36207)){
var statearr_36241_36265 = state_36232__$1;
(statearr_36241_36265[(1)] = (4));

} else {
var statearr_36242_36266 = state_36232__$1;
(statearr_36242_36266[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (11))){
var inst_36204 = (state_36232[(10)]);
var inst_36221 = (state_36232[(2)]);
var tmp36240 = inst_36204;
var inst_36204__$1 = tmp36240;
var state_36232__$1 = (function (){var statearr_36243 = state_36232;
(statearr_36243[(11)] = inst_36221);

(statearr_36243[(10)] = inst_36204__$1);

return statearr_36243;
})();
var statearr_36244_36267 = state_36232__$1;
(statearr_36244_36267[(2)] = null);

(statearr_36244_36267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (9))){
var inst_36212 = (state_36232[(7)]);
var state_36232__$1 = state_36232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36232__$1,(11),out,inst_36212);
} else {
if((state_val_36233 === (5))){
var inst_36226 = cljs.core.async.close_BANG_.call(null,out);
var state_36232__$1 = state_36232;
var statearr_36245_36268 = state_36232__$1;
(statearr_36245_36268[(2)] = inst_36226);

(statearr_36245_36268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (10))){
var inst_36224 = (state_36232[(2)]);
var state_36232__$1 = state_36232;
var statearr_36246_36269 = state_36232__$1;
(statearr_36246_36269[(2)] = inst_36224);

(statearr_36246_36269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (8))){
var inst_36212 = (state_36232[(7)]);
var inst_36211 = (state_36232[(8)]);
var inst_36204 = (state_36232[(10)]);
var inst_36213 = (state_36232[(9)]);
var inst_36216 = (function (){var cs = inst_36204;
var vec__36209 = inst_36211;
var v = inst_36212;
var c = inst_36213;
return ((function (cs,vec__36209,v,c,inst_36212,inst_36211,inst_36204,inst_36213,state_val_36233,c__32314__auto___36260,out){
return (function (p1__36199_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36199_SHARP_);
});
;})(cs,vec__36209,v,c,inst_36212,inst_36211,inst_36204,inst_36213,state_val_36233,c__32314__auto___36260,out))
})();
var inst_36217 = cljs.core.filterv.call(null,inst_36216,inst_36204);
var inst_36204__$1 = inst_36217;
var state_36232__$1 = (function (){var statearr_36247 = state_36232;
(statearr_36247[(10)] = inst_36204__$1);

return statearr_36247;
})();
var statearr_36248_36270 = state_36232__$1;
(statearr_36248_36270[(2)] = null);

(statearr_36248_36270[(1)] = (2));


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
});})(c__32314__auto___36260,out))
;
return ((function (switch__32293__auto__,c__32314__auto___36260,out){
return (function() {
var cljs$core$async$state_machine__32294__auto__ = null;
var cljs$core$async$state_machine__32294__auto____0 = (function (){
var statearr_36252 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36252[(0)] = cljs$core$async$state_machine__32294__auto__);

(statearr_36252[(1)] = (1));

return statearr_36252;
});
var cljs$core$async$state_machine__32294__auto____1 = (function (state_36232){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_36232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e36253){if((e36253 instanceof Object)){
var ex__32297__auto__ = e36253;
var statearr_36254_36271 = state_36232;
(statearr_36254_36271[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36272 = state_36232;
state_36232 = G__36272;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$state_machine__32294__auto__ = function(state_36232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32294__auto____1.call(this,state_36232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32294__auto____0;
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32294__auto____1;
return cljs$core$async$state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___36260,out))
})();
var state__32316__auto__ = (function (){var statearr_36255 = f__32315__auto__.call(null);
(statearr_36255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___36260);

return statearr_36255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___36260,out))
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
var args36273 = [];
var len__30571__auto___36322 = arguments.length;
var i__30572__auto___36323 = (0);
while(true){
if((i__30572__auto___36323 < len__30571__auto___36322)){
args36273.push((arguments[i__30572__auto___36323]));

var G__36324 = (i__30572__auto___36323 + (1));
i__30572__auto___36323 = G__36324;
continue;
} else {
}
break;
}

var G__36275 = args36273.length;
switch (G__36275) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36273.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32314__auto___36326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___36326,out){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___36326,out){
return (function (state_36299){
var state_val_36300 = (state_36299[(1)]);
if((state_val_36300 === (7))){
var inst_36281 = (state_36299[(7)]);
var inst_36281__$1 = (state_36299[(2)]);
var inst_36282 = (inst_36281__$1 == null);
var inst_36283 = cljs.core.not.call(null,inst_36282);
var state_36299__$1 = (function (){var statearr_36301 = state_36299;
(statearr_36301[(7)] = inst_36281__$1);

return statearr_36301;
})();
if(inst_36283){
var statearr_36302_36327 = state_36299__$1;
(statearr_36302_36327[(1)] = (8));

} else {
var statearr_36303_36328 = state_36299__$1;
(statearr_36303_36328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36300 === (1))){
var inst_36276 = (0);
var state_36299__$1 = (function (){var statearr_36304 = state_36299;
(statearr_36304[(8)] = inst_36276);

return statearr_36304;
})();
var statearr_36305_36329 = state_36299__$1;
(statearr_36305_36329[(2)] = null);

(statearr_36305_36329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36300 === (4))){
var state_36299__$1 = state_36299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36299__$1,(7),ch);
} else {
if((state_val_36300 === (6))){
var inst_36294 = (state_36299[(2)]);
var state_36299__$1 = state_36299;
var statearr_36306_36330 = state_36299__$1;
(statearr_36306_36330[(2)] = inst_36294);

(statearr_36306_36330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36300 === (3))){
var inst_36296 = (state_36299[(2)]);
var inst_36297 = cljs.core.async.close_BANG_.call(null,out);
var state_36299__$1 = (function (){var statearr_36307 = state_36299;
(statearr_36307[(9)] = inst_36296);

return statearr_36307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36299__$1,inst_36297);
} else {
if((state_val_36300 === (2))){
var inst_36276 = (state_36299[(8)]);
var inst_36278 = (inst_36276 < n);
var state_36299__$1 = state_36299;
if(cljs.core.truth_(inst_36278)){
var statearr_36308_36331 = state_36299__$1;
(statearr_36308_36331[(1)] = (4));

} else {
var statearr_36309_36332 = state_36299__$1;
(statearr_36309_36332[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36300 === (11))){
var inst_36276 = (state_36299[(8)]);
var inst_36286 = (state_36299[(2)]);
var inst_36287 = (inst_36276 + (1));
var inst_36276__$1 = inst_36287;
var state_36299__$1 = (function (){var statearr_36310 = state_36299;
(statearr_36310[(10)] = inst_36286);

(statearr_36310[(8)] = inst_36276__$1);

return statearr_36310;
})();
var statearr_36311_36333 = state_36299__$1;
(statearr_36311_36333[(2)] = null);

(statearr_36311_36333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36300 === (9))){
var state_36299__$1 = state_36299;
var statearr_36312_36334 = state_36299__$1;
(statearr_36312_36334[(2)] = null);

(statearr_36312_36334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36300 === (5))){
var state_36299__$1 = state_36299;
var statearr_36313_36335 = state_36299__$1;
(statearr_36313_36335[(2)] = null);

(statearr_36313_36335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36300 === (10))){
var inst_36291 = (state_36299[(2)]);
var state_36299__$1 = state_36299;
var statearr_36314_36336 = state_36299__$1;
(statearr_36314_36336[(2)] = inst_36291);

(statearr_36314_36336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36300 === (8))){
var inst_36281 = (state_36299[(7)]);
var state_36299__$1 = state_36299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36299__$1,(11),out,inst_36281);
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
});})(c__32314__auto___36326,out))
;
return ((function (switch__32293__auto__,c__32314__auto___36326,out){
return (function() {
var cljs$core$async$state_machine__32294__auto__ = null;
var cljs$core$async$state_machine__32294__auto____0 = (function (){
var statearr_36318 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36318[(0)] = cljs$core$async$state_machine__32294__auto__);

(statearr_36318[(1)] = (1));

return statearr_36318;
});
var cljs$core$async$state_machine__32294__auto____1 = (function (state_36299){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_36299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e36319){if((e36319 instanceof Object)){
var ex__32297__auto__ = e36319;
var statearr_36320_36337 = state_36299;
(statearr_36320_36337[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36338 = state_36299;
state_36299 = G__36338;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$state_machine__32294__auto__ = function(state_36299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32294__auto____1.call(this,state_36299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32294__auto____0;
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32294__auto____1;
return cljs$core$async$state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___36326,out))
})();
var state__32316__auto__ = (function (){var statearr_36321 = f__32315__auto__.call(null);
(statearr_36321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___36326);

return statearr_36321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___36326,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36346 = (function (map_LT_,f,ch,meta36347){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36347 = meta36347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36348,meta36347__$1){
var self__ = this;
var _36348__$1 = this;
return (new cljs.core.async.t_cljs$core$async36346(self__.map_LT_,self__.f,self__.ch,meta36347__$1));
});

cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36348){
var self__ = this;
var _36348__$1 = this;
return self__.meta36347;
});

cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36349 = (function (map_LT_,f,ch,meta36347,_,fn1,meta36350){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36347 = meta36347;
this._ = _;
this.fn1 = fn1;
this.meta36350 = meta36350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36351,meta36350__$1){
var self__ = this;
var _36351__$1 = this;
return (new cljs.core.async.t_cljs$core$async36349(self__.map_LT_,self__.f,self__.ch,self__.meta36347,self__._,self__.fn1,meta36350__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36351){
var self__ = this;
var _36351__$1 = this;
return self__.meta36350;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36339_SHARP_){
return f1.call(null,(((p1__36339_SHARP_ == null))?null:self__.f.call(null,p1__36339_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36349.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36347","meta36347",800743982,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36346","cljs.core.async/t_cljs$core$async36346",399204442,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36350","meta36350",620264329,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36349";

cljs.core.async.t_cljs$core$async36349.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cljs.core.async/t_cljs$core$async36349");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36349 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36349(map_LT___$1,f__$1,ch__$1,meta36347__$1,___$2,fn1__$1,meta36350){
return (new cljs.core.async.t_cljs$core$async36349(map_LT___$1,f__$1,ch__$1,meta36347__$1,___$2,fn1__$1,meta36350));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36349(self__.map_LT_,self__.f,self__.ch,self__.meta36347,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__29501__auto__ = ret;
if(cljs.core.truth_(and__29501__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__29501__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36347","meta36347",800743982,null)], null);
});

cljs.core.async.t_cljs$core$async36346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36346";

cljs.core.async.t_cljs$core$async36346.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cljs.core.async/t_cljs$core$async36346");
});

cljs.core.async.__GT_t_cljs$core$async36346 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36346(map_LT___$1,f__$1,ch__$1,meta36347){
return (new cljs.core.async.t_cljs$core$async36346(map_LT___$1,f__$1,ch__$1,meta36347));
});

}

return (new cljs.core.async.t_cljs$core$async36346(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36355 = (function (map_GT_,f,ch,meta36356){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta36356 = meta36356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36357,meta36356__$1){
var self__ = this;
var _36357__$1 = this;
return (new cljs.core.async.t_cljs$core$async36355(self__.map_GT_,self__.f,self__.ch,meta36356__$1));
});

cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36357){
var self__ = this;
var _36357__$1 = this;
return self__.meta36356;
});

cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36355.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36356","meta36356",869544725,null)], null);
});

cljs.core.async.t_cljs$core$async36355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36355";

cljs.core.async.t_cljs$core$async36355.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cljs.core.async/t_cljs$core$async36355");
});

cljs.core.async.__GT_t_cljs$core$async36355 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36355(map_GT___$1,f__$1,ch__$1,meta36356){
return (new cljs.core.async.t_cljs$core$async36355(map_GT___$1,f__$1,ch__$1,meta36356));
});

}

return (new cljs.core.async.t_cljs$core$async36355(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36361 = (function (filter_GT_,p,ch,meta36362){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta36362 = meta36362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36363,meta36362__$1){
var self__ = this;
var _36363__$1 = this;
return (new cljs.core.async.t_cljs$core$async36361(self__.filter_GT_,self__.p,self__.ch,meta36362__$1));
});

cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36363){
var self__ = this;
var _36363__$1 = this;
return self__.meta36362;
});

cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36362","meta36362",1854340596,null)], null);
});

cljs.core.async.t_cljs$core$async36361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36361";

cljs.core.async.t_cljs$core$async36361.cljs$lang$ctorPrWriter = (function (this__30111__auto__,writer__30112__auto__,opt__30113__auto__){
return cljs.core._write.call(null,writer__30112__auto__,"cljs.core.async/t_cljs$core$async36361");
});

cljs.core.async.__GT_t_cljs$core$async36361 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36361(filter_GT___$1,p__$1,ch__$1,meta36362){
return (new cljs.core.async.t_cljs$core$async36361(filter_GT___$1,p__$1,ch__$1,meta36362));
});

}

return (new cljs.core.async.t_cljs$core$async36361(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args36364 = [];
var len__30571__auto___36408 = arguments.length;
var i__30572__auto___36409 = (0);
while(true){
if((i__30572__auto___36409 < len__30571__auto___36408)){
args36364.push((arguments[i__30572__auto___36409]));

var G__36410 = (i__30572__auto___36409 + (1));
i__30572__auto___36409 = G__36410;
continue;
} else {
}
break;
}

var G__36366 = args36364.length;
switch (G__36366) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36364.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32314__auto___36412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___36412,out){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___36412,out){
return (function (state_36387){
var state_val_36388 = (state_36387[(1)]);
if((state_val_36388 === (7))){
var inst_36383 = (state_36387[(2)]);
var state_36387__$1 = state_36387;
var statearr_36389_36413 = state_36387__$1;
(statearr_36389_36413[(2)] = inst_36383);

(statearr_36389_36413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (1))){
var state_36387__$1 = state_36387;
var statearr_36390_36414 = state_36387__$1;
(statearr_36390_36414[(2)] = null);

(statearr_36390_36414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (4))){
var inst_36369 = (state_36387[(7)]);
var inst_36369__$1 = (state_36387[(2)]);
var inst_36370 = (inst_36369__$1 == null);
var state_36387__$1 = (function (){var statearr_36391 = state_36387;
(statearr_36391[(7)] = inst_36369__$1);

return statearr_36391;
})();
if(cljs.core.truth_(inst_36370)){
var statearr_36392_36415 = state_36387__$1;
(statearr_36392_36415[(1)] = (5));

} else {
var statearr_36393_36416 = state_36387__$1;
(statearr_36393_36416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (6))){
var inst_36369 = (state_36387[(7)]);
var inst_36374 = p.call(null,inst_36369);
var state_36387__$1 = state_36387;
if(cljs.core.truth_(inst_36374)){
var statearr_36394_36417 = state_36387__$1;
(statearr_36394_36417[(1)] = (8));

} else {
var statearr_36395_36418 = state_36387__$1;
(statearr_36395_36418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (3))){
var inst_36385 = (state_36387[(2)]);
var state_36387__$1 = state_36387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36387__$1,inst_36385);
} else {
if((state_val_36388 === (2))){
var state_36387__$1 = state_36387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36387__$1,(4),ch);
} else {
if((state_val_36388 === (11))){
var inst_36377 = (state_36387[(2)]);
var state_36387__$1 = state_36387;
var statearr_36396_36419 = state_36387__$1;
(statearr_36396_36419[(2)] = inst_36377);

(statearr_36396_36419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (9))){
var state_36387__$1 = state_36387;
var statearr_36397_36420 = state_36387__$1;
(statearr_36397_36420[(2)] = null);

(statearr_36397_36420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (5))){
var inst_36372 = cljs.core.async.close_BANG_.call(null,out);
var state_36387__$1 = state_36387;
var statearr_36398_36421 = state_36387__$1;
(statearr_36398_36421[(2)] = inst_36372);

(statearr_36398_36421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (10))){
var inst_36380 = (state_36387[(2)]);
var state_36387__$1 = (function (){var statearr_36399 = state_36387;
(statearr_36399[(8)] = inst_36380);

return statearr_36399;
})();
var statearr_36400_36422 = state_36387__$1;
(statearr_36400_36422[(2)] = null);

(statearr_36400_36422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (8))){
var inst_36369 = (state_36387[(7)]);
var state_36387__$1 = state_36387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36387__$1,(11),out,inst_36369);
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
});})(c__32314__auto___36412,out))
;
return ((function (switch__32293__auto__,c__32314__auto___36412,out){
return (function() {
var cljs$core$async$state_machine__32294__auto__ = null;
var cljs$core$async$state_machine__32294__auto____0 = (function (){
var statearr_36404 = [null,null,null,null,null,null,null,null,null];
(statearr_36404[(0)] = cljs$core$async$state_machine__32294__auto__);

(statearr_36404[(1)] = (1));

return statearr_36404;
});
var cljs$core$async$state_machine__32294__auto____1 = (function (state_36387){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_36387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e36405){if((e36405 instanceof Object)){
var ex__32297__auto__ = e36405;
var statearr_36406_36423 = state_36387;
(statearr_36406_36423[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36424 = state_36387;
state_36387 = G__36424;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$state_machine__32294__auto__ = function(state_36387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32294__auto____1.call(this,state_36387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32294__auto____0;
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32294__auto____1;
return cljs$core$async$state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___36412,out))
})();
var state__32316__auto__ = (function (){var statearr_36407 = f__32315__auto__.call(null);
(statearr_36407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___36412);

return statearr_36407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___36412,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36425 = [];
var len__30571__auto___36428 = arguments.length;
var i__30572__auto___36429 = (0);
while(true){
if((i__30572__auto___36429 < len__30571__auto___36428)){
args36425.push((arguments[i__30572__auto___36429]));

var G__36430 = (i__30572__auto___36429 + (1));
i__30572__auto___36429 = G__36430;
continue;
} else {
}
break;
}

var G__36427 = args36425.length;
switch (G__36427) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36425.length)].join('')));

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
var c__32314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto__){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto__){
return (function (state_36597){
var state_val_36598 = (state_36597[(1)]);
if((state_val_36598 === (7))){
var inst_36593 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
var statearr_36599_36640 = state_36597__$1;
(statearr_36599_36640[(2)] = inst_36593);

(statearr_36599_36640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (20))){
var inst_36563 = (state_36597[(7)]);
var inst_36574 = (state_36597[(2)]);
var inst_36575 = cljs.core.next.call(null,inst_36563);
var inst_36549 = inst_36575;
var inst_36550 = null;
var inst_36551 = (0);
var inst_36552 = (0);
var state_36597__$1 = (function (){var statearr_36600 = state_36597;
(statearr_36600[(8)] = inst_36574);

(statearr_36600[(9)] = inst_36552);

(statearr_36600[(10)] = inst_36551);

(statearr_36600[(11)] = inst_36550);

(statearr_36600[(12)] = inst_36549);

return statearr_36600;
})();
var statearr_36601_36641 = state_36597__$1;
(statearr_36601_36641[(2)] = null);

(statearr_36601_36641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (1))){
var state_36597__$1 = state_36597;
var statearr_36602_36642 = state_36597__$1;
(statearr_36602_36642[(2)] = null);

(statearr_36602_36642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (4))){
var inst_36538 = (state_36597[(13)]);
var inst_36538__$1 = (state_36597[(2)]);
var inst_36539 = (inst_36538__$1 == null);
var state_36597__$1 = (function (){var statearr_36603 = state_36597;
(statearr_36603[(13)] = inst_36538__$1);

return statearr_36603;
})();
if(cljs.core.truth_(inst_36539)){
var statearr_36604_36643 = state_36597__$1;
(statearr_36604_36643[(1)] = (5));

} else {
var statearr_36605_36644 = state_36597__$1;
(statearr_36605_36644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (15))){
var state_36597__$1 = state_36597;
var statearr_36609_36645 = state_36597__$1;
(statearr_36609_36645[(2)] = null);

(statearr_36609_36645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (21))){
var state_36597__$1 = state_36597;
var statearr_36610_36646 = state_36597__$1;
(statearr_36610_36646[(2)] = null);

(statearr_36610_36646[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (13))){
var inst_36552 = (state_36597[(9)]);
var inst_36551 = (state_36597[(10)]);
var inst_36550 = (state_36597[(11)]);
var inst_36549 = (state_36597[(12)]);
var inst_36559 = (state_36597[(2)]);
var inst_36560 = (inst_36552 + (1));
var tmp36606 = inst_36551;
var tmp36607 = inst_36550;
var tmp36608 = inst_36549;
var inst_36549__$1 = tmp36608;
var inst_36550__$1 = tmp36607;
var inst_36551__$1 = tmp36606;
var inst_36552__$1 = inst_36560;
var state_36597__$1 = (function (){var statearr_36611 = state_36597;
(statearr_36611[(9)] = inst_36552__$1);

(statearr_36611[(10)] = inst_36551__$1);

(statearr_36611[(11)] = inst_36550__$1);

(statearr_36611[(12)] = inst_36549__$1);

(statearr_36611[(14)] = inst_36559);

return statearr_36611;
})();
var statearr_36612_36647 = state_36597__$1;
(statearr_36612_36647[(2)] = null);

(statearr_36612_36647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (22))){
var state_36597__$1 = state_36597;
var statearr_36613_36648 = state_36597__$1;
(statearr_36613_36648[(2)] = null);

(statearr_36613_36648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (6))){
var inst_36538 = (state_36597[(13)]);
var inst_36547 = f.call(null,inst_36538);
var inst_36548 = cljs.core.seq.call(null,inst_36547);
var inst_36549 = inst_36548;
var inst_36550 = null;
var inst_36551 = (0);
var inst_36552 = (0);
var state_36597__$1 = (function (){var statearr_36614 = state_36597;
(statearr_36614[(9)] = inst_36552);

(statearr_36614[(10)] = inst_36551);

(statearr_36614[(11)] = inst_36550);

(statearr_36614[(12)] = inst_36549);

return statearr_36614;
})();
var statearr_36615_36649 = state_36597__$1;
(statearr_36615_36649[(2)] = null);

(statearr_36615_36649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (17))){
var inst_36563 = (state_36597[(7)]);
var inst_36567 = cljs.core.chunk_first.call(null,inst_36563);
var inst_36568 = cljs.core.chunk_rest.call(null,inst_36563);
var inst_36569 = cljs.core.count.call(null,inst_36567);
var inst_36549 = inst_36568;
var inst_36550 = inst_36567;
var inst_36551 = inst_36569;
var inst_36552 = (0);
var state_36597__$1 = (function (){var statearr_36616 = state_36597;
(statearr_36616[(9)] = inst_36552);

(statearr_36616[(10)] = inst_36551);

(statearr_36616[(11)] = inst_36550);

(statearr_36616[(12)] = inst_36549);

return statearr_36616;
})();
var statearr_36617_36650 = state_36597__$1;
(statearr_36617_36650[(2)] = null);

(statearr_36617_36650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (3))){
var inst_36595 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36597__$1,inst_36595);
} else {
if((state_val_36598 === (12))){
var inst_36583 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
var statearr_36618_36651 = state_36597__$1;
(statearr_36618_36651[(2)] = inst_36583);

(statearr_36618_36651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (2))){
var state_36597__$1 = state_36597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36597__$1,(4),in$);
} else {
if((state_val_36598 === (23))){
var inst_36591 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
var statearr_36619_36652 = state_36597__$1;
(statearr_36619_36652[(2)] = inst_36591);

(statearr_36619_36652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (19))){
var inst_36578 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
var statearr_36620_36653 = state_36597__$1;
(statearr_36620_36653[(2)] = inst_36578);

(statearr_36620_36653[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (11))){
var inst_36549 = (state_36597[(12)]);
var inst_36563 = (state_36597[(7)]);
var inst_36563__$1 = cljs.core.seq.call(null,inst_36549);
var state_36597__$1 = (function (){var statearr_36621 = state_36597;
(statearr_36621[(7)] = inst_36563__$1);

return statearr_36621;
})();
if(inst_36563__$1){
var statearr_36622_36654 = state_36597__$1;
(statearr_36622_36654[(1)] = (14));

} else {
var statearr_36623_36655 = state_36597__$1;
(statearr_36623_36655[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (9))){
var inst_36585 = (state_36597[(2)]);
var inst_36586 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36597__$1 = (function (){var statearr_36624 = state_36597;
(statearr_36624[(15)] = inst_36585);

return statearr_36624;
})();
if(cljs.core.truth_(inst_36586)){
var statearr_36625_36656 = state_36597__$1;
(statearr_36625_36656[(1)] = (21));

} else {
var statearr_36626_36657 = state_36597__$1;
(statearr_36626_36657[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (5))){
var inst_36541 = cljs.core.async.close_BANG_.call(null,out);
var state_36597__$1 = state_36597;
var statearr_36627_36658 = state_36597__$1;
(statearr_36627_36658[(2)] = inst_36541);

(statearr_36627_36658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (14))){
var inst_36563 = (state_36597[(7)]);
var inst_36565 = cljs.core.chunked_seq_QMARK_.call(null,inst_36563);
var state_36597__$1 = state_36597;
if(inst_36565){
var statearr_36628_36659 = state_36597__$1;
(statearr_36628_36659[(1)] = (17));

} else {
var statearr_36629_36660 = state_36597__$1;
(statearr_36629_36660[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (16))){
var inst_36581 = (state_36597[(2)]);
var state_36597__$1 = state_36597;
var statearr_36630_36661 = state_36597__$1;
(statearr_36630_36661[(2)] = inst_36581);

(statearr_36630_36661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36598 === (10))){
var inst_36552 = (state_36597[(9)]);
var inst_36550 = (state_36597[(11)]);
var inst_36557 = cljs.core._nth.call(null,inst_36550,inst_36552);
var state_36597__$1 = state_36597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36597__$1,(13),out,inst_36557);
} else {
if((state_val_36598 === (18))){
var inst_36563 = (state_36597[(7)]);
var inst_36572 = cljs.core.first.call(null,inst_36563);
var state_36597__$1 = state_36597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36597__$1,(20),out,inst_36572);
} else {
if((state_val_36598 === (8))){
var inst_36552 = (state_36597[(9)]);
var inst_36551 = (state_36597[(10)]);
var inst_36554 = (inst_36552 < inst_36551);
var inst_36555 = inst_36554;
var state_36597__$1 = state_36597;
if(cljs.core.truth_(inst_36555)){
var statearr_36631_36662 = state_36597__$1;
(statearr_36631_36662[(1)] = (10));

} else {
var statearr_36632_36663 = state_36597__$1;
(statearr_36632_36663[(1)] = (11));

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
});})(c__32314__auto__))
;
return ((function (switch__32293__auto__,c__32314__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32294__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32294__auto____0 = (function (){
var statearr_36636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36636[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32294__auto__);

(statearr_36636[(1)] = (1));

return statearr_36636;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32294__auto____1 = (function (state_36597){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_36597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e36637){if((e36637 instanceof Object)){
var ex__32297__auto__ = e36637;
var statearr_36638_36664 = state_36597;
(statearr_36638_36664[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36665 = state_36597;
state_36597 = G__36665;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32294__auto__ = function(state_36597){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32294__auto____1.call(this,state_36597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32294__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32294__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto__))
})();
var state__32316__auto__ = (function (){var statearr_36639 = f__32315__auto__.call(null);
(statearr_36639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto__);

return statearr_36639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto__))
);

return c__32314__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args36666 = [];
var len__30571__auto___36669 = arguments.length;
var i__30572__auto___36670 = (0);
while(true){
if((i__30572__auto___36670 < len__30571__auto___36669)){
args36666.push((arguments[i__30572__auto___36670]));

var G__36671 = (i__30572__auto___36670 + (1));
i__30572__auto___36670 = G__36671;
continue;
} else {
}
break;
}

var G__36668 = args36666.length;
switch (G__36668) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36666.length)].join('')));

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
var args36673 = [];
var len__30571__auto___36676 = arguments.length;
var i__30572__auto___36677 = (0);
while(true){
if((i__30572__auto___36677 < len__30571__auto___36676)){
args36673.push((arguments[i__30572__auto___36677]));

var G__36678 = (i__30572__auto___36677 + (1));
i__30572__auto___36677 = G__36678;
continue;
} else {
}
break;
}

var G__36675 = args36673.length;
switch (G__36675) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36673.length)].join('')));

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
var args36680 = [];
var len__30571__auto___36731 = arguments.length;
var i__30572__auto___36732 = (0);
while(true){
if((i__30572__auto___36732 < len__30571__auto___36731)){
args36680.push((arguments[i__30572__auto___36732]));

var G__36733 = (i__30572__auto___36732 + (1));
i__30572__auto___36732 = G__36733;
continue;
} else {
}
break;
}

var G__36682 = args36680.length;
switch (G__36682) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36680.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32314__auto___36735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___36735,out){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___36735,out){
return (function (state_36706){
var state_val_36707 = (state_36706[(1)]);
if((state_val_36707 === (7))){
var inst_36701 = (state_36706[(2)]);
var state_36706__$1 = state_36706;
var statearr_36708_36736 = state_36706__$1;
(statearr_36708_36736[(2)] = inst_36701);

(statearr_36708_36736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (1))){
var inst_36683 = null;
var state_36706__$1 = (function (){var statearr_36709 = state_36706;
(statearr_36709[(7)] = inst_36683);

return statearr_36709;
})();
var statearr_36710_36737 = state_36706__$1;
(statearr_36710_36737[(2)] = null);

(statearr_36710_36737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (4))){
var inst_36686 = (state_36706[(8)]);
var inst_36686__$1 = (state_36706[(2)]);
var inst_36687 = (inst_36686__$1 == null);
var inst_36688 = cljs.core.not.call(null,inst_36687);
var state_36706__$1 = (function (){var statearr_36711 = state_36706;
(statearr_36711[(8)] = inst_36686__$1);

return statearr_36711;
})();
if(inst_36688){
var statearr_36712_36738 = state_36706__$1;
(statearr_36712_36738[(1)] = (5));

} else {
var statearr_36713_36739 = state_36706__$1;
(statearr_36713_36739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (6))){
var state_36706__$1 = state_36706;
var statearr_36714_36740 = state_36706__$1;
(statearr_36714_36740[(2)] = null);

(statearr_36714_36740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (3))){
var inst_36703 = (state_36706[(2)]);
var inst_36704 = cljs.core.async.close_BANG_.call(null,out);
var state_36706__$1 = (function (){var statearr_36715 = state_36706;
(statearr_36715[(9)] = inst_36703);

return statearr_36715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36706__$1,inst_36704);
} else {
if((state_val_36707 === (2))){
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36706__$1,(4),ch);
} else {
if((state_val_36707 === (11))){
var inst_36686 = (state_36706[(8)]);
var inst_36695 = (state_36706[(2)]);
var inst_36683 = inst_36686;
var state_36706__$1 = (function (){var statearr_36716 = state_36706;
(statearr_36716[(7)] = inst_36683);

(statearr_36716[(10)] = inst_36695);

return statearr_36716;
})();
var statearr_36717_36741 = state_36706__$1;
(statearr_36717_36741[(2)] = null);

(statearr_36717_36741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (9))){
var inst_36686 = (state_36706[(8)]);
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36706__$1,(11),out,inst_36686);
} else {
if((state_val_36707 === (5))){
var inst_36686 = (state_36706[(8)]);
var inst_36683 = (state_36706[(7)]);
var inst_36690 = cljs.core._EQ_.call(null,inst_36686,inst_36683);
var state_36706__$1 = state_36706;
if(inst_36690){
var statearr_36719_36742 = state_36706__$1;
(statearr_36719_36742[(1)] = (8));

} else {
var statearr_36720_36743 = state_36706__$1;
(statearr_36720_36743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (10))){
var inst_36698 = (state_36706[(2)]);
var state_36706__$1 = state_36706;
var statearr_36721_36744 = state_36706__$1;
(statearr_36721_36744[(2)] = inst_36698);

(statearr_36721_36744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (8))){
var inst_36683 = (state_36706[(7)]);
var tmp36718 = inst_36683;
var inst_36683__$1 = tmp36718;
var state_36706__$1 = (function (){var statearr_36722 = state_36706;
(statearr_36722[(7)] = inst_36683__$1);

return statearr_36722;
})();
var statearr_36723_36745 = state_36706__$1;
(statearr_36723_36745[(2)] = null);

(statearr_36723_36745[(1)] = (2));


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
});})(c__32314__auto___36735,out))
;
return ((function (switch__32293__auto__,c__32314__auto___36735,out){
return (function() {
var cljs$core$async$state_machine__32294__auto__ = null;
var cljs$core$async$state_machine__32294__auto____0 = (function (){
var statearr_36727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36727[(0)] = cljs$core$async$state_machine__32294__auto__);

(statearr_36727[(1)] = (1));

return statearr_36727;
});
var cljs$core$async$state_machine__32294__auto____1 = (function (state_36706){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_36706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e36728){if((e36728 instanceof Object)){
var ex__32297__auto__ = e36728;
var statearr_36729_36746 = state_36706;
(statearr_36729_36746[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36747 = state_36706;
state_36706 = G__36747;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$state_machine__32294__auto__ = function(state_36706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32294__auto____1.call(this,state_36706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32294__auto____0;
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32294__auto____1;
return cljs$core$async$state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___36735,out))
})();
var state__32316__auto__ = (function (){var statearr_36730 = f__32315__auto__.call(null);
(statearr_36730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___36735);

return statearr_36730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___36735,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36748 = [];
var len__30571__auto___36818 = arguments.length;
var i__30572__auto___36819 = (0);
while(true){
if((i__30572__auto___36819 < len__30571__auto___36818)){
args36748.push((arguments[i__30572__auto___36819]));

var G__36820 = (i__30572__auto___36819 + (1));
i__30572__auto___36819 = G__36820;
continue;
} else {
}
break;
}

var G__36750 = args36748.length;
switch (G__36750) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36748.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32314__auto___36822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___36822,out){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___36822,out){
return (function (state_36788){
var state_val_36789 = (state_36788[(1)]);
if((state_val_36789 === (7))){
var inst_36784 = (state_36788[(2)]);
var state_36788__$1 = state_36788;
var statearr_36790_36823 = state_36788__$1;
(statearr_36790_36823[(2)] = inst_36784);

(statearr_36790_36823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (1))){
var inst_36751 = (new Array(n));
var inst_36752 = inst_36751;
var inst_36753 = (0);
var state_36788__$1 = (function (){var statearr_36791 = state_36788;
(statearr_36791[(7)] = inst_36753);

(statearr_36791[(8)] = inst_36752);

return statearr_36791;
})();
var statearr_36792_36824 = state_36788__$1;
(statearr_36792_36824[(2)] = null);

(statearr_36792_36824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (4))){
var inst_36756 = (state_36788[(9)]);
var inst_36756__$1 = (state_36788[(2)]);
var inst_36757 = (inst_36756__$1 == null);
var inst_36758 = cljs.core.not.call(null,inst_36757);
var state_36788__$1 = (function (){var statearr_36793 = state_36788;
(statearr_36793[(9)] = inst_36756__$1);

return statearr_36793;
})();
if(inst_36758){
var statearr_36794_36825 = state_36788__$1;
(statearr_36794_36825[(1)] = (5));

} else {
var statearr_36795_36826 = state_36788__$1;
(statearr_36795_36826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (15))){
var inst_36778 = (state_36788[(2)]);
var state_36788__$1 = state_36788;
var statearr_36796_36827 = state_36788__$1;
(statearr_36796_36827[(2)] = inst_36778);

(statearr_36796_36827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (13))){
var state_36788__$1 = state_36788;
var statearr_36797_36828 = state_36788__$1;
(statearr_36797_36828[(2)] = null);

(statearr_36797_36828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (6))){
var inst_36753 = (state_36788[(7)]);
var inst_36774 = (inst_36753 > (0));
var state_36788__$1 = state_36788;
if(cljs.core.truth_(inst_36774)){
var statearr_36798_36829 = state_36788__$1;
(statearr_36798_36829[(1)] = (12));

} else {
var statearr_36799_36830 = state_36788__$1;
(statearr_36799_36830[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (3))){
var inst_36786 = (state_36788[(2)]);
var state_36788__$1 = state_36788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36788__$1,inst_36786);
} else {
if((state_val_36789 === (12))){
var inst_36752 = (state_36788[(8)]);
var inst_36776 = cljs.core.vec.call(null,inst_36752);
var state_36788__$1 = state_36788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36788__$1,(15),out,inst_36776);
} else {
if((state_val_36789 === (2))){
var state_36788__$1 = state_36788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36788__$1,(4),ch);
} else {
if((state_val_36789 === (11))){
var inst_36768 = (state_36788[(2)]);
var inst_36769 = (new Array(n));
var inst_36752 = inst_36769;
var inst_36753 = (0);
var state_36788__$1 = (function (){var statearr_36800 = state_36788;
(statearr_36800[(7)] = inst_36753);

(statearr_36800[(10)] = inst_36768);

(statearr_36800[(8)] = inst_36752);

return statearr_36800;
})();
var statearr_36801_36831 = state_36788__$1;
(statearr_36801_36831[(2)] = null);

(statearr_36801_36831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (9))){
var inst_36752 = (state_36788[(8)]);
var inst_36766 = cljs.core.vec.call(null,inst_36752);
var state_36788__$1 = state_36788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36788__$1,(11),out,inst_36766);
} else {
if((state_val_36789 === (5))){
var inst_36753 = (state_36788[(7)]);
var inst_36756 = (state_36788[(9)]);
var inst_36761 = (state_36788[(11)]);
var inst_36752 = (state_36788[(8)]);
var inst_36760 = (inst_36752[inst_36753] = inst_36756);
var inst_36761__$1 = (inst_36753 + (1));
var inst_36762 = (inst_36761__$1 < n);
var state_36788__$1 = (function (){var statearr_36802 = state_36788;
(statearr_36802[(11)] = inst_36761__$1);

(statearr_36802[(12)] = inst_36760);

return statearr_36802;
})();
if(cljs.core.truth_(inst_36762)){
var statearr_36803_36832 = state_36788__$1;
(statearr_36803_36832[(1)] = (8));

} else {
var statearr_36804_36833 = state_36788__$1;
(statearr_36804_36833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (14))){
var inst_36781 = (state_36788[(2)]);
var inst_36782 = cljs.core.async.close_BANG_.call(null,out);
var state_36788__$1 = (function (){var statearr_36806 = state_36788;
(statearr_36806[(13)] = inst_36781);

return statearr_36806;
})();
var statearr_36807_36834 = state_36788__$1;
(statearr_36807_36834[(2)] = inst_36782);

(statearr_36807_36834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (10))){
var inst_36772 = (state_36788[(2)]);
var state_36788__$1 = state_36788;
var statearr_36808_36835 = state_36788__$1;
(statearr_36808_36835[(2)] = inst_36772);

(statearr_36808_36835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (8))){
var inst_36761 = (state_36788[(11)]);
var inst_36752 = (state_36788[(8)]);
var tmp36805 = inst_36752;
var inst_36752__$1 = tmp36805;
var inst_36753 = inst_36761;
var state_36788__$1 = (function (){var statearr_36809 = state_36788;
(statearr_36809[(7)] = inst_36753);

(statearr_36809[(8)] = inst_36752__$1);

return statearr_36809;
})();
var statearr_36810_36836 = state_36788__$1;
(statearr_36810_36836[(2)] = null);

(statearr_36810_36836[(1)] = (2));


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
});})(c__32314__auto___36822,out))
;
return ((function (switch__32293__auto__,c__32314__auto___36822,out){
return (function() {
var cljs$core$async$state_machine__32294__auto__ = null;
var cljs$core$async$state_machine__32294__auto____0 = (function (){
var statearr_36814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36814[(0)] = cljs$core$async$state_machine__32294__auto__);

(statearr_36814[(1)] = (1));

return statearr_36814;
});
var cljs$core$async$state_machine__32294__auto____1 = (function (state_36788){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_36788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e36815){if((e36815 instanceof Object)){
var ex__32297__auto__ = e36815;
var statearr_36816_36837 = state_36788;
(statearr_36816_36837[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36838 = state_36788;
state_36788 = G__36838;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$state_machine__32294__auto__ = function(state_36788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32294__auto____1.call(this,state_36788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32294__auto____0;
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32294__auto____1;
return cljs$core$async$state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___36822,out))
})();
var state__32316__auto__ = (function (){var statearr_36817 = f__32315__auto__.call(null);
(statearr_36817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___36822);

return statearr_36817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___36822,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36839 = [];
var len__30571__auto___36913 = arguments.length;
var i__30572__auto___36914 = (0);
while(true){
if((i__30572__auto___36914 < len__30571__auto___36913)){
args36839.push((arguments[i__30572__auto___36914]));

var G__36915 = (i__30572__auto___36914 + (1));
i__30572__auto___36914 = G__36915;
continue;
} else {
}
break;
}

var G__36841 = args36839.length;
switch (G__36841) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36839.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32314__auto___36917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___36917,out){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___36917,out){
return (function (state_36883){
var state_val_36884 = (state_36883[(1)]);
if((state_val_36884 === (7))){
var inst_36879 = (state_36883[(2)]);
var state_36883__$1 = state_36883;
var statearr_36885_36918 = state_36883__$1;
(statearr_36885_36918[(2)] = inst_36879);

(statearr_36885_36918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36884 === (1))){
var inst_36842 = [];
var inst_36843 = inst_36842;
var inst_36844 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36883__$1 = (function (){var statearr_36886 = state_36883;
(statearr_36886[(7)] = inst_36843);

(statearr_36886[(8)] = inst_36844);

return statearr_36886;
})();
var statearr_36887_36919 = state_36883__$1;
(statearr_36887_36919[(2)] = null);

(statearr_36887_36919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36884 === (4))){
var inst_36847 = (state_36883[(9)]);
var inst_36847__$1 = (state_36883[(2)]);
var inst_36848 = (inst_36847__$1 == null);
var inst_36849 = cljs.core.not.call(null,inst_36848);
var state_36883__$1 = (function (){var statearr_36888 = state_36883;
(statearr_36888[(9)] = inst_36847__$1);

return statearr_36888;
})();
if(inst_36849){
var statearr_36889_36920 = state_36883__$1;
(statearr_36889_36920[(1)] = (5));

} else {
var statearr_36890_36921 = state_36883__$1;
(statearr_36890_36921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36884 === (15))){
var inst_36873 = (state_36883[(2)]);
var state_36883__$1 = state_36883;
var statearr_36891_36922 = state_36883__$1;
(statearr_36891_36922[(2)] = inst_36873);

(statearr_36891_36922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36884 === (13))){
var state_36883__$1 = state_36883;
var statearr_36892_36923 = state_36883__$1;
(statearr_36892_36923[(2)] = null);

(statearr_36892_36923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36884 === (6))){
var inst_36843 = (state_36883[(7)]);
var inst_36868 = inst_36843.length;
var inst_36869 = (inst_36868 > (0));
var state_36883__$1 = state_36883;
if(cljs.core.truth_(inst_36869)){
var statearr_36893_36924 = state_36883__$1;
(statearr_36893_36924[(1)] = (12));

} else {
var statearr_36894_36925 = state_36883__$1;
(statearr_36894_36925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36884 === (3))){
var inst_36881 = (state_36883[(2)]);
var state_36883__$1 = state_36883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36883__$1,inst_36881);
} else {
if((state_val_36884 === (12))){
var inst_36843 = (state_36883[(7)]);
var inst_36871 = cljs.core.vec.call(null,inst_36843);
var state_36883__$1 = state_36883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36883__$1,(15),out,inst_36871);
} else {
if((state_val_36884 === (2))){
var state_36883__$1 = state_36883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36883__$1,(4),ch);
} else {
if((state_val_36884 === (11))){
var inst_36851 = (state_36883[(10)]);
var inst_36847 = (state_36883[(9)]);
var inst_36861 = (state_36883[(2)]);
var inst_36862 = [];
var inst_36863 = inst_36862.push(inst_36847);
var inst_36843 = inst_36862;
var inst_36844 = inst_36851;
var state_36883__$1 = (function (){var statearr_36895 = state_36883;
(statearr_36895[(11)] = inst_36861);

(statearr_36895[(7)] = inst_36843);

(statearr_36895[(12)] = inst_36863);

(statearr_36895[(8)] = inst_36844);

return statearr_36895;
})();
var statearr_36896_36926 = state_36883__$1;
(statearr_36896_36926[(2)] = null);

(statearr_36896_36926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36884 === (9))){
var inst_36843 = (state_36883[(7)]);
var inst_36859 = cljs.core.vec.call(null,inst_36843);
var state_36883__$1 = state_36883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36883__$1,(11),out,inst_36859);
} else {
if((state_val_36884 === (5))){
var inst_36851 = (state_36883[(10)]);
var inst_36847 = (state_36883[(9)]);
var inst_36844 = (state_36883[(8)]);
var inst_36851__$1 = f.call(null,inst_36847);
var inst_36852 = cljs.core._EQ_.call(null,inst_36851__$1,inst_36844);
var inst_36853 = cljs.core.keyword_identical_QMARK_.call(null,inst_36844,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36854 = (inst_36852) || (inst_36853);
var state_36883__$1 = (function (){var statearr_36897 = state_36883;
(statearr_36897[(10)] = inst_36851__$1);

return statearr_36897;
})();
if(cljs.core.truth_(inst_36854)){
var statearr_36898_36927 = state_36883__$1;
(statearr_36898_36927[(1)] = (8));

} else {
var statearr_36899_36928 = state_36883__$1;
(statearr_36899_36928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36884 === (14))){
var inst_36876 = (state_36883[(2)]);
var inst_36877 = cljs.core.async.close_BANG_.call(null,out);
var state_36883__$1 = (function (){var statearr_36901 = state_36883;
(statearr_36901[(13)] = inst_36876);

return statearr_36901;
})();
var statearr_36902_36929 = state_36883__$1;
(statearr_36902_36929[(2)] = inst_36877);

(statearr_36902_36929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36884 === (10))){
var inst_36866 = (state_36883[(2)]);
var state_36883__$1 = state_36883;
var statearr_36903_36930 = state_36883__$1;
(statearr_36903_36930[(2)] = inst_36866);

(statearr_36903_36930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36884 === (8))){
var inst_36843 = (state_36883[(7)]);
var inst_36851 = (state_36883[(10)]);
var inst_36847 = (state_36883[(9)]);
var inst_36856 = inst_36843.push(inst_36847);
var tmp36900 = inst_36843;
var inst_36843__$1 = tmp36900;
var inst_36844 = inst_36851;
var state_36883__$1 = (function (){var statearr_36904 = state_36883;
(statearr_36904[(7)] = inst_36843__$1);

(statearr_36904[(14)] = inst_36856);

(statearr_36904[(8)] = inst_36844);

return statearr_36904;
})();
var statearr_36905_36931 = state_36883__$1;
(statearr_36905_36931[(2)] = null);

(statearr_36905_36931[(1)] = (2));


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
});})(c__32314__auto___36917,out))
;
return ((function (switch__32293__auto__,c__32314__auto___36917,out){
return (function() {
var cljs$core$async$state_machine__32294__auto__ = null;
var cljs$core$async$state_machine__32294__auto____0 = (function (){
var statearr_36909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36909[(0)] = cljs$core$async$state_machine__32294__auto__);

(statearr_36909[(1)] = (1));

return statearr_36909;
});
var cljs$core$async$state_machine__32294__auto____1 = (function (state_36883){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_36883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e36910){if((e36910 instanceof Object)){
var ex__32297__auto__ = e36910;
var statearr_36911_36932 = state_36883;
(statearr_36911_36932[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36933 = state_36883;
state_36883 = G__36933;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
cljs$core$async$state_machine__32294__auto__ = function(state_36883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32294__auto____1.call(this,state_36883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32294__auto____0;
cljs$core$async$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32294__auto____1;
return cljs$core$async$state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___36917,out))
})();
var state__32316__auto__ = (function (){var statearr_36912 = f__32315__auto__.call(null);
(statearr_36912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___36917);

return statearr_36912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___36917,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map