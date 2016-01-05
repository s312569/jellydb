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
var or__29720__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__29720__auto__){
return or__29720__auto__;
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
var or__29720__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__29720__auto__)){
return or__29720__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39540_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39540_SHARP_));
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
var seq__39545 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39546 = null;
var count__39547 = (0);
var i__39548 = (0);
while(true){
if((i__39548 < count__39547)){
var n = cljs.core._nth.call(null,chunk__39546,i__39548);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39549 = seq__39545;
var G__39550 = chunk__39546;
var G__39551 = count__39547;
var G__39552 = (i__39548 + (1));
seq__39545 = G__39549;
chunk__39546 = G__39550;
count__39547 = G__39551;
i__39548 = G__39552;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39545);
if(temp__4425__auto__){
var seq__39545__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39545__$1)){
var c__30523__auto__ = cljs.core.chunk_first.call(null,seq__39545__$1);
var G__39553 = cljs.core.chunk_rest.call(null,seq__39545__$1);
var G__39554 = c__30523__auto__;
var G__39555 = cljs.core.count.call(null,c__30523__auto__);
var G__39556 = (0);
seq__39545 = G__39553;
chunk__39546 = G__39554;
count__39547 = G__39555;
i__39548 = G__39556;
continue;
} else {
var n = cljs.core.first.call(null,seq__39545__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39557 = cljs.core.next.call(null,seq__39545__$1);
var G__39558 = null;
var G__39559 = (0);
var G__39560 = (0);
seq__39545 = G__39557;
chunk__39546 = G__39558;
count__39547 = G__39559;
i__39548 = G__39560;
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

var seq__39599_39606 = cljs.core.seq.call(null,deps);
var chunk__39600_39607 = null;
var count__39601_39608 = (0);
var i__39602_39609 = (0);
while(true){
if((i__39602_39609 < count__39601_39608)){
var dep_39610 = cljs.core._nth.call(null,chunk__39600_39607,i__39602_39609);
topo_sort_helper_STAR_.call(null,dep_39610,(depth + (1)),state);

var G__39611 = seq__39599_39606;
var G__39612 = chunk__39600_39607;
var G__39613 = count__39601_39608;
var G__39614 = (i__39602_39609 + (1));
seq__39599_39606 = G__39611;
chunk__39600_39607 = G__39612;
count__39601_39608 = G__39613;
i__39602_39609 = G__39614;
continue;
} else {
var temp__4425__auto___39615 = cljs.core.seq.call(null,seq__39599_39606);
if(temp__4425__auto___39615){
var seq__39599_39616__$1 = temp__4425__auto___39615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39599_39616__$1)){
var c__30523__auto___39617 = cljs.core.chunk_first.call(null,seq__39599_39616__$1);
var G__39618 = cljs.core.chunk_rest.call(null,seq__39599_39616__$1);
var G__39619 = c__30523__auto___39617;
var G__39620 = cljs.core.count.call(null,c__30523__auto___39617);
var G__39621 = (0);
seq__39599_39606 = G__39618;
chunk__39600_39607 = G__39619;
count__39601_39608 = G__39620;
i__39602_39609 = G__39621;
continue;
} else {
var dep_39622 = cljs.core.first.call(null,seq__39599_39616__$1);
topo_sort_helper_STAR_.call(null,dep_39622,(depth + (1)),state);

var G__39623 = cljs.core.next.call(null,seq__39599_39616__$1);
var G__39624 = null;
var G__39625 = (0);
var G__39626 = (0);
seq__39599_39606 = G__39623;
chunk__39600_39607 = G__39624;
count__39601_39608 = G__39625;
i__39602_39609 = G__39626;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39603){
var vec__39605 = p__39603;
var x = cljs.core.nth.call(null,vec__39605,(0),null);
var xs = cljs.core.nthnext.call(null,vec__39605,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39605,x,xs,get_deps__$1){
return (function (p1__39561_SHARP_){
return clojure.set.difference.call(null,p1__39561_SHARP_,x);
});})(vec__39605,x,xs,get_deps__$1))
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
var seq__39639 = cljs.core.seq.call(null,provides);
var chunk__39640 = null;
var count__39641 = (0);
var i__39642 = (0);
while(true){
if((i__39642 < count__39641)){
var prov = cljs.core._nth.call(null,chunk__39640,i__39642);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39643_39651 = cljs.core.seq.call(null,requires);
var chunk__39644_39652 = null;
var count__39645_39653 = (0);
var i__39646_39654 = (0);
while(true){
if((i__39646_39654 < count__39645_39653)){
var req_39655 = cljs.core._nth.call(null,chunk__39644_39652,i__39646_39654);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39655,prov);

var G__39656 = seq__39643_39651;
var G__39657 = chunk__39644_39652;
var G__39658 = count__39645_39653;
var G__39659 = (i__39646_39654 + (1));
seq__39643_39651 = G__39656;
chunk__39644_39652 = G__39657;
count__39645_39653 = G__39658;
i__39646_39654 = G__39659;
continue;
} else {
var temp__4425__auto___39660 = cljs.core.seq.call(null,seq__39643_39651);
if(temp__4425__auto___39660){
var seq__39643_39661__$1 = temp__4425__auto___39660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39643_39661__$1)){
var c__30523__auto___39662 = cljs.core.chunk_first.call(null,seq__39643_39661__$1);
var G__39663 = cljs.core.chunk_rest.call(null,seq__39643_39661__$1);
var G__39664 = c__30523__auto___39662;
var G__39665 = cljs.core.count.call(null,c__30523__auto___39662);
var G__39666 = (0);
seq__39643_39651 = G__39663;
chunk__39644_39652 = G__39664;
count__39645_39653 = G__39665;
i__39646_39654 = G__39666;
continue;
} else {
var req_39667 = cljs.core.first.call(null,seq__39643_39661__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39667,prov);

var G__39668 = cljs.core.next.call(null,seq__39643_39661__$1);
var G__39669 = null;
var G__39670 = (0);
var G__39671 = (0);
seq__39643_39651 = G__39668;
chunk__39644_39652 = G__39669;
count__39645_39653 = G__39670;
i__39646_39654 = G__39671;
continue;
}
} else {
}
}
break;
}

var G__39672 = seq__39639;
var G__39673 = chunk__39640;
var G__39674 = count__39641;
var G__39675 = (i__39642 + (1));
seq__39639 = G__39672;
chunk__39640 = G__39673;
count__39641 = G__39674;
i__39642 = G__39675;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39639);
if(temp__4425__auto__){
var seq__39639__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39639__$1)){
var c__30523__auto__ = cljs.core.chunk_first.call(null,seq__39639__$1);
var G__39676 = cljs.core.chunk_rest.call(null,seq__39639__$1);
var G__39677 = c__30523__auto__;
var G__39678 = cljs.core.count.call(null,c__30523__auto__);
var G__39679 = (0);
seq__39639 = G__39676;
chunk__39640 = G__39677;
count__39641 = G__39678;
i__39642 = G__39679;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39639__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39647_39680 = cljs.core.seq.call(null,requires);
var chunk__39648_39681 = null;
var count__39649_39682 = (0);
var i__39650_39683 = (0);
while(true){
if((i__39650_39683 < count__39649_39682)){
var req_39684 = cljs.core._nth.call(null,chunk__39648_39681,i__39650_39683);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39684,prov);

var G__39685 = seq__39647_39680;
var G__39686 = chunk__39648_39681;
var G__39687 = count__39649_39682;
var G__39688 = (i__39650_39683 + (1));
seq__39647_39680 = G__39685;
chunk__39648_39681 = G__39686;
count__39649_39682 = G__39687;
i__39650_39683 = G__39688;
continue;
} else {
var temp__4425__auto___39689__$1 = cljs.core.seq.call(null,seq__39647_39680);
if(temp__4425__auto___39689__$1){
var seq__39647_39690__$1 = temp__4425__auto___39689__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39647_39690__$1)){
var c__30523__auto___39691 = cljs.core.chunk_first.call(null,seq__39647_39690__$1);
var G__39692 = cljs.core.chunk_rest.call(null,seq__39647_39690__$1);
var G__39693 = c__30523__auto___39691;
var G__39694 = cljs.core.count.call(null,c__30523__auto___39691);
var G__39695 = (0);
seq__39647_39680 = G__39692;
chunk__39648_39681 = G__39693;
count__39649_39682 = G__39694;
i__39650_39683 = G__39695;
continue;
} else {
var req_39696 = cljs.core.first.call(null,seq__39647_39690__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39696,prov);

var G__39697 = cljs.core.next.call(null,seq__39647_39690__$1);
var G__39698 = null;
var G__39699 = (0);
var G__39700 = (0);
seq__39647_39680 = G__39697;
chunk__39648_39681 = G__39698;
count__39649_39682 = G__39699;
i__39650_39683 = G__39700;
continue;
}
} else {
}
}
break;
}

var G__39701 = cljs.core.next.call(null,seq__39639__$1);
var G__39702 = null;
var G__39703 = (0);
var G__39704 = (0);
seq__39639 = G__39701;
chunk__39640 = G__39702;
count__39641 = G__39703;
i__39642 = G__39704;
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
var seq__39709_39713 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39710_39714 = null;
var count__39711_39715 = (0);
var i__39712_39716 = (0);
while(true){
if((i__39712_39716 < count__39711_39715)){
var ns_39717 = cljs.core._nth.call(null,chunk__39710_39714,i__39712_39716);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39717);

var G__39718 = seq__39709_39713;
var G__39719 = chunk__39710_39714;
var G__39720 = count__39711_39715;
var G__39721 = (i__39712_39716 + (1));
seq__39709_39713 = G__39718;
chunk__39710_39714 = G__39719;
count__39711_39715 = G__39720;
i__39712_39716 = G__39721;
continue;
} else {
var temp__4425__auto___39722 = cljs.core.seq.call(null,seq__39709_39713);
if(temp__4425__auto___39722){
var seq__39709_39723__$1 = temp__4425__auto___39722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39709_39723__$1)){
var c__30523__auto___39724 = cljs.core.chunk_first.call(null,seq__39709_39723__$1);
var G__39725 = cljs.core.chunk_rest.call(null,seq__39709_39723__$1);
var G__39726 = c__30523__auto___39724;
var G__39727 = cljs.core.count.call(null,c__30523__auto___39724);
var G__39728 = (0);
seq__39709_39713 = G__39725;
chunk__39710_39714 = G__39726;
count__39711_39715 = G__39727;
i__39712_39716 = G__39728;
continue;
} else {
var ns_39729 = cljs.core.first.call(null,seq__39709_39723__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39729);

var G__39730 = cljs.core.next.call(null,seq__39709_39723__$1);
var G__39731 = null;
var G__39732 = (0);
var G__39733 = (0);
seq__39709_39713 = G__39730;
chunk__39710_39714 = G__39731;
count__39711_39715 = G__39732;
i__39712_39716 = G__39733;
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
goog.require_figwheel_backup_ = (function (){var or__29720__auto__ = goog.require__;
if(cljs.core.truth_(or__29720__auto__)){
return or__29720__auto__;
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
var G__39734__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39735__i = 0, G__39735__a = new Array(arguments.length -  0);
while (G__39735__i < G__39735__a.length) {G__39735__a[G__39735__i] = arguments[G__39735__i + 0]; ++G__39735__i;}
  args = new cljs.core.IndexedSeq(G__39735__a,0);
} 
return G__39734__delegate.call(this,args);};
G__39734.cljs$lang$maxFixedArity = 0;
G__39734.cljs$lang$applyTo = (function (arglist__39736){
var args = cljs.core.seq(arglist__39736);
return G__39734__delegate(args);
});
G__39734.cljs$core$IFn$_invoke$arity$variadic = G__39734__delegate;
return G__39734;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39738 = cljs.core._EQ_;
var expr__39739 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39738.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39739))){
var path_parts = ((function (pred__39738,expr__39739){
return (function (p1__39737_SHARP_){
return clojure.string.split.call(null,p1__39737_SHARP_,/[\/\\]/);
});})(pred__39738,expr__39739))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__39738,expr__39739){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39741){if((e39741 instanceof Error)){
var e = e39741;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39741;

}
}})());
});
;})(path_parts,sep,root,pred__39738,expr__39739))
} else {
if(cljs.core.truth_(pred__39738.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39739))){
return ((function (pred__39738,expr__39739){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__39738,expr__39739){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39738,expr__39739))
);

return deferred.addErrback(((function (deferred,pred__39738,expr__39739){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39738,expr__39739))
);
});
;})(pred__39738,expr__39739))
} else {
return ((function (pred__39738,expr__39739){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39738,expr__39739))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39742,callback){
var map__39745 = p__39742;
var map__39745__$1 = ((((!((map__39745 == null)))?((((map__39745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39745):map__39745);
var file_msg = map__39745__$1;
var request_url = cljs.core.get.call(null,map__39745__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39745,map__39745__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39745,map__39745__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__34593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto__){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto__){
return (function (state_39769){
var state_val_39770 = (state_39769[(1)]);
if((state_val_39770 === (7))){
var inst_39765 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39771_39791 = state_39769__$1;
(statearr_39771_39791[(2)] = inst_39765);

(statearr_39771_39791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (1))){
var state_39769__$1 = state_39769;
var statearr_39772_39792 = state_39769__$1;
(statearr_39772_39792[(2)] = null);

(statearr_39772_39792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (4))){
var inst_39749 = (state_39769[(7)]);
var inst_39749__$1 = (state_39769[(2)]);
var state_39769__$1 = (function (){var statearr_39773 = state_39769;
(statearr_39773[(7)] = inst_39749__$1);

return statearr_39773;
})();
if(cljs.core.truth_(inst_39749__$1)){
var statearr_39774_39793 = state_39769__$1;
(statearr_39774_39793[(1)] = (5));

} else {
var statearr_39775_39794 = state_39769__$1;
(statearr_39775_39794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (6))){
var state_39769__$1 = state_39769;
var statearr_39776_39795 = state_39769__$1;
(statearr_39776_39795[(2)] = null);

(statearr_39776_39795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (3))){
var inst_39767 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39769__$1,inst_39767);
} else {
if((state_val_39770 === (2))){
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39769__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39770 === (11))){
var inst_39761 = (state_39769[(2)]);
var state_39769__$1 = (function (){var statearr_39777 = state_39769;
(statearr_39777[(8)] = inst_39761);

return statearr_39777;
})();
var statearr_39778_39796 = state_39769__$1;
(statearr_39778_39796[(2)] = null);

(statearr_39778_39796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (9))){
var inst_39755 = (state_39769[(9)]);
var inst_39753 = (state_39769[(10)]);
var inst_39757 = inst_39755.call(null,inst_39753);
var state_39769__$1 = state_39769;
var statearr_39779_39797 = state_39769__$1;
(statearr_39779_39797[(2)] = inst_39757);

(statearr_39779_39797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (5))){
var inst_39749 = (state_39769[(7)]);
var inst_39751 = figwheel.client.file_reloading.blocking_load.call(null,inst_39749);
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39769__$1,(8),inst_39751);
} else {
if((state_val_39770 === (10))){
var inst_39753 = (state_39769[(10)]);
var inst_39759 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39753);
var state_39769__$1 = state_39769;
var statearr_39780_39798 = state_39769__$1;
(statearr_39780_39798[(2)] = inst_39759);

(statearr_39780_39798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (8))){
var inst_39755 = (state_39769[(9)]);
var inst_39749 = (state_39769[(7)]);
var inst_39753 = (state_39769[(2)]);
var inst_39754 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39755__$1 = cljs.core.get.call(null,inst_39754,inst_39749);
var state_39769__$1 = (function (){var statearr_39781 = state_39769;
(statearr_39781[(9)] = inst_39755__$1);

(statearr_39781[(10)] = inst_39753);

return statearr_39781;
})();
if(cljs.core.truth_(inst_39755__$1)){
var statearr_39782_39799 = state_39769__$1;
(statearr_39782_39799[(1)] = (9));

} else {
var statearr_39783_39800 = state_39769__$1;
(statearr_39783_39800[(1)] = (10));

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
});})(c__34593__auto__))
;
return ((function (switch__34481__auto__,c__34593__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34482__auto__ = null;
var figwheel$client$file_reloading$state_machine__34482__auto____0 = (function (){
var statearr_39787 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39787[(0)] = figwheel$client$file_reloading$state_machine__34482__auto__);

(statearr_39787[(1)] = (1));

return statearr_39787;
});
var figwheel$client$file_reloading$state_machine__34482__auto____1 = (function (state_39769){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_39769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e39788){if((e39788 instanceof Object)){
var ex__34485__auto__ = e39788;
var statearr_39789_39801 = state_39769;
(statearr_39789_39801[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39802 = state_39769;
state_39769 = G__39802;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34482__auto__ = function(state_39769){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34482__auto____1.call(this,state_39769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34482__auto____0;
figwheel$client$file_reloading$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34482__auto____1;
return figwheel$client$file_reloading$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto__))
})();
var state__34595__auto__ = (function (){var statearr_39790 = f__34594__auto__.call(null);
(statearr_39790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto__);

return statearr_39790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto__))
);

return c__34593__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39803,callback){
var map__39806 = p__39803;
var map__39806__$1 = ((((!((map__39806 == null)))?((((map__39806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39806):map__39806);
var file_msg = map__39806__$1;
var namespace = cljs.core.get.call(null,map__39806__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39806,map__39806__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39806,map__39806__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39808){
var map__39811 = p__39808;
var map__39811__$1 = ((((!((map__39811 == null)))?((((map__39811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39811):map__39811);
var file_msg = map__39811__$1;
var namespace = cljs.core.get.call(null,map__39811__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__29708__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__29708__auto__){
var or__29720__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29720__auto__)){
return or__29720__auto__;
} else {
var or__29720__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29720__auto____$1)){
return or__29720__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__29708__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39813,callback){
var map__39816 = p__39813;
var map__39816__$1 = ((((!((map__39816 == null)))?((((map__39816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39816):map__39816);
var file_msg = map__39816__$1;
var request_url = cljs.core.get.call(null,map__39816__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39816__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34593__auto___39904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto___39904,out){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto___39904,out){
return (function (state_39886){
var state_val_39887 = (state_39886[(1)]);
if((state_val_39887 === (1))){
var inst_39864 = cljs.core.nth.call(null,files,(0),null);
var inst_39865 = cljs.core.nthnext.call(null,files,(1));
var inst_39866 = files;
var state_39886__$1 = (function (){var statearr_39888 = state_39886;
(statearr_39888[(7)] = inst_39864);

(statearr_39888[(8)] = inst_39865);

(statearr_39888[(9)] = inst_39866);

return statearr_39888;
})();
var statearr_39889_39905 = state_39886__$1;
(statearr_39889_39905[(2)] = null);

(statearr_39889_39905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39887 === (2))){
var inst_39869 = (state_39886[(10)]);
var inst_39866 = (state_39886[(9)]);
var inst_39869__$1 = cljs.core.nth.call(null,inst_39866,(0),null);
var inst_39870 = cljs.core.nthnext.call(null,inst_39866,(1));
var inst_39871 = (inst_39869__$1 == null);
var inst_39872 = cljs.core.not.call(null,inst_39871);
var state_39886__$1 = (function (){var statearr_39890 = state_39886;
(statearr_39890[(10)] = inst_39869__$1);

(statearr_39890[(11)] = inst_39870);

return statearr_39890;
})();
if(inst_39872){
var statearr_39891_39906 = state_39886__$1;
(statearr_39891_39906[(1)] = (4));

} else {
var statearr_39892_39907 = state_39886__$1;
(statearr_39892_39907[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39887 === (3))){
var inst_39884 = (state_39886[(2)]);
var state_39886__$1 = state_39886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39886__$1,inst_39884);
} else {
if((state_val_39887 === (4))){
var inst_39869 = (state_39886[(10)]);
var inst_39874 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39869);
var state_39886__$1 = state_39886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39886__$1,(7),inst_39874);
} else {
if((state_val_39887 === (5))){
var inst_39880 = cljs.core.async.close_BANG_.call(null,out);
var state_39886__$1 = state_39886;
var statearr_39893_39908 = state_39886__$1;
(statearr_39893_39908[(2)] = inst_39880);

(statearr_39893_39908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39887 === (6))){
var inst_39882 = (state_39886[(2)]);
var state_39886__$1 = state_39886;
var statearr_39894_39909 = state_39886__$1;
(statearr_39894_39909[(2)] = inst_39882);

(statearr_39894_39909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39887 === (7))){
var inst_39870 = (state_39886[(11)]);
var inst_39876 = (state_39886[(2)]);
var inst_39877 = cljs.core.async.put_BANG_.call(null,out,inst_39876);
var inst_39866 = inst_39870;
var state_39886__$1 = (function (){var statearr_39895 = state_39886;
(statearr_39895[(12)] = inst_39877);

(statearr_39895[(9)] = inst_39866);

return statearr_39895;
})();
var statearr_39896_39910 = state_39886__$1;
(statearr_39896_39910[(2)] = null);

(statearr_39896_39910[(1)] = (2));


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
});})(c__34593__auto___39904,out))
;
return ((function (switch__34481__auto__,c__34593__auto___39904,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto____0 = (function (){
var statearr_39900 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39900[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto__);

(statearr_39900[(1)] = (1));

return statearr_39900;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto____1 = (function (state_39886){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_39886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e39901){if((e39901 instanceof Object)){
var ex__34485__auto__ = e39901;
var statearr_39902_39911 = state_39886;
(statearr_39902_39911[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39912 = state_39886;
state_39886 = G__39912;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto__ = function(state_39886){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto____1.call(this,state_39886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto___39904,out))
})();
var state__34595__auto__ = (function (){var statearr_39903 = f__34594__auto__.call(null);
(statearr_39903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto___39904);

return statearr_39903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto___39904,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39913,opts){
var map__39917 = p__39913;
var map__39917__$1 = ((((!((map__39917 == null)))?((((map__39917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39917):map__39917);
var eval_body__$1 = cljs.core.get.call(null,map__39917__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39917__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__29708__auto__ = eval_body__$1;
if(cljs.core.truth_(and__29708__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__29708__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39919){var e = e39919;
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
return (function (p1__39920_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39920_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__39925){
var vec__39926 = p__39925;
var k = cljs.core.nth.call(null,vec__39926,(0),null);
var v = cljs.core.nth.call(null,vec__39926,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39927){
var vec__39928 = p__39927;
var k = cljs.core.nth.call(null,vec__39928,(0),null);
var v = cljs.core.nth.call(null,vec__39928,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39932,p__39933){
var map__40180 = p__39932;
var map__40180__$1 = ((((!((map__40180 == null)))?((((map__40180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40180):map__40180);
var opts = map__40180__$1;
var before_jsload = cljs.core.get.call(null,map__40180__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40180__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40180__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40181 = p__39933;
var map__40181__$1 = ((((!((map__40181 == null)))?((((map__40181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40181):map__40181);
var msg = map__40181__$1;
var files = cljs.core.get.call(null,map__40181__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40181__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40181__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34594__auto__ = (function (){var switch__34481__auto__ = ((function (c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40334){
var state_val_40335 = (state_40334[(1)]);
if((state_val_40335 === (7))){
var inst_40196 = (state_40334[(7)]);
var inst_40195 = (state_40334[(8)]);
var inst_40198 = (state_40334[(9)]);
var inst_40197 = (state_40334[(10)]);
var inst_40203 = cljs.core._nth.call(null,inst_40196,inst_40198);
var inst_40204 = figwheel.client.file_reloading.eval_body.call(null,inst_40203,opts);
var inst_40205 = (inst_40198 + (1));
var tmp40336 = inst_40196;
var tmp40337 = inst_40195;
var tmp40338 = inst_40197;
var inst_40195__$1 = tmp40337;
var inst_40196__$1 = tmp40336;
var inst_40197__$1 = tmp40338;
var inst_40198__$1 = inst_40205;
var state_40334__$1 = (function (){var statearr_40339 = state_40334;
(statearr_40339[(7)] = inst_40196__$1);

(statearr_40339[(11)] = inst_40204);

(statearr_40339[(8)] = inst_40195__$1);

(statearr_40339[(9)] = inst_40198__$1);

(statearr_40339[(10)] = inst_40197__$1);

return statearr_40339;
})();
var statearr_40340_40426 = state_40334__$1;
(statearr_40340_40426[(2)] = null);

(statearr_40340_40426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (20))){
var inst_40238 = (state_40334[(12)]);
var inst_40246 = figwheel.client.file_reloading.sort_files.call(null,inst_40238);
var state_40334__$1 = state_40334;
var statearr_40341_40427 = state_40334__$1;
(statearr_40341_40427[(2)] = inst_40246);

(statearr_40341_40427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (27))){
var state_40334__$1 = state_40334;
var statearr_40342_40428 = state_40334__$1;
(statearr_40342_40428[(2)] = null);

(statearr_40342_40428[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (1))){
var inst_40187 = (state_40334[(13)]);
var inst_40184 = before_jsload.call(null,files);
var inst_40185 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40186 = (function (){return ((function (inst_40187,inst_40184,inst_40185,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39929_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39929_SHARP_);
});
;})(inst_40187,inst_40184,inst_40185,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40187__$1 = cljs.core.filter.call(null,inst_40186,files);
var inst_40188 = cljs.core.not_empty.call(null,inst_40187__$1);
var state_40334__$1 = (function (){var statearr_40343 = state_40334;
(statearr_40343[(14)] = inst_40185);

(statearr_40343[(15)] = inst_40184);

(statearr_40343[(13)] = inst_40187__$1);

return statearr_40343;
})();
if(cljs.core.truth_(inst_40188)){
var statearr_40344_40429 = state_40334__$1;
(statearr_40344_40429[(1)] = (2));

} else {
var statearr_40345_40430 = state_40334__$1;
(statearr_40345_40430[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (24))){
var state_40334__$1 = state_40334;
var statearr_40346_40431 = state_40334__$1;
(statearr_40346_40431[(2)] = null);

(statearr_40346_40431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (39))){
var inst_40288 = (state_40334[(16)]);
var state_40334__$1 = state_40334;
var statearr_40347_40432 = state_40334__$1;
(statearr_40347_40432[(2)] = inst_40288);

(statearr_40347_40432[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (46))){
var inst_40329 = (state_40334[(2)]);
var state_40334__$1 = state_40334;
var statearr_40348_40433 = state_40334__$1;
(statearr_40348_40433[(2)] = inst_40329);

(statearr_40348_40433[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (4))){
var inst_40232 = (state_40334[(2)]);
var inst_40233 = cljs.core.List.EMPTY;
var inst_40234 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40233);
var inst_40235 = (function (){return ((function (inst_40232,inst_40233,inst_40234,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39930_SHARP_){
var and__29708__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39930_SHARP_);
if(cljs.core.truth_(and__29708__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39930_SHARP_));
} else {
return and__29708__auto__;
}
});
;})(inst_40232,inst_40233,inst_40234,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40236 = cljs.core.filter.call(null,inst_40235,files);
var inst_40237 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40238 = cljs.core.concat.call(null,inst_40236,inst_40237);
var state_40334__$1 = (function (){var statearr_40349 = state_40334;
(statearr_40349[(17)] = inst_40232);

(statearr_40349[(12)] = inst_40238);

(statearr_40349[(18)] = inst_40234);

return statearr_40349;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40350_40434 = state_40334__$1;
(statearr_40350_40434[(1)] = (16));

} else {
var statearr_40351_40435 = state_40334__$1;
(statearr_40351_40435[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (15))){
var inst_40222 = (state_40334[(2)]);
var state_40334__$1 = state_40334;
var statearr_40352_40436 = state_40334__$1;
(statearr_40352_40436[(2)] = inst_40222);

(statearr_40352_40436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (21))){
var inst_40248 = (state_40334[(19)]);
var inst_40248__$1 = (state_40334[(2)]);
var inst_40249 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40248__$1);
var state_40334__$1 = (function (){var statearr_40353 = state_40334;
(statearr_40353[(19)] = inst_40248__$1);

return statearr_40353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40334__$1,(22),inst_40249);
} else {
if((state_val_40335 === (31))){
var inst_40332 = (state_40334[(2)]);
var state_40334__$1 = state_40334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40334__$1,inst_40332);
} else {
if((state_val_40335 === (32))){
var inst_40288 = (state_40334[(16)]);
var inst_40293 = inst_40288.cljs$lang$protocol_mask$partition0$;
var inst_40294 = (inst_40293 & (64));
var inst_40295 = inst_40288.cljs$core$ISeq$;
var inst_40296 = (inst_40294) || (inst_40295);
var state_40334__$1 = state_40334;
if(cljs.core.truth_(inst_40296)){
var statearr_40354_40437 = state_40334__$1;
(statearr_40354_40437[(1)] = (35));

} else {
var statearr_40355_40438 = state_40334__$1;
(statearr_40355_40438[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (40))){
var inst_40309 = (state_40334[(20)]);
var inst_40308 = (state_40334[(2)]);
var inst_40309__$1 = cljs.core.get.call(null,inst_40308,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40310 = cljs.core.get.call(null,inst_40308,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40311 = cljs.core.not_empty.call(null,inst_40309__$1);
var state_40334__$1 = (function (){var statearr_40356 = state_40334;
(statearr_40356[(21)] = inst_40310);

(statearr_40356[(20)] = inst_40309__$1);

return statearr_40356;
})();
if(cljs.core.truth_(inst_40311)){
var statearr_40357_40439 = state_40334__$1;
(statearr_40357_40439[(1)] = (41));

} else {
var statearr_40358_40440 = state_40334__$1;
(statearr_40358_40440[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (33))){
var state_40334__$1 = state_40334;
var statearr_40359_40441 = state_40334__$1;
(statearr_40359_40441[(2)] = false);

(statearr_40359_40441[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (13))){
var inst_40208 = (state_40334[(22)]);
var inst_40212 = cljs.core.chunk_first.call(null,inst_40208);
var inst_40213 = cljs.core.chunk_rest.call(null,inst_40208);
var inst_40214 = cljs.core.count.call(null,inst_40212);
var inst_40195 = inst_40213;
var inst_40196 = inst_40212;
var inst_40197 = inst_40214;
var inst_40198 = (0);
var state_40334__$1 = (function (){var statearr_40360 = state_40334;
(statearr_40360[(7)] = inst_40196);

(statearr_40360[(8)] = inst_40195);

(statearr_40360[(9)] = inst_40198);

(statearr_40360[(10)] = inst_40197);

return statearr_40360;
})();
var statearr_40361_40442 = state_40334__$1;
(statearr_40361_40442[(2)] = null);

(statearr_40361_40442[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (22))){
var inst_40248 = (state_40334[(19)]);
var inst_40251 = (state_40334[(23)]);
var inst_40252 = (state_40334[(24)]);
var inst_40256 = (state_40334[(25)]);
var inst_40251__$1 = (state_40334[(2)]);
var inst_40252__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40251__$1);
var inst_40253 = (function (){var all_files = inst_40248;
var res_SINGLEQUOTE_ = inst_40251__$1;
var res = inst_40252__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40248,inst_40251,inst_40252,inst_40256,inst_40251__$1,inst_40252__$1,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39931_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39931_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40248,inst_40251,inst_40252,inst_40256,inst_40251__$1,inst_40252__$1,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40254 = cljs.core.filter.call(null,inst_40253,inst_40251__$1);
var inst_40255 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40256__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40255);
var inst_40257 = cljs.core.not_empty.call(null,inst_40256__$1);
var state_40334__$1 = (function (){var statearr_40362 = state_40334;
(statearr_40362[(26)] = inst_40254);

(statearr_40362[(23)] = inst_40251__$1);

(statearr_40362[(24)] = inst_40252__$1);

(statearr_40362[(25)] = inst_40256__$1);

return statearr_40362;
})();
if(cljs.core.truth_(inst_40257)){
var statearr_40363_40443 = state_40334__$1;
(statearr_40363_40443[(1)] = (23));

} else {
var statearr_40364_40444 = state_40334__$1;
(statearr_40364_40444[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (36))){
var state_40334__$1 = state_40334;
var statearr_40365_40445 = state_40334__$1;
(statearr_40365_40445[(2)] = false);

(statearr_40365_40445[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (41))){
var inst_40309 = (state_40334[(20)]);
var inst_40313 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40314 = cljs.core.map.call(null,inst_40313,inst_40309);
var inst_40315 = cljs.core.pr_str.call(null,inst_40314);
var inst_40316 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40315)].join('');
var inst_40317 = figwheel.client.utils.log.call(null,inst_40316);
var state_40334__$1 = state_40334;
var statearr_40366_40446 = state_40334__$1;
(statearr_40366_40446[(2)] = inst_40317);

(statearr_40366_40446[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (43))){
var inst_40310 = (state_40334[(21)]);
var inst_40320 = (state_40334[(2)]);
var inst_40321 = cljs.core.not_empty.call(null,inst_40310);
var state_40334__$1 = (function (){var statearr_40367 = state_40334;
(statearr_40367[(27)] = inst_40320);

return statearr_40367;
})();
if(cljs.core.truth_(inst_40321)){
var statearr_40368_40447 = state_40334__$1;
(statearr_40368_40447[(1)] = (44));

} else {
var statearr_40369_40448 = state_40334__$1;
(statearr_40369_40448[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (29))){
var inst_40254 = (state_40334[(26)]);
var inst_40248 = (state_40334[(19)]);
var inst_40288 = (state_40334[(16)]);
var inst_40251 = (state_40334[(23)]);
var inst_40252 = (state_40334[(24)]);
var inst_40256 = (state_40334[(25)]);
var inst_40284 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40287 = (function (){var all_files = inst_40248;
var res_SINGLEQUOTE_ = inst_40251;
var res = inst_40252;
var files_not_loaded = inst_40254;
var dependencies_that_loaded = inst_40256;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40254,inst_40248,inst_40288,inst_40251,inst_40252,inst_40256,inst_40284,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40286){
var map__40370 = p__40286;
var map__40370__$1 = ((((!((map__40370 == null)))?((((map__40370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40370):map__40370);
var namespace = cljs.core.get.call(null,map__40370__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40254,inst_40248,inst_40288,inst_40251,inst_40252,inst_40256,inst_40284,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40288__$1 = cljs.core.group_by.call(null,inst_40287,inst_40254);
var inst_40290 = (inst_40288__$1 == null);
var inst_40291 = cljs.core.not.call(null,inst_40290);
var state_40334__$1 = (function (){var statearr_40372 = state_40334;
(statearr_40372[(16)] = inst_40288__$1);

(statearr_40372[(28)] = inst_40284);

return statearr_40372;
})();
if(inst_40291){
var statearr_40373_40449 = state_40334__$1;
(statearr_40373_40449[(1)] = (32));

} else {
var statearr_40374_40450 = state_40334__$1;
(statearr_40374_40450[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (44))){
var inst_40310 = (state_40334[(21)]);
var inst_40323 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40310);
var inst_40324 = cljs.core.pr_str.call(null,inst_40323);
var inst_40325 = [cljs.core.str("not required: "),cljs.core.str(inst_40324)].join('');
var inst_40326 = figwheel.client.utils.log.call(null,inst_40325);
var state_40334__$1 = state_40334;
var statearr_40375_40451 = state_40334__$1;
(statearr_40375_40451[(2)] = inst_40326);

(statearr_40375_40451[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (6))){
var inst_40229 = (state_40334[(2)]);
var state_40334__$1 = state_40334;
var statearr_40376_40452 = state_40334__$1;
(statearr_40376_40452[(2)] = inst_40229);

(statearr_40376_40452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (28))){
var inst_40254 = (state_40334[(26)]);
var inst_40281 = (state_40334[(2)]);
var inst_40282 = cljs.core.not_empty.call(null,inst_40254);
var state_40334__$1 = (function (){var statearr_40377 = state_40334;
(statearr_40377[(29)] = inst_40281);

return statearr_40377;
})();
if(cljs.core.truth_(inst_40282)){
var statearr_40378_40453 = state_40334__$1;
(statearr_40378_40453[(1)] = (29));

} else {
var statearr_40379_40454 = state_40334__$1;
(statearr_40379_40454[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (25))){
var inst_40252 = (state_40334[(24)]);
var inst_40268 = (state_40334[(2)]);
var inst_40269 = cljs.core.not_empty.call(null,inst_40252);
var state_40334__$1 = (function (){var statearr_40380 = state_40334;
(statearr_40380[(30)] = inst_40268);

return statearr_40380;
})();
if(cljs.core.truth_(inst_40269)){
var statearr_40381_40455 = state_40334__$1;
(statearr_40381_40455[(1)] = (26));

} else {
var statearr_40382_40456 = state_40334__$1;
(statearr_40382_40456[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (34))){
var inst_40303 = (state_40334[(2)]);
var state_40334__$1 = state_40334;
if(cljs.core.truth_(inst_40303)){
var statearr_40383_40457 = state_40334__$1;
(statearr_40383_40457[(1)] = (38));

} else {
var statearr_40384_40458 = state_40334__$1;
(statearr_40384_40458[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (17))){
var state_40334__$1 = state_40334;
var statearr_40385_40459 = state_40334__$1;
(statearr_40385_40459[(2)] = recompile_dependents);

(statearr_40385_40459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (3))){
var state_40334__$1 = state_40334;
var statearr_40386_40460 = state_40334__$1;
(statearr_40386_40460[(2)] = null);

(statearr_40386_40460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (12))){
var inst_40225 = (state_40334[(2)]);
var state_40334__$1 = state_40334;
var statearr_40387_40461 = state_40334__$1;
(statearr_40387_40461[(2)] = inst_40225);

(statearr_40387_40461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (2))){
var inst_40187 = (state_40334[(13)]);
var inst_40194 = cljs.core.seq.call(null,inst_40187);
var inst_40195 = inst_40194;
var inst_40196 = null;
var inst_40197 = (0);
var inst_40198 = (0);
var state_40334__$1 = (function (){var statearr_40388 = state_40334;
(statearr_40388[(7)] = inst_40196);

(statearr_40388[(8)] = inst_40195);

(statearr_40388[(9)] = inst_40198);

(statearr_40388[(10)] = inst_40197);

return statearr_40388;
})();
var statearr_40389_40462 = state_40334__$1;
(statearr_40389_40462[(2)] = null);

(statearr_40389_40462[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (23))){
var inst_40254 = (state_40334[(26)]);
var inst_40248 = (state_40334[(19)]);
var inst_40251 = (state_40334[(23)]);
var inst_40252 = (state_40334[(24)]);
var inst_40256 = (state_40334[(25)]);
var inst_40259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40261 = (function (){var all_files = inst_40248;
var res_SINGLEQUOTE_ = inst_40251;
var res = inst_40252;
var files_not_loaded = inst_40254;
var dependencies_that_loaded = inst_40256;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40254,inst_40248,inst_40251,inst_40252,inst_40256,inst_40259,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40260){
var map__40390 = p__40260;
var map__40390__$1 = ((((!((map__40390 == null)))?((((map__40390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40390):map__40390);
var request_url = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40254,inst_40248,inst_40251,inst_40252,inst_40256,inst_40259,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40262 = cljs.core.reverse.call(null,inst_40256);
var inst_40263 = cljs.core.map.call(null,inst_40261,inst_40262);
var inst_40264 = cljs.core.pr_str.call(null,inst_40263);
var inst_40265 = figwheel.client.utils.log.call(null,inst_40264);
var state_40334__$1 = (function (){var statearr_40392 = state_40334;
(statearr_40392[(31)] = inst_40259);

return statearr_40392;
})();
var statearr_40393_40463 = state_40334__$1;
(statearr_40393_40463[(2)] = inst_40265);

(statearr_40393_40463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (35))){
var state_40334__$1 = state_40334;
var statearr_40394_40464 = state_40334__$1;
(statearr_40394_40464[(2)] = true);

(statearr_40394_40464[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (19))){
var inst_40238 = (state_40334[(12)]);
var inst_40244 = figwheel.client.file_reloading.expand_files.call(null,inst_40238);
var state_40334__$1 = state_40334;
var statearr_40395_40465 = state_40334__$1;
(statearr_40395_40465[(2)] = inst_40244);

(statearr_40395_40465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (11))){
var state_40334__$1 = state_40334;
var statearr_40396_40466 = state_40334__$1;
(statearr_40396_40466[(2)] = null);

(statearr_40396_40466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (9))){
var inst_40227 = (state_40334[(2)]);
var state_40334__$1 = state_40334;
var statearr_40397_40467 = state_40334__$1;
(statearr_40397_40467[(2)] = inst_40227);

(statearr_40397_40467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (5))){
var inst_40198 = (state_40334[(9)]);
var inst_40197 = (state_40334[(10)]);
var inst_40200 = (inst_40198 < inst_40197);
var inst_40201 = inst_40200;
var state_40334__$1 = state_40334;
if(cljs.core.truth_(inst_40201)){
var statearr_40398_40468 = state_40334__$1;
(statearr_40398_40468[(1)] = (7));

} else {
var statearr_40399_40469 = state_40334__$1;
(statearr_40399_40469[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (14))){
var inst_40208 = (state_40334[(22)]);
var inst_40217 = cljs.core.first.call(null,inst_40208);
var inst_40218 = figwheel.client.file_reloading.eval_body.call(null,inst_40217,opts);
var inst_40219 = cljs.core.next.call(null,inst_40208);
var inst_40195 = inst_40219;
var inst_40196 = null;
var inst_40197 = (0);
var inst_40198 = (0);
var state_40334__$1 = (function (){var statearr_40400 = state_40334;
(statearr_40400[(7)] = inst_40196);

(statearr_40400[(8)] = inst_40195);

(statearr_40400[(9)] = inst_40198);

(statearr_40400[(32)] = inst_40218);

(statearr_40400[(10)] = inst_40197);

return statearr_40400;
})();
var statearr_40401_40470 = state_40334__$1;
(statearr_40401_40470[(2)] = null);

(statearr_40401_40470[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (45))){
var state_40334__$1 = state_40334;
var statearr_40402_40471 = state_40334__$1;
(statearr_40402_40471[(2)] = null);

(statearr_40402_40471[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (26))){
var inst_40254 = (state_40334[(26)]);
var inst_40248 = (state_40334[(19)]);
var inst_40251 = (state_40334[(23)]);
var inst_40252 = (state_40334[(24)]);
var inst_40256 = (state_40334[(25)]);
var inst_40271 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40273 = (function (){var all_files = inst_40248;
var res_SINGLEQUOTE_ = inst_40251;
var res = inst_40252;
var files_not_loaded = inst_40254;
var dependencies_that_loaded = inst_40256;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40254,inst_40248,inst_40251,inst_40252,inst_40256,inst_40271,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40272){
var map__40403 = p__40272;
var map__40403__$1 = ((((!((map__40403 == null)))?((((map__40403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40403):map__40403);
var namespace = cljs.core.get.call(null,map__40403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40403__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40254,inst_40248,inst_40251,inst_40252,inst_40256,inst_40271,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40274 = cljs.core.map.call(null,inst_40273,inst_40252);
var inst_40275 = cljs.core.pr_str.call(null,inst_40274);
var inst_40276 = figwheel.client.utils.log.call(null,inst_40275);
var inst_40277 = (function (){var all_files = inst_40248;
var res_SINGLEQUOTE_ = inst_40251;
var res = inst_40252;
var files_not_loaded = inst_40254;
var dependencies_that_loaded = inst_40256;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40254,inst_40248,inst_40251,inst_40252,inst_40256,inst_40271,inst_40273,inst_40274,inst_40275,inst_40276,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40254,inst_40248,inst_40251,inst_40252,inst_40256,inst_40271,inst_40273,inst_40274,inst_40275,inst_40276,state_val_40335,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40278 = setTimeout(inst_40277,(10));
var state_40334__$1 = (function (){var statearr_40405 = state_40334;
(statearr_40405[(33)] = inst_40276);

(statearr_40405[(34)] = inst_40271);

return statearr_40405;
})();
var statearr_40406_40472 = state_40334__$1;
(statearr_40406_40472[(2)] = inst_40278);

(statearr_40406_40472[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (16))){
var state_40334__$1 = state_40334;
var statearr_40407_40473 = state_40334__$1;
(statearr_40407_40473[(2)] = reload_dependents);

(statearr_40407_40473[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (38))){
var inst_40288 = (state_40334[(16)]);
var inst_40305 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40288);
var state_40334__$1 = state_40334;
var statearr_40408_40474 = state_40334__$1;
(statearr_40408_40474[(2)] = inst_40305);

(statearr_40408_40474[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (30))){
var state_40334__$1 = state_40334;
var statearr_40409_40475 = state_40334__$1;
(statearr_40409_40475[(2)] = null);

(statearr_40409_40475[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (10))){
var inst_40208 = (state_40334[(22)]);
var inst_40210 = cljs.core.chunked_seq_QMARK_.call(null,inst_40208);
var state_40334__$1 = state_40334;
if(inst_40210){
var statearr_40410_40476 = state_40334__$1;
(statearr_40410_40476[(1)] = (13));

} else {
var statearr_40411_40477 = state_40334__$1;
(statearr_40411_40477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (18))){
var inst_40242 = (state_40334[(2)]);
var state_40334__$1 = state_40334;
if(cljs.core.truth_(inst_40242)){
var statearr_40412_40478 = state_40334__$1;
(statearr_40412_40478[(1)] = (19));

} else {
var statearr_40413_40479 = state_40334__$1;
(statearr_40413_40479[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (42))){
var state_40334__$1 = state_40334;
var statearr_40414_40480 = state_40334__$1;
(statearr_40414_40480[(2)] = null);

(statearr_40414_40480[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (37))){
var inst_40300 = (state_40334[(2)]);
var state_40334__$1 = state_40334;
var statearr_40415_40481 = state_40334__$1;
(statearr_40415_40481[(2)] = inst_40300);

(statearr_40415_40481[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40335 === (8))){
var inst_40208 = (state_40334[(22)]);
var inst_40195 = (state_40334[(8)]);
var inst_40208__$1 = cljs.core.seq.call(null,inst_40195);
var state_40334__$1 = (function (){var statearr_40416 = state_40334;
(statearr_40416[(22)] = inst_40208__$1);

return statearr_40416;
})();
if(inst_40208__$1){
var statearr_40417_40482 = state_40334__$1;
(statearr_40417_40482[(1)] = (10));

} else {
var statearr_40418_40483 = state_40334__$1;
(statearr_40418_40483[(1)] = (11));

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
});})(c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34481__auto__,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto____0 = (function (){
var statearr_40422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40422[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto__);

(statearr_40422[(1)] = (1));

return statearr_40422;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto____1 = (function (state_40334){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_40334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e40423){if((e40423 instanceof Object)){
var ex__34485__auto__ = e40423;
var statearr_40424_40484 = state_40334;
(statearr_40424_40484[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40485 = state_40334;
state_40334 = G__40485;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto__ = function(state_40334){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto____1.call(this,state_40334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34595__auto__ = (function (){var statearr_40425 = f__34594__auto__.call(null);
(statearr_40425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34593__auto__);

return statearr_40425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34595__auto__);
});})(c__34593__auto__,map__40180,map__40180__$1,opts,before_jsload,on_jsload,reload_dependents,map__40181,map__40181__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34593__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40488,link){
var map__40491 = p__40488;
var map__40491__$1 = ((((!((map__40491 == null)))?((((map__40491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40491):map__40491);
var file = cljs.core.get.call(null,map__40491__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__40491,map__40491__$1,file){
return (function (p1__40486_SHARP_,p2__40487_SHARP_){
if(cljs.core._EQ_.call(null,p1__40486_SHARP_,p2__40487_SHARP_)){
return p1__40486_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__40491,map__40491__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40497){
var map__40498 = p__40497;
var map__40498__$1 = ((((!((map__40498 == null)))?((((map__40498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40498):map__40498);
var match_length = cljs.core.get.call(null,map__40498__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40498__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40493_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40493_SHARP_);
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
var args40500 = [];
var len__30779__auto___40503 = arguments.length;
var i__30780__auto___40504 = (0);
while(true){
if((i__30780__auto___40504 < len__30779__auto___40503)){
args40500.push((arguments[i__30780__auto___40504]));

var G__40505 = (i__30780__auto___40504 + (1));
i__30780__auto___40504 = G__40505;
continue;
} else {
}
break;
}

var G__40502 = args40500.length;
switch (G__40502) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40500.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40507_SHARP_,p2__40508_SHARP_){
return cljs.core.assoc.call(null,p1__40507_SHARP_,cljs.core.get.call(null,p2__40508_SHARP_,key),p2__40508_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__40509){
var map__40512 = p__40509;
var map__40512__$1 = ((((!((map__40512 == null)))?((((map__40512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40512):map__40512);
var f_data = map__40512__$1;
var file = cljs.core.get.call(null,map__40512__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40514,files_msg){
var map__40521 = p__40514;
var map__40521__$1 = ((((!((map__40521 == null)))?((((map__40521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40521):map__40521);
var opts = map__40521__$1;
var on_cssload = cljs.core.get.call(null,map__40521__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__40523_40527 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__40524_40528 = null;
var count__40525_40529 = (0);
var i__40526_40530 = (0);
while(true){
if((i__40526_40530 < count__40525_40529)){
var f_40531 = cljs.core._nth.call(null,chunk__40524_40528,i__40526_40530);
figwheel.client.file_reloading.reload_css_file.call(null,f_40531);

var G__40532 = seq__40523_40527;
var G__40533 = chunk__40524_40528;
var G__40534 = count__40525_40529;
var G__40535 = (i__40526_40530 + (1));
seq__40523_40527 = G__40532;
chunk__40524_40528 = G__40533;
count__40525_40529 = G__40534;
i__40526_40530 = G__40535;
continue;
} else {
var temp__4425__auto___40536 = cljs.core.seq.call(null,seq__40523_40527);
if(temp__4425__auto___40536){
var seq__40523_40537__$1 = temp__4425__auto___40536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40523_40537__$1)){
var c__30523__auto___40538 = cljs.core.chunk_first.call(null,seq__40523_40537__$1);
var G__40539 = cljs.core.chunk_rest.call(null,seq__40523_40537__$1);
var G__40540 = c__30523__auto___40538;
var G__40541 = cljs.core.count.call(null,c__30523__auto___40538);
var G__40542 = (0);
seq__40523_40527 = G__40539;
chunk__40524_40528 = G__40540;
count__40525_40529 = G__40541;
i__40526_40530 = G__40542;
continue;
} else {
var f_40543 = cljs.core.first.call(null,seq__40523_40537__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_40543);

var G__40544 = cljs.core.next.call(null,seq__40523_40537__$1);
var G__40545 = null;
var G__40546 = (0);
var G__40547 = (0);
seq__40523_40527 = G__40544;
chunk__40524_40528 = G__40545;
count__40525_40529 = G__40546;
i__40526_40530 = G__40547;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__40521,map__40521__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__40521,map__40521__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map