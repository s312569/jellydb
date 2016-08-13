// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47378){
var map__47403 = p__47378;
var map__47403__$1 = ((((!((map__47403 == null)))?((((map__47403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47403):map__47403);
var m = map__47403__$1;
var n = cljs.core.get.call(null,map__47403__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47403__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__47405_47427 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47406_47428 = null;
var count__47407_47429 = (0);
var i__47408_47430 = (0);
while(true){
if((i__47408_47430 < count__47407_47429)){
var f_47431 = cljs.core._nth.call(null,chunk__47406_47428,i__47408_47430);
cljs.core.println.call(null,"  ",f_47431);

var G__47432 = seq__47405_47427;
var G__47433 = chunk__47406_47428;
var G__47434 = count__47407_47429;
var G__47435 = (i__47408_47430 + (1));
seq__47405_47427 = G__47432;
chunk__47406_47428 = G__47433;
count__47407_47429 = G__47434;
i__47408_47430 = G__47435;
continue;
} else {
var temp__4657__auto___47436 = cljs.core.seq.call(null,seq__47405_47427);
if(temp__4657__auto___47436){
var seq__47405_47437__$1 = temp__4657__auto___47436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47405_47437__$1)){
var c__31895__auto___47438 = cljs.core.chunk_first.call(null,seq__47405_47437__$1);
var G__47439 = cljs.core.chunk_rest.call(null,seq__47405_47437__$1);
var G__47440 = c__31895__auto___47438;
var G__47441 = cljs.core.count.call(null,c__31895__auto___47438);
var G__47442 = (0);
seq__47405_47427 = G__47439;
chunk__47406_47428 = G__47440;
count__47407_47429 = G__47441;
i__47408_47430 = G__47442;
continue;
} else {
var f_47443 = cljs.core.first.call(null,seq__47405_47437__$1);
cljs.core.println.call(null,"  ",f_47443);

var G__47444 = cljs.core.next.call(null,seq__47405_47437__$1);
var G__47445 = null;
var G__47446 = (0);
var G__47447 = (0);
seq__47405_47427 = G__47444;
chunk__47406_47428 = G__47445;
count__47407_47429 = G__47446;
i__47408_47430 = G__47447;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47448 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__31084__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__31084__auto__)){
return or__31084__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47448);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47448)))?cljs.core.second.call(null,arglists_47448):arglists_47448));
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
var seq__47409_47449 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47410_47450 = null;
var count__47411_47451 = (0);
var i__47412_47452 = (0);
while(true){
if((i__47412_47452 < count__47411_47451)){
var vec__47413_47453 = cljs.core._nth.call(null,chunk__47410_47450,i__47412_47452);
var name_47454 = cljs.core.nth.call(null,vec__47413_47453,(0),null);
var map__47416_47455 = cljs.core.nth.call(null,vec__47413_47453,(1),null);
var map__47416_47456__$1 = ((((!((map__47416_47455 == null)))?((((map__47416_47455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47416_47455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47416_47455):map__47416_47455);
var doc_47457 = cljs.core.get.call(null,map__47416_47456__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47458 = cljs.core.get.call(null,map__47416_47456__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47454);

cljs.core.println.call(null," ",arglists_47458);

if(cljs.core.truth_(doc_47457)){
cljs.core.println.call(null," ",doc_47457);
} else {
}

var G__47459 = seq__47409_47449;
var G__47460 = chunk__47410_47450;
var G__47461 = count__47411_47451;
var G__47462 = (i__47412_47452 + (1));
seq__47409_47449 = G__47459;
chunk__47410_47450 = G__47460;
count__47411_47451 = G__47461;
i__47412_47452 = G__47462;
continue;
} else {
var temp__4657__auto___47463 = cljs.core.seq.call(null,seq__47409_47449);
if(temp__4657__auto___47463){
var seq__47409_47464__$1 = temp__4657__auto___47463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47409_47464__$1)){
var c__31895__auto___47465 = cljs.core.chunk_first.call(null,seq__47409_47464__$1);
var G__47466 = cljs.core.chunk_rest.call(null,seq__47409_47464__$1);
var G__47467 = c__31895__auto___47465;
var G__47468 = cljs.core.count.call(null,c__31895__auto___47465);
var G__47469 = (0);
seq__47409_47449 = G__47466;
chunk__47410_47450 = G__47467;
count__47411_47451 = G__47468;
i__47412_47452 = G__47469;
continue;
} else {
var vec__47418_47470 = cljs.core.first.call(null,seq__47409_47464__$1);
var name_47471 = cljs.core.nth.call(null,vec__47418_47470,(0),null);
var map__47421_47472 = cljs.core.nth.call(null,vec__47418_47470,(1),null);
var map__47421_47473__$1 = ((((!((map__47421_47472 == null)))?((((map__47421_47472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47421_47472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47421_47472):map__47421_47472);
var doc_47474 = cljs.core.get.call(null,map__47421_47473__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47475 = cljs.core.get.call(null,map__47421_47473__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47471);

cljs.core.println.call(null," ",arglists_47475);

if(cljs.core.truth_(doc_47474)){
cljs.core.println.call(null," ",doc_47474);
} else {
}

var G__47476 = cljs.core.next.call(null,seq__47409_47464__$1);
var G__47477 = null;
var G__47478 = (0);
var G__47479 = (0);
seq__47409_47449 = G__47476;
chunk__47410_47450 = G__47477;
count__47411_47451 = G__47478;
i__47412_47452 = G__47479;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__47423 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47424 = null;
var count__47425 = (0);
var i__47426 = (0);
while(true){
if((i__47426 < count__47425)){
var role = cljs.core._nth.call(null,chunk__47424,i__47426);
var temp__4657__auto___47480__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47480__$1)){
var spec_47481 = temp__4657__auto___47480__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_47481));
} else {
}

var G__47482 = seq__47423;
var G__47483 = chunk__47424;
var G__47484 = count__47425;
var G__47485 = (i__47426 + (1));
seq__47423 = G__47482;
chunk__47424 = G__47483;
count__47425 = G__47484;
i__47426 = G__47485;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__47423);
if(temp__4657__auto____$1){
var seq__47423__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47423__$1)){
var c__31895__auto__ = cljs.core.chunk_first.call(null,seq__47423__$1);
var G__47486 = cljs.core.chunk_rest.call(null,seq__47423__$1);
var G__47487 = c__31895__auto__;
var G__47488 = cljs.core.count.call(null,c__31895__auto__);
var G__47489 = (0);
seq__47423 = G__47486;
chunk__47424 = G__47487;
count__47425 = G__47488;
i__47426 = G__47489;
continue;
} else {
var role = cljs.core.first.call(null,seq__47423__$1);
var temp__4657__auto___47490__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47490__$2)){
var spec_47491 = temp__4657__auto___47490__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_47491));
} else {
}

var G__47492 = cljs.core.next.call(null,seq__47423__$1);
var G__47493 = null;
var G__47494 = (0);
var G__47495 = (0);
seq__47423 = G__47492;
chunk__47424 = G__47493;
count__47425 = G__47494;
i__47426 = G__47495;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1471077527896