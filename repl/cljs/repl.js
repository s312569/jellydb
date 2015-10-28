// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10433_10447 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10434_10448 = null;
var count__10435_10449 = (0);
var i__10436_10450 = (0);
while(true){
if((i__10436_10450 < count__10435_10449)){
var f_10451 = cljs.core._nth.call(null,chunk__10434_10448,i__10436_10450);
cljs.core.println.call(null,"  ",f_10451);

var G__10452 = seq__10433_10447;
var G__10453 = chunk__10434_10448;
var G__10454 = count__10435_10449;
var G__10455 = (i__10436_10450 + (1));
seq__10433_10447 = G__10452;
chunk__10434_10448 = G__10453;
count__10435_10449 = G__10454;
i__10436_10450 = G__10455;
continue;
} else {
var temp__4425__auto___10456 = cljs.core.seq.call(null,seq__10433_10447);
if(temp__4425__auto___10456){
var seq__10433_10457__$1 = temp__4425__auto___10456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10433_10457__$1)){
var c__6045__auto___10458 = cljs.core.chunk_first.call(null,seq__10433_10457__$1);
var G__10459 = cljs.core.chunk_rest.call(null,seq__10433_10457__$1);
var G__10460 = c__6045__auto___10458;
var G__10461 = cljs.core.count.call(null,c__6045__auto___10458);
var G__10462 = (0);
seq__10433_10447 = G__10459;
chunk__10434_10448 = G__10460;
count__10435_10449 = G__10461;
i__10436_10450 = G__10462;
continue;
} else {
var f_10463 = cljs.core.first.call(null,seq__10433_10457__$1);
cljs.core.println.call(null,"  ",f_10463);

var G__10464 = cljs.core.next.call(null,seq__10433_10457__$1);
var G__10465 = null;
var G__10466 = (0);
var G__10467 = (0);
seq__10433_10447 = G__10464;
chunk__10434_10448 = G__10465;
count__10435_10449 = G__10466;
i__10436_10450 = G__10467;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10468 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5242__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5242__auto__)){
return or__5242__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10468);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10468)))?cljs.core.second.call(null,arglists_10468):arglists_10468));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10437 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10438 = null;
var count__10439 = (0);
var i__10440 = (0);
while(true){
if((i__10440 < count__10439)){
var vec__10441 = cljs.core._nth.call(null,chunk__10438,i__10440);
var name = cljs.core.nth.call(null,vec__10441,(0),null);
var map__10442 = cljs.core.nth.call(null,vec__10441,(1),null);
var map__10442__$1 = ((((!((map__10442 == null)))?((((map__10442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10442):map__10442);
var doc = cljs.core.get.call(null,map__10442__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__10442__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__10469 = seq__10437;
var G__10470 = chunk__10438;
var G__10471 = count__10439;
var G__10472 = (i__10440 + (1));
seq__10437 = G__10469;
chunk__10438 = G__10470;
count__10439 = G__10471;
i__10440 = G__10472;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10437);
if(temp__4425__auto__){
var seq__10437__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10437__$1)){
var c__6045__auto__ = cljs.core.chunk_first.call(null,seq__10437__$1);
var G__10473 = cljs.core.chunk_rest.call(null,seq__10437__$1);
var G__10474 = c__6045__auto__;
var G__10475 = cljs.core.count.call(null,c__6045__auto__);
var G__10476 = (0);
seq__10437 = G__10473;
chunk__10438 = G__10474;
count__10439 = G__10475;
i__10440 = G__10476;
continue;
} else {
var vec__10444 = cljs.core.first.call(null,seq__10437__$1);
var name = cljs.core.nth.call(null,vec__10444,(0),null);
var map__10445 = cljs.core.nth.call(null,vec__10444,(1),null);
var map__10445__$1 = ((((!((map__10445 == null)))?((((map__10445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10445):map__10445);
var doc = cljs.core.get.call(null,map__10445__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__10445__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__10477 = cljs.core.next.call(null,seq__10437__$1);
var G__10478 = null;
var G__10479 = (0);
var G__10480 = (0);
seq__10437 = G__10477;
chunk__10438 = G__10478;
count__10439 = G__10479;
i__10440 = G__10480;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
