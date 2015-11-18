// Compiled by ClojureScript 1.7.170 {}
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
var seq__35374_35388 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35375_35389 = null;
var count__35376_35390 = (0);
var i__35377_35391 = (0);
while(true){
if((i__35377_35391 < count__35376_35390)){
var f_35392 = cljs.core._nth.call(null,chunk__35375_35389,i__35377_35391);
cljs.core.println.call(null,"  ",f_35392);

var G__35393 = seq__35374_35388;
var G__35394 = chunk__35375_35389;
var G__35395 = count__35376_35390;
var G__35396 = (i__35377_35391 + (1));
seq__35374_35388 = G__35393;
chunk__35375_35389 = G__35394;
count__35376_35390 = G__35395;
i__35377_35391 = G__35396;
continue;
} else {
var temp__4425__auto___35397 = cljs.core.seq.call(null,seq__35374_35388);
if(temp__4425__auto___35397){
var seq__35374_35398__$1 = temp__4425__auto___35397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35374_35398__$1)){
var c__30217__auto___35399 = cljs.core.chunk_first.call(null,seq__35374_35398__$1);
var G__35400 = cljs.core.chunk_rest.call(null,seq__35374_35398__$1);
var G__35401 = c__30217__auto___35399;
var G__35402 = cljs.core.count.call(null,c__30217__auto___35399);
var G__35403 = (0);
seq__35374_35388 = G__35400;
chunk__35375_35389 = G__35401;
count__35376_35390 = G__35402;
i__35377_35391 = G__35403;
continue;
} else {
var f_35404 = cljs.core.first.call(null,seq__35374_35398__$1);
cljs.core.println.call(null,"  ",f_35404);

var G__35405 = cljs.core.next.call(null,seq__35374_35398__$1);
var G__35406 = null;
var G__35407 = (0);
var G__35408 = (0);
seq__35374_35388 = G__35405;
chunk__35375_35389 = G__35406;
count__35376_35390 = G__35407;
i__35377_35391 = G__35408;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35409 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__29414__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35409);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35409)))?cljs.core.second.call(null,arglists_35409):arglists_35409));
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
var seq__35378 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35379 = null;
var count__35380 = (0);
var i__35381 = (0);
while(true){
if((i__35381 < count__35380)){
var vec__35382 = cljs.core._nth.call(null,chunk__35379,i__35381);
var name = cljs.core.nth.call(null,vec__35382,(0),null);
var map__35383 = cljs.core.nth.call(null,vec__35382,(1),null);
var map__35383__$1 = ((((!((map__35383 == null)))?((((map__35383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35383):map__35383);
var doc = cljs.core.get.call(null,map__35383__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35383__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35410 = seq__35378;
var G__35411 = chunk__35379;
var G__35412 = count__35380;
var G__35413 = (i__35381 + (1));
seq__35378 = G__35410;
chunk__35379 = G__35411;
count__35380 = G__35412;
i__35381 = G__35413;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35378);
if(temp__4425__auto__){
var seq__35378__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35378__$1)){
var c__30217__auto__ = cljs.core.chunk_first.call(null,seq__35378__$1);
var G__35414 = cljs.core.chunk_rest.call(null,seq__35378__$1);
var G__35415 = c__30217__auto__;
var G__35416 = cljs.core.count.call(null,c__30217__auto__);
var G__35417 = (0);
seq__35378 = G__35414;
chunk__35379 = G__35415;
count__35380 = G__35416;
i__35381 = G__35417;
continue;
} else {
var vec__35385 = cljs.core.first.call(null,seq__35378__$1);
var name = cljs.core.nth.call(null,vec__35385,(0),null);
var map__35386 = cljs.core.nth.call(null,vec__35385,(1),null);
var map__35386__$1 = ((((!((map__35386 == null)))?((((map__35386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35386):map__35386);
var doc = cljs.core.get.call(null,map__35386__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35386__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35418 = cljs.core.next.call(null,seq__35378__$1);
var G__35419 = null;
var G__35420 = (0);
var G__35421 = (0);
seq__35378 = G__35418;
chunk__35379 = G__35419;
count__35380 = G__35420;
i__35381 = G__35421;
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

//# sourceMappingURL=repl.js.map