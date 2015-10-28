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
var seq__8840_8854 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8841_8855 = null;
var count__8842_8856 = (0);
var i__8843_8857 = (0);
while(true){
if((i__8843_8857 < count__8842_8856)){
var f_8858 = cljs.core._nth.call(null,chunk__8841_8855,i__8843_8857);
cljs.core.println.call(null,"  ",f_8858);

var G__8859 = seq__8840_8854;
var G__8860 = chunk__8841_8855;
var G__8861 = count__8842_8856;
var G__8862 = (i__8843_8857 + (1));
seq__8840_8854 = G__8859;
chunk__8841_8855 = G__8860;
count__8842_8856 = G__8861;
i__8843_8857 = G__8862;
continue;
} else {
var temp__4425__auto___8863 = cljs.core.seq.call(null,seq__8840_8854);
if(temp__4425__auto___8863){
var seq__8840_8864__$1 = temp__4425__auto___8863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8840_8864__$1)){
var c__5306__auto___8865 = cljs.core.chunk_first.call(null,seq__8840_8864__$1);
var G__8866 = cljs.core.chunk_rest.call(null,seq__8840_8864__$1);
var G__8867 = c__5306__auto___8865;
var G__8868 = cljs.core.count.call(null,c__5306__auto___8865);
var G__8869 = (0);
seq__8840_8854 = G__8866;
chunk__8841_8855 = G__8867;
count__8842_8856 = G__8868;
i__8843_8857 = G__8869;
continue;
} else {
var f_8870 = cljs.core.first.call(null,seq__8840_8864__$1);
cljs.core.println.call(null,"  ",f_8870);

var G__8871 = cljs.core.next.call(null,seq__8840_8864__$1);
var G__8872 = null;
var G__8873 = (0);
var G__8874 = (0);
seq__8840_8854 = G__8871;
chunk__8841_8855 = G__8872;
count__8842_8856 = G__8873;
i__8843_8857 = G__8874;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8875 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4503__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4503__auto__)){
return or__4503__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8875);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8875)))?cljs.core.second.call(null,arglists_8875):arglists_8875));
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
var seq__8844 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8845 = null;
var count__8846 = (0);
var i__8847 = (0);
while(true){
if((i__8847 < count__8846)){
var vec__8848 = cljs.core._nth.call(null,chunk__8845,i__8847);
var name = cljs.core.nth.call(null,vec__8848,(0),null);
var map__8849 = cljs.core.nth.call(null,vec__8848,(1),null);
var map__8849__$1 = ((((!((map__8849 == null)))?((((map__8849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8849):map__8849);
var doc = cljs.core.get.call(null,map__8849__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8849__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8876 = seq__8844;
var G__8877 = chunk__8845;
var G__8878 = count__8846;
var G__8879 = (i__8847 + (1));
seq__8844 = G__8876;
chunk__8845 = G__8877;
count__8846 = G__8878;
i__8847 = G__8879;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8844);
if(temp__4425__auto__){
var seq__8844__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8844__$1)){
var c__5306__auto__ = cljs.core.chunk_first.call(null,seq__8844__$1);
var G__8880 = cljs.core.chunk_rest.call(null,seq__8844__$1);
var G__8881 = c__5306__auto__;
var G__8882 = cljs.core.count.call(null,c__5306__auto__);
var G__8883 = (0);
seq__8844 = G__8880;
chunk__8845 = G__8881;
count__8846 = G__8882;
i__8847 = G__8883;
continue;
} else {
var vec__8851 = cljs.core.first.call(null,seq__8844__$1);
var name = cljs.core.nth.call(null,vec__8851,(0),null);
var map__8852 = cljs.core.nth.call(null,vec__8851,(1),null);
var map__8852__$1 = ((((!((map__8852 == null)))?((((map__8852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8852):map__8852);
var doc = cljs.core.get.call(null,map__8852__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8852__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8884 = cljs.core.next.call(null,seq__8844__$1);
var G__8885 = null;
var G__8886 = (0);
var G__8887 = (0);
seq__8844 = G__8884;
chunk__8845 = G__8885;
count__8846 = G__8886;
i__8847 = G__8887;
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