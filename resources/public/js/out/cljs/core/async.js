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
var args35843 = [];
var len__31894__auto___35849 = arguments.length;
var i__31895__auto___35850 = (0);
while(true){
if((i__31895__auto___35850 < len__31894__auto___35849)){
args35843.push((arguments[i__31895__auto___35850]));

var G__35851 = (i__31895__auto___35850 + (1));
i__31895__auto___35850 = G__35851;
continue;
} else {
}
break;
}

var G__35845 = args35843.length;
switch (G__35845) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35843.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35846 = (function (f,blockable,meta35847){
this.f = f;
this.blockable = blockable;
this.meta35847 = meta35847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35848,meta35847__$1){
var self__ = this;
var _35848__$1 = this;
return (new cljs.core.async.t_cljs$core$async35846(self__.f,self__.blockable,meta35847__$1));
});

cljs.core.async.t_cljs$core$async35846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35848){
var self__ = this;
var _35848__$1 = this;
return self__.meta35847;
});

cljs.core.async.t_cljs$core$async35846.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35846.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35847","meta35847",-1897744790,null)], null);
});

cljs.core.async.t_cljs$core$async35846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35846";

cljs.core.async.t_cljs$core$async35846.cljs$lang$ctorPrWriter = (function (this__31425__auto__,writer__31426__auto__,opt__31427__auto__){
return cljs.core._write.call(null,writer__31426__auto__,"cljs.core.async/t_cljs$core$async35846");
});

cljs.core.async.__GT_t_cljs$core$async35846 = (function cljs$core$async$__GT_t_cljs$core$async35846(f__$1,blockable__$1,meta35847){
return (new cljs.core.async.t_cljs$core$async35846(f__$1,blockable__$1,meta35847));
});

}

return (new cljs.core.async.t_cljs$core$async35846(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args35855 = [];
var len__31894__auto___35858 = arguments.length;
var i__31895__auto___35859 = (0);
while(true){
if((i__31895__auto___35859 < len__31894__auto___35858)){
args35855.push((arguments[i__31895__auto___35859]));

var G__35860 = (i__31895__auto___35859 + (1));
i__31895__auto___35859 = G__35860;
continue;
} else {
}
break;
}

var G__35857 = args35855.length;
switch (G__35857) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35855.length)].join('')));

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
var args35862 = [];
var len__31894__auto___35865 = arguments.length;
var i__31895__auto___35866 = (0);
while(true){
if((i__31895__auto___35866 < len__31894__auto___35865)){
args35862.push((arguments[i__31895__auto___35866]));

var G__35867 = (i__31895__auto___35866 + (1));
i__31895__auto___35866 = G__35867;
continue;
} else {
}
break;
}

var G__35864 = args35862.length;
switch (G__35864) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35862.length)].join('')));

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
var args35869 = [];
var len__31894__auto___35872 = arguments.length;
var i__31895__auto___35873 = (0);
while(true){
if((i__31895__auto___35873 < len__31894__auto___35872)){
args35869.push((arguments[i__31895__auto___35873]));

var G__35874 = (i__31895__auto___35873 + (1));
i__31895__auto___35873 = G__35874;
continue;
} else {
}
break;
}

var G__35871 = args35869.length;
switch (G__35871) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35869.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35876 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35876);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35876,ret){
return (function (){
return fn1.call(null,val_35876);
});})(val_35876,ret))
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
var args35877 = [];
var len__31894__auto___35880 = arguments.length;
var i__31895__auto___35881 = (0);
while(true){
if((i__31895__auto___35881 < len__31894__auto___35880)){
args35877.push((arguments[i__31895__auto___35881]));

var G__35882 = (i__31895__auto___35881 + (1));
i__31895__auto___35881 = G__35882;
continue;
} else {
}
break;
}

var G__35879 = args35877.length;
switch (G__35879) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35877.length)].join('')));

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
var n__31734__auto___35884 = n;
var x_35885 = (0);
while(true){
if((x_35885 < n__31734__auto___35884)){
(a[x_35885] = (0));

var G__35886 = (x_35885 + (1));
x_35885 = G__35886;
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

var G__35887 = (i + (1));
i = G__35887;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35891 = (function (alt_flag,flag,meta35892){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35892 = meta35892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35893,meta35892__$1){
var self__ = this;
var _35893__$1 = this;
return (new cljs.core.async.t_cljs$core$async35891(self__.alt_flag,self__.flag,meta35892__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35893){
var self__ = this;
var _35893__$1 = this;
return self__.meta35892;
});})(flag))
;

cljs.core.async.t_cljs$core$async35891.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35891.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35891.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35892","meta35892",-420144418,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35891";

cljs.core.async.t_cljs$core$async35891.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31425__auto__,writer__31426__auto__,opt__31427__auto__){
return cljs.core._write.call(null,writer__31426__auto__,"cljs.core.async/t_cljs$core$async35891");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35891 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35891(alt_flag__$1,flag__$1,meta35892){
return (new cljs.core.async.t_cljs$core$async35891(alt_flag__$1,flag__$1,meta35892));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35891(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35897 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35897 = (function (alt_handler,flag,cb,meta35898){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35898 = meta35898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35899,meta35898__$1){
var self__ = this;
var _35899__$1 = this;
return (new cljs.core.async.t_cljs$core$async35897(self__.alt_handler,self__.flag,self__.cb,meta35898__$1));
});

cljs.core.async.t_cljs$core$async35897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35899){
var self__ = this;
var _35899__$1 = this;
return self__.meta35898;
});

cljs.core.async.t_cljs$core$async35897.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35897.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35897.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35897.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35898","meta35898",-918892188,null)], null);
});

cljs.core.async.t_cljs$core$async35897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35897";

cljs.core.async.t_cljs$core$async35897.cljs$lang$ctorPrWriter = (function (this__31425__auto__,writer__31426__auto__,opt__31427__auto__){
return cljs.core._write.call(null,writer__31426__auto__,"cljs.core.async/t_cljs$core$async35897");
});

cljs.core.async.__GT_t_cljs$core$async35897 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35897(alt_handler__$1,flag__$1,cb__$1,meta35898){
return (new cljs.core.async.t_cljs$core$async35897(alt_handler__$1,flag__$1,cb__$1,meta35898));
});

}

return (new cljs.core.async.t_cljs$core$async35897(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35900_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35900_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35901_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35901_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30819__auto__ = wport;
if(cljs.core.truth_(or__30819__auto__)){
return or__30819__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35902 = (i + (1));
i = G__35902;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30819__auto__ = ret;
if(cljs.core.truth_(or__30819__auto__)){
return or__30819__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__30807__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30807__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30807__auto__;
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
var args__31901__auto__ = [];
var len__31894__auto___35908 = arguments.length;
var i__31895__auto___35909 = (0);
while(true){
if((i__31895__auto___35909 < len__31894__auto___35908)){
args__31901__auto__.push((arguments[i__31895__auto___35909]));

var G__35910 = (i__31895__auto___35909 + (1));
i__31895__auto___35909 = G__35910;
continue;
} else {
}
break;
}

var argseq__31902__auto__ = ((((1) < args__31901__auto__.length))?(new cljs.core.IndexedSeq(args__31901__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31902__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35905){
var map__35906 = p__35905;
var map__35906__$1 = ((((!((map__35906 == null)))?((((map__35906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35906):map__35906);
var opts = map__35906__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35903){
var G__35904 = cljs.core.first.call(null,seq35903);
var seq35903__$1 = cljs.core.next.call(null,seq35903);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35904,seq35903__$1);
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
var args35911 = [];
var len__31894__auto___35961 = arguments.length;
var i__31895__auto___35962 = (0);
while(true){
if((i__31895__auto___35962 < len__31894__auto___35961)){
args35911.push((arguments[i__31895__auto___35962]));

var G__35963 = (i__31895__auto___35962 + (1));
i__31895__auto___35962 = G__35963;
continue;
} else {
}
break;
}

var G__35913 = args35911.length;
switch (G__35913) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35911.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35798__auto___35965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___35965){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___35965){
return (function (state_35937){
var state_val_35938 = (state_35937[(1)]);
if((state_val_35938 === (7))){
var inst_35933 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_35939_35966 = state_35937__$1;
(statearr_35939_35966[(2)] = inst_35933);

(statearr_35939_35966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (1))){
var state_35937__$1 = state_35937;
var statearr_35940_35967 = state_35937__$1;
(statearr_35940_35967[(2)] = null);

(statearr_35940_35967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (4))){
var inst_35916 = (state_35937[(7)]);
var inst_35916__$1 = (state_35937[(2)]);
var inst_35917 = (inst_35916__$1 == null);
var state_35937__$1 = (function (){var statearr_35941 = state_35937;
(statearr_35941[(7)] = inst_35916__$1);

return statearr_35941;
})();
if(cljs.core.truth_(inst_35917)){
var statearr_35942_35968 = state_35937__$1;
(statearr_35942_35968[(1)] = (5));

} else {
var statearr_35943_35969 = state_35937__$1;
(statearr_35943_35969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (13))){
var state_35937__$1 = state_35937;
var statearr_35944_35970 = state_35937__$1;
(statearr_35944_35970[(2)] = null);

(statearr_35944_35970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (6))){
var inst_35916 = (state_35937[(7)]);
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35937__$1,(11),to,inst_35916);
} else {
if((state_val_35938 === (3))){
var inst_35935 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35937__$1,inst_35935);
} else {
if((state_val_35938 === (12))){
var state_35937__$1 = state_35937;
var statearr_35945_35971 = state_35937__$1;
(statearr_35945_35971[(2)] = null);

(statearr_35945_35971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (2))){
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35937__$1,(4),from);
} else {
if((state_val_35938 === (11))){
var inst_35926 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
if(cljs.core.truth_(inst_35926)){
var statearr_35946_35972 = state_35937__$1;
(statearr_35946_35972[(1)] = (12));

} else {
var statearr_35947_35973 = state_35937__$1;
(statearr_35947_35973[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (9))){
var state_35937__$1 = state_35937;
var statearr_35948_35974 = state_35937__$1;
(statearr_35948_35974[(2)] = null);

(statearr_35948_35974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (5))){
var state_35937__$1 = state_35937;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35949_35975 = state_35937__$1;
(statearr_35949_35975[(1)] = (8));

} else {
var statearr_35950_35976 = state_35937__$1;
(statearr_35950_35976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (14))){
var inst_35931 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_35951_35977 = state_35937__$1;
(statearr_35951_35977[(2)] = inst_35931);

(statearr_35951_35977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (10))){
var inst_35923 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_35952_35978 = state_35937__$1;
(statearr_35952_35978[(2)] = inst_35923);

(statearr_35952_35978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (8))){
var inst_35920 = cljs.core.async.close_BANG_.call(null,to);
var state_35937__$1 = state_35937;
var statearr_35953_35979 = state_35937__$1;
(statearr_35953_35979[(2)] = inst_35920);

(statearr_35953_35979[(1)] = (10));


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
});})(c__35798__auto___35965))
;
return ((function (switch__35686__auto__,c__35798__auto___35965){
return (function() {
var cljs$core$async$state_machine__35687__auto__ = null;
var cljs$core$async$state_machine__35687__auto____0 = (function (){
var statearr_35957 = [null,null,null,null,null,null,null,null];
(statearr_35957[(0)] = cljs$core$async$state_machine__35687__auto__);

(statearr_35957[(1)] = (1));

return statearr_35957;
});
var cljs$core$async$state_machine__35687__auto____1 = (function (state_35937){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_35937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e35958){if((e35958 instanceof Object)){
var ex__35690__auto__ = e35958;
var statearr_35959_35980 = state_35937;
(statearr_35959_35980[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35981 = state_35937;
state_35937 = G__35981;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$state_machine__35687__auto__ = function(state_35937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35687__auto____1.call(this,state_35937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35687__auto____0;
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35687__auto____1;
return cljs$core$async$state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___35965))
})();
var state__35800__auto__ = (function (){var statearr_35960 = f__35799__auto__.call(null);
(statearr_35960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___35965);

return statearr_35960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___35965))
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
return (function (p__36169){
var vec__36170 = p__36169;
var v = cljs.core.nth.call(null,vec__36170,(0),null);
var p = cljs.core.nth.call(null,vec__36170,(1),null);
var job = vec__36170;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35798__auto___36356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___36356,res,vec__36170,v,p,job,jobs,results){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___36356,res,vec__36170,v,p,job,jobs,results){
return (function (state_36177){
var state_val_36178 = (state_36177[(1)]);
if((state_val_36178 === (1))){
var state_36177__$1 = state_36177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36177__$1,(2),res,v);
} else {
if((state_val_36178 === (2))){
var inst_36174 = (state_36177[(2)]);
var inst_36175 = cljs.core.async.close_BANG_.call(null,res);
var state_36177__$1 = (function (){var statearr_36179 = state_36177;
(statearr_36179[(7)] = inst_36174);

return statearr_36179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36177__$1,inst_36175);
} else {
return null;
}
}
});})(c__35798__auto___36356,res,vec__36170,v,p,job,jobs,results))
;
return ((function (switch__35686__auto__,c__35798__auto___36356,res,vec__36170,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0 = (function (){
var statearr_36183 = [null,null,null,null,null,null,null,null];
(statearr_36183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__);

(statearr_36183[(1)] = (1));

return statearr_36183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1 = (function (state_36177){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_36177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e36184){if((e36184 instanceof Object)){
var ex__35690__auto__ = e36184;
var statearr_36185_36357 = state_36177;
(statearr_36185_36357[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36358 = state_36177;
state_36177 = G__36358;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__ = function(state_36177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1.call(this,state_36177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___36356,res,vec__36170,v,p,job,jobs,results))
})();
var state__35800__auto__ = (function (){var statearr_36186 = f__35799__auto__.call(null);
(statearr_36186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___36356);

return statearr_36186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___36356,res,vec__36170,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36187){
var vec__36188 = p__36187;
var v = cljs.core.nth.call(null,vec__36188,(0),null);
var p = cljs.core.nth.call(null,vec__36188,(1),null);
var job = vec__36188;
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
var n__31734__auto___36359 = n;
var __36360 = (0);
while(true){
if((__36360 < n__31734__auto___36359)){
var G__36191_36361 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36191_36361) {
case "compute":
var c__35798__auto___36363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36360,c__35798__auto___36363,G__36191_36361,n__31734__auto___36359,jobs,results,process,async){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (__36360,c__35798__auto___36363,G__36191_36361,n__31734__auto___36359,jobs,results,process,async){
return (function (state_36204){
var state_val_36205 = (state_36204[(1)]);
if((state_val_36205 === (1))){
var state_36204__$1 = state_36204;
var statearr_36206_36364 = state_36204__$1;
(statearr_36206_36364[(2)] = null);

(statearr_36206_36364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36205 === (2))){
var state_36204__$1 = state_36204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36204__$1,(4),jobs);
} else {
if((state_val_36205 === (3))){
var inst_36202 = (state_36204[(2)]);
var state_36204__$1 = state_36204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36204__$1,inst_36202);
} else {
if((state_val_36205 === (4))){
var inst_36194 = (state_36204[(2)]);
var inst_36195 = process.call(null,inst_36194);
var state_36204__$1 = state_36204;
if(cljs.core.truth_(inst_36195)){
var statearr_36207_36365 = state_36204__$1;
(statearr_36207_36365[(1)] = (5));

} else {
var statearr_36208_36366 = state_36204__$1;
(statearr_36208_36366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36205 === (5))){
var state_36204__$1 = state_36204;
var statearr_36209_36367 = state_36204__$1;
(statearr_36209_36367[(2)] = null);

(statearr_36209_36367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36205 === (6))){
var state_36204__$1 = state_36204;
var statearr_36210_36368 = state_36204__$1;
(statearr_36210_36368[(2)] = null);

(statearr_36210_36368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36205 === (7))){
var inst_36200 = (state_36204[(2)]);
var state_36204__$1 = state_36204;
var statearr_36211_36369 = state_36204__$1;
(statearr_36211_36369[(2)] = inst_36200);

(statearr_36211_36369[(1)] = (3));


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
});})(__36360,c__35798__auto___36363,G__36191_36361,n__31734__auto___36359,jobs,results,process,async))
;
return ((function (__36360,switch__35686__auto__,c__35798__auto___36363,G__36191_36361,n__31734__auto___36359,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0 = (function (){
var statearr_36215 = [null,null,null,null,null,null,null];
(statearr_36215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__);

(statearr_36215[(1)] = (1));

return statearr_36215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1 = (function (state_36204){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_36204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e36216){if((e36216 instanceof Object)){
var ex__35690__auto__ = e36216;
var statearr_36217_36370 = state_36204;
(statearr_36217_36370[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36371 = state_36204;
state_36204 = G__36371;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__ = function(state_36204){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1.call(this,state_36204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__;
})()
;})(__36360,switch__35686__auto__,c__35798__auto___36363,G__36191_36361,n__31734__auto___36359,jobs,results,process,async))
})();
var state__35800__auto__ = (function (){var statearr_36218 = f__35799__auto__.call(null);
(statearr_36218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___36363);

return statearr_36218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(__36360,c__35798__auto___36363,G__36191_36361,n__31734__auto___36359,jobs,results,process,async))
);


break;
case "async":
var c__35798__auto___36372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36360,c__35798__auto___36372,G__36191_36361,n__31734__auto___36359,jobs,results,process,async){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (__36360,c__35798__auto___36372,G__36191_36361,n__31734__auto___36359,jobs,results,process,async){
return (function (state_36231){
var state_val_36232 = (state_36231[(1)]);
if((state_val_36232 === (1))){
var state_36231__$1 = state_36231;
var statearr_36233_36373 = state_36231__$1;
(statearr_36233_36373[(2)] = null);

(statearr_36233_36373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (2))){
var state_36231__$1 = state_36231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36231__$1,(4),jobs);
} else {
if((state_val_36232 === (3))){
var inst_36229 = (state_36231[(2)]);
var state_36231__$1 = state_36231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36231__$1,inst_36229);
} else {
if((state_val_36232 === (4))){
var inst_36221 = (state_36231[(2)]);
var inst_36222 = async.call(null,inst_36221);
var state_36231__$1 = state_36231;
if(cljs.core.truth_(inst_36222)){
var statearr_36234_36374 = state_36231__$1;
(statearr_36234_36374[(1)] = (5));

} else {
var statearr_36235_36375 = state_36231__$1;
(statearr_36235_36375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (5))){
var state_36231__$1 = state_36231;
var statearr_36236_36376 = state_36231__$1;
(statearr_36236_36376[(2)] = null);

(statearr_36236_36376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (6))){
var state_36231__$1 = state_36231;
var statearr_36237_36377 = state_36231__$1;
(statearr_36237_36377[(2)] = null);

(statearr_36237_36377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (7))){
var inst_36227 = (state_36231[(2)]);
var state_36231__$1 = state_36231;
var statearr_36238_36378 = state_36231__$1;
(statearr_36238_36378[(2)] = inst_36227);

(statearr_36238_36378[(1)] = (3));


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
});})(__36360,c__35798__auto___36372,G__36191_36361,n__31734__auto___36359,jobs,results,process,async))
;
return ((function (__36360,switch__35686__auto__,c__35798__auto___36372,G__36191_36361,n__31734__auto___36359,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0 = (function (){
var statearr_36242 = [null,null,null,null,null,null,null];
(statearr_36242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__);

(statearr_36242[(1)] = (1));

return statearr_36242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1 = (function (state_36231){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_36231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e36243){if((e36243 instanceof Object)){
var ex__35690__auto__ = e36243;
var statearr_36244_36379 = state_36231;
(statearr_36244_36379[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36380 = state_36231;
state_36231 = G__36380;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__ = function(state_36231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1.call(this,state_36231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__;
})()
;})(__36360,switch__35686__auto__,c__35798__auto___36372,G__36191_36361,n__31734__auto___36359,jobs,results,process,async))
})();
var state__35800__auto__ = (function (){var statearr_36245 = f__35799__auto__.call(null);
(statearr_36245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___36372);

return statearr_36245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(__36360,c__35798__auto___36372,G__36191_36361,n__31734__auto___36359,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36381 = (__36360 + (1));
__36360 = G__36381;
continue;
} else {
}
break;
}

var c__35798__auto___36382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___36382,jobs,results,process,async){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___36382,jobs,results,process,async){
return (function (state_36267){
var state_val_36268 = (state_36267[(1)]);
if((state_val_36268 === (1))){
var state_36267__$1 = state_36267;
var statearr_36269_36383 = state_36267__$1;
(statearr_36269_36383[(2)] = null);

(statearr_36269_36383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (2))){
var state_36267__$1 = state_36267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36267__$1,(4),from);
} else {
if((state_val_36268 === (3))){
var inst_36265 = (state_36267[(2)]);
var state_36267__$1 = state_36267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36267__$1,inst_36265);
} else {
if((state_val_36268 === (4))){
var inst_36248 = (state_36267[(7)]);
var inst_36248__$1 = (state_36267[(2)]);
var inst_36249 = (inst_36248__$1 == null);
var state_36267__$1 = (function (){var statearr_36270 = state_36267;
(statearr_36270[(7)] = inst_36248__$1);

return statearr_36270;
})();
if(cljs.core.truth_(inst_36249)){
var statearr_36271_36384 = state_36267__$1;
(statearr_36271_36384[(1)] = (5));

} else {
var statearr_36272_36385 = state_36267__$1;
(statearr_36272_36385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (5))){
var inst_36251 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36267__$1 = state_36267;
var statearr_36273_36386 = state_36267__$1;
(statearr_36273_36386[(2)] = inst_36251);

(statearr_36273_36386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (6))){
var inst_36253 = (state_36267[(8)]);
var inst_36248 = (state_36267[(7)]);
var inst_36253__$1 = cljs.core.async.chan.call(null,(1));
var inst_36254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36255 = [inst_36248,inst_36253__$1];
var inst_36256 = (new cljs.core.PersistentVector(null,2,(5),inst_36254,inst_36255,null));
var state_36267__$1 = (function (){var statearr_36274 = state_36267;
(statearr_36274[(8)] = inst_36253__$1);

return statearr_36274;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36267__$1,(8),jobs,inst_36256);
} else {
if((state_val_36268 === (7))){
var inst_36263 = (state_36267[(2)]);
var state_36267__$1 = state_36267;
var statearr_36275_36387 = state_36267__$1;
(statearr_36275_36387[(2)] = inst_36263);

(statearr_36275_36387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36268 === (8))){
var inst_36253 = (state_36267[(8)]);
var inst_36258 = (state_36267[(2)]);
var state_36267__$1 = (function (){var statearr_36276 = state_36267;
(statearr_36276[(9)] = inst_36258);

return statearr_36276;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36267__$1,(9),results,inst_36253);
} else {
if((state_val_36268 === (9))){
var inst_36260 = (state_36267[(2)]);
var state_36267__$1 = (function (){var statearr_36277 = state_36267;
(statearr_36277[(10)] = inst_36260);

return statearr_36277;
})();
var statearr_36278_36388 = state_36267__$1;
(statearr_36278_36388[(2)] = null);

(statearr_36278_36388[(1)] = (2));


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
});})(c__35798__auto___36382,jobs,results,process,async))
;
return ((function (switch__35686__auto__,c__35798__auto___36382,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0 = (function (){
var statearr_36282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__);

(statearr_36282[(1)] = (1));

return statearr_36282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1 = (function (state_36267){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_36267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e36283){if((e36283 instanceof Object)){
var ex__35690__auto__ = e36283;
var statearr_36284_36389 = state_36267;
(statearr_36284_36389[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36390 = state_36267;
state_36267 = G__36390;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__ = function(state_36267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1.call(this,state_36267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___36382,jobs,results,process,async))
})();
var state__35800__auto__ = (function (){var statearr_36285 = f__35799__auto__.call(null);
(statearr_36285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___36382);

return statearr_36285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___36382,jobs,results,process,async))
);


var c__35798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto__,jobs,results,process,async){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto__,jobs,results,process,async){
return (function (state_36323){
var state_val_36324 = (state_36323[(1)]);
if((state_val_36324 === (7))){
var inst_36319 = (state_36323[(2)]);
var state_36323__$1 = state_36323;
var statearr_36325_36391 = state_36323__$1;
(statearr_36325_36391[(2)] = inst_36319);

(statearr_36325_36391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (20))){
var state_36323__$1 = state_36323;
var statearr_36326_36392 = state_36323__$1;
(statearr_36326_36392[(2)] = null);

(statearr_36326_36392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (1))){
var state_36323__$1 = state_36323;
var statearr_36327_36393 = state_36323__$1;
(statearr_36327_36393[(2)] = null);

(statearr_36327_36393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (4))){
var inst_36288 = (state_36323[(7)]);
var inst_36288__$1 = (state_36323[(2)]);
var inst_36289 = (inst_36288__$1 == null);
var state_36323__$1 = (function (){var statearr_36328 = state_36323;
(statearr_36328[(7)] = inst_36288__$1);

return statearr_36328;
})();
if(cljs.core.truth_(inst_36289)){
var statearr_36329_36394 = state_36323__$1;
(statearr_36329_36394[(1)] = (5));

} else {
var statearr_36330_36395 = state_36323__$1;
(statearr_36330_36395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (15))){
var inst_36301 = (state_36323[(8)]);
var state_36323__$1 = state_36323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36323__$1,(18),to,inst_36301);
} else {
if((state_val_36324 === (21))){
var inst_36314 = (state_36323[(2)]);
var state_36323__$1 = state_36323;
var statearr_36331_36396 = state_36323__$1;
(statearr_36331_36396[(2)] = inst_36314);

(statearr_36331_36396[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (13))){
var inst_36316 = (state_36323[(2)]);
var state_36323__$1 = (function (){var statearr_36332 = state_36323;
(statearr_36332[(9)] = inst_36316);

return statearr_36332;
})();
var statearr_36333_36397 = state_36323__$1;
(statearr_36333_36397[(2)] = null);

(statearr_36333_36397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (6))){
var inst_36288 = (state_36323[(7)]);
var state_36323__$1 = state_36323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36323__$1,(11),inst_36288);
} else {
if((state_val_36324 === (17))){
var inst_36309 = (state_36323[(2)]);
var state_36323__$1 = state_36323;
if(cljs.core.truth_(inst_36309)){
var statearr_36334_36398 = state_36323__$1;
(statearr_36334_36398[(1)] = (19));

} else {
var statearr_36335_36399 = state_36323__$1;
(statearr_36335_36399[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (3))){
var inst_36321 = (state_36323[(2)]);
var state_36323__$1 = state_36323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36323__$1,inst_36321);
} else {
if((state_val_36324 === (12))){
var inst_36298 = (state_36323[(10)]);
var state_36323__$1 = state_36323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36323__$1,(14),inst_36298);
} else {
if((state_val_36324 === (2))){
var state_36323__$1 = state_36323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36323__$1,(4),results);
} else {
if((state_val_36324 === (19))){
var state_36323__$1 = state_36323;
var statearr_36336_36400 = state_36323__$1;
(statearr_36336_36400[(2)] = null);

(statearr_36336_36400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (11))){
var inst_36298 = (state_36323[(2)]);
var state_36323__$1 = (function (){var statearr_36337 = state_36323;
(statearr_36337[(10)] = inst_36298);

return statearr_36337;
})();
var statearr_36338_36401 = state_36323__$1;
(statearr_36338_36401[(2)] = null);

(statearr_36338_36401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (9))){
var state_36323__$1 = state_36323;
var statearr_36339_36402 = state_36323__$1;
(statearr_36339_36402[(2)] = null);

(statearr_36339_36402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (5))){
var state_36323__$1 = state_36323;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36340_36403 = state_36323__$1;
(statearr_36340_36403[(1)] = (8));

} else {
var statearr_36341_36404 = state_36323__$1;
(statearr_36341_36404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (14))){
var inst_36301 = (state_36323[(8)]);
var inst_36303 = (state_36323[(11)]);
var inst_36301__$1 = (state_36323[(2)]);
var inst_36302 = (inst_36301__$1 == null);
var inst_36303__$1 = cljs.core.not.call(null,inst_36302);
var state_36323__$1 = (function (){var statearr_36342 = state_36323;
(statearr_36342[(8)] = inst_36301__$1);

(statearr_36342[(11)] = inst_36303__$1);

return statearr_36342;
})();
if(inst_36303__$1){
var statearr_36343_36405 = state_36323__$1;
(statearr_36343_36405[(1)] = (15));

} else {
var statearr_36344_36406 = state_36323__$1;
(statearr_36344_36406[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (16))){
var inst_36303 = (state_36323[(11)]);
var state_36323__$1 = state_36323;
var statearr_36345_36407 = state_36323__$1;
(statearr_36345_36407[(2)] = inst_36303);

(statearr_36345_36407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (10))){
var inst_36295 = (state_36323[(2)]);
var state_36323__$1 = state_36323;
var statearr_36346_36408 = state_36323__$1;
(statearr_36346_36408[(2)] = inst_36295);

(statearr_36346_36408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (18))){
var inst_36306 = (state_36323[(2)]);
var state_36323__$1 = state_36323;
var statearr_36347_36409 = state_36323__$1;
(statearr_36347_36409[(2)] = inst_36306);

(statearr_36347_36409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36324 === (8))){
var inst_36292 = cljs.core.async.close_BANG_.call(null,to);
var state_36323__$1 = state_36323;
var statearr_36348_36410 = state_36323__$1;
(statearr_36348_36410[(2)] = inst_36292);

(statearr_36348_36410[(1)] = (10));


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
});})(c__35798__auto__,jobs,results,process,async))
;
return ((function (switch__35686__auto__,c__35798__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0 = (function (){
var statearr_36352 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__);

(statearr_36352[(1)] = (1));

return statearr_36352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1 = (function (state_36323){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_36323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e36353){if((e36353 instanceof Object)){
var ex__35690__auto__ = e36353;
var statearr_36354_36411 = state_36323;
(statearr_36354_36411[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36412 = state_36323;
state_36323 = G__36412;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__ = function(state_36323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1.call(this,state_36323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto__,jobs,results,process,async))
})();
var state__35800__auto__ = (function (){var statearr_36355 = f__35799__auto__.call(null);
(statearr_36355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto__);

return statearr_36355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto__,jobs,results,process,async))
);

return c__35798__auto__;
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
var args36413 = [];
var len__31894__auto___36416 = arguments.length;
var i__31895__auto___36417 = (0);
while(true){
if((i__31895__auto___36417 < len__31894__auto___36416)){
args36413.push((arguments[i__31895__auto___36417]));

var G__36418 = (i__31895__auto___36417 + (1));
i__31895__auto___36417 = G__36418;
continue;
} else {
}
break;
}

var G__36415 = args36413.length;
switch (G__36415) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36413.length)].join('')));

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
var args36420 = [];
var len__31894__auto___36423 = arguments.length;
var i__31895__auto___36424 = (0);
while(true){
if((i__31895__auto___36424 < len__31894__auto___36423)){
args36420.push((arguments[i__31895__auto___36424]));

var G__36425 = (i__31895__auto___36424 + (1));
i__31895__auto___36424 = G__36425;
continue;
} else {
}
break;
}

var G__36422 = args36420.length;
switch (G__36422) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36420.length)].join('')));

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
var args36427 = [];
var len__31894__auto___36480 = arguments.length;
var i__31895__auto___36481 = (0);
while(true){
if((i__31895__auto___36481 < len__31894__auto___36480)){
args36427.push((arguments[i__31895__auto___36481]));

var G__36482 = (i__31895__auto___36481 + (1));
i__31895__auto___36481 = G__36482;
continue;
} else {
}
break;
}

var G__36429 = args36427.length;
switch (G__36429) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36427.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35798__auto___36484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___36484,tc,fc){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___36484,tc,fc){
return (function (state_36455){
var state_val_36456 = (state_36455[(1)]);
if((state_val_36456 === (7))){
var inst_36451 = (state_36455[(2)]);
var state_36455__$1 = state_36455;
var statearr_36457_36485 = state_36455__$1;
(statearr_36457_36485[(2)] = inst_36451);

(statearr_36457_36485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (1))){
var state_36455__$1 = state_36455;
var statearr_36458_36486 = state_36455__$1;
(statearr_36458_36486[(2)] = null);

(statearr_36458_36486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (4))){
var inst_36432 = (state_36455[(7)]);
var inst_36432__$1 = (state_36455[(2)]);
var inst_36433 = (inst_36432__$1 == null);
var state_36455__$1 = (function (){var statearr_36459 = state_36455;
(statearr_36459[(7)] = inst_36432__$1);

return statearr_36459;
})();
if(cljs.core.truth_(inst_36433)){
var statearr_36460_36487 = state_36455__$1;
(statearr_36460_36487[(1)] = (5));

} else {
var statearr_36461_36488 = state_36455__$1;
(statearr_36461_36488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (13))){
var state_36455__$1 = state_36455;
var statearr_36462_36489 = state_36455__$1;
(statearr_36462_36489[(2)] = null);

(statearr_36462_36489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (6))){
var inst_36432 = (state_36455[(7)]);
var inst_36438 = p.call(null,inst_36432);
var state_36455__$1 = state_36455;
if(cljs.core.truth_(inst_36438)){
var statearr_36463_36490 = state_36455__$1;
(statearr_36463_36490[(1)] = (9));

} else {
var statearr_36464_36491 = state_36455__$1;
(statearr_36464_36491[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (3))){
var inst_36453 = (state_36455[(2)]);
var state_36455__$1 = state_36455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36455__$1,inst_36453);
} else {
if((state_val_36456 === (12))){
var state_36455__$1 = state_36455;
var statearr_36465_36492 = state_36455__$1;
(statearr_36465_36492[(2)] = null);

(statearr_36465_36492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (2))){
var state_36455__$1 = state_36455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36455__$1,(4),ch);
} else {
if((state_val_36456 === (11))){
var inst_36432 = (state_36455[(7)]);
var inst_36442 = (state_36455[(2)]);
var state_36455__$1 = state_36455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36455__$1,(8),inst_36442,inst_36432);
} else {
if((state_val_36456 === (9))){
var state_36455__$1 = state_36455;
var statearr_36466_36493 = state_36455__$1;
(statearr_36466_36493[(2)] = tc);

(statearr_36466_36493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (5))){
var inst_36435 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36436 = cljs.core.async.close_BANG_.call(null,fc);
var state_36455__$1 = (function (){var statearr_36467 = state_36455;
(statearr_36467[(8)] = inst_36435);

return statearr_36467;
})();
var statearr_36468_36494 = state_36455__$1;
(statearr_36468_36494[(2)] = inst_36436);

(statearr_36468_36494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (14))){
var inst_36449 = (state_36455[(2)]);
var state_36455__$1 = state_36455;
var statearr_36469_36495 = state_36455__$1;
(statearr_36469_36495[(2)] = inst_36449);

(statearr_36469_36495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (10))){
var state_36455__$1 = state_36455;
var statearr_36470_36496 = state_36455__$1;
(statearr_36470_36496[(2)] = fc);

(statearr_36470_36496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36456 === (8))){
var inst_36444 = (state_36455[(2)]);
var state_36455__$1 = state_36455;
if(cljs.core.truth_(inst_36444)){
var statearr_36471_36497 = state_36455__$1;
(statearr_36471_36497[(1)] = (12));

} else {
var statearr_36472_36498 = state_36455__$1;
(statearr_36472_36498[(1)] = (13));

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
});})(c__35798__auto___36484,tc,fc))
;
return ((function (switch__35686__auto__,c__35798__auto___36484,tc,fc){
return (function() {
var cljs$core$async$state_machine__35687__auto__ = null;
var cljs$core$async$state_machine__35687__auto____0 = (function (){
var statearr_36476 = [null,null,null,null,null,null,null,null,null];
(statearr_36476[(0)] = cljs$core$async$state_machine__35687__auto__);

(statearr_36476[(1)] = (1));

return statearr_36476;
});
var cljs$core$async$state_machine__35687__auto____1 = (function (state_36455){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_36455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e36477){if((e36477 instanceof Object)){
var ex__35690__auto__ = e36477;
var statearr_36478_36499 = state_36455;
(statearr_36478_36499[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36500 = state_36455;
state_36455 = G__36500;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$state_machine__35687__auto__ = function(state_36455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35687__auto____1.call(this,state_36455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35687__auto____0;
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35687__auto____1;
return cljs$core$async$state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___36484,tc,fc))
})();
var state__35800__auto__ = (function (){var statearr_36479 = f__35799__auto__.call(null);
(statearr_36479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___36484);

return statearr_36479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___36484,tc,fc))
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
var c__35798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto__){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto__){
return (function (state_36564){
var state_val_36565 = (state_36564[(1)]);
if((state_val_36565 === (7))){
var inst_36560 = (state_36564[(2)]);
var state_36564__$1 = state_36564;
var statearr_36566_36587 = state_36564__$1;
(statearr_36566_36587[(2)] = inst_36560);

(statearr_36566_36587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36565 === (1))){
var inst_36544 = init;
var state_36564__$1 = (function (){var statearr_36567 = state_36564;
(statearr_36567[(7)] = inst_36544);

return statearr_36567;
})();
var statearr_36568_36588 = state_36564__$1;
(statearr_36568_36588[(2)] = null);

(statearr_36568_36588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36565 === (4))){
var inst_36547 = (state_36564[(8)]);
var inst_36547__$1 = (state_36564[(2)]);
var inst_36548 = (inst_36547__$1 == null);
var state_36564__$1 = (function (){var statearr_36569 = state_36564;
(statearr_36569[(8)] = inst_36547__$1);

return statearr_36569;
})();
if(cljs.core.truth_(inst_36548)){
var statearr_36570_36589 = state_36564__$1;
(statearr_36570_36589[(1)] = (5));

} else {
var statearr_36571_36590 = state_36564__$1;
(statearr_36571_36590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36565 === (6))){
var inst_36547 = (state_36564[(8)]);
var inst_36551 = (state_36564[(9)]);
var inst_36544 = (state_36564[(7)]);
var inst_36551__$1 = f.call(null,inst_36544,inst_36547);
var inst_36552 = cljs.core.reduced_QMARK_.call(null,inst_36551__$1);
var state_36564__$1 = (function (){var statearr_36572 = state_36564;
(statearr_36572[(9)] = inst_36551__$1);

return statearr_36572;
})();
if(inst_36552){
var statearr_36573_36591 = state_36564__$1;
(statearr_36573_36591[(1)] = (8));

} else {
var statearr_36574_36592 = state_36564__$1;
(statearr_36574_36592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36565 === (3))){
var inst_36562 = (state_36564[(2)]);
var state_36564__$1 = state_36564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36564__$1,inst_36562);
} else {
if((state_val_36565 === (2))){
var state_36564__$1 = state_36564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36564__$1,(4),ch);
} else {
if((state_val_36565 === (9))){
var inst_36551 = (state_36564[(9)]);
var inst_36544 = inst_36551;
var state_36564__$1 = (function (){var statearr_36575 = state_36564;
(statearr_36575[(7)] = inst_36544);

return statearr_36575;
})();
var statearr_36576_36593 = state_36564__$1;
(statearr_36576_36593[(2)] = null);

(statearr_36576_36593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36565 === (5))){
var inst_36544 = (state_36564[(7)]);
var state_36564__$1 = state_36564;
var statearr_36577_36594 = state_36564__$1;
(statearr_36577_36594[(2)] = inst_36544);

(statearr_36577_36594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36565 === (10))){
var inst_36558 = (state_36564[(2)]);
var state_36564__$1 = state_36564;
var statearr_36578_36595 = state_36564__$1;
(statearr_36578_36595[(2)] = inst_36558);

(statearr_36578_36595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36565 === (8))){
var inst_36551 = (state_36564[(9)]);
var inst_36554 = cljs.core.deref.call(null,inst_36551);
var state_36564__$1 = state_36564;
var statearr_36579_36596 = state_36564__$1;
(statearr_36579_36596[(2)] = inst_36554);

(statearr_36579_36596[(1)] = (10));


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
});})(c__35798__auto__))
;
return ((function (switch__35686__auto__,c__35798__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35687__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35687__auto____0 = (function (){
var statearr_36583 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36583[(0)] = cljs$core$async$reduce_$_state_machine__35687__auto__);

(statearr_36583[(1)] = (1));

return statearr_36583;
});
var cljs$core$async$reduce_$_state_machine__35687__auto____1 = (function (state_36564){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_36564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e36584){if((e36584 instanceof Object)){
var ex__35690__auto__ = e36584;
var statearr_36585_36597 = state_36564;
(statearr_36585_36597[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36598 = state_36564;
state_36564 = G__36598;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35687__auto__ = function(state_36564){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35687__auto____1.call(this,state_36564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35687__auto____0;
cljs$core$async$reduce_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35687__auto____1;
return cljs$core$async$reduce_$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto__))
})();
var state__35800__auto__ = (function (){var statearr_36586 = f__35799__auto__.call(null);
(statearr_36586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto__);

return statearr_36586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto__))
);

return c__35798__auto__;
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
var args36599 = [];
var len__31894__auto___36651 = arguments.length;
var i__31895__auto___36652 = (0);
while(true){
if((i__31895__auto___36652 < len__31894__auto___36651)){
args36599.push((arguments[i__31895__auto___36652]));

var G__36653 = (i__31895__auto___36652 + (1));
i__31895__auto___36652 = G__36653;
continue;
} else {
}
break;
}

var G__36601 = args36599.length;
switch (G__36601) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36599.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto__){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto__){
return (function (state_36626){
var state_val_36627 = (state_36626[(1)]);
if((state_val_36627 === (7))){
var inst_36608 = (state_36626[(2)]);
var state_36626__$1 = state_36626;
var statearr_36628_36655 = state_36626__$1;
(statearr_36628_36655[(2)] = inst_36608);

(statearr_36628_36655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (1))){
var inst_36602 = cljs.core.seq.call(null,coll);
var inst_36603 = inst_36602;
var state_36626__$1 = (function (){var statearr_36629 = state_36626;
(statearr_36629[(7)] = inst_36603);

return statearr_36629;
})();
var statearr_36630_36656 = state_36626__$1;
(statearr_36630_36656[(2)] = null);

(statearr_36630_36656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (4))){
var inst_36603 = (state_36626[(7)]);
var inst_36606 = cljs.core.first.call(null,inst_36603);
var state_36626__$1 = state_36626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36626__$1,(7),ch,inst_36606);
} else {
if((state_val_36627 === (13))){
var inst_36620 = (state_36626[(2)]);
var state_36626__$1 = state_36626;
var statearr_36631_36657 = state_36626__$1;
(statearr_36631_36657[(2)] = inst_36620);

(statearr_36631_36657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (6))){
var inst_36611 = (state_36626[(2)]);
var state_36626__$1 = state_36626;
if(cljs.core.truth_(inst_36611)){
var statearr_36632_36658 = state_36626__$1;
(statearr_36632_36658[(1)] = (8));

} else {
var statearr_36633_36659 = state_36626__$1;
(statearr_36633_36659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (3))){
var inst_36624 = (state_36626[(2)]);
var state_36626__$1 = state_36626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36626__$1,inst_36624);
} else {
if((state_val_36627 === (12))){
var state_36626__$1 = state_36626;
var statearr_36634_36660 = state_36626__$1;
(statearr_36634_36660[(2)] = null);

(statearr_36634_36660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (2))){
var inst_36603 = (state_36626[(7)]);
var state_36626__$1 = state_36626;
if(cljs.core.truth_(inst_36603)){
var statearr_36635_36661 = state_36626__$1;
(statearr_36635_36661[(1)] = (4));

} else {
var statearr_36636_36662 = state_36626__$1;
(statearr_36636_36662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (11))){
var inst_36617 = cljs.core.async.close_BANG_.call(null,ch);
var state_36626__$1 = state_36626;
var statearr_36637_36663 = state_36626__$1;
(statearr_36637_36663[(2)] = inst_36617);

(statearr_36637_36663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (9))){
var state_36626__$1 = state_36626;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36638_36664 = state_36626__$1;
(statearr_36638_36664[(1)] = (11));

} else {
var statearr_36639_36665 = state_36626__$1;
(statearr_36639_36665[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (5))){
var inst_36603 = (state_36626[(7)]);
var state_36626__$1 = state_36626;
var statearr_36640_36666 = state_36626__$1;
(statearr_36640_36666[(2)] = inst_36603);

(statearr_36640_36666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (10))){
var inst_36622 = (state_36626[(2)]);
var state_36626__$1 = state_36626;
var statearr_36641_36667 = state_36626__$1;
(statearr_36641_36667[(2)] = inst_36622);

(statearr_36641_36667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (8))){
var inst_36603 = (state_36626[(7)]);
var inst_36613 = cljs.core.next.call(null,inst_36603);
var inst_36603__$1 = inst_36613;
var state_36626__$1 = (function (){var statearr_36642 = state_36626;
(statearr_36642[(7)] = inst_36603__$1);

return statearr_36642;
})();
var statearr_36643_36668 = state_36626__$1;
(statearr_36643_36668[(2)] = null);

(statearr_36643_36668[(1)] = (2));


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
});})(c__35798__auto__))
;
return ((function (switch__35686__auto__,c__35798__auto__){
return (function() {
var cljs$core$async$state_machine__35687__auto__ = null;
var cljs$core$async$state_machine__35687__auto____0 = (function (){
var statearr_36647 = [null,null,null,null,null,null,null,null];
(statearr_36647[(0)] = cljs$core$async$state_machine__35687__auto__);

(statearr_36647[(1)] = (1));

return statearr_36647;
});
var cljs$core$async$state_machine__35687__auto____1 = (function (state_36626){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_36626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e36648){if((e36648 instanceof Object)){
var ex__35690__auto__ = e36648;
var statearr_36649_36669 = state_36626;
(statearr_36649_36669[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36670 = state_36626;
state_36626 = G__36670;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$state_machine__35687__auto__ = function(state_36626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35687__auto____1.call(this,state_36626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35687__auto____0;
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35687__auto____1;
return cljs$core$async$state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto__))
})();
var state__35800__auto__ = (function (){var statearr_36650 = f__35799__auto__.call(null);
(statearr_36650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto__);

return statearr_36650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto__))
);

return c__35798__auto__;
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
var x__31482__auto__ = (((_ == null))?null:_);
var m__31483__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31482__auto__)]);
if(!((m__31483__auto__ == null))){
return m__31483__auto__.call(null,_);
} else {
var m__31483__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31483__auto____$1 == null))){
return m__31483__auto____$1.call(null,_);
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
var x__31482__auto__ = (((m == null))?null:m);
var m__31483__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31482__auto__)]);
if(!((m__31483__auto__ == null))){
return m__31483__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31483__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31483__auto____$1 == null))){
return m__31483__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__31482__auto__ = (((m == null))?null:m);
var m__31483__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31482__auto__)]);
if(!((m__31483__auto__ == null))){
return m__31483__auto__.call(null,m,ch);
} else {
var m__31483__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31483__auto____$1 == null))){
return m__31483__auto____$1.call(null,m,ch);
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
var x__31482__auto__ = (((m == null))?null:m);
var m__31483__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31482__auto__)]);
if(!((m__31483__auto__ == null))){
return m__31483__auto__.call(null,m);
} else {
var m__31483__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31483__auto____$1 == null))){
return m__31483__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async36896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36896 = (function (mult,ch,cs,meta36897){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36897 = meta36897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36898,meta36897__$1){
var self__ = this;
var _36898__$1 = this;
return (new cljs.core.async.t_cljs$core$async36896(self__.mult,self__.ch,self__.cs,meta36897__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36898){
var self__ = this;
var _36898__$1 = this;
return self__.meta36897;
});})(cs))
;

cljs.core.async.t_cljs$core$async36896.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36896.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36896.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async36896.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36896.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36896.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36896.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36897","meta36897",1999361793,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36896.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36896";

cljs.core.async.t_cljs$core$async36896.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31425__auto__,writer__31426__auto__,opt__31427__auto__){
return cljs.core._write.call(null,writer__31426__auto__,"cljs.core.async/t_cljs$core$async36896");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36896 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36896(mult__$1,ch__$1,cs__$1,meta36897){
return (new cljs.core.async.t_cljs$core$async36896(mult__$1,ch__$1,cs__$1,meta36897));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36896(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35798__auto___37121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___37121,cs,m,dchan,dctr,done){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___37121,cs,m,dchan,dctr,done){
return (function (state_37033){
var state_val_37034 = (state_37033[(1)]);
if((state_val_37034 === (7))){
var inst_37029 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37035_37122 = state_37033__$1;
(statearr_37035_37122[(2)] = inst_37029);

(statearr_37035_37122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (20))){
var inst_36932 = (state_37033[(7)]);
var inst_36944 = cljs.core.first.call(null,inst_36932);
var inst_36945 = cljs.core.nth.call(null,inst_36944,(0),null);
var inst_36946 = cljs.core.nth.call(null,inst_36944,(1),null);
var state_37033__$1 = (function (){var statearr_37036 = state_37033;
(statearr_37036[(8)] = inst_36945);

return statearr_37036;
})();
if(cljs.core.truth_(inst_36946)){
var statearr_37037_37123 = state_37033__$1;
(statearr_37037_37123[(1)] = (22));

} else {
var statearr_37038_37124 = state_37033__$1;
(statearr_37038_37124[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (27))){
var inst_36976 = (state_37033[(9)]);
var inst_36901 = (state_37033[(10)]);
var inst_36974 = (state_37033[(11)]);
var inst_36981 = (state_37033[(12)]);
var inst_36981__$1 = cljs.core._nth.call(null,inst_36974,inst_36976);
var inst_36982 = cljs.core.async.put_BANG_.call(null,inst_36981__$1,inst_36901,done);
var state_37033__$1 = (function (){var statearr_37039 = state_37033;
(statearr_37039[(12)] = inst_36981__$1);

return statearr_37039;
})();
if(cljs.core.truth_(inst_36982)){
var statearr_37040_37125 = state_37033__$1;
(statearr_37040_37125[(1)] = (30));

} else {
var statearr_37041_37126 = state_37033__$1;
(statearr_37041_37126[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (1))){
var state_37033__$1 = state_37033;
var statearr_37042_37127 = state_37033__$1;
(statearr_37042_37127[(2)] = null);

(statearr_37042_37127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (24))){
var inst_36932 = (state_37033[(7)]);
var inst_36951 = (state_37033[(2)]);
var inst_36952 = cljs.core.next.call(null,inst_36932);
var inst_36910 = inst_36952;
var inst_36911 = null;
var inst_36912 = (0);
var inst_36913 = (0);
var state_37033__$1 = (function (){var statearr_37043 = state_37033;
(statearr_37043[(13)] = inst_36910);

(statearr_37043[(14)] = inst_36911);

(statearr_37043[(15)] = inst_36912);

(statearr_37043[(16)] = inst_36913);

(statearr_37043[(17)] = inst_36951);

return statearr_37043;
})();
var statearr_37044_37128 = state_37033__$1;
(statearr_37044_37128[(2)] = null);

(statearr_37044_37128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (39))){
var state_37033__$1 = state_37033;
var statearr_37048_37129 = state_37033__$1;
(statearr_37048_37129[(2)] = null);

(statearr_37048_37129[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (4))){
var inst_36901 = (state_37033[(10)]);
var inst_36901__$1 = (state_37033[(2)]);
var inst_36902 = (inst_36901__$1 == null);
var state_37033__$1 = (function (){var statearr_37049 = state_37033;
(statearr_37049[(10)] = inst_36901__$1);

return statearr_37049;
})();
if(cljs.core.truth_(inst_36902)){
var statearr_37050_37130 = state_37033__$1;
(statearr_37050_37130[(1)] = (5));

} else {
var statearr_37051_37131 = state_37033__$1;
(statearr_37051_37131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (15))){
var inst_36910 = (state_37033[(13)]);
var inst_36911 = (state_37033[(14)]);
var inst_36912 = (state_37033[(15)]);
var inst_36913 = (state_37033[(16)]);
var inst_36928 = (state_37033[(2)]);
var inst_36929 = (inst_36913 + (1));
var tmp37045 = inst_36910;
var tmp37046 = inst_36911;
var tmp37047 = inst_36912;
var inst_36910__$1 = tmp37045;
var inst_36911__$1 = tmp37046;
var inst_36912__$1 = tmp37047;
var inst_36913__$1 = inst_36929;
var state_37033__$1 = (function (){var statearr_37052 = state_37033;
(statearr_37052[(13)] = inst_36910__$1);

(statearr_37052[(14)] = inst_36911__$1);

(statearr_37052[(15)] = inst_36912__$1);

(statearr_37052[(16)] = inst_36913__$1);

(statearr_37052[(18)] = inst_36928);

return statearr_37052;
})();
var statearr_37053_37132 = state_37033__$1;
(statearr_37053_37132[(2)] = null);

(statearr_37053_37132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (21))){
var inst_36955 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37057_37133 = state_37033__$1;
(statearr_37057_37133[(2)] = inst_36955);

(statearr_37057_37133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (31))){
var inst_36981 = (state_37033[(12)]);
var inst_36985 = done.call(null,null);
var inst_36986 = cljs.core.async.untap_STAR_.call(null,m,inst_36981);
var state_37033__$1 = (function (){var statearr_37058 = state_37033;
(statearr_37058[(19)] = inst_36985);

return statearr_37058;
})();
var statearr_37059_37134 = state_37033__$1;
(statearr_37059_37134[(2)] = inst_36986);

(statearr_37059_37134[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (32))){
var inst_36976 = (state_37033[(9)]);
var inst_36973 = (state_37033[(20)]);
var inst_36975 = (state_37033[(21)]);
var inst_36974 = (state_37033[(11)]);
var inst_36988 = (state_37033[(2)]);
var inst_36989 = (inst_36976 + (1));
var tmp37054 = inst_36973;
var tmp37055 = inst_36975;
var tmp37056 = inst_36974;
var inst_36973__$1 = tmp37054;
var inst_36974__$1 = tmp37056;
var inst_36975__$1 = tmp37055;
var inst_36976__$1 = inst_36989;
var state_37033__$1 = (function (){var statearr_37060 = state_37033;
(statearr_37060[(9)] = inst_36976__$1);

(statearr_37060[(20)] = inst_36973__$1);

(statearr_37060[(21)] = inst_36975__$1);

(statearr_37060[(11)] = inst_36974__$1);

(statearr_37060[(22)] = inst_36988);

return statearr_37060;
})();
var statearr_37061_37135 = state_37033__$1;
(statearr_37061_37135[(2)] = null);

(statearr_37061_37135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (40))){
var inst_37001 = (state_37033[(23)]);
var inst_37005 = done.call(null,null);
var inst_37006 = cljs.core.async.untap_STAR_.call(null,m,inst_37001);
var state_37033__$1 = (function (){var statearr_37062 = state_37033;
(statearr_37062[(24)] = inst_37005);

return statearr_37062;
})();
var statearr_37063_37136 = state_37033__$1;
(statearr_37063_37136[(2)] = inst_37006);

(statearr_37063_37136[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (33))){
var inst_36992 = (state_37033[(25)]);
var inst_36994 = cljs.core.chunked_seq_QMARK_.call(null,inst_36992);
var state_37033__$1 = state_37033;
if(inst_36994){
var statearr_37064_37137 = state_37033__$1;
(statearr_37064_37137[(1)] = (36));

} else {
var statearr_37065_37138 = state_37033__$1;
(statearr_37065_37138[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (13))){
var inst_36922 = (state_37033[(26)]);
var inst_36925 = cljs.core.async.close_BANG_.call(null,inst_36922);
var state_37033__$1 = state_37033;
var statearr_37066_37139 = state_37033__$1;
(statearr_37066_37139[(2)] = inst_36925);

(statearr_37066_37139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (22))){
var inst_36945 = (state_37033[(8)]);
var inst_36948 = cljs.core.async.close_BANG_.call(null,inst_36945);
var state_37033__$1 = state_37033;
var statearr_37067_37140 = state_37033__$1;
(statearr_37067_37140[(2)] = inst_36948);

(statearr_37067_37140[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (36))){
var inst_36992 = (state_37033[(25)]);
var inst_36996 = cljs.core.chunk_first.call(null,inst_36992);
var inst_36997 = cljs.core.chunk_rest.call(null,inst_36992);
var inst_36998 = cljs.core.count.call(null,inst_36996);
var inst_36973 = inst_36997;
var inst_36974 = inst_36996;
var inst_36975 = inst_36998;
var inst_36976 = (0);
var state_37033__$1 = (function (){var statearr_37068 = state_37033;
(statearr_37068[(9)] = inst_36976);

(statearr_37068[(20)] = inst_36973);

(statearr_37068[(21)] = inst_36975);

(statearr_37068[(11)] = inst_36974);

return statearr_37068;
})();
var statearr_37069_37141 = state_37033__$1;
(statearr_37069_37141[(2)] = null);

(statearr_37069_37141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (41))){
var inst_36992 = (state_37033[(25)]);
var inst_37008 = (state_37033[(2)]);
var inst_37009 = cljs.core.next.call(null,inst_36992);
var inst_36973 = inst_37009;
var inst_36974 = null;
var inst_36975 = (0);
var inst_36976 = (0);
var state_37033__$1 = (function (){var statearr_37070 = state_37033;
(statearr_37070[(9)] = inst_36976);

(statearr_37070[(27)] = inst_37008);

(statearr_37070[(20)] = inst_36973);

(statearr_37070[(21)] = inst_36975);

(statearr_37070[(11)] = inst_36974);

return statearr_37070;
})();
var statearr_37071_37142 = state_37033__$1;
(statearr_37071_37142[(2)] = null);

(statearr_37071_37142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (43))){
var state_37033__$1 = state_37033;
var statearr_37072_37143 = state_37033__$1;
(statearr_37072_37143[(2)] = null);

(statearr_37072_37143[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (29))){
var inst_37017 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37073_37144 = state_37033__$1;
(statearr_37073_37144[(2)] = inst_37017);

(statearr_37073_37144[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (44))){
var inst_37026 = (state_37033[(2)]);
var state_37033__$1 = (function (){var statearr_37074 = state_37033;
(statearr_37074[(28)] = inst_37026);

return statearr_37074;
})();
var statearr_37075_37145 = state_37033__$1;
(statearr_37075_37145[(2)] = null);

(statearr_37075_37145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (6))){
var inst_36965 = (state_37033[(29)]);
var inst_36964 = cljs.core.deref.call(null,cs);
var inst_36965__$1 = cljs.core.keys.call(null,inst_36964);
var inst_36966 = cljs.core.count.call(null,inst_36965__$1);
var inst_36967 = cljs.core.reset_BANG_.call(null,dctr,inst_36966);
var inst_36972 = cljs.core.seq.call(null,inst_36965__$1);
var inst_36973 = inst_36972;
var inst_36974 = null;
var inst_36975 = (0);
var inst_36976 = (0);
var state_37033__$1 = (function (){var statearr_37076 = state_37033;
(statearr_37076[(9)] = inst_36976);

(statearr_37076[(20)] = inst_36973);

(statearr_37076[(21)] = inst_36975);

(statearr_37076[(11)] = inst_36974);

(statearr_37076[(30)] = inst_36967);

(statearr_37076[(29)] = inst_36965__$1);

return statearr_37076;
})();
var statearr_37077_37146 = state_37033__$1;
(statearr_37077_37146[(2)] = null);

(statearr_37077_37146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (28))){
var inst_36992 = (state_37033[(25)]);
var inst_36973 = (state_37033[(20)]);
var inst_36992__$1 = cljs.core.seq.call(null,inst_36973);
var state_37033__$1 = (function (){var statearr_37078 = state_37033;
(statearr_37078[(25)] = inst_36992__$1);

return statearr_37078;
})();
if(inst_36992__$1){
var statearr_37079_37147 = state_37033__$1;
(statearr_37079_37147[(1)] = (33));

} else {
var statearr_37080_37148 = state_37033__$1;
(statearr_37080_37148[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (25))){
var inst_36976 = (state_37033[(9)]);
var inst_36975 = (state_37033[(21)]);
var inst_36978 = (inst_36976 < inst_36975);
var inst_36979 = inst_36978;
var state_37033__$1 = state_37033;
if(cljs.core.truth_(inst_36979)){
var statearr_37081_37149 = state_37033__$1;
(statearr_37081_37149[(1)] = (27));

} else {
var statearr_37082_37150 = state_37033__$1;
(statearr_37082_37150[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (34))){
var state_37033__$1 = state_37033;
var statearr_37083_37151 = state_37033__$1;
(statearr_37083_37151[(2)] = null);

(statearr_37083_37151[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (17))){
var state_37033__$1 = state_37033;
var statearr_37084_37152 = state_37033__$1;
(statearr_37084_37152[(2)] = null);

(statearr_37084_37152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (3))){
var inst_37031 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37033__$1,inst_37031);
} else {
if((state_val_37034 === (12))){
var inst_36960 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37085_37153 = state_37033__$1;
(statearr_37085_37153[(2)] = inst_36960);

(statearr_37085_37153[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (2))){
var state_37033__$1 = state_37033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37033__$1,(4),ch);
} else {
if((state_val_37034 === (23))){
var state_37033__$1 = state_37033;
var statearr_37086_37154 = state_37033__$1;
(statearr_37086_37154[(2)] = null);

(statearr_37086_37154[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (35))){
var inst_37015 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37087_37155 = state_37033__$1;
(statearr_37087_37155[(2)] = inst_37015);

(statearr_37087_37155[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (19))){
var inst_36932 = (state_37033[(7)]);
var inst_36936 = cljs.core.chunk_first.call(null,inst_36932);
var inst_36937 = cljs.core.chunk_rest.call(null,inst_36932);
var inst_36938 = cljs.core.count.call(null,inst_36936);
var inst_36910 = inst_36937;
var inst_36911 = inst_36936;
var inst_36912 = inst_36938;
var inst_36913 = (0);
var state_37033__$1 = (function (){var statearr_37088 = state_37033;
(statearr_37088[(13)] = inst_36910);

(statearr_37088[(14)] = inst_36911);

(statearr_37088[(15)] = inst_36912);

(statearr_37088[(16)] = inst_36913);

return statearr_37088;
})();
var statearr_37089_37156 = state_37033__$1;
(statearr_37089_37156[(2)] = null);

(statearr_37089_37156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (11))){
var inst_36910 = (state_37033[(13)]);
var inst_36932 = (state_37033[(7)]);
var inst_36932__$1 = cljs.core.seq.call(null,inst_36910);
var state_37033__$1 = (function (){var statearr_37090 = state_37033;
(statearr_37090[(7)] = inst_36932__$1);

return statearr_37090;
})();
if(inst_36932__$1){
var statearr_37091_37157 = state_37033__$1;
(statearr_37091_37157[(1)] = (16));

} else {
var statearr_37092_37158 = state_37033__$1;
(statearr_37092_37158[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (9))){
var inst_36962 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37093_37159 = state_37033__$1;
(statearr_37093_37159[(2)] = inst_36962);

(statearr_37093_37159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (5))){
var inst_36908 = cljs.core.deref.call(null,cs);
var inst_36909 = cljs.core.seq.call(null,inst_36908);
var inst_36910 = inst_36909;
var inst_36911 = null;
var inst_36912 = (0);
var inst_36913 = (0);
var state_37033__$1 = (function (){var statearr_37094 = state_37033;
(statearr_37094[(13)] = inst_36910);

(statearr_37094[(14)] = inst_36911);

(statearr_37094[(15)] = inst_36912);

(statearr_37094[(16)] = inst_36913);

return statearr_37094;
})();
var statearr_37095_37160 = state_37033__$1;
(statearr_37095_37160[(2)] = null);

(statearr_37095_37160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (14))){
var state_37033__$1 = state_37033;
var statearr_37096_37161 = state_37033__$1;
(statearr_37096_37161[(2)] = null);

(statearr_37096_37161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (45))){
var inst_37023 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37097_37162 = state_37033__$1;
(statearr_37097_37162[(2)] = inst_37023);

(statearr_37097_37162[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (26))){
var inst_36965 = (state_37033[(29)]);
var inst_37019 = (state_37033[(2)]);
var inst_37020 = cljs.core.seq.call(null,inst_36965);
var state_37033__$1 = (function (){var statearr_37098 = state_37033;
(statearr_37098[(31)] = inst_37019);

return statearr_37098;
})();
if(inst_37020){
var statearr_37099_37163 = state_37033__$1;
(statearr_37099_37163[(1)] = (42));

} else {
var statearr_37100_37164 = state_37033__$1;
(statearr_37100_37164[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (16))){
var inst_36932 = (state_37033[(7)]);
var inst_36934 = cljs.core.chunked_seq_QMARK_.call(null,inst_36932);
var state_37033__$1 = state_37033;
if(inst_36934){
var statearr_37101_37165 = state_37033__$1;
(statearr_37101_37165[(1)] = (19));

} else {
var statearr_37102_37166 = state_37033__$1;
(statearr_37102_37166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (38))){
var inst_37012 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37103_37167 = state_37033__$1;
(statearr_37103_37167[(2)] = inst_37012);

(statearr_37103_37167[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (30))){
var state_37033__$1 = state_37033;
var statearr_37104_37168 = state_37033__$1;
(statearr_37104_37168[(2)] = null);

(statearr_37104_37168[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (10))){
var inst_36911 = (state_37033[(14)]);
var inst_36913 = (state_37033[(16)]);
var inst_36921 = cljs.core._nth.call(null,inst_36911,inst_36913);
var inst_36922 = cljs.core.nth.call(null,inst_36921,(0),null);
var inst_36923 = cljs.core.nth.call(null,inst_36921,(1),null);
var state_37033__$1 = (function (){var statearr_37105 = state_37033;
(statearr_37105[(26)] = inst_36922);

return statearr_37105;
})();
if(cljs.core.truth_(inst_36923)){
var statearr_37106_37169 = state_37033__$1;
(statearr_37106_37169[(1)] = (13));

} else {
var statearr_37107_37170 = state_37033__$1;
(statearr_37107_37170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (18))){
var inst_36958 = (state_37033[(2)]);
var state_37033__$1 = state_37033;
var statearr_37108_37171 = state_37033__$1;
(statearr_37108_37171[(2)] = inst_36958);

(statearr_37108_37171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (42))){
var state_37033__$1 = state_37033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37033__$1,(45),dchan);
} else {
if((state_val_37034 === (37))){
var inst_36901 = (state_37033[(10)]);
var inst_36992 = (state_37033[(25)]);
var inst_37001 = (state_37033[(23)]);
var inst_37001__$1 = cljs.core.first.call(null,inst_36992);
var inst_37002 = cljs.core.async.put_BANG_.call(null,inst_37001__$1,inst_36901,done);
var state_37033__$1 = (function (){var statearr_37109 = state_37033;
(statearr_37109[(23)] = inst_37001__$1);

return statearr_37109;
})();
if(cljs.core.truth_(inst_37002)){
var statearr_37110_37172 = state_37033__$1;
(statearr_37110_37172[(1)] = (39));

} else {
var statearr_37111_37173 = state_37033__$1;
(statearr_37111_37173[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37034 === (8))){
var inst_36912 = (state_37033[(15)]);
var inst_36913 = (state_37033[(16)]);
var inst_36915 = (inst_36913 < inst_36912);
var inst_36916 = inst_36915;
var state_37033__$1 = state_37033;
if(cljs.core.truth_(inst_36916)){
var statearr_37112_37174 = state_37033__$1;
(statearr_37112_37174[(1)] = (10));

} else {
var statearr_37113_37175 = state_37033__$1;
(statearr_37113_37175[(1)] = (11));

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
});})(c__35798__auto___37121,cs,m,dchan,dctr,done))
;
return ((function (switch__35686__auto__,c__35798__auto___37121,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35687__auto__ = null;
var cljs$core$async$mult_$_state_machine__35687__auto____0 = (function (){
var statearr_37117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37117[(0)] = cljs$core$async$mult_$_state_machine__35687__auto__);

(statearr_37117[(1)] = (1));

return statearr_37117;
});
var cljs$core$async$mult_$_state_machine__35687__auto____1 = (function (state_37033){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_37033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e37118){if((e37118 instanceof Object)){
var ex__35690__auto__ = e37118;
var statearr_37119_37176 = state_37033;
(statearr_37119_37176[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37177 = state_37033;
state_37033 = G__37177;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35687__auto__ = function(state_37033){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35687__auto____1.call(this,state_37033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35687__auto____0;
cljs$core$async$mult_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35687__auto____1;
return cljs$core$async$mult_$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___37121,cs,m,dchan,dctr,done))
})();
var state__35800__auto__ = (function (){var statearr_37120 = f__35799__auto__.call(null);
(statearr_37120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___37121);

return statearr_37120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___37121,cs,m,dchan,dctr,done))
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
var args37178 = [];
var len__31894__auto___37181 = arguments.length;
var i__31895__auto___37182 = (0);
while(true){
if((i__31895__auto___37182 < len__31894__auto___37181)){
args37178.push((arguments[i__31895__auto___37182]));

var G__37183 = (i__31895__auto___37182 + (1));
i__31895__auto___37182 = G__37183;
continue;
} else {
}
break;
}

var G__37180 = args37178.length;
switch (G__37180) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37178.length)].join('')));

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
var x__31482__auto__ = (((m == null))?null:m);
var m__31483__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31482__auto__)]);
if(!((m__31483__auto__ == null))){
return m__31483__auto__.call(null,m,ch);
} else {
var m__31483__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31483__auto____$1 == null))){
return m__31483__auto____$1.call(null,m,ch);
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
var x__31482__auto__ = (((m == null))?null:m);
var m__31483__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31482__auto__)]);
if(!((m__31483__auto__ == null))){
return m__31483__auto__.call(null,m,ch);
} else {
var m__31483__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31483__auto____$1 == null))){
return m__31483__auto____$1.call(null,m,ch);
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
var x__31482__auto__ = (((m == null))?null:m);
var m__31483__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31482__auto__)]);
if(!((m__31483__auto__ == null))){
return m__31483__auto__.call(null,m);
} else {
var m__31483__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31483__auto____$1 == null))){
return m__31483__auto____$1.call(null,m);
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
var x__31482__auto__ = (((m == null))?null:m);
var m__31483__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31482__auto__)]);
if(!((m__31483__auto__ == null))){
return m__31483__auto__.call(null,m,state_map);
} else {
var m__31483__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31483__auto____$1 == null))){
return m__31483__auto____$1.call(null,m,state_map);
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
var x__31482__auto__ = (((m == null))?null:m);
var m__31483__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31482__auto__)]);
if(!((m__31483__auto__ == null))){
return m__31483__auto__.call(null,m,mode);
} else {
var m__31483__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31483__auto____$1 == null))){
return m__31483__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31901__auto__ = [];
var len__31894__auto___37195 = arguments.length;
var i__31895__auto___37196 = (0);
while(true){
if((i__31895__auto___37196 < len__31894__auto___37195)){
args__31901__auto__.push((arguments[i__31895__auto___37196]));

var G__37197 = (i__31895__auto___37196 + (1));
i__31895__auto___37196 = G__37197;
continue;
} else {
}
break;
}

var argseq__31902__auto__ = ((((3) < args__31901__auto__.length))?(new cljs.core.IndexedSeq(args__31901__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31902__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37189){
var map__37190 = p__37189;
var map__37190__$1 = ((((!((map__37190 == null)))?((((map__37190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37190):map__37190);
var opts = map__37190__$1;
var statearr_37192_37198 = state;
(statearr_37192_37198[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__37190,map__37190__$1,opts){
return (function (val){
var statearr_37193_37199 = state;
(statearr_37193_37199[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37190,map__37190__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_37194_37200 = state;
(statearr_37194_37200[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37185){
var G__37186 = cljs.core.first.call(null,seq37185);
var seq37185__$1 = cljs.core.next.call(null,seq37185);
var G__37187 = cljs.core.first.call(null,seq37185__$1);
var seq37185__$2 = cljs.core.next.call(null,seq37185__$1);
var G__37188 = cljs.core.first.call(null,seq37185__$2);
var seq37185__$3 = cljs.core.next.call(null,seq37185__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37186,G__37187,G__37188,seq37185__$3);
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
if(typeof cljs.core.async.t_cljs$core$async37366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37366 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37367){
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
this.meta37367 = meta37367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37368,meta37367__$1){
var self__ = this;
var _37368__$1 = this;
return (new cljs.core.async.t_cljs$core$async37366(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37367__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37368){
var self__ = this;
var _37368__$1 = this;
return self__.meta37367;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37366.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37366.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async37366.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37366.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37366.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37366.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37366.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async37366.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37367","meta37367",-1508436504,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37366";

cljs.core.async.t_cljs$core$async37366.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31425__auto__,writer__31426__auto__,opt__31427__auto__){
return cljs.core._write.call(null,writer__31426__auto__,"cljs.core.async/t_cljs$core$async37366");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37366 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37366(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37367){
return (new cljs.core.async.t_cljs$core$async37366(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37367));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37366(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35798__auto___37531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___37531,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___37531,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37468){
var state_val_37469 = (state_37468[(1)]);
if((state_val_37469 === (7))){
var inst_37384 = (state_37468[(2)]);
var state_37468__$1 = state_37468;
var statearr_37470_37532 = state_37468__$1;
(statearr_37470_37532[(2)] = inst_37384);

(statearr_37470_37532[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (20))){
var inst_37396 = (state_37468[(7)]);
var state_37468__$1 = state_37468;
var statearr_37471_37533 = state_37468__$1;
(statearr_37471_37533[(2)] = inst_37396);

(statearr_37471_37533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (27))){
var state_37468__$1 = state_37468;
var statearr_37472_37534 = state_37468__$1;
(statearr_37472_37534[(2)] = null);

(statearr_37472_37534[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (1))){
var inst_37372 = (state_37468[(8)]);
var inst_37372__$1 = calc_state.call(null);
var inst_37374 = (inst_37372__$1 == null);
var inst_37375 = cljs.core.not.call(null,inst_37374);
var state_37468__$1 = (function (){var statearr_37473 = state_37468;
(statearr_37473[(8)] = inst_37372__$1);

return statearr_37473;
})();
if(inst_37375){
var statearr_37474_37535 = state_37468__$1;
(statearr_37474_37535[(1)] = (2));

} else {
var statearr_37475_37536 = state_37468__$1;
(statearr_37475_37536[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (24))){
var inst_37419 = (state_37468[(9)]);
var inst_37428 = (state_37468[(10)]);
var inst_37442 = (state_37468[(11)]);
var inst_37442__$1 = inst_37419.call(null,inst_37428);
var state_37468__$1 = (function (){var statearr_37476 = state_37468;
(statearr_37476[(11)] = inst_37442__$1);

return statearr_37476;
})();
if(cljs.core.truth_(inst_37442__$1)){
var statearr_37477_37537 = state_37468__$1;
(statearr_37477_37537[(1)] = (29));

} else {
var statearr_37478_37538 = state_37468__$1;
(statearr_37478_37538[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (4))){
var inst_37387 = (state_37468[(2)]);
var state_37468__$1 = state_37468;
if(cljs.core.truth_(inst_37387)){
var statearr_37479_37539 = state_37468__$1;
(statearr_37479_37539[(1)] = (8));

} else {
var statearr_37480_37540 = state_37468__$1;
(statearr_37480_37540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (15))){
var inst_37413 = (state_37468[(2)]);
var state_37468__$1 = state_37468;
if(cljs.core.truth_(inst_37413)){
var statearr_37481_37541 = state_37468__$1;
(statearr_37481_37541[(1)] = (19));

} else {
var statearr_37482_37542 = state_37468__$1;
(statearr_37482_37542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (21))){
var inst_37418 = (state_37468[(12)]);
var inst_37418__$1 = (state_37468[(2)]);
var inst_37419 = cljs.core.get.call(null,inst_37418__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37420 = cljs.core.get.call(null,inst_37418__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37421 = cljs.core.get.call(null,inst_37418__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37468__$1 = (function (){var statearr_37483 = state_37468;
(statearr_37483[(9)] = inst_37419);

(statearr_37483[(12)] = inst_37418__$1);

(statearr_37483[(13)] = inst_37420);

return statearr_37483;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37468__$1,(22),inst_37421);
} else {
if((state_val_37469 === (31))){
var inst_37450 = (state_37468[(2)]);
var state_37468__$1 = state_37468;
if(cljs.core.truth_(inst_37450)){
var statearr_37484_37543 = state_37468__$1;
(statearr_37484_37543[(1)] = (32));

} else {
var statearr_37485_37544 = state_37468__$1;
(statearr_37485_37544[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (32))){
var inst_37427 = (state_37468[(14)]);
var state_37468__$1 = state_37468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37468__$1,(35),out,inst_37427);
} else {
if((state_val_37469 === (33))){
var inst_37418 = (state_37468[(12)]);
var inst_37396 = inst_37418;
var state_37468__$1 = (function (){var statearr_37486 = state_37468;
(statearr_37486[(7)] = inst_37396);

return statearr_37486;
})();
var statearr_37487_37545 = state_37468__$1;
(statearr_37487_37545[(2)] = null);

(statearr_37487_37545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (13))){
var inst_37396 = (state_37468[(7)]);
var inst_37403 = inst_37396.cljs$lang$protocol_mask$partition0$;
var inst_37404 = (inst_37403 & (64));
var inst_37405 = inst_37396.cljs$core$ISeq$;
var inst_37406 = (inst_37404) || (inst_37405);
var state_37468__$1 = state_37468;
if(cljs.core.truth_(inst_37406)){
var statearr_37488_37546 = state_37468__$1;
(statearr_37488_37546[(1)] = (16));

} else {
var statearr_37489_37547 = state_37468__$1;
(statearr_37489_37547[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (22))){
var inst_37428 = (state_37468[(10)]);
var inst_37427 = (state_37468[(14)]);
var inst_37426 = (state_37468[(2)]);
var inst_37427__$1 = cljs.core.nth.call(null,inst_37426,(0),null);
var inst_37428__$1 = cljs.core.nth.call(null,inst_37426,(1),null);
var inst_37429 = (inst_37427__$1 == null);
var inst_37430 = cljs.core._EQ_.call(null,inst_37428__$1,change);
var inst_37431 = (inst_37429) || (inst_37430);
var state_37468__$1 = (function (){var statearr_37490 = state_37468;
(statearr_37490[(10)] = inst_37428__$1);

(statearr_37490[(14)] = inst_37427__$1);

return statearr_37490;
})();
if(cljs.core.truth_(inst_37431)){
var statearr_37491_37548 = state_37468__$1;
(statearr_37491_37548[(1)] = (23));

} else {
var statearr_37492_37549 = state_37468__$1;
(statearr_37492_37549[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (36))){
var inst_37418 = (state_37468[(12)]);
var inst_37396 = inst_37418;
var state_37468__$1 = (function (){var statearr_37493 = state_37468;
(statearr_37493[(7)] = inst_37396);

return statearr_37493;
})();
var statearr_37494_37550 = state_37468__$1;
(statearr_37494_37550[(2)] = null);

(statearr_37494_37550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (29))){
var inst_37442 = (state_37468[(11)]);
var state_37468__$1 = state_37468;
var statearr_37495_37551 = state_37468__$1;
(statearr_37495_37551[(2)] = inst_37442);

(statearr_37495_37551[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (6))){
var state_37468__$1 = state_37468;
var statearr_37496_37552 = state_37468__$1;
(statearr_37496_37552[(2)] = false);

(statearr_37496_37552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (28))){
var inst_37438 = (state_37468[(2)]);
var inst_37439 = calc_state.call(null);
var inst_37396 = inst_37439;
var state_37468__$1 = (function (){var statearr_37497 = state_37468;
(statearr_37497[(15)] = inst_37438);

(statearr_37497[(7)] = inst_37396);

return statearr_37497;
})();
var statearr_37498_37553 = state_37468__$1;
(statearr_37498_37553[(2)] = null);

(statearr_37498_37553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (25))){
var inst_37464 = (state_37468[(2)]);
var state_37468__$1 = state_37468;
var statearr_37499_37554 = state_37468__$1;
(statearr_37499_37554[(2)] = inst_37464);

(statearr_37499_37554[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (34))){
var inst_37462 = (state_37468[(2)]);
var state_37468__$1 = state_37468;
var statearr_37500_37555 = state_37468__$1;
(statearr_37500_37555[(2)] = inst_37462);

(statearr_37500_37555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (17))){
var state_37468__$1 = state_37468;
var statearr_37501_37556 = state_37468__$1;
(statearr_37501_37556[(2)] = false);

(statearr_37501_37556[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (3))){
var state_37468__$1 = state_37468;
var statearr_37502_37557 = state_37468__$1;
(statearr_37502_37557[(2)] = false);

(statearr_37502_37557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (12))){
var inst_37466 = (state_37468[(2)]);
var state_37468__$1 = state_37468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37468__$1,inst_37466);
} else {
if((state_val_37469 === (2))){
var inst_37372 = (state_37468[(8)]);
var inst_37377 = inst_37372.cljs$lang$protocol_mask$partition0$;
var inst_37378 = (inst_37377 & (64));
var inst_37379 = inst_37372.cljs$core$ISeq$;
var inst_37380 = (inst_37378) || (inst_37379);
var state_37468__$1 = state_37468;
if(cljs.core.truth_(inst_37380)){
var statearr_37503_37558 = state_37468__$1;
(statearr_37503_37558[(1)] = (5));

} else {
var statearr_37504_37559 = state_37468__$1;
(statearr_37504_37559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (23))){
var inst_37427 = (state_37468[(14)]);
var inst_37433 = (inst_37427 == null);
var state_37468__$1 = state_37468;
if(cljs.core.truth_(inst_37433)){
var statearr_37505_37560 = state_37468__$1;
(statearr_37505_37560[(1)] = (26));

} else {
var statearr_37506_37561 = state_37468__$1;
(statearr_37506_37561[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (35))){
var inst_37453 = (state_37468[(2)]);
var state_37468__$1 = state_37468;
if(cljs.core.truth_(inst_37453)){
var statearr_37507_37562 = state_37468__$1;
(statearr_37507_37562[(1)] = (36));

} else {
var statearr_37508_37563 = state_37468__$1;
(statearr_37508_37563[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (19))){
var inst_37396 = (state_37468[(7)]);
var inst_37415 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37396);
var state_37468__$1 = state_37468;
var statearr_37509_37564 = state_37468__$1;
(statearr_37509_37564[(2)] = inst_37415);

(statearr_37509_37564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (11))){
var inst_37396 = (state_37468[(7)]);
var inst_37400 = (inst_37396 == null);
var inst_37401 = cljs.core.not.call(null,inst_37400);
var state_37468__$1 = state_37468;
if(inst_37401){
var statearr_37510_37565 = state_37468__$1;
(statearr_37510_37565[(1)] = (13));

} else {
var statearr_37511_37566 = state_37468__$1;
(statearr_37511_37566[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (9))){
var inst_37372 = (state_37468[(8)]);
var state_37468__$1 = state_37468;
var statearr_37512_37567 = state_37468__$1;
(statearr_37512_37567[(2)] = inst_37372);

(statearr_37512_37567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (5))){
var state_37468__$1 = state_37468;
var statearr_37513_37568 = state_37468__$1;
(statearr_37513_37568[(2)] = true);

(statearr_37513_37568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (14))){
var state_37468__$1 = state_37468;
var statearr_37514_37569 = state_37468__$1;
(statearr_37514_37569[(2)] = false);

(statearr_37514_37569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (26))){
var inst_37428 = (state_37468[(10)]);
var inst_37435 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37428);
var state_37468__$1 = state_37468;
var statearr_37515_37570 = state_37468__$1;
(statearr_37515_37570[(2)] = inst_37435);

(statearr_37515_37570[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (16))){
var state_37468__$1 = state_37468;
var statearr_37516_37571 = state_37468__$1;
(statearr_37516_37571[(2)] = true);

(statearr_37516_37571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (38))){
var inst_37458 = (state_37468[(2)]);
var state_37468__$1 = state_37468;
var statearr_37517_37572 = state_37468__$1;
(statearr_37517_37572[(2)] = inst_37458);

(statearr_37517_37572[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (30))){
var inst_37419 = (state_37468[(9)]);
var inst_37428 = (state_37468[(10)]);
var inst_37420 = (state_37468[(13)]);
var inst_37445 = cljs.core.empty_QMARK_.call(null,inst_37419);
var inst_37446 = inst_37420.call(null,inst_37428);
var inst_37447 = cljs.core.not.call(null,inst_37446);
var inst_37448 = (inst_37445) && (inst_37447);
var state_37468__$1 = state_37468;
var statearr_37518_37573 = state_37468__$1;
(statearr_37518_37573[(2)] = inst_37448);

(statearr_37518_37573[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (10))){
var inst_37372 = (state_37468[(8)]);
var inst_37392 = (state_37468[(2)]);
var inst_37393 = cljs.core.get.call(null,inst_37392,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37394 = cljs.core.get.call(null,inst_37392,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37395 = cljs.core.get.call(null,inst_37392,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37396 = inst_37372;
var state_37468__$1 = (function (){var statearr_37519 = state_37468;
(statearr_37519[(16)] = inst_37395);

(statearr_37519[(17)] = inst_37394);

(statearr_37519[(18)] = inst_37393);

(statearr_37519[(7)] = inst_37396);

return statearr_37519;
})();
var statearr_37520_37574 = state_37468__$1;
(statearr_37520_37574[(2)] = null);

(statearr_37520_37574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (18))){
var inst_37410 = (state_37468[(2)]);
var state_37468__$1 = state_37468;
var statearr_37521_37575 = state_37468__$1;
(statearr_37521_37575[(2)] = inst_37410);

(statearr_37521_37575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (37))){
var state_37468__$1 = state_37468;
var statearr_37522_37576 = state_37468__$1;
(statearr_37522_37576[(2)] = null);

(statearr_37522_37576[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37469 === (8))){
var inst_37372 = (state_37468[(8)]);
var inst_37389 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37372);
var state_37468__$1 = state_37468;
var statearr_37523_37577 = state_37468__$1;
(statearr_37523_37577[(2)] = inst_37389);

(statearr_37523_37577[(1)] = (10));


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
});})(c__35798__auto___37531,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35686__auto__,c__35798__auto___37531,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35687__auto__ = null;
var cljs$core$async$mix_$_state_machine__35687__auto____0 = (function (){
var statearr_37527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37527[(0)] = cljs$core$async$mix_$_state_machine__35687__auto__);

(statearr_37527[(1)] = (1));

return statearr_37527;
});
var cljs$core$async$mix_$_state_machine__35687__auto____1 = (function (state_37468){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_37468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e37528){if((e37528 instanceof Object)){
var ex__35690__auto__ = e37528;
var statearr_37529_37578 = state_37468;
(statearr_37529_37578[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37579 = state_37468;
state_37468 = G__37579;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35687__auto__ = function(state_37468){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35687__auto____1.call(this,state_37468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35687__auto____0;
cljs$core$async$mix_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35687__auto____1;
return cljs$core$async$mix_$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___37531,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35800__auto__ = (function (){var statearr_37530 = f__35799__auto__.call(null);
(statearr_37530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___37531);

return statearr_37530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___37531,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__31482__auto__ = (((p == null))?null:p);
var m__31483__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31482__auto__)]);
if(!((m__31483__auto__ == null))){
return m__31483__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31483__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31483__auto____$1 == null))){
return m__31483__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__31482__auto__ = (((p == null))?null:p);
var m__31483__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31482__auto__)]);
if(!((m__31483__auto__ == null))){
return m__31483__auto__.call(null,p,v,ch);
} else {
var m__31483__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31483__auto____$1 == null))){
return m__31483__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args37580 = [];
var len__31894__auto___37583 = arguments.length;
var i__31895__auto___37584 = (0);
while(true){
if((i__31895__auto___37584 < len__31894__auto___37583)){
args37580.push((arguments[i__31895__auto___37584]));

var G__37585 = (i__31895__auto___37584 + (1));
i__31895__auto___37584 = G__37585;
continue;
} else {
}
break;
}

var G__37582 = args37580.length;
switch (G__37582) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37580.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__31482__auto__ = (((p == null))?null:p);
var m__31483__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31482__auto__)]);
if(!((m__31483__auto__ == null))){
return m__31483__auto__.call(null,p);
} else {
var m__31483__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31483__auto____$1 == null))){
return m__31483__auto____$1.call(null,p);
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
var x__31482__auto__ = (((p == null))?null:p);
var m__31483__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31482__auto__)]);
if(!((m__31483__auto__ == null))){
return m__31483__auto__.call(null,p,v);
} else {
var m__31483__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31483__auto____$1 == null))){
return m__31483__auto____$1.call(null,p,v);
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
var args37588 = [];
var len__31894__auto___37713 = arguments.length;
var i__31895__auto___37714 = (0);
while(true){
if((i__31895__auto___37714 < len__31894__auto___37713)){
args37588.push((arguments[i__31895__auto___37714]));

var G__37715 = (i__31895__auto___37714 + (1));
i__31895__auto___37714 = G__37715;
continue;
} else {
}
break;
}

var G__37590 = args37588.length;
switch (G__37590) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37588.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30819__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30819__auto__)){
return or__30819__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30819__auto__,mults){
return (function (p1__37587_SHARP_){
if(cljs.core.truth_(p1__37587_SHARP_.call(null,topic))){
return p1__37587_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37587_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30819__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37591 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37592){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37592 = meta37592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37593,meta37592__$1){
var self__ = this;
var _37593__$1 = this;
return (new cljs.core.async.t_cljs$core$async37591(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37592__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37593){
var self__ = this;
var _37593__$1 = this;
return self__.meta37592;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37591.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37592","meta37592",-2085281040,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37591";

cljs.core.async.t_cljs$core$async37591.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31425__auto__,writer__31426__auto__,opt__31427__auto__){
return cljs.core._write.call(null,writer__31426__auto__,"cljs.core.async/t_cljs$core$async37591");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37591 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37591(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37592){
return (new cljs.core.async.t_cljs$core$async37591(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37592));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37591(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35798__auto___37717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___37717,mults,ensure_mult,p){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___37717,mults,ensure_mult,p){
return (function (state_37665){
var state_val_37666 = (state_37665[(1)]);
if((state_val_37666 === (7))){
var inst_37661 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
var statearr_37667_37718 = state_37665__$1;
(statearr_37667_37718[(2)] = inst_37661);

(statearr_37667_37718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (20))){
var state_37665__$1 = state_37665;
var statearr_37668_37719 = state_37665__$1;
(statearr_37668_37719[(2)] = null);

(statearr_37668_37719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (1))){
var state_37665__$1 = state_37665;
var statearr_37669_37720 = state_37665__$1;
(statearr_37669_37720[(2)] = null);

(statearr_37669_37720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (24))){
var inst_37644 = (state_37665[(7)]);
var inst_37653 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37644);
var state_37665__$1 = state_37665;
var statearr_37670_37721 = state_37665__$1;
(statearr_37670_37721[(2)] = inst_37653);

(statearr_37670_37721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (4))){
var inst_37596 = (state_37665[(8)]);
var inst_37596__$1 = (state_37665[(2)]);
var inst_37597 = (inst_37596__$1 == null);
var state_37665__$1 = (function (){var statearr_37671 = state_37665;
(statearr_37671[(8)] = inst_37596__$1);

return statearr_37671;
})();
if(cljs.core.truth_(inst_37597)){
var statearr_37672_37722 = state_37665__$1;
(statearr_37672_37722[(1)] = (5));

} else {
var statearr_37673_37723 = state_37665__$1;
(statearr_37673_37723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (15))){
var inst_37638 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
var statearr_37674_37724 = state_37665__$1;
(statearr_37674_37724[(2)] = inst_37638);

(statearr_37674_37724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (21))){
var inst_37658 = (state_37665[(2)]);
var state_37665__$1 = (function (){var statearr_37675 = state_37665;
(statearr_37675[(9)] = inst_37658);

return statearr_37675;
})();
var statearr_37676_37725 = state_37665__$1;
(statearr_37676_37725[(2)] = null);

(statearr_37676_37725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (13))){
var inst_37620 = (state_37665[(10)]);
var inst_37622 = cljs.core.chunked_seq_QMARK_.call(null,inst_37620);
var state_37665__$1 = state_37665;
if(inst_37622){
var statearr_37677_37726 = state_37665__$1;
(statearr_37677_37726[(1)] = (16));

} else {
var statearr_37678_37727 = state_37665__$1;
(statearr_37678_37727[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (22))){
var inst_37650 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
if(cljs.core.truth_(inst_37650)){
var statearr_37679_37728 = state_37665__$1;
(statearr_37679_37728[(1)] = (23));

} else {
var statearr_37680_37729 = state_37665__$1;
(statearr_37680_37729[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (6))){
var inst_37646 = (state_37665[(11)]);
var inst_37596 = (state_37665[(8)]);
var inst_37644 = (state_37665[(7)]);
var inst_37644__$1 = topic_fn.call(null,inst_37596);
var inst_37645 = cljs.core.deref.call(null,mults);
var inst_37646__$1 = cljs.core.get.call(null,inst_37645,inst_37644__$1);
var state_37665__$1 = (function (){var statearr_37681 = state_37665;
(statearr_37681[(11)] = inst_37646__$1);

(statearr_37681[(7)] = inst_37644__$1);

return statearr_37681;
})();
if(cljs.core.truth_(inst_37646__$1)){
var statearr_37682_37730 = state_37665__$1;
(statearr_37682_37730[(1)] = (19));

} else {
var statearr_37683_37731 = state_37665__$1;
(statearr_37683_37731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (25))){
var inst_37655 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
var statearr_37684_37732 = state_37665__$1;
(statearr_37684_37732[(2)] = inst_37655);

(statearr_37684_37732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (17))){
var inst_37620 = (state_37665[(10)]);
var inst_37629 = cljs.core.first.call(null,inst_37620);
var inst_37630 = cljs.core.async.muxch_STAR_.call(null,inst_37629);
var inst_37631 = cljs.core.async.close_BANG_.call(null,inst_37630);
var inst_37632 = cljs.core.next.call(null,inst_37620);
var inst_37606 = inst_37632;
var inst_37607 = null;
var inst_37608 = (0);
var inst_37609 = (0);
var state_37665__$1 = (function (){var statearr_37685 = state_37665;
(statearr_37685[(12)] = inst_37607);

(statearr_37685[(13)] = inst_37608);

(statearr_37685[(14)] = inst_37631);

(statearr_37685[(15)] = inst_37606);

(statearr_37685[(16)] = inst_37609);

return statearr_37685;
})();
var statearr_37686_37733 = state_37665__$1;
(statearr_37686_37733[(2)] = null);

(statearr_37686_37733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (3))){
var inst_37663 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37665__$1,inst_37663);
} else {
if((state_val_37666 === (12))){
var inst_37640 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
var statearr_37687_37734 = state_37665__$1;
(statearr_37687_37734[(2)] = inst_37640);

(statearr_37687_37734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (2))){
var state_37665__$1 = state_37665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37665__$1,(4),ch);
} else {
if((state_val_37666 === (23))){
var state_37665__$1 = state_37665;
var statearr_37688_37735 = state_37665__$1;
(statearr_37688_37735[(2)] = null);

(statearr_37688_37735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (19))){
var inst_37646 = (state_37665[(11)]);
var inst_37596 = (state_37665[(8)]);
var inst_37648 = cljs.core.async.muxch_STAR_.call(null,inst_37646);
var state_37665__$1 = state_37665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37665__$1,(22),inst_37648,inst_37596);
} else {
if((state_val_37666 === (11))){
var inst_37620 = (state_37665[(10)]);
var inst_37606 = (state_37665[(15)]);
var inst_37620__$1 = cljs.core.seq.call(null,inst_37606);
var state_37665__$1 = (function (){var statearr_37689 = state_37665;
(statearr_37689[(10)] = inst_37620__$1);

return statearr_37689;
})();
if(inst_37620__$1){
var statearr_37690_37736 = state_37665__$1;
(statearr_37690_37736[(1)] = (13));

} else {
var statearr_37691_37737 = state_37665__$1;
(statearr_37691_37737[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (9))){
var inst_37642 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
var statearr_37692_37738 = state_37665__$1;
(statearr_37692_37738[(2)] = inst_37642);

(statearr_37692_37738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (5))){
var inst_37603 = cljs.core.deref.call(null,mults);
var inst_37604 = cljs.core.vals.call(null,inst_37603);
var inst_37605 = cljs.core.seq.call(null,inst_37604);
var inst_37606 = inst_37605;
var inst_37607 = null;
var inst_37608 = (0);
var inst_37609 = (0);
var state_37665__$1 = (function (){var statearr_37693 = state_37665;
(statearr_37693[(12)] = inst_37607);

(statearr_37693[(13)] = inst_37608);

(statearr_37693[(15)] = inst_37606);

(statearr_37693[(16)] = inst_37609);

return statearr_37693;
})();
var statearr_37694_37739 = state_37665__$1;
(statearr_37694_37739[(2)] = null);

(statearr_37694_37739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (14))){
var state_37665__$1 = state_37665;
var statearr_37698_37740 = state_37665__$1;
(statearr_37698_37740[(2)] = null);

(statearr_37698_37740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (16))){
var inst_37620 = (state_37665[(10)]);
var inst_37624 = cljs.core.chunk_first.call(null,inst_37620);
var inst_37625 = cljs.core.chunk_rest.call(null,inst_37620);
var inst_37626 = cljs.core.count.call(null,inst_37624);
var inst_37606 = inst_37625;
var inst_37607 = inst_37624;
var inst_37608 = inst_37626;
var inst_37609 = (0);
var state_37665__$1 = (function (){var statearr_37699 = state_37665;
(statearr_37699[(12)] = inst_37607);

(statearr_37699[(13)] = inst_37608);

(statearr_37699[(15)] = inst_37606);

(statearr_37699[(16)] = inst_37609);

return statearr_37699;
})();
var statearr_37700_37741 = state_37665__$1;
(statearr_37700_37741[(2)] = null);

(statearr_37700_37741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (10))){
var inst_37607 = (state_37665[(12)]);
var inst_37608 = (state_37665[(13)]);
var inst_37606 = (state_37665[(15)]);
var inst_37609 = (state_37665[(16)]);
var inst_37614 = cljs.core._nth.call(null,inst_37607,inst_37609);
var inst_37615 = cljs.core.async.muxch_STAR_.call(null,inst_37614);
var inst_37616 = cljs.core.async.close_BANG_.call(null,inst_37615);
var inst_37617 = (inst_37609 + (1));
var tmp37695 = inst_37607;
var tmp37696 = inst_37608;
var tmp37697 = inst_37606;
var inst_37606__$1 = tmp37697;
var inst_37607__$1 = tmp37695;
var inst_37608__$1 = tmp37696;
var inst_37609__$1 = inst_37617;
var state_37665__$1 = (function (){var statearr_37701 = state_37665;
(statearr_37701[(12)] = inst_37607__$1);

(statearr_37701[(13)] = inst_37608__$1);

(statearr_37701[(15)] = inst_37606__$1);

(statearr_37701[(17)] = inst_37616);

(statearr_37701[(16)] = inst_37609__$1);

return statearr_37701;
})();
var statearr_37702_37742 = state_37665__$1;
(statearr_37702_37742[(2)] = null);

(statearr_37702_37742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (18))){
var inst_37635 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
var statearr_37703_37743 = state_37665__$1;
(statearr_37703_37743[(2)] = inst_37635);

(statearr_37703_37743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (8))){
var inst_37608 = (state_37665[(13)]);
var inst_37609 = (state_37665[(16)]);
var inst_37611 = (inst_37609 < inst_37608);
var inst_37612 = inst_37611;
var state_37665__$1 = state_37665;
if(cljs.core.truth_(inst_37612)){
var statearr_37704_37744 = state_37665__$1;
(statearr_37704_37744[(1)] = (10));

} else {
var statearr_37705_37745 = state_37665__$1;
(statearr_37705_37745[(1)] = (11));

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
});})(c__35798__auto___37717,mults,ensure_mult,p))
;
return ((function (switch__35686__auto__,c__35798__auto___37717,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35687__auto__ = null;
var cljs$core$async$state_machine__35687__auto____0 = (function (){
var statearr_37709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37709[(0)] = cljs$core$async$state_machine__35687__auto__);

(statearr_37709[(1)] = (1));

return statearr_37709;
});
var cljs$core$async$state_machine__35687__auto____1 = (function (state_37665){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_37665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e37710){if((e37710 instanceof Object)){
var ex__35690__auto__ = e37710;
var statearr_37711_37746 = state_37665;
(statearr_37711_37746[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37747 = state_37665;
state_37665 = G__37747;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$state_machine__35687__auto__ = function(state_37665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35687__auto____1.call(this,state_37665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35687__auto____0;
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35687__auto____1;
return cljs$core$async$state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___37717,mults,ensure_mult,p))
})();
var state__35800__auto__ = (function (){var statearr_37712 = f__35799__auto__.call(null);
(statearr_37712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___37717);

return statearr_37712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___37717,mults,ensure_mult,p))
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
var args37748 = [];
var len__31894__auto___37751 = arguments.length;
var i__31895__auto___37752 = (0);
while(true){
if((i__31895__auto___37752 < len__31894__auto___37751)){
args37748.push((arguments[i__31895__auto___37752]));

var G__37753 = (i__31895__auto___37752 + (1));
i__31895__auto___37752 = G__37753;
continue;
} else {
}
break;
}

var G__37750 = args37748.length;
switch (G__37750) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37748.length)].join('')));

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
var args37755 = [];
var len__31894__auto___37758 = arguments.length;
var i__31895__auto___37759 = (0);
while(true){
if((i__31895__auto___37759 < len__31894__auto___37758)){
args37755.push((arguments[i__31895__auto___37759]));

var G__37760 = (i__31895__auto___37759 + (1));
i__31895__auto___37759 = G__37760;
continue;
} else {
}
break;
}

var G__37757 = args37755.length;
switch (G__37757) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37755.length)].join('')));

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
var args37762 = [];
var len__31894__auto___37833 = arguments.length;
var i__31895__auto___37834 = (0);
while(true){
if((i__31895__auto___37834 < len__31894__auto___37833)){
args37762.push((arguments[i__31895__auto___37834]));

var G__37835 = (i__31895__auto___37834 + (1));
i__31895__auto___37834 = G__37835;
continue;
} else {
}
break;
}

var G__37764 = args37762.length;
switch (G__37764) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37762.length)].join('')));

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
var c__35798__auto___37837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___37837,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___37837,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37803){
var state_val_37804 = (state_37803[(1)]);
if((state_val_37804 === (7))){
var state_37803__$1 = state_37803;
var statearr_37805_37838 = state_37803__$1;
(statearr_37805_37838[(2)] = null);

(statearr_37805_37838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (1))){
var state_37803__$1 = state_37803;
var statearr_37806_37839 = state_37803__$1;
(statearr_37806_37839[(2)] = null);

(statearr_37806_37839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (4))){
var inst_37767 = (state_37803[(7)]);
var inst_37769 = (inst_37767 < cnt);
var state_37803__$1 = state_37803;
if(cljs.core.truth_(inst_37769)){
var statearr_37807_37840 = state_37803__$1;
(statearr_37807_37840[(1)] = (6));

} else {
var statearr_37808_37841 = state_37803__$1;
(statearr_37808_37841[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (15))){
var inst_37799 = (state_37803[(2)]);
var state_37803__$1 = state_37803;
var statearr_37809_37842 = state_37803__$1;
(statearr_37809_37842[(2)] = inst_37799);

(statearr_37809_37842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (13))){
var inst_37792 = cljs.core.async.close_BANG_.call(null,out);
var state_37803__$1 = state_37803;
var statearr_37810_37843 = state_37803__$1;
(statearr_37810_37843[(2)] = inst_37792);

(statearr_37810_37843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (6))){
var state_37803__$1 = state_37803;
var statearr_37811_37844 = state_37803__$1;
(statearr_37811_37844[(2)] = null);

(statearr_37811_37844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (3))){
var inst_37801 = (state_37803[(2)]);
var state_37803__$1 = state_37803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37803__$1,inst_37801);
} else {
if((state_val_37804 === (12))){
var inst_37789 = (state_37803[(8)]);
var inst_37789__$1 = (state_37803[(2)]);
var inst_37790 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37789__$1);
var state_37803__$1 = (function (){var statearr_37812 = state_37803;
(statearr_37812[(8)] = inst_37789__$1);

return statearr_37812;
})();
if(cljs.core.truth_(inst_37790)){
var statearr_37813_37845 = state_37803__$1;
(statearr_37813_37845[(1)] = (13));

} else {
var statearr_37814_37846 = state_37803__$1;
(statearr_37814_37846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (2))){
var inst_37766 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37767 = (0);
var state_37803__$1 = (function (){var statearr_37815 = state_37803;
(statearr_37815[(9)] = inst_37766);

(statearr_37815[(7)] = inst_37767);

return statearr_37815;
})();
var statearr_37816_37847 = state_37803__$1;
(statearr_37816_37847[(2)] = null);

(statearr_37816_37847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (11))){
var inst_37767 = (state_37803[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37803,(10),Object,null,(9));
var inst_37776 = chs__$1.call(null,inst_37767);
var inst_37777 = done.call(null,inst_37767);
var inst_37778 = cljs.core.async.take_BANG_.call(null,inst_37776,inst_37777);
var state_37803__$1 = state_37803;
var statearr_37817_37848 = state_37803__$1;
(statearr_37817_37848[(2)] = inst_37778);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37803__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (9))){
var inst_37767 = (state_37803[(7)]);
var inst_37780 = (state_37803[(2)]);
var inst_37781 = (inst_37767 + (1));
var inst_37767__$1 = inst_37781;
var state_37803__$1 = (function (){var statearr_37818 = state_37803;
(statearr_37818[(7)] = inst_37767__$1);

(statearr_37818[(10)] = inst_37780);

return statearr_37818;
})();
var statearr_37819_37849 = state_37803__$1;
(statearr_37819_37849[(2)] = null);

(statearr_37819_37849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (5))){
var inst_37787 = (state_37803[(2)]);
var state_37803__$1 = (function (){var statearr_37820 = state_37803;
(statearr_37820[(11)] = inst_37787);

return statearr_37820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37803__$1,(12),dchan);
} else {
if((state_val_37804 === (14))){
var inst_37789 = (state_37803[(8)]);
var inst_37794 = cljs.core.apply.call(null,f,inst_37789);
var state_37803__$1 = state_37803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37803__$1,(16),out,inst_37794);
} else {
if((state_val_37804 === (16))){
var inst_37796 = (state_37803[(2)]);
var state_37803__$1 = (function (){var statearr_37821 = state_37803;
(statearr_37821[(12)] = inst_37796);

return statearr_37821;
})();
var statearr_37822_37850 = state_37803__$1;
(statearr_37822_37850[(2)] = null);

(statearr_37822_37850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (10))){
var inst_37771 = (state_37803[(2)]);
var inst_37772 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37803__$1 = (function (){var statearr_37823 = state_37803;
(statearr_37823[(13)] = inst_37771);

return statearr_37823;
})();
var statearr_37824_37851 = state_37803__$1;
(statearr_37824_37851[(2)] = inst_37772);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37803__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (8))){
var inst_37785 = (state_37803[(2)]);
var state_37803__$1 = state_37803;
var statearr_37825_37852 = state_37803__$1;
(statearr_37825_37852[(2)] = inst_37785);

(statearr_37825_37852[(1)] = (5));


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
});})(c__35798__auto___37837,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35686__auto__,c__35798__auto___37837,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35687__auto__ = null;
var cljs$core$async$state_machine__35687__auto____0 = (function (){
var statearr_37829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37829[(0)] = cljs$core$async$state_machine__35687__auto__);

(statearr_37829[(1)] = (1));

return statearr_37829;
});
var cljs$core$async$state_machine__35687__auto____1 = (function (state_37803){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_37803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e37830){if((e37830 instanceof Object)){
var ex__35690__auto__ = e37830;
var statearr_37831_37853 = state_37803;
(statearr_37831_37853[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37854 = state_37803;
state_37803 = G__37854;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$state_machine__35687__auto__ = function(state_37803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35687__auto____1.call(this,state_37803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35687__auto____0;
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35687__auto____1;
return cljs$core$async$state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___37837,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35800__auto__ = (function (){var statearr_37832 = f__35799__auto__.call(null);
(statearr_37832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___37837);

return statearr_37832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___37837,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args37856 = [];
var len__31894__auto___37914 = arguments.length;
var i__31895__auto___37915 = (0);
while(true){
if((i__31895__auto___37915 < len__31894__auto___37914)){
args37856.push((arguments[i__31895__auto___37915]));

var G__37916 = (i__31895__auto___37915 + (1));
i__31895__auto___37915 = G__37916;
continue;
} else {
}
break;
}

var G__37858 = args37856.length;
switch (G__37858) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37856.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35798__auto___37918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___37918,out){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___37918,out){
return (function (state_37890){
var state_val_37891 = (state_37890[(1)]);
if((state_val_37891 === (7))){
var inst_37869 = (state_37890[(7)]);
var inst_37870 = (state_37890[(8)]);
var inst_37869__$1 = (state_37890[(2)]);
var inst_37870__$1 = cljs.core.nth.call(null,inst_37869__$1,(0),null);
var inst_37871 = cljs.core.nth.call(null,inst_37869__$1,(1),null);
var inst_37872 = (inst_37870__$1 == null);
var state_37890__$1 = (function (){var statearr_37892 = state_37890;
(statearr_37892[(7)] = inst_37869__$1);

(statearr_37892[(9)] = inst_37871);

(statearr_37892[(8)] = inst_37870__$1);

return statearr_37892;
})();
if(cljs.core.truth_(inst_37872)){
var statearr_37893_37919 = state_37890__$1;
(statearr_37893_37919[(1)] = (8));

} else {
var statearr_37894_37920 = state_37890__$1;
(statearr_37894_37920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37891 === (1))){
var inst_37859 = cljs.core.vec.call(null,chs);
var inst_37860 = inst_37859;
var state_37890__$1 = (function (){var statearr_37895 = state_37890;
(statearr_37895[(10)] = inst_37860);

return statearr_37895;
})();
var statearr_37896_37921 = state_37890__$1;
(statearr_37896_37921[(2)] = null);

(statearr_37896_37921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37891 === (4))){
var inst_37860 = (state_37890[(10)]);
var state_37890__$1 = state_37890;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37890__$1,(7),inst_37860);
} else {
if((state_val_37891 === (6))){
var inst_37886 = (state_37890[(2)]);
var state_37890__$1 = state_37890;
var statearr_37897_37922 = state_37890__$1;
(statearr_37897_37922[(2)] = inst_37886);

(statearr_37897_37922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37891 === (3))){
var inst_37888 = (state_37890[(2)]);
var state_37890__$1 = state_37890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37890__$1,inst_37888);
} else {
if((state_val_37891 === (2))){
var inst_37860 = (state_37890[(10)]);
var inst_37862 = cljs.core.count.call(null,inst_37860);
var inst_37863 = (inst_37862 > (0));
var state_37890__$1 = state_37890;
if(cljs.core.truth_(inst_37863)){
var statearr_37899_37923 = state_37890__$1;
(statearr_37899_37923[(1)] = (4));

} else {
var statearr_37900_37924 = state_37890__$1;
(statearr_37900_37924[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37891 === (11))){
var inst_37860 = (state_37890[(10)]);
var inst_37879 = (state_37890[(2)]);
var tmp37898 = inst_37860;
var inst_37860__$1 = tmp37898;
var state_37890__$1 = (function (){var statearr_37901 = state_37890;
(statearr_37901[(10)] = inst_37860__$1);

(statearr_37901[(11)] = inst_37879);

return statearr_37901;
})();
var statearr_37902_37925 = state_37890__$1;
(statearr_37902_37925[(2)] = null);

(statearr_37902_37925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37891 === (9))){
var inst_37870 = (state_37890[(8)]);
var state_37890__$1 = state_37890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37890__$1,(11),out,inst_37870);
} else {
if((state_val_37891 === (5))){
var inst_37884 = cljs.core.async.close_BANG_.call(null,out);
var state_37890__$1 = state_37890;
var statearr_37903_37926 = state_37890__$1;
(statearr_37903_37926[(2)] = inst_37884);

(statearr_37903_37926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37891 === (10))){
var inst_37882 = (state_37890[(2)]);
var state_37890__$1 = state_37890;
var statearr_37904_37927 = state_37890__$1;
(statearr_37904_37927[(2)] = inst_37882);

(statearr_37904_37927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37891 === (8))){
var inst_37869 = (state_37890[(7)]);
var inst_37871 = (state_37890[(9)]);
var inst_37860 = (state_37890[(10)]);
var inst_37870 = (state_37890[(8)]);
var inst_37874 = (function (){var cs = inst_37860;
var vec__37865 = inst_37869;
var v = inst_37870;
var c = inst_37871;
return ((function (cs,vec__37865,v,c,inst_37869,inst_37871,inst_37860,inst_37870,state_val_37891,c__35798__auto___37918,out){
return (function (p1__37855_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37855_SHARP_);
});
;})(cs,vec__37865,v,c,inst_37869,inst_37871,inst_37860,inst_37870,state_val_37891,c__35798__auto___37918,out))
})();
var inst_37875 = cljs.core.filterv.call(null,inst_37874,inst_37860);
var inst_37860__$1 = inst_37875;
var state_37890__$1 = (function (){var statearr_37905 = state_37890;
(statearr_37905[(10)] = inst_37860__$1);

return statearr_37905;
})();
var statearr_37906_37928 = state_37890__$1;
(statearr_37906_37928[(2)] = null);

(statearr_37906_37928[(1)] = (2));


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
});})(c__35798__auto___37918,out))
;
return ((function (switch__35686__auto__,c__35798__auto___37918,out){
return (function() {
var cljs$core$async$state_machine__35687__auto__ = null;
var cljs$core$async$state_machine__35687__auto____0 = (function (){
var statearr_37910 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37910[(0)] = cljs$core$async$state_machine__35687__auto__);

(statearr_37910[(1)] = (1));

return statearr_37910;
});
var cljs$core$async$state_machine__35687__auto____1 = (function (state_37890){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_37890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e37911){if((e37911 instanceof Object)){
var ex__35690__auto__ = e37911;
var statearr_37912_37929 = state_37890;
(statearr_37912_37929[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37930 = state_37890;
state_37890 = G__37930;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$state_machine__35687__auto__ = function(state_37890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35687__auto____1.call(this,state_37890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35687__auto____0;
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35687__auto____1;
return cljs$core$async$state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___37918,out))
})();
var state__35800__auto__ = (function (){var statearr_37913 = f__35799__auto__.call(null);
(statearr_37913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___37918);

return statearr_37913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___37918,out))
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
var args37931 = [];
var len__31894__auto___37980 = arguments.length;
var i__31895__auto___37981 = (0);
while(true){
if((i__31895__auto___37981 < len__31894__auto___37980)){
args37931.push((arguments[i__31895__auto___37981]));

var G__37982 = (i__31895__auto___37981 + (1));
i__31895__auto___37981 = G__37982;
continue;
} else {
}
break;
}

var G__37933 = args37931.length;
switch (G__37933) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37931.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35798__auto___37984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___37984,out){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___37984,out){
return (function (state_37957){
var state_val_37958 = (state_37957[(1)]);
if((state_val_37958 === (7))){
var inst_37939 = (state_37957[(7)]);
var inst_37939__$1 = (state_37957[(2)]);
var inst_37940 = (inst_37939__$1 == null);
var inst_37941 = cljs.core.not.call(null,inst_37940);
var state_37957__$1 = (function (){var statearr_37959 = state_37957;
(statearr_37959[(7)] = inst_37939__$1);

return statearr_37959;
})();
if(inst_37941){
var statearr_37960_37985 = state_37957__$1;
(statearr_37960_37985[(1)] = (8));

} else {
var statearr_37961_37986 = state_37957__$1;
(statearr_37961_37986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (1))){
var inst_37934 = (0);
var state_37957__$1 = (function (){var statearr_37962 = state_37957;
(statearr_37962[(8)] = inst_37934);

return statearr_37962;
})();
var statearr_37963_37987 = state_37957__$1;
(statearr_37963_37987[(2)] = null);

(statearr_37963_37987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (4))){
var state_37957__$1 = state_37957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37957__$1,(7),ch);
} else {
if((state_val_37958 === (6))){
var inst_37952 = (state_37957[(2)]);
var state_37957__$1 = state_37957;
var statearr_37964_37988 = state_37957__$1;
(statearr_37964_37988[(2)] = inst_37952);

(statearr_37964_37988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (3))){
var inst_37954 = (state_37957[(2)]);
var inst_37955 = cljs.core.async.close_BANG_.call(null,out);
var state_37957__$1 = (function (){var statearr_37965 = state_37957;
(statearr_37965[(9)] = inst_37954);

return statearr_37965;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37957__$1,inst_37955);
} else {
if((state_val_37958 === (2))){
var inst_37934 = (state_37957[(8)]);
var inst_37936 = (inst_37934 < n);
var state_37957__$1 = state_37957;
if(cljs.core.truth_(inst_37936)){
var statearr_37966_37989 = state_37957__$1;
(statearr_37966_37989[(1)] = (4));

} else {
var statearr_37967_37990 = state_37957__$1;
(statearr_37967_37990[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (11))){
var inst_37934 = (state_37957[(8)]);
var inst_37944 = (state_37957[(2)]);
var inst_37945 = (inst_37934 + (1));
var inst_37934__$1 = inst_37945;
var state_37957__$1 = (function (){var statearr_37968 = state_37957;
(statearr_37968[(10)] = inst_37944);

(statearr_37968[(8)] = inst_37934__$1);

return statearr_37968;
})();
var statearr_37969_37991 = state_37957__$1;
(statearr_37969_37991[(2)] = null);

(statearr_37969_37991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (9))){
var state_37957__$1 = state_37957;
var statearr_37970_37992 = state_37957__$1;
(statearr_37970_37992[(2)] = null);

(statearr_37970_37992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (5))){
var state_37957__$1 = state_37957;
var statearr_37971_37993 = state_37957__$1;
(statearr_37971_37993[(2)] = null);

(statearr_37971_37993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (10))){
var inst_37949 = (state_37957[(2)]);
var state_37957__$1 = state_37957;
var statearr_37972_37994 = state_37957__$1;
(statearr_37972_37994[(2)] = inst_37949);

(statearr_37972_37994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (8))){
var inst_37939 = (state_37957[(7)]);
var state_37957__$1 = state_37957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37957__$1,(11),out,inst_37939);
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
});})(c__35798__auto___37984,out))
;
return ((function (switch__35686__auto__,c__35798__auto___37984,out){
return (function() {
var cljs$core$async$state_machine__35687__auto__ = null;
var cljs$core$async$state_machine__35687__auto____0 = (function (){
var statearr_37976 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37976[(0)] = cljs$core$async$state_machine__35687__auto__);

(statearr_37976[(1)] = (1));

return statearr_37976;
});
var cljs$core$async$state_machine__35687__auto____1 = (function (state_37957){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_37957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e37977){if((e37977 instanceof Object)){
var ex__35690__auto__ = e37977;
var statearr_37978_37995 = state_37957;
(statearr_37978_37995[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37996 = state_37957;
state_37957 = G__37996;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$state_machine__35687__auto__ = function(state_37957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35687__auto____1.call(this,state_37957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35687__auto____0;
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35687__auto____1;
return cljs$core$async$state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___37984,out))
})();
var state__35800__auto__ = (function (){var statearr_37979 = f__35799__auto__.call(null);
(statearr_37979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___37984);

return statearr_37979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___37984,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38004 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38004 = (function (map_LT_,f,ch,meta38005){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38005 = meta38005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38006,meta38005__$1){
var self__ = this;
var _38006__$1 = this;
return (new cljs.core.async.t_cljs$core$async38004(self__.map_LT_,self__.f,self__.ch,meta38005__$1));
});

cljs.core.async.t_cljs$core$async38004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38006){
var self__ = this;
var _38006__$1 = this;
return self__.meta38005;
});

cljs.core.async.t_cljs$core$async38004.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38004.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38004.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38004.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38004.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38007 = (function (map_LT_,f,ch,meta38005,_,fn1,meta38008){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38005 = meta38005;
this._ = _;
this.fn1 = fn1;
this.meta38008 = meta38008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38009,meta38008__$1){
var self__ = this;
var _38009__$1 = this;
return (new cljs.core.async.t_cljs$core$async38007(self__.map_LT_,self__.f,self__.ch,self__.meta38005,self__._,self__.fn1,meta38008__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38009){
var self__ = this;
var _38009__$1 = this;
return self__.meta38008;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37997_SHARP_){
return f1.call(null,(((p1__37997_SHARP_ == null))?null:self__.f.call(null,p1__37997_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38007.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38005","meta38005",740206934,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38004","cljs.core.async/t_cljs$core$async38004",-1564106987,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38008","meta38008",996053954,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38007";

cljs.core.async.t_cljs$core$async38007.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31425__auto__,writer__31426__auto__,opt__31427__auto__){
return cljs.core._write.call(null,writer__31426__auto__,"cljs.core.async/t_cljs$core$async38007");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38007 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38007(map_LT___$1,f__$1,ch__$1,meta38005__$1,___$2,fn1__$1,meta38008){
return (new cljs.core.async.t_cljs$core$async38007(map_LT___$1,f__$1,ch__$1,meta38005__$1,___$2,fn1__$1,meta38008));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38007(self__.map_LT_,self__.f,self__.ch,self__.meta38005,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30807__auto__ = ret;
if(cljs.core.truth_(and__30807__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30807__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38004.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38004.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38005","meta38005",740206934,null)], null);
});

cljs.core.async.t_cljs$core$async38004.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38004";

cljs.core.async.t_cljs$core$async38004.cljs$lang$ctorPrWriter = (function (this__31425__auto__,writer__31426__auto__,opt__31427__auto__){
return cljs.core._write.call(null,writer__31426__auto__,"cljs.core.async/t_cljs$core$async38004");
});

cljs.core.async.__GT_t_cljs$core$async38004 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38004(map_LT___$1,f__$1,ch__$1,meta38005){
return (new cljs.core.async.t_cljs$core$async38004(map_LT___$1,f__$1,ch__$1,meta38005));
});

}

return (new cljs.core.async.t_cljs$core$async38004(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38013 = (function (map_GT_,f,ch,meta38014){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38014 = meta38014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38015,meta38014__$1){
var self__ = this;
var _38015__$1 = this;
return (new cljs.core.async.t_cljs$core$async38013(self__.map_GT_,self__.f,self__.ch,meta38014__$1));
});

cljs.core.async.t_cljs$core$async38013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38015){
var self__ = this;
var _38015__$1 = this;
return self__.meta38014;
});

cljs.core.async.t_cljs$core$async38013.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38013.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38013.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38013.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38013.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38013.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38014","meta38014",1991364342,null)], null);
});

cljs.core.async.t_cljs$core$async38013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38013";

cljs.core.async.t_cljs$core$async38013.cljs$lang$ctorPrWriter = (function (this__31425__auto__,writer__31426__auto__,opt__31427__auto__){
return cljs.core._write.call(null,writer__31426__auto__,"cljs.core.async/t_cljs$core$async38013");
});

cljs.core.async.__GT_t_cljs$core$async38013 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38013(map_GT___$1,f__$1,ch__$1,meta38014){
return (new cljs.core.async.t_cljs$core$async38013(map_GT___$1,f__$1,ch__$1,meta38014));
});

}

return (new cljs.core.async.t_cljs$core$async38013(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38019 = (function (filter_GT_,p,ch,meta38020){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38020 = meta38020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38021,meta38020__$1){
var self__ = this;
var _38021__$1 = this;
return (new cljs.core.async.t_cljs$core$async38019(self__.filter_GT_,self__.p,self__.ch,meta38020__$1));
});

cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38021){
var self__ = this;
var _38021__$1 = this;
return self__.meta38020;
});

cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async38019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38020","meta38020",-769362983,null)], null);
});

cljs.core.async.t_cljs$core$async38019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38019";

cljs.core.async.t_cljs$core$async38019.cljs$lang$ctorPrWriter = (function (this__31425__auto__,writer__31426__auto__,opt__31427__auto__){
return cljs.core._write.call(null,writer__31426__auto__,"cljs.core.async/t_cljs$core$async38019");
});

cljs.core.async.__GT_t_cljs$core$async38019 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38019(filter_GT___$1,p__$1,ch__$1,meta38020){
return (new cljs.core.async.t_cljs$core$async38019(filter_GT___$1,p__$1,ch__$1,meta38020));
});

}

return (new cljs.core.async.t_cljs$core$async38019(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args38022 = [];
var len__31894__auto___38066 = arguments.length;
var i__31895__auto___38067 = (0);
while(true){
if((i__31895__auto___38067 < len__31894__auto___38066)){
args38022.push((arguments[i__31895__auto___38067]));

var G__38068 = (i__31895__auto___38067 + (1));
i__31895__auto___38067 = G__38068;
continue;
} else {
}
break;
}

var G__38024 = args38022.length;
switch (G__38024) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38022.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35798__auto___38070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___38070,out){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___38070,out){
return (function (state_38045){
var state_val_38046 = (state_38045[(1)]);
if((state_val_38046 === (7))){
var inst_38041 = (state_38045[(2)]);
var state_38045__$1 = state_38045;
var statearr_38047_38071 = state_38045__$1;
(statearr_38047_38071[(2)] = inst_38041);

(statearr_38047_38071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (1))){
var state_38045__$1 = state_38045;
var statearr_38048_38072 = state_38045__$1;
(statearr_38048_38072[(2)] = null);

(statearr_38048_38072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (4))){
var inst_38027 = (state_38045[(7)]);
var inst_38027__$1 = (state_38045[(2)]);
var inst_38028 = (inst_38027__$1 == null);
var state_38045__$1 = (function (){var statearr_38049 = state_38045;
(statearr_38049[(7)] = inst_38027__$1);

return statearr_38049;
})();
if(cljs.core.truth_(inst_38028)){
var statearr_38050_38073 = state_38045__$1;
(statearr_38050_38073[(1)] = (5));

} else {
var statearr_38051_38074 = state_38045__$1;
(statearr_38051_38074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (6))){
var inst_38027 = (state_38045[(7)]);
var inst_38032 = p.call(null,inst_38027);
var state_38045__$1 = state_38045;
if(cljs.core.truth_(inst_38032)){
var statearr_38052_38075 = state_38045__$1;
(statearr_38052_38075[(1)] = (8));

} else {
var statearr_38053_38076 = state_38045__$1;
(statearr_38053_38076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (3))){
var inst_38043 = (state_38045[(2)]);
var state_38045__$1 = state_38045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38045__$1,inst_38043);
} else {
if((state_val_38046 === (2))){
var state_38045__$1 = state_38045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38045__$1,(4),ch);
} else {
if((state_val_38046 === (11))){
var inst_38035 = (state_38045[(2)]);
var state_38045__$1 = state_38045;
var statearr_38054_38077 = state_38045__$1;
(statearr_38054_38077[(2)] = inst_38035);

(statearr_38054_38077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (9))){
var state_38045__$1 = state_38045;
var statearr_38055_38078 = state_38045__$1;
(statearr_38055_38078[(2)] = null);

(statearr_38055_38078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (5))){
var inst_38030 = cljs.core.async.close_BANG_.call(null,out);
var state_38045__$1 = state_38045;
var statearr_38056_38079 = state_38045__$1;
(statearr_38056_38079[(2)] = inst_38030);

(statearr_38056_38079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (10))){
var inst_38038 = (state_38045[(2)]);
var state_38045__$1 = (function (){var statearr_38057 = state_38045;
(statearr_38057[(8)] = inst_38038);

return statearr_38057;
})();
var statearr_38058_38080 = state_38045__$1;
(statearr_38058_38080[(2)] = null);

(statearr_38058_38080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (8))){
var inst_38027 = (state_38045[(7)]);
var state_38045__$1 = state_38045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38045__$1,(11),out,inst_38027);
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
});})(c__35798__auto___38070,out))
;
return ((function (switch__35686__auto__,c__35798__auto___38070,out){
return (function() {
var cljs$core$async$state_machine__35687__auto__ = null;
var cljs$core$async$state_machine__35687__auto____0 = (function (){
var statearr_38062 = [null,null,null,null,null,null,null,null,null];
(statearr_38062[(0)] = cljs$core$async$state_machine__35687__auto__);

(statearr_38062[(1)] = (1));

return statearr_38062;
});
var cljs$core$async$state_machine__35687__auto____1 = (function (state_38045){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_38045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e38063){if((e38063 instanceof Object)){
var ex__35690__auto__ = e38063;
var statearr_38064_38081 = state_38045;
(statearr_38064_38081[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38082 = state_38045;
state_38045 = G__38082;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$state_machine__35687__auto__ = function(state_38045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35687__auto____1.call(this,state_38045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35687__auto____0;
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35687__auto____1;
return cljs$core$async$state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___38070,out))
})();
var state__35800__auto__ = (function (){var statearr_38065 = f__35799__auto__.call(null);
(statearr_38065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___38070);

return statearr_38065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___38070,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38083 = [];
var len__31894__auto___38086 = arguments.length;
var i__31895__auto___38087 = (0);
while(true){
if((i__31895__auto___38087 < len__31894__auto___38086)){
args38083.push((arguments[i__31895__auto___38087]));

var G__38088 = (i__31895__auto___38087 + (1));
i__31895__auto___38087 = G__38088;
continue;
} else {
}
break;
}

var G__38085 = args38083.length;
switch (G__38085) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38083.length)].join('')));

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
var c__35798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto__){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto__){
return (function (state_38255){
var state_val_38256 = (state_38255[(1)]);
if((state_val_38256 === (7))){
var inst_38251 = (state_38255[(2)]);
var state_38255__$1 = state_38255;
var statearr_38257_38298 = state_38255__$1;
(statearr_38257_38298[(2)] = inst_38251);

(statearr_38257_38298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (20))){
var inst_38221 = (state_38255[(7)]);
var inst_38232 = (state_38255[(2)]);
var inst_38233 = cljs.core.next.call(null,inst_38221);
var inst_38207 = inst_38233;
var inst_38208 = null;
var inst_38209 = (0);
var inst_38210 = (0);
var state_38255__$1 = (function (){var statearr_38258 = state_38255;
(statearr_38258[(8)] = inst_38209);

(statearr_38258[(9)] = inst_38207);

(statearr_38258[(10)] = inst_38208);

(statearr_38258[(11)] = inst_38232);

(statearr_38258[(12)] = inst_38210);

return statearr_38258;
})();
var statearr_38259_38299 = state_38255__$1;
(statearr_38259_38299[(2)] = null);

(statearr_38259_38299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (1))){
var state_38255__$1 = state_38255;
var statearr_38260_38300 = state_38255__$1;
(statearr_38260_38300[(2)] = null);

(statearr_38260_38300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (4))){
var inst_38196 = (state_38255[(13)]);
var inst_38196__$1 = (state_38255[(2)]);
var inst_38197 = (inst_38196__$1 == null);
var state_38255__$1 = (function (){var statearr_38261 = state_38255;
(statearr_38261[(13)] = inst_38196__$1);

return statearr_38261;
})();
if(cljs.core.truth_(inst_38197)){
var statearr_38262_38301 = state_38255__$1;
(statearr_38262_38301[(1)] = (5));

} else {
var statearr_38263_38302 = state_38255__$1;
(statearr_38263_38302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (15))){
var state_38255__$1 = state_38255;
var statearr_38267_38303 = state_38255__$1;
(statearr_38267_38303[(2)] = null);

(statearr_38267_38303[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (21))){
var state_38255__$1 = state_38255;
var statearr_38268_38304 = state_38255__$1;
(statearr_38268_38304[(2)] = null);

(statearr_38268_38304[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (13))){
var inst_38209 = (state_38255[(8)]);
var inst_38207 = (state_38255[(9)]);
var inst_38208 = (state_38255[(10)]);
var inst_38210 = (state_38255[(12)]);
var inst_38217 = (state_38255[(2)]);
var inst_38218 = (inst_38210 + (1));
var tmp38264 = inst_38209;
var tmp38265 = inst_38207;
var tmp38266 = inst_38208;
var inst_38207__$1 = tmp38265;
var inst_38208__$1 = tmp38266;
var inst_38209__$1 = tmp38264;
var inst_38210__$1 = inst_38218;
var state_38255__$1 = (function (){var statearr_38269 = state_38255;
(statearr_38269[(8)] = inst_38209__$1);

(statearr_38269[(9)] = inst_38207__$1);

(statearr_38269[(10)] = inst_38208__$1);

(statearr_38269[(14)] = inst_38217);

(statearr_38269[(12)] = inst_38210__$1);

return statearr_38269;
})();
var statearr_38270_38305 = state_38255__$1;
(statearr_38270_38305[(2)] = null);

(statearr_38270_38305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (22))){
var state_38255__$1 = state_38255;
var statearr_38271_38306 = state_38255__$1;
(statearr_38271_38306[(2)] = null);

(statearr_38271_38306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (6))){
var inst_38196 = (state_38255[(13)]);
var inst_38205 = f.call(null,inst_38196);
var inst_38206 = cljs.core.seq.call(null,inst_38205);
var inst_38207 = inst_38206;
var inst_38208 = null;
var inst_38209 = (0);
var inst_38210 = (0);
var state_38255__$1 = (function (){var statearr_38272 = state_38255;
(statearr_38272[(8)] = inst_38209);

(statearr_38272[(9)] = inst_38207);

(statearr_38272[(10)] = inst_38208);

(statearr_38272[(12)] = inst_38210);

return statearr_38272;
})();
var statearr_38273_38307 = state_38255__$1;
(statearr_38273_38307[(2)] = null);

(statearr_38273_38307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (17))){
var inst_38221 = (state_38255[(7)]);
var inst_38225 = cljs.core.chunk_first.call(null,inst_38221);
var inst_38226 = cljs.core.chunk_rest.call(null,inst_38221);
var inst_38227 = cljs.core.count.call(null,inst_38225);
var inst_38207 = inst_38226;
var inst_38208 = inst_38225;
var inst_38209 = inst_38227;
var inst_38210 = (0);
var state_38255__$1 = (function (){var statearr_38274 = state_38255;
(statearr_38274[(8)] = inst_38209);

(statearr_38274[(9)] = inst_38207);

(statearr_38274[(10)] = inst_38208);

(statearr_38274[(12)] = inst_38210);

return statearr_38274;
})();
var statearr_38275_38308 = state_38255__$1;
(statearr_38275_38308[(2)] = null);

(statearr_38275_38308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (3))){
var inst_38253 = (state_38255[(2)]);
var state_38255__$1 = state_38255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38255__$1,inst_38253);
} else {
if((state_val_38256 === (12))){
var inst_38241 = (state_38255[(2)]);
var state_38255__$1 = state_38255;
var statearr_38276_38309 = state_38255__$1;
(statearr_38276_38309[(2)] = inst_38241);

(statearr_38276_38309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (2))){
var state_38255__$1 = state_38255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38255__$1,(4),in$);
} else {
if((state_val_38256 === (23))){
var inst_38249 = (state_38255[(2)]);
var state_38255__$1 = state_38255;
var statearr_38277_38310 = state_38255__$1;
(statearr_38277_38310[(2)] = inst_38249);

(statearr_38277_38310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (19))){
var inst_38236 = (state_38255[(2)]);
var state_38255__$1 = state_38255;
var statearr_38278_38311 = state_38255__$1;
(statearr_38278_38311[(2)] = inst_38236);

(statearr_38278_38311[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (11))){
var inst_38221 = (state_38255[(7)]);
var inst_38207 = (state_38255[(9)]);
var inst_38221__$1 = cljs.core.seq.call(null,inst_38207);
var state_38255__$1 = (function (){var statearr_38279 = state_38255;
(statearr_38279[(7)] = inst_38221__$1);

return statearr_38279;
})();
if(inst_38221__$1){
var statearr_38280_38312 = state_38255__$1;
(statearr_38280_38312[(1)] = (14));

} else {
var statearr_38281_38313 = state_38255__$1;
(statearr_38281_38313[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (9))){
var inst_38243 = (state_38255[(2)]);
var inst_38244 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38255__$1 = (function (){var statearr_38282 = state_38255;
(statearr_38282[(15)] = inst_38243);

return statearr_38282;
})();
if(cljs.core.truth_(inst_38244)){
var statearr_38283_38314 = state_38255__$1;
(statearr_38283_38314[(1)] = (21));

} else {
var statearr_38284_38315 = state_38255__$1;
(statearr_38284_38315[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (5))){
var inst_38199 = cljs.core.async.close_BANG_.call(null,out);
var state_38255__$1 = state_38255;
var statearr_38285_38316 = state_38255__$1;
(statearr_38285_38316[(2)] = inst_38199);

(statearr_38285_38316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (14))){
var inst_38221 = (state_38255[(7)]);
var inst_38223 = cljs.core.chunked_seq_QMARK_.call(null,inst_38221);
var state_38255__$1 = state_38255;
if(inst_38223){
var statearr_38286_38318 = state_38255__$1;
(statearr_38286_38318[(1)] = (17));

} else {
var statearr_38287_38319 = state_38255__$1;
(statearr_38287_38319[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (16))){
var inst_38239 = (state_38255[(2)]);
var state_38255__$1 = state_38255;
var statearr_38288_38320 = state_38255__$1;
(statearr_38288_38320[(2)] = inst_38239);

(statearr_38288_38320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38256 === (10))){
var inst_38208 = (state_38255[(10)]);
var inst_38210 = (state_38255[(12)]);
var inst_38215 = cljs.core._nth.call(null,inst_38208,inst_38210);
var state_38255__$1 = state_38255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38255__$1,(13),out,inst_38215);
} else {
if((state_val_38256 === (18))){
var inst_38221 = (state_38255[(7)]);
var inst_38230 = cljs.core.first.call(null,inst_38221);
var state_38255__$1 = state_38255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38255__$1,(20),out,inst_38230);
} else {
if((state_val_38256 === (8))){
var inst_38209 = (state_38255[(8)]);
var inst_38210 = (state_38255[(12)]);
var inst_38212 = (inst_38210 < inst_38209);
var inst_38213 = inst_38212;
var state_38255__$1 = state_38255;
if(cljs.core.truth_(inst_38213)){
var statearr_38289_38321 = state_38255__$1;
(statearr_38289_38321[(1)] = (10));

} else {
var statearr_38290_38322 = state_38255__$1;
(statearr_38290_38322[(1)] = (11));

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
});})(c__35798__auto__))
;
return ((function (switch__35686__auto__,c__35798__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35687__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35687__auto____0 = (function (){
var statearr_38294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38294[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35687__auto__);

(statearr_38294[(1)] = (1));

return statearr_38294;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35687__auto____1 = (function (state_38255){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_38255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e38295){if((e38295 instanceof Object)){
var ex__35690__auto__ = e38295;
var statearr_38296_38323 = state_38255;
(statearr_38296_38323[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38324 = state_38255;
state_38255 = G__38324;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35687__auto__ = function(state_38255){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35687__auto____1.call(this,state_38255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35687__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35687__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto__))
})();
var state__35800__auto__ = (function (){var statearr_38297 = f__35799__auto__.call(null);
(statearr_38297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto__);

return statearr_38297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto__))
);

return c__35798__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args38325 = [];
var len__31894__auto___38328 = arguments.length;
var i__31895__auto___38329 = (0);
while(true){
if((i__31895__auto___38329 < len__31894__auto___38328)){
args38325.push((arguments[i__31895__auto___38329]));

var G__38330 = (i__31895__auto___38329 + (1));
i__31895__auto___38329 = G__38330;
continue;
} else {
}
break;
}

var G__38327 = args38325.length;
switch (G__38327) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38325.length)].join('')));

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
var args38332 = [];
var len__31894__auto___38335 = arguments.length;
var i__31895__auto___38336 = (0);
while(true){
if((i__31895__auto___38336 < len__31894__auto___38335)){
args38332.push((arguments[i__31895__auto___38336]));

var G__38337 = (i__31895__auto___38336 + (1));
i__31895__auto___38336 = G__38337;
continue;
} else {
}
break;
}

var G__38334 = args38332.length;
switch (G__38334) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38332.length)].join('')));

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
var args38339 = [];
var len__31894__auto___38390 = arguments.length;
var i__31895__auto___38391 = (0);
while(true){
if((i__31895__auto___38391 < len__31894__auto___38390)){
args38339.push((arguments[i__31895__auto___38391]));

var G__38392 = (i__31895__auto___38391 + (1));
i__31895__auto___38391 = G__38392;
continue;
} else {
}
break;
}

var G__38341 = args38339.length;
switch (G__38341) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38339.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35798__auto___38394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___38394,out){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___38394,out){
return (function (state_38365){
var state_val_38366 = (state_38365[(1)]);
if((state_val_38366 === (7))){
var inst_38360 = (state_38365[(2)]);
var state_38365__$1 = state_38365;
var statearr_38367_38395 = state_38365__$1;
(statearr_38367_38395[(2)] = inst_38360);

(statearr_38367_38395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (1))){
var inst_38342 = null;
var state_38365__$1 = (function (){var statearr_38368 = state_38365;
(statearr_38368[(7)] = inst_38342);

return statearr_38368;
})();
var statearr_38369_38396 = state_38365__$1;
(statearr_38369_38396[(2)] = null);

(statearr_38369_38396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (4))){
var inst_38345 = (state_38365[(8)]);
var inst_38345__$1 = (state_38365[(2)]);
var inst_38346 = (inst_38345__$1 == null);
var inst_38347 = cljs.core.not.call(null,inst_38346);
var state_38365__$1 = (function (){var statearr_38370 = state_38365;
(statearr_38370[(8)] = inst_38345__$1);

return statearr_38370;
})();
if(inst_38347){
var statearr_38371_38397 = state_38365__$1;
(statearr_38371_38397[(1)] = (5));

} else {
var statearr_38372_38398 = state_38365__$1;
(statearr_38372_38398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (6))){
var state_38365__$1 = state_38365;
var statearr_38373_38399 = state_38365__$1;
(statearr_38373_38399[(2)] = null);

(statearr_38373_38399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (3))){
var inst_38362 = (state_38365[(2)]);
var inst_38363 = cljs.core.async.close_BANG_.call(null,out);
var state_38365__$1 = (function (){var statearr_38374 = state_38365;
(statearr_38374[(9)] = inst_38362);

return statearr_38374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38365__$1,inst_38363);
} else {
if((state_val_38366 === (2))){
var state_38365__$1 = state_38365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38365__$1,(4),ch);
} else {
if((state_val_38366 === (11))){
var inst_38345 = (state_38365[(8)]);
var inst_38354 = (state_38365[(2)]);
var inst_38342 = inst_38345;
var state_38365__$1 = (function (){var statearr_38375 = state_38365;
(statearr_38375[(10)] = inst_38354);

(statearr_38375[(7)] = inst_38342);

return statearr_38375;
})();
var statearr_38376_38400 = state_38365__$1;
(statearr_38376_38400[(2)] = null);

(statearr_38376_38400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (9))){
var inst_38345 = (state_38365[(8)]);
var state_38365__$1 = state_38365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38365__$1,(11),out,inst_38345);
} else {
if((state_val_38366 === (5))){
var inst_38345 = (state_38365[(8)]);
var inst_38342 = (state_38365[(7)]);
var inst_38349 = cljs.core._EQ_.call(null,inst_38345,inst_38342);
var state_38365__$1 = state_38365;
if(inst_38349){
var statearr_38378_38401 = state_38365__$1;
(statearr_38378_38401[(1)] = (8));

} else {
var statearr_38379_38402 = state_38365__$1;
(statearr_38379_38402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (10))){
var inst_38357 = (state_38365[(2)]);
var state_38365__$1 = state_38365;
var statearr_38380_38403 = state_38365__$1;
(statearr_38380_38403[(2)] = inst_38357);

(statearr_38380_38403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (8))){
var inst_38342 = (state_38365[(7)]);
var tmp38377 = inst_38342;
var inst_38342__$1 = tmp38377;
var state_38365__$1 = (function (){var statearr_38381 = state_38365;
(statearr_38381[(7)] = inst_38342__$1);

return statearr_38381;
})();
var statearr_38382_38404 = state_38365__$1;
(statearr_38382_38404[(2)] = null);

(statearr_38382_38404[(1)] = (2));


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
});})(c__35798__auto___38394,out))
;
return ((function (switch__35686__auto__,c__35798__auto___38394,out){
return (function() {
var cljs$core$async$state_machine__35687__auto__ = null;
var cljs$core$async$state_machine__35687__auto____0 = (function (){
var statearr_38386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38386[(0)] = cljs$core$async$state_machine__35687__auto__);

(statearr_38386[(1)] = (1));

return statearr_38386;
});
var cljs$core$async$state_machine__35687__auto____1 = (function (state_38365){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_38365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e38387){if((e38387 instanceof Object)){
var ex__35690__auto__ = e38387;
var statearr_38388_38405 = state_38365;
(statearr_38388_38405[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38406 = state_38365;
state_38365 = G__38406;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$state_machine__35687__auto__ = function(state_38365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35687__auto____1.call(this,state_38365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35687__auto____0;
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35687__auto____1;
return cljs$core$async$state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___38394,out))
})();
var state__35800__auto__ = (function (){var statearr_38389 = f__35799__auto__.call(null);
(statearr_38389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___38394);

return statearr_38389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___38394,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args38407 = [];
var len__31894__auto___38477 = arguments.length;
var i__31895__auto___38478 = (0);
while(true){
if((i__31895__auto___38478 < len__31894__auto___38477)){
args38407.push((arguments[i__31895__auto___38478]));

var G__38479 = (i__31895__auto___38478 + (1));
i__31895__auto___38478 = G__38479;
continue;
} else {
}
break;
}

var G__38409 = args38407.length;
switch (G__38409) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38407.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35798__auto___38481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___38481,out){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___38481,out){
return (function (state_38447){
var state_val_38448 = (state_38447[(1)]);
if((state_val_38448 === (7))){
var inst_38443 = (state_38447[(2)]);
var state_38447__$1 = state_38447;
var statearr_38449_38482 = state_38447__$1;
(statearr_38449_38482[(2)] = inst_38443);

(statearr_38449_38482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38448 === (1))){
var inst_38410 = (new Array(n));
var inst_38411 = inst_38410;
var inst_38412 = (0);
var state_38447__$1 = (function (){var statearr_38450 = state_38447;
(statearr_38450[(7)] = inst_38412);

(statearr_38450[(8)] = inst_38411);

return statearr_38450;
})();
var statearr_38451_38483 = state_38447__$1;
(statearr_38451_38483[(2)] = null);

(statearr_38451_38483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38448 === (4))){
var inst_38415 = (state_38447[(9)]);
var inst_38415__$1 = (state_38447[(2)]);
var inst_38416 = (inst_38415__$1 == null);
var inst_38417 = cljs.core.not.call(null,inst_38416);
var state_38447__$1 = (function (){var statearr_38452 = state_38447;
(statearr_38452[(9)] = inst_38415__$1);

return statearr_38452;
})();
if(inst_38417){
var statearr_38453_38484 = state_38447__$1;
(statearr_38453_38484[(1)] = (5));

} else {
var statearr_38454_38485 = state_38447__$1;
(statearr_38454_38485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38448 === (15))){
var inst_38437 = (state_38447[(2)]);
var state_38447__$1 = state_38447;
var statearr_38455_38486 = state_38447__$1;
(statearr_38455_38486[(2)] = inst_38437);

(statearr_38455_38486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38448 === (13))){
var state_38447__$1 = state_38447;
var statearr_38456_38487 = state_38447__$1;
(statearr_38456_38487[(2)] = null);

(statearr_38456_38487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38448 === (6))){
var inst_38412 = (state_38447[(7)]);
var inst_38433 = (inst_38412 > (0));
var state_38447__$1 = state_38447;
if(cljs.core.truth_(inst_38433)){
var statearr_38457_38488 = state_38447__$1;
(statearr_38457_38488[(1)] = (12));

} else {
var statearr_38458_38489 = state_38447__$1;
(statearr_38458_38489[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38448 === (3))){
var inst_38445 = (state_38447[(2)]);
var state_38447__$1 = state_38447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38447__$1,inst_38445);
} else {
if((state_val_38448 === (12))){
var inst_38411 = (state_38447[(8)]);
var inst_38435 = cljs.core.vec.call(null,inst_38411);
var state_38447__$1 = state_38447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38447__$1,(15),out,inst_38435);
} else {
if((state_val_38448 === (2))){
var state_38447__$1 = state_38447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38447__$1,(4),ch);
} else {
if((state_val_38448 === (11))){
var inst_38427 = (state_38447[(2)]);
var inst_38428 = (new Array(n));
var inst_38411 = inst_38428;
var inst_38412 = (0);
var state_38447__$1 = (function (){var statearr_38459 = state_38447;
(statearr_38459[(7)] = inst_38412);

(statearr_38459[(10)] = inst_38427);

(statearr_38459[(8)] = inst_38411);

return statearr_38459;
})();
var statearr_38460_38490 = state_38447__$1;
(statearr_38460_38490[(2)] = null);

(statearr_38460_38490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38448 === (9))){
var inst_38411 = (state_38447[(8)]);
var inst_38425 = cljs.core.vec.call(null,inst_38411);
var state_38447__$1 = state_38447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38447__$1,(11),out,inst_38425);
} else {
if((state_val_38448 === (5))){
var inst_38412 = (state_38447[(7)]);
var inst_38420 = (state_38447[(11)]);
var inst_38411 = (state_38447[(8)]);
var inst_38415 = (state_38447[(9)]);
var inst_38419 = (inst_38411[inst_38412] = inst_38415);
var inst_38420__$1 = (inst_38412 + (1));
var inst_38421 = (inst_38420__$1 < n);
var state_38447__$1 = (function (){var statearr_38461 = state_38447;
(statearr_38461[(12)] = inst_38419);

(statearr_38461[(11)] = inst_38420__$1);

return statearr_38461;
})();
if(cljs.core.truth_(inst_38421)){
var statearr_38462_38491 = state_38447__$1;
(statearr_38462_38491[(1)] = (8));

} else {
var statearr_38463_38492 = state_38447__$1;
(statearr_38463_38492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38448 === (14))){
var inst_38440 = (state_38447[(2)]);
var inst_38441 = cljs.core.async.close_BANG_.call(null,out);
var state_38447__$1 = (function (){var statearr_38465 = state_38447;
(statearr_38465[(13)] = inst_38440);

return statearr_38465;
})();
var statearr_38466_38493 = state_38447__$1;
(statearr_38466_38493[(2)] = inst_38441);

(statearr_38466_38493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38448 === (10))){
var inst_38431 = (state_38447[(2)]);
var state_38447__$1 = state_38447;
var statearr_38467_38494 = state_38447__$1;
(statearr_38467_38494[(2)] = inst_38431);

(statearr_38467_38494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38448 === (8))){
var inst_38420 = (state_38447[(11)]);
var inst_38411 = (state_38447[(8)]);
var tmp38464 = inst_38411;
var inst_38411__$1 = tmp38464;
var inst_38412 = inst_38420;
var state_38447__$1 = (function (){var statearr_38468 = state_38447;
(statearr_38468[(7)] = inst_38412);

(statearr_38468[(8)] = inst_38411__$1);

return statearr_38468;
})();
var statearr_38469_38495 = state_38447__$1;
(statearr_38469_38495[(2)] = null);

(statearr_38469_38495[(1)] = (2));


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
});})(c__35798__auto___38481,out))
;
return ((function (switch__35686__auto__,c__35798__auto___38481,out){
return (function() {
var cljs$core$async$state_machine__35687__auto__ = null;
var cljs$core$async$state_machine__35687__auto____0 = (function (){
var statearr_38473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38473[(0)] = cljs$core$async$state_machine__35687__auto__);

(statearr_38473[(1)] = (1));

return statearr_38473;
});
var cljs$core$async$state_machine__35687__auto____1 = (function (state_38447){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_38447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e38474){if((e38474 instanceof Object)){
var ex__35690__auto__ = e38474;
var statearr_38475_38496 = state_38447;
(statearr_38475_38496[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38497 = state_38447;
state_38447 = G__38497;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$state_machine__35687__auto__ = function(state_38447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35687__auto____1.call(this,state_38447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35687__auto____0;
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35687__auto____1;
return cljs$core$async$state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___38481,out))
})();
var state__35800__auto__ = (function (){var statearr_38476 = f__35799__auto__.call(null);
(statearr_38476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___38481);

return statearr_38476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___38481,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args38498 = [];
var len__31894__auto___38572 = arguments.length;
var i__31895__auto___38573 = (0);
while(true){
if((i__31895__auto___38573 < len__31894__auto___38572)){
args38498.push((arguments[i__31895__auto___38573]));

var G__38574 = (i__31895__auto___38573 + (1));
i__31895__auto___38573 = G__38574;
continue;
} else {
}
break;
}

var G__38500 = args38498.length;
switch (G__38500) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38498.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35798__auto___38576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___38576,out){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___38576,out){
return (function (state_38542){
var state_val_38543 = (state_38542[(1)]);
if((state_val_38543 === (7))){
var inst_38538 = (state_38542[(2)]);
var state_38542__$1 = state_38542;
var statearr_38544_38577 = state_38542__$1;
(statearr_38544_38577[(2)] = inst_38538);

(statearr_38544_38577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38543 === (1))){
var inst_38501 = [];
var inst_38502 = inst_38501;
var inst_38503 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38542__$1 = (function (){var statearr_38545 = state_38542;
(statearr_38545[(7)] = inst_38502);

(statearr_38545[(8)] = inst_38503);

return statearr_38545;
})();
var statearr_38546_38578 = state_38542__$1;
(statearr_38546_38578[(2)] = null);

(statearr_38546_38578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38543 === (4))){
var inst_38506 = (state_38542[(9)]);
var inst_38506__$1 = (state_38542[(2)]);
var inst_38507 = (inst_38506__$1 == null);
var inst_38508 = cljs.core.not.call(null,inst_38507);
var state_38542__$1 = (function (){var statearr_38547 = state_38542;
(statearr_38547[(9)] = inst_38506__$1);

return statearr_38547;
})();
if(inst_38508){
var statearr_38548_38579 = state_38542__$1;
(statearr_38548_38579[(1)] = (5));

} else {
var statearr_38549_38580 = state_38542__$1;
(statearr_38549_38580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38543 === (15))){
var inst_38532 = (state_38542[(2)]);
var state_38542__$1 = state_38542;
var statearr_38550_38581 = state_38542__$1;
(statearr_38550_38581[(2)] = inst_38532);

(statearr_38550_38581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38543 === (13))){
var state_38542__$1 = state_38542;
var statearr_38551_38582 = state_38542__$1;
(statearr_38551_38582[(2)] = null);

(statearr_38551_38582[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38543 === (6))){
var inst_38502 = (state_38542[(7)]);
var inst_38527 = inst_38502.length;
var inst_38528 = (inst_38527 > (0));
var state_38542__$1 = state_38542;
if(cljs.core.truth_(inst_38528)){
var statearr_38552_38583 = state_38542__$1;
(statearr_38552_38583[(1)] = (12));

} else {
var statearr_38553_38584 = state_38542__$1;
(statearr_38553_38584[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38543 === (3))){
var inst_38540 = (state_38542[(2)]);
var state_38542__$1 = state_38542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38542__$1,inst_38540);
} else {
if((state_val_38543 === (12))){
var inst_38502 = (state_38542[(7)]);
var inst_38530 = cljs.core.vec.call(null,inst_38502);
var state_38542__$1 = state_38542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38542__$1,(15),out,inst_38530);
} else {
if((state_val_38543 === (2))){
var state_38542__$1 = state_38542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38542__$1,(4),ch);
} else {
if((state_val_38543 === (11))){
var inst_38506 = (state_38542[(9)]);
var inst_38510 = (state_38542[(10)]);
var inst_38520 = (state_38542[(2)]);
var inst_38521 = [];
var inst_38522 = inst_38521.push(inst_38506);
var inst_38502 = inst_38521;
var inst_38503 = inst_38510;
var state_38542__$1 = (function (){var statearr_38554 = state_38542;
(statearr_38554[(11)] = inst_38520);

(statearr_38554[(7)] = inst_38502);

(statearr_38554[(8)] = inst_38503);

(statearr_38554[(12)] = inst_38522);

return statearr_38554;
})();
var statearr_38555_38585 = state_38542__$1;
(statearr_38555_38585[(2)] = null);

(statearr_38555_38585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38543 === (9))){
var inst_38502 = (state_38542[(7)]);
var inst_38518 = cljs.core.vec.call(null,inst_38502);
var state_38542__$1 = state_38542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38542__$1,(11),out,inst_38518);
} else {
if((state_val_38543 === (5))){
var inst_38506 = (state_38542[(9)]);
var inst_38503 = (state_38542[(8)]);
var inst_38510 = (state_38542[(10)]);
var inst_38510__$1 = f.call(null,inst_38506);
var inst_38511 = cljs.core._EQ_.call(null,inst_38510__$1,inst_38503);
var inst_38512 = cljs.core.keyword_identical_QMARK_.call(null,inst_38503,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38513 = (inst_38511) || (inst_38512);
var state_38542__$1 = (function (){var statearr_38556 = state_38542;
(statearr_38556[(10)] = inst_38510__$1);

return statearr_38556;
})();
if(cljs.core.truth_(inst_38513)){
var statearr_38557_38586 = state_38542__$1;
(statearr_38557_38586[(1)] = (8));

} else {
var statearr_38558_38587 = state_38542__$1;
(statearr_38558_38587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38543 === (14))){
var inst_38535 = (state_38542[(2)]);
var inst_38536 = cljs.core.async.close_BANG_.call(null,out);
var state_38542__$1 = (function (){var statearr_38560 = state_38542;
(statearr_38560[(13)] = inst_38535);

return statearr_38560;
})();
var statearr_38561_38588 = state_38542__$1;
(statearr_38561_38588[(2)] = inst_38536);

(statearr_38561_38588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38543 === (10))){
var inst_38525 = (state_38542[(2)]);
var state_38542__$1 = state_38542;
var statearr_38562_38589 = state_38542__$1;
(statearr_38562_38589[(2)] = inst_38525);

(statearr_38562_38589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38543 === (8))){
var inst_38506 = (state_38542[(9)]);
var inst_38502 = (state_38542[(7)]);
var inst_38510 = (state_38542[(10)]);
var inst_38515 = inst_38502.push(inst_38506);
var tmp38559 = inst_38502;
var inst_38502__$1 = tmp38559;
var inst_38503 = inst_38510;
var state_38542__$1 = (function (){var statearr_38563 = state_38542;
(statearr_38563[(7)] = inst_38502__$1);

(statearr_38563[(8)] = inst_38503);

(statearr_38563[(14)] = inst_38515);

return statearr_38563;
})();
var statearr_38564_38590 = state_38542__$1;
(statearr_38564_38590[(2)] = null);

(statearr_38564_38590[(1)] = (2));


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
});})(c__35798__auto___38576,out))
;
return ((function (switch__35686__auto__,c__35798__auto___38576,out){
return (function() {
var cljs$core$async$state_machine__35687__auto__ = null;
var cljs$core$async$state_machine__35687__auto____0 = (function (){
var statearr_38568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38568[(0)] = cljs$core$async$state_machine__35687__auto__);

(statearr_38568[(1)] = (1));

return statearr_38568;
});
var cljs$core$async$state_machine__35687__auto____1 = (function (state_38542){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_38542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e38569){if((e38569 instanceof Object)){
var ex__35690__auto__ = e38569;
var statearr_38570_38591 = state_38542;
(statearr_38570_38591[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38592 = state_38542;
state_38542 = G__38592;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
cljs$core$async$state_machine__35687__auto__ = function(state_38542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35687__auto____1.call(this,state_38542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35687__auto____0;
cljs$core$async$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35687__auto____1;
return cljs$core$async$state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___38576,out))
})();
var state__35800__auto__ = (function (){var statearr_38571 = f__35799__auto__.call(null);
(statearr_38571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___38576);

return statearr_38571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___38576,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1471343704119