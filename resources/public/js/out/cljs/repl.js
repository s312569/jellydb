// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47162){
var map__47187 = p__47162;
var map__47187__$1 = ((((!((map__47187 == null)))?((((map__47187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47187):map__47187);
var m = map__47187__$1;
var n = cljs.core.get.call(null,map__47187__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47187__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__47189_47211 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47190_47212 = null;
var count__47191_47213 = (0);
var i__47192_47214 = (0);
while(true){
if((i__47192_47214 < count__47191_47213)){
var f_47215 = cljs.core._nth.call(null,chunk__47190_47212,i__47192_47214);
cljs.core.println.call(null,"  ",f_47215);

var G__47216 = seq__47189_47211;
var G__47217 = chunk__47190_47212;
var G__47218 = count__47191_47213;
var G__47219 = (i__47192_47214 + (1));
seq__47189_47211 = G__47216;
chunk__47190_47212 = G__47217;
count__47191_47213 = G__47218;
i__47192_47214 = G__47219;
continue;
} else {
var temp__4657__auto___47220 = cljs.core.seq.call(null,seq__47189_47211);
if(temp__4657__auto___47220){
var seq__47189_47221__$1 = temp__4657__auto___47220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47189_47221__$1)){
var c__31672__auto___47222 = cljs.core.chunk_first.call(null,seq__47189_47221__$1);
var G__47223 = cljs.core.chunk_rest.call(null,seq__47189_47221__$1);
var G__47224 = c__31672__auto___47222;
var G__47225 = cljs.core.count.call(null,c__31672__auto___47222);
var G__47226 = (0);
seq__47189_47211 = G__47223;
chunk__47190_47212 = G__47224;
count__47191_47213 = G__47225;
i__47192_47214 = G__47226;
continue;
} else {
var f_47227 = cljs.core.first.call(null,seq__47189_47221__$1);
cljs.core.println.call(null,"  ",f_47227);

var G__47228 = cljs.core.next.call(null,seq__47189_47221__$1);
var G__47229 = null;
var G__47230 = (0);
var G__47231 = (0);
seq__47189_47211 = G__47228;
chunk__47190_47212 = G__47229;
count__47191_47213 = G__47230;
i__47192_47214 = G__47231;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47232 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30861__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47232);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47232)))?cljs.core.second.call(null,arglists_47232):arglists_47232));
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
var seq__47193_47233 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47194_47234 = null;
var count__47195_47235 = (0);
var i__47196_47236 = (0);
while(true){
if((i__47196_47236 < count__47195_47235)){
var vec__47197_47237 = cljs.core._nth.call(null,chunk__47194_47234,i__47196_47236);
var name_47238 = cljs.core.nth.call(null,vec__47197_47237,(0),null);
var map__47200_47239 = cljs.core.nth.call(null,vec__47197_47237,(1),null);
var map__47200_47240__$1 = ((((!((map__47200_47239 == null)))?((((map__47200_47239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47200_47239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47200_47239):map__47200_47239);
var doc_47241 = cljs.core.get.call(null,map__47200_47240__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47242 = cljs.core.get.call(null,map__47200_47240__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47238);

cljs.core.println.call(null," ",arglists_47242);

if(cljs.core.truth_(doc_47241)){
cljs.core.println.call(null," ",doc_47241);
} else {
}

var G__47243 = seq__47193_47233;
var G__47244 = chunk__47194_47234;
var G__47245 = count__47195_47235;
var G__47246 = (i__47196_47236 + (1));
seq__47193_47233 = G__47243;
chunk__47194_47234 = G__47244;
count__47195_47235 = G__47245;
i__47196_47236 = G__47246;
continue;
} else {
var temp__4657__auto___47247 = cljs.core.seq.call(null,seq__47193_47233);
if(temp__4657__auto___47247){
var seq__47193_47248__$1 = temp__4657__auto___47247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47193_47248__$1)){
var c__31672__auto___47249 = cljs.core.chunk_first.call(null,seq__47193_47248__$1);
var G__47250 = cljs.core.chunk_rest.call(null,seq__47193_47248__$1);
var G__47251 = c__31672__auto___47249;
var G__47252 = cljs.core.count.call(null,c__31672__auto___47249);
var G__47253 = (0);
seq__47193_47233 = G__47250;
chunk__47194_47234 = G__47251;
count__47195_47235 = G__47252;
i__47196_47236 = G__47253;
continue;
} else {
var vec__47202_47254 = cljs.core.first.call(null,seq__47193_47248__$1);
var name_47255 = cljs.core.nth.call(null,vec__47202_47254,(0),null);
var map__47205_47256 = cljs.core.nth.call(null,vec__47202_47254,(1),null);
var map__47205_47257__$1 = ((((!((map__47205_47256 == null)))?((((map__47205_47256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47205_47256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47205_47256):map__47205_47256);
var doc_47258 = cljs.core.get.call(null,map__47205_47257__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47259 = cljs.core.get.call(null,map__47205_47257__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47255);

cljs.core.println.call(null," ",arglists_47259);

if(cljs.core.truth_(doc_47258)){
cljs.core.println.call(null," ",doc_47258);
} else {
}

var G__47260 = cljs.core.next.call(null,seq__47193_47248__$1);
var G__47261 = null;
var G__47262 = (0);
var G__47263 = (0);
seq__47193_47233 = G__47260;
chunk__47194_47234 = G__47261;
count__47195_47235 = G__47262;
i__47196_47236 = G__47263;
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

var seq__47207 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47208 = null;
var count__47209 = (0);
var i__47210 = (0);
while(true){
if((i__47210 < count__47209)){
var role = cljs.core._nth.call(null,chunk__47208,i__47210);
var temp__4657__auto___47264__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47264__$1)){
var spec_47265 = temp__4657__auto___47264__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_47265));
} else {
}

var G__47266 = seq__47207;
var G__47267 = chunk__47208;
var G__47268 = count__47209;
var G__47269 = (i__47210 + (1));
seq__47207 = G__47266;
chunk__47208 = G__47267;
count__47209 = G__47268;
i__47210 = G__47269;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__47207);
if(temp__4657__auto____$1){
var seq__47207__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47207__$1)){
var c__31672__auto__ = cljs.core.chunk_first.call(null,seq__47207__$1);
var G__47270 = cljs.core.chunk_rest.call(null,seq__47207__$1);
var G__47271 = c__31672__auto__;
var G__47272 = cljs.core.count.call(null,c__31672__auto__);
var G__47273 = (0);
seq__47207 = G__47270;
chunk__47208 = G__47271;
count__47209 = G__47272;
i__47210 = G__47273;
continue;
} else {
var role = cljs.core.first.call(null,seq__47207__$1);
var temp__4657__auto___47274__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47274__$2)){
var spec_47275 = temp__4657__auto___47274__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_47275));
} else {
}

var G__47276 = cljs.core.next.call(null,seq__47207__$1);
var G__47277 = null;
var G__47278 = (0);
var G__47279 = (0);
seq__47207 = G__47276;
chunk__47208 = G__47277;
count__47209 = G__47278;
i__47210 = G__47279;
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

//# sourceMappingURL=repl.js.map?rel=1471840478024