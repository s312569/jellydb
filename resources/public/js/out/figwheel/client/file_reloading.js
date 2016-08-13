// Compiled by ClojureScript 1.9.93 {}
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
var or__31084__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__31084__auto__){
return or__31084__auto__;
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
var or__31084__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__31084__auto__)){
return or__31084__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47642_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47642_SHARP_));
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
var seq__47647 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47648 = null;
var count__47649 = (0);
var i__47650 = (0);
while(true){
if((i__47650 < count__47649)){
var n = cljs.core._nth.call(null,chunk__47648,i__47650);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47651 = seq__47647;
var G__47652 = chunk__47648;
var G__47653 = count__47649;
var G__47654 = (i__47650 + (1));
seq__47647 = G__47651;
chunk__47648 = G__47652;
count__47649 = G__47653;
i__47650 = G__47654;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47647);
if(temp__4657__auto__){
var seq__47647__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47647__$1)){
var c__31895__auto__ = cljs.core.chunk_first.call(null,seq__47647__$1);
var G__47655 = cljs.core.chunk_rest.call(null,seq__47647__$1);
var G__47656 = c__31895__auto__;
var G__47657 = cljs.core.count.call(null,c__31895__auto__);
var G__47658 = (0);
seq__47647 = G__47655;
chunk__47648 = G__47656;
count__47649 = G__47657;
i__47650 = G__47658;
continue;
} else {
var n = cljs.core.first.call(null,seq__47647__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47659 = cljs.core.next.call(null,seq__47647__$1);
var G__47660 = null;
var G__47661 = (0);
var G__47662 = (0);
seq__47647 = G__47659;
chunk__47648 = G__47660;
count__47649 = G__47661;
i__47650 = G__47662;
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

var seq__47713_47724 = cljs.core.seq.call(null,deps);
var chunk__47714_47725 = null;
var count__47715_47726 = (0);
var i__47716_47727 = (0);
while(true){
if((i__47716_47727 < count__47715_47726)){
var dep_47728 = cljs.core._nth.call(null,chunk__47714_47725,i__47716_47727);
topo_sort_helper_STAR_.call(null,dep_47728,(depth + (1)),state);

var G__47729 = seq__47713_47724;
var G__47730 = chunk__47714_47725;
var G__47731 = count__47715_47726;
var G__47732 = (i__47716_47727 + (1));
seq__47713_47724 = G__47729;
chunk__47714_47725 = G__47730;
count__47715_47726 = G__47731;
i__47716_47727 = G__47732;
continue;
} else {
var temp__4657__auto___47733 = cljs.core.seq.call(null,seq__47713_47724);
if(temp__4657__auto___47733){
var seq__47713_47734__$1 = temp__4657__auto___47733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47713_47734__$1)){
var c__31895__auto___47735 = cljs.core.chunk_first.call(null,seq__47713_47734__$1);
var G__47736 = cljs.core.chunk_rest.call(null,seq__47713_47734__$1);
var G__47737 = c__31895__auto___47735;
var G__47738 = cljs.core.count.call(null,c__31895__auto___47735);
var G__47739 = (0);
seq__47713_47724 = G__47736;
chunk__47714_47725 = G__47737;
count__47715_47726 = G__47738;
i__47716_47727 = G__47739;
continue;
} else {
var dep_47740 = cljs.core.first.call(null,seq__47713_47734__$1);
topo_sort_helper_STAR_.call(null,dep_47740,(depth + (1)),state);

var G__47741 = cljs.core.next.call(null,seq__47713_47734__$1);
var G__47742 = null;
var G__47743 = (0);
var G__47744 = (0);
seq__47713_47724 = G__47741;
chunk__47714_47725 = G__47742;
count__47715_47726 = G__47743;
i__47716_47727 = G__47744;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47717){
var vec__47721 = p__47717;
var seq__47722 = cljs.core.seq.call(null,vec__47721);
var first__47723 = cljs.core.first.call(null,seq__47722);
var seq__47722__$1 = cljs.core.next.call(null,seq__47722);
var x = first__47723;
var xs = seq__47722__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47721,seq__47722,first__47723,seq__47722__$1,x,xs,get_deps__$1){
return (function (p1__47663_SHARP_){
return clojure.set.difference.call(null,p1__47663_SHARP_,x);
});})(vec__47721,seq__47722,first__47723,seq__47722__$1,x,xs,get_deps__$1))
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
var seq__47757 = cljs.core.seq.call(null,provides);
var chunk__47758 = null;
var count__47759 = (0);
var i__47760 = (0);
while(true){
if((i__47760 < count__47759)){
var prov = cljs.core._nth.call(null,chunk__47758,i__47760);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47761_47769 = cljs.core.seq.call(null,requires);
var chunk__47762_47770 = null;
var count__47763_47771 = (0);
var i__47764_47772 = (0);
while(true){
if((i__47764_47772 < count__47763_47771)){
var req_47773 = cljs.core._nth.call(null,chunk__47762_47770,i__47764_47772);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47773,prov);

var G__47774 = seq__47761_47769;
var G__47775 = chunk__47762_47770;
var G__47776 = count__47763_47771;
var G__47777 = (i__47764_47772 + (1));
seq__47761_47769 = G__47774;
chunk__47762_47770 = G__47775;
count__47763_47771 = G__47776;
i__47764_47772 = G__47777;
continue;
} else {
var temp__4657__auto___47778 = cljs.core.seq.call(null,seq__47761_47769);
if(temp__4657__auto___47778){
var seq__47761_47779__$1 = temp__4657__auto___47778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47761_47779__$1)){
var c__31895__auto___47780 = cljs.core.chunk_first.call(null,seq__47761_47779__$1);
var G__47781 = cljs.core.chunk_rest.call(null,seq__47761_47779__$1);
var G__47782 = c__31895__auto___47780;
var G__47783 = cljs.core.count.call(null,c__31895__auto___47780);
var G__47784 = (0);
seq__47761_47769 = G__47781;
chunk__47762_47770 = G__47782;
count__47763_47771 = G__47783;
i__47764_47772 = G__47784;
continue;
} else {
var req_47785 = cljs.core.first.call(null,seq__47761_47779__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47785,prov);

var G__47786 = cljs.core.next.call(null,seq__47761_47779__$1);
var G__47787 = null;
var G__47788 = (0);
var G__47789 = (0);
seq__47761_47769 = G__47786;
chunk__47762_47770 = G__47787;
count__47763_47771 = G__47788;
i__47764_47772 = G__47789;
continue;
}
} else {
}
}
break;
}

var G__47790 = seq__47757;
var G__47791 = chunk__47758;
var G__47792 = count__47759;
var G__47793 = (i__47760 + (1));
seq__47757 = G__47790;
chunk__47758 = G__47791;
count__47759 = G__47792;
i__47760 = G__47793;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47757);
if(temp__4657__auto__){
var seq__47757__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47757__$1)){
var c__31895__auto__ = cljs.core.chunk_first.call(null,seq__47757__$1);
var G__47794 = cljs.core.chunk_rest.call(null,seq__47757__$1);
var G__47795 = c__31895__auto__;
var G__47796 = cljs.core.count.call(null,c__31895__auto__);
var G__47797 = (0);
seq__47757 = G__47794;
chunk__47758 = G__47795;
count__47759 = G__47796;
i__47760 = G__47797;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47757__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47765_47798 = cljs.core.seq.call(null,requires);
var chunk__47766_47799 = null;
var count__47767_47800 = (0);
var i__47768_47801 = (0);
while(true){
if((i__47768_47801 < count__47767_47800)){
var req_47802 = cljs.core._nth.call(null,chunk__47766_47799,i__47768_47801);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47802,prov);

var G__47803 = seq__47765_47798;
var G__47804 = chunk__47766_47799;
var G__47805 = count__47767_47800;
var G__47806 = (i__47768_47801 + (1));
seq__47765_47798 = G__47803;
chunk__47766_47799 = G__47804;
count__47767_47800 = G__47805;
i__47768_47801 = G__47806;
continue;
} else {
var temp__4657__auto___47807__$1 = cljs.core.seq.call(null,seq__47765_47798);
if(temp__4657__auto___47807__$1){
var seq__47765_47808__$1 = temp__4657__auto___47807__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47765_47808__$1)){
var c__31895__auto___47809 = cljs.core.chunk_first.call(null,seq__47765_47808__$1);
var G__47810 = cljs.core.chunk_rest.call(null,seq__47765_47808__$1);
var G__47811 = c__31895__auto___47809;
var G__47812 = cljs.core.count.call(null,c__31895__auto___47809);
var G__47813 = (0);
seq__47765_47798 = G__47810;
chunk__47766_47799 = G__47811;
count__47767_47800 = G__47812;
i__47768_47801 = G__47813;
continue;
} else {
var req_47814 = cljs.core.first.call(null,seq__47765_47808__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47814,prov);

var G__47815 = cljs.core.next.call(null,seq__47765_47808__$1);
var G__47816 = null;
var G__47817 = (0);
var G__47818 = (0);
seq__47765_47798 = G__47815;
chunk__47766_47799 = G__47816;
count__47767_47800 = G__47817;
i__47768_47801 = G__47818;
continue;
}
} else {
}
}
break;
}

var G__47819 = cljs.core.next.call(null,seq__47757__$1);
var G__47820 = null;
var G__47821 = (0);
var G__47822 = (0);
seq__47757 = G__47819;
chunk__47758 = G__47820;
count__47759 = G__47821;
i__47760 = G__47822;
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
var seq__47827_47831 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47828_47832 = null;
var count__47829_47833 = (0);
var i__47830_47834 = (0);
while(true){
if((i__47830_47834 < count__47829_47833)){
var ns_47835 = cljs.core._nth.call(null,chunk__47828_47832,i__47830_47834);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47835);

var G__47836 = seq__47827_47831;
var G__47837 = chunk__47828_47832;
var G__47838 = count__47829_47833;
var G__47839 = (i__47830_47834 + (1));
seq__47827_47831 = G__47836;
chunk__47828_47832 = G__47837;
count__47829_47833 = G__47838;
i__47830_47834 = G__47839;
continue;
} else {
var temp__4657__auto___47840 = cljs.core.seq.call(null,seq__47827_47831);
if(temp__4657__auto___47840){
var seq__47827_47841__$1 = temp__4657__auto___47840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47827_47841__$1)){
var c__31895__auto___47842 = cljs.core.chunk_first.call(null,seq__47827_47841__$1);
var G__47843 = cljs.core.chunk_rest.call(null,seq__47827_47841__$1);
var G__47844 = c__31895__auto___47842;
var G__47845 = cljs.core.count.call(null,c__31895__auto___47842);
var G__47846 = (0);
seq__47827_47831 = G__47843;
chunk__47828_47832 = G__47844;
count__47829_47833 = G__47845;
i__47830_47834 = G__47846;
continue;
} else {
var ns_47847 = cljs.core.first.call(null,seq__47827_47841__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47847);

var G__47848 = cljs.core.next.call(null,seq__47827_47841__$1);
var G__47849 = null;
var G__47850 = (0);
var G__47851 = (0);
seq__47827_47831 = G__47848;
chunk__47828_47832 = G__47849;
count__47829_47833 = G__47850;
i__47830_47834 = G__47851;
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
goog.require_figwheel_backup_ = (function (){var or__31084__auto__ = goog.require__;
if(cljs.core.truth_(or__31084__auto__)){
return or__31084__auto__;
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
var G__47852__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47853__i = 0, G__47853__a = new Array(arguments.length -  0);
while (G__47853__i < G__47853__a.length) {G__47853__a[G__47853__i] = arguments[G__47853__i + 0]; ++G__47853__i;}
  args = new cljs.core.IndexedSeq(G__47853__a,0);
} 
return G__47852__delegate.call(this,args);};
G__47852.cljs$lang$maxFixedArity = 0;
G__47852.cljs$lang$applyTo = (function (arglist__47854){
var args = cljs.core.seq(arglist__47854);
return G__47852__delegate(args);
});
G__47852.cljs$core$IFn$_invoke$arity$variadic = G__47852__delegate;
return G__47852;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47856 = cljs.core._EQ_;
var expr__47857 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47856.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47857))){
var path_parts = ((function (pred__47856,expr__47857){
return (function (p1__47855_SHARP_){
return clojure.string.split.call(null,p1__47855_SHARP_,/[\/\\]/);
});})(pred__47856,expr__47857))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__47856,expr__47857){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47859){if((e47859 instanceof Error)){
var e = e47859;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47859;

}
}})());
});
;})(path_parts,sep,root,pred__47856,expr__47857))
} else {
if(cljs.core.truth_(pred__47856.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47857))){
return ((function (pred__47856,expr__47857){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__47856,expr__47857){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__47856,expr__47857))
);

return deferred.addErrback(((function (deferred,pred__47856,expr__47857){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__47856,expr__47857))
);
});
;})(pred__47856,expr__47857))
} else {
return ((function (pred__47856,expr__47857){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47856,expr__47857))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47860,callback){
var map__47863 = p__47860;
var map__47863__$1 = ((((!((map__47863 == null)))?((((map__47863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47863):map__47863);
var file_msg = map__47863__$1;
var request_url = cljs.core.get.call(null,map__47863__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__47863,map__47863__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47863,map__47863__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__37489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto__){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto__){
return (function (state_47887){
var state_val_47888 = (state_47887[(1)]);
if((state_val_47888 === (7))){
var inst_47883 = (state_47887[(2)]);
var state_47887__$1 = state_47887;
var statearr_47889_47909 = state_47887__$1;
(statearr_47889_47909[(2)] = inst_47883);

(statearr_47889_47909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47888 === (1))){
var state_47887__$1 = state_47887;
var statearr_47890_47910 = state_47887__$1;
(statearr_47890_47910[(2)] = null);

(statearr_47890_47910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47888 === (4))){
var inst_47867 = (state_47887[(7)]);
var inst_47867__$1 = (state_47887[(2)]);
var state_47887__$1 = (function (){var statearr_47891 = state_47887;
(statearr_47891[(7)] = inst_47867__$1);

return statearr_47891;
})();
if(cljs.core.truth_(inst_47867__$1)){
var statearr_47892_47911 = state_47887__$1;
(statearr_47892_47911[(1)] = (5));

} else {
var statearr_47893_47912 = state_47887__$1;
(statearr_47893_47912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47888 === (6))){
var state_47887__$1 = state_47887;
var statearr_47894_47913 = state_47887__$1;
(statearr_47894_47913[(2)] = null);

(statearr_47894_47913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47888 === (3))){
var inst_47885 = (state_47887[(2)]);
var state_47887__$1 = state_47887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47887__$1,inst_47885);
} else {
if((state_val_47888 === (2))){
var state_47887__$1 = state_47887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47887__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47888 === (11))){
var inst_47879 = (state_47887[(2)]);
var state_47887__$1 = (function (){var statearr_47895 = state_47887;
(statearr_47895[(8)] = inst_47879);

return statearr_47895;
})();
var statearr_47896_47914 = state_47887__$1;
(statearr_47896_47914[(2)] = null);

(statearr_47896_47914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47888 === (9))){
var inst_47873 = (state_47887[(9)]);
var inst_47871 = (state_47887[(10)]);
var inst_47875 = inst_47873.call(null,inst_47871);
var state_47887__$1 = state_47887;
var statearr_47897_47915 = state_47887__$1;
(statearr_47897_47915[(2)] = inst_47875);

(statearr_47897_47915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47888 === (5))){
var inst_47867 = (state_47887[(7)]);
var inst_47869 = figwheel.client.file_reloading.blocking_load.call(null,inst_47867);
var state_47887__$1 = state_47887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47887__$1,(8),inst_47869);
} else {
if((state_val_47888 === (10))){
var inst_47871 = (state_47887[(10)]);
var inst_47877 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47871);
var state_47887__$1 = state_47887;
var statearr_47898_47916 = state_47887__$1;
(statearr_47898_47916[(2)] = inst_47877);

(statearr_47898_47916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47888 === (8))){
var inst_47873 = (state_47887[(9)]);
var inst_47867 = (state_47887[(7)]);
var inst_47871 = (state_47887[(2)]);
var inst_47872 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47873__$1 = cljs.core.get.call(null,inst_47872,inst_47867);
var state_47887__$1 = (function (){var statearr_47899 = state_47887;
(statearr_47899[(9)] = inst_47873__$1);

(statearr_47899[(10)] = inst_47871);

return statearr_47899;
})();
if(cljs.core.truth_(inst_47873__$1)){
var statearr_47900_47917 = state_47887__$1;
(statearr_47900_47917[(1)] = (9));

} else {
var statearr_47901_47918 = state_47887__$1;
(statearr_47901_47918[(1)] = (10));

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
});})(c__37489__auto__))
;
return ((function (switch__37377__auto__,c__37489__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37378__auto__ = null;
var figwheel$client$file_reloading$state_machine__37378__auto____0 = (function (){
var statearr_47905 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47905[(0)] = figwheel$client$file_reloading$state_machine__37378__auto__);

(statearr_47905[(1)] = (1));

return statearr_47905;
});
var figwheel$client$file_reloading$state_machine__37378__auto____1 = (function (state_47887){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_47887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e47906){if((e47906 instanceof Object)){
var ex__37381__auto__ = e47906;
var statearr_47907_47919 = state_47887;
(statearr_47907_47919[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47920 = state_47887;
state_47887 = G__47920;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37378__auto__ = function(state_47887){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37378__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37378__auto____1.call(this,state_47887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37378__auto____0;
figwheel$client$file_reloading$state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37378__auto____1;
return figwheel$client$file_reloading$state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto__))
})();
var state__37491__auto__ = (function (){var statearr_47908 = f__37490__auto__.call(null);
(statearr_47908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto__);

return statearr_47908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto__))
);

return c__37489__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47921,callback){
var map__47924 = p__47921;
var map__47924__$1 = ((((!((map__47924 == null)))?((((map__47924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47924):map__47924);
var file_msg = map__47924__$1;
var namespace = cljs.core.get.call(null,map__47924__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47924,map__47924__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47924,map__47924__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47926){
var map__47929 = p__47926;
var map__47929__$1 = ((((!((map__47929 == null)))?((((map__47929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47929):map__47929);
var file_msg = map__47929__$1;
var namespace = cljs.core.get.call(null,map__47929__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__31072__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__31072__auto__){
var or__31084__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__31084__auto__)){
return or__31084__auto__;
} else {
var or__31084__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__31084__auto____$1)){
return or__31084__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__31072__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47931,callback){
var map__47934 = p__47931;
var map__47934__$1 = ((((!((map__47934 == null)))?((((map__47934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47934):map__47934);
var file_msg = map__47934__$1;
var request_url = cljs.core.get.call(null,map__47934__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47934__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__37489__auto___48038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto___48038,out){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto___48038,out){
return (function (state_48020){
var state_val_48021 = (state_48020[(1)]);
if((state_val_48021 === (1))){
var inst_47994 = cljs.core.seq.call(null,files);
var inst_47995 = cljs.core.first.call(null,inst_47994);
var inst_47996 = cljs.core.next.call(null,inst_47994);
var inst_47997 = files;
var state_48020__$1 = (function (){var statearr_48022 = state_48020;
(statearr_48022[(7)] = inst_47997);

(statearr_48022[(8)] = inst_47996);

(statearr_48022[(9)] = inst_47995);

return statearr_48022;
})();
var statearr_48023_48039 = state_48020__$1;
(statearr_48023_48039[(2)] = null);

(statearr_48023_48039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (2))){
var inst_48003 = (state_48020[(10)]);
var inst_47997 = (state_48020[(7)]);
var inst_48002 = cljs.core.seq.call(null,inst_47997);
var inst_48003__$1 = cljs.core.first.call(null,inst_48002);
var inst_48004 = cljs.core.next.call(null,inst_48002);
var inst_48005 = (inst_48003__$1 == null);
var inst_48006 = cljs.core.not.call(null,inst_48005);
var state_48020__$1 = (function (){var statearr_48024 = state_48020;
(statearr_48024[(10)] = inst_48003__$1);

(statearr_48024[(11)] = inst_48004);

return statearr_48024;
})();
if(inst_48006){
var statearr_48025_48040 = state_48020__$1;
(statearr_48025_48040[(1)] = (4));

} else {
var statearr_48026_48041 = state_48020__$1;
(statearr_48026_48041[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (3))){
var inst_48018 = (state_48020[(2)]);
var state_48020__$1 = state_48020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48020__$1,inst_48018);
} else {
if((state_val_48021 === (4))){
var inst_48003 = (state_48020[(10)]);
var inst_48008 = figwheel.client.file_reloading.reload_js_file.call(null,inst_48003);
var state_48020__$1 = state_48020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48020__$1,(7),inst_48008);
} else {
if((state_val_48021 === (5))){
var inst_48014 = cljs.core.async.close_BANG_.call(null,out);
var state_48020__$1 = state_48020;
var statearr_48027_48042 = state_48020__$1;
(statearr_48027_48042[(2)] = inst_48014);

(statearr_48027_48042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (6))){
var inst_48016 = (state_48020[(2)]);
var state_48020__$1 = state_48020;
var statearr_48028_48043 = state_48020__$1;
(statearr_48028_48043[(2)] = inst_48016);

(statearr_48028_48043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (7))){
var inst_48004 = (state_48020[(11)]);
var inst_48010 = (state_48020[(2)]);
var inst_48011 = cljs.core.async.put_BANG_.call(null,out,inst_48010);
var inst_47997 = inst_48004;
var state_48020__$1 = (function (){var statearr_48029 = state_48020;
(statearr_48029[(7)] = inst_47997);

(statearr_48029[(12)] = inst_48011);

return statearr_48029;
})();
var statearr_48030_48044 = state_48020__$1;
(statearr_48030_48044[(2)] = null);

(statearr_48030_48044[(1)] = (2));


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
});})(c__37489__auto___48038,out))
;
return ((function (switch__37377__auto__,c__37489__auto___48038,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37378__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37378__auto____0 = (function (){
var statearr_48034 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48034[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37378__auto__);

(statearr_48034[(1)] = (1));

return statearr_48034;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37378__auto____1 = (function (state_48020){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_48020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e48035){if((e48035 instanceof Object)){
var ex__37381__auto__ = e48035;
var statearr_48036_48045 = state_48020;
(statearr_48036_48045[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48046 = state_48020;
state_48020 = G__48046;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37378__auto__ = function(state_48020){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37378__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37378__auto____1.call(this,state_48020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37378__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37378__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto___48038,out))
})();
var state__37491__auto__ = (function (){var statearr_48037 = f__37490__auto__.call(null);
(statearr_48037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto___48038);

return statearr_48037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto___48038,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__48047,opts){
var map__48051 = p__48047;
var map__48051__$1 = ((((!((map__48051 == null)))?((((map__48051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48051):map__48051);
var eval_body__$1 = cljs.core.get.call(null,map__48051__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__48051__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__31072__auto__ = eval_body__$1;
if(cljs.core.truth_(and__31072__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__31072__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e48053){var e = e48053;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__48054_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48054_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__48063){
var vec__48064 = p__48063;
var k = cljs.core.nth.call(null,vec__48064,(0),null);
var v = cljs.core.nth.call(null,vec__48064,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__48067){
var vec__48068 = p__48067;
var k = cljs.core.nth.call(null,vec__48068,(0),null);
var v = cljs.core.nth.call(null,vec__48068,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__48074,p__48075){
var map__48322 = p__48074;
var map__48322__$1 = ((((!((map__48322 == null)))?((((map__48322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48322):map__48322);
var opts = map__48322__$1;
var before_jsload = cljs.core.get.call(null,map__48322__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__48322__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__48322__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__48323 = p__48075;
var map__48323__$1 = ((((!((map__48323 == null)))?((((map__48323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48323):map__48323);
var msg = map__48323__$1;
var files = cljs.core.get.call(null,map__48323__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__48323__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__48323__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37490__auto__ = (function (){var switch__37377__auto__ = ((function (c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_48476){
var state_val_48477 = (state_48476[(1)]);
if((state_val_48477 === (7))){
var inst_48340 = (state_48476[(7)]);
var inst_48338 = (state_48476[(8)]);
var inst_48339 = (state_48476[(9)]);
var inst_48337 = (state_48476[(10)]);
var inst_48345 = cljs.core._nth.call(null,inst_48338,inst_48340);
var inst_48346 = figwheel.client.file_reloading.eval_body.call(null,inst_48345,opts);
var inst_48347 = (inst_48340 + (1));
var tmp48478 = inst_48338;
var tmp48479 = inst_48339;
var tmp48480 = inst_48337;
var inst_48337__$1 = tmp48480;
var inst_48338__$1 = tmp48478;
var inst_48339__$1 = tmp48479;
var inst_48340__$1 = inst_48347;
var state_48476__$1 = (function (){var statearr_48481 = state_48476;
(statearr_48481[(11)] = inst_48346);

(statearr_48481[(7)] = inst_48340__$1);

(statearr_48481[(8)] = inst_48338__$1);

(statearr_48481[(9)] = inst_48339__$1);

(statearr_48481[(10)] = inst_48337__$1);

return statearr_48481;
})();
var statearr_48482_48568 = state_48476__$1;
(statearr_48482_48568[(2)] = null);

(statearr_48482_48568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (20))){
var inst_48380 = (state_48476[(12)]);
var inst_48388 = figwheel.client.file_reloading.sort_files.call(null,inst_48380);
var state_48476__$1 = state_48476;
var statearr_48483_48569 = state_48476__$1;
(statearr_48483_48569[(2)] = inst_48388);

(statearr_48483_48569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (27))){
var state_48476__$1 = state_48476;
var statearr_48484_48570 = state_48476__$1;
(statearr_48484_48570[(2)] = null);

(statearr_48484_48570[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (1))){
var inst_48329 = (state_48476[(13)]);
var inst_48326 = before_jsload.call(null,files);
var inst_48327 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_48328 = (function (){return ((function (inst_48329,inst_48326,inst_48327,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48071_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48071_SHARP_);
});
;})(inst_48329,inst_48326,inst_48327,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48329__$1 = cljs.core.filter.call(null,inst_48328,files);
var inst_48330 = cljs.core.not_empty.call(null,inst_48329__$1);
var state_48476__$1 = (function (){var statearr_48485 = state_48476;
(statearr_48485[(14)] = inst_48327);

(statearr_48485[(15)] = inst_48326);

(statearr_48485[(13)] = inst_48329__$1);

return statearr_48485;
})();
if(cljs.core.truth_(inst_48330)){
var statearr_48486_48571 = state_48476__$1;
(statearr_48486_48571[(1)] = (2));

} else {
var statearr_48487_48572 = state_48476__$1;
(statearr_48487_48572[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (24))){
var state_48476__$1 = state_48476;
var statearr_48488_48573 = state_48476__$1;
(statearr_48488_48573[(2)] = null);

(statearr_48488_48573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (39))){
var inst_48430 = (state_48476[(16)]);
var state_48476__$1 = state_48476;
var statearr_48489_48574 = state_48476__$1;
(statearr_48489_48574[(2)] = inst_48430);

(statearr_48489_48574[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (46))){
var inst_48471 = (state_48476[(2)]);
var state_48476__$1 = state_48476;
var statearr_48490_48575 = state_48476__$1;
(statearr_48490_48575[(2)] = inst_48471);

(statearr_48490_48575[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (4))){
var inst_48374 = (state_48476[(2)]);
var inst_48375 = cljs.core.List.EMPTY;
var inst_48376 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_48375);
var inst_48377 = (function (){return ((function (inst_48374,inst_48375,inst_48376,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48072_SHARP_){
var and__31072__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48072_SHARP_);
if(cljs.core.truth_(and__31072__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48072_SHARP_));
} else {
return and__31072__auto__;
}
});
;})(inst_48374,inst_48375,inst_48376,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48378 = cljs.core.filter.call(null,inst_48377,files);
var inst_48379 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_48380 = cljs.core.concat.call(null,inst_48378,inst_48379);
var state_48476__$1 = (function (){var statearr_48491 = state_48476;
(statearr_48491[(12)] = inst_48380);

(statearr_48491[(17)] = inst_48374);

(statearr_48491[(18)] = inst_48376);

return statearr_48491;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48492_48576 = state_48476__$1;
(statearr_48492_48576[(1)] = (16));

} else {
var statearr_48493_48577 = state_48476__$1;
(statearr_48493_48577[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (15))){
var inst_48364 = (state_48476[(2)]);
var state_48476__$1 = state_48476;
var statearr_48494_48578 = state_48476__$1;
(statearr_48494_48578[(2)] = inst_48364);

(statearr_48494_48578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (21))){
var inst_48390 = (state_48476[(19)]);
var inst_48390__$1 = (state_48476[(2)]);
var inst_48391 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_48390__$1);
var state_48476__$1 = (function (){var statearr_48495 = state_48476;
(statearr_48495[(19)] = inst_48390__$1);

return statearr_48495;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48476__$1,(22),inst_48391);
} else {
if((state_val_48477 === (31))){
var inst_48474 = (state_48476[(2)]);
var state_48476__$1 = state_48476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48476__$1,inst_48474);
} else {
if((state_val_48477 === (32))){
var inst_48430 = (state_48476[(16)]);
var inst_48435 = inst_48430.cljs$lang$protocol_mask$partition0$;
var inst_48436 = (inst_48435 & (64));
var inst_48437 = inst_48430.cljs$core$ISeq$;
var inst_48438 = (inst_48436) || (inst_48437);
var state_48476__$1 = state_48476;
if(cljs.core.truth_(inst_48438)){
var statearr_48496_48579 = state_48476__$1;
(statearr_48496_48579[(1)] = (35));

} else {
var statearr_48497_48580 = state_48476__$1;
(statearr_48497_48580[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (40))){
var inst_48451 = (state_48476[(20)]);
var inst_48450 = (state_48476[(2)]);
var inst_48451__$1 = cljs.core.get.call(null,inst_48450,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48452 = cljs.core.get.call(null,inst_48450,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48453 = cljs.core.not_empty.call(null,inst_48451__$1);
var state_48476__$1 = (function (){var statearr_48498 = state_48476;
(statearr_48498[(20)] = inst_48451__$1);

(statearr_48498[(21)] = inst_48452);

return statearr_48498;
})();
if(cljs.core.truth_(inst_48453)){
var statearr_48499_48581 = state_48476__$1;
(statearr_48499_48581[(1)] = (41));

} else {
var statearr_48500_48582 = state_48476__$1;
(statearr_48500_48582[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (33))){
var state_48476__$1 = state_48476;
var statearr_48501_48583 = state_48476__$1;
(statearr_48501_48583[(2)] = false);

(statearr_48501_48583[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (13))){
var inst_48350 = (state_48476[(22)]);
var inst_48354 = cljs.core.chunk_first.call(null,inst_48350);
var inst_48355 = cljs.core.chunk_rest.call(null,inst_48350);
var inst_48356 = cljs.core.count.call(null,inst_48354);
var inst_48337 = inst_48355;
var inst_48338 = inst_48354;
var inst_48339 = inst_48356;
var inst_48340 = (0);
var state_48476__$1 = (function (){var statearr_48502 = state_48476;
(statearr_48502[(7)] = inst_48340);

(statearr_48502[(8)] = inst_48338);

(statearr_48502[(9)] = inst_48339);

(statearr_48502[(10)] = inst_48337);

return statearr_48502;
})();
var statearr_48503_48584 = state_48476__$1;
(statearr_48503_48584[(2)] = null);

(statearr_48503_48584[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (22))){
var inst_48394 = (state_48476[(23)]);
var inst_48398 = (state_48476[(24)]);
var inst_48393 = (state_48476[(25)]);
var inst_48390 = (state_48476[(19)]);
var inst_48393__$1 = (state_48476[(2)]);
var inst_48394__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48393__$1);
var inst_48395 = (function (){var all_files = inst_48390;
var res_SINGLEQUOTE_ = inst_48393__$1;
var res = inst_48394__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_48394,inst_48398,inst_48393,inst_48390,inst_48393__$1,inst_48394__$1,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__48073_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__48073_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_48394,inst_48398,inst_48393,inst_48390,inst_48393__$1,inst_48394__$1,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48396 = cljs.core.filter.call(null,inst_48395,inst_48393__$1);
var inst_48397 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48398__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48397);
var inst_48399 = cljs.core.not_empty.call(null,inst_48398__$1);
var state_48476__$1 = (function (){var statearr_48504 = state_48476;
(statearr_48504[(23)] = inst_48394__$1);

(statearr_48504[(24)] = inst_48398__$1);

(statearr_48504[(25)] = inst_48393__$1);

(statearr_48504[(26)] = inst_48396);

return statearr_48504;
})();
if(cljs.core.truth_(inst_48399)){
var statearr_48505_48585 = state_48476__$1;
(statearr_48505_48585[(1)] = (23));

} else {
var statearr_48506_48586 = state_48476__$1;
(statearr_48506_48586[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (36))){
var state_48476__$1 = state_48476;
var statearr_48507_48587 = state_48476__$1;
(statearr_48507_48587[(2)] = false);

(statearr_48507_48587[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (41))){
var inst_48451 = (state_48476[(20)]);
var inst_48455 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48456 = cljs.core.map.call(null,inst_48455,inst_48451);
var inst_48457 = cljs.core.pr_str.call(null,inst_48456);
var inst_48458 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_48457)].join('');
var inst_48459 = figwheel.client.utils.log.call(null,inst_48458);
var state_48476__$1 = state_48476;
var statearr_48508_48588 = state_48476__$1;
(statearr_48508_48588[(2)] = inst_48459);

(statearr_48508_48588[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (43))){
var inst_48452 = (state_48476[(21)]);
var inst_48462 = (state_48476[(2)]);
var inst_48463 = cljs.core.not_empty.call(null,inst_48452);
var state_48476__$1 = (function (){var statearr_48509 = state_48476;
(statearr_48509[(27)] = inst_48462);

return statearr_48509;
})();
if(cljs.core.truth_(inst_48463)){
var statearr_48510_48589 = state_48476__$1;
(statearr_48510_48589[(1)] = (44));

} else {
var statearr_48511_48590 = state_48476__$1;
(statearr_48511_48590[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (29))){
var inst_48394 = (state_48476[(23)]);
var inst_48398 = (state_48476[(24)]);
var inst_48393 = (state_48476[(25)]);
var inst_48396 = (state_48476[(26)]);
var inst_48430 = (state_48476[(16)]);
var inst_48390 = (state_48476[(19)]);
var inst_48426 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48429 = (function (){var all_files = inst_48390;
var res_SINGLEQUOTE_ = inst_48393;
var res = inst_48394;
var files_not_loaded = inst_48396;
var dependencies_that_loaded = inst_48398;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48394,inst_48398,inst_48393,inst_48396,inst_48430,inst_48390,inst_48426,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48428){
var map__48512 = p__48428;
var map__48512__$1 = ((((!((map__48512 == null)))?((((map__48512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48512):map__48512);
var namespace = cljs.core.get.call(null,map__48512__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48394,inst_48398,inst_48393,inst_48396,inst_48430,inst_48390,inst_48426,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48430__$1 = cljs.core.group_by.call(null,inst_48429,inst_48396);
var inst_48432 = (inst_48430__$1 == null);
var inst_48433 = cljs.core.not.call(null,inst_48432);
var state_48476__$1 = (function (){var statearr_48514 = state_48476;
(statearr_48514[(16)] = inst_48430__$1);

(statearr_48514[(28)] = inst_48426);

return statearr_48514;
})();
if(inst_48433){
var statearr_48515_48591 = state_48476__$1;
(statearr_48515_48591[(1)] = (32));

} else {
var statearr_48516_48592 = state_48476__$1;
(statearr_48516_48592[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (44))){
var inst_48452 = (state_48476[(21)]);
var inst_48465 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48452);
var inst_48466 = cljs.core.pr_str.call(null,inst_48465);
var inst_48467 = [cljs.core.str("not required: "),cljs.core.str(inst_48466)].join('');
var inst_48468 = figwheel.client.utils.log.call(null,inst_48467);
var state_48476__$1 = state_48476;
var statearr_48517_48593 = state_48476__$1;
(statearr_48517_48593[(2)] = inst_48468);

(statearr_48517_48593[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (6))){
var inst_48371 = (state_48476[(2)]);
var state_48476__$1 = state_48476;
var statearr_48518_48594 = state_48476__$1;
(statearr_48518_48594[(2)] = inst_48371);

(statearr_48518_48594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (28))){
var inst_48396 = (state_48476[(26)]);
var inst_48423 = (state_48476[(2)]);
var inst_48424 = cljs.core.not_empty.call(null,inst_48396);
var state_48476__$1 = (function (){var statearr_48519 = state_48476;
(statearr_48519[(29)] = inst_48423);

return statearr_48519;
})();
if(cljs.core.truth_(inst_48424)){
var statearr_48520_48595 = state_48476__$1;
(statearr_48520_48595[(1)] = (29));

} else {
var statearr_48521_48596 = state_48476__$1;
(statearr_48521_48596[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (25))){
var inst_48394 = (state_48476[(23)]);
var inst_48410 = (state_48476[(2)]);
var inst_48411 = cljs.core.not_empty.call(null,inst_48394);
var state_48476__$1 = (function (){var statearr_48522 = state_48476;
(statearr_48522[(30)] = inst_48410);

return statearr_48522;
})();
if(cljs.core.truth_(inst_48411)){
var statearr_48523_48597 = state_48476__$1;
(statearr_48523_48597[(1)] = (26));

} else {
var statearr_48524_48598 = state_48476__$1;
(statearr_48524_48598[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (34))){
var inst_48445 = (state_48476[(2)]);
var state_48476__$1 = state_48476;
if(cljs.core.truth_(inst_48445)){
var statearr_48525_48599 = state_48476__$1;
(statearr_48525_48599[(1)] = (38));

} else {
var statearr_48526_48600 = state_48476__$1;
(statearr_48526_48600[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (17))){
var state_48476__$1 = state_48476;
var statearr_48527_48601 = state_48476__$1;
(statearr_48527_48601[(2)] = recompile_dependents);

(statearr_48527_48601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (3))){
var state_48476__$1 = state_48476;
var statearr_48528_48602 = state_48476__$1;
(statearr_48528_48602[(2)] = null);

(statearr_48528_48602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (12))){
var inst_48367 = (state_48476[(2)]);
var state_48476__$1 = state_48476;
var statearr_48529_48603 = state_48476__$1;
(statearr_48529_48603[(2)] = inst_48367);

(statearr_48529_48603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (2))){
var inst_48329 = (state_48476[(13)]);
var inst_48336 = cljs.core.seq.call(null,inst_48329);
var inst_48337 = inst_48336;
var inst_48338 = null;
var inst_48339 = (0);
var inst_48340 = (0);
var state_48476__$1 = (function (){var statearr_48530 = state_48476;
(statearr_48530[(7)] = inst_48340);

(statearr_48530[(8)] = inst_48338);

(statearr_48530[(9)] = inst_48339);

(statearr_48530[(10)] = inst_48337);

return statearr_48530;
})();
var statearr_48531_48604 = state_48476__$1;
(statearr_48531_48604[(2)] = null);

(statearr_48531_48604[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (23))){
var inst_48394 = (state_48476[(23)]);
var inst_48398 = (state_48476[(24)]);
var inst_48393 = (state_48476[(25)]);
var inst_48396 = (state_48476[(26)]);
var inst_48390 = (state_48476[(19)]);
var inst_48401 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48403 = (function (){var all_files = inst_48390;
var res_SINGLEQUOTE_ = inst_48393;
var res = inst_48394;
var files_not_loaded = inst_48396;
var dependencies_that_loaded = inst_48398;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48394,inst_48398,inst_48393,inst_48396,inst_48390,inst_48401,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48402){
var map__48532 = p__48402;
var map__48532__$1 = ((((!((map__48532 == null)))?((((map__48532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48532):map__48532);
var request_url = cljs.core.get.call(null,map__48532__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48394,inst_48398,inst_48393,inst_48396,inst_48390,inst_48401,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48404 = cljs.core.reverse.call(null,inst_48398);
var inst_48405 = cljs.core.map.call(null,inst_48403,inst_48404);
var inst_48406 = cljs.core.pr_str.call(null,inst_48405);
var inst_48407 = figwheel.client.utils.log.call(null,inst_48406);
var state_48476__$1 = (function (){var statearr_48534 = state_48476;
(statearr_48534[(31)] = inst_48401);

return statearr_48534;
})();
var statearr_48535_48605 = state_48476__$1;
(statearr_48535_48605[(2)] = inst_48407);

(statearr_48535_48605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (35))){
var state_48476__$1 = state_48476;
var statearr_48536_48606 = state_48476__$1;
(statearr_48536_48606[(2)] = true);

(statearr_48536_48606[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (19))){
var inst_48380 = (state_48476[(12)]);
var inst_48386 = figwheel.client.file_reloading.expand_files.call(null,inst_48380);
var state_48476__$1 = state_48476;
var statearr_48537_48607 = state_48476__$1;
(statearr_48537_48607[(2)] = inst_48386);

(statearr_48537_48607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (11))){
var state_48476__$1 = state_48476;
var statearr_48538_48608 = state_48476__$1;
(statearr_48538_48608[(2)] = null);

(statearr_48538_48608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (9))){
var inst_48369 = (state_48476[(2)]);
var state_48476__$1 = state_48476;
var statearr_48539_48609 = state_48476__$1;
(statearr_48539_48609[(2)] = inst_48369);

(statearr_48539_48609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (5))){
var inst_48340 = (state_48476[(7)]);
var inst_48339 = (state_48476[(9)]);
var inst_48342 = (inst_48340 < inst_48339);
var inst_48343 = inst_48342;
var state_48476__$1 = state_48476;
if(cljs.core.truth_(inst_48343)){
var statearr_48540_48610 = state_48476__$1;
(statearr_48540_48610[(1)] = (7));

} else {
var statearr_48541_48611 = state_48476__$1;
(statearr_48541_48611[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (14))){
var inst_48350 = (state_48476[(22)]);
var inst_48359 = cljs.core.first.call(null,inst_48350);
var inst_48360 = figwheel.client.file_reloading.eval_body.call(null,inst_48359,opts);
var inst_48361 = cljs.core.next.call(null,inst_48350);
var inst_48337 = inst_48361;
var inst_48338 = null;
var inst_48339 = (0);
var inst_48340 = (0);
var state_48476__$1 = (function (){var statearr_48542 = state_48476;
(statearr_48542[(7)] = inst_48340);

(statearr_48542[(8)] = inst_48338);

(statearr_48542[(9)] = inst_48339);

(statearr_48542[(32)] = inst_48360);

(statearr_48542[(10)] = inst_48337);

return statearr_48542;
})();
var statearr_48543_48612 = state_48476__$1;
(statearr_48543_48612[(2)] = null);

(statearr_48543_48612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (45))){
var state_48476__$1 = state_48476;
var statearr_48544_48613 = state_48476__$1;
(statearr_48544_48613[(2)] = null);

(statearr_48544_48613[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (26))){
var inst_48394 = (state_48476[(23)]);
var inst_48398 = (state_48476[(24)]);
var inst_48393 = (state_48476[(25)]);
var inst_48396 = (state_48476[(26)]);
var inst_48390 = (state_48476[(19)]);
var inst_48413 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48415 = (function (){var all_files = inst_48390;
var res_SINGLEQUOTE_ = inst_48393;
var res = inst_48394;
var files_not_loaded = inst_48396;
var dependencies_that_loaded = inst_48398;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48394,inst_48398,inst_48393,inst_48396,inst_48390,inst_48413,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48414){
var map__48545 = p__48414;
var map__48545__$1 = ((((!((map__48545 == null)))?((((map__48545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48545):map__48545);
var namespace = cljs.core.get.call(null,map__48545__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48545__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48394,inst_48398,inst_48393,inst_48396,inst_48390,inst_48413,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48416 = cljs.core.map.call(null,inst_48415,inst_48394);
var inst_48417 = cljs.core.pr_str.call(null,inst_48416);
var inst_48418 = figwheel.client.utils.log.call(null,inst_48417);
var inst_48419 = (function (){var all_files = inst_48390;
var res_SINGLEQUOTE_ = inst_48393;
var res = inst_48394;
var files_not_loaded = inst_48396;
var dependencies_that_loaded = inst_48398;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48394,inst_48398,inst_48393,inst_48396,inst_48390,inst_48413,inst_48415,inst_48416,inst_48417,inst_48418,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48394,inst_48398,inst_48393,inst_48396,inst_48390,inst_48413,inst_48415,inst_48416,inst_48417,inst_48418,state_val_48477,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48420 = setTimeout(inst_48419,(10));
var state_48476__$1 = (function (){var statearr_48547 = state_48476;
(statearr_48547[(33)] = inst_48413);

(statearr_48547[(34)] = inst_48418);

return statearr_48547;
})();
var statearr_48548_48614 = state_48476__$1;
(statearr_48548_48614[(2)] = inst_48420);

(statearr_48548_48614[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (16))){
var state_48476__$1 = state_48476;
var statearr_48549_48615 = state_48476__$1;
(statearr_48549_48615[(2)] = reload_dependents);

(statearr_48549_48615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (38))){
var inst_48430 = (state_48476[(16)]);
var inst_48447 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48430);
var state_48476__$1 = state_48476;
var statearr_48550_48616 = state_48476__$1;
(statearr_48550_48616[(2)] = inst_48447);

(statearr_48550_48616[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (30))){
var state_48476__$1 = state_48476;
var statearr_48551_48617 = state_48476__$1;
(statearr_48551_48617[(2)] = null);

(statearr_48551_48617[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (10))){
var inst_48350 = (state_48476[(22)]);
var inst_48352 = cljs.core.chunked_seq_QMARK_.call(null,inst_48350);
var state_48476__$1 = state_48476;
if(inst_48352){
var statearr_48552_48618 = state_48476__$1;
(statearr_48552_48618[(1)] = (13));

} else {
var statearr_48553_48619 = state_48476__$1;
(statearr_48553_48619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (18))){
var inst_48384 = (state_48476[(2)]);
var state_48476__$1 = state_48476;
if(cljs.core.truth_(inst_48384)){
var statearr_48554_48620 = state_48476__$1;
(statearr_48554_48620[(1)] = (19));

} else {
var statearr_48555_48621 = state_48476__$1;
(statearr_48555_48621[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (42))){
var state_48476__$1 = state_48476;
var statearr_48556_48622 = state_48476__$1;
(statearr_48556_48622[(2)] = null);

(statearr_48556_48622[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (37))){
var inst_48442 = (state_48476[(2)]);
var state_48476__$1 = state_48476;
var statearr_48557_48623 = state_48476__$1;
(statearr_48557_48623[(2)] = inst_48442);

(statearr_48557_48623[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (8))){
var inst_48350 = (state_48476[(22)]);
var inst_48337 = (state_48476[(10)]);
var inst_48350__$1 = cljs.core.seq.call(null,inst_48337);
var state_48476__$1 = (function (){var statearr_48558 = state_48476;
(statearr_48558[(22)] = inst_48350__$1);

return statearr_48558;
})();
if(inst_48350__$1){
var statearr_48559_48624 = state_48476__$1;
(statearr_48559_48624[(1)] = (10));

} else {
var statearr_48560_48625 = state_48476__$1;
(statearr_48560_48625[(1)] = (11));

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
});})(c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37377__auto__,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37378__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37378__auto____0 = (function (){
var statearr_48564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48564[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37378__auto__);

(statearr_48564[(1)] = (1));

return statearr_48564;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37378__auto____1 = (function (state_48476){
while(true){
var ret_value__37379__auto__ = (function (){try{while(true){
var result__37380__auto__ = switch__37377__auto__.call(null,state_48476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37380__auto__;
}
break;
}
}catch (e48565){if((e48565 instanceof Object)){
var ex__37381__auto__ = e48565;
var statearr_48566_48626 = state_48476;
(statearr_48566_48626[(5)] = ex__37381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48627 = state_48476;
state_48476 = G__48627;
continue;
} else {
return ret_value__37379__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37378__auto__ = function(state_48476){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37378__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37378__auto____1.call(this,state_48476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37378__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37378__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37378__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37378__auto__;
})()
;})(switch__37377__auto__,c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37491__auto__ = (function (){var statearr_48567 = f__37490__auto__.call(null);
(statearr_48567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37489__auto__);

return statearr_48567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37491__auto__);
});})(c__37489__auto__,map__48322,map__48322__$1,opts,before_jsload,on_jsload,reload_dependents,map__48323,map__48323__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37489__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48630,link){
var map__48633 = p__48630;
var map__48633__$1 = ((((!((map__48633 == null)))?((((map__48633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48633):map__48633);
var file = cljs.core.get.call(null,map__48633__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__48633,map__48633__$1,file){
return (function (p1__48628_SHARP_,p2__48629_SHARP_){
if(cljs.core._EQ_.call(null,p1__48628_SHARP_,p2__48629_SHARP_)){
return p1__48628_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__48633,map__48633__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48639){
var map__48640 = p__48639;
var map__48640__$1 = ((((!((map__48640 == null)))?((((map__48640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48640):map__48640);
var match_length = cljs.core.get.call(null,map__48640__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48640__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48635_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48635_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
var args48642 = [];
var len__32159__auto___48645 = arguments.length;
var i__32160__auto___48646 = (0);
while(true){
if((i__32160__auto___48646 < len__32159__auto___48645)){
args48642.push((arguments[i__32160__auto___48646]));

var G__48647 = (i__32160__auto___48646 + (1));
i__32160__auto___48646 = G__48647;
continue;
} else {
}
break;
}

var G__48644 = args48642.length;
switch (G__48644) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48642.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48649_SHARP_,p2__48650_SHARP_){
return cljs.core.assoc.call(null,p1__48649_SHARP_,cljs.core.get.call(null,p2__48650_SHARP_,key),p2__48650_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__48651){
var map__48654 = p__48651;
var map__48654__$1 = ((((!((map__48654 == null)))?((((map__48654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48654):map__48654);
var f_data = map__48654__$1;
var file = cljs.core.get.call(null,map__48654__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48656,files_msg){
var map__48663 = p__48656;
var map__48663__$1 = ((((!((map__48663 == null)))?((((map__48663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48663):map__48663);
var opts = map__48663__$1;
var on_cssload = cljs.core.get.call(null,map__48663__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__48665_48669 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__48666_48670 = null;
var count__48667_48671 = (0);
var i__48668_48672 = (0);
while(true){
if((i__48668_48672 < count__48667_48671)){
var f_48673 = cljs.core._nth.call(null,chunk__48666_48670,i__48668_48672);
figwheel.client.file_reloading.reload_css_file.call(null,f_48673);

var G__48674 = seq__48665_48669;
var G__48675 = chunk__48666_48670;
var G__48676 = count__48667_48671;
var G__48677 = (i__48668_48672 + (1));
seq__48665_48669 = G__48674;
chunk__48666_48670 = G__48675;
count__48667_48671 = G__48676;
i__48668_48672 = G__48677;
continue;
} else {
var temp__4657__auto___48678 = cljs.core.seq.call(null,seq__48665_48669);
if(temp__4657__auto___48678){
var seq__48665_48679__$1 = temp__4657__auto___48678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48665_48679__$1)){
var c__31895__auto___48680 = cljs.core.chunk_first.call(null,seq__48665_48679__$1);
var G__48681 = cljs.core.chunk_rest.call(null,seq__48665_48679__$1);
var G__48682 = c__31895__auto___48680;
var G__48683 = cljs.core.count.call(null,c__31895__auto___48680);
var G__48684 = (0);
seq__48665_48669 = G__48681;
chunk__48666_48670 = G__48682;
count__48667_48671 = G__48683;
i__48668_48672 = G__48684;
continue;
} else {
var f_48685 = cljs.core.first.call(null,seq__48665_48679__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_48685);

var G__48686 = cljs.core.next.call(null,seq__48665_48679__$1);
var G__48687 = null;
var G__48688 = (0);
var G__48689 = (0);
seq__48665_48669 = G__48686;
chunk__48666_48670 = G__48687;
count__48667_48671 = G__48688;
i__48668_48672 = G__48689;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__48663,map__48663__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__48663,map__48663__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1471077528661