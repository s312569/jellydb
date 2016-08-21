// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47111){
var map__47136 = p__47111;
var map__47136__$1 = ((((!((map__47136 == null)))?((((map__47136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47136):map__47136);
var m = map__47136__$1;
var n = cljs.core.get.call(null,map__47136__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47136__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__47138_47160 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47139_47161 = null;
var count__47140_47162 = (0);
var i__47141_47163 = (0);
while(true){
if((i__47141_47163 < count__47140_47162)){
var f_47164 = cljs.core._nth.call(null,chunk__47139_47161,i__47141_47163);
cljs.core.println.call(null,"  ",f_47164);

var G__47165 = seq__47138_47160;
var G__47166 = chunk__47139_47161;
var G__47167 = count__47140_47162;
var G__47168 = (i__47141_47163 + (1));
seq__47138_47160 = G__47165;
chunk__47139_47161 = G__47166;
count__47140_47162 = G__47167;
i__47141_47163 = G__47168;
continue;
} else {
var temp__4657__auto___47169 = cljs.core.seq.call(null,seq__47138_47160);
if(temp__4657__auto___47169){
var seq__47138_47170__$1 = temp__4657__auto___47169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47138_47170__$1)){
var c__31671__auto___47171 = cljs.core.chunk_first.call(null,seq__47138_47170__$1);
var G__47172 = cljs.core.chunk_rest.call(null,seq__47138_47170__$1);
var G__47173 = c__31671__auto___47171;
var G__47174 = cljs.core.count.call(null,c__31671__auto___47171);
var G__47175 = (0);
seq__47138_47160 = G__47172;
chunk__47139_47161 = G__47173;
count__47140_47162 = G__47174;
i__47141_47163 = G__47175;
continue;
} else {
var f_47176 = cljs.core.first.call(null,seq__47138_47170__$1);
cljs.core.println.call(null,"  ",f_47176);

var G__47177 = cljs.core.next.call(null,seq__47138_47170__$1);
var G__47178 = null;
var G__47179 = (0);
var G__47180 = (0);
seq__47138_47160 = G__47177;
chunk__47139_47161 = G__47178;
count__47140_47162 = G__47179;
i__47141_47163 = G__47180;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47181 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30860__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47181);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47181)))?cljs.core.second.call(null,arglists_47181):arglists_47181));
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
var seq__47142_47182 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47143_47183 = null;
var count__47144_47184 = (0);
var i__47145_47185 = (0);
while(true){
if((i__47145_47185 < count__47144_47184)){
var vec__47146_47186 = cljs.core._nth.call(null,chunk__47143_47183,i__47145_47185);
var name_47187 = cljs.core.nth.call(null,vec__47146_47186,(0),null);
var map__47149_47188 = cljs.core.nth.call(null,vec__47146_47186,(1),null);
var map__47149_47189__$1 = ((((!((map__47149_47188 == null)))?((((map__47149_47188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47149_47188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47149_47188):map__47149_47188);
var doc_47190 = cljs.core.get.call(null,map__47149_47189__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47191 = cljs.core.get.call(null,map__47149_47189__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47187);

cljs.core.println.call(null," ",arglists_47191);

if(cljs.core.truth_(doc_47190)){
cljs.core.println.call(null," ",doc_47190);
} else {
}

var G__47192 = seq__47142_47182;
var G__47193 = chunk__47143_47183;
var G__47194 = count__47144_47184;
var G__47195 = (i__47145_47185 + (1));
seq__47142_47182 = G__47192;
chunk__47143_47183 = G__47193;
count__47144_47184 = G__47194;
i__47145_47185 = G__47195;
continue;
} else {
var temp__4657__auto___47196 = cljs.core.seq.call(null,seq__47142_47182);
if(temp__4657__auto___47196){
var seq__47142_47197__$1 = temp__4657__auto___47196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47142_47197__$1)){
var c__31671__auto___47198 = cljs.core.chunk_first.call(null,seq__47142_47197__$1);
var G__47199 = cljs.core.chunk_rest.call(null,seq__47142_47197__$1);
var G__47200 = c__31671__auto___47198;
var G__47201 = cljs.core.count.call(null,c__31671__auto___47198);
var G__47202 = (0);
seq__47142_47182 = G__47199;
chunk__47143_47183 = G__47200;
count__47144_47184 = G__47201;
i__47145_47185 = G__47202;
continue;
} else {
var vec__47151_47203 = cljs.core.first.call(null,seq__47142_47197__$1);
var name_47204 = cljs.core.nth.call(null,vec__47151_47203,(0),null);
var map__47154_47205 = cljs.core.nth.call(null,vec__47151_47203,(1),null);
var map__47154_47206__$1 = ((((!((map__47154_47205 == null)))?((((map__47154_47205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47154_47205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47154_47205):map__47154_47205);
var doc_47207 = cljs.core.get.call(null,map__47154_47206__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47208 = cljs.core.get.call(null,map__47154_47206__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47204);

cljs.core.println.call(null," ",arglists_47208);

if(cljs.core.truth_(doc_47207)){
cljs.core.println.call(null," ",doc_47207);
} else {
}

var G__47209 = cljs.core.next.call(null,seq__47142_47197__$1);
var G__47210 = null;
var G__47211 = (0);
var G__47212 = (0);
seq__47142_47182 = G__47209;
chunk__47143_47183 = G__47210;
count__47144_47184 = G__47211;
i__47145_47185 = G__47212;
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

var seq__47156 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47157 = null;
var count__47158 = (0);
var i__47159 = (0);
while(true){
if((i__47159 < count__47158)){
var role = cljs.core._nth.call(null,chunk__47157,i__47159);
var temp__4657__auto___47213__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47213__$1)){
var spec_47214 = temp__4657__auto___47213__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_47214));
} else {
}

var G__47215 = seq__47156;
var G__47216 = chunk__47157;
var G__47217 = count__47158;
var G__47218 = (i__47159 + (1));
seq__47156 = G__47215;
chunk__47157 = G__47216;
count__47158 = G__47217;
i__47159 = G__47218;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__47156);
if(temp__4657__auto____$1){
var seq__47156__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47156__$1)){
var c__31671__auto__ = cljs.core.chunk_first.call(null,seq__47156__$1);
var G__47219 = cljs.core.chunk_rest.call(null,seq__47156__$1);
var G__47220 = c__31671__auto__;
var G__47221 = cljs.core.count.call(null,c__31671__auto__);
var G__47222 = (0);
seq__47156 = G__47219;
chunk__47157 = G__47220;
count__47158 = G__47221;
i__47159 = G__47222;
continue;
} else {
var role = cljs.core.first.call(null,seq__47156__$1);
var temp__4657__auto___47223__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47223__$2)){
var spec_47224 = temp__4657__auto___47223__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_47224));
} else {
}

var G__47225 = cljs.core.next.call(null,seq__47156__$1);
var G__47226 = null;
var G__47227 = (0);
var G__47228 = (0);
seq__47156 = G__47225;
chunk__47157 = G__47226;
count__47158 = G__47227;
i__47159 = G__47228;
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

//# sourceMappingURL=repl.js.map?rel=1471771451903