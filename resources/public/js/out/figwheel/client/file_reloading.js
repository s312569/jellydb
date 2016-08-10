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
var or__30008__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30008__auto__){
return or__30008__auto__;
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
var or__30008__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__46398_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__46398_SHARP_));
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
var seq__46403 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__46404 = null;
var count__46405 = (0);
var i__46406 = (0);
while(true){
if((i__46406 < count__46405)){
var n = cljs.core._nth.call(null,chunk__46404,i__46406);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46407 = seq__46403;
var G__46408 = chunk__46404;
var G__46409 = count__46405;
var G__46410 = (i__46406 + (1));
seq__46403 = G__46407;
chunk__46404 = G__46408;
count__46405 = G__46409;
i__46406 = G__46410;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46403);
if(temp__4657__auto__){
var seq__46403__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46403__$1)){
var c__30819__auto__ = cljs.core.chunk_first.call(null,seq__46403__$1);
var G__46411 = cljs.core.chunk_rest.call(null,seq__46403__$1);
var G__46412 = c__30819__auto__;
var G__46413 = cljs.core.count.call(null,c__30819__auto__);
var G__46414 = (0);
seq__46403 = G__46411;
chunk__46404 = G__46412;
count__46405 = G__46413;
i__46406 = G__46414;
continue;
} else {
var n = cljs.core.first.call(null,seq__46403__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46415 = cljs.core.next.call(null,seq__46403__$1);
var G__46416 = null;
var G__46417 = (0);
var G__46418 = (0);
seq__46403 = G__46415;
chunk__46404 = G__46416;
count__46405 = G__46417;
i__46406 = G__46418;
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

var seq__46469_46480 = cljs.core.seq.call(null,deps);
var chunk__46470_46481 = null;
var count__46471_46482 = (0);
var i__46472_46483 = (0);
while(true){
if((i__46472_46483 < count__46471_46482)){
var dep_46484 = cljs.core._nth.call(null,chunk__46470_46481,i__46472_46483);
topo_sort_helper_STAR_.call(null,dep_46484,(depth + (1)),state);

var G__46485 = seq__46469_46480;
var G__46486 = chunk__46470_46481;
var G__46487 = count__46471_46482;
var G__46488 = (i__46472_46483 + (1));
seq__46469_46480 = G__46485;
chunk__46470_46481 = G__46486;
count__46471_46482 = G__46487;
i__46472_46483 = G__46488;
continue;
} else {
var temp__4657__auto___46489 = cljs.core.seq.call(null,seq__46469_46480);
if(temp__4657__auto___46489){
var seq__46469_46490__$1 = temp__4657__auto___46489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46469_46490__$1)){
var c__30819__auto___46491 = cljs.core.chunk_first.call(null,seq__46469_46490__$1);
var G__46492 = cljs.core.chunk_rest.call(null,seq__46469_46490__$1);
var G__46493 = c__30819__auto___46491;
var G__46494 = cljs.core.count.call(null,c__30819__auto___46491);
var G__46495 = (0);
seq__46469_46480 = G__46492;
chunk__46470_46481 = G__46493;
count__46471_46482 = G__46494;
i__46472_46483 = G__46495;
continue;
} else {
var dep_46496 = cljs.core.first.call(null,seq__46469_46490__$1);
topo_sort_helper_STAR_.call(null,dep_46496,(depth + (1)),state);

var G__46497 = cljs.core.next.call(null,seq__46469_46490__$1);
var G__46498 = null;
var G__46499 = (0);
var G__46500 = (0);
seq__46469_46480 = G__46497;
chunk__46470_46481 = G__46498;
count__46471_46482 = G__46499;
i__46472_46483 = G__46500;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__46473){
var vec__46477 = p__46473;
var seq__46478 = cljs.core.seq.call(null,vec__46477);
var first__46479 = cljs.core.first.call(null,seq__46478);
var seq__46478__$1 = cljs.core.next.call(null,seq__46478);
var x = first__46479;
var xs = seq__46478__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__46477,seq__46478,first__46479,seq__46478__$1,x,xs,get_deps__$1){
return (function (p1__46419_SHARP_){
return clojure.set.difference.call(null,p1__46419_SHARP_,x);
});})(vec__46477,seq__46478,first__46479,seq__46478__$1,x,xs,get_deps__$1))
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
var seq__46513 = cljs.core.seq.call(null,provides);
var chunk__46514 = null;
var count__46515 = (0);
var i__46516 = (0);
while(true){
if((i__46516 < count__46515)){
var prov = cljs.core._nth.call(null,chunk__46514,i__46516);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46517_46525 = cljs.core.seq.call(null,requires);
var chunk__46518_46526 = null;
var count__46519_46527 = (0);
var i__46520_46528 = (0);
while(true){
if((i__46520_46528 < count__46519_46527)){
var req_46529 = cljs.core._nth.call(null,chunk__46518_46526,i__46520_46528);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46529,prov);

var G__46530 = seq__46517_46525;
var G__46531 = chunk__46518_46526;
var G__46532 = count__46519_46527;
var G__46533 = (i__46520_46528 + (1));
seq__46517_46525 = G__46530;
chunk__46518_46526 = G__46531;
count__46519_46527 = G__46532;
i__46520_46528 = G__46533;
continue;
} else {
var temp__4657__auto___46534 = cljs.core.seq.call(null,seq__46517_46525);
if(temp__4657__auto___46534){
var seq__46517_46535__$1 = temp__4657__auto___46534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46517_46535__$1)){
var c__30819__auto___46536 = cljs.core.chunk_first.call(null,seq__46517_46535__$1);
var G__46537 = cljs.core.chunk_rest.call(null,seq__46517_46535__$1);
var G__46538 = c__30819__auto___46536;
var G__46539 = cljs.core.count.call(null,c__30819__auto___46536);
var G__46540 = (0);
seq__46517_46525 = G__46537;
chunk__46518_46526 = G__46538;
count__46519_46527 = G__46539;
i__46520_46528 = G__46540;
continue;
} else {
var req_46541 = cljs.core.first.call(null,seq__46517_46535__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46541,prov);

var G__46542 = cljs.core.next.call(null,seq__46517_46535__$1);
var G__46543 = null;
var G__46544 = (0);
var G__46545 = (0);
seq__46517_46525 = G__46542;
chunk__46518_46526 = G__46543;
count__46519_46527 = G__46544;
i__46520_46528 = G__46545;
continue;
}
} else {
}
}
break;
}

var G__46546 = seq__46513;
var G__46547 = chunk__46514;
var G__46548 = count__46515;
var G__46549 = (i__46516 + (1));
seq__46513 = G__46546;
chunk__46514 = G__46547;
count__46515 = G__46548;
i__46516 = G__46549;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46513);
if(temp__4657__auto__){
var seq__46513__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46513__$1)){
var c__30819__auto__ = cljs.core.chunk_first.call(null,seq__46513__$1);
var G__46550 = cljs.core.chunk_rest.call(null,seq__46513__$1);
var G__46551 = c__30819__auto__;
var G__46552 = cljs.core.count.call(null,c__30819__auto__);
var G__46553 = (0);
seq__46513 = G__46550;
chunk__46514 = G__46551;
count__46515 = G__46552;
i__46516 = G__46553;
continue;
} else {
var prov = cljs.core.first.call(null,seq__46513__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46521_46554 = cljs.core.seq.call(null,requires);
var chunk__46522_46555 = null;
var count__46523_46556 = (0);
var i__46524_46557 = (0);
while(true){
if((i__46524_46557 < count__46523_46556)){
var req_46558 = cljs.core._nth.call(null,chunk__46522_46555,i__46524_46557);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46558,prov);

var G__46559 = seq__46521_46554;
var G__46560 = chunk__46522_46555;
var G__46561 = count__46523_46556;
var G__46562 = (i__46524_46557 + (1));
seq__46521_46554 = G__46559;
chunk__46522_46555 = G__46560;
count__46523_46556 = G__46561;
i__46524_46557 = G__46562;
continue;
} else {
var temp__4657__auto___46563__$1 = cljs.core.seq.call(null,seq__46521_46554);
if(temp__4657__auto___46563__$1){
var seq__46521_46564__$1 = temp__4657__auto___46563__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46521_46564__$1)){
var c__30819__auto___46565 = cljs.core.chunk_first.call(null,seq__46521_46564__$1);
var G__46566 = cljs.core.chunk_rest.call(null,seq__46521_46564__$1);
var G__46567 = c__30819__auto___46565;
var G__46568 = cljs.core.count.call(null,c__30819__auto___46565);
var G__46569 = (0);
seq__46521_46554 = G__46566;
chunk__46522_46555 = G__46567;
count__46523_46556 = G__46568;
i__46524_46557 = G__46569;
continue;
} else {
var req_46570 = cljs.core.first.call(null,seq__46521_46564__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46570,prov);

var G__46571 = cljs.core.next.call(null,seq__46521_46564__$1);
var G__46572 = null;
var G__46573 = (0);
var G__46574 = (0);
seq__46521_46554 = G__46571;
chunk__46522_46555 = G__46572;
count__46523_46556 = G__46573;
i__46524_46557 = G__46574;
continue;
}
} else {
}
}
break;
}

var G__46575 = cljs.core.next.call(null,seq__46513__$1);
var G__46576 = null;
var G__46577 = (0);
var G__46578 = (0);
seq__46513 = G__46575;
chunk__46514 = G__46576;
count__46515 = G__46577;
i__46516 = G__46578;
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
var seq__46583_46587 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__46584_46588 = null;
var count__46585_46589 = (0);
var i__46586_46590 = (0);
while(true){
if((i__46586_46590 < count__46585_46589)){
var ns_46591 = cljs.core._nth.call(null,chunk__46584_46588,i__46586_46590);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46591);

var G__46592 = seq__46583_46587;
var G__46593 = chunk__46584_46588;
var G__46594 = count__46585_46589;
var G__46595 = (i__46586_46590 + (1));
seq__46583_46587 = G__46592;
chunk__46584_46588 = G__46593;
count__46585_46589 = G__46594;
i__46586_46590 = G__46595;
continue;
} else {
var temp__4657__auto___46596 = cljs.core.seq.call(null,seq__46583_46587);
if(temp__4657__auto___46596){
var seq__46583_46597__$1 = temp__4657__auto___46596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46583_46597__$1)){
var c__30819__auto___46598 = cljs.core.chunk_first.call(null,seq__46583_46597__$1);
var G__46599 = cljs.core.chunk_rest.call(null,seq__46583_46597__$1);
var G__46600 = c__30819__auto___46598;
var G__46601 = cljs.core.count.call(null,c__30819__auto___46598);
var G__46602 = (0);
seq__46583_46587 = G__46599;
chunk__46584_46588 = G__46600;
count__46585_46589 = G__46601;
i__46586_46590 = G__46602;
continue;
} else {
var ns_46603 = cljs.core.first.call(null,seq__46583_46597__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46603);

var G__46604 = cljs.core.next.call(null,seq__46583_46597__$1);
var G__46605 = null;
var G__46606 = (0);
var G__46607 = (0);
seq__46583_46587 = G__46604;
chunk__46584_46588 = G__46605;
count__46585_46589 = G__46606;
i__46586_46590 = G__46607;
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
goog.require_figwheel_backup_ = (function (){var or__30008__auto__ = goog.require__;
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
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
var G__46608__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__46608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46609__i = 0, G__46609__a = new Array(arguments.length -  0);
while (G__46609__i < G__46609__a.length) {G__46609__a[G__46609__i] = arguments[G__46609__i + 0]; ++G__46609__i;}
  args = new cljs.core.IndexedSeq(G__46609__a,0);
} 
return G__46608__delegate.call(this,args);};
G__46608.cljs$lang$maxFixedArity = 0;
G__46608.cljs$lang$applyTo = (function (arglist__46610){
var args = cljs.core.seq(arglist__46610);
return G__46608__delegate(args);
});
G__46608.cljs$core$IFn$_invoke$arity$variadic = G__46608__delegate;
return G__46608;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__46612 = cljs.core._EQ_;
var expr__46613 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__46612.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__46613))){
var path_parts = ((function (pred__46612,expr__46613){
return (function (p1__46611_SHARP_){
return clojure.string.split.call(null,p1__46611_SHARP_,/[\/\\]/);
});})(pred__46612,expr__46613))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__46612,expr__46613){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e46615){if((e46615 instanceof Error)){
var e = e46615;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46615;

}
}})());
});
;})(path_parts,sep,root,pred__46612,expr__46613))
} else {
if(cljs.core.truth_(pred__46612.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__46613))){
return ((function (pred__46612,expr__46613){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__46612,expr__46613){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__46612,expr__46613))
);

return deferred.addErrback(((function (deferred,pred__46612,expr__46613){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__46612,expr__46613))
);
});
;})(pred__46612,expr__46613))
} else {
return ((function (pred__46612,expr__46613){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__46612,expr__46613))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__46616,callback){
var map__46619 = p__46616;
var map__46619__$1 = ((((!((map__46619 == null)))?((((map__46619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46619):map__46619);
var file_msg = map__46619__$1;
var request_url = cljs.core.get.call(null,map__46619__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__46619,map__46619__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__46619,map__46619__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__36362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto__){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto__){
return (function (state_46643){
var state_val_46644 = (state_46643[(1)]);
if((state_val_46644 === (7))){
var inst_46639 = (state_46643[(2)]);
var state_46643__$1 = state_46643;
var statearr_46645_46665 = state_46643__$1;
(statearr_46645_46665[(2)] = inst_46639);

(statearr_46645_46665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (1))){
var state_46643__$1 = state_46643;
var statearr_46646_46666 = state_46643__$1;
(statearr_46646_46666[(2)] = null);

(statearr_46646_46666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (4))){
var inst_46623 = (state_46643[(7)]);
var inst_46623__$1 = (state_46643[(2)]);
var state_46643__$1 = (function (){var statearr_46647 = state_46643;
(statearr_46647[(7)] = inst_46623__$1);

return statearr_46647;
})();
if(cljs.core.truth_(inst_46623__$1)){
var statearr_46648_46667 = state_46643__$1;
(statearr_46648_46667[(1)] = (5));

} else {
var statearr_46649_46668 = state_46643__$1;
(statearr_46649_46668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (6))){
var state_46643__$1 = state_46643;
var statearr_46650_46669 = state_46643__$1;
(statearr_46650_46669[(2)] = null);

(statearr_46650_46669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (3))){
var inst_46641 = (state_46643[(2)]);
var state_46643__$1 = state_46643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46643__$1,inst_46641);
} else {
if((state_val_46644 === (2))){
var state_46643__$1 = state_46643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46643__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_46644 === (11))){
var inst_46635 = (state_46643[(2)]);
var state_46643__$1 = (function (){var statearr_46651 = state_46643;
(statearr_46651[(8)] = inst_46635);

return statearr_46651;
})();
var statearr_46652_46670 = state_46643__$1;
(statearr_46652_46670[(2)] = null);

(statearr_46652_46670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (9))){
var inst_46629 = (state_46643[(9)]);
var inst_46627 = (state_46643[(10)]);
var inst_46631 = inst_46629.call(null,inst_46627);
var state_46643__$1 = state_46643;
var statearr_46653_46671 = state_46643__$1;
(statearr_46653_46671[(2)] = inst_46631);

(statearr_46653_46671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (5))){
var inst_46623 = (state_46643[(7)]);
var inst_46625 = figwheel.client.file_reloading.blocking_load.call(null,inst_46623);
var state_46643__$1 = state_46643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46643__$1,(8),inst_46625);
} else {
if((state_val_46644 === (10))){
var inst_46627 = (state_46643[(10)]);
var inst_46633 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_46627);
var state_46643__$1 = state_46643;
var statearr_46654_46672 = state_46643__$1;
(statearr_46654_46672[(2)] = inst_46633);

(statearr_46654_46672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (8))){
var inst_46629 = (state_46643[(9)]);
var inst_46623 = (state_46643[(7)]);
var inst_46627 = (state_46643[(2)]);
var inst_46628 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_46629__$1 = cljs.core.get.call(null,inst_46628,inst_46623);
var state_46643__$1 = (function (){var statearr_46655 = state_46643;
(statearr_46655[(9)] = inst_46629__$1);

(statearr_46655[(10)] = inst_46627);

return statearr_46655;
})();
if(cljs.core.truth_(inst_46629__$1)){
var statearr_46656_46673 = state_46643__$1;
(statearr_46656_46673[(1)] = (9));

} else {
var statearr_46657_46674 = state_46643__$1;
(statearr_46657_46674[(1)] = (10));

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
});})(c__36362__auto__))
;
return ((function (switch__36250__auto__,c__36362__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__36251__auto__ = null;
var figwheel$client$file_reloading$state_machine__36251__auto____0 = (function (){
var statearr_46661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46661[(0)] = figwheel$client$file_reloading$state_machine__36251__auto__);

(statearr_46661[(1)] = (1));

return statearr_46661;
});
var figwheel$client$file_reloading$state_machine__36251__auto____1 = (function (state_46643){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_46643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e46662){if((e46662 instanceof Object)){
var ex__36254__auto__ = e46662;
var statearr_46663_46675 = state_46643;
(statearr_46663_46675[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46676 = state_46643;
state_46643 = G__46676;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__36251__auto__ = function(state_46643){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__36251__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__36251__auto____1.call(this,state_46643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__36251__auto____0;
figwheel$client$file_reloading$state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__36251__auto____1;
return figwheel$client$file_reloading$state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto__))
})();
var state__36364__auto__ = (function (){var statearr_46664 = f__36363__auto__.call(null);
(statearr_46664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto__);

return statearr_46664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto__))
);

return c__36362__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__46677,callback){
var map__46680 = p__46677;
var map__46680__$1 = ((((!((map__46680 == null)))?((((map__46680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46680):map__46680);
var file_msg = map__46680__$1;
var namespace = cljs.core.get.call(null,map__46680__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__46680,map__46680__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__46680,map__46680__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__46682){
var map__46685 = p__46682;
var map__46685__$1 = ((((!((map__46685 == null)))?((((map__46685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46685):map__46685);
var file_msg = map__46685__$1;
var namespace = cljs.core.get.call(null,map__46685__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__29996__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__29996__auto__){
var or__30008__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30008__auto__)){
return or__30008__auto__;
} else {
var or__30008__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30008__auto____$1)){
return or__30008__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__29996__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__46687,callback){
var map__46690 = p__46687;
var map__46690__$1 = ((((!((map__46690 == null)))?((((map__46690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46690):map__46690);
var file_msg = map__46690__$1;
var request_url = cljs.core.get.call(null,map__46690__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__46690__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__36362__auto___46794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto___46794,out){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto___46794,out){
return (function (state_46776){
var state_val_46777 = (state_46776[(1)]);
if((state_val_46777 === (1))){
var inst_46750 = cljs.core.seq.call(null,files);
var inst_46751 = cljs.core.first.call(null,inst_46750);
var inst_46752 = cljs.core.next.call(null,inst_46750);
var inst_46753 = files;
var state_46776__$1 = (function (){var statearr_46778 = state_46776;
(statearr_46778[(7)] = inst_46753);

(statearr_46778[(8)] = inst_46752);

(statearr_46778[(9)] = inst_46751);

return statearr_46778;
})();
var statearr_46779_46795 = state_46776__$1;
(statearr_46779_46795[(2)] = null);

(statearr_46779_46795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46777 === (2))){
var inst_46759 = (state_46776[(10)]);
var inst_46753 = (state_46776[(7)]);
var inst_46758 = cljs.core.seq.call(null,inst_46753);
var inst_46759__$1 = cljs.core.first.call(null,inst_46758);
var inst_46760 = cljs.core.next.call(null,inst_46758);
var inst_46761 = (inst_46759__$1 == null);
var inst_46762 = cljs.core.not.call(null,inst_46761);
var state_46776__$1 = (function (){var statearr_46780 = state_46776;
(statearr_46780[(10)] = inst_46759__$1);

(statearr_46780[(11)] = inst_46760);

return statearr_46780;
})();
if(inst_46762){
var statearr_46781_46796 = state_46776__$1;
(statearr_46781_46796[(1)] = (4));

} else {
var statearr_46782_46797 = state_46776__$1;
(statearr_46782_46797[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46777 === (3))){
var inst_46774 = (state_46776[(2)]);
var state_46776__$1 = state_46776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46776__$1,inst_46774);
} else {
if((state_val_46777 === (4))){
var inst_46759 = (state_46776[(10)]);
var inst_46764 = figwheel.client.file_reloading.reload_js_file.call(null,inst_46759);
var state_46776__$1 = state_46776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46776__$1,(7),inst_46764);
} else {
if((state_val_46777 === (5))){
var inst_46770 = cljs.core.async.close_BANG_.call(null,out);
var state_46776__$1 = state_46776;
var statearr_46783_46798 = state_46776__$1;
(statearr_46783_46798[(2)] = inst_46770);

(statearr_46783_46798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46777 === (6))){
var inst_46772 = (state_46776[(2)]);
var state_46776__$1 = state_46776;
var statearr_46784_46799 = state_46776__$1;
(statearr_46784_46799[(2)] = inst_46772);

(statearr_46784_46799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46777 === (7))){
var inst_46760 = (state_46776[(11)]);
var inst_46766 = (state_46776[(2)]);
var inst_46767 = cljs.core.async.put_BANG_.call(null,out,inst_46766);
var inst_46753 = inst_46760;
var state_46776__$1 = (function (){var statearr_46785 = state_46776;
(statearr_46785[(12)] = inst_46767);

(statearr_46785[(7)] = inst_46753);

return statearr_46785;
})();
var statearr_46786_46800 = state_46776__$1;
(statearr_46786_46800[(2)] = null);

(statearr_46786_46800[(1)] = (2));


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
});})(c__36362__auto___46794,out))
;
return ((function (switch__36250__auto__,c__36362__auto___46794,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36251__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36251__auto____0 = (function (){
var statearr_46790 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46790[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36251__auto__);

(statearr_46790[(1)] = (1));

return statearr_46790;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36251__auto____1 = (function (state_46776){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_46776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e46791){if((e46791 instanceof Object)){
var ex__36254__auto__ = e46791;
var statearr_46792_46801 = state_46776;
(statearr_46792_46801[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46802 = state_46776;
state_46776 = G__46802;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36251__auto__ = function(state_46776){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36251__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36251__auto____1.call(this,state_46776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36251__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36251__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto___46794,out))
})();
var state__36364__auto__ = (function (){var statearr_46793 = f__36363__auto__.call(null);
(statearr_46793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto___46794);

return statearr_46793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto___46794,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__46803,opts){
var map__46807 = p__46803;
var map__46807__$1 = ((((!((map__46807 == null)))?((((map__46807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46807):map__46807);
var eval_body__$1 = cljs.core.get.call(null,map__46807__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__46807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__29996__auto__ = eval_body__$1;
if(cljs.core.truth_(and__29996__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__29996__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e46809){var e = e46809;
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
return (function (p1__46810_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46810_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__46819){
var vec__46820 = p__46819;
var k = cljs.core.nth.call(null,vec__46820,(0),null);
var v = cljs.core.nth.call(null,vec__46820,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__46823){
var vec__46824 = p__46823;
var k = cljs.core.nth.call(null,vec__46824,(0),null);
var v = cljs.core.nth.call(null,vec__46824,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__46830,p__46831){
var map__47078 = p__46830;
var map__47078__$1 = ((((!((map__47078 == null)))?((((map__47078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47078):map__47078);
var opts = map__47078__$1;
var before_jsload = cljs.core.get.call(null,map__47078__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47078__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47078__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47079 = p__46831;
var map__47079__$1 = ((((!((map__47079 == null)))?((((map__47079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47079):map__47079);
var msg = map__47079__$1;
var files = cljs.core.get.call(null,map__47079__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47079__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47079__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__36362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__36363__auto__ = (function (){var switch__36250__auto__ = ((function (c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47232){
var state_val_47233 = (state_47232[(1)]);
if((state_val_47233 === (7))){
var inst_47093 = (state_47232[(7)]);
var inst_47095 = (state_47232[(8)]);
var inst_47096 = (state_47232[(9)]);
var inst_47094 = (state_47232[(10)]);
var inst_47101 = cljs.core._nth.call(null,inst_47094,inst_47096);
var inst_47102 = figwheel.client.file_reloading.eval_body.call(null,inst_47101,opts);
var inst_47103 = (inst_47096 + (1));
var tmp47234 = inst_47093;
var tmp47235 = inst_47095;
var tmp47236 = inst_47094;
var inst_47093__$1 = tmp47234;
var inst_47094__$1 = tmp47236;
var inst_47095__$1 = tmp47235;
var inst_47096__$1 = inst_47103;
var state_47232__$1 = (function (){var statearr_47237 = state_47232;
(statearr_47237[(7)] = inst_47093__$1);

(statearr_47237[(8)] = inst_47095__$1);

(statearr_47237[(11)] = inst_47102);

(statearr_47237[(9)] = inst_47096__$1);

(statearr_47237[(10)] = inst_47094__$1);

return statearr_47237;
})();
var statearr_47238_47324 = state_47232__$1;
(statearr_47238_47324[(2)] = null);

(statearr_47238_47324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (20))){
var inst_47136 = (state_47232[(12)]);
var inst_47144 = figwheel.client.file_reloading.sort_files.call(null,inst_47136);
var state_47232__$1 = state_47232;
var statearr_47239_47325 = state_47232__$1;
(statearr_47239_47325[(2)] = inst_47144);

(statearr_47239_47325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (27))){
var state_47232__$1 = state_47232;
var statearr_47240_47326 = state_47232__$1;
(statearr_47240_47326[(2)] = null);

(statearr_47240_47326[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (1))){
var inst_47085 = (state_47232[(13)]);
var inst_47082 = before_jsload.call(null,files);
var inst_47083 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47084 = (function (){return ((function (inst_47085,inst_47082,inst_47083,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46827_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46827_SHARP_);
});
;})(inst_47085,inst_47082,inst_47083,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47085__$1 = cljs.core.filter.call(null,inst_47084,files);
var inst_47086 = cljs.core.not_empty.call(null,inst_47085__$1);
var state_47232__$1 = (function (){var statearr_47241 = state_47232;
(statearr_47241[(14)] = inst_47083);

(statearr_47241[(13)] = inst_47085__$1);

(statearr_47241[(15)] = inst_47082);

return statearr_47241;
})();
if(cljs.core.truth_(inst_47086)){
var statearr_47242_47327 = state_47232__$1;
(statearr_47242_47327[(1)] = (2));

} else {
var statearr_47243_47328 = state_47232__$1;
(statearr_47243_47328[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (24))){
var state_47232__$1 = state_47232;
var statearr_47244_47329 = state_47232__$1;
(statearr_47244_47329[(2)] = null);

(statearr_47244_47329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (39))){
var inst_47186 = (state_47232[(16)]);
var state_47232__$1 = state_47232;
var statearr_47245_47330 = state_47232__$1;
(statearr_47245_47330[(2)] = inst_47186);

(statearr_47245_47330[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (46))){
var inst_47227 = (state_47232[(2)]);
var state_47232__$1 = state_47232;
var statearr_47246_47331 = state_47232__$1;
(statearr_47246_47331[(2)] = inst_47227);

(statearr_47246_47331[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (4))){
var inst_47130 = (state_47232[(2)]);
var inst_47131 = cljs.core.List.EMPTY;
var inst_47132 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47131);
var inst_47133 = (function (){return ((function (inst_47130,inst_47131,inst_47132,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46828_SHARP_){
var and__29996__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46828_SHARP_);
if(cljs.core.truth_(and__29996__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46828_SHARP_));
} else {
return and__29996__auto__;
}
});
;})(inst_47130,inst_47131,inst_47132,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47134 = cljs.core.filter.call(null,inst_47133,files);
var inst_47135 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47136 = cljs.core.concat.call(null,inst_47134,inst_47135);
var state_47232__$1 = (function (){var statearr_47247 = state_47232;
(statearr_47247[(17)] = inst_47130);

(statearr_47247[(18)] = inst_47132);

(statearr_47247[(12)] = inst_47136);

return statearr_47247;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47248_47332 = state_47232__$1;
(statearr_47248_47332[(1)] = (16));

} else {
var statearr_47249_47333 = state_47232__$1;
(statearr_47249_47333[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (15))){
var inst_47120 = (state_47232[(2)]);
var state_47232__$1 = state_47232;
var statearr_47250_47334 = state_47232__$1;
(statearr_47250_47334[(2)] = inst_47120);

(statearr_47250_47334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (21))){
var inst_47146 = (state_47232[(19)]);
var inst_47146__$1 = (state_47232[(2)]);
var inst_47147 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47146__$1);
var state_47232__$1 = (function (){var statearr_47251 = state_47232;
(statearr_47251[(19)] = inst_47146__$1);

return statearr_47251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47232__$1,(22),inst_47147);
} else {
if((state_val_47233 === (31))){
var inst_47230 = (state_47232[(2)]);
var state_47232__$1 = state_47232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47232__$1,inst_47230);
} else {
if((state_val_47233 === (32))){
var inst_47186 = (state_47232[(16)]);
var inst_47191 = inst_47186.cljs$lang$protocol_mask$partition0$;
var inst_47192 = (inst_47191 & (64));
var inst_47193 = inst_47186.cljs$core$ISeq$;
var inst_47194 = (inst_47192) || (inst_47193);
var state_47232__$1 = state_47232;
if(cljs.core.truth_(inst_47194)){
var statearr_47252_47335 = state_47232__$1;
(statearr_47252_47335[(1)] = (35));

} else {
var statearr_47253_47336 = state_47232__$1;
(statearr_47253_47336[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (40))){
var inst_47207 = (state_47232[(20)]);
var inst_47206 = (state_47232[(2)]);
var inst_47207__$1 = cljs.core.get.call(null,inst_47206,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47208 = cljs.core.get.call(null,inst_47206,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47209 = cljs.core.not_empty.call(null,inst_47207__$1);
var state_47232__$1 = (function (){var statearr_47254 = state_47232;
(statearr_47254[(21)] = inst_47208);

(statearr_47254[(20)] = inst_47207__$1);

return statearr_47254;
})();
if(cljs.core.truth_(inst_47209)){
var statearr_47255_47337 = state_47232__$1;
(statearr_47255_47337[(1)] = (41));

} else {
var statearr_47256_47338 = state_47232__$1;
(statearr_47256_47338[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (33))){
var state_47232__$1 = state_47232;
var statearr_47257_47339 = state_47232__$1;
(statearr_47257_47339[(2)] = false);

(statearr_47257_47339[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (13))){
var inst_47106 = (state_47232[(22)]);
var inst_47110 = cljs.core.chunk_first.call(null,inst_47106);
var inst_47111 = cljs.core.chunk_rest.call(null,inst_47106);
var inst_47112 = cljs.core.count.call(null,inst_47110);
var inst_47093 = inst_47111;
var inst_47094 = inst_47110;
var inst_47095 = inst_47112;
var inst_47096 = (0);
var state_47232__$1 = (function (){var statearr_47258 = state_47232;
(statearr_47258[(7)] = inst_47093);

(statearr_47258[(8)] = inst_47095);

(statearr_47258[(9)] = inst_47096);

(statearr_47258[(10)] = inst_47094);

return statearr_47258;
})();
var statearr_47259_47340 = state_47232__$1;
(statearr_47259_47340[(2)] = null);

(statearr_47259_47340[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (22))){
var inst_47149 = (state_47232[(23)]);
var inst_47154 = (state_47232[(24)]);
var inst_47150 = (state_47232[(25)]);
var inst_47146 = (state_47232[(19)]);
var inst_47149__$1 = (state_47232[(2)]);
var inst_47150__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47149__$1);
var inst_47151 = (function (){var all_files = inst_47146;
var res_SINGLEQUOTE_ = inst_47149__$1;
var res = inst_47150__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47149,inst_47154,inst_47150,inst_47146,inst_47149__$1,inst_47150__$1,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46829_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__46829_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47149,inst_47154,inst_47150,inst_47146,inst_47149__$1,inst_47150__$1,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47152 = cljs.core.filter.call(null,inst_47151,inst_47149__$1);
var inst_47153 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47154__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47153);
var inst_47155 = cljs.core.not_empty.call(null,inst_47154__$1);
var state_47232__$1 = (function (){var statearr_47260 = state_47232;
(statearr_47260[(23)] = inst_47149__$1);

(statearr_47260[(26)] = inst_47152);

(statearr_47260[(24)] = inst_47154__$1);

(statearr_47260[(25)] = inst_47150__$1);

return statearr_47260;
})();
if(cljs.core.truth_(inst_47155)){
var statearr_47261_47341 = state_47232__$1;
(statearr_47261_47341[(1)] = (23));

} else {
var statearr_47262_47342 = state_47232__$1;
(statearr_47262_47342[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (36))){
var state_47232__$1 = state_47232;
var statearr_47263_47343 = state_47232__$1;
(statearr_47263_47343[(2)] = false);

(statearr_47263_47343[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (41))){
var inst_47207 = (state_47232[(20)]);
var inst_47211 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47212 = cljs.core.map.call(null,inst_47211,inst_47207);
var inst_47213 = cljs.core.pr_str.call(null,inst_47212);
var inst_47214 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_47213)].join('');
var inst_47215 = figwheel.client.utils.log.call(null,inst_47214);
var state_47232__$1 = state_47232;
var statearr_47264_47344 = state_47232__$1;
(statearr_47264_47344[(2)] = inst_47215);

(statearr_47264_47344[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (43))){
var inst_47208 = (state_47232[(21)]);
var inst_47218 = (state_47232[(2)]);
var inst_47219 = cljs.core.not_empty.call(null,inst_47208);
var state_47232__$1 = (function (){var statearr_47265 = state_47232;
(statearr_47265[(27)] = inst_47218);

return statearr_47265;
})();
if(cljs.core.truth_(inst_47219)){
var statearr_47266_47345 = state_47232__$1;
(statearr_47266_47345[(1)] = (44));

} else {
var statearr_47267_47346 = state_47232__$1;
(statearr_47267_47346[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (29))){
var inst_47149 = (state_47232[(23)]);
var inst_47152 = (state_47232[(26)]);
var inst_47154 = (state_47232[(24)]);
var inst_47150 = (state_47232[(25)]);
var inst_47186 = (state_47232[(16)]);
var inst_47146 = (state_47232[(19)]);
var inst_47182 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47185 = (function (){var all_files = inst_47146;
var res_SINGLEQUOTE_ = inst_47149;
var res = inst_47150;
var files_not_loaded = inst_47152;
var dependencies_that_loaded = inst_47154;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47149,inst_47152,inst_47154,inst_47150,inst_47186,inst_47146,inst_47182,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47184){
var map__47268 = p__47184;
var map__47268__$1 = ((((!((map__47268 == null)))?((((map__47268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47268):map__47268);
var namespace = cljs.core.get.call(null,map__47268__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47149,inst_47152,inst_47154,inst_47150,inst_47186,inst_47146,inst_47182,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47186__$1 = cljs.core.group_by.call(null,inst_47185,inst_47152);
var inst_47188 = (inst_47186__$1 == null);
var inst_47189 = cljs.core.not.call(null,inst_47188);
var state_47232__$1 = (function (){var statearr_47270 = state_47232;
(statearr_47270[(16)] = inst_47186__$1);

(statearr_47270[(28)] = inst_47182);

return statearr_47270;
})();
if(inst_47189){
var statearr_47271_47347 = state_47232__$1;
(statearr_47271_47347[(1)] = (32));

} else {
var statearr_47272_47348 = state_47232__$1;
(statearr_47272_47348[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (44))){
var inst_47208 = (state_47232[(21)]);
var inst_47221 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47208);
var inst_47222 = cljs.core.pr_str.call(null,inst_47221);
var inst_47223 = [cljs.core.str("not required: "),cljs.core.str(inst_47222)].join('');
var inst_47224 = figwheel.client.utils.log.call(null,inst_47223);
var state_47232__$1 = state_47232;
var statearr_47273_47349 = state_47232__$1;
(statearr_47273_47349[(2)] = inst_47224);

(statearr_47273_47349[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (6))){
var inst_47127 = (state_47232[(2)]);
var state_47232__$1 = state_47232;
var statearr_47274_47350 = state_47232__$1;
(statearr_47274_47350[(2)] = inst_47127);

(statearr_47274_47350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (28))){
var inst_47152 = (state_47232[(26)]);
var inst_47179 = (state_47232[(2)]);
var inst_47180 = cljs.core.not_empty.call(null,inst_47152);
var state_47232__$1 = (function (){var statearr_47275 = state_47232;
(statearr_47275[(29)] = inst_47179);

return statearr_47275;
})();
if(cljs.core.truth_(inst_47180)){
var statearr_47276_47351 = state_47232__$1;
(statearr_47276_47351[(1)] = (29));

} else {
var statearr_47277_47352 = state_47232__$1;
(statearr_47277_47352[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (25))){
var inst_47150 = (state_47232[(25)]);
var inst_47166 = (state_47232[(2)]);
var inst_47167 = cljs.core.not_empty.call(null,inst_47150);
var state_47232__$1 = (function (){var statearr_47278 = state_47232;
(statearr_47278[(30)] = inst_47166);

return statearr_47278;
})();
if(cljs.core.truth_(inst_47167)){
var statearr_47279_47353 = state_47232__$1;
(statearr_47279_47353[(1)] = (26));

} else {
var statearr_47280_47354 = state_47232__$1;
(statearr_47280_47354[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (34))){
var inst_47201 = (state_47232[(2)]);
var state_47232__$1 = state_47232;
if(cljs.core.truth_(inst_47201)){
var statearr_47281_47355 = state_47232__$1;
(statearr_47281_47355[(1)] = (38));

} else {
var statearr_47282_47356 = state_47232__$1;
(statearr_47282_47356[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (17))){
var state_47232__$1 = state_47232;
var statearr_47283_47357 = state_47232__$1;
(statearr_47283_47357[(2)] = recompile_dependents);

(statearr_47283_47357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (3))){
var state_47232__$1 = state_47232;
var statearr_47284_47358 = state_47232__$1;
(statearr_47284_47358[(2)] = null);

(statearr_47284_47358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (12))){
var inst_47123 = (state_47232[(2)]);
var state_47232__$1 = state_47232;
var statearr_47285_47359 = state_47232__$1;
(statearr_47285_47359[(2)] = inst_47123);

(statearr_47285_47359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (2))){
var inst_47085 = (state_47232[(13)]);
var inst_47092 = cljs.core.seq.call(null,inst_47085);
var inst_47093 = inst_47092;
var inst_47094 = null;
var inst_47095 = (0);
var inst_47096 = (0);
var state_47232__$1 = (function (){var statearr_47286 = state_47232;
(statearr_47286[(7)] = inst_47093);

(statearr_47286[(8)] = inst_47095);

(statearr_47286[(9)] = inst_47096);

(statearr_47286[(10)] = inst_47094);

return statearr_47286;
})();
var statearr_47287_47360 = state_47232__$1;
(statearr_47287_47360[(2)] = null);

(statearr_47287_47360[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (23))){
var inst_47149 = (state_47232[(23)]);
var inst_47152 = (state_47232[(26)]);
var inst_47154 = (state_47232[(24)]);
var inst_47150 = (state_47232[(25)]);
var inst_47146 = (state_47232[(19)]);
var inst_47157 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47159 = (function (){var all_files = inst_47146;
var res_SINGLEQUOTE_ = inst_47149;
var res = inst_47150;
var files_not_loaded = inst_47152;
var dependencies_that_loaded = inst_47154;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47149,inst_47152,inst_47154,inst_47150,inst_47146,inst_47157,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47158){
var map__47288 = p__47158;
var map__47288__$1 = ((((!((map__47288 == null)))?((((map__47288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47288):map__47288);
var request_url = cljs.core.get.call(null,map__47288__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47149,inst_47152,inst_47154,inst_47150,inst_47146,inst_47157,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47160 = cljs.core.reverse.call(null,inst_47154);
var inst_47161 = cljs.core.map.call(null,inst_47159,inst_47160);
var inst_47162 = cljs.core.pr_str.call(null,inst_47161);
var inst_47163 = figwheel.client.utils.log.call(null,inst_47162);
var state_47232__$1 = (function (){var statearr_47290 = state_47232;
(statearr_47290[(31)] = inst_47157);

return statearr_47290;
})();
var statearr_47291_47361 = state_47232__$1;
(statearr_47291_47361[(2)] = inst_47163);

(statearr_47291_47361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (35))){
var state_47232__$1 = state_47232;
var statearr_47292_47362 = state_47232__$1;
(statearr_47292_47362[(2)] = true);

(statearr_47292_47362[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (19))){
var inst_47136 = (state_47232[(12)]);
var inst_47142 = figwheel.client.file_reloading.expand_files.call(null,inst_47136);
var state_47232__$1 = state_47232;
var statearr_47293_47363 = state_47232__$1;
(statearr_47293_47363[(2)] = inst_47142);

(statearr_47293_47363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (11))){
var state_47232__$1 = state_47232;
var statearr_47294_47364 = state_47232__$1;
(statearr_47294_47364[(2)] = null);

(statearr_47294_47364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (9))){
var inst_47125 = (state_47232[(2)]);
var state_47232__$1 = state_47232;
var statearr_47295_47365 = state_47232__$1;
(statearr_47295_47365[(2)] = inst_47125);

(statearr_47295_47365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (5))){
var inst_47095 = (state_47232[(8)]);
var inst_47096 = (state_47232[(9)]);
var inst_47098 = (inst_47096 < inst_47095);
var inst_47099 = inst_47098;
var state_47232__$1 = state_47232;
if(cljs.core.truth_(inst_47099)){
var statearr_47296_47366 = state_47232__$1;
(statearr_47296_47366[(1)] = (7));

} else {
var statearr_47297_47367 = state_47232__$1;
(statearr_47297_47367[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (14))){
var inst_47106 = (state_47232[(22)]);
var inst_47115 = cljs.core.first.call(null,inst_47106);
var inst_47116 = figwheel.client.file_reloading.eval_body.call(null,inst_47115,opts);
var inst_47117 = cljs.core.next.call(null,inst_47106);
var inst_47093 = inst_47117;
var inst_47094 = null;
var inst_47095 = (0);
var inst_47096 = (0);
var state_47232__$1 = (function (){var statearr_47298 = state_47232;
(statearr_47298[(7)] = inst_47093);

(statearr_47298[(32)] = inst_47116);

(statearr_47298[(8)] = inst_47095);

(statearr_47298[(9)] = inst_47096);

(statearr_47298[(10)] = inst_47094);

return statearr_47298;
})();
var statearr_47299_47368 = state_47232__$1;
(statearr_47299_47368[(2)] = null);

(statearr_47299_47368[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (45))){
var state_47232__$1 = state_47232;
var statearr_47300_47369 = state_47232__$1;
(statearr_47300_47369[(2)] = null);

(statearr_47300_47369[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (26))){
var inst_47149 = (state_47232[(23)]);
var inst_47152 = (state_47232[(26)]);
var inst_47154 = (state_47232[(24)]);
var inst_47150 = (state_47232[(25)]);
var inst_47146 = (state_47232[(19)]);
var inst_47169 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47171 = (function (){var all_files = inst_47146;
var res_SINGLEQUOTE_ = inst_47149;
var res = inst_47150;
var files_not_loaded = inst_47152;
var dependencies_that_loaded = inst_47154;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47149,inst_47152,inst_47154,inst_47150,inst_47146,inst_47169,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47170){
var map__47301 = p__47170;
var map__47301__$1 = ((((!((map__47301 == null)))?((((map__47301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47301):map__47301);
var namespace = cljs.core.get.call(null,map__47301__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47301__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47149,inst_47152,inst_47154,inst_47150,inst_47146,inst_47169,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47172 = cljs.core.map.call(null,inst_47171,inst_47150);
var inst_47173 = cljs.core.pr_str.call(null,inst_47172);
var inst_47174 = figwheel.client.utils.log.call(null,inst_47173);
var inst_47175 = (function (){var all_files = inst_47146;
var res_SINGLEQUOTE_ = inst_47149;
var res = inst_47150;
var files_not_loaded = inst_47152;
var dependencies_that_loaded = inst_47154;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47149,inst_47152,inst_47154,inst_47150,inst_47146,inst_47169,inst_47171,inst_47172,inst_47173,inst_47174,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47149,inst_47152,inst_47154,inst_47150,inst_47146,inst_47169,inst_47171,inst_47172,inst_47173,inst_47174,state_val_47233,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47176 = setTimeout(inst_47175,(10));
var state_47232__$1 = (function (){var statearr_47303 = state_47232;
(statearr_47303[(33)] = inst_47174);

(statearr_47303[(34)] = inst_47169);

return statearr_47303;
})();
var statearr_47304_47370 = state_47232__$1;
(statearr_47304_47370[(2)] = inst_47176);

(statearr_47304_47370[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (16))){
var state_47232__$1 = state_47232;
var statearr_47305_47371 = state_47232__$1;
(statearr_47305_47371[(2)] = reload_dependents);

(statearr_47305_47371[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (38))){
var inst_47186 = (state_47232[(16)]);
var inst_47203 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47186);
var state_47232__$1 = state_47232;
var statearr_47306_47372 = state_47232__$1;
(statearr_47306_47372[(2)] = inst_47203);

(statearr_47306_47372[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (30))){
var state_47232__$1 = state_47232;
var statearr_47307_47373 = state_47232__$1;
(statearr_47307_47373[(2)] = null);

(statearr_47307_47373[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (10))){
var inst_47106 = (state_47232[(22)]);
var inst_47108 = cljs.core.chunked_seq_QMARK_.call(null,inst_47106);
var state_47232__$1 = state_47232;
if(inst_47108){
var statearr_47308_47374 = state_47232__$1;
(statearr_47308_47374[(1)] = (13));

} else {
var statearr_47309_47375 = state_47232__$1;
(statearr_47309_47375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (18))){
var inst_47140 = (state_47232[(2)]);
var state_47232__$1 = state_47232;
if(cljs.core.truth_(inst_47140)){
var statearr_47310_47376 = state_47232__$1;
(statearr_47310_47376[(1)] = (19));

} else {
var statearr_47311_47377 = state_47232__$1;
(statearr_47311_47377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (42))){
var state_47232__$1 = state_47232;
var statearr_47312_47378 = state_47232__$1;
(statearr_47312_47378[(2)] = null);

(statearr_47312_47378[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (37))){
var inst_47198 = (state_47232[(2)]);
var state_47232__$1 = state_47232;
var statearr_47313_47379 = state_47232__$1;
(statearr_47313_47379[(2)] = inst_47198);

(statearr_47313_47379[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47233 === (8))){
var inst_47093 = (state_47232[(7)]);
var inst_47106 = (state_47232[(22)]);
var inst_47106__$1 = cljs.core.seq.call(null,inst_47093);
var state_47232__$1 = (function (){var statearr_47314 = state_47232;
(statearr_47314[(22)] = inst_47106__$1);

return statearr_47314;
})();
if(inst_47106__$1){
var statearr_47315_47380 = state_47232__$1;
(statearr_47315_47380[(1)] = (10));

} else {
var statearr_47316_47381 = state_47232__$1;
(statearr_47316_47381[(1)] = (11));

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
});})(c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__36250__auto__,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36251__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36251__auto____0 = (function (){
var statearr_47320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47320[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__36251__auto__);

(statearr_47320[(1)] = (1));

return statearr_47320;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36251__auto____1 = (function (state_47232){
while(true){
var ret_value__36252__auto__ = (function (){try{while(true){
var result__36253__auto__ = switch__36250__auto__.call(null,state_47232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36253__auto__;
}
break;
}
}catch (e47321){if((e47321 instanceof Object)){
var ex__36254__auto__ = e47321;
var statearr_47322_47382 = state_47232;
(statearr_47322_47382[(5)] = ex__36254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47383 = state_47232;
state_47232 = G__47383;
continue;
} else {
return ret_value__36252__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__36251__auto__ = function(state_47232){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36251__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36251__auto____1.call(this,state_47232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36251__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__36251__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36251__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36251__auto__;
})()
;})(switch__36250__auto__,c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__36364__auto__ = (function (){var statearr_47323 = f__36363__auto__.call(null);
(statearr_47323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36362__auto__);

return statearr_47323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36364__auto__);
});})(c__36362__auto__,map__47078,map__47078__$1,opts,before_jsload,on_jsload,reload_dependents,map__47079,map__47079__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__36362__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__47386,link){
var map__47389 = p__47386;
var map__47389__$1 = ((((!((map__47389 == null)))?((((map__47389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47389):map__47389);
var file = cljs.core.get.call(null,map__47389__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__47389,map__47389__$1,file){
return (function (p1__47384_SHARP_,p2__47385_SHARP_){
if(cljs.core._EQ_.call(null,p1__47384_SHARP_,p2__47385_SHARP_)){
return p1__47384_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__47389,map__47389__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__47395){
var map__47396 = p__47395;
var map__47396__$1 = ((((!((map__47396 == null)))?((((map__47396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47396):map__47396);
var match_length = cljs.core.get.call(null,map__47396__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__47396__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__47391_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__47391_SHARP_);
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
var args47398 = [];
var len__31083__auto___47401 = arguments.length;
var i__31084__auto___47402 = (0);
while(true){
if((i__31084__auto___47402 < len__31083__auto___47401)){
args47398.push((arguments[i__31084__auto___47402]));

var G__47403 = (i__31084__auto___47402 + (1));
i__31084__auto___47402 = G__47403;
continue;
} else {
}
break;
}

var G__47400 = args47398.length;
switch (G__47400) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47398.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__47405_SHARP_,p2__47406_SHARP_){
return cljs.core.assoc.call(null,p1__47405_SHARP_,cljs.core.get.call(null,p2__47406_SHARP_,key),p2__47406_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__47407){
var map__47410 = p__47407;
var map__47410__$1 = ((((!((map__47410 == null)))?((((map__47410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47410):map__47410);
var f_data = map__47410__$1;
var file = cljs.core.get.call(null,map__47410__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__47412,files_msg){
var map__47419 = p__47412;
var map__47419__$1 = ((((!((map__47419 == null)))?((((map__47419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47419):map__47419);
var opts = map__47419__$1;
var on_cssload = cljs.core.get.call(null,map__47419__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__47421_47425 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__47422_47426 = null;
var count__47423_47427 = (0);
var i__47424_47428 = (0);
while(true){
if((i__47424_47428 < count__47423_47427)){
var f_47429 = cljs.core._nth.call(null,chunk__47422_47426,i__47424_47428);
figwheel.client.file_reloading.reload_css_file.call(null,f_47429);

var G__47430 = seq__47421_47425;
var G__47431 = chunk__47422_47426;
var G__47432 = count__47423_47427;
var G__47433 = (i__47424_47428 + (1));
seq__47421_47425 = G__47430;
chunk__47422_47426 = G__47431;
count__47423_47427 = G__47432;
i__47424_47428 = G__47433;
continue;
} else {
var temp__4657__auto___47434 = cljs.core.seq.call(null,seq__47421_47425);
if(temp__4657__auto___47434){
var seq__47421_47435__$1 = temp__4657__auto___47434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47421_47435__$1)){
var c__30819__auto___47436 = cljs.core.chunk_first.call(null,seq__47421_47435__$1);
var G__47437 = cljs.core.chunk_rest.call(null,seq__47421_47435__$1);
var G__47438 = c__30819__auto___47436;
var G__47439 = cljs.core.count.call(null,c__30819__auto___47436);
var G__47440 = (0);
seq__47421_47425 = G__47437;
chunk__47422_47426 = G__47438;
count__47423_47427 = G__47439;
i__47424_47428 = G__47440;
continue;
} else {
var f_47441 = cljs.core.first.call(null,seq__47421_47435__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_47441);

var G__47442 = cljs.core.next.call(null,seq__47421_47435__$1);
var G__47443 = null;
var G__47444 = (0);
var G__47445 = (0);
seq__47421_47425 = G__47442;
chunk__47422_47426 = G__47443;
count__47423_47427 = G__47444;
i__47424_47428 = G__47445;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__47419,map__47419__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__47419,map__47419__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1470795682159