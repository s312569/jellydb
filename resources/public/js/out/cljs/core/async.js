// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async12498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12498 = (function (fn_handler,f,meta12499){
this.fn_handler = fn_handler;
this.f = f;
this.meta12499 = meta12499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12500,meta12499__$1){
var self__ = this;
var _12500__$1 = this;
return (new cljs.core.async.t_cljs$core$async12498(self__.fn_handler,self__.f,meta12499__$1));
});

cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12500){
var self__ = this;
var _12500__$1 = this;
return self__.meta12499;
});

cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta12499","meta12499",1959819974,null)], null);
});

cljs.core.async.t_cljs$core$async12498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12498";

cljs.core.async.t_cljs$core$async12498.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cljs.core.async/t_cljs$core$async12498");
});

cljs.core.async.__GT_t_cljs$core$async12498 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async12498(fn_handler__$1,f__$1,meta12499){
return (new cljs.core.async.t_cljs$core$async12498(fn_handler__$1,f__$1,meta12499));
});

}

return (new cljs.core.async.t_cljs$core$async12498(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
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
var args12503 = [];
var len__5561__auto___12506 = arguments.length;
var i__5562__auto___12507 = (0);
while(true){
if((i__5562__auto___12507 < len__5561__auto___12506)){
args12503.push((arguments[i__5562__auto___12507]));

var G__12508 = (i__5562__auto___12507 + (1));
i__5562__auto___12507 = G__12508;
continue;
} else {
}
break;
}

var G__12505 = args12503.length;
switch (G__12505) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12503.length)].join('')));

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
var args12510 = [];
var len__5561__auto___12513 = arguments.length;
var i__5562__auto___12514 = (0);
while(true){
if((i__5562__auto___12514 < len__5561__auto___12513)){
args12510.push((arguments[i__5562__auto___12514]));

var G__12515 = (i__5562__auto___12514 + (1));
i__5562__auto___12514 = G__12515;
continue;
} else {
}
break;
}

var G__12512 = args12510.length;
switch (G__12512) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12510.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12517 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12517);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12517,ret){
return (function (){
return fn1.call(null,val_12517);
});})(val_12517,ret))
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
var args12518 = [];
var len__5561__auto___12521 = arguments.length;
var i__5562__auto___12522 = (0);
while(true){
if((i__5562__auto___12522 < len__5561__auto___12521)){
args12518.push((arguments[i__5562__auto___12522]));

var G__12523 = (i__5562__auto___12522 + (1));
i__5562__auto___12522 = G__12523;
continue;
} else {
}
break;
}

var G__12520 = args12518.length;
switch (G__12520) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12518.length)].join('')));

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
var n__5406__auto___12525 = n;
var x_12526 = (0);
while(true){
if((x_12526 < n__5406__auto___12525)){
(a[x_12526] = (0));

var G__12527 = (x_12526 + (1));
x_12526 = G__12527;
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

var G__12528 = (i + (1));
i = G__12528;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12532 = (function (alt_flag,flag,meta12533){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12533 = meta12533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12534,meta12533__$1){
var self__ = this;
var _12534__$1 = this;
return (new cljs.core.async.t_cljs$core$async12532(self__.alt_flag,self__.flag,meta12533__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12534){
var self__ = this;
var _12534__$1 = this;
return self__.meta12533;
});})(flag))
;

cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12532.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12533","meta12533",1954633130,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12532";

cljs.core.async.t_cljs$core$async12532.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cljs.core.async/t_cljs$core$async12532");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12532 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12532(alt_flag__$1,flag__$1,meta12533){
return (new cljs.core.async.t_cljs$core$async12532(alt_flag__$1,flag__$1,meta12533));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12532(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12538 = (function (alt_handler,flag,cb,meta12539){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12539 = meta12539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12540,meta12539__$1){
var self__ = this;
var _12540__$1 = this;
return (new cljs.core.async.t_cljs$core$async12538(self__.alt_handler,self__.flag,self__.cb,meta12539__$1));
});

cljs.core.async.t_cljs$core$async12538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12540){
var self__ = this;
var _12540__$1 = this;
return self__.meta12539;
});

cljs.core.async.t_cljs$core$async12538.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12539","meta12539",435995231,null)], null);
});

cljs.core.async.t_cljs$core$async12538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12538";

cljs.core.async.t_cljs$core$async12538.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cljs.core.async/t_cljs$core$async12538");
});

cljs.core.async.__GT_t_cljs$core$async12538 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12538(alt_handler__$1,flag__$1,cb__$1,meta12539){
return (new cljs.core.async.t_cljs$core$async12538(alt_handler__$1,flag__$1,cb__$1,meta12539));
});

}

return (new cljs.core.async.t_cljs$core$async12538(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12541_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12541_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12542_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12542_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4503__auto__ = wport;
if(cljs.core.truth_(or__4503__auto__)){
return or__4503__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12543 = (i + (1));
i = G__12543;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4503__auto__ = ret;
if(cljs.core.truth_(or__4503__auto__)){
return or__4503__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4491__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4491__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4491__auto__;
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
var args__5568__auto__ = [];
var len__5561__auto___12549 = arguments.length;
var i__5562__auto___12550 = (0);
while(true){
if((i__5562__auto___12550 < len__5561__auto___12549)){
args__5568__auto__.push((arguments[i__5562__auto___12550]));

var G__12551 = (i__5562__auto___12550 + (1));
i__5562__auto___12550 = G__12551;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((1) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5569__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12546){
var map__12547 = p__12546;
var map__12547__$1 = ((((!((map__12547 == null)))?((((map__12547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12547):map__12547);
var opts = map__12547__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12544){
var G__12545 = cljs.core.first.call(null,seq12544);
var seq12544__$1 = cljs.core.next.call(null,seq12544);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12545,seq12544__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args12552 = [];
var len__5561__auto___12602 = arguments.length;
var i__5562__auto___12603 = (0);
while(true){
if((i__5562__auto___12603 < len__5561__auto___12602)){
args12552.push((arguments[i__5562__auto___12603]));

var G__12604 = (i__5562__auto___12603 + (1));
i__5562__auto___12603 = G__12604;
continue;
} else {
}
break;
}

var G__12554 = args12552.length;
switch (G__12554) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12552.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7026__auto___12606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___12606){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___12606){
return (function (state_12578){
var state_val_12579 = (state_12578[(1)]);
if((state_val_12579 === (7))){
var inst_12574 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
var statearr_12580_12607 = state_12578__$1;
(statearr_12580_12607[(2)] = inst_12574);

(statearr_12580_12607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (1))){
var state_12578__$1 = state_12578;
var statearr_12581_12608 = state_12578__$1;
(statearr_12581_12608[(2)] = null);

(statearr_12581_12608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (4))){
var inst_12557 = (state_12578[(7)]);
var inst_12557__$1 = (state_12578[(2)]);
var inst_12558 = (inst_12557__$1 == null);
var state_12578__$1 = (function (){var statearr_12582 = state_12578;
(statearr_12582[(7)] = inst_12557__$1);

return statearr_12582;
})();
if(cljs.core.truth_(inst_12558)){
var statearr_12583_12609 = state_12578__$1;
(statearr_12583_12609[(1)] = (5));

} else {
var statearr_12584_12610 = state_12578__$1;
(statearr_12584_12610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (13))){
var state_12578__$1 = state_12578;
var statearr_12585_12611 = state_12578__$1;
(statearr_12585_12611[(2)] = null);

(statearr_12585_12611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (6))){
var inst_12557 = (state_12578[(7)]);
var state_12578__$1 = state_12578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12578__$1,(11),to,inst_12557);
} else {
if((state_val_12579 === (3))){
var inst_12576 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12578__$1,inst_12576);
} else {
if((state_val_12579 === (12))){
var state_12578__$1 = state_12578;
var statearr_12586_12612 = state_12578__$1;
(statearr_12586_12612[(2)] = null);

(statearr_12586_12612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (2))){
var state_12578__$1 = state_12578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12578__$1,(4),from);
} else {
if((state_val_12579 === (11))){
var inst_12567 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
if(cljs.core.truth_(inst_12567)){
var statearr_12587_12613 = state_12578__$1;
(statearr_12587_12613[(1)] = (12));

} else {
var statearr_12588_12614 = state_12578__$1;
(statearr_12588_12614[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (9))){
var state_12578__$1 = state_12578;
var statearr_12589_12615 = state_12578__$1;
(statearr_12589_12615[(2)] = null);

(statearr_12589_12615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (5))){
var state_12578__$1 = state_12578;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12590_12616 = state_12578__$1;
(statearr_12590_12616[(1)] = (8));

} else {
var statearr_12591_12617 = state_12578__$1;
(statearr_12591_12617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (14))){
var inst_12572 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
var statearr_12592_12618 = state_12578__$1;
(statearr_12592_12618[(2)] = inst_12572);

(statearr_12592_12618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (10))){
var inst_12564 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
var statearr_12593_12619 = state_12578__$1;
(statearr_12593_12619[(2)] = inst_12564);

(statearr_12593_12619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (8))){
var inst_12561 = cljs.core.async.close_BANG_.call(null,to);
var state_12578__$1 = state_12578;
var statearr_12594_12620 = state_12578__$1;
(statearr_12594_12620[(2)] = inst_12561);

(statearr_12594_12620[(1)] = (10));


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
});})(c__7026__auto___12606))
;
return ((function (switch__6961__auto__,c__7026__auto___12606){
return (function() {
var cljs$core$async$state_machine__6962__auto__ = null;
var cljs$core$async$state_machine__6962__auto____0 = (function (){
var statearr_12598 = [null,null,null,null,null,null,null,null];
(statearr_12598[(0)] = cljs$core$async$state_machine__6962__auto__);

(statearr_12598[(1)] = (1));

return statearr_12598;
});
var cljs$core$async$state_machine__6962__auto____1 = (function (state_12578){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_12578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e12599){if((e12599 instanceof Object)){
var ex__6965__auto__ = e12599;
var statearr_12600_12621 = state_12578;
(statearr_12600_12621[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12622 = state_12578;
state_12578 = G__12622;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$state_machine__6962__auto__ = function(state_12578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6962__auto____1.call(this,state_12578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6962__auto____0;
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6962__auto____1;
return cljs$core$async$state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___12606))
})();
var state__7028__auto__ = (function (){var statearr_12601 = f__7027__auto__.call(null);
(statearr_12601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___12606);

return statearr_12601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___12606))
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
return (function (p__12806){
var vec__12807 = p__12806;
var v = cljs.core.nth.call(null,vec__12807,(0),null);
var p = cljs.core.nth.call(null,vec__12807,(1),null);
var job = vec__12807;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7026__auto___12989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___12989,res,vec__12807,v,p,job,jobs,results){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___12989,res,vec__12807,v,p,job,jobs,results){
return (function (state_12812){
var state_val_12813 = (state_12812[(1)]);
if((state_val_12813 === (1))){
var state_12812__$1 = state_12812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12812__$1,(2),res,v);
} else {
if((state_val_12813 === (2))){
var inst_12809 = (state_12812[(2)]);
var inst_12810 = cljs.core.async.close_BANG_.call(null,res);
var state_12812__$1 = (function (){var statearr_12814 = state_12812;
(statearr_12814[(7)] = inst_12809);

return statearr_12814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12812__$1,inst_12810);
} else {
return null;
}
}
});})(c__7026__auto___12989,res,vec__12807,v,p,job,jobs,results))
;
return ((function (switch__6961__auto__,c__7026__auto___12989,res,vec__12807,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0 = (function (){
var statearr_12818 = [null,null,null,null,null,null,null,null];
(statearr_12818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__);

(statearr_12818[(1)] = (1));

return statearr_12818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1 = (function (state_12812){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_12812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e12819){if((e12819 instanceof Object)){
var ex__6965__auto__ = e12819;
var statearr_12820_12990 = state_12812;
(statearr_12820_12990[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12991 = state_12812;
state_12812 = G__12991;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__ = function(state_12812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1.call(this,state_12812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___12989,res,vec__12807,v,p,job,jobs,results))
})();
var state__7028__auto__ = (function (){var statearr_12821 = f__7027__auto__.call(null);
(statearr_12821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___12989);

return statearr_12821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___12989,res,vec__12807,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12822){
var vec__12823 = p__12822;
var v = cljs.core.nth.call(null,vec__12823,(0),null);
var p = cljs.core.nth.call(null,vec__12823,(1),null);
var job = vec__12823;
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
var n__5406__auto___12992 = n;
var __12993 = (0);
while(true){
if((__12993 < n__5406__auto___12992)){
var G__12824_12994 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12824_12994) {
case "compute":
var c__7026__auto___12996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12993,c__7026__auto___12996,G__12824_12994,n__5406__auto___12992,jobs,results,process,async){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (__12993,c__7026__auto___12996,G__12824_12994,n__5406__auto___12992,jobs,results,process,async){
return (function (state_12837){
var state_val_12838 = (state_12837[(1)]);
if((state_val_12838 === (1))){
var state_12837__$1 = state_12837;
var statearr_12839_12997 = state_12837__$1;
(statearr_12839_12997[(2)] = null);

(statearr_12839_12997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (2))){
var state_12837__$1 = state_12837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12837__$1,(4),jobs);
} else {
if((state_val_12838 === (3))){
var inst_12835 = (state_12837[(2)]);
var state_12837__$1 = state_12837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12837__$1,inst_12835);
} else {
if((state_val_12838 === (4))){
var inst_12827 = (state_12837[(2)]);
var inst_12828 = process.call(null,inst_12827);
var state_12837__$1 = state_12837;
if(cljs.core.truth_(inst_12828)){
var statearr_12840_12998 = state_12837__$1;
(statearr_12840_12998[(1)] = (5));

} else {
var statearr_12841_12999 = state_12837__$1;
(statearr_12841_12999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (5))){
var state_12837__$1 = state_12837;
var statearr_12842_13000 = state_12837__$1;
(statearr_12842_13000[(2)] = null);

(statearr_12842_13000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (6))){
var state_12837__$1 = state_12837;
var statearr_12843_13001 = state_12837__$1;
(statearr_12843_13001[(2)] = null);

(statearr_12843_13001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12838 === (7))){
var inst_12833 = (state_12837[(2)]);
var state_12837__$1 = state_12837;
var statearr_12844_13002 = state_12837__$1;
(statearr_12844_13002[(2)] = inst_12833);

(statearr_12844_13002[(1)] = (3));


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
});})(__12993,c__7026__auto___12996,G__12824_12994,n__5406__auto___12992,jobs,results,process,async))
;
return ((function (__12993,switch__6961__auto__,c__7026__auto___12996,G__12824_12994,n__5406__auto___12992,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0 = (function (){
var statearr_12848 = [null,null,null,null,null,null,null];
(statearr_12848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__);

(statearr_12848[(1)] = (1));

return statearr_12848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1 = (function (state_12837){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_12837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e12849){if((e12849 instanceof Object)){
var ex__6965__auto__ = e12849;
var statearr_12850_13003 = state_12837;
(statearr_12850_13003[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13004 = state_12837;
state_12837 = G__13004;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__ = function(state_12837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1.call(this,state_12837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__;
})()
;})(__12993,switch__6961__auto__,c__7026__auto___12996,G__12824_12994,n__5406__auto___12992,jobs,results,process,async))
})();
var state__7028__auto__ = (function (){var statearr_12851 = f__7027__auto__.call(null);
(statearr_12851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___12996);

return statearr_12851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(__12993,c__7026__auto___12996,G__12824_12994,n__5406__auto___12992,jobs,results,process,async))
);


break;
case "async":
var c__7026__auto___13005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12993,c__7026__auto___13005,G__12824_12994,n__5406__auto___12992,jobs,results,process,async){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (__12993,c__7026__auto___13005,G__12824_12994,n__5406__auto___12992,jobs,results,process,async){
return (function (state_12864){
var state_val_12865 = (state_12864[(1)]);
if((state_val_12865 === (1))){
var state_12864__$1 = state_12864;
var statearr_12866_13006 = state_12864__$1;
(statearr_12866_13006[(2)] = null);

(statearr_12866_13006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (2))){
var state_12864__$1 = state_12864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12864__$1,(4),jobs);
} else {
if((state_val_12865 === (3))){
var inst_12862 = (state_12864[(2)]);
var state_12864__$1 = state_12864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12864__$1,inst_12862);
} else {
if((state_val_12865 === (4))){
var inst_12854 = (state_12864[(2)]);
var inst_12855 = async.call(null,inst_12854);
var state_12864__$1 = state_12864;
if(cljs.core.truth_(inst_12855)){
var statearr_12867_13007 = state_12864__$1;
(statearr_12867_13007[(1)] = (5));

} else {
var statearr_12868_13008 = state_12864__$1;
(statearr_12868_13008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (5))){
var state_12864__$1 = state_12864;
var statearr_12869_13009 = state_12864__$1;
(statearr_12869_13009[(2)] = null);

(statearr_12869_13009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (6))){
var state_12864__$1 = state_12864;
var statearr_12870_13010 = state_12864__$1;
(statearr_12870_13010[(2)] = null);

(statearr_12870_13010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12865 === (7))){
var inst_12860 = (state_12864[(2)]);
var state_12864__$1 = state_12864;
var statearr_12871_13011 = state_12864__$1;
(statearr_12871_13011[(2)] = inst_12860);

(statearr_12871_13011[(1)] = (3));


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
});})(__12993,c__7026__auto___13005,G__12824_12994,n__5406__auto___12992,jobs,results,process,async))
;
return ((function (__12993,switch__6961__auto__,c__7026__auto___13005,G__12824_12994,n__5406__auto___12992,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0 = (function (){
var statearr_12875 = [null,null,null,null,null,null,null];
(statearr_12875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__);

(statearr_12875[(1)] = (1));

return statearr_12875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1 = (function (state_12864){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_12864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e12876){if((e12876 instanceof Object)){
var ex__6965__auto__ = e12876;
var statearr_12877_13012 = state_12864;
(statearr_12877_13012[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13013 = state_12864;
state_12864 = G__13013;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__ = function(state_12864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1.call(this,state_12864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__;
})()
;})(__12993,switch__6961__auto__,c__7026__auto___13005,G__12824_12994,n__5406__auto___12992,jobs,results,process,async))
})();
var state__7028__auto__ = (function (){var statearr_12878 = f__7027__auto__.call(null);
(statearr_12878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___13005);

return statearr_12878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(__12993,c__7026__auto___13005,G__12824_12994,n__5406__auto___12992,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13014 = (__12993 + (1));
__12993 = G__13014;
continue;
} else {
}
break;
}

var c__7026__auto___13015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___13015,jobs,results,process,async){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___13015,jobs,results,process,async){
return (function (state_12900){
var state_val_12901 = (state_12900[(1)]);
if((state_val_12901 === (1))){
var state_12900__$1 = state_12900;
var statearr_12902_13016 = state_12900__$1;
(statearr_12902_13016[(2)] = null);

(statearr_12902_13016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12901 === (2))){
var state_12900__$1 = state_12900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12900__$1,(4),from);
} else {
if((state_val_12901 === (3))){
var inst_12898 = (state_12900[(2)]);
var state_12900__$1 = state_12900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12900__$1,inst_12898);
} else {
if((state_val_12901 === (4))){
var inst_12881 = (state_12900[(7)]);
var inst_12881__$1 = (state_12900[(2)]);
var inst_12882 = (inst_12881__$1 == null);
var state_12900__$1 = (function (){var statearr_12903 = state_12900;
(statearr_12903[(7)] = inst_12881__$1);

return statearr_12903;
})();
if(cljs.core.truth_(inst_12882)){
var statearr_12904_13017 = state_12900__$1;
(statearr_12904_13017[(1)] = (5));

} else {
var statearr_12905_13018 = state_12900__$1;
(statearr_12905_13018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12901 === (5))){
var inst_12884 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12900__$1 = state_12900;
var statearr_12906_13019 = state_12900__$1;
(statearr_12906_13019[(2)] = inst_12884);

(statearr_12906_13019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12901 === (6))){
var inst_12886 = (state_12900[(8)]);
var inst_12881 = (state_12900[(7)]);
var inst_12886__$1 = cljs.core.async.chan.call(null,(1));
var inst_12887 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12888 = [inst_12881,inst_12886__$1];
var inst_12889 = (new cljs.core.PersistentVector(null,2,(5),inst_12887,inst_12888,null));
var state_12900__$1 = (function (){var statearr_12907 = state_12900;
(statearr_12907[(8)] = inst_12886__$1);

return statearr_12907;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12900__$1,(8),jobs,inst_12889);
} else {
if((state_val_12901 === (7))){
var inst_12896 = (state_12900[(2)]);
var state_12900__$1 = state_12900;
var statearr_12908_13020 = state_12900__$1;
(statearr_12908_13020[(2)] = inst_12896);

(statearr_12908_13020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12901 === (8))){
var inst_12886 = (state_12900[(8)]);
var inst_12891 = (state_12900[(2)]);
var state_12900__$1 = (function (){var statearr_12909 = state_12900;
(statearr_12909[(9)] = inst_12891);

return statearr_12909;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12900__$1,(9),results,inst_12886);
} else {
if((state_val_12901 === (9))){
var inst_12893 = (state_12900[(2)]);
var state_12900__$1 = (function (){var statearr_12910 = state_12900;
(statearr_12910[(10)] = inst_12893);

return statearr_12910;
})();
var statearr_12911_13021 = state_12900__$1;
(statearr_12911_13021[(2)] = null);

(statearr_12911_13021[(1)] = (2));


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
});})(c__7026__auto___13015,jobs,results,process,async))
;
return ((function (switch__6961__auto__,c__7026__auto___13015,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0 = (function (){
var statearr_12915 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__);

(statearr_12915[(1)] = (1));

return statearr_12915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1 = (function (state_12900){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_12900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e12916){if((e12916 instanceof Object)){
var ex__6965__auto__ = e12916;
var statearr_12917_13022 = state_12900;
(statearr_12917_13022[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13023 = state_12900;
state_12900 = G__13023;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__ = function(state_12900){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1.call(this,state_12900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___13015,jobs,results,process,async))
})();
var state__7028__auto__ = (function (){var statearr_12918 = f__7027__auto__.call(null);
(statearr_12918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___13015);

return statearr_12918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___13015,jobs,results,process,async))
);


var c__7026__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto__,jobs,results,process,async){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto__,jobs,results,process,async){
return (function (state_12956){
var state_val_12957 = (state_12956[(1)]);
if((state_val_12957 === (7))){
var inst_12952 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
var statearr_12958_13024 = state_12956__$1;
(statearr_12958_13024[(2)] = inst_12952);

(statearr_12958_13024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (20))){
var state_12956__$1 = state_12956;
var statearr_12959_13025 = state_12956__$1;
(statearr_12959_13025[(2)] = null);

(statearr_12959_13025[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (1))){
var state_12956__$1 = state_12956;
var statearr_12960_13026 = state_12956__$1;
(statearr_12960_13026[(2)] = null);

(statearr_12960_13026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (4))){
var inst_12921 = (state_12956[(7)]);
var inst_12921__$1 = (state_12956[(2)]);
var inst_12922 = (inst_12921__$1 == null);
var state_12956__$1 = (function (){var statearr_12961 = state_12956;
(statearr_12961[(7)] = inst_12921__$1);

return statearr_12961;
})();
if(cljs.core.truth_(inst_12922)){
var statearr_12962_13027 = state_12956__$1;
(statearr_12962_13027[(1)] = (5));

} else {
var statearr_12963_13028 = state_12956__$1;
(statearr_12963_13028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (15))){
var inst_12934 = (state_12956[(8)]);
var state_12956__$1 = state_12956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12956__$1,(18),to,inst_12934);
} else {
if((state_val_12957 === (21))){
var inst_12947 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
var statearr_12964_13029 = state_12956__$1;
(statearr_12964_13029[(2)] = inst_12947);

(statearr_12964_13029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (13))){
var inst_12949 = (state_12956[(2)]);
var state_12956__$1 = (function (){var statearr_12965 = state_12956;
(statearr_12965[(9)] = inst_12949);

return statearr_12965;
})();
var statearr_12966_13030 = state_12956__$1;
(statearr_12966_13030[(2)] = null);

(statearr_12966_13030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (6))){
var inst_12921 = (state_12956[(7)]);
var state_12956__$1 = state_12956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12956__$1,(11),inst_12921);
} else {
if((state_val_12957 === (17))){
var inst_12942 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
if(cljs.core.truth_(inst_12942)){
var statearr_12967_13031 = state_12956__$1;
(statearr_12967_13031[(1)] = (19));

} else {
var statearr_12968_13032 = state_12956__$1;
(statearr_12968_13032[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (3))){
var inst_12954 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12956__$1,inst_12954);
} else {
if((state_val_12957 === (12))){
var inst_12931 = (state_12956[(10)]);
var state_12956__$1 = state_12956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12956__$1,(14),inst_12931);
} else {
if((state_val_12957 === (2))){
var state_12956__$1 = state_12956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12956__$1,(4),results);
} else {
if((state_val_12957 === (19))){
var state_12956__$1 = state_12956;
var statearr_12969_13033 = state_12956__$1;
(statearr_12969_13033[(2)] = null);

(statearr_12969_13033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (11))){
var inst_12931 = (state_12956[(2)]);
var state_12956__$1 = (function (){var statearr_12970 = state_12956;
(statearr_12970[(10)] = inst_12931);

return statearr_12970;
})();
var statearr_12971_13034 = state_12956__$1;
(statearr_12971_13034[(2)] = null);

(statearr_12971_13034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (9))){
var state_12956__$1 = state_12956;
var statearr_12972_13035 = state_12956__$1;
(statearr_12972_13035[(2)] = null);

(statearr_12972_13035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (5))){
var state_12956__$1 = state_12956;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12973_13036 = state_12956__$1;
(statearr_12973_13036[(1)] = (8));

} else {
var statearr_12974_13037 = state_12956__$1;
(statearr_12974_13037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (14))){
var inst_12936 = (state_12956[(11)]);
var inst_12934 = (state_12956[(8)]);
var inst_12934__$1 = (state_12956[(2)]);
var inst_12935 = (inst_12934__$1 == null);
var inst_12936__$1 = cljs.core.not.call(null,inst_12935);
var state_12956__$1 = (function (){var statearr_12975 = state_12956;
(statearr_12975[(11)] = inst_12936__$1);

(statearr_12975[(8)] = inst_12934__$1);

return statearr_12975;
})();
if(inst_12936__$1){
var statearr_12976_13038 = state_12956__$1;
(statearr_12976_13038[(1)] = (15));

} else {
var statearr_12977_13039 = state_12956__$1;
(statearr_12977_13039[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (16))){
var inst_12936 = (state_12956[(11)]);
var state_12956__$1 = state_12956;
var statearr_12978_13040 = state_12956__$1;
(statearr_12978_13040[(2)] = inst_12936);

(statearr_12978_13040[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (10))){
var inst_12928 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
var statearr_12979_13041 = state_12956__$1;
(statearr_12979_13041[(2)] = inst_12928);

(statearr_12979_13041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (18))){
var inst_12939 = (state_12956[(2)]);
var state_12956__$1 = state_12956;
var statearr_12980_13042 = state_12956__$1;
(statearr_12980_13042[(2)] = inst_12939);

(statearr_12980_13042[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12957 === (8))){
var inst_12925 = cljs.core.async.close_BANG_.call(null,to);
var state_12956__$1 = state_12956;
var statearr_12981_13043 = state_12956__$1;
(statearr_12981_13043[(2)] = inst_12925);

(statearr_12981_13043[(1)] = (10));


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
});})(c__7026__auto__,jobs,results,process,async))
;
return ((function (switch__6961__auto__,c__7026__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0 = (function (){
var statearr_12985 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12985[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__);

(statearr_12985[(1)] = (1));

return statearr_12985;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1 = (function (state_12956){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_12956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e12986){if((e12986 instanceof Object)){
var ex__6965__auto__ = e12986;
var statearr_12987_13044 = state_12956;
(statearr_12987_13044[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13045 = state_12956;
state_12956 = G__13045;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__ = function(state_12956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1.call(this,state_12956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6962__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto__,jobs,results,process,async))
})();
var state__7028__auto__ = (function (){var statearr_12988 = f__7027__auto__.call(null);
(statearr_12988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto__);

return statearr_12988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto__,jobs,results,process,async))
);

return c__7026__auto__;
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
var args13046 = [];
var len__5561__auto___13049 = arguments.length;
var i__5562__auto___13050 = (0);
while(true){
if((i__5562__auto___13050 < len__5561__auto___13049)){
args13046.push((arguments[i__5562__auto___13050]));

var G__13051 = (i__5562__auto___13050 + (1));
i__5562__auto___13050 = G__13051;
continue;
} else {
}
break;
}

var G__13048 = args13046.length;
switch (G__13048) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13046.length)].join('')));

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
var args13053 = [];
var len__5561__auto___13056 = arguments.length;
var i__5562__auto___13057 = (0);
while(true){
if((i__5562__auto___13057 < len__5561__auto___13056)){
args13053.push((arguments[i__5562__auto___13057]));

var G__13058 = (i__5562__auto___13057 + (1));
i__5562__auto___13057 = G__13058;
continue;
} else {
}
break;
}

var G__13055 = args13053.length;
switch (G__13055) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13053.length)].join('')));

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
var args13060 = [];
var len__5561__auto___13113 = arguments.length;
var i__5562__auto___13114 = (0);
while(true){
if((i__5562__auto___13114 < len__5561__auto___13113)){
args13060.push((arguments[i__5562__auto___13114]));

var G__13115 = (i__5562__auto___13114 + (1));
i__5562__auto___13114 = G__13115;
continue;
} else {
}
break;
}

var G__13062 = args13060.length;
switch (G__13062) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13060.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7026__auto___13117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___13117,tc,fc){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___13117,tc,fc){
return (function (state_13088){
var state_val_13089 = (state_13088[(1)]);
if((state_val_13089 === (7))){
var inst_13084 = (state_13088[(2)]);
var state_13088__$1 = state_13088;
var statearr_13090_13118 = state_13088__$1;
(statearr_13090_13118[(2)] = inst_13084);

(statearr_13090_13118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (1))){
var state_13088__$1 = state_13088;
var statearr_13091_13119 = state_13088__$1;
(statearr_13091_13119[(2)] = null);

(statearr_13091_13119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (4))){
var inst_13065 = (state_13088[(7)]);
var inst_13065__$1 = (state_13088[(2)]);
var inst_13066 = (inst_13065__$1 == null);
var state_13088__$1 = (function (){var statearr_13092 = state_13088;
(statearr_13092[(7)] = inst_13065__$1);

return statearr_13092;
})();
if(cljs.core.truth_(inst_13066)){
var statearr_13093_13120 = state_13088__$1;
(statearr_13093_13120[(1)] = (5));

} else {
var statearr_13094_13121 = state_13088__$1;
(statearr_13094_13121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (13))){
var state_13088__$1 = state_13088;
var statearr_13095_13122 = state_13088__$1;
(statearr_13095_13122[(2)] = null);

(statearr_13095_13122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (6))){
var inst_13065 = (state_13088[(7)]);
var inst_13071 = p.call(null,inst_13065);
var state_13088__$1 = state_13088;
if(cljs.core.truth_(inst_13071)){
var statearr_13096_13123 = state_13088__$1;
(statearr_13096_13123[(1)] = (9));

} else {
var statearr_13097_13124 = state_13088__$1;
(statearr_13097_13124[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (3))){
var inst_13086 = (state_13088[(2)]);
var state_13088__$1 = state_13088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13088__$1,inst_13086);
} else {
if((state_val_13089 === (12))){
var state_13088__$1 = state_13088;
var statearr_13098_13125 = state_13088__$1;
(statearr_13098_13125[(2)] = null);

(statearr_13098_13125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (2))){
var state_13088__$1 = state_13088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13088__$1,(4),ch);
} else {
if((state_val_13089 === (11))){
var inst_13065 = (state_13088[(7)]);
var inst_13075 = (state_13088[(2)]);
var state_13088__$1 = state_13088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13088__$1,(8),inst_13075,inst_13065);
} else {
if((state_val_13089 === (9))){
var state_13088__$1 = state_13088;
var statearr_13099_13126 = state_13088__$1;
(statearr_13099_13126[(2)] = tc);

(statearr_13099_13126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (5))){
var inst_13068 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13069 = cljs.core.async.close_BANG_.call(null,fc);
var state_13088__$1 = (function (){var statearr_13100 = state_13088;
(statearr_13100[(8)] = inst_13068);

return statearr_13100;
})();
var statearr_13101_13127 = state_13088__$1;
(statearr_13101_13127[(2)] = inst_13069);

(statearr_13101_13127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (14))){
var inst_13082 = (state_13088[(2)]);
var state_13088__$1 = state_13088;
var statearr_13102_13128 = state_13088__$1;
(statearr_13102_13128[(2)] = inst_13082);

(statearr_13102_13128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (10))){
var state_13088__$1 = state_13088;
var statearr_13103_13129 = state_13088__$1;
(statearr_13103_13129[(2)] = fc);

(statearr_13103_13129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13089 === (8))){
var inst_13077 = (state_13088[(2)]);
var state_13088__$1 = state_13088;
if(cljs.core.truth_(inst_13077)){
var statearr_13104_13130 = state_13088__$1;
(statearr_13104_13130[(1)] = (12));

} else {
var statearr_13105_13131 = state_13088__$1;
(statearr_13105_13131[(1)] = (13));

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
});})(c__7026__auto___13117,tc,fc))
;
return ((function (switch__6961__auto__,c__7026__auto___13117,tc,fc){
return (function() {
var cljs$core$async$state_machine__6962__auto__ = null;
var cljs$core$async$state_machine__6962__auto____0 = (function (){
var statearr_13109 = [null,null,null,null,null,null,null,null,null];
(statearr_13109[(0)] = cljs$core$async$state_machine__6962__auto__);

(statearr_13109[(1)] = (1));

return statearr_13109;
});
var cljs$core$async$state_machine__6962__auto____1 = (function (state_13088){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_13088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e13110){if((e13110 instanceof Object)){
var ex__6965__auto__ = e13110;
var statearr_13111_13132 = state_13088;
(statearr_13111_13132[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13133 = state_13088;
state_13088 = G__13133;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$state_machine__6962__auto__ = function(state_13088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6962__auto____1.call(this,state_13088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6962__auto____0;
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6962__auto____1;
return cljs$core$async$state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___13117,tc,fc))
})();
var state__7028__auto__ = (function (){var statearr_13112 = f__7027__auto__.call(null);
(statearr_13112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___13117);

return statearr_13112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___13117,tc,fc))
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
var c__7026__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto__){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto__){
return (function (state_13180){
var state_val_13181 = (state_13180[(1)]);
if((state_val_13181 === (1))){
var inst_13166 = init;
var state_13180__$1 = (function (){var statearr_13182 = state_13180;
(statearr_13182[(7)] = inst_13166);

return statearr_13182;
})();
var statearr_13183_13198 = state_13180__$1;
(statearr_13183_13198[(2)] = null);

(statearr_13183_13198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13181 === (2))){
var state_13180__$1 = state_13180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13180__$1,(4),ch);
} else {
if((state_val_13181 === (3))){
var inst_13178 = (state_13180[(2)]);
var state_13180__$1 = state_13180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13180__$1,inst_13178);
} else {
if((state_val_13181 === (4))){
var inst_13169 = (state_13180[(8)]);
var inst_13169__$1 = (state_13180[(2)]);
var inst_13170 = (inst_13169__$1 == null);
var state_13180__$1 = (function (){var statearr_13184 = state_13180;
(statearr_13184[(8)] = inst_13169__$1);

return statearr_13184;
})();
if(cljs.core.truth_(inst_13170)){
var statearr_13185_13199 = state_13180__$1;
(statearr_13185_13199[(1)] = (5));

} else {
var statearr_13186_13200 = state_13180__$1;
(statearr_13186_13200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13181 === (5))){
var inst_13166 = (state_13180[(7)]);
var state_13180__$1 = state_13180;
var statearr_13187_13201 = state_13180__$1;
(statearr_13187_13201[(2)] = inst_13166);

(statearr_13187_13201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13181 === (6))){
var inst_13166 = (state_13180[(7)]);
var inst_13169 = (state_13180[(8)]);
var inst_13173 = f.call(null,inst_13166,inst_13169);
var inst_13166__$1 = inst_13173;
var state_13180__$1 = (function (){var statearr_13188 = state_13180;
(statearr_13188[(7)] = inst_13166__$1);

return statearr_13188;
})();
var statearr_13189_13202 = state_13180__$1;
(statearr_13189_13202[(2)] = null);

(statearr_13189_13202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13181 === (7))){
var inst_13176 = (state_13180[(2)]);
var state_13180__$1 = state_13180;
var statearr_13190_13203 = state_13180__$1;
(statearr_13190_13203[(2)] = inst_13176);

(statearr_13190_13203[(1)] = (3));


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
});})(c__7026__auto__))
;
return ((function (switch__6961__auto__,c__7026__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6962__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6962__auto____0 = (function (){
var statearr_13194 = [null,null,null,null,null,null,null,null,null];
(statearr_13194[(0)] = cljs$core$async$reduce_$_state_machine__6962__auto__);

(statearr_13194[(1)] = (1));

return statearr_13194;
});
var cljs$core$async$reduce_$_state_machine__6962__auto____1 = (function (state_13180){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_13180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e13195){if((e13195 instanceof Object)){
var ex__6965__auto__ = e13195;
var statearr_13196_13204 = state_13180;
(statearr_13196_13204[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13205 = state_13180;
state_13180 = G__13205;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6962__auto__ = function(state_13180){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6962__auto____1.call(this,state_13180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6962__auto____0;
cljs$core$async$reduce_$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6962__auto____1;
return cljs$core$async$reduce_$_state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto__))
})();
var state__7028__auto__ = (function (){var statearr_13197 = f__7027__auto__.call(null);
(statearr_13197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto__);

return statearr_13197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto__))
);

return c__7026__auto__;
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
var args13206 = [];
var len__5561__auto___13258 = arguments.length;
var i__5562__auto___13259 = (0);
while(true){
if((i__5562__auto___13259 < len__5561__auto___13258)){
args13206.push((arguments[i__5562__auto___13259]));

var G__13260 = (i__5562__auto___13259 + (1));
i__5562__auto___13259 = G__13260;
continue;
} else {
}
break;
}

var G__13208 = args13206.length;
switch (G__13208) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13206.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7026__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto__){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto__){
return (function (state_13233){
var state_val_13234 = (state_13233[(1)]);
if((state_val_13234 === (7))){
var inst_13215 = (state_13233[(2)]);
var state_13233__$1 = state_13233;
var statearr_13235_13262 = state_13233__$1;
(statearr_13235_13262[(2)] = inst_13215);

(statearr_13235_13262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (1))){
var inst_13209 = cljs.core.seq.call(null,coll);
var inst_13210 = inst_13209;
var state_13233__$1 = (function (){var statearr_13236 = state_13233;
(statearr_13236[(7)] = inst_13210);

return statearr_13236;
})();
var statearr_13237_13263 = state_13233__$1;
(statearr_13237_13263[(2)] = null);

(statearr_13237_13263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (4))){
var inst_13210 = (state_13233[(7)]);
var inst_13213 = cljs.core.first.call(null,inst_13210);
var state_13233__$1 = state_13233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13233__$1,(7),ch,inst_13213);
} else {
if((state_val_13234 === (13))){
var inst_13227 = (state_13233[(2)]);
var state_13233__$1 = state_13233;
var statearr_13238_13264 = state_13233__$1;
(statearr_13238_13264[(2)] = inst_13227);

(statearr_13238_13264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (6))){
var inst_13218 = (state_13233[(2)]);
var state_13233__$1 = state_13233;
if(cljs.core.truth_(inst_13218)){
var statearr_13239_13265 = state_13233__$1;
(statearr_13239_13265[(1)] = (8));

} else {
var statearr_13240_13266 = state_13233__$1;
(statearr_13240_13266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (3))){
var inst_13231 = (state_13233[(2)]);
var state_13233__$1 = state_13233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13233__$1,inst_13231);
} else {
if((state_val_13234 === (12))){
var state_13233__$1 = state_13233;
var statearr_13241_13267 = state_13233__$1;
(statearr_13241_13267[(2)] = null);

(statearr_13241_13267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (2))){
var inst_13210 = (state_13233[(7)]);
var state_13233__$1 = state_13233;
if(cljs.core.truth_(inst_13210)){
var statearr_13242_13268 = state_13233__$1;
(statearr_13242_13268[(1)] = (4));

} else {
var statearr_13243_13269 = state_13233__$1;
(statearr_13243_13269[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (11))){
var inst_13224 = cljs.core.async.close_BANG_.call(null,ch);
var state_13233__$1 = state_13233;
var statearr_13244_13270 = state_13233__$1;
(statearr_13244_13270[(2)] = inst_13224);

(statearr_13244_13270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (9))){
var state_13233__$1 = state_13233;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13245_13271 = state_13233__$1;
(statearr_13245_13271[(1)] = (11));

} else {
var statearr_13246_13272 = state_13233__$1;
(statearr_13246_13272[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (5))){
var inst_13210 = (state_13233[(7)]);
var state_13233__$1 = state_13233;
var statearr_13247_13273 = state_13233__$1;
(statearr_13247_13273[(2)] = inst_13210);

(statearr_13247_13273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (10))){
var inst_13229 = (state_13233[(2)]);
var state_13233__$1 = state_13233;
var statearr_13248_13274 = state_13233__$1;
(statearr_13248_13274[(2)] = inst_13229);

(statearr_13248_13274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (8))){
var inst_13210 = (state_13233[(7)]);
var inst_13220 = cljs.core.next.call(null,inst_13210);
var inst_13210__$1 = inst_13220;
var state_13233__$1 = (function (){var statearr_13249 = state_13233;
(statearr_13249[(7)] = inst_13210__$1);

return statearr_13249;
})();
var statearr_13250_13275 = state_13233__$1;
(statearr_13250_13275[(2)] = null);

(statearr_13250_13275[(1)] = (2));


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
});})(c__7026__auto__))
;
return ((function (switch__6961__auto__,c__7026__auto__){
return (function() {
var cljs$core$async$state_machine__6962__auto__ = null;
var cljs$core$async$state_machine__6962__auto____0 = (function (){
var statearr_13254 = [null,null,null,null,null,null,null,null];
(statearr_13254[(0)] = cljs$core$async$state_machine__6962__auto__);

(statearr_13254[(1)] = (1));

return statearr_13254;
});
var cljs$core$async$state_machine__6962__auto____1 = (function (state_13233){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_13233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e13255){if((e13255 instanceof Object)){
var ex__6965__auto__ = e13255;
var statearr_13256_13276 = state_13233;
(statearr_13256_13276[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13277 = state_13233;
state_13233 = G__13277;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$state_machine__6962__auto__ = function(state_13233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6962__auto____1.call(this,state_13233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6962__auto____0;
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6962__auto____1;
return cljs$core$async$state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto__))
})();
var state__7028__auto__ = (function (){var statearr_13257 = f__7027__auto__.call(null);
(statearr_13257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto__);

return statearr_13257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto__))
);

return c__7026__auto__;
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
var x__5158__auto__ = (((_ == null))?null:_);
var m__5159__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5158__auto__)]);
if(!((m__5159__auto__ == null))){
return m__5159__auto__.call(null,_);
} else {
var m__5159__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5159__auto____$1 == null))){
return m__5159__auto____$1.call(null,_);
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
var x__5158__auto__ = (((m == null))?null:m);
var m__5159__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5158__auto__)]);
if(!((m__5159__auto__ == null))){
return m__5159__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5159__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5159__auto____$1 == null))){
return m__5159__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__5158__auto__ = (((m == null))?null:m);
var m__5159__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5158__auto__)]);
if(!((m__5159__auto__ == null))){
return m__5159__auto__.call(null,m,ch);
} else {
var m__5159__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5159__auto____$1 == null))){
return m__5159__auto____$1.call(null,m,ch);
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
var x__5158__auto__ = (((m == null))?null:m);
var m__5159__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5158__auto__)]);
if(!((m__5159__auto__ == null))){
return m__5159__auto__.call(null,m);
} else {
var m__5159__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5159__auto____$1 == null))){
return m__5159__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async13499 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13499 = (function (mult,ch,cs,meta13500){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13500 = meta13500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13501,meta13500__$1){
var self__ = this;
var _13501__$1 = this;
return (new cljs.core.async.t_cljs$core$async13499(self__.mult,self__.ch,self__.cs,meta13500__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13501){
var self__ = this;
var _13501__$1 = this;
return self__.meta13500;
});})(cs))
;

cljs.core.async.t_cljs$core$async13499.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13499.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13499.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13499.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13499.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13499.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13499.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13500","meta13500",-2117235484,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13499.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13499";

cljs.core.async.t_cljs$core$async13499.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cljs.core.async/t_cljs$core$async13499");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13499 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13499(mult__$1,ch__$1,cs__$1,meta13500){
return (new cljs.core.async.t_cljs$core$async13499(mult__$1,ch__$1,cs__$1,meta13500));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13499(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7026__auto___13720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___13720,cs,m,dchan,dctr,done){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___13720,cs,m,dchan,dctr,done){
return (function (state_13632){
var state_val_13633 = (state_13632[(1)]);
if((state_val_13633 === (7))){
var inst_13628 = (state_13632[(2)]);
var state_13632__$1 = state_13632;
var statearr_13634_13721 = state_13632__$1;
(statearr_13634_13721[(2)] = inst_13628);

(statearr_13634_13721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (20))){
var inst_13533 = (state_13632[(7)]);
var inst_13543 = cljs.core.first.call(null,inst_13533);
var inst_13544 = cljs.core.nth.call(null,inst_13543,(0),null);
var inst_13545 = cljs.core.nth.call(null,inst_13543,(1),null);
var state_13632__$1 = (function (){var statearr_13635 = state_13632;
(statearr_13635[(8)] = inst_13544);

return statearr_13635;
})();
if(cljs.core.truth_(inst_13545)){
var statearr_13636_13722 = state_13632__$1;
(statearr_13636_13722[(1)] = (22));

} else {
var statearr_13637_13723 = state_13632__$1;
(statearr_13637_13723[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (27))){
var inst_13573 = (state_13632[(9)]);
var inst_13504 = (state_13632[(10)]);
var inst_13575 = (state_13632[(11)]);
var inst_13580 = (state_13632[(12)]);
var inst_13580__$1 = cljs.core._nth.call(null,inst_13573,inst_13575);
var inst_13581 = cljs.core.async.put_BANG_.call(null,inst_13580__$1,inst_13504,done);
var state_13632__$1 = (function (){var statearr_13638 = state_13632;
(statearr_13638[(12)] = inst_13580__$1);

return statearr_13638;
})();
if(cljs.core.truth_(inst_13581)){
var statearr_13639_13724 = state_13632__$1;
(statearr_13639_13724[(1)] = (30));

} else {
var statearr_13640_13725 = state_13632__$1;
(statearr_13640_13725[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (1))){
var state_13632__$1 = state_13632;
var statearr_13641_13726 = state_13632__$1;
(statearr_13641_13726[(2)] = null);

(statearr_13641_13726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (24))){
var inst_13533 = (state_13632[(7)]);
var inst_13550 = (state_13632[(2)]);
var inst_13551 = cljs.core.next.call(null,inst_13533);
var inst_13513 = inst_13551;
var inst_13514 = null;
var inst_13515 = (0);
var inst_13516 = (0);
var state_13632__$1 = (function (){var statearr_13642 = state_13632;
(statearr_13642[(13)] = inst_13550);

(statearr_13642[(14)] = inst_13514);

(statearr_13642[(15)] = inst_13513);

(statearr_13642[(16)] = inst_13515);

(statearr_13642[(17)] = inst_13516);

return statearr_13642;
})();
var statearr_13643_13727 = state_13632__$1;
(statearr_13643_13727[(2)] = null);

(statearr_13643_13727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (39))){
var state_13632__$1 = state_13632;
var statearr_13647_13728 = state_13632__$1;
(statearr_13647_13728[(2)] = null);

(statearr_13647_13728[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (4))){
var inst_13504 = (state_13632[(10)]);
var inst_13504__$1 = (state_13632[(2)]);
var inst_13505 = (inst_13504__$1 == null);
var state_13632__$1 = (function (){var statearr_13648 = state_13632;
(statearr_13648[(10)] = inst_13504__$1);

return statearr_13648;
})();
if(cljs.core.truth_(inst_13505)){
var statearr_13649_13729 = state_13632__$1;
(statearr_13649_13729[(1)] = (5));

} else {
var statearr_13650_13730 = state_13632__$1;
(statearr_13650_13730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (15))){
var inst_13514 = (state_13632[(14)]);
var inst_13513 = (state_13632[(15)]);
var inst_13515 = (state_13632[(16)]);
var inst_13516 = (state_13632[(17)]);
var inst_13529 = (state_13632[(2)]);
var inst_13530 = (inst_13516 + (1));
var tmp13644 = inst_13514;
var tmp13645 = inst_13513;
var tmp13646 = inst_13515;
var inst_13513__$1 = tmp13645;
var inst_13514__$1 = tmp13644;
var inst_13515__$1 = tmp13646;
var inst_13516__$1 = inst_13530;
var state_13632__$1 = (function (){var statearr_13651 = state_13632;
(statearr_13651[(14)] = inst_13514__$1);

(statearr_13651[(15)] = inst_13513__$1);

(statearr_13651[(16)] = inst_13515__$1);

(statearr_13651[(18)] = inst_13529);

(statearr_13651[(17)] = inst_13516__$1);

return statearr_13651;
})();
var statearr_13652_13731 = state_13632__$1;
(statearr_13652_13731[(2)] = null);

(statearr_13652_13731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (21))){
var inst_13554 = (state_13632[(2)]);
var state_13632__$1 = state_13632;
var statearr_13656_13732 = state_13632__$1;
(statearr_13656_13732[(2)] = inst_13554);

(statearr_13656_13732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (31))){
var inst_13580 = (state_13632[(12)]);
var inst_13584 = done.call(null,null);
var inst_13585 = cljs.core.async.untap_STAR_.call(null,m,inst_13580);
var state_13632__$1 = (function (){var statearr_13657 = state_13632;
(statearr_13657[(19)] = inst_13584);

return statearr_13657;
})();
var statearr_13658_13733 = state_13632__$1;
(statearr_13658_13733[(2)] = inst_13585);

(statearr_13658_13733[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (32))){
var inst_13573 = (state_13632[(9)]);
var inst_13575 = (state_13632[(11)]);
var inst_13572 = (state_13632[(20)]);
var inst_13574 = (state_13632[(21)]);
var inst_13587 = (state_13632[(2)]);
var inst_13588 = (inst_13575 + (1));
var tmp13653 = inst_13573;
var tmp13654 = inst_13572;
var tmp13655 = inst_13574;
var inst_13572__$1 = tmp13654;
var inst_13573__$1 = tmp13653;
var inst_13574__$1 = tmp13655;
var inst_13575__$1 = inst_13588;
var state_13632__$1 = (function (){var statearr_13659 = state_13632;
(statearr_13659[(9)] = inst_13573__$1);

(statearr_13659[(11)] = inst_13575__$1);

(statearr_13659[(20)] = inst_13572__$1);

(statearr_13659[(22)] = inst_13587);

(statearr_13659[(21)] = inst_13574__$1);

return statearr_13659;
})();
var statearr_13660_13734 = state_13632__$1;
(statearr_13660_13734[(2)] = null);

(statearr_13660_13734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (40))){
var inst_13600 = (state_13632[(23)]);
var inst_13604 = done.call(null,null);
var inst_13605 = cljs.core.async.untap_STAR_.call(null,m,inst_13600);
var state_13632__$1 = (function (){var statearr_13661 = state_13632;
(statearr_13661[(24)] = inst_13604);

return statearr_13661;
})();
var statearr_13662_13735 = state_13632__$1;
(statearr_13662_13735[(2)] = inst_13605);

(statearr_13662_13735[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (33))){
var inst_13591 = (state_13632[(25)]);
var inst_13593 = cljs.core.chunked_seq_QMARK_.call(null,inst_13591);
var state_13632__$1 = state_13632;
if(inst_13593){
var statearr_13663_13736 = state_13632__$1;
(statearr_13663_13736[(1)] = (36));

} else {
var statearr_13664_13737 = state_13632__$1;
(statearr_13664_13737[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (13))){
var inst_13523 = (state_13632[(26)]);
var inst_13526 = cljs.core.async.close_BANG_.call(null,inst_13523);
var state_13632__$1 = state_13632;
var statearr_13665_13738 = state_13632__$1;
(statearr_13665_13738[(2)] = inst_13526);

(statearr_13665_13738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (22))){
var inst_13544 = (state_13632[(8)]);
var inst_13547 = cljs.core.async.close_BANG_.call(null,inst_13544);
var state_13632__$1 = state_13632;
var statearr_13666_13739 = state_13632__$1;
(statearr_13666_13739[(2)] = inst_13547);

(statearr_13666_13739[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (36))){
var inst_13591 = (state_13632[(25)]);
var inst_13595 = cljs.core.chunk_first.call(null,inst_13591);
var inst_13596 = cljs.core.chunk_rest.call(null,inst_13591);
var inst_13597 = cljs.core.count.call(null,inst_13595);
var inst_13572 = inst_13596;
var inst_13573 = inst_13595;
var inst_13574 = inst_13597;
var inst_13575 = (0);
var state_13632__$1 = (function (){var statearr_13667 = state_13632;
(statearr_13667[(9)] = inst_13573);

(statearr_13667[(11)] = inst_13575);

(statearr_13667[(20)] = inst_13572);

(statearr_13667[(21)] = inst_13574);

return statearr_13667;
})();
var statearr_13668_13740 = state_13632__$1;
(statearr_13668_13740[(2)] = null);

(statearr_13668_13740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (41))){
var inst_13591 = (state_13632[(25)]);
var inst_13607 = (state_13632[(2)]);
var inst_13608 = cljs.core.next.call(null,inst_13591);
var inst_13572 = inst_13608;
var inst_13573 = null;
var inst_13574 = (0);
var inst_13575 = (0);
var state_13632__$1 = (function (){var statearr_13669 = state_13632;
(statearr_13669[(9)] = inst_13573);

(statearr_13669[(11)] = inst_13575);

(statearr_13669[(20)] = inst_13572);

(statearr_13669[(27)] = inst_13607);

(statearr_13669[(21)] = inst_13574);

return statearr_13669;
})();
var statearr_13670_13741 = state_13632__$1;
(statearr_13670_13741[(2)] = null);

(statearr_13670_13741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (43))){
var state_13632__$1 = state_13632;
var statearr_13671_13742 = state_13632__$1;
(statearr_13671_13742[(2)] = null);

(statearr_13671_13742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (29))){
var inst_13616 = (state_13632[(2)]);
var state_13632__$1 = state_13632;
var statearr_13672_13743 = state_13632__$1;
(statearr_13672_13743[(2)] = inst_13616);

(statearr_13672_13743[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (44))){
var inst_13625 = (state_13632[(2)]);
var state_13632__$1 = (function (){var statearr_13673 = state_13632;
(statearr_13673[(28)] = inst_13625);

return statearr_13673;
})();
var statearr_13674_13744 = state_13632__$1;
(statearr_13674_13744[(2)] = null);

(statearr_13674_13744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (6))){
var inst_13564 = (state_13632[(29)]);
var inst_13563 = cljs.core.deref.call(null,cs);
var inst_13564__$1 = cljs.core.keys.call(null,inst_13563);
var inst_13565 = cljs.core.count.call(null,inst_13564__$1);
var inst_13566 = cljs.core.reset_BANG_.call(null,dctr,inst_13565);
var inst_13571 = cljs.core.seq.call(null,inst_13564__$1);
var inst_13572 = inst_13571;
var inst_13573 = null;
var inst_13574 = (0);
var inst_13575 = (0);
var state_13632__$1 = (function (){var statearr_13675 = state_13632;
(statearr_13675[(9)] = inst_13573);

(statearr_13675[(30)] = inst_13566);

(statearr_13675[(29)] = inst_13564__$1);

(statearr_13675[(11)] = inst_13575);

(statearr_13675[(20)] = inst_13572);

(statearr_13675[(21)] = inst_13574);

return statearr_13675;
})();
var statearr_13676_13745 = state_13632__$1;
(statearr_13676_13745[(2)] = null);

(statearr_13676_13745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (28))){
var inst_13572 = (state_13632[(20)]);
var inst_13591 = (state_13632[(25)]);
var inst_13591__$1 = cljs.core.seq.call(null,inst_13572);
var state_13632__$1 = (function (){var statearr_13677 = state_13632;
(statearr_13677[(25)] = inst_13591__$1);

return statearr_13677;
})();
if(inst_13591__$1){
var statearr_13678_13746 = state_13632__$1;
(statearr_13678_13746[(1)] = (33));

} else {
var statearr_13679_13747 = state_13632__$1;
(statearr_13679_13747[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (25))){
var inst_13575 = (state_13632[(11)]);
var inst_13574 = (state_13632[(21)]);
var inst_13577 = (inst_13575 < inst_13574);
var inst_13578 = inst_13577;
var state_13632__$1 = state_13632;
if(cljs.core.truth_(inst_13578)){
var statearr_13680_13748 = state_13632__$1;
(statearr_13680_13748[(1)] = (27));

} else {
var statearr_13681_13749 = state_13632__$1;
(statearr_13681_13749[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (34))){
var state_13632__$1 = state_13632;
var statearr_13682_13750 = state_13632__$1;
(statearr_13682_13750[(2)] = null);

(statearr_13682_13750[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (17))){
var state_13632__$1 = state_13632;
var statearr_13683_13751 = state_13632__$1;
(statearr_13683_13751[(2)] = null);

(statearr_13683_13751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (3))){
var inst_13630 = (state_13632[(2)]);
var state_13632__$1 = state_13632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13632__$1,inst_13630);
} else {
if((state_val_13633 === (12))){
var inst_13559 = (state_13632[(2)]);
var state_13632__$1 = state_13632;
var statearr_13684_13752 = state_13632__$1;
(statearr_13684_13752[(2)] = inst_13559);

(statearr_13684_13752[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (2))){
var state_13632__$1 = state_13632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13632__$1,(4),ch);
} else {
if((state_val_13633 === (23))){
var state_13632__$1 = state_13632;
var statearr_13685_13753 = state_13632__$1;
(statearr_13685_13753[(2)] = null);

(statearr_13685_13753[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (35))){
var inst_13614 = (state_13632[(2)]);
var state_13632__$1 = state_13632;
var statearr_13686_13754 = state_13632__$1;
(statearr_13686_13754[(2)] = inst_13614);

(statearr_13686_13754[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (19))){
var inst_13533 = (state_13632[(7)]);
var inst_13537 = cljs.core.chunk_first.call(null,inst_13533);
var inst_13538 = cljs.core.chunk_rest.call(null,inst_13533);
var inst_13539 = cljs.core.count.call(null,inst_13537);
var inst_13513 = inst_13538;
var inst_13514 = inst_13537;
var inst_13515 = inst_13539;
var inst_13516 = (0);
var state_13632__$1 = (function (){var statearr_13687 = state_13632;
(statearr_13687[(14)] = inst_13514);

(statearr_13687[(15)] = inst_13513);

(statearr_13687[(16)] = inst_13515);

(statearr_13687[(17)] = inst_13516);

return statearr_13687;
})();
var statearr_13688_13755 = state_13632__$1;
(statearr_13688_13755[(2)] = null);

(statearr_13688_13755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (11))){
var inst_13513 = (state_13632[(15)]);
var inst_13533 = (state_13632[(7)]);
var inst_13533__$1 = cljs.core.seq.call(null,inst_13513);
var state_13632__$1 = (function (){var statearr_13689 = state_13632;
(statearr_13689[(7)] = inst_13533__$1);

return statearr_13689;
})();
if(inst_13533__$1){
var statearr_13690_13756 = state_13632__$1;
(statearr_13690_13756[(1)] = (16));

} else {
var statearr_13691_13757 = state_13632__$1;
(statearr_13691_13757[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (9))){
var inst_13561 = (state_13632[(2)]);
var state_13632__$1 = state_13632;
var statearr_13692_13758 = state_13632__$1;
(statearr_13692_13758[(2)] = inst_13561);

(statearr_13692_13758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (5))){
var inst_13511 = cljs.core.deref.call(null,cs);
var inst_13512 = cljs.core.seq.call(null,inst_13511);
var inst_13513 = inst_13512;
var inst_13514 = null;
var inst_13515 = (0);
var inst_13516 = (0);
var state_13632__$1 = (function (){var statearr_13693 = state_13632;
(statearr_13693[(14)] = inst_13514);

(statearr_13693[(15)] = inst_13513);

(statearr_13693[(16)] = inst_13515);

(statearr_13693[(17)] = inst_13516);

return statearr_13693;
})();
var statearr_13694_13759 = state_13632__$1;
(statearr_13694_13759[(2)] = null);

(statearr_13694_13759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (14))){
var state_13632__$1 = state_13632;
var statearr_13695_13760 = state_13632__$1;
(statearr_13695_13760[(2)] = null);

(statearr_13695_13760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (45))){
var inst_13622 = (state_13632[(2)]);
var state_13632__$1 = state_13632;
var statearr_13696_13761 = state_13632__$1;
(statearr_13696_13761[(2)] = inst_13622);

(statearr_13696_13761[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (26))){
var inst_13564 = (state_13632[(29)]);
var inst_13618 = (state_13632[(2)]);
var inst_13619 = cljs.core.seq.call(null,inst_13564);
var state_13632__$1 = (function (){var statearr_13697 = state_13632;
(statearr_13697[(31)] = inst_13618);

return statearr_13697;
})();
if(inst_13619){
var statearr_13698_13762 = state_13632__$1;
(statearr_13698_13762[(1)] = (42));

} else {
var statearr_13699_13763 = state_13632__$1;
(statearr_13699_13763[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (16))){
var inst_13533 = (state_13632[(7)]);
var inst_13535 = cljs.core.chunked_seq_QMARK_.call(null,inst_13533);
var state_13632__$1 = state_13632;
if(inst_13535){
var statearr_13700_13764 = state_13632__$1;
(statearr_13700_13764[(1)] = (19));

} else {
var statearr_13701_13765 = state_13632__$1;
(statearr_13701_13765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (38))){
var inst_13611 = (state_13632[(2)]);
var state_13632__$1 = state_13632;
var statearr_13702_13766 = state_13632__$1;
(statearr_13702_13766[(2)] = inst_13611);

(statearr_13702_13766[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (30))){
var state_13632__$1 = state_13632;
var statearr_13703_13767 = state_13632__$1;
(statearr_13703_13767[(2)] = null);

(statearr_13703_13767[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (10))){
var inst_13514 = (state_13632[(14)]);
var inst_13516 = (state_13632[(17)]);
var inst_13522 = cljs.core._nth.call(null,inst_13514,inst_13516);
var inst_13523 = cljs.core.nth.call(null,inst_13522,(0),null);
var inst_13524 = cljs.core.nth.call(null,inst_13522,(1),null);
var state_13632__$1 = (function (){var statearr_13704 = state_13632;
(statearr_13704[(26)] = inst_13523);

return statearr_13704;
})();
if(cljs.core.truth_(inst_13524)){
var statearr_13705_13768 = state_13632__$1;
(statearr_13705_13768[(1)] = (13));

} else {
var statearr_13706_13769 = state_13632__$1;
(statearr_13706_13769[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (18))){
var inst_13557 = (state_13632[(2)]);
var state_13632__$1 = state_13632;
var statearr_13707_13770 = state_13632__$1;
(statearr_13707_13770[(2)] = inst_13557);

(statearr_13707_13770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (42))){
var state_13632__$1 = state_13632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13632__$1,(45),dchan);
} else {
if((state_val_13633 === (37))){
var inst_13504 = (state_13632[(10)]);
var inst_13600 = (state_13632[(23)]);
var inst_13591 = (state_13632[(25)]);
var inst_13600__$1 = cljs.core.first.call(null,inst_13591);
var inst_13601 = cljs.core.async.put_BANG_.call(null,inst_13600__$1,inst_13504,done);
var state_13632__$1 = (function (){var statearr_13708 = state_13632;
(statearr_13708[(23)] = inst_13600__$1);

return statearr_13708;
})();
if(cljs.core.truth_(inst_13601)){
var statearr_13709_13771 = state_13632__$1;
(statearr_13709_13771[(1)] = (39));

} else {
var statearr_13710_13772 = state_13632__$1;
(statearr_13710_13772[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13633 === (8))){
var inst_13515 = (state_13632[(16)]);
var inst_13516 = (state_13632[(17)]);
var inst_13518 = (inst_13516 < inst_13515);
var inst_13519 = inst_13518;
var state_13632__$1 = state_13632;
if(cljs.core.truth_(inst_13519)){
var statearr_13711_13773 = state_13632__$1;
(statearr_13711_13773[(1)] = (10));

} else {
var statearr_13712_13774 = state_13632__$1;
(statearr_13712_13774[(1)] = (11));

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
});})(c__7026__auto___13720,cs,m,dchan,dctr,done))
;
return ((function (switch__6961__auto__,c__7026__auto___13720,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6962__auto__ = null;
var cljs$core$async$mult_$_state_machine__6962__auto____0 = (function (){
var statearr_13716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13716[(0)] = cljs$core$async$mult_$_state_machine__6962__auto__);

(statearr_13716[(1)] = (1));

return statearr_13716;
});
var cljs$core$async$mult_$_state_machine__6962__auto____1 = (function (state_13632){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_13632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e13717){if((e13717 instanceof Object)){
var ex__6965__auto__ = e13717;
var statearr_13718_13775 = state_13632;
(statearr_13718_13775[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13776 = state_13632;
state_13632 = G__13776;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6962__auto__ = function(state_13632){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6962__auto____1.call(this,state_13632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6962__auto____0;
cljs$core$async$mult_$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6962__auto____1;
return cljs$core$async$mult_$_state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___13720,cs,m,dchan,dctr,done))
})();
var state__7028__auto__ = (function (){var statearr_13719 = f__7027__auto__.call(null);
(statearr_13719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___13720);

return statearr_13719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___13720,cs,m,dchan,dctr,done))
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
var args13777 = [];
var len__5561__auto___13780 = arguments.length;
var i__5562__auto___13781 = (0);
while(true){
if((i__5562__auto___13781 < len__5561__auto___13780)){
args13777.push((arguments[i__5562__auto___13781]));

var G__13782 = (i__5562__auto___13781 + (1));
i__5562__auto___13781 = G__13782;
continue;
} else {
}
break;
}

var G__13779 = args13777.length;
switch (G__13779) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13777.length)].join('')));

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
var x__5158__auto__ = (((m == null))?null:m);
var m__5159__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5158__auto__)]);
if(!((m__5159__auto__ == null))){
return m__5159__auto__.call(null,m,ch);
} else {
var m__5159__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5159__auto____$1 == null))){
return m__5159__auto____$1.call(null,m,ch);
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
var x__5158__auto__ = (((m == null))?null:m);
var m__5159__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5158__auto__)]);
if(!((m__5159__auto__ == null))){
return m__5159__auto__.call(null,m,ch);
} else {
var m__5159__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5159__auto____$1 == null))){
return m__5159__auto____$1.call(null,m,ch);
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
var x__5158__auto__ = (((m == null))?null:m);
var m__5159__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5158__auto__)]);
if(!((m__5159__auto__ == null))){
return m__5159__auto__.call(null,m);
} else {
var m__5159__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5159__auto____$1 == null))){
return m__5159__auto____$1.call(null,m);
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
var x__5158__auto__ = (((m == null))?null:m);
var m__5159__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5158__auto__)]);
if(!((m__5159__auto__ == null))){
return m__5159__auto__.call(null,m,state_map);
} else {
var m__5159__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5159__auto____$1 == null))){
return m__5159__auto____$1.call(null,m,state_map);
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
var x__5158__auto__ = (((m == null))?null:m);
var m__5159__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5158__auto__)]);
if(!((m__5159__auto__ == null))){
return m__5159__auto__.call(null,m,mode);
} else {
var m__5159__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5159__auto____$1 == null))){
return m__5159__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5568__auto__ = [];
var len__5561__auto___13794 = arguments.length;
var i__5562__auto___13795 = (0);
while(true){
if((i__5562__auto___13795 < len__5561__auto___13794)){
args__5568__auto__.push((arguments[i__5562__auto___13795]));

var G__13796 = (i__5562__auto___13795 + (1));
i__5562__auto___13795 = G__13796;
continue;
} else {
}
break;
}

var argseq__5569__auto__ = ((((3) < args__5568__auto__.length))?(new cljs.core.IndexedSeq(args__5568__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5569__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13788){
var map__13789 = p__13788;
var map__13789__$1 = ((((!((map__13789 == null)))?((((map__13789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13789):map__13789);
var opts = map__13789__$1;
var statearr_13791_13797 = state;
(statearr_13791_13797[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__13789,map__13789__$1,opts){
return (function (val){
var statearr_13792_13798 = state;
(statearr_13792_13798[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13789,map__13789__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_13793_13799 = state;
(statearr_13793_13799[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13784){
var G__13785 = cljs.core.first.call(null,seq13784);
var seq13784__$1 = cljs.core.next.call(null,seq13784);
var G__13786 = cljs.core.first.call(null,seq13784__$1);
var seq13784__$2 = cljs.core.next.call(null,seq13784__$1);
var G__13787 = cljs.core.first.call(null,seq13784__$2);
var seq13784__$3 = cljs.core.next.call(null,seq13784__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13785,G__13786,G__13787,seq13784__$3);
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
if(typeof cljs.core.async.t_cljs$core$async13963 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13963 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13964){
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
this.meta13964 = meta13964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13965,meta13964__$1){
var self__ = this;
var _13965__$1 = this;
return (new cljs.core.async.t_cljs$core$async13963(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13964__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13965){
var self__ = this;
var _13965__$1 = this;
return self__.meta13964;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13963.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13963.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13963.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async13963.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13963.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13963.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13963.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13963.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13963.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13964","meta13964",-553309310,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13963.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13963";

cljs.core.async.t_cljs$core$async13963.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cljs.core.async/t_cljs$core$async13963");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13963 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13963(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13964){
return (new cljs.core.async.t_cljs$core$async13963(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13964));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13963(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7026__auto___14126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___14126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___14126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14063){
var state_val_14064 = (state_14063[(1)]);
if((state_val_14064 === (7))){
var inst_13981 = (state_14063[(2)]);
var state_14063__$1 = state_14063;
var statearr_14065_14127 = state_14063__$1;
(statearr_14065_14127[(2)] = inst_13981);

(statearr_14065_14127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (20))){
var inst_13993 = (state_14063[(7)]);
var state_14063__$1 = state_14063;
var statearr_14066_14128 = state_14063__$1;
(statearr_14066_14128[(2)] = inst_13993);

(statearr_14066_14128[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (27))){
var state_14063__$1 = state_14063;
var statearr_14067_14129 = state_14063__$1;
(statearr_14067_14129[(2)] = null);

(statearr_14067_14129[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (1))){
var inst_13969 = (state_14063[(8)]);
var inst_13969__$1 = calc_state.call(null);
var inst_13971 = (inst_13969__$1 == null);
var inst_13972 = cljs.core.not.call(null,inst_13971);
var state_14063__$1 = (function (){var statearr_14068 = state_14063;
(statearr_14068[(8)] = inst_13969__$1);

return statearr_14068;
})();
if(inst_13972){
var statearr_14069_14130 = state_14063__$1;
(statearr_14069_14130[(1)] = (2));

} else {
var statearr_14070_14131 = state_14063__$1;
(statearr_14070_14131[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (24))){
var inst_14023 = (state_14063[(9)]);
var inst_14016 = (state_14063[(10)]);
var inst_14037 = (state_14063[(11)]);
var inst_14037__$1 = inst_14016.call(null,inst_14023);
var state_14063__$1 = (function (){var statearr_14071 = state_14063;
(statearr_14071[(11)] = inst_14037__$1);

return statearr_14071;
})();
if(cljs.core.truth_(inst_14037__$1)){
var statearr_14072_14132 = state_14063__$1;
(statearr_14072_14132[(1)] = (29));

} else {
var statearr_14073_14133 = state_14063__$1;
(statearr_14073_14133[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (4))){
var inst_13984 = (state_14063[(2)]);
var state_14063__$1 = state_14063;
if(cljs.core.truth_(inst_13984)){
var statearr_14074_14134 = state_14063__$1;
(statearr_14074_14134[(1)] = (8));

} else {
var statearr_14075_14135 = state_14063__$1;
(statearr_14075_14135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (15))){
var inst_14010 = (state_14063[(2)]);
var state_14063__$1 = state_14063;
if(cljs.core.truth_(inst_14010)){
var statearr_14076_14136 = state_14063__$1;
(statearr_14076_14136[(1)] = (19));

} else {
var statearr_14077_14137 = state_14063__$1;
(statearr_14077_14137[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (21))){
var inst_14015 = (state_14063[(12)]);
var inst_14015__$1 = (state_14063[(2)]);
var inst_14016 = cljs.core.get.call(null,inst_14015__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14017 = cljs.core.get.call(null,inst_14015__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14018 = cljs.core.get.call(null,inst_14015__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14063__$1 = (function (){var statearr_14078 = state_14063;
(statearr_14078[(12)] = inst_14015__$1);

(statearr_14078[(10)] = inst_14016);

(statearr_14078[(13)] = inst_14017);

return statearr_14078;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14063__$1,(22),inst_14018);
} else {
if((state_val_14064 === (31))){
var inst_14045 = (state_14063[(2)]);
var state_14063__$1 = state_14063;
if(cljs.core.truth_(inst_14045)){
var statearr_14079_14138 = state_14063__$1;
(statearr_14079_14138[(1)] = (32));

} else {
var statearr_14080_14139 = state_14063__$1;
(statearr_14080_14139[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (32))){
var inst_14022 = (state_14063[(14)]);
var state_14063__$1 = state_14063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14063__$1,(35),out,inst_14022);
} else {
if((state_val_14064 === (33))){
var inst_14015 = (state_14063[(12)]);
var inst_13993 = inst_14015;
var state_14063__$1 = (function (){var statearr_14081 = state_14063;
(statearr_14081[(7)] = inst_13993);

return statearr_14081;
})();
var statearr_14082_14140 = state_14063__$1;
(statearr_14082_14140[(2)] = null);

(statearr_14082_14140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (13))){
var inst_13993 = (state_14063[(7)]);
var inst_14000 = inst_13993.cljs$lang$protocol_mask$partition0$;
var inst_14001 = (inst_14000 & (64));
var inst_14002 = inst_13993.cljs$core$ISeq$;
var inst_14003 = (inst_14001) || (inst_14002);
var state_14063__$1 = state_14063;
if(cljs.core.truth_(inst_14003)){
var statearr_14083_14141 = state_14063__$1;
(statearr_14083_14141[(1)] = (16));

} else {
var statearr_14084_14142 = state_14063__$1;
(statearr_14084_14142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (22))){
var inst_14022 = (state_14063[(14)]);
var inst_14023 = (state_14063[(9)]);
var inst_14021 = (state_14063[(2)]);
var inst_14022__$1 = cljs.core.nth.call(null,inst_14021,(0),null);
var inst_14023__$1 = cljs.core.nth.call(null,inst_14021,(1),null);
var inst_14024 = (inst_14022__$1 == null);
var inst_14025 = cljs.core._EQ_.call(null,inst_14023__$1,change);
var inst_14026 = (inst_14024) || (inst_14025);
var state_14063__$1 = (function (){var statearr_14085 = state_14063;
(statearr_14085[(14)] = inst_14022__$1);

(statearr_14085[(9)] = inst_14023__$1);

return statearr_14085;
})();
if(cljs.core.truth_(inst_14026)){
var statearr_14086_14143 = state_14063__$1;
(statearr_14086_14143[(1)] = (23));

} else {
var statearr_14087_14144 = state_14063__$1;
(statearr_14087_14144[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (36))){
var inst_14015 = (state_14063[(12)]);
var inst_13993 = inst_14015;
var state_14063__$1 = (function (){var statearr_14088 = state_14063;
(statearr_14088[(7)] = inst_13993);

return statearr_14088;
})();
var statearr_14089_14145 = state_14063__$1;
(statearr_14089_14145[(2)] = null);

(statearr_14089_14145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (29))){
var inst_14037 = (state_14063[(11)]);
var state_14063__$1 = state_14063;
var statearr_14090_14146 = state_14063__$1;
(statearr_14090_14146[(2)] = inst_14037);

(statearr_14090_14146[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (6))){
var state_14063__$1 = state_14063;
var statearr_14091_14147 = state_14063__$1;
(statearr_14091_14147[(2)] = false);

(statearr_14091_14147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (28))){
var inst_14033 = (state_14063[(2)]);
var inst_14034 = calc_state.call(null);
var inst_13993 = inst_14034;
var state_14063__$1 = (function (){var statearr_14092 = state_14063;
(statearr_14092[(7)] = inst_13993);

(statearr_14092[(15)] = inst_14033);

return statearr_14092;
})();
var statearr_14093_14148 = state_14063__$1;
(statearr_14093_14148[(2)] = null);

(statearr_14093_14148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (25))){
var inst_14059 = (state_14063[(2)]);
var state_14063__$1 = state_14063;
var statearr_14094_14149 = state_14063__$1;
(statearr_14094_14149[(2)] = inst_14059);

(statearr_14094_14149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (34))){
var inst_14057 = (state_14063[(2)]);
var state_14063__$1 = state_14063;
var statearr_14095_14150 = state_14063__$1;
(statearr_14095_14150[(2)] = inst_14057);

(statearr_14095_14150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (17))){
var state_14063__$1 = state_14063;
var statearr_14096_14151 = state_14063__$1;
(statearr_14096_14151[(2)] = false);

(statearr_14096_14151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (3))){
var state_14063__$1 = state_14063;
var statearr_14097_14152 = state_14063__$1;
(statearr_14097_14152[(2)] = false);

(statearr_14097_14152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (12))){
var inst_14061 = (state_14063[(2)]);
var state_14063__$1 = state_14063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14063__$1,inst_14061);
} else {
if((state_val_14064 === (2))){
var inst_13969 = (state_14063[(8)]);
var inst_13974 = inst_13969.cljs$lang$protocol_mask$partition0$;
var inst_13975 = (inst_13974 & (64));
var inst_13976 = inst_13969.cljs$core$ISeq$;
var inst_13977 = (inst_13975) || (inst_13976);
var state_14063__$1 = state_14063;
if(cljs.core.truth_(inst_13977)){
var statearr_14098_14153 = state_14063__$1;
(statearr_14098_14153[(1)] = (5));

} else {
var statearr_14099_14154 = state_14063__$1;
(statearr_14099_14154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (23))){
var inst_14022 = (state_14063[(14)]);
var inst_14028 = (inst_14022 == null);
var state_14063__$1 = state_14063;
if(cljs.core.truth_(inst_14028)){
var statearr_14100_14155 = state_14063__$1;
(statearr_14100_14155[(1)] = (26));

} else {
var statearr_14101_14156 = state_14063__$1;
(statearr_14101_14156[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (35))){
var inst_14048 = (state_14063[(2)]);
var state_14063__$1 = state_14063;
if(cljs.core.truth_(inst_14048)){
var statearr_14102_14157 = state_14063__$1;
(statearr_14102_14157[(1)] = (36));

} else {
var statearr_14103_14158 = state_14063__$1;
(statearr_14103_14158[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (19))){
var inst_13993 = (state_14063[(7)]);
var inst_14012 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13993);
var state_14063__$1 = state_14063;
var statearr_14104_14159 = state_14063__$1;
(statearr_14104_14159[(2)] = inst_14012);

(statearr_14104_14159[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (11))){
var inst_13993 = (state_14063[(7)]);
var inst_13997 = (inst_13993 == null);
var inst_13998 = cljs.core.not.call(null,inst_13997);
var state_14063__$1 = state_14063;
if(inst_13998){
var statearr_14105_14160 = state_14063__$1;
(statearr_14105_14160[(1)] = (13));

} else {
var statearr_14106_14161 = state_14063__$1;
(statearr_14106_14161[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (9))){
var inst_13969 = (state_14063[(8)]);
var state_14063__$1 = state_14063;
var statearr_14107_14162 = state_14063__$1;
(statearr_14107_14162[(2)] = inst_13969);

(statearr_14107_14162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (5))){
var state_14063__$1 = state_14063;
var statearr_14108_14163 = state_14063__$1;
(statearr_14108_14163[(2)] = true);

(statearr_14108_14163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (14))){
var state_14063__$1 = state_14063;
var statearr_14109_14164 = state_14063__$1;
(statearr_14109_14164[(2)] = false);

(statearr_14109_14164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (26))){
var inst_14023 = (state_14063[(9)]);
var inst_14030 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14023);
var state_14063__$1 = state_14063;
var statearr_14110_14165 = state_14063__$1;
(statearr_14110_14165[(2)] = inst_14030);

(statearr_14110_14165[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (16))){
var state_14063__$1 = state_14063;
var statearr_14111_14166 = state_14063__$1;
(statearr_14111_14166[(2)] = true);

(statearr_14111_14166[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (38))){
var inst_14053 = (state_14063[(2)]);
var state_14063__$1 = state_14063;
var statearr_14112_14167 = state_14063__$1;
(statearr_14112_14167[(2)] = inst_14053);

(statearr_14112_14167[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (30))){
var inst_14023 = (state_14063[(9)]);
var inst_14016 = (state_14063[(10)]);
var inst_14017 = (state_14063[(13)]);
var inst_14040 = cljs.core.empty_QMARK_.call(null,inst_14016);
var inst_14041 = inst_14017.call(null,inst_14023);
var inst_14042 = cljs.core.not.call(null,inst_14041);
var inst_14043 = (inst_14040) && (inst_14042);
var state_14063__$1 = state_14063;
var statearr_14113_14168 = state_14063__$1;
(statearr_14113_14168[(2)] = inst_14043);

(statearr_14113_14168[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (10))){
var inst_13969 = (state_14063[(8)]);
var inst_13989 = (state_14063[(2)]);
var inst_13990 = cljs.core.get.call(null,inst_13989,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13991 = cljs.core.get.call(null,inst_13989,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13992 = cljs.core.get.call(null,inst_13989,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13993 = inst_13969;
var state_14063__$1 = (function (){var statearr_14114 = state_14063;
(statearr_14114[(16)] = inst_13990);

(statearr_14114[(17)] = inst_13992);

(statearr_14114[(7)] = inst_13993);

(statearr_14114[(18)] = inst_13991);

return statearr_14114;
})();
var statearr_14115_14169 = state_14063__$1;
(statearr_14115_14169[(2)] = null);

(statearr_14115_14169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (18))){
var inst_14007 = (state_14063[(2)]);
var state_14063__$1 = state_14063;
var statearr_14116_14170 = state_14063__$1;
(statearr_14116_14170[(2)] = inst_14007);

(statearr_14116_14170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (37))){
var state_14063__$1 = state_14063;
var statearr_14117_14171 = state_14063__$1;
(statearr_14117_14171[(2)] = null);

(statearr_14117_14171[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14064 === (8))){
var inst_13969 = (state_14063[(8)]);
var inst_13986 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13969);
var state_14063__$1 = state_14063;
var statearr_14118_14172 = state_14063__$1;
(statearr_14118_14172[(2)] = inst_13986);

(statearr_14118_14172[(1)] = (10));


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
});})(c__7026__auto___14126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6961__auto__,c__7026__auto___14126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6962__auto__ = null;
var cljs$core$async$mix_$_state_machine__6962__auto____0 = (function (){
var statearr_14122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14122[(0)] = cljs$core$async$mix_$_state_machine__6962__auto__);

(statearr_14122[(1)] = (1));

return statearr_14122;
});
var cljs$core$async$mix_$_state_machine__6962__auto____1 = (function (state_14063){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_14063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e14123){if((e14123 instanceof Object)){
var ex__6965__auto__ = e14123;
var statearr_14124_14173 = state_14063;
(statearr_14124_14173[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14174 = state_14063;
state_14063 = G__14174;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6962__auto__ = function(state_14063){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6962__auto____1.call(this,state_14063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6962__auto____0;
cljs$core$async$mix_$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6962__auto____1;
return cljs$core$async$mix_$_state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___14126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7028__auto__ = (function (){var statearr_14125 = f__7027__auto__.call(null);
(statearr_14125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___14126);

return statearr_14125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___14126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5158__auto__ = (((p == null))?null:p);
var m__5159__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5158__auto__)]);
if(!((m__5159__auto__ == null))){
return m__5159__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5159__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5159__auto____$1 == null))){
return m__5159__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__5158__auto__ = (((p == null))?null:p);
var m__5159__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5158__auto__)]);
if(!((m__5159__auto__ == null))){
return m__5159__auto__.call(null,p,v,ch);
} else {
var m__5159__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5159__auto____$1 == null))){
return m__5159__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14175 = [];
var len__5561__auto___14178 = arguments.length;
var i__5562__auto___14179 = (0);
while(true){
if((i__5562__auto___14179 < len__5561__auto___14178)){
args14175.push((arguments[i__5562__auto___14179]));

var G__14180 = (i__5562__auto___14179 + (1));
i__5562__auto___14179 = G__14180;
continue;
} else {
}
break;
}

var G__14177 = args14175.length;
switch (G__14177) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14175.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5158__auto__ = (((p == null))?null:p);
var m__5159__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5158__auto__)]);
if(!((m__5159__auto__ == null))){
return m__5159__auto__.call(null,p);
} else {
var m__5159__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5159__auto____$1 == null))){
return m__5159__auto____$1.call(null,p);
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
var x__5158__auto__ = (((p == null))?null:p);
var m__5159__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5158__auto__)]);
if(!((m__5159__auto__ == null))){
return m__5159__auto__.call(null,p,v);
} else {
var m__5159__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5159__auto____$1 == null))){
return m__5159__auto____$1.call(null,p,v);
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
var args14183 = [];
var len__5561__auto___14308 = arguments.length;
var i__5562__auto___14309 = (0);
while(true){
if((i__5562__auto___14309 < len__5561__auto___14308)){
args14183.push((arguments[i__5562__auto___14309]));

var G__14310 = (i__5562__auto___14309 + (1));
i__5562__auto___14309 = G__14310;
continue;
} else {
}
break;
}

var G__14185 = args14183.length;
switch (G__14185) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14183.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4503__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4503__auto__)){
return or__4503__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4503__auto__,mults){
return (function (p1__14182_SHARP_){
if(cljs.core.truth_(p1__14182_SHARP_.call(null,topic))){
return p1__14182_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14182_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4503__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14186 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14187){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14187 = meta14187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14188,meta14187__$1){
var self__ = this;
var _14188__$1 = this;
return (new cljs.core.async.t_cljs$core$async14186(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14187__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14188){
var self__ = this;
var _14188__$1 = this;
return self__.meta14187;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14186.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14186.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14186.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14186.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14186.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async14186.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14186.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14186.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14187","meta14187",1056745043,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14186";

cljs.core.async.t_cljs$core$async14186.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cljs.core.async/t_cljs$core$async14186");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14186 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14186(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14187){
return (new cljs.core.async.t_cljs$core$async14186(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14187));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14186(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7026__auto___14312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___14312,mults,ensure_mult,p){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___14312,mults,ensure_mult,p){
return (function (state_14260){
var state_val_14261 = (state_14260[(1)]);
if((state_val_14261 === (7))){
var inst_14256 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14262_14313 = state_14260__$1;
(statearr_14262_14313[(2)] = inst_14256);

(statearr_14262_14313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (20))){
var state_14260__$1 = state_14260;
var statearr_14263_14314 = state_14260__$1;
(statearr_14263_14314[(2)] = null);

(statearr_14263_14314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (1))){
var state_14260__$1 = state_14260;
var statearr_14264_14315 = state_14260__$1;
(statearr_14264_14315[(2)] = null);

(statearr_14264_14315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (24))){
var inst_14239 = (state_14260[(7)]);
var inst_14248 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14239);
var state_14260__$1 = state_14260;
var statearr_14265_14316 = state_14260__$1;
(statearr_14265_14316[(2)] = inst_14248);

(statearr_14265_14316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (4))){
var inst_14191 = (state_14260[(8)]);
var inst_14191__$1 = (state_14260[(2)]);
var inst_14192 = (inst_14191__$1 == null);
var state_14260__$1 = (function (){var statearr_14266 = state_14260;
(statearr_14266[(8)] = inst_14191__$1);

return statearr_14266;
})();
if(cljs.core.truth_(inst_14192)){
var statearr_14267_14317 = state_14260__$1;
(statearr_14267_14317[(1)] = (5));

} else {
var statearr_14268_14318 = state_14260__$1;
(statearr_14268_14318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (15))){
var inst_14233 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14269_14319 = state_14260__$1;
(statearr_14269_14319[(2)] = inst_14233);

(statearr_14269_14319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (21))){
var inst_14253 = (state_14260[(2)]);
var state_14260__$1 = (function (){var statearr_14270 = state_14260;
(statearr_14270[(9)] = inst_14253);

return statearr_14270;
})();
var statearr_14271_14320 = state_14260__$1;
(statearr_14271_14320[(2)] = null);

(statearr_14271_14320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (13))){
var inst_14215 = (state_14260[(10)]);
var inst_14217 = cljs.core.chunked_seq_QMARK_.call(null,inst_14215);
var state_14260__$1 = state_14260;
if(inst_14217){
var statearr_14272_14321 = state_14260__$1;
(statearr_14272_14321[(1)] = (16));

} else {
var statearr_14273_14322 = state_14260__$1;
(statearr_14273_14322[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (22))){
var inst_14245 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
if(cljs.core.truth_(inst_14245)){
var statearr_14274_14323 = state_14260__$1;
(statearr_14274_14323[(1)] = (23));

} else {
var statearr_14275_14324 = state_14260__$1;
(statearr_14275_14324[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (6))){
var inst_14241 = (state_14260[(11)]);
var inst_14191 = (state_14260[(8)]);
var inst_14239 = (state_14260[(7)]);
var inst_14239__$1 = topic_fn.call(null,inst_14191);
var inst_14240 = cljs.core.deref.call(null,mults);
var inst_14241__$1 = cljs.core.get.call(null,inst_14240,inst_14239__$1);
var state_14260__$1 = (function (){var statearr_14276 = state_14260;
(statearr_14276[(11)] = inst_14241__$1);

(statearr_14276[(7)] = inst_14239__$1);

return statearr_14276;
})();
if(cljs.core.truth_(inst_14241__$1)){
var statearr_14277_14325 = state_14260__$1;
(statearr_14277_14325[(1)] = (19));

} else {
var statearr_14278_14326 = state_14260__$1;
(statearr_14278_14326[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (25))){
var inst_14250 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14279_14327 = state_14260__$1;
(statearr_14279_14327[(2)] = inst_14250);

(statearr_14279_14327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (17))){
var inst_14215 = (state_14260[(10)]);
var inst_14224 = cljs.core.first.call(null,inst_14215);
var inst_14225 = cljs.core.async.muxch_STAR_.call(null,inst_14224);
var inst_14226 = cljs.core.async.close_BANG_.call(null,inst_14225);
var inst_14227 = cljs.core.next.call(null,inst_14215);
var inst_14201 = inst_14227;
var inst_14202 = null;
var inst_14203 = (0);
var inst_14204 = (0);
var state_14260__$1 = (function (){var statearr_14280 = state_14260;
(statearr_14280[(12)] = inst_14201);

(statearr_14280[(13)] = inst_14202);

(statearr_14280[(14)] = inst_14203);

(statearr_14280[(15)] = inst_14226);

(statearr_14280[(16)] = inst_14204);

return statearr_14280;
})();
var statearr_14281_14328 = state_14260__$1;
(statearr_14281_14328[(2)] = null);

(statearr_14281_14328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (3))){
var inst_14258 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14260__$1,inst_14258);
} else {
if((state_val_14261 === (12))){
var inst_14235 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14282_14329 = state_14260__$1;
(statearr_14282_14329[(2)] = inst_14235);

(statearr_14282_14329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (2))){
var state_14260__$1 = state_14260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14260__$1,(4),ch);
} else {
if((state_val_14261 === (23))){
var state_14260__$1 = state_14260;
var statearr_14283_14330 = state_14260__$1;
(statearr_14283_14330[(2)] = null);

(statearr_14283_14330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (19))){
var inst_14241 = (state_14260[(11)]);
var inst_14191 = (state_14260[(8)]);
var inst_14243 = cljs.core.async.muxch_STAR_.call(null,inst_14241);
var state_14260__$1 = state_14260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14260__$1,(22),inst_14243,inst_14191);
} else {
if((state_val_14261 === (11))){
var inst_14215 = (state_14260[(10)]);
var inst_14201 = (state_14260[(12)]);
var inst_14215__$1 = cljs.core.seq.call(null,inst_14201);
var state_14260__$1 = (function (){var statearr_14284 = state_14260;
(statearr_14284[(10)] = inst_14215__$1);

return statearr_14284;
})();
if(inst_14215__$1){
var statearr_14285_14331 = state_14260__$1;
(statearr_14285_14331[(1)] = (13));

} else {
var statearr_14286_14332 = state_14260__$1;
(statearr_14286_14332[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (9))){
var inst_14237 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14287_14333 = state_14260__$1;
(statearr_14287_14333[(2)] = inst_14237);

(statearr_14287_14333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (5))){
var inst_14198 = cljs.core.deref.call(null,mults);
var inst_14199 = cljs.core.vals.call(null,inst_14198);
var inst_14200 = cljs.core.seq.call(null,inst_14199);
var inst_14201 = inst_14200;
var inst_14202 = null;
var inst_14203 = (0);
var inst_14204 = (0);
var state_14260__$1 = (function (){var statearr_14288 = state_14260;
(statearr_14288[(12)] = inst_14201);

(statearr_14288[(13)] = inst_14202);

(statearr_14288[(14)] = inst_14203);

(statearr_14288[(16)] = inst_14204);

return statearr_14288;
})();
var statearr_14289_14334 = state_14260__$1;
(statearr_14289_14334[(2)] = null);

(statearr_14289_14334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (14))){
var state_14260__$1 = state_14260;
var statearr_14293_14335 = state_14260__$1;
(statearr_14293_14335[(2)] = null);

(statearr_14293_14335[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (16))){
var inst_14215 = (state_14260[(10)]);
var inst_14219 = cljs.core.chunk_first.call(null,inst_14215);
var inst_14220 = cljs.core.chunk_rest.call(null,inst_14215);
var inst_14221 = cljs.core.count.call(null,inst_14219);
var inst_14201 = inst_14220;
var inst_14202 = inst_14219;
var inst_14203 = inst_14221;
var inst_14204 = (0);
var state_14260__$1 = (function (){var statearr_14294 = state_14260;
(statearr_14294[(12)] = inst_14201);

(statearr_14294[(13)] = inst_14202);

(statearr_14294[(14)] = inst_14203);

(statearr_14294[(16)] = inst_14204);

return statearr_14294;
})();
var statearr_14295_14336 = state_14260__$1;
(statearr_14295_14336[(2)] = null);

(statearr_14295_14336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (10))){
var inst_14201 = (state_14260[(12)]);
var inst_14202 = (state_14260[(13)]);
var inst_14203 = (state_14260[(14)]);
var inst_14204 = (state_14260[(16)]);
var inst_14209 = cljs.core._nth.call(null,inst_14202,inst_14204);
var inst_14210 = cljs.core.async.muxch_STAR_.call(null,inst_14209);
var inst_14211 = cljs.core.async.close_BANG_.call(null,inst_14210);
var inst_14212 = (inst_14204 + (1));
var tmp14290 = inst_14201;
var tmp14291 = inst_14202;
var tmp14292 = inst_14203;
var inst_14201__$1 = tmp14290;
var inst_14202__$1 = tmp14291;
var inst_14203__$1 = tmp14292;
var inst_14204__$1 = inst_14212;
var state_14260__$1 = (function (){var statearr_14296 = state_14260;
(statearr_14296[(17)] = inst_14211);

(statearr_14296[(12)] = inst_14201__$1);

(statearr_14296[(13)] = inst_14202__$1);

(statearr_14296[(14)] = inst_14203__$1);

(statearr_14296[(16)] = inst_14204__$1);

return statearr_14296;
})();
var statearr_14297_14337 = state_14260__$1;
(statearr_14297_14337[(2)] = null);

(statearr_14297_14337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (18))){
var inst_14230 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14298_14338 = state_14260__$1;
(statearr_14298_14338[(2)] = inst_14230);

(statearr_14298_14338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (8))){
var inst_14203 = (state_14260[(14)]);
var inst_14204 = (state_14260[(16)]);
var inst_14206 = (inst_14204 < inst_14203);
var inst_14207 = inst_14206;
var state_14260__$1 = state_14260;
if(cljs.core.truth_(inst_14207)){
var statearr_14299_14339 = state_14260__$1;
(statearr_14299_14339[(1)] = (10));

} else {
var statearr_14300_14340 = state_14260__$1;
(statearr_14300_14340[(1)] = (11));

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
});})(c__7026__auto___14312,mults,ensure_mult,p))
;
return ((function (switch__6961__auto__,c__7026__auto___14312,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6962__auto__ = null;
var cljs$core$async$state_machine__6962__auto____0 = (function (){
var statearr_14304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14304[(0)] = cljs$core$async$state_machine__6962__auto__);

(statearr_14304[(1)] = (1));

return statearr_14304;
});
var cljs$core$async$state_machine__6962__auto____1 = (function (state_14260){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_14260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e14305){if((e14305 instanceof Object)){
var ex__6965__auto__ = e14305;
var statearr_14306_14341 = state_14260;
(statearr_14306_14341[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14342 = state_14260;
state_14260 = G__14342;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$state_machine__6962__auto__ = function(state_14260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6962__auto____1.call(this,state_14260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6962__auto____0;
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6962__auto____1;
return cljs$core$async$state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___14312,mults,ensure_mult,p))
})();
var state__7028__auto__ = (function (){var statearr_14307 = f__7027__auto__.call(null);
(statearr_14307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___14312);

return statearr_14307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___14312,mults,ensure_mult,p))
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
var args14343 = [];
var len__5561__auto___14346 = arguments.length;
var i__5562__auto___14347 = (0);
while(true){
if((i__5562__auto___14347 < len__5561__auto___14346)){
args14343.push((arguments[i__5562__auto___14347]));

var G__14348 = (i__5562__auto___14347 + (1));
i__5562__auto___14347 = G__14348;
continue;
} else {
}
break;
}

var G__14345 = args14343.length;
switch (G__14345) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14343.length)].join('')));

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
var args14350 = [];
var len__5561__auto___14353 = arguments.length;
var i__5562__auto___14354 = (0);
while(true){
if((i__5562__auto___14354 < len__5561__auto___14353)){
args14350.push((arguments[i__5562__auto___14354]));

var G__14355 = (i__5562__auto___14354 + (1));
i__5562__auto___14354 = G__14355;
continue;
} else {
}
break;
}

var G__14352 = args14350.length;
switch (G__14352) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14350.length)].join('')));

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
var args14357 = [];
var len__5561__auto___14428 = arguments.length;
var i__5562__auto___14429 = (0);
while(true){
if((i__5562__auto___14429 < len__5561__auto___14428)){
args14357.push((arguments[i__5562__auto___14429]));

var G__14430 = (i__5562__auto___14429 + (1));
i__5562__auto___14429 = G__14430;
continue;
} else {
}
break;
}

var G__14359 = args14357.length;
switch (G__14359) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14357.length)].join('')));

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
var c__7026__auto___14432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___14432,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___14432,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14398){
var state_val_14399 = (state_14398[(1)]);
if((state_val_14399 === (7))){
var state_14398__$1 = state_14398;
var statearr_14400_14433 = state_14398__$1;
(statearr_14400_14433[(2)] = null);

(statearr_14400_14433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (1))){
var state_14398__$1 = state_14398;
var statearr_14401_14434 = state_14398__$1;
(statearr_14401_14434[(2)] = null);

(statearr_14401_14434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (4))){
var inst_14362 = (state_14398[(7)]);
var inst_14364 = (inst_14362 < cnt);
var state_14398__$1 = state_14398;
if(cljs.core.truth_(inst_14364)){
var statearr_14402_14435 = state_14398__$1;
(statearr_14402_14435[(1)] = (6));

} else {
var statearr_14403_14436 = state_14398__$1;
(statearr_14403_14436[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (15))){
var inst_14394 = (state_14398[(2)]);
var state_14398__$1 = state_14398;
var statearr_14404_14437 = state_14398__$1;
(statearr_14404_14437[(2)] = inst_14394);

(statearr_14404_14437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (13))){
var inst_14387 = cljs.core.async.close_BANG_.call(null,out);
var state_14398__$1 = state_14398;
var statearr_14405_14438 = state_14398__$1;
(statearr_14405_14438[(2)] = inst_14387);

(statearr_14405_14438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (6))){
var state_14398__$1 = state_14398;
var statearr_14406_14439 = state_14398__$1;
(statearr_14406_14439[(2)] = null);

(statearr_14406_14439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (3))){
var inst_14396 = (state_14398[(2)]);
var state_14398__$1 = state_14398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14398__$1,inst_14396);
} else {
if((state_val_14399 === (12))){
var inst_14384 = (state_14398[(8)]);
var inst_14384__$1 = (state_14398[(2)]);
var inst_14385 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14384__$1);
var state_14398__$1 = (function (){var statearr_14407 = state_14398;
(statearr_14407[(8)] = inst_14384__$1);

return statearr_14407;
})();
if(cljs.core.truth_(inst_14385)){
var statearr_14408_14440 = state_14398__$1;
(statearr_14408_14440[(1)] = (13));

} else {
var statearr_14409_14441 = state_14398__$1;
(statearr_14409_14441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (2))){
var inst_14361 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14362 = (0);
var state_14398__$1 = (function (){var statearr_14410 = state_14398;
(statearr_14410[(9)] = inst_14361);

(statearr_14410[(7)] = inst_14362);

return statearr_14410;
})();
var statearr_14411_14442 = state_14398__$1;
(statearr_14411_14442[(2)] = null);

(statearr_14411_14442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (11))){
var inst_14362 = (state_14398[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14398,(10),Object,null,(9));
var inst_14371 = chs__$1.call(null,inst_14362);
var inst_14372 = done.call(null,inst_14362);
var inst_14373 = cljs.core.async.take_BANG_.call(null,inst_14371,inst_14372);
var state_14398__$1 = state_14398;
var statearr_14412_14443 = state_14398__$1;
(statearr_14412_14443[(2)] = inst_14373);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14398__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (9))){
var inst_14362 = (state_14398[(7)]);
var inst_14375 = (state_14398[(2)]);
var inst_14376 = (inst_14362 + (1));
var inst_14362__$1 = inst_14376;
var state_14398__$1 = (function (){var statearr_14413 = state_14398;
(statearr_14413[(7)] = inst_14362__$1);

(statearr_14413[(10)] = inst_14375);

return statearr_14413;
})();
var statearr_14414_14444 = state_14398__$1;
(statearr_14414_14444[(2)] = null);

(statearr_14414_14444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (5))){
var inst_14382 = (state_14398[(2)]);
var state_14398__$1 = (function (){var statearr_14415 = state_14398;
(statearr_14415[(11)] = inst_14382);

return statearr_14415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14398__$1,(12),dchan);
} else {
if((state_val_14399 === (14))){
var inst_14384 = (state_14398[(8)]);
var inst_14389 = cljs.core.apply.call(null,f,inst_14384);
var state_14398__$1 = state_14398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14398__$1,(16),out,inst_14389);
} else {
if((state_val_14399 === (16))){
var inst_14391 = (state_14398[(2)]);
var state_14398__$1 = (function (){var statearr_14416 = state_14398;
(statearr_14416[(12)] = inst_14391);

return statearr_14416;
})();
var statearr_14417_14445 = state_14398__$1;
(statearr_14417_14445[(2)] = null);

(statearr_14417_14445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (10))){
var inst_14366 = (state_14398[(2)]);
var inst_14367 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14398__$1 = (function (){var statearr_14418 = state_14398;
(statearr_14418[(13)] = inst_14366);

return statearr_14418;
})();
var statearr_14419_14446 = state_14398__$1;
(statearr_14419_14446[(2)] = inst_14367);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14398__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (8))){
var inst_14380 = (state_14398[(2)]);
var state_14398__$1 = state_14398;
var statearr_14420_14447 = state_14398__$1;
(statearr_14420_14447[(2)] = inst_14380);

(statearr_14420_14447[(1)] = (5));


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
});})(c__7026__auto___14432,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6961__auto__,c__7026__auto___14432,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6962__auto__ = null;
var cljs$core$async$state_machine__6962__auto____0 = (function (){
var statearr_14424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14424[(0)] = cljs$core$async$state_machine__6962__auto__);

(statearr_14424[(1)] = (1));

return statearr_14424;
});
var cljs$core$async$state_machine__6962__auto____1 = (function (state_14398){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_14398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e14425){if((e14425 instanceof Object)){
var ex__6965__auto__ = e14425;
var statearr_14426_14448 = state_14398;
(statearr_14426_14448[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14449 = state_14398;
state_14398 = G__14449;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$state_machine__6962__auto__ = function(state_14398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6962__auto____1.call(this,state_14398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6962__auto____0;
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6962__auto____1;
return cljs$core$async$state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___14432,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7028__auto__ = (function (){var statearr_14427 = f__7027__auto__.call(null);
(statearr_14427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___14432);

return statearr_14427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___14432,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args14451 = [];
var len__5561__auto___14507 = arguments.length;
var i__5562__auto___14508 = (0);
while(true){
if((i__5562__auto___14508 < len__5561__auto___14507)){
args14451.push((arguments[i__5562__auto___14508]));

var G__14509 = (i__5562__auto___14508 + (1));
i__5562__auto___14508 = G__14509;
continue;
} else {
}
break;
}

var G__14453 = args14451.length;
switch (G__14453) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14451.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7026__auto___14511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___14511,out){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___14511,out){
return (function (state_14483){
var state_val_14484 = (state_14483[(1)]);
if((state_val_14484 === (7))){
var inst_14462 = (state_14483[(7)]);
var inst_14463 = (state_14483[(8)]);
var inst_14462__$1 = (state_14483[(2)]);
var inst_14463__$1 = cljs.core.nth.call(null,inst_14462__$1,(0),null);
var inst_14464 = cljs.core.nth.call(null,inst_14462__$1,(1),null);
var inst_14465 = (inst_14463__$1 == null);
var state_14483__$1 = (function (){var statearr_14485 = state_14483;
(statearr_14485[(9)] = inst_14464);

(statearr_14485[(7)] = inst_14462__$1);

(statearr_14485[(8)] = inst_14463__$1);

return statearr_14485;
})();
if(cljs.core.truth_(inst_14465)){
var statearr_14486_14512 = state_14483__$1;
(statearr_14486_14512[(1)] = (8));

} else {
var statearr_14487_14513 = state_14483__$1;
(statearr_14487_14513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (1))){
var inst_14454 = cljs.core.vec.call(null,chs);
var inst_14455 = inst_14454;
var state_14483__$1 = (function (){var statearr_14488 = state_14483;
(statearr_14488[(10)] = inst_14455);

return statearr_14488;
})();
var statearr_14489_14514 = state_14483__$1;
(statearr_14489_14514[(2)] = null);

(statearr_14489_14514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (4))){
var inst_14455 = (state_14483[(10)]);
var state_14483__$1 = state_14483;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14483__$1,(7),inst_14455);
} else {
if((state_val_14484 === (6))){
var inst_14479 = (state_14483[(2)]);
var state_14483__$1 = state_14483;
var statearr_14490_14515 = state_14483__$1;
(statearr_14490_14515[(2)] = inst_14479);

(statearr_14490_14515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (3))){
var inst_14481 = (state_14483[(2)]);
var state_14483__$1 = state_14483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14483__$1,inst_14481);
} else {
if((state_val_14484 === (2))){
var inst_14455 = (state_14483[(10)]);
var inst_14457 = cljs.core.count.call(null,inst_14455);
var inst_14458 = (inst_14457 > (0));
var state_14483__$1 = state_14483;
if(cljs.core.truth_(inst_14458)){
var statearr_14492_14516 = state_14483__$1;
(statearr_14492_14516[(1)] = (4));

} else {
var statearr_14493_14517 = state_14483__$1;
(statearr_14493_14517[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (11))){
var inst_14455 = (state_14483[(10)]);
var inst_14472 = (state_14483[(2)]);
var tmp14491 = inst_14455;
var inst_14455__$1 = tmp14491;
var state_14483__$1 = (function (){var statearr_14494 = state_14483;
(statearr_14494[(10)] = inst_14455__$1);

(statearr_14494[(11)] = inst_14472);

return statearr_14494;
})();
var statearr_14495_14518 = state_14483__$1;
(statearr_14495_14518[(2)] = null);

(statearr_14495_14518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (9))){
var inst_14463 = (state_14483[(8)]);
var state_14483__$1 = state_14483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14483__$1,(11),out,inst_14463);
} else {
if((state_val_14484 === (5))){
var inst_14477 = cljs.core.async.close_BANG_.call(null,out);
var state_14483__$1 = state_14483;
var statearr_14496_14519 = state_14483__$1;
(statearr_14496_14519[(2)] = inst_14477);

(statearr_14496_14519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (10))){
var inst_14475 = (state_14483[(2)]);
var state_14483__$1 = state_14483;
var statearr_14497_14520 = state_14483__$1;
(statearr_14497_14520[(2)] = inst_14475);

(statearr_14497_14520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14484 === (8))){
var inst_14464 = (state_14483[(9)]);
var inst_14455 = (state_14483[(10)]);
var inst_14462 = (state_14483[(7)]);
var inst_14463 = (state_14483[(8)]);
var inst_14467 = (function (){var cs = inst_14455;
var vec__14460 = inst_14462;
var v = inst_14463;
var c = inst_14464;
return ((function (cs,vec__14460,v,c,inst_14464,inst_14455,inst_14462,inst_14463,state_val_14484,c__7026__auto___14511,out){
return (function (p1__14450_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14450_SHARP_);
});
;})(cs,vec__14460,v,c,inst_14464,inst_14455,inst_14462,inst_14463,state_val_14484,c__7026__auto___14511,out))
})();
var inst_14468 = cljs.core.filterv.call(null,inst_14467,inst_14455);
var inst_14455__$1 = inst_14468;
var state_14483__$1 = (function (){var statearr_14498 = state_14483;
(statearr_14498[(10)] = inst_14455__$1);

return statearr_14498;
})();
var statearr_14499_14521 = state_14483__$1;
(statearr_14499_14521[(2)] = null);

(statearr_14499_14521[(1)] = (2));


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
});})(c__7026__auto___14511,out))
;
return ((function (switch__6961__auto__,c__7026__auto___14511,out){
return (function() {
var cljs$core$async$state_machine__6962__auto__ = null;
var cljs$core$async$state_machine__6962__auto____0 = (function (){
var statearr_14503 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14503[(0)] = cljs$core$async$state_machine__6962__auto__);

(statearr_14503[(1)] = (1));

return statearr_14503;
});
var cljs$core$async$state_machine__6962__auto____1 = (function (state_14483){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_14483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e14504){if((e14504 instanceof Object)){
var ex__6965__auto__ = e14504;
var statearr_14505_14522 = state_14483;
(statearr_14505_14522[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14523 = state_14483;
state_14483 = G__14523;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$state_machine__6962__auto__ = function(state_14483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6962__auto____1.call(this,state_14483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6962__auto____0;
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6962__auto____1;
return cljs$core$async$state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___14511,out))
})();
var state__7028__auto__ = (function (){var statearr_14506 = f__7027__auto__.call(null);
(statearr_14506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___14511);

return statearr_14506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___14511,out))
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
var args14524 = [];
var len__5561__auto___14573 = arguments.length;
var i__5562__auto___14574 = (0);
while(true){
if((i__5562__auto___14574 < len__5561__auto___14573)){
args14524.push((arguments[i__5562__auto___14574]));

var G__14575 = (i__5562__auto___14574 + (1));
i__5562__auto___14574 = G__14575;
continue;
} else {
}
break;
}

var G__14526 = args14524.length;
switch (G__14526) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14524.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7026__auto___14577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___14577,out){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___14577,out){
return (function (state_14550){
var state_val_14551 = (state_14550[(1)]);
if((state_val_14551 === (7))){
var inst_14532 = (state_14550[(7)]);
var inst_14532__$1 = (state_14550[(2)]);
var inst_14533 = (inst_14532__$1 == null);
var inst_14534 = cljs.core.not.call(null,inst_14533);
var state_14550__$1 = (function (){var statearr_14552 = state_14550;
(statearr_14552[(7)] = inst_14532__$1);

return statearr_14552;
})();
if(inst_14534){
var statearr_14553_14578 = state_14550__$1;
(statearr_14553_14578[(1)] = (8));

} else {
var statearr_14554_14579 = state_14550__$1;
(statearr_14554_14579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (1))){
var inst_14527 = (0);
var state_14550__$1 = (function (){var statearr_14555 = state_14550;
(statearr_14555[(8)] = inst_14527);

return statearr_14555;
})();
var statearr_14556_14580 = state_14550__$1;
(statearr_14556_14580[(2)] = null);

(statearr_14556_14580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (4))){
var state_14550__$1 = state_14550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14550__$1,(7),ch);
} else {
if((state_val_14551 === (6))){
var inst_14545 = (state_14550[(2)]);
var state_14550__$1 = state_14550;
var statearr_14557_14581 = state_14550__$1;
(statearr_14557_14581[(2)] = inst_14545);

(statearr_14557_14581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (3))){
var inst_14547 = (state_14550[(2)]);
var inst_14548 = cljs.core.async.close_BANG_.call(null,out);
var state_14550__$1 = (function (){var statearr_14558 = state_14550;
(statearr_14558[(9)] = inst_14547);

return statearr_14558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14550__$1,inst_14548);
} else {
if((state_val_14551 === (2))){
var inst_14527 = (state_14550[(8)]);
var inst_14529 = (inst_14527 < n);
var state_14550__$1 = state_14550;
if(cljs.core.truth_(inst_14529)){
var statearr_14559_14582 = state_14550__$1;
(statearr_14559_14582[(1)] = (4));

} else {
var statearr_14560_14583 = state_14550__$1;
(statearr_14560_14583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (11))){
var inst_14527 = (state_14550[(8)]);
var inst_14537 = (state_14550[(2)]);
var inst_14538 = (inst_14527 + (1));
var inst_14527__$1 = inst_14538;
var state_14550__$1 = (function (){var statearr_14561 = state_14550;
(statearr_14561[(8)] = inst_14527__$1);

(statearr_14561[(10)] = inst_14537);

return statearr_14561;
})();
var statearr_14562_14584 = state_14550__$1;
(statearr_14562_14584[(2)] = null);

(statearr_14562_14584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (9))){
var state_14550__$1 = state_14550;
var statearr_14563_14585 = state_14550__$1;
(statearr_14563_14585[(2)] = null);

(statearr_14563_14585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (5))){
var state_14550__$1 = state_14550;
var statearr_14564_14586 = state_14550__$1;
(statearr_14564_14586[(2)] = null);

(statearr_14564_14586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (10))){
var inst_14542 = (state_14550[(2)]);
var state_14550__$1 = state_14550;
var statearr_14565_14587 = state_14550__$1;
(statearr_14565_14587[(2)] = inst_14542);

(statearr_14565_14587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (8))){
var inst_14532 = (state_14550[(7)]);
var state_14550__$1 = state_14550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14550__$1,(11),out,inst_14532);
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
});})(c__7026__auto___14577,out))
;
return ((function (switch__6961__auto__,c__7026__auto___14577,out){
return (function() {
var cljs$core$async$state_machine__6962__auto__ = null;
var cljs$core$async$state_machine__6962__auto____0 = (function (){
var statearr_14569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14569[(0)] = cljs$core$async$state_machine__6962__auto__);

(statearr_14569[(1)] = (1));

return statearr_14569;
});
var cljs$core$async$state_machine__6962__auto____1 = (function (state_14550){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_14550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e14570){if((e14570 instanceof Object)){
var ex__6965__auto__ = e14570;
var statearr_14571_14588 = state_14550;
(statearr_14571_14588[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14589 = state_14550;
state_14550 = G__14589;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$state_machine__6962__auto__ = function(state_14550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6962__auto____1.call(this,state_14550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6962__auto____0;
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6962__auto____1;
return cljs$core$async$state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___14577,out))
})();
var state__7028__auto__ = (function (){var statearr_14572 = f__7027__auto__.call(null);
(statearr_14572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___14577);

return statearr_14572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___14577,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14597 = (function (map_LT_,f,ch,meta14598){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14598 = meta14598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14599,meta14598__$1){
var self__ = this;
var _14599__$1 = this;
return (new cljs.core.async.t_cljs$core$async14597(self__.map_LT_,self__.f,self__.ch,meta14598__$1));
});

cljs.core.async.t_cljs$core$async14597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14599){
var self__ = this;
var _14599__$1 = this;
return self__.meta14598;
});

cljs.core.async.t_cljs$core$async14597.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14597.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14597.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14600 = (function (map_LT_,f,ch,meta14598,_,fn1,meta14601){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14598 = meta14598;
this._ = _;
this.fn1 = fn1;
this.meta14601 = meta14601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14602,meta14601__$1){
var self__ = this;
var _14602__$1 = this;
return (new cljs.core.async.t_cljs$core$async14600(self__.map_LT_,self__.f,self__.ch,self__.meta14598,self__._,self__.fn1,meta14601__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14602){
var self__ = this;
var _14602__$1 = this;
return self__.meta14601;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14600.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14590_SHARP_){
return f1.call(null,(((p1__14590_SHARP_ == null))?null:self__.f.call(null,p1__14590_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14600.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14598","meta14598",-904935781,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14597","cljs.core.async/t_cljs$core$async14597",33644671,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14601","meta14601",2118225796,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14600";

cljs.core.async.t_cljs$core$async14600.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cljs.core.async/t_cljs$core$async14600");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14600 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14600(map_LT___$1,f__$1,ch__$1,meta14598__$1,___$2,fn1__$1,meta14601){
return (new cljs.core.async.t_cljs$core$async14600(map_LT___$1,f__$1,ch__$1,meta14598__$1,___$2,fn1__$1,meta14601));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14600(self__.map_LT_,self__.f,self__.ch,self__.meta14598,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4491__auto__ = ret;
if(cljs.core.truth_(and__4491__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4491__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14597.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14598","meta14598",-904935781,null)], null);
});

cljs.core.async.t_cljs$core$async14597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14597";

cljs.core.async.t_cljs$core$async14597.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cljs.core.async/t_cljs$core$async14597");
});

cljs.core.async.__GT_t_cljs$core$async14597 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14597(map_LT___$1,f__$1,ch__$1,meta14598){
return (new cljs.core.async.t_cljs$core$async14597(map_LT___$1,f__$1,ch__$1,meta14598));
});

}

return (new cljs.core.async.t_cljs$core$async14597(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14606 = (function (map_GT_,f,ch,meta14607){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14607 = meta14607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14608,meta14607__$1){
var self__ = this;
var _14608__$1 = this;
return (new cljs.core.async.t_cljs$core$async14606(self__.map_GT_,self__.f,self__.ch,meta14607__$1));
});

cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14608){
var self__ = this;
var _14608__$1 = this;
return self__.meta14607;
});

cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14607","meta14607",-703908073,null)], null);
});

cljs.core.async.t_cljs$core$async14606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14606";

cljs.core.async.t_cljs$core$async14606.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cljs.core.async/t_cljs$core$async14606");
});

cljs.core.async.__GT_t_cljs$core$async14606 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14606(map_GT___$1,f__$1,ch__$1,meta14607){
return (new cljs.core.async.t_cljs$core$async14606(map_GT___$1,f__$1,ch__$1,meta14607));
});

}

return (new cljs.core.async.t_cljs$core$async14606(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14612 = (function (filter_GT_,p,ch,meta14613){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14613 = meta14613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14614,meta14613__$1){
var self__ = this;
var _14614__$1 = this;
return (new cljs.core.async.t_cljs$core$async14612(self__.filter_GT_,self__.p,self__.ch,meta14613__$1));
});

cljs.core.async.t_cljs$core$async14612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14614){
var self__ = this;
var _14614__$1 = this;
return self__.meta14613;
});

cljs.core.async.t_cljs$core$async14612.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14612.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14612.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14612.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14613","meta14613",-668673364,null)], null);
});

cljs.core.async.t_cljs$core$async14612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14612";

cljs.core.async.t_cljs$core$async14612.cljs$lang$ctorPrWriter = (function (this__5101__auto__,writer__5102__auto__,opt__5103__auto__){
return cljs.core._write.call(null,writer__5102__auto__,"cljs.core.async/t_cljs$core$async14612");
});

cljs.core.async.__GT_t_cljs$core$async14612 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14612(filter_GT___$1,p__$1,ch__$1,meta14613){
return (new cljs.core.async.t_cljs$core$async14612(filter_GT___$1,p__$1,ch__$1,meta14613));
});

}

return (new cljs.core.async.t_cljs$core$async14612(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args14615 = [];
var len__5561__auto___14659 = arguments.length;
var i__5562__auto___14660 = (0);
while(true){
if((i__5562__auto___14660 < len__5561__auto___14659)){
args14615.push((arguments[i__5562__auto___14660]));

var G__14661 = (i__5562__auto___14660 + (1));
i__5562__auto___14660 = G__14661;
continue;
} else {
}
break;
}

var G__14617 = args14615.length;
switch (G__14617) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14615.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7026__auto___14663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___14663,out){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___14663,out){
return (function (state_14638){
var state_val_14639 = (state_14638[(1)]);
if((state_val_14639 === (7))){
var inst_14634 = (state_14638[(2)]);
var state_14638__$1 = state_14638;
var statearr_14640_14664 = state_14638__$1;
(statearr_14640_14664[(2)] = inst_14634);

(statearr_14640_14664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (1))){
var state_14638__$1 = state_14638;
var statearr_14641_14665 = state_14638__$1;
(statearr_14641_14665[(2)] = null);

(statearr_14641_14665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (4))){
var inst_14620 = (state_14638[(7)]);
var inst_14620__$1 = (state_14638[(2)]);
var inst_14621 = (inst_14620__$1 == null);
var state_14638__$1 = (function (){var statearr_14642 = state_14638;
(statearr_14642[(7)] = inst_14620__$1);

return statearr_14642;
})();
if(cljs.core.truth_(inst_14621)){
var statearr_14643_14666 = state_14638__$1;
(statearr_14643_14666[(1)] = (5));

} else {
var statearr_14644_14667 = state_14638__$1;
(statearr_14644_14667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (6))){
var inst_14620 = (state_14638[(7)]);
var inst_14625 = p.call(null,inst_14620);
var state_14638__$1 = state_14638;
if(cljs.core.truth_(inst_14625)){
var statearr_14645_14668 = state_14638__$1;
(statearr_14645_14668[(1)] = (8));

} else {
var statearr_14646_14669 = state_14638__$1;
(statearr_14646_14669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (3))){
var inst_14636 = (state_14638[(2)]);
var state_14638__$1 = state_14638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14638__$1,inst_14636);
} else {
if((state_val_14639 === (2))){
var state_14638__$1 = state_14638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14638__$1,(4),ch);
} else {
if((state_val_14639 === (11))){
var inst_14628 = (state_14638[(2)]);
var state_14638__$1 = state_14638;
var statearr_14647_14670 = state_14638__$1;
(statearr_14647_14670[(2)] = inst_14628);

(statearr_14647_14670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (9))){
var state_14638__$1 = state_14638;
var statearr_14648_14671 = state_14638__$1;
(statearr_14648_14671[(2)] = null);

(statearr_14648_14671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (5))){
var inst_14623 = cljs.core.async.close_BANG_.call(null,out);
var state_14638__$1 = state_14638;
var statearr_14649_14672 = state_14638__$1;
(statearr_14649_14672[(2)] = inst_14623);

(statearr_14649_14672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (10))){
var inst_14631 = (state_14638[(2)]);
var state_14638__$1 = (function (){var statearr_14650 = state_14638;
(statearr_14650[(8)] = inst_14631);

return statearr_14650;
})();
var statearr_14651_14673 = state_14638__$1;
(statearr_14651_14673[(2)] = null);

(statearr_14651_14673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14639 === (8))){
var inst_14620 = (state_14638[(7)]);
var state_14638__$1 = state_14638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14638__$1,(11),out,inst_14620);
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
});})(c__7026__auto___14663,out))
;
return ((function (switch__6961__auto__,c__7026__auto___14663,out){
return (function() {
var cljs$core$async$state_machine__6962__auto__ = null;
var cljs$core$async$state_machine__6962__auto____0 = (function (){
var statearr_14655 = [null,null,null,null,null,null,null,null,null];
(statearr_14655[(0)] = cljs$core$async$state_machine__6962__auto__);

(statearr_14655[(1)] = (1));

return statearr_14655;
});
var cljs$core$async$state_machine__6962__auto____1 = (function (state_14638){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_14638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e14656){if((e14656 instanceof Object)){
var ex__6965__auto__ = e14656;
var statearr_14657_14674 = state_14638;
(statearr_14657_14674[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14675 = state_14638;
state_14638 = G__14675;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$state_machine__6962__auto__ = function(state_14638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6962__auto____1.call(this,state_14638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6962__auto____0;
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6962__auto____1;
return cljs$core$async$state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___14663,out))
})();
var state__7028__auto__ = (function (){var statearr_14658 = f__7027__auto__.call(null);
(statearr_14658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___14663);

return statearr_14658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___14663,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14676 = [];
var len__5561__auto___14679 = arguments.length;
var i__5562__auto___14680 = (0);
while(true){
if((i__5562__auto___14680 < len__5561__auto___14679)){
args14676.push((arguments[i__5562__auto___14680]));

var G__14681 = (i__5562__auto___14680 + (1));
i__5562__auto___14680 = G__14681;
continue;
} else {
}
break;
}

var G__14678 = args14676.length;
switch (G__14678) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14676.length)].join('')));

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
var c__7026__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto__){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto__){
return (function (state_14848){
var state_val_14849 = (state_14848[(1)]);
if((state_val_14849 === (7))){
var inst_14844 = (state_14848[(2)]);
var state_14848__$1 = state_14848;
var statearr_14850_14891 = state_14848__$1;
(statearr_14850_14891[(2)] = inst_14844);

(statearr_14850_14891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (20))){
var inst_14814 = (state_14848[(7)]);
var inst_14825 = (state_14848[(2)]);
var inst_14826 = cljs.core.next.call(null,inst_14814);
var inst_14800 = inst_14826;
var inst_14801 = null;
var inst_14802 = (0);
var inst_14803 = (0);
var state_14848__$1 = (function (){var statearr_14851 = state_14848;
(statearr_14851[(8)] = inst_14825);

(statearr_14851[(9)] = inst_14801);

(statearr_14851[(10)] = inst_14803);

(statearr_14851[(11)] = inst_14802);

(statearr_14851[(12)] = inst_14800);

return statearr_14851;
})();
var statearr_14852_14892 = state_14848__$1;
(statearr_14852_14892[(2)] = null);

(statearr_14852_14892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (1))){
var state_14848__$1 = state_14848;
var statearr_14853_14893 = state_14848__$1;
(statearr_14853_14893[(2)] = null);

(statearr_14853_14893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (4))){
var inst_14789 = (state_14848[(13)]);
var inst_14789__$1 = (state_14848[(2)]);
var inst_14790 = (inst_14789__$1 == null);
var state_14848__$1 = (function (){var statearr_14854 = state_14848;
(statearr_14854[(13)] = inst_14789__$1);

return statearr_14854;
})();
if(cljs.core.truth_(inst_14790)){
var statearr_14855_14894 = state_14848__$1;
(statearr_14855_14894[(1)] = (5));

} else {
var statearr_14856_14895 = state_14848__$1;
(statearr_14856_14895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (15))){
var state_14848__$1 = state_14848;
var statearr_14860_14896 = state_14848__$1;
(statearr_14860_14896[(2)] = null);

(statearr_14860_14896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (21))){
var state_14848__$1 = state_14848;
var statearr_14861_14897 = state_14848__$1;
(statearr_14861_14897[(2)] = null);

(statearr_14861_14897[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (13))){
var inst_14801 = (state_14848[(9)]);
var inst_14803 = (state_14848[(10)]);
var inst_14802 = (state_14848[(11)]);
var inst_14800 = (state_14848[(12)]);
var inst_14810 = (state_14848[(2)]);
var inst_14811 = (inst_14803 + (1));
var tmp14857 = inst_14801;
var tmp14858 = inst_14802;
var tmp14859 = inst_14800;
var inst_14800__$1 = tmp14859;
var inst_14801__$1 = tmp14857;
var inst_14802__$1 = tmp14858;
var inst_14803__$1 = inst_14811;
var state_14848__$1 = (function (){var statearr_14862 = state_14848;
(statearr_14862[(9)] = inst_14801__$1);

(statearr_14862[(10)] = inst_14803__$1);

(statearr_14862[(11)] = inst_14802__$1);

(statearr_14862[(14)] = inst_14810);

(statearr_14862[(12)] = inst_14800__$1);

return statearr_14862;
})();
var statearr_14863_14898 = state_14848__$1;
(statearr_14863_14898[(2)] = null);

(statearr_14863_14898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (22))){
var state_14848__$1 = state_14848;
var statearr_14864_14899 = state_14848__$1;
(statearr_14864_14899[(2)] = null);

(statearr_14864_14899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (6))){
var inst_14789 = (state_14848[(13)]);
var inst_14798 = f.call(null,inst_14789);
var inst_14799 = cljs.core.seq.call(null,inst_14798);
var inst_14800 = inst_14799;
var inst_14801 = null;
var inst_14802 = (0);
var inst_14803 = (0);
var state_14848__$1 = (function (){var statearr_14865 = state_14848;
(statearr_14865[(9)] = inst_14801);

(statearr_14865[(10)] = inst_14803);

(statearr_14865[(11)] = inst_14802);

(statearr_14865[(12)] = inst_14800);

return statearr_14865;
})();
var statearr_14866_14900 = state_14848__$1;
(statearr_14866_14900[(2)] = null);

(statearr_14866_14900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (17))){
var inst_14814 = (state_14848[(7)]);
var inst_14818 = cljs.core.chunk_first.call(null,inst_14814);
var inst_14819 = cljs.core.chunk_rest.call(null,inst_14814);
var inst_14820 = cljs.core.count.call(null,inst_14818);
var inst_14800 = inst_14819;
var inst_14801 = inst_14818;
var inst_14802 = inst_14820;
var inst_14803 = (0);
var state_14848__$1 = (function (){var statearr_14867 = state_14848;
(statearr_14867[(9)] = inst_14801);

(statearr_14867[(10)] = inst_14803);

(statearr_14867[(11)] = inst_14802);

(statearr_14867[(12)] = inst_14800);

return statearr_14867;
})();
var statearr_14868_14901 = state_14848__$1;
(statearr_14868_14901[(2)] = null);

(statearr_14868_14901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (3))){
var inst_14846 = (state_14848[(2)]);
var state_14848__$1 = state_14848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14848__$1,inst_14846);
} else {
if((state_val_14849 === (12))){
var inst_14834 = (state_14848[(2)]);
var state_14848__$1 = state_14848;
var statearr_14869_14902 = state_14848__$1;
(statearr_14869_14902[(2)] = inst_14834);

(statearr_14869_14902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (2))){
var state_14848__$1 = state_14848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14848__$1,(4),in$);
} else {
if((state_val_14849 === (23))){
var inst_14842 = (state_14848[(2)]);
var state_14848__$1 = state_14848;
var statearr_14870_14903 = state_14848__$1;
(statearr_14870_14903[(2)] = inst_14842);

(statearr_14870_14903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (19))){
var inst_14829 = (state_14848[(2)]);
var state_14848__$1 = state_14848;
var statearr_14871_14904 = state_14848__$1;
(statearr_14871_14904[(2)] = inst_14829);

(statearr_14871_14904[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (11))){
var inst_14814 = (state_14848[(7)]);
var inst_14800 = (state_14848[(12)]);
var inst_14814__$1 = cljs.core.seq.call(null,inst_14800);
var state_14848__$1 = (function (){var statearr_14872 = state_14848;
(statearr_14872[(7)] = inst_14814__$1);

return statearr_14872;
})();
if(inst_14814__$1){
var statearr_14873_14905 = state_14848__$1;
(statearr_14873_14905[(1)] = (14));

} else {
var statearr_14874_14906 = state_14848__$1;
(statearr_14874_14906[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (9))){
var inst_14836 = (state_14848[(2)]);
var inst_14837 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14848__$1 = (function (){var statearr_14875 = state_14848;
(statearr_14875[(15)] = inst_14836);

return statearr_14875;
})();
if(cljs.core.truth_(inst_14837)){
var statearr_14876_14907 = state_14848__$1;
(statearr_14876_14907[(1)] = (21));

} else {
var statearr_14877_14908 = state_14848__$1;
(statearr_14877_14908[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (5))){
var inst_14792 = cljs.core.async.close_BANG_.call(null,out);
var state_14848__$1 = state_14848;
var statearr_14878_14909 = state_14848__$1;
(statearr_14878_14909[(2)] = inst_14792);

(statearr_14878_14909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (14))){
var inst_14814 = (state_14848[(7)]);
var inst_14816 = cljs.core.chunked_seq_QMARK_.call(null,inst_14814);
var state_14848__$1 = state_14848;
if(inst_14816){
var statearr_14879_14910 = state_14848__$1;
(statearr_14879_14910[(1)] = (17));

} else {
var statearr_14880_14911 = state_14848__$1;
(statearr_14880_14911[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (16))){
var inst_14832 = (state_14848[(2)]);
var state_14848__$1 = state_14848;
var statearr_14881_14912 = state_14848__$1;
(statearr_14881_14912[(2)] = inst_14832);

(statearr_14881_14912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (10))){
var inst_14801 = (state_14848[(9)]);
var inst_14803 = (state_14848[(10)]);
var inst_14808 = cljs.core._nth.call(null,inst_14801,inst_14803);
var state_14848__$1 = state_14848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14848__$1,(13),out,inst_14808);
} else {
if((state_val_14849 === (18))){
var inst_14814 = (state_14848[(7)]);
var inst_14823 = cljs.core.first.call(null,inst_14814);
var state_14848__$1 = state_14848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14848__$1,(20),out,inst_14823);
} else {
if((state_val_14849 === (8))){
var inst_14803 = (state_14848[(10)]);
var inst_14802 = (state_14848[(11)]);
var inst_14805 = (inst_14803 < inst_14802);
var inst_14806 = inst_14805;
var state_14848__$1 = state_14848;
if(cljs.core.truth_(inst_14806)){
var statearr_14882_14913 = state_14848__$1;
(statearr_14882_14913[(1)] = (10));

} else {
var statearr_14883_14914 = state_14848__$1;
(statearr_14883_14914[(1)] = (11));

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
});})(c__7026__auto__))
;
return ((function (switch__6961__auto__,c__7026__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6962__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6962__auto____0 = (function (){
var statearr_14887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14887[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6962__auto__);

(statearr_14887[(1)] = (1));

return statearr_14887;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6962__auto____1 = (function (state_14848){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_14848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e14888){if((e14888 instanceof Object)){
var ex__6965__auto__ = e14888;
var statearr_14889_14915 = state_14848;
(statearr_14889_14915[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14916 = state_14848;
state_14848 = G__14916;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6962__auto__ = function(state_14848){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6962__auto____1.call(this,state_14848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6962__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6962__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto__))
})();
var state__7028__auto__ = (function (){var statearr_14890 = f__7027__auto__.call(null);
(statearr_14890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto__);

return statearr_14890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto__))
);

return c__7026__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14917 = [];
var len__5561__auto___14920 = arguments.length;
var i__5562__auto___14921 = (0);
while(true){
if((i__5562__auto___14921 < len__5561__auto___14920)){
args14917.push((arguments[i__5562__auto___14921]));

var G__14922 = (i__5562__auto___14921 + (1));
i__5562__auto___14921 = G__14922;
continue;
} else {
}
break;
}

var G__14919 = args14917.length;
switch (G__14919) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14917.length)].join('')));

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
var args14924 = [];
var len__5561__auto___14927 = arguments.length;
var i__5562__auto___14928 = (0);
while(true){
if((i__5562__auto___14928 < len__5561__auto___14927)){
args14924.push((arguments[i__5562__auto___14928]));

var G__14929 = (i__5562__auto___14928 + (1));
i__5562__auto___14928 = G__14929;
continue;
} else {
}
break;
}

var G__14926 = args14924.length;
switch (G__14926) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14924.length)].join('')));

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
var args14931 = [];
var len__5561__auto___14982 = arguments.length;
var i__5562__auto___14983 = (0);
while(true){
if((i__5562__auto___14983 < len__5561__auto___14982)){
args14931.push((arguments[i__5562__auto___14983]));

var G__14984 = (i__5562__auto___14983 + (1));
i__5562__auto___14983 = G__14984;
continue;
} else {
}
break;
}

var G__14933 = args14931.length;
switch (G__14933) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14931.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7026__auto___14986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___14986,out){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___14986,out){
return (function (state_14957){
var state_val_14958 = (state_14957[(1)]);
if((state_val_14958 === (7))){
var inst_14952 = (state_14957[(2)]);
var state_14957__$1 = state_14957;
var statearr_14959_14987 = state_14957__$1;
(statearr_14959_14987[(2)] = inst_14952);

(statearr_14959_14987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (1))){
var inst_14934 = null;
var state_14957__$1 = (function (){var statearr_14960 = state_14957;
(statearr_14960[(7)] = inst_14934);

return statearr_14960;
})();
var statearr_14961_14988 = state_14957__$1;
(statearr_14961_14988[(2)] = null);

(statearr_14961_14988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (4))){
var inst_14937 = (state_14957[(8)]);
var inst_14937__$1 = (state_14957[(2)]);
var inst_14938 = (inst_14937__$1 == null);
var inst_14939 = cljs.core.not.call(null,inst_14938);
var state_14957__$1 = (function (){var statearr_14962 = state_14957;
(statearr_14962[(8)] = inst_14937__$1);

return statearr_14962;
})();
if(inst_14939){
var statearr_14963_14989 = state_14957__$1;
(statearr_14963_14989[(1)] = (5));

} else {
var statearr_14964_14990 = state_14957__$1;
(statearr_14964_14990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (6))){
var state_14957__$1 = state_14957;
var statearr_14965_14991 = state_14957__$1;
(statearr_14965_14991[(2)] = null);

(statearr_14965_14991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (3))){
var inst_14954 = (state_14957[(2)]);
var inst_14955 = cljs.core.async.close_BANG_.call(null,out);
var state_14957__$1 = (function (){var statearr_14966 = state_14957;
(statearr_14966[(9)] = inst_14954);

return statearr_14966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14957__$1,inst_14955);
} else {
if((state_val_14958 === (2))){
var state_14957__$1 = state_14957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14957__$1,(4),ch);
} else {
if((state_val_14958 === (11))){
var inst_14937 = (state_14957[(8)]);
var inst_14946 = (state_14957[(2)]);
var inst_14934 = inst_14937;
var state_14957__$1 = (function (){var statearr_14967 = state_14957;
(statearr_14967[(10)] = inst_14946);

(statearr_14967[(7)] = inst_14934);

return statearr_14967;
})();
var statearr_14968_14992 = state_14957__$1;
(statearr_14968_14992[(2)] = null);

(statearr_14968_14992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (9))){
var inst_14937 = (state_14957[(8)]);
var state_14957__$1 = state_14957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14957__$1,(11),out,inst_14937);
} else {
if((state_val_14958 === (5))){
var inst_14937 = (state_14957[(8)]);
var inst_14934 = (state_14957[(7)]);
var inst_14941 = cljs.core._EQ_.call(null,inst_14937,inst_14934);
var state_14957__$1 = state_14957;
if(inst_14941){
var statearr_14970_14993 = state_14957__$1;
(statearr_14970_14993[(1)] = (8));

} else {
var statearr_14971_14994 = state_14957__$1;
(statearr_14971_14994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (10))){
var inst_14949 = (state_14957[(2)]);
var state_14957__$1 = state_14957;
var statearr_14972_14995 = state_14957__$1;
(statearr_14972_14995[(2)] = inst_14949);

(statearr_14972_14995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (8))){
var inst_14934 = (state_14957[(7)]);
var tmp14969 = inst_14934;
var inst_14934__$1 = tmp14969;
var state_14957__$1 = (function (){var statearr_14973 = state_14957;
(statearr_14973[(7)] = inst_14934__$1);

return statearr_14973;
})();
var statearr_14974_14996 = state_14957__$1;
(statearr_14974_14996[(2)] = null);

(statearr_14974_14996[(1)] = (2));


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
});})(c__7026__auto___14986,out))
;
return ((function (switch__6961__auto__,c__7026__auto___14986,out){
return (function() {
var cljs$core$async$state_machine__6962__auto__ = null;
var cljs$core$async$state_machine__6962__auto____0 = (function (){
var statearr_14978 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14978[(0)] = cljs$core$async$state_machine__6962__auto__);

(statearr_14978[(1)] = (1));

return statearr_14978;
});
var cljs$core$async$state_machine__6962__auto____1 = (function (state_14957){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_14957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e14979){if((e14979 instanceof Object)){
var ex__6965__auto__ = e14979;
var statearr_14980_14997 = state_14957;
(statearr_14980_14997[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14998 = state_14957;
state_14957 = G__14998;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$state_machine__6962__auto__ = function(state_14957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6962__auto____1.call(this,state_14957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6962__auto____0;
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6962__auto____1;
return cljs$core$async$state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___14986,out))
})();
var state__7028__auto__ = (function (){var statearr_14981 = f__7027__auto__.call(null);
(statearr_14981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___14986);

return statearr_14981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___14986,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14999 = [];
var len__5561__auto___15069 = arguments.length;
var i__5562__auto___15070 = (0);
while(true){
if((i__5562__auto___15070 < len__5561__auto___15069)){
args14999.push((arguments[i__5562__auto___15070]));

var G__15071 = (i__5562__auto___15070 + (1));
i__5562__auto___15070 = G__15071;
continue;
} else {
}
break;
}

var G__15001 = args14999.length;
switch (G__15001) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14999.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7026__auto___15073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___15073,out){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___15073,out){
return (function (state_15039){
var state_val_15040 = (state_15039[(1)]);
if((state_val_15040 === (7))){
var inst_15035 = (state_15039[(2)]);
var state_15039__$1 = state_15039;
var statearr_15041_15074 = state_15039__$1;
(statearr_15041_15074[(2)] = inst_15035);

(statearr_15041_15074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15040 === (1))){
var inst_15002 = (new Array(n));
var inst_15003 = inst_15002;
var inst_15004 = (0);
var state_15039__$1 = (function (){var statearr_15042 = state_15039;
(statearr_15042[(7)] = inst_15004);

(statearr_15042[(8)] = inst_15003);

return statearr_15042;
})();
var statearr_15043_15075 = state_15039__$1;
(statearr_15043_15075[(2)] = null);

(statearr_15043_15075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15040 === (4))){
var inst_15007 = (state_15039[(9)]);
var inst_15007__$1 = (state_15039[(2)]);
var inst_15008 = (inst_15007__$1 == null);
var inst_15009 = cljs.core.not.call(null,inst_15008);
var state_15039__$1 = (function (){var statearr_15044 = state_15039;
(statearr_15044[(9)] = inst_15007__$1);

return statearr_15044;
})();
if(inst_15009){
var statearr_15045_15076 = state_15039__$1;
(statearr_15045_15076[(1)] = (5));

} else {
var statearr_15046_15077 = state_15039__$1;
(statearr_15046_15077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15040 === (15))){
var inst_15029 = (state_15039[(2)]);
var state_15039__$1 = state_15039;
var statearr_15047_15078 = state_15039__$1;
(statearr_15047_15078[(2)] = inst_15029);

(statearr_15047_15078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15040 === (13))){
var state_15039__$1 = state_15039;
var statearr_15048_15079 = state_15039__$1;
(statearr_15048_15079[(2)] = null);

(statearr_15048_15079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15040 === (6))){
var inst_15004 = (state_15039[(7)]);
var inst_15025 = (inst_15004 > (0));
var state_15039__$1 = state_15039;
if(cljs.core.truth_(inst_15025)){
var statearr_15049_15080 = state_15039__$1;
(statearr_15049_15080[(1)] = (12));

} else {
var statearr_15050_15081 = state_15039__$1;
(statearr_15050_15081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15040 === (3))){
var inst_15037 = (state_15039[(2)]);
var state_15039__$1 = state_15039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15039__$1,inst_15037);
} else {
if((state_val_15040 === (12))){
var inst_15003 = (state_15039[(8)]);
var inst_15027 = cljs.core.vec.call(null,inst_15003);
var state_15039__$1 = state_15039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15039__$1,(15),out,inst_15027);
} else {
if((state_val_15040 === (2))){
var state_15039__$1 = state_15039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15039__$1,(4),ch);
} else {
if((state_val_15040 === (11))){
var inst_15019 = (state_15039[(2)]);
var inst_15020 = (new Array(n));
var inst_15003 = inst_15020;
var inst_15004 = (0);
var state_15039__$1 = (function (){var statearr_15051 = state_15039;
(statearr_15051[(10)] = inst_15019);

(statearr_15051[(7)] = inst_15004);

(statearr_15051[(8)] = inst_15003);

return statearr_15051;
})();
var statearr_15052_15082 = state_15039__$1;
(statearr_15052_15082[(2)] = null);

(statearr_15052_15082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15040 === (9))){
var inst_15003 = (state_15039[(8)]);
var inst_15017 = cljs.core.vec.call(null,inst_15003);
var state_15039__$1 = state_15039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15039__$1,(11),out,inst_15017);
} else {
if((state_val_15040 === (5))){
var inst_15004 = (state_15039[(7)]);
var inst_15003 = (state_15039[(8)]);
var inst_15012 = (state_15039[(11)]);
var inst_15007 = (state_15039[(9)]);
var inst_15011 = (inst_15003[inst_15004] = inst_15007);
var inst_15012__$1 = (inst_15004 + (1));
var inst_15013 = (inst_15012__$1 < n);
var state_15039__$1 = (function (){var statearr_15053 = state_15039;
(statearr_15053[(11)] = inst_15012__$1);

(statearr_15053[(12)] = inst_15011);

return statearr_15053;
})();
if(cljs.core.truth_(inst_15013)){
var statearr_15054_15083 = state_15039__$1;
(statearr_15054_15083[(1)] = (8));

} else {
var statearr_15055_15084 = state_15039__$1;
(statearr_15055_15084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15040 === (14))){
var inst_15032 = (state_15039[(2)]);
var inst_15033 = cljs.core.async.close_BANG_.call(null,out);
var state_15039__$1 = (function (){var statearr_15057 = state_15039;
(statearr_15057[(13)] = inst_15032);

return statearr_15057;
})();
var statearr_15058_15085 = state_15039__$1;
(statearr_15058_15085[(2)] = inst_15033);

(statearr_15058_15085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15040 === (10))){
var inst_15023 = (state_15039[(2)]);
var state_15039__$1 = state_15039;
var statearr_15059_15086 = state_15039__$1;
(statearr_15059_15086[(2)] = inst_15023);

(statearr_15059_15086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15040 === (8))){
var inst_15003 = (state_15039[(8)]);
var inst_15012 = (state_15039[(11)]);
var tmp15056 = inst_15003;
var inst_15003__$1 = tmp15056;
var inst_15004 = inst_15012;
var state_15039__$1 = (function (){var statearr_15060 = state_15039;
(statearr_15060[(7)] = inst_15004);

(statearr_15060[(8)] = inst_15003__$1);

return statearr_15060;
})();
var statearr_15061_15087 = state_15039__$1;
(statearr_15061_15087[(2)] = null);

(statearr_15061_15087[(1)] = (2));


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
});})(c__7026__auto___15073,out))
;
return ((function (switch__6961__auto__,c__7026__auto___15073,out){
return (function() {
var cljs$core$async$state_machine__6962__auto__ = null;
var cljs$core$async$state_machine__6962__auto____0 = (function (){
var statearr_15065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15065[(0)] = cljs$core$async$state_machine__6962__auto__);

(statearr_15065[(1)] = (1));

return statearr_15065;
});
var cljs$core$async$state_machine__6962__auto____1 = (function (state_15039){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_15039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e15066){if((e15066 instanceof Object)){
var ex__6965__auto__ = e15066;
var statearr_15067_15088 = state_15039;
(statearr_15067_15088[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15089 = state_15039;
state_15039 = G__15089;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$state_machine__6962__auto__ = function(state_15039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6962__auto____1.call(this,state_15039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6962__auto____0;
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6962__auto____1;
return cljs$core$async$state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___15073,out))
})();
var state__7028__auto__ = (function (){var statearr_15068 = f__7027__auto__.call(null);
(statearr_15068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___15073);

return statearr_15068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___15073,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15090 = [];
var len__5561__auto___15164 = arguments.length;
var i__5562__auto___15165 = (0);
while(true){
if((i__5562__auto___15165 < len__5561__auto___15164)){
args15090.push((arguments[i__5562__auto___15165]));

var G__15166 = (i__5562__auto___15165 + (1));
i__5562__auto___15165 = G__15166;
continue;
} else {
}
break;
}

var G__15092 = args15090.length;
switch (G__15092) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15090.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7026__auto___15168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7026__auto___15168,out){
return (function (){
var f__7027__auto__ = (function (){var switch__6961__auto__ = ((function (c__7026__auto___15168,out){
return (function (state_15134){
var state_val_15135 = (state_15134[(1)]);
if((state_val_15135 === (7))){
var inst_15130 = (state_15134[(2)]);
var state_15134__$1 = state_15134;
var statearr_15136_15169 = state_15134__$1;
(statearr_15136_15169[(2)] = inst_15130);

(statearr_15136_15169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15135 === (1))){
var inst_15093 = [];
var inst_15094 = inst_15093;
var inst_15095 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15134__$1 = (function (){var statearr_15137 = state_15134;
(statearr_15137[(7)] = inst_15095);

(statearr_15137[(8)] = inst_15094);

return statearr_15137;
})();
var statearr_15138_15170 = state_15134__$1;
(statearr_15138_15170[(2)] = null);

(statearr_15138_15170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15135 === (4))){
var inst_15098 = (state_15134[(9)]);
var inst_15098__$1 = (state_15134[(2)]);
var inst_15099 = (inst_15098__$1 == null);
var inst_15100 = cljs.core.not.call(null,inst_15099);
var state_15134__$1 = (function (){var statearr_15139 = state_15134;
(statearr_15139[(9)] = inst_15098__$1);

return statearr_15139;
})();
if(inst_15100){
var statearr_15140_15171 = state_15134__$1;
(statearr_15140_15171[(1)] = (5));

} else {
var statearr_15141_15172 = state_15134__$1;
(statearr_15141_15172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15135 === (15))){
var inst_15124 = (state_15134[(2)]);
var state_15134__$1 = state_15134;
var statearr_15142_15173 = state_15134__$1;
(statearr_15142_15173[(2)] = inst_15124);

(statearr_15142_15173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15135 === (13))){
var state_15134__$1 = state_15134;
var statearr_15143_15174 = state_15134__$1;
(statearr_15143_15174[(2)] = null);

(statearr_15143_15174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15135 === (6))){
var inst_15094 = (state_15134[(8)]);
var inst_15119 = inst_15094.length;
var inst_15120 = (inst_15119 > (0));
var state_15134__$1 = state_15134;
if(cljs.core.truth_(inst_15120)){
var statearr_15144_15175 = state_15134__$1;
(statearr_15144_15175[(1)] = (12));

} else {
var statearr_15145_15176 = state_15134__$1;
(statearr_15145_15176[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15135 === (3))){
var inst_15132 = (state_15134[(2)]);
var state_15134__$1 = state_15134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15134__$1,inst_15132);
} else {
if((state_val_15135 === (12))){
var inst_15094 = (state_15134[(8)]);
var inst_15122 = cljs.core.vec.call(null,inst_15094);
var state_15134__$1 = state_15134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15134__$1,(15),out,inst_15122);
} else {
if((state_val_15135 === (2))){
var state_15134__$1 = state_15134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15134__$1,(4),ch);
} else {
if((state_val_15135 === (11))){
var inst_15102 = (state_15134[(10)]);
var inst_15098 = (state_15134[(9)]);
var inst_15112 = (state_15134[(2)]);
var inst_15113 = [];
var inst_15114 = inst_15113.push(inst_15098);
var inst_15094 = inst_15113;
var inst_15095 = inst_15102;
var state_15134__$1 = (function (){var statearr_15146 = state_15134;
(statearr_15146[(7)] = inst_15095);

(statearr_15146[(11)] = inst_15112);

(statearr_15146[(12)] = inst_15114);

(statearr_15146[(8)] = inst_15094);

return statearr_15146;
})();
var statearr_15147_15177 = state_15134__$1;
(statearr_15147_15177[(2)] = null);

(statearr_15147_15177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15135 === (9))){
var inst_15094 = (state_15134[(8)]);
var inst_15110 = cljs.core.vec.call(null,inst_15094);
var state_15134__$1 = state_15134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15134__$1,(11),out,inst_15110);
} else {
if((state_val_15135 === (5))){
var inst_15095 = (state_15134[(7)]);
var inst_15102 = (state_15134[(10)]);
var inst_15098 = (state_15134[(9)]);
var inst_15102__$1 = f.call(null,inst_15098);
var inst_15103 = cljs.core._EQ_.call(null,inst_15102__$1,inst_15095);
var inst_15104 = cljs.core.keyword_identical_QMARK_.call(null,inst_15095,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15105 = (inst_15103) || (inst_15104);
var state_15134__$1 = (function (){var statearr_15148 = state_15134;
(statearr_15148[(10)] = inst_15102__$1);

return statearr_15148;
})();
if(cljs.core.truth_(inst_15105)){
var statearr_15149_15178 = state_15134__$1;
(statearr_15149_15178[(1)] = (8));

} else {
var statearr_15150_15179 = state_15134__$1;
(statearr_15150_15179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15135 === (14))){
var inst_15127 = (state_15134[(2)]);
var inst_15128 = cljs.core.async.close_BANG_.call(null,out);
var state_15134__$1 = (function (){var statearr_15152 = state_15134;
(statearr_15152[(13)] = inst_15127);

return statearr_15152;
})();
var statearr_15153_15180 = state_15134__$1;
(statearr_15153_15180[(2)] = inst_15128);

(statearr_15153_15180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15135 === (10))){
var inst_15117 = (state_15134[(2)]);
var state_15134__$1 = state_15134;
var statearr_15154_15181 = state_15134__$1;
(statearr_15154_15181[(2)] = inst_15117);

(statearr_15154_15181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15135 === (8))){
var inst_15102 = (state_15134[(10)]);
var inst_15098 = (state_15134[(9)]);
var inst_15094 = (state_15134[(8)]);
var inst_15107 = inst_15094.push(inst_15098);
var tmp15151 = inst_15094;
var inst_15094__$1 = tmp15151;
var inst_15095 = inst_15102;
var state_15134__$1 = (function (){var statearr_15155 = state_15134;
(statearr_15155[(7)] = inst_15095);

(statearr_15155[(14)] = inst_15107);

(statearr_15155[(8)] = inst_15094__$1);

return statearr_15155;
})();
var statearr_15156_15182 = state_15134__$1;
(statearr_15156_15182[(2)] = null);

(statearr_15156_15182[(1)] = (2));


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
});})(c__7026__auto___15168,out))
;
return ((function (switch__6961__auto__,c__7026__auto___15168,out){
return (function() {
var cljs$core$async$state_machine__6962__auto__ = null;
var cljs$core$async$state_machine__6962__auto____0 = (function (){
var statearr_15160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15160[(0)] = cljs$core$async$state_machine__6962__auto__);

(statearr_15160[(1)] = (1));

return statearr_15160;
});
var cljs$core$async$state_machine__6962__auto____1 = (function (state_15134){
while(true){
var ret_value__6963__auto__ = (function (){try{while(true){
var result__6964__auto__ = switch__6961__auto__.call(null,state_15134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6964__auto__;
}
break;
}
}catch (e15161){if((e15161 instanceof Object)){
var ex__6965__auto__ = e15161;
var statearr_15162_15183 = state_15134;
(statearr_15162_15183[(5)] = ex__6965__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15184 = state_15134;
state_15134 = G__15184;
continue;
} else {
return ret_value__6963__auto__;
}
break;
}
});
cljs$core$async$state_machine__6962__auto__ = function(state_15134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6962__auto____1.call(this,state_15134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6962__auto____0;
cljs$core$async$state_machine__6962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6962__auto____1;
return cljs$core$async$state_machine__6962__auto__;
})()
;})(switch__6961__auto__,c__7026__auto___15168,out))
})();
var state__7028__auto__ = (function (){var statearr_15163 = f__7027__auto__.call(null);
(statearr_15163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7026__auto___15168);

return statearr_15163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7028__auto__);
});})(c__7026__auto___15168,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map