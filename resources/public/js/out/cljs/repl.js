// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41868){
var map__41893 = p__41868;
var map__41893__$1 = ((((!((map__41893 == null)))?((((map__41893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41893):map__41893);
var m = map__41893__$1;
var n = cljs.core.get.call(null,map__41893__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41893__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__41895_41917 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41896_41918 = null;
var count__41897_41919 = (0);
var i__41898_41920 = (0);
while(true){
if((i__41898_41920 < count__41897_41919)){
var f_41921 = cljs.core._nth.call(null,chunk__41896_41918,i__41898_41920);
cljs.core.println.call(null,"  ",f_41921);

var G__41922 = seq__41895_41917;
var G__41923 = chunk__41896_41918;
var G__41924 = count__41897_41919;
var G__41925 = (i__41898_41920 + (1));
seq__41895_41917 = G__41922;
chunk__41896_41918 = G__41923;
count__41897_41919 = G__41924;
i__41898_41920 = G__41925;
continue;
} else {
var temp__4657__auto___41926 = cljs.core.seq.call(null,seq__41895_41917);
if(temp__4657__auto___41926){
var seq__41895_41927__$1 = temp__4657__auto___41926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41895_41927__$1)){
var c__30819__auto___41928 = cljs.core.chunk_first.call(null,seq__41895_41927__$1);
var G__41929 = cljs.core.chunk_rest.call(null,seq__41895_41927__$1);
var G__41930 = c__30819__auto___41928;
var G__41931 = cljs.core.count.call(null,c__30819__auto___41928);
var G__41932 = (0);
seq__41895_41917 = G__41929;
chunk__41896_41918 = G__41930;
count__41897_41919 = G__41931;
i__41898_41920 = G__41932;
continue;
} else {
var f_41933 = cljs.core.first.call(null,seq__41895_41927__$1);
cljs.core.println.call(null,"  ",f_41933);

var G__41934 = cljs.core.next.call(null,seq__41895_41927__$1);
var G__41935 = null;
var G__41936 = (0);
var G__41937 = (0);
seq__41895_41917 = G__41934;
chunk__41896_41918 = G__41935;
count__41897_41919 = G__41936;
i__41898_41920 = G__41937;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41938 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30008__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41938);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41938)))?cljs.core.second.call(null,arglists_41938):arglists_41938));
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
var seq__41899_41939 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41900_41940 = null;
var count__41901_41941 = (0);
var i__41902_41942 = (0);
while(true){
if((i__41902_41942 < count__41901_41941)){
var vec__41903_41943 = cljs.core._nth.call(null,chunk__41900_41940,i__41902_41942);
var name_41944 = cljs.core.nth.call(null,vec__41903_41943,(0),null);
var map__41906_41945 = cljs.core.nth.call(null,vec__41903_41943,(1),null);
var map__41906_41946__$1 = ((((!((map__41906_41945 == null)))?((((map__41906_41945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41906_41945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41906_41945):map__41906_41945);
var doc_41947 = cljs.core.get.call(null,map__41906_41946__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41948 = cljs.core.get.call(null,map__41906_41946__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41944);

cljs.core.println.call(null," ",arglists_41948);

if(cljs.core.truth_(doc_41947)){
cljs.core.println.call(null," ",doc_41947);
} else {
}

var G__41949 = seq__41899_41939;
var G__41950 = chunk__41900_41940;
var G__41951 = count__41901_41941;
var G__41952 = (i__41902_41942 + (1));
seq__41899_41939 = G__41949;
chunk__41900_41940 = G__41950;
count__41901_41941 = G__41951;
i__41902_41942 = G__41952;
continue;
} else {
var temp__4657__auto___41953 = cljs.core.seq.call(null,seq__41899_41939);
if(temp__4657__auto___41953){
var seq__41899_41954__$1 = temp__4657__auto___41953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41899_41954__$1)){
var c__30819__auto___41955 = cljs.core.chunk_first.call(null,seq__41899_41954__$1);
var G__41956 = cljs.core.chunk_rest.call(null,seq__41899_41954__$1);
var G__41957 = c__30819__auto___41955;
var G__41958 = cljs.core.count.call(null,c__30819__auto___41955);
var G__41959 = (0);
seq__41899_41939 = G__41956;
chunk__41900_41940 = G__41957;
count__41901_41941 = G__41958;
i__41902_41942 = G__41959;
continue;
} else {
var vec__41908_41960 = cljs.core.first.call(null,seq__41899_41954__$1);
var name_41961 = cljs.core.nth.call(null,vec__41908_41960,(0),null);
var map__41911_41962 = cljs.core.nth.call(null,vec__41908_41960,(1),null);
var map__41911_41963__$1 = ((((!((map__41911_41962 == null)))?((((map__41911_41962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41911_41962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41911_41962):map__41911_41962);
var doc_41964 = cljs.core.get.call(null,map__41911_41963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41965 = cljs.core.get.call(null,map__41911_41963__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41961);

cljs.core.println.call(null," ",arglists_41965);

if(cljs.core.truth_(doc_41964)){
cljs.core.println.call(null," ",doc_41964);
} else {
}

var G__41966 = cljs.core.next.call(null,seq__41899_41954__$1);
var G__41967 = null;
var G__41968 = (0);
var G__41969 = (0);
seq__41899_41939 = G__41966;
chunk__41900_41940 = G__41967;
count__41901_41941 = G__41968;
i__41902_41942 = G__41969;
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

var seq__41913 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41914 = null;
var count__41915 = (0);
var i__41916 = (0);
while(true){
if((i__41916 < count__41915)){
var role = cljs.core._nth.call(null,chunk__41914,i__41916);
var temp__4657__auto___41970__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41970__$1)){
var spec_41971 = temp__4657__auto___41970__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_41971));
} else {
}

var G__41972 = seq__41913;
var G__41973 = chunk__41914;
var G__41974 = count__41915;
var G__41975 = (i__41916 + (1));
seq__41913 = G__41972;
chunk__41914 = G__41973;
count__41915 = G__41974;
i__41916 = G__41975;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41913);
if(temp__4657__auto____$1){
var seq__41913__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41913__$1)){
var c__30819__auto__ = cljs.core.chunk_first.call(null,seq__41913__$1);
var G__41976 = cljs.core.chunk_rest.call(null,seq__41913__$1);
var G__41977 = c__30819__auto__;
var G__41978 = cljs.core.count.call(null,c__30819__auto__);
var G__41979 = (0);
seq__41913 = G__41976;
chunk__41914 = G__41977;
count__41915 = G__41978;
i__41916 = G__41979;
continue;
} else {
var role = cljs.core.first.call(null,seq__41913__$1);
var temp__4657__auto___41980__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41980__$2)){
var spec_41981 = temp__4657__auto___41980__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_41981));
} else {
}

var G__41982 = cljs.core.next.call(null,seq__41913__$1);
var G__41983 = null;
var G__41984 = (0);
var G__41985 = (0);
seq__41913 = G__41982;
chunk__41914 = G__41983;
count__41915 = G__41984;
i__41916 = G__41985;
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

//# sourceMappingURL=repl.js.map?rel=1470795675463