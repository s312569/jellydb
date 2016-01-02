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
var seq__33232_33246 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33233_33247 = null;
var count__33234_33248 = (0);
var i__33235_33249 = (0);
while(true){
if((i__33235_33249 < count__33234_33248)){
var f_33250 = cljs.core._nth.call(null,chunk__33233_33247,i__33235_33249);
cljs.core.println.call(null,"  ",f_33250);

var G__33251 = seq__33232_33246;
var G__33252 = chunk__33233_33247;
var G__33253 = count__33234_33248;
var G__33254 = (i__33235_33249 + (1));
seq__33232_33246 = G__33251;
chunk__33233_33247 = G__33252;
count__33234_33248 = G__33253;
i__33235_33249 = G__33254;
continue;
} else {
var temp__4425__auto___33255 = cljs.core.seq.call(null,seq__33232_33246);
if(temp__4425__auto___33255){
var seq__33232_33256__$1 = temp__4425__auto___33255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33232_33256__$1)){
var c__30316__auto___33257 = cljs.core.chunk_first.call(null,seq__33232_33256__$1);
var G__33258 = cljs.core.chunk_rest.call(null,seq__33232_33256__$1);
var G__33259 = c__30316__auto___33257;
var G__33260 = cljs.core.count.call(null,c__30316__auto___33257);
var G__33261 = (0);
seq__33232_33246 = G__33258;
chunk__33233_33247 = G__33259;
count__33234_33248 = G__33260;
i__33235_33249 = G__33261;
continue;
} else {
var f_33262 = cljs.core.first.call(null,seq__33232_33256__$1);
cljs.core.println.call(null,"  ",f_33262);

var G__33263 = cljs.core.next.call(null,seq__33232_33256__$1);
var G__33264 = null;
var G__33265 = (0);
var G__33266 = (0);
seq__33232_33246 = G__33263;
chunk__33233_33247 = G__33264;
count__33234_33248 = G__33265;
i__33235_33249 = G__33266;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33267 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__29513__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33267);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33267)))?cljs.core.second.call(null,arglists_33267):arglists_33267));
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
var seq__33236 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33237 = null;
var count__33238 = (0);
var i__33239 = (0);
while(true){
if((i__33239 < count__33238)){
var vec__33240 = cljs.core._nth.call(null,chunk__33237,i__33239);
var name = cljs.core.nth.call(null,vec__33240,(0),null);
var map__33241 = cljs.core.nth.call(null,vec__33240,(1),null);
var map__33241__$1 = ((((!((map__33241 == null)))?((((map__33241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33241):map__33241);
var doc = cljs.core.get.call(null,map__33241__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33241__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33268 = seq__33236;
var G__33269 = chunk__33237;
var G__33270 = count__33238;
var G__33271 = (i__33239 + (1));
seq__33236 = G__33268;
chunk__33237 = G__33269;
count__33238 = G__33270;
i__33239 = G__33271;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33236);
if(temp__4425__auto__){
var seq__33236__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33236__$1)){
var c__30316__auto__ = cljs.core.chunk_first.call(null,seq__33236__$1);
var G__33272 = cljs.core.chunk_rest.call(null,seq__33236__$1);
var G__33273 = c__30316__auto__;
var G__33274 = cljs.core.count.call(null,c__30316__auto__);
var G__33275 = (0);
seq__33236 = G__33272;
chunk__33237 = G__33273;
count__33238 = G__33274;
i__33239 = G__33275;
continue;
} else {
var vec__33243 = cljs.core.first.call(null,seq__33236__$1);
var name = cljs.core.nth.call(null,vec__33243,(0),null);
var map__33244 = cljs.core.nth.call(null,vec__33243,(1),null);
var map__33244__$1 = ((((!((map__33244 == null)))?((((map__33244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33244):map__33244);
var doc = cljs.core.get.call(null,map__33244__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33244__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33276 = cljs.core.next.call(null,seq__33236__$1);
var G__33277 = null;
var G__33278 = (0);
var G__33279 = (0);
seq__33236 = G__33276;
chunk__33237 = G__33277;
count__33238 = G__33278;
i__33239 = G__33279;
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