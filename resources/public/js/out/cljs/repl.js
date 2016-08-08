// Compiled by ClojureScript 1.9.93 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39652){
var map__39677 = p__39652;
var map__39677__$1 = ((((!((map__39677 == null)))?((((map__39677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39677):map__39677);
var m = map__39677__$1;
var n = cljs.core.get.call(null,map__39677__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39677__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__39679_39701 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39680_39702 = null;
var count__39681_39703 = (0);
var i__39682_39704 = (0);
while(true){
if((i__39682_39704 < count__39681_39703)){
var f_39705 = cljs.core._nth.call(null,chunk__39680_39702,i__39682_39704);
cljs.core.println.call(null,"  ",f_39705);

var G__39706 = seq__39679_39701;
var G__39707 = chunk__39680_39702;
var G__39708 = count__39681_39703;
var G__39709 = (i__39682_39704 + (1));
seq__39679_39701 = G__39706;
chunk__39680_39702 = G__39707;
count__39681_39703 = G__39708;
i__39682_39704 = G__39709;
continue;
} else {
var temp__4657__auto___39710 = cljs.core.seq.call(null,seq__39679_39701);
if(temp__4657__auto___39710){
var seq__39679_39711__$1 = temp__4657__auto___39710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39679_39711__$1)){
var c__29090__auto___39712 = cljs.core.chunk_first.call(null,seq__39679_39711__$1);
var G__39713 = cljs.core.chunk_rest.call(null,seq__39679_39711__$1);
var G__39714 = c__29090__auto___39712;
var G__39715 = cljs.core.count.call(null,c__29090__auto___39712);
var G__39716 = (0);
seq__39679_39701 = G__39713;
chunk__39680_39702 = G__39714;
count__39681_39703 = G__39715;
i__39682_39704 = G__39716;
continue;
} else {
var f_39717 = cljs.core.first.call(null,seq__39679_39711__$1);
cljs.core.println.call(null,"  ",f_39717);

var G__39718 = cljs.core.next.call(null,seq__39679_39711__$1);
var G__39719 = null;
var G__39720 = (0);
var G__39721 = (0);
seq__39679_39701 = G__39718;
chunk__39680_39702 = G__39719;
count__39681_39703 = G__39720;
i__39682_39704 = G__39721;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39722 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28279__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39722);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39722)))?cljs.core.second.call(null,arglists_39722):arglists_39722));
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
var seq__39683_39723 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39684_39724 = null;
var count__39685_39725 = (0);
var i__39686_39726 = (0);
while(true){
if((i__39686_39726 < count__39685_39725)){
var vec__39687_39727 = cljs.core._nth.call(null,chunk__39684_39724,i__39686_39726);
var name_39728 = cljs.core.nth.call(null,vec__39687_39727,(0),null);
var map__39690_39729 = cljs.core.nth.call(null,vec__39687_39727,(1),null);
var map__39690_39730__$1 = ((((!((map__39690_39729 == null)))?((((map__39690_39729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39690_39729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39690_39729):map__39690_39729);
var doc_39731 = cljs.core.get.call(null,map__39690_39730__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39732 = cljs.core.get.call(null,map__39690_39730__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39728);

cljs.core.println.call(null," ",arglists_39732);

if(cljs.core.truth_(doc_39731)){
cljs.core.println.call(null," ",doc_39731);
} else {
}

var G__39733 = seq__39683_39723;
var G__39734 = chunk__39684_39724;
var G__39735 = count__39685_39725;
var G__39736 = (i__39686_39726 + (1));
seq__39683_39723 = G__39733;
chunk__39684_39724 = G__39734;
count__39685_39725 = G__39735;
i__39686_39726 = G__39736;
continue;
} else {
var temp__4657__auto___39737 = cljs.core.seq.call(null,seq__39683_39723);
if(temp__4657__auto___39737){
var seq__39683_39738__$1 = temp__4657__auto___39737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39683_39738__$1)){
var c__29090__auto___39739 = cljs.core.chunk_first.call(null,seq__39683_39738__$1);
var G__39740 = cljs.core.chunk_rest.call(null,seq__39683_39738__$1);
var G__39741 = c__29090__auto___39739;
var G__39742 = cljs.core.count.call(null,c__29090__auto___39739);
var G__39743 = (0);
seq__39683_39723 = G__39740;
chunk__39684_39724 = G__39741;
count__39685_39725 = G__39742;
i__39686_39726 = G__39743;
continue;
} else {
var vec__39692_39744 = cljs.core.first.call(null,seq__39683_39738__$1);
var name_39745 = cljs.core.nth.call(null,vec__39692_39744,(0),null);
var map__39695_39746 = cljs.core.nth.call(null,vec__39692_39744,(1),null);
var map__39695_39747__$1 = ((((!((map__39695_39746 == null)))?((((map__39695_39746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39695_39746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39695_39746):map__39695_39746);
var doc_39748 = cljs.core.get.call(null,map__39695_39747__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39749 = cljs.core.get.call(null,map__39695_39747__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39745);

cljs.core.println.call(null," ",arglists_39749);

if(cljs.core.truth_(doc_39748)){
cljs.core.println.call(null," ",doc_39748);
} else {
}

var G__39750 = cljs.core.next.call(null,seq__39683_39738__$1);
var G__39751 = null;
var G__39752 = (0);
var G__39753 = (0);
seq__39683_39723 = G__39750;
chunk__39684_39724 = G__39751;
count__39685_39725 = G__39752;
i__39686_39726 = G__39753;
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

var seq__39697 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39698 = null;
var count__39699 = (0);
var i__39700 = (0);
while(true){
if((i__39700 < count__39699)){
var role = cljs.core._nth.call(null,chunk__39698,i__39700);
var temp__4657__auto___39754__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39754__$1)){
var spec_39755 = temp__4657__auto___39754__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39755));
} else {
}

var G__39756 = seq__39697;
var G__39757 = chunk__39698;
var G__39758 = count__39699;
var G__39759 = (i__39700 + (1));
seq__39697 = G__39756;
chunk__39698 = G__39757;
count__39699 = G__39758;
i__39700 = G__39759;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__39697);
if(temp__4657__auto____$1){
var seq__39697__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39697__$1)){
var c__29090__auto__ = cljs.core.chunk_first.call(null,seq__39697__$1);
var G__39760 = cljs.core.chunk_rest.call(null,seq__39697__$1);
var G__39761 = c__29090__auto__;
var G__39762 = cljs.core.count.call(null,c__29090__auto__);
var G__39763 = (0);
seq__39697 = G__39760;
chunk__39698 = G__39761;
count__39699 = G__39762;
i__39700 = G__39763;
continue;
} else {
var role = cljs.core.first.call(null,seq__39697__$1);
var temp__4657__auto___39764__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39764__$2)){
var spec_39765 = temp__4657__auto___39764__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39765));
} else {
}

var G__39766 = cljs.core.next.call(null,seq__39697__$1);
var G__39767 = null;
var G__39768 = (0);
var G__39769 = (0);
seq__39697 = G__39766;
chunk__39698 = G__39767;
count__39699 = G__39768;
i__39700 = G__39769;
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

//# sourceMappingURL=repl.js.map?rel=1470645904939