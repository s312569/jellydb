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
var args35886 = [];
var len__31936__auto___35892 = arguments.length;
var i__31937__auto___35893 = (0);
while(true){
if((i__31937__auto___35893 < len__31936__auto___35892)){
args35886.push((arguments[i__31937__auto___35893]));

var G__35894 = (i__31937__auto___35893 + (1));
i__31937__auto___35893 = G__35894;
continue;
} else {
}
break;
}

var G__35888 = args35886.length;
switch (G__35888) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35886.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35889 = (function (f,blockable,meta35890){
this.f = f;
this.blockable = blockable;
this.meta35890 = meta35890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35891,meta35890__$1){
var self__ = this;
var _35891__$1 = this;
return (new cljs.core.async.t_cljs$core$async35889(self__.f,self__.blockable,meta35890__$1));
});

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35891){
var self__ = this;
var _35891__$1 = this;
return self__.meta35890;
});

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35890","meta35890",-733249480,null)], null);
});

cljs.core.async.t_cljs$core$async35889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35889";

cljs.core.async.t_cljs$core$async35889.cljs$lang$ctorPrWriter = (function (this__31467__auto__,writer__31468__auto__,opt__31469__auto__){
return cljs.core._write.call(null,writer__31468__auto__,"cljs.core.async/t_cljs$core$async35889");
});

cljs.core.async.__GT_t_cljs$core$async35889 = (function cljs$core$async$__GT_t_cljs$core$async35889(f__$1,blockable__$1,meta35890){
return (new cljs.core.async.t_cljs$core$async35889(f__$1,blockable__$1,meta35890));
});

}

return (new cljs.core.async.t_cljs$core$async35889(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args35898 = [];
var len__31936__auto___35901 = arguments.length;
var i__31937__auto___35902 = (0);
while(true){
if((i__31937__auto___35902 < len__31936__auto___35901)){
args35898.push((arguments[i__31937__auto___35902]));

var G__35903 = (i__31937__auto___35902 + (1));
i__31937__auto___35902 = G__35903;
continue;
} else {
}
break;
}

var G__35900 = args35898.length;
switch (G__35900) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35898.length)].join('')));

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
var args35905 = [];
var len__31936__auto___35908 = arguments.length;
var i__31937__auto___35909 = (0);
while(true){
if((i__31937__auto___35909 < len__31936__auto___35908)){
args35905.push((arguments[i__31937__auto___35909]));

var G__35910 = (i__31937__auto___35909 + (1));
i__31937__auto___35909 = G__35910;
continue;
} else {
}
break;
}

var G__35907 = args35905.length;
switch (G__35907) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35905.length)].join('')));

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
var args35912 = [];
var len__31936__auto___35915 = arguments.length;
var i__31937__auto___35916 = (0);
while(true){
if((i__31937__auto___35916 < len__31936__auto___35915)){
args35912.push((arguments[i__31937__auto___35916]));

var G__35917 = (i__31937__auto___35916 + (1));
i__31937__auto___35916 = G__35917;
continue;
} else {
}
break;
}

var G__35914 = args35912.length;
switch (G__35914) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35912.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35919 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35919);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35919,ret){
return (function (){
return fn1.call(null,val_35919);
});})(val_35919,ret))
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
var args35920 = [];
var len__31936__auto___35923 = arguments.length;
var i__31937__auto___35924 = (0);
while(true){
if((i__31937__auto___35924 < len__31936__auto___35923)){
args35920.push((arguments[i__31937__auto___35924]));

var G__35925 = (i__31937__auto___35924 + (1));
i__31937__auto___35924 = G__35925;
continue;
} else {
}
break;
}

var G__35922 = args35920.length;
switch (G__35922) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35920.length)].join('')));

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
var n__31776__auto___35927 = n;
var x_35928 = (0);
while(true){
if((x_35928 < n__31776__auto___35927)){
(a[x_35928] = (0));

var G__35929 = (x_35928 + (1));
x_35928 = G__35929;
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

var G__35930 = (i + (1));
i = G__35930;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35934 = (function (alt_flag,flag,meta35935){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35935 = meta35935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35936,meta35935__$1){
var self__ = this;
var _35936__$1 = this;
return (new cljs.core.async.t_cljs$core$async35934(self__.alt_flag,self__.flag,meta35935__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35936){
var self__ = this;
var _35936__$1 = this;
return self__.meta35935;
});})(flag))
;

cljs.core.async.t_cljs$core$async35934.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35934.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35935","meta35935",-643283267,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35934";

cljs.core.async.t_cljs$core$async35934.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31467__auto__,writer__31468__auto__,opt__31469__auto__){
return cljs.core._write.call(null,writer__31468__auto__,"cljs.core.async/t_cljs$core$async35934");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35934 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35934(alt_flag__$1,flag__$1,meta35935){
return (new cljs.core.async.t_cljs$core$async35934(alt_flag__$1,flag__$1,meta35935));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35934(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35940 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35940 = (function (alt_handler,flag,cb,meta35941){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35941 = meta35941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35942,meta35941__$1){
var self__ = this;
var _35942__$1 = this;
return (new cljs.core.async.t_cljs$core$async35940(self__.alt_handler,self__.flag,self__.cb,meta35941__$1));
});

cljs.core.async.t_cljs$core$async35940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35942){
var self__ = this;
var _35942__$1 = this;
return self__.meta35941;
});

cljs.core.async.t_cljs$core$async35940.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35940.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35941","meta35941",-1595272828,null)], null);
});

cljs.core.async.t_cljs$core$async35940.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35940";

cljs.core.async.t_cljs$core$async35940.cljs$lang$ctorPrWriter = (function (this__31467__auto__,writer__31468__auto__,opt__31469__auto__){
return cljs.core._write.call(null,writer__31468__auto__,"cljs.core.async/t_cljs$core$async35940");
});

cljs.core.async.__GT_t_cljs$core$async35940 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35940(alt_handler__$1,flag__$1,cb__$1,meta35941){
return (new cljs.core.async.t_cljs$core$async35940(alt_handler__$1,flag__$1,cb__$1,meta35941));
});

}

return (new cljs.core.async.t_cljs$core$async35940(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35943_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35943_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35944_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35944_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30861__auto__ = wport;
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35945 = (i + (1));
i = G__35945;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30861__auto__ = ret;
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__30849__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30849__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30849__auto__;
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
var args__31943__auto__ = [];
var len__31936__auto___35951 = arguments.length;
var i__31937__auto___35952 = (0);
while(true){
if((i__31937__auto___35952 < len__31936__auto___35951)){
args__31943__auto__.push((arguments[i__31937__auto___35952]));

var G__35953 = (i__31937__auto___35952 + (1));
i__31937__auto___35952 = G__35953;
continue;
} else {
}
break;
}

var argseq__31944__auto__ = ((((1) < args__31943__auto__.length))?(new cljs.core.IndexedSeq(args__31943__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31944__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35948){
var map__35949 = p__35948;
var map__35949__$1 = ((((!((map__35949 == null)))?((((map__35949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35949):map__35949);
var opts = map__35949__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35946){
var G__35947 = cljs.core.first.call(null,seq35946);
var seq35946__$1 = cljs.core.next.call(null,seq35946);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35947,seq35946__$1);
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
var args35954 = [];
var len__31936__auto___36004 = arguments.length;
var i__31937__auto___36005 = (0);
while(true){
if((i__31937__auto___36005 < len__31936__auto___36004)){
args35954.push((arguments[i__31937__auto___36005]));

var G__36006 = (i__31937__auto___36005 + (1));
i__31937__auto___36005 = G__36006;
continue;
} else {
}
break;
}

var G__35956 = args35954.length;
switch (G__35956) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35954.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35841__auto___36008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___36008){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___36008){
return (function (state_35980){
var state_val_35981 = (state_35980[(1)]);
if((state_val_35981 === (7))){
var inst_35976 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
var statearr_35982_36009 = state_35980__$1;
(statearr_35982_36009[(2)] = inst_35976);

(statearr_35982_36009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (1))){
var state_35980__$1 = state_35980;
var statearr_35983_36010 = state_35980__$1;
(statearr_35983_36010[(2)] = null);

(statearr_35983_36010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (4))){
var inst_35959 = (state_35980[(7)]);
var inst_35959__$1 = (state_35980[(2)]);
var inst_35960 = (inst_35959__$1 == null);
var state_35980__$1 = (function (){var statearr_35984 = state_35980;
(statearr_35984[(7)] = inst_35959__$1);

return statearr_35984;
})();
if(cljs.core.truth_(inst_35960)){
var statearr_35985_36011 = state_35980__$1;
(statearr_35985_36011[(1)] = (5));

} else {
var statearr_35986_36012 = state_35980__$1;
(statearr_35986_36012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (13))){
var state_35980__$1 = state_35980;
var statearr_35987_36013 = state_35980__$1;
(statearr_35987_36013[(2)] = null);

(statearr_35987_36013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (6))){
var inst_35959 = (state_35980[(7)]);
var state_35980__$1 = state_35980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35980__$1,(11),to,inst_35959);
} else {
if((state_val_35981 === (3))){
var inst_35978 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35980__$1,inst_35978);
} else {
if((state_val_35981 === (12))){
var state_35980__$1 = state_35980;
var statearr_35988_36014 = state_35980__$1;
(statearr_35988_36014[(2)] = null);

(statearr_35988_36014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (2))){
var state_35980__$1 = state_35980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35980__$1,(4),from);
} else {
if((state_val_35981 === (11))){
var inst_35969 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
if(cljs.core.truth_(inst_35969)){
var statearr_35989_36015 = state_35980__$1;
(statearr_35989_36015[(1)] = (12));

} else {
var statearr_35990_36016 = state_35980__$1;
(statearr_35990_36016[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (9))){
var state_35980__$1 = state_35980;
var statearr_35991_36017 = state_35980__$1;
(statearr_35991_36017[(2)] = null);

(statearr_35991_36017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (5))){
var state_35980__$1 = state_35980;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35992_36018 = state_35980__$1;
(statearr_35992_36018[(1)] = (8));

} else {
var statearr_35993_36019 = state_35980__$1;
(statearr_35993_36019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (14))){
var inst_35974 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
var statearr_35994_36020 = state_35980__$1;
(statearr_35994_36020[(2)] = inst_35974);

(statearr_35994_36020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (10))){
var inst_35966 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
var statearr_35995_36021 = state_35980__$1;
(statearr_35995_36021[(2)] = inst_35966);

(statearr_35995_36021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (8))){
var inst_35963 = cljs.core.async.close_BANG_.call(null,to);
var state_35980__$1 = state_35980;
var statearr_35996_36022 = state_35980__$1;
(statearr_35996_36022[(2)] = inst_35963);

(statearr_35996_36022[(1)] = (10));


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
});})(c__35841__auto___36008))
;
return ((function (switch__35729__auto__,c__35841__auto___36008){
return (function() {
var cljs$core$async$state_machine__35730__auto__ = null;
var cljs$core$async$state_machine__35730__auto____0 = (function (){
var statearr_36000 = [null,null,null,null,null,null,null,null];
(statearr_36000[(0)] = cljs$core$async$state_machine__35730__auto__);

(statearr_36000[(1)] = (1));

return statearr_36000;
});
var cljs$core$async$state_machine__35730__auto____1 = (function (state_35980){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_35980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e36001){if((e36001 instanceof Object)){
var ex__35733__auto__ = e36001;
var statearr_36002_36023 = state_35980;
(statearr_36002_36023[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36024 = state_35980;
state_35980 = G__36024;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$state_machine__35730__auto__ = function(state_35980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35730__auto____1.call(this,state_35980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35730__auto____0;
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35730__auto____1;
return cljs$core$async$state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___36008))
})();
var state__35843__auto__ = (function (){var statearr_36003 = f__35842__auto__.call(null);
(statearr_36003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___36008);

return statearr_36003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___36008))
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
return (function (p__36212){
var vec__36213 = p__36212;
var v = cljs.core.nth.call(null,vec__36213,(0),null);
var p = cljs.core.nth.call(null,vec__36213,(1),null);
var job = vec__36213;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35841__auto___36399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___36399,res,vec__36213,v,p,job,jobs,results){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___36399,res,vec__36213,v,p,job,jobs,results){
return (function (state_36220){
var state_val_36221 = (state_36220[(1)]);
if((state_val_36221 === (1))){
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36220__$1,(2),res,v);
} else {
if((state_val_36221 === (2))){
var inst_36217 = (state_36220[(2)]);
var inst_36218 = cljs.core.async.close_BANG_.call(null,res);
var state_36220__$1 = (function (){var statearr_36222 = state_36220;
(statearr_36222[(7)] = inst_36217);

return statearr_36222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36220__$1,inst_36218);
} else {
return null;
}
}
});})(c__35841__auto___36399,res,vec__36213,v,p,job,jobs,results))
;
return ((function (switch__35729__auto__,c__35841__auto___36399,res,vec__36213,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0 = (function (){
var statearr_36226 = [null,null,null,null,null,null,null,null];
(statearr_36226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__);

(statearr_36226[(1)] = (1));

return statearr_36226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1 = (function (state_36220){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_36220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e36227){if((e36227 instanceof Object)){
var ex__35733__auto__ = e36227;
var statearr_36228_36400 = state_36220;
(statearr_36228_36400[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36401 = state_36220;
state_36220 = G__36401;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__ = function(state_36220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1.call(this,state_36220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___36399,res,vec__36213,v,p,job,jobs,results))
})();
var state__35843__auto__ = (function (){var statearr_36229 = f__35842__auto__.call(null);
(statearr_36229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___36399);

return statearr_36229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___36399,res,vec__36213,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36230){
var vec__36231 = p__36230;
var v = cljs.core.nth.call(null,vec__36231,(0),null);
var p = cljs.core.nth.call(null,vec__36231,(1),null);
var job = vec__36231;
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
var n__31776__auto___36402 = n;
var __36403 = (0);
while(true){
if((__36403 < n__31776__auto___36402)){
var G__36234_36404 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36234_36404) {
case "compute":
var c__35841__auto___36406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36403,c__35841__auto___36406,G__36234_36404,n__31776__auto___36402,jobs,results,process,async){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (__36403,c__35841__auto___36406,G__36234_36404,n__31776__auto___36402,jobs,results,process,async){
return (function (state_36247){
var state_val_36248 = (state_36247[(1)]);
if((state_val_36248 === (1))){
var state_36247__$1 = state_36247;
var statearr_36249_36407 = state_36247__$1;
(statearr_36249_36407[(2)] = null);

(statearr_36249_36407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (2))){
var state_36247__$1 = state_36247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36247__$1,(4),jobs);
} else {
if((state_val_36248 === (3))){
var inst_36245 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36247__$1,inst_36245);
} else {
if((state_val_36248 === (4))){
var inst_36237 = (state_36247[(2)]);
var inst_36238 = process.call(null,inst_36237);
var state_36247__$1 = state_36247;
if(cljs.core.truth_(inst_36238)){
var statearr_36250_36408 = state_36247__$1;
(statearr_36250_36408[(1)] = (5));

} else {
var statearr_36251_36409 = state_36247__$1;
(statearr_36251_36409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (5))){
var state_36247__$1 = state_36247;
var statearr_36252_36410 = state_36247__$1;
(statearr_36252_36410[(2)] = null);

(statearr_36252_36410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (6))){
var state_36247__$1 = state_36247;
var statearr_36253_36411 = state_36247__$1;
(statearr_36253_36411[(2)] = null);

(statearr_36253_36411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36248 === (7))){
var inst_36243 = (state_36247[(2)]);
var state_36247__$1 = state_36247;
var statearr_36254_36412 = state_36247__$1;
(statearr_36254_36412[(2)] = inst_36243);

(statearr_36254_36412[(1)] = (3));


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
});})(__36403,c__35841__auto___36406,G__36234_36404,n__31776__auto___36402,jobs,results,process,async))
;
return ((function (__36403,switch__35729__auto__,c__35841__auto___36406,G__36234_36404,n__31776__auto___36402,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0 = (function (){
var statearr_36258 = [null,null,null,null,null,null,null];
(statearr_36258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__);

(statearr_36258[(1)] = (1));

return statearr_36258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1 = (function (state_36247){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_36247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e36259){if((e36259 instanceof Object)){
var ex__35733__auto__ = e36259;
var statearr_36260_36413 = state_36247;
(statearr_36260_36413[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36414 = state_36247;
state_36247 = G__36414;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__ = function(state_36247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1.call(this,state_36247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__;
})()
;})(__36403,switch__35729__auto__,c__35841__auto___36406,G__36234_36404,n__31776__auto___36402,jobs,results,process,async))
})();
var state__35843__auto__ = (function (){var statearr_36261 = f__35842__auto__.call(null);
(statearr_36261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___36406);

return statearr_36261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(__36403,c__35841__auto___36406,G__36234_36404,n__31776__auto___36402,jobs,results,process,async))
);


break;
case "async":
var c__35841__auto___36415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36403,c__35841__auto___36415,G__36234_36404,n__31776__auto___36402,jobs,results,process,async){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (__36403,c__35841__auto___36415,G__36234_36404,n__31776__auto___36402,jobs,results,process,async){
return (function (state_36274){
var state_val_36275 = (state_36274[(1)]);
if((state_val_36275 === (1))){
var state_36274__$1 = state_36274;
var statearr_36276_36416 = state_36274__$1;
(statearr_36276_36416[(2)] = null);

(statearr_36276_36416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36275 === (2))){
var state_36274__$1 = state_36274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36274__$1,(4),jobs);
} else {
if((state_val_36275 === (3))){
var inst_36272 = (state_36274[(2)]);
var state_36274__$1 = state_36274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36274__$1,inst_36272);
} else {
if((state_val_36275 === (4))){
var inst_36264 = (state_36274[(2)]);
var inst_36265 = async.call(null,inst_36264);
var state_36274__$1 = state_36274;
if(cljs.core.truth_(inst_36265)){
var statearr_36277_36417 = state_36274__$1;
(statearr_36277_36417[(1)] = (5));

} else {
var statearr_36278_36418 = state_36274__$1;
(statearr_36278_36418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36275 === (5))){
var state_36274__$1 = state_36274;
var statearr_36279_36419 = state_36274__$1;
(statearr_36279_36419[(2)] = null);

(statearr_36279_36419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36275 === (6))){
var state_36274__$1 = state_36274;
var statearr_36280_36420 = state_36274__$1;
(statearr_36280_36420[(2)] = null);

(statearr_36280_36420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36275 === (7))){
var inst_36270 = (state_36274[(2)]);
var state_36274__$1 = state_36274;
var statearr_36281_36421 = state_36274__$1;
(statearr_36281_36421[(2)] = inst_36270);

(statearr_36281_36421[(1)] = (3));


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
});})(__36403,c__35841__auto___36415,G__36234_36404,n__31776__auto___36402,jobs,results,process,async))
;
return ((function (__36403,switch__35729__auto__,c__35841__auto___36415,G__36234_36404,n__31776__auto___36402,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0 = (function (){
var statearr_36285 = [null,null,null,null,null,null,null];
(statearr_36285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__);

(statearr_36285[(1)] = (1));

return statearr_36285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1 = (function (state_36274){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_36274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e36286){if((e36286 instanceof Object)){
var ex__35733__auto__ = e36286;
var statearr_36287_36422 = state_36274;
(statearr_36287_36422[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36423 = state_36274;
state_36274 = G__36423;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__ = function(state_36274){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1.call(this,state_36274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__;
})()
;})(__36403,switch__35729__auto__,c__35841__auto___36415,G__36234_36404,n__31776__auto___36402,jobs,results,process,async))
})();
var state__35843__auto__ = (function (){var statearr_36288 = f__35842__auto__.call(null);
(statearr_36288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___36415);

return statearr_36288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(__36403,c__35841__auto___36415,G__36234_36404,n__31776__auto___36402,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36424 = (__36403 + (1));
__36403 = G__36424;
continue;
} else {
}
break;
}

var c__35841__auto___36425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___36425,jobs,results,process,async){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___36425,jobs,results,process,async){
return (function (state_36310){
var state_val_36311 = (state_36310[(1)]);
if((state_val_36311 === (1))){
var state_36310__$1 = state_36310;
var statearr_36312_36426 = state_36310__$1;
(statearr_36312_36426[(2)] = null);

(statearr_36312_36426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (2))){
var state_36310__$1 = state_36310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36310__$1,(4),from);
} else {
if((state_val_36311 === (3))){
var inst_36308 = (state_36310[(2)]);
var state_36310__$1 = state_36310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36310__$1,inst_36308);
} else {
if((state_val_36311 === (4))){
var inst_36291 = (state_36310[(7)]);
var inst_36291__$1 = (state_36310[(2)]);
var inst_36292 = (inst_36291__$1 == null);
var state_36310__$1 = (function (){var statearr_36313 = state_36310;
(statearr_36313[(7)] = inst_36291__$1);

return statearr_36313;
})();
if(cljs.core.truth_(inst_36292)){
var statearr_36314_36427 = state_36310__$1;
(statearr_36314_36427[(1)] = (5));

} else {
var statearr_36315_36428 = state_36310__$1;
(statearr_36315_36428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (5))){
var inst_36294 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36310__$1 = state_36310;
var statearr_36316_36429 = state_36310__$1;
(statearr_36316_36429[(2)] = inst_36294);

(statearr_36316_36429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (6))){
var inst_36291 = (state_36310[(7)]);
var inst_36296 = (state_36310[(8)]);
var inst_36296__$1 = cljs.core.async.chan.call(null,(1));
var inst_36297 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36298 = [inst_36291,inst_36296__$1];
var inst_36299 = (new cljs.core.PersistentVector(null,2,(5),inst_36297,inst_36298,null));
var state_36310__$1 = (function (){var statearr_36317 = state_36310;
(statearr_36317[(8)] = inst_36296__$1);

return statearr_36317;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36310__$1,(8),jobs,inst_36299);
} else {
if((state_val_36311 === (7))){
var inst_36306 = (state_36310[(2)]);
var state_36310__$1 = state_36310;
var statearr_36318_36430 = state_36310__$1;
(statearr_36318_36430[(2)] = inst_36306);

(statearr_36318_36430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (8))){
var inst_36296 = (state_36310[(8)]);
var inst_36301 = (state_36310[(2)]);
var state_36310__$1 = (function (){var statearr_36319 = state_36310;
(statearr_36319[(9)] = inst_36301);

return statearr_36319;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36310__$1,(9),results,inst_36296);
} else {
if((state_val_36311 === (9))){
var inst_36303 = (state_36310[(2)]);
var state_36310__$1 = (function (){var statearr_36320 = state_36310;
(statearr_36320[(10)] = inst_36303);

return statearr_36320;
})();
var statearr_36321_36431 = state_36310__$1;
(statearr_36321_36431[(2)] = null);

(statearr_36321_36431[(1)] = (2));


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
});})(c__35841__auto___36425,jobs,results,process,async))
;
return ((function (switch__35729__auto__,c__35841__auto___36425,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0 = (function (){
var statearr_36325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36325[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__);

(statearr_36325[(1)] = (1));

return statearr_36325;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1 = (function (state_36310){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_36310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e36326){if((e36326 instanceof Object)){
var ex__35733__auto__ = e36326;
var statearr_36327_36432 = state_36310;
(statearr_36327_36432[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36433 = state_36310;
state_36310 = G__36433;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__ = function(state_36310){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1.call(this,state_36310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___36425,jobs,results,process,async))
})();
var state__35843__auto__ = (function (){var statearr_36328 = f__35842__auto__.call(null);
(statearr_36328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___36425);

return statearr_36328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___36425,jobs,results,process,async))
);


var c__35841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto__,jobs,results,process,async){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto__,jobs,results,process,async){
return (function (state_36366){
var state_val_36367 = (state_36366[(1)]);
if((state_val_36367 === (7))){
var inst_36362 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36368_36434 = state_36366__$1;
(statearr_36368_36434[(2)] = inst_36362);

(statearr_36368_36434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (20))){
var state_36366__$1 = state_36366;
var statearr_36369_36435 = state_36366__$1;
(statearr_36369_36435[(2)] = null);

(statearr_36369_36435[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (1))){
var state_36366__$1 = state_36366;
var statearr_36370_36436 = state_36366__$1;
(statearr_36370_36436[(2)] = null);

(statearr_36370_36436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (4))){
var inst_36331 = (state_36366[(7)]);
var inst_36331__$1 = (state_36366[(2)]);
var inst_36332 = (inst_36331__$1 == null);
var state_36366__$1 = (function (){var statearr_36371 = state_36366;
(statearr_36371[(7)] = inst_36331__$1);

return statearr_36371;
})();
if(cljs.core.truth_(inst_36332)){
var statearr_36372_36437 = state_36366__$1;
(statearr_36372_36437[(1)] = (5));

} else {
var statearr_36373_36438 = state_36366__$1;
(statearr_36373_36438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (15))){
var inst_36344 = (state_36366[(8)]);
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36366__$1,(18),to,inst_36344);
} else {
if((state_val_36367 === (21))){
var inst_36357 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36374_36439 = state_36366__$1;
(statearr_36374_36439[(2)] = inst_36357);

(statearr_36374_36439[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (13))){
var inst_36359 = (state_36366[(2)]);
var state_36366__$1 = (function (){var statearr_36375 = state_36366;
(statearr_36375[(9)] = inst_36359);

return statearr_36375;
})();
var statearr_36376_36440 = state_36366__$1;
(statearr_36376_36440[(2)] = null);

(statearr_36376_36440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (6))){
var inst_36331 = (state_36366[(7)]);
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36366__$1,(11),inst_36331);
} else {
if((state_val_36367 === (17))){
var inst_36352 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
if(cljs.core.truth_(inst_36352)){
var statearr_36377_36441 = state_36366__$1;
(statearr_36377_36441[(1)] = (19));

} else {
var statearr_36378_36442 = state_36366__$1;
(statearr_36378_36442[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (3))){
var inst_36364 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36366__$1,inst_36364);
} else {
if((state_val_36367 === (12))){
var inst_36341 = (state_36366[(10)]);
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36366__$1,(14),inst_36341);
} else {
if((state_val_36367 === (2))){
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36366__$1,(4),results);
} else {
if((state_val_36367 === (19))){
var state_36366__$1 = state_36366;
var statearr_36379_36443 = state_36366__$1;
(statearr_36379_36443[(2)] = null);

(statearr_36379_36443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (11))){
var inst_36341 = (state_36366[(2)]);
var state_36366__$1 = (function (){var statearr_36380 = state_36366;
(statearr_36380[(10)] = inst_36341);

return statearr_36380;
})();
var statearr_36381_36444 = state_36366__$1;
(statearr_36381_36444[(2)] = null);

(statearr_36381_36444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (9))){
var state_36366__$1 = state_36366;
var statearr_36382_36445 = state_36366__$1;
(statearr_36382_36445[(2)] = null);

(statearr_36382_36445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (5))){
var state_36366__$1 = state_36366;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36383_36446 = state_36366__$1;
(statearr_36383_36446[(1)] = (8));

} else {
var statearr_36384_36447 = state_36366__$1;
(statearr_36384_36447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (14))){
var inst_36346 = (state_36366[(11)]);
var inst_36344 = (state_36366[(8)]);
var inst_36344__$1 = (state_36366[(2)]);
var inst_36345 = (inst_36344__$1 == null);
var inst_36346__$1 = cljs.core.not.call(null,inst_36345);
var state_36366__$1 = (function (){var statearr_36385 = state_36366;
(statearr_36385[(11)] = inst_36346__$1);

(statearr_36385[(8)] = inst_36344__$1);

return statearr_36385;
})();
if(inst_36346__$1){
var statearr_36386_36448 = state_36366__$1;
(statearr_36386_36448[(1)] = (15));

} else {
var statearr_36387_36449 = state_36366__$1;
(statearr_36387_36449[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (16))){
var inst_36346 = (state_36366[(11)]);
var state_36366__$1 = state_36366;
var statearr_36388_36450 = state_36366__$1;
(statearr_36388_36450[(2)] = inst_36346);

(statearr_36388_36450[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (10))){
var inst_36338 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36389_36451 = state_36366__$1;
(statearr_36389_36451[(2)] = inst_36338);

(statearr_36389_36451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (18))){
var inst_36349 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36390_36452 = state_36366__$1;
(statearr_36390_36452[(2)] = inst_36349);

(statearr_36390_36452[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (8))){
var inst_36335 = cljs.core.async.close_BANG_.call(null,to);
var state_36366__$1 = state_36366;
var statearr_36391_36453 = state_36366__$1;
(statearr_36391_36453[(2)] = inst_36335);

(statearr_36391_36453[(1)] = (10));


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
});})(c__35841__auto__,jobs,results,process,async))
;
return ((function (switch__35729__auto__,c__35841__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0 = (function (){
var statearr_36395 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__);

(statearr_36395[(1)] = (1));

return statearr_36395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1 = (function (state_36366){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_36366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e36396){if((e36396 instanceof Object)){
var ex__35733__auto__ = e36396;
var statearr_36397_36454 = state_36366;
(statearr_36397_36454[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36455 = state_36366;
state_36366 = G__36455;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__ = function(state_36366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1.call(this,state_36366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto__,jobs,results,process,async))
})();
var state__35843__auto__ = (function (){var statearr_36398 = f__35842__auto__.call(null);
(statearr_36398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto__);

return statearr_36398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto__,jobs,results,process,async))
);

return c__35841__auto__;
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
var args36456 = [];
var len__31936__auto___36459 = arguments.length;
var i__31937__auto___36460 = (0);
while(true){
if((i__31937__auto___36460 < len__31936__auto___36459)){
args36456.push((arguments[i__31937__auto___36460]));

var G__36461 = (i__31937__auto___36460 + (1));
i__31937__auto___36460 = G__36461;
continue;
} else {
}
break;
}

var G__36458 = args36456.length;
switch (G__36458) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36456.length)].join('')));

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
var args36463 = [];
var len__31936__auto___36466 = arguments.length;
var i__31937__auto___36467 = (0);
while(true){
if((i__31937__auto___36467 < len__31936__auto___36466)){
args36463.push((arguments[i__31937__auto___36467]));

var G__36468 = (i__31937__auto___36467 + (1));
i__31937__auto___36467 = G__36468;
continue;
} else {
}
break;
}

var G__36465 = args36463.length;
switch (G__36465) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36463.length)].join('')));

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
var args36470 = [];
var len__31936__auto___36523 = arguments.length;
var i__31937__auto___36524 = (0);
while(true){
if((i__31937__auto___36524 < len__31936__auto___36523)){
args36470.push((arguments[i__31937__auto___36524]));

var G__36525 = (i__31937__auto___36524 + (1));
i__31937__auto___36524 = G__36525;
continue;
} else {
}
break;
}

var G__36472 = args36470.length;
switch (G__36472) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36470.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35841__auto___36527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___36527,tc,fc){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___36527,tc,fc){
return (function (state_36498){
var state_val_36499 = (state_36498[(1)]);
if((state_val_36499 === (7))){
var inst_36494 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
var statearr_36500_36528 = state_36498__$1;
(statearr_36500_36528[(2)] = inst_36494);

(statearr_36500_36528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (1))){
var state_36498__$1 = state_36498;
var statearr_36501_36529 = state_36498__$1;
(statearr_36501_36529[(2)] = null);

(statearr_36501_36529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (4))){
var inst_36475 = (state_36498[(7)]);
var inst_36475__$1 = (state_36498[(2)]);
var inst_36476 = (inst_36475__$1 == null);
var state_36498__$1 = (function (){var statearr_36502 = state_36498;
(statearr_36502[(7)] = inst_36475__$1);

return statearr_36502;
})();
if(cljs.core.truth_(inst_36476)){
var statearr_36503_36530 = state_36498__$1;
(statearr_36503_36530[(1)] = (5));

} else {
var statearr_36504_36531 = state_36498__$1;
(statearr_36504_36531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (13))){
var state_36498__$1 = state_36498;
var statearr_36505_36532 = state_36498__$1;
(statearr_36505_36532[(2)] = null);

(statearr_36505_36532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (6))){
var inst_36475 = (state_36498[(7)]);
var inst_36481 = p.call(null,inst_36475);
var state_36498__$1 = state_36498;
if(cljs.core.truth_(inst_36481)){
var statearr_36506_36533 = state_36498__$1;
(statearr_36506_36533[(1)] = (9));

} else {
var statearr_36507_36534 = state_36498__$1;
(statearr_36507_36534[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (3))){
var inst_36496 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36498__$1,inst_36496);
} else {
if((state_val_36499 === (12))){
var state_36498__$1 = state_36498;
var statearr_36508_36535 = state_36498__$1;
(statearr_36508_36535[(2)] = null);

(statearr_36508_36535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (2))){
var state_36498__$1 = state_36498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36498__$1,(4),ch);
} else {
if((state_val_36499 === (11))){
var inst_36475 = (state_36498[(7)]);
var inst_36485 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36498__$1,(8),inst_36485,inst_36475);
} else {
if((state_val_36499 === (9))){
var state_36498__$1 = state_36498;
var statearr_36509_36536 = state_36498__$1;
(statearr_36509_36536[(2)] = tc);

(statearr_36509_36536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (5))){
var inst_36478 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36479 = cljs.core.async.close_BANG_.call(null,fc);
var state_36498__$1 = (function (){var statearr_36510 = state_36498;
(statearr_36510[(8)] = inst_36478);

return statearr_36510;
})();
var statearr_36511_36537 = state_36498__$1;
(statearr_36511_36537[(2)] = inst_36479);

(statearr_36511_36537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (14))){
var inst_36492 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
var statearr_36512_36538 = state_36498__$1;
(statearr_36512_36538[(2)] = inst_36492);

(statearr_36512_36538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (10))){
var state_36498__$1 = state_36498;
var statearr_36513_36539 = state_36498__$1;
(statearr_36513_36539[(2)] = fc);

(statearr_36513_36539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (8))){
var inst_36487 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
if(cljs.core.truth_(inst_36487)){
var statearr_36514_36540 = state_36498__$1;
(statearr_36514_36540[(1)] = (12));

} else {
var statearr_36515_36541 = state_36498__$1;
(statearr_36515_36541[(1)] = (13));

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
});})(c__35841__auto___36527,tc,fc))
;
return ((function (switch__35729__auto__,c__35841__auto___36527,tc,fc){
return (function() {
var cljs$core$async$state_machine__35730__auto__ = null;
var cljs$core$async$state_machine__35730__auto____0 = (function (){
var statearr_36519 = [null,null,null,null,null,null,null,null,null];
(statearr_36519[(0)] = cljs$core$async$state_machine__35730__auto__);

(statearr_36519[(1)] = (1));

return statearr_36519;
});
var cljs$core$async$state_machine__35730__auto____1 = (function (state_36498){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_36498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e36520){if((e36520 instanceof Object)){
var ex__35733__auto__ = e36520;
var statearr_36521_36542 = state_36498;
(statearr_36521_36542[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36543 = state_36498;
state_36498 = G__36543;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$state_machine__35730__auto__ = function(state_36498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35730__auto____1.call(this,state_36498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35730__auto____0;
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35730__auto____1;
return cljs$core$async$state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___36527,tc,fc))
})();
var state__35843__auto__ = (function (){var statearr_36522 = f__35842__auto__.call(null);
(statearr_36522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___36527);

return statearr_36522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___36527,tc,fc))
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
var c__35841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto__){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto__){
return (function (state_36607){
var state_val_36608 = (state_36607[(1)]);
if((state_val_36608 === (7))){
var inst_36603 = (state_36607[(2)]);
var state_36607__$1 = state_36607;
var statearr_36609_36630 = state_36607__$1;
(statearr_36609_36630[(2)] = inst_36603);

(statearr_36609_36630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (1))){
var inst_36587 = init;
var state_36607__$1 = (function (){var statearr_36610 = state_36607;
(statearr_36610[(7)] = inst_36587);

return statearr_36610;
})();
var statearr_36611_36631 = state_36607__$1;
(statearr_36611_36631[(2)] = null);

(statearr_36611_36631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (4))){
var inst_36590 = (state_36607[(8)]);
var inst_36590__$1 = (state_36607[(2)]);
var inst_36591 = (inst_36590__$1 == null);
var state_36607__$1 = (function (){var statearr_36612 = state_36607;
(statearr_36612[(8)] = inst_36590__$1);

return statearr_36612;
})();
if(cljs.core.truth_(inst_36591)){
var statearr_36613_36632 = state_36607__$1;
(statearr_36613_36632[(1)] = (5));

} else {
var statearr_36614_36633 = state_36607__$1;
(statearr_36614_36633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (6))){
var inst_36594 = (state_36607[(9)]);
var inst_36590 = (state_36607[(8)]);
var inst_36587 = (state_36607[(7)]);
var inst_36594__$1 = f.call(null,inst_36587,inst_36590);
var inst_36595 = cljs.core.reduced_QMARK_.call(null,inst_36594__$1);
var state_36607__$1 = (function (){var statearr_36615 = state_36607;
(statearr_36615[(9)] = inst_36594__$1);

return statearr_36615;
})();
if(inst_36595){
var statearr_36616_36634 = state_36607__$1;
(statearr_36616_36634[(1)] = (8));

} else {
var statearr_36617_36635 = state_36607__$1;
(statearr_36617_36635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (3))){
var inst_36605 = (state_36607[(2)]);
var state_36607__$1 = state_36607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36607__$1,inst_36605);
} else {
if((state_val_36608 === (2))){
var state_36607__$1 = state_36607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36607__$1,(4),ch);
} else {
if((state_val_36608 === (9))){
var inst_36594 = (state_36607[(9)]);
var inst_36587 = inst_36594;
var state_36607__$1 = (function (){var statearr_36618 = state_36607;
(statearr_36618[(7)] = inst_36587);

return statearr_36618;
})();
var statearr_36619_36636 = state_36607__$1;
(statearr_36619_36636[(2)] = null);

(statearr_36619_36636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (5))){
var inst_36587 = (state_36607[(7)]);
var state_36607__$1 = state_36607;
var statearr_36620_36637 = state_36607__$1;
(statearr_36620_36637[(2)] = inst_36587);

(statearr_36620_36637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (10))){
var inst_36601 = (state_36607[(2)]);
var state_36607__$1 = state_36607;
var statearr_36621_36638 = state_36607__$1;
(statearr_36621_36638[(2)] = inst_36601);

(statearr_36621_36638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (8))){
var inst_36594 = (state_36607[(9)]);
var inst_36597 = cljs.core.deref.call(null,inst_36594);
var state_36607__$1 = state_36607;
var statearr_36622_36639 = state_36607__$1;
(statearr_36622_36639[(2)] = inst_36597);

(statearr_36622_36639[(1)] = (10));


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
});})(c__35841__auto__))
;
return ((function (switch__35729__auto__,c__35841__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35730__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35730__auto____0 = (function (){
var statearr_36626 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36626[(0)] = cljs$core$async$reduce_$_state_machine__35730__auto__);

(statearr_36626[(1)] = (1));

return statearr_36626;
});
var cljs$core$async$reduce_$_state_machine__35730__auto____1 = (function (state_36607){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_36607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e36627){if((e36627 instanceof Object)){
var ex__35733__auto__ = e36627;
var statearr_36628_36640 = state_36607;
(statearr_36628_36640[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36641 = state_36607;
state_36607 = G__36641;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35730__auto__ = function(state_36607){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35730__auto____1.call(this,state_36607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35730__auto____0;
cljs$core$async$reduce_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35730__auto____1;
return cljs$core$async$reduce_$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto__))
})();
var state__35843__auto__ = (function (){var statearr_36629 = f__35842__auto__.call(null);
(statearr_36629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto__);

return statearr_36629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto__))
);

return c__35841__auto__;
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
var args36642 = [];
var len__31936__auto___36694 = arguments.length;
var i__31937__auto___36695 = (0);
while(true){
if((i__31937__auto___36695 < len__31936__auto___36694)){
args36642.push((arguments[i__31937__auto___36695]));

var G__36696 = (i__31937__auto___36695 + (1));
i__31937__auto___36695 = G__36696;
continue;
} else {
}
break;
}

var G__36644 = args36642.length;
switch (G__36644) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36642.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto__){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto__){
return (function (state_36669){
var state_val_36670 = (state_36669[(1)]);
if((state_val_36670 === (7))){
var inst_36651 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36671_36698 = state_36669__$1;
(statearr_36671_36698[(2)] = inst_36651);

(statearr_36671_36698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (1))){
var inst_36645 = cljs.core.seq.call(null,coll);
var inst_36646 = inst_36645;
var state_36669__$1 = (function (){var statearr_36672 = state_36669;
(statearr_36672[(7)] = inst_36646);

return statearr_36672;
})();
var statearr_36673_36699 = state_36669__$1;
(statearr_36673_36699[(2)] = null);

(statearr_36673_36699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (4))){
var inst_36646 = (state_36669[(7)]);
var inst_36649 = cljs.core.first.call(null,inst_36646);
var state_36669__$1 = state_36669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36669__$1,(7),ch,inst_36649);
} else {
if((state_val_36670 === (13))){
var inst_36663 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36674_36700 = state_36669__$1;
(statearr_36674_36700[(2)] = inst_36663);

(statearr_36674_36700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (6))){
var inst_36654 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
if(cljs.core.truth_(inst_36654)){
var statearr_36675_36701 = state_36669__$1;
(statearr_36675_36701[(1)] = (8));

} else {
var statearr_36676_36702 = state_36669__$1;
(statearr_36676_36702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (3))){
var inst_36667 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36669__$1,inst_36667);
} else {
if((state_val_36670 === (12))){
var state_36669__$1 = state_36669;
var statearr_36677_36703 = state_36669__$1;
(statearr_36677_36703[(2)] = null);

(statearr_36677_36703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (2))){
var inst_36646 = (state_36669[(7)]);
var state_36669__$1 = state_36669;
if(cljs.core.truth_(inst_36646)){
var statearr_36678_36704 = state_36669__$1;
(statearr_36678_36704[(1)] = (4));

} else {
var statearr_36679_36705 = state_36669__$1;
(statearr_36679_36705[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (11))){
var inst_36660 = cljs.core.async.close_BANG_.call(null,ch);
var state_36669__$1 = state_36669;
var statearr_36680_36706 = state_36669__$1;
(statearr_36680_36706[(2)] = inst_36660);

(statearr_36680_36706[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (9))){
var state_36669__$1 = state_36669;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36681_36707 = state_36669__$1;
(statearr_36681_36707[(1)] = (11));

} else {
var statearr_36682_36708 = state_36669__$1;
(statearr_36682_36708[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (5))){
var inst_36646 = (state_36669[(7)]);
var state_36669__$1 = state_36669;
var statearr_36683_36709 = state_36669__$1;
(statearr_36683_36709[(2)] = inst_36646);

(statearr_36683_36709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (10))){
var inst_36665 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36684_36710 = state_36669__$1;
(statearr_36684_36710[(2)] = inst_36665);

(statearr_36684_36710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (8))){
var inst_36646 = (state_36669[(7)]);
var inst_36656 = cljs.core.next.call(null,inst_36646);
var inst_36646__$1 = inst_36656;
var state_36669__$1 = (function (){var statearr_36685 = state_36669;
(statearr_36685[(7)] = inst_36646__$1);

return statearr_36685;
})();
var statearr_36686_36711 = state_36669__$1;
(statearr_36686_36711[(2)] = null);

(statearr_36686_36711[(1)] = (2));


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
});})(c__35841__auto__))
;
return ((function (switch__35729__auto__,c__35841__auto__){
return (function() {
var cljs$core$async$state_machine__35730__auto__ = null;
var cljs$core$async$state_machine__35730__auto____0 = (function (){
var statearr_36690 = [null,null,null,null,null,null,null,null];
(statearr_36690[(0)] = cljs$core$async$state_machine__35730__auto__);

(statearr_36690[(1)] = (1));

return statearr_36690;
});
var cljs$core$async$state_machine__35730__auto____1 = (function (state_36669){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_36669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e36691){if((e36691 instanceof Object)){
var ex__35733__auto__ = e36691;
var statearr_36692_36712 = state_36669;
(statearr_36692_36712[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36713 = state_36669;
state_36669 = G__36713;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$state_machine__35730__auto__ = function(state_36669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35730__auto____1.call(this,state_36669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35730__auto____0;
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35730__auto____1;
return cljs$core$async$state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto__))
})();
var state__35843__auto__ = (function (){var statearr_36693 = f__35842__auto__.call(null);
(statearr_36693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto__);

return statearr_36693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto__))
);

return c__35841__auto__;
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
var x__31524__auto__ = (((_ == null))?null:_);
var m__31525__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,_);
} else {
var m__31525__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,_);
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
var x__31524__auto__ = (((m == null))?null:m);
var m__31525__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31525__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__31524__auto__ = (((m == null))?null:m);
var m__31525__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,m,ch);
} else {
var m__31525__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,m,ch);
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
var x__31524__auto__ = (((m == null))?null:m);
var m__31525__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,m);
} else {
var m__31525__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async36939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36939 = (function (mult,ch,cs,meta36940){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36940 = meta36940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36941,meta36940__$1){
var self__ = this;
var _36941__$1 = this;
return (new cljs.core.async.t_cljs$core$async36939(self__.mult,self__.ch,self__.cs,meta36940__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36941){
var self__ = this;
var _36941__$1 = this;
return self__.meta36940;
});})(cs))
;

cljs.core.async.t_cljs$core$async36939.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36939.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36939.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async36939.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36939.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36939.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36939.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36940","meta36940",33825852,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36939";

cljs.core.async.t_cljs$core$async36939.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31467__auto__,writer__31468__auto__,opt__31469__auto__){
return cljs.core._write.call(null,writer__31468__auto__,"cljs.core.async/t_cljs$core$async36939");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36939 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36939(mult__$1,ch__$1,cs__$1,meta36940){
return (new cljs.core.async.t_cljs$core$async36939(mult__$1,ch__$1,cs__$1,meta36940));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36939(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35841__auto___37164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___37164,cs,m,dchan,dctr,done){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___37164,cs,m,dchan,dctr,done){
return (function (state_37076){
var state_val_37077 = (state_37076[(1)]);
if((state_val_37077 === (7))){
var inst_37072 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
var statearr_37078_37165 = state_37076__$1;
(statearr_37078_37165[(2)] = inst_37072);

(statearr_37078_37165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (20))){
var inst_36975 = (state_37076[(7)]);
var inst_36987 = cljs.core.first.call(null,inst_36975);
var inst_36988 = cljs.core.nth.call(null,inst_36987,(0),null);
var inst_36989 = cljs.core.nth.call(null,inst_36987,(1),null);
var state_37076__$1 = (function (){var statearr_37079 = state_37076;
(statearr_37079[(8)] = inst_36988);

return statearr_37079;
})();
if(cljs.core.truth_(inst_36989)){
var statearr_37080_37166 = state_37076__$1;
(statearr_37080_37166[(1)] = (22));

} else {
var statearr_37081_37167 = state_37076__$1;
(statearr_37081_37167[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (27))){
var inst_36944 = (state_37076[(9)]);
var inst_37024 = (state_37076[(10)]);
var inst_37017 = (state_37076[(11)]);
var inst_37019 = (state_37076[(12)]);
var inst_37024__$1 = cljs.core._nth.call(null,inst_37017,inst_37019);
var inst_37025 = cljs.core.async.put_BANG_.call(null,inst_37024__$1,inst_36944,done);
var state_37076__$1 = (function (){var statearr_37082 = state_37076;
(statearr_37082[(10)] = inst_37024__$1);

return statearr_37082;
})();
if(cljs.core.truth_(inst_37025)){
var statearr_37083_37168 = state_37076__$1;
(statearr_37083_37168[(1)] = (30));

} else {
var statearr_37084_37169 = state_37076__$1;
(statearr_37084_37169[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (1))){
var state_37076__$1 = state_37076;
var statearr_37085_37170 = state_37076__$1;
(statearr_37085_37170[(2)] = null);

(statearr_37085_37170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (24))){
var inst_36975 = (state_37076[(7)]);
var inst_36994 = (state_37076[(2)]);
var inst_36995 = cljs.core.next.call(null,inst_36975);
var inst_36953 = inst_36995;
var inst_36954 = null;
var inst_36955 = (0);
var inst_36956 = (0);
var state_37076__$1 = (function (){var statearr_37086 = state_37076;
(statearr_37086[(13)] = inst_36954);

(statearr_37086[(14)] = inst_36953);

(statearr_37086[(15)] = inst_36956);

(statearr_37086[(16)] = inst_36994);

(statearr_37086[(17)] = inst_36955);

return statearr_37086;
})();
var statearr_37087_37171 = state_37076__$1;
(statearr_37087_37171[(2)] = null);

(statearr_37087_37171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (39))){
var state_37076__$1 = state_37076;
var statearr_37091_37172 = state_37076__$1;
(statearr_37091_37172[(2)] = null);

(statearr_37091_37172[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (4))){
var inst_36944 = (state_37076[(9)]);
var inst_36944__$1 = (state_37076[(2)]);
var inst_36945 = (inst_36944__$1 == null);
var state_37076__$1 = (function (){var statearr_37092 = state_37076;
(statearr_37092[(9)] = inst_36944__$1);

return statearr_37092;
})();
if(cljs.core.truth_(inst_36945)){
var statearr_37093_37173 = state_37076__$1;
(statearr_37093_37173[(1)] = (5));

} else {
var statearr_37094_37174 = state_37076__$1;
(statearr_37094_37174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (15))){
var inst_36954 = (state_37076[(13)]);
var inst_36953 = (state_37076[(14)]);
var inst_36956 = (state_37076[(15)]);
var inst_36955 = (state_37076[(17)]);
var inst_36971 = (state_37076[(2)]);
var inst_36972 = (inst_36956 + (1));
var tmp37088 = inst_36954;
var tmp37089 = inst_36953;
var tmp37090 = inst_36955;
var inst_36953__$1 = tmp37089;
var inst_36954__$1 = tmp37088;
var inst_36955__$1 = tmp37090;
var inst_36956__$1 = inst_36972;
var state_37076__$1 = (function (){var statearr_37095 = state_37076;
(statearr_37095[(13)] = inst_36954__$1);

(statearr_37095[(14)] = inst_36953__$1);

(statearr_37095[(18)] = inst_36971);

(statearr_37095[(15)] = inst_36956__$1);

(statearr_37095[(17)] = inst_36955__$1);

return statearr_37095;
})();
var statearr_37096_37175 = state_37076__$1;
(statearr_37096_37175[(2)] = null);

(statearr_37096_37175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (21))){
var inst_36998 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
var statearr_37100_37176 = state_37076__$1;
(statearr_37100_37176[(2)] = inst_36998);

(statearr_37100_37176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (31))){
var inst_37024 = (state_37076[(10)]);
var inst_37028 = done.call(null,null);
var inst_37029 = cljs.core.async.untap_STAR_.call(null,m,inst_37024);
var state_37076__$1 = (function (){var statearr_37101 = state_37076;
(statearr_37101[(19)] = inst_37028);

return statearr_37101;
})();
var statearr_37102_37177 = state_37076__$1;
(statearr_37102_37177[(2)] = inst_37029);

(statearr_37102_37177[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (32))){
var inst_37017 = (state_37076[(11)]);
var inst_37016 = (state_37076[(20)]);
var inst_37019 = (state_37076[(12)]);
var inst_37018 = (state_37076[(21)]);
var inst_37031 = (state_37076[(2)]);
var inst_37032 = (inst_37019 + (1));
var tmp37097 = inst_37017;
var tmp37098 = inst_37016;
var tmp37099 = inst_37018;
var inst_37016__$1 = tmp37098;
var inst_37017__$1 = tmp37097;
var inst_37018__$1 = tmp37099;
var inst_37019__$1 = inst_37032;
var state_37076__$1 = (function (){var statearr_37103 = state_37076;
(statearr_37103[(22)] = inst_37031);

(statearr_37103[(11)] = inst_37017__$1);

(statearr_37103[(20)] = inst_37016__$1);

(statearr_37103[(12)] = inst_37019__$1);

(statearr_37103[(21)] = inst_37018__$1);

return statearr_37103;
})();
var statearr_37104_37178 = state_37076__$1;
(statearr_37104_37178[(2)] = null);

(statearr_37104_37178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (40))){
var inst_37044 = (state_37076[(23)]);
var inst_37048 = done.call(null,null);
var inst_37049 = cljs.core.async.untap_STAR_.call(null,m,inst_37044);
var state_37076__$1 = (function (){var statearr_37105 = state_37076;
(statearr_37105[(24)] = inst_37048);

return statearr_37105;
})();
var statearr_37106_37179 = state_37076__$1;
(statearr_37106_37179[(2)] = inst_37049);

(statearr_37106_37179[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (33))){
var inst_37035 = (state_37076[(25)]);
var inst_37037 = cljs.core.chunked_seq_QMARK_.call(null,inst_37035);
var state_37076__$1 = state_37076;
if(inst_37037){
var statearr_37107_37180 = state_37076__$1;
(statearr_37107_37180[(1)] = (36));

} else {
var statearr_37108_37181 = state_37076__$1;
(statearr_37108_37181[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (13))){
var inst_36965 = (state_37076[(26)]);
var inst_36968 = cljs.core.async.close_BANG_.call(null,inst_36965);
var state_37076__$1 = state_37076;
var statearr_37109_37182 = state_37076__$1;
(statearr_37109_37182[(2)] = inst_36968);

(statearr_37109_37182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (22))){
var inst_36988 = (state_37076[(8)]);
var inst_36991 = cljs.core.async.close_BANG_.call(null,inst_36988);
var state_37076__$1 = state_37076;
var statearr_37110_37183 = state_37076__$1;
(statearr_37110_37183[(2)] = inst_36991);

(statearr_37110_37183[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (36))){
var inst_37035 = (state_37076[(25)]);
var inst_37039 = cljs.core.chunk_first.call(null,inst_37035);
var inst_37040 = cljs.core.chunk_rest.call(null,inst_37035);
var inst_37041 = cljs.core.count.call(null,inst_37039);
var inst_37016 = inst_37040;
var inst_37017 = inst_37039;
var inst_37018 = inst_37041;
var inst_37019 = (0);
var state_37076__$1 = (function (){var statearr_37111 = state_37076;
(statearr_37111[(11)] = inst_37017);

(statearr_37111[(20)] = inst_37016);

(statearr_37111[(12)] = inst_37019);

(statearr_37111[(21)] = inst_37018);

return statearr_37111;
})();
var statearr_37112_37184 = state_37076__$1;
(statearr_37112_37184[(2)] = null);

(statearr_37112_37184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (41))){
var inst_37035 = (state_37076[(25)]);
var inst_37051 = (state_37076[(2)]);
var inst_37052 = cljs.core.next.call(null,inst_37035);
var inst_37016 = inst_37052;
var inst_37017 = null;
var inst_37018 = (0);
var inst_37019 = (0);
var state_37076__$1 = (function (){var statearr_37113 = state_37076;
(statearr_37113[(27)] = inst_37051);

(statearr_37113[(11)] = inst_37017);

(statearr_37113[(20)] = inst_37016);

(statearr_37113[(12)] = inst_37019);

(statearr_37113[(21)] = inst_37018);

return statearr_37113;
})();
var statearr_37114_37185 = state_37076__$1;
(statearr_37114_37185[(2)] = null);

(statearr_37114_37185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (43))){
var state_37076__$1 = state_37076;
var statearr_37115_37186 = state_37076__$1;
(statearr_37115_37186[(2)] = null);

(statearr_37115_37186[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (29))){
var inst_37060 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
var statearr_37116_37187 = state_37076__$1;
(statearr_37116_37187[(2)] = inst_37060);

(statearr_37116_37187[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (44))){
var inst_37069 = (state_37076[(2)]);
var state_37076__$1 = (function (){var statearr_37117 = state_37076;
(statearr_37117[(28)] = inst_37069);

return statearr_37117;
})();
var statearr_37118_37188 = state_37076__$1;
(statearr_37118_37188[(2)] = null);

(statearr_37118_37188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (6))){
var inst_37008 = (state_37076[(29)]);
var inst_37007 = cljs.core.deref.call(null,cs);
var inst_37008__$1 = cljs.core.keys.call(null,inst_37007);
var inst_37009 = cljs.core.count.call(null,inst_37008__$1);
var inst_37010 = cljs.core.reset_BANG_.call(null,dctr,inst_37009);
var inst_37015 = cljs.core.seq.call(null,inst_37008__$1);
var inst_37016 = inst_37015;
var inst_37017 = null;
var inst_37018 = (0);
var inst_37019 = (0);
var state_37076__$1 = (function (){var statearr_37119 = state_37076;
(statearr_37119[(30)] = inst_37010);

(statearr_37119[(29)] = inst_37008__$1);

(statearr_37119[(11)] = inst_37017);

(statearr_37119[(20)] = inst_37016);

(statearr_37119[(12)] = inst_37019);

(statearr_37119[(21)] = inst_37018);

return statearr_37119;
})();
var statearr_37120_37189 = state_37076__$1;
(statearr_37120_37189[(2)] = null);

(statearr_37120_37189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (28))){
var inst_37016 = (state_37076[(20)]);
var inst_37035 = (state_37076[(25)]);
var inst_37035__$1 = cljs.core.seq.call(null,inst_37016);
var state_37076__$1 = (function (){var statearr_37121 = state_37076;
(statearr_37121[(25)] = inst_37035__$1);

return statearr_37121;
})();
if(inst_37035__$1){
var statearr_37122_37190 = state_37076__$1;
(statearr_37122_37190[(1)] = (33));

} else {
var statearr_37123_37191 = state_37076__$1;
(statearr_37123_37191[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (25))){
var inst_37019 = (state_37076[(12)]);
var inst_37018 = (state_37076[(21)]);
var inst_37021 = (inst_37019 < inst_37018);
var inst_37022 = inst_37021;
var state_37076__$1 = state_37076;
if(cljs.core.truth_(inst_37022)){
var statearr_37124_37192 = state_37076__$1;
(statearr_37124_37192[(1)] = (27));

} else {
var statearr_37125_37193 = state_37076__$1;
(statearr_37125_37193[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (34))){
var state_37076__$1 = state_37076;
var statearr_37126_37194 = state_37076__$1;
(statearr_37126_37194[(2)] = null);

(statearr_37126_37194[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (17))){
var state_37076__$1 = state_37076;
var statearr_37127_37195 = state_37076__$1;
(statearr_37127_37195[(2)] = null);

(statearr_37127_37195[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (3))){
var inst_37074 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37076__$1,inst_37074);
} else {
if((state_val_37077 === (12))){
var inst_37003 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
var statearr_37128_37196 = state_37076__$1;
(statearr_37128_37196[(2)] = inst_37003);

(statearr_37128_37196[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (2))){
var state_37076__$1 = state_37076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37076__$1,(4),ch);
} else {
if((state_val_37077 === (23))){
var state_37076__$1 = state_37076;
var statearr_37129_37197 = state_37076__$1;
(statearr_37129_37197[(2)] = null);

(statearr_37129_37197[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (35))){
var inst_37058 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
var statearr_37130_37198 = state_37076__$1;
(statearr_37130_37198[(2)] = inst_37058);

(statearr_37130_37198[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (19))){
var inst_36975 = (state_37076[(7)]);
var inst_36979 = cljs.core.chunk_first.call(null,inst_36975);
var inst_36980 = cljs.core.chunk_rest.call(null,inst_36975);
var inst_36981 = cljs.core.count.call(null,inst_36979);
var inst_36953 = inst_36980;
var inst_36954 = inst_36979;
var inst_36955 = inst_36981;
var inst_36956 = (0);
var state_37076__$1 = (function (){var statearr_37131 = state_37076;
(statearr_37131[(13)] = inst_36954);

(statearr_37131[(14)] = inst_36953);

(statearr_37131[(15)] = inst_36956);

(statearr_37131[(17)] = inst_36955);

return statearr_37131;
})();
var statearr_37132_37199 = state_37076__$1;
(statearr_37132_37199[(2)] = null);

(statearr_37132_37199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (11))){
var inst_36953 = (state_37076[(14)]);
var inst_36975 = (state_37076[(7)]);
var inst_36975__$1 = cljs.core.seq.call(null,inst_36953);
var state_37076__$1 = (function (){var statearr_37133 = state_37076;
(statearr_37133[(7)] = inst_36975__$1);

return statearr_37133;
})();
if(inst_36975__$1){
var statearr_37134_37200 = state_37076__$1;
(statearr_37134_37200[(1)] = (16));

} else {
var statearr_37135_37201 = state_37076__$1;
(statearr_37135_37201[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (9))){
var inst_37005 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
var statearr_37136_37202 = state_37076__$1;
(statearr_37136_37202[(2)] = inst_37005);

(statearr_37136_37202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (5))){
var inst_36951 = cljs.core.deref.call(null,cs);
var inst_36952 = cljs.core.seq.call(null,inst_36951);
var inst_36953 = inst_36952;
var inst_36954 = null;
var inst_36955 = (0);
var inst_36956 = (0);
var state_37076__$1 = (function (){var statearr_37137 = state_37076;
(statearr_37137[(13)] = inst_36954);

(statearr_37137[(14)] = inst_36953);

(statearr_37137[(15)] = inst_36956);

(statearr_37137[(17)] = inst_36955);

return statearr_37137;
})();
var statearr_37138_37203 = state_37076__$1;
(statearr_37138_37203[(2)] = null);

(statearr_37138_37203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (14))){
var state_37076__$1 = state_37076;
var statearr_37139_37204 = state_37076__$1;
(statearr_37139_37204[(2)] = null);

(statearr_37139_37204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (45))){
var inst_37066 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
var statearr_37140_37205 = state_37076__$1;
(statearr_37140_37205[(2)] = inst_37066);

(statearr_37140_37205[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (26))){
var inst_37008 = (state_37076[(29)]);
var inst_37062 = (state_37076[(2)]);
var inst_37063 = cljs.core.seq.call(null,inst_37008);
var state_37076__$1 = (function (){var statearr_37141 = state_37076;
(statearr_37141[(31)] = inst_37062);

return statearr_37141;
})();
if(inst_37063){
var statearr_37142_37206 = state_37076__$1;
(statearr_37142_37206[(1)] = (42));

} else {
var statearr_37143_37207 = state_37076__$1;
(statearr_37143_37207[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (16))){
var inst_36975 = (state_37076[(7)]);
var inst_36977 = cljs.core.chunked_seq_QMARK_.call(null,inst_36975);
var state_37076__$1 = state_37076;
if(inst_36977){
var statearr_37144_37208 = state_37076__$1;
(statearr_37144_37208[(1)] = (19));

} else {
var statearr_37145_37209 = state_37076__$1;
(statearr_37145_37209[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (38))){
var inst_37055 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
var statearr_37146_37210 = state_37076__$1;
(statearr_37146_37210[(2)] = inst_37055);

(statearr_37146_37210[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (30))){
var state_37076__$1 = state_37076;
var statearr_37147_37211 = state_37076__$1;
(statearr_37147_37211[(2)] = null);

(statearr_37147_37211[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (10))){
var inst_36954 = (state_37076[(13)]);
var inst_36956 = (state_37076[(15)]);
var inst_36964 = cljs.core._nth.call(null,inst_36954,inst_36956);
var inst_36965 = cljs.core.nth.call(null,inst_36964,(0),null);
var inst_36966 = cljs.core.nth.call(null,inst_36964,(1),null);
var state_37076__$1 = (function (){var statearr_37148 = state_37076;
(statearr_37148[(26)] = inst_36965);

return statearr_37148;
})();
if(cljs.core.truth_(inst_36966)){
var statearr_37149_37212 = state_37076__$1;
(statearr_37149_37212[(1)] = (13));

} else {
var statearr_37150_37213 = state_37076__$1;
(statearr_37150_37213[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (18))){
var inst_37001 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
var statearr_37151_37214 = state_37076__$1;
(statearr_37151_37214[(2)] = inst_37001);

(statearr_37151_37214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (42))){
var state_37076__$1 = state_37076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37076__$1,(45),dchan);
} else {
if((state_val_37077 === (37))){
var inst_37044 = (state_37076[(23)]);
var inst_36944 = (state_37076[(9)]);
var inst_37035 = (state_37076[(25)]);
var inst_37044__$1 = cljs.core.first.call(null,inst_37035);
var inst_37045 = cljs.core.async.put_BANG_.call(null,inst_37044__$1,inst_36944,done);
var state_37076__$1 = (function (){var statearr_37152 = state_37076;
(statearr_37152[(23)] = inst_37044__$1);

return statearr_37152;
})();
if(cljs.core.truth_(inst_37045)){
var statearr_37153_37215 = state_37076__$1;
(statearr_37153_37215[(1)] = (39));

} else {
var statearr_37154_37216 = state_37076__$1;
(statearr_37154_37216[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (8))){
var inst_36956 = (state_37076[(15)]);
var inst_36955 = (state_37076[(17)]);
var inst_36958 = (inst_36956 < inst_36955);
var inst_36959 = inst_36958;
var state_37076__$1 = state_37076;
if(cljs.core.truth_(inst_36959)){
var statearr_37155_37217 = state_37076__$1;
(statearr_37155_37217[(1)] = (10));

} else {
var statearr_37156_37218 = state_37076__$1;
(statearr_37156_37218[(1)] = (11));

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
});})(c__35841__auto___37164,cs,m,dchan,dctr,done))
;
return ((function (switch__35729__auto__,c__35841__auto___37164,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35730__auto__ = null;
var cljs$core$async$mult_$_state_machine__35730__auto____0 = (function (){
var statearr_37160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37160[(0)] = cljs$core$async$mult_$_state_machine__35730__auto__);

(statearr_37160[(1)] = (1));

return statearr_37160;
});
var cljs$core$async$mult_$_state_machine__35730__auto____1 = (function (state_37076){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_37076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e37161){if((e37161 instanceof Object)){
var ex__35733__auto__ = e37161;
var statearr_37162_37219 = state_37076;
(statearr_37162_37219[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37220 = state_37076;
state_37076 = G__37220;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35730__auto__ = function(state_37076){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35730__auto____1.call(this,state_37076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35730__auto____0;
cljs$core$async$mult_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35730__auto____1;
return cljs$core$async$mult_$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___37164,cs,m,dchan,dctr,done))
})();
var state__35843__auto__ = (function (){var statearr_37163 = f__35842__auto__.call(null);
(statearr_37163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___37164);

return statearr_37163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___37164,cs,m,dchan,dctr,done))
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
var args37221 = [];
var len__31936__auto___37224 = arguments.length;
var i__31937__auto___37225 = (0);
while(true){
if((i__31937__auto___37225 < len__31936__auto___37224)){
args37221.push((arguments[i__31937__auto___37225]));

var G__37226 = (i__31937__auto___37225 + (1));
i__31937__auto___37225 = G__37226;
continue;
} else {
}
break;
}

var G__37223 = args37221.length;
switch (G__37223) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37221.length)].join('')));

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
var x__31524__auto__ = (((m == null))?null:m);
var m__31525__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,m,ch);
} else {
var m__31525__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,m,ch);
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
var x__31524__auto__ = (((m == null))?null:m);
var m__31525__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,m,ch);
} else {
var m__31525__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,m,ch);
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
var x__31524__auto__ = (((m == null))?null:m);
var m__31525__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,m);
} else {
var m__31525__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,m);
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
var x__31524__auto__ = (((m == null))?null:m);
var m__31525__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,m,state_map);
} else {
var m__31525__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,m,state_map);
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
var x__31524__auto__ = (((m == null))?null:m);
var m__31525__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,m,mode);
} else {
var m__31525__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31943__auto__ = [];
var len__31936__auto___37288 = arguments.length;
var i__31937__auto___37289 = (0);
while(true){
if((i__31937__auto___37289 < len__31936__auto___37288)){
args__31943__auto__.push((arguments[i__31937__auto___37289]));

var G__37290 = (i__31937__auto___37289 + (1));
i__31937__auto___37289 = G__37290;
continue;
} else {
}
break;
}

var argseq__31944__auto__ = ((((3) < args__31943__auto__.length))?(new cljs.core.IndexedSeq(args__31943__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31944__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37282){
var map__37283 = p__37282;
var map__37283__$1 = ((((!((map__37283 == null)))?((((map__37283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37283):map__37283);
var opts = map__37283__$1;
var statearr_37285_37291 = state;
(statearr_37285_37291[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__37283,map__37283__$1,opts){
return (function (val){
var statearr_37286_37292 = state;
(statearr_37286_37292[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37283,map__37283__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_37287_37293 = state;
(statearr_37287_37293[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37278){
var G__37279 = cljs.core.first.call(null,seq37278);
var seq37278__$1 = cljs.core.next.call(null,seq37278);
var G__37280 = cljs.core.first.call(null,seq37278__$1);
var seq37278__$2 = cljs.core.next.call(null,seq37278__$1);
var G__37281 = cljs.core.first.call(null,seq37278__$2);
var seq37278__$3 = cljs.core.next.call(null,seq37278__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37279,G__37280,G__37281,seq37278__$3);
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
if(typeof cljs.core.async.t_cljs$core$async37459 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37459 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37460){
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
this.meta37460 = meta37460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37461,meta37460__$1){
var self__ = this;
var _37461__$1 = this;
return (new cljs.core.async.t_cljs$core$async37459(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37460__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37459.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37461){
var self__ = this;
var _37461__$1 = this;
return self__.meta37460;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37459.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37459.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37459.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async37459.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37459.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37459.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37459.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37459.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async37459.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37460","meta37460",746362802,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37459.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37459";

cljs.core.async.t_cljs$core$async37459.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31467__auto__,writer__31468__auto__,opt__31469__auto__){
return cljs.core._write.call(null,writer__31468__auto__,"cljs.core.async/t_cljs$core$async37459");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37459 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37459(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37460){
return (new cljs.core.async.t_cljs$core$async37459(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37460));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37459(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35841__auto___37624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___37624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___37624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37561){
var state_val_37562 = (state_37561[(1)]);
if((state_val_37562 === (7))){
var inst_37477 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
var statearr_37563_37625 = state_37561__$1;
(statearr_37563_37625[(2)] = inst_37477);

(statearr_37563_37625[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (20))){
var inst_37489 = (state_37561[(7)]);
var state_37561__$1 = state_37561;
var statearr_37564_37626 = state_37561__$1;
(statearr_37564_37626[(2)] = inst_37489);

(statearr_37564_37626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (27))){
var state_37561__$1 = state_37561;
var statearr_37565_37627 = state_37561__$1;
(statearr_37565_37627[(2)] = null);

(statearr_37565_37627[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (1))){
var inst_37465 = (state_37561[(8)]);
var inst_37465__$1 = calc_state.call(null);
var inst_37467 = (inst_37465__$1 == null);
var inst_37468 = cljs.core.not.call(null,inst_37467);
var state_37561__$1 = (function (){var statearr_37566 = state_37561;
(statearr_37566[(8)] = inst_37465__$1);

return statearr_37566;
})();
if(inst_37468){
var statearr_37567_37628 = state_37561__$1;
(statearr_37567_37628[(1)] = (2));

} else {
var statearr_37568_37629 = state_37561__$1;
(statearr_37568_37629[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (24))){
var inst_37535 = (state_37561[(9)]);
var inst_37512 = (state_37561[(10)]);
var inst_37521 = (state_37561[(11)]);
var inst_37535__$1 = inst_37512.call(null,inst_37521);
var state_37561__$1 = (function (){var statearr_37569 = state_37561;
(statearr_37569[(9)] = inst_37535__$1);

return statearr_37569;
})();
if(cljs.core.truth_(inst_37535__$1)){
var statearr_37570_37630 = state_37561__$1;
(statearr_37570_37630[(1)] = (29));

} else {
var statearr_37571_37631 = state_37561__$1;
(statearr_37571_37631[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (4))){
var inst_37480 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
if(cljs.core.truth_(inst_37480)){
var statearr_37572_37632 = state_37561__$1;
(statearr_37572_37632[(1)] = (8));

} else {
var statearr_37573_37633 = state_37561__$1;
(statearr_37573_37633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (15))){
var inst_37506 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
if(cljs.core.truth_(inst_37506)){
var statearr_37574_37634 = state_37561__$1;
(statearr_37574_37634[(1)] = (19));

} else {
var statearr_37575_37635 = state_37561__$1;
(statearr_37575_37635[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (21))){
var inst_37511 = (state_37561[(12)]);
var inst_37511__$1 = (state_37561[(2)]);
var inst_37512 = cljs.core.get.call(null,inst_37511__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37513 = cljs.core.get.call(null,inst_37511__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37514 = cljs.core.get.call(null,inst_37511__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37561__$1 = (function (){var statearr_37576 = state_37561;
(statearr_37576[(13)] = inst_37513);

(statearr_37576[(10)] = inst_37512);

(statearr_37576[(12)] = inst_37511__$1);

return statearr_37576;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37561__$1,(22),inst_37514);
} else {
if((state_val_37562 === (31))){
var inst_37543 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
if(cljs.core.truth_(inst_37543)){
var statearr_37577_37636 = state_37561__$1;
(statearr_37577_37636[(1)] = (32));

} else {
var statearr_37578_37637 = state_37561__$1;
(statearr_37578_37637[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (32))){
var inst_37520 = (state_37561[(14)]);
var state_37561__$1 = state_37561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37561__$1,(35),out,inst_37520);
} else {
if((state_val_37562 === (33))){
var inst_37511 = (state_37561[(12)]);
var inst_37489 = inst_37511;
var state_37561__$1 = (function (){var statearr_37579 = state_37561;
(statearr_37579[(7)] = inst_37489);

return statearr_37579;
})();
var statearr_37580_37638 = state_37561__$1;
(statearr_37580_37638[(2)] = null);

(statearr_37580_37638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (13))){
var inst_37489 = (state_37561[(7)]);
var inst_37496 = inst_37489.cljs$lang$protocol_mask$partition0$;
var inst_37497 = (inst_37496 & (64));
var inst_37498 = inst_37489.cljs$core$ISeq$;
var inst_37499 = (inst_37497) || (inst_37498);
var state_37561__$1 = state_37561;
if(cljs.core.truth_(inst_37499)){
var statearr_37581_37639 = state_37561__$1;
(statearr_37581_37639[(1)] = (16));

} else {
var statearr_37582_37640 = state_37561__$1;
(statearr_37582_37640[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (22))){
var inst_37520 = (state_37561[(14)]);
var inst_37521 = (state_37561[(11)]);
var inst_37519 = (state_37561[(2)]);
var inst_37520__$1 = cljs.core.nth.call(null,inst_37519,(0),null);
var inst_37521__$1 = cljs.core.nth.call(null,inst_37519,(1),null);
var inst_37522 = (inst_37520__$1 == null);
var inst_37523 = cljs.core._EQ_.call(null,inst_37521__$1,change);
var inst_37524 = (inst_37522) || (inst_37523);
var state_37561__$1 = (function (){var statearr_37583 = state_37561;
(statearr_37583[(14)] = inst_37520__$1);

(statearr_37583[(11)] = inst_37521__$1);

return statearr_37583;
})();
if(cljs.core.truth_(inst_37524)){
var statearr_37584_37641 = state_37561__$1;
(statearr_37584_37641[(1)] = (23));

} else {
var statearr_37585_37642 = state_37561__$1;
(statearr_37585_37642[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (36))){
var inst_37511 = (state_37561[(12)]);
var inst_37489 = inst_37511;
var state_37561__$1 = (function (){var statearr_37586 = state_37561;
(statearr_37586[(7)] = inst_37489);

return statearr_37586;
})();
var statearr_37587_37643 = state_37561__$1;
(statearr_37587_37643[(2)] = null);

(statearr_37587_37643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (29))){
var inst_37535 = (state_37561[(9)]);
var state_37561__$1 = state_37561;
var statearr_37588_37644 = state_37561__$1;
(statearr_37588_37644[(2)] = inst_37535);

(statearr_37588_37644[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (6))){
var state_37561__$1 = state_37561;
var statearr_37589_37645 = state_37561__$1;
(statearr_37589_37645[(2)] = false);

(statearr_37589_37645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (28))){
var inst_37531 = (state_37561[(2)]);
var inst_37532 = calc_state.call(null);
var inst_37489 = inst_37532;
var state_37561__$1 = (function (){var statearr_37590 = state_37561;
(statearr_37590[(7)] = inst_37489);

(statearr_37590[(15)] = inst_37531);

return statearr_37590;
})();
var statearr_37591_37646 = state_37561__$1;
(statearr_37591_37646[(2)] = null);

(statearr_37591_37646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (25))){
var inst_37557 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
var statearr_37592_37647 = state_37561__$1;
(statearr_37592_37647[(2)] = inst_37557);

(statearr_37592_37647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (34))){
var inst_37555 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
var statearr_37593_37648 = state_37561__$1;
(statearr_37593_37648[(2)] = inst_37555);

(statearr_37593_37648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (17))){
var state_37561__$1 = state_37561;
var statearr_37594_37649 = state_37561__$1;
(statearr_37594_37649[(2)] = false);

(statearr_37594_37649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (3))){
var state_37561__$1 = state_37561;
var statearr_37595_37650 = state_37561__$1;
(statearr_37595_37650[(2)] = false);

(statearr_37595_37650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (12))){
var inst_37559 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37561__$1,inst_37559);
} else {
if((state_val_37562 === (2))){
var inst_37465 = (state_37561[(8)]);
var inst_37470 = inst_37465.cljs$lang$protocol_mask$partition0$;
var inst_37471 = (inst_37470 & (64));
var inst_37472 = inst_37465.cljs$core$ISeq$;
var inst_37473 = (inst_37471) || (inst_37472);
var state_37561__$1 = state_37561;
if(cljs.core.truth_(inst_37473)){
var statearr_37596_37651 = state_37561__$1;
(statearr_37596_37651[(1)] = (5));

} else {
var statearr_37597_37652 = state_37561__$1;
(statearr_37597_37652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (23))){
var inst_37520 = (state_37561[(14)]);
var inst_37526 = (inst_37520 == null);
var state_37561__$1 = state_37561;
if(cljs.core.truth_(inst_37526)){
var statearr_37598_37653 = state_37561__$1;
(statearr_37598_37653[(1)] = (26));

} else {
var statearr_37599_37654 = state_37561__$1;
(statearr_37599_37654[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (35))){
var inst_37546 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
if(cljs.core.truth_(inst_37546)){
var statearr_37600_37655 = state_37561__$1;
(statearr_37600_37655[(1)] = (36));

} else {
var statearr_37601_37656 = state_37561__$1;
(statearr_37601_37656[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (19))){
var inst_37489 = (state_37561[(7)]);
var inst_37508 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37489);
var state_37561__$1 = state_37561;
var statearr_37602_37657 = state_37561__$1;
(statearr_37602_37657[(2)] = inst_37508);

(statearr_37602_37657[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (11))){
var inst_37489 = (state_37561[(7)]);
var inst_37493 = (inst_37489 == null);
var inst_37494 = cljs.core.not.call(null,inst_37493);
var state_37561__$1 = state_37561;
if(inst_37494){
var statearr_37603_37658 = state_37561__$1;
(statearr_37603_37658[(1)] = (13));

} else {
var statearr_37604_37659 = state_37561__$1;
(statearr_37604_37659[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (9))){
var inst_37465 = (state_37561[(8)]);
var state_37561__$1 = state_37561;
var statearr_37605_37660 = state_37561__$1;
(statearr_37605_37660[(2)] = inst_37465);

(statearr_37605_37660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (5))){
var state_37561__$1 = state_37561;
var statearr_37606_37661 = state_37561__$1;
(statearr_37606_37661[(2)] = true);

(statearr_37606_37661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (14))){
var state_37561__$1 = state_37561;
var statearr_37607_37662 = state_37561__$1;
(statearr_37607_37662[(2)] = false);

(statearr_37607_37662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (26))){
var inst_37521 = (state_37561[(11)]);
var inst_37528 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37521);
var state_37561__$1 = state_37561;
var statearr_37608_37663 = state_37561__$1;
(statearr_37608_37663[(2)] = inst_37528);

(statearr_37608_37663[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (16))){
var state_37561__$1 = state_37561;
var statearr_37609_37664 = state_37561__$1;
(statearr_37609_37664[(2)] = true);

(statearr_37609_37664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (38))){
var inst_37551 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
var statearr_37610_37665 = state_37561__$1;
(statearr_37610_37665[(2)] = inst_37551);

(statearr_37610_37665[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (30))){
var inst_37513 = (state_37561[(13)]);
var inst_37512 = (state_37561[(10)]);
var inst_37521 = (state_37561[(11)]);
var inst_37538 = cljs.core.empty_QMARK_.call(null,inst_37512);
var inst_37539 = inst_37513.call(null,inst_37521);
var inst_37540 = cljs.core.not.call(null,inst_37539);
var inst_37541 = (inst_37538) && (inst_37540);
var state_37561__$1 = state_37561;
var statearr_37611_37666 = state_37561__$1;
(statearr_37611_37666[(2)] = inst_37541);

(statearr_37611_37666[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (10))){
var inst_37465 = (state_37561[(8)]);
var inst_37485 = (state_37561[(2)]);
var inst_37486 = cljs.core.get.call(null,inst_37485,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37487 = cljs.core.get.call(null,inst_37485,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37488 = cljs.core.get.call(null,inst_37485,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37489 = inst_37465;
var state_37561__$1 = (function (){var statearr_37612 = state_37561;
(statearr_37612[(16)] = inst_37486);

(statearr_37612[(17)] = inst_37488);

(statearr_37612[(7)] = inst_37489);

(statearr_37612[(18)] = inst_37487);

return statearr_37612;
})();
var statearr_37613_37667 = state_37561__$1;
(statearr_37613_37667[(2)] = null);

(statearr_37613_37667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (18))){
var inst_37503 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
var statearr_37614_37668 = state_37561__$1;
(statearr_37614_37668[(2)] = inst_37503);

(statearr_37614_37668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (37))){
var state_37561__$1 = state_37561;
var statearr_37615_37669 = state_37561__$1;
(statearr_37615_37669[(2)] = null);

(statearr_37615_37669[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (8))){
var inst_37465 = (state_37561[(8)]);
var inst_37482 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37465);
var state_37561__$1 = state_37561;
var statearr_37616_37670 = state_37561__$1;
(statearr_37616_37670[(2)] = inst_37482);

(statearr_37616_37670[(1)] = (10));


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
});})(c__35841__auto___37624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35729__auto__,c__35841__auto___37624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35730__auto__ = null;
var cljs$core$async$mix_$_state_machine__35730__auto____0 = (function (){
var statearr_37620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37620[(0)] = cljs$core$async$mix_$_state_machine__35730__auto__);

(statearr_37620[(1)] = (1));

return statearr_37620;
});
var cljs$core$async$mix_$_state_machine__35730__auto____1 = (function (state_37561){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_37561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e37621){if((e37621 instanceof Object)){
var ex__35733__auto__ = e37621;
var statearr_37622_37671 = state_37561;
(statearr_37622_37671[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37672 = state_37561;
state_37561 = G__37672;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35730__auto__ = function(state_37561){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35730__auto____1.call(this,state_37561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35730__auto____0;
cljs$core$async$mix_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35730__auto____1;
return cljs$core$async$mix_$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___37624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35843__auto__ = (function (){var statearr_37623 = f__35842__auto__.call(null);
(statearr_37623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___37624);

return statearr_37623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___37624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__31524__auto__ = (((p == null))?null:p);
var m__31525__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31525__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__31524__auto__ = (((p == null))?null:p);
var m__31525__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,p,v,ch);
} else {
var m__31525__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args37673 = [];
var len__31936__auto___37676 = arguments.length;
var i__31937__auto___37677 = (0);
while(true){
if((i__31937__auto___37677 < len__31936__auto___37676)){
args37673.push((arguments[i__31937__auto___37677]));

var G__37678 = (i__31937__auto___37677 + (1));
i__31937__auto___37677 = G__37678;
continue;
} else {
}
break;
}

var G__37675 = args37673.length;
switch (G__37675) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37673.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__31524__auto__ = (((p == null))?null:p);
var m__31525__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,p);
} else {
var m__31525__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,p);
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
var x__31524__auto__ = (((p == null))?null:p);
var m__31525__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31524__auto__)]);
if(!((m__31525__auto__ == null))){
return m__31525__auto__.call(null,p,v);
} else {
var m__31525__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31525__auto____$1 == null))){
return m__31525__auto____$1.call(null,p,v);
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
var args37681 = [];
var len__31936__auto___37806 = arguments.length;
var i__31937__auto___37807 = (0);
while(true){
if((i__31937__auto___37807 < len__31936__auto___37806)){
args37681.push((arguments[i__31937__auto___37807]));

var G__37808 = (i__31937__auto___37807 + (1));
i__31937__auto___37807 = G__37808;
continue;
} else {
}
break;
}

var G__37683 = args37681.length;
switch (G__37683) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37681.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30861__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30861__auto__,mults){
return (function (p1__37680_SHARP_){
if(cljs.core.truth_(p1__37680_SHARP_.call(null,topic))){
return p1__37680_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37680_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30861__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37684 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37685){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37685 = meta37685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37686,meta37685__$1){
var self__ = this;
var _37686__$1 = this;
return (new cljs.core.async.t_cljs$core$async37684(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37685__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37686){
var self__ = this;
var _37686__$1 = this;
return self__.meta37685;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37684.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37684.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async37684.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37684.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async37684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37684.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37685","meta37685",1070514852,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37684";

cljs.core.async.t_cljs$core$async37684.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31467__auto__,writer__31468__auto__,opt__31469__auto__){
return cljs.core._write.call(null,writer__31468__auto__,"cljs.core.async/t_cljs$core$async37684");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37684 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37684(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37685){
return (new cljs.core.async.t_cljs$core$async37684(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37685));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37684(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35841__auto___37810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___37810,mults,ensure_mult,p){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___37810,mults,ensure_mult,p){
return (function (state_37758){
var state_val_37759 = (state_37758[(1)]);
if((state_val_37759 === (7))){
var inst_37754 = (state_37758[(2)]);
var state_37758__$1 = state_37758;
var statearr_37760_37811 = state_37758__$1;
(statearr_37760_37811[(2)] = inst_37754);

(statearr_37760_37811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (20))){
var state_37758__$1 = state_37758;
var statearr_37761_37812 = state_37758__$1;
(statearr_37761_37812[(2)] = null);

(statearr_37761_37812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (1))){
var state_37758__$1 = state_37758;
var statearr_37762_37813 = state_37758__$1;
(statearr_37762_37813[(2)] = null);

(statearr_37762_37813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (24))){
var inst_37737 = (state_37758[(7)]);
var inst_37746 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37737);
var state_37758__$1 = state_37758;
var statearr_37763_37814 = state_37758__$1;
(statearr_37763_37814[(2)] = inst_37746);

(statearr_37763_37814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (4))){
var inst_37689 = (state_37758[(8)]);
var inst_37689__$1 = (state_37758[(2)]);
var inst_37690 = (inst_37689__$1 == null);
var state_37758__$1 = (function (){var statearr_37764 = state_37758;
(statearr_37764[(8)] = inst_37689__$1);

return statearr_37764;
})();
if(cljs.core.truth_(inst_37690)){
var statearr_37765_37815 = state_37758__$1;
(statearr_37765_37815[(1)] = (5));

} else {
var statearr_37766_37816 = state_37758__$1;
(statearr_37766_37816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (15))){
var inst_37731 = (state_37758[(2)]);
var state_37758__$1 = state_37758;
var statearr_37767_37817 = state_37758__$1;
(statearr_37767_37817[(2)] = inst_37731);

(statearr_37767_37817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (21))){
var inst_37751 = (state_37758[(2)]);
var state_37758__$1 = (function (){var statearr_37768 = state_37758;
(statearr_37768[(9)] = inst_37751);

return statearr_37768;
})();
var statearr_37769_37818 = state_37758__$1;
(statearr_37769_37818[(2)] = null);

(statearr_37769_37818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (13))){
var inst_37713 = (state_37758[(10)]);
var inst_37715 = cljs.core.chunked_seq_QMARK_.call(null,inst_37713);
var state_37758__$1 = state_37758;
if(inst_37715){
var statearr_37770_37819 = state_37758__$1;
(statearr_37770_37819[(1)] = (16));

} else {
var statearr_37771_37820 = state_37758__$1;
(statearr_37771_37820[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (22))){
var inst_37743 = (state_37758[(2)]);
var state_37758__$1 = state_37758;
if(cljs.core.truth_(inst_37743)){
var statearr_37772_37821 = state_37758__$1;
(statearr_37772_37821[(1)] = (23));

} else {
var statearr_37773_37822 = state_37758__$1;
(statearr_37773_37822[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (6))){
var inst_37739 = (state_37758[(11)]);
var inst_37737 = (state_37758[(7)]);
var inst_37689 = (state_37758[(8)]);
var inst_37737__$1 = topic_fn.call(null,inst_37689);
var inst_37738 = cljs.core.deref.call(null,mults);
var inst_37739__$1 = cljs.core.get.call(null,inst_37738,inst_37737__$1);
var state_37758__$1 = (function (){var statearr_37774 = state_37758;
(statearr_37774[(11)] = inst_37739__$1);

(statearr_37774[(7)] = inst_37737__$1);

return statearr_37774;
})();
if(cljs.core.truth_(inst_37739__$1)){
var statearr_37775_37823 = state_37758__$1;
(statearr_37775_37823[(1)] = (19));

} else {
var statearr_37776_37824 = state_37758__$1;
(statearr_37776_37824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (25))){
var inst_37748 = (state_37758[(2)]);
var state_37758__$1 = state_37758;
var statearr_37777_37825 = state_37758__$1;
(statearr_37777_37825[(2)] = inst_37748);

(statearr_37777_37825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (17))){
var inst_37713 = (state_37758[(10)]);
var inst_37722 = cljs.core.first.call(null,inst_37713);
var inst_37723 = cljs.core.async.muxch_STAR_.call(null,inst_37722);
var inst_37724 = cljs.core.async.close_BANG_.call(null,inst_37723);
var inst_37725 = cljs.core.next.call(null,inst_37713);
var inst_37699 = inst_37725;
var inst_37700 = null;
var inst_37701 = (0);
var inst_37702 = (0);
var state_37758__$1 = (function (){var statearr_37778 = state_37758;
(statearr_37778[(12)] = inst_37724);

(statearr_37778[(13)] = inst_37702);

(statearr_37778[(14)] = inst_37699);

(statearr_37778[(15)] = inst_37701);

(statearr_37778[(16)] = inst_37700);

return statearr_37778;
})();
var statearr_37779_37826 = state_37758__$1;
(statearr_37779_37826[(2)] = null);

(statearr_37779_37826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (3))){
var inst_37756 = (state_37758[(2)]);
var state_37758__$1 = state_37758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37758__$1,inst_37756);
} else {
if((state_val_37759 === (12))){
var inst_37733 = (state_37758[(2)]);
var state_37758__$1 = state_37758;
var statearr_37780_37827 = state_37758__$1;
(statearr_37780_37827[(2)] = inst_37733);

(statearr_37780_37827[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (2))){
var state_37758__$1 = state_37758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37758__$1,(4),ch);
} else {
if((state_val_37759 === (23))){
var state_37758__$1 = state_37758;
var statearr_37781_37828 = state_37758__$1;
(statearr_37781_37828[(2)] = null);

(statearr_37781_37828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (19))){
var inst_37739 = (state_37758[(11)]);
var inst_37689 = (state_37758[(8)]);
var inst_37741 = cljs.core.async.muxch_STAR_.call(null,inst_37739);
var state_37758__$1 = state_37758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37758__$1,(22),inst_37741,inst_37689);
} else {
if((state_val_37759 === (11))){
var inst_37713 = (state_37758[(10)]);
var inst_37699 = (state_37758[(14)]);
var inst_37713__$1 = cljs.core.seq.call(null,inst_37699);
var state_37758__$1 = (function (){var statearr_37782 = state_37758;
(statearr_37782[(10)] = inst_37713__$1);

return statearr_37782;
})();
if(inst_37713__$1){
var statearr_37783_37829 = state_37758__$1;
(statearr_37783_37829[(1)] = (13));

} else {
var statearr_37784_37830 = state_37758__$1;
(statearr_37784_37830[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (9))){
var inst_37735 = (state_37758[(2)]);
var state_37758__$1 = state_37758;
var statearr_37785_37831 = state_37758__$1;
(statearr_37785_37831[(2)] = inst_37735);

(statearr_37785_37831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (5))){
var inst_37696 = cljs.core.deref.call(null,mults);
var inst_37697 = cljs.core.vals.call(null,inst_37696);
var inst_37698 = cljs.core.seq.call(null,inst_37697);
var inst_37699 = inst_37698;
var inst_37700 = null;
var inst_37701 = (0);
var inst_37702 = (0);
var state_37758__$1 = (function (){var statearr_37786 = state_37758;
(statearr_37786[(13)] = inst_37702);

(statearr_37786[(14)] = inst_37699);

(statearr_37786[(15)] = inst_37701);

(statearr_37786[(16)] = inst_37700);

return statearr_37786;
})();
var statearr_37787_37832 = state_37758__$1;
(statearr_37787_37832[(2)] = null);

(statearr_37787_37832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (14))){
var state_37758__$1 = state_37758;
var statearr_37791_37833 = state_37758__$1;
(statearr_37791_37833[(2)] = null);

(statearr_37791_37833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (16))){
var inst_37713 = (state_37758[(10)]);
var inst_37717 = cljs.core.chunk_first.call(null,inst_37713);
var inst_37718 = cljs.core.chunk_rest.call(null,inst_37713);
var inst_37719 = cljs.core.count.call(null,inst_37717);
var inst_37699 = inst_37718;
var inst_37700 = inst_37717;
var inst_37701 = inst_37719;
var inst_37702 = (0);
var state_37758__$1 = (function (){var statearr_37792 = state_37758;
(statearr_37792[(13)] = inst_37702);

(statearr_37792[(14)] = inst_37699);

(statearr_37792[(15)] = inst_37701);

(statearr_37792[(16)] = inst_37700);

return statearr_37792;
})();
var statearr_37793_37834 = state_37758__$1;
(statearr_37793_37834[(2)] = null);

(statearr_37793_37834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (10))){
var inst_37702 = (state_37758[(13)]);
var inst_37699 = (state_37758[(14)]);
var inst_37701 = (state_37758[(15)]);
var inst_37700 = (state_37758[(16)]);
var inst_37707 = cljs.core._nth.call(null,inst_37700,inst_37702);
var inst_37708 = cljs.core.async.muxch_STAR_.call(null,inst_37707);
var inst_37709 = cljs.core.async.close_BANG_.call(null,inst_37708);
var inst_37710 = (inst_37702 + (1));
var tmp37788 = inst_37699;
var tmp37789 = inst_37701;
var tmp37790 = inst_37700;
var inst_37699__$1 = tmp37788;
var inst_37700__$1 = tmp37790;
var inst_37701__$1 = tmp37789;
var inst_37702__$1 = inst_37710;
var state_37758__$1 = (function (){var statearr_37794 = state_37758;
(statearr_37794[(13)] = inst_37702__$1);

(statearr_37794[(14)] = inst_37699__$1);

(statearr_37794[(15)] = inst_37701__$1);

(statearr_37794[(16)] = inst_37700__$1);

(statearr_37794[(17)] = inst_37709);

return statearr_37794;
})();
var statearr_37795_37835 = state_37758__$1;
(statearr_37795_37835[(2)] = null);

(statearr_37795_37835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (18))){
var inst_37728 = (state_37758[(2)]);
var state_37758__$1 = state_37758;
var statearr_37796_37836 = state_37758__$1;
(statearr_37796_37836[(2)] = inst_37728);

(statearr_37796_37836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37759 === (8))){
var inst_37702 = (state_37758[(13)]);
var inst_37701 = (state_37758[(15)]);
var inst_37704 = (inst_37702 < inst_37701);
var inst_37705 = inst_37704;
var state_37758__$1 = state_37758;
if(cljs.core.truth_(inst_37705)){
var statearr_37797_37837 = state_37758__$1;
(statearr_37797_37837[(1)] = (10));

} else {
var statearr_37798_37838 = state_37758__$1;
(statearr_37798_37838[(1)] = (11));

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
});})(c__35841__auto___37810,mults,ensure_mult,p))
;
return ((function (switch__35729__auto__,c__35841__auto___37810,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35730__auto__ = null;
var cljs$core$async$state_machine__35730__auto____0 = (function (){
var statearr_37802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37802[(0)] = cljs$core$async$state_machine__35730__auto__);

(statearr_37802[(1)] = (1));

return statearr_37802;
});
var cljs$core$async$state_machine__35730__auto____1 = (function (state_37758){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_37758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e37803){if((e37803 instanceof Object)){
var ex__35733__auto__ = e37803;
var statearr_37804_37839 = state_37758;
(statearr_37804_37839[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37840 = state_37758;
state_37758 = G__37840;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$state_machine__35730__auto__ = function(state_37758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35730__auto____1.call(this,state_37758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35730__auto____0;
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35730__auto____1;
return cljs$core$async$state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___37810,mults,ensure_mult,p))
})();
var state__35843__auto__ = (function (){var statearr_37805 = f__35842__auto__.call(null);
(statearr_37805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___37810);

return statearr_37805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___37810,mults,ensure_mult,p))
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
var args37841 = [];
var len__31936__auto___37844 = arguments.length;
var i__31937__auto___37845 = (0);
while(true){
if((i__31937__auto___37845 < len__31936__auto___37844)){
args37841.push((arguments[i__31937__auto___37845]));

var G__37846 = (i__31937__auto___37845 + (1));
i__31937__auto___37845 = G__37846;
continue;
} else {
}
break;
}

var G__37843 = args37841.length;
switch (G__37843) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37841.length)].join('')));

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
var args37848 = [];
var len__31936__auto___37851 = arguments.length;
var i__31937__auto___37852 = (0);
while(true){
if((i__31937__auto___37852 < len__31936__auto___37851)){
args37848.push((arguments[i__31937__auto___37852]));

var G__37853 = (i__31937__auto___37852 + (1));
i__31937__auto___37852 = G__37853;
continue;
} else {
}
break;
}

var G__37850 = args37848.length;
switch (G__37850) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37848.length)].join('')));

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
var args37855 = [];
var len__31936__auto___37926 = arguments.length;
var i__31937__auto___37927 = (0);
while(true){
if((i__31937__auto___37927 < len__31936__auto___37926)){
args37855.push((arguments[i__31937__auto___37927]));

var G__37928 = (i__31937__auto___37927 + (1));
i__31937__auto___37927 = G__37928;
continue;
} else {
}
break;
}

var G__37857 = args37855.length;
switch (G__37857) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37855.length)].join('')));

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
var c__35841__auto___37930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___37930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___37930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37896){
var state_val_37897 = (state_37896[(1)]);
if((state_val_37897 === (7))){
var state_37896__$1 = state_37896;
var statearr_37898_37931 = state_37896__$1;
(statearr_37898_37931[(2)] = null);

(statearr_37898_37931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (1))){
var state_37896__$1 = state_37896;
var statearr_37899_37932 = state_37896__$1;
(statearr_37899_37932[(2)] = null);

(statearr_37899_37932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (4))){
var inst_37860 = (state_37896[(7)]);
var inst_37862 = (inst_37860 < cnt);
var state_37896__$1 = state_37896;
if(cljs.core.truth_(inst_37862)){
var statearr_37900_37933 = state_37896__$1;
(statearr_37900_37933[(1)] = (6));

} else {
var statearr_37901_37934 = state_37896__$1;
(statearr_37901_37934[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (15))){
var inst_37892 = (state_37896[(2)]);
var state_37896__$1 = state_37896;
var statearr_37902_37935 = state_37896__$1;
(statearr_37902_37935[(2)] = inst_37892);

(statearr_37902_37935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (13))){
var inst_37885 = cljs.core.async.close_BANG_.call(null,out);
var state_37896__$1 = state_37896;
var statearr_37903_37936 = state_37896__$1;
(statearr_37903_37936[(2)] = inst_37885);

(statearr_37903_37936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (6))){
var state_37896__$1 = state_37896;
var statearr_37904_37937 = state_37896__$1;
(statearr_37904_37937[(2)] = null);

(statearr_37904_37937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (3))){
var inst_37894 = (state_37896[(2)]);
var state_37896__$1 = state_37896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37896__$1,inst_37894);
} else {
if((state_val_37897 === (12))){
var inst_37882 = (state_37896[(8)]);
var inst_37882__$1 = (state_37896[(2)]);
var inst_37883 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37882__$1);
var state_37896__$1 = (function (){var statearr_37905 = state_37896;
(statearr_37905[(8)] = inst_37882__$1);

return statearr_37905;
})();
if(cljs.core.truth_(inst_37883)){
var statearr_37906_37938 = state_37896__$1;
(statearr_37906_37938[(1)] = (13));

} else {
var statearr_37907_37939 = state_37896__$1;
(statearr_37907_37939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (2))){
var inst_37859 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37860 = (0);
var state_37896__$1 = (function (){var statearr_37908 = state_37896;
(statearr_37908[(9)] = inst_37859);

(statearr_37908[(7)] = inst_37860);

return statearr_37908;
})();
var statearr_37909_37940 = state_37896__$1;
(statearr_37909_37940[(2)] = null);

(statearr_37909_37940[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (11))){
var inst_37860 = (state_37896[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37896,(10),Object,null,(9));
var inst_37869 = chs__$1.call(null,inst_37860);
var inst_37870 = done.call(null,inst_37860);
var inst_37871 = cljs.core.async.take_BANG_.call(null,inst_37869,inst_37870);
var state_37896__$1 = state_37896;
var statearr_37910_37941 = state_37896__$1;
(statearr_37910_37941[(2)] = inst_37871);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37896__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (9))){
var inst_37860 = (state_37896[(7)]);
var inst_37873 = (state_37896[(2)]);
var inst_37874 = (inst_37860 + (1));
var inst_37860__$1 = inst_37874;
var state_37896__$1 = (function (){var statearr_37911 = state_37896;
(statearr_37911[(10)] = inst_37873);

(statearr_37911[(7)] = inst_37860__$1);

return statearr_37911;
})();
var statearr_37912_37942 = state_37896__$1;
(statearr_37912_37942[(2)] = null);

(statearr_37912_37942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (5))){
var inst_37880 = (state_37896[(2)]);
var state_37896__$1 = (function (){var statearr_37913 = state_37896;
(statearr_37913[(11)] = inst_37880);

return statearr_37913;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37896__$1,(12),dchan);
} else {
if((state_val_37897 === (14))){
var inst_37882 = (state_37896[(8)]);
var inst_37887 = cljs.core.apply.call(null,f,inst_37882);
var state_37896__$1 = state_37896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37896__$1,(16),out,inst_37887);
} else {
if((state_val_37897 === (16))){
var inst_37889 = (state_37896[(2)]);
var state_37896__$1 = (function (){var statearr_37914 = state_37896;
(statearr_37914[(12)] = inst_37889);

return statearr_37914;
})();
var statearr_37915_37943 = state_37896__$1;
(statearr_37915_37943[(2)] = null);

(statearr_37915_37943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (10))){
var inst_37864 = (state_37896[(2)]);
var inst_37865 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37896__$1 = (function (){var statearr_37916 = state_37896;
(statearr_37916[(13)] = inst_37864);

return statearr_37916;
})();
var statearr_37917_37944 = state_37896__$1;
(statearr_37917_37944[(2)] = inst_37865);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37896__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37897 === (8))){
var inst_37878 = (state_37896[(2)]);
var state_37896__$1 = state_37896;
var statearr_37918_37945 = state_37896__$1;
(statearr_37918_37945[(2)] = inst_37878);

(statearr_37918_37945[(1)] = (5));


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
});})(c__35841__auto___37930,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35729__auto__,c__35841__auto___37930,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35730__auto__ = null;
var cljs$core$async$state_machine__35730__auto____0 = (function (){
var statearr_37922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37922[(0)] = cljs$core$async$state_machine__35730__auto__);

(statearr_37922[(1)] = (1));

return statearr_37922;
});
var cljs$core$async$state_machine__35730__auto____1 = (function (state_37896){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_37896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e37923){if((e37923 instanceof Object)){
var ex__35733__auto__ = e37923;
var statearr_37924_37946 = state_37896;
(statearr_37924_37946[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37947 = state_37896;
state_37896 = G__37947;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$state_machine__35730__auto__ = function(state_37896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35730__auto____1.call(this,state_37896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35730__auto____0;
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35730__auto____1;
return cljs$core$async$state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___37930,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35843__auto__ = (function (){var statearr_37925 = f__35842__auto__.call(null);
(statearr_37925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___37930);

return statearr_37925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___37930,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args37949 = [];
var len__31936__auto___38007 = arguments.length;
var i__31937__auto___38008 = (0);
while(true){
if((i__31937__auto___38008 < len__31936__auto___38007)){
args37949.push((arguments[i__31937__auto___38008]));

var G__38009 = (i__31937__auto___38008 + (1));
i__31937__auto___38008 = G__38009;
continue;
} else {
}
break;
}

var G__37951 = args37949.length;
switch (G__37951) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37949.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35841__auto___38011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___38011,out){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___38011,out){
return (function (state_37983){
var state_val_37984 = (state_37983[(1)]);
if((state_val_37984 === (7))){
var inst_37963 = (state_37983[(7)]);
var inst_37962 = (state_37983[(8)]);
var inst_37962__$1 = (state_37983[(2)]);
var inst_37963__$1 = cljs.core.nth.call(null,inst_37962__$1,(0),null);
var inst_37964 = cljs.core.nth.call(null,inst_37962__$1,(1),null);
var inst_37965 = (inst_37963__$1 == null);
var state_37983__$1 = (function (){var statearr_37985 = state_37983;
(statearr_37985[(7)] = inst_37963__$1);

(statearr_37985[(9)] = inst_37964);

(statearr_37985[(8)] = inst_37962__$1);

return statearr_37985;
})();
if(cljs.core.truth_(inst_37965)){
var statearr_37986_38012 = state_37983__$1;
(statearr_37986_38012[(1)] = (8));

} else {
var statearr_37987_38013 = state_37983__$1;
(statearr_37987_38013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (1))){
var inst_37952 = cljs.core.vec.call(null,chs);
var inst_37953 = inst_37952;
var state_37983__$1 = (function (){var statearr_37988 = state_37983;
(statearr_37988[(10)] = inst_37953);

return statearr_37988;
})();
var statearr_37989_38014 = state_37983__$1;
(statearr_37989_38014[(2)] = null);

(statearr_37989_38014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (4))){
var inst_37953 = (state_37983[(10)]);
var state_37983__$1 = state_37983;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37983__$1,(7),inst_37953);
} else {
if((state_val_37984 === (6))){
var inst_37979 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_37990_38015 = state_37983__$1;
(statearr_37990_38015[(2)] = inst_37979);

(statearr_37990_38015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (3))){
var inst_37981 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37983__$1,inst_37981);
} else {
if((state_val_37984 === (2))){
var inst_37953 = (state_37983[(10)]);
var inst_37955 = cljs.core.count.call(null,inst_37953);
var inst_37956 = (inst_37955 > (0));
var state_37983__$1 = state_37983;
if(cljs.core.truth_(inst_37956)){
var statearr_37992_38016 = state_37983__$1;
(statearr_37992_38016[(1)] = (4));

} else {
var statearr_37993_38017 = state_37983__$1;
(statearr_37993_38017[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (11))){
var inst_37953 = (state_37983[(10)]);
var inst_37972 = (state_37983[(2)]);
var tmp37991 = inst_37953;
var inst_37953__$1 = tmp37991;
var state_37983__$1 = (function (){var statearr_37994 = state_37983;
(statearr_37994[(11)] = inst_37972);

(statearr_37994[(10)] = inst_37953__$1);

return statearr_37994;
})();
var statearr_37995_38018 = state_37983__$1;
(statearr_37995_38018[(2)] = null);

(statearr_37995_38018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (9))){
var inst_37963 = (state_37983[(7)]);
var state_37983__$1 = state_37983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37983__$1,(11),out,inst_37963);
} else {
if((state_val_37984 === (5))){
var inst_37977 = cljs.core.async.close_BANG_.call(null,out);
var state_37983__$1 = state_37983;
var statearr_37996_38019 = state_37983__$1;
(statearr_37996_38019[(2)] = inst_37977);

(statearr_37996_38019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (10))){
var inst_37975 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_37997_38020 = state_37983__$1;
(statearr_37997_38020[(2)] = inst_37975);

(statearr_37997_38020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (8))){
var inst_37963 = (state_37983[(7)]);
var inst_37964 = (state_37983[(9)]);
var inst_37962 = (state_37983[(8)]);
var inst_37953 = (state_37983[(10)]);
var inst_37967 = (function (){var cs = inst_37953;
var vec__37958 = inst_37962;
var v = inst_37963;
var c = inst_37964;
return ((function (cs,vec__37958,v,c,inst_37963,inst_37964,inst_37962,inst_37953,state_val_37984,c__35841__auto___38011,out){
return (function (p1__37948_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37948_SHARP_);
});
;})(cs,vec__37958,v,c,inst_37963,inst_37964,inst_37962,inst_37953,state_val_37984,c__35841__auto___38011,out))
})();
var inst_37968 = cljs.core.filterv.call(null,inst_37967,inst_37953);
var inst_37953__$1 = inst_37968;
var state_37983__$1 = (function (){var statearr_37998 = state_37983;
(statearr_37998[(10)] = inst_37953__$1);

return statearr_37998;
})();
var statearr_37999_38021 = state_37983__$1;
(statearr_37999_38021[(2)] = null);

(statearr_37999_38021[(1)] = (2));


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
});})(c__35841__auto___38011,out))
;
return ((function (switch__35729__auto__,c__35841__auto___38011,out){
return (function() {
var cljs$core$async$state_machine__35730__auto__ = null;
var cljs$core$async$state_machine__35730__auto____0 = (function (){
var statearr_38003 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38003[(0)] = cljs$core$async$state_machine__35730__auto__);

(statearr_38003[(1)] = (1));

return statearr_38003;
});
var cljs$core$async$state_machine__35730__auto____1 = (function (state_37983){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_37983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e38004){if((e38004 instanceof Object)){
var ex__35733__auto__ = e38004;
var statearr_38005_38022 = state_37983;
(statearr_38005_38022[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38023 = state_37983;
state_37983 = G__38023;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$state_machine__35730__auto__ = function(state_37983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35730__auto____1.call(this,state_37983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35730__auto____0;
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35730__auto____1;
return cljs$core$async$state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___38011,out))
})();
var state__35843__auto__ = (function (){var statearr_38006 = f__35842__auto__.call(null);
(statearr_38006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___38011);

return statearr_38006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___38011,out))
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
var args38024 = [];
var len__31936__auto___38073 = arguments.length;
var i__31937__auto___38074 = (0);
while(true){
if((i__31937__auto___38074 < len__31936__auto___38073)){
args38024.push((arguments[i__31937__auto___38074]));

var G__38075 = (i__31937__auto___38074 + (1));
i__31937__auto___38074 = G__38075;
continue;
} else {
}
break;
}

var G__38026 = args38024.length;
switch (G__38026) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38024.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35841__auto___38077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___38077,out){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___38077,out){
return (function (state_38050){
var state_val_38051 = (state_38050[(1)]);
if((state_val_38051 === (7))){
var inst_38032 = (state_38050[(7)]);
var inst_38032__$1 = (state_38050[(2)]);
var inst_38033 = (inst_38032__$1 == null);
var inst_38034 = cljs.core.not.call(null,inst_38033);
var state_38050__$1 = (function (){var statearr_38052 = state_38050;
(statearr_38052[(7)] = inst_38032__$1);

return statearr_38052;
})();
if(inst_38034){
var statearr_38053_38078 = state_38050__$1;
(statearr_38053_38078[(1)] = (8));

} else {
var statearr_38054_38079 = state_38050__$1;
(statearr_38054_38079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (1))){
var inst_38027 = (0);
var state_38050__$1 = (function (){var statearr_38055 = state_38050;
(statearr_38055[(8)] = inst_38027);

return statearr_38055;
})();
var statearr_38056_38080 = state_38050__$1;
(statearr_38056_38080[(2)] = null);

(statearr_38056_38080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (4))){
var state_38050__$1 = state_38050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38050__$1,(7),ch);
} else {
if((state_val_38051 === (6))){
var inst_38045 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
var statearr_38057_38081 = state_38050__$1;
(statearr_38057_38081[(2)] = inst_38045);

(statearr_38057_38081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (3))){
var inst_38047 = (state_38050[(2)]);
var inst_38048 = cljs.core.async.close_BANG_.call(null,out);
var state_38050__$1 = (function (){var statearr_38058 = state_38050;
(statearr_38058[(9)] = inst_38047);

return statearr_38058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38050__$1,inst_38048);
} else {
if((state_val_38051 === (2))){
var inst_38027 = (state_38050[(8)]);
var inst_38029 = (inst_38027 < n);
var state_38050__$1 = state_38050;
if(cljs.core.truth_(inst_38029)){
var statearr_38059_38082 = state_38050__$1;
(statearr_38059_38082[(1)] = (4));

} else {
var statearr_38060_38083 = state_38050__$1;
(statearr_38060_38083[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (11))){
var inst_38027 = (state_38050[(8)]);
var inst_38037 = (state_38050[(2)]);
var inst_38038 = (inst_38027 + (1));
var inst_38027__$1 = inst_38038;
var state_38050__$1 = (function (){var statearr_38061 = state_38050;
(statearr_38061[(10)] = inst_38037);

(statearr_38061[(8)] = inst_38027__$1);

return statearr_38061;
})();
var statearr_38062_38084 = state_38050__$1;
(statearr_38062_38084[(2)] = null);

(statearr_38062_38084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (9))){
var state_38050__$1 = state_38050;
var statearr_38063_38085 = state_38050__$1;
(statearr_38063_38085[(2)] = null);

(statearr_38063_38085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (5))){
var state_38050__$1 = state_38050;
var statearr_38064_38086 = state_38050__$1;
(statearr_38064_38086[(2)] = null);

(statearr_38064_38086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (10))){
var inst_38042 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
var statearr_38065_38087 = state_38050__$1;
(statearr_38065_38087[(2)] = inst_38042);

(statearr_38065_38087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (8))){
var inst_38032 = (state_38050[(7)]);
var state_38050__$1 = state_38050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38050__$1,(11),out,inst_38032);
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
});})(c__35841__auto___38077,out))
;
return ((function (switch__35729__auto__,c__35841__auto___38077,out){
return (function() {
var cljs$core$async$state_machine__35730__auto__ = null;
var cljs$core$async$state_machine__35730__auto____0 = (function (){
var statearr_38069 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38069[(0)] = cljs$core$async$state_machine__35730__auto__);

(statearr_38069[(1)] = (1));

return statearr_38069;
});
var cljs$core$async$state_machine__35730__auto____1 = (function (state_38050){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_38050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e38070){if((e38070 instanceof Object)){
var ex__35733__auto__ = e38070;
var statearr_38071_38088 = state_38050;
(statearr_38071_38088[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38089 = state_38050;
state_38050 = G__38089;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$state_machine__35730__auto__ = function(state_38050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35730__auto____1.call(this,state_38050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35730__auto____0;
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35730__auto____1;
return cljs$core$async$state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___38077,out))
})();
var state__35843__auto__ = (function (){var statearr_38072 = f__35842__auto__.call(null);
(statearr_38072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___38077);

return statearr_38072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___38077,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38097 = (function (map_LT_,f,ch,meta38098){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38098 = meta38098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38099,meta38098__$1){
var self__ = this;
var _38099__$1 = this;
return (new cljs.core.async.t_cljs$core$async38097(self__.map_LT_,self__.f,self__.ch,meta38098__$1));
});

cljs.core.async.t_cljs$core$async38097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38099){
var self__ = this;
var _38099__$1 = this;
return self__.meta38098;
});

cljs.core.async.t_cljs$core$async38097.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38097.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38097.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38100 = (function (map_LT_,f,ch,meta38098,_,fn1,meta38101){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38098 = meta38098;
this._ = _;
this.fn1 = fn1;
this.meta38101 = meta38101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38102,meta38101__$1){
var self__ = this;
var _38102__$1 = this;
return (new cljs.core.async.t_cljs$core$async38100(self__.map_LT_,self__.f,self__.ch,self__.meta38098,self__._,self__.fn1,meta38101__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38102){
var self__ = this;
var _38102__$1 = this;
return self__.meta38101;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38100.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38090_SHARP_){
return f1.call(null,(((p1__38090_SHARP_ == null))?null:self__.f.call(null,p1__38090_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38100.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38098","meta38098",-1692160773,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38097","cljs.core.async/t_cljs$core$async38097",-1878459986,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38101","meta38101",1809107765,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38100";

cljs.core.async.t_cljs$core$async38100.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31467__auto__,writer__31468__auto__,opt__31469__auto__){
return cljs.core._write.call(null,writer__31468__auto__,"cljs.core.async/t_cljs$core$async38100");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38100 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38100(map_LT___$1,f__$1,ch__$1,meta38098__$1,___$2,fn1__$1,meta38101){
return (new cljs.core.async.t_cljs$core$async38100(map_LT___$1,f__$1,ch__$1,meta38098__$1,___$2,fn1__$1,meta38101));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38100(self__.map_LT_,self__.f,self__.ch,self__.meta38098,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30849__auto__ = ret;
if(cljs.core.truth_(and__30849__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30849__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38097.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38098","meta38098",-1692160773,null)], null);
});

cljs.core.async.t_cljs$core$async38097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38097";

cljs.core.async.t_cljs$core$async38097.cljs$lang$ctorPrWriter = (function (this__31467__auto__,writer__31468__auto__,opt__31469__auto__){
return cljs.core._write.call(null,writer__31468__auto__,"cljs.core.async/t_cljs$core$async38097");
});

cljs.core.async.__GT_t_cljs$core$async38097 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38097(map_LT___$1,f__$1,ch__$1,meta38098){
return (new cljs.core.async.t_cljs$core$async38097(map_LT___$1,f__$1,ch__$1,meta38098));
});

}

return (new cljs.core.async.t_cljs$core$async38097(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38106 = (function (map_GT_,f,ch,meta38107){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38107 = meta38107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38108,meta38107__$1){
var self__ = this;
var _38108__$1 = this;
return (new cljs.core.async.t_cljs$core$async38106(self__.map_GT_,self__.f,self__.ch,meta38107__$1));
});

cljs.core.async.t_cljs$core$async38106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38108){
var self__ = this;
var _38108__$1 = this;
return self__.meta38107;
});

cljs.core.async.t_cljs$core$async38106.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38106.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38106.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38106.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38106.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38106.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38107","meta38107",-1066547494,null)], null);
});

cljs.core.async.t_cljs$core$async38106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38106";

cljs.core.async.t_cljs$core$async38106.cljs$lang$ctorPrWriter = (function (this__31467__auto__,writer__31468__auto__,opt__31469__auto__){
return cljs.core._write.call(null,writer__31468__auto__,"cljs.core.async/t_cljs$core$async38106");
});

cljs.core.async.__GT_t_cljs$core$async38106 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38106(map_GT___$1,f__$1,ch__$1,meta38107){
return (new cljs.core.async.t_cljs$core$async38106(map_GT___$1,f__$1,ch__$1,meta38107));
});

}

return (new cljs.core.async.t_cljs$core$async38106(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38112 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38112 = (function (filter_GT_,p,ch,meta38113){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38113 = meta38113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38114,meta38113__$1){
var self__ = this;
var _38114__$1 = this;
return (new cljs.core.async.t_cljs$core$async38112(self__.filter_GT_,self__.p,self__.ch,meta38113__$1));
});

cljs.core.async.t_cljs$core$async38112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38114){
var self__ = this;
var _38114__$1 = this;
return self__.meta38113;
});

cljs.core.async.t_cljs$core$async38112.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38112.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38112.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38112.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38112.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38112.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38112.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38113","meta38113",-1709767678,null)], null);
});

cljs.core.async.t_cljs$core$async38112.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38112";

cljs.core.async.t_cljs$core$async38112.cljs$lang$ctorPrWriter = (function (this__31467__auto__,writer__31468__auto__,opt__31469__auto__){
return cljs.core._write.call(null,writer__31468__auto__,"cljs.core.async/t_cljs$core$async38112");
});

cljs.core.async.__GT_t_cljs$core$async38112 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38112(filter_GT___$1,p__$1,ch__$1,meta38113){
return (new cljs.core.async.t_cljs$core$async38112(filter_GT___$1,p__$1,ch__$1,meta38113));
});

}

return (new cljs.core.async.t_cljs$core$async38112(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args38115 = [];
var len__31936__auto___38159 = arguments.length;
var i__31937__auto___38160 = (0);
while(true){
if((i__31937__auto___38160 < len__31936__auto___38159)){
args38115.push((arguments[i__31937__auto___38160]));

var G__38161 = (i__31937__auto___38160 + (1));
i__31937__auto___38160 = G__38161;
continue;
} else {
}
break;
}

var G__38117 = args38115.length;
switch (G__38117) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38115.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35841__auto___38163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___38163,out){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___38163,out){
return (function (state_38138){
var state_val_38139 = (state_38138[(1)]);
if((state_val_38139 === (7))){
var inst_38134 = (state_38138[(2)]);
var state_38138__$1 = state_38138;
var statearr_38140_38164 = state_38138__$1;
(statearr_38140_38164[(2)] = inst_38134);

(statearr_38140_38164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38139 === (1))){
var state_38138__$1 = state_38138;
var statearr_38141_38165 = state_38138__$1;
(statearr_38141_38165[(2)] = null);

(statearr_38141_38165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38139 === (4))){
var inst_38120 = (state_38138[(7)]);
var inst_38120__$1 = (state_38138[(2)]);
var inst_38121 = (inst_38120__$1 == null);
var state_38138__$1 = (function (){var statearr_38142 = state_38138;
(statearr_38142[(7)] = inst_38120__$1);

return statearr_38142;
})();
if(cljs.core.truth_(inst_38121)){
var statearr_38143_38166 = state_38138__$1;
(statearr_38143_38166[(1)] = (5));

} else {
var statearr_38144_38167 = state_38138__$1;
(statearr_38144_38167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38139 === (6))){
var inst_38120 = (state_38138[(7)]);
var inst_38125 = p.call(null,inst_38120);
var state_38138__$1 = state_38138;
if(cljs.core.truth_(inst_38125)){
var statearr_38145_38168 = state_38138__$1;
(statearr_38145_38168[(1)] = (8));

} else {
var statearr_38146_38169 = state_38138__$1;
(statearr_38146_38169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38139 === (3))){
var inst_38136 = (state_38138[(2)]);
var state_38138__$1 = state_38138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38138__$1,inst_38136);
} else {
if((state_val_38139 === (2))){
var state_38138__$1 = state_38138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38138__$1,(4),ch);
} else {
if((state_val_38139 === (11))){
var inst_38128 = (state_38138[(2)]);
var state_38138__$1 = state_38138;
var statearr_38147_38170 = state_38138__$1;
(statearr_38147_38170[(2)] = inst_38128);

(statearr_38147_38170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38139 === (9))){
var state_38138__$1 = state_38138;
var statearr_38148_38171 = state_38138__$1;
(statearr_38148_38171[(2)] = null);

(statearr_38148_38171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38139 === (5))){
var inst_38123 = cljs.core.async.close_BANG_.call(null,out);
var state_38138__$1 = state_38138;
var statearr_38149_38172 = state_38138__$1;
(statearr_38149_38172[(2)] = inst_38123);

(statearr_38149_38172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38139 === (10))){
var inst_38131 = (state_38138[(2)]);
var state_38138__$1 = (function (){var statearr_38150 = state_38138;
(statearr_38150[(8)] = inst_38131);

return statearr_38150;
})();
var statearr_38151_38173 = state_38138__$1;
(statearr_38151_38173[(2)] = null);

(statearr_38151_38173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38139 === (8))){
var inst_38120 = (state_38138[(7)]);
var state_38138__$1 = state_38138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38138__$1,(11),out,inst_38120);
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
});})(c__35841__auto___38163,out))
;
return ((function (switch__35729__auto__,c__35841__auto___38163,out){
return (function() {
var cljs$core$async$state_machine__35730__auto__ = null;
var cljs$core$async$state_machine__35730__auto____0 = (function (){
var statearr_38155 = [null,null,null,null,null,null,null,null,null];
(statearr_38155[(0)] = cljs$core$async$state_machine__35730__auto__);

(statearr_38155[(1)] = (1));

return statearr_38155;
});
var cljs$core$async$state_machine__35730__auto____1 = (function (state_38138){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_38138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e38156){if((e38156 instanceof Object)){
var ex__35733__auto__ = e38156;
var statearr_38157_38174 = state_38138;
(statearr_38157_38174[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38175 = state_38138;
state_38138 = G__38175;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$state_machine__35730__auto__ = function(state_38138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35730__auto____1.call(this,state_38138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35730__auto____0;
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35730__auto____1;
return cljs$core$async$state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___38163,out))
})();
var state__35843__auto__ = (function (){var statearr_38158 = f__35842__auto__.call(null);
(statearr_38158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___38163);

return statearr_38158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___38163,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38176 = [];
var len__31936__auto___38179 = arguments.length;
var i__31937__auto___38180 = (0);
while(true){
if((i__31937__auto___38180 < len__31936__auto___38179)){
args38176.push((arguments[i__31937__auto___38180]));

var G__38181 = (i__31937__auto___38180 + (1));
i__31937__auto___38180 = G__38181;
continue;
} else {
}
break;
}

var G__38178 = args38176.length;
switch (G__38178) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38176.length)].join('')));

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
var c__35841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto__){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto__){
return (function (state_38348){
var state_val_38349 = (state_38348[(1)]);
if((state_val_38349 === (7))){
var inst_38344 = (state_38348[(2)]);
var state_38348__$1 = state_38348;
var statearr_38350_38391 = state_38348__$1;
(statearr_38350_38391[(2)] = inst_38344);

(statearr_38350_38391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (20))){
var inst_38314 = (state_38348[(7)]);
var inst_38325 = (state_38348[(2)]);
var inst_38326 = cljs.core.next.call(null,inst_38314);
var inst_38300 = inst_38326;
var inst_38301 = null;
var inst_38302 = (0);
var inst_38303 = (0);
var state_38348__$1 = (function (){var statearr_38351 = state_38348;
(statearr_38351[(8)] = inst_38302);

(statearr_38351[(9)] = inst_38300);

(statearr_38351[(10)] = inst_38303);

(statearr_38351[(11)] = inst_38301);

(statearr_38351[(12)] = inst_38325);

return statearr_38351;
})();
var statearr_38352_38392 = state_38348__$1;
(statearr_38352_38392[(2)] = null);

(statearr_38352_38392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (1))){
var state_38348__$1 = state_38348;
var statearr_38353_38393 = state_38348__$1;
(statearr_38353_38393[(2)] = null);

(statearr_38353_38393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (4))){
var inst_38289 = (state_38348[(13)]);
var inst_38289__$1 = (state_38348[(2)]);
var inst_38290 = (inst_38289__$1 == null);
var state_38348__$1 = (function (){var statearr_38354 = state_38348;
(statearr_38354[(13)] = inst_38289__$1);

return statearr_38354;
})();
if(cljs.core.truth_(inst_38290)){
var statearr_38355_38394 = state_38348__$1;
(statearr_38355_38394[(1)] = (5));

} else {
var statearr_38356_38395 = state_38348__$1;
(statearr_38356_38395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (15))){
var state_38348__$1 = state_38348;
var statearr_38360_38396 = state_38348__$1;
(statearr_38360_38396[(2)] = null);

(statearr_38360_38396[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (21))){
var state_38348__$1 = state_38348;
var statearr_38361_38397 = state_38348__$1;
(statearr_38361_38397[(2)] = null);

(statearr_38361_38397[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (13))){
var inst_38302 = (state_38348[(8)]);
var inst_38300 = (state_38348[(9)]);
var inst_38303 = (state_38348[(10)]);
var inst_38301 = (state_38348[(11)]);
var inst_38310 = (state_38348[(2)]);
var inst_38311 = (inst_38303 + (1));
var tmp38357 = inst_38302;
var tmp38358 = inst_38300;
var tmp38359 = inst_38301;
var inst_38300__$1 = tmp38358;
var inst_38301__$1 = tmp38359;
var inst_38302__$1 = tmp38357;
var inst_38303__$1 = inst_38311;
var state_38348__$1 = (function (){var statearr_38362 = state_38348;
(statearr_38362[(14)] = inst_38310);

(statearr_38362[(8)] = inst_38302__$1);

(statearr_38362[(9)] = inst_38300__$1);

(statearr_38362[(10)] = inst_38303__$1);

(statearr_38362[(11)] = inst_38301__$1);

return statearr_38362;
})();
var statearr_38363_38398 = state_38348__$1;
(statearr_38363_38398[(2)] = null);

(statearr_38363_38398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (22))){
var state_38348__$1 = state_38348;
var statearr_38364_38399 = state_38348__$1;
(statearr_38364_38399[(2)] = null);

(statearr_38364_38399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (6))){
var inst_38289 = (state_38348[(13)]);
var inst_38298 = f.call(null,inst_38289);
var inst_38299 = cljs.core.seq.call(null,inst_38298);
var inst_38300 = inst_38299;
var inst_38301 = null;
var inst_38302 = (0);
var inst_38303 = (0);
var state_38348__$1 = (function (){var statearr_38365 = state_38348;
(statearr_38365[(8)] = inst_38302);

(statearr_38365[(9)] = inst_38300);

(statearr_38365[(10)] = inst_38303);

(statearr_38365[(11)] = inst_38301);

return statearr_38365;
})();
var statearr_38366_38400 = state_38348__$1;
(statearr_38366_38400[(2)] = null);

(statearr_38366_38400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (17))){
var inst_38314 = (state_38348[(7)]);
var inst_38318 = cljs.core.chunk_first.call(null,inst_38314);
var inst_38319 = cljs.core.chunk_rest.call(null,inst_38314);
var inst_38320 = cljs.core.count.call(null,inst_38318);
var inst_38300 = inst_38319;
var inst_38301 = inst_38318;
var inst_38302 = inst_38320;
var inst_38303 = (0);
var state_38348__$1 = (function (){var statearr_38367 = state_38348;
(statearr_38367[(8)] = inst_38302);

(statearr_38367[(9)] = inst_38300);

(statearr_38367[(10)] = inst_38303);

(statearr_38367[(11)] = inst_38301);

return statearr_38367;
})();
var statearr_38368_38401 = state_38348__$1;
(statearr_38368_38401[(2)] = null);

(statearr_38368_38401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (3))){
var inst_38346 = (state_38348[(2)]);
var state_38348__$1 = state_38348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38348__$1,inst_38346);
} else {
if((state_val_38349 === (12))){
var inst_38334 = (state_38348[(2)]);
var state_38348__$1 = state_38348;
var statearr_38369_38402 = state_38348__$1;
(statearr_38369_38402[(2)] = inst_38334);

(statearr_38369_38402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (2))){
var state_38348__$1 = state_38348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38348__$1,(4),in$);
} else {
if((state_val_38349 === (23))){
var inst_38342 = (state_38348[(2)]);
var state_38348__$1 = state_38348;
var statearr_38370_38403 = state_38348__$1;
(statearr_38370_38403[(2)] = inst_38342);

(statearr_38370_38403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (19))){
var inst_38329 = (state_38348[(2)]);
var state_38348__$1 = state_38348;
var statearr_38371_38404 = state_38348__$1;
(statearr_38371_38404[(2)] = inst_38329);

(statearr_38371_38404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (11))){
var inst_38314 = (state_38348[(7)]);
var inst_38300 = (state_38348[(9)]);
var inst_38314__$1 = cljs.core.seq.call(null,inst_38300);
var state_38348__$1 = (function (){var statearr_38372 = state_38348;
(statearr_38372[(7)] = inst_38314__$1);

return statearr_38372;
})();
if(inst_38314__$1){
var statearr_38373_38405 = state_38348__$1;
(statearr_38373_38405[(1)] = (14));

} else {
var statearr_38374_38406 = state_38348__$1;
(statearr_38374_38406[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (9))){
var inst_38336 = (state_38348[(2)]);
var inst_38337 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38348__$1 = (function (){var statearr_38375 = state_38348;
(statearr_38375[(15)] = inst_38336);

return statearr_38375;
})();
if(cljs.core.truth_(inst_38337)){
var statearr_38376_38407 = state_38348__$1;
(statearr_38376_38407[(1)] = (21));

} else {
var statearr_38377_38408 = state_38348__$1;
(statearr_38377_38408[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (5))){
var inst_38292 = cljs.core.async.close_BANG_.call(null,out);
var state_38348__$1 = state_38348;
var statearr_38378_38409 = state_38348__$1;
(statearr_38378_38409[(2)] = inst_38292);

(statearr_38378_38409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (14))){
var inst_38314 = (state_38348[(7)]);
var inst_38316 = cljs.core.chunked_seq_QMARK_.call(null,inst_38314);
var state_38348__$1 = state_38348;
if(inst_38316){
var statearr_38379_38410 = state_38348__$1;
(statearr_38379_38410[(1)] = (17));

} else {
var statearr_38380_38411 = state_38348__$1;
(statearr_38380_38411[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (16))){
var inst_38332 = (state_38348[(2)]);
var state_38348__$1 = state_38348;
var statearr_38381_38412 = state_38348__$1;
(statearr_38381_38412[(2)] = inst_38332);

(statearr_38381_38412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38349 === (10))){
var inst_38303 = (state_38348[(10)]);
var inst_38301 = (state_38348[(11)]);
var inst_38308 = cljs.core._nth.call(null,inst_38301,inst_38303);
var state_38348__$1 = state_38348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38348__$1,(13),out,inst_38308);
} else {
if((state_val_38349 === (18))){
var inst_38314 = (state_38348[(7)]);
var inst_38323 = cljs.core.first.call(null,inst_38314);
var state_38348__$1 = state_38348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38348__$1,(20),out,inst_38323);
} else {
if((state_val_38349 === (8))){
var inst_38302 = (state_38348[(8)]);
var inst_38303 = (state_38348[(10)]);
var inst_38305 = (inst_38303 < inst_38302);
var inst_38306 = inst_38305;
var state_38348__$1 = state_38348;
if(cljs.core.truth_(inst_38306)){
var statearr_38382_38413 = state_38348__$1;
(statearr_38382_38413[(1)] = (10));

} else {
var statearr_38383_38414 = state_38348__$1;
(statearr_38383_38414[(1)] = (11));

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
});})(c__35841__auto__))
;
return ((function (switch__35729__auto__,c__35841__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35730__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35730__auto____0 = (function (){
var statearr_38387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38387[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35730__auto__);

(statearr_38387[(1)] = (1));

return statearr_38387;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35730__auto____1 = (function (state_38348){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_38348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e38388){if((e38388 instanceof Object)){
var ex__35733__auto__ = e38388;
var statearr_38389_38415 = state_38348;
(statearr_38389_38415[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38416 = state_38348;
state_38348 = G__38416;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35730__auto__ = function(state_38348){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35730__auto____1.call(this,state_38348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35730__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35730__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto__))
})();
var state__35843__auto__ = (function (){var statearr_38390 = f__35842__auto__.call(null);
(statearr_38390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto__);

return statearr_38390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto__))
);

return c__35841__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args38417 = [];
var len__31936__auto___38420 = arguments.length;
var i__31937__auto___38421 = (0);
while(true){
if((i__31937__auto___38421 < len__31936__auto___38420)){
args38417.push((arguments[i__31937__auto___38421]));

var G__38422 = (i__31937__auto___38421 + (1));
i__31937__auto___38421 = G__38422;
continue;
} else {
}
break;
}

var G__38419 = args38417.length;
switch (G__38419) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38417.length)].join('')));

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
var args38424 = [];
var len__31936__auto___38427 = arguments.length;
var i__31937__auto___38428 = (0);
while(true){
if((i__31937__auto___38428 < len__31936__auto___38427)){
args38424.push((arguments[i__31937__auto___38428]));

var G__38429 = (i__31937__auto___38428 + (1));
i__31937__auto___38428 = G__38429;
continue;
} else {
}
break;
}

var G__38426 = args38424.length;
switch (G__38426) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38424.length)].join('')));

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
var args38431 = [];
var len__31936__auto___38482 = arguments.length;
var i__31937__auto___38483 = (0);
while(true){
if((i__31937__auto___38483 < len__31936__auto___38482)){
args38431.push((arguments[i__31937__auto___38483]));

var G__38484 = (i__31937__auto___38483 + (1));
i__31937__auto___38483 = G__38484;
continue;
} else {
}
break;
}

var G__38433 = args38431.length;
switch (G__38433) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38431.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35841__auto___38486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___38486,out){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___38486,out){
return (function (state_38457){
var state_val_38458 = (state_38457[(1)]);
if((state_val_38458 === (7))){
var inst_38452 = (state_38457[(2)]);
var state_38457__$1 = state_38457;
var statearr_38459_38487 = state_38457__$1;
(statearr_38459_38487[(2)] = inst_38452);

(statearr_38459_38487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38458 === (1))){
var inst_38434 = null;
var state_38457__$1 = (function (){var statearr_38460 = state_38457;
(statearr_38460[(7)] = inst_38434);

return statearr_38460;
})();
var statearr_38461_38488 = state_38457__$1;
(statearr_38461_38488[(2)] = null);

(statearr_38461_38488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38458 === (4))){
var inst_38437 = (state_38457[(8)]);
var inst_38437__$1 = (state_38457[(2)]);
var inst_38438 = (inst_38437__$1 == null);
var inst_38439 = cljs.core.not.call(null,inst_38438);
var state_38457__$1 = (function (){var statearr_38462 = state_38457;
(statearr_38462[(8)] = inst_38437__$1);

return statearr_38462;
})();
if(inst_38439){
var statearr_38463_38489 = state_38457__$1;
(statearr_38463_38489[(1)] = (5));

} else {
var statearr_38464_38490 = state_38457__$1;
(statearr_38464_38490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38458 === (6))){
var state_38457__$1 = state_38457;
var statearr_38465_38491 = state_38457__$1;
(statearr_38465_38491[(2)] = null);

(statearr_38465_38491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38458 === (3))){
var inst_38454 = (state_38457[(2)]);
var inst_38455 = cljs.core.async.close_BANG_.call(null,out);
var state_38457__$1 = (function (){var statearr_38466 = state_38457;
(statearr_38466[(9)] = inst_38454);

return statearr_38466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38457__$1,inst_38455);
} else {
if((state_val_38458 === (2))){
var state_38457__$1 = state_38457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38457__$1,(4),ch);
} else {
if((state_val_38458 === (11))){
var inst_38437 = (state_38457[(8)]);
var inst_38446 = (state_38457[(2)]);
var inst_38434 = inst_38437;
var state_38457__$1 = (function (){var statearr_38467 = state_38457;
(statearr_38467[(10)] = inst_38446);

(statearr_38467[(7)] = inst_38434);

return statearr_38467;
})();
var statearr_38468_38492 = state_38457__$1;
(statearr_38468_38492[(2)] = null);

(statearr_38468_38492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38458 === (9))){
var inst_38437 = (state_38457[(8)]);
var state_38457__$1 = state_38457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38457__$1,(11),out,inst_38437);
} else {
if((state_val_38458 === (5))){
var inst_38437 = (state_38457[(8)]);
var inst_38434 = (state_38457[(7)]);
var inst_38441 = cljs.core._EQ_.call(null,inst_38437,inst_38434);
var state_38457__$1 = state_38457;
if(inst_38441){
var statearr_38470_38493 = state_38457__$1;
(statearr_38470_38493[(1)] = (8));

} else {
var statearr_38471_38494 = state_38457__$1;
(statearr_38471_38494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38458 === (10))){
var inst_38449 = (state_38457[(2)]);
var state_38457__$1 = state_38457;
var statearr_38472_38495 = state_38457__$1;
(statearr_38472_38495[(2)] = inst_38449);

(statearr_38472_38495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38458 === (8))){
var inst_38434 = (state_38457[(7)]);
var tmp38469 = inst_38434;
var inst_38434__$1 = tmp38469;
var state_38457__$1 = (function (){var statearr_38473 = state_38457;
(statearr_38473[(7)] = inst_38434__$1);

return statearr_38473;
})();
var statearr_38474_38496 = state_38457__$1;
(statearr_38474_38496[(2)] = null);

(statearr_38474_38496[(1)] = (2));


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
});})(c__35841__auto___38486,out))
;
return ((function (switch__35729__auto__,c__35841__auto___38486,out){
return (function() {
var cljs$core$async$state_machine__35730__auto__ = null;
var cljs$core$async$state_machine__35730__auto____0 = (function (){
var statearr_38478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38478[(0)] = cljs$core$async$state_machine__35730__auto__);

(statearr_38478[(1)] = (1));

return statearr_38478;
});
var cljs$core$async$state_machine__35730__auto____1 = (function (state_38457){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_38457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e38479){if((e38479 instanceof Object)){
var ex__35733__auto__ = e38479;
var statearr_38480_38497 = state_38457;
(statearr_38480_38497[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38498 = state_38457;
state_38457 = G__38498;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$state_machine__35730__auto__ = function(state_38457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35730__auto____1.call(this,state_38457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35730__auto____0;
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35730__auto____1;
return cljs$core$async$state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___38486,out))
})();
var state__35843__auto__ = (function (){var statearr_38481 = f__35842__auto__.call(null);
(statearr_38481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___38486);

return statearr_38481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___38486,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args38499 = [];
var len__31936__auto___38569 = arguments.length;
var i__31937__auto___38570 = (0);
while(true){
if((i__31937__auto___38570 < len__31936__auto___38569)){
args38499.push((arguments[i__31937__auto___38570]));

var G__38571 = (i__31937__auto___38570 + (1));
i__31937__auto___38570 = G__38571;
continue;
} else {
}
break;
}

var G__38501 = args38499.length;
switch (G__38501) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38499.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35841__auto___38573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___38573,out){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___38573,out){
return (function (state_38539){
var state_val_38540 = (state_38539[(1)]);
if((state_val_38540 === (7))){
var inst_38535 = (state_38539[(2)]);
var state_38539__$1 = state_38539;
var statearr_38541_38574 = state_38539__$1;
(statearr_38541_38574[(2)] = inst_38535);

(statearr_38541_38574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38540 === (1))){
var inst_38502 = (new Array(n));
var inst_38503 = inst_38502;
var inst_38504 = (0);
var state_38539__$1 = (function (){var statearr_38542 = state_38539;
(statearr_38542[(7)] = inst_38503);

(statearr_38542[(8)] = inst_38504);

return statearr_38542;
})();
var statearr_38543_38575 = state_38539__$1;
(statearr_38543_38575[(2)] = null);

(statearr_38543_38575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38540 === (4))){
var inst_38507 = (state_38539[(9)]);
var inst_38507__$1 = (state_38539[(2)]);
var inst_38508 = (inst_38507__$1 == null);
var inst_38509 = cljs.core.not.call(null,inst_38508);
var state_38539__$1 = (function (){var statearr_38544 = state_38539;
(statearr_38544[(9)] = inst_38507__$1);

return statearr_38544;
})();
if(inst_38509){
var statearr_38545_38576 = state_38539__$1;
(statearr_38545_38576[(1)] = (5));

} else {
var statearr_38546_38577 = state_38539__$1;
(statearr_38546_38577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38540 === (15))){
var inst_38529 = (state_38539[(2)]);
var state_38539__$1 = state_38539;
var statearr_38547_38578 = state_38539__$1;
(statearr_38547_38578[(2)] = inst_38529);

(statearr_38547_38578[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38540 === (13))){
var state_38539__$1 = state_38539;
var statearr_38548_38579 = state_38539__$1;
(statearr_38548_38579[(2)] = null);

(statearr_38548_38579[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38540 === (6))){
var inst_38504 = (state_38539[(8)]);
var inst_38525 = (inst_38504 > (0));
var state_38539__$1 = state_38539;
if(cljs.core.truth_(inst_38525)){
var statearr_38549_38580 = state_38539__$1;
(statearr_38549_38580[(1)] = (12));

} else {
var statearr_38550_38581 = state_38539__$1;
(statearr_38550_38581[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38540 === (3))){
var inst_38537 = (state_38539[(2)]);
var state_38539__$1 = state_38539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38539__$1,inst_38537);
} else {
if((state_val_38540 === (12))){
var inst_38503 = (state_38539[(7)]);
var inst_38527 = cljs.core.vec.call(null,inst_38503);
var state_38539__$1 = state_38539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38539__$1,(15),out,inst_38527);
} else {
if((state_val_38540 === (2))){
var state_38539__$1 = state_38539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38539__$1,(4),ch);
} else {
if((state_val_38540 === (11))){
var inst_38519 = (state_38539[(2)]);
var inst_38520 = (new Array(n));
var inst_38503 = inst_38520;
var inst_38504 = (0);
var state_38539__$1 = (function (){var statearr_38551 = state_38539;
(statearr_38551[(7)] = inst_38503);

(statearr_38551[(8)] = inst_38504);

(statearr_38551[(10)] = inst_38519);

return statearr_38551;
})();
var statearr_38552_38582 = state_38539__$1;
(statearr_38552_38582[(2)] = null);

(statearr_38552_38582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38540 === (9))){
var inst_38503 = (state_38539[(7)]);
var inst_38517 = cljs.core.vec.call(null,inst_38503);
var state_38539__$1 = state_38539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38539__$1,(11),out,inst_38517);
} else {
if((state_val_38540 === (5))){
var inst_38503 = (state_38539[(7)]);
var inst_38512 = (state_38539[(11)]);
var inst_38504 = (state_38539[(8)]);
var inst_38507 = (state_38539[(9)]);
var inst_38511 = (inst_38503[inst_38504] = inst_38507);
var inst_38512__$1 = (inst_38504 + (1));
var inst_38513 = (inst_38512__$1 < n);
var state_38539__$1 = (function (){var statearr_38553 = state_38539;
(statearr_38553[(11)] = inst_38512__$1);

(statearr_38553[(12)] = inst_38511);

return statearr_38553;
})();
if(cljs.core.truth_(inst_38513)){
var statearr_38554_38583 = state_38539__$1;
(statearr_38554_38583[(1)] = (8));

} else {
var statearr_38555_38584 = state_38539__$1;
(statearr_38555_38584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38540 === (14))){
var inst_38532 = (state_38539[(2)]);
var inst_38533 = cljs.core.async.close_BANG_.call(null,out);
var state_38539__$1 = (function (){var statearr_38557 = state_38539;
(statearr_38557[(13)] = inst_38532);

return statearr_38557;
})();
var statearr_38558_38585 = state_38539__$1;
(statearr_38558_38585[(2)] = inst_38533);

(statearr_38558_38585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38540 === (10))){
var inst_38523 = (state_38539[(2)]);
var state_38539__$1 = state_38539;
var statearr_38559_38586 = state_38539__$1;
(statearr_38559_38586[(2)] = inst_38523);

(statearr_38559_38586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38540 === (8))){
var inst_38503 = (state_38539[(7)]);
var inst_38512 = (state_38539[(11)]);
var tmp38556 = inst_38503;
var inst_38503__$1 = tmp38556;
var inst_38504 = inst_38512;
var state_38539__$1 = (function (){var statearr_38560 = state_38539;
(statearr_38560[(7)] = inst_38503__$1);

(statearr_38560[(8)] = inst_38504);

return statearr_38560;
})();
var statearr_38561_38587 = state_38539__$1;
(statearr_38561_38587[(2)] = null);

(statearr_38561_38587[(1)] = (2));


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
});})(c__35841__auto___38573,out))
;
return ((function (switch__35729__auto__,c__35841__auto___38573,out){
return (function() {
var cljs$core$async$state_machine__35730__auto__ = null;
var cljs$core$async$state_machine__35730__auto____0 = (function (){
var statearr_38565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38565[(0)] = cljs$core$async$state_machine__35730__auto__);

(statearr_38565[(1)] = (1));

return statearr_38565;
});
var cljs$core$async$state_machine__35730__auto____1 = (function (state_38539){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_38539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e38566){if((e38566 instanceof Object)){
var ex__35733__auto__ = e38566;
var statearr_38567_38588 = state_38539;
(statearr_38567_38588[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38589 = state_38539;
state_38539 = G__38589;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$state_machine__35730__auto__ = function(state_38539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35730__auto____1.call(this,state_38539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35730__auto____0;
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35730__auto____1;
return cljs$core$async$state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___38573,out))
})();
var state__35843__auto__ = (function (){var statearr_38568 = f__35842__auto__.call(null);
(statearr_38568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___38573);

return statearr_38568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___38573,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args38590 = [];
var len__31936__auto___38664 = arguments.length;
var i__31937__auto___38665 = (0);
while(true){
if((i__31937__auto___38665 < len__31936__auto___38664)){
args38590.push((arguments[i__31937__auto___38665]));

var G__38666 = (i__31937__auto___38665 + (1));
i__31937__auto___38665 = G__38666;
continue;
} else {
}
break;
}

var G__38592 = args38590.length;
switch (G__38592) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38590.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35841__auto___38668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___38668,out){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___38668,out){
return (function (state_38634){
var state_val_38635 = (state_38634[(1)]);
if((state_val_38635 === (7))){
var inst_38630 = (state_38634[(2)]);
var state_38634__$1 = state_38634;
var statearr_38636_38669 = state_38634__$1;
(statearr_38636_38669[(2)] = inst_38630);

(statearr_38636_38669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38635 === (1))){
var inst_38593 = [];
var inst_38594 = inst_38593;
var inst_38595 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38634__$1 = (function (){var statearr_38637 = state_38634;
(statearr_38637[(7)] = inst_38594);

(statearr_38637[(8)] = inst_38595);

return statearr_38637;
})();
var statearr_38638_38670 = state_38634__$1;
(statearr_38638_38670[(2)] = null);

(statearr_38638_38670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38635 === (4))){
var inst_38598 = (state_38634[(9)]);
var inst_38598__$1 = (state_38634[(2)]);
var inst_38599 = (inst_38598__$1 == null);
var inst_38600 = cljs.core.not.call(null,inst_38599);
var state_38634__$1 = (function (){var statearr_38639 = state_38634;
(statearr_38639[(9)] = inst_38598__$1);

return statearr_38639;
})();
if(inst_38600){
var statearr_38640_38671 = state_38634__$1;
(statearr_38640_38671[(1)] = (5));

} else {
var statearr_38641_38672 = state_38634__$1;
(statearr_38641_38672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38635 === (15))){
var inst_38624 = (state_38634[(2)]);
var state_38634__$1 = state_38634;
var statearr_38642_38673 = state_38634__$1;
(statearr_38642_38673[(2)] = inst_38624);

(statearr_38642_38673[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38635 === (13))){
var state_38634__$1 = state_38634;
var statearr_38643_38674 = state_38634__$1;
(statearr_38643_38674[(2)] = null);

(statearr_38643_38674[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38635 === (6))){
var inst_38594 = (state_38634[(7)]);
var inst_38619 = inst_38594.length;
var inst_38620 = (inst_38619 > (0));
var state_38634__$1 = state_38634;
if(cljs.core.truth_(inst_38620)){
var statearr_38644_38675 = state_38634__$1;
(statearr_38644_38675[(1)] = (12));

} else {
var statearr_38645_38676 = state_38634__$1;
(statearr_38645_38676[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38635 === (3))){
var inst_38632 = (state_38634[(2)]);
var state_38634__$1 = state_38634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38634__$1,inst_38632);
} else {
if((state_val_38635 === (12))){
var inst_38594 = (state_38634[(7)]);
var inst_38622 = cljs.core.vec.call(null,inst_38594);
var state_38634__$1 = state_38634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38634__$1,(15),out,inst_38622);
} else {
if((state_val_38635 === (2))){
var state_38634__$1 = state_38634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38634__$1,(4),ch);
} else {
if((state_val_38635 === (11))){
var inst_38598 = (state_38634[(9)]);
var inst_38602 = (state_38634[(10)]);
var inst_38612 = (state_38634[(2)]);
var inst_38613 = [];
var inst_38614 = inst_38613.push(inst_38598);
var inst_38594 = inst_38613;
var inst_38595 = inst_38602;
var state_38634__$1 = (function (){var statearr_38646 = state_38634;
(statearr_38646[(7)] = inst_38594);

(statearr_38646[(11)] = inst_38614);

(statearr_38646[(12)] = inst_38612);

(statearr_38646[(8)] = inst_38595);

return statearr_38646;
})();
var statearr_38647_38677 = state_38634__$1;
(statearr_38647_38677[(2)] = null);

(statearr_38647_38677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38635 === (9))){
var inst_38594 = (state_38634[(7)]);
var inst_38610 = cljs.core.vec.call(null,inst_38594);
var state_38634__$1 = state_38634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38634__$1,(11),out,inst_38610);
} else {
if((state_val_38635 === (5))){
var inst_38598 = (state_38634[(9)]);
var inst_38595 = (state_38634[(8)]);
var inst_38602 = (state_38634[(10)]);
var inst_38602__$1 = f.call(null,inst_38598);
var inst_38603 = cljs.core._EQ_.call(null,inst_38602__$1,inst_38595);
var inst_38604 = cljs.core.keyword_identical_QMARK_.call(null,inst_38595,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38605 = (inst_38603) || (inst_38604);
var state_38634__$1 = (function (){var statearr_38648 = state_38634;
(statearr_38648[(10)] = inst_38602__$1);

return statearr_38648;
})();
if(cljs.core.truth_(inst_38605)){
var statearr_38649_38678 = state_38634__$1;
(statearr_38649_38678[(1)] = (8));

} else {
var statearr_38650_38679 = state_38634__$1;
(statearr_38650_38679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38635 === (14))){
var inst_38627 = (state_38634[(2)]);
var inst_38628 = cljs.core.async.close_BANG_.call(null,out);
var state_38634__$1 = (function (){var statearr_38652 = state_38634;
(statearr_38652[(13)] = inst_38627);

return statearr_38652;
})();
var statearr_38653_38680 = state_38634__$1;
(statearr_38653_38680[(2)] = inst_38628);

(statearr_38653_38680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38635 === (10))){
var inst_38617 = (state_38634[(2)]);
var state_38634__$1 = state_38634;
var statearr_38654_38681 = state_38634__$1;
(statearr_38654_38681[(2)] = inst_38617);

(statearr_38654_38681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38635 === (8))){
var inst_38598 = (state_38634[(9)]);
var inst_38594 = (state_38634[(7)]);
var inst_38602 = (state_38634[(10)]);
var inst_38607 = inst_38594.push(inst_38598);
var tmp38651 = inst_38594;
var inst_38594__$1 = tmp38651;
var inst_38595 = inst_38602;
var state_38634__$1 = (function (){var statearr_38655 = state_38634;
(statearr_38655[(7)] = inst_38594__$1);

(statearr_38655[(14)] = inst_38607);

(statearr_38655[(8)] = inst_38595);

return statearr_38655;
})();
var statearr_38656_38682 = state_38634__$1;
(statearr_38656_38682[(2)] = null);

(statearr_38656_38682[(1)] = (2));


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
});})(c__35841__auto___38668,out))
;
return ((function (switch__35729__auto__,c__35841__auto___38668,out){
return (function() {
var cljs$core$async$state_machine__35730__auto__ = null;
var cljs$core$async$state_machine__35730__auto____0 = (function (){
var statearr_38660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38660[(0)] = cljs$core$async$state_machine__35730__auto__);

(statearr_38660[(1)] = (1));

return statearr_38660;
});
var cljs$core$async$state_machine__35730__auto____1 = (function (state_38634){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_38634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e38661){if((e38661 instanceof Object)){
var ex__35733__auto__ = e38661;
var statearr_38662_38683 = state_38634;
(statearr_38662_38683[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38684 = state_38634;
state_38634 = G__38684;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
cljs$core$async$state_machine__35730__auto__ = function(state_38634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35730__auto____1.call(this,state_38634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35730__auto____0;
cljs$core$async$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35730__auto____1;
return cljs$core$async$state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___38668,out))
})();
var state__35843__auto__ = (function (){var statearr_38663 = f__35842__auto__.call(null);
(statearr_38663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___38668);

return statearr_38663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___38668,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1471840466566