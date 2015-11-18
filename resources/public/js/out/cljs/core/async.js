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
var args36349 = [];
var len__30472__auto___36355 = arguments.length;
var i__30473__auto___36356 = (0);
while(true){
if((i__30473__auto___36356 < len__30472__auto___36355)){
args36349.push((arguments[i__30473__auto___36356]));

var G__36357 = (i__30473__auto___36356 + (1));
i__30473__auto___36356 = G__36357;
continue;
} else {
}
break;
}

var G__36351 = args36349.length;
switch (G__36351) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36349.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async36352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36352 = (function (f,blockable,meta36353){
this.f = f;
this.blockable = blockable;
this.meta36353 = meta36353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36354,meta36353__$1){
var self__ = this;
var _36354__$1 = this;
return (new cljs.core.async.t_cljs$core$async36352(self__.f,self__.blockable,meta36353__$1));
});

cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36354){
var self__ = this;
var _36354__$1 = this;
return self__.meta36353;
});

cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36353","meta36353",2080689735,null)], null);
});

cljs.core.async.t_cljs$core$async36352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36352";

cljs.core.async.t_cljs$core$async36352.cljs$lang$ctorPrWriter = (function (this__30012__auto__,writer__30013__auto__,opt__30014__auto__){
return cljs.core._write.call(null,writer__30013__auto__,"cljs.core.async/t_cljs$core$async36352");
});

cljs.core.async.__GT_t_cljs$core$async36352 = (function cljs$core$async$__GT_t_cljs$core$async36352(f__$1,blockable__$1,meta36353){
return (new cljs.core.async.t_cljs$core$async36352(f__$1,blockable__$1,meta36353));
});

}

return (new cljs.core.async.t_cljs$core$async36352(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args36361 = [];
var len__30472__auto___36364 = arguments.length;
var i__30473__auto___36365 = (0);
while(true){
if((i__30473__auto___36365 < len__30472__auto___36364)){
args36361.push((arguments[i__30473__auto___36365]));

var G__36366 = (i__30473__auto___36365 + (1));
i__30473__auto___36365 = G__36366;
continue;
} else {
}
break;
}

var G__36363 = args36361.length;
switch (G__36363) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36361.length)].join('')));

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
var args36368 = [];
var len__30472__auto___36371 = arguments.length;
var i__30473__auto___36372 = (0);
while(true){
if((i__30473__auto___36372 < len__30472__auto___36371)){
args36368.push((arguments[i__30473__auto___36372]));

var G__36373 = (i__30473__auto___36372 + (1));
i__30473__auto___36372 = G__36373;
continue;
} else {
}
break;
}

var G__36370 = args36368.length;
switch (G__36370) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36368.length)].join('')));

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
var args36375 = [];
var len__30472__auto___36378 = arguments.length;
var i__30473__auto___36379 = (0);
while(true){
if((i__30473__auto___36379 < len__30472__auto___36378)){
args36375.push((arguments[i__30473__auto___36379]));

var G__36380 = (i__30473__auto___36379 + (1));
i__30473__auto___36379 = G__36380;
continue;
} else {
}
break;
}

var G__36377 = args36375.length;
switch (G__36377) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36375.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36382 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36382);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36382,ret){
return (function (){
return fn1.call(null,val_36382);
});})(val_36382,ret))
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
var args36383 = [];
var len__30472__auto___36386 = arguments.length;
var i__30473__auto___36387 = (0);
while(true){
if((i__30473__auto___36387 < len__30472__auto___36386)){
args36383.push((arguments[i__30473__auto___36387]));

var G__36388 = (i__30473__auto___36387 + (1));
i__30473__auto___36387 = G__36388;
continue;
} else {
}
break;
}

var G__36385 = args36383.length;
switch (G__36385) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36383.length)].join('')));

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
var n__30317__auto___36390 = n;
var x_36391 = (0);
while(true){
if((x_36391 < n__30317__auto___36390)){
(a[x_36391] = (0));

var G__36392 = (x_36391 + (1));
x_36391 = G__36392;
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

var G__36393 = (i + (1));
i = G__36393;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36397 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36397 = (function (alt_flag,flag,meta36398){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta36398 = meta36398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36399,meta36398__$1){
var self__ = this;
var _36399__$1 = this;
return (new cljs.core.async.t_cljs$core$async36397(self__.alt_flag,self__.flag,meta36398__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36399){
var self__ = this;
var _36399__$1 = this;
return self__.meta36398;
});})(flag))
;

cljs.core.async.t_cljs$core$async36397.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36397.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36397.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36397.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36397.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36398","meta36398",-226692596,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36397.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36397";

cljs.core.async.t_cljs$core$async36397.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30012__auto__,writer__30013__auto__,opt__30014__auto__){
return cljs.core._write.call(null,writer__30013__auto__,"cljs.core.async/t_cljs$core$async36397");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36397 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36397(alt_flag__$1,flag__$1,meta36398){
return (new cljs.core.async.t_cljs$core$async36397(alt_flag__$1,flag__$1,meta36398));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36397(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36403 = (function (alt_handler,flag,cb,meta36404){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta36404 = meta36404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36405,meta36404__$1){
var self__ = this;
var _36405__$1 = this;
return (new cljs.core.async.t_cljs$core$async36403(self__.alt_handler,self__.flag,self__.cb,meta36404__$1));
});

cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36405){
var self__ = this;
var _36405__$1 = this;
return self__.meta36404;
});

cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36404","meta36404",-1876211909,null)], null);
});

cljs.core.async.t_cljs$core$async36403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36403";

cljs.core.async.t_cljs$core$async36403.cljs$lang$ctorPrWriter = (function (this__30012__auto__,writer__30013__auto__,opt__30014__auto__){
return cljs.core._write.call(null,writer__30013__auto__,"cljs.core.async/t_cljs$core$async36403");
});

cljs.core.async.__GT_t_cljs$core$async36403 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36403(alt_handler__$1,flag__$1,cb__$1,meta36404){
return (new cljs.core.async.t_cljs$core$async36403(alt_handler__$1,flag__$1,cb__$1,meta36404));
});

}

return (new cljs.core.async.t_cljs$core$async36403(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36406_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36406_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36407_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36407_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__29414__auto__ = wport;
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36408 = (i + (1));
i = G__36408;
continue;
}
} else {
return null;
}
break;
}
})();
var or__29414__auto__ = ret;
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__29402__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__29402__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__29402__auto__;
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
var args__30479__auto__ = [];
var len__30472__auto___36414 = arguments.length;
var i__30473__auto___36415 = (0);
while(true){
if((i__30473__auto___36415 < len__30472__auto___36414)){
args__30479__auto__.push((arguments[i__30473__auto___36415]));

var G__36416 = (i__30473__auto___36415 + (1));
i__30473__auto___36415 = G__36416;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((1) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30480__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36411){
var map__36412 = p__36411;
var map__36412__$1 = ((((!((map__36412 == null)))?((((map__36412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36412):map__36412);
var opts = map__36412__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36409){
var G__36410 = cljs.core.first.call(null,seq36409);
var seq36409__$1 = cljs.core.next.call(null,seq36409);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36410,seq36409__$1);
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
var args36417 = [];
var len__30472__auto___36467 = arguments.length;
var i__30473__auto___36468 = (0);
while(true){
if((i__30473__auto___36468 < len__30472__auto___36467)){
args36417.push((arguments[i__30473__auto___36468]));

var G__36469 = (i__30473__auto___36468 + (1));
i__30473__auto___36468 = G__36469;
continue;
} else {
}
break;
}

var G__36419 = args36417.length;
switch (G__36419) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36417.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31439__auto___36471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___36471){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___36471){
return (function (state_36443){
var state_val_36444 = (state_36443[(1)]);
if((state_val_36444 === (7))){
var inst_36439 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
var statearr_36445_36472 = state_36443__$1;
(statearr_36445_36472[(2)] = inst_36439);

(statearr_36445_36472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (1))){
var state_36443__$1 = state_36443;
var statearr_36446_36473 = state_36443__$1;
(statearr_36446_36473[(2)] = null);

(statearr_36446_36473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (4))){
var inst_36422 = (state_36443[(7)]);
var inst_36422__$1 = (state_36443[(2)]);
var inst_36423 = (inst_36422__$1 == null);
var state_36443__$1 = (function (){var statearr_36447 = state_36443;
(statearr_36447[(7)] = inst_36422__$1);

return statearr_36447;
})();
if(cljs.core.truth_(inst_36423)){
var statearr_36448_36474 = state_36443__$1;
(statearr_36448_36474[(1)] = (5));

} else {
var statearr_36449_36475 = state_36443__$1;
(statearr_36449_36475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (13))){
var state_36443__$1 = state_36443;
var statearr_36450_36476 = state_36443__$1;
(statearr_36450_36476[(2)] = null);

(statearr_36450_36476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (6))){
var inst_36422 = (state_36443[(7)]);
var state_36443__$1 = state_36443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36443__$1,(11),to,inst_36422);
} else {
if((state_val_36444 === (3))){
var inst_36441 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36443__$1,inst_36441);
} else {
if((state_val_36444 === (12))){
var state_36443__$1 = state_36443;
var statearr_36451_36477 = state_36443__$1;
(statearr_36451_36477[(2)] = null);

(statearr_36451_36477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (2))){
var state_36443__$1 = state_36443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36443__$1,(4),from);
} else {
if((state_val_36444 === (11))){
var inst_36432 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
if(cljs.core.truth_(inst_36432)){
var statearr_36452_36478 = state_36443__$1;
(statearr_36452_36478[(1)] = (12));

} else {
var statearr_36453_36479 = state_36443__$1;
(statearr_36453_36479[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (9))){
var state_36443__$1 = state_36443;
var statearr_36454_36480 = state_36443__$1;
(statearr_36454_36480[(2)] = null);

(statearr_36454_36480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (5))){
var state_36443__$1 = state_36443;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36455_36481 = state_36443__$1;
(statearr_36455_36481[(1)] = (8));

} else {
var statearr_36456_36482 = state_36443__$1;
(statearr_36456_36482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (14))){
var inst_36437 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
var statearr_36457_36483 = state_36443__$1;
(statearr_36457_36483[(2)] = inst_36437);

(statearr_36457_36483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (10))){
var inst_36429 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
var statearr_36458_36484 = state_36443__$1;
(statearr_36458_36484[(2)] = inst_36429);

(statearr_36458_36484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (8))){
var inst_36426 = cljs.core.async.close_BANG_.call(null,to);
var state_36443__$1 = state_36443;
var statearr_36459_36485 = state_36443__$1;
(statearr_36459_36485[(2)] = inst_36426);

(statearr_36459_36485[(1)] = (10));


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
});})(c__31439__auto___36471))
;
return ((function (switch__31418__auto__,c__31439__auto___36471){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_36463 = [null,null,null,null,null,null,null,null];
(statearr_36463[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_36463[(1)] = (1));

return statearr_36463;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_36443){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_36443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e36464){if((e36464 instanceof Object)){
var ex__31422__auto__ = e36464;
var statearr_36465_36486 = state_36443;
(statearr_36465_36486[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36487 = state_36443;
state_36443 = G__36487;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_36443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_36443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___36471))
})();
var state__31441__auto__ = (function (){var statearr_36466 = f__31440__auto__.call(null);
(statearr_36466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___36471);

return statearr_36466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___36471))
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
return (function (p__36671){
var vec__36672 = p__36671;
var v = cljs.core.nth.call(null,vec__36672,(0),null);
var p = cljs.core.nth.call(null,vec__36672,(1),null);
var job = vec__36672;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31439__auto___36854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___36854,res,vec__36672,v,p,job,jobs,results){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___36854,res,vec__36672,v,p,job,jobs,results){
return (function (state_36677){
var state_val_36678 = (state_36677[(1)]);
if((state_val_36678 === (1))){
var state_36677__$1 = state_36677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36677__$1,(2),res,v);
} else {
if((state_val_36678 === (2))){
var inst_36674 = (state_36677[(2)]);
var inst_36675 = cljs.core.async.close_BANG_.call(null,res);
var state_36677__$1 = (function (){var statearr_36679 = state_36677;
(statearr_36679[(7)] = inst_36674);

return statearr_36679;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36677__$1,inst_36675);
} else {
return null;
}
}
});})(c__31439__auto___36854,res,vec__36672,v,p,job,jobs,results))
;
return ((function (switch__31418__auto__,c__31439__auto___36854,res,vec__36672,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0 = (function (){
var statearr_36683 = [null,null,null,null,null,null,null,null];
(statearr_36683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__);

(statearr_36683[(1)] = (1));

return statearr_36683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1 = (function (state_36677){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_36677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e36684){if((e36684 instanceof Object)){
var ex__31422__auto__ = e36684;
var statearr_36685_36855 = state_36677;
(statearr_36685_36855[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36856 = state_36677;
state_36677 = G__36856;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = function(state_36677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1.call(this,state_36677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___36854,res,vec__36672,v,p,job,jobs,results))
})();
var state__31441__auto__ = (function (){var statearr_36686 = f__31440__auto__.call(null);
(statearr_36686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___36854);

return statearr_36686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___36854,res,vec__36672,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36687){
var vec__36688 = p__36687;
var v = cljs.core.nth.call(null,vec__36688,(0),null);
var p = cljs.core.nth.call(null,vec__36688,(1),null);
var job = vec__36688;
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
var n__30317__auto___36857 = n;
var __36858 = (0);
while(true){
if((__36858 < n__30317__auto___36857)){
var G__36689_36859 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36689_36859) {
case "compute":
var c__31439__auto___36861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36858,c__31439__auto___36861,G__36689_36859,n__30317__auto___36857,jobs,results,process,async){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (__36858,c__31439__auto___36861,G__36689_36859,n__30317__auto___36857,jobs,results,process,async){
return (function (state_36702){
var state_val_36703 = (state_36702[(1)]);
if((state_val_36703 === (1))){
var state_36702__$1 = state_36702;
var statearr_36704_36862 = state_36702__$1;
(statearr_36704_36862[(2)] = null);

(statearr_36704_36862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36703 === (2))){
var state_36702__$1 = state_36702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36702__$1,(4),jobs);
} else {
if((state_val_36703 === (3))){
var inst_36700 = (state_36702[(2)]);
var state_36702__$1 = state_36702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36702__$1,inst_36700);
} else {
if((state_val_36703 === (4))){
var inst_36692 = (state_36702[(2)]);
var inst_36693 = process.call(null,inst_36692);
var state_36702__$1 = state_36702;
if(cljs.core.truth_(inst_36693)){
var statearr_36705_36863 = state_36702__$1;
(statearr_36705_36863[(1)] = (5));

} else {
var statearr_36706_36864 = state_36702__$1;
(statearr_36706_36864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36703 === (5))){
var state_36702__$1 = state_36702;
var statearr_36707_36865 = state_36702__$1;
(statearr_36707_36865[(2)] = null);

(statearr_36707_36865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36703 === (6))){
var state_36702__$1 = state_36702;
var statearr_36708_36866 = state_36702__$1;
(statearr_36708_36866[(2)] = null);

(statearr_36708_36866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36703 === (7))){
var inst_36698 = (state_36702[(2)]);
var state_36702__$1 = state_36702;
var statearr_36709_36867 = state_36702__$1;
(statearr_36709_36867[(2)] = inst_36698);

(statearr_36709_36867[(1)] = (3));


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
});})(__36858,c__31439__auto___36861,G__36689_36859,n__30317__auto___36857,jobs,results,process,async))
;
return ((function (__36858,switch__31418__auto__,c__31439__auto___36861,G__36689_36859,n__30317__auto___36857,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0 = (function (){
var statearr_36713 = [null,null,null,null,null,null,null];
(statearr_36713[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__);

(statearr_36713[(1)] = (1));

return statearr_36713;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1 = (function (state_36702){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_36702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e36714){if((e36714 instanceof Object)){
var ex__31422__auto__ = e36714;
var statearr_36715_36868 = state_36702;
(statearr_36715_36868[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36869 = state_36702;
state_36702 = G__36869;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = function(state_36702){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1.call(this,state_36702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__;
})()
;})(__36858,switch__31418__auto__,c__31439__auto___36861,G__36689_36859,n__30317__auto___36857,jobs,results,process,async))
})();
var state__31441__auto__ = (function (){var statearr_36716 = f__31440__auto__.call(null);
(statearr_36716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___36861);

return statearr_36716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(__36858,c__31439__auto___36861,G__36689_36859,n__30317__auto___36857,jobs,results,process,async))
);


break;
case "async":
var c__31439__auto___36870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36858,c__31439__auto___36870,G__36689_36859,n__30317__auto___36857,jobs,results,process,async){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (__36858,c__31439__auto___36870,G__36689_36859,n__30317__auto___36857,jobs,results,process,async){
return (function (state_36729){
var state_val_36730 = (state_36729[(1)]);
if((state_val_36730 === (1))){
var state_36729__$1 = state_36729;
var statearr_36731_36871 = state_36729__$1;
(statearr_36731_36871[(2)] = null);

(statearr_36731_36871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (2))){
var state_36729__$1 = state_36729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36729__$1,(4),jobs);
} else {
if((state_val_36730 === (3))){
var inst_36727 = (state_36729[(2)]);
var state_36729__$1 = state_36729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36729__$1,inst_36727);
} else {
if((state_val_36730 === (4))){
var inst_36719 = (state_36729[(2)]);
var inst_36720 = async.call(null,inst_36719);
var state_36729__$1 = state_36729;
if(cljs.core.truth_(inst_36720)){
var statearr_36732_36872 = state_36729__$1;
(statearr_36732_36872[(1)] = (5));

} else {
var statearr_36733_36873 = state_36729__$1;
(statearr_36733_36873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (5))){
var state_36729__$1 = state_36729;
var statearr_36734_36874 = state_36729__$1;
(statearr_36734_36874[(2)] = null);

(statearr_36734_36874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (6))){
var state_36729__$1 = state_36729;
var statearr_36735_36875 = state_36729__$1;
(statearr_36735_36875[(2)] = null);

(statearr_36735_36875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36730 === (7))){
var inst_36725 = (state_36729[(2)]);
var state_36729__$1 = state_36729;
var statearr_36736_36876 = state_36729__$1;
(statearr_36736_36876[(2)] = inst_36725);

(statearr_36736_36876[(1)] = (3));


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
});})(__36858,c__31439__auto___36870,G__36689_36859,n__30317__auto___36857,jobs,results,process,async))
;
return ((function (__36858,switch__31418__auto__,c__31439__auto___36870,G__36689_36859,n__30317__auto___36857,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0 = (function (){
var statearr_36740 = [null,null,null,null,null,null,null];
(statearr_36740[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__);

(statearr_36740[(1)] = (1));

return statearr_36740;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1 = (function (state_36729){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_36729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e36741){if((e36741 instanceof Object)){
var ex__31422__auto__ = e36741;
var statearr_36742_36877 = state_36729;
(statearr_36742_36877[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36878 = state_36729;
state_36729 = G__36878;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = function(state_36729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1.call(this,state_36729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__;
})()
;})(__36858,switch__31418__auto__,c__31439__auto___36870,G__36689_36859,n__30317__auto___36857,jobs,results,process,async))
})();
var state__31441__auto__ = (function (){var statearr_36743 = f__31440__auto__.call(null);
(statearr_36743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___36870);

return statearr_36743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(__36858,c__31439__auto___36870,G__36689_36859,n__30317__auto___36857,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36879 = (__36858 + (1));
__36858 = G__36879;
continue;
} else {
}
break;
}

var c__31439__auto___36880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___36880,jobs,results,process,async){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___36880,jobs,results,process,async){
return (function (state_36765){
var state_val_36766 = (state_36765[(1)]);
if((state_val_36766 === (1))){
var state_36765__$1 = state_36765;
var statearr_36767_36881 = state_36765__$1;
(statearr_36767_36881[(2)] = null);

(statearr_36767_36881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (2))){
var state_36765__$1 = state_36765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36765__$1,(4),from);
} else {
if((state_val_36766 === (3))){
var inst_36763 = (state_36765[(2)]);
var state_36765__$1 = state_36765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36765__$1,inst_36763);
} else {
if((state_val_36766 === (4))){
var inst_36746 = (state_36765[(7)]);
var inst_36746__$1 = (state_36765[(2)]);
var inst_36747 = (inst_36746__$1 == null);
var state_36765__$1 = (function (){var statearr_36768 = state_36765;
(statearr_36768[(7)] = inst_36746__$1);

return statearr_36768;
})();
if(cljs.core.truth_(inst_36747)){
var statearr_36769_36882 = state_36765__$1;
(statearr_36769_36882[(1)] = (5));

} else {
var statearr_36770_36883 = state_36765__$1;
(statearr_36770_36883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (5))){
var inst_36749 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36765__$1 = state_36765;
var statearr_36771_36884 = state_36765__$1;
(statearr_36771_36884[(2)] = inst_36749);

(statearr_36771_36884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (6))){
var inst_36751 = (state_36765[(8)]);
var inst_36746 = (state_36765[(7)]);
var inst_36751__$1 = cljs.core.async.chan.call(null,(1));
var inst_36752 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36753 = [inst_36746,inst_36751__$1];
var inst_36754 = (new cljs.core.PersistentVector(null,2,(5),inst_36752,inst_36753,null));
var state_36765__$1 = (function (){var statearr_36772 = state_36765;
(statearr_36772[(8)] = inst_36751__$1);

return statearr_36772;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36765__$1,(8),jobs,inst_36754);
} else {
if((state_val_36766 === (7))){
var inst_36761 = (state_36765[(2)]);
var state_36765__$1 = state_36765;
var statearr_36773_36885 = state_36765__$1;
(statearr_36773_36885[(2)] = inst_36761);

(statearr_36773_36885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36766 === (8))){
var inst_36751 = (state_36765[(8)]);
var inst_36756 = (state_36765[(2)]);
var state_36765__$1 = (function (){var statearr_36774 = state_36765;
(statearr_36774[(9)] = inst_36756);

return statearr_36774;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36765__$1,(9),results,inst_36751);
} else {
if((state_val_36766 === (9))){
var inst_36758 = (state_36765[(2)]);
var state_36765__$1 = (function (){var statearr_36775 = state_36765;
(statearr_36775[(10)] = inst_36758);

return statearr_36775;
})();
var statearr_36776_36886 = state_36765__$1;
(statearr_36776_36886[(2)] = null);

(statearr_36776_36886[(1)] = (2));


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
});})(c__31439__auto___36880,jobs,results,process,async))
;
return ((function (switch__31418__auto__,c__31439__auto___36880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0 = (function (){
var statearr_36780 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__);

(statearr_36780[(1)] = (1));

return statearr_36780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1 = (function (state_36765){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_36765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e36781){if((e36781 instanceof Object)){
var ex__31422__auto__ = e36781;
var statearr_36782_36887 = state_36765;
(statearr_36782_36887[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36888 = state_36765;
state_36765 = G__36888;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = function(state_36765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1.call(this,state_36765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___36880,jobs,results,process,async))
})();
var state__31441__auto__ = (function (){var statearr_36783 = f__31440__auto__.call(null);
(statearr_36783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___36880);

return statearr_36783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___36880,jobs,results,process,async))
);


var c__31439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto__,jobs,results,process,async){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto__,jobs,results,process,async){
return (function (state_36821){
var state_val_36822 = (state_36821[(1)]);
if((state_val_36822 === (7))){
var inst_36817 = (state_36821[(2)]);
var state_36821__$1 = state_36821;
var statearr_36823_36889 = state_36821__$1;
(statearr_36823_36889[(2)] = inst_36817);

(statearr_36823_36889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (20))){
var state_36821__$1 = state_36821;
var statearr_36824_36890 = state_36821__$1;
(statearr_36824_36890[(2)] = null);

(statearr_36824_36890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (1))){
var state_36821__$1 = state_36821;
var statearr_36825_36891 = state_36821__$1;
(statearr_36825_36891[(2)] = null);

(statearr_36825_36891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (4))){
var inst_36786 = (state_36821[(7)]);
var inst_36786__$1 = (state_36821[(2)]);
var inst_36787 = (inst_36786__$1 == null);
var state_36821__$1 = (function (){var statearr_36826 = state_36821;
(statearr_36826[(7)] = inst_36786__$1);

return statearr_36826;
})();
if(cljs.core.truth_(inst_36787)){
var statearr_36827_36892 = state_36821__$1;
(statearr_36827_36892[(1)] = (5));

} else {
var statearr_36828_36893 = state_36821__$1;
(statearr_36828_36893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (15))){
var inst_36799 = (state_36821[(8)]);
var state_36821__$1 = state_36821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36821__$1,(18),to,inst_36799);
} else {
if((state_val_36822 === (21))){
var inst_36812 = (state_36821[(2)]);
var state_36821__$1 = state_36821;
var statearr_36829_36894 = state_36821__$1;
(statearr_36829_36894[(2)] = inst_36812);

(statearr_36829_36894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (13))){
var inst_36814 = (state_36821[(2)]);
var state_36821__$1 = (function (){var statearr_36830 = state_36821;
(statearr_36830[(9)] = inst_36814);

return statearr_36830;
})();
var statearr_36831_36895 = state_36821__$1;
(statearr_36831_36895[(2)] = null);

(statearr_36831_36895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (6))){
var inst_36786 = (state_36821[(7)]);
var state_36821__$1 = state_36821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36821__$1,(11),inst_36786);
} else {
if((state_val_36822 === (17))){
var inst_36807 = (state_36821[(2)]);
var state_36821__$1 = state_36821;
if(cljs.core.truth_(inst_36807)){
var statearr_36832_36896 = state_36821__$1;
(statearr_36832_36896[(1)] = (19));

} else {
var statearr_36833_36897 = state_36821__$1;
(statearr_36833_36897[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (3))){
var inst_36819 = (state_36821[(2)]);
var state_36821__$1 = state_36821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36821__$1,inst_36819);
} else {
if((state_val_36822 === (12))){
var inst_36796 = (state_36821[(10)]);
var state_36821__$1 = state_36821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36821__$1,(14),inst_36796);
} else {
if((state_val_36822 === (2))){
var state_36821__$1 = state_36821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36821__$1,(4),results);
} else {
if((state_val_36822 === (19))){
var state_36821__$1 = state_36821;
var statearr_36834_36898 = state_36821__$1;
(statearr_36834_36898[(2)] = null);

(statearr_36834_36898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (11))){
var inst_36796 = (state_36821[(2)]);
var state_36821__$1 = (function (){var statearr_36835 = state_36821;
(statearr_36835[(10)] = inst_36796);

return statearr_36835;
})();
var statearr_36836_36899 = state_36821__$1;
(statearr_36836_36899[(2)] = null);

(statearr_36836_36899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (9))){
var state_36821__$1 = state_36821;
var statearr_36837_36900 = state_36821__$1;
(statearr_36837_36900[(2)] = null);

(statearr_36837_36900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (5))){
var state_36821__$1 = state_36821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36838_36901 = state_36821__$1;
(statearr_36838_36901[(1)] = (8));

} else {
var statearr_36839_36902 = state_36821__$1;
(statearr_36839_36902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (14))){
var inst_36801 = (state_36821[(11)]);
var inst_36799 = (state_36821[(8)]);
var inst_36799__$1 = (state_36821[(2)]);
var inst_36800 = (inst_36799__$1 == null);
var inst_36801__$1 = cljs.core.not.call(null,inst_36800);
var state_36821__$1 = (function (){var statearr_36840 = state_36821;
(statearr_36840[(11)] = inst_36801__$1);

(statearr_36840[(8)] = inst_36799__$1);

return statearr_36840;
})();
if(inst_36801__$1){
var statearr_36841_36903 = state_36821__$1;
(statearr_36841_36903[(1)] = (15));

} else {
var statearr_36842_36904 = state_36821__$1;
(statearr_36842_36904[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (16))){
var inst_36801 = (state_36821[(11)]);
var state_36821__$1 = state_36821;
var statearr_36843_36905 = state_36821__$1;
(statearr_36843_36905[(2)] = inst_36801);

(statearr_36843_36905[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (10))){
var inst_36793 = (state_36821[(2)]);
var state_36821__$1 = state_36821;
var statearr_36844_36906 = state_36821__$1;
(statearr_36844_36906[(2)] = inst_36793);

(statearr_36844_36906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (18))){
var inst_36804 = (state_36821[(2)]);
var state_36821__$1 = state_36821;
var statearr_36845_36907 = state_36821__$1;
(statearr_36845_36907[(2)] = inst_36804);

(statearr_36845_36907[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36822 === (8))){
var inst_36790 = cljs.core.async.close_BANG_.call(null,to);
var state_36821__$1 = state_36821;
var statearr_36846_36908 = state_36821__$1;
(statearr_36846_36908[(2)] = inst_36790);

(statearr_36846_36908[(1)] = (10));


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
});})(c__31439__auto__,jobs,results,process,async))
;
return ((function (switch__31418__auto__,c__31439__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0 = (function (){
var statearr_36850 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__);

(statearr_36850[(1)] = (1));

return statearr_36850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1 = (function (state_36821){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_36821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e36851){if((e36851 instanceof Object)){
var ex__31422__auto__ = e36851;
var statearr_36852_36909 = state_36821;
(statearr_36852_36909[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36910 = state_36821;
state_36821 = G__36910;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__ = function(state_36821){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1.call(this,state_36821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto__,jobs,results,process,async))
})();
var state__31441__auto__ = (function (){var statearr_36853 = f__31440__auto__.call(null);
(statearr_36853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto__);

return statearr_36853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto__,jobs,results,process,async))
);

return c__31439__auto__;
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
var args36911 = [];
var len__30472__auto___36914 = arguments.length;
var i__30473__auto___36915 = (0);
while(true){
if((i__30473__auto___36915 < len__30472__auto___36914)){
args36911.push((arguments[i__30473__auto___36915]));

var G__36916 = (i__30473__auto___36915 + (1));
i__30473__auto___36915 = G__36916;
continue;
} else {
}
break;
}

var G__36913 = args36911.length;
switch (G__36913) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36911.length)].join('')));

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
var args36918 = [];
var len__30472__auto___36921 = arguments.length;
var i__30473__auto___36922 = (0);
while(true){
if((i__30473__auto___36922 < len__30472__auto___36921)){
args36918.push((arguments[i__30473__auto___36922]));

var G__36923 = (i__30473__auto___36922 + (1));
i__30473__auto___36922 = G__36923;
continue;
} else {
}
break;
}

var G__36920 = args36918.length;
switch (G__36920) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36918.length)].join('')));

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
var args36925 = [];
var len__30472__auto___36978 = arguments.length;
var i__30473__auto___36979 = (0);
while(true){
if((i__30473__auto___36979 < len__30472__auto___36978)){
args36925.push((arguments[i__30473__auto___36979]));

var G__36980 = (i__30473__auto___36979 + (1));
i__30473__auto___36979 = G__36980;
continue;
} else {
}
break;
}

var G__36927 = args36925.length;
switch (G__36927) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36925.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31439__auto___36982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___36982,tc,fc){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___36982,tc,fc){
return (function (state_36953){
var state_val_36954 = (state_36953[(1)]);
if((state_val_36954 === (7))){
var inst_36949 = (state_36953[(2)]);
var state_36953__$1 = state_36953;
var statearr_36955_36983 = state_36953__$1;
(statearr_36955_36983[(2)] = inst_36949);

(statearr_36955_36983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36954 === (1))){
var state_36953__$1 = state_36953;
var statearr_36956_36984 = state_36953__$1;
(statearr_36956_36984[(2)] = null);

(statearr_36956_36984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36954 === (4))){
var inst_36930 = (state_36953[(7)]);
var inst_36930__$1 = (state_36953[(2)]);
var inst_36931 = (inst_36930__$1 == null);
var state_36953__$1 = (function (){var statearr_36957 = state_36953;
(statearr_36957[(7)] = inst_36930__$1);

return statearr_36957;
})();
if(cljs.core.truth_(inst_36931)){
var statearr_36958_36985 = state_36953__$1;
(statearr_36958_36985[(1)] = (5));

} else {
var statearr_36959_36986 = state_36953__$1;
(statearr_36959_36986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36954 === (13))){
var state_36953__$1 = state_36953;
var statearr_36960_36987 = state_36953__$1;
(statearr_36960_36987[(2)] = null);

(statearr_36960_36987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36954 === (6))){
var inst_36930 = (state_36953[(7)]);
var inst_36936 = p.call(null,inst_36930);
var state_36953__$1 = state_36953;
if(cljs.core.truth_(inst_36936)){
var statearr_36961_36988 = state_36953__$1;
(statearr_36961_36988[(1)] = (9));

} else {
var statearr_36962_36989 = state_36953__$1;
(statearr_36962_36989[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36954 === (3))){
var inst_36951 = (state_36953[(2)]);
var state_36953__$1 = state_36953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36953__$1,inst_36951);
} else {
if((state_val_36954 === (12))){
var state_36953__$1 = state_36953;
var statearr_36963_36990 = state_36953__$1;
(statearr_36963_36990[(2)] = null);

(statearr_36963_36990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36954 === (2))){
var state_36953__$1 = state_36953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36953__$1,(4),ch);
} else {
if((state_val_36954 === (11))){
var inst_36930 = (state_36953[(7)]);
var inst_36940 = (state_36953[(2)]);
var state_36953__$1 = state_36953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36953__$1,(8),inst_36940,inst_36930);
} else {
if((state_val_36954 === (9))){
var state_36953__$1 = state_36953;
var statearr_36964_36991 = state_36953__$1;
(statearr_36964_36991[(2)] = tc);

(statearr_36964_36991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36954 === (5))){
var inst_36933 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36934 = cljs.core.async.close_BANG_.call(null,fc);
var state_36953__$1 = (function (){var statearr_36965 = state_36953;
(statearr_36965[(8)] = inst_36933);

return statearr_36965;
})();
var statearr_36966_36992 = state_36953__$1;
(statearr_36966_36992[(2)] = inst_36934);

(statearr_36966_36992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36954 === (14))){
var inst_36947 = (state_36953[(2)]);
var state_36953__$1 = state_36953;
var statearr_36967_36993 = state_36953__$1;
(statearr_36967_36993[(2)] = inst_36947);

(statearr_36967_36993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36954 === (10))){
var state_36953__$1 = state_36953;
var statearr_36968_36994 = state_36953__$1;
(statearr_36968_36994[(2)] = fc);

(statearr_36968_36994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36954 === (8))){
var inst_36942 = (state_36953[(2)]);
var state_36953__$1 = state_36953;
if(cljs.core.truth_(inst_36942)){
var statearr_36969_36995 = state_36953__$1;
(statearr_36969_36995[(1)] = (12));

} else {
var statearr_36970_36996 = state_36953__$1;
(statearr_36970_36996[(1)] = (13));

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
});})(c__31439__auto___36982,tc,fc))
;
return ((function (switch__31418__auto__,c__31439__auto___36982,tc,fc){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_36974 = [null,null,null,null,null,null,null,null,null];
(statearr_36974[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_36974[(1)] = (1));

return statearr_36974;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_36953){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_36953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e36975){if((e36975 instanceof Object)){
var ex__31422__auto__ = e36975;
var statearr_36976_36997 = state_36953;
(statearr_36976_36997[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36998 = state_36953;
state_36953 = G__36998;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_36953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_36953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___36982,tc,fc))
})();
var state__31441__auto__ = (function (){var statearr_36977 = f__31440__auto__.call(null);
(statearr_36977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___36982);

return statearr_36977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___36982,tc,fc))
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
var c__31439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto__){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto__){
return (function (state_37062){
var state_val_37063 = (state_37062[(1)]);
if((state_val_37063 === (7))){
var inst_37058 = (state_37062[(2)]);
var state_37062__$1 = state_37062;
var statearr_37064_37085 = state_37062__$1;
(statearr_37064_37085[(2)] = inst_37058);

(statearr_37064_37085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (1))){
var inst_37042 = init;
var state_37062__$1 = (function (){var statearr_37065 = state_37062;
(statearr_37065[(7)] = inst_37042);

return statearr_37065;
})();
var statearr_37066_37086 = state_37062__$1;
(statearr_37066_37086[(2)] = null);

(statearr_37066_37086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (4))){
var inst_37045 = (state_37062[(8)]);
var inst_37045__$1 = (state_37062[(2)]);
var inst_37046 = (inst_37045__$1 == null);
var state_37062__$1 = (function (){var statearr_37067 = state_37062;
(statearr_37067[(8)] = inst_37045__$1);

return statearr_37067;
})();
if(cljs.core.truth_(inst_37046)){
var statearr_37068_37087 = state_37062__$1;
(statearr_37068_37087[(1)] = (5));

} else {
var statearr_37069_37088 = state_37062__$1;
(statearr_37069_37088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (6))){
var inst_37049 = (state_37062[(9)]);
var inst_37042 = (state_37062[(7)]);
var inst_37045 = (state_37062[(8)]);
var inst_37049__$1 = f.call(null,inst_37042,inst_37045);
var inst_37050 = cljs.core.reduced_QMARK_.call(null,inst_37049__$1);
var state_37062__$1 = (function (){var statearr_37070 = state_37062;
(statearr_37070[(9)] = inst_37049__$1);

return statearr_37070;
})();
if(inst_37050){
var statearr_37071_37089 = state_37062__$1;
(statearr_37071_37089[(1)] = (8));

} else {
var statearr_37072_37090 = state_37062__$1;
(statearr_37072_37090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (3))){
var inst_37060 = (state_37062[(2)]);
var state_37062__$1 = state_37062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37062__$1,inst_37060);
} else {
if((state_val_37063 === (2))){
var state_37062__$1 = state_37062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37062__$1,(4),ch);
} else {
if((state_val_37063 === (9))){
var inst_37049 = (state_37062[(9)]);
var inst_37042 = inst_37049;
var state_37062__$1 = (function (){var statearr_37073 = state_37062;
(statearr_37073[(7)] = inst_37042);

return statearr_37073;
})();
var statearr_37074_37091 = state_37062__$1;
(statearr_37074_37091[(2)] = null);

(statearr_37074_37091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (5))){
var inst_37042 = (state_37062[(7)]);
var state_37062__$1 = state_37062;
var statearr_37075_37092 = state_37062__$1;
(statearr_37075_37092[(2)] = inst_37042);

(statearr_37075_37092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (10))){
var inst_37056 = (state_37062[(2)]);
var state_37062__$1 = state_37062;
var statearr_37076_37093 = state_37062__$1;
(statearr_37076_37093[(2)] = inst_37056);

(statearr_37076_37093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37063 === (8))){
var inst_37049 = (state_37062[(9)]);
var inst_37052 = cljs.core.deref.call(null,inst_37049);
var state_37062__$1 = state_37062;
var statearr_37077_37094 = state_37062__$1;
(statearr_37077_37094[(2)] = inst_37052);

(statearr_37077_37094[(1)] = (10));


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
});})(c__31439__auto__))
;
return ((function (switch__31418__auto__,c__31439__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31419__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31419__auto____0 = (function (){
var statearr_37081 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37081[(0)] = cljs$core$async$reduce_$_state_machine__31419__auto__);

(statearr_37081[(1)] = (1));

return statearr_37081;
});
var cljs$core$async$reduce_$_state_machine__31419__auto____1 = (function (state_37062){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_37062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e37082){if((e37082 instanceof Object)){
var ex__31422__auto__ = e37082;
var statearr_37083_37095 = state_37062;
(statearr_37083_37095[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37096 = state_37062;
state_37062 = G__37096;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31419__auto__ = function(state_37062){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31419__auto____1.call(this,state_37062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31419__auto____0;
cljs$core$async$reduce_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31419__auto____1;
return cljs$core$async$reduce_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto__))
})();
var state__31441__auto__ = (function (){var statearr_37084 = f__31440__auto__.call(null);
(statearr_37084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto__);

return statearr_37084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto__))
);

return c__31439__auto__;
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
var args37097 = [];
var len__30472__auto___37149 = arguments.length;
var i__30473__auto___37150 = (0);
while(true){
if((i__30473__auto___37150 < len__30472__auto___37149)){
args37097.push((arguments[i__30473__auto___37150]));

var G__37151 = (i__30473__auto___37150 + (1));
i__30473__auto___37150 = G__37151;
continue;
} else {
}
break;
}

var G__37099 = args37097.length;
switch (G__37099) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37097.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto__){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto__){
return (function (state_37124){
var state_val_37125 = (state_37124[(1)]);
if((state_val_37125 === (7))){
var inst_37106 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37126_37153 = state_37124__$1;
(statearr_37126_37153[(2)] = inst_37106);

(statearr_37126_37153[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (1))){
var inst_37100 = cljs.core.seq.call(null,coll);
var inst_37101 = inst_37100;
var state_37124__$1 = (function (){var statearr_37127 = state_37124;
(statearr_37127[(7)] = inst_37101);

return statearr_37127;
})();
var statearr_37128_37154 = state_37124__$1;
(statearr_37128_37154[(2)] = null);

(statearr_37128_37154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (4))){
var inst_37101 = (state_37124[(7)]);
var inst_37104 = cljs.core.first.call(null,inst_37101);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37124__$1,(7),ch,inst_37104);
} else {
if((state_val_37125 === (13))){
var inst_37118 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37129_37155 = state_37124__$1;
(statearr_37129_37155[(2)] = inst_37118);

(statearr_37129_37155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (6))){
var inst_37109 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
if(cljs.core.truth_(inst_37109)){
var statearr_37130_37156 = state_37124__$1;
(statearr_37130_37156[(1)] = (8));

} else {
var statearr_37131_37157 = state_37124__$1;
(statearr_37131_37157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (3))){
var inst_37122 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37124__$1,inst_37122);
} else {
if((state_val_37125 === (12))){
var state_37124__$1 = state_37124;
var statearr_37132_37158 = state_37124__$1;
(statearr_37132_37158[(2)] = null);

(statearr_37132_37158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (2))){
var inst_37101 = (state_37124[(7)]);
var state_37124__$1 = state_37124;
if(cljs.core.truth_(inst_37101)){
var statearr_37133_37159 = state_37124__$1;
(statearr_37133_37159[(1)] = (4));

} else {
var statearr_37134_37160 = state_37124__$1;
(statearr_37134_37160[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (11))){
var inst_37115 = cljs.core.async.close_BANG_.call(null,ch);
var state_37124__$1 = state_37124;
var statearr_37135_37161 = state_37124__$1;
(statearr_37135_37161[(2)] = inst_37115);

(statearr_37135_37161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (9))){
var state_37124__$1 = state_37124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37136_37162 = state_37124__$1;
(statearr_37136_37162[(1)] = (11));

} else {
var statearr_37137_37163 = state_37124__$1;
(statearr_37137_37163[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (5))){
var inst_37101 = (state_37124[(7)]);
var state_37124__$1 = state_37124;
var statearr_37138_37164 = state_37124__$1;
(statearr_37138_37164[(2)] = inst_37101);

(statearr_37138_37164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (10))){
var inst_37120 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37139_37165 = state_37124__$1;
(statearr_37139_37165[(2)] = inst_37120);

(statearr_37139_37165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (8))){
var inst_37101 = (state_37124[(7)]);
var inst_37111 = cljs.core.next.call(null,inst_37101);
var inst_37101__$1 = inst_37111;
var state_37124__$1 = (function (){var statearr_37140 = state_37124;
(statearr_37140[(7)] = inst_37101__$1);

return statearr_37140;
})();
var statearr_37141_37166 = state_37124__$1;
(statearr_37141_37166[(2)] = null);

(statearr_37141_37166[(1)] = (2));


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
});})(c__31439__auto__))
;
return ((function (switch__31418__auto__,c__31439__auto__){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_37145 = [null,null,null,null,null,null,null,null];
(statearr_37145[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_37145[(1)] = (1));

return statearr_37145;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_37124){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_37124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e37146){if((e37146 instanceof Object)){
var ex__31422__auto__ = e37146;
var statearr_37147_37167 = state_37124;
(statearr_37147_37167[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37168 = state_37124;
state_37124 = G__37168;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_37124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_37124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto__))
})();
var state__31441__auto__ = (function (){var statearr_37148 = f__31440__auto__.call(null);
(statearr_37148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto__);

return statearr_37148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto__))
);

return c__31439__auto__;
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
var x__30069__auto__ = (((_ == null))?null:_);
var m__30070__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30069__auto__)]);
if(!((m__30070__auto__ == null))){
return m__30070__auto__.call(null,_);
} else {
var m__30070__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30070__auto____$1 == null))){
return m__30070__auto____$1.call(null,_);
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
var x__30069__auto__ = (((m == null))?null:m);
var m__30070__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30069__auto__)]);
if(!((m__30070__auto__ == null))){
return m__30070__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30070__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30070__auto____$1 == null))){
return m__30070__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__30069__auto__ = (((m == null))?null:m);
var m__30070__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30069__auto__)]);
if(!((m__30070__auto__ == null))){
return m__30070__auto__.call(null,m,ch);
} else {
var m__30070__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30070__auto____$1 == null))){
return m__30070__auto____$1.call(null,m,ch);
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
var x__30069__auto__ = (((m == null))?null:m);
var m__30070__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30069__auto__)]);
if(!((m__30070__auto__ == null))){
return m__30070__auto__.call(null,m);
} else {
var m__30070__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30070__auto____$1 == null))){
return m__30070__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async37390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37390 = (function (mult,ch,cs,meta37391){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta37391 = meta37391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37392,meta37391__$1){
var self__ = this;
var _37392__$1 = this;
return (new cljs.core.async.t_cljs$core$async37390(self__.mult,self__.ch,self__.cs,meta37391__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37392){
var self__ = this;
var _37392__$1 = this;
return self__.meta37391;
});})(cs))
;

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37390.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37391","meta37391",-1863668214,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37390";

cljs.core.async.t_cljs$core$async37390.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30012__auto__,writer__30013__auto__,opt__30014__auto__){
return cljs.core._write.call(null,writer__30013__auto__,"cljs.core.async/t_cljs$core$async37390");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37390 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37390(mult__$1,ch__$1,cs__$1,meta37391){
return (new cljs.core.async.t_cljs$core$async37390(mult__$1,ch__$1,cs__$1,meta37391));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37390(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31439__auto___37611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___37611,cs,m,dchan,dctr,done){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___37611,cs,m,dchan,dctr,done){
return (function (state_37523){
var state_val_37524 = (state_37523[(1)]);
if((state_val_37524 === (7))){
var inst_37519 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37525_37612 = state_37523__$1;
(statearr_37525_37612[(2)] = inst_37519);

(statearr_37525_37612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (20))){
var inst_37424 = (state_37523[(7)]);
var inst_37434 = cljs.core.first.call(null,inst_37424);
var inst_37435 = cljs.core.nth.call(null,inst_37434,(0),null);
var inst_37436 = cljs.core.nth.call(null,inst_37434,(1),null);
var state_37523__$1 = (function (){var statearr_37526 = state_37523;
(statearr_37526[(8)] = inst_37435);

return statearr_37526;
})();
if(cljs.core.truth_(inst_37436)){
var statearr_37527_37613 = state_37523__$1;
(statearr_37527_37613[(1)] = (22));

} else {
var statearr_37528_37614 = state_37523__$1;
(statearr_37528_37614[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (27))){
var inst_37395 = (state_37523[(9)]);
var inst_37466 = (state_37523[(10)]);
var inst_37471 = (state_37523[(11)]);
var inst_37464 = (state_37523[(12)]);
var inst_37471__$1 = cljs.core._nth.call(null,inst_37464,inst_37466);
var inst_37472 = cljs.core.async.put_BANG_.call(null,inst_37471__$1,inst_37395,done);
var state_37523__$1 = (function (){var statearr_37529 = state_37523;
(statearr_37529[(11)] = inst_37471__$1);

return statearr_37529;
})();
if(cljs.core.truth_(inst_37472)){
var statearr_37530_37615 = state_37523__$1;
(statearr_37530_37615[(1)] = (30));

} else {
var statearr_37531_37616 = state_37523__$1;
(statearr_37531_37616[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (1))){
var state_37523__$1 = state_37523;
var statearr_37532_37617 = state_37523__$1;
(statearr_37532_37617[(2)] = null);

(statearr_37532_37617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (24))){
var inst_37424 = (state_37523[(7)]);
var inst_37441 = (state_37523[(2)]);
var inst_37442 = cljs.core.next.call(null,inst_37424);
var inst_37404 = inst_37442;
var inst_37405 = null;
var inst_37406 = (0);
var inst_37407 = (0);
var state_37523__$1 = (function (){var statearr_37533 = state_37523;
(statearr_37533[(13)] = inst_37406);

(statearr_37533[(14)] = inst_37441);

(statearr_37533[(15)] = inst_37405);

(statearr_37533[(16)] = inst_37404);

(statearr_37533[(17)] = inst_37407);

return statearr_37533;
})();
var statearr_37534_37618 = state_37523__$1;
(statearr_37534_37618[(2)] = null);

(statearr_37534_37618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (39))){
var state_37523__$1 = state_37523;
var statearr_37538_37619 = state_37523__$1;
(statearr_37538_37619[(2)] = null);

(statearr_37538_37619[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (4))){
var inst_37395 = (state_37523[(9)]);
var inst_37395__$1 = (state_37523[(2)]);
var inst_37396 = (inst_37395__$1 == null);
var state_37523__$1 = (function (){var statearr_37539 = state_37523;
(statearr_37539[(9)] = inst_37395__$1);

return statearr_37539;
})();
if(cljs.core.truth_(inst_37396)){
var statearr_37540_37620 = state_37523__$1;
(statearr_37540_37620[(1)] = (5));

} else {
var statearr_37541_37621 = state_37523__$1;
(statearr_37541_37621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (15))){
var inst_37406 = (state_37523[(13)]);
var inst_37405 = (state_37523[(15)]);
var inst_37404 = (state_37523[(16)]);
var inst_37407 = (state_37523[(17)]);
var inst_37420 = (state_37523[(2)]);
var inst_37421 = (inst_37407 + (1));
var tmp37535 = inst_37406;
var tmp37536 = inst_37405;
var tmp37537 = inst_37404;
var inst_37404__$1 = tmp37537;
var inst_37405__$1 = tmp37536;
var inst_37406__$1 = tmp37535;
var inst_37407__$1 = inst_37421;
var state_37523__$1 = (function (){var statearr_37542 = state_37523;
(statearr_37542[(13)] = inst_37406__$1);

(statearr_37542[(18)] = inst_37420);

(statearr_37542[(15)] = inst_37405__$1);

(statearr_37542[(16)] = inst_37404__$1);

(statearr_37542[(17)] = inst_37407__$1);

return statearr_37542;
})();
var statearr_37543_37622 = state_37523__$1;
(statearr_37543_37622[(2)] = null);

(statearr_37543_37622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (21))){
var inst_37445 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37547_37623 = state_37523__$1;
(statearr_37547_37623[(2)] = inst_37445);

(statearr_37547_37623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (31))){
var inst_37471 = (state_37523[(11)]);
var inst_37475 = done.call(null,null);
var inst_37476 = cljs.core.async.untap_STAR_.call(null,m,inst_37471);
var state_37523__$1 = (function (){var statearr_37548 = state_37523;
(statearr_37548[(19)] = inst_37475);

return statearr_37548;
})();
var statearr_37549_37624 = state_37523__$1;
(statearr_37549_37624[(2)] = inst_37476);

(statearr_37549_37624[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (32))){
var inst_37463 = (state_37523[(20)]);
var inst_37465 = (state_37523[(21)]);
var inst_37466 = (state_37523[(10)]);
var inst_37464 = (state_37523[(12)]);
var inst_37478 = (state_37523[(2)]);
var inst_37479 = (inst_37466 + (1));
var tmp37544 = inst_37463;
var tmp37545 = inst_37465;
var tmp37546 = inst_37464;
var inst_37463__$1 = tmp37544;
var inst_37464__$1 = tmp37546;
var inst_37465__$1 = tmp37545;
var inst_37466__$1 = inst_37479;
var state_37523__$1 = (function (){var statearr_37550 = state_37523;
(statearr_37550[(20)] = inst_37463__$1);

(statearr_37550[(21)] = inst_37465__$1);

(statearr_37550[(22)] = inst_37478);

(statearr_37550[(10)] = inst_37466__$1);

(statearr_37550[(12)] = inst_37464__$1);

return statearr_37550;
})();
var statearr_37551_37625 = state_37523__$1;
(statearr_37551_37625[(2)] = null);

(statearr_37551_37625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (40))){
var inst_37491 = (state_37523[(23)]);
var inst_37495 = done.call(null,null);
var inst_37496 = cljs.core.async.untap_STAR_.call(null,m,inst_37491);
var state_37523__$1 = (function (){var statearr_37552 = state_37523;
(statearr_37552[(24)] = inst_37495);

return statearr_37552;
})();
var statearr_37553_37626 = state_37523__$1;
(statearr_37553_37626[(2)] = inst_37496);

(statearr_37553_37626[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (33))){
var inst_37482 = (state_37523[(25)]);
var inst_37484 = cljs.core.chunked_seq_QMARK_.call(null,inst_37482);
var state_37523__$1 = state_37523;
if(inst_37484){
var statearr_37554_37627 = state_37523__$1;
(statearr_37554_37627[(1)] = (36));

} else {
var statearr_37555_37628 = state_37523__$1;
(statearr_37555_37628[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (13))){
var inst_37414 = (state_37523[(26)]);
var inst_37417 = cljs.core.async.close_BANG_.call(null,inst_37414);
var state_37523__$1 = state_37523;
var statearr_37556_37629 = state_37523__$1;
(statearr_37556_37629[(2)] = inst_37417);

(statearr_37556_37629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (22))){
var inst_37435 = (state_37523[(8)]);
var inst_37438 = cljs.core.async.close_BANG_.call(null,inst_37435);
var state_37523__$1 = state_37523;
var statearr_37557_37630 = state_37523__$1;
(statearr_37557_37630[(2)] = inst_37438);

(statearr_37557_37630[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (36))){
var inst_37482 = (state_37523[(25)]);
var inst_37486 = cljs.core.chunk_first.call(null,inst_37482);
var inst_37487 = cljs.core.chunk_rest.call(null,inst_37482);
var inst_37488 = cljs.core.count.call(null,inst_37486);
var inst_37463 = inst_37487;
var inst_37464 = inst_37486;
var inst_37465 = inst_37488;
var inst_37466 = (0);
var state_37523__$1 = (function (){var statearr_37558 = state_37523;
(statearr_37558[(20)] = inst_37463);

(statearr_37558[(21)] = inst_37465);

(statearr_37558[(10)] = inst_37466);

(statearr_37558[(12)] = inst_37464);

return statearr_37558;
})();
var statearr_37559_37631 = state_37523__$1;
(statearr_37559_37631[(2)] = null);

(statearr_37559_37631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (41))){
var inst_37482 = (state_37523[(25)]);
var inst_37498 = (state_37523[(2)]);
var inst_37499 = cljs.core.next.call(null,inst_37482);
var inst_37463 = inst_37499;
var inst_37464 = null;
var inst_37465 = (0);
var inst_37466 = (0);
var state_37523__$1 = (function (){var statearr_37560 = state_37523;
(statearr_37560[(20)] = inst_37463);

(statearr_37560[(21)] = inst_37465);

(statearr_37560[(27)] = inst_37498);

(statearr_37560[(10)] = inst_37466);

(statearr_37560[(12)] = inst_37464);

return statearr_37560;
})();
var statearr_37561_37632 = state_37523__$1;
(statearr_37561_37632[(2)] = null);

(statearr_37561_37632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (43))){
var state_37523__$1 = state_37523;
var statearr_37562_37633 = state_37523__$1;
(statearr_37562_37633[(2)] = null);

(statearr_37562_37633[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (29))){
var inst_37507 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37563_37634 = state_37523__$1;
(statearr_37563_37634[(2)] = inst_37507);

(statearr_37563_37634[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (44))){
var inst_37516 = (state_37523[(2)]);
var state_37523__$1 = (function (){var statearr_37564 = state_37523;
(statearr_37564[(28)] = inst_37516);

return statearr_37564;
})();
var statearr_37565_37635 = state_37523__$1;
(statearr_37565_37635[(2)] = null);

(statearr_37565_37635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (6))){
var inst_37455 = (state_37523[(29)]);
var inst_37454 = cljs.core.deref.call(null,cs);
var inst_37455__$1 = cljs.core.keys.call(null,inst_37454);
var inst_37456 = cljs.core.count.call(null,inst_37455__$1);
var inst_37457 = cljs.core.reset_BANG_.call(null,dctr,inst_37456);
var inst_37462 = cljs.core.seq.call(null,inst_37455__$1);
var inst_37463 = inst_37462;
var inst_37464 = null;
var inst_37465 = (0);
var inst_37466 = (0);
var state_37523__$1 = (function (){var statearr_37566 = state_37523;
(statearr_37566[(20)] = inst_37463);

(statearr_37566[(21)] = inst_37465);

(statearr_37566[(30)] = inst_37457);

(statearr_37566[(10)] = inst_37466);

(statearr_37566[(29)] = inst_37455__$1);

(statearr_37566[(12)] = inst_37464);

return statearr_37566;
})();
var statearr_37567_37636 = state_37523__$1;
(statearr_37567_37636[(2)] = null);

(statearr_37567_37636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (28))){
var inst_37463 = (state_37523[(20)]);
var inst_37482 = (state_37523[(25)]);
var inst_37482__$1 = cljs.core.seq.call(null,inst_37463);
var state_37523__$1 = (function (){var statearr_37568 = state_37523;
(statearr_37568[(25)] = inst_37482__$1);

return statearr_37568;
})();
if(inst_37482__$1){
var statearr_37569_37637 = state_37523__$1;
(statearr_37569_37637[(1)] = (33));

} else {
var statearr_37570_37638 = state_37523__$1;
(statearr_37570_37638[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (25))){
var inst_37465 = (state_37523[(21)]);
var inst_37466 = (state_37523[(10)]);
var inst_37468 = (inst_37466 < inst_37465);
var inst_37469 = inst_37468;
var state_37523__$1 = state_37523;
if(cljs.core.truth_(inst_37469)){
var statearr_37571_37639 = state_37523__$1;
(statearr_37571_37639[(1)] = (27));

} else {
var statearr_37572_37640 = state_37523__$1;
(statearr_37572_37640[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (34))){
var state_37523__$1 = state_37523;
var statearr_37573_37641 = state_37523__$1;
(statearr_37573_37641[(2)] = null);

(statearr_37573_37641[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (17))){
var state_37523__$1 = state_37523;
var statearr_37574_37642 = state_37523__$1;
(statearr_37574_37642[(2)] = null);

(statearr_37574_37642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (3))){
var inst_37521 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37523__$1,inst_37521);
} else {
if((state_val_37524 === (12))){
var inst_37450 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37575_37643 = state_37523__$1;
(statearr_37575_37643[(2)] = inst_37450);

(statearr_37575_37643[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (2))){
var state_37523__$1 = state_37523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37523__$1,(4),ch);
} else {
if((state_val_37524 === (23))){
var state_37523__$1 = state_37523;
var statearr_37576_37644 = state_37523__$1;
(statearr_37576_37644[(2)] = null);

(statearr_37576_37644[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (35))){
var inst_37505 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37577_37645 = state_37523__$1;
(statearr_37577_37645[(2)] = inst_37505);

(statearr_37577_37645[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (19))){
var inst_37424 = (state_37523[(7)]);
var inst_37428 = cljs.core.chunk_first.call(null,inst_37424);
var inst_37429 = cljs.core.chunk_rest.call(null,inst_37424);
var inst_37430 = cljs.core.count.call(null,inst_37428);
var inst_37404 = inst_37429;
var inst_37405 = inst_37428;
var inst_37406 = inst_37430;
var inst_37407 = (0);
var state_37523__$1 = (function (){var statearr_37578 = state_37523;
(statearr_37578[(13)] = inst_37406);

(statearr_37578[(15)] = inst_37405);

(statearr_37578[(16)] = inst_37404);

(statearr_37578[(17)] = inst_37407);

return statearr_37578;
})();
var statearr_37579_37646 = state_37523__$1;
(statearr_37579_37646[(2)] = null);

(statearr_37579_37646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (11))){
var inst_37424 = (state_37523[(7)]);
var inst_37404 = (state_37523[(16)]);
var inst_37424__$1 = cljs.core.seq.call(null,inst_37404);
var state_37523__$1 = (function (){var statearr_37580 = state_37523;
(statearr_37580[(7)] = inst_37424__$1);

return statearr_37580;
})();
if(inst_37424__$1){
var statearr_37581_37647 = state_37523__$1;
(statearr_37581_37647[(1)] = (16));

} else {
var statearr_37582_37648 = state_37523__$1;
(statearr_37582_37648[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (9))){
var inst_37452 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37583_37649 = state_37523__$1;
(statearr_37583_37649[(2)] = inst_37452);

(statearr_37583_37649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (5))){
var inst_37402 = cljs.core.deref.call(null,cs);
var inst_37403 = cljs.core.seq.call(null,inst_37402);
var inst_37404 = inst_37403;
var inst_37405 = null;
var inst_37406 = (0);
var inst_37407 = (0);
var state_37523__$1 = (function (){var statearr_37584 = state_37523;
(statearr_37584[(13)] = inst_37406);

(statearr_37584[(15)] = inst_37405);

(statearr_37584[(16)] = inst_37404);

(statearr_37584[(17)] = inst_37407);

return statearr_37584;
})();
var statearr_37585_37650 = state_37523__$1;
(statearr_37585_37650[(2)] = null);

(statearr_37585_37650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (14))){
var state_37523__$1 = state_37523;
var statearr_37586_37651 = state_37523__$1;
(statearr_37586_37651[(2)] = null);

(statearr_37586_37651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (45))){
var inst_37513 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37587_37652 = state_37523__$1;
(statearr_37587_37652[(2)] = inst_37513);

(statearr_37587_37652[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (26))){
var inst_37455 = (state_37523[(29)]);
var inst_37509 = (state_37523[(2)]);
var inst_37510 = cljs.core.seq.call(null,inst_37455);
var state_37523__$1 = (function (){var statearr_37588 = state_37523;
(statearr_37588[(31)] = inst_37509);

return statearr_37588;
})();
if(inst_37510){
var statearr_37589_37653 = state_37523__$1;
(statearr_37589_37653[(1)] = (42));

} else {
var statearr_37590_37654 = state_37523__$1;
(statearr_37590_37654[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (16))){
var inst_37424 = (state_37523[(7)]);
var inst_37426 = cljs.core.chunked_seq_QMARK_.call(null,inst_37424);
var state_37523__$1 = state_37523;
if(inst_37426){
var statearr_37591_37655 = state_37523__$1;
(statearr_37591_37655[(1)] = (19));

} else {
var statearr_37592_37656 = state_37523__$1;
(statearr_37592_37656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (38))){
var inst_37502 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37593_37657 = state_37523__$1;
(statearr_37593_37657[(2)] = inst_37502);

(statearr_37593_37657[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (30))){
var state_37523__$1 = state_37523;
var statearr_37594_37658 = state_37523__$1;
(statearr_37594_37658[(2)] = null);

(statearr_37594_37658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (10))){
var inst_37405 = (state_37523[(15)]);
var inst_37407 = (state_37523[(17)]);
var inst_37413 = cljs.core._nth.call(null,inst_37405,inst_37407);
var inst_37414 = cljs.core.nth.call(null,inst_37413,(0),null);
var inst_37415 = cljs.core.nth.call(null,inst_37413,(1),null);
var state_37523__$1 = (function (){var statearr_37595 = state_37523;
(statearr_37595[(26)] = inst_37414);

return statearr_37595;
})();
if(cljs.core.truth_(inst_37415)){
var statearr_37596_37659 = state_37523__$1;
(statearr_37596_37659[(1)] = (13));

} else {
var statearr_37597_37660 = state_37523__$1;
(statearr_37597_37660[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (18))){
var inst_37448 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37598_37661 = state_37523__$1;
(statearr_37598_37661[(2)] = inst_37448);

(statearr_37598_37661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (42))){
var state_37523__$1 = state_37523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37523__$1,(45),dchan);
} else {
if((state_val_37524 === (37))){
var inst_37395 = (state_37523[(9)]);
var inst_37482 = (state_37523[(25)]);
var inst_37491 = (state_37523[(23)]);
var inst_37491__$1 = cljs.core.first.call(null,inst_37482);
var inst_37492 = cljs.core.async.put_BANG_.call(null,inst_37491__$1,inst_37395,done);
var state_37523__$1 = (function (){var statearr_37599 = state_37523;
(statearr_37599[(23)] = inst_37491__$1);

return statearr_37599;
})();
if(cljs.core.truth_(inst_37492)){
var statearr_37600_37662 = state_37523__$1;
(statearr_37600_37662[(1)] = (39));

} else {
var statearr_37601_37663 = state_37523__$1;
(statearr_37601_37663[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (8))){
var inst_37406 = (state_37523[(13)]);
var inst_37407 = (state_37523[(17)]);
var inst_37409 = (inst_37407 < inst_37406);
var inst_37410 = inst_37409;
var state_37523__$1 = state_37523;
if(cljs.core.truth_(inst_37410)){
var statearr_37602_37664 = state_37523__$1;
(statearr_37602_37664[(1)] = (10));

} else {
var statearr_37603_37665 = state_37523__$1;
(statearr_37603_37665[(1)] = (11));

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
});})(c__31439__auto___37611,cs,m,dchan,dctr,done))
;
return ((function (switch__31418__auto__,c__31439__auto___37611,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31419__auto__ = null;
var cljs$core$async$mult_$_state_machine__31419__auto____0 = (function (){
var statearr_37607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37607[(0)] = cljs$core$async$mult_$_state_machine__31419__auto__);

(statearr_37607[(1)] = (1));

return statearr_37607;
});
var cljs$core$async$mult_$_state_machine__31419__auto____1 = (function (state_37523){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_37523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e37608){if((e37608 instanceof Object)){
var ex__31422__auto__ = e37608;
var statearr_37609_37666 = state_37523;
(statearr_37609_37666[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37667 = state_37523;
state_37523 = G__37667;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31419__auto__ = function(state_37523){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31419__auto____1.call(this,state_37523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31419__auto____0;
cljs$core$async$mult_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31419__auto____1;
return cljs$core$async$mult_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___37611,cs,m,dchan,dctr,done))
})();
var state__31441__auto__ = (function (){var statearr_37610 = f__31440__auto__.call(null);
(statearr_37610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___37611);

return statearr_37610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___37611,cs,m,dchan,dctr,done))
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
var args37668 = [];
var len__30472__auto___37671 = arguments.length;
var i__30473__auto___37672 = (0);
while(true){
if((i__30473__auto___37672 < len__30472__auto___37671)){
args37668.push((arguments[i__30473__auto___37672]));

var G__37673 = (i__30473__auto___37672 + (1));
i__30473__auto___37672 = G__37673;
continue;
} else {
}
break;
}

var G__37670 = args37668.length;
switch (G__37670) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37668.length)].join('')));

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
var x__30069__auto__ = (((m == null))?null:m);
var m__30070__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30069__auto__)]);
if(!((m__30070__auto__ == null))){
return m__30070__auto__.call(null,m,ch);
} else {
var m__30070__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30070__auto____$1 == null))){
return m__30070__auto____$1.call(null,m,ch);
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
var x__30069__auto__ = (((m == null))?null:m);
var m__30070__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30069__auto__)]);
if(!((m__30070__auto__ == null))){
return m__30070__auto__.call(null,m,ch);
} else {
var m__30070__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30070__auto____$1 == null))){
return m__30070__auto____$1.call(null,m,ch);
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
var x__30069__auto__ = (((m == null))?null:m);
var m__30070__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30069__auto__)]);
if(!((m__30070__auto__ == null))){
return m__30070__auto__.call(null,m);
} else {
var m__30070__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30070__auto____$1 == null))){
return m__30070__auto____$1.call(null,m);
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
var x__30069__auto__ = (((m == null))?null:m);
var m__30070__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30069__auto__)]);
if(!((m__30070__auto__ == null))){
return m__30070__auto__.call(null,m,state_map);
} else {
var m__30070__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30070__auto____$1 == null))){
return m__30070__auto____$1.call(null,m,state_map);
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
var x__30069__auto__ = (((m == null))?null:m);
var m__30070__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30069__auto__)]);
if(!((m__30070__auto__ == null))){
return m__30070__auto__.call(null,m,mode);
} else {
var m__30070__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30070__auto____$1 == null))){
return m__30070__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__30479__auto__ = [];
var len__30472__auto___37685 = arguments.length;
var i__30473__auto___37686 = (0);
while(true){
if((i__30473__auto___37686 < len__30472__auto___37685)){
args__30479__auto__.push((arguments[i__30473__auto___37686]));

var G__37687 = (i__30473__auto___37686 + (1));
i__30473__auto___37686 = G__37687;
continue;
} else {
}
break;
}

var argseq__30480__auto__ = ((((3) < args__30479__auto__.length))?(new cljs.core.IndexedSeq(args__30479__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30480__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37679){
var map__37680 = p__37679;
var map__37680__$1 = ((((!((map__37680 == null)))?((((map__37680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37680):map__37680);
var opts = map__37680__$1;
var statearr_37682_37688 = state;
(statearr_37682_37688[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__37680,map__37680__$1,opts){
return (function (val){
var statearr_37683_37689 = state;
(statearr_37683_37689[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37680,map__37680__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_37684_37690 = state;
(statearr_37684_37690[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37675){
var G__37676 = cljs.core.first.call(null,seq37675);
var seq37675__$1 = cljs.core.next.call(null,seq37675);
var G__37677 = cljs.core.first.call(null,seq37675__$1);
var seq37675__$2 = cljs.core.next.call(null,seq37675__$1);
var G__37678 = cljs.core.first.call(null,seq37675__$2);
var seq37675__$3 = cljs.core.next.call(null,seq37675__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37676,G__37677,G__37678,seq37675__$3);
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
if(typeof cljs.core.async.t_cljs$core$async37854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37854 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37855){
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
this.meta37855 = meta37855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37856,meta37855__$1){
var self__ = this;
var _37856__$1 = this;
return (new cljs.core.async.t_cljs$core$async37854(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37855__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37856){
var self__ = this;
var _37856__$1 = this;
return self__.meta37855;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37854.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37854.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async37854.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37854.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37854.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37854.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37854.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async37854.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37855","meta37855",-1308148971,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37854";

cljs.core.async.t_cljs$core$async37854.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30012__auto__,writer__30013__auto__,opt__30014__auto__){
return cljs.core._write.call(null,writer__30013__auto__,"cljs.core.async/t_cljs$core$async37854");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37854 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37854(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37855){
return (new cljs.core.async.t_cljs$core$async37854(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37855));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37854(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31439__auto___38017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___38017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___38017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37954){
var state_val_37955 = (state_37954[(1)]);
if((state_val_37955 === (7))){
var inst_37872 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
var statearr_37956_38018 = state_37954__$1;
(statearr_37956_38018[(2)] = inst_37872);

(statearr_37956_38018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (20))){
var inst_37884 = (state_37954[(7)]);
var state_37954__$1 = state_37954;
var statearr_37957_38019 = state_37954__$1;
(statearr_37957_38019[(2)] = inst_37884);

(statearr_37957_38019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (27))){
var state_37954__$1 = state_37954;
var statearr_37958_38020 = state_37954__$1;
(statearr_37958_38020[(2)] = null);

(statearr_37958_38020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (1))){
var inst_37860 = (state_37954[(8)]);
var inst_37860__$1 = calc_state.call(null);
var inst_37862 = (inst_37860__$1 == null);
var inst_37863 = cljs.core.not.call(null,inst_37862);
var state_37954__$1 = (function (){var statearr_37959 = state_37954;
(statearr_37959[(8)] = inst_37860__$1);

return statearr_37959;
})();
if(inst_37863){
var statearr_37960_38021 = state_37954__$1;
(statearr_37960_38021[(1)] = (2));

} else {
var statearr_37961_38022 = state_37954__$1;
(statearr_37961_38022[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (24))){
var inst_37928 = (state_37954[(9)]);
var inst_37907 = (state_37954[(10)]);
var inst_37914 = (state_37954[(11)]);
var inst_37928__$1 = inst_37907.call(null,inst_37914);
var state_37954__$1 = (function (){var statearr_37962 = state_37954;
(statearr_37962[(9)] = inst_37928__$1);

return statearr_37962;
})();
if(cljs.core.truth_(inst_37928__$1)){
var statearr_37963_38023 = state_37954__$1;
(statearr_37963_38023[(1)] = (29));

} else {
var statearr_37964_38024 = state_37954__$1;
(statearr_37964_38024[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (4))){
var inst_37875 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
if(cljs.core.truth_(inst_37875)){
var statearr_37965_38025 = state_37954__$1;
(statearr_37965_38025[(1)] = (8));

} else {
var statearr_37966_38026 = state_37954__$1;
(statearr_37966_38026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (15))){
var inst_37901 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
if(cljs.core.truth_(inst_37901)){
var statearr_37967_38027 = state_37954__$1;
(statearr_37967_38027[(1)] = (19));

} else {
var statearr_37968_38028 = state_37954__$1;
(statearr_37968_38028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (21))){
var inst_37906 = (state_37954[(12)]);
var inst_37906__$1 = (state_37954[(2)]);
var inst_37907 = cljs.core.get.call(null,inst_37906__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37908 = cljs.core.get.call(null,inst_37906__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37909 = cljs.core.get.call(null,inst_37906__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37954__$1 = (function (){var statearr_37969 = state_37954;
(statearr_37969[(13)] = inst_37908);

(statearr_37969[(10)] = inst_37907);

(statearr_37969[(12)] = inst_37906__$1);

return statearr_37969;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37954__$1,(22),inst_37909);
} else {
if((state_val_37955 === (31))){
var inst_37936 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
if(cljs.core.truth_(inst_37936)){
var statearr_37970_38029 = state_37954__$1;
(statearr_37970_38029[(1)] = (32));

} else {
var statearr_37971_38030 = state_37954__$1;
(statearr_37971_38030[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (32))){
var inst_37913 = (state_37954[(14)]);
var state_37954__$1 = state_37954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37954__$1,(35),out,inst_37913);
} else {
if((state_val_37955 === (33))){
var inst_37906 = (state_37954[(12)]);
var inst_37884 = inst_37906;
var state_37954__$1 = (function (){var statearr_37972 = state_37954;
(statearr_37972[(7)] = inst_37884);

return statearr_37972;
})();
var statearr_37973_38031 = state_37954__$1;
(statearr_37973_38031[(2)] = null);

(statearr_37973_38031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (13))){
var inst_37884 = (state_37954[(7)]);
var inst_37891 = inst_37884.cljs$lang$protocol_mask$partition0$;
var inst_37892 = (inst_37891 & (64));
var inst_37893 = inst_37884.cljs$core$ISeq$;
var inst_37894 = (inst_37892) || (inst_37893);
var state_37954__$1 = state_37954;
if(cljs.core.truth_(inst_37894)){
var statearr_37974_38032 = state_37954__$1;
(statearr_37974_38032[(1)] = (16));

} else {
var statearr_37975_38033 = state_37954__$1;
(statearr_37975_38033[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (22))){
var inst_37913 = (state_37954[(14)]);
var inst_37914 = (state_37954[(11)]);
var inst_37912 = (state_37954[(2)]);
var inst_37913__$1 = cljs.core.nth.call(null,inst_37912,(0),null);
var inst_37914__$1 = cljs.core.nth.call(null,inst_37912,(1),null);
var inst_37915 = (inst_37913__$1 == null);
var inst_37916 = cljs.core._EQ_.call(null,inst_37914__$1,change);
var inst_37917 = (inst_37915) || (inst_37916);
var state_37954__$1 = (function (){var statearr_37976 = state_37954;
(statearr_37976[(14)] = inst_37913__$1);

(statearr_37976[(11)] = inst_37914__$1);

return statearr_37976;
})();
if(cljs.core.truth_(inst_37917)){
var statearr_37977_38034 = state_37954__$1;
(statearr_37977_38034[(1)] = (23));

} else {
var statearr_37978_38035 = state_37954__$1;
(statearr_37978_38035[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (36))){
var inst_37906 = (state_37954[(12)]);
var inst_37884 = inst_37906;
var state_37954__$1 = (function (){var statearr_37979 = state_37954;
(statearr_37979[(7)] = inst_37884);

return statearr_37979;
})();
var statearr_37980_38036 = state_37954__$1;
(statearr_37980_38036[(2)] = null);

(statearr_37980_38036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (29))){
var inst_37928 = (state_37954[(9)]);
var state_37954__$1 = state_37954;
var statearr_37981_38037 = state_37954__$1;
(statearr_37981_38037[(2)] = inst_37928);

(statearr_37981_38037[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (6))){
var state_37954__$1 = state_37954;
var statearr_37982_38038 = state_37954__$1;
(statearr_37982_38038[(2)] = false);

(statearr_37982_38038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (28))){
var inst_37924 = (state_37954[(2)]);
var inst_37925 = calc_state.call(null);
var inst_37884 = inst_37925;
var state_37954__$1 = (function (){var statearr_37983 = state_37954;
(statearr_37983[(7)] = inst_37884);

(statearr_37983[(15)] = inst_37924);

return statearr_37983;
})();
var statearr_37984_38039 = state_37954__$1;
(statearr_37984_38039[(2)] = null);

(statearr_37984_38039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (25))){
var inst_37950 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
var statearr_37985_38040 = state_37954__$1;
(statearr_37985_38040[(2)] = inst_37950);

(statearr_37985_38040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (34))){
var inst_37948 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
var statearr_37986_38041 = state_37954__$1;
(statearr_37986_38041[(2)] = inst_37948);

(statearr_37986_38041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (17))){
var state_37954__$1 = state_37954;
var statearr_37987_38042 = state_37954__$1;
(statearr_37987_38042[(2)] = false);

(statearr_37987_38042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (3))){
var state_37954__$1 = state_37954;
var statearr_37988_38043 = state_37954__$1;
(statearr_37988_38043[(2)] = false);

(statearr_37988_38043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (12))){
var inst_37952 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37954__$1,inst_37952);
} else {
if((state_val_37955 === (2))){
var inst_37860 = (state_37954[(8)]);
var inst_37865 = inst_37860.cljs$lang$protocol_mask$partition0$;
var inst_37866 = (inst_37865 & (64));
var inst_37867 = inst_37860.cljs$core$ISeq$;
var inst_37868 = (inst_37866) || (inst_37867);
var state_37954__$1 = state_37954;
if(cljs.core.truth_(inst_37868)){
var statearr_37989_38044 = state_37954__$1;
(statearr_37989_38044[(1)] = (5));

} else {
var statearr_37990_38045 = state_37954__$1;
(statearr_37990_38045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (23))){
var inst_37913 = (state_37954[(14)]);
var inst_37919 = (inst_37913 == null);
var state_37954__$1 = state_37954;
if(cljs.core.truth_(inst_37919)){
var statearr_37991_38046 = state_37954__$1;
(statearr_37991_38046[(1)] = (26));

} else {
var statearr_37992_38047 = state_37954__$1;
(statearr_37992_38047[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (35))){
var inst_37939 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
if(cljs.core.truth_(inst_37939)){
var statearr_37993_38048 = state_37954__$1;
(statearr_37993_38048[(1)] = (36));

} else {
var statearr_37994_38049 = state_37954__$1;
(statearr_37994_38049[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (19))){
var inst_37884 = (state_37954[(7)]);
var inst_37903 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37884);
var state_37954__$1 = state_37954;
var statearr_37995_38050 = state_37954__$1;
(statearr_37995_38050[(2)] = inst_37903);

(statearr_37995_38050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (11))){
var inst_37884 = (state_37954[(7)]);
var inst_37888 = (inst_37884 == null);
var inst_37889 = cljs.core.not.call(null,inst_37888);
var state_37954__$1 = state_37954;
if(inst_37889){
var statearr_37996_38051 = state_37954__$1;
(statearr_37996_38051[(1)] = (13));

} else {
var statearr_37997_38052 = state_37954__$1;
(statearr_37997_38052[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (9))){
var inst_37860 = (state_37954[(8)]);
var state_37954__$1 = state_37954;
var statearr_37998_38053 = state_37954__$1;
(statearr_37998_38053[(2)] = inst_37860);

(statearr_37998_38053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (5))){
var state_37954__$1 = state_37954;
var statearr_37999_38054 = state_37954__$1;
(statearr_37999_38054[(2)] = true);

(statearr_37999_38054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (14))){
var state_37954__$1 = state_37954;
var statearr_38000_38055 = state_37954__$1;
(statearr_38000_38055[(2)] = false);

(statearr_38000_38055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (26))){
var inst_37914 = (state_37954[(11)]);
var inst_37921 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37914);
var state_37954__$1 = state_37954;
var statearr_38001_38056 = state_37954__$1;
(statearr_38001_38056[(2)] = inst_37921);

(statearr_38001_38056[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (16))){
var state_37954__$1 = state_37954;
var statearr_38002_38057 = state_37954__$1;
(statearr_38002_38057[(2)] = true);

(statearr_38002_38057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (38))){
var inst_37944 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
var statearr_38003_38058 = state_37954__$1;
(statearr_38003_38058[(2)] = inst_37944);

(statearr_38003_38058[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (30))){
var inst_37908 = (state_37954[(13)]);
var inst_37907 = (state_37954[(10)]);
var inst_37914 = (state_37954[(11)]);
var inst_37931 = cljs.core.empty_QMARK_.call(null,inst_37907);
var inst_37932 = inst_37908.call(null,inst_37914);
var inst_37933 = cljs.core.not.call(null,inst_37932);
var inst_37934 = (inst_37931) && (inst_37933);
var state_37954__$1 = state_37954;
var statearr_38004_38059 = state_37954__$1;
(statearr_38004_38059[(2)] = inst_37934);

(statearr_38004_38059[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (10))){
var inst_37860 = (state_37954[(8)]);
var inst_37880 = (state_37954[(2)]);
var inst_37881 = cljs.core.get.call(null,inst_37880,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37882 = cljs.core.get.call(null,inst_37880,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37883 = cljs.core.get.call(null,inst_37880,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37884 = inst_37860;
var state_37954__$1 = (function (){var statearr_38005 = state_37954;
(statearr_38005[(16)] = inst_37882);

(statearr_38005[(17)] = inst_37881);

(statearr_38005[(18)] = inst_37883);

(statearr_38005[(7)] = inst_37884);

return statearr_38005;
})();
var statearr_38006_38060 = state_37954__$1;
(statearr_38006_38060[(2)] = null);

(statearr_38006_38060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (18))){
var inst_37898 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
var statearr_38007_38061 = state_37954__$1;
(statearr_38007_38061[(2)] = inst_37898);

(statearr_38007_38061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (37))){
var state_37954__$1 = state_37954;
var statearr_38008_38062 = state_37954__$1;
(statearr_38008_38062[(2)] = null);

(statearr_38008_38062[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (8))){
var inst_37860 = (state_37954[(8)]);
var inst_37877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37860);
var state_37954__$1 = state_37954;
var statearr_38009_38063 = state_37954__$1;
(statearr_38009_38063[(2)] = inst_37877);

(statearr_38009_38063[(1)] = (10));


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
});})(c__31439__auto___38017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31418__auto__,c__31439__auto___38017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31419__auto__ = null;
var cljs$core$async$mix_$_state_machine__31419__auto____0 = (function (){
var statearr_38013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38013[(0)] = cljs$core$async$mix_$_state_machine__31419__auto__);

(statearr_38013[(1)] = (1));

return statearr_38013;
});
var cljs$core$async$mix_$_state_machine__31419__auto____1 = (function (state_37954){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_37954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e38014){if((e38014 instanceof Object)){
var ex__31422__auto__ = e38014;
var statearr_38015_38064 = state_37954;
(statearr_38015_38064[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38065 = state_37954;
state_37954 = G__38065;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31419__auto__ = function(state_37954){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31419__auto____1.call(this,state_37954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31419__auto____0;
cljs$core$async$mix_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31419__auto____1;
return cljs$core$async$mix_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___38017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31441__auto__ = (function (){var statearr_38016 = f__31440__auto__.call(null);
(statearr_38016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___38017);

return statearr_38016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___38017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__30069__auto__ = (((p == null))?null:p);
var m__30070__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30069__auto__)]);
if(!((m__30070__auto__ == null))){
return m__30070__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30070__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30070__auto____$1 == null))){
return m__30070__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__30069__auto__ = (((p == null))?null:p);
var m__30070__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30069__auto__)]);
if(!((m__30070__auto__ == null))){
return m__30070__auto__.call(null,p,v,ch);
} else {
var m__30070__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30070__auto____$1 == null))){
return m__30070__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args38066 = [];
var len__30472__auto___38069 = arguments.length;
var i__30473__auto___38070 = (0);
while(true){
if((i__30473__auto___38070 < len__30472__auto___38069)){
args38066.push((arguments[i__30473__auto___38070]));

var G__38071 = (i__30473__auto___38070 + (1));
i__30473__auto___38070 = G__38071;
continue;
} else {
}
break;
}

var G__38068 = args38066.length;
switch (G__38068) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38066.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30069__auto__ = (((p == null))?null:p);
var m__30070__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30069__auto__)]);
if(!((m__30070__auto__ == null))){
return m__30070__auto__.call(null,p);
} else {
var m__30070__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30070__auto____$1 == null))){
return m__30070__auto____$1.call(null,p);
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
var x__30069__auto__ = (((p == null))?null:p);
var m__30070__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30069__auto__)]);
if(!((m__30070__auto__ == null))){
return m__30070__auto__.call(null,p,v);
} else {
var m__30070__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30070__auto____$1 == null))){
return m__30070__auto____$1.call(null,p,v);
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
var args38074 = [];
var len__30472__auto___38199 = arguments.length;
var i__30473__auto___38200 = (0);
while(true){
if((i__30473__auto___38200 < len__30472__auto___38199)){
args38074.push((arguments[i__30473__auto___38200]));

var G__38201 = (i__30473__auto___38200 + (1));
i__30473__auto___38200 = G__38201;
continue;
} else {
}
break;
}

var G__38076 = args38074.length;
switch (G__38076) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38074.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__29414__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__29414__auto__,mults){
return (function (p1__38073_SHARP_){
if(cljs.core.truth_(p1__38073_SHARP_.call(null,topic))){
return p1__38073_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38073_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__29414__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38077 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38078){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38078 = meta38078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38079,meta38078__$1){
var self__ = this;
var _38079__$1 = this;
return (new cljs.core.async.t_cljs$core$async38077(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38078__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38079){
var self__ = this;
var _38079__$1 = this;
return self__.meta38078;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38077.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38077.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async38077.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38077.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async38077.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38077.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38077.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38078","meta38078",-1100763401,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38077";

cljs.core.async.t_cljs$core$async38077.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30012__auto__,writer__30013__auto__,opt__30014__auto__){
return cljs.core._write.call(null,writer__30013__auto__,"cljs.core.async/t_cljs$core$async38077");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38077 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38077(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38078){
return (new cljs.core.async.t_cljs$core$async38077(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38078));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38077(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31439__auto___38203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___38203,mults,ensure_mult,p){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___38203,mults,ensure_mult,p){
return (function (state_38151){
var state_val_38152 = (state_38151[(1)]);
if((state_val_38152 === (7))){
var inst_38147 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38153_38204 = state_38151__$1;
(statearr_38153_38204[(2)] = inst_38147);

(statearr_38153_38204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (20))){
var state_38151__$1 = state_38151;
var statearr_38154_38205 = state_38151__$1;
(statearr_38154_38205[(2)] = null);

(statearr_38154_38205[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (1))){
var state_38151__$1 = state_38151;
var statearr_38155_38206 = state_38151__$1;
(statearr_38155_38206[(2)] = null);

(statearr_38155_38206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (24))){
var inst_38130 = (state_38151[(7)]);
var inst_38139 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38130);
var state_38151__$1 = state_38151;
var statearr_38156_38207 = state_38151__$1;
(statearr_38156_38207[(2)] = inst_38139);

(statearr_38156_38207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (4))){
var inst_38082 = (state_38151[(8)]);
var inst_38082__$1 = (state_38151[(2)]);
var inst_38083 = (inst_38082__$1 == null);
var state_38151__$1 = (function (){var statearr_38157 = state_38151;
(statearr_38157[(8)] = inst_38082__$1);

return statearr_38157;
})();
if(cljs.core.truth_(inst_38083)){
var statearr_38158_38208 = state_38151__$1;
(statearr_38158_38208[(1)] = (5));

} else {
var statearr_38159_38209 = state_38151__$1;
(statearr_38159_38209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (15))){
var inst_38124 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38160_38210 = state_38151__$1;
(statearr_38160_38210[(2)] = inst_38124);

(statearr_38160_38210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (21))){
var inst_38144 = (state_38151[(2)]);
var state_38151__$1 = (function (){var statearr_38161 = state_38151;
(statearr_38161[(9)] = inst_38144);

return statearr_38161;
})();
var statearr_38162_38211 = state_38151__$1;
(statearr_38162_38211[(2)] = null);

(statearr_38162_38211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (13))){
var inst_38106 = (state_38151[(10)]);
var inst_38108 = cljs.core.chunked_seq_QMARK_.call(null,inst_38106);
var state_38151__$1 = state_38151;
if(inst_38108){
var statearr_38163_38212 = state_38151__$1;
(statearr_38163_38212[(1)] = (16));

} else {
var statearr_38164_38213 = state_38151__$1;
(statearr_38164_38213[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (22))){
var inst_38136 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
if(cljs.core.truth_(inst_38136)){
var statearr_38165_38214 = state_38151__$1;
(statearr_38165_38214[(1)] = (23));

} else {
var statearr_38166_38215 = state_38151__$1;
(statearr_38166_38215[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (6))){
var inst_38130 = (state_38151[(7)]);
var inst_38082 = (state_38151[(8)]);
var inst_38132 = (state_38151[(11)]);
var inst_38130__$1 = topic_fn.call(null,inst_38082);
var inst_38131 = cljs.core.deref.call(null,mults);
var inst_38132__$1 = cljs.core.get.call(null,inst_38131,inst_38130__$1);
var state_38151__$1 = (function (){var statearr_38167 = state_38151;
(statearr_38167[(7)] = inst_38130__$1);

(statearr_38167[(11)] = inst_38132__$1);

return statearr_38167;
})();
if(cljs.core.truth_(inst_38132__$1)){
var statearr_38168_38216 = state_38151__$1;
(statearr_38168_38216[(1)] = (19));

} else {
var statearr_38169_38217 = state_38151__$1;
(statearr_38169_38217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (25))){
var inst_38141 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38170_38218 = state_38151__$1;
(statearr_38170_38218[(2)] = inst_38141);

(statearr_38170_38218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (17))){
var inst_38106 = (state_38151[(10)]);
var inst_38115 = cljs.core.first.call(null,inst_38106);
var inst_38116 = cljs.core.async.muxch_STAR_.call(null,inst_38115);
var inst_38117 = cljs.core.async.close_BANG_.call(null,inst_38116);
var inst_38118 = cljs.core.next.call(null,inst_38106);
var inst_38092 = inst_38118;
var inst_38093 = null;
var inst_38094 = (0);
var inst_38095 = (0);
var state_38151__$1 = (function (){var statearr_38171 = state_38151;
(statearr_38171[(12)] = inst_38093);

(statearr_38171[(13)] = inst_38094);

(statearr_38171[(14)] = inst_38117);

(statearr_38171[(15)] = inst_38092);

(statearr_38171[(16)] = inst_38095);

return statearr_38171;
})();
var statearr_38172_38219 = state_38151__$1;
(statearr_38172_38219[(2)] = null);

(statearr_38172_38219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (3))){
var inst_38149 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38151__$1,inst_38149);
} else {
if((state_val_38152 === (12))){
var inst_38126 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38173_38220 = state_38151__$1;
(statearr_38173_38220[(2)] = inst_38126);

(statearr_38173_38220[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (2))){
var state_38151__$1 = state_38151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38151__$1,(4),ch);
} else {
if((state_val_38152 === (23))){
var state_38151__$1 = state_38151;
var statearr_38174_38221 = state_38151__$1;
(statearr_38174_38221[(2)] = null);

(statearr_38174_38221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (19))){
var inst_38082 = (state_38151[(8)]);
var inst_38132 = (state_38151[(11)]);
var inst_38134 = cljs.core.async.muxch_STAR_.call(null,inst_38132);
var state_38151__$1 = state_38151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38151__$1,(22),inst_38134,inst_38082);
} else {
if((state_val_38152 === (11))){
var inst_38092 = (state_38151[(15)]);
var inst_38106 = (state_38151[(10)]);
var inst_38106__$1 = cljs.core.seq.call(null,inst_38092);
var state_38151__$1 = (function (){var statearr_38175 = state_38151;
(statearr_38175[(10)] = inst_38106__$1);

return statearr_38175;
})();
if(inst_38106__$1){
var statearr_38176_38222 = state_38151__$1;
(statearr_38176_38222[(1)] = (13));

} else {
var statearr_38177_38223 = state_38151__$1;
(statearr_38177_38223[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (9))){
var inst_38128 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38178_38224 = state_38151__$1;
(statearr_38178_38224[(2)] = inst_38128);

(statearr_38178_38224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (5))){
var inst_38089 = cljs.core.deref.call(null,mults);
var inst_38090 = cljs.core.vals.call(null,inst_38089);
var inst_38091 = cljs.core.seq.call(null,inst_38090);
var inst_38092 = inst_38091;
var inst_38093 = null;
var inst_38094 = (0);
var inst_38095 = (0);
var state_38151__$1 = (function (){var statearr_38179 = state_38151;
(statearr_38179[(12)] = inst_38093);

(statearr_38179[(13)] = inst_38094);

(statearr_38179[(15)] = inst_38092);

(statearr_38179[(16)] = inst_38095);

return statearr_38179;
})();
var statearr_38180_38225 = state_38151__$1;
(statearr_38180_38225[(2)] = null);

(statearr_38180_38225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (14))){
var state_38151__$1 = state_38151;
var statearr_38184_38226 = state_38151__$1;
(statearr_38184_38226[(2)] = null);

(statearr_38184_38226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (16))){
var inst_38106 = (state_38151[(10)]);
var inst_38110 = cljs.core.chunk_first.call(null,inst_38106);
var inst_38111 = cljs.core.chunk_rest.call(null,inst_38106);
var inst_38112 = cljs.core.count.call(null,inst_38110);
var inst_38092 = inst_38111;
var inst_38093 = inst_38110;
var inst_38094 = inst_38112;
var inst_38095 = (0);
var state_38151__$1 = (function (){var statearr_38185 = state_38151;
(statearr_38185[(12)] = inst_38093);

(statearr_38185[(13)] = inst_38094);

(statearr_38185[(15)] = inst_38092);

(statearr_38185[(16)] = inst_38095);

return statearr_38185;
})();
var statearr_38186_38227 = state_38151__$1;
(statearr_38186_38227[(2)] = null);

(statearr_38186_38227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (10))){
var inst_38093 = (state_38151[(12)]);
var inst_38094 = (state_38151[(13)]);
var inst_38092 = (state_38151[(15)]);
var inst_38095 = (state_38151[(16)]);
var inst_38100 = cljs.core._nth.call(null,inst_38093,inst_38095);
var inst_38101 = cljs.core.async.muxch_STAR_.call(null,inst_38100);
var inst_38102 = cljs.core.async.close_BANG_.call(null,inst_38101);
var inst_38103 = (inst_38095 + (1));
var tmp38181 = inst_38093;
var tmp38182 = inst_38094;
var tmp38183 = inst_38092;
var inst_38092__$1 = tmp38183;
var inst_38093__$1 = tmp38181;
var inst_38094__$1 = tmp38182;
var inst_38095__$1 = inst_38103;
var state_38151__$1 = (function (){var statearr_38187 = state_38151;
(statearr_38187[(12)] = inst_38093__$1);

(statearr_38187[(13)] = inst_38094__$1);

(statearr_38187[(15)] = inst_38092__$1);

(statearr_38187[(17)] = inst_38102);

(statearr_38187[(16)] = inst_38095__$1);

return statearr_38187;
})();
var statearr_38188_38228 = state_38151__$1;
(statearr_38188_38228[(2)] = null);

(statearr_38188_38228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (18))){
var inst_38121 = (state_38151[(2)]);
var state_38151__$1 = state_38151;
var statearr_38189_38229 = state_38151__$1;
(statearr_38189_38229[(2)] = inst_38121);

(statearr_38189_38229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38152 === (8))){
var inst_38094 = (state_38151[(13)]);
var inst_38095 = (state_38151[(16)]);
var inst_38097 = (inst_38095 < inst_38094);
var inst_38098 = inst_38097;
var state_38151__$1 = state_38151;
if(cljs.core.truth_(inst_38098)){
var statearr_38190_38230 = state_38151__$1;
(statearr_38190_38230[(1)] = (10));

} else {
var statearr_38191_38231 = state_38151__$1;
(statearr_38191_38231[(1)] = (11));

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
});})(c__31439__auto___38203,mults,ensure_mult,p))
;
return ((function (switch__31418__auto__,c__31439__auto___38203,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_38195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38195[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_38195[(1)] = (1));

return statearr_38195;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_38151){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_38151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e38196){if((e38196 instanceof Object)){
var ex__31422__auto__ = e38196;
var statearr_38197_38232 = state_38151;
(statearr_38197_38232[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38233 = state_38151;
state_38151 = G__38233;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_38151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_38151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___38203,mults,ensure_mult,p))
})();
var state__31441__auto__ = (function (){var statearr_38198 = f__31440__auto__.call(null);
(statearr_38198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___38203);

return statearr_38198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___38203,mults,ensure_mult,p))
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
var args38234 = [];
var len__30472__auto___38237 = arguments.length;
var i__30473__auto___38238 = (0);
while(true){
if((i__30473__auto___38238 < len__30472__auto___38237)){
args38234.push((arguments[i__30473__auto___38238]));

var G__38239 = (i__30473__auto___38238 + (1));
i__30473__auto___38238 = G__38239;
continue;
} else {
}
break;
}

var G__38236 = args38234.length;
switch (G__38236) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38234.length)].join('')));

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
var args38241 = [];
var len__30472__auto___38244 = arguments.length;
var i__30473__auto___38245 = (0);
while(true){
if((i__30473__auto___38245 < len__30472__auto___38244)){
args38241.push((arguments[i__30473__auto___38245]));

var G__38246 = (i__30473__auto___38245 + (1));
i__30473__auto___38245 = G__38246;
continue;
} else {
}
break;
}

var G__38243 = args38241.length;
switch (G__38243) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38241.length)].join('')));

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
var args38248 = [];
var len__30472__auto___38319 = arguments.length;
var i__30473__auto___38320 = (0);
while(true){
if((i__30473__auto___38320 < len__30472__auto___38319)){
args38248.push((arguments[i__30473__auto___38320]));

var G__38321 = (i__30473__auto___38320 + (1));
i__30473__auto___38320 = G__38321;
continue;
} else {
}
break;
}

var G__38250 = args38248.length;
switch (G__38250) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38248.length)].join('')));

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
var c__31439__auto___38323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___38323,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___38323,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38289){
var state_val_38290 = (state_38289[(1)]);
if((state_val_38290 === (7))){
var state_38289__$1 = state_38289;
var statearr_38291_38324 = state_38289__$1;
(statearr_38291_38324[(2)] = null);

(statearr_38291_38324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38290 === (1))){
var state_38289__$1 = state_38289;
var statearr_38292_38325 = state_38289__$1;
(statearr_38292_38325[(2)] = null);

(statearr_38292_38325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38290 === (4))){
var inst_38253 = (state_38289[(7)]);
var inst_38255 = (inst_38253 < cnt);
var state_38289__$1 = state_38289;
if(cljs.core.truth_(inst_38255)){
var statearr_38293_38326 = state_38289__$1;
(statearr_38293_38326[(1)] = (6));

} else {
var statearr_38294_38327 = state_38289__$1;
(statearr_38294_38327[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38290 === (15))){
var inst_38285 = (state_38289[(2)]);
var state_38289__$1 = state_38289;
var statearr_38295_38328 = state_38289__$1;
(statearr_38295_38328[(2)] = inst_38285);

(statearr_38295_38328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38290 === (13))){
var inst_38278 = cljs.core.async.close_BANG_.call(null,out);
var state_38289__$1 = state_38289;
var statearr_38296_38329 = state_38289__$1;
(statearr_38296_38329[(2)] = inst_38278);

(statearr_38296_38329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38290 === (6))){
var state_38289__$1 = state_38289;
var statearr_38297_38330 = state_38289__$1;
(statearr_38297_38330[(2)] = null);

(statearr_38297_38330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38290 === (3))){
var inst_38287 = (state_38289[(2)]);
var state_38289__$1 = state_38289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38289__$1,inst_38287);
} else {
if((state_val_38290 === (12))){
var inst_38275 = (state_38289[(8)]);
var inst_38275__$1 = (state_38289[(2)]);
var inst_38276 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38275__$1);
var state_38289__$1 = (function (){var statearr_38298 = state_38289;
(statearr_38298[(8)] = inst_38275__$1);

return statearr_38298;
})();
if(cljs.core.truth_(inst_38276)){
var statearr_38299_38331 = state_38289__$1;
(statearr_38299_38331[(1)] = (13));

} else {
var statearr_38300_38332 = state_38289__$1;
(statearr_38300_38332[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38290 === (2))){
var inst_38252 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38253 = (0);
var state_38289__$1 = (function (){var statearr_38301 = state_38289;
(statearr_38301[(7)] = inst_38253);

(statearr_38301[(9)] = inst_38252);

return statearr_38301;
})();
var statearr_38302_38333 = state_38289__$1;
(statearr_38302_38333[(2)] = null);

(statearr_38302_38333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38290 === (11))){
var inst_38253 = (state_38289[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38289,(10),Object,null,(9));
var inst_38262 = chs__$1.call(null,inst_38253);
var inst_38263 = done.call(null,inst_38253);
var inst_38264 = cljs.core.async.take_BANG_.call(null,inst_38262,inst_38263);
var state_38289__$1 = state_38289;
var statearr_38303_38334 = state_38289__$1;
(statearr_38303_38334[(2)] = inst_38264);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38290 === (9))){
var inst_38253 = (state_38289[(7)]);
var inst_38266 = (state_38289[(2)]);
var inst_38267 = (inst_38253 + (1));
var inst_38253__$1 = inst_38267;
var state_38289__$1 = (function (){var statearr_38304 = state_38289;
(statearr_38304[(7)] = inst_38253__$1);

(statearr_38304[(10)] = inst_38266);

return statearr_38304;
})();
var statearr_38305_38335 = state_38289__$1;
(statearr_38305_38335[(2)] = null);

(statearr_38305_38335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38290 === (5))){
var inst_38273 = (state_38289[(2)]);
var state_38289__$1 = (function (){var statearr_38306 = state_38289;
(statearr_38306[(11)] = inst_38273);

return statearr_38306;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38289__$1,(12),dchan);
} else {
if((state_val_38290 === (14))){
var inst_38275 = (state_38289[(8)]);
var inst_38280 = cljs.core.apply.call(null,f,inst_38275);
var state_38289__$1 = state_38289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38289__$1,(16),out,inst_38280);
} else {
if((state_val_38290 === (16))){
var inst_38282 = (state_38289[(2)]);
var state_38289__$1 = (function (){var statearr_38307 = state_38289;
(statearr_38307[(12)] = inst_38282);

return statearr_38307;
})();
var statearr_38308_38336 = state_38289__$1;
(statearr_38308_38336[(2)] = null);

(statearr_38308_38336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38290 === (10))){
var inst_38257 = (state_38289[(2)]);
var inst_38258 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38289__$1 = (function (){var statearr_38309 = state_38289;
(statearr_38309[(13)] = inst_38257);

return statearr_38309;
})();
var statearr_38310_38337 = state_38289__$1;
(statearr_38310_38337[(2)] = inst_38258);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38290 === (8))){
var inst_38271 = (state_38289[(2)]);
var state_38289__$1 = state_38289;
var statearr_38311_38338 = state_38289__$1;
(statearr_38311_38338[(2)] = inst_38271);

(statearr_38311_38338[(1)] = (5));


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
});})(c__31439__auto___38323,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31418__auto__,c__31439__auto___38323,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_38315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38315[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_38315[(1)] = (1));

return statearr_38315;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_38289){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_38289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e38316){if((e38316 instanceof Object)){
var ex__31422__auto__ = e38316;
var statearr_38317_38339 = state_38289;
(statearr_38317_38339[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38340 = state_38289;
state_38289 = G__38340;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_38289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_38289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___38323,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31441__auto__ = (function (){var statearr_38318 = f__31440__auto__.call(null);
(statearr_38318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___38323);

return statearr_38318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___38323,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args38342 = [];
var len__30472__auto___38398 = arguments.length;
var i__30473__auto___38399 = (0);
while(true){
if((i__30473__auto___38399 < len__30472__auto___38398)){
args38342.push((arguments[i__30473__auto___38399]));

var G__38400 = (i__30473__auto___38399 + (1));
i__30473__auto___38399 = G__38400;
continue;
} else {
}
break;
}

var G__38344 = args38342.length;
switch (G__38344) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38342.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31439__auto___38402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___38402,out){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___38402,out){
return (function (state_38374){
var state_val_38375 = (state_38374[(1)]);
if((state_val_38375 === (7))){
var inst_38354 = (state_38374[(7)]);
var inst_38353 = (state_38374[(8)]);
var inst_38353__$1 = (state_38374[(2)]);
var inst_38354__$1 = cljs.core.nth.call(null,inst_38353__$1,(0),null);
var inst_38355 = cljs.core.nth.call(null,inst_38353__$1,(1),null);
var inst_38356 = (inst_38354__$1 == null);
var state_38374__$1 = (function (){var statearr_38376 = state_38374;
(statearr_38376[(7)] = inst_38354__$1);

(statearr_38376[(9)] = inst_38355);

(statearr_38376[(8)] = inst_38353__$1);

return statearr_38376;
})();
if(cljs.core.truth_(inst_38356)){
var statearr_38377_38403 = state_38374__$1;
(statearr_38377_38403[(1)] = (8));

} else {
var statearr_38378_38404 = state_38374__$1;
(statearr_38378_38404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38375 === (1))){
var inst_38345 = cljs.core.vec.call(null,chs);
var inst_38346 = inst_38345;
var state_38374__$1 = (function (){var statearr_38379 = state_38374;
(statearr_38379[(10)] = inst_38346);

return statearr_38379;
})();
var statearr_38380_38405 = state_38374__$1;
(statearr_38380_38405[(2)] = null);

(statearr_38380_38405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38375 === (4))){
var inst_38346 = (state_38374[(10)]);
var state_38374__$1 = state_38374;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38374__$1,(7),inst_38346);
} else {
if((state_val_38375 === (6))){
var inst_38370 = (state_38374[(2)]);
var state_38374__$1 = state_38374;
var statearr_38381_38406 = state_38374__$1;
(statearr_38381_38406[(2)] = inst_38370);

(statearr_38381_38406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38375 === (3))){
var inst_38372 = (state_38374[(2)]);
var state_38374__$1 = state_38374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38374__$1,inst_38372);
} else {
if((state_val_38375 === (2))){
var inst_38346 = (state_38374[(10)]);
var inst_38348 = cljs.core.count.call(null,inst_38346);
var inst_38349 = (inst_38348 > (0));
var state_38374__$1 = state_38374;
if(cljs.core.truth_(inst_38349)){
var statearr_38383_38407 = state_38374__$1;
(statearr_38383_38407[(1)] = (4));

} else {
var statearr_38384_38408 = state_38374__$1;
(statearr_38384_38408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38375 === (11))){
var inst_38346 = (state_38374[(10)]);
var inst_38363 = (state_38374[(2)]);
var tmp38382 = inst_38346;
var inst_38346__$1 = tmp38382;
var state_38374__$1 = (function (){var statearr_38385 = state_38374;
(statearr_38385[(11)] = inst_38363);

(statearr_38385[(10)] = inst_38346__$1);

return statearr_38385;
})();
var statearr_38386_38409 = state_38374__$1;
(statearr_38386_38409[(2)] = null);

(statearr_38386_38409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38375 === (9))){
var inst_38354 = (state_38374[(7)]);
var state_38374__$1 = state_38374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38374__$1,(11),out,inst_38354);
} else {
if((state_val_38375 === (5))){
var inst_38368 = cljs.core.async.close_BANG_.call(null,out);
var state_38374__$1 = state_38374;
var statearr_38387_38410 = state_38374__$1;
(statearr_38387_38410[(2)] = inst_38368);

(statearr_38387_38410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38375 === (10))){
var inst_38366 = (state_38374[(2)]);
var state_38374__$1 = state_38374;
var statearr_38388_38411 = state_38374__$1;
(statearr_38388_38411[(2)] = inst_38366);

(statearr_38388_38411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38375 === (8))){
var inst_38354 = (state_38374[(7)]);
var inst_38346 = (state_38374[(10)]);
var inst_38355 = (state_38374[(9)]);
var inst_38353 = (state_38374[(8)]);
var inst_38358 = (function (){var cs = inst_38346;
var vec__38351 = inst_38353;
var v = inst_38354;
var c = inst_38355;
return ((function (cs,vec__38351,v,c,inst_38354,inst_38346,inst_38355,inst_38353,state_val_38375,c__31439__auto___38402,out){
return (function (p1__38341_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38341_SHARP_);
});
;})(cs,vec__38351,v,c,inst_38354,inst_38346,inst_38355,inst_38353,state_val_38375,c__31439__auto___38402,out))
})();
var inst_38359 = cljs.core.filterv.call(null,inst_38358,inst_38346);
var inst_38346__$1 = inst_38359;
var state_38374__$1 = (function (){var statearr_38389 = state_38374;
(statearr_38389[(10)] = inst_38346__$1);

return statearr_38389;
})();
var statearr_38390_38412 = state_38374__$1;
(statearr_38390_38412[(2)] = null);

(statearr_38390_38412[(1)] = (2));


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
});})(c__31439__auto___38402,out))
;
return ((function (switch__31418__auto__,c__31439__auto___38402,out){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_38394 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38394[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_38394[(1)] = (1));

return statearr_38394;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_38374){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_38374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e38395){if((e38395 instanceof Object)){
var ex__31422__auto__ = e38395;
var statearr_38396_38413 = state_38374;
(statearr_38396_38413[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38414 = state_38374;
state_38374 = G__38414;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_38374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_38374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___38402,out))
})();
var state__31441__auto__ = (function (){var statearr_38397 = f__31440__auto__.call(null);
(statearr_38397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___38402);

return statearr_38397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___38402,out))
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
var args38415 = [];
var len__30472__auto___38464 = arguments.length;
var i__30473__auto___38465 = (0);
while(true){
if((i__30473__auto___38465 < len__30472__auto___38464)){
args38415.push((arguments[i__30473__auto___38465]));

var G__38466 = (i__30473__auto___38465 + (1));
i__30473__auto___38465 = G__38466;
continue;
} else {
}
break;
}

var G__38417 = args38415.length;
switch (G__38417) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38415.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31439__auto___38468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___38468,out){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___38468,out){
return (function (state_38441){
var state_val_38442 = (state_38441[(1)]);
if((state_val_38442 === (7))){
var inst_38423 = (state_38441[(7)]);
var inst_38423__$1 = (state_38441[(2)]);
var inst_38424 = (inst_38423__$1 == null);
var inst_38425 = cljs.core.not.call(null,inst_38424);
var state_38441__$1 = (function (){var statearr_38443 = state_38441;
(statearr_38443[(7)] = inst_38423__$1);

return statearr_38443;
})();
if(inst_38425){
var statearr_38444_38469 = state_38441__$1;
(statearr_38444_38469[(1)] = (8));

} else {
var statearr_38445_38470 = state_38441__$1;
(statearr_38445_38470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (1))){
var inst_38418 = (0);
var state_38441__$1 = (function (){var statearr_38446 = state_38441;
(statearr_38446[(8)] = inst_38418);

return statearr_38446;
})();
var statearr_38447_38471 = state_38441__$1;
(statearr_38447_38471[(2)] = null);

(statearr_38447_38471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (4))){
var state_38441__$1 = state_38441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38441__$1,(7),ch);
} else {
if((state_val_38442 === (6))){
var inst_38436 = (state_38441[(2)]);
var state_38441__$1 = state_38441;
var statearr_38448_38472 = state_38441__$1;
(statearr_38448_38472[(2)] = inst_38436);

(statearr_38448_38472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (3))){
var inst_38438 = (state_38441[(2)]);
var inst_38439 = cljs.core.async.close_BANG_.call(null,out);
var state_38441__$1 = (function (){var statearr_38449 = state_38441;
(statearr_38449[(9)] = inst_38438);

return statearr_38449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38441__$1,inst_38439);
} else {
if((state_val_38442 === (2))){
var inst_38418 = (state_38441[(8)]);
var inst_38420 = (inst_38418 < n);
var state_38441__$1 = state_38441;
if(cljs.core.truth_(inst_38420)){
var statearr_38450_38473 = state_38441__$1;
(statearr_38450_38473[(1)] = (4));

} else {
var statearr_38451_38474 = state_38441__$1;
(statearr_38451_38474[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (11))){
var inst_38418 = (state_38441[(8)]);
var inst_38428 = (state_38441[(2)]);
var inst_38429 = (inst_38418 + (1));
var inst_38418__$1 = inst_38429;
var state_38441__$1 = (function (){var statearr_38452 = state_38441;
(statearr_38452[(8)] = inst_38418__$1);

(statearr_38452[(10)] = inst_38428);

return statearr_38452;
})();
var statearr_38453_38475 = state_38441__$1;
(statearr_38453_38475[(2)] = null);

(statearr_38453_38475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (9))){
var state_38441__$1 = state_38441;
var statearr_38454_38476 = state_38441__$1;
(statearr_38454_38476[(2)] = null);

(statearr_38454_38476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (5))){
var state_38441__$1 = state_38441;
var statearr_38455_38477 = state_38441__$1;
(statearr_38455_38477[(2)] = null);

(statearr_38455_38477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (10))){
var inst_38433 = (state_38441[(2)]);
var state_38441__$1 = state_38441;
var statearr_38456_38478 = state_38441__$1;
(statearr_38456_38478[(2)] = inst_38433);

(statearr_38456_38478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (8))){
var inst_38423 = (state_38441[(7)]);
var state_38441__$1 = state_38441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38441__$1,(11),out,inst_38423);
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
});})(c__31439__auto___38468,out))
;
return ((function (switch__31418__auto__,c__31439__auto___38468,out){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_38460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38460[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_38460[(1)] = (1));

return statearr_38460;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_38441){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_38441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e38461){if((e38461 instanceof Object)){
var ex__31422__auto__ = e38461;
var statearr_38462_38479 = state_38441;
(statearr_38462_38479[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38480 = state_38441;
state_38441 = G__38480;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_38441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_38441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___38468,out))
})();
var state__31441__auto__ = (function (){var statearr_38463 = f__31440__auto__.call(null);
(statearr_38463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___38468);

return statearr_38463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___38468,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38488 = (function (map_LT_,f,ch,meta38489){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38489 = meta38489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38490,meta38489__$1){
var self__ = this;
var _38490__$1 = this;
return (new cljs.core.async.t_cljs$core$async38488(self__.map_LT_,self__.f,self__.ch,meta38489__$1));
});

cljs.core.async.t_cljs$core$async38488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38490){
var self__ = this;
var _38490__$1 = this;
return self__.meta38489;
});

cljs.core.async.t_cljs$core$async38488.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38488.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38488.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38491 = (function (map_LT_,f,ch,meta38489,_,fn1,meta38492){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38489 = meta38489;
this._ = _;
this.fn1 = fn1;
this.meta38492 = meta38492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38493,meta38492__$1){
var self__ = this;
var _38493__$1 = this;
return (new cljs.core.async.t_cljs$core$async38491(self__.map_LT_,self__.f,self__.ch,self__.meta38489,self__._,self__.fn1,meta38492__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38493){
var self__ = this;
var _38493__$1 = this;
return self__.meta38492;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38491.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38481_SHARP_){
return f1.call(null,(((p1__38481_SHARP_ == null))?null:self__.f.call(null,p1__38481_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38491.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38489","meta38489",453272079,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38488","cljs.core.async/t_cljs$core$async38488",-2055823293,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38492","meta38492",1898403679,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38491";

cljs.core.async.t_cljs$core$async38491.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30012__auto__,writer__30013__auto__,opt__30014__auto__){
return cljs.core._write.call(null,writer__30013__auto__,"cljs.core.async/t_cljs$core$async38491");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38491 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38491(map_LT___$1,f__$1,ch__$1,meta38489__$1,___$2,fn1__$1,meta38492){
return (new cljs.core.async.t_cljs$core$async38491(map_LT___$1,f__$1,ch__$1,meta38489__$1,___$2,fn1__$1,meta38492));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38491(self__.map_LT_,self__.f,self__.ch,self__.meta38489,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__29402__auto__ = ret;
if(cljs.core.truth_(and__29402__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__29402__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38488.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38489","meta38489",453272079,null)], null);
});

cljs.core.async.t_cljs$core$async38488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38488";

cljs.core.async.t_cljs$core$async38488.cljs$lang$ctorPrWriter = (function (this__30012__auto__,writer__30013__auto__,opt__30014__auto__){
return cljs.core._write.call(null,writer__30013__auto__,"cljs.core.async/t_cljs$core$async38488");
});

cljs.core.async.__GT_t_cljs$core$async38488 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38488(map_LT___$1,f__$1,ch__$1,meta38489){
return (new cljs.core.async.t_cljs$core$async38488(map_LT___$1,f__$1,ch__$1,meta38489));
});

}

return (new cljs.core.async.t_cljs$core$async38488(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38497 = (function (map_GT_,f,ch,meta38498){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38498 = meta38498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38499,meta38498__$1){
var self__ = this;
var _38499__$1 = this;
return (new cljs.core.async.t_cljs$core$async38497(self__.map_GT_,self__.f,self__.ch,meta38498__$1));
});

cljs.core.async.t_cljs$core$async38497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38499){
var self__ = this;
var _38499__$1 = this;
return self__.meta38498;
});

cljs.core.async.t_cljs$core$async38497.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38497.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38497.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38498","meta38498",-2023636226,null)], null);
});

cljs.core.async.t_cljs$core$async38497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38497";

cljs.core.async.t_cljs$core$async38497.cljs$lang$ctorPrWriter = (function (this__30012__auto__,writer__30013__auto__,opt__30014__auto__){
return cljs.core._write.call(null,writer__30013__auto__,"cljs.core.async/t_cljs$core$async38497");
});

cljs.core.async.__GT_t_cljs$core$async38497 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38497(map_GT___$1,f__$1,ch__$1,meta38498){
return (new cljs.core.async.t_cljs$core$async38497(map_GT___$1,f__$1,ch__$1,meta38498));
});

}

return (new cljs.core.async.t_cljs$core$async38497(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38503 = (function (filter_GT_,p,ch,meta38504){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38504 = meta38504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38505,meta38504__$1){
var self__ = this;
var _38505__$1 = this;
return (new cljs.core.async.t_cljs$core$async38503(self__.filter_GT_,self__.p,self__.ch,meta38504__$1));
});

cljs.core.async.t_cljs$core$async38503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38505){
var self__ = this;
var _38505__$1 = this;
return self__.meta38504;
});

cljs.core.async.t_cljs$core$async38503.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38503.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38503.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38503.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38503.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38503.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38503.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38504","meta38504",1066465745,null)], null);
});

cljs.core.async.t_cljs$core$async38503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38503";

cljs.core.async.t_cljs$core$async38503.cljs$lang$ctorPrWriter = (function (this__30012__auto__,writer__30013__auto__,opt__30014__auto__){
return cljs.core._write.call(null,writer__30013__auto__,"cljs.core.async/t_cljs$core$async38503");
});

cljs.core.async.__GT_t_cljs$core$async38503 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38503(filter_GT___$1,p__$1,ch__$1,meta38504){
return (new cljs.core.async.t_cljs$core$async38503(filter_GT___$1,p__$1,ch__$1,meta38504));
});

}

return (new cljs.core.async.t_cljs$core$async38503(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args38506 = [];
var len__30472__auto___38550 = arguments.length;
var i__30473__auto___38551 = (0);
while(true){
if((i__30473__auto___38551 < len__30472__auto___38550)){
args38506.push((arguments[i__30473__auto___38551]));

var G__38552 = (i__30473__auto___38551 + (1));
i__30473__auto___38551 = G__38552;
continue;
} else {
}
break;
}

var G__38508 = args38506.length;
switch (G__38508) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38506.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31439__auto___38554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___38554,out){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___38554,out){
return (function (state_38529){
var state_val_38530 = (state_38529[(1)]);
if((state_val_38530 === (7))){
var inst_38525 = (state_38529[(2)]);
var state_38529__$1 = state_38529;
var statearr_38531_38555 = state_38529__$1;
(statearr_38531_38555[(2)] = inst_38525);

(statearr_38531_38555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38530 === (1))){
var state_38529__$1 = state_38529;
var statearr_38532_38556 = state_38529__$1;
(statearr_38532_38556[(2)] = null);

(statearr_38532_38556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38530 === (4))){
var inst_38511 = (state_38529[(7)]);
var inst_38511__$1 = (state_38529[(2)]);
var inst_38512 = (inst_38511__$1 == null);
var state_38529__$1 = (function (){var statearr_38533 = state_38529;
(statearr_38533[(7)] = inst_38511__$1);

return statearr_38533;
})();
if(cljs.core.truth_(inst_38512)){
var statearr_38534_38557 = state_38529__$1;
(statearr_38534_38557[(1)] = (5));

} else {
var statearr_38535_38558 = state_38529__$1;
(statearr_38535_38558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38530 === (6))){
var inst_38511 = (state_38529[(7)]);
var inst_38516 = p.call(null,inst_38511);
var state_38529__$1 = state_38529;
if(cljs.core.truth_(inst_38516)){
var statearr_38536_38559 = state_38529__$1;
(statearr_38536_38559[(1)] = (8));

} else {
var statearr_38537_38560 = state_38529__$1;
(statearr_38537_38560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38530 === (3))){
var inst_38527 = (state_38529[(2)]);
var state_38529__$1 = state_38529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38529__$1,inst_38527);
} else {
if((state_val_38530 === (2))){
var state_38529__$1 = state_38529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38529__$1,(4),ch);
} else {
if((state_val_38530 === (11))){
var inst_38519 = (state_38529[(2)]);
var state_38529__$1 = state_38529;
var statearr_38538_38561 = state_38529__$1;
(statearr_38538_38561[(2)] = inst_38519);

(statearr_38538_38561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38530 === (9))){
var state_38529__$1 = state_38529;
var statearr_38539_38562 = state_38529__$1;
(statearr_38539_38562[(2)] = null);

(statearr_38539_38562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38530 === (5))){
var inst_38514 = cljs.core.async.close_BANG_.call(null,out);
var state_38529__$1 = state_38529;
var statearr_38540_38563 = state_38529__$1;
(statearr_38540_38563[(2)] = inst_38514);

(statearr_38540_38563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38530 === (10))){
var inst_38522 = (state_38529[(2)]);
var state_38529__$1 = (function (){var statearr_38541 = state_38529;
(statearr_38541[(8)] = inst_38522);

return statearr_38541;
})();
var statearr_38542_38564 = state_38529__$1;
(statearr_38542_38564[(2)] = null);

(statearr_38542_38564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38530 === (8))){
var inst_38511 = (state_38529[(7)]);
var state_38529__$1 = state_38529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38529__$1,(11),out,inst_38511);
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
});})(c__31439__auto___38554,out))
;
return ((function (switch__31418__auto__,c__31439__auto___38554,out){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_38546 = [null,null,null,null,null,null,null,null,null];
(statearr_38546[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_38546[(1)] = (1));

return statearr_38546;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_38529){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_38529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e38547){if((e38547 instanceof Object)){
var ex__31422__auto__ = e38547;
var statearr_38548_38565 = state_38529;
(statearr_38548_38565[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38566 = state_38529;
state_38529 = G__38566;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_38529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_38529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___38554,out))
})();
var state__31441__auto__ = (function (){var statearr_38549 = f__31440__auto__.call(null);
(statearr_38549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___38554);

return statearr_38549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___38554,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38567 = [];
var len__30472__auto___38570 = arguments.length;
var i__30473__auto___38571 = (0);
while(true){
if((i__30473__auto___38571 < len__30472__auto___38570)){
args38567.push((arguments[i__30473__auto___38571]));

var G__38572 = (i__30473__auto___38571 + (1));
i__30473__auto___38571 = G__38572;
continue;
} else {
}
break;
}

var G__38569 = args38567.length;
switch (G__38569) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38567.length)].join('')));

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
var c__31439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto__){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto__){
return (function (state_38739){
var state_val_38740 = (state_38739[(1)]);
if((state_val_38740 === (7))){
var inst_38735 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
var statearr_38741_38782 = state_38739__$1;
(statearr_38741_38782[(2)] = inst_38735);

(statearr_38741_38782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (20))){
var inst_38705 = (state_38739[(7)]);
var inst_38716 = (state_38739[(2)]);
var inst_38717 = cljs.core.next.call(null,inst_38705);
var inst_38691 = inst_38717;
var inst_38692 = null;
var inst_38693 = (0);
var inst_38694 = (0);
var state_38739__$1 = (function (){var statearr_38742 = state_38739;
(statearr_38742[(8)] = inst_38692);

(statearr_38742[(9)] = inst_38716);

(statearr_38742[(10)] = inst_38694);

(statearr_38742[(11)] = inst_38693);

(statearr_38742[(12)] = inst_38691);

return statearr_38742;
})();
var statearr_38743_38783 = state_38739__$1;
(statearr_38743_38783[(2)] = null);

(statearr_38743_38783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (1))){
var state_38739__$1 = state_38739;
var statearr_38744_38784 = state_38739__$1;
(statearr_38744_38784[(2)] = null);

(statearr_38744_38784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (4))){
var inst_38680 = (state_38739[(13)]);
var inst_38680__$1 = (state_38739[(2)]);
var inst_38681 = (inst_38680__$1 == null);
var state_38739__$1 = (function (){var statearr_38745 = state_38739;
(statearr_38745[(13)] = inst_38680__$1);

return statearr_38745;
})();
if(cljs.core.truth_(inst_38681)){
var statearr_38746_38785 = state_38739__$1;
(statearr_38746_38785[(1)] = (5));

} else {
var statearr_38747_38786 = state_38739__$1;
(statearr_38747_38786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (15))){
var state_38739__$1 = state_38739;
var statearr_38751_38787 = state_38739__$1;
(statearr_38751_38787[(2)] = null);

(statearr_38751_38787[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (21))){
var state_38739__$1 = state_38739;
var statearr_38752_38788 = state_38739__$1;
(statearr_38752_38788[(2)] = null);

(statearr_38752_38788[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (13))){
var inst_38692 = (state_38739[(8)]);
var inst_38694 = (state_38739[(10)]);
var inst_38693 = (state_38739[(11)]);
var inst_38691 = (state_38739[(12)]);
var inst_38701 = (state_38739[(2)]);
var inst_38702 = (inst_38694 + (1));
var tmp38748 = inst_38692;
var tmp38749 = inst_38693;
var tmp38750 = inst_38691;
var inst_38691__$1 = tmp38750;
var inst_38692__$1 = tmp38748;
var inst_38693__$1 = tmp38749;
var inst_38694__$1 = inst_38702;
var state_38739__$1 = (function (){var statearr_38753 = state_38739;
(statearr_38753[(8)] = inst_38692__$1);

(statearr_38753[(10)] = inst_38694__$1);

(statearr_38753[(11)] = inst_38693__$1);

(statearr_38753[(14)] = inst_38701);

(statearr_38753[(12)] = inst_38691__$1);

return statearr_38753;
})();
var statearr_38754_38789 = state_38739__$1;
(statearr_38754_38789[(2)] = null);

(statearr_38754_38789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (22))){
var state_38739__$1 = state_38739;
var statearr_38755_38790 = state_38739__$1;
(statearr_38755_38790[(2)] = null);

(statearr_38755_38790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (6))){
var inst_38680 = (state_38739[(13)]);
var inst_38689 = f.call(null,inst_38680);
var inst_38690 = cljs.core.seq.call(null,inst_38689);
var inst_38691 = inst_38690;
var inst_38692 = null;
var inst_38693 = (0);
var inst_38694 = (0);
var state_38739__$1 = (function (){var statearr_38756 = state_38739;
(statearr_38756[(8)] = inst_38692);

(statearr_38756[(10)] = inst_38694);

(statearr_38756[(11)] = inst_38693);

(statearr_38756[(12)] = inst_38691);

return statearr_38756;
})();
var statearr_38757_38791 = state_38739__$1;
(statearr_38757_38791[(2)] = null);

(statearr_38757_38791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (17))){
var inst_38705 = (state_38739[(7)]);
var inst_38709 = cljs.core.chunk_first.call(null,inst_38705);
var inst_38710 = cljs.core.chunk_rest.call(null,inst_38705);
var inst_38711 = cljs.core.count.call(null,inst_38709);
var inst_38691 = inst_38710;
var inst_38692 = inst_38709;
var inst_38693 = inst_38711;
var inst_38694 = (0);
var state_38739__$1 = (function (){var statearr_38758 = state_38739;
(statearr_38758[(8)] = inst_38692);

(statearr_38758[(10)] = inst_38694);

(statearr_38758[(11)] = inst_38693);

(statearr_38758[(12)] = inst_38691);

return statearr_38758;
})();
var statearr_38759_38792 = state_38739__$1;
(statearr_38759_38792[(2)] = null);

(statearr_38759_38792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (3))){
var inst_38737 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38739__$1,inst_38737);
} else {
if((state_val_38740 === (12))){
var inst_38725 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
var statearr_38760_38793 = state_38739__$1;
(statearr_38760_38793[(2)] = inst_38725);

(statearr_38760_38793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (2))){
var state_38739__$1 = state_38739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38739__$1,(4),in$);
} else {
if((state_val_38740 === (23))){
var inst_38733 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
var statearr_38761_38794 = state_38739__$1;
(statearr_38761_38794[(2)] = inst_38733);

(statearr_38761_38794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (19))){
var inst_38720 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
var statearr_38762_38795 = state_38739__$1;
(statearr_38762_38795[(2)] = inst_38720);

(statearr_38762_38795[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (11))){
var inst_38705 = (state_38739[(7)]);
var inst_38691 = (state_38739[(12)]);
var inst_38705__$1 = cljs.core.seq.call(null,inst_38691);
var state_38739__$1 = (function (){var statearr_38763 = state_38739;
(statearr_38763[(7)] = inst_38705__$1);

return statearr_38763;
})();
if(inst_38705__$1){
var statearr_38764_38796 = state_38739__$1;
(statearr_38764_38796[(1)] = (14));

} else {
var statearr_38765_38797 = state_38739__$1;
(statearr_38765_38797[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (9))){
var inst_38727 = (state_38739[(2)]);
var inst_38728 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38739__$1 = (function (){var statearr_38766 = state_38739;
(statearr_38766[(15)] = inst_38727);

return statearr_38766;
})();
if(cljs.core.truth_(inst_38728)){
var statearr_38767_38798 = state_38739__$1;
(statearr_38767_38798[(1)] = (21));

} else {
var statearr_38768_38799 = state_38739__$1;
(statearr_38768_38799[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (5))){
var inst_38683 = cljs.core.async.close_BANG_.call(null,out);
var state_38739__$1 = state_38739;
var statearr_38769_38800 = state_38739__$1;
(statearr_38769_38800[(2)] = inst_38683);

(statearr_38769_38800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (14))){
var inst_38705 = (state_38739[(7)]);
var inst_38707 = cljs.core.chunked_seq_QMARK_.call(null,inst_38705);
var state_38739__$1 = state_38739;
if(inst_38707){
var statearr_38770_38801 = state_38739__$1;
(statearr_38770_38801[(1)] = (17));

} else {
var statearr_38771_38802 = state_38739__$1;
(statearr_38771_38802[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (16))){
var inst_38723 = (state_38739[(2)]);
var state_38739__$1 = state_38739;
var statearr_38772_38803 = state_38739__$1;
(statearr_38772_38803[(2)] = inst_38723);

(statearr_38772_38803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38740 === (10))){
var inst_38692 = (state_38739[(8)]);
var inst_38694 = (state_38739[(10)]);
var inst_38699 = cljs.core._nth.call(null,inst_38692,inst_38694);
var state_38739__$1 = state_38739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38739__$1,(13),out,inst_38699);
} else {
if((state_val_38740 === (18))){
var inst_38705 = (state_38739[(7)]);
var inst_38714 = cljs.core.first.call(null,inst_38705);
var state_38739__$1 = state_38739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38739__$1,(20),out,inst_38714);
} else {
if((state_val_38740 === (8))){
var inst_38694 = (state_38739[(10)]);
var inst_38693 = (state_38739[(11)]);
var inst_38696 = (inst_38694 < inst_38693);
var inst_38697 = inst_38696;
var state_38739__$1 = state_38739;
if(cljs.core.truth_(inst_38697)){
var statearr_38773_38804 = state_38739__$1;
(statearr_38773_38804[(1)] = (10));

} else {
var statearr_38774_38805 = state_38739__$1;
(statearr_38774_38805[(1)] = (11));

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
});})(c__31439__auto__))
;
return ((function (switch__31418__auto__,c__31439__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31419__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31419__auto____0 = (function (){
var statearr_38778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38778[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31419__auto__);

(statearr_38778[(1)] = (1));

return statearr_38778;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31419__auto____1 = (function (state_38739){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_38739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e38779){if((e38779 instanceof Object)){
var ex__31422__auto__ = e38779;
var statearr_38780_38806 = state_38739;
(statearr_38780_38806[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38807 = state_38739;
state_38739 = G__38807;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31419__auto__ = function(state_38739){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31419__auto____1.call(this,state_38739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31419__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31419__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto__))
})();
var state__31441__auto__ = (function (){var statearr_38781 = f__31440__auto__.call(null);
(statearr_38781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto__);

return statearr_38781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto__))
);

return c__31439__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args38808 = [];
var len__30472__auto___38811 = arguments.length;
var i__30473__auto___38812 = (0);
while(true){
if((i__30473__auto___38812 < len__30472__auto___38811)){
args38808.push((arguments[i__30473__auto___38812]));

var G__38813 = (i__30473__auto___38812 + (1));
i__30473__auto___38812 = G__38813;
continue;
} else {
}
break;
}

var G__38810 = args38808.length;
switch (G__38810) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38808.length)].join('')));

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
var args38815 = [];
var len__30472__auto___38818 = arguments.length;
var i__30473__auto___38819 = (0);
while(true){
if((i__30473__auto___38819 < len__30472__auto___38818)){
args38815.push((arguments[i__30473__auto___38819]));

var G__38820 = (i__30473__auto___38819 + (1));
i__30473__auto___38819 = G__38820;
continue;
} else {
}
break;
}

var G__38817 = args38815.length;
switch (G__38817) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38815.length)].join('')));

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
var args38822 = [];
var len__30472__auto___38873 = arguments.length;
var i__30473__auto___38874 = (0);
while(true){
if((i__30473__auto___38874 < len__30472__auto___38873)){
args38822.push((arguments[i__30473__auto___38874]));

var G__38875 = (i__30473__auto___38874 + (1));
i__30473__auto___38874 = G__38875;
continue;
} else {
}
break;
}

var G__38824 = args38822.length;
switch (G__38824) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38822.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31439__auto___38877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___38877,out){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___38877,out){
return (function (state_38848){
var state_val_38849 = (state_38848[(1)]);
if((state_val_38849 === (7))){
var inst_38843 = (state_38848[(2)]);
var state_38848__$1 = state_38848;
var statearr_38850_38878 = state_38848__$1;
(statearr_38850_38878[(2)] = inst_38843);

(statearr_38850_38878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38849 === (1))){
var inst_38825 = null;
var state_38848__$1 = (function (){var statearr_38851 = state_38848;
(statearr_38851[(7)] = inst_38825);

return statearr_38851;
})();
var statearr_38852_38879 = state_38848__$1;
(statearr_38852_38879[(2)] = null);

(statearr_38852_38879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38849 === (4))){
var inst_38828 = (state_38848[(8)]);
var inst_38828__$1 = (state_38848[(2)]);
var inst_38829 = (inst_38828__$1 == null);
var inst_38830 = cljs.core.not.call(null,inst_38829);
var state_38848__$1 = (function (){var statearr_38853 = state_38848;
(statearr_38853[(8)] = inst_38828__$1);

return statearr_38853;
})();
if(inst_38830){
var statearr_38854_38880 = state_38848__$1;
(statearr_38854_38880[(1)] = (5));

} else {
var statearr_38855_38881 = state_38848__$1;
(statearr_38855_38881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38849 === (6))){
var state_38848__$1 = state_38848;
var statearr_38856_38882 = state_38848__$1;
(statearr_38856_38882[(2)] = null);

(statearr_38856_38882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38849 === (3))){
var inst_38845 = (state_38848[(2)]);
var inst_38846 = cljs.core.async.close_BANG_.call(null,out);
var state_38848__$1 = (function (){var statearr_38857 = state_38848;
(statearr_38857[(9)] = inst_38845);

return statearr_38857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38848__$1,inst_38846);
} else {
if((state_val_38849 === (2))){
var state_38848__$1 = state_38848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38848__$1,(4),ch);
} else {
if((state_val_38849 === (11))){
var inst_38828 = (state_38848[(8)]);
var inst_38837 = (state_38848[(2)]);
var inst_38825 = inst_38828;
var state_38848__$1 = (function (){var statearr_38858 = state_38848;
(statearr_38858[(10)] = inst_38837);

(statearr_38858[(7)] = inst_38825);

return statearr_38858;
})();
var statearr_38859_38883 = state_38848__$1;
(statearr_38859_38883[(2)] = null);

(statearr_38859_38883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38849 === (9))){
var inst_38828 = (state_38848[(8)]);
var state_38848__$1 = state_38848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38848__$1,(11),out,inst_38828);
} else {
if((state_val_38849 === (5))){
var inst_38828 = (state_38848[(8)]);
var inst_38825 = (state_38848[(7)]);
var inst_38832 = cljs.core._EQ_.call(null,inst_38828,inst_38825);
var state_38848__$1 = state_38848;
if(inst_38832){
var statearr_38861_38884 = state_38848__$1;
(statearr_38861_38884[(1)] = (8));

} else {
var statearr_38862_38885 = state_38848__$1;
(statearr_38862_38885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38849 === (10))){
var inst_38840 = (state_38848[(2)]);
var state_38848__$1 = state_38848;
var statearr_38863_38886 = state_38848__$1;
(statearr_38863_38886[(2)] = inst_38840);

(statearr_38863_38886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38849 === (8))){
var inst_38825 = (state_38848[(7)]);
var tmp38860 = inst_38825;
var inst_38825__$1 = tmp38860;
var state_38848__$1 = (function (){var statearr_38864 = state_38848;
(statearr_38864[(7)] = inst_38825__$1);

return statearr_38864;
})();
var statearr_38865_38887 = state_38848__$1;
(statearr_38865_38887[(2)] = null);

(statearr_38865_38887[(1)] = (2));


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
});})(c__31439__auto___38877,out))
;
return ((function (switch__31418__auto__,c__31439__auto___38877,out){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_38869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38869[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_38869[(1)] = (1));

return statearr_38869;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_38848){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_38848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e38870){if((e38870 instanceof Object)){
var ex__31422__auto__ = e38870;
var statearr_38871_38888 = state_38848;
(statearr_38871_38888[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38889 = state_38848;
state_38848 = G__38889;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_38848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_38848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___38877,out))
})();
var state__31441__auto__ = (function (){var statearr_38872 = f__31440__auto__.call(null);
(statearr_38872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___38877);

return statearr_38872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___38877,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args38890 = [];
var len__30472__auto___38960 = arguments.length;
var i__30473__auto___38961 = (0);
while(true){
if((i__30473__auto___38961 < len__30472__auto___38960)){
args38890.push((arguments[i__30473__auto___38961]));

var G__38962 = (i__30473__auto___38961 + (1));
i__30473__auto___38961 = G__38962;
continue;
} else {
}
break;
}

var G__38892 = args38890.length;
switch (G__38892) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38890.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31439__auto___38964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___38964,out){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___38964,out){
return (function (state_38930){
var state_val_38931 = (state_38930[(1)]);
if((state_val_38931 === (7))){
var inst_38926 = (state_38930[(2)]);
var state_38930__$1 = state_38930;
var statearr_38932_38965 = state_38930__$1;
(statearr_38932_38965[(2)] = inst_38926);

(statearr_38932_38965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (1))){
var inst_38893 = (new Array(n));
var inst_38894 = inst_38893;
var inst_38895 = (0);
var state_38930__$1 = (function (){var statearr_38933 = state_38930;
(statearr_38933[(7)] = inst_38894);

(statearr_38933[(8)] = inst_38895);

return statearr_38933;
})();
var statearr_38934_38966 = state_38930__$1;
(statearr_38934_38966[(2)] = null);

(statearr_38934_38966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (4))){
var inst_38898 = (state_38930[(9)]);
var inst_38898__$1 = (state_38930[(2)]);
var inst_38899 = (inst_38898__$1 == null);
var inst_38900 = cljs.core.not.call(null,inst_38899);
var state_38930__$1 = (function (){var statearr_38935 = state_38930;
(statearr_38935[(9)] = inst_38898__$1);

return statearr_38935;
})();
if(inst_38900){
var statearr_38936_38967 = state_38930__$1;
(statearr_38936_38967[(1)] = (5));

} else {
var statearr_38937_38968 = state_38930__$1;
(statearr_38937_38968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (15))){
var inst_38920 = (state_38930[(2)]);
var state_38930__$1 = state_38930;
var statearr_38938_38969 = state_38930__$1;
(statearr_38938_38969[(2)] = inst_38920);

(statearr_38938_38969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (13))){
var state_38930__$1 = state_38930;
var statearr_38939_38970 = state_38930__$1;
(statearr_38939_38970[(2)] = null);

(statearr_38939_38970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (6))){
var inst_38895 = (state_38930[(8)]);
var inst_38916 = (inst_38895 > (0));
var state_38930__$1 = state_38930;
if(cljs.core.truth_(inst_38916)){
var statearr_38940_38971 = state_38930__$1;
(statearr_38940_38971[(1)] = (12));

} else {
var statearr_38941_38972 = state_38930__$1;
(statearr_38941_38972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (3))){
var inst_38928 = (state_38930[(2)]);
var state_38930__$1 = state_38930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38930__$1,inst_38928);
} else {
if((state_val_38931 === (12))){
var inst_38894 = (state_38930[(7)]);
var inst_38918 = cljs.core.vec.call(null,inst_38894);
var state_38930__$1 = state_38930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38930__$1,(15),out,inst_38918);
} else {
if((state_val_38931 === (2))){
var state_38930__$1 = state_38930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38930__$1,(4),ch);
} else {
if((state_val_38931 === (11))){
var inst_38910 = (state_38930[(2)]);
var inst_38911 = (new Array(n));
var inst_38894 = inst_38911;
var inst_38895 = (0);
var state_38930__$1 = (function (){var statearr_38942 = state_38930;
(statearr_38942[(10)] = inst_38910);

(statearr_38942[(7)] = inst_38894);

(statearr_38942[(8)] = inst_38895);

return statearr_38942;
})();
var statearr_38943_38973 = state_38930__$1;
(statearr_38943_38973[(2)] = null);

(statearr_38943_38973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (9))){
var inst_38894 = (state_38930[(7)]);
var inst_38908 = cljs.core.vec.call(null,inst_38894);
var state_38930__$1 = state_38930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38930__$1,(11),out,inst_38908);
} else {
if((state_val_38931 === (5))){
var inst_38898 = (state_38930[(9)]);
var inst_38894 = (state_38930[(7)]);
var inst_38903 = (state_38930[(11)]);
var inst_38895 = (state_38930[(8)]);
var inst_38902 = (inst_38894[inst_38895] = inst_38898);
var inst_38903__$1 = (inst_38895 + (1));
var inst_38904 = (inst_38903__$1 < n);
var state_38930__$1 = (function (){var statearr_38944 = state_38930;
(statearr_38944[(11)] = inst_38903__$1);

(statearr_38944[(12)] = inst_38902);

return statearr_38944;
})();
if(cljs.core.truth_(inst_38904)){
var statearr_38945_38974 = state_38930__$1;
(statearr_38945_38974[(1)] = (8));

} else {
var statearr_38946_38975 = state_38930__$1;
(statearr_38946_38975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (14))){
var inst_38923 = (state_38930[(2)]);
var inst_38924 = cljs.core.async.close_BANG_.call(null,out);
var state_38930__$1 = (function (){var statearr_38948 = state_38930;
(statearr_38948[(13)] = inst_38923);

return statearr_38948;
})();
var statearr_38949_38976 = state_38930__$1;
(statearr_38949_38976[(2)] = inst_38924);

(statearr_38949_38976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (10))){
var inst_38914 = (state_38930[(2)]);
var state_38930__$1 = state_38930;
var statearr_38950_38977 = state_38930__$1;
(statearr_38950_38977[(2)] = inst_38914);

(statearr_38950_38977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38931 === (8))){
var inst_38894 = (state_38930[(7)]);
var inst_38903 = (state_38930[(11)]);
var tmp38947 = inst_38894;
var inst_38894__$1 = tmp38947;
var inst_38895 = inst_38903;
var state_38930__$1 = (function (){var statearr_38951 = state_38930;
(statearr_38951[(7)] = inst_38894__$1);

(statearr_38951[(8)] = inst_38895);

return statearr_38951;
})();
var statearr_38952_38978 = state_38930__$1;
(statearr_38952_38978[(2)] = null);

(statearr_38952_38978[(1)] = (2));


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
});})(c__31439__auto___38964,out))
;
return ((function (switch__31418__auto__,c__31439__auto___38964,out){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_38956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38956[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_38956[(1)] = (1));

return statearr_38956;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_38930){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_38930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e38957){if((e38957 instanceof Object)){
var ex__31422__auto__ = e38957;
var statearr_38958_38979 = state_38930;
(statearr_38958_38979[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38980 = state_38930;
state_38930 = G__38980;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_38930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_38930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___38964,out))
})();
var state__31441__auto__ = (function (){var statearr_38959 = f__31440__auto__.call(null);
(statearr_38959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___38964);

return statearr_38959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___38964,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args38981 = [];
var len__30472__auto___39055 = arguments.length;
var i__30473__auto___39056 = (0);
while(true){
if((i__30473__auto___39056 < len__30472__auto___39055)){
args38981.push((arguments[i__30473__auto___39056]));

var G__39057 = (i__30473__auto___39056 + (1));
i__30473__auto___39056 = G__39057;
continue;
} else {
}
break;
}

var G__38983 = args38981.length;
switch (G__38983) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38981.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31439__auto___39059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___39059,out){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___39059,out){
return (function (state_39025){
var state_val_39026 = (state_39025[(1)]);
if((state_val_39026 === (7))){
var inst_39021 = (state_39025[(2)]);
var state_39025__$1 = state_39025;
var statearr_39027_39060 = state_39025__$1;
(statearr_39027_39060[(2)] = inst_39021);

(statearr_39027_39060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (1))){
var inst_38984 = [];
var inst_38985 = inst_38984;
var inst_38986 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39025__$1 = (function (){var statearr_39028 = state_39025;
(statearr_39028[(7)] = inst_38986);

(statearr_39028[(8)] = inst_38985);

return statearr_39028;
})();
var statearr_39029_39061 = state_39025__$1;
(statearr_39029_39061[(2)] = null);

(statearr_39029_39061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (4))){
var inst_38989 = (state_39025[(9)]);
var inst_38989__$1 = (state_39025[(2)]);
var inst_38990 = (inst_38989__$1 == null);
var inst_38991 = cljs.core.not.call(null,inst_38990);
var state_39025__$1 = (function (){var statearr_39030 = state_39025;
(statearr_39030[(9)] = inst_38989__$1);

return statearr_39030;
})();
if(inst_38991){
var statearr_39031_39062 = state_39025__$1;
(statearr_39031_39062[(1)] = (5));

} else {
var statearr_39032_39063 = state_39025__$1;
(statearr_39032_39063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (15))){
var inst_39015 = (state_39025[(2)]);
var state_39025__$1 = state_39025;
var statearr_39033_39064 = state_39025__$1;
(statearr_39033_39064[(2)] = inst_39015);

(statearr_39033_39064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (13))){
var state_39025__$1 = state_39025;
var statearr_39034_39065 = state_39025__$1;
(statearr_39034_39065[(2)] = null);

(statearr_39034_39065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (6))){
var inst_38985 = (state_39025[(8)]);
var inst_39010 = inst_38985.length;
var inst_39011 = (inst_39010 > (0));
var state_39025__$1 = state_39025;
if(cljs.core.truth_(inst_39011)){
var statearr_39035_39066 = state_39025__$1;
(statearr_39035_39066[(1)] = (12));

} else {
var statearr_39036_39067 = state_39025__$1;
(statearr_39036_39067[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (3))){
var inst_39023 = (state_39025[(2)]);
var state_39025__$1 = state_39025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39025__$1,inst_39023);
} else {
if((state_val_39026 === (12))){
var inst_38985 = (state_39025[(8)]);
var inst_39013 = cljs.core.vec.call(null,inst_38985);
var state_39025__$1 = state_39025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39025__$1,(15),out,inst_39013);
} else {
if((state_val_39026 === (2))){
var state_39025__$1 = state_39025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39025__$1,(4),ch);
} else {
if((state_val_39026 === (11))){
var inst_38993 = (state_39025[(10)]);
var inst_38989 = (state_39025[(9)]);
var inst_39003 = (state_39025[(2)]);
var inst_39004 = [];
var inst_39005 = inst_39004.push(inst_38989);
var inst_38985 = inst_39004;
var inst_38986 = inst_38993;
var state_39025__$1 = (function (){var statearr_39037 = state_39025;
(statearr_39037[(11)] = inst_39003);

(statearr_39037[(12)] = inst_39005);

(statearr_39037[(7)] = inst_38986);

(statearr_39037[(8)] = inst_38985);

return statearr_39037;
})();
var statearr_39038_39068 = state_39025__$1;
(statearr_39038_39068[(2)] = null);

(statearr_39038_39068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (9))){
var inst_38985 = (state_39025[(8)]);
var inst_39001 = cljs.core.vec.call(null,inst_38985);
var state_39025__$1 = state_39025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39025__$1,(11),out,inst_39001);
} else {
if((state_val_39026 === (5))){
var inst_38993 = (state_39025[(10)]);
var inst_38986 = (state_39025[(7)]);
var inst_38989 = (state_39025[(9)]);
var inst_38993__$1 = f.call(null,inst_38989);
var inst_38994 = cljs.core._EQ_.call(null,inst_38993__$1,inst_38986);
var inst_38995 = cljs.core.keyword_identical_QMARK_.call(null,inst_38986,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38996 = (inst_38994) || (inst_38995);
var state_39025__$1 = (function (){var statearr_39039 = state_39025;
(statearr_39039[(10)] = inst_38993__$1);

return statearr_39039;
})();
if(cljs.core.truth_(inst_38996)){
var statearr_39040_39069 = state_39025__$1;
(statearr_39040_39069[(1)] = (8));

} else {
var statearr_39041_39070 = state_39025__$1;
(statearr_39041_39070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (14))){
var inst_39018 = (state_39025[(2)]);
var inst_39019 = cljs.core.async.close_BANG_.call(null,out);
var state_39025__$1 = (function (){var statearr_39043 = state_39025;
(statearr_39043[(13)] = inst_39018);

return statearr_39043;
})();
var statearr_39044_39071 = state_39025__$1;
(statearr_39044_39071[(2)] = inst_39019);

(statearr_39044_39071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (10))){
var inst_39008 = (state_39025[(2)]);
var state_39025__$1 = state_39025;
var statearr_39045_39072 = state_39025__$1;
(statearr_39045_39072[(2)] = inst_39008);

(statearr_39045_39072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39026 === (8))){
var inst_38993 = (state_39025[(10)]);
var inst_38985 = (state_39025[(8)]);
var inst_38989 = (state_39025[(9)]);
var inst_38998 = inst_38985.push(inst_38989);
var tmp39042 = inst_38985;
var inst_38985__$1 = tmp39042;
var inst_38986 = inst_38993;
var state_39025__$1 = (function (){var statearr_39046 = state_39025;
(statearr_39046[(7)] = inst_38986);

(statearr_39046[(8)] = inst_38985__$1);

(statearr_39046[(14)] = inst_38998);

return statearr_39046;
})();
var statearr_39047_39073 = state_39025__$1;
(statearr_39047_39073[(2)] = null);

(statearr_39047_39073[(1)] = (2));


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
});})(c__31439__auto___39059,out))
;
return ((function (switch__31418__auto__,c__31439__auto___39059,out){
return (function() {
var cljs$core$async$state_machine__31419__auto__ = null;
var cljs$core$async$state_machine__31419__auto____0 = (function (){
var statearr_39051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39051[(0)] = cljs$core$async$state_machine__31419__auto__);

(statearr_39051[(1)] = (1));

return statearr_39051;
});
var cljs$core$async$state_machine__31419__auto____1 = (function (state_39025){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_39025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e39052){if((e39052 instanceof Object)){
var ex__31422__auto__ = e39052;
var statearr_39053_39074 = state_39025;
(statearr_39053_39074[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39075 = state_39025;
state_39025 = G__39075;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
cljs$core$async$state_machine__31419__auto__ = function(state_39025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31419__auto____1.call(this,state_39025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31419__auto____0;
cljs$core$async$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31419__auto____1;
return cljs$core$async$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___39059,out))
})();
var state__31441__auto__ = (function (){var statearr_39054 = f__31440__auto__.call(null);
(statearr_39054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___39059);

return statearr_39054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___39059,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map