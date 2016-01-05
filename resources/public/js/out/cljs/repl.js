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
var seq__30922_30936 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30923_30937 = null;
var count__30924_30938 = (0);
var i__30925_30939 = (0);
while(true){
if((i__30925_30939 < count__30924_30938)){
var f_30940 = cljs.core._nth.call(null,chunk__30923_30937,i__30925_30939);
cljs.core.println.call(null,"  ",f_30940);

var G__30941 = seq__30922_30936;
var G__30942 = chunk__30923_30937;
var G__30943 = count__30924_30938;
var G__30944 = (i__30925_30939 + (1));
seq__30922_30936 = G__30941;
chunk__30923_30937 = G__30942;
count__30924_30938 = G__30943;
i__30925_30939 = G__30944;
continue;
} else {
var temp__4425__auto___30945 = cljs.core.seq.call(null,seq__30922_30936);
if(temp__4425__auto___30945){
var seq__30922_30946__$1 = temp__4425__auto___30945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30922_30946__$1)){
var c__30523__auto___30947 = cljs.core.chunk_first.call(null,seq__30922_30946__$1);
var G__30948 = cljs.core.chunk_rest.call(null,seq__30922_30946__$1);
var G__30949 = c__30523__auto___30947;
var G__30950 = cljs.core.count.call(null,c__30523__auto___30947);
var G__30951 = (0);
seq__30922_30936 = G__30948;
chunk__30923_30937 = G__30949;
count__30924_30938 = G__30950;
i__30925_30939 = G__30951;
continue;
} else {
var f_30952 = cljs.core.first.call(null,seq__30922_30946__$1);
cljs.core.println.call(null,"  ",f_30952);

var G__30953 = cljs.core.next.call(null,seq__30922_30946__$1);
var G__30954 = null;
var G__30955 = (0);
var G__30956 = (0);
seq__30922_30936 = G__30953;
chunk__30923_30937 = G__30954;
count__30924_30938 = G__30955;
i__30925_30939 = G__30956;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30957 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__29720__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__29720__auto__)){
return or__29720__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30957);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30957)))?cljs.core.second.call(null,arglists_30957):arglists_30957));
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
var seq__30926 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30927 = null;
var count__30928 = (0);
var i__30929 = (0);
while(true){
if((i__30929 < count__30928)){
var vec__30930 = cljs.core._nth.call(null,chunk__30927,i__30929);
var name = cljs.core.nth.call(null,vec__30930,(0),null);
var map__30931 = cljs.core.nth.call(null,vec__30930,(1),null);
var map__30931__$1 = ((((!((map__30931 == null)))?((((map__30931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30931):map__30931);
var doc = cljs.core.get.call(null,map__30931__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30931__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30958 = seq__30926;
var G__30959 = chunk__30927;
var G__30960 = count__30928;
var G__30961 = (i__30929 + (1));
seq__30926 = G__30958;
chunk__30927 = G__30959;
count__30928 = G__30960;
i__30929 = G__30961;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30926);
if(temp__4425__auto__){
var seq__30926__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30926__$1)){
var c__30523__auto__ = cljs.core.chunk_first.call(null,seq__30926__$1);
var G__30962 = cljs.core.chunk_rest.call(null,seq__30926__$1);
var G__30963 = c__30523__auto__;
var G__30964 = cljs.core.count.call(null,c__30523__auto__);
var G__30965 = (0);
seq__30926 = G__30962;
chunk__30927 = G__30963;
count__30928 = G__30964;
i__30929 = G__30965;
continue;
} else {
var vec__30933 = cljs.core.first.call(null,seq__30926__$1);
var name = cljs.core.nth.call(null,vec__30933,(0),null);
var map__30934 = cljs.core.nth.call(null,vec__30933,(1),null);
var map__30934__$1 = ((((!((map__30934 == null)))?((((map__30934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30934):map__30934);
var doc = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30934__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30966 = cljs.core.next.call(null,seq__30926__$1);
var G__30967 = null;
var G__30968 = (0);
var G__30969 = (0);
seq__30926 = G__30966;
chunk__30927 = G__30967;
count__30928 = G__30968;
i__30929 = G__30969;
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