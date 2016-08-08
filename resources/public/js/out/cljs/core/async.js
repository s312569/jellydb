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
var args34617 = [];
var len__29354__auto___34623 = arguments.length;
var i__29355__auto___34624 = (0);
while(true){
if((i__29355__auto___34624 < len__29354__auto___34623)){
args34617.push((arguments[i__29355__auto___34624]));

var G__34625 = (i__29355__auto___34624 + (1));
i__29355__auto___34624 = G__34625;
continue;
} else {
}
break;
}

var G__34619 = args34617.length;
switch (G__34619) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34617.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34620 = (function (f,blockable,meta34621){
this.f = f;
this.blockable = blockable;
this.meta34621 = meta34621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34622,meta34621__$1){
var self__ = this;
var _34622__$1 = this;
return (new cljs.core.async.t_cljs$core$async34620(self__.f,self__.blockable,meta34621__$1));
});

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34622){
var self__ = this;
var _34622__$1 = this;
return self__.meta34621;
});

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34621","meta34621",-560904023,null)], null);
});

cljs.core.async.t_cljs$core$async34620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34620";

cljs.core.async.t_cljs$core$async34620.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cljs.core.async/t_cljs$core$async34620");
});

cljs.core.async.__GT_t_cljs$core$async34620 = (function cljs$core$async$__GT_t_cljs$core$async34620(f__$1,blockable__$1,meta34621){
return (new cljs.core.async.t_cljs$core$async34620(f__$1,blockable__$1,meta34621));
});

}

return (new cljs.core.async.t_cljs$core$async34620(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args34629 = [];
var len__29354__auto___34632 = arguments.length;
var i__29355__auto___34633 = (0);
while(true){
if((i__29355__auto___34633 < len__29354__auto___34632)){
args34629.push((arguments[i__29355__auto___34633]));

var G__34634 = (i__29355__auto___34633 + (1));
i__29355__auto___34633 = G__34634;
continue;
} else {
}
break;
}

var G__34631 = args34629.length;
switch (G__34631) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34629.length)].join('')));

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
var args34636 = [];
var len__29354__auto___34639 = arguments.length;
var i__29355__auto___34640 = (0);
while(true){
if((i__29355__auto___34640 < len__29354__auto___34639)){
args34636.push((arguments[i__29355__auto___34640]));

var G__34641 = (i__29355__auto___34640 + (1));
i__29355__auto___34640 = G__34641;
continue;
} else {
}
break;
}

var G__34638 = args34636.length;
switch (G__34638) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34636.length)].join('')));

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
var args34643 = [];
var len__29354__auto___34646 = arguments.length;
var i__29355__auto___34647 = (0);
while(true){
if((i__29355__auto___34647 < len__29354__auto___34646)){
args34643.push((arguments[i__29355__auto___34647]));

var G__34648 = (i__29355__auto___34647 + (1));
i__29355__auto___34647 = G__34648;
continue;
} else {
}
break;
}

var G__34645 = args34643.length;
switch (G__34645) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34643.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34650 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34650);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34650,ret){
return (function (){
return fn1.call(null,val_34650);
});})(val_34650,ret))
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
var args34651 = [];
var len__29354__auto___34654 = arguments.length;
var i__29355__auto___34655 = (0);
while(true){
if((i__29355__auto___34655 < len__29354__auto___34654)){
args34651.push((arguments[i__29355__auto___34655]));

var G__34656 = (i__29355__auto___34655 + (1));
i__29355__auto___34655 = G__34656;
continue;
} else {
}
break;
}

var G__34653 = args34651.length;
switch (G__34653) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34651.length)].join('')));

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
var n__29194__auto___34658 = n;
var x_34659 = (0);
while(true){
if((x_34659 < n__29194__auto___34658)){
(a[x_34659] = (0));

var G__34660 = (x_34659 + (1));
x_34659 = G__34660;
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

var G__34661 = (i + (1));
i = G__34661;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34665 = (function (alt_flag,flag,meta34666){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta34666 = meta34666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34667,meta34666__$1){
var self__ = this;
var _34667__$1 = this;
return (new cljs.core.async.t_cljs$core$async34665(self__.alt_flag,self__.flag,meta34666__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34667){
var self__ = this;
var _34667__$1 = this;
return self__.meta34666;
});})(flag))
;

cljs.core.async.t_cljs$core$async34665.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34665.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34665.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34666","meta34666",30288123,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34665";

cljs.core.async.t_cljs$core$async34665.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cljs.core.async/t_cljs$core$async34665");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34665 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34665(alt_flag__$1,flag__$1,meta34666){
return (new cljs.core.async.t_cljs$core$async34665(alt_flag__$1,flag__$1,meta34666));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34665(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34671 = (function (alt_handler,flag,cb,meta34672){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta34672 = meta34672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34673,meta34672__$1){
var self__ = this;
var _34673__$1 = this;
return (new cljs.core.async.t_cljs$core$async34671(self__.alt_handler,self__.flag,self__.cb,meta34672__$1));
});

cljs.core.async.t_cljs$core$async34671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34673){
var self__ = this;
var _34673__$1 = this;
return self__.meta34672;
});

cljs.core.async.t_cljs$core$async34671.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34671.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34672","meta34672",-194912505,null)], null);
});

cljs.core.async.t_cljs$core$async34671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34671";

cljs.core.async.t_cljs$core$async34671.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cljs.core.async/t_cljs$core$async34671");
});

cljs.core.async.__GT_t_cljs$core$async34671 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34671(alt_handler__$1,flag__$1,cb__$1,meta34672){
return (new cljs.core.async.t_cljs$core$async34671(alt_handler__$1,flag__$1,cb__$1,meta34672));
});

}

return (new cljs.core.async.t_cljs$core$async34671(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34674_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34674_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34675_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34675_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28279__auto__ = wport;
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34676 = (i + (1));
i = G__34676;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28279__auto__ = ret;
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28267__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28267__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28267__auto__;
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
var args__29361__auto__ = [];
var len__29354__auto___34682 = arguments.length;
var i__29355__auto___34683 = (0);
while(true){
if((i__29355__auto___34683 < len__29354__auto___34682)){
args__29361__auto__.push((arguments[i__29355__auto___34683]));

var G__34684 = (i__29355__auto___34683 + (1));
i__29355__auto___34683 = G__34684;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((1) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29362__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34679){
var map__34680 = p__34679;
var map__34680__$1 = ((((!((map__34680 == null)))?((((map__34680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34680):map__34680);
var opts = map__34680__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34677){
var G__34678 = cljs.core.first.call(null,seq34677);
var seq34677__$1 = cljs.core.next.call(null,seq34677);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34678,seq34677__$1);
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
var args34685 = [];
var len__29354__auto___34735 = arguments.length;
var i__29355__auto___34736 = (0);
while(true){
if((i__29355__auto___34736 < len__29354__auto___34735)){
args34685.push((arguments[i__29355__auto___34736]));

var G__34737 = (i__29355__auto___34736 + (1));
i__29355__auto___34736 = G__34737;
continue;
} else {
}
break;
}

var G__34687 = args34685.length;
switch (G__34687) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34685.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34572__auto___34739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___34739){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___34739){
return (function (state_34711){
var state_val_34712 = (state_34711[(1)]);
if((state_val_34712 === (7))){
var inst_34707 = (state_34711[(2)]);
var state_34711__$1 = state_34711;
var statearr_34713_34740 = state_34711__$1;
(statearr_34713_34740[(2)] = inst_34707);

(statearr_34713_34740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (1))){
var state_34711__$1 = state_34711;
var statearr_34714_34741 = state_34711__$1;
(statearr_34714_34741[(2)] = null);

(statearr_34714_34741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (4))){
var inst_34690 = (state_34711[(7)]);
var inst_34690__$1 = (state_34711[(2)]);
var inst_34691 = (inst_34690__$1 == null);
var state_34711__$1 = (function (){var statearr_34715 = state_34711;
(statearr_34715[(7)] = inst_34690__$1);

return statearr_34715;
})();
if(cljs.core.truth_(inst_34691)){
var statearr_34716_34742 = state_34711__$1;
(statearr_34716_34742[(1)] = (5));

} else {
var statearr_34717_34743 = state_34711__$1;
(statearr_34717_34743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (13))){
var state_34711__$1 = state_34711;
var statearr_34718_34744 = state_34711__$1;
(statearr_34718_34744[(2)] = null);

(statearr_34718_34744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (6))){
var inst_34690 = (state_34711[(7)]);
var state_34711__$1 = state_34711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34711__$1,(11),to,inst_34690);
} else {
if((state_val_34712 === (3))){
var inst_34709 = (state_34711[(2)]);
var state_34711__$1 = state_34711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34711__$1,inst_34709);
} else {
if((state_val_34712 === (12))){
var state_34711__$1 = state_34711;
var statearr_34719_34745 = state_34711__$1;
(statearr_34719_34745[(2)] = null);

(statearr_34719_34745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (2))){
var state_34711__$1 = state_34711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34711__$1,(4),from);
} else {
if((state_val_34712 === (11))){
var inst_34700 = (state_34711[(2)]);
var state_34711__$1 = state_34711;
if(cljs.core.truth_(inst_34700)){
var statearr_34720_34746 = state_34711__$1;
(statearr_34720_34746[(1)] = (12));

} else {
var statearr_34721_34747 = state_34711__$1;
(statearr_34721_34747[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (9))){
var state_34711__$1 = state_34711;
var statearr_34722_34748 = state_34711__$1;
(statearr_34722_34748[(2)] = null);

(statearr_34722_34748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (5))){
var state_34711__$1 = state_34711;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34723_34749 = state_34711__$1;
(statearr_34723_34749[(1)] = (8));

} else {
var statearr_34724_34750 = state_34711__$1;
(statearr_34724_34750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (14))){
var inst_34705 = (state_34711[(2)]);
var state_34711__$1 = state_34711;
var statearr_34725_34751 = state_34711__$1;
(statearr_34725_34751[(2)] = inst_34705);

(statearr_34725_34751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (10))){
var inst_34697 = (state_34711[(2)]);
var state_34711__$1 = state_34711;
var statearr_34726_34752 = state_34711__$1;
(statearr_34726_34752[(2)] = inst_34697);

(statearr_34726_34752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (8))){
var inst_34694 = cljs.core.async.close_BANG_.call(null,to);
var state_34711__$1 = state_34711;
var statearr_34727_34753 = state_34711__$1;
(statearr_34727_34753[(2)] = inst_34694);

(statearr_34727_34753[(1)] = (10));


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
});})(c__34572__auto___34739))
;
return ((function (switch__34460__auto__,c__34572__auto___34739){
return (function() {
var cljs$core$async$state_machine__34461__auto__ = null;
var cljs$core$async$state_machine__34461__auto____0 = (function (){
var statearr_34731 = [null,null,null,null,null,null,null,null];
(statearr_34731[(0)] = cljs$core$async$state_machine__34461__auto__);

(statearr_34731[(1)] = (1));

return statearr_34731;
});
var cljs$core$async$state_machine__34461__auto____1 = (function (state_34711){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_34711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e34732){if((e34732 instanceof Object)){
var ex__34464__auto__ = e34732;
var statearr_34733_34754 = state_34711;
(statearr_34733_34754[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34755 = state_34711;
state_34711 = G__34755;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$state_machine__34461__auto__ = function(state_34711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34461__auto____1.call(this,state_34711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34461__auto____0;
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34461__auto____1;
return cljs$core$async$state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___34739))
})();
var state__34574__auto__ = (function (){var statearr_34734 = f__34573__auto__.call(null);
(statearr_34734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___34739);

return statearr_34734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___34739))
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
return (function (p__34943){
var vec__34944 = p__34943;
var v = cljs.core.nth.call(null,vec__34944,(0),null);
var p = cljs.core.nth.call(null,vec__34944,(1),null);
var job = vec__34944;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34572__auto___35130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___35130,res,vec__34944,v,p,job,jobs,results){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___35130,res,vec__34944,v,p,job,jobs,results){
return (function (state_34951){
var state_val_34952 = (state_34951[(1)]);
if((state_val_34952 === (1))){
var state_34951__$1 = state_34951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34951__$1,(2),res,v);
} else {
if((state_val_34952 === (2))){
var inst_34948 = (state_34951[(2)]);
var inst_34949 = cljs.core.async.close_BANG_.call(null,res);
var state_34951__$1 = (function (){var statearr_34953 = state_34951;
(statearr_34953[(7)] = inst_34948);

return statearr_34953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34951__$1,inst_34949);
} else {
return null;
}
}
});})(c__34572__auto___35130,res,vec__34944,v,p,job,jobs,results))
;
return ((function (switch__34460__auto__,c__34572__auto___35130,res,vec__34944,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0 = (function (){
var statearr_34957 = [null,null,null,null,null,null,null,null];
(statearr_34957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__);

(statearr_34957[(1)] = (1));

return statearr_34957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1 = (function (state_34951){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_34951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e34958){if((e34958 instanceof Object)){
var ex__34464__auto__ = e34958;
var statearr_34959_35131 = state_34951;
(statearr_34959_35131[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35132 = state_34951;
state_34951 = G__35132;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__ = function(state_34951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1.call(this,state_34951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___35130,res,vec__34944,v,p,job,jobs,results))
})();
var state__34574__auto__ = (function (){var statearr_34960 = f__34573__auto__.call(null);
(statearr_34960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___35130);

return statearr_34960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___35130,res,vec__34944,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34961){
var vec__34962 = p__34961;
var v = cljs.core.nth.call(null,vec__34962,(0),null);
var p = cljs.core.nth.call(null,vec__34962,(1),null);
var job = vec__34962;
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
var n__29194__auto___35133 = n;
var __35134 = (0);
while(true){
if((__35134 < n__29194__auto___35133)){
var G__34965_35135 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34965_35135) {
case "compute":
var c__34572__auto___35137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35134,c__34572__auto___35137,G__34965_35135,n__29194__auto___35133,jobs,results,process,async){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (__35134,c__34572__auto___35137,G__34965_35135,n__29194__auto___35133,jobs,results,process,async){
return (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34980_35138 = state_34978__$1;
(statearr_34980_35138[(2)] = null);

(statearr_34980_35138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34978__$1,(4),jobs);
} else {
if((state_val_34979 === (3))){
var inst_34976 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34978__$1,inst_34976);
} else {
if((state_val_34979 === (4))){
var inst_34968 = (state_34978[(2)]);
var inst_34969 = process.call(null,inst_34968);
var state_34978__$1 = state_34978;
if(cljs.core.truth_(inst_34969)){
var statearr_34981_35139 = state_34978__$1;
(statearr_34981_35139[(1)] = (5));

} else {
var statearr_34982_35140 = state_34978__$1;
(statearr_34982_35140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var state_34978__$1 = state_34978;
var statearr_34983_35141 = state_34978__$1;
(statearr_34983_35141[(2)] = null);

(statearr_34983_35141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (6))){
var state_34978__$1 = state_34978;
var statearr_34984_35142 = state_34978__$1;
(statearr_34984_35142[(2)] = null);

(statearr_34984_35142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34985_35143 = state_34978__$1;
(statearr_34985_35143[(2)] = inst_34974);

(statearr_34985_35143[(1)] = (3));


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
});})(__35134,c__34572__auto___35137,G__34965_35135,n__29194__auto___35133,jobs,results,process,async))
;
return ((function (__35134,switch__34460__auto__,c__34572__auto___35137,G__34965_35135,n__29194__auto___35133,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0 = (function (){
var statearr_34989 = [null,null,null,null,null,null,null];
(statearr_34989[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__);

(statearr_34989[(1)] = (1));

return statearr_34989;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1 = (function (state_34978){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_34978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e34990){if((e34990 instanceof Object)){
var ex__34464__auto__ = e34990;
var statearr_34991_35144 = state_34978;
(statearr_34991_35144[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35145 = state_34978;
state_34978 = G__35145;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__ = function(state_34978){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1.call(this,state_34978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__;
})()
;})(__35134,switch__34460__auto__,c__34572__auto___35137,G__34965_35135,n__29194__auto___35133,jobs,results,process,async))
})();
var state__34574__auto__ = (function (){var statearr_34992 = f__34573__auto__.call(null);
(statearr_34992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___35137);

return statearr_34992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(__35134,c__34572__auto___35137,G__34965_35135,n__29194__auto___35133,jobs,results,process,async))
);


break;
case "async":
var c__34572__auto___35146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35134,c__34572__auto___35146,G__34965_35135,n__29194__auto___35133,jobs,results,process,async){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (__35134,c__34572__auto___35146,G__34965_35135,n__29194__auto___35133,jobs,results,process,async){
return (function (state_35005){
var state_val_35006 = (state_35005[(1)]);
if((state_val_35006 === (1))){
var state_35005__$1 = state_35005;
var statearr_35007_35147 = state_35005__$1;
(statearr_35007_35147[(2)] = null);

(statearr_35007_35147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (2))){
var state_35005__$1 = state_35005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35005__$1,(4),jobs);
} else {
if((state_val_35006 === (3))){
var inst_35003 = (state_35005[(2)]);
var state_35005__$1 = state_35005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35005__$1,inst_35003);
} else {
if((state_val_35006 === (4))){
var inst_34995 = (state_35005[(2)]);
var inst_34996 = async.call(null,inst_34995);
var state_35005__$1 = state_35005;
if(cljs.core.truth_(inst_34996)){
var statearr_35008_35148 = state_35005__$1;
(statearr_35008_35148[(1)] = (5));

} else {
var statearr_35009_35149 = state_35005__$1;
(statearr_35009_35149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (5))){
var state_35005__$1 = state_35005;
var statearr_35010_35150 = state_35005__$1;
(statearr_35010_35150[(2)] = null);

(statearr_35010_35150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (6))){
var state_35005__$1 = state_35005;
var statearr_35011_35151 = state_35005__$1;
(statearr_35011_35151[(2)] = null);

(statearr_35011_35151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35006 === (7))){
var inst_35001 = (state_35005[(2)]);
var state_35005__$1 = state_35005;
var statearr_35012_35152 = state_35005__$1;
(statearr_35012_35152[(2)] = inst_35001);

(statearr_35012_35152[(1)] = (3));


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
});})(__35134,c__34572__auto___35146,G__34965_35135,n__29194__auto___35133,jobs,results,process,async))
;
return ((function (__35134,switch__34460__auto__,c__34572__auto___35146,G__34965_35135,n__29194__auto___35133,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0 = (function (){
var statearr_35016 = [null,null,null,null,null,null,null];
(statearr_35016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__);

(statearr_35016[(1)] = (1));

return statearr_35016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1 = (function (state_35005){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_35005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e35017){if((e35017 instanceof Object)){
var ex__34464__auto__ = e35017;
var statearr_35018_35153 = state_35005;
(statearr_35018_35153[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35154 = state_35005;
state_35005 = G__35154;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__ = function(state_35005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1.call(this,state_35005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__;
})()
;})(__35134,switch__34460__auto__,c__34572__auto___35146,G__34965_35135,n__29194__auto___35133,jobs,results,process,async))
})();
var state__34574__auto__ = (function (){var statearr_35019 = f__34573__auto__.call(null);
(statearr_35019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___35146);

return statearr_35019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(__35134,c__34572__auto___35146,G__34965_35135,n__29194__auto___35133,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__35155 = (__35134 + (1));
__35134 = G__35155;
continue;
} else {
}
break;
}

var c__34572__auto___35156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___35156,jobs,results,process,async){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___35156,jobs,results,process,async){
return (function (state_35041){
var state_val_35042 = (state_35041[(1)]);
if((state_val_35042 === (1))){
var state_35041__$1 = state_35041;
var statearr_35043_35157 = state_35041__$1;
(statearr_35043_35157[(2)] = null);

(statearr_35043_35157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (2))){
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35041__$1,(4),from);
} else {
if((state_val_35042 === (3))){
var inst_35039 = (state_35041[(2)]);
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35041__$1,inst_35039);
} else {
if((state_val_35042 === (4))){
var inst_35022 = (state_35041[(7)]);
var inst_35022__$1 = (state_35041[(2)]);
var inst_35023 = (inst_35022__$1 == null);
var state_35041__$1 = (function (){var statearr_35044 = state_35041;
(statearr_35044[(7)] = inst_35022__$1);

return statearr_35044;
})();
if(cljs.core.truth_(inst_35023)){
var statearr_35045_35158 = state_35041__$1;
(statearr_35045_35158[(1)] = (5));

} else {
var statearr_35046_35159 = state_35041__$1;
(statearr_35046_35159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (5))){
var inst_35025 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35041__$1 = state_35041;
var statearr_35047_35160 = state_35041__$1;
(statearr_35047_35160[(2)] = inst_35025);

(statearr_35047_35160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (6))){
var inst_35027 = (state_35041[(8)]);
var inst_35022 = (state_35041[(7)]);
var inst_35027__$1 = cljs.core.async.chan.call(null,(1));
var inst_35028 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35029 = [inst_35022,inst_35027__$1];
var inst_35030 = (new cljs.core.PersistentVector(null,2,(5),inst_35028,inst_35029,null));
var state_35041__$1 = (function (){var statearr_35048 = state_35041;
(statearr_35048[(8)] = inst_35027__$1);

return statearr_35048;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35041__$1,(8),jobs,inst_35030);
} else {
if((state_val_35042 === (7))){
var inst_35037 = (state_35041[(2)]);
var state_35041__$1 = state_35041;
var statearr_35049_35161 = state_35041__$1;
(statearr_35049_35161[(2)] = inst_35037);

(statearr_35049_35161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (8))){
var inst_35027 = (state_35041[(8)]);
var inst_35032 = (state_35041[(2)]);
var state_35041__$1 = (function (){var statearr_35050 = state_35041;
(statearr_35050[(9)] = inst_35032);

return statearr_35050;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35041__$1,(9),results,inst_35027);
} else {
if((state_val_35042 === (9))){
var inst_35034 = (state_35041[(2)]);
var state_35041__$1 = (function (){var statearr_35051 = state_35041;
(statearr_35051[(10)] = inst_35034);

return statearr_35051;
})();
var statearr_35052_35162 = state_35041__$1;
(statearr_35052_35162[(2)] = null);

(statearr_35052_35162[(1)] = (2));


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
});})(c__34572__auto___35156,jobs,results,process,async))
;
return ((function (switch__34460__auto__,c__34572__auto___35156,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0 = (function (){
var statearr_35056 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35056[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__);

(statearr_35056[(1)] = (1));

return statearr_35056;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1 = (function (state_35041){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_35041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e35057){if((e35057 instanceof Object)){
var ex__34464__auto__ = e35057;
var statearr_35058_35163 = state_35041;
(statearr_35058_35163[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35164 = state_35041;
state_35041 = G__35164;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__ = function(state_35041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1.call(this,state_35041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___35156,jobs,results,process,async))
})();
var state__34574__auto__ = (function (){var statearr_35059 = f__34573__auto__.call(null);
(statearr_35059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___35156);

return statearr_35059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___35156,jobs,results,process,async))
);


var c__34572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto__,jobs,results,process,async){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto__,jobs,results,process,async){
return (function (state_35097){
var state_val_35098 = (state_35097[(1)]);
if((state_val_35098 === (7))){
var inst_35093 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
var statearr_35099_35165 = state_35097__$1;
(statearr_35099_35165[(2)] = inst_35093);

(statearr_35099_35165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (20))){
var state_35097__$1 = state_35097;
var statearr_35100_35166 = state_35097__$1;
(statearr_35100_35166[(2)] = null);

(statearr_35100_35166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (1))){
var state_35097__$1 = state_35097;
var statearr_35101_35167 = state_35097__$1;
(statearr_35101_35167[(2)] = null);

(statearr_35101_35167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (4))){
var inst_35062 = (state_35097[(7)]);
var inst_35062__$1 = (state_35097[(2)]);
var inst_35063 = (inst_35062__$1 == null);
var state_35097__$1 = (function (){var statearr_35102 = state_35097;
(statearr_35102[(7)] = inst_35062__$1);

return statearr_35102;
})();
if(cljs.core.truth_(inst_35063)){
var statearr_35103_35168 = state_35097__$1;
(statearr_35103_35168[(1)] = (5));

} else {
var statearr_35104_35169 = state_35097__$1;
(statearr_35104_35169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (15))){
var inst_35075 = (state_35097[(8)]);
var state_35097__$1 = state_35097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35097__$1,(18),to,inst_35075);
} else {
if((state_val_35098 === (21))){
var inst_35088 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
var statearr_35105_35170 = state_35097__$1;
(statearr_35105_35170[(2)] = inst_35088);

(statearr_35105_35170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (13))){
var inst_35090 = (state_35097[(2)]);
var state_35097__$1 = (function (){var statearr_35106 = state_35097;
(statearr_35106[(9)] = inst_35090);

return statearr_35106;
})();
var statearr_35107_35171 = state_35097__$1;
(statearr_35107_35171[(2)] = null);

(statearr_35107_35171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (6))){
var inst_35062 = (state_35097[(7)]);
var state_35097__$1 = state_35097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35097__$1,(11),inst_35062);
} else {
if((state_val_35098 === (17))){
var inst_35083 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
if(cljs.core.truth_(inst_35083)){
var statearr_35108_35172 = state_35097__$1;
(statearr_35108_35172[(1)] = (19));

} else {
var statearr_35109_35173 = state_35097__$1;
(statearr_35109_35173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (3))){
var inst_35095 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35097__$1,inst_35095);
} else {
if((state_val_35098 === (12))){
var inst_35072 = (state_35097[(10)]);
var state_35097__$1 = state_35097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35097__$1,(14),inst_35072);
} else {
if((state_val_35098 === (2))){
var state_35097__$1 = state_35097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35097__$1,(4),results);
} else {
if((state_val_35098 === (19))){
var state_35097__$1 = state_35097;
var statearr_35110_35174 = state_35097__$1;
(statearr_35110_35174[(2)] = null);

(statearr_35110_35174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (11))){
var inst_35072 = (state_35097[(2)]);
var state_35097__$1 = (function (){var statearr_35111 = state_35097;
(statearr_35111[(10)] = inst_35072);

return statearr_35111;
})();
var statearr_35112_35175 = state_35097__$1;
(statearr_35112_35175[(2)] = null);

(statearr_35112_35175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (9))){
var state_35097__$1 = state_35097;
var statearr_35113_35176 = state_35097__$1;
(statearr_35113_35176[(2)] = null);

(statearr_35113_35176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (5))){
var state_35097__$1 = state_35097;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35114_35177 = state_35097__$1;
(statearr_35114_35177[(1)] = (8));

} else {
var statearr_35115_35178 = state_35097__$1;
(statearr_35115_35178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (14))){
var inst_35077 = (state_35097[(11)]);
var inst_35075 = (state_35097[(8)]);
var inst_35075__$1 = (state_35097[(2)]);
var inst_35076 = (inst_35075__$1 == null);
var inst_35077__$1 = cljs.core.not.call(null,inst_35076);
var state_35097__$1 = (function (){var statearr_35116 = state_35097;
(statearr_35116[(11)] = inst_35077__$1);

(statearr_35116[(8)] = inst_35075__$1);

return statearr_35116;
})();
if(inst_35077__$1){
var statearr_35117_35179 = state_35097__$1;
(statearr_35117_35179[(1)] = (15));

} else {
var statearr_35118_35180 = state_35097__$1;
(statearr_35118_35180[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (16))){
var inst_35077 = (state_35097[(11)]);
var state_35097__$1 = state_35097;
var statearr_35119_35181 = state_35097__$1;
(statearr_35119_35181[(2)] = inst_35077);

(statearr_35119_35181[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (10))){
var inst_35069 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
var statearr_35120_35182 = state_35097__$1;
(statearr_35120_35182[(2)] = inst_35069);

(statearr_35120_35182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (18))){
var inst_35080 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
var statearr_35121_35183 = state_35097__$1;
(statearr_35121_35183[(2)] = inst_35080);

(statearr_35121_35183[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (8))){
var inst_35066 = cljs.core.async.close_BANG_.call(null,to);
var state_35097__$1 = state_35097;
var statearr_35122_35184 = state_35097__$1;
(statearr_35122_35184[(2)] = inst_35066);

(statearr_35122_35184[(1)] = (10));


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
});})(c__34572__auto__,jobs,results,process,async))
;
return ((function (switch__34460__auto__,c__34572__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0 = (function (){
var statearr_35126 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__);

(statearr_35126[(1)] = (1));

return statearr_35126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1 = (function (state_35097){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_35097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e35127){if((e35127 instanceof Object)){
var ex__34464__auto__ = e35127;
var statearr_35128_35185 = state_35097;
(statearr_35128_35185[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35186 = state_35097;
state_35097 = G__35186;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__ = function(state_35097){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1.call(this,state_35097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34461__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto__,jobs,results,process,async))
})();
var state__34574__auto__ = (function (){var statearr_35129 = f__34573__auto__.call(null);
(statearr_35129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto__);

return statearr_35129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto__,jobs,results,process,async))
);

return c__34572__auto__;
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
var args35187 = [];
var len__29354__auto___35190 = arguments.length;
var i__29355__auto___35191 = (0);
while(true){
if((i__29355__auto___35191 < len__29354__auto___35190)){
args35187.push((arguments[i__29355__auto___35191]));

var G__35192 = (i__29355__auto___35191 + (1));
i__29355__auto___35191 = G__35192;
continue;
} else {
}
break;
}

var G__35189 = args35187.length;
switch (G__35189) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35187.length)].join('')));

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
var args35194 = [];
var len__29354__auto___35197 = arguments.length;
var i__29355__auto___35198 = (0);
while(true){
if((i__29355__auto___35198 < len__29354__auto___35197)){
args35194.push((arguments[i__29355__auto___35198]));

var G__35199 = (i__29355__auto___35198 + (1));
i__29355__auto___35198 = G__35199;
continue;
} else {
}
break;
}

var G__35196 = args35194.length;
switch (G__35196) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35194.length)].join('')));

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
var args35201 = [];
var len__29354__auto___35254 = arguments.length;
var i__29355__auto___35255 = (0);
while(true){
if((i__29355__auto___35255 < len__29354__auto___35254)){
args35201.push((arguments[i__29355__auto___35255]));

var G__35256 = (i__29355__auto___35255 + (1));
i__29355__auto___35255 = G__35256;
continue;
} else {
}
break;
}

var G__35203 = args35201.length;
switch (G__35203) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35201.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34572__auto___35258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___35258,tc,fc){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___35258,tc,fc){
return (function (state_35229){
var state_val_35230 = (state_35229[(1)]);
if((state_val_35230 === (7))){
var inst_35225 = (state_35229[(2)]);
var state_35229__$1 = state_35229;
var statearr_35231_35259 = state_35229__$1;
(statearr_35231_35259[(2)] = inst_35225);

(statearr_35231_35259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (1))){
var state_35229__$1 = state_35229;
var statearr_35232_35260 = state_35229__$1;
(statearr_35232_35260[(2)] = null);

(statearr_35232_35260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (4))){
var inst_35206 = (state_35229[(7)]);
var inst_35206__$1 = (state_35229[(2)]);
var inst_35207 = (inst_35206__$1 == null);
var state_35229__$1 = (function (){var statearr_35233 = state_35229;
(statearr_35233[(7)] = inst_35206__$1);

return statearr_35233;
})();
if(cljs.core.truth_(inst_35207)){
var statearr_35234_35261 = state_35229__$1;
(statearr_35234_35261[(1)] = (5));

} else {
var statearr_35235_35262 = state_35229__$1;
(statearr_35235_35262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (13))){
var state_35229__$1 = state_35229;
var statearr_35236_35263 = state_35229__$1;
(statearr_35236_35263[(2)] = null);

(statearr_35236_35263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (6))){
var inst_35206 = (state_35229[(7)]);
var inst_35212 = p.call(null,inst_35206);
var state_35229__$1 = state_35229;
if(cljs.core.truth_(inst_35212)){
var statearr_35237_35264 = state_35229__$1;
(statearr_35237_35264[(1)] = (9));

} else {
var statearr_35238_35265 = state_35229__$1;
(statearr_35238_35265[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (3))){
var inst_35227 = (state_35229[(2)]);
var state_35229__$1 = state_35229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35229__$1,inst_35227);
} else {
if((state_val_35230 === (12))){
var state_35229__$1 = state_35229;
var statearr_35239_35266 = state_35229__$1;
(statearr_35239_35266[(2)] = null);

(statearr_35239_35266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (2))){
var state_35229__$1 = state_35229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35229__$1,(4),ch);
} else {
if((state_val_35230 === (11))){
var inst_35206 = (state_35229[(7)]);
var inst_35216 = (state_35229[(2)]);
var state_35229__$1 = state_35229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35229__$1,(8),inst_35216,inst_35206);
} else {
if((state_val_35230 === (9))){
var state_35229__$1 = state_35229;
var statearr_35240_35267 = state_35229__$1;
(statearr_35240_35267[(2)] = tc);

(statearr_35240_35267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (5))){
var inst_35209 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35210 = cljs.core.async.close_BANG_.call(null,fc);
var state_35229__$1 = (function (){var statearr_35241 = state_35229;
(statearr_35241[(8)] = inst_35209);

return statearr_35241;
})();
var statearr_35242_35268 = state_35229__$1;
(statearr_35242_35268[(2)] = inst_35210);

(statearr_35242_35268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (14))){
var inst_35223 = (state_35229[(2)]);
var state_35229__$1 = state_35229;
var statearr_35243_35269 = state_35229__$1;
(statearr_35243_35269[(2)] = inst_35223);

(statearr_35243_35269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (10))){
var state_35229__$1 = state_35229;
var statearr_35244_35270 = state_35229__$1;
(statearr_35244_35270[(2)] = fc);

(statearr_35244_35270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (8))){
var inst_35218 = (state_35229[(2)]);
var state_35229__$1 = state_35229;
if(cljs.core.truth_(inst_35218)){
var statearr_35245_35271 = state_35229__$1;
(statearr_35245_35271[(1)] = (12));

} else {
var statearr_35246_35272 = state_35229__$1;
(statearr_35246_35272[(1)] = (13));

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
});})(c__34572__auto___35258,tc,fc))
;
return ((function (switch__34460__auto__,c__34572__auto___35258,tc,fc){
return (function() {
var cljs$core$async$state_machine__34461__auto__ = null;
var cljs$core$async$state_machine__34461__auto____0 = (function (){
var statearr_35250 = [null,null,null,null,null,null,null,null,null];
(statearr_35250[(0)] = cljs$core$async$state_machine__34461__auto__);

(statearr_35250[(1)] = (1));

return statearr_35250;
});
var cljs$core$async$state_machine__34461__auto____1 = (function (state_35229){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_35229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e35251){if((e35251 instanceof Object)){
var ex__34464__auto__ = e35251;
var statearr_35252_35273 = state_35229;
(statearr_35252_35273[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35274 = state_35229;
state_35229 = G__35274;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$state_machine__34461__auto__ = function(state_35229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34461__auto____1.call(this,state_35229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34461__auto____0;
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34461__auto____1;
return cljs$core$async$state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___35258,tc,fc))
})();
var state__34574__auto__ = (function (){var statearr_35253 = f__34573__auto__.call(null);
(statearr_35253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___35258);

return statearr_35253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___35258,tc,fc))
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
var c__34572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto__){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto__){
return (function (state_35338){
var state_val_35339 = (state_35338[(1)]);
if((state_val_35339 === (7))){
var inst_35334 = (state_35338[(2)]);
var state_35338__$1 = state_35338;
var statearr_35340_35361 = state_35338__$1;
(statearr_35340_35361[(2)] = inst_35334);

(statearr_35340_35361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (1))){
var inst_35318 = init;
var state_35338__$1 = (function (){var statearr_35341 = state_35338;
(statearr_35341[(7)] = inst_35318);

return statearr_35341;
})();
var statearr_35342_35362 = state_35338__$1;
(statearr_35342_35362[(2)] = null);

(statearr_35342_35362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (4))){
var inst_35321 = (state_35338[(8)]);
var inst_35321__$1 = (state_35338[(2)]);
var inst_35322 = (inst_35321__$1 == null);
var state_35338__$1 = (function (){var statearr_35343 = state_35338;
(statearr_35343[(8)] = inst_35321__$1);

return statearr_35343;
})();
if(cljs.core.truth_(inst_35322)){
var statearr_35344_35363 = state_35338__$1;
(statearr_35344_35363[(1)] = (5));

} else {
var statearr_35345_35364 = state_35338__$1;
(statearr_35345_35364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (6))){
var inst_35325 = (state_35338[(9)]);
var inst_35318 = (state_35338[(7)]);
var inst_35321 = (state_35338[(8)]);
var inst_35325__$1 = f.call(null,inst_35318,inst_35321);
var inst_35326 = cljs.core.reduced_QMARK_.call(null,inst_35325__$1);
var state_35338__$1 = (function (){var statearr_35346 = state_35338;
(statearr_35346[(9)] = inst_35325__$1);

return statearr_35346;
})();
if(inst_35326){
var statearr_35347_35365 = state_35338__$1;
(statearr_35347_35365[(1)] = (8));

} else {
var statearr_35348_35366 = state_35338__$1;
(statearr_35348_35366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (3))){
var inst_35336 = (state_35338[(2)]);
var state_35338__$1 = state_35338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35338__$1,inst_35336);
} else {
if((state_val_35339 === (2))){
var state_35338__$1 = state_35338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35338__$1,(4),ch);
} else {
if((state_val_35339 === (9))){
var inst_35325 = (state_35338[(9)]);
var inst_35318 = inst_35325;
var state_35338__$1 = (function (){var statearr_35349 = state_35338;
(statearr_35349[(7)] = inst_35318);

return statearr_35349;
})();
var statearr_35350_35367 = state_35338__$1;
(statearr_35350_35367[(2)] = null);

(statearr_35350_35367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (5))){
var inst_35318 = (state_35338[(7)]);
var state_35338__$1 = state_35338;
var statearr_35351_35368 = state_35338__$1;
(statearr_35351_35368[(2)] = inst_35318);

(statearr_35351_35368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (10))){
var inst_35332 = (state_35338[(2)]);
var state_35338__$1 = state_35338;
var statearr_35352_35369 = state_35338__$1;
(statearr_35352_35369[(2)] = inst_35332);

(statearr_35352_35369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (8))){
var inst_35325 = (state_35338[(9)]);
var inst_35328 = cljs.core.deref.call(null,inst_35325);
var state_35338__$1 = state_35338;
var statearr_35353_35370 = state_35338__$1;
(statearr_35353_35370[(2)] = inst_35328);

(statearr_35353_35370[(1)] = (10));


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
});})(c__34572__auto__))
;
return ((function (switch__34460__auto__,c__34572__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34461__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34461__auto____0 = (function (){
var statearr_35357 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35357[(0)] = cljs$core$async$reduce_$_state_machine__34461__auto__);

(statearr_35357[(1)] = (1));

return statearr_35357;
});
var cljs$core$async$reduce_$_state_machine__34461__auto____1 = (function (state_35338){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_35338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e35358){if((e35358 instanceof Object)){
var ex__34464__auto__ = e35358;
var statearr_35359_35371 = state_35338;
(statearr_35359_35371[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35372 = state_35338;
state_35338 = G__35372;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34461__auto__ = function(state_35338){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34461__auto____1.call(this,state_35338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34461__auto____0;
cljs$core$async$reduce_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34461__auto____1;
return cljs$core$async$reduce_$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto__))
})();
var state__34574__auto__ = (function (){var statearr_35360 = f__34573__auto__.call(null);
(statearr_35360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto__);

return statearr_35360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto__))
);

return c__34572__auto__;
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
var args35373 = [];
var len__29354__auto___35425 = arguments.length;
var i__29355__auto___35426 = (0);
while(true){
if((i__29355__auto___35426 < len__29354__auto___35425)){
args35373.push((arguments[i__29355__auto___35426]));

var G__35427 = (i__29355__auto___35426 + (1));
i__29355__auto___35426 = G__35427;
continue;
} else {
}
break;
}

var G__35375 = args35373.length;
switch (G__35375) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35373.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto__){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto__){
return (function (state_35400){
var state_val_35401 = (state_35400[(1)]);
if((state_val_35401 === (7))){
var inst_35382 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
var statearr_35402_35429 = state_35400__$1;
(statearr_35402_35429[(2)] = inst_35382);

(statearr_35402_35429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (1))){
var inst_35376 = cljs.core.seq.call(null,coll);
var inst_35377 = inst_35376;
var state_35400__$1 = (function (){var statearr_35403 = state_35400;
(statearr_35403[(7)] = inst_35377);

return statearr_35403;
})();
var statearr_35404_35430 = state_35400__$1;
(statearr_35404_35430[(2)] = null);

(statearr_35404_35430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (4))){
var inst_35377 = (state_35400[(7)]);
var inst_35380 = cljs.core.first.call(null,inst_35377);
var state_35400__$1 = state_35400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35400__$1,(7),ch,inst_35380);
} else {
if((state_val_35401 === (13))){
var inst_35394 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
var statearr_35405_35431 = state_35400__$1;
(statearr_35405_35431[(2)] = inst_35394);

(statearr_35405_35431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (6))){
var inst_35385 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
if(cljs.core.truth_(inst_35385)){
var statearr_35406_35432 = state_35400__$1;
(statearr_35406_35432[(1)] = (8));

} else {
var statearr_35407_35433 = state_35400__$1;
(statearr_35407_35433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (3))){
var inst_35398 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35400__$1,inst_35398);
} else {
if((state_val_35401 === (12))){
var state_35400__$1 = state_35400;
var statearr_35408_35434 = state_35400__$1;
(statearr_35408_35434[(2)] = null);

(statearr_35408_35434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (2))){
var inst_35377 = (state_35400[(7)]);
var state_35400__$1 = state_35400;
if(cljs.core.truth_(inst_35377)){
var statearr_35409_35435 = state_35400__$1;
(statearr_35409_35435[(1)] = (4));

} else {
var statearr_35410_35436 = state_35400__$1;
(statearr_35410_35436[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (11))){
var inst_35391 = cljs.core.async.close_BANG_.call(null,ch);
var state_35400__$1 = state_35400;
var statearr_35411_35437 = state_35400__$1;
(statearr_35411_35437[(2)] = inst_35391);

(statearr_35411_35437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (9))){
var state_35400__$1 = state_35400;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35412_35438 = state_35400__$1;
(statearr_35412_35438[(1)] = (11));

} else {
var statearr_35413_35439 = state_35400__$1;
(statearr_35413_35439[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (5))){
var inst_35377 = (state_35400[(7)]);
var state_35400__$1 = state_35400;
var statearr_35414_35440 = state_35400__$1;
(statearr_35414_35440[(2)] = inst_35377);

(statearr_35414_35440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (10))){
var inst_35396 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
var statearr_35415_35441 = state_35400__$1;
(statearr_35415_35441[(2)] = inst_35396);

(statearr_35415_35441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (8))){
var inst_35377 = (state_35400[(7)]);
var inst_35387 = cljs.core.next.call(null,inst_35377);
var inst_35377__$1 = inst_35387;
var state_35400__$1 = (function (){var statearr_35416 = state_35400;
(statearr_35416[(7)] = inst_35377__$1);

return statearr_35416;
})();
var statearr_35417_35442 = state_35400__$1;
(statearr_35417_35442[(2)] = null);

(statearr_35417_35442[(1)] = (2));


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
});})(c__34572__auto__))
;
return ((function (switch__34460__auto__,c__34572__auto__){
return (function() {
var cljs$core$async$state_machine__34461__auto__ = null;
var cljs$core$async$state_machine__34461__auto____0 = (function (){
var statearr_35421 = [null,null,null,null,null,null,null,null];
(statearr_35421[(0)] = cljs$core$async$state_machine__34461__auto__);

(statearr_35421[(1)] = (1));

return statearr_35421;
});
var cljs$core$async$state_machine__34461__auto____1 = (function (state_35400){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_35400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e35422){if((e35422 instanceof Object)){
var ex__34464__auto__ = e35422;
var statearr_35423_35443 = state_35400;
(statearr_35423_35443[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35444 = state_35400;
state_35400 = G__35444;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$state_machine__34461__auto__ = function(state_35400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34461__auto____1.call(this,state_35400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34461__auto____0;
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34461__auto____1;
return cljs$core$async$state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto__))
})();
var state__34574__auto__ = (function (){var statearr_35424 = f__34573__auto__.call(null);
(statearr_35424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto__);

return statearr_35424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto__))
);

return c__34572__auto__;
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
var x__28942__auto__ = (((_ == null))?null:_);
var m__28943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28942__auto__)]);
if(!((m__28943__auto__ == null))){
return m__28943__auto__.call(null,_);
} else {
var m__28943__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28943__auto____$1 == null))){
return m__28943__auto____$1.call(null,_);
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
var x__28942__auto__ = (((m == null))?null:m);
var m__28943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28942__auto__)]);
if(!((m__28943__auto__ == null))){
return m__28943__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28943__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28943__auto____$1 == null))){
return m__28943__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__28942__auto__ = (((m == null))?null:m);
var m__28943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28942__auto__)]);
if(!((m__28943__auto__ == null))){
return m__28943__auto__.call(null,m,ch);
} else {
var m__28943__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28943__auto____$1 == null))){
return m__28943__auto____$1.call(null,m,ch);
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
var x__28942__auto__ = (((m == null))?null:m);
var m__28943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28942__auto__)]);
if(!((m__28943__auto__ == null))){
return m__28943__auto__.call(null,m);
} else {
var m__28943__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28943__auto____$1 == null))){
return m__28943__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async35670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35670 = (function (mult,ch,cs,meta35671){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta35671 = meta35671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35672,meta35671__$1){
var self__ = this;
var _35672__$1 = this;
return (new cljs.core.async.t_cljs$core$async35670(self__.mult,self__.ch,self__.cs,meta35671__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35672){
var self__ = this;
var _35672__$1 = this;
return self__.meta35671;
});})(cs))
;

cljs.core.async.t_cljs$core$async35670.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35670.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async35670.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35670.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35670.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35670.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35671","meta35671",1231020271,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35670";

cljs.core.async.t_cljs$core$async35670.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cljs.core.async/t_cljs$core$async35670");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35670 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35670(mult__$1,ch__$1,cs__$1,meta35671){
return (new cljs.core.async.t_cljs$core$async35670(mult__$1,ch__$1,cs__$1,meta35671));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35670(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34572__auto___35895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___35895,cs,m,dchan,dctr,done){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___35895,cs,m,dchan,dctr,done){
return (function (state_35807){
var state_val_35808 = (state_35807[(1)]);
if((state_val_35808 === (7))){
var inst_35803 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35809_35896 = state_35807__$1;
(statearr_35809_35896[(2)] = inst_35803);

(statearr_35809_35896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (20))){
var inst_35706 = (state_35807[(7)]);
var inst_35718 = cljs.core.first.call(null,inst_35706);
var inst_35719 = cljs.core.nth.call(null,inst_35718,(0),null);
var inst_35720 = cljs.core.nth.call(null,inst_35718,(1),null);
var state_35807__$1 = (function (){var statearr_35810 = state_35807;
(statearr_35810[(8)] = inst_35719);

return statearr_35810;
})();
if(cljs.core.truth_(inst_35720)){
var statearr_35811_35897 = state_35807__$1;
(statearr_35811_35897[(1)] = (22));

} else {
var statearr_35812_35898 = state_35807__$1;
(statearr_35812_35898[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (27))){
var inst_35750 = (state_35807[(9)]);
var inst_35675 = (state_35807[(10)]);
var inst_35755 = (state_35807[(11)]);
var inst_35748 = (state_35807[(12)]);
var inst_35755__$1 = cljs.core._nth.call(null,inst_35748,inst_35750);
var inst_35756 = cljs.core.async.put_BANG_.call(null,inst_35755__$1,inst_35675,done);
var state_35807__$1 = (function (){var statearr_35813 = state_35807;
(statearr_35813[(11)] = inst_35755__$1);

return statearr_35813;
})();
if(cljs.core.truth_(inst_35756)){
var statearr_35814_35899 = state_35807__$1;
(statearr_35814_35899[(1)] = (30));

} else {
var statearr_35815_35900 = state_35807__$1;
(statearr_35815_35900[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (1))){
var state_35807__$1 = state_35807;
var statearr_35816_35901 = state_35807__$1;
(statearr_35816_35901[(2)] = null);

(statearr_35816_35901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (24))){
var inst_35706 = (state_35807[(7)]);
var inst_35725 = (state_35807[(2)]);
var inst_35726 = cljs.core.next.call(null,inst_35706);
var inst_35684 = inst_35726;
var inst_35685 = null;
var inst_35686 = (0);
var inst_35687 = (0);
var state_35807__$1 = (function (){var statearr_35817 = state_35807;
(statearr_35817[(13)] = inst_35685);

(statearr_35817[(14)] = inst_35686);

(statearr_35817[(15)] = inst_35687);

(statearr_35817[(16)] = inst_35684);

(statearr_35817[(17)] = inst_35725);

return statearr_35817;
})();
var statearr_35818_35902 = state_35807__$1;
(statearr_35818_35902[(2)] = null);

(statearr_35818_35902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (39))){
var state_35807__$1 = state_35807;
var statearr_35822_35903 = state_35807__$1;
(statearr_35822_35903[(2)] = null);

(statearr_35822_35903[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (4))){
var inst_35675 = (state_35807[(10)]);
var inst_35675__$1 = (state_35807[(2)]);
var inst_35676 = (inst_35675__$1 == null);
var state_35807__$1 = (function (){var statearr_35823 = state_35807;
(statearr_35823[(10)] = inst_35675__$1);

return statearr_35823;
})();
if(cljs.core.truth_(inst_35676)){
var statearr_35824_35904 = state_35807__$1;
(statearr_35824_35904[(1)] = (5));

} else {
var statearr_35825_35905 = state_35807__$1;
(statearr_35825_35905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (15))){
var inst_35685 = (state_35807[(13)]);
var inst_35686 = (state_35807[(14)]);
var inst_35687 = (state_35807[(15)]);
var inst_35684 = (state_35807[(16)]);
var inst_35702 = (state_35807[(2)]);
var inst_35703 = (inst_35687 + (1));
var tmp35819 = inst_35685;
var tmp35820 = inst_35686;
var tmp35821 = inst_35684;
var inst_35684__$1 = tmp35821;
var inst_35685__$1 = tmp35819;
var inst_35686__$1 = tmp35820;
var inst_35687__$1 = inst_35703;
var state_35807__$1 = (function (){var statearr_35826 = state_35807;
(statearr_35826[(13)] = inst_35685__$1);

(statearr_35826[(14)] = inst_35686__$1);

(statearr_35826[(18)] = inst_35702);

(statearr_35826[(15)] = inst_35687__$1);

(statearr_35826[(16)] = inst_35684__$1);

return statearr_35826;
})();
var statearr_35827_35906 = state_35807__$1;
(statearr_35827_35906[(2)] = null);

(statearr_35827_35906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (21))){
var inst_35729 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35831_35907 = state_35807__$1;
(statearr_35831_35907[(2)] = inst_35729);

(statearr_35831_35907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (31))){
var inst_35755 = (state_35807[(11)]);
var inst_35759 = done.call(null,null);
var inst_35760 = cljs.core.async.untap_STAR_.call(null,m,inst_35755);
var state_35807__$1 = (function (){var statearr_35832 = state_35807;
(statearr_35832[(19)] = inst_35759);

return statearr_35832;
})();
var statearr_35833_35908 = state_35807__$1;
(statearr_35833_35908[(2)] = inst_35760);

(statearr_35833_35908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (32))){
var inst_35749 = (state_35807[(20)]);
var inst_35750 = (state_35807[(9)]);
var inst_35747 = (state_35807[(21)]);
var inst_35748 = (state_35807[(12)]);
var inst_35762 = (state_35807[(2)]);
var inst_35763 = (inst_35750 + (1));
var tmp35828 = inst_35749;
var tmp35829 = inst_35747;
var tmp35830 = inst_35748;
var inst_35747__$1 = tmp35829;
var inst_35748__$1 = tmp35830;
var inst_35749__$1 = tmp35828;
var inst_35750__$1 = inst_35763;
var state_35807__$1 = (function (){var statearr_35834 = state_35807;
(statearr_35834[(22)] = inst_35762);

(statearr_35834[(20)] = inst_35749__$1);

(statearr_35834[(9)] = inst_35750__$1);

(statearr_35834[(21)] = inst_35747__$1);

(statearr_35834[(12)] = inst_35748__$1);

return statearr_35834;
})();
var statearr_35835_35909 = state_35807__$1;
(statearr_35835_35909[(2)] = null);

(statearr_35835_35909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (40))){
var inst_35775 = (state_35807[(23)]);
var inst_35779 = done.call(null,null);
var inst_35780 = cljs.core.async.untap_STAR_.call(null,m,inst_35775);
var state_35807__$1 = (function (){var statearr_35836 = state_35807;
(statearr_35836[(24)] = inst_35779);

return statearr_35836;
})();
var statearr_35837_35910 = state_35807__$1;
(statearr_35837_35910[(2)] = inst_35780);

(statearr_35837_35910[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (33))){
var inst_35766 = (state_35807[(25)]);
var inst_35768 = cljs.core.chunked_seq_QMARK_.call(null,inst_35766);
var state_35807__$1 = state_35807;
if(inst_35768){
var statearr_35838_35911 = state_35807__$1;
(statearr_35838_35911[(1)] = (36));

} else {
var statearr_35839_35912 = state_35807__$1;
(statearr_35839_35912[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (13))){
var inst_35696 = (state_35807[(26)]);
var inst_35699 = cljs.core.async.close_BANG_.call(null,inst_35696);
var state_35807__$1 = state_35807;
var statearr_35840_35913 = state_35807__$1;
(statearr_35840_35913[(2)] = inst_35699);

(statearr_35840_35913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (22))){
var inst_35719 = (state_35807[(8)]);
var inst_35722 = cljs.core.async.close_BANG_.call(null,inst_35719);
var state_35807__$1 = state_35807;
var statearr_35841_35914 = state_35807__$1;
(statearr_35841_35914[(2)] = inst_35722);

(statearr_35841_35914[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (36))){
var inst_35766 = (state_35807[(25)]);
var inst_35770 = cljs.core.chunk_first.call(null,inst_35766);
var inst_35771 = cljs.core.chunk_rest.call(null,inst_35766);
var inst_35772 = cljs.core.count.call(null,inst_35770);
var inst_35747 = inst_35771;
var inst_35748 = inst_35770;
var inst_35749 = inst_35772;
var inst_35750 = (0);
var state_35807__$1 = (function (){var statearr_35842 = state_35807;
(statearr_35842[(20)] = inst_35749);

(statearr_35842[(9)] = inst_35750);

(statearr_35842[(21)] = inst_35747);

(statearr_35842[(12)] = inst_35748);

return statearr_35842;
})();
var statearr_35843_35915 = state_35807__$1;
(statearr_35843_35915[(2)] = null);

(statearr_35843_35915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (41))){
var inst_35766 = (state_35807[(25)]);
var inst_35782 = (state_35807[(2)]);
var inst_35783 = cljs.core.next.call(null,inst_35766);
var inst_35747 = inst_35783;
var inst_35748 = null;
var inst_35749 = (0);
var inst_35750 = (0);
var state_35807__$1 = (function (){var statearr_35844 = state_35807;
(statearr_35844[(20)] = inst_35749);

(statearr_35844[(9)] = inst_35750);

(statearr_35844[(27)] = inst_35782);

(statearr_35844[(21)] = inst_35747);

(statearr_35844[(12)] = inst_35748);

return statearr_35844;
})();
var statearr_35845_35916 = state_35807__$1;
(statearr_35845_35916[(2)] = null);

(statearr_35845_35916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (43))){
var state_35807__$1 = state_35807;
var statearr_35846_35917 = state_35807__$1;
(statearr_35846_35917[(2)] = null);

(statearr_35846_35917[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (29))){
var inst_35791 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35847_35918 = state_35807__$1;
(statearr_35847_35918[(2)] = inst_35791);

(statearr_35847_35918[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (44))){
var inst_35800 = (state_35807[(2)]);
var state_35807__$1 = (function (){var statearr_35848 = state_35807;
(statearr_35848[(28)] = inst_35800);

return statearr_35848;
})();
var statearr_35849_35919 = state_35807__$1;
(statearr_35849_35919[(2)] = null);

(statearr_35849_35919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (6))){
var inst_35739 = (state_35807[(29)]);
var inst_35738 = cljs.core.deref.call(null,cs);
var inst_35739__$1 = cljs.core.keys.call(null,inst_35738);
var inst_35740 = cljs.core.count.call(null,inst_35739__$1);
var inst_35741 = cljs.core.reset_BANG_.call(null,dctr,inst_35740);
var inst_35746 = cljs.core.seq.call(null,inst_35739__$1);
var inst_35747 = inst_35746;
var inst_35748 = null;
var inst_35749 = (0);
var inst_35750 = (0);
var state_35807__$1 = (function (){var statearr_35850 = state_35807;
(statearr_35850[(20)] = inst_35749);

(statearr_35850[(29)] = inst_35739__$1);

(statearr_35850[(9)] = inst_35750);

(statearr_35850[(30)] = inst_35741);

(statearr_35850[(21)] = inst_35747);

(statearr_35850[(12)] = inst_35748);

return statearr_35850;
})();
var statearr_35851_35920 = state_35807__$1;
(statearr_35851_35920[(2)] = null);

(statearr_35851_35920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (28))){
var inst_35766 = (state_35807[(25)]);
var inst_35747 = (state_35807[(21)]);
var inst_35766__$1 = cljs.core.seq.call(null,inst_35747);
var state_35807__$1 = (function (){var statearr_35852 = state_35807;
(statearr_35852[(25)] = inst_35766__$1);

return statearr_35852;
})();
if(inst_35766__$1){
var statearr_35853_35921 = state_35807__$1;
(statearr_35853_35921[(1)] = (33));

} else {
var statearr_35854_35922 = state_35807__$1;
(statearr_35854_35922[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (25))){
var inst_35749 = (state_35807[(20)]);
var inst_35750 = (state_35807[(9)]);
var inst_35752 = (inst_35750 < inst_35749);
var inst_35753 = inst_35752;
var state_35807__$1 = state_35807;
if(cljs.core.truth_(inst_35753)){
var statearr_35855_35923 = state_35807__$1;
(statearr_35855_35923[(1)] = (27));

} else {
var statearr_35856_35924 = state_35807__$1;
(statearr_35856_35924[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (34))){
var state_35807__$1 = state_35807;
var statearr_35857_35925 = state_35807__$1;
(statearr_35857_35925[(2)] = null);

(statearr_35857_35925[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (17))){
var state_35807__$1 = state_35807;
var statearr_35858_35926 = state_35807__$1;
(statearr_35858_35926[(2)] = null);

(statearr_35858_35926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (3))){
var inst_35805 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35807__$1,inst_35805);
} else {
if((state_val_35808 === (12))){
var inst_35734 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35859_35927 = state_35807__$1;
(statearr_35859_35927[(2)] = inst_35734);

(statearr_35859_35927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (2))){
var state_35807__$1 = state_35807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35807__$1,(4),ch);
} else {
if((state_val_35808 === (23))){
var state_35807__$1 = state_35807;
var statearr_35860_35928 = state_35807__$1;
(statearr_35860_35928[(2)] = null);

(statearr_35860_35928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (35))){
var inst_35789 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35861_35929 = state_35807__$1;
(statearr_35861_35929[(2)] = inst_35789);

(statearr_35861_35929[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (19))){
var inst_35706 = (state_35807[(7)]);
var inst_35710 = cljs.core.chunk_first.call(null,inst_35706);
var inst_35711 = cljs.core.chunk_rest.call(null,inst_35706);
var inst_35712 = cljs.core.count.call(null,inst_35710);
var inst_35684 = inst_35711;
var inst_35685 = inst_35710;
var inst_35686 = inst_35712;
var inst_35687 = (0);
var state_35807__$1 = (function (){var statearr_35862 = state_35807;
(statearr_35862[(13)] = inst_35685);

(statearr_35862[(14)] = inst_35686);

(statearr_35862[(15)] = inst_35687);

(statearr_35862[(16)] = inst_35684);

return statearr_35862;
})();
var statearr_35863_35930 = state_35807__$1;
(statearr_35863_35930[(2)] = null);

(statearr_35863_35930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (11))){
var inst_35706 = (state_35807[(7)]);
var inst_35684 = (state_35807[(16)]);
var inst_35706__$1 = cljs.core.seq.call(null,inst_35684);
var state_35807__$1 = (function (){var statearr_35864 = state_35807;
(statearr_35864[(7)] = inst_35706__$1);

return statearr_35864;
})();
if(inst_35706__$1){
var statearr_35865_35931 = state_35807__$1;
(statearr_35865_35931[(1)] = (16));

} else {
var statearr_35866_35932 = state_35807__$1;
(statearr_35866_35932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (9))){
var inst_35736 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35867_35933 = state_35807__$1;
(statearr_35867_35933[(2)] = inst_35736);

(statearr_35867_35933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (5))){
var inst_35682 = cljs.core.deref.call(null,cs);
var inst_35683 = cljs.core.seq.call(null,inst_35682);
var inst_35684 = inst_35683;
var inst_35685 = null;
var inst_35686 = (0);
var inst_35687 = (0);
var state_35807__$1 = (function (){var statearr_35868 = state_35807;
(statearr_35868[(13)] = inst_35685);

(statearr_35868[(14)] = inst_35686);

(statearr_35868[(15)] = inst_35687);

(statearr_35868[(16)] = inst_35684);

return statearr_35868;
})();
var statearr_35869_35934 = state_35807__$1;
(statearr_35869_35934[(2)] = null);

(statearr_35869_35934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (14))){
var state_35807__$1 = state_35807;
var statearr_35870_35935 = state_35807__$1;
(statearr_35870_35935[(2)] = null);

(statearr_35870_35935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (45))){
var inst_35797 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35871_35936 = state_35807__$1;
(statearr_35871_35936[(2)] = inst_35797);

(statearr_35871_35936[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (26))){
var inst_35739 = (state_35807[(29)]);
var inst_35793 = (state_35807[(2)]);
var inst_35794 = cljs.core.seq.call(null,inst_35739);
var state_35807__$1 = (function (){var statearr_35872 = state_35807;
(statearr_35872[(31)] = inst_35793);

return statearr_35872;
})();
if(inst_35794){
var statearr_35873_35937 = state_35807__$1;
(statearr_35873_35937[(1)] = (42));

} else {
var statearr_35874_35938 = state_35807__$1;
(statearr_35874_35938[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (16))){
var inst_35706 = (state_35807[(7)]);
var inst_35708 = cljs.core.chunked_seq_QMARK_.call(null,inst_35706);
var state_35807__$1 = state_35807;
if(inst_35708){
var statearr_35875_35939 = state_35807__$1;
(statearr_35875_35939[(1)] = (19));

} else {
var statearr_35876_35940 = state_35807__$1;
(statearr_35876_35940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (38))){
var inst_35786 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35877_35941 = state_35807__$1;
(statearr_35877_35941[(2)] = inst_35786);

(statearr_35877_35941[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (30))){
var state_35807__$1 = state_35807;
var statearr_35878_35942 = state_35807__$1;
(statearr_35878_35942[(2)] = null);

(statearr_35878_35942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (10))){
var inst_35685 = (state_35807[(13)]);
var inst_35687 = (state_35807[(15)]);
var inst_35695 = cljs.core._nth.call(null,inst_35685,inst_35687);
var inst_35696 = cljs.core.nth.call(null,inst_35695,(0),null);
var inst_35697 = cljs.core.nth.call(null,inst_35695,(1),null);
var state_35807__$1 = (function (){var statearr_35879 = state_35807;
(statearr_35879[(26)] = inst_35696);

return statearr_35879;
})();
if(cljs.core.truth_(inst_35697)){
var statearr_35880_35943 = state_35807__$1;
(statearr_35880_35943[(1)] = (13));

} else {
var statearr_35881_35944 = state_35807__$1;
(statearr_35881_35944[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (18))){
var inst_35732 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35882_35945 = state_35807__$1;
(statearr_35882_35945[(2)] = inst_35732);

(statearr_35882_35945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (42))){
var state_35807__$1 = state_35807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35807__$1,(45),dchan);
} else {
if((state_val_35808 === (37))){
var inst_35775 = (state_35807[(23)]);
var inst_35766 = (state_35807[(25)]);
var inst_35675 = (state_35807[(10)]);
var inst_35775__$1 = cljs.core.first.call(null,inst_35766);
var inst_35776 = cljs.core.async.put_BANG_.call(null,inst_35775__$1,inst_35675,done);
var state_35807__$1 = (function (){var statearr_35883 = state_35807;
(statearr_35883[(23)] = inst_35775__$1);

return statearr_35883;
})();
if(cljs.core.truth_(inst_35776)){
var statearr_35884_35946 = state_35807__$1;
(statearr_35884_35946[(1)] = (39));

} else {
var statearr_35885_35947 = state_35807__$1;
(statearr_35885_35947[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (8))){
var inst_35686 = (state_35807[(14)]);
var inst_35687 = (state_35807[(15)]);
var inst_35689 = (inst_35687 < inst_35686);
var inst_35690 = inst_35689;
var state_35807__$1 = state_35807;
if(cljs.core.truth_(inst_35690)){
var statearr_35886_35948 = state_35807__$1;
(statearr_35886_35948[(1)] = (10));

} else {
var statearr_35887_35949 = state_35807__$1;
(statearr_35887_35949[(1)] = (11));

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
});})(c__34572__auto___35895,cs,m,dchan,dctr,done))
;
return ((function (switch__34460__auto__,c__34572__auto___35895,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34461__auto__ = null;
var cljs$core$async$mult_$_state_machine__34461__auto____0 = (function (){
var statearr_35891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35891[(0)] = cljs$core$async$mult_$_state_machine__34461__auto__);

(statearr_35891[(1)] = (1));

return statearr_35891;
});
var cljs$core$async$mult_$_state_machine__34461__auto____1 = (function (state_35807){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_35807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e35892){if((e35892 instanceof Object)){
var ex__34464__auto__ = e35892;
var statearr_35893_35950 = state_35807;
(statearr_35893_35950[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35951 = state_35807;
state_35807 = G__35951;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34461__auto__ = function(state_35807){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34461__auto____1.call(this,state_35807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34461__auto____0;
cljs$core$async$mult_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34461__auto____1;
return cljs$core$async$mult_$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___35895,cs,m,dchan,dctr,done))
})();
var state__34574__auto__ = (function (){var statearr_35894 = f__34573__auto__.call(null);
(statearr_35894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___35895);

return statearr_35894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___35895,cs,m,dchan,dctr,done))
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
var args35952 = [];
var len__29354__auto___35955 = arguments.length;
var i__29355__auto___35956 = (0);
while(true){
if((i__29355__auto___35956 < len__29354__auto___35955)){
args35952.push((arguments[i__29355__auto___35956]));

var G__35957 = (i__29355__auto___35956 + (1));
i__29355__auto___35956 = G__35957;
continue;
} else {
}
break;
}

var G__35954 = args35952.length;
switch (G__35954) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35952.length)].join('')));

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
var x__28942__auto__ = (((m == null))?null:m);
var m__28943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28942__auto__)]);
if(!((m__28943__auto__ == null))){
return m__28943__auto__.call(null,m,ch);
} else {
var m__28943__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28943__auto____$1 == null))){
return m__28943__auto____$1.call(null,m,ch);
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
var x__28942__auto__ = (((m == null))?null:m);
var m__28943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28942__auto__)]);
if(!((m__28943__auto__ == null))){
return m__28943__auto__.call(null,m,ch);
} else {
var m__28943__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28943__auto____$1 == null))){
return m__28943__auto____$1.call(null,m,ch);
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
var x__28942__auto__ = (((m == null))?null:m);
var m__28943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28942__auto__)]);
if(!((m__28943__auto__ == null))){
return m__28943__auto__.call(null,m);
} else {
var m__28943__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28943__auto____$1 == null))){
return m__28943__auto____$1.call(null,m);
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
var x__28942__auto__ = (((m == null))?null:m);
var m__28943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28942__auto__)]);
if(!((m__28943__auto__ == null))){
return m__28943__auto__.call(null,m,state_map);
} else {
var m__28943__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28943__auto____$1 == null))){
return m__28943__auto____$1.call(null,m,state_map);
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
var x__28942__auto__ = (((m == null))?null:m);
var m__28943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28942__auto__)]);
if(!((m__28943__auto__ == null))){
return m__28943__auto__.call(null,m,mode);
} else {
var m__28943__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28943__auto____$1 == null))){
return m__28943__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29361__auto__ = [];
var len__29354__auto___35969 = arguments.length;
var i__29355__auto___35970 = (0);
while(true){
if((i__29355__auto___35970 < len__29354__auto___35969)){
args__29361__auto__.push((arguments[i__29355__auto___35970]));

var G__35971 = (i__29355__auto___35970 + (1));
i__29355__auto___35970 = G__35971;
continue;
} else {
}
break;
}

var argseq__29362__auto__ = ((((3) < args__29361__auto__.length))?(new cljs.core.IndexedSeq(args__29361__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29362__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35963){
var map__35964 = p__35963;
var map__35964__$1 = ((((!((map__35964 == null)))?((((map__35964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35964):map__35964);
var opts = map__35964__$1;
var statearr_35966_35972 = state;
(statearr_35966_35972[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35964,map__35964__$1,opts){
return (function (val){
var statearr_35967_35973 = state;
(statearr_35967_35973[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35964,map__35964__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35968_35974 = state;
(statearr_35968_35974[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35959){
var G__35960 = cljs.core.first.call(null,seq35959);
var seq35959__$1 = cljs.core.next.call(null,seq35959);
var G__35961 = cljs.core.first.call(null,seq35959__$1);
var seq35959__$2 = cljs.core.next.call(null,seq35959__$1);
var G__35962 = cljs.core.first.call(null,seq35959__$2);
var seq35959__$3 = cljs.core.next.call(null,seq35959__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35960,G__35961,G__35962,seq35959__$3);
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
if(typeof cljs.core.async.t_cljs$core$async36140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36140 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36141){
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
this.meta36141 = meta36141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36142,meta36141__$1){
var self__ = this;
var _36142__$1 = this;
return (new cljs.core.async.t_cljs$core$async36140(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36141__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36142){
var self__ = this;
var _36142__$1 = this;
return self__.meta36141;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36140.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36140.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36140.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async36140.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36140.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36140.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36140.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36140.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async36140.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36141","meta36141",1761900118,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36140";

cljs.core.async.t_cljs$core$async36140.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cljs.core.async/t_cljs$core$async36140");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36140 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36140(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36141){
return (new cljs.core.async.t_cljs$core$async36140(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36141));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36140(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34572__auto___36305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___36305,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___36305,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36242){
var state_val_36243 = (state_36242[(1)]);
if((state_val_36243 === (7))){
var inst_36158 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36244_36306 = state_36242__$1;
(statearr_36244_36306[(2)] = inst_36158);

(statearr_36244_36306[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (20))){
var inst_36170 = (state_36242[(7)]);
var state_36242__$1 = state_36242;
var statearr_36245_36307 = state_36242__$1;
(statearr_36245_36307[(2)] = inst_36170);

(statearr_36245_36307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (27))){
var state_36242__$1 = state_36242;
var statearr_36246_36308 = state_36242__$1;
(statearr_36246_36308[(2)] = null);

(statearr_36246_36308[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (1))){
var inst_36146 = (state_36242[(8)]);
var inst_36146__$1 = calc_state.call(null);
var inst_36148 = (inst_36146__$1 == null);
var inst_36149 = cljs.core.not.call(null,inst_36148);
var state_36242__$1 = (function (){var statearr_36247 = state_36242;
(statearr_36247[(8)] = inst_36146__$1);

return statearr_36247;
})();
if(inst_36149){
var statearr_36248_36309 = state_36242__$1;
(statearr_36248_36309[(1)] = (2));

} else {
var statearr_36249_36310 = state_36242__$1;
(statearr_36249_36310[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (24))){
var inst_36216 = (state_36242[(9)]);
var inst_36202 = (state_36242[(10)]);
var inst_36193 = (state_36242[(11)]);
var inst_36216__$1 = inst_36193.call(null,inst_36202);
var state_36242__$1 = (function (){var statearr_36250 = state_36242;
(statearr_36250[(9)] = inst_36216__$1);

return statearr_36250;
})();
if(cljs.core.truth_(inst_36216__$1)){
var statearr_36251_36311 = state_36242__$1;
(statearr_36251_36311[(1)] = (29));

} else {
var statearr_36252_36312 = state_36242__$1;
(statearr_36252_36312[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (4))){
var inst_36161 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
if(cljs.core.truth_(inst_36161)){
var statearr_36253_36313 = state_36242__$1;
(statearr_36253_36313[(1)] = (8));

} else {
var statearr_36254_36314 = state_36242__$1;
(statearr_36254_36314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (15))){
var inst_36187 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
if(cljs.core.truth_(inst_36187)){
var statearr_36255_36315 = state_36242__$1;
(statearr_36255_36315[(1)] = (19));

} else {
var statearr_36256_36316 = state_36242__$1;
(statearr_36256_36316[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (21))){
var inst_36192 = (state_36242[(12)]);
var inst_36192__$1 = (state_36242[(2)]);
var inst_36193 = cljs.core.get.call(null,inst_36192__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36194 = cljs.core.get.call(null,inst_36192__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36195 = cljs.core.get.call(null,inst_36192__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36242__$1 = (function (){var statearr_36257 = state_36242;
(statearr_36257[(13)] = inst_36194);

(statearr_36257[(12)] = inst_36192__$1);

(statearr_36257[(11)] = inst_36193);

return statearr_36257;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36242__$1,(22),inst_36195);
} else {
if((state_val_36243 === (31))){
var inst_36224 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
if(cljs.core.truth_(inst_36224)){
var statearr_36258_36317 = state_36242__$1;
(statearr_36258_36317[(1)] = (32));

} else {
var statearr_36259_36318 = state_36242__$1;
(statearr_36259_36318[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (32))){
var inst_36201 = (state_36242[(14)]);
var state_36242__$1 = state_36242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36242__$1,(35),out,inst_36201);
} else {
if((state_val_36243 === (33))){
var inst_36192 = (state_36242[(12)]);
var inst_36170 = inst_36192;
var state_36242__$1 = (function (){var statearr_36260 = state_36242;
(statearr_36260[(7)] = inst_36170);

return statearr_36260;
})();
var statearr_36261_36319 = state_36242__$1;
(statearr_36261_36319[(2)] = null);

(statearr_36261_36319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (13))){
var inst_36170 = (state_36242[(7)]);
var inst_36177 = inst_36170.cljs$lang$protocol_mask$partition0$;
var inst_36178 = (inst_36177 & (64));
var inst_36179 = inst_36170.cljs$core$ISeq$;
var inst_36180 = (inst_36178) || (inst_36179);
var state_36242__$1 = state_36242;
if(cljs.core.truth_(inst_36180)){
var statearr_36262_36320 = state_36242__$1;
(statearr_36262_36320[(1)] = (16));

} else {
var statearr_36263_36321 = state_36242__$1;
(statearr_36263_36321[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (22))){
var inst_36202 = (state_36242[(10)]);
var inst_36201 = (state_36242[(14)]);
var inst_36200 = (state_36242[(2)]);
var inst_36201__$1 = cljs.core.nth.call(null,inst_36200,(0),null);
var inst_36202__$1 = cljs.core.nth.call(null,inst_36200,(1),null);
var inst_36203 = (inst_36201__$1 == null);
var inst_36204 = cljs.core._EQ_.call(null,inst_36202__$1,change);
var inst_36205 = (inst_36203) || (inst_36204);
var state_36242__$1 = (function (){var statearr_36264 = state_36242;
(statearr_36264[(10)] = inst_36202__$1);

(statearr_36264[(14)] = inst_36201__$1);

return statearr_36264;
})();
if(cljs.core.truth_(inst_36205)){
var statearr_36265_36322 = state_36242__$1;
(statearr_36265_36322[(1)] = (23));

} else {
var statearr_36266_36323 = state_36242__$1;
(statearr_36266_36323[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (36))){
var inst_36192 = (state_36242[(12)]);
var inst_36170 = inst_36192;
var state_36242__$1 = (function (){var statearr_36267 = state_36242;
(statearr_36267[(7)] = inst_36170);

return statearr_36267;
})();
var statearr_36268_36324 = state_36242__$1;
(statearr_36268_36324[(2)] = null);

(statearr_36268_36324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (29))){
var inst_36216 = (state_36242[(9)]);
var state_36242__$1 = state_36242;
var statearr_36269_36325 = state_36242__$1;
(statearr_36269_36325[(2)] = inst_36216);

(statearr_36269_36325[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (6))){
var state_36242__$1 = state_36242;
var statearr_36270_36326 = state_36242__$1;
(statearr_36270_36326[(2)] = false);

(statearr_36270_36326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (28))){
var inst_36212 = (state_36242[(2)]);
var inst_36213 = calc_state.call(null);
var inst_36170 = inst_36213;
var state_36242__$1 = (function (){var statearr_36271 = state_36242;
(statearr_36271[(15)] = inst_36212);

(statearr_36271[(7)] = inst_36170);

return statearr_36271;
})();
var statearr_36272_36327 = state_36242__$1;
(statearr_36272_36327[(2)] = null);

(statearr_36272_36327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (25))){
var inst_36238 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36273_36328 = state_36242__$1;
(statearr_36273_36328[(2)] = inst_36238);

(statearr_36273_36328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (34))){
var inst_36236 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36274_36329 = state_36242__$1;
(statearr_36274_36329[(2)] = inst_36236);

(statearr_36274_36329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (17))){
var state_36242__$1 = state_36242;
var statearr_36275_36330 = state_36242__$1;
(statearr_36275_36330[(2)] = false);

(statearr_36275_36330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (3))){
var state_36242__$1 = state_36242;
var statearr_36276_36331 = state_36242__$1;
(statearr_36276_36331[(2)] = false);

(statearr_36276_36331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (12))){
var inst_36240 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36242__$1,inst_36240);
} else {
if((state_val_36243 === (2))){
var inst_36146 = (state_36242[(8)]);
var inst_36151 = inst_36146.cljs$lang$protocol_mask$partition0$;
var inst_36152 = (inst_36151 & (64));
var inst_36153 = inst_36146.cljs$core$ISeq$;
var inst_36154 = (inst_36152) || (inst_36153);
var state_36242__$1 = state_36242;
if(cljs.core.truth_(inst_36154)){
var statearr_36277_36332 = state_36242__$1;
(statearr_36277_36332[(1)] = (5));

} else {
var statearr_36278_36333 = state_36242__$1;
(statearr_36278_36333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (23))){
var inst_36201 = (state_36242[(14)]);
var inst_36207 = (inst_36201 == null);
var state_36242__$1 = state_36242;
if(cljs.core.truth_(inst_36207)){
var statearr_36279_36334 = state_36242__$1;
(statearr_36279_36334[(1)] = (26));

} else {
var statearr_36280_36335 = state_36242__$1;
(statearr_36280_36335[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (35))){
var inst_36227 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
if(cljs.core.truth_(inst_36227)){
var statearr_36281_36336 = state_36242__$1;
(statearr_36281_36336[(1)] = (36));

} else {
var statearr_36282_36337 = state_36242__$1;
(statearr_36282_36337[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (19))){
var inst_36170 = (state_36242[(7)]);
var inst_36189 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36170);
var state_36242__$1 = state_36242;
var statearr_36283_36338 = state_36242__$1;
(statearr_36283_36338[(2)] = inst_36189);

(statearr_36283_36338[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (11))){
var inst_36170 = (state_36242[(7)]);
var inst_36174 = (inst_36170 == null);
var inst_36175 = cljs.core.not.call(null,inst_36174);
var state_36242__$1 = state_36242;
if(inst_36175){
var statearr_36284_36339 = state_36242__$1;
(statearr_36284_36339[(1)] = (13));

} else {
var statearr_36285_36340 = state_36242__$1;
(statearr_36285_36340[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (9))){
var inst_36146 = (state_36242[(8)]);
var state_36242__$1 = state_36242;
var statearr_36286_36341 = state_36242__$1;
(statearr_36286_36341[(2)] = inst_36146);

(statearr_36286_36341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (5))){
var state_36242__$1 = state_36242;
var statearr_36287_36342 = state_36242__$1;
(statearr_36287_36342[(2)] = true);

(statearr_36287_36342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (14))){
var state_36242__$1 = state_36242;
var statearr_36288_36343 = state_36242__$1;
(statearr_36288_36343[(2)] = false);

(statearr_36288_36343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (26))){
var inst_36202 = (state_36242[(10)]);
var inst_36209 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36202);
var state_36242__$1 = state_36242;
var statearr_36289_36344 = state_36242__$1;
(statearr_36289_36344[(2)] = inst_36209);

(statearr_36289_36344[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (16))){
var state_36242__$1 = state_36242;
var statearr_36290_36345 = state_36242__$1;
(statearr_36290_36345[(2)] = true);

(statearr_36290_36345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (38))){
var inst_36232 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36291_36346 = state_36242__$1;
(statearr_36291_36346[(2)] = inst_36232);

(statearr_36291_36346[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (30))){
var inst_36194 = (state_36242[(13)]);
var inst_36202 = (state_36242[(10)]);
var inst_36193 = (state_36242[(11)]);
var inst_36219 = cljs.core.empty_QMARK_.call(null,inst_36193);
var inst_36220 = inst_36194.call(null,inst_36202);
var inst_36221 = cljs.core.not.call(null,inst_36220);
var inst_36222 = (inst_36219) && (inst_36221);
var state_36242__$1 = state_36242;
var statearr_36292_36347 = state_36242__$1;
(statearr_36292_36347[(2)] = inst_36222);

(statearr_36292_36347[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (10))){
var inst_36146 = (state_36242[(8)]);
var inst_36166 = (state_36242[(2)]);
var inst_36167 = cljs.core.get.call(null,inst_36166,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36168 = cljs.core.get.call(null,inst_36166,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36169 = cljs.core.get.call(null,inst_36166,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36170 = inst_36146;
var state_36242__$1 = (function (){var statearr_36293 = state_36242;
(statearr_36293[(16)] = inst_36167);

(statearr_36293[(17)] = inst_36169);

(statearr_36293[(18)] = inst_36168);

(statearr_36293[(7)] = inst_36170);

return statearr_36293;
})();
var statearr_36294_36348 = state_36242__$1;
(statearr_36294_36348[(2)] = null);

(statearr_36294_36348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (18))){
var inst_36184 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36295_36349 = state_36242__$1;
(statearr_36295_36349[(2)] = inst_36184);

(statearr_36295_36349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (37))){
var state_36242__$1 = state_36242;
var statearr_36296_36350 = state_36242__$1;
(statearr_36296_36350[(2)] = null);

(statearr_36296_36350[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (8))){
var inst_36146 = (state_36242[(8)]);
var inst_36163 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36146);
var state_36242__$1 = state_36242;
var statearr_36297_36351 = state_36242__$1;
(statearr_36297_36351[(2)] = inst_36163);

(statearr_36297_36351[(1)] = (10));


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
});})(c__34572__auto___36305,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34460__auto__,c__34572__auto___36305,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34461__auto__ = null;
var cljs$core$async$mix_$_state_machine__34461__auto____0 = (function (){
var statearr_36301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36301[(0)] = cljs$core$async$mix_$_state_machine__34461__auto__);

(statearr_36301[(1)] = (1));

return statearr_36301;
});
var cljs$core$async$mix_$_state_machine__34461__auto____1 = (function (state_36242){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_36242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e36302){if((e36302 instanceof Object)){
var ex__34464__auto__ = e36302;
var statearr_36303_36352 = state_36242;
(statearr_36303_36352[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36353 = state_36242;
state_36242 = G__36353;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34461__auto__ = function(state_36242){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34461__auto____1.call(this,state_36242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34461__auto____0;
cljs$core$async$mix_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34461__auto____1;
return cljs$core$async$mix_$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___36305,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34574__auto__ = (function (){var statearr_36304 = f__34573__auto__.call(null);
(statearr_36304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___36305);

return statearr_36304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___36305,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__28942__auto__ = (((p == null))?null:p);
var m__28943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28942__auto__)]);
if(!((m__28943__auto__ == null))){
return m__28943__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28943__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28943__auto____$1 == null))){
return m__28943__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__28942__auto__ = (((p == null))?null:p);
var m__28943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28942__auto__)]);
if(!((m__28943__auto__ == null))){
return m__28943__auto__.call(null,p,v,ch);
} else {
var m__28943__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28943__auto____$1 == null))){
return m__28943__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args36354 = [];
var len__29354__auto___36357 = arguments.length;
var i__29355__auto___36358 = (0);
while(true){
if((i__29355__auto___36358 < len__29354__auto___36357)){
args36354.push((arguments[i__29355__auto___36358]));

var G__36359 = (i__29355__auto___36358 + (1));
i__29355__auto___36358 = G__36359;
continue;
} else {
}
break;
}

var G__36356 = args36354.length;
switch (G__36356) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36354.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28942__auto__ = (((p == null))?null:p);
var m__28943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28942__auto__)]);
if(!((m__28943__auto__ == null))){
return m__28943__auto__.call(null,p);
} else {
var m__28943__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28943__auto____$1 == null))){
return m__28943__auto____$1.call(null,p);
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
var x__28942__auto__ = (((p == null))?null:p);
var m__28943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28942__auto__)]);
if(!((m__28943__auto__ == null))){
return m__28943__auto__.call(null,p,v);
} else {
var m__28943__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28943__auto____$1 == null))){
return m__28943__auto____$1.call(null,p,v);
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
var args36362 = [];
var len__29354__auto___36487 = arguments.length;
var i__29355__auto___36488 = (0);
while(true){
if((i__29355__auto___36488 < len__29354__auto___36487)){
args36362.push((arguments[i__29355__auto___36488]));

var G__36489 = (i__29355__auto___36488 + (1));
i__29355__auto___36488 = G__36489;
continue;
} else {
}
break;
}

var G__36364 = args36362.length;
switch (G__36364) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36362.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28279__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28279__auto__,mults){
return (function (p1__36361_SHARP_){
if(cljs.core.truth_(p1__36361_SHARP_.call(null,topic))){
return p1__36361_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36361_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28279__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36365 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36365 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36366){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36366 = meta36366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36367,meta36366__$1){
var self__ = this;
var _36367__$1 = this;
return (new cljs.core.async.t_cljs$core$async36365(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36366__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36367){
var self__ = this;
var _36367__$1 = this;
return self__.meta36366;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36365.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36366","meta36366",676356982,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36365.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36365";

cljs.core.async.t_cljs$core$async36365.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cljs.core.async/t_cljs$core$async36365");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36365 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36365(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36366){
return (new cljs.core.async.t_cljs$core$async36365(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36366));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36365(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34572__auto___36491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___36491,mults,ensure_mult,p){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___36491,mults,ensure_mult,p){
return (function (state_36439){
var state_val_36440 = (state_36439[(1)]);
if((state_val_36440 === (7))){
var inst_36435 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36441_36492 = state_36439__$1;
(statearr_36441_36492[(2)] = inst_36435);

(statearr_36441_36492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (20))){
var state_36439__$1 = state_36439;
var statearr_36442_36493 = state_36439__$1;
(statearr_36442_36493[(2)] = null);

(statearr_36442_36493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (1))){
var state_36439__$1 = state_36439;
var statearr_36443_36494 = state_36439__$1;
(statearr_36443_36494[(2)] = null);

(statearr_36443_36494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (24))){
var inst_36418 = (state_36439[(7)]);
var inst_36427 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36418);
var state_36439__$1 = state_36439;
var statearr_36444_36495 = state_36439__$1;
(statearr_36444_36495[(2)] = inst_36427);

(statearr_36444_36495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (4))){
var inst_36370 = (state_36439[(8)]);
var inst_36370__$1 = (state_36439[(2)]);
var inst_36371 = (inst_36370__$1 == null);
var state_36439__$1 = (function (){var statearr_36445 = state_36439;
(statearr_36445[(8)] = inst_36370__$1);

return statearr_36445;
})();
if(cljs.core.truth_(inst_36371)){
var statearr_36446_36496 = state_36439__$1;
(statearr_36446_36496[(1)] = (5));

} else {
var statearr_36447_36497 = state_36439__$1;
(statearr_36447_36497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (15))){
var inst_36412 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36448_36498 = state_36439__$1;
(statearr_36448_36498[(2)] = inst_36412);

(statearr_36448_36498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (21))){
var inst_36432 = (state_36439[(2)]);
var state_36439__$1 = (function (){var statearr_36449 = state_36439;
(statearr_36449[(9)] = inst_36432);

return statearr_36449;
})();
var statearr_36450_36499 = state_36439__$1;
(statearr_36450_36499[(2)] = null);

(statearr_36450_36499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (13))){
var inst_36394 = (state_36439[(10)]);
var inst_36396 = cljs.core.chunked_seq_QMARK_.call(null,inst_36394);
var state_36439__$1 = state_36439;
if(inst_36396){
var statearr_36451_36500 = state_36439__$1;
(statearr_36451_36500[(1)] = (16));

} else {
var statearr_36452_36501 = state_36439__$1;
(statearr_36452_36501[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (22))){
var inst_36424 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
if(cljs.core.truth_(inst_36424)){
var statearr_36453_36502 = state_36439__$1;
(statearr_36453_36502[(1)] = (23));

} else {
var statearr_36454_36503 = state_36439__$1;
(statearr_36454_36503[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (6))){
var inst_36418 = (state_36439[(7)]);
var inst_36420 = (state_36439[(11)]);
var inst_36370 = (state_36439[(8)]);
var inst_36418__$1 = topic_fn.call(null,inst_36370);
var inst_36419 = cljs.core.deref.call(null,mults);
var inst_36420__$1 = cljs.core.get.call(null,inst_36419,inst_36418__$1);
var state_36439__$1 = (function (){var statearr_36455 = state_36439;
(statearr_36455[(7)] = inst_36418__$1);

(statearr_36455[(11)] = inst_36420__$1);

return statearr_36455;
})();
if(cljs.core.truth_(inst_36420__$1)){
var statearr_36456_36504 = state_36439__$1;
(statearr_36456_36504[(1)] = (19));

} else {
var statearr_36457_36505 = state_36439__$1;
(statearr_36457_36505[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (25))){
var inst_36429 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36458_36506 = state_36439__$1;
(statearr_36458_36506[(2)] = inst_36429);

(statearr_36458_36506[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (17))){
var inst_36394 = (state_36439[(10)]);
var inst_36403 = cljs.core.first.call(null,inst_36394);
var inst_36404 = cljs.core.async.muxch_STAR_.call(null,inst_36403);
var inst_36405 = cljs.core.async.close_BANG_.call(null,inst_36404);
var inst_36406 = cljs.core.next.call(null,inst_36394);
var inst_36380 = inst_36406;
var inst_36381 = null;
var inst_36382 = (0);
var inst_36383 = (0);
var state_36439__$1 = (function (){var statearr_36459 = state_36439;
(statearr_36459[(12)] = inst_36382);

(statearr_36459[(13)] = inst_36405);

(statearr_36459[(14)] = inst_36380);

(statearr_36459[(15)] = inst_36381);

(statearr_36459[(16)] = inst_36383);

return statearr_36459;
})();
var statearr_36460_36507 = state_36439__$1;
(statearr_36460_36507[(2)] = null);

(statearr_36460_36507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (3))){
var inst_36437 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36439__$1,inst_36437);
} else {
if((state_val_36440 === (12))){
var inst_36414 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36461_36508 = state_36439__$1;
(statearr_36461_36508[(2)] = inst_36414);

(statearr_36461_36508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (2))){
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36439__$1,(4),ch);
} else {
if((state_val_36440 === (23))){
var state_36439__$1 = state_36439;
var statearr_36462_36509 = state_36439__$1;
(statearr_36462_36509[(2)] = null);

(statearr_36462_36509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (19))){
var inst_36420 = (state_36439[(11)]);
var inst_36370 = (state_36439[(8)]);
var inst_36422 = cljs.core.async.muxch_STAR_.call(null,inst_36420);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36439__$1,(22),inst_36422,inst_36370);
} else {
if((state_val_36440 === (11))){
var inst_36394 = (state_36439[(10)]);
var inst_36380 = (state_36439[(14)]);
var inst_36394__$1 = cljs.core.seq.call(null,inst_36380);
var state_36439__$1 = (function (){var statearr_36463 = state_36439;
(statearr_36463[(10)] = inst_36394__$1);

return statearr_36463;
})();
if(inst_36394__$1){
var statearr_36464_36510 = state_36439__$1;
(statearr_36464_36510[(1)] = (13));

} else {
var statearr_36465_36511 = state_36439__$1;
(statearr_36465_36511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (9))){
var inst_36416 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36466_36512 = state_36439__$1;
(statearr_36466_36512[(2)] = inst_36416);

(statearr_36466_36512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (5))){
var inst_36377 = cljs.core.deref.call(null,mults);
var inst_36378 = cljs.core.vals.call(null,inst_36377);
var inst_36379 = cljs.core.seq.call(null,inst_36378);
var inst_36380 = inst_36379;
var inst_36381 = null;
var inst_36382 = (0);
var inst_36383 = (0);
var state_36439__$1 = (function (){var statearr_36467 = state_36439;
(statearr_36467[(12)] = inst_36382);

(statearr_36467[(14)] = inst_36380);

(statearr_36467[(15)] = inst_36381);

(statearr_36467[(16)] = inst_36383);

return statearr_36467;
})();
var statearr_36468_36513 = state_36439__$1;
(statearr_36468_36513[(2)] = null);

(statearr_36468_36513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (14))){
var state_36439__$1 = state_36439;
var statearr_36472_36514 = state_36439__$1;
(statearr_36472_36514[(2)] = null);

(statearr_36472_36514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (16))){
var inst_36394 = (state_36439[(10)]);
var inst_36398 = cljs.core.chunk_first.call(null,inst_36394);
var inst_36399 = cljs.core.chunk_rest.call(null,inst_36394);
var inst_36400 = cljs.core.count.call(null,inst_36398);
var inst_36380 = inst_36399;
var inst_36381 = inst_36398;
var inst_36382 = inst_36400;
var inst_36383 = (0);
var state_36439__$1 = (function (){var statearr_36473 = state_36439;
(statearr_36473[(12)] = inst_36382);

(statearr_36473[(14)] = inst_36380);

(statearr_36473[(15)] = inst_36381);

(statearr_36473[(16)] = inst_36383);

return statearr_36473;
})();
var statearr_36474_36515 = state_36439__$1;
(statearr_36474_36515[(2)] = null);

(statearr_36474_36515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (10))){
var inst_36382 = (state_36439[(12)]);
var inst_36380 = (state_36439[(14)]);
var inst_36381 = (state_36439[(15)]);
var inst_36383 = (state_36439[(16)]);
var inst_36388 = cljs.core._nth.call(null,inst_36381,inst_36383);
var inst_36389 = cljs.core.async.muxch_STAR_.call(null,inst_36388);
var inst_36390 = cljs.core.async.close_BANG_.call(null,inst_36389);
var inst_36391 = (inst_36383 + (1));
var tmp36469 = inst_36382;
var tmp36470 = inst_36380;
var tmp36471 = inst_36381;
var inst_36380__$1 = tmp36470;
var inst_36381__$1 = tmp36471;
var inst_36382__$1 = tmp36469;
var inst_36383__$1 = inst_36391;
var state_36439__$1 = (function (){var statearr_36475 = state_36439;
(statearr_36475[(12)] = inst_36382__$1);

(statearr_36475[(17)] = inst_36390);

(statearr_36475[(14)] = inst_36380__$1);

(statearr_36475[(15)] = inst_36381__$1);

(statearr_36475[(16)] = inst_36383__$1);

return statearr_36475;
})();
var statearr_36476_36516 = state_36439__$1;
(statearr_36476_36516[(2)] = null);

(statearr_36476_36516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (18))){
var inst_36409 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36477_36517 = state_36439__$1;
(statearr_36477_36517[(2)] = inst_36409);

(statearr_36477_36517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (8))){
var inst_36382 = (state_36439[(12)]);
var inst_36383 = (state_36439[(16)]);
var inst_36385 = (inst_36383 < inst_36382);
var inst_36386 = inst_36385;
var state_36439__$1 = state_36439;
if(cljs.core.truth_(inst_36386)){
var statearr_36478_36518 = state_36439__$1;
(statearr_36478_36518[(1)] = (10));

} else {
var statearr_36479_36519 = state_36439__$1;
(statearr_36479_36519[(1)] = (11));

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
});})(c__34572__auto___36491,mults,ensure_mult,p))
;
return ((function (switch__34460__auto__,c__34572__auto___36491,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34461__auto__ = null;
var cljs$core$async$state_machine__34461__auto____0 = (function (){
var statearr_36483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36483[(0)] = cljs$core$async$state_machine__34461__auto__);

(statearr_36483[(1)] = (1));

return statearr_36483;
});
var cljs$core$async$state_machine__34461__auto____1 = (function (state_36439){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_36439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e36484){if((e36484 instanceof Object)){
var ex__34464__auto__ = e36484;
var statearr_36485_36520 = state_36439;
(statearr_36485_36520[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36521 = state_36439;
state_36439 = G__36521;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$state_machine__34461__auto__ = function(state_36439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34461__auto____1.call(this,state_36439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34461__auto____0;
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34461__auto____1;
return cljs$core$async$state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___36491,mults,ensure_mult,p))
})();
var state__34574__auto__ = (function (){var statearr_36486 = f__34573__auto__.call(null);
(statearr_36486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___36491);

return statearr_36486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___36491,mults,ensure_mult,p))
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
var args36522 = [];
var len__29354__auto___36525 = arguments.length;
var i__29355__auto___36526 = (0);
while(true){
if((i__29355__auto___36526 < len__29354__auto___36525)){
args36522.push((arguments[i__29355__auto___36526]));

var G__36527 = (i__29355__auto___36526 + (1));
i__29355__auto___36526 = G__36527;
continue;
} else {
}
break;
}

var G__36524 = args36522.length;
switch (G__36524) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36522.length)].join('')));

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
var args36529 = [];
var len__29354__auto___36532 = arguments.length;
var i__29355__auto___36533 = (0);
while(true){
if((i__29355__auto___36533 < len__29354__auto___36532)){
args36529.push((arguments[i__29355__auto___36533]));

var G__36534 = (i__29355__auto___36533 + (1));
i__29355__auto___36533 = G__36534;
continue;
} else {
}
break;
}

var G__36531 = args36529.length;
switch (G__36531) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36529.length)].join('')));

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
var args36536 = [];
var len__29354__auto___36607 = arguments.length;
var i__29355__auto___36608 = (0);
while(true){
if((i__29355__auto___36608 < len__29354__auto___36607)){
args36536.push((arguments[i__29355__auto___36608]));

var G__36609 = (i__29355__auto___36608 + (1));
i__29355__auto___36608 = G__36609;
continue;
} else {
}
break;
}

var G__36538 = args36536.length;
switch (G__36538) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36536.length)].join('')));

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
var c__34572__auto___36611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___36611,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___36611,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36577){
var state_val_36578 = (state_36577[(1)]);
if((state_val_36578 === (7))){
var state_36577__$1 = state_36577;
var statearr_36579_36612 = state_36577__$1;
(statearr_36579_36612[(2)] = null);

(statearr_36579_36612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (1))){
var state_36577__$1 = state_36577;
var statearr_36580_36613 = state_36577__$1;
(statearr_36580_36613[(2)] = null);

(statearr_36580_36613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (4))){
var inst_36541 = (state_36577[(7)]);
var inst_36543 = (inst_36541 < cnt);
var state_36577__$1 = state_36577;
if(cljs.core.truth_(inst_36543)){
var statearr_36581_36614 = state_36577__$1;
(statearr_36581_36614[(1)] = (6));

} else {
var statearr_36582_36615 = state_36577__$1;
(statearr_36582_36615[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (15))){
var inst_36573 = (state_36577[(2)]);
var state_36577__$1 = state_36577;
var statearr_36583_36616 = state_36577__$1;
(statearr_36583_36616[(2)] = inst_36573);

(statearr_36583_36616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (13))){
var inst_36566 = cljs.core.async.close_BANG_.call(null,out);
var state_36577__$1 = state_36577;
var statearr_36584_36617 = state_36577__$1;
(statearr_36584_36617[(2)] = inst_36566);

(statearr_36584_36617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (6))){
var state_36577__$1 = state_36577;
var statearr_36585_36618 = state_36577__$1;
(statearr_36585_36618[(2)] = null);

(statearr_36585_36618[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (3))){
var inst_36575 = (state_36577[(2)]);
var state_36577__$1 = state_36577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36577__$1,inst_36575);
} else {
if((state_val_36578 === (12))){
var inst_36563 = (state_36577[(8)]);
var inst_36563__$1 = (state_36577[(2)]);
var inst_36564 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36563__$1);
var state_36577__$1 = (function (){var statearr_36586 = state_36577;
(statearr_36586[(8)] = inst_36563__$1);

return statearr_36586;
})();
if(cljs.core.truth_(inst_36564)){
var statearr_36587_36619 = state_36577__$1;
(statearr_36587_36619[(1)] = (13));

} else {
var statearr_36588_36620 = state_36577__$1;
(statearr_36588_36620[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (2))){
var inst_36540 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36541 = (0);
var state_36577__$1 = (function (){var statearr_36589 = state_36577;
(statearr_36589[(9)] = inst_36540);

(statearr_36589[(7)] = inst_36541);

return statearr_36589;
})();
var statearr_36590_36621 = state_36577__$1;
(statearr_36590_36621[(2)] = null);

(statearr_36590_36621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (11))){
var inst_36541 = (state_36577[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36577,(10),Object,null,(9));
var inst_36550 = chs__$1.call(null,inst_36541);
var inst_36551 = done.call(null,inst_36541);
var inst_36552 = cljs.core.async.take_BANG_.call(null,inst_36550,inst_36551);
var state_36577__$1 = state_36577;
var statearr_36591_36622 = state_36577__$1;
(statearr_36591_36622[(2)] = inst_36552);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36577__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (9))){
var inst_36541 = (state_36577[(7)]);
var inst_36554 = (state_36577[(2)]);
var inst_36555 = (inst_36541 + (1));
var inst_36541__$1 = inst_36555;
var state_36577__$1 = (function (){var statearr_36592 = state_36577;
(statearr_36592[(7)] = inst_36541__$1);

(statearr_36592[(10)] = inst_36554);

return statearr_36592;
})();
var statearr_36593_36623 = state_36577__$1;
(statearr_36593_36623[(2)] = null);

(statearr_36593_36623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (5))){
var inst_36561 = (state_36577[(2)]);
var state_36577__$1 = (function (){var statearr_36594 = state_36577;
(statearr_36594[(11)] = inst_36561);

return statearr_36594;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36577__$1,(12),dchan);
} else {
if((state_val_36578 === (14))){
var inst_36563 = (state_36577[(8)]);
var inst_36568 = cljs.core.apply.call(null,f,inst_36563);
var state_36577__$1 = state_36577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36577__$1,(16),out,inst_36568);
} else {
if((state_val_36578 === (16))){
var inst_36570 = (state_36577[(2)]);
var state_36577__$1 = (function (){var statearr_36595 = state_36577;
(statearr_36595[(12)] = inst_36570);

return statearr_36595;
})();
var statearr_36596_36624 = state_36577__$1;
(statearr_36596_36624[(2)] = null);

(statearr_36596_36624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (10))){
var inst_36545 = (state_36577[(2)]);
var inst_36546 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36577__$1 = (function (){var statearr_36597 = state_36577;
(statearr_36597[(13)] = inst_36545);

return statearr_36597;
})();
var statearr_36598_36625 = state_36577__$1;
(statearr_36598_36625[(2)] = inst_36546);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36577__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36578 === (8))){
var inst_36559 = (state_36577[(2)]);
var state_36577__$1 = state_36577;
var statearr_36599_36626 = state_36577__$1;
(statearr_36599_36626[(2)] = inst_36559);

(statearr_36599_36626[(1)] = (5));


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
});})(c__34572__auto___36611,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34460__auto__,c__34572__auto___36611,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34461__auto__ = null;
var cljs$core$async$state_machine__34461__auto____0 = (function (){
var statearr_36603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36603[(0)] = cljs$core$async$state_machine__34461__auto__);

(statearr_36603[(1)] = (1));

return statearr_36603;
});
var cljs$core$async$state_machine__34461__auto____1 = (function (state_36577){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_36577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e36604){if((e36604 instanceof Object)){
var ex__34464__auto__ = e36604;
var statearr_36605_36627 = state_36577;
(statearr_36605_36627[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36628 = state_36577;
state_36577 = G__36628;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$state_machine__34461__auto__ = function(state_36577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34461__auto____1.call(this,state_36577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34461__auto____0;
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34461__auto____1;
return cljs$core$async$state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___36611,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34574__auto__ = (function (){var statearr_36606 = f__34573__auto__.call(null);
(statearr_36606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___36611);

return statearr_36606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___36611,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args36630 = [];
var len__29354__auto___36688 = arguments.length;
var i__29355__auto___36689 = (0);
while(true){
if((i__29355__auto___36689 < len__29354__auto___36688)){
args36630.push((arguments[i__29355__auto___36689]));

var G__36690 = (i__29355__auto___36689 + (1));
i__29355__auto___36689 = G__36690;
continue;
} else {
}
break;
}

var G__36632 = args36630.length;
switch (G__36632) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36630.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34572__auto___36692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___36692,out){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___36692,out){
return (function (state_36664){
var state_val_36665 = (state_36664[(1)]);
if((state_val_36665 === (7))){
var inst_36643 = (state_36664[(7)]);
var inst_36644 = (state_36664[(8)]);
var inst_36643__$1 = (state_36664[(2)]);
var inst_36644__$1 = cljs.core.nth.call(null,inst_36643__$1,(0),null);
var inst_36645 = cljs.core.nth.call(null,inst_36643__$1,(1),null);
var inst_36646 = (inst_36644__$1 == null);
var state_36664__$1 = (function (){var statearr_36666 = state_36664;
(statearr_36666[(9)] = inst_36645);

(statearr_36666[(7)] = inst_36643__$1);

(statearr_36666[(8)] = inst_36644__$1);

return statearr_36666;
})();
if(cljs.core.truth_(inst_36646)){
var statearr_36667_36693 = state_36664__$1;
(statearr_36667_36693[(1)] = (8));

} else {
var statearr_36668_36694 = state_36664__$1;
(statearr_36668_36694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (1))){
var inst_36633 = cljs.core.vec.call(null,chs);
var inst_36634 = inst_36633;
var state_36664__$1 = (function (){var statearr_36669 = state_36664;
(statearr_36669[(10)] = inst_36634);

return statearr_36669;
})();
var statearr_36670_36695 = state_36664__$1;
(statearr_36670_36695[(2)] = null);

(statearr_36670_36695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (4))){
var inst_36634 = (state_36664[(10)]);
var state_36664__$1 = state_36664;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36664__$1,(7),inst_36634);
} else {
if((state_val_36665 === (6))){
var inst_36660 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
var statearr_36671_36696 = state_36664__$1;
(statearr_36671_36696[(2)] = inst_36660);

(statearr_36671_36696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (3))){
var inst_36662 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36664__$1,inst_36662);
} else {
if((state_val_36665 === (2))){
var inst_36634 = (state_36664[(10)]);
var inst_36636 = cljs.core.count.call(null,inst_36634);
var inst_36637 = (inst_36636 > (0));
var state_36664__$1 = state_36664;
if(cljs.core.truth_(inst_36637)){
var statearr_36673_36697 = state_36664__$1;
(statearr_36673_36697[(1)] = (4));

} else {
var statearr_36674_36698 = state_36664__$1;
(statearr_36674_36698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (11))){
var inst_36634 = (state_36664[(10)]);
var inst_36653 = (state_36664[(2)]);
var tmp36672 = inst_36634;
var inst_36634__$1 = tmp36672;
var state_36664__$1 = (function (){var statearr_36675 = state_36664;
(statearr_36675[(11)] = inst_36653);

(statearr_36675[(10)] = inst_36634__$1);

return statearr_36675;
})();
var statearr_36676_36699 = state_36664__$1;
(statearr_36676_36699[(2)] = null);

(statearr_36676_36699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (9))){
var inst_36644 = (state_36664[(8)]);
var state_36664__$1 = state_36664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36664__$1,(11),out,inst_36644);
} else {
if((state_val_36665 === (5))){
var inst_36658 = cljs.core.async.close_BANG_.call(null,out);
var state_36664__$1 = state_36664;
var statearr_36677_36700 = state_36664__$1;
(statearr_36677_36700[(2)] = inst_36658);

(statearr_36677_36700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (10))){
var inst_36656 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
var statearr_36678_36701 = state_36664__$1;
(statearr_36678_36701[(2)] = inst_36656);

(statearr_36678_36701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (8))){
var inst_36645 = (state_36664[(9)]);
var inst_36643 = (state_36664[(7)]);
var inst_36644 = (state_36664[(8)]);
var inst_36634 = (state_36664[(10)]);
var inst_36648 = (function (){var cs = inst_36634;
var vec__36639 = inst_36643;
var v = inst_36644;
var c = inst_36645;
return ((function (cs,vec__36639,v,c,inst_36645,inst_36643,inst_36644,inst_36634,state_val_36665,c__34572__auto___36692,out){
return (function (p1__36629_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36629_SHARP_);
});
;})(cs,vec__36639,v,c,inst_36645,inst_36643,inst_36644,inst_36634,state_val_36665,c__34572__auto___36692,out))
})();
var inst_36649 = cljs.core.filterv.call(null,inst_36648,inst_36634);
var inst_36634__$1 = inst_36649;
var state_36664__$1 = (function (){var statearr_36679 = state_36664;
(statearr_36679[(10)] = inst_36634__$1);

return statearr_36679;
})();
var statearr_36680_36702 = state_36664__$1;
(statearr_36680_36702[(2)] = null);

(statearr_36680_36702[(1)] = (2));


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
});})(c__34572__auto___36692,out))
;
return ((function (switch__34460__auto__,c__34572__auto___36692,out){
return (function() {
var cljs$core$async$state_machine__34461__auto__ = null;
var cljs$core$async$state_machine__34461__auto____0 = (function (){
var statearr_36684 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36684[(0)] = cljs$core$async$state_machine__34461__auto__);

(statearr_36684[(1)] = (1));

return statearr_36684;
});
var cljs$core$async$state_machine__34461__auto____1 = (function (state_36664){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_36664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e36685){if((e36685 instanceof Object)){
var ex__34464__auto__ = e36685;
var statearr_36686_36703 = state_36664;
(statearr_36686_36703[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36704 = state_36664;
state_36664 = G__36704;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$state_machine__34461__auto__ = function(state_36664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34461__auto____1.call(this,state_36664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34461__auto____0;
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34461__auto____1;
return cljs$core$async$state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___36692,out))
})();
var state__34574__auto__ = (function (){var statearr_36687 = f__34573__auto__.call(null);
(statearr_36687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___36692);

return statearr_36687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___36692,out))
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
var args36705 = [];
var len__29354__auto___36754 = arguments.length;
var i__29355__auto___36755 = (0);
while(true){
if((i__29355__auto___36755 < len__29354__auto___36754)){
args36705.push((arguments[i__29355__auto___36755]));

var G__36756 = (i__29355__auto___36755 + (1));
i__29355__auto___36755 = G__36756;
continue;
} else {
}
break;
}

var G__36707 = args36705.length;
switch (G__36707) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36705.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34572__auto___36758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___36758,out){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___36758,out){
return (function (state_36731){
var state_val_36732 = (state_36731[(1)]);
if((state_val_36732 === (7))){
var inst_36713 = (state_36731[(7)]);
var inst_36713__$1 = (state_36731[(2)]);
var inst_36714 = (inst_36713__$1 == null);
var inst_36715 = cljs.core.not.call(null,inst_36714);
var state_36731__$1 = (function (){var statearr_36733 = state_36731;
(statearr_36733[(7)] = inst_36713__$1);

return statearr_36733;
})();
if(inst_36715){
var statearr_36734_36759 = state_36731__$1;
(statearr_36734_36759[(1)] = (8));

} else {
var statearr_36735_36760 = state_36731__$1;
(statearr_36735_36760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (1))){
var inst_36708 = (0);
var state_36731__$1 = (function (){var statearr_36736 = state_36731;
(statearr_36736[(8)] = inst_36708);

return statearr_36736;
})();
var statearr_36737_36761 = state_36731__$1;
(statearr_36737_36761[(2)] = null);

(statearr_36737_36761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (4))){
var state_36731__$1 = state_36731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36731__$1,(7),ch);
} else {
if((state_val_36732 === (6))){
var inst_36726 = (state_36731[(2)]);
var state_36731__$1 = state_36731;
var statearr_36738_36762 = state_36731__$1;
(statearr_36738_36762[(2)] = inst_36726);

(statearr_36738_36762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (3))){
var inst_36728 = (state_36731[(2)]);
var inst_36729 = cljs.core.async.close_BANG_.call(null,out);
var state_36731__$1 = (function (){var statearr_36739 = state_36731;
(statearr_36739[(9)] = inst_36728);

return statearr_36739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36731__$1,inst_36729);
} else {
if((state_val_36732 === (2))){
var inst_36708 = (state_36731[(8)]);
var inst_36710 = (inst_36708 < n);
var state_36731__$1 = state_36731;
if(cljs.core.truth_(inst_36710)){
var statearr_36740_36763 = state_36731__$1;
(statearr_36740_36763[(1)] = (4));

} else {
var statearr_36741_36764 = state_36731__$1;
(statearr_36741_36764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (11))){
var inst_36708 = (state_36731[(8)]);
var inst_36718 = (state_36731[(2)]);
var inst_36719 = (inst_36708 + (1));
var inst_36708__$1 = inst_36719;
var state_36731__$1 = (function (){var statearr_36742 = state_36731;
(statearr_36742[(8)] = inst_36708__$1);

(statearr_36742[(10)] = inst_36718);

return statearr_36742;
})();
var statearr_36743_36765 = state_36731__$1;
(statearr_36743_36765[(2)] = null);

(statearr_36743_36765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (9))){
var state_36731__$1 = state_36731;
var statearr_36744_36766 = state_36731__$1;
(statearr_36744_36766[(2)] = null);

(statearr_36744_36766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (5))){
var state_36731__$1 = state_36731;
var statearr_36745_36767 = state_36731__$1;
(statearr_36745_36767[(2)] = null);

(statearr_36745_36767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (10))){
var inst_36723 = (state_36731[(2)]);
var state_36731__$1 = state_36731;
var statearr_36746_36768 = state_36731__$1;
(statearr_36746_36768[(2)] = inst_36723);

(statearr_36746_36768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36732 === (8))){
var inst_36713 = (state_36731[(7)]);
var state_36731__$1 = state_36731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36731__$1,(11),out,inst_36713);
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
});})(c__34572__auto___36758,out))
;
return ((function (switch__34460__auto__,c__34572__auto___36758,out){
return (function() {
var cljs$core$async$state_machine__34461__auto__ = null;
var cljs$core$async$state_machine__34461__auto____0 = (function (){
var statearr_36750 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36750[(0)] = cljs$core$async$state_machine__34461__auto__);

(statearr_36750[(1)] = (1));

return statearr_36750;
});
var cljs$core$async$state_machine__34461__auto____1 = (function (state_36731){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_36731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e36751){if((e36751 instanceof Object)){
var ex__34464__auto__ = e36751;
var statearr_36752_36769 = state_36731;
(statearr_36752_36769[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36770 = state_36731;
state_36731 = G__36770;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$state_machine__34461__auto__ = function(state_36731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34461__auto____1.call(this,state_36731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34461__auto____0;
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34461__auto____1;
return cljs$core$async$state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___36758,out))
})();
var state__34574__auto__ = (function (){var statearr_36753 = f__34573__auto__.call(null);
(statearr_36753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___36758);

return statearr_36753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___36758,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36778 = (function (map_LT_,f,ch,meta36779){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36779 = meta36779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36780,meta36779__$1){
var self__ = this;
var _36780__$1 = this;
return (new cljs.core.async.t_cljs$core$async36778(self__.map_LT_,self__.f,self__.ch,meta36779__$1));
});

cljs.core.async.t_cljs$core$async36778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36780){
var self__ = this;
var _36780__$1 = this;
return self__.meta36779;
});

cljs.core.async.t_cljs$core$async36778.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36778.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36778.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36781 = (function (map_LT_,f,ch,meta36779,_,fn1,meta36782){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36779 = meta36779;
this._ = _;
this.fn1 = fn1;
this.meta36782 = meta36782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36783,meta36782__$1){
var self__ = this;
var _36783__$1 = this;
return (new cljs.core.async.t_cljs$core$async36781(self__.map_LT_,self__.f,self__.ch,self__.meta36779,self__._,self__.fn1,meta36782__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36781.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36783){
var self__ = this;
var _36783__$1 = this;
return self__.meta36782;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36781.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36781.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36771_SHARP_){
return f1.call(null,(((p1__36771_SHARP_ == null))?null:self__.f.call(null,p1__36771_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36781.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36779","meta36779",680924704,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36778","cljs.core.async/t_cljs$core$async36778",1274175051,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36782","meta36782",1756293334,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36781";

cljs.core.async.t_cljs$core$async36781.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cljs.core.async/t_cljs$core$async36781");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36781 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36781(map_LT___$1,f__$1,ch__$1,meta36779__$1,___$2,fn1__$1,meta36782){
return (new cljs.core.async.t_cljs$core$async36781(map_LT___$1,f__$1,ch__$1,meta36779__$1,___$2,fn1__$1,meta36782));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36781(self__.map_LT_,self__.f,self__.ch,self__.meta36779,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28267__auto__ = ret;
if(cljs.core.truth_(and__28267__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28267__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36778.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36779","meta36779",680924704,null)], null);
});

cljs.core.async.t_cljs$core$async36778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36778";

cljs.core.async.t_cljs$core$async36778.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cljs.core.async/t_cljs$core$async36778");
});

cljs.core.async.__GT_t_cljs$core$async36778 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36778(map_LT___$1,f__$1,ch__$1,meta36779){
return (new cljs.core.async.t_cljs$core$async36778(map_LT___$1,f__$1,ch__$1,meta36779));
});

}

return (new cljs.core.async.t_cljs$core$async36778(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36787 = (function (map_GT_,f,ch,meta36788){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta36788 = meta36788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36789,meta36788__$1){
var self__ = this;
var _36789__$1 = this;
return (new cljs.core.async.t_cljs$core$async36787(self__.map_GT_,self__.f,self__.ch,meta36788__$1));
});

cljs.core.async.t_cljs$core$async36787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36789){
var self__ = this;
var _36789__$1 = this;
return self__.meta36788;
});

cljs.core.async.t_cljs$core$async36787.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36787.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36787.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36788","meta36788",-1061446635,null)], null);
});

cljs.core.async.t_cljs$core$async36787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36787";

cljs.core.async.t_cljs$core$async36787.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cljs.core.async/t_cljs$core$async36787");
});

cljs.core.async.__GT_t_cljs$core$async36787 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36787(map_GT___$1,f__$1,ch__$1,meta36788){
return (new cljs.core.async.t_cljs$core$async36787(map_GT___$1,f__$1,ch__$1,meta36788));
});

}

return (new cljs.core.async.t_cljs$core$async36787(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36793 = (function (filter_GT_,p,ch,meta36794){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta36794 = meta36794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36795,meta36794__$1){
var self__ = this;
var _36795__$1 = this;
return (new cljs.core.async.t_cljs$core$async36793(self__.filter_GT_,self__.p,self__.ch,meta36794__$1));
});

cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36795){
var self__ = this;
var _36795__$1 = this;
return self__.meta36794;
});

cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36794","meta36794",-1896669313,null)], null);
});

cljs.core.async.t_cljs$core$async36793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36793";

cljs.core.async.t_cljs$core$async36793.cljs$lang$ctorPrWriter = (function (this__28885__auto__,writer__28886__auto__,opt__28887__auto__){
return cljs.core._write.call(null,writer__28886__auto__,"cljs.core.async/t_cljs$core$async36793");
});

cljs.core.async.__GT_t_cljs$core$async36793 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36793(filter_GT___$1,p__$1,ch__$1,meta36794){
return (new cljs.core.async.t_cljs$core$async36793(filter_GT___$1,p__$1,ch__$1,meta36794));
});

}

return (new cljs.core.async.t_cljs$core$async36793(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args36796 = [];
var len__29354__auto___36840 = arguments.length;
var i__29355__auto___36841 = (0);
while(true){
if((i__29355__auto___36841 < len__29354__auto___36840)){
args36796.push((arguments[i__29355__auto___36841]));

var G__36842 = (i__29355__auto___36841 + (1));
i__29355__auto___36841 = G__36842;
continue;
} else {
}
break;
}

var G__36798 = args36796.length;
switch (G__36798) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36796.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34572__auto___36844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___36844,out){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___36844,out){
return (function (state_36819){
var state_val_36820 = (state_36819[(1)]);
if((state_val_36820 === (7))){
var inst_36815 = (state_36819[(2)]);
var state_36819__$1 = state_36819;
var statearr_36821_36845 = state_36819__$1;
(statearr_36821_36845[(2)] = inst_36815);

(statearr_36821_36845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36820 === (1))){
var state_36819__$1 = state_36819;
var statearr_36822_36846 = state_36819__$1;
(statearr_36822_36846[(2)] = null);

(statearr_36822_36846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36820 === (4))){
var inst_36801 = (state_36819[(7)]);
var inst_36801__$1 = (state_36819[(2)]);
var inst_36802 = (inst_36801__$1 == null);
var state_36819__$1 = (function (){var statearr_36823 = state_36819;
(statearr_36823[(7)] = inst_36801__$1);

return statearr_36823;
})();
if(cljs.core.truth_(inst_36802)){
var statearr_36824_36847 = state_36819__$1;
(statearr_36824_36847[(1)] = (5));

} else {
var statearr_36825_36848 = state_36819__$1;
(statearr_36825_36848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36820 === (6))){
var inst_36801 = (state_36819[(7)]);
var inst_36806 = p.call(null,inst_36801);
var state_36819__$1 = state_36819;
if(cljs.core.truth_(inst_36806)){
var statearr_36826_36849 = state_36819__$1;
(statearr_36826_36849[(1)] = (8));

} else {
var statearr_36827_36850 = state_36819__$1;
(statearr_36827_36850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36820 === (3))){
var inst_36817 = (state_36819[(2)]);
var state_36819__$1 = state_36819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36819__$1,inst_36817);
} else {
if((state_val_36820 === (2))){
var state_36819__$1 = state_36819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36819__$1,(4),ch);
} else {
if((state_val_36820 === (11))){
var inst_36809 = (state_36819[(2)]);
var state_36819__$1 = state_36819;
var statearr_36828_36851 = state_36819__$1;
(statearr_36828_36851[(2)] = inst_36809);

(statearr_36828_36851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36820 === (9))){
var state_36819__$1 = state_36819;
var statearr_36829_36852 = state_36819__$1;
(statearr_36829_36852[(2)] = null);

(statearr_36829_36852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36820 === (5))){
var inst_36804 = cljs.core.async.close_BANG_.call(null,out);
var state_36819__$1 = state_36819;
var statearr_36830_36853 = state_36819__$1;
(statearr_36830_36853[(2)] = inst_36804);

(statearr_36830_36853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36820 === (10))){
var inst_36812 = (state_36819[(2)]);
var state_36819__$1 = (function (){var statearr_36831 = state_36819;
(statearr_36831[(8)] = inst_36812);

return statearr_36831;
})();
var statearr_36832_36854 = state_36819__$1;
(statearr_36832_36854[(2)] = null);

(statearr_36832_36854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36820 === (8))){
var inst_36801 = (state_36819[(7)]);
var state_36819__$1 = state_36819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36819__$1,(11),out,inst_36801);
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
});})(c__34572__auto___36844,out))
;
return ((function (switch__34460__auto__,c__34572__auto___36844,out){
return (function() {
var cljs$core$async$state_machine__34461__auto__ = null;
var cljs$core$async$state_machine__34461__auto____0 = (function (){
var statearr_36836 = [null,null,null,null,null,null,null,null,null];
(statearr_36836[(0)] = cljs$core$async$state_machine__34461__auto__);

(statearr_36836[(1)] = (1));

return statearr_36836;
});
var cljs$core$async$state_machine__34461__auto____1 = (function (state_36819){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_36819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e36837){if((e36837 instanceof Object)){
var ex__34464__auto__ = e36837;
var statearr_36838_36855 = state_36819;
(statearr_36838_36855[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36856 = state_36819;
state_36819 = G__36856;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$state_machine__34461__auto__ = function(state_36819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34461__auto____1.call(this,state_36819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34461__auto____0;
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34461__auto____1;
return cljs$core$async$state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___36844,out))
})();
var state__34574__auto__ = (function (){var statearr_36839 = f__34573__auto__.call(null);
(statearr_36839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___36844);

return statearr_36839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___36844,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36857 = [];
var len__29354__auto___36860 = arguments.length;
var i__29355__auto___36861 = (0);
while(true){
if((i__29355__auto___36861 < len__29354__auto___36860)){
args36857.push((arguments[i__29355__auto___36861]));

var G__36862 = (i__29355__auto___36861 + (1));
i__29355__auto___36861 = G__36862;
continue;
} else {
}
break;
}

var G__36859 = args36857.length;
switch (G__36859) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36857.length)].join('')));

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
var c__34572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto__){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto__){
return (function (state_37029){
var state_val_37030 = (state_37029[(1)]);
if((state_val_37030 === (7))){
var inst_37025 = (state_37029[(2)]);
var state_37029__$1 = state_37029;
var statearr_37031_37072 = state_37029__$1;
(statearr_37031_37072[(2)] = inst_37025);

(statearr_37031_37072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (20))){
var inst_36995 = (state_37029[(7)]);
var inst_37006 = (state_37029[(2)]);
var inst_37007 = cljs.core.next.call(null,inst_36995);
var inst_36981 = inst_37007;
var inst_36982 = null;
var inst_36983 = (0);
var inst_36984 = (0);
var state_37029__$1 = (function (){var statearr_37032 = state_37029;
(statearr_37032[(8)] = inst_37006);

(statearr_37032[(9)] = inst_36984);

(statearr_37032[(10)] = inst_36982);

(statearr_37032[(11)] = inst_36981);

(statearr_37032[(12)] = inst_36983);

return statearr_37032;
})();
var statearr_37033_37073 = state_37029__$1;
(statearr_37033_37073[(2)] = null);

(statearr_37033_37073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (1))){
var state_37029__$1 = state_37029;
var statearr_37034_37074 = state_37029__$1;
(statearr_37034_37074[(2)] = null);

(statearr_37034_37074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (4))){
var inst_36970 = (state_37029[(13)]);
var inst_36970__$1 = (state_37029[(2)]);
var inst_36971 = (inst_36970__$1 == null);
var state_37029__$1 = (function (){var statearr_37035 = state_37029;
(statearr_37035[(13)] = inst_36970__$1);

return statearr_37035;
})();
if(cljs.core.truth_(inst_36971)){
var statearr_37036_37075 = state_37029__$1;
(statearr_37036_37075[(1)] = (5));

} else {
var statearr_37037_37076 = state_37029__$1;
(statearr_37037_37076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (15))){
var state_37029__$1 = state_37029;
var statearr_37041_37077 = state_37029__$1;
(statearr_37041_37077[(2)] = null);

(statearr_37041_37077[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (21))){
var state_37029__$1 = state_37029;
var statearr_37042_37078 = state_37029__$1;
(statearr_37042_37078[(2)] = null);

(statearr_37042_37078[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (13))){
var inst_36984 = (state_37029[(9)]);
var inst_36982 = (state_37029[(10)]);
var inst_36981 = (state_37029[(11)]);
var inst_36983 = (state_37029[(12)]);
var inst_36991 = (state_37029[(2)]);
var inst_36992 = (inst_36984 + (1));
var tmp37038 = inst_36982;
var tmp37039 = inst_36981;
var tmp37040 = inst_36983;
var inst_36981__$1 = tmp37039;
var inst_36982__$1 = tmp37038;
var inst_36983__$1 = tmp37040;
var inst_36984__$1 = inst_36992;
var state_37029__$1 = (function (){var statearr_37043 = state_37029;
(statearr_37043[(9)] = inst_36984__$1);

(statearr_37043[(10)] = inst_36982__$1);

(statearr_37043[(14)] = inst_36991);

(statearr_37043[(11)] = inst_36981__$1);

(statearr_37043[(12)] = inst_36983__$1);

return statearr_37043;
})();
var statearr_37044_37079 = state_37029__$1;
(statearr_37044_37079[(2)] = null);

(statearr_37044_37079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (22))){
var state_37029__$1 = state_37029;
var statearr_37045_37080 = state_37029__$1;
(statearr_37045_37080[(2)] = null);

(statearr_37045_37080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (6))){
var inst_36970 = (state_37029[(13)]);
var inst_36979 = f.call(null,inst_36970);
var inst_36980 = cljs.core.seq.call(null,inst_36979);
var inst_36981 = inst_36980;
var inst_36982 = null;
var inst_36983 = (0);
var inst_36984 = (0);
var state_37029__$1 = (function (){var statearr_37046 = state_37029;
(statearr_37046[(9)] = inst_36984);

(statearr_37046[(10)] = inst_36982);

(statearr_37046[(11)] = inst_36981);

(statearr_37046[(12)] = inst_36983);

return statearr_37046;
})();
var statearr_37047_37081 = state_37029__$1;
(statearr_37047_37081[(2)] = null);

(statearr_37047_37081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (17))){
var inst_36995 = (state_37029[(7)]);
var inst_36999 = cljs.core.chunk_first.call(null,inst_36995);
var inst_37000 = cljs.core.chunk_rest.call(null,inst_36995);
var inst_37001 = cljs.core.count.call(null,inst_36999);
var inst_36981 = inst_37000;
var inst_36982 = inst_36999;
var inst_36983 = inst_37001;
var inst_36984 = (0);
var state_37029__$1 = (function (){var statearr_37048 = state_37029;
(statearr_37048[(9)] = inst_36984);

(statearr_37048[(10)] = inst_36982);

(statearr_37048[(11)] = inst_36981);

(statearr_37048[(12)] = inst_36983);

return statearr_37048;
})();
var statearr_37049_37082 = state_37029__$1;
(statearr_37049_37082[(2)] = null);

(statearr_37049_37082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (3))){
var inst_37027 = (state_37029[(2)]);
var state_37029__$1 = state_37029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37029__$1,inst_37027);
} else {
if((state_val_37030 === (12))){
var inst_37015 = (state_37029[(2)]);
var state_37029__$1 = state_37029;
var statearr_37050_37083 = state_37029__$1;
(statearr_37050_37083[(2)] = inst_37015);

(statearr_37050_37083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (2))){
var state_37029__$1 = state_37029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37029__$1,(4),in$);
} else {
if((state_val_37030 === (23))){
var inst_37023 = (state_37029[(2)]);
var state_37029__$1 = state_37029;
var statearr_37051_37084 = state_37029__$1;
(statearr_37051_37084[(2)] = inst_37023);

(statearr_37051_37084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (19))){
var inst_37010 = (state_37029[(2)]);
var state_37029__$1 = state_37029;
var statearr_37052_37085 = state_37029__$1;
(statearr_37052_37085[(2)] = inst_37010);

(statearr_37052_37085[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (11))){
var inst_36995 = (state_37029[(7)]);
var inst_36981 = (state_37029[(11)]);
var inst_36995__$1 = cljs.core.seq.call(null,inst_36981);
var state_37029__$1 = (function (){var statearr_37053 = state_37029;
(statearr_37053[(7)] = inst_36995__$1);

return statearr_37053;
})();
if(inst_36995__$1){
var statearr_37054_37086 = state_37029__$1;
(statearr_37054_37086[(1)] = (14));

} else {
var statearr_37055_37087 = state_37029__$1;
(statearr_37055_37087[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (9))){
var inst_37017 = (state_37029[(2)]);
var inst_37018 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37029__$1 = (function (){var statearr_37056 = state_37029;
(statearr_37056[(15)] = inst_37017);

return statearr_37056;
})();
if(cljs.core.truth_(inst_37018)){
var statearr_37057_37088 = state_37029__$1;
(statearr_37057_37088[(1)] = (21));

} else {
var statearr_37058_37089 = state_37029__$1;
(statearr_37058_37089[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (5))){
var inst_36973 = cljs.core.async.close_BANG_.call(null,out);
var state_37029__$1 = state_37029;
var statearr_37059_37090 = state_37029__$1;
(statearr_37059_37090[(2)] = inst_36973);

(statearr_37059_37090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (14))){
var inst_36995 = (state_37029[(7)]);
var inst_36997 = cljs.core.chunked_seq_QMARK_.call(null,inst_36995);
var state_37029__$1 = state_37029;
if(inst_36997){
var statearr_37060_37091 = state_37029__$1;
(statearr_37060_37091[(1)] = (17));

} else {
var statearr_37061_37092 = state_37029__$1;
(statearr_37061_37092[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (16))){
var inst_37013 = (state_37029[(2)]);
var state_37029__$1 = state_37029;
var statearr_37062_37093 = state_37029__$1;
(statearr_37062_37093[(2)] = inst_37013);

(statearr_37062_37093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37030 === (10))){
var inst_36984 = (state_37029[(9)]);
var inst_36982 = (state_37029[(10)]);
var inst_36989 = cljs.core._nth.call(null,inst_36982,inst_36984);
var state_37029__$1 = state_37029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37029__$1,(13),out,inst_36989);
} else {
if((state_val_37030 === (18))){
var inst_36995 = (state_37029[(7)]);
var inst_37004 = cljs.core.first.call(null,inst_36995);
var state_37029__$1 = state_37029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37029__$1,(20),out,inst_37004);
} else {
if((state_val_37030 === (8))){
var inst_36984 = (state_37029[(9)]);
var inst_36983 = (state_37029[(12)]);
var inst_36986 = (inst_36984 < inst_36983);
var inst_36987 = inst_36986;
var state_37029__$1 = state_37029;
if(cljs.core.truth_(inst_36987)){
var statearr_37063_37094 = state_37029__$1;
(statearr_37063_37094[(1)] = (10));

} else {
var statearr_37064_37095 = state_37029__$1;
(statearr_37064_37095[(1)] = (11));

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
});})(c__34572__auto__))
;
return ((function (switch__34460__auto__,c__34572__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34461__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34461__auto____0 = (function (){
var statearr_37068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37068[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34461__auto__);

(statearr_37068[(1)] = (1));

return statearr_37068;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34461__auto____1 = (function (state_37029){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_37029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e37069){if((e37069 instanceof Object)){
var ex__34464__auto__ = e37069;
var statearr_37070_37096 = state_37029;
(statearr_37070_37096[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37097 = state_37029;
state_37029 = G__37097;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34461__auto__ = function(state_37029){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34461__auto____1.call(this,state_37029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34461__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34461__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto__))
})();
var state__34574__auto__ = (function (){var statearr_37071 = f__34573__auto__.call(null);
(statearr_37071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto__);

return statearr_37071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto__))
);

return c__34572__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args37098 = [];
var len__29354__auto___37101 = arguments.length;
var i__29355__auto___37102 = (0);
while(true){
if((i__29355__auto___37102 < len__29354__auto___37101)){
args37098.push((arguments[i__29355__auto___37102]));

var G__37103 = (i__29355__auto___37102 + (1));
i__29355__auto___37102 = G__37103;
continue;
} else {
}
break;
}

var G__37100 = args37098.length;
switch (G__37100) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37098.length)].join('')));

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
var args37105 = [];
var len__29354__auto___37108 = arguments.length;
var i__29355__auto___37109 = (0);
while(true){
if((i__29355__auto___37109 < len__29354__auto___37108)){
args37105.push((arguments[i__29355__auto___37109]));

var G__37110 = (i__29355__auto___37109 + (1));
i__29355__auto___37109 = G__37110;
continue;
} else {
}
break;
}

var G__37107 = args37105.length;
switch (G__37107) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37105.length)].join('')));

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
var args37112 = [];
var len__29354__auto___37163 = arguments.length;
var i__29355__auto___37164 = (0);
while(true){
if((i__29355__auto___37164 < len__29354__auto___37163)){
args37112.push((arguments[i__29355__auto___37164]));

var G__37165 = (i__29355__auto___37164 + (1));
i__29355__auto___37164 = G__37165;
continue;
} else {
}
break;
}

var G__37114 = args37112.length;
switch (G__37114) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37112.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34572__auto___37167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___37167,out){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___37167,out){
return (function (state_37138){
var state_val_37139 = (state_37138[(1)]);
if((state_val_37139 === (7))){
var inst_37133 = (state_37138[(2)]);
var state_37138__$1 = state_37138;
var statearr_37140_37168 = state_37138__$1;
(statearr_37140_37168[(2)] = inst_37133);

(statearr_37140_37168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (1))){
var inst_37115 = null;
var state_37138__$1 = (function (){var statearr_37141 = state_37138;
(statearr_37141[(7)] = inst_37115);

return statearr_37141;
})();
var statearr_37142_37169 = state_37138__$1;
(statearr_37142_37169[(2)] = null);

(statearr_37142_37169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (4))){
var inst_37118 = (state_37138[(8)]);
var inst_37118__$1 = (state_37138[(2)]);
var inst_37119 = (inst_37118__$1 == null);
var inst_37120 = cljs.core.not.call(null,inst_37119);
var state_37138__$1 = (function (){var statearr_37143 = state_37138;
(statearr_37143[(8)] = inst_37118__$1);

return statearr_37143;
})();
if(inst_37120){
var statearr_37144_37170 = state_37138__$1;
(statearr_37144_37170[(1)] = (5));

} else {
var statearr_37145_37171 = state_37138__$1;
(statearr_37145_37171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (6))){
var state_37138__$1 = state_37138;
var statearr_37146_37172 = state_37138__$1;
(statearr_37146_37172[(2)] = null);

(statearr_37146_37172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (3))){
var inst_37135 = (state_37138[(2)]);
var inst_37136 = cljs.core.async.close_BANG_.call(null,out);
var state_37138__$1 = (function (){var statearr_37147 = state_37138;
(statearr_37147[(9)] = inst_37135);

return statearr_37147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37138__$1,inst_37136);
} else {
if((state_val_37139 === (2))){
var state_37138__$1 = state_37138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37138__$1,(4),ch);
} else {
if((state_val_37139 === (11))){
var inst_37118 = (state_37138[(8)]);
var inst_37127 = (state_37138[(2)]);
var inst_37115 = inst_37118;
var state_37138__$1 = (function (){var statearr_37148 = state_37138;
(statearr_37148[(7)] = inst_37115);

(statearr_37148[(10)] = inst_37127);

return statearr_37148;
})();
var statearr_37149_37173 = state_37138__$1;
(statearr_37149_37173[(2)] = null);

(statearr_37149_37173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (9))){
var inst_37118 = (state_37138[(8)]);
var state_37138__$1 = state_37138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37138__$1,(11),out,inst_37118);
} else {
if((state_val_37139 === (5))){
var inst_37118 = (state_37138[(8)]);
var inst_37115 = (state_37138[(7)]);
var inst_37122 = cljs.core._EQ_.call(null,inst_37118,inst_37115);
var state_37138__$1 = state_37138;
if(inst_37122){
var statearr_37151_37174 = state_37138__$1;
(statearr_37151_37174[(1)] = (8));

} else {
var statearr_37152_37175 = state_37138__$1;
(statearr_37152_37175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (10))){
var inst_37130 = (state_37138[(2)]);
var state_37138__$1 = state_37138;
var statearr_37153_37176 = state_37138__$1;
(statearr_37153_37176[(2)] = inst_37130);

(statearr_37153_37176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (8))){
var inst_37115 = (state_37138[(7)]);
var tmp37150 = inst_37115;
var inst_37115__$1 = tmp37150;
var state_37138__$1 = (function (){var statearr_37154 = state_37138;
(statearr_37154[(7)] = inst_37115__$1);

return statearr_37154;
})();
var statearr_37155_37177 = state_37138__$1;
(statearr_37155_37177[(2)] = null);

(statearr_37155_37177[(1)] = (2));


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
});})(c__34572__auto___37167,out))
;
return ((function (switch__34460__auto__,c__34572__auto___37167,out){
return (function() {
var cljs$core$async$state_machine__34461__auto__ = null;
var cljs$core$async$state_machine__34461__auto____0 = (function (){
var statearr_37159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37159[(0)] = cljs$core$async$state_machine__34461__auto__);

(statearr_37159[(1)] = (1));

return statearr_37159;
});
var cljs$core$async$state_machine__34461__auto____1 = (function (state_37138){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_37138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e37160){if((e37160 instanceof Object)){
var ex__34464__auto__ = e37160;
var statearr_37161_37178 = state_37138;
(statearr_37161_37178[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37179 = state_37138;
state_37138 = G__37179;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$state_machine__34461__auto__ = function(state_37138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34461__auto____1.call(this,state_37138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34461__auto____0;
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34461__auto____1;
return cljs$core$async$state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___37167,out))
})();
var state__34574__auto__ = (function (){var statearr_37162 = f__34573__auto__.call(null);
(statearr_37162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___37167);

return statearr_37162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___37167,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args37180 = [];
var len__29354__auto___37250 = arguments.length;
var i__29355__auto___37251 = (0);
while(true){
if((i__29355__auto___37251 < len__29354__auto___37250)){
args37180.push((arguments[i__29355__auto___37251]));

var G__37252 = (i__29355__auto___37251 + (1));
i__29355__auto___37251 = G__37252;
continue;
} else {
}
break;
}

var G__37182 = args37180.length;
switch (G__37182) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37180.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34572__auto___37254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___37254,out){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___37254,out){
return (function (state_37220){
var state_val_37221 = (state_37220[(1)]);
if((state_val_37221 === (7))){
var inst_37216 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37222_37255 = state_37220__$1;
(statearr_37222_37255[(2)] = inst_37216);

(statearr_37222_37255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (1))){
var inst_37183 = (new Array(n));
var inst_37184 = inst_37183;
var inst_37185 = (0);
var state_37220__$1 = (function (){var statearr_37223 = state_37220;
(statearr_37223[(7)] = inst_37184);

(statearr_37223[(8)] = inst_37185);

return statearr_37223;
})();
var statearr_37224_37256 = state_37220__$1;
(statearr_37224_37256[(2)] = null);

(statearr_37224_37256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (4))){
var inst_37188 = (state_37220[(9)]);
var inst_37188__$1 = (state_37220[(2)]);
var inst_37189 = (inst_37188__$1 == null);
var inst_37190 = cljs.core.not.call(null,inst_37189);
var state_37220__$1 = (function (){var statearr_37225 = state_37220;
(statearr_37225[(9)] = inst_37188__$1);

return statearr_37225;
})();
if(inst_37190){
var statearr_37226_37257 = state_37220__$1;
(statearr_37226_37257[(1)] = (5));

} else {
var statearr_37227_37258 = state_37220__$1;
(statearr_37227_37258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (15))){
var inst_37210 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37228_37259 = state_37220__$1;
(statearr_37228_37259[(2)] = inst_37210);

(statearr_37228_37259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (13))){
var state_37220__$1 = state_37220;
var statearr_37229_37260 = state_37220__$1;
(statearr_37229_37260[(2)] = null);

(statearr_37229_37260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (6))){
var inst_37185 = (state_37220[(8)]);
var inst_37206 = (inst_37185 > (0));
var state_37220__$1 = state_37220;
if(cljs.core.truth_(inst_37206)){
var statearr_37230_37261 = state_37220__$1;
(statearr_37230_37261[(1)] = (12));

} else {
var statearr_37231_37262 = state_37220__$1;
(statearr_37231_37262[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (3))){
var inst_37218 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37220__$1,inst_37218);
} else {
if((state_val_37221 === (12))){
var inst_37184 = (state_37220[(7)]);
var inst_37208 = cljs.core.vec.call(null,inst_37184);
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37220__$1,(15),out,inst_37208);
} else {
if((state_val_37221 === (2))){
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37220__$1,(4),ch);
} else {
if((state_val_37221 === (11))){
var inst_37200 = (state_37220[(2)]);
var inst_37201 = (new Array(n));
var inst_37184 = inst_37201;
var inst_37185 = (0);
var state_37220__$1 = (function (){var statearr_37232 = state_37220;
(statearr_37232[(7)] = inst_37184);

(statearr_37232[(8)] = inst_37185);

(statearr_37232[(10)] = inst_37200);

return statearr_37232;
})();
var statearr_37233_37263 = state_37220__$1;
(statearr_37233_37263[(2)] = null);

(statearr_37233_37263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (9))){
var inst_37184 = (state_37220[(7)]);
var inst_37198 = cljs.core.vec.call(null,inst_37184);
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37220__$1,(11),out,inst_37198);
} else {
if((state_val_37221 === (5))){
var inst_37188 = (state_37220[(9)]);
var inst_37184 = (state_37220[(7)]);
var inst_37185 = (state_37220[(8)]);
var inst_37193 = (state_37220[(11)]);
var inst_37192 = (inst_37184[inst_37185] = inst_37188);
var inst_37193__$1 = (inst_37185 + (1));
var inst_37194 = (inst_37193__$1 < n);
var state_37220__$1 = (function (){var statearr_37234 = state_37220;
(statearr_37234[(12)] = inst_37192);

(statearr_37234[(11)] = inst_37193__$1);

return statearr_37234;
})();
if(cljs.core.truth_(inst_37194)){
var statearr_37235_37264 = state_37220__$1;
(statearr_37235_37264[(1)] = (8));

} else {
var statearr_37236_37265 = state_37220__$1;
(statearr_37236_37265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (14))){
var inst_37213 = (state_37220[(2)]);
var inst_37214 = cljs.core.async.close_BANG_.call(null,out);
var state_37220__$1 = (function (){var statearr_37238 = state_37220;
(statearr_37238[(13)] = inst_37213);

return statearr_37238;
})();
var statearr_37239_37266 = state_37220__$1;
(statearr_37239_37266[(2)] = inst_37214);

(statearr_37239_37266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (10))){
var inst_37204 = (state_37220[(2)]);
var state_37220__$1 = state_37220;
var statearr_37240_37267 = state_37220__$1;
(statearr_37240_37267[(2)] = inst_37204);

(statearr_37240_37267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37221 === (8))){
var inst_37184 = (state_37220[(7)]);
var inst_37193 = (state_37220[(11)]);
var tmp37237 = inst_37184;
var inst_37184__$1 = tmp37237;
var inst_37185 = inst_37193;
var state_37220__$1 = (function (){var statearr_37241 = state_37220;
(statearr_37241[(7)] = inst_37184__$1);

(statearr_37241[(8)] = inst_37185);

return statearr_37241;
})();
var statearr_37242_37268 = state_37220__$1;
(statearr_37242_37268[(2)] = null);

(statearr_37242_37268[(1)] = (2));


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
});})(c__34572__auto___37254,out))
;
return ((function (switch__34460__auto__,c__34572__auto___37254,out){
return (function() {
var cljs$core$async$state_machine__34461__auto__ = null;
var cljs$core$async$state_machine__34461__auto____0 = (function (){
var statearr_37246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37246[(0)] = cljs$core$async$state_machine__34461__auto__);

(statearr_37246[(1)] = (1));

return statearr_37246;
});
var cljs$core$async$state_machine__34461__auto____1 = (function (state_37220){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_37220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e37247){if((e37247 instanceof Object)){
var ex__34464__auto__ = e37247;
var statearr_37248_37269 = state_37220;
(statearr_37248_37269[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37270 = state_37220;
state_37220 = G__37270;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$state_machine__34461__auto__ = function(state_37220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34461__auto____1.call(this,state_37220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34461__auto____0;
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34461__auto____1;
return cljs$core$async$state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___37254,out))
})();
var state__34574__auto__ = (function (){var statearr_37249 = f__34573__auto__.call(null);
(statearr_37249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___37254);

return statearr_37249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___37254,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args37271 = [];
var len__29354__auto___37345 = arguments.length;
var i__29355__auto___37346 = (0);
while(true){
if((i__29355__auto___37346 < len__29354__auto___37345)){
args37271.push((arguments[i__29355__auto___37346]));

var G__37347 = (i__29355__auto___37346 + (1));
i__29355__auto___37346 = G__37347;
continue;
} else {
}
break;
}

var G__37273 = args37271.length;
switch (G__37273) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37271.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34572__auto___37349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___37349,out){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___37349,out){
return (function (state_37315){
var state_val_37316 = (state_37315[(1)]);
if((state_val_37316 === (7))){
var inst_37311 = (state_37315[(2)]);
var state_37315__$1 = state_37315;
var statearr_37317_37350 = state_37315__$1;
(statearr_37317_37350[(2)] = inst_37311);

(statearr_37317_37350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (1))){
var inst_37274 = [];
var inst_37275 = inst_37274;
var inst_37276 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37315__$1 = (function (){var statearr_37318 = state_37315;
(statearr_37318[(7)] = inst_37276);

(statearr_37318[(8)] = inst_37275);

return statearr_37318;
})();
var statearr_37319_37351 = state_37315__$1;
(statearr_37319_37351[(2)] = null);

(statearr_37319_37351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (4))){
var inst_37279 = (state_37315[(9)]);
var inst_37279__$1 = (state_37315[(2)]);
var inst_37280 = (inst_37279__$1 == null);
var inst_37281 = cljs.core.not.call(null,inst_37280);
var state_37315__$1 = (function (){var statearr_37320 = state_37315;
(statearr_37320[(9)] = inst_37279__$1);

return statearr_37320;
})();
if(inst_37281){
var statearr_37321_37352 = state_37315__$1;
(statearr_37321_37352[(1)] = (5));

} else {
var statearr_37322_37353 = state_37315__$1;
(statearr_37322_37353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (15))){
var inst_37305 = (state_37315[(2)]);
var state_37315__$1 = state_37315;
var statearr_37323_37354 = state_37315__$1;
(statearr_37323_37354[(2)] = inst_37305);

(statearr_37323_37354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (13))){
var state_37315__$1 = state_37315;
var statearr_37324_37355 = state_37315__$1;
(statearr_37324_37355[(2)] = null);

(statearr_37324_37355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (6))){
var inst_37275 = (state_37315[(8)]);
var inst_37300 = inst_37275.length;
var inst_37301 = (inst_37300 > (0));
var state_37315__$1 = state_37315;
if(cljs.core.truth_(inst_37301)){
var statearr_37325_37356 = state_37315__$1;
(statearr_37325_37356[(1)] = (12));

} else {
var statearr_37326_37357 = state_37315__$1;
(statearr_37326_37357[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (3))){
var inst_37313 = (state_37315[(2)]);
var state_37315__$1 = state_37315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37315__$1,inst_37313);
} else {
if((state_val_37316 === (12))){
var inst_37275 = (state_37315[(8)]);
var inst_37303 = cljs.core.vec.call(null,inst_37275);
var state_37315__$1 = state_37315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37315__$1,(15),out,inst_37303);
} else {
if((state_val_37316 === (2))){
var state_37315__$1 = state_37315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37315__$1,(4),ch);
} else {
if((state_val_37316 === (11))){
var inst_37283 = (state_37315[(10)]);
var inst_37279 = (state_37315[(9)]);
var inst_37293 = (state_37315[(2)]);
var inst_37294 = [];
var inst_37295 = inst_37294.push(inst_37279);
var inst_37275 = inst_37294;
var inst_37276 = inst_37283;
var state_37315__$1 = (function (){var statearr_37327 = state_37315;
(statearr_37327[(7)] = inst_37276);

(statearr_37327[(8)] = inst_37275);

(statearr_37327[(11)] = inst_37293);

(statearr_37327[(12)] = inst_37295);

return statearr_37327;
})();
var statearr_37328_37358 = state_37315__$1;
(statearr_37328_37358[(2)] = null);

(statearr_37328_37358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (9))){
var inst_37275 = (state_37315[(8)]);
var inst_37291 = cljs.core.vec.call(null,inst_37275);
var state_37315__$1 = state_37315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37315__$1,(11),out,inst_37291);
} else {
if((state_val_37316 === (5))){
var inst_37276 = (state_37315[(7)]);
var inst_37283 = (state_37315[(10)]);
var inst_37279 = (state_37315[(9)]);
var inst_37283__$1 = f.call(null,inst_37279);
var inst_37284 = cljs.core._EQ_.call(null,inst_37283__$1,inst_37276);
var inst_37285 = cljs.core.keyword_identical_QMARK_.call(null,inst_37276,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37286 = (inst_37284) || (inst_37285);
var state_37315__$1 = (function (){var statearr_37329 = state_37315;
(statearr_37329[(10)] = inst_37283__$1);

return statearr_37329;
})();
if(cljs.core.truth_(inst_37286)){
var statearr_37330_37359 = state_37315__$1;
(statearr_37330_37359[(1)] = (8));

} else {
var statearr_37331_37360 = state_37315__$1;
(statearr_37331_37360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (14))){
var inst_37308 = (state_37315[(2)]);
var inst_37309 = cljs.core.async.close_BANG_.call(null,out);
var state_37315__$1 = (function (){var statearr_37333 = state_37315;
(statearr_37333[(13)] = inst_37308);

return statearr_37333;
})();
var statearr_37334_37361 = state_37315__$1;
(statearr_37334_37361[(2)] = inst_37309);

(statearr_37334_37361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (10))){
var inst_37298 = (state_37315[(2)]);
var state_37315__$1 = state_37315;
var statearr_37335_37362 = state_37315__$1;
(statearr_37335_37362[(2)] = inst_37298);

(statearr_37335_37362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (8))){
var inst_37275 = (state_37315[(8)]);
var inst_37283 = (state_37315[(10)]);
var inst_37279 = (state_37315[(9)]);
var inst_37288 = inst_37275.push(inst_37279);
var tmp37332 = inst_37275;
var inst_37275__$1 = tmp37332;
var inst_37276 = inst_37283;
var state_37315__$1 = (function (){var statearr_37336 = state_37315;
(statearr_37336[(7)] = inst_37276);

(statearr_37336[(8)] = inst_37275__$1);

(statearr_37336[(14)] = inst_37288);

return statearr_37336;
})();
var statearr_37337_37363 = state_37315__$1;
(statearr_37337_37363[(2)] = null);

(statearr_37337_37363[(1)] = (2));


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
});})(c__34572__auto___37349,out))
;
return ((function (switch__34460__auto__,c__34572__auto___37349,out){
return (function() {
var cljs$core$async$state_machine__34461__auto__ = null;
var cljs$core$async$state_machine__34461__auto____0 = (function (){
var statearr_37341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37341[(0)] = cljs$core$async$state_machine__34461__auto__);

(statearr_37341[(1)] = (1));

return statearr_37341;
});
var cljs$core$async$state_machine__34461__auto____1 = (function (state_37315){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_37315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e37342){if((e37342 instanceof Object)){
var ex__34464__auto__ = e37342;
var statearr_37343_37364 = state_37315;
(statearr_37343_37364[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37365 = state_37315;
state_37315 = G__37365;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
cljs$core$async$state_machine__34461__auto__ = function(state_37315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34461__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34461__auto____1.call(this,state_37315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34461__auto____0;
cljs$core$async$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34461__auto____1;
return cljs$core$async$state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___37349,out))
})();
var state__34574__auto__ = (function (){var statearr_37344 = f__34573__auto__.call(null);
(statearr_37344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___37349);

return statearr_37344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___37349,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1470645901804