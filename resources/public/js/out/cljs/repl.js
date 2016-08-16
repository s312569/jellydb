// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46985){
var map__47010 = p__46985;
var map__47010__$1 = ((((!((map__47010 == null)))?((((map__47010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47010):map__47010);
var m = map__47010__$1;
var n = cljs.core.get.call(null,map__47010__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47010__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__47012_47034 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47013_47035 = null;
var count__47014_47036 = (0);
var i__47015_47037 = (0);
while(true){
if((i__47015_47037 < count__47014_47036)){
var f_47038 = cljs.core._nth.call(null,chunk__47013_47035,i__47015_47037);
cljs.core.println.call(null,"  ",f_47038);

var G__47039 = seq__47012_47034;
var G__47040 = chunk__47013_47035;
var G__47041 = count__47014_47036;
var G__47042 = (i__47015_47037 + (1));
seq__47012_47034 = G__47039;
chunk__47013_47035 = G__47040;
count__47014_47036 = G__47041;
i__47015_47037 = G__47042;
continue;
} else {
var temp__4657__auto___47043 = cljs.core.seq.call(null,seq__47012_47034);
if(temp__4657__auto___47043){
var seq__47012_47044__$1 = temp__4657__auto___47043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47012_47044__$1)){
var c__31630__auto___47045 = cljs.core.chunk_first.call(null,seq__47012_47044__$1);
var G__47046 = cljs.core.chunk_rest.call(null,seq__47012_47044__$1);
var G__47047 = c__31630__auto___47045;
var G__47048 = cljs.core.count.call(null,c__31630__auto___47045);
var G__47049 = (0);
seq__47012_47034 = G__47046;
chunk__47013_47035 = G__47047;
count__47014_47036 = G__47048;
i__47015_47037 = G__47049;
continue;
} else {
var f_47050 = cljs.core.first.call(null,seq__47012_47044__$1);
cljs.core.println.call(null,"  ",f_47050);

var G__47051 = cljs.core.next.call(null,seq__47012_47044__$1);
var G__47052 = null;
var G__47053 = (0);
var G__47054 = (0);
seq__47012_47034 = G__47051;
chunk__47013_47035 = G__47052;
count__47014_47036 = G__47053;
i__47015_47037 = G__47054;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47055 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30819__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30819__auto__)){
return or__30819__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47055);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47055)))?cljs.core.second.call(null,arglists_47055):arglists_47055));
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
var seq__47016_47056 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47017_47057 = null;
var count__47018_47058 = (0);
var i__47019_47059 = (0);
while(true){
if((i__47019_47059 < count__47018_47058)){
var vec__47020_47060 = cljs.core._nth.call(null,chunk__47017_47057,i__47019_47059);
var name_47061 = cljs.core.nth.call(null,vec__47020_47060,(0),null);
var map__47023_47062 = cljs.core.nth.call(null,vec__47020_47060,(1),null);
var map__47023_47063__$1 = ((((!((map__47023_47062 == null)))?((((map__47023_47062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47023_47062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47023_47062):map__47023_47062);
var doc_47064 = cljs.core.get.call(null,map__47023_47063__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47065 = cljs.core.get.call(null,map__47023_47063__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47061);

cljs.core.println.call(null," ",arglists_47065);

if(cljs.core.truth_(doc_47064)){
cljs.core.println.call(null," ",doc_47064);
} else {
}

var G__47066 = seq__47016_47056;
var G__47067 = chunk__47017_47057;
var G__47068 = count__47018_47058;
var G__47069 = (i__47019_47059 + (1));
seq__47016_47056 = G__47066;
chunk__47017_47057 = G__47067;
count__47018_47058 = G__47068;
i__47019_47059 = G__47069;
continue;
} else {
var temp__4657__auto___47070 = cljs.core.seq.call(null,seq__47016_47056);
if(temp__4657__auto___47070){
var seq__47016_47071__$1 = temp__4657__auto___47070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47016_47071__$1)){
var c__31630__auto___47072 = cljs.core.chunk_first.call(null,seq__47016_47071__$1);
var G__47073 = cljs.core.chunk_rest.call(null,seq__47016_47071__$1);
var G__47074 = c__31630__auto___47072;
var G__47075 = cljs.core.count.call(null,c__31630__auto___47072);
var G__47076 = (0);
seq__47016_47056 = G__47073;
chunk__47017_47057 = G__47074;
count__47018_47058 = G__47075;
i__47019_47059 = G__47076;
continue;
} else {
var vec__47025_47077 = cljs.core.first.call(null,seq__47016_47071__$1);
var name_47078 = cljs.core.nth.call(null,vec__47025_47077,(0),null);
var map__47028_47079 = cljs.core.nth.call(null,vec__47025_47077,(1),null);
var map__47028_47080__$1 = ((((!((map__47028_47079 == null)))?((((map__47028_47079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47028_47079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47028_47079):map__47028_47079);
var doc_47081 = cljs.core.get.call(null,map__47028_47080__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47082 = cljs.core.get.call(null,map__47028_47080__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47078);

cljs.core.println.call(null," ",arglists_47082);

if(cljs.core.truth_(doc_47081)){
cljs.core.println.call(null," ",doc_47081);
} else {
}

var G__47083 = cljs.core.next.call(null,seq__47016_47071__$1);
var G__47084 = null;
var G__47085 = (0);
var G__47086 = (0);
seq__47016_47056 = G__47083;
chunk__47017_47057 = G__47084;
count__47018_47058 = G__47085;
i__47019_47059 = G__47086;
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

var seq__47030 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47031 = null;
var count__47032 = (0);
var i__47033 = (0);
while(true){
if((i__47033 < count__47032)){
var role = cljs.core._nth.call(null,chunk__47031,i__47033);
var temp__4657__auto___47087__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47087__$1)){
var spec_47088 = temp__4657__auto___47087__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_47088));
} else {
}

var G__47089 = seq__47030;
var G__47090 = chunk__47031;
var G__47091 = count__47032;
var G__47092 = (i__47033 + (1));
seq__47030 = G__47089;
chunk__47031 = G__47090;
count__47032 = G__47091;
i__47033 = G__47092;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__47030);
if(temp__4657__auto____$1){
var seq__47030__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47030__$1)){
var c__31630__auto__ = cljs.core.chunk_first.call(null,seq__47030__$1);
var G__47093 = cljs.core.chunk_rest.call(null,seq__47030__$1);
var G__47094 = c__31630__auto__;
var G__47095 = cljs.core.count.call(null,c__31630__auto__);
var G__47096 = (0);
seq__47030 = G__47093;
chunk__47031 = G__47094;
count__47032 = G__47095;
i__47033 = G__47096;
continue;
} else {
var role = cljs.core.first.call(null,seq__47030__$1);
var temp__4657__auto___47097__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47097__$2)){
var spec_47098 = temp__4657__auto___47097__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_47098));
} else {
}

var G__47099 = cljs.core.next.call(null,seq__47030__$1);
var G__47100 = null;
var G__47101 = (0);
var G__47102 = (0);
seq__47030 = G__47099;
chunk__47031 = G__47100;
count__47032 = G__47101;
i__47033 = G__47102;
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

//# sourceMappingURL=repl.js.map?rel=1471343716026