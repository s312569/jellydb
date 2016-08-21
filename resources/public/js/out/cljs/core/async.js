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
var args35884 = [];
var len__31935__auto___35890 = arguments.length;
var i__31936__auto___35891 = (0);
while(true){
if((i__31936__auto___35891 < len__31935__auto___35890)){
args35884.push((arguments[i__31936__auto___35891]));

var G__35892 = (i__31936__auto___35891 + (1));
i__31936__auto___35891 = G__35892;
continue;
} else {
}
break;
}

var G__35886 = args35884.length;
switch (G__35886) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35884.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35887 = (function (f,blockable,meta35888){
this.f = f;
this.blockable = blockable;
this.meta35888 = meta35888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35889,meta35888__$1){
var self__ = this;
var _35889__$1 = this;
return (new cljs.core.async.t_cljs$core$async35887(self__.f,self__.blockable,meta35888__$1));
});

cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35889){
var self__ = this;
var _35889__$1 = this;
return self__.meta35888;
});

cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35887.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35888","meta35888",-14518431,null)], null);
});

cljs.core.async.t_cljs$core$async35887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35887";

cljs.core.async.t_cljs$core$async35887.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cljs.core.async/t_cljs$core$async35887");
});

cljs.core.async.__GT_t_cljs$core$async35887 = (function cljs$core$async$__GT_t_cljs$core$async35887(f__$1,blockable__$1,meta35888){
return (new cljs.core.async.t_cljs$core$async35887(f__$1,blockable__$1,meta35888));
});

}

return (new cljs.core.async.t_cljs$core$async35887(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args35896 = [];
var len__31935__auto___35899 = arguments.length;
var i__31936__auto___35900 = (0);
while(true){
if((i__31936__auto___35900 < len__31935__auto___35899)){
args35896.push((arguments[i__31936__auto___35900]));

var G__35901 = (i__31936__auto___35900 + (1));
i__31936__auto___35900 = G__35901;
continue;
} else {
}
break;
}

var G__35898 = args35896.length;
switch (G__35898) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35896.length)].join('')));

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
var args35903 = [];
var len__31935__auto___35906 = arguments.length;
var i__31936__auto___35907 = (0);
while(true){
if((i__31936__auto___35907 < len__31935__auto___35906)){
args35903.push((arguments[i__31936__auto___35907]));

var G__35908 = (i__31936__auto___35907 + (1));
i__31936__auto___35907 = G__35908;
continue;
} else {
}
break;
}

var G__35905 = args35903.length;
switch (G__35905) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35903.length)].join('')));

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
var args35910 = [];
var len__31935__auto___35913 = arguments.length;
var i__31936__auto___35914 = (0);
while(true){
if((i__31936__auto___35914 < len__31935__auto___35913)){
args35910.push((arguments[i__31936__auto___35914]));

var G__35915 = (i__31936__auto___35914 + (1));
i__31936__auto___35914 = G__35915;
continue;
} else {
}
break;
}

var G__35912 = args35910.length;
switch (G__35912) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35910.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35917 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35917);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35917,ret){
return (function (){
return fn1.call(null,val_35917);
});})(val_35917,ret))
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
var args35918 = [];
var len__31935__auto___35921 = arguments.length;
var i__31936__auto___35922 = (0);
while(true){
if((i__31936__auto___35922 < len__31935__auto___35921)){
args35918.push((arguments[i__31936__auto___35922]));

var G__35923 = (i__31936__auto___35922 + (1));
i__31936__auto___35922 = G__35923;
continue;
} else {
}
break;
}

var G__35920 = args35918.length;
switch (G__35920) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35918.length)].join('')));

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
var n__31775__auto___35925 = n;
var x_35926 = (0);
while(true){
if((x_35926 < n__31775__auto___35925)){
(a[x_35926] = (0));

var G__35927 = (x_35926 + (1));
x_35926 = G__35927;
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

var G__35928 = (i + (1));
i = G__35928;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35932 = (function (alt_flag,flag,meta35933){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35933 = meta35933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35934,meta35933__$1){
var self__ = this;
var _35934__$1 = this;
return (new cljs.core.async.t_cljs$core$async35932(self__.alt_flag,self__.flag,meta35933__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35934){
var self__ = this;
var _35934__$1 = this;
return self__.meta35933;
});})(flag))
;

cljs.core.async.t_cljs$core$async35932.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35932.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35932.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35933","meta35933",102224340,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35932";

cljs.core.async.t_cljs$core$async35932.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cljs.core.async/t_cljs$core$async35932");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35932 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35932(alt_flag__$1,flag__$1,meta35933){
return (new cljs.core.async.t_cljs$core$async35932(alt_flag__$1,flag__$1,meta35933));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35932(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35938 = (function (alt_handler,flag,cb,meta35939){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35939 = meta35939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35940,meta35939__$1){
var self__ = this;
var _35940__$1 = this;
return (new cljs.core.async.t_cljs$core$async35938(self__.alt_handler,self__.flag,self__.cb,meta35939__$1));
});

cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35940){
var self__ = this;
var _35940__$1 = this;
return self__.meta35939;
});

cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35939","meta35939",1133791752,null)], null);
});

cljs.core.async.t_cljs$core$async35938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35938";

cljs.core.async.t_cljs$core$async35938.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cljs.core.async/t_cljs$core$async35938");
});

cljs.core.async.__GT_t_cljs$core$async35938 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35938(alt_handler__$1,flag__$1,cb__$1,meta35939){
return (new cljs.core.async.t_cljs$core$async35938(alt_handler__$1,flag__$1,cb__$1,meta35939));
});

}

return (new cljs.core.async.t_cljs$core$async35938(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35941_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35941_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35942_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35942_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30860__auto__ = wport;
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35943 = (i + (1));
i = G__35943;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30860__auto__ = ret;
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__30848__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30848__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30848__auto__;
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
var args__31942__auto__ = [];
var len__31935__auto___35949 = arguments.length;
var i__31936__auto___35950 = (0);
while(true){
if((i__31936__auto___35950 < len__31935__auto___35949)){
args__31942__auto__.push((arguments[i__31936__auto___35950]));

var G__35951 = (i__31936__auto___35950 + (1));
i__31936__auto___35950 = G__35951;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((1) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31943__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35946){
var map__35947 = p__35946;
var map__35947__$1 = ((((!((map__35947 == null)))?((((map__35947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35947):map__35947);
var opts = map__35947__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35944){
var G__35945 = cljs.core.first.call(null,seq35944);
var seq35944__$1 = cljs.core.next.call(null,seq35944);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35945,seq35944__$1);
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
var args35952 = [];
var len__31935__auto___36002 = arguments.length;
var i__31936__auto___36003 = (0);
while(true){
if((i__31936__auto___36003 < len__31935__auto___36002)){
args35952.push((arguments[i__31936__auto___36003]));

var G__36004 = (i__31936__auto___36003 + (1));
i__31936__auto___36003 = G__36004;
continue;
} else {
}
break;
}

var G__35954 = args35952.length;
switch (G__35954) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35952.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35839__auto___36006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___36006){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___36006){
return (function (state_35978){
var state_val_35979 = (state_35978[(1)]);
if((state_val_35979 === (7))){
var inst_35974 = (state_35978[(2)]);
var state_35978__$1 = state_35978;
var statearr_35980_36007 = state_35978__$1;
(statearr_35980_36007[(2)] = inst_35974);

(statearr_35980_36007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (1))){
var state_35978__$1 = state_35978;
var statearr_35981_36008 = state_35978__$1;
(statearr_35981_36008[(2)] = null);

(statearr_35981_36008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (4))){
var inst_35957 = (state_35978[(7)]);
var inst_35957__$1 = (state_35978[(2)]);
var inst_35958 = (inst_35957__$1 == null);
var state_35978__$1 = (function (){var statearr_35982 = state_35978;
(statearr_35982[(7)] = inst_35957__$1);

return statearr_35982;
})();
if(cljs.core.truth_(inst_35958)){
var statearr_35983_36009 = state_35978__$1;
(statearr_35983_36009[(1)] = (5));

} else {
var statearr_35984_36010 = state_35978__$1;
(statearr_35984_36010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (13))){
var state_35978__$1 = state_35978;
var statearr_35985_36011 = state_35978__$1;
(statearr_35985_36011[(2)] = null);

(statearr_35985_36011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (6))){
var inst_35957 = (state_35978[(7)]);
var state_35978__$1 = state_35978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35978__$1,(11),to,inst_35957);
} else {
if((state_val_35979 === (3))){
var inst_35976 = (state_35978[(2)]);
var state_35978__$1 = state_35978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35978__$1,inst_35976);
} else {
if((state_val_35979 === (12))){
var state_35978__$1 = state_35978;
var statearr_35986_36012 = state_35978__$1;
(statearr_35986_36012[(2)] = null);

(statearr_35986_36012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (2))){
var state_35978__$1 = state_35978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35978__$1,(4),from);
} else {
if((state_val_35979 === (11))){
var inst_35967 = (state_35978[(2)]);
var state_35978__$1 = state_35978;
if(cljs.core.truth_(inst_35967)){
var statearr_35987_36013 = state_35978__$1;
(statearr_35987_36013[(1)] = (12));

} else {
var statearr_35988_36014 = state_35978__$1;
(statearr_35988_36014[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (9))){
var state_35978__$1 = state_35978;
var statearr_35989_36015 = state_35978__$1;
(statearr_35989_36015[(2)] = null);

(statearr_35989_36015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (5))){
var state_35978__$1 = state_35978;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35990_36016 = state_35978__$1;
(statearr_35990_36016[(1)] = (8));

} else {
var statearr_35991_36017 = state_35978__$1;
(statearr_35991_36017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (14))){
var inst_35972 = (state_35978[(2)]);
var state_35978__$1 = state_35978;
var statearr_35992_36018 = state_35978__$1;
(statearr_35992_36018[(2)] = inst_35972);

(statearr_35992_36018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (10))){
var inst_35964 = (state_35978[(2)]);
var state_35978__$1 = state_35978;
var statearr_35993_36019 = state_35978__$1;
(statearr_35993_36019[(2)] = inst_35964);

(statearr_35993_36019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (8))){
var inst_35961 = cljs.core.async.close_BANG_.call(null,to);
var state_35978__$1 = state_35978;
var statearr_35994_36020 = state_35978__$1;
(statearr_35994_36020[(2)] = inst_35961);

(statearr_35994_36020[(1)] = (10));


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
});})(c__35839__auto___36006))
;
return ((function (switch__35727__auto__,c__35839__auto___36006){
return (function() {
var cljs$core$async$state_machine__35728__auto__ = null;
var cljs$core$async$state_machine__35728__auto____0 = (function (){
var statearr_35998 = [null,null,null,null,null,null,null,null];
(statearr_35998[(0)] = cljs$core$async$state_machine__35728__auto__);

(statearr_35998[(1)] = (1));

return statearr_35998;
});
var cljs$core$async$state_machine__35728__auto____1 = (function (state_35978){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_35978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e35999){if((e35999 instanceof Object)){
var ex__35731__auto__ = e35999;
var statearr_36000_36021 = state_35978;
(statearr_36000_36021[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36022 = state_35978;
state_35978 = G__36022;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$state_machine__35728__auto__ = function(state_35978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35728__auto____1.call(this,state_35978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35728__auto____0;
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35728__auto____1;
return cljs$core$async$state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___36006))
})();
var state__35841__auto__ = (function (){var statearr_36001 = f__35840__auto__.call(null);
(statearr_36001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___36006);

return statearr_36001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___36006))
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
return (function (p__36210){
var vec__36211 = p__36210;
var v = cljs.core.nth.call(null,vec__36211,(0),null);
var p = cljs.core.nth.call(null,vec__36211,(1),null);
var job = vec__36211;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35839__auto___36397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___36397,res,vec__36211,v,p,job,jobs,results){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___36397,res,vec__36211,v,p,job,jobs,results){
return (function (state_36218){
var state_val_36219 = (state_36218[(1)]);
if((state_val_36219 === (1))){
var state_36218__$1 = state_36218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36218__$1,(2),res,v);
} else {
if((state_val_36219 === (2))){
var inst_36215 = (state_36218[(2)]);
var inst_36216 = cljs.core.async.close_BANG_.call(null,res);
var state_36218__$1 = (function (){var statearr_36220 = state_36218;
(statearr_36220[(7)] = inst_36215);

return statearr_36220;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36218__$1,inst_36216);
} else {
return null;
}
}
});})(c__35839__auto___36397,res,vec__36211,v,p,job,jobs,results))
;
return ((function (switch__35727__auto__,c__35839__auto___36397,res,vec__36211,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0 = (function (){
var statearr_36224 = [null,null,null,null,null,null,null,null];
(statearr_36224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__);

(statearr_36224[(1)] = (1));

return statearr_36224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1 = (function (state_36218){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_36218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e36225){if((e36225 instanceof Object)){
var ex__35731__auto__ = e36225;
var statearr_36226_36398 = state_36218;
(statearr_36226_36398[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36399 = state_36218;
state_36218 = G__36399;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__ = function(state_36218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1.call(this,state_36218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___36397,res,vec__36211,v,p,job,jobs,results))
})();
var state__35841__auto__ = (function (){var statearr_36227 = f__35840__auto__.call(null);
(statearr_36227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___36397);

return statearr_36227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___36397,res,vec__36211,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36228){
var vec__36229 = p__36228;
var v = cljs.core.nth.call(null,vec__36229,(0),null);
var p = cljs.core.nth.call(null,vec__36229,(1),null);
var job = vec__36229;
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
var n__31775__auto___36400 = n;
var __36401 = (0);
while(true){
if((__36401 < n__31775__auto___36400)){
var G__36232_36402 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36232_36402) {
case "compute":
var c__35839__auto___36404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36401,c__35839__auto___36404,G__36232_36402,n__31775__auto___36400,jobs,results,process,async){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (__36401,c__35839__auto___36404,G__36232_36402,n__31775__auto___36400,jobs,results,process,async){
return (function (state_36245){
var state_val_36246 = (state_36245[(1)]);
if((state_val_36246 === (1))){
var state_36245__$1 = state_36245;
var statearr_36247_36405 = state_36245__$1;
(statearr_36247_36405[(2)] = null);

(statearr_36247_36405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36246 === (2))){
var state_36245__$1 = state_36245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36245__$1,(4),jobs);
} else {
if((state_val_36246 === (3))){
var inst_36243 = (state_36245[(2)]);
var state_36245__$1 = state_36245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36245__$1,inst_36243);
} else {
if((state_val_36246 === (4))){
var inst_36235 = (state_36245[(2)]);
var inst_36236 = process.call(null,inst_36235);
var state_36245__$1 = state_36245;
if(cljs.core.truth_(inst_36236)){
var statearr_36248_36406 = state_36245__$1;
(statearr_36248_36406[(1)] = (5));

} else {
var statearr_36249_36407 = state_36245__$1;
(statearr_36249_36407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36246 === (5))){
var state_36245__$1 = state_36245;
var statearr_36250_36408 = state_36245__$1;
(statearr_36250_36408[(2)] = null);

(statearr_36250_36408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36246 === (6))){
var state_36245__$1 = state_36245;
var statearr_36251_36409 = state_36245__$1;
(statearr_36251_36409[(2)] = null);

(statearr_36251_36409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36246 === (7))){
var inst_36241 = (state_36245[(2)]);
var state_36245__$1 = state_36245;
var statearr_36252_36410 = state_36245__$1;
(statearr_36252_36410[(2)] = inst_36241);

(statearr_36252_36410[(1)] = (3));


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
});})(__36401,c__35839__auto___36404,G__36232_36402,n__31775__auto___36400,jobs,results,process,async))
;
return ((function (__36401,switch__35727__auto__,c__35839__auto___36404,G__36232_36402,n__31775__auto___36400,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0 = (function (){
var statearr_36256 = [null,null,null,null,null,null,null];
(statearr_36256[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__);

(statearr_36256[(1)] = (1));

return statearr_36256;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1 = (function (state_36245){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_36245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e36257){if((e36257 instanceof Object)){
var ex__35731__auto__ = e36257;
var statearr_36258_36411 = state_36245;
(statearr_36258_36411[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36412 = state_36245;
state_36245 = G__36412;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__ = function(state_36245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1.call(this,state_36245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__;
})()
;})(__36401,switch__35727__auto__,c__35839__auto___36404,G__36232_36402,n__31775__auto___36400,jobs,results,process,async))
})();
var state__35841__auto__ = (function (){var statearr_36259 = f__35840__auto__.call(null);
(statearr_36259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___36404);

return statearr_36259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(__36401,c__35839__auto___36404,G__36232_36402,n__31775__auto___36400,jobs,results,process,async))
);


break;
case "async":
var c__35839__auto___36413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36401,c__35839__auto___36413,G__36232_36402,n__31775__auto___36400,jobs,results,process,async){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (__36401,c__35839__auto___36413,G__36232_36402,n__31775__auto___36400,jobs,results,process,async){
return (function (state_36272){
var state_val_36273 = (state_36272[(1)]);
if((state_val_36273 === (1))){
var state_36272__$1 = state_36272;
var statearr_36274_36414 = state_36272__$1;
(statearr_36274_36414[(2)] = null);

(statearr_36274_36414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (2))){
var state_36272__$1 = state_36272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36272__$1,(4),jobs);
} else {
if((state_val_36273 === (3))){
var inst_36270 = (state_36272[(2)]);
var state_36272__$1 = state_36272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36272__$1,inst_36270);
} else {
if((state_val_36273 === (4))){
var inst_36262 = (state_36272[(2)]);
var inst_36263 = async.call(null,inst_36262);
var state_36272__$1 = state_36272;
if(cljs.core.truth_(inst_36263)){
var statearr_36275_36415 = state_36272__$1;
(statearr_36275_36415[(1)] = (5));

} else {
var statearr_36276_36416 = state_36272__$1;
(statearr_36276_36416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (5))){
var state_36272__$1 = state_36272;
var statearr_36277_36417 = state_36272__$1;
(statearr_36277_36417[(2)] = null);

(statearr_36277_36417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (6))){
var state_36272__$1 = state_36272;
var statearr_36278_36418 = state_36272__$1;
(statearr_36278_36418[(2)] = null);

(statearr_36278_36418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (7))){
var inst_36268 = (state_36272[(2)]);
var state_36272__$1 = state_36272;
var statearr_36279_36419 = state_36272__$1;
(statearr_36279_36419[(2)] = inst_36268);

(statearr_36279_36419[(1)] = (3));


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
});})(__36401,c__35839__auto___36413,G__36232_36402,n__31775__auto___36400,jobs,results,process,async))
;
return ((function (__36401,switch__35727__auto__,c__35839__auto___36413,G__36232_36402,n__31775__auto___36400,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0 = (function (){
var statearr_36283 = [null,null,null,null,null,null,null];
(statearr_36283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__);

(statearr_36283[(1)] = (1));

return statearr_36283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1 = (function (state_36272){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_36272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e36284){if((e36284 instanceof Object)){
var ex__35731__auto__ = e36284;
var statearr_36285_36420 = state_36272;
(statearr_36285_36420[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36421 = state_36272;
state_36272 = G__36421;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__ = function(state_36272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1.call(this,state_36272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__;
})()
;})(__36401,switch__35727__auto__,c__35839__auto___36413,G__36232_36402,n__31775__auto___36400,jobs,results,process,async))
})();
var state__35841__auto__ = (function (){var statearr_36286 = f__35840__auto__.call(null);
(statearr_36286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___36413);

return statearr_36286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(__36401,c__35839__auto___36413,G__36232_36402,n__31775__auto___36400,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36422 = (__36401 + (1));
__36401 = G__36422;
continue;
} else {
}
break;
}

var c__35839__auto___36423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___36423,jobs,results,process,async){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___36423,jobs,results,process,async){
return (function (state_36308){
var state_val_36309 = (state_36308[(1)]);
if((state_val_36309 === (1))){
var state_36308__$1 = state_36308;
var statearr_36310_36424 = state_36308__$1;
(statearr_36310_36424[(2)] = null);

(statearr_36310_36424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (2))){
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36308__$1,(4),from);
} else {
if((state_val_36309 === (3))){
var inst_36306 = (state_36308[(2)]);
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36308__$1,inst_36306);
} else {
if((state_val_36309 === (4))){
var inst_36289 = (state_36308[(7)]);
var inst_36289__$1 = (state_36308[(2)]);
var inst_36290 = (inst_36289__$1 == null);
var state_36308__$1 = (function (){var statearr_36311 = state_36308;
(statearr_36311[(7)] = inst_36289__$1);

return statearr_36311;
})();
if(cljs.core.truth_(inst_36290)){
var statearr_36312_36425 = state_36308__$1;
(statearr_36312_36425[(1)] = (5));

} else {
var statearr_36313_36426 = state_36308__$1;
(statearr_36313_36426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (5))){
var inst_36292 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36308__$1 = state_36308;
var statearr_36314_36427 = state_36308__$1;
(statearr_36314_36427[(2)] = inst_36292);

(statearr_36314_36427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (6))){
var inst_36289 = (state_36308[(7)]);
var inst_36294 = (state_36308[(8)]);
var inst_36294__$1 = cljs.core.async.chan.call(null,(1));
var inst_36295 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36296 = [inst_36289,inst_36294__$1];
var inst_36297 = (new cljs.core.PersistentVector(null,2,(5),inst_36295,inst_36296,null));
var state_36308__$1 = (function (){var statearr_36315 = state_36308;
(statearr_36315[(8)] = inst_36294__$1);

return statearr_36315;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36308__$1,(8),jobs,inst_36297);
} else {
if((state_val_36309 === (7))){
var inst_36304 = (state_36308[(2)]);
var state_36308__$1 = state_36308;
var statearr_36316_36428 = state_36308__$1;
(statearr_36316_36428[(2)] = inst_36304);

(statearr_36316_36428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (8))){
var inst_36294 = (state_36308[(8)]);
var inst_36299 = (state_36308[(2)]);
var state_36308__$1 = (function (){var statearr_36317 = state_36308;
(statearr_36317[(9)] = inst_36299);

return statearr_36317;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36308__$1,(9),results,inst_36294);
} else {
if((state_val_36309 === (9))){
var inst_36301 = (state_36308[(2)]);
var state_36308__$1 = (function (){var statearr_36318 = state_36308;
(statearr_36318[(10)] = inst_36301);

return statearr_36318;
})();
var statearr_36319_36429 = state_36308__$1;
(statearr_36319_36429[(2)] = null);

(statearr_36319_36429[(1)] = (2));


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
});})(c__35839__auto___36423,jobs,results,process,async))
;
return ((function (switch__35727__auto__,c__35839__auto___36423,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0 = (function (){
var statearr_36323 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__);

(statearr_36323[(1)] = (1));

return statearr_36323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1 = (function (state_36308){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_36308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e36324){if((e36324 instanceof Object)){
var ex__35731__auto__ = e36324;
var statearr_36325_36430 = state_36308;
(statearr_36325_36430[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36431 = state_36308;
state_36308 = G__36431;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__ = function(state_36308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1.call(this,state_36308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___36423,jobs,results,process,async))
})();
var state__35841__auto__ = (function (){var statearr_36326 = f__35840__auto__.call(null);
(statearr_36326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___36423);

return statearr_36326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___36423,jobs,results,process,async))
);


var c__35839__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto__,jobs,results,process,async){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto__,jobs,results,process,async){
return (function (state_36364){
var state_val_36365 = (state_36364[(1)]);
if((state_val_36365 === (7))){
var inst_36360 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
var statearr_36366_36432 = state_36364__$1;
(statearr_36366_36432[(2)] = inst_36360);

(statearr_36366_36432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (20))){
var state_36364__$1 = state_36364;
var statearr_36367_36433 = state_36364__$1;
(statearr_36367_36433[(2)] = null);

(statearr_36367_36433[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (1))){
var state_36364__$1 = state_36364;
var statearr_36368_36434 = state_36364__$1;
(statearr_36368_36434[(2)] = null);

(statearr_36368_36434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (4))){
var inst_36329 = (state_36364[(7)]);
var inst_36329__$1 = (state_36364[(2)]);
var inst_36330 = (inst_36329__$1 == null);
var state_36364__$1 = (function (){var statearr_36369 = state_36364;
(statearr_36369[(7)] = inst_36329__$1);

return statearr_36369;
})();
if(cljs.core.truth_(inst_36330)){
var statearr_36370_36435 = state_36364__$1;
(statearr_36370_36435[(1)] = (5));

} else {
var statearr_36371_36436 = state_36364__$1;
(statearr_36371_36436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (15))){
var inst_36342 = (state_36364[(8)]);
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36364__$1,(18),to,inst_36342);
} else {
if((state_val_36365 === (21))){
var inst_36355 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
var statearr_36372_36437 = state_36364__$1;
(statearr_36372_36437[(2)] = inst_36355);

(statearr_36372_36437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (13))){
var inst_36357 = (state_36364[(2)]);
var state_36364__$1 = (function (){var statearr_36373 = state_36364;
(statearr_36373[(9)] = inst_36357);

return statearr_36373;
})();
var statearr_36374_36438 = state_36364__$1;
(statearr_36374_36438[(2)] = null);

(statearr_36374_36438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (6))){
var inst_36329 = (state_36364[(7)]);
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36364__$1,(11),inst_36329);
} else {
if((state_val_36365 === (17))){
var inst_36350 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
if(cljs.core.truth_(inst_36350)){
var statearr_36375_36439 = state_36364__$1;
(statearr_36375_36439[(1)] = (19));

} else {
var statearr_36376_36440 = state_36364__$1;
(statearr_36376_36440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (3))){
var inst_36362 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36364__$1,inst_36362);
} else {
if((state_val_36365 === (12))){
var inst_36339 = (state_36364[(10)]);
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36364__$1,(14),inst_36339);
} else {
if((state_val_36365 === (2))){
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36364__$1,(4),results);
} else {
if((state_val_36365 === (19))){
var state_36364__$1 = state_36364;
var statearr_36377_36441 = state_36364__$1;
(statearr_36377_36441[(2)] = null);

(statearr_36377_36441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (11))){
var inst_36339 = (state_36364[(2)]);
var state_36364__$1 = (function (){var statearr_36378 = state_36364;
(statearr_36378[(10)] = inst_36339);

return statearr_36378;
})();
var statearr_36379_36442 = state_36364__$1;
(statearr_36379_36442[(2)] = null);

(statearr_36379_36442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (9))){
var state_36364__$1 = state_36364;
var statearr_36380_36443 = state_36364__$1;
(statearr_36380_36443[(2)] = null);

(statearr_36380_36443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (5))){
var state_36364__$1 = state_36364;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36381_36444 = state_36364__$1;
(statearr_36381_36444[(1)] = (8));

} else {
var statearr_36382_36445 = state_36364__$1;
(statearr_36382_36445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (14))){
var inst_36342 = (state_36364[(8)]);
var inst_36344 = (state_36364[(11)]);
var inst_36342__$1 = (state_36364[(2)]);
var inst_36343 = (inst_36342__$1 == null);
var inst_36344__$1 = cljs.core.not.call(null,inst_36343);
var state_36364__$1 = (function (){var statearr_36383 = state_36364;
(statearr_36383[(8)] = inst_36342__$1);

(statearr_36383[(11)] = inst_36344__$1);

return statearr_36383;
})();
if(inst_36344__$1){
var statearr_36384_36446 = state_36364__$1;
(statearr_36384_36446[(1)] = (15));

} else {
var statearr_36385_36447 = state_36364__$1;
(statearr_36385_36447[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (16))){
var inst_36344 = (state_36364[(11)]);
var state_36364__$1 = state_36364;
var statearr_36386_36448 = state_36364__$1;
(statearr_36386_36448[(2)] = inst_36344);

(statearr_36386_36448[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (10))){
var inst_36336 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
var statearr_36387_36449 = state_36364__$1;
(statearr_36387_36449[(2)] = inst_36336);

(statearr_36387_36449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (18))){
var inst_36347 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
var statearr_36388_36450 = state_36364__$1;
(statearr_36388_36450[(2)] = inst_36347);

(statearr_36388_36450[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (8))){
var inst_36333 = cljs.core.async.close_BANG_.call(null,to);
var state_36364__$1 = state_36364;
var statearr_36389_36451 = state_36364__$1;
(statearr_36389_36451[(2)] = inst_36333);

(statearr_36389_36451[(1)] = (10));


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
});})(c__35839__auto__,jobs,results,process,async))
;
return ((function (switch__35727__auto__,c__35839__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0 = (function (){
var statearr_36393 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__);

(statearr_36393[(1)] = (1));

return statearr_36393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1 = (function (state_36364){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_36364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e36394){if((e36394 instanceof Object)){
var ex__35731__auto__ = e36394;
var statearr_36395_36452 = state_36364;
(statearr_36395_36452[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36453 = state_36364;
state_36364 = G__36453;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__ = function(state_36364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1.call(this,state_36364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto__,jobs,results,process,async))
})();
var state__35841__auto__ = (function (){var statearr_36396 = f__35840__auto__.call(null);
(statearr_36396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto__);

return statearr_36396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto__,jobs,results,process,async))
);

return c__35839__auto__;
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
var args36454 = [];
var len__31935__auto___36457 = arguments.length;
var i__31936__auto___36458 = (0);
while(true){
if((i__31936__auto___36458 < len__31935__auto___36457)){
args36454.push((arguments[i__31936__auto___36458]));

var G__36459 = (i__31936__auto___36458 + (1));
i__31936__auto___36458 = G__36459;
continue;
} else {
}
break;
}

var G__36456 = args36454.length;
switch (G__36456) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36454.length)].join('')));

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
var args36461 = [];
var len__31935__auto___36464 = arguments.length;
var i__31936__auto___36465 = (0);
while(true){
if((i__31936__auto___36465 < len__31935__auto___36464)){
args36461.push((arguments[i__31936__auto___36465]));

var G__36466 = (i__31936__auto___36465 + (1));
i__31936__auto___36465 = G__36466;
continue;
} else {
}
break;
}

var G__36463 = args36461.length;
switch (G__36463) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36461.length)].join('')));

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
var args36468 = [];
var len__31935__auto___36521 = arguments.length;
var i__31936__auto___36522 = (0);
while(true){
if((i__31936__auto___36522 < len__31935__auto___36521)){
args36468.push((arguments[i__31936__auto___36522]));

var G__36523 = (i__31936__auto___36522 + (1));
i__31936__auto___36522 = G__36523;
continue;
} else {
}
break;
}

var G__36470 = args36468.length;
switch (G__36470) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36468.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35839__auto___36525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___36525,tc,fc){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___36525,tc,fc){
return (function (state_36496){
var state_val_36497 = (state_36496[(1)]);
if((state_val_36497 === (7))){
var inst_36492 = (state_36496[(2)]);
var state_36496__$1 = state_36496;
var statearr_36498_36526 = state_36496__$1;
(statearr_36498_36526[(2)] = inst_36492);

(statearr_36498_36526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (1))){
var state_36496__$1 = state_36496;
var statearr_36499_36527 = state_36496__$1;
(statearr_36499_36527[(2)] = null);

(statearr_36499_36527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (4))){
var inst_36473 = (state_36496[(7)]);
var inst_36473__$1 = (state_36496[(2)]);
var inst_36474 = (inst_36473__$1 == null);
var state_36496__$1 = (function (){var statearr_36500 = state_36496;
(statearr_36500[(7)] = inst_36473__$1);

return statearr_36500;
})();
if(cljs.core.truth_(inst_36474)){
var statearr_36501_36528 = state_36496__$1;
(statearr_36501_36528[(1)] = (5));

} else {
var statearr_36502_36529 = state_36496__$1;
(statearr_36502_36529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (13))){
var state_36496__$1 = state_36496;
var statearr_36503_36530 = state_36496__$1;
(statearr_36503_36530[(2)] = null);

(statearr_36503_36530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (6))){
var inst_36473 = (state_36496[(7)]);
var inst_36479 = p.call(null,inst_36473);
var state_36496__$1 = state_36496;
if(cljs.core.truth_(inst_36479)){
var statearr_36504_36531 = state_36496__$1;
(statearr_36504_36531[(1)] = (9));

} else {
var statearr_36505_36532 = state_36496__$1;
(statearr_36505_36532[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (3))){
var inst_36494 = (state_36496[(2)]);
var state_36496__$1 = state_36496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36496__$1,inst_36494);
} else {
if((state_val_36497 === (12))){
var state_36496__$1 = state_36496;
var statearr_36506_36533 = state_36496__$1;
(statearr_36506_36533[(2)] = null);

(statearr_36506_36533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (2))){
var state_36496__$1 = state_36496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36496__$1,(4),ch);
} else {
if((state_val_36497 === (11))){
var inst_36473 = (state_36496[(7)]);
var inst_36483 = (state_36496[(2)]);
var state_36496__$1 = state_36496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36496__$1,(8),inst_36483,inst_36473);
} else {
if((state_val_36497 === (9))){
var state_36496__$1 = state_36496;
var statearr_36507_36534 = state_36496__$1;
(statearr_36507_36534[(2)] = tc);

(statearr_36507_36534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (5))){
var inst_36476 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36477 = cljs.core.async.close_BANG_.call(null,fc);
var state_36496__$1 = (function (){var statearr_36508 = state_36496;
(statearr_36508[(8)] = inst_36476);

return statearr_36508;
})();
var statearr_36509_36535 = state_36496__$1;
(statearr_36509_36535[(2)] = inst_36477);

(statearr_36509_36535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (14))){
var inst_36490 = (state_36496[(2)]);
var state_36496__$1 = state_36496;
var statearr_36510_36536 = state_36496__$1;
(statearr_36510_36536[(2)] = inst_36490);

(statearr_36510_36536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (10))){
var state_36496__$1 = state_36496;
var statearr_36511_36537 = state_36496__$1;
(statearr_36511_36537[(2)] = fc);

(statearr_36511_36537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (8))){
var inst_36485 = (state_36496[(2)]);
var state_36496__$1 = state_36496;
if(cljs.core.truth_(inst_36485)){
var statearr_36512_36538 = state_36496__$1;
(statearr_36512_36538[(1)] = (12));

} else {
var statearr_36513_36539 = state_36496__$1;
(statearr_36513_36539[(1)] = (13));

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
});})(c__35839__auto___36525,tc,fc))
;
return ((function (switch__35727__auto__,c__35839__auto___36525,tc,fc){
return (function() {
var cljs$core$async$state_machine__35728__auto__ = null;
var cljs$core$async$state_machine__35728__auto____0 = (function (){
var statearr_36517 = [null,null,null,null,null,null,null,null,null];
(statearr_36517[(0)] = cljs$core$async$state_machine__35728__auto__);

(statearr_36517[(1)] = (1));

return statearr_36517;
});
var cljs$core$async$state_machine__35728__auto____1 = (function (state_36496){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_36496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e36518){if((e36518 instanceof Object)){
var ex__35731__auto__ = e36518;
var statearr_36519_36540 = state_36496;
(statearr_36519_36540[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36541 = state_36496;
state_36496 = G__36541;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$state_machine__35728__auto__ = function(state_36496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35728__auto____1.call(this,state_36496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35728__auto____0;
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35728__auto____1;
return cljs$core$async$state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___36525,tc,fc))
})();
var state__35841__auto__ = (function (){var statearr_36520 = f__35840__auto__.call(null);
(statearr_36520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___36525);

return statearr_36520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___36525,tc,fc))
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
var c__35839__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto__){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto__){
return (function (state_36605){
var state_val_36606 = (state_36605[(1)]);
if((state_val_36606 === (7))){
var inst_36601 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
var statearr_36607_36628 = state_36605__$1;
(statearr_36607_36628[(2)] = inst_36601);

(statearr_36607_36628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (1))){
var inst_36585 = init;
var state_36605__$1 = (function (){var statearr_36608 = state_36605;
(statearr_36608[(7)] = inst_36585);

return statearr_36608;
})();
var statearr_36609_36629 = state_36605__$1;
(statearr_36609_36629[(2)] = null);

(statearr_36609_36629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (4))){
var inst_36588 = (state_36605[(8)]);
var inst_36588__$1 = (state_36605[(2)]);
var inst_36589 = (inst_36588__$1 == null);
var state_36605__$1 = (function (){var statearr_36610 = state_36605;
(statearr_36610[(8)] = inst_36588__$1);

return statearr_36610;
})();
if(cljs.core.truth_(inst_36589)){
var statearr_36611_36630 = state_36605__$1;
(statearr_36611_36630[(1)] = (5));

} else {
var statearr_36612_36631 = state_36605__$1;
(statearr_36612_36631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (6))){
var inst_36588 = (state_36605[(8)]);
var inst_36592 = (state_36605[(9)]);
var inst_36585 = (state_36605[(7)]);
var inst_36592__$1 = f.call(null,inst_36585,inst_36588);
var inst_36593 = cljs.core.reduced_QMARK_.call(null,inst_36592__$1);
var state_36605__$1 = (function (){var statearr_36613 = state_36605;
(statearr_36613[(9)] = inst_36592__$1);

return statearr_36613;
})();
if(inst_36593){
var statearr_36614_36632 = state_36605__$1;
(statearr_36614_36632[(1)] = (8));

} else {
var statearr_36615_36633 = state_36605__$1;
(statearr_36615_36633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (3))){
var inst_36603 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36605__$1,inst_36603);
} else {
if((state_val_36606 === (2))){
var state_36605__$1 = state_36605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36605__$1,(4),ch);
} else {
if((state_val_36606 === (9))){
var inst_36592 = (state_36605[(9)]);
var inst_36585 = inst_36592;
var state_36605__$1 = (function (){var statearr_36616 = state_36605;
(statearr_36616[(7)] = inst_36585);

return statearr_36616;
})();
var statearr_36617_36634 = state_36605__$1;
(statearr_36617_36634[(2)] = null);

(statearr_36617_36634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (5))){
var inst_36585 = (state_36605[(7)]);
var state_36605__$1 = state_36605;
var statearr_36618_36635 = state_36605__$1;
(statearr_36618_36635[(2)] = inst_36585);

(statearr_36618_36635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (10))){
var inst_36599 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
var statearr_36619_36636 = state_36605__$1;
(statearr_36619_36636[(2)] = inst_36599);

(statearr_36619_36636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (8))){
var inst_36592 = (state_36605[(9)]);
var inst_36595 = cljs.core.deref.call(null,inst_36592);
var state_36605__$1 = state_36605;
var statearr_36620_36637 = state_36605__$1;
(statearr_36620_36637[(2)] = inst_36595);

(statearr_36620_36637[(1)] = (10));


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
});})(c__35839__auto__))
;
return ((function (switch__35727__auto__,c__35839__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35728__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35728__auto____0 = (function (){
var statearr_36624 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36624[(0)] = cljs$core$async$reduce_$_state_machine__35728__auto__);

(statearr_36624[(1)] = (1));

return statearr_36624;
});
var cljs$core$async$reduce_$_state_machine__35728__auto____1 = (function (state_36605){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_36605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e36625){if((e36625 instanceof Object)){
var ex__35731__auto__ = e36625;
var statearr_36626_36638 = state_36605;
(statearr_36626_36638[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36639 = state_36605;
state_36605 = G__36639;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35728__auto__ = function(state_36605){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35728__auto____1.call(this,state_36605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35728__auto____0;
cljs$core$async$reduce_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35728__auto____1;
return cljs$core$async$reduce_$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto__))
})();
var state__35841__auto__ = (function (){var statearr_36627 = f__35840__auto__.call(null);
(statearr_36627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto__);

return statearr_36627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto__))
);

return c__35839__auto__;
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
var args36640 = [];
var len__31935__auto___36692 = arguments.length;
var i__31936__auto___36693 = (0);
while(true){
if((i__31936__auto___36693 < len__31935__auto___36692)){
args36640.push((arguments[i__31936__auto___36693]));

var G__36694 = (i__31936__auto___36693 + (1));
i__31936__auto___36693 = G__36694;
continue;
} else {
}
break;
}

var G__36642 = args36640.length;
switch (G__36642) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36640.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35839__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto__){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto__){
return (function (state_36667){
var state_val_36668 = (state_36667[(1)]);
if((state_val_36668 === (7))){
var inst_36649 = (state_36667[(2)]);
var state_36667__$1 = state_36667;
var statearr_36669_36696 = state_36667__$1;
(statearr_36669_36696[(2)] = inst_36649);

(statearr_36669_36696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36668 === (1))){
var inst_36643 = cljs.core.seq.call(null,coll);
var inst_36644 = inst_36643;
var state_36667__$1 = (function (){var statearr_36670 = state_36667;
(statearr_36670[(7)] = inst_36644);

return statearr_36670;
})();
var statearr_36671_36697 = state_36667__$1;
(statearr_36671_36697[(2)] = null);

(statearr_36671_36697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36668 === (4))){
var inst_36644 = (state_36667[(7)]);
var inst_36647 = cljs.core.first.call(null,inst_36644);
var state_36667__$1 = state_36667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36667__$1,(7),ch,inst_36647);
} else {
if((state_val_36668 === (13))){
var inst_36661 = (state_36667[(2)]);
var state_36667__$1 = state_36667;
var statearr_36672_36698 = state_36667__$1;
(statearr_36672_36698[(2)] = inst_36661);

(statearr_36672_36698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36668 === (6))){
var inst_36652 = (state_36667[(2)]);
var state_36667__$1 = state_36667;
if(cljs.core.truth_(inst_36652)){
var statearr_36673_36699 = state_36667__$1;
(statearr_36673_36699[(1)] = (8));

} else {
var statearr_36674_36700 = state_36667__$1;
(statearr_36674_36700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36668 === (3))){
var inst_36665 = (state_36667[(2)]);
var state_36667__$1 = state_36667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36667__$1,inst_36665);
} else {
if((state_val_36668 === (12))){
var state_36667__$1 = state_36667;
var statearr_36675_36701 = state_36667__$1;
(statearr_36675_36701[(2)] = null);

(statearr_36675_36701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36668 === (2))){
var inst_36644 = (state_36667[(7)]);
var state_36667__$1 = state_36667;
if(cljs.core.truth_(inst_36644)){
var statearr_36676_36702 = state_36667__$1;
(statearr_36676_36702[(1)] = (4));

} else {
var statearr_36677_36703 = state_36667__$1;
(statearr_36677_36703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36668 === (11))){
var inst_36658 = cljs.core.async.close_BANG_.call(null,ch);
var state_36667__$1 = state_36667;
var statearr_36678_36704 = state_36667__$1;
(statearr_36678_36704[(2)] = inst_36658);

(statearr_36678_36704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36668 === (9))){
var state_36667__$1 = state_36667;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36679_36705 = state_36667__$1;
(statearr_36679_36705[(1)] = (11));

} else {
var statearr_36680_36706 = state_36667__$1;
(statearr_36680_36706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36668 === (5))){
var inst_36644 = (state_36667[(7)]);
var state_36667__$1 = state_36667;
var statearr_36681_36707 = state_36667__$1;
(statearr_36681_36707[(2)] = inst_36644);

(statearr_36681_36707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36668 === (10))){
var inst_36663 = (state_36667[(2)]);
var state_36667__$1 = state_36667;
var statearr_36682_36708 = state_36667__$1;
(statearr_36682_36708[(2)] = inst_36663);

(statearr_36682_36708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36668 === (8))){
var inst_36644 = (state_36667[(7)]);
var inst_36654 = cljs.core.next.call(null,inst_36644);
var inst_36644__$1 = inst_36654;
var state_36667__$1 = (function (){var statearr_36683 = state_36667;
(statearr_36683[(7)] = inst_36644__$1);

return statearr_36683;
})();
var statearr_36684_36709 = state_36667__$1;
(statearr_36684_36709[(2)] = null);

(statearr_36684_36709[(1)] = (2));


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
});})(c__35839__auto__))
;
return ((function (switch__35727__auto__,c__35839__auto__){
return (function() {
var cljs$core$async$state_machine__35728__auto__ = null;
var cljs$core$async$state_machine__35728__auto____0 = (function (){
var statearr_36688 = [null,null,null,null,null,null,null,null];
(statearr_36688[(0)] = cljs$core$async$state_machine__35728__auto__);

(statearr_36688[(1)] = (1));

return statearr_36688;
});
var cljs$core$async$state_machine__35728__auto____1 = (function (state_36667){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_36667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e36689){if((e36689 instanceof Object)){
var ex__35731__auto__ = e36689;
var statearr_36690_36710 = state_36667;
(statearr_36690_36710[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36711 = state_36667;
state_36667 = G__36711;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$state_machine__35728__auto__ = function(state_36667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35728__auto____1.call(this,state_36667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35728__auto____0;
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35728__auto____1;
return cljs$core$async$state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto__))
})();
var state__35841__auto__ = (function (){var statearr_36691 = f__35840__auto__.call(null);
(statearr_36691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto__);

return statearr_36691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto__))
);

return c__35839__auto__;
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
var x__31523__auto__ = (((_ == null))?null:_);
var m__31524__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,_);
} else {
var m__31524__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,_);
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
var x__31523__auto__ = (((m == null))?null:m);
var m__31524__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31524__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__31523__auto__ = (((m == null))?null:m);
var m__31524__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,m,ch);
} else {
var m__31524__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,m,ch);
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
var x__31523__auto__ = (((m == null))?null:m);
var m__31524__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,m);
} else {
var m__31524__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async36937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36937 = (function (mult,ch,cs,meta36938){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36938 = meta36938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36939,meta36938__$1){
var self__ = this;
var _36939__$1 = this;
return (new cljs.core.async.t_cljs$core$async36937(self__.mult,self__.ch,self__.cs,meta36938__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36939){
var self__ = this;
var _36939__$1 = this;
return self__.meta36938;
});})(cs))
;

cljs.core.async.t_cljs$core$async36937.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36937.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36937.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async36937.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36937.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36937.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36937.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36938","meta36938",2088901572,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36937";

cljs.core.async.t_cljs$core$async36937.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cljs.core.async/t_cljs$core$async36937");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36937 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36937(mult__$1,ch__$1,cs__$1,meta36938){
return (new cljs.core.async.t_cljs$core$async36937(mult__$1,ch__$1,cs__$1,meta36938));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36937(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35839__auto___37162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___37162,cs,m,dchan,dctr,done){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___37162,cs,m,dchan,dctr,done){
return (function (state_37074){
var state_val_37075 = (state_37074[(1)]);
if((state_val_37075 === (7))){
var inst_37070 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37076_37163 = state_37074__$1;
(statearr_37076_37163[(2)] = inst_37070);

(statearr_37076_37163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (20))){
var inst_36973 = (state_37074[(7)]);
var inst_36985 = cljs.core.first.call(null,inst_36973);
var inst_36986 = cljs.core.nth.call(null,inst_36985,(0),null);
var inst_36987 = cljs.core.nth.call(null,inst_36985,(1),null);
var state_37074__$1 = (function (){var statearr_37077 = state_37074;
(statearr_37077[(8)] = inst_36986);

return statearr_37077;
})();
if(cljs.core.truth_(inst_36987)){
var statearr_37078_37164 = state_37074__$1;
(statearr_37078_37164[(1)] = (22));

} else {
var statearr_37079_37165 = state_37074__$1;
(statearr_37079_37165[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (27))){
var inst_37022 = (state_37074[(9)]);
var inst_37017 = (state_37074[(10)]);
var inst_36942 = (state_37074[(11)]);
var inst_37015 = (state_37074[(12)]);
var inst_37022__$1 = cljs.core._nth.call(null,inst_37015,inst_37017);
var inst_37023 = cljs.core.async.put_BANG_.call(null,inst_37022__$1,inst_36942,done);
var state_37074__$1 = (function (){var statearr_37080 = state_37074;
(statearr_37080[(9)] = inst_37022__$1);

return statearr_37080;
})();
if(cljs.core.truth_(inst_37023)){
var statearr_37081_37166 = state_37074__$1;
(statearr_37081_37166[(1)] = (30));

} else {
var statearr_37082_37167 = state_37074__$1;
(statearr_37082_37167[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (1))){
var state_37074__$1 = state_37074;
var statearr_37083_37168 = state_37074__$1;
(statearr_37083_37168[(2)] = null);

(statearr_37083_37168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (24))){
var inst_36973 = (state_37074[(7)]);
var inst_36992 = (state_37074[(2)]);
var inst_36993 = cljs.core.next.call(null,inst_36973);
var inst_36951 = inst_36993;
var inst_36952 = null;
var inst_36953 = (0);
var inst_36954 = (0);
var state_37074__$1 = (function (){var statearr_37084 = state_37074;
(statearr_37084[(13)] = inst_36954);

(statearr_37084[(14)] = inst_36992);

(statearr_37084[(15)] = inst_36953);

(statearr_37084[(16)] = inst_36952);

(statearr_37084[(17)] = inst_36951);

return statearr_37084;
})();
var statearr_37085_37169 = state_37074__$1;
(statearr_37085_37169[(2)] = null);

(statearr_37085_37169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (39))){
var state_37074__$1 = state_37074;
var statearr_37089_37170 = state_37074__$1;
(statearr_37089_37170[(2)] = null);

(statearr_37089_37170[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (4))){
var inst_36942 = (state_37074[(11)]);
var inst_36942__$1 = (state_37074[(2)]);
var inst_36943 = (inst_36942__$1 == null);
var state_37074__$1 = (function (){var statearr_37090 = state_37074;
(statearr_37090[(11)] = inst_36942__$1);

return statearr_37090;
})();
if(cljs.core.truth_(inst_36943)){
var statearr_37091_37171 = state_37074__$1;
(statearr_37091_37171[(1)] = (5));

} else {
var statearr_37092_37172 = state_37074__$1;
(statearr_37092_37172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (15))){
var inst_36954 = (state_37074[(13)]);
var inst_36953 = (state_37074[(15)]);
var inst_36952 = (state_37074[(16)]);
var inst_36951 = (state_37074[(17)]);
var inst_36969 = (state_37074[(2)]);
var inst_36970 = (inst_36954 + (1));
var tmp37086 = inst_36953;
var tmp37087 = inst_36952;
var tmp37088 = inst_36951;
var inst_36951__$1 = tmp37088;
var inst_36952__$1 = tmp37087;
var inst_36953__$1 = tmp37086;
var inst_36954__$1 = inst_36970;
var state_37074__$1 = (function (){var statearr_37093 = state_37074;
(statearr_37093[(13)] = inst_36954__$1);

(statearr_37093[(18)] = inst_36969);

(statearr_37093[(15)] = inst_36953__$1);

(statearr_37093[(16)] = inst_36952__$1);

(statearr_37093[(17)] = inst_36951__$1);

return statearr_37093;
})();
var statearr_37094_37173 = state_37074__$1;
(statearr_37094_37173[(2)] = null);

(statearr_37094_37173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (21))){
var inst_36996 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37098_37174 = state_37074__$1;
(statearr_37098_37174[(2)] = inst_36996);

(statearr_37098_37174[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (31))){
var inst_37022 = (state_37074[(9)]);
var inst_37026 = done.call(null,null);
var inst_37027 = cljs.core.async.untap_STAR_.call(null,m,inst_37022);
var state_37074__$1 = (function (){var statearr_37099 = state_37074;
(statearr_37099[(19)] = inst_37026);

return statearr_37099;
})();
var statearr_37100_37175 = state_37074__$1;
(statearr_37100_37175[(2)] = inst_37027);

(statearr_37100_37175[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (32))){
var inst_37014 = (state_37074[(20)]);
var inst_37017 = (state_37074[(10)]);
var inst_37016 = (state_37074[(21)]);
var inst_37015 = (state_37074[(12)]);
var inst_37029 = (state_37074[(2)]);
var inst_37030 = (inst_37017 + (1));
var tmp37095 = inst_37014;
var tmp37096 = inst_37016;
var tmp37097 = inst_37015;
var inst_37014__$1 = tmp37095;
var inst_37015__$1 = tmp37097;
var inst_37016__$1 = tmp37096;
var inst_37017__$1 = inst_37030;
var state_37074__$1 = (function (){var statearr_37101 = state_37074;
(statearr_37101[(20)] = inst_37014__$1);

(statearr_37101[(22)] = inst_37029);

(statearr_37101[(10)] = inst_37017__$1);

(statearr_37101[(21)] = inst_37016__$1);

(statearr_37101[(12)] = inst_37015__$1);

return statearr_37101;
})();
var statearr_37102_37176 = state_37074__$1;
(statearr_37102_37176[(2)] = null);

(statearr_37102_37176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (40))){
var inst_37042 = (state_37074[(23)]);
var inst_37046 = done.call(null,null);
var inst_37047 = cljs.core.async.untap_STAR_.call(null,m,inst_37042);
var state_37074__$1 = (function (){var statearr_37103 = state_37074;
(statearr_37103[(24)] = inst_37046);

return statearr_37103;
})();
var statearr_37104_37177 = state_37074__$1;
(statearr_37104_37177[(2)] = inst_37047);

(statearr_37104_37177[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (33))){
var inst_37033 = (state_37074[(25)]);
var inst_37035 = cljs.core.chunked_seq_QMARK_.call(null,inst_37033);
var state_37074__$1 = state_37074;
if(inst_37035){
var statearr_37105_37178 = state_37074__$1;
(statearr_37105_37178[(1)] = (36));

} else {
var statearr_37106_37179 = state_37074__$1;
(statearr_37106_37179[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (13))){
var inst_36963 = (state_37074[(26)]);
var inst_36966 = cljs.core.async.close_BANG_.call(null,inst_36963);
var state_37074__$1 = state_37074;
var statearr_37107_37180 = state_37074__$1;
(statearr_37107_37180[(2)] = inst_36966);

(statearr_37107_37180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (22))){
var inst_36986 = (state_37074[(8)]);
var inst_36989 = cljs.core.async.close_BANG_.call(null,inst_36986);
var state_37074__$1 = state_37074;
var statearr_37108_37181 = state_37074__$1;
(statearr_37108_37181[(2)] = inst_36989);

(statearr_37108_37181[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (36))){
var inst_37033 = (state_37074[(25)]);
var inst_37037 = cljs.core.chunk_first.call(null,inst_37033);
var inst_37038 = cljs.core.chunk_rest.call(null,inst_37033);
var inst_37039 = cljs.core.count.call(null,inst_37037);
var inst_37014 = inst_37038;
var inst_37015 = inst_37037;
var inst_37016 = inst_37039;
var inst_37017 = (0);
var state_37074__$1 = (function (){var statearr_37109 = state_37074;
(statearr_37109[(20)] = inst_37014);

(statearr_37109[(10)] = inst_37017);

(statearr_37109[(21)] = inst_37016);

(statearr_37109[(12)] = inst_37015);

return statearr_37109;
})();
var statearr_37110_37182 = state_37074__$1;
(statearr_37110_37182[(2)] = null);

(statearr_37110_37182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (41))){
var inst_37033 = (state_37074[(25)]);
var inst_37049 = (state_37074[(2)]);
var inst_37050 = cljs.core.next.call(null,inst_37033);
var inst_37014 = inst_37050;
var inst_37015 = null;
var inst_37016 = (0);
var inst_37017 = (0);
var state_37074__$1 = (function (){var statearr_37111 = state_37074;
(statearr_37111[(27)] = inst_37049);

(statearr_37111[(20)] = inst_37014);

(statearr_37111[(10)] = inst_37017);

(statearr_37111[(21)] = inst_37016);

(statearr_37111[(12)] = inst_37015);

return statearr_37111;
})();
var statearr_37112_37183 = state_37074__$1;
(statearr_37112_37183[(2)] = null);

(statearr_37112_37183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (43))){
var state_37074__$1 = state_37074;
var statearr_37113_37184 = state_37074__$1;
(statearr_37113_37184[(2)] = null);

(statearr_37113_37184[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (29))){
var inst_37058 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37114_37185 = state_37074__$1;
(statearr_37114_37185[(2)] = inst_37058);

(statearr_37114_37185[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (44))){
var inst_37067 = (state_37074[(2)]);
var state_37074__$1 = (function (){var statearr_37115 = state_37074;
(statearr_37115[(28)] = inst_37067);

return statearr_37115;
})();
var statearr_37116_37186 = state_37074__$1;
(statearr_37116_37186[(2)] = null);

(statearr_37116_37186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (6))){
var inst_37006 = (state_37074[(29)]);
var inst_37005 = cljs.core.deref.call(null,cs);
var inst_37006__$1 = cljs.core.keys.call(null,inst_37005);
var inst_37007 = cljs.core.count.call(null,inst_37006__$1);
var inst_37008 = cljs.core.reset_BANG_.call(null,dctr,inst_37007);
var inst_37013 = cljs.core.seq.call(null,inst_37006__$1);
var inst_37014 = inst_37013;
var inst_37015 = null;
var inst_37016 = (0);
var inst_37017 = (0);
var state_37074__$1 = (function (){var statearr_37117 = state_37074;
(statearr_37117[(29)] = inst_37006__$1);

(statearr_37117[(30)] = inst_37008);

(statearr_37117[(20)] = inst_37014);

(statearr_37117[(10)] = inst_37017);

(statearr_37117[(21)] = inst_37016);

(statearr_37117[(12)] = inst_37015);

return statearr_37117;
})();
var statearr_37118_37187 = state_37074__$1;
(statearr_37118_37187[(2)] = null);

(statearr_37118_37187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (28))){
var inst_37014 = (state_37074[(20)]);
var inst_37033 = (state_37074[(25)]);
var inst_37033__$1 = cljs.core.seq.call(null,inst_37014);
var state_37074__$1 = (function (){var statearr_37119 = state_37074;
(statearr_37119[(25)] = inst_37033__$1);

return statearr_37119;
})();
if(inst_37033__$1){
var statearr_37120_37188 = state_37074__$1;
(statearr_37120_37188[(1)] = (33));

} else {
var statearr_37121_37189 = state_37074__$1;
(statearr_37121_37189[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (25))){
var inst_37017 = (state_37074[(10)]);
var inst_37016 = (state_37074[(21)]);
var inst_37019 = (inst_37017 < inst_37016);
var inst_37020 = inst_37019;
var state_37074__$1 = state_37074;
if(cljs.core.truth_(inst_37020)){
var statearr_37122_37190 = state_37074__$1;
(statearr_37122_37190[(1)] = (27));

} else {
var statearr_37123_37191 = state_37074__$1;
(statearr_37123_37191[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (34))){
var state_37074__$1 = state_37074;
var statearr_37124_37192 = state_37074__$1;
(statearr_37124_37192[(2)] = null);

(statearr_37124_37192[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (17))){
var state_37074__$1 = state_37074;
var statearr_37125_37193 = state_37074__$1;
(statearr_37125_37193[(2)] = null);

(statearr_37125_37193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (3))){
var inst_37072 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37074__$1,inst_37072);
} else {
if((state_val_37075 === (12))){
var inst_37001 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37126_37194 = state_37074__$1;
(statearr_37126_37194[(2)] = inst_37001);

(statearr_37126_37194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (2))){
var state_37074__$1 = state_37074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37074__$1,(4),ch);
} else {
if((state_val_37075 === (23))){
var state_37074__$1 = state_37074;
var statearr_37127_37195 = state_37074__$1;
(statearr_37127_37195[(2)] = null);

(statearr_37127_37195[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (35))){
var inst_37056 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37128_37196 = state_37074__$1;
(statearr_37128_37196[(2)] = inst_37056);

(statearr_37128_37196[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (19))){
var inst_36973 = (state_37074[(7)]);
var inst_36977 = cljs.core.chunk_first.call(null,inst_36973);
var inst_36978 = cljs.core.chunk_rest.call(null,inst_36973);
var inst_36979 = cljs.core.count.call(null,inst_36977);
var inst_36951 = inst_36978;
var inst_36952 = inst_36977;
var inst_36953 = inst_36979;
var inst_36954 = (0);
var state_37074__$1 = (function (){var statearr_37129 = state_37074;
(statearr_37129[(13)] = inst_36954);

(statearr_37129[(15)] = inst_36953);

(statearr_37129[(16)] = inst_36952);

(statearr_37129[(17)] = inst_36951);

return statearr_37129;
})();
var statearr_37130_37197 = state_37074__$1;
(statearr_37130_37197[(2)] = null);

(statearr_37130_37197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (11))){
var inst_36973 = (state_37074[(7)]);
var inst_36951 = (state_37074[(17)]);
var inst_36973__$1 = cljs.core.seq.call(null,inst_36951);
var state_37074__$1 = (function (){var statearr_37131 = state_37074;
(statearr_37131[(7)] = inst_36973__$1);

return statearr_37131;
})();
if(inst_36973__$1){
var statearr_37132_37198 = state_37074__$1;
(statearr_37132_37198[(1)] = (16));

} else {
var statearr_37133_37199 = state_37074__$1;
(statearr_37133_37199[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (9))){
var inst_37003 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37134_37200 = state_37074__$1;
(statearr_37134_37200[(2)] = inst_37003);

(statearr_37134_37200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (5))){
var inst_36949 = cljs.core.deref.call(null,cs);
var inst_36950 = cljs.core.seq.call(null,inst_36949);
var inst_36951 = inst_36950;
var inst_36952 = null;
var inst_36953 = (0);
var inst_36954 = (0);
var state_37074__$1 = (function (){var statearr_37135 = state_37074;
(statearr_37135[(13)] = inst_36954);

(statearr_37135[(15)] = inst_36953);

(statearr_37135[(16)] = inst_36952);

(statearr_37135[(17)] = inst_36951);

return statearr_37135;
})();
var statearr_37136_37201 = state_37074__$1;
(statearr_37136_37201[(2)] = null);

(statearr_37136_37201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (14))){
var state_37074__$1 = state_37074;
var statearr_37137_37202 = state_37074__$1;
(statearr_37137_37202[(2)] = null);

(statearr_37137_37202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (45))){
var inst_37064 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37138_37203 = state_37074__$1;
(statearr_37138_37203[(2)] = inst_37064);

(statearr_37138_37203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (26))){
var inst_37006 = (state_37074[(29)]);
var inst_37060 = (state_37074[(2)]);
var inst_37061 = cljs.core.seq.call(null,inst_37006);
var state_37074__$1 = (function (){var statearr_37139 = state_37074;
(statearr_37139[(31)] = inst_37060);

return statearr_37139;
})();
if(inst_37061){
var statearr_37140_37204 = state_37074__$1;
(statearr_37140_37204[(1)] = (42));

} else {
var statearr_37141_37205 = state_37074__$1;
(statearr_37141_37205[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (16))){
var inst_36973 = (state_37074[(7)]);
var inst_36975 = cljs.core.chunked_seq_QMARK_.call(null,inst_36973);
var state_37074__$1 = state_37074;
if(inst_36975){
var statearr_37142_37206 = state_37074__$1;
(statearr_37142_37206[(1)] = (19));

} else {
var statearr_37143_37207 = state_37074__$1;
(statearr_37143_37207[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (38))){
var inst_37053 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37144_37208 = state_37074__$1;
(statearr_37144_37208[(2)] = inst_37053);

(statearr_37144_37208[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (30))){
var state_37074__$1 = state_37074;
var statearr_37145_37209 = state_37074__$1;
(statearr_37145_37209[(2)] = null);

(statearr_37145_37209[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (10))){
var inst_36954 = (state_37074[(13)]);
var inst_36952 = (state_37074[(16)]);
var inst_36962 = cljs.core._nth.call(null,inst_36952,inst_36954);
var inst_36963 = cljs.core.nth.call(null,inst_36962,(0),null);
var inst_36964 = cljs.core.nth.call(null,inst_36962,(1),null);
var state_37074__$1 = (function (){var statearr_37146 = state_37074;
(statearr_37146[(26)] = inst_36963);

return statearr_37146;
})();
if(cljs.core.truth_(inst_36964)){
var statearr_37147_37210 = state_37074__$1;
(statearr_37147_37210[(1)] = (13));

} else {
var statearr_37148_37211 = state_37074__$1;
(statearr_37148_37211[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (18))){
var inst_36999 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37149_37212 = state_37074__$1;
(statearr_37149_37212[(2)] = inst_36999);

(statearr_37149_37212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (42))){
var state_37074__$1 = state_37074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37074__$1,(45),dchan);
} else {
if((state_val_37075 === (37))){
var inst_37042 = (state_37074[(23)]);
var inst_36942 = (state_37074[(11)]);
var inst_37033 = (state_37074[(25)]);
var inst_37042__$1 = cljs.core.first.call(null,inst_37033);
var inst_37043 = cljs.core.async.put_BANG_.call(null,inst_37042__$1,inst_36942,done);
var state_37074__$1 = (function (){var statearr_37150 = state_37074;
(statearr_37150[(23)] = inst_37042__$1);

return statearr_37150;
})();
if(cljs.core.truth_(inst_37043)){
var statearr_37151_37213 = state_37074__$1;
(statearr_37151_37213[(1)] = (39));

} else {
var statearr_37152_37214 = state_37074__$1;
(statearr_37152_37214[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (8))){
var inst_36954 = (state_37074[(13)]);
var inst_36953 = (state_37074[(15)]);
var inst_36956 = (inst_36954 < inst_36953);
var inst_36957 = inst_36956;
var state_37074__$1 = state_37074;
if(cljs.core.truth_(inst_36957)){
var statearr_37153_37215 = state_37074__$1;
(statearr_37153_37215[(1)] = (10));

} else {
var statearr_37154_37216 = state_37074__$1;
(statearr_37154_37216[(1)] = (11));

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
});})(c__35839__auto___37162,cs,m,dchan,dctr,done))
;
return ((function (switch__35727__auto__,c__35839__auto___37162,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35728__auto__ = null;
var cljs$core$async$mult_$_state_machine__35728__auto____0 = (function (){
var statearr_37158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37158[(0)] = cljs$core$async$mult_$_state_machine__35728__auto__);

(statearr_37158[(1)] = (1));

return statearr_37158;
});
var cljs$core$async$mult_$_state_machine__35728__auto____1 = (function (state_37074){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_37074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e37159){if((e37159 instanceof Object)){
var ex__35731__auto__ = e37159;
var statearr_37160_37217 = state_37074;
(statearr_37160_37217[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37218 = state_37074;
state_37074 = G__37218;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35728__auto__ = function(state_37074){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35728__auto____1.call(this,state_37074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35728__auto____0;
cljs$core$async$mult_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35728__auto____1;
return cljs$core$async$mult_$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___37162,cs,m,dchan,dctr,done))
})();
var state__35841__auto__ = (function (){var statearr_37161 = f__35840__auto__.call(null);
(statearr_37161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___37162);

return statearr_37161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___37162,cs,m,dchan,dctr,done))
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
var args37219 = [];
var len__31935__auto___37222 = arguments.length;
var i__31936__auto___37223 = (0);
while(true){
if((i__31936__auto___37223 < len__31935__auto___37222)){
args37219.push((arguments[i__31936__auto___37223]));

var G__37224 = (i__31936__auto___37223 + (1));
i__31936__auto___37223 = G__37224;
continue;
} else {
}
break;
}

var G__37221 = args37219.length;
switch (G__37221) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37219.length)].join('')));

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
var x__31523__auto__ = (((m == null))?null:m);
var m__31524__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,m,ch);
} else {
var m__31524__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,m,ch);
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
var x__31523__auto__ = (((m == null))?null:m);
var m__31524__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,m,ch);
} else {
var m__31524__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,m,ch);
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
var x__31523__auto__ = (((m == null))?null:m);
var m__31524__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,m);
} else {
var m__31524__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,m);
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
var x__31523__auto__ = (((m == null))?null:m);
var m__31524__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,m,state_map);
} else {
var m__31524__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,m,state_map);
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
var x__31523__auto__ = (((m == null))?null:m);
var m__31524__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,m,mode);
} else {
var m__31524__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31942__auto__ = [];
var len__31935__auto___37236 = arguments.length;
var i__31936__auto___37237 = (0);
while(true){
if((i__31936__auto___37237 < len__31935__auto___37236)){
args__31942__auto__.push((arguments[i__31936__auto___37237]));

var G__37238 = (i__31936__auto___37237 + (1));
i__31936__auto___37237 = G__37238;
continue;
} else {
}
break;
}

var argseq__31943__auto__ = ((((3) < args__31942__auto__.length))?(new cljs.core.IndexedSeq(args__31942__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31943__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37230){
var map__37231 = p__37230;
var map__37231__$1 = ((((!((map__37231 == null)))?((((map__37231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37231):map__37231);
var opts = map__37231__$1;
var statearr_37233_37239 = state;
(statearr_37233_37239[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__37231,map__37231__$1,opts){
return (function (val){
var statearr_37234_37240 = state;
(statearr_37234_37240[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37231,map__37231__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_37235_37241 = state;
(statearr_37235_37241[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37226){
var G__37227 = cljs.core.first.call(null,seq37226);
var seq37226__$1 = cljs.core.next.call(null,seq37226);
var G__37228 = cljs.core.first.call(null,seq37226__$1);
var seq37226__$2 = cljs.core.next.call(null,seq37226__$1);
var G__37229 = cljs.core.first.call(null,seq37226__$2);
var seq37226__$3 = cljs.core.next.call(null,seq37226__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37227,G__37228,G__37229,seq37226__$3);
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
if(typeof cljs.core.async.t_cljs$core$async37407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37407 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37408){
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
this.meta37408 = meta37408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37409,meta37408__$1){
var self__ = this;
var _37409__$1 = this;
return (new cljs.core.async.t_cljs$core$async37407(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37408__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37409){
var self__ = this;
var _37409__$1 = this;
return self__.meta37408;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37407.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37407.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37407.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async37407.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37407.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37407.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37407.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37407.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async37407.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37408","meta37408",-761238805,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37407.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37407";

cljs.core.async.t_cljs$core$async37407.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cljs.core.async/t_cljs$core$async37407");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37407 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37407(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37408){
return (new cljs.core.async.t_cljs$core$async37407(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37408));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37407(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35839__auto___37572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___37572,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___37572,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37509){
var state_val_37510 = (state_37509[(1)]);
if((state_val_37510 === (7))){
var inst_37425 = (state_37509[(2)]);
var state_37509__$1 = state_37509;
var statearr_37511_37573 = state_37509__$1;
(statearr_37511_37573[(2)] = inst_37425);

(statearr_37511_37573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (20))){
var inst_37437 = (state_37509[(7)]);
var state_37509__$1 = state_37509;
var statearr_37512_37574 = state_37509__$1;
(statearr_37512_37574[(2)] = inst_37437);

(statearr_37512_37574[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (27))){
var state_37509__$1 = state_37509;
var statearr_37513_37575 = state_37509__$1;
(statearr_37513_37575[(2)] = null);

(statearr_37513_37575[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (1))){
var inst_37413 = (state_37509[(8)]);
var inst_37413__$1 = calc_state.call(null);
var inst_37415 = (inst_37413__$1 == null);
var inst_37416 = cljs.core.not.call(null,inst_37415);
var state_37509__$1 = (function (){var statearr_37514 = state_37509;
(statearr_37514[(8)] = inst_37413__$1);

return statearr_37514;
})();
if(inst_37416){
var statearr_37515_37576 = state_37509__$1;
(statearr_37515_37576[(1)] = (2));

} else {
var statearr_37516_37577 = state_37509__$1;
(statearr_37516_37577[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (24))){
var inst_37469 = (state_37509[(9)]);
var inst_37460 = (state_37509[(10)]);
var inst_37483 = (state_37509[(11)]);
var inst_37483__$1 = inst_37460.call(null,inst_37469);
var state_37509__$1 = (function (){var statearr_37517 = state_37509;
(statearr_37517[(11)] = inst_37483__$1);

return statearr_37517;
})();
if(cljs.core.truth_(inst_37483__$1)){
var statearr_37518_37578 = state_37509__$1;
(statearr_37518_37578[(1)] = (29));

} else {
var statearr_37519_37579 = state_37509__$1;
(statearr_37519_37579[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (4))){
var inst_37428 = (state_37509[(2)]);
var state_37509__$1 = state_37509;
if(cljs.core.truth_(inst_37428)){
var statearr_37520_37580 = state_37509__$1;
(statearr_37520_37580[(1)] = (8));

} else {
var statearr_37521_37581 = state_37509__$1;
(statearr_37521_37581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (15))){
var inst_37454 = (state_37509[(2)]);
var state_37509__$1 = state_37509;
if(cljs.core.truth_(inst_37454)){
var statearr_37522_37582 = state_37509__$1;
(statearr_37522_37582[(1)] = (19));

} else {
var statearr_37523_37583 = state_37509__$1;
(statearr_37523_37583[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (21))){
var inst_37459 = (state_37509[(12)]);
var inst_37459__$1 = (state_37509[(2)]);
var inst_37460 = cljs.core.get.call(null,inst_37459__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37461 = cljs.core.get.call(null,inst_37459__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37462 = cljs.core.get.call(null,inst_37459__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37509__$1 = (function (){var statearr_37524 = state_37509;
(statearr_37524[(13)] = inst_37461);

(statearr_37524[(12)] = inst_37459__$1);

(statearr_37524[(10)] = inst_37460);

return statearr_37524;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37509__$1,(22),inst_37462);
} else {
if((state_val_37510 === (31))){
var inst_37491 = (state_37509[(2)]);
var state_37509__$1 = state_37509;
if(cljs.core.truth_(inst_37491)){
var statearr_37525_37584 = state_37509__$1;
(statearr_37525_37584[(1)] = (32));

} else {
var statearr_37526_37585 = state_37509__$1;
(statearr_37526_37585[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (32))){
var inst_37468 = (state_37509[(14)]);
var state_37509__$1 = state_37509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37509__$1,(35),out,inst_37468);
} else {
if((state_val_37510 === (33))){
var inst_37459 = (state_37509[(12)]);
var inst_37437 = inst_37459;
var state_37509__$1 = (function (){var statearr_37527 = state_37509;
(statearr_37527[(7)] = inst_37437);

return statearr_37527;
})();
var statearr_37528_37586 = state_37509__$1;
(statearr_37528_37586[(2)] = null);

(statearr_37528_37586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (13))){
var inst_37437 = (state_37509[(7)]);
var inst_37444 = inst_37437.cljs$lang$protocol_mask$partition0$;
var inst_37445 = (inst_37444 & (64));
var inst_37446 = inst_37437.cljs$core$ISeq$;
var inst_37447 = (inst_37445) || (inst_37446);
var state_37509__$1 = state_37509;
if(cljs.core.truth_(inst_37447)){
var statearr_37529_37587 = state_37509__$1;
(statearr_37529_37587[(1)] = (16));

} else {
var statearr_37530_37588 = state_37509__$1;
(statearr_37530_37588[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (22))){
var inst_37469 = (state_37509[(9)]);
var inst_37468 = (state_37509[(14)]);
var inst_37467 = (state_37509[(2)]);
var inst_37468__$1 = cljs.core.nth.call(null,inst_37467,(0),null);
var inst_37469__$1 = cljs.core.nth.call(null,inst_37467,(1),null);
var inst_37470 = (inst_37468__$1 == null);
var inst_37471 = cljs.core._EQ_.call(null,inst_37469__$1,change);
var inst_37472 = (inst_37470) || (inst_37471);
var state_37509__$1 = (function (){var statearr_37531 = state_37509;
(statearr_37531[(9)] = inst_37469__$1);

(statearr_37531[(14)] = inst_37468__$1);

return statearr_37531;
})();
if(cljs.core.truth_(inst_37472)){
var statearr_37532_37589 = state_37509__$1;
(statearr_37532_37589[(1)] = (23));

} else {
var statearr_37533_37590 = state_37509__$1;
(statearr_37533_37590[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (36))){
var inst_37459 = (state_37509[(12)]);
var inst_37437 = inst_37459;
var state_37509__$1 = (function (){var statearr_37534 = state_37509;
(statearr_37534[(7)] = inst_37437);

return statearr_37534;
})();
var statearr_37535_37591 = state_37509__$1;
(statearr_37535_37591[(2)] = null);

(statearr_37535_37591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (29))){
var inst_37483 = (state_37509[(11)]);
var state_37509__$1 = state_37509;
var statearr_37536_37592 = state_37509__$1;
(statearr_37536_37592[(2)] = inst_37483);

(statearr_37536_37592[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (6))){
var state_37509__$1 = state_37509;
var statearr_37537_37593 = state_37509__$1;
(statearr_37537_37593[(2)] = false);

(statearr_37537_37593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (28))){
var inst_37479 = (state_37509[(2)]);
var inst_37480 = calc_state.call(null);
var inst_37437 = inst_37480;
var state_37509__$1 = (function (){var statearr_37538 = state_37509;
(statearr_37538[(15)] = inst_37479);

(statearr_37538[(7)] = inst_37437);

return statearr_37538;
})();
var statearr_37539_37594 = state_37509__$1;
(statearr_37539_37594[(2)] = null);

(statearr_37539_37594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (25))){
var inst_37505 = (state_37509[(2)]);
var state_37509__$1 = state_37509;
var statearr_37540_37595 = state_37509__$1;
(statearr_37540_37595[(2)] = inst_37505);

(statearr_37540_37595[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (34))){
var inst_37503 = (state_37509[(2)]);
var state_37509__$1 = state_37509;
var statearr_37541_37596 = state_37509__$1;
(statearr_37541_37596[(2)] = inst_37503);

(statearr_37541_37596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (17))){
var state_37509__$1 = state_37509;
var statearr_37542_37597 = state_37509__$1;
(statearr_37542_37597[(2)] = false);

(statearr_37542_37597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (3))){
var state_37509__$1 = state_37509;
var statearr_37543_37598 = state_37509__$1;
(statearr_37543_37598[(2)] = false);

(statearr_37543_37598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (12))){
var inst_37507 = (state_37509[(2)]);
var state_37509__$1 = state_37509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37509__$1,inst_37507);
} else {
if((state_val_37510 === (2))){
var inst_37413 = (state_37509[(8)]);
var inst_37418 = inst_37413.cljs$lang$protocol_mask$partition0$;
var inst_37419 = (inst_37418 & (64));
var inst_37420 = inst_37413.cljs$core$ISeq$;
var inst_37421 = (inst_37419) || (inst_37420);
var state_37509__$1 = state_37509;
if(cljs.core.truth_(inst_37421)){
var statearr_37544_37599 = state_37509__$1;
(statearr_37544_37599[(1)] = (5));

} else {
var statearr_37545_37600 = state_37509__$1;
(statearr_37545_37600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (23))){
var inst_37468 = (state_37509[(14)]);
var inst_37474 = (inst_37468 == null);
var state_37509__$1 = state_37509;
if(cljs.core.truth_(inst_37474)){
var statearr_37546_37601 = state_37509__$1;
(statearr_37546_37601[(1)] = (26));

} else {
var statearr_37547_37602 = state_37509__$1;
(statearr_37547_37602[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (35))){
var inst_37494 = (state_37509[(2)]);
var state_37509__$1 = state_37509;
if(cljs.core.truth_(inst_37494)){
var statearr_37548_37603 = state_37509__$1;
(statearr_37548_37603[(1)] = (36));

} else {
var statearr_37549_37604 = state_37509__$1;
(statearr_37549_37604[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (19))){
var inst_37437 = (state_37509[(7)]);
var inst_37456 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37437);
var state_37509__$1 = state_37509;
var statearr_37550_37605 = state_37509__$1;
(statearr_37550_37605[(2)] = inst_37456);

(statearr_37550_37605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (11))){
var inst_37437 = (state_37509[(7)]);
var inst_37441 = (inst_37437 == null);
var inst_37442 = cljs.core.not.call(null,inst_37441);
var state_37509__$1 = state_37509;
if(inst_37442){
var statearr_37551_37606 = state_37509__$1;
(statearr_37551_37606[(1)] = (13));

} else {
var statearr_37552_37607 = state_37509__$1;
(statearr_37552_37607[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (9))){
var inst_37413 = (state_37509[(8)]);
var state_37509__$1 = state_37509;
var statearr_37553_37608 = state_37509__$1;
(statearr_37553_37608[(2)] = inst_37413);

(statearr_37553_37608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (5))){
var state_37509__$1 = state_37509;
var statearr_37554_37609 = state_37509__$1;
(statearr_37554_37609[(2)] = true);

(statearr_37554_37609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (14))){
var state_37509__$1 = state_37509;
var statearr_37555_37610 = state_37509__$1;
(statearr_37555_37610[(2)] = false);

(statearr_37555_37610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (26))){
var inst_37469 = (state_37509[(9)]);
var inst_37476 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37469);
var state_37509__$1 = state_37509;
var statearr_37556_37611 = state_37509__$1;
(statearr_37556_37611[(2)] = inst_37476);

(statearr_37556_37611[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (16))){
var state_37509__$1 = state_37509;
var statearr_37557_37612 = state_37509__$1;
(statearr_37557_37612[(2)] = true);

(statearr_37557_37612[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (38))){
var inst_37499 = (state_37509[(2)]);
var state_37509__$1 = state_37509;
var statearr_37558_37613 = state_37509__$1;
(statearr_37558_37613[(2)] = inst_37499);

(statearr_37558_37613[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (30))){
var inst_37469 = (state_37509[(9)]);
var inst_37461 = (state_37509[(13)]);
var inst_37460 = (state_37509[(10)]);
var inst_37486 = cljs.core.empty_QMARK_.call(null,inst_37460);
var inst_37487 = inst_37461.call(null,inst_37469);
var inst_37488 = cljs.core.not.call(null,inst_37487);
var inst_37489 = (inst_37486) && (inst_37488);
var state_37509__$1 = state_37509;
var statearr_37559_37614 = state_37509__$1;
(statearr_37559_37614[(2)] = inst_37489);

(statearr_37559_37614[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (10))){
var inst_37413 = (state_37509[(8)]);
var inst_37433 = (state_37509[(2)]);
var inst_37434 = cljs.core.get.call(null,inst_37433,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37435 = cljs.core.get.call(null,inst_37433,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37436 = cljs.core.get.call(null,inst_37433,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37437 = inst_37413;
var state_37509__$1 = (function (){var statearr_37560 = state_37509;
(statearr_37560[(16)] = inst_37434);

(statearr_37560[(7)] = inst_37437);

(statearr_37560[(17)] = inst_37436);

(statearr_37560[(18)] = inst_37435);

return statearr_37560;
})();
var statearr_37561_37615 = state_37509__$1;
(statearr_37561_37615[(2)] = null);

(statearr_37561_37615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (18))){
var inst_37451 = (state_37509[(2)]);
var state_37509__$1 = state_37509;
var statearr_37562_37616 = state_37509__$1;
(statearr_37562_37616[(2)] = inst_37451);

(statearr_37562_37616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (37))){
var state_37509__$1 = state_37509;
var statearr_37563_37617 = state_37509__$1;
(statearr_37563_37617[(2)] = null);

(statearr_37563_37617[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (8))){
var inst_37413 = (state_37509[(8)]);
var inst_37430 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37413);
var state_37509__$1 = state_37509;
var statearr_37564_37618 = state_37509__$1;
(statearr_37564_37618[(2)] = inst_37430);

(statearr_37564_37618[(1)] = (10));


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
});})(c__35839__auto___37572,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35727__auto__,c__35839__auto___37572,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35728__auto__ = null;
var cljs$core$async$mix_$_state_machine__35728__auto____0 = (function (){
var statearr_37568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37568[(0)] = cljs$core$async$mix_$_state_machine__35728__auto__);

(statearr_37568[(1)] = (1));

return statearr_37568;
});
var cljs$core$async$mix_$_state_machine__35728__auto____1 = (function (state_37509){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_37509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e37569){if((e37569 instanceof Object)){
var ex__35731__auto__ = e37569;
var statearr_37570_37619 = state_37509;
(statearr_37570_37619[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37620 = state_37509;
state_37509 = G__37620;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35728__auto__ = function(state_37509){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35728__auto____1.call(this,state_37509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35728__auto____0;
cljs$core$async$mix_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35728__auto____1;
return cljs$core$async$mix_$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___37572,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35841__auto__ = (function (){var statearr_37571 = f__35840__auto__.call(null);
(statearr_37571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___37572);

return statearr_37571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___37572,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__31523__auto__ = (((p == null))?null:p);
var m__31524__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31524__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__31523__auto__ = (((p == null))?null:p);
var m__31524__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,p,v,ch);
} else {
var m__31524__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args37621 = [];
var len__31935__auto___37624 = arguments.length;
var i__31936__auto___37625 = (0);
while(true){
if((i__31936__auto___37625 < len__31935__auto___37624)){
args37621.push((arguments[i__31936__auto___37625]));

var G__37626 = (i__31936__auto___37625 + (1));
i__31936__auto___37625 = G__37626;
continue;
} else {
}
break;
}

var G__37623 = args37621.length;
switch (G__37623) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37621.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__31523__auto__ = (((p == null))?null:p);
var m__31524__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,p);
} else {
var m__31524__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,p);
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
var x__31523__auto__ = (((p == null))?null:p);
var m__31524__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31523__auto__)]);
if(!((m__31524__auto__ == null))){
return m__31524__auto__.call(null,p,v);
} else {
var m__31524__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31524__auto____$1 == null))){
return m__31524__auto____$1.call(null,p,v);
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
var args37629 = [];
var len__31935__auto___37754 = arguments.length;
var i__31936__auto___37755 = (0);
while(true){
if((i__31936__auto___37755 < len__31935__auto___37754)){
args37629.push((arguments[i__31936__auto___37755]));

var G__37756 = (i__31936__auto___37755 + (1));
i__31936__auto___37755 = G__37756;
continue;
} else {
}
break;
}

var G__37631 = args37629.length;
switch (G__37631) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37629.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30860__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30860__auto__,mults){
return (function (p1__37628_SHARP_){
if(cljs.core.truth_(p1__37628_SHARP_.call(null,topic))){
return p1__37628_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37628_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30860__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37632 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37633){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37633 = meta37633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37634,meta37633__$1){
var self__ = this;
var _37634__$1 = this;
return (new cljs.core.async.t_cljs$core$async37632(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37633__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37634){
var self__ = this;
var _37634__$1 = this;
return self__.meta37633;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37632.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37632.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37632.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async37632.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37632.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async37632.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37632.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37632.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37633","meta37633",1907745161,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37632";

cljs.core.async.t_cljs$core$async37632.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cljs.core.async/t_cljs$core$async37632");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37632 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37632(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37633){
return (new cljs.core.async.t_cljs$core$async37632(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37633));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37632(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35839__auto___37758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___37758,mults,ensure_mult,p){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___37758,mults,ensure_mult,p){
return (function (state_37706){
var state_val_37707 = (state_37706[(1)]);
if((state_val_37707 === (7))){
var inst_37702 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37708_37759 = state_37706__$1;
(statearr_37708_37759[(2)] = inst_37702);

(statearr_37708_37759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (20))){
var state_37706__$1 = state_37706;
var statearr_37709_37760 = state_37706__$1;
(statearr_37709_37760[(2)] = null);

(statearr_37709_37760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (1))){
var state_37706__$1 = state_37706;
var statearr_37710_37761 = state_37706__$1;
(statearr_37710_37761[(2)] = null);

(statearr_37710_37761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (24))){
var inst_37685 = (state_37706[(7)]);
var inst_37694 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37685);
var state_37706__$1 = state_37706;
var statearr_37711_37762 = state_37706__$1;
(statearr_37711_37762[(2)] = inst_37694);

(statearr_37711_37762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (4))){
var inst_37637 = (state_37706[(8)]);
var inst_37637__$1 = (state_37706[(2)]);
var inst_37638 = (inst_37637__$1 == null);
var state_37706__$1 = (function (){var statearr_37712 = state_37706;
(statearr_37712[(8)] = inst_37637__$1);

return statearr_37712;
})();
if(cljs.core.truth_(inst_37638)){
var statearr_37713_37763 = state_37706__$1;
(statearr_37713_37763[(1)] = (5));

} else {
var statearr_37714_37764 = state_37706__$1;
(statearr_37714_37764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (15))){
var inst_37679 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37715_37765 = state_37706__$1;
(statearr_37715_37765[(2)] = inst_37679);

(statearr_37715_37765[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (21))){
var inst_37699 = (state_37706[(2)]);
var state_37706__$1 = (function (){var statearr_37716 = state_37706;
(statearr_37716[(9)] = inst_37699);

return statearr_37716;
})();
var statearr_37717_37766 = state_37706__$1;
(statearr_37717_37766[(2)] = null);

(statearr_37717_37766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (13))){
var inst_37661 = (state_37706[(10)]);
var inst_37663 = cljs.core.chunked_seq_QMARK_.call(null,inst_37661);
var state_37706__$1 = state_37706;
if(inst_37663){
var statearr_37718_37767 = state_37706__$1;
(statearr_37718_37767[(1)] = (16));

} else {
var statearr_37719_37768 = state_37706__$1;
(statearr_37719_37768[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (22))){
var inst_37691 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37691)){
var statearr_37720_37769 = state_37706__$1;
(statearr_37720_37769[(1)] = (23));

} else {
var statearr_37721_37770 = state_37706__$1;
(statearr_37721_37770[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (6))){
var inst_37685 = (state_37706[(7)]);
var inst_37687 = (state_37706[(11)]);
var inst_37637 = (state_37706[(8)]);
var inst_37685__$1 = topic_fn.call(null,inst_37637);
var inst_37686 = cljs.core.deref.call(null,mults);
var inst_37687__$1 = cljs.core.get.call(null,inst_37686,inst_37685__$1);
var state_37706__$1 = (function (){var statearr_37722 = state_37706;
(statearr_37722[(7)] = inst_37685__$1);

(statearr_37722[(11)] = inst_37687__$1);

return statearr_37722;
})();
if(cljs.core.truth_(inst_37687__$1)){
var statearr_37723_37771 = state_37706__$1;
(statearr_37723_37771[(1)] = (19));

} else {
var statearr_37724_37772 = state_37706__$1;
(statearr_37724_37772[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (25))){
var inst_37696 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37725_37773 = state_37706__$1;
(statearr_37725_37773[(2)] = inst_37696);

(statearr_37725_37773[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (17))){
var inst_37661 = (state_37706[(10)]);
var inst_37670 = cljs.core.first.call(null,inst_37661);
var inst_37671 = cljs.core.async.muxch_STAR_.call(null,inst_37670);
var inst_37672 = cljs.core.async.close_BANG_.call(null,inst_37671);
var inst_37673 = cljs.core.next.call(null,inst_37661);
var inst_37647 = inst_37673;
var inst_37648 = null;
var inst_37649 = (0);
var inst_37650 = (0);
var state_37706__$1 = (function (){var statearr_37726 = state_37706;
(statearr_37726[(12)] = inst_37648);

(statearr_37726[(13)] = inst_37649);

(statearr_37726[(14)] = inst_37650);

(statearr_37726[(15)] = inst_37672);

(statearr_37726[(16)] = inst_37647);

return statearr_37726;
})();
var statearr_37727_37774 = state_37706__$1;
(statearr_37727_37774[(2)] = null);

(statearr_37727_37774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (3))){
var inst_37704 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37706__$1,inst_37704);
} else {
if((state_val_37707 === (12))){
var inst_37681 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37728_37775 = state_37706__$1;
(statearr_37728_37775[(2)] = inst_37681);

(statearr_37728_37775[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (2))){
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37706__$1,(4),ch);
} else {
if((state_val_37707 === (23))){
var state_37706__$1 = state_37706;
var statearr_37729_37776 = state_37706__$1;
(statearr_37729_37776[(2)] = null);

(statearr_37729_37776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (19))){
var inst_37687 = (state_37706[(11)]);
var inst_37637 = (state_37706[(8)]);
var inst_37689 = cljs.core.async.muxch_STAR_.call(null,inst_37687);
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37706__$1,(22),inst_37689,inst_37637);
} else {
if((state_val_37707 === (11))){
var inst_37661 = (state_37706[(10)]);
var inst_37647 = (state_37706[(16)]);
var inst_37661__$1 = cljs.core.seq.call(null,inst_37647);
var state_37706__$1 = (function (){var statearr_37730 = state_37706;
(statearr_37730[(10)] = inst_37661__$1);

return statearr_37730;
})();
if(inst_37661__$1){
var statearr_37731_37777 = state_37706__$1;
(statearr_37731_37777[(1)] = (13));

} else {
var statearr_37732_37778 = state_37706__$1;
(statearr_37732_37778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (9))){
var inst_37683 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37733_37779 = state_37706__$1;
(statearr_37733_37779[(2)] = inst_37683);

(statearr_37733_37779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (5))){
var inst_37644 = cljs.core.deref.call(null,mults);
var inst_37645 = cljs.core.vals.call(null,inst_37644);
var inst_37646 = cljs.core.seq.call(null,inst_37645);
var inst_37647 = inst_37646;
var inst_37648 = null;
var inst_37649 = (0);
var inst_37650 = (0);
var state_37706__$1 = (function (){var statearr_37734 = state_37706;
(statearr_37734[(12)] = inst_37648);

(statearr_37734[(13)] = inst_37649);

(statearr_37734[(14)] = inst_37650);

(statearr_37734[(16)] = inst_37647);

return statearr_37734;
})();
var statearr_37735_37780 = state_37706__$1;
(statearr_37735_37780[(2)] = null);

(statearr_37735_37780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (14))){
var state_37706__$1 = state_37706;
var statearr_37739_37781 = state_37706__$1;
(statearr_37739_37781[(2)] = null);

(statearr_37739_37781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (16))){
var inst_37661 = (state_37706[(10)]);
var inst_37665 = cljs.core.chunk_first.call(null,inst_37661);
var inst_37666 = cljs.core.chunk_rest.call(null,inst_37661);
var inst_37667 = cljs.core.count.call(null,inst_37665);
var inst_37647 = inst_37666;
var inst_37648 = inst_37665;
var inst_37649 = inst_37667;
var inst_37650 = (0);
var state_37706__$1 = (function (){var statearr_37740 = state_37706;
(statearr_37740[(12)] = inst_37648);

(statearr_37740[(13)] = inst_37649);

(statearr_37740[(14)] = inst_37650);

(statearr_37740[(16)] = inst_37647);

return statearr_37740;
})();
var statearr_37741_37782 = state_37706__$1;
(statearr_37741_37782[(2)] = null);

(statearr_37741_37782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (10))){
var inst_37648 = (state_37706[(12)]);
var inst_37649 = (state_37706[(13)]);
var inst_37650 = (state_37706[(14)]);
var inst_37647 = (state_37706[(16)]);
var inst_37655 = cljs.core._nth.call(null,inst_37648,inst_37650);
var inst_37656 = cljs.core.async.muxch_STAR_.call(null,inst_37655);
var inst_37657 = cljs.core.async.close_BANG_.call(null,inst_37656);
var inst_37658 = (inst_37650 + (1));
var tmp37736 = inst_37648;
var tmp37737 = inst_37649;
var tmp37738 = inst_37647;
var inst_37647__$1 = tmp37738;
var inst_37648__$1 = tmp37736;
var inst_37649__$1 = tmp37737;
var inst_37650__$1 = inst_37658;
var state_37706__$1 = (function (){var statearr_37742 = state_37706;
(statearr_37742[(12)] = inst_37648__$1);

(statearr_37742[(13)] = inst_37649__$1);

(statearr_37742[(14)] = inst_37650__$1);

(statearr_37742[(17)] = inst_37657);

(statearr_37742[(16)] = inst_37647__$1);

return statearr_37742;
})();
var statearr_37743_37783 = state_37706__$1;
(statearr_37743_37783[(2)] = null);

(statearr_37743_37783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (18))){
var inst_37676 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37744_37784 = state_37706__$1;
(statearr_37744_37784[(2)] = inst_37676);

(statearr_37744_37784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (8))){
var inst_37649 = (state_37706[(13)]);
var inst_37650 = (state_37706[(14)]);
var inst_37652 = (inst_37650 < inst_37649);
var inst_37653 = inst_37652;
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37653)){
var statearr_37745_37785 = state_37706__$1;
(statearr_37745_37785[(1)] = (10));

} else {
var statearr_37746_37786 = state_37706__$1;
(statearr_37746_37786[(1)] = (11));

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
});})(c__35839__auto___37758,mults,ensure_mult,p))
;
return ((function (switch__35727__auto__,c__35839__auto___37758,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35728__auto__ = null;
var cljs$core$async$state_machine__35728__auto____0 = (function (){
var statearr_37750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37750[(0)] = cljs$core$async$state_machine__35728__auto__);

(statearr_37750[(1)] = (1));

return statearr_37750;
});
var cljs$core$async$state_machine__35728__auto____1 = (function (state_37706){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_37706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e37751){if((e37751 instanceof Object)){
var ex__35731__auto__ = e37751;
var statearr_37752_37787 = state_37706;
(statearr_37752_37787[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37788 = state_37706;
state_37706 = G__37788;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$state_machine__35728__auto__ = function(state_37706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35728__auto____1.call(this,state_37706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35728__auto____0;
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35728__auto____1;
return cljs$core$async$state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___37758,mults,ensure_mult,p))
})();
var state__35841__auto__ = (function (){var statearr_37753 = f__35840__auto__.call(null);
(statearr_37753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___37758);

return statearr_37753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___37758,mults,ensure_mult,p))
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
var args37789 = [];
var len__31935__auto___37792 = arguments.length;
var i__31936__auto___37793 = (0);
while(true){
if((i__31936__auto___37793 < len__31935__auto___37792)){
args37789.push((arguments[i__31936__auto___37793]));

var G__37794 = (i__31936__auto___37793 + (1));
i__31936__auto___37793 = G__37794;
continue;
} else {
}
break;
}

var G__37791 = args37789.length;
switch (G__37791) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37789.length)].join('')));

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
var args37796 = [];
var len__31935__auto___37799 = arguments.length;
var i__31936__auto___37800 = (0);
while(true){
if((i__31936__auto___37800 < len__31935__auto___37799)){
args37796.push((arguments[i__31936__auto___37800]));

var G__37801 = (i__31936__auto___37800 + (1));
i__31936__auto___37800 = G__37801;
continue;
} else {
}
break;
}

var G__37798 = args37796.length;
switch (G__37798) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37796.length)].join('')));

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
var args37803 = [];
var len__31935__auto___37874 = arguments.length;
var i__31936__auto___37875 = (0);
while(true){
if((i__31936__auto___37875 < len__31935__auto___37874)){
args37803.push((arguments[i__31936__auto___37875]));

var G__37876 = (i__31936__auto___37875 + (1));
i__31936__auto___37875 = G__37876;
continue;
} else {
}
break;
}

var G__37805 = args37803.length;
switch (G__37805) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37803.length)].join('')));

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
var c__35839__auto___37878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___37878,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___37878,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37844){
var state_val_37845 = (state_37844[(1)]);
if((state_val_37845 === (7))){
var state_37844__$1 = state_37844;
var statearr_37846_37879 = state_37844__$1;
(statearr_37846_37879[(2)] = null);

(statearr_37846_37879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37845 === (1))){
var state_37844__$1 = state_37844;
var statearr_37847_37880 = state_37844__$1;
(statearr_37847_37880[(2)] = null);

(statearr_37847_37880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37845 === (4))){
var inst_37808 = (state_37844[(7)]);
var inst_37810 = (inst_37808 < cnt);
var state_37844__$1 = state_37844;
if(cljs.core.truth_(inst_37810)){
var statearr_37848_37881 = state_37844__$1;
(statearr_37848_37881[(1)] = (6));

} else {
var statearr_37849_37882 = state_37844__$1;
(statearr_37849_37882[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37845 === (15))){
var inst_37840 = (state_37844[(2)]);
var state_37844__$1 = state_37844;
var statearr_37850_37883 = state_37844__$1;
(statearr_37850_37883[(2)] = inst_37840);

(statearr_37850_37883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37845 === (13))){
var inst_37833 = cljs.core.async.close_BANG_.call(null,out);
var state_37844__$1 = state_37844;
var statearr_37851_37884 = state_37844__$1;
(statearr_37851_37884[(2)] = inst_37833);

(statearr_37851_37884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37845 === (6))){
var state_37844__$1 = state_37844;
var statearr_37852_37885 = state_37844__$1;
(statearr_37852_37885[(2)] = null);

(statearr_37852_37885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37845 === (3))){
var inst_37842 = (state_37844[(2)]);
var state_37844__$1 = state_37844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37844__$1,inst_37842);
} else {
if((state_val_37845 === (12))){
var inst_37830 = (state_37844[(8)]);
var inst_37830__$1 = (state_37844[(2)]);
var inst_37831 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37830__$1);
var state_37844__$1 = (function (){var statearr_37853 = state_37844;
(statearr_37853[(8)] = inst_37830__$1);

return statearr_37853;
})();
if(cljs.core.truth_(inst_37831)){
var statearr_37854_37886 = state_37844__$1;
(statearr_37854_37886[(1)] = (13));

} else {
var statearr_37855_37887 = state_37844__$1;
(statearr_37855_37887[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37845 === (2))){
var inst_37807 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37808 = (0);
var state_37844__$1 = (function (){var statearr_37856 = state_37844;
(statearr_37856[(9)] = inst_37807);

(statearr_37856[(7)] = inst_37808);

return statearr_37856;
})();
var statearr_37857_37888 = state_37844__$1;
(statearr_37857_37888[(2)] = null);

(statearr_37857_37888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37845 === (11))){
var inst_37808 = (state_37844[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37844,(10),Object,null,(9));
var inst_37817 = chs__$1.call(null,inst_37808);
var inst_37818 = done.call(null,inst_37808);
var inst_37819 = cljs.core.async.take_BANG_.call(null,inst_37817,inst_37818);
var state_37844__$1 = state_37844;
var statearr_37858_37889 = state_37844__$1;
(statearr_37858_37889[(2)] = inst_37819);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37844__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37845 === (9))){
var inst_37808 = (state_37844[(7)]);
var inst_37821 = (state_37844[(2)]);
var inst_37822 = (inst_37808 + (1));
var inst_37808__$1 = inst_37822;
var state_37844__$1 = (function (){var statearr_37859 = state_37844;
(statearr_37859[(7)] = inst_37808__$1);

(statearr_37859[(10)] = inst_37821);

return statearr_37859;
})();
var statearr_37860_37890 = state_37844__$1;
(statearr_37860_37890[(2)] = null);

(statearr_37860_37890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37845 === (5))){
var inst_37828 = (state_37844[(2)]);
var state_37844__$1 = (function (){var statearr_37861 = state_37844;
(statearr_37861[(11)] = inst_37828);

return statearr_37861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37844__$1,(12),dchan);
} else {
if((state_val_37845 === (14))){
var inst_37830 = (state_37844[(8)]);
var inst_37835 = cljs.core.apply.call(null,f,inst_37830);
var state_37844__$1 = state_37844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37844__$1,(16),out,inst_37835);
} else {
if((state_val_37845 === (16))){
var inst_37837 = (state_37844[(2)]);
var state_37844__$1 = (function (){var statearr_37862 = state_37844;
(statearr_37862[(12)] = inst_37837);

return statearr_37862;
})();
var statearr_37863_37891 = state_37844__$1;
(statearr_37863_37891[(2)] = null);

(statearr_37863_37891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37845 === (10))){
var inst_37812 = (state_37844[(2)]);
var inst_37813 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37844__$1 = (function (){var statearr_37864 = state_37844;
(statearr_37864[(13)] = inst_37812);

return statearr_37864;
})();
var statearr_37865_37892 = state_37844__$1;
(statearr_37865_37892[(2)] = inst_37813);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37844__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37845 === (8))){
var inst_37826 = (state_37844[(2)]);
var state_37844__$1 = state_37844;
var statearr_37866_37893 = state_37844__$1;
(statearr_37866_37893[(2)] = inst_37826);

(statearr_37866_37893[(1)] = (5));


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
});})(c__35839__auto___37878,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35727__auto__,c__35839__auto___37878,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35728__auto__ = null;
var cljs$core$async$state_machine__35728__auto____0 = (function (){
var statearr_37870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37870[(0)] = cljs$core$async$state_machine__35728__auto__);

(statearr_37870[(1)] = (1));

return statearr_37870;
});
var cljs$core$async$state_machine__35728__auto____1 = (function (state_37844){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_37844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e37871){if((e37871 instanceof Object)){
var ex__35731__auto__ = e37871;
var statearr_37872_37894 = state_37844;
(statearr_37872_37894[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37895 = state_37844;
state_37844 = G__37895;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$state_machine__35728__auto__ = function(state_37844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35728__auto____1.call(this,state_37844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35728__auto____0;
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35728__auto____1;
return cljs$core$async$state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___37878,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35841__auto__ = (function (){var statearr_37873 = f__35840__auto__.call(null);
(statearr_37873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___37878);

return statearr_37873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___37878,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args37897 = [];
var len__31935__auto___37955 = arguments.length;
var i__31936__auto___37956 = (0);
while(true){
if((i__31936__auto___37956 < len__31935__auto___37955)){
args37897.push((arguments[i__31936__auto___37956]));

var G__37957 = (i__31936__auto___37956 + (1));
i__31936__auto___37956 = G__37957;
continue;
} else {
}
break;
}

var G__37899 = args37897.length;
switch (G__37899) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37897.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35839__auto___37959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___37959,out){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___37959,out){
return (function (state_37931){
var state_val_37932 = (state_37931[(1)]);
if((state_val_37932 === (7))){
var inst_37910 = (state_37931[(7)]);
var inst_37911 = (state_37931[(8)]);
var inst_37910__$1 = (state_37931[(2)]);
var inst_37911__$1 = cljs.core.nth.call(null,inst_37910__$1,(0),null);
var inst_37912 = cljs.core.nth.call(null,inst_37910__$1,(1),null);
var inst_37913 = (inst_37911__$1 == null);
var state_37931__$1 = (function (){var statearr_37933 = state_37931;
(statearr_37933[(9)] = inst_37912);

(statearr_37933[(7)] = inst_37910__$1);

(statearr_37933[(8)] = inst_37911__$1);

return statearr_37933;
})();
if(cljs.core.truth_(inst_37913)){
var statearr_37934_37960 = state_37931__$1;
(statearr_37934_37960[(1)] = (8));

} else {
var statearr_37935_37961 = state_37931__$1;
(statearr_37935_37961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (1))){
var inst_37900 = cljs.core.vec.call(null,chs);
var inst_37901 = inst_37900;
var state_37931__$1 = (function (){var statearr_37936 = state_37931;
(statearr_37936[(10)] = inst_37901);

return statearr_37936;
})();
var statearr_37937_37962 = state_37931__$1;
(statearr_37937_37962[(2)] = null);

(statearr_37937_37962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (4))){
var inst_37901 = (state_37931[(10)]);
var state_37931__$1 = state_37931;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37931__$1,(7),inst_37901);
} else {
if((state_val_37932 === (6))){
var inst_37927 = (state_37931[(2)]);
var state_37931__$1 = state_37931;
var statearr_37938_37963 = state_37931__$1;
(statearr_37938_37963[(2)] = inst_37927);

(statearr_37938_37963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (3))){
var inst_37929 = (state_37931[(2)]);
var state_37931__$1 = state_37931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37931__$1,inst_37929);
} else {
if((state_val_37932 === (2))){
var inst_37901 = (state_37931[(10)]);
var inst_37903 = cljs.core.count.call(null,inst_37901);
var inst_37904 = (inst_37903 > (0));
var state_37931__$1 = state_37931;
if(cljs.core.truth_(inst_37904)){
var statearr_37940_37964 = state_37931__$1;
(statearr_37940_37964[(1)] = (4));

} else {
var statearr_37941_37965 = state_37931__$1;
(statearr_37941_37965[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (11))){
var inst_37901 = (state_37931[(10)]);
var inst_37920 = (state_37931[(2)]);
var tmp37939 = inst_37901;
var inst_37901__$1 = tmp37939;
var state_37931__$1 = (function (){var statearr_37942 = state_37931;
(statearr_37942[(10)] = inst_37901__$1);

(statearr_37942[(11)] = inst_37920);

return statearr_37942;
})();
var statearr_37943_37966 = state_37931__$1;
(statearr_37943_37966[(2)] = null);

(statearr_37943_37966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (9))){
var inst_37911 = (state_37931[(8)]);
var state_37931__$1 = state_37931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37931__$1,(11),out,inst_37911);
} else {
if((state_val_37932 === (5))){
var inst_37925 = cljs.core.async.close_BANG_.call(null,out);
var state_37931__$1 = state_37931;
var statearr_37944_37967 = state_37931__$1;
(statearr_37944_37967[(2)] = inst_37925);

(statearr_37944_37967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (10))){
var inst_37923 = (state_37931[(2)]);
var state_37931__$1 = state_37931;
var statearr_37945_37968 = state_37931__$1;
(statearr_37945_37968[(2)] = inst_37923);

(statearr_37945_37968[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (8))){
var inst_37912 = (state_37931[(9)]);
var inst_37910 = (state_37931[(7)]);
var inst_37911 = (state_37931[(8)]);
var inst_37901 = (state_37931[(10)]);
var inst_37915 = (function (){var cs = inst_37901;
var vec__37906 = inst_37910;
var v = inst_37911;
var c = inst_37912;
return ((function (cs,vec__37906,v,c,inst_37912,inst_37910,inst_37911,inst_37901,state_val_37932,c__35839__auto___37959,out){
return (function (p1__37896_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37896_SHARP_);
});
;})(cs,vec__37906,v,c,inst_37912,inst_37910,inst_37911,inst_37901,state_val_37932,c__35839__auto___37959,out))
})();
var inst_37916 = cljs.core.filterv.call(null,inst_37915,inst_37901);
var inst_37901__$1 = inst_37916;
var state_37931__$1 = (function (){var statearr_37946 = state_37931;
(statearr_37946[(10)] = inst_37901__$1);

return statearr_37946;
})();
var statearr_37947_37969 = state_37931__$1;
(statearr_37947_37969[(2)] = null);

(statearr_37947_37969[(1)] = (2));


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
});})(c__35839__auto___37959,out))
;
return ((function (switch__35727__auto__,c__35839__auto___37959,out){
return (function() {
var cljs$core$async$state_machine__35728__auto__ = null;
var cljs$core$async$state_machine__35728__auto____0 = (function (){
var statearr_37951 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37951[(0)] = cljs$core$async$state_machine__35728__auto__);

(statearr_37951[(1)] = (1));

return statearr_37951;
});
var cljs$core$async$state_machine__35728__auto____1 = (function (state_37931){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_37931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e37952){if((e37952 instanceof Object)){
var ex__35731__auto__ = e37952;
var statearr_37953_37970 = state_37931;
(statearr_37953_37970[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37971 = state_37931;
state_37931 = G__37971;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$state_machine__35728__auto__ = function(state_37931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35728__auto____1.call(this,state_37931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35728__auto____0;
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35728__auto____1;
return cljs$core$async$state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___37959,out))
})();
var state__35841__auto__ = (function (){var statearr_37954 = f__35840__auto__.call(null);
(statearr_37954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___37959);

return statearr_37954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___37959,out))
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
var args37972 = [];
var len__31935__auto___38021 = arguments.length;
var i__31936__auto___38022 = (0);
while(true){
if((i__31936__auto___38022 < len__31935__auto___38021)){
args37972.push((arguments[i__31936__auto___38022]));

var G__38023 = (i__31936__auto___38022 + (1));
i__31936__auto___38022 = G__38023;
continue;
} else {
}
break;
}

var G__37974 = args37972.length;
switch (G__37974) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37972.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35839__auto___38025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___38025,out){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___38025,out){
return (function (state_37998){
var state_val_37999 = (state_37998[(1)]);
if((state_val_37999 === (7))){
var inst_37980 = (state_37998[(7)]);
var inst_37980__$1 = (state_37998[(2)]);
var inst_37981 = (inst_37980__$1 == null);
var inst_37982 = cljs.core.not.call(null,inst_37981);
var state_37998__$1 = (function (){var statearr_38000 = state_37998;
(statearr_38000[(7)] = inst_37980__$1);

return statearr_38000;
})();
if(inst_37982){
var statearr_38001_38026 = state_37998__$1;
(statearr_38001_38026[(1)] = (8));

} else {
var statearr_38002_38027 = state_37998__$1;
(statearr_38002_38027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (1))){
var inst_37975 = (0);
var state_37998__$1 = (function (){var statearr_38003 = state_37998;
(statearr_38003[(8)] = inst_37975);

return statearr_38003;
})();
var statearr_38004_38028 = state_37998__$1;
(statearr_38004_38028[(2)] = null);

(statearr_38004_38028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (4))){
var state_37998__$1 = state_37998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37998__$1,(7),ch);
} else {
if((state_val_37999 === (6))){
var inst_37993 = (state_37998[(2)]);
var state_37998__$1 = state_37998;
var statearr_38005_38029 = state_37998__$1;
(statearr_38005_38029[(2)] = inst_37993);

(statearr_38005_38029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (3))){
var inst_37995 = (state_37998[(2)]);
var inst_37996 = cljs.core.async.close_BANG_.call(null,out);
var state_37998__$1 = (function (){var statearr_38006 = state_37998;
(statearr_38006[(9)] = inst_37995);

return statearr_38006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37998__$1,inst_37996);
} else {
if((state_val_37999 === (2))){
var inst_37975 = (state_37998[(8)]);
var inst_37977 = (inst_37975 < n);
var state_37998__$1 = state_37998;
if(cljs.core.truth_(inst_37977)){
var statearr_38007_38030 = state_37998__$1;
(statearr_38007_38030[(1)] = (4));

} else {
var statearr_38008_38031 = state_37998__$1;
(statearr_38008_38031[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (11))){
var inst_37975 = (state_37998[(8)]);
var inst_37985 = (state_37998[(2)]);
var inst_37986 = (inst_37975 + (1));
var inst_37975__$1 = inst_37986;
var state_37998__$1 = (function (){var statearr_38009 = state_37998;
(statearr_38009[(8)] = inst_37975__$1);

(statearr_38009[(10)] = inst_37985);

return statearr_38009;
})();
var statearr_38010_38032 = state_37998__$1;
(statearr_38010_38032[(2)] = null);

(statearr_38010_38032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (9))){
var state_37998__$1 = state_37998;
var statearr_38011_38033 = state_37998__$1;
(statearr_38011_38033[(2)] = null);

(statearr_38011_38033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (5))){
var state_37998__$1 = state_37998;
var statearr_38012_38034 = state_37998__$1;
(statearr_38012_38034[(2)] = null);

(statearr_38012_38034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (10))){
var inst_37990 = (state_37998[(2)]);
var state_37998__$1 = state_37998;
var statearr_38013_38035 = state_37998__$1;
(statearr_38013_38035[(2)] = inst_37990);

(statearr_38013_38035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (8))){
var inst_37980 = (state_37998[(7)]);
var state_37998__$1 = state_37998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37998__$1,(11),out,inst_37980);
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
});})(c__35839__auto___38025,out))
;
return ((function (switch__35727__auto__,c__35839__auto___38025,out){
return (function() {
var cljs$core$async$state_machine__35728__auto__ = null;
var cljs$core$async$state_machine__35728__auto____0 = (function (){
var statearr_38017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38017[(0)] = cljs$core$async$state_machine__35728__auto__);

(statearr_38017[(1)] = (1));

return statearr_38017;
});
var cljs$core$async$state_machine__35728__auto____1 = (function (state_37998){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_37998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e38018){if((e38018 instanceof Object)){
var ex__35731__auto__ = e38018;
var statearr_38019_38036 = state_37998;
(statearr_38019_38036[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38037 = state_37998;
state_37998 = G__38037;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$state_machine__35728__auto__ = function(state_37998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35728__auto____1.call(this,state_37998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35728__auto____0;
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35728__auto____1;
return cljs$core$async$state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___38025,out))
})();
var state__35841__auto__ = (function (){var statearr_38020 = f__35840__auto__.call(null);
(statearr_38020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___38025);

return statearr_38020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___38025,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38045 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38045 = (function (map_LT_,f,ch,meta38046){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38046 = meta38046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38047,meta38046__$1){
var self__ = this;
var _38047__$1 = this;
return (new cljs.core.async.t_cljs$core$async38045(self__.map_LT_,self__.f,self__.ch,meta38046__$1));
});

cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38047){
var self__ = this;
var _38047__$1 = this;
return self__.meta38046;
});

cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38048 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38048 = (function (map_LT_,f,ch,meta38046,_,fn1,meta38049){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38046 = meta38046;
this._ = _;
this.fn1 = fn1;
this.meta38049 = meta38049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38050,meta38049__$1){
var self__ = this;
var _38050__$1 = this;
return (new cljs.core.async.t_cljs$core$async38048(self__.map_LT_,self__.f,self__.ch,self__.meta38046,self__._,self__.fn1,meta38049__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38050){
var self__ = this;
var _38050__$1 = this;
return self__.meta38049;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38038_SHARP_){
return f1.call(null,(((p1__38038_SHARP_ == null))?null:self__.f.call(null,p1__38038_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38048.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38046","meta38046",2080457433,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38045","cljs.core.async/t_cljs$core$async38045",967885524,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38049","meta38049",-1351848949,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38048";

cljs.core.async.t_cljs$core$async38048.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cljs.core.async/t_cljs$core$async38048");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38048 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38048(map_LT___$1,f__$1,ch__$1,meta38046__$1,___$2,fn1__$1,meta38049){
return (new cljs.core.async.t_cljs$core$async38048(map_LT___$1,f__$1,ch__$1,meta38046__$1,___$2,fn1__$1,meta38049));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38048(self__.map_LT_,self__.f,self__.ch,self__.meta38046,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30848__auto__ = ret;
if(cljs.core.truth_(and__30848__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30848__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38046","meta38046",2080457433,null)], null);
});

cljs.core.async.t_cljs$core$async38045.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38045";

cljs.core.async.t_cljs$core$async38045.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cljs.core.async/t_cljs$core$async38045");
});

cljs.core.async.__GT_t_cljs$core$async38045 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38045(map_LT___$1,f__$1,ch__$1,meta38046){
return (new cljs.core.async.t_cljs$core$async38045(map_LT___$1,f__$1,ch__$1,meta38046));
});

}

return (new cljs.core.async.t_cljs$core$async38045(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38054 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38054 = (function (map_GT_,f,ch,meta38055){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38055 = meta38055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38056,meta38055__$1){
var self__ = this;
var _38056__$1 = this;
return (new cljs.core.async.t_cljs$core$async38054(self__.map_GT_,self__.f,self__.ch,meta38055__$1));
});

cljs.core.async.t_cljs$core$async38054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38056){
var self__ = this;
var _38056__$1 = this;
return self__.meta38055;
});

cljs.core.async.t_cljs$core$async38054.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38054.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38054.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38054.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38054.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38054.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38055","meta38055",-1244440082,null)], null);
});

cljs.core.async.t_cljs$core$async38054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38054";

cljs.core.async.t_cljs$core$async38054.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cljs.core.async/t_cljs$core$async38054");
});

cljs.core.async.__GT_t_cljs$core$async38054 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38054(map_GT___$1,f__$1,ch__$1,meta38055){
return (new cljs.core.async.t_cljs$core$async38054(map_GT___$1,f__$1,ch__$1,meta38055));
});

}

return (new cljs.core.async.t_cljs$core$async38054(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38060 = (function (filter_GT_,p,ch,meta38061){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38061 = meta38061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38062,meta38061__$1){
var self__ = this;
var _38062__$1 = this;
return (new cljs.core.async.t_cljs$core$async38060(self__.filter_GT_,self__.p,self__.ch,meta38061__$1));
});

cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38062){
var self__ = this;
var _38062__$1 = this;
return self__.meta38061;
});

cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38060.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38061","meta38061",1369655593,null)], null);
});

cljs.core.async.t_cljs$core$async38060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38060";

cljs.core.async.t_cljs$core$async38060.cljs$lang$ctorPrWriter = (function (this__31466__auto__,writer__31467__auto__,opt__31468__auto__){
return cljs.core._write.call(null,writer__31467__auto__,"cljs.core.async/t_cljs$core$async38060");
});

cljs.core.async.__GT_t_cljs$core$async38060 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38060(filter_GT___$1,p__$1,ch__$1,meta38061){
return (new cljs.core.async.t_cljs$core$async38060(filter_GT___$1,p__$1,ch__$1,meta38061));
});

}

return (new cljs.core.async.t_cljs$core$async38060(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args38063 = [];
var len__31935__auto___38107 = arguments.length;
var i__31936__auto___38108 = (0);
while(true){
if((i__31936__auto___38108 < len__31935__auto___38107)){
args38063.push((arguments[i__31936__auto___38108]));

var G__38109 = (i__31936__auto___38108 + (1));
i__31936__auto___38108 = G__38109;
continue;
} else {
}
break;
}

var G__38065 = args38063.length;
switch (G__38065) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38063.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35839__auto___38111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___38111,out){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___38111,out){
return (function (state_38086){
var state_val_38087 = (state_38086[(1)]);
if((state_val_38087 === (7))){
var inst_38082 = (state_38086[(2)]);
var state_38086__$1 = state_38086;
var statearr_38088_38112 = state_38086__$1;
(statearr_38088_38112[(2)] = inst_38082);

(statearr_38088_38112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (1))){
var state_38086__$1 = state_38086;
var statearr_38089_38113 = state_38086__$1;
(statearr_38089_38113[(2)] = null);

(statearr_38089_38113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (4))){
var inst_38068 = (state_38086[(7)]);
var inst_38068__$1 = (state_38086[(2)]);
var inst_38069 = (inst_38068__$1 == null);
var state_38086__$1 = (function (){var statearr_38090 = state_38086;
(statearr_38090[(7)] = inst_38068__$1);

return statearr_38090;
})();
if(cljs.core.truth_(inst_38069)){
var statearr_38091_38114 = state_38086__$1;
(statearr_38091_38114[(1)] = (5));

} else {
var statearr_38092_38115 = state_38086__$1;
(statearr_38092_38115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (6))){
var inst_38068 = (state_38086[(7)]);
var inst_38073 = p.call(null,inst_38068);
var state_38086__$1 = state_38086;
if(cljs.core.truth_(inst_38073)){
var statearr_38093_38116 = state_38086__$1;
(statearr_38093_38116[(1)] = (8));

} else {
var statearr_38094_38117 = state_38086__$1;
(statearr_38094_38117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (3))){
var inst_38084 = (state_38086[(2)]);
var state_38086__$1 = state_38086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38086__$1,inst_38084);
} else {
if((state_val_38087 === (2))){
var state_38086__$1 = state_38086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38086__$1,(4),ch);
} else {
if((state_val_38087 === (11))){
var inst_38076 = (state_38086[(2)]);
var state_38086__$1 = state_38086;
var statearr_38095_38118 = state_38086__$1;
(statearr_38095_38118[(2)] = inst_38076);

(statearr_38095_38118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (9))){
var state_38086__$1 = state_38086;
var statearr_38096_38119 = state_38086__$1;
(statearr_38096_38119[(2)] = null);

(statearr_38096_38119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (5))){
var inst_38071 = cljs.core.async.close_BANG_.call(null,out);
var state_38086__$1 = state_38086;
var statearr_38097_38120 = state_38086__$1;
(statearr_38097_38120[(2)] = inst_38071);

(statearr_38097_38120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (10))){
var inst_38079 = (state_38086[(2)]);
var state_38086__$1 = (function (){var statearr_38098 = state_38086;
(statearr_38098[(8)] = inst_38079);

return statearr_38098;
})();
var statearr_38099_38121 = state_38086__$1;
(statearr_38099_38121[(2)] = null);

(statearr_38099_38121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38087 === (8))){
var inst_38068 = (state_38086[(7)]);
var state_38086__$1 = state_38086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38086__$1,(11),out,inst_38068);
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
});})(c__35839__auto___38111,out))
;
return ((function (switch__35727__auto__,c__35839__auto___38111,out){
return (function() {
var cljs$core$async$state_machine__35728__auto__ = null;
var cljs$core$async$state_machine__35728__auto____0 = (function (){
var statearr_38103 = [null,null,null,null,null,null,null,null,null];
(statearr_38103[(0)] = cljs$core$async$state_machine__35728__auto__);

(statearr_38103[(1)] = (1));

return statearr_38103;
});
var cljs$core$async$state_machine__35728__auto____1 = (function (state_38086){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_38086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e38104){if((e38104 instanceof Object)){
var ex__35731__auto__ = e38104;
var statearr_38105_38122 = state_38086;
(statearr_38105_38122[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38123 = state_38086;
state_38086 = G__38123;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$state_machine__35728__auto__ = function(state_38086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35728__auto____1.call(this,state_38086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35728__auto____0;
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35728__auto____1;
return cljs$core$async$state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___38111,out))
})();
var state__35841__auto__ = (function (){var statearr_38106 = f__35840__auto__.call(null);
(statearr_38106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___38111);

return statearr_38106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___38111,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38124 = [];
var len__31935__auto___38127 = arguments.length;
var i__31936__auto___38128 = (0);
while(true){
if((i__31936__auto___38128 < len__31935__auto___38127)){
args38124.push((arguments[i__31936__auto___38128]));

var G__38129 = (i__31936__auto___38128 + (1));
i__31936__auto___38128 = G__38129;
continue;
} else {
}
break;
}

var G__38126 = args38124.length;
switch (G__38126) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38124.length)].join('')));

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
var c__35839__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto__){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto__){
return (function (state_38296){
var state_val_38297 = (state_38296[(1)]);
if((state_val_38297 === (7))){
var inst_38292 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38298_38339 = state_38296__$1;
(statearr_38298_38339[(2)] = inst_38292);

(statearr_38298_38339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (20))){
var inst_38262 = (state_38296[(7)]);
var inst_38273 = (state_38296[(2)]);
var inst_38274 = cljs.core.next.call(null,inst_38262);
var inst_38248 = inst_38274;
var inst_38249 = null;
var inst_38250 = (0);
var inst_38251 = (0);
var state_38296__$1 = (function (){var statearr_38299 = state_38296;
(statearr_38299[(8)] = inst_38273);

(statearr_38299[(9)] = inst_38251);

(statearr_38299[(10)] = inst_38248);

(statearr_38299[(11)] = inst_38250);

(statearr_38299[(12)] = inst_38249);

return statearr_38299;
})();
var statearr_38300_38340 = state_38296__$1;
(statearr_38300_38340[(2)] = null);

(statearr_38300_38340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (1))){
var state_38296__$1 = state_38296;
var statearr_38301_38341 = state_38296__$1;
(statearr_38301_38341[(2)] = null);

(statearr_38301_38341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (4))){
var inst_38237 = (state_38296[(13)]);
var inst_38237__$1 = (state_38296[(2)]);
var inst_38238 = (inst_38237__$1 == null);
var state_38296__$1 = (function (){var statearr_38302 = state_38296;
(statearr_38302[(13)] = inst_38237__$1);

return statearr_38302;
})();
if(cljs.core.truth_(inst_38238)){
var statearr_38303_38342 = state_38296__$1;
(statearr_38303_38342[(1)] = (5));

} else {
var statearr_38304_38343 = state_38296__$1;
(statearr_38304_38343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (15))){
var state_38296__$1 = state_38296;
var statearr_38308_38344 = state_38296__$1;
(statearr_38308_38344[(2)] = null);

(statearr_38308_38344[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (21))){
var state_38296__$1 = state_38296;
var statearr_38309_38345 = state_38296__$1;
(statearr_38309_38345[(2)] = null);

(statearr_38309_38345[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (13))){
var inst_38251 = (state_38296[(9)]);
var inst_38248 = (state_38296[(10)]);
var inst_38250 = (state_38296[(11)]);
var inst_38249 = (state_38296[(12)]);
var inst_38258 = (state_38296[(2)]);
var inst_38259 = (inst_38251 + (1));
var tmp38305 = inst_38248;
var tmp38306 = inst_38250;
var tmp38307 = inst_38249;
var inst_38248__$1 = tmp38305;
var inst_38249__$1 = tmp38307;
var inst_38250__$1 = tmp38306;
var inst_38251__$1 = inst_38259;
var state_38296__$1 = (function (){var statearr_38310 = state_38296;
(statearr_38310[(14)] = inst_38258);

(statearr_38310[(9)] = inst_38251__$1);

(statearr_38310[(10)] = inst_38248__$1);

(statearr_38310[(11)] = inst_38250__$1);

(statearr_38310[(12)] = inst_38249__$1);

return statearr_38310;
})();
var statearr_38311_38346 = state_38296__$1;
(statearr_38311_38346[(2)] = null);

(statearr_38311_38346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (22))){
var state_38296__$1 = state_38296;
var statearr_38312_38347 = state_38296__$1;
(statearr_38312_38347[(2)] = null);

(statearr_38312_38347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (6))){
var inst_38237 = (state_38296[(13)]);
var inst_38246 = f.call(null,inst_38237);
var inst_38247 = cljs.core.seq.call(null,inst_38246);
var inst_38248 = inst_38247;
var inst_38249 = null;
var inst_38250 = (0);
var inst_38251 = (0);
var state_38296__$1 = (function (){var statearr_38313 = state_38296;
(statearr_38313[(9)] = inst_38251);

(statearr_38313[(10)] = inst_38248);

(statearr_38313[(11)] = inst_38250);

(statearr_38313[(12)] = inst_38249);

return statearr_38313;
})();
var statearr_38314_38348 = state_38296__$1;
(statearr_38314_38348[(2)] = null);

(statearr_38314_38348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (17))){
var inst_38262 = (state_38296[(7)]);
var inst_38266 = cljs.core.chunk_first.call(null,inst_38262);
var inst_38267 = cljs.core.chunk_rest.call(null,inst_38262);
var inst_38268 = cljs.core.count.call(null,inst_38266);
var inst_38248 = inst_38267;
var inst_38249 = inst_38266;
var inst_38250 = inst_38268;
var inst_38251 = (0);
var state_38296__$1 = (function (){var statearr_38315 = state_38296;
(statearr_38315[(9)] = inst_38251);

(statearr_38315[(10)] = inst_38248);

(statearr_38315[(11)] = inst_38250);

(statearr_38315[(12)] = inst_38249);

return statearr_38315;
})();
var statearr_38316_38349 = state_38296__$1;
(statearr_38316_38349[(2)] = null);

(statearr_38316_38349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (3))){
var inst_38294 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38296__$1,inst_38294);
} else {
if((state_val_38297 === (12))){
var inst_38282 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38317_38350 = state_38296__$1;
(statearr_38317_38350[(2)] = inst_38282);

(statearr_38317_38350[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (2))){
var state_38296__$1 = state_38296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38296__$1,(4),in$);
} else {
if((state_val_38297 === (23))){
var inst_38290 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38318_38351 = state_38296__$1;
(statearr_38318_38351[(2)] = inst_38290);

(statearr_38318_38351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (19))){
var inst_38277 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38319_38352 = state_38296__$1;
(statearr_38319_38352[(2)] = inst_38277);

(statearr_38319_38352[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (11))){
var inst_38262 = (state_38296[(7)]);
var inst_38248 = (state_38296[(10)]);
var inst_38262__$1 = cljs.core.seq.call(null,inst_38248);
var state_38296__$1 = (function (){var statearr_38320 = state_38296;
(statearr_38320[(7)] = inst_38262__$1);

return statearr_38320;
})();
if(inst_38262__$1){
var statearr_38321_38353 = state_38296__$1;
(statearr_38321_38353[(1)] = (14));

} else {
var statearr_38322_38354 = state_38296__$1;
(statearr_38322_38354[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (9))){
var inst_38284 = (state_38296[(2)]);
var inst_38285 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38296__$1 = (function (){var statearr_38323 = state_38296;
(statearr_38323[(15)] = inst_38284);

return statearr_38323;
})();
if(cljs.core.truth_(inst_38285)){
var statearr_38324_38355 = state_38296__$1;
(statearr_38324_38355[(1)] = (21));

} else {
var statearr_38325_38356 = state_38296__$1;
(statearr_38325_38356[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (5))){
var inst_38240 = cljs.core.async.close_BANG_.call(null,out);
var state_38296__$1 = state_38296;
var statearr_38326_38357 = state_38296__$1;
(statearr_38326_38357[(2)] = inst_38240);

(statearr_38326_38357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (14))){
var inst_38262 = (state_38296[(7)]);
var inst_38264 = cljs.core.chunked_seq_QMARK_.call(null,inst_38262);
var state_38296__$1 = state_38296;
if(inst_38264){
var statearr_38327_38358 = state_38296__$1;
(statearr_38327_38358[(1)] = (17));

} else {
var statearr_38328_38359 = state_38296__$1;
(statearr_38328_38359[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (16))){
var inst_38280 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38329_38360 = state_38296__$1;
(statearr_38329_38360[(2)] = inst_38280);

(statearr_38329_38360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (10))){
var inst_38251 = (state_38296[(9)]);
var inst_38249 = (state_38296[(12)]);
var inst_38256 = cljs.core._nth.call(null,inst_38249,inst_38251);
var state_38296__$1 = state_38296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38296__$1,(13),out,inst_38256);
} else {
if((state_val_38297 === (18))){
var inst_38262 = (state_38296[(7)]);
var inst_38271 = cljs.core.first.call(null,inst_38262);
var state_38296__$1 = state_38296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38296__$1,(20),out,inst_38271);
} else {
if((state_val_38297 === (8))){
var inst_38251 = (state_38296[(9)]);
var inst_38250 = (state_38296[(11)]);
var inst_38253 = (inst_38251 < inst_38250);
var inst_38254 = inst_38253;
var state_38296__$1 = state_38296;
if(cljs.core.truth_(inst_38254)){
var statearr_38330_38361 = state_38296__$1;
(statearr_38330_38361[(1)] = (10));

} else {
var statearr_38331_38362 = state_38296__$1;
(statearr_38331_38362[(1)] = (11));

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
});})(c__35839__auto__))
;
return ((function (switch__35727__auto__,c__35839__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35728__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35728__auto____0 = (function (){
var statearr_38335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38335[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35728__auto__);

(statearr_38335[(1)] = (1));

return statearr_38335;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35728__auto____1 = (function (state_38296){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_38296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e38336){if((e38336 instanceof Object)){
var ex__35731__auto__ = e38336;
var statearr_38337_38363 = state_38296;
(statearr_38337_38363[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38364 = state_38296;
state_38296 = G__38364;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35728__auto__ = function(state_38296){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35728__auto____1.call(this,state_38296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35728__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35728__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto__))
})();
var state__35841__auto__ = (function (){var statearr_38338 = f__35840__auto__.call(null);
(statearr_38338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto__);

return statearr_38338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto__))
);

return c__35839__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args38365 = [];
var len__31935__auto___38368 = arguments.length;
var i__31936__auto___38369 = (0);
while(true){
if((i__31936__auto___38369 < len__31935__auto___38368)){
args38365.push((arguments[i__31936__auto___38369]));

var G__38370 = (i__31936__auto___38369 + (1));
i__31936__auto___38369 = G__38370;
continue;
} else {
}
break;
}

var G__38367 = args38365.length;
switch (G__38367) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38365.length)].join('')));

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
var args38372 = [];
var len__31935__auto___38375 = arguments.length;
var i__31936__auto___38376 = (0);
while(true){
if((i__31936__auto___38376 < len__31935__auto___38375)){
args38372.push((arguments[i__31936__auto___38376]));

var G__38377 = (i__31936__auto___38376 + (1));
i__31936__auto___38376 = G__38377;
continue;
} else {
}
break;
}

var G__38374 = args38372.length;
switch (G__38374) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38372.length)].join('')));

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
var args38379 = [];
var len__31935__auto___38430 = arguments.length;
var i__31936__auto___38431 = (0);
while(true){
if((i__31936__auto___38431 < len__31935__auto___38430)){
args38379.push((arguments[i__31936__auto___38431]));

var G__38432 = (i__31936__auto___38431 + (1));
i__31936__auto___38431 = G__38432;
continue;
} else {
}
break;
}

var G__38381 = args38379.length;
switch (G__38381) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38379.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35839__auto___38434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___38434,out){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___38434,out){
return (function (state_38405){
var state_val_38406 = (state_38405[(1)]);
if((state_val_38406 === (7))){
var inst_38400 = (state_38405[(2)]);
var state_38405__$1 = state_38405;
var statearr_38407_38435 = state_38405__$1;
(statearr_38407_38435[(2)] = inst_38400);

(statearr_38407_38435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (1))){
var inst_38382 = null;
var state_38405__$1 = (function (){var statearr_38408 = state_38405;
(statearr_38408[(7)] = inst_38382);

return statearr_38408;
})();
var statearr_38409_38436 = state_38405__$1;
(statearr_38409_38436[(2)] = null);

(statearr_38409_38436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (4))){
var inst_38385 = (state_38405[(8)]);
var inst_38385__$1 = (state_38405[(2)]);
var inst_38386 = (inst_38385__$1 == null);
var inst_38387 = cljs.core.not.call(null,inst_38386);
var state_38405__$1 = (function (){var statearr_38410 = state_38405;
(statearr_38410[(8)] = inst_38385__$1);

return statearr_38410;
})();
if(inst_38387){
var statearr_38411_38437 = state_38405__$1;
(statearr_38411_38437[(1)] = (5));

} else {
var statearr_38412_38438 = state_38405__$1;
(statearr_38412_38438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (6))){
var state_38405__$1 = state_38405;
var statearr_38413_38439 = state_38405__$1;
(statearr_38413_38439[(2)] = null);

(statearr_38413_38439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (3))){
var inst_38402 = (state_38405[(2)]);
var inst_38403 = cljs.core.async.close_BANG_.call(null,out);
var state_38405__$1 = (function (){var statearr_38414 = state_38405;
(statearr_38414[(9)] = inst_38402);

return statearr_38414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38405__$1,inst_38403);
} else {
if((state_val_38406 === (2))){
var state_38405__$1 = state_38405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38405__$1,(4),ch);
} else {
if((state_val_38406 === (11))){
var inst_38385 = (state_38405[(8)]);
var inst_38394 = (state_38405[(2)]);
var inst_38382 = inst_38385;
var state_38405__$1 = (function (){var statearr_38415 = state_38405;
(statearr_38415[(10)] = inst_38394);

(statearr_38415[(7)] = inst_38382);

return statearr_38415;
})();
var statearr_38416_38440 = state_38405__$1;
(statearr_38416_38440[(2)] = null);

(statearr_38416_38440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (9))){
var inst_38385 = (state_38405[(8)]);
var state_38405__$1 = state_38405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38405__$1,(11),out,inst_38385);
} else {
if((state_val_38406 === (5))){
var inst_38385 = (state_38405[(8)]);
var inst_38382 = (state_38405[(7)]);
var inst_38389 = cljs.core._EQ_.call(null,inst_38385,inst_38382);
var state_38405__$1 = state_38405;
if(inst_38389){
var statearr_38418_38441 = state_38405__$1;
(statearr_38418_38441[(1)] = (8));

} else {
var statearr_38419_38442 = state_38405__$1;
(statearr_38419_38442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (10))){
var inst_38397 = (state_38405[(2)]);
var state_38405__$1 = state_38405;
var statearr_38420_38443 = state_38405__$1;
(statearr_38420_38443[(2)] = inst_38397);

(statearr_38420_38443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (8))){
var inst_38382 = (state_38405[(7)]);
var tmp38417 = inst_38382;
var inst_38382__$1 = tmp38417;
var state_38405__$1 = (function (){var statearr_38421 = state_38405;
(statearr_38421[(7)] = inst_38382__$1);

return statearr_38421;
})();
var statearr_38422_38444 = state_38405__$1;
(statearr_38422_38444[(2)] = null);

(statearr_38422_38444[(1)] = (2));


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
});})(c__35839__auto___38434,out))
;
return ((function (switch__35727__auto__,c__35839__auto___38434,out){
return (function() {
var cljs$core$async$state_machine__35728__auto__ = null;
var cljs$core$async$state_machine__35728__auto____0 = (function (){
var statearr_38426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38426[(0)] = cljs$core$async$state_machine__35728__auto__);

(statearr_38426[(1)] = (1));

return statearr_38426;
});
var cljs$core$async$state_machine__35728__auto____1 = (function (state_38405){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_38405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e38427){if((e38427 instanceof Object)){
var ex__35731__auto__ = e38427;
var statearr_38428_38445 = state_38405;
(statearr_38428_38445[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38446 = state_38405;
state_38405 = G__38446;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$state_machine__35728__auto__ = function(state_38405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35728__auto____1.call(this,state_38405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35728__auto____0;
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35728__auto____1;
return cljs$core$async$state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___38434,out))
})();
var state__35841__auto__ = (function (){var statearr_38429 = f__35840__auto__.call(null);
(statearr_38429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___38434);

return statearr_38429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___38434,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args38447 = [];
var len__31935__auto___38517 = arguments.length;
var i__31936__auto___38518 = (0);
while(true){
if((i__31936__auto___38518 < len__31935__auto___38517)){
args38447.push((arguments[i__31936__auto___38518]));

var G__38519 = (i__31936__auto___38518 + (1));
i__31936__auto___38518 = G__38519;
continue;
} else {
}
break;
}

var G__38449 = args38447.length;
switch (G__38449) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38447.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35839__auto___38521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___38521,out){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___38521,out){
return (function (state_38487){
var state_val_38488 = (state_38487[(1)]);
if((state_val_38488 === (7))){
var inst_38483 = (state_38487[(2)]);
var state_38487__$1 = state_38487;
var statearr_38489_38522 = state_38487__$1;
(statearr_38489_38522[(2)] = inst_38483);

(statearr_38489_38522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (1))){
var inst_38450 = (new Array(n));
var inst_38451 = inst_38450;
var inst_38452 = (0);
var state_38487__$1 = (function (){var statearr_38490 = state_38487;
(statearr_38490[(7)] = inst_38452);

(statearr_38490[(8)] = inst_38451);

return statearr_38490;
})();
var statearr_38491_38523 = state_38487__$1;
(statearr_38491_38523[(2)] = null);

(statearr_38491_38523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (4))){
var inst_38455 = (state_38487[(9)]);
var inst_38455__$1 = (state_38487[(2)]);
var inst_38456 = (inst_38455__$1 == null);
var inst_38457 = cljs.core.not.call(null,inst_38456);
var state_38487__$1 = (function (){var statearr_38492 = state_38487;
(statearr_38492[(9)] = inst_38455__$1);

return statearr_38492;
})();
if(inst_38457){
var statearr_38493_38524 = state_38487__$1;
(statearr_38493_38524[(1)] = (5));

} else {
var statearr_38494_38525 = state_38487__$1;
(statearr_38494_38525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (15))){
var inst_38477 = (state_38487[(2)]);
var state_38487__$1 = state_38487;
var statearr_38495_38526 = state_38487__$1;
(statearr_38495_38526[(2)] = inst_38477);

(statearr_38495_38526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (13))){
var state_38487__$1 = state_38487;
var statearr_38496_38527 = state_38487__$1;
(statearr_38496_38527[(2)] = null);

(statearr_38496_38527[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (6))){
var inst_38452 = (state_38487[(7)]);
var inst_38473 = (inst_38452 > (0));
var state_38487__$1 = state_38487;
if(cljs.core.truth_(inst_38473)){
var statearr_38497_38528 = state_38487__$1;
(statearr_38497_38528[(1)] = (12));

} else {
var statearr_38498_38529 = state_38487__$1;
(statearr_38498_38529[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (3))){
var inst_38485 = (state_38487[(2)]);
var state_38487__$1 = state_38487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38487__$1,inst_38485);
} else {
if((state_val_38488 === (12))){
var inst_38451 = (state_38487[(8)]);
var inst_38475 = cljs.core.vec.call(null,inst_38451);
var state_38487__$1 = state_38487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38487__$1,(15),out,inst_38475);
} else {
if((state_val_38488 === (2))){
var state_38487__$1 = state_38487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38487__$1,(4),ch);
} else {
if((state_val_38488 === (11))){
var inst_38467 = (state_38487[(2)]);
var inst_38468 = (new Array(n));
var inst_38451 = inst_38468;
var inst_38452 = (0);
var state_38487__$1 = (function (){var statearr_38499 = state_38487;
(statearr_38499[(7)] = inst_38452);

(statearr_38499[(10)] = inst_38467);

(statearr_38499[(8)] = inst_38451);

return statearr_38499;
})();
var statearr_38500_38530 = state_38487__$1;
(statearr_38500_38530[(2)] = null);

(statearr_38500_38530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (9))){
var inst_38451 = (state_38487[(8)]);
var inst_38465 = cljs.core.vec.call(null,inst_38451);
var state_38487__$1 = state_38487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38487__$1,(11),out,inst_38465);
} else {
if((state_val_38488 === (5))){
var inst_38452 = (state_38487[(7)]);
var inst_38460 = (state_38487[(11)]);
var inst_38455 = (state_38487[(9)]);
var inst_38451 = (state_38487[(8)]);
var inst_38459 = (inst_38451[inst_38452] = inst_38455);
var inst_38460__$1 = (inst_38452 + (1));
var inst_38461 = (inst_38460__$1 < n);
var state_38487__$1 = (function (){var statearr_38501 = state_38487;
(statearr_38501[(12)] = inst_38459);

(statearr_38501[(11)] = inst_38460__$1);

return statearr_38501;
})();
if(cljs.core.truth_(inst_38461)){
var statearr_38502_38531 = state_38487__$1;
(statearr_38502_38531[(1)] = (8));

} else {
var statearr_38503_38532 = state_38487__$1;
(statearr_38503_38532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (14))){
var inst_38480 = (state_38487[(2)]);
var inst_38481 = cljs.core.async.close_BANG_.call(null,out);
var state_38487__$1 = (function (){var statearr_38505 = state_38487;
(statearr_38505[(13)] = inst_38480);

return statearr_38505;
})();
var statearr_38506_38533 = state_38487__$1;
(statearr_38506_38533[(2)] = inst_38481);

(statearr_38506_38533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (10))){
var inst_38471 = (state_38487[(2)]);
var state_38487__$1 = state_38487;
var statearr_38507_38534 = state_38487__$1;
(statearr_38507_38534[(2)] = inst_38471);

(statearr_38507_38534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38488 === (8))){
var inst_38460 = (state_38487[(11)]);
var inst_38451 = (state_38487[(8)]);
var tmp38504 = inst_38451;
var inst_38451__$1 = tmp38504;
var inst_38452 = inst_38460;
var state_38487__$1 = (function (){var statearr_38508 = state_38487;
(statearr_38508[(7)] = inst_38452);

(statearr_38508[(8)] = inst_38451__$1);

return statearr_38508;
})();
var statearr_38509_38535 = state_38487__$1;
(statearr_38509_38535[(2)] = null);

(statearr_38509_38535[(1)] = (2));


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
});})(c__35839__auto___38521,out))
;
return ((function (switch__35727__auto__,c__35839__auto___38521,out){
return (function() {
var cljs$core$async$state_machine__35728__auto__ = null;
var cljs$core$async$state_machine__35728__auto____0 = (function (){
var statearr_38513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38513[(0)] = cljs$core$async$state_machine__35728__auto__);

(statearr_38513[(1)] = (1));

return statearr_38513;
});
var cljs$core$async$state_machine__35728__auto____1 = (function (state_38487){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_38487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e38514){if((e38514 instanceof Object)){
var ex__35731__auto__ = e38514;
var statearr_38515_38536 = state_38487;
(statearr_38515_38536[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38537 = state_38487;
state_38487 = G__38537;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$state_machine__35728__auto__ = function(state_38487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35728__auto____1.call(this,state_38487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35728__auto____0;
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35728__auto____1;
return cljs$core$async$state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___38521,out))
})();
var state__35841__auto__ = (function (){var statearr_38516 = f__35840__auto__.call(null);
(statearr_38516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___38521);

return statearr_38516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___38521,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args38538 = [];
var len__31935__auto___38612 = arguments.length;
var i__31936__auto___38613 = (0);
while(true){
if((i__31936__auto___38613 < len__31935__auto___38612)){
args38538.push((arguments[i__31936__auto___38613]));

var G__38614 = (i__31936__auto___38613 + (1));
i__31936__auto___38613 = G__38614;
continue;
} else {
}
break;
}

var G__38540 = args38538.length;
switch (G__38540) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38538.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35839__auto___38616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___38616,out){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___38616,out){
return (function (state_38582){
var state_val_38583 = (state_38582[(1)]);
if((state_val_38583 === (7))){
var inst_38578 = (state_38582[(2)]);
var state_38582__$1 = state_38582;
var statearr_38584_38617 = state_38582__$1;
(statearr_38584_38617[(2)] = inst_38578);

(statearr_38584_38617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38583 === (1))){
var inst_38541 = [];
var inst_38542 = inst_38541;
var inst_38543 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38582__$1 = (function (){var statearr_38585 = state_38582;
(statearr_38585[(7)] = inst_38543);

(statearr_38585[(8)] = inst_38542);

return statearr_38585;
})();
var statearr_38586_38618 = state_38582__$1;
(statearr_38586_38618[(2)] = null);

(statearr_38586_38618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38583 === (4))){
var inst_38546 = (state_38582[(9)]);
var inst_38546__$1 = (state_38582[(2)]);
var inst_38547 = (inst_38546__$1 == null);
var inst_38548 = cljs.core.not.call(null,inst_38547);
var state_38582__$1 = (function (){var statearr_38587 = state_38582;
(statearr_38587[(9)] = inst_38546__$1);

return statearr_38587;
})();
if(inst_38548){
var statearr_38588_38619 = state_38582__$1;
(statearr_38588_38619[(1)] = (5));

} else {
var statearr_38589_38620 = state_38582__$1;
(statearr_38589_38620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38583 === (15))){
var inst_38572 = (state_38582[(2)]);
var state_38582__$1 = state_38582;
var statearr_38590_38621 = state_38582__$1;
(statearr_38590_38621[(2)] = inst_38572);

(statearr_38590_38621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38583 === (13))){
var state_38582__$1 = state_38582;
var statearr_38591_38622 = state_38582__$1;
(statearr_38591_38622[(2)] = null);

(statearr_38591_38622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38583 === (6))){
var inst_38542 = (state_38582[(8)]);
var inst_38567 = inst_38542.length;
var inst_38568 = (inst_38567 > (0));
var state_38582__$1 = state_38582;
if(cljs.core.truth_(inst_38568)){
var statearr_38592_38623 = state_38582__$1;
(statearr_38592_38623[(1)] = (12));

} else {
var statearr_38593_38624 = state_38582__$1;
(statearr_38593_38624[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38583 === (3))){
var inst_38580 = (state_38582[(2)]);
var state_38582__$1 = state_38582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38582__$1,inst_38580);
} else {
if((state_val_38583 === (12))){
var inst_38542 = (state_38582[(8)]);
var inst_38570 = cljs.core.vec.call(null,inst_38542);
var state_38582__$1 = state_38582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38582__$1,(15),out,inst_38570);
} else {
if((state_val_38583 === (2))){
var state_38582__$1 = state_38582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38582__$1,(4),ch);
} else {
if((state_val_38583 === (11))){
var inst_38546 = (state_38582[(9)]);
var inst_38550 = (state_38582[(10)]);
var inst_38560 = (state_38582[(2)]);
var inst_38561 = [];
var inst_38562 = inst_38561.push(inst_38546);
var inst_38542 = inst_38561;
var inst_38543 = inst_38550;
var state_38582__$1 = (function (){var statearr_38594 = state_38582;
(statearr_38594[(11)] = inst_38562);

(statearr_38594[(12)] = inst_38560);

(statearr_38594[(7)] = inst_38543);

(statearr_38594[(8)] = inst_38542);

return statearr_38594;
})();
var statearr_38595_38625 = state_38582__$1;
(statearr_38595_38625[(2)] = null);

(statearr_38595_38625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38583 === (9))){
var inst_38542 = (state_38582[(8)]);
var inst_38558 = cljs.core.vec.call(null,inst_38542);
var state_38582__$1 = state_38582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38582__$1,(11),out,inst_38558);
} else {
if((state_val_38583 === (5))){
var inst_38546 = (state_38582[(9)]);
var inst_38550 = (state_38582[(10)]);
var inst_38543 = (state_38582[(7)]);
var inst_38550__$1 = f.call(null,inst_38546);
var inst_38551 = cljs.core._EQ_.call(null,inst_38550__$1,inst_38543);
var inst_38552 = cljs.core.keyword_identical_QMARK_.call(null,inst_38543,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38553 = (inst_38551) || (inst_38552);
var state_38582__$1 = (function (){var statearr_38596 = state_38582;
(statearr_38596[(10)] = inst_38550__$1);

return statearr_38596;
})();
if(cljs.core.truth_(inst_38553)){
var statearr_38597_38626 = state_38582__$1;
(statearr_38597_38626[(1)] = (8));

} else {
var statearr_38598_38627 = state_38582__$1;
(statearr_38598_38627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38583 === (14))){
var inst_38575 = (state_38582[(2)]);
var inst_38576 = cljs.core.async.close_BANG_.call(null,out);
var state_38582__$1 = (function (){var statearr_38600 = state_38582;
(statearr_38600[(13)] = inst_38575);

return statearr_38600;
})();
var statearr_38601_38628 = state_38582__$1;
(statearr_38601_38628[(2)] = inst_38576);

(statearr_38601_38628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38583 === (10))){
var inst_38565 = (state_38582[(2)]);
var state_38582__$1 = state_38582;
var statearr_38602_38629 = state_38582__$1;
(statearr_38602_38629[(2)] = inst_38565);

(statearr_38602_38629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38583 === (8))){
var inst_38546 = (state_38582[(9)]);
var inst_38550 = (state_38582[(10)]);
var inst_38542 = (state_38582[(8)]);
var inst_38555 = inst_38542.push(inst_38546);
var tmp38599 = inst_38542;
var inst_38542__$1 = tmp38599;
var inst_38543 = inst_38550;
var state_38582__$1 = (function (){var statearr_38603 = state_38582;
(statearr_38603[(7)] = inst_38543);

(statearr_38603[(14)] = inst_38555);

(statearr_38603[(8)] = inst_38542__$1);

return statearr_38603;
})();
var statearr_38604_38630 = state_38582__$1;
(statearr_38604_38630[(2)] = null);

(statearr_38604_38630[(1)] = (2));


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
});})(c__35839__auto___38616,out))
;
return ((function (switch__35727__auto__,c__35839__auto___38616,out){
return (function() {
var cljs$core$async$state_machine__35728__auto__ = null;
var cljs$core$async$state_machine__35728__auto____0 = (function (){
var statearr_38608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38608[(0)] = cljs$core$async$state_machine__35728__auto__);

(statearr_38608[(1)] = (1));

return statearr_38608;
});
var cljs$core$async$state_machine__35728__auto____1 = (function (state_38582){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_38582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e38609){if((e38609 instanceof Object)){
var ex__35731__auto__ = e38609;
var statearr_38610_38631 = state_38582;
(statearr_38610_38631[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38632 = state_38582;
state_38582 = G__38632;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
cljs$core$async$state_machine__35728__auto__ = function(state_38582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35728__auto____1.call(this,state_38582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35728__auto____0;
cljs$core$async$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35728__auto____1;
return cljs$core$async$state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___38616,out))
})();
var state__35841__auto__ = (function (){var statearr_38611 = f__35840__auto__.call(null);
(statearr_38611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___38616);

return statearr_38611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___38616,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1471771440592