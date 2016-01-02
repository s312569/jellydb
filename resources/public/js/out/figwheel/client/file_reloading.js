// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__29513__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__29513__auto__){
return or__29513__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__29513__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39528_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39528_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__39533 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39534 = null;
var count__39535 = (0);
var i__39536 = (0);
while(true){
if((i__39536 < count__39535)){
var n = cljs.core._nth.call(null,chunk__39534,i__39536);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39537 = seq__39533;
var G__39538 = chunk__39534;
var G__39539 = count__39535;
var G__39540 = (i__39536 + (1));
seq__39533 = G__39537;
chunk__39534 = G__39538;
count__39535 = G__39539;
i__39536 = G__39540;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39533);
if(temp__4425__auto__){
var seq__39533__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39533__$1)){
var c__30316__auto__ = cljs.core.chunk_first.call(null,seq__39533__$1);
var G__39541 = cljs.core.chunk_rest.call(null,seq__39533__$1);
var G__39542 = c__30316__auto__;
var G__39543 = cljs.core.count.call(null,c__30316__auto__);
var G__39544 = (0);
seq__39533 = G__39541;
chunk__39534 = G__39542;
count__39535 = G__39543;
i__39536 = G__39544;
continue;
} else {
var n = cljs.core.first.call(null,seq__39533__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39545 = cljs.core.next.call(null,seq__39533__$1);
var G__39546 = null;
var G__39547 = (0);
var G__39548 = (0);
seq__39533 = G__39545;
chunk__39534 = G__39546;
count__39535 = G__39547;
i__39536 = G__39548;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__39587_39594 = cljs.core.seq.call(null,deps);
var chunk__39588_39595 = null;
var count__39589_39596 = (0);
var i__39590_39597 = (0);
while(true){
if((i__39590_39597 < count__39589_39596)){
var dep_39598 = cljs.core._nth.call(null,chunk__39588_39595,i__39590_39597);
topo_sort_helper_STAR_.call(null,dep_39598,(depth + (1)),state);

var G__39599 = seq__39587_39594;
var G__39600 = chunk__39588_39595;
var G__39601 = count__39589_39596;
var G__39602 = (i__39590_39597 + (1));
seq__39587_39594 = G__39599;
chunk__39588_39595 = G__39600;
count__39589_39596 = G__39601;
i__39590_39597 = G__39602;
continue;
} else {
var temp__4425__auto___39603 = cljs.core.seq.call(null,seq__39587_39594);
if(temp__4425__auto___39603){
var seq__39587_39604__$1 = temp__4425__auto___39603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39587_39604__$1)){
var c__30316__auto___39605 = cljs.core.chunk_first.call(null,seq__39587_39604__$1);
var G__39606 = cljs.core.chunk_rest.call(null,seq__39587_39604__$1);
var G__39607 = c__30316__auto___39605;
var G__39608 = cljs.core.count.call(null,c__30316__auto___39605);
var G__39609 = (0);
seq__39587_39594 = G__39606;
chunk__39588_39595 = G__39607;
count__39589_39596 = G__39608;
i__39590_39597 = G__39609;
continue;
} else {
var dep_39610 = cljs.core.first.call(null,seq__39587_39604__$1);
topo_sort_helper_STAR_.call(null,dep_39610,(depth + (1)),state);

var G__39611 = cljs.core.next.call(null,seq__39587_39604__$1);
var G__39612 = null;
var G__39613 = (0);
var G__39614 = (0);
seq__39587_39594 = G__39611;
chunk__39588_39595 = G__39612;
count__39589_39596 = G__39613;
i__39590_39597 = G__39614;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39591){
var vec__39593 = p__39591;
var x = cljs.core.nth.call(null,vec__39593,(0),null);
var xs = cljs.core.nthnext.call(null,vec__39593,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39593,x,xs,get_deps__$1){
return (function (p1__39549_SHARP_){
return clojure.set.difference.call(null,p1__39549_SHARP_,x);
});})(vec__39593,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39627 = cljs.core.seq.call(null,provides);
var chunk__39628 = null;
var count__39629 = (0);
var i__39630 = (0);
while(true){
if((i__39630 < count__39629)){
var prov = cljs.core._nth.call(null,chunk__39628,i__39630);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39631_39639 = cljs.core.seq.call(null,requires);
var chunk__39632_39640 = null;
var count__39633_39641 = (0);
var i__39634_39642 = (0);
while(true){
if((i__39634_39642 < count__39633_39641)){
var req_39643 = cljs.core._nth.call(null,chunk__39632_39640,i__39634_39642);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39643,prov);

var G__39644 = seq__39631_39639;
var G__39645 = chunk__39632_39640;
var G__39646 = count__39633_39641;
var G__39647 = (i__39634_39642 + (1));
seq__39631_39639 = G__39644;
chunk__39632_39640 = G__39645;
count__39633_39641 = G__39646;
i__39634_39642 = G__39647;
continue;
} else {
var temp__4425__auto___39648 = cljs.core.seq.call(null,seq__39631_39639);
if(temp__4425__auto___39648){
var seq__39631_39649__$1 = temp__4425__auto___39648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39631_39649__$1)){
var c__30316__auto___39650 = cljs.core.chunk_first.call(null,seq__39631_39649__$1);
var G__39651 = cljs.core.chunk_rest.call(null,seq__39631_39649__$1);
var G__39652 = c__30316__auto___39650;
var G__39653 = cljs.core.count.call(null,c__30316__auto___39650);
var G__39654 = (0);
seq__39631_39639 = G__39651;
chunk__39632_39640 = G__39652;
count__39633_39641 = G__39653;
i__39634_39642 = G__39654;
continue;
} else {
var req_39655 = cljs.core.first.call(null,seq__39631_39649__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39655,prov);

var G__39656 = cljs.core.next.call(null,seq__39631_39649__$1);
var G__39657 = null;
var G__39658 = (0);
var G__39659 = (0);
seq__39631_39639 = G__39656;
chunk__39632_39640 = G__39657;
count__39633_39641 = G__39658;
i__39634_39642 = G__39659;
continue;
}
} else {
}
}
break;
}

var G__39660 = seq__39627;
var G__39661 = chunk__39628;
var G__39662 = count__39629;
var G__39663 = (i__39630 + (1));
seq__39627 = G__39660;
chunk__39628 = G__39661;
count__39629 = G__39662;
i__39630 = G__39663;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39627);
if(temp__4425__auto__){
var seq__39627__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39627__$1)){
var c__30316__auto__ = cljs.core.chunk_first.call(null,seq__39627__$1);
var G__39664 = cljs.core.chunk_rest.call(null,seq__39627__$1);
var G__39665 = c__30316__auto__;
var G__39666 = cljs.core.count.call(null,c__30316__auto__);
var G__39667 = (0);
seq__39627 = G__39664;
chunk__39628 = G__39665;
count__39629 = G__39666;
i__39630 = G__39667;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39627__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39635_39668 = cljs.core.seq.call(null,requires);
var chunk__39636_39669 = null;
var count__39637_39670 = (0);
var i__39638_39671 = (0);
while(true){
if((i__39638_39671 < count__39637_39670)){
var req_39672 = cljs.core._nth.call(null,chunk__39636_39669,i__39638_39671);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39672,prov);

var G__39673 = seq__39635_39668;
var G__39674 = chunk__39636_39669;
var G__39675 = count__39637_39670;
var G__39676 = (i__39638_39671 + (1));
seq__39635_39668 = G__39673;
chunk__39636_39669 = G__39674;
count__39637_39670 = G__39675;
i__39638_39671 = G__39676;
continue;
} else {
var temp__4425__auto___39677__$1 = cljs.core.seq.call(null,seq__39635_39668);
if(temp__4425__auto___39677__$1){
var seq__39635_39678__$1 = temp__4425__auto___39677__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39635_39678__$1)){
var c__30316__auto___39679 = cljs.core.chunk_first.call(null,seq__39635_39678__$1);
var G__39680 = cljs.core.chunk_rest.call(null,seq__39635_39678__$1);
var G__39681 = c__30316__auto___39679;
var G__39682 = cljs.core.count.call(null,c__30316__auto___39679);
var G__39683 = (0);
seq__39635_39668 = G__39680;
chunk__39636_39669 = G__39681;
count__39637_39670 = G__39682;
i__39638_39671 = G__39683;
continue;
} else {
var req_39684 = cljs.core.first.call(null,seq__39635_39678__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39684,prov);

var G__39685 = cljs.core.next.call(null,seq__39635_39678__$1);
var G__39686 = null;
var G__39687 = (0);
var G__39688 = (0);
seq__39635_39668 = G__39685;
chunk__39636_39669 = G__39686;
count__39637_39670 = G__39687;
i__39638_39671 = G__39688;
continue;
}
} else {
}
}
break;
}

var G__39689 = cljs.core.next.call(null,seq__39627__$1);
var G__39690 = null;
var G__39691 = (0);
var G__39692 = (0);
seq__39627 = G__39689;
chunk__39628 = G__39690;
count__39629 = G__39691;
i__39630 = G__39692;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39697_39701 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39698_39702 = null;
var count__39699_39703 = (0);
var i__39700_39704 = (0);
while(true){
if((i__39700_39704 < count__39699_39703)){
var ns_39705 = cljs.core._nth.call(null,chunk__39698_39702,i__39700_39704);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39705);

var G__39706 = seq__39697_39701;
var G__39707 = chunk__39698_39702;
var G__39708 = count__39699_39703;
var G__39709 = (i__39700_39704 + (1));
seq__39697_39701 = G__39706;
chunk__39698_39702 = G__39707;
count__39699_39703 = G__39708;
i__39700_39704 = G__39709;
continue;
} else {
var temp__4425__auto___39710 = cljs.core.seq.call(null,seq__39697_39701);
if(temp__4425__auto___39710){
var seq__39697_39711__$1 = temp__4425__auto___39710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39697_39711__$1)){
var c__30316__auto___39712 = cljs.core.chunk_first.call(null,seq__39697_39711__$1);
var G__39713 = cljs.core.chunk_rest.call(null,seq__39697_39711__$1);
var G__39714 = c__30316__auto___39712;
var G__39715 = cljs.core.count.call(null,c__30316__auto___39712);
var G__39716 = (0);
seq__39697_39701 = G__39713;
chunk__39698_39702 = G__39714;
count__39699_39703 = G__39715;
i__39700_39704 = G__39716;
continue;
} else {
var ns_39717 = cljs.core.first.call(null,seq__39697_39711__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39717);

var G__39718 = cljs.core.next.call(null,seq__39697_39711__$1);
var G__39719 = null;
var G__39720 = (0);
var G__39721 = (0);
seq__39697_39701 = G__39718;
chunk__39698_39702 = G__39719;
count__39699_39703 = G__39720;
i__39700_39704 = G__39721;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__29513__auto__ = goog.require__;
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39722__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39723__i = 0, G__39723__a = new Array(arguments.length -  0);
while (G__39723__i < G__39723__a.length) {G__39723__a[G__39723__i] = arguments[G__39723__i + 0]; ++G__39723__i;}
  args = new cljs.core.IndexedSeq(G__39723__a,0);
} 
return G__39722__delegate.call(this,args);};
G__39722.cljs$lang$maxFixedArity = 0;
G__39722.cljs$lang$applyTo = (function (arglist__39724){
var args = cljs.core.seq(arglist__39724);
return G__39722__delegate(args);
});
G__39722.cljs$core$IFn$_invoke$arity$variadic = G__39722__delegate;
return G__39722;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39726 = cljs.core._EQ_;
var expr__39727 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39726.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39727))){
var path_parts = ((function (pred__39726,expr__39727){
return (function (p1__39725_SHARP_){
return clojure.string.split.call(null,p1__39725_SHARP_,/[\/\\]/);
});})(pred__39726,expr__39727))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__39726,expr__39727){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39729){if((e39729 instanceof Error)){
var e = e39729;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39729;

}
}})());
});
;})(path_parts,sep,root,pred__39726,expr__39727))
} else {
if(cljs.core.truth_(pred__39726.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39727))){
return ((function (pred__39726,expr__39727){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__39726,expr__39727){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39726,expr__39727))
);

return deferred.addErrback(((function (deferred,pred__39726,expr__39727){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39726,expr__39727))
);
});
;})(pred__39726,expr__39727))
} else {
return ((function (pred__39726,expr__39727){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39726,expr__39727))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39730,callback){
var map__39733 = p__39730;
var map__39733__$1 = ((((!((map__39733 == null)))?((((map__39733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39733):map__39733);
var file_msg = map__39733__$1;
var request_url = cljs.core.get.call(null,map__39733__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39733,map__39733__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39733,map__39733__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto__){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto__){
return (function (state_39757){
var state_val_39758 = (state_39757[(1)]);
if((state_val_39758 === (7))){
var inst_39753 = (state_39757[(2)]);
var state_39757__$1 = state_39757;
var statearr_39759_39779 = state_39757__$1;
(statearr_39759_39779[(2)] = inst_39753);

(statearr_39759_39779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39758 === (1))){
var state_39757__$1 = state_39757;
var statearr_39760_39780 = state_39757__$1;
(statearr_39760_39780[(2)] = null);

(statearr_39760_39780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39758 === (4))){
var inst_39737 = (state_39757[(7)]);
var inst_39737__$1 = (state_39757[(2)]);
var state_39757__$1 = (function (){var statearr_39761 = state_39757;
(statearr_39761[(7)] = inst_39737__$1);

return statearr_39761;
})();
if(cljs.core.truth_(inst_39737__$1)){
var statearr_39762_39781 = state_39757__$1;
(statearr_39762_39781[(1)] = (5));

} else {
var statearr_39763_39782 = state_39757__$1;
(statearr_39763_39782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39758 === (6))){
var state_39757__$1 = state_39757;
var statearr_39764_39783 = state_39757__$1;
(statearr_39764_39783[(2)] = null);

(statearr_39764_39783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39758 === (3))){
var inst_39755 = (state_39757[(2)]);
var state_39757__$1 = state_39757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39757__$1,inst_39755);
} else {
if((state_val_39758 === (2))){
var state_39757__$1 = state_39757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39757__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39758 === (11))){
var inst_39749 = (state_39757[(2)]);
var state_39757__$1 = (function (){var statearr_39765 = state_39757;
(statearr_39765[(8)] = inst_39749);

return statearr_39765;
})();
var statearr_39766_39784 = state_39757__$1;
(statearr_39766_39784[(2)] = null);

(statearr_39766_39784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39758 === (9))){
var inst_39741 = (state_39757[(9)]);
var inst_39743 = (state_39757[(10)]);
var inst_39745 = inst_39743.call(null,inst_39741);
var state_39757__$1 = state_39757;
var statearr_39767_39785 = state_39757__$1;
(statearr_39767_39785[(2)] = inst_39745);

(statearr_39767_39785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39758 === (5))){
var inst_39737 = (state_39757[(7)]);
var inst_39739 = figwheel.client.file_reloading.blocking_load.call(null,inst_39737);
var state_39757__$1 = state_39757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39757__$1,(8),inst_39739);
} else {
if((state_val_39758 === (10))){
var inst_39741 = (state_39757[(9)]);
var inst_39747 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39741);
var state_39757__$1 = state_39757;
var statearr_39768_39786 = state_39757__$1;
(statearr_39768_39786[(2)] = inst_39747);

(statearr_39768_39786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39758 === (8))){
var inst_39743 = (state_39757[(10)]);
var inst_39737 = (state_39757[(7)]);
var inst_39741 = (state_39757[(2)]);
var inst_39742 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39743__$1 = cljs.core.get.call(null,inst_39742,inst_39737);
var state_39757__$1 = (function (){var statearr_39769 = state_39757;
(statearr_39769[(9)] = inst_39741);

(statearr_39769[(10)] = inst_39743__$1);

return statearr_39769;
})();
if(cljs.core.truth_(inst_39743__$1)){
var statearr_39770_39787 = state_39757__$1;
(statearr_39770_39787[(1)] = (9));

} else {
var statearr_39771_39788 = state_39757__$1;
(statearr_39771_39788[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32314__auto__))
;
return ((function (switch__32293__auto__,c__32314__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32294__auto__ = null;
var figwheel$client$file_reloading$state_machine__32294__auto____0 = (function (){
var statearr_39775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39775[(0)] = figwheel$client$file_reloading$state_machine__32294__auto__);

(statearr_39775[(1)] = (1));

return statearr_39775;
});
var figwheel$client$file_reloading$state_machine__32294__auto____1 = (function (state_39757){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_39757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e39776){if((e39776 instanceof Object)){
var ex__32297__auto__ = e39776;
var statearr_39777_39789 = state_39757;
(statearr_39777_39789[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39790 = state_39757;
state_39757 = G__39790;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32294__auto__ = function(state_39757){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32294__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32294__auto____1.call(this,state_39757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32294__auto____0;
figwheel$client$file_reloading$state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32294__auto____1;
return figwheel$client$file_reloading$state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto__))
})();
var state__32316__auto__ = (function (){var statearr_39778 = f__32315__auto__.call(null);
(statearr_39778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto__);

return statearr_39778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto__))
);

return c__32314__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39791,callback){
var map__39794 = p__39791;
var map__39794__$1 = ((((!((map__39794 == null)))?((((map__39794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39794):map__39794);
var file_msg = map__39794__$1;
var namespace = cljs.core.get.call(null,map__39794__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39794,map__39794__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39794,map__39794__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39796){
var map__39799 = p__39796;
var map__39799__$1 = ((((!((map__39799 == null)))?((((map__39799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39799):map__39799);
var file_msg = map__39799__$1;
var namespace = cljs.core.get.call(null,map__39799__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__29501__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__29501__auto__){
var or__29513__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29513__auto__)){
return or__29513__auto__;
} else {
var or__29513__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29513__auto____$1)){
return or__29513__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__29501__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39801,callback){
var map__39804 = p__39801;
var map__39804__$1 = ((((!((map__39804 == null)))?((((map__39804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39804):map__39804);
var file_msg = map__39804__$1;
var request_url = cljs.core.get.call(null,map__39804__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39804__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32314__auto___39892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto___39892,out){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto___39892,out){
return (function (state_39874){
var state_val_39875 = (state_39874[(1)]);
if((state_val_39875 === (1))){
var inst_39852 = cljs.core.nth.call(null,files,(0),null);
var inst_39853 = cljs.core.nthnext.call(null,files,(1));
var inst_39854 = files;
var state_39874__$1 = (function (){var statearr_39876 = state_39874;
(statearr_39876[(7)] = inst_39853);

(statearr_39876[(8)] = inst_39854);

(statearr_39876[(9)] = inst_39852);

return statearr_39876;
})();
var statearr_39877_39893 = state_39874__$1;
(statearr_39877_39893[(2)] = null);

(statearr_39877_39893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (2))){
var inst_39857 = (state_39874[(10)]);
var inst_39854 = (state_39874[(8)]);
var inst_39857__$1 = cljs.core.nth.call(null,inst_39854,(0),null);
var inst_39858 = cljs.core.nthnext.call(null,inst_39854,(1));
var inst_39859 = (inst_39857__$1 == null);
var inst_39860 = cljs.core.not.call(null,inst_39859);
var state_39874__$1 = (function (){var statearr_39878 = state_39874;
(statearr_39878[(11)] = inst_39858);

(statearr_39878[(10)] = inst_39857__$1);

return statearr_39878;
})();
if(inst_39860){
var statearr_39879_39894 = state_39874__$1;
(statearr_39879_39894[(1)] = (4));

} else {
var statearr_39880_39895 = state_39874__$1;
(statearr_39880_39895[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (3))){
var inst_39872 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39874__$1,inst_39872);
} else {
if((state_val_39875 === (4))){
var inst_39857 = (state_39874[(10)]);
var inst_39862 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39857);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39874__$1,(7),inst_39862);
} else {
if((state_val_39875 === (5))){
var inst_39868 = cljs.core.async.close_BANG_.call(null,out);
var state_39874__$1 = state_39874;
var statearr_39881_39896 = state_39874__$1;
(statearr_39881_39896[(2)] = inst_39868);

(statearr_39881_39896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (6))){
var inst_39870 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39882_39897 = state_39874__$1;
(statearr_39882_39897[(2)] = inst_39870);

(statearr_39882_39897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (7))){
var inst_39858 = (state_39874[(11)]);
var inst_39864 = (state_39874[(2)]);
var inst_39865 = cljs.core.async.put_BANG_.call(null,out,inst_39864);
var inst_39854 = inst_39858;
var state_39874__$1 = (function (){var statearr_39883 = state_39874;
(statearr_39883[(12)] = inst_39865);

(statearr_39883[(8)] = inst_39854);

return statearr_39883;
})();
var statearr_39884_39898 = state_39874__$1;
(statearr_39884_39898[(2)] = null);

(statearr_39884_39898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__32314__auto___39892,out))
;
return ((function (switch__32293__auto__,c__32314__auto___39892,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32294__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32294__auto____0 = (function (){
var statearr_39888 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39888[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32294__auto__);

(statearr_39888[(1)] = (1));

return statearr_39888;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32294__auto____1 = (function (state_39874){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_39874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e39889){if((e39889 instanceof Object)){
var ex__32297__auto__ = e39889;
var statearr_39890_39899 = state_39874;
(statearr_39890_39899[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39900 = state_39874;
state_39874 = G__39900;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32294__auto__ = function(state_39874){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32294__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32294__auto____1.call(this,state_39874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32294__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32294__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto___39892,out))
})();
var state__32316__auto__ = (function (){var statearr_39891 = f__32315__auto__.call(null);
(statearr_39891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto___39892);

return statearr_39891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto___39892,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39901,opts){
var map__39905 = p__39901;
var map__39905__$1 = ((((!((map__39905 == null)))?((((map__39905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39905):map__39905);
var eval_body__$1 = cljs.core.get.call(null,map__39905__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39905__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__29501__auto__ = eval_body__$1;
if(cljs.core.truth_(and__29501__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__29501__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39907){var e = e39907;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39908_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39908_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__39913){
var vec__39914 = p__39913;
var k = cljs.core.nth.call(null,vec__39914,(0),null);
var v = cljs.core.nth.call(null,vec__39914,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39915){
var vec__39916 = p__39915;
var k = cljs.core.nth.call(null,vec__39916,(0),null);
var v = cljs.core.nth.call(null,vec__39916,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39920,p__39921){
var map__40168 = p__39920;
var map__40168__$1 = ((((!((map__40168 == null)))?((((map__40168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40168):map__40168);
var opts = map__40168__$1;
var before_jsload = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40169 = p__39921;
var map__40169__$1 = ((((!((map__40169 == null)))?((((map__40169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40169):map__40169);
var msg = map__40169__$1;
var files = cljs.core.get.call(null,map__40169__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40169__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40169__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32315__auto__ = (function (){var switch__32293__auto__ = ((function (c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40322){
var state_val_40323 = (state_40322[(1)]);
if((state_val_40323 === (7))){
var inst_40185 = (state_40322[(7)]);
var inst_40183 = (state_40322[(8)]);
var inst_40184 = (state_40322[(9)]);
var inst_40186 = (state_40322[(10)]);
var inst_40191 = cljs.core._nth.call(null,inst_40184,inst_40186);
var inst_40192 = figwheel.client.file_reloading.eval_body.call(null,inst_40191,opts);
var inst_40193 = (inst_40186 + (1));
var tmp40324 = inst_40185;
var tmp40325 = inst_40183;
var tmp40326 = inst_40184;
var inst_40183__$1 = tmp40325;
var inst_40184__$1 = tmp40326;
var inst_40185__$1 = tmp40324;
var inst_40186__$1 = inst_40193;
var state_40322__$1 = (function (){var statearr_40327 = state_40322;
(statearr_40327[(7)] = inst_40185__$1);

(statearr_40327[(11)] = inst_40192);

(statearr_40327[(8)] = inst_40183__$1);

(statearr_40327[(9)] = inst_40184__$1);

(statearr_40327[(10)] = inst_40186__$1);

return statearr_40327;
})();
var statearr_40328_40414 = state_40322__$1;
(statearr_40328_40414[(2)] = null);

(statearr_40328_40414[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (20))){
var inst_40226 = (state_40322[(12)]);
var inst_40234 = figwheel.client.file_reloading.sort_files.call(null,inst_40226);
var state_40322__$1 = state_40322;
var statearr_40329_40415 = state_40322__$1;
(statearr_40329_40415[(2)] = inst_40234);

(statearr_40329_40415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (27))){
var state_40322__$1 = state_40322;
var statearr_40330_40416 = state_40322__$1;
(statearr_40330_40416[(2)] = null);

(statearr_40330_40416[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (1))){
var inst_40175 = (state_40322[(13)]);
var inst_40172 = before_jsload.call(null,files);
var inst_40173 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40174 = (function (){return ((function (inst_40175,inst_40172,inst_40173,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39917_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39917_SHARP_);
});
;})(inst_40175,inst_40172,inst_40173,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40175__$1 = cljs.core.filter.call(null,inst_40174,files);
var inst_40176 = cljs.core.not_empty.call(null,inst_40175__$1);
var state_40322__$1 = (function (){var statearr_40331 = state_40322;
(statearr_40331[(14)] = inst_40173);

(statearr_40331[(13)] = inst_40175__$1);

(statearr_40331[(15)] = inst_40172);

return statearr_40331;
})();
if(cljs.core.truth_(inst_40176)){
var statearr_40332_40417 = state_40322__$1;
(statearr_40332_40417[(1)] = (2));

} else {
var statearr_40333_40418 = state_40322__$1;
(statearr_40333_40418[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (24))){
var state_40322__$1 = state_40322;
var statearr_40334_40419 = state_40322__$1;
(statearr_40334_40419[(2)] = null);

(statearr_40334_40419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (39))){
var inst_40276 = (state_40322[(16)]);
var state_40322__$1 = state_40322;
var statearr_40335_40420 = state_40322__$1;
(statearr_40335_40420[(2)] = inst_40276);

(statearr_40335_40420[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (46))){
var inst_40317 = (state_40322[(2)]);
var state_40322__$1 = state_40322;
var statearr_40336_40421 = state_40322__$1;
(statearr_40336_40421[(2)] = inst_40317);

(statearr_40336_40421[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (4))){
var inst_40220 = (state_40322[(2)]);
var inst_40221 = cljs.core.List.EMPTY;
var inst_40222 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40221);
var inst_40223 = (function (){return ((function (inst_40220,inst_40221,inst_40222,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39918_SHARP_){
var and__29501__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39918_SHARP_);
if(cljs.core.truth_(and__29501__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39918_SHARP_));
} else {
return and__29501__auto__;
}
});
;})(inst_40220,inst_40221,inst_40222,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40224 = cljs.core.filter.call(null,inst_40223,files);
var inst_40225 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40226 = cljs.core.concat.call(null,inst_40224,inst_40225);
var state_40322__$1 = (function (){var statearr_40337 = state_40322;
(statearr_40337[(17)] = inst_40220);

(statearr_40337[(18)] = inst_40222);

(statearr_40337[(12)] = inst_40226);

return statearr_40337;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40338_40422 = state_40322__$1;
(statearr_40338_40422[(1)] = (16));

} else {
var statearr_40339_40423 = state_40322__$1;
(statearr_40339_40423[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (15))){
var inst_40210 = (state_40322[(2)]);
var state_40322__$1 = state_40322;
var statearr_40340_40424 = state_40322__$1;
(statearr_40340_40424[(2)] = inst_40210);

(statearr_40340_40424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (21))){
var inst_40236 = (state_40322[(19)]);
var inst_40236__$1 = (state_40322[(2)]);
var inst_40237 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40236__$1);
var state_40322__$1 = (function (){var statearr_40341 = state_40322;
(statearr_40341[(19)] = inst_40236__$1);

return statearr_40341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40322__$1,(22),inst_40237);
} else {
if((state_val_40323 === (31))){
var inst_40320 = (state_40322[(2)]);
var state_40322__$1 = state_40322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40322__$1,inst_40320);
} else {
if((state_val_40323 === (32))){
var inst_40276 = (state_40322[(16)]);
var inst_40281 = inst_40276.cljs$lang$protocol_mask$partition0$;
var inst_40282 = (inst_40281 & (64));
var inst_40283 = inst_40276.cljs$core$ISeq$;
var inst_40284 = (inst_40282) || (inst_40283);
var state_40322__$1 = state_40322;
if(cljs.core.truth_(inst_40284)){
var statearr_40342_40425 = state_40322__$1;
(statearr_40342_40425[(1)] = (35));

} else {
var statearr_40343_40426 = state_40322__$1;
(statearr_40343_40426[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (40))){
var inst_40297 = (state_40322[(20)]);
var inst_40296 = (state_40322[(2)]);
var inst_40297__$1 = cljs.core.get.call(null,inst_40296,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40298 = cljs.core.get.call(null,inst_40296,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40299 = cljs.core.not_empty.call(null,inst_40297__$1);
var state_40322__$1 = (function (){var statearr_40344 = state_40322;
(statearr_40344[(20)] = inst_40297__$1);

(statearr_40344[(21)] = inst_40298);

return statearr_40344;
})();
if(cljs.core.truth_(inst_40299)){
var statearr_40345_40427 = state_40322__$1;
(statearr_40345_40427[(1)] = (41));

} else {
var statearr_40346_40428 = state_40322__$1;
(statearr_40346_40428[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (33))){
var state_40322__$1 = state_40322;
var statearr_40347_40429 = state_40322__$1;
(statearr_40347_40429[(2)] = false);

(statearr_40347_40429[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (13))){
var inst_40196 = (state_40322[(22)]);
var inst_40200 = cljs.core.chunk_first.call(null,inst_40196);
var inst_40201 = cljs.core.chunk_rest.call(null,inst_40196);
var inst_40202 = cljs.core.count.call(null,inst_40200);
var inst_40183 = inst_40201;
var inst_40184 = inst_40200;
var inst_40185 = inst_40202;
var inst_40186 = (0);
var state_40322__$1 = (function (){var statearr_40348 = state_40322;
(statearr_40348[(7)] = inst_40185);

(statearr_40348[(8)] = inst_40183);

(statearr_40348[(9)] = inst_40184);

(statearr_40348[(10)] = inst_40186);

return statearr_40348;
})();
var statearr_40349_40430 = state_40322__$1;
(statearr_40349_40430[(2)] = null);

(statearr_40349_40430[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (22))){
var inst_40236 = (state_40322[(19)]);
var inst_40244 = (state_40322[(23)]);
var inst_40239 = (state_40322[(24)]);
var inst_40240 = (state_40322[(25)]);
var inst_40239__$1 = (state_40322[(2)]);
var inst_40240__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40239__$1);
var inst_40241 = (function (){var all_files = inst_40236;
var res_SINGLEQUOTE_ = inst_40239__$1;
var res = inst_40240__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40236,inst_40244,inst_40239,inst_40240,inst_40239__$1,inst_40240__$1,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39919_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39919_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40236,inst_40244,inst_40239,inst_40240,inst_40239__$1,inst_40240__$1,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40242 = cljs.core.filter.call(null,inst_40241,inst_40239__$1);
var inst_40243 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40244__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40243);
var inst_40245 = cljs.core.not_empty.call(null,inst_40244__$1);
var state_40322__$1 = (function (){var statearr_40350 = state_40322;
(statearr_40350[(23)] = inst_40244__$1);

(statearr_40350[(24)] = inst_40239__$1);

(statearr_40350[(25)] = inst_40240__$1);

(statearr_40350[(26)] = inst_40242);

return statearr_40350;
})();
if(cljs.core.truth_(inst_40245)){
var statearr_40351_40431 = state_40322__$1;
(statearr_40351_40431[(1)] = (23));

} else {
var statearr_40352_40432 = state_40322__$1;
(statearr_40352_40432[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (36))){
var state_40322__$1 = state_40322;
var statearr_40353_40433 = state_40322__$1;
(statearr_40353_40433[(2)] = false);

(statearr_40353_40433[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (41))){
var inst_40297 = (state_40322[(20)]);
var inst_40301 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40302 = cljs.core.map.call(null,inst_40301,inst_40297);
var inst_40303 = cljs.core.pr_str.call(null,inst_40302);
var inst_40304 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40303)].join('');
var inst_40305 = figwheel.client.utils.log.call(null,inst_40304);
var state_40322__$1 = state_40322;
var statearr_40354_40434 = state_40322__$1;
(statearr_40354_40434[(2)] = inst_40305);

(statearr_40354_40434[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (43))){
var inst_40298 = (state_40322[(21)]);
var inst_40308 = (state_40322[(2)]);
var inst_40309 = cljs.core.not_empty.call(null,inst_40298);
var state_40322__$1 = (function (){var statearr_40355 = state_40322;
(statearr_40355[(27)] = inst_40308);

return statearr_40355;
})();
if(cljs.core.truth_(inst_40309)){
var statearr_40356_40435 = state_40322__$1;
(statearr_40356_40435[(1)] = (44));

} else {
var statearr_40357_40436 = state_40322__$1;
(statearr_40357_40436[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (29))){
var inst_40236 = (state_40322[(19)]);
var inst_40244 = (state_40322[(23)]);
var inst_40239 = (state_40322[(24)]);
var inst_40240 = (state_40322[(25)]);
var inst_40242 = (state_40322[(26)]);
var inst_40276 = (state_40322[(16)]);
var inst_40272 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40275 = (function (){var all_files = inst_40236;
var res_SINGLEQUOTE_ = inst_40239;
var res = inst_40240;
var files_not_loaded = inst_40242;
var dependencies_that_loaded = inst_40244;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40236,inst_40244,inst_40239,inst_40240,inst_40242,inst_40276,inst_40272,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40274){
var map__40358 = p__40274;
var map__40358__$1 = ((((!((map__40358 == null)))?((((map__40358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40358):map__40358);
var namespace = cljs.core.get.call(null,map__40358__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40236,inst_40244,inst_40239,inst_40240,inst_40242,inst_40276,inst_40272,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40276__$1 = cljs.core.group_by.call(null,inst_40275,inst_40242);
var inst_40278 = (inst_40276__$1 == null);
var inst_40279 = cljs.core.not.call(null,inst_40278);
var state_40322__$1 = (function (){var statearr_40360 = state_40322;
(statearr_40360[(28)] = inst_40272);

(statearr_40360[(16)] = inst_40276__$1);

return statearr_40360;
})();
if(inst_40279){
var statearr_40361_40437 = state_40322__$1;
(statearr_40361_40437[(1)] = (32));

} else {
var statearr_40362_40438 = state_40322__$1;
(statearr_40362_40438[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (44))){
var inst_40298 = (state_40322[(21)]);
var inst_40311 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40298);
var inst_40312 = cljs.core.pr_str.call(null,inst_40311);
var inst_40313 = [cljs.core.str("not required: "),cljs.core.str(inst_40312)].join('');
var inst_40314 = figwheel.client.utils.log.call(null,inst_40313);
var state_40322__$1 = state_40322;
var statearr_40363_40439 = state_40322__$1;
(statearr_40363_40439[(2)] = inst_40314);

(statearr_40363_40439[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (6))){
var inst_40217 = (state_40322[(2)]);
var state_40322__$1 = state_40322;
var statearr_40364_40440 = state_40322__$1;
(statearr_40364_40440[(2)] = inst_40217);

(statearr_40364_40440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (28))){
var inst_40242 = (state_40322[(26)]);
var inst_40269 = (state_40322[(2)]);
var inst_40270 = cljs.core.not_empty.call(null,inst_40242);
var state_40322__$1 = (function (){var statearr_40365 = state_40322;
(statearr_40365[(29)] = inst_40269);

return statearr_40365;
})();
if(cljs.core.truth_(inst_40270)){
var statearr_40366_40441 = state_40322__$1;
(statearr_40366_40441[(1)] = (29));

} else {
var statearr_40367_40442 = state_40322__$1;
(statearr_40367_40442[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (25))){
var inst_40240 = (state_40322[(25)]);
var inst_40256 = (state_40322[(2)]);
var inst_40257 = cljs.core.not_empty.call(null,inst_40240);
var state_40322__$1 = (function (){var statearr_40368 = state_40322;
(statearr_40368[(30)] = inst_40256);

return statearr_40368;
})();
if(cljs.core.truth_(inst_40257)){
var statearr_40369_40443 = state_40322__$1;
(statearr_40369_40443[(1)] = (26));

} else {
var statearr_40370_40444 = state_40322__$1;
(statearr_40370_40444[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (34))){
var inst_40291 = (state_40322[(2)]);
var state_40322__$1 = state_40322;
if(cljs.core.truth_(inst_40291)){
var statearr_40371_40445 = state_40322__$1;
(statearr_40371_40445[(1)] = (38));

} else {
var statearr_40372_40446 = state_40322__$1;
(statearr_40372_40446[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (17))){
var state_40322__$1 = state_40322;
var statearr_40373_40447 = state_40322__$1;
(statearr_40373_40447[(2)] = recompile_dependents);

(statearr_40373_40447[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (3))){
var state_40322__$1 = state_40322;
var statearr_40374_40448 = state_40322__$1;
(statearr_40374_40448[(2)] = null);

(statearr_40374_40448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (12))){
var inst_40213 = (state_40322[(2)]);
var state_40322__$1 = state_40322;
var statearr_40375_40449 = state_40322__$1;
(statearr_40375_40449[(2)] = inst_40213);

(statearr_40375_40449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (2))){
var inst_40175 = (state_40322[(13)]);
var inst_40182 = cljs.core.seq.call(null,inst_40175);
var inst_40183 = inst_40182;
var inst_40184 = null;
var inst_40185 = (0);
var inst_40186 = (0);
var state_40322__$1 = (function (){var statearr_40376 = state_40322;
(statearr_40376[(7)] = inst_40185);

(statearr_40376[(8)] = inst_40183);

(statearr_40376[(9)] = inst_40184);

(statearr_40376[(10)] = inst_40186);

return statearr_40376;
})();
var statearr_40377_40450 = state_40322__$1;
(statearr_40377_40450[(2)] = null);

(statearr_40377_40450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (23))){
var inst_40236 = (state_40322[(19)]);
var inst_40244 = (state_40322[(23)]);
var inst_40239 = (state_40322[(24)]);
var inst_40240 = (state_40322[(25)]);
var inst_40242 = (state_40322[(26)]);
var inst_40247 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40249 = (function (){var all_files = inst_40236;
var res_SINGLEQUOTE_ = inst_40239;
var res = inst_40240;
var files_not_loaded = inst_40242;
var dependencies_that_loaded = inst_40244;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40236,inst_40244,inst_40239,inst_40240,inst_40242,inst_40247,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40248){
var map__40378 = p__40248;
var map__40378__$1 = ((((!((map__40378 == null)))?((((map__40378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40378):map__40378);
var request_url = cljs.core.get.call(null,map__40378__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40236,inst_40244,inst_40239,inst_40240,inst_40242,inst_40247,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40250 = cljs.core.reverse.call(null,inst_40244);
var inst_40251 = cljs.core.map.call(null,inst_40249,inst_40250);
var inst_40252 = cljs.core.pr_str.call(null,inst_40251);
var inst_40253 = figwheel.client.utils.log.call(null,inst_40252);
var state_40322__$1 = (function (){var statearr_40380 = state_40322;
(statearr_40380[(31)] = inst_40247);

return statearr_40380;
})();
var statearr_40381_40451 = state_40322__$1;
(statearr_40381_40451[(2)] = inst_40253);

(statearr_40381_40451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (35))){
var state_40322__$1 = state_40322;
var statearr_40382_40452 = state_40322__$1;
(statearr_40382_40452[(2)] = true);

(statearr_40382_40452[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (19))){
var inst_40226 = (state_40322[(12)]);
var inst_40232 = figwheel.client.file_reloading.expand_files.call(null,inst_40226);
var state_40322__$1 = state_40322;
var statearr_40383_40453 = state_40322__$1;
(statearr_40383_40453[(2)] = inst_40232);

(statearr_40383_40453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (11))){
var state_40322__$1 = state_40322;
var statearr_40384_40454 = state_40322__$1;
(statearr_40384_40454[(2)] = null);

(statearr_40384_40454[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (9))){
var inst_40215 = (state_40322[(2)]);
var state_40322__$1 = state_40322;
var statearr_40385_40455 = state_40322__$1;
(statearr_40385_40455[(2)] = inst_40215);

(statearr_40385_40455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (5))){
var inst_40185 = (state_40322[(7)]);
var inst_40186 = (state_40322[(10)]);
var inst_40188 = (inst_40186 < inst_40185);
var inst_40189 = inst_40188;
var state_40322__$1 = state_40322;
if(cljs.core.truth_(inst_40189)){
var statearr_40386_40456 = state_40322__$1;
(statearr_40386_40456[(1)] = (7));

} else {
var statearr_40387_40457 = state_40322__$1;
(statearr_40387_40457[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (14))){
var inst_40196 = (state_40322[(22)]);
var inst_40205 = cljs.core.first.call(null,inst_40196);
var inst_40206 = figwheel.client.file_reloading.eval_body.call(null,inst_40205,opts);
var inst_40207 = cljs.core.next.call(null,inst_40196);
var inst_40183 = inst_40207;
var inst_40184 = null;
var inst_40185 = (0);
var inst_40186 = (0);
var state_40322__$1 = (function (){var statearr_40388 = state_40322;
(statearr_40388[(7)] = inst_40185);

(statearr_40388[(8)] = inst_40183);

(statearr_40388[(9)] = inst_40184);

(statearr_40388[(32)] = inst_40206);

(statearr_40388[(10)] = inst_40186);

return statearr_40388;
})();
var statearr_40389_40458 = state_40322__$1;
(statearr_40389_40458[(2)] = null);

(statearr_40389_40458[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (45))){
var state_40322__$1 = state_40322;
var statearr_40390_40459 = state_40322__$1;
(statearr_40390_40459[(2)] = null);

(statearr_40390_40459[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (26))){
var inst_40236 = (state_40322[(19)]);
var inst_40244 = (state_40322[(23)]);
var inst_40239 = (state_40322[(24)]);
var inst_40240 = (state_40322[(25)]);
var inst_40242 = (state_40322[(26)]);
var inst_40259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40261 = (function (){var all_files = inst_40236;
var res_SINGLEQUOTE_ = inst_40239;
var res = inst_40240;
var files_not_loaded = inst_40242;
var dependencies_that_loaded = inst_40244;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40236,inst_40244,inst_40239,inst_40240,inst_40242,inst_40259,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40260){
var map__40391 = p__40260;
var map__40391__$1 = ((((!((map__40391 == null)))?((((map__40391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40391):map__40391);
var namespace = cljs.core.get.call(null,map__40391__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40391__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40236,inst_40244,inst_40239,inst_40240,inst_40242,inst_40259,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40262 = cljs.core.map.call(null,inst_40261,inst_40240);
var inst_40263 = cljs.core.pr_str.call(null,inst_40262);
var inst_40264 = figwheel.client.utils.log.call(null,inst_40263);
var inst_40265 = (function (){var all_files = inst_40236;
var res_SINGLEQUOTE_ = inst_40239;
var res = inst_40240;
var files_not_loaded = inst_40242;
var dependencies_that_loaded = inst_40244;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40236,inst_40244,inst_40239,inst_40240,inst_40242,inst_40259,inst_40261,inst_40262,inst_40263,inst_40264,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40236,inst_40244,inst_40239,inst_40240,inst_40242,inst_40259,inst_40261,inst_40262,inst_40263,inst_40264,state_val_40323,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40266 = setTimeout(inst_40265,(10));
var state_40322__$1 = (function (){var statearr_40393 = state_40322;
(statearr_40393[(33)] = inst_40264);

(statearr_40393[(34)] = inst_40259);

return statearr_40393;
})();
var statearr_40394_40460 = state_40322__$1;
(statearr_40394_40460[(2)] = inst_40266);

(statearr_40394_40460[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (16))){
var state_40322__$1 = state_40322;
var statearr_40395_40461 = state_40322__$1;
(statearr_40395_40461[(2)] = reload_dependents);

(statearr_40395_40461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (38))){
var inst_40276 = (state_40322[(16)]);
var inst_40293 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40276);
var state_40322__$1 = state_40322;
var statearr_40396_40462 = state_40322__$1;
(statearr_40396_40462[(2)] = inst_40293);

(statearr_40396_40462[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (30))){
var state_40322__$1 = state_40322;
var statearr_40397_40463 = state_40322__$1;
(statearr_40397_40463[(2)] = null);

(statearr_40397_40463[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (10))){
var inst_40196 = (state_40322[(22)]);
var inst_40198 = cljs.core.chunked_seq_QMARK_.call(null,inst_40196);
var state_40322__$1 = state_40322;
if(inst_40198){
var statearr_40398_40464 = state_40322__$1;
(statearr_40398_40464[(1)] = (13));

} else {
var statearr_40399_40465 = state_40322__$1;
(statearr_40399_40465[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (18))){
var inst_40230 = (state_40322[(2)]);
var state_40322__$1 = state_40322;
if(cljs.core.truth_(inst_40230)){
var statearr_40400_40466 = state_40322__$1;
(statearr_40400_40466[(1)] = (19));

} else {
var statearr_40401_40467 = state_40322__$1;
(statearr_40401_40467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (42))){
var state_40322__$1 = state_40322;
var statearr_40402_40468 = state_40322__$1;
(statearr_40402_40468[(2)] = null);

(statearr_40402_40468[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (37))){
var inst_40288 = (state_40322[(2)]);
var state_40322__$1 = state_40322;
var statearr_40403_40469 = state_40322__$1;
(statearr_40403_40469[(2)] = inst_40288);

(statearr_40403_40469[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40323 === (8))){
var inst_40196 = (state_40322[(22)]);
var inst_40183 = (state_40322[(8)]);
var inst_40196__$1 = cljs.core.seq.call(null,inst_40183);
var state_40322__$1 = (function (){var statearr_40404 = state_40322;
(statearr_40404[(22)] = inst_40196__$1);

return statearr_40404;
})();
if(inst_40196__$1){
var statearr_40405_40470 = state_40322__$1;
(statearr_40405_40470[(1)] = (10));

} else {
var statearr_40406_40471 = state_40322__$1;
(statearr_40406_40471[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32293__auto__,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32294__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32294__auto____0 = (function (){
var statearr_40410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40410[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32294__auto__);

(statearr_40410[(1)] = (1));

return statearr_40410;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32294__auto____1 = (function (state_40322){
while(true){
var ret_value__32295__auto__ = (function (){try{while(true){
var result__32296__auto__ = switch__32293__auto__.call(null,state_40322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32296__auto__;
}
break;
}
}catch (e40411){if((e40411 instanceof Object)){
var ex__32297__auto__ = e40411;
var statearr_40412_40472 = state_40322;
(statearr_40412_40472[(5)] = ex__32297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40473 = state_40322;
state_40322 = G__40473;
continue;
} else {
return ret_value__32295__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32294__auto__ = function(state_40322){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32294__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32294__auto____1.call(this,state_40322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32294__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32294__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32294__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32294__auto__;
})()
;})(switch__32293__auto__,c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32316__auto__ = (function (){var statearr_40413 = f__32315__auto__.call(null);
(statearr_40413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32314__auto__);

return statearr_40413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32316__auto__);
});})(c__32314__auto__,map__40168,map__40168__$1,opts,before_jsload,on_jsload,reload_dependents,map__40169,map__40169__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32314__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40476,link){
var map__40479 = p__40476;
var map__40479__$1 = ((((!((map__40479 == null)))?((((map__40479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40479):map__40479);
var file = cljs.core.get.call(null,map__40479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__40479,map__40479__$1,file){
return (function (p1__40474_SHARP_,p2__40475_SHARP_){
if(cljs.core._EQ_.call(null,p1__40474_SHARP_,p2__40475_SHARP_)){
return p1__40474_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__40479,map__40479__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40485){
var map__40486 = p__40485;
var map__40486__$1 = ((((!((map__40486 == null)))?((((map__40486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40486):map__40486);
var match_length = cljs.core.get.call(null,map__40486__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40486__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40481_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40481_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args40488 = [];
var len__30571__auto___40491 = arguments.length;
var i__30572__auto___40492 = (0);
while(true){
if((i__30572__auto___40492 < len__30571__auto___40491)){
args40488.push((arguments[i__30572__auto___40492]));

var G__40493 = (i__30572__auto___40492 + (1));
i__30572__auto___40492 = G__40493;
continue;
} else {
}
break;
}

var G__40490 = args40488.length;
switch (G__40490) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40488.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40495_SHARP_,p2__40496_SHARP_){
return cljs.core.assoc.call(null,p1__40495_SHARP_,cljs.core.get.call(null,p2__40496_SHARP_,key),p2__40496_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__40497){
var map__40500 = p__40497;
var map__40500__$1 = ((((!((map__40500 == null)))?((((map__40500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40500):map__40500);
var f_data = map__40500__$1;
var file = cljs.core.get.call(null,map__40500__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40502,files_msg){
var map__40509 = p__40502;
var map__40509__$1 = ((((!((map__40509 == null)))?((((map__40509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40509):map__40509);
var opts = map__40509__$1;
var on_cssload = cljs.core.get.call(null,map__40509__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__40511_40515 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__40512_40516 = null;
var count__40513_40517 = (0);
var i__40514_40518 = (0);
while(true){
if((i__40514_40518 < count__40513_40517)){
var f_40519 = cljs.core._nth.call(null,chunk__40512_40516,i__40514_40518);
figwheel.client.file_reloading.reload_css_file.call(null,f_40519);

var G__40520 = seq__40511_40515;
var G__40521 = chunk__40512_40516;
var G__40522 = count__40513_40517;
var G__40523 = (i__40514_40518 + (1));
seq__40511_40515 = G__40520;
chunk__40512_40516 = G__40521;
count__40513_40517 = G__40522;
i__40514_40518 = G__40523;
continue;
} else {
var temp__4425__auto___40524 = cljs.core.seq.call(null,seq__40511_40515);
if(temp__4425__auto___40524){
var seq__40511_40525__$1 = temp__4425__auto___40524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40511_40525__$1)){
var c__30316__auto___40526 = cljs.core.chunk_first.call(null,seq__40511_40525__$1);
var G__40527 = cljs.core.chunk_rest.call(null,seq__40511_40525__$1);
var G__40528 = c__30316__auto___40526;
var G__40529 = cljs.core.count.call(null,c__30316__auto___40526);
var G__40530 = (0);
seq__40511_40515 = G__40527;
chunk__40512_40516 = G__40528;
count__40513_40517 = G__40529;
i__40514_40518 = G__40530;
continue;
} else {
var f_40531 = cljs.core.first.call(null,seq__40511_40525__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_40531);

var G__40532 = cljs.core.next.call(null,seq__40511_40525__$1);
var G__40533 = null;
var G__40534 = (0);
var G__40535 = (0);
seq__40511_40515 = G__40532;
chunk__40512_40516 = G__40533;
count__40513_40517 = G__40534;
i__40514_40518 = G__40535;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__40509,map__40509__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__40509,map__40509__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map