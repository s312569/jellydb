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
var or__30860__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30860__auto__){
return or__30860__auto__;
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
var or__30860__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47375_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47375_SHARP_));
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
var seq__47380 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47381 = null;
var count__47382 = (0);
var i__47383 = (0);
while(true){
if((i__47383 < count__47382)){
var n = cljs.core._nth.call(null,chunk__47381,i__47383);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47384 = seq__47380;
var G__47385 = chunk__47381;
var G__47386 = count__47382;
var G__47387 = (i__47383 + (1));
seq__47380 = G__47384;
chunk__47381 = G__47385;
count__47382 = G__47386;
i__47383 = G__47387;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47380);
if(temp__4657__auto__){
var seq__47380__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47380__$1)){
var c__31671__auto__ = cljs.core.chunk_first.call(null,seq__47380__$1);
var G__47388 = cljs.core.chunk_rest.call(null,seq__47380__$1);
var G__47389 = c__31671__auto__;
var G__47390 = cljs.core.count.call(null,c__31671__auto__);
var G__47391 = (0);
seq__47380 = G__47388;
chunk__47381 = G__47389;
count__47382 = G__47390;
i__47383 = G__47391;
continue;
} else {
var n = cljs.core.first.call(null,seq__47380__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47392 = cljs.core.next.call(null,seq__47380__$1);
var G__47393 = null;
var G__47394 = (0);
var G__47395 = (0);
seq__47380 = G__47392;
chunk__47381 = G__47393;
count__47382 = G__47394;
i__47383 = G__47395;
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

var seq__47446_47457 = cljs.core.seq.call(null,deps);
var chunk__47447_47458 = null;
var count__47448_47459 = (0);
var i__47449_47460 = (0);
while(true){
if((i__47449_47460 < count__47448_47459)){
var dep_47461 = cljs.core._nth.call(null,chunk__47447_47458,i__47449_47460);
topo_sort_helper_STAR_.call(null,dep_47461,(depth + (1)),state);

var G__47462 = seq__47446_47457;
var G__47463 = chunk__47447_47458;
var G__47464 = count__47448_47459;
var G__47465 = (i__47449_47460 + (1));
seq__47446_47457 = G__47462;
chunk__47447_47458 = G__47463;
count__47448_47459 = G__47464;
i__47449_47460 = G__47465;
continue;
} else {
var temp__4657__auto___47466 = cljs.core.seq.call(null,seq__47446_47457);
if(temp__4657__auto___47466){
var seq__47446_47467__$1 = temp__4657__auto___47466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47446_47467__$1)){
var c__31671__auto___47468 = cljs.core.chunk_first.call(null,seq__47446_47467__$1);
var G__47469 = cljs.core.chunk_rest.call(null,seq__47446_47467__$1);
var G__47470 = c__31671__auto___47468;
var G__47471 = cljs.core.count.call(null,c__31671__auto___47468);
var G__47472 = (0);
seq__47446_47457 = G__47469;
chunk__47447_47458 = G__47470;
count__47448_47459 = G__47471;
i__47449_47460 = G__47472;
continue;
} else {
var dep_47473 = cljs.core.first.call(null,seq__47446_47467__$1);
topo_sort_helper_STAR_.call(null,dep_47473,(depth + (1)),state);

var G__47474 = cljs.core.next.call(null,seq__47446_47467__$1);
var G__47475 = null;
var G__47476 = (0);
var G__47477 = (0);
seq__47446_47457 = G__47474;
chunk__47447_47458 = G__47475;
count__47448_47459 = G__47476;
i__47449_47460 = G__47477;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47450){
var vec__47454 = p__47450;
var seq__47455 = cljs.core.seq.call(null,vec__47454);
var first__47456 = cljs.core.first.call(null,seq__47455);
var seq__47455__$1 = cljs.core.next.call(null,seq__47455);
var x = first__47456;
var xs = seq__47455__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47454,seq__47455,first__47456,seq__47455__$1,x,xs,get_deps__$1){
return (function (p1__47396_SHARP_){
return clojure.set.difference.call(null,p1__47396_SHARP_,x);
});})(vec__47454,seq__47455,first__47456,seq__47455__$1,x,xs,get_deps__$1))
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
var seq__47490 = cljs.core.seq.call(null,provides);
var chunk__47491 = null;
var count__47492 = (0);
var i__47493 = (0);
while(true){
if((i__47493 < count__47492)){
var prov = cljs.core._nth.call(null,chunk__47491,i__47493);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47494_47502 = cljs.core.seq.call(null,requires);
var chunk__47495_47503 = null;
var count__47496_47504 = (0);
var i__47497_47505 = (0);
while(true){
if((i__47497_47505 < count__47496_47504)){
var req_47506 = cljs.core._nth.call(null,chunk__47495_47503,i__47497_47505);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47506,prov);

var G__47507 = seq__47494_47502;
var G__47508 = chunk__47495_47503;
var G__47509 = count__47496_47504;
var G__47510 = (i__47497_47505 + (1));
seq__47494_47502 = G__47507;
chunk__47495_47503 = G__47508;
count__47496_47504 = G__47509;
i__47497_47505 = G__47510;
continue;
} else {
var temp__4657__auto___47511 = cljs.core.seq.call(null,seq__47494_47502);
if(temp__4657__auto___47511){
var seq__47494_47512__$1 = temp__4657__auto___47511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47494_47512__$1)){
var c__31671__auto___47513 = cljs.core.chunk_first.call(null,seq__47494_47512__$1);
var G__47514 = cljs.core.chunk_rest.call(null,seq__47494_47512__$1);
var G__47515 = c__31671__auto___47513;
var G__47516 = cljs.core.count.call(null,c__31671__auto___47513);
var G__47517 = (0);
seq__47494_47502 = G__47514;
chunk__47495_47503 = G__47515;
count__47496_47504 = G__47516;
i__47497_47505 = G__47517;
continue;
} else {
var req_47518 = cljs.core.first.call(null,seq__47494_47512__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47518,prov);

var G__47519 = cljs.core.next.call(null,seq__47494_47512__$1);
var G__47520 = null;
var G__47521 = (0);
var G__47522 = (0);
seq__47494_47502 = G__47519;
chunk__47495_47503 = G__47520;
count__47496_47504 = G__47521;
i__47497_47505 = G__47522;
continue;
}
} else {
}
}
break;
}

var G__47523 = seq__47490;
var G__47524 = chunk__47491;
var G__47525 = count__47492;
var G__47526 = (i__47493 + (1));
seq__47490 = G__47523;
chunk__47491 = G__47524;
count__47492 = G__47525;
i__47493 = G__47526;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47490);
if(temp__4657__auto__){
var seq__47490__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47490__$1)){
var c__31671__auto__ = cljs.core.chunk_first.call(null,seq__47490__$1);
var G__47527 = cljs.core.chunk_rest.call(null,seq__47490__$1);
var G__47528 = c__31671__auto__;
var G__47529 = cljs.core.count.call(null,c__31671__auto__);
var G__47530 = (0);
seq__47490 = G__47527;
chunk__47491 = G__47528;
count__47492 = G__47529;
i__47493 = G__47530;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47490__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47498_47531 = cljs.core.seq.call(null,requires);
var chunk__47499_47532 = null;
var count__47500_47533 = (0);
var i__47501_47534 = (0);
while(true){
if((i__47501_47534 < count__47500_47533)){
var req_47535 = cljs.core._nth.call(null,chunk__47499_47532,i__47501_47534);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47535,prov);

var G__47536 = seq__47498_47531;
var G__47537 = chunk__47499_47532;
var G__47538 = count__47500_47533;
var G__47539 = (i__47501_47534 + (1));
seq__47498_47531 = G__47536;
chunk__47499_47532 = G__47537;
count__47500_47533 = G__47538;
i__47501_47534 = G__47539;
continue;
} else {
var temp__4657__auto___47540__$1 = cljs.core.seq.call(null,seq__47498_47531);
if(temp__4657__auto___47540__$1){
var seq__47498_47541__$1 = temp__4657__auto___47540__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47498_47541__$1)){
var c__31671__auto___47542 = cljs.core.chunk_first.call(null,seq__47498_47541__$1);
var G__47543 = cljs.core.chunk_rest.call(null,seq__47498_47541__$1);
var G__47544 = c__31671__auto___47542;
var G__47545 = cljs.core.count.call(null,c__31671__auto___47542);
var G__47546 = (0);
seq__47498_47531 = G__47543;
chunk__47499_47532 = G__47544;
count__47500_47533 = G__47545;
i__47501_47534 = G__47546;
continue;
} else {
var req_47547 = cljs.core.first.call(null,seq__47498_47541__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47547,prov);

var G__47548 = cljs.core.next.call(null,seq__47498_47541__$1);
var G__47549 = null;
var G__47550 = (0);
var G__47551 = (0);
seq__47498_47531 = G__47548;
chunk__47499_47532 = G__47549;
count__47500_47533 = G__47550;
i__47501_47534 = G__47551;
continue;
}
} else {
}
}
break;
}

var G__47552 = cljs.core.next.call(null,seq__47490__$1);
var G__47553 = null;
var G__47554 = (0);
var G__47555 = (0);
seq__47490 = G__47552;
chunk__47491 = G__47553;
count__47492 = G__47554;
i__47493 = G__47555;
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
var seq__47560_47564 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47561_47565 = null;
var count__47562_47566 = (0);
var i__47563_47567 = (0);
while(true){
if((i__47563_47567 < count__47562_47566)){
var ns_47568 = cljs.core._nth.call(null,chunk__47561_47565,i__47563_47567);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47568);

var G__47569 = seq__47560_47564;
var G__47570 = chunk__47561_47565;
var G__47571 = count__47562_47566;
var G__47572 = (i__47563_47567 + (1));
seq__47560_47564 = G__47569;
chunk__47561_47565 = G__47570;
count__47562_47566 = G__47571;
i__47563_47567 = G__47572;
continue;
} else {
var temp__4657__auto___47573 = cljs.core.seq.call(null,seq__47560_47564);
if(temp__4657__auto___47573){
var seq__47560_47574__$1 = temp__4657__auto___47573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47560_47574__$1)){
var c__31671__auto___47575 = cljs.core.chunk_first.call(null,seq__47560_47574__$1);
var G__47576 = cljs.core.chunk_rest.call(null,seq__47560_47574__$1);
var G__47577 = c__31671__auto___47575;
var G__47578 = cljs.core.count.call(null,c__31671__auto___47575);
var G__47579 = (0);
seq__47560_47564 = G__47576;
chunk__47561_47565 = G__47577;
count__47562_47566 = G__47578;
i__47563_47567 = G__47579;
continue;
} else {
var ns_47580 = cljs.core.first.call(null,seq__47560_47574__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47580);

var G__47581 = cljs.core.next.call(null,seq__47560_47574__$1);
var G__47582 = null;
var G__47583 = (0);
var G__47584 = (0);
seq__47560_47564 = G__47581;
chunk__47561_47565 = G__47582;
count__47562_47566 = G__47583;
i__47563_47567 = G__47584;
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
goog.require_figwheel_backup_ = (function (){var or__30860__auto__ = goog.require__;
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
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
var G__47585__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47586__i = 0, G__47586__a = new Array(arguments.length -  0);
while (G__47586__i < G__47586__a.length) {G__47586__a[G__47586__i] = arguments[G__47586__i + 0]; ++G__47586__i;}
  args = new cljs.core.IndexedSeq(G__47586__a,0);
} 
return G__47585__delegate.call(this,args);};
G__47585.cljs$lang$maxFixedArity = 0;
G__47585.cljs$lang$applyTo = (function (arglist__47587){
var args = cljs.core.seq(arglist__47587);
return G__47585__delegate(args);
});
G__47585.cljs$core$IFn$_invoke$arity$variadic = G__47585__delegate;
return G__47585;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47589 = cljs.core._EQ_;
var expr__47590 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47589.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47590))){
var path_parts = ((function (pred__47589,expr__47590){
return (function (p1__47588_SHARP_){
return clojure.string.split.call(null,p1__47588_SHARP_,/[\/\\]/);
});})(pred__47589,expr__47590))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__47589,expr__47590){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47592){if((e47592 instanceof Error)){
var e = e47592;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47592;

}
}})());
});
;})(path_parts,sep,root,pred__47589,expr__47590))
} else {
if(cljs.core.truth_(pred__47589.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47590))){
return ((function (pred__47589,expr__47590){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__47589,expr__47590){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__47589,expr__47590))
);

return deferred.addErrback(((function (deferred,pred__47589,expr__47590){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__47589,expr__47590))
);
});
;})(pred__47589,expr__47590))
} else {
return ((function (pred__47589,expr__47590){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47589,expr__47590))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47593,callback){
var map__47596 = p__47593;
var map__47596__$1 = ((((!((map__47596 == null)))?((((map__47596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47596):map__47596);
var file_msg = map__47596__$1;
var request_url = cljs.core.get.call(null,map__47596__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__47596,map__47596__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47596,map__47596__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__35839__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto__){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto__){
return (function (state_47620){
var state_val_47621 = (state_47620[(1)]);
if((state_val_47621 === (7))){
var inst_47616 = (state_47620[(2)]);
var state_47620__$1 = state_47620;
var statearr_47622_47642 = state_47620__$1;
(statearr_47622_47642[(2)] = inst_47616);

(statearr_47622_47642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47621 === (1))){
var state_47620__$1 = state_47620;
var statearr_47623_47643 = state_47620__$1;
(statearr_47623_47643[(2)] = null);

(statearr_47623_47643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47621 === (4))){
var inst_47600 = (state_47620[(7)]);
var inst_47600__$1 = (state_47620[(2)]);
var state_47620__$1 = (function (){var statearr_47624 = state_47620;
(statearr_47624[(7)] = inst_47600__$1);

return statearr_47624;
})();
if(cljs.core.truth_(inst_47600__$1)){
var statearr_47625_47644 = state_47620__$1;
(statearr_47625_47644[(1)] = (5));

} else {
var statearr_47626_47645 = state_47620__$1;
(statearr_47626_47645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47621 === (6))){
var state_47620__$1 = state_47620;
var statearr_47627_47646 = state_47620__$1;
(statearr_47627_47646[(2)] = null);

(statearr_47627_47646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47621 === (3))){
var inst_47618 = (state_47620[(2)]);
var state_47620__$1 = state_47620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47620__$1,inst_47618);
} else {
if((state_val_47621 === (2))){
var state_47620__$1 = state_47620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47620__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47621 === (11))){
var inst_47612 = (state_47620[(2)]);
var state_47620__$1 = (function (){var statearr_47628 = state_47620;
(statearr_47628[(8)] = inst_47612);

return statearr_47628;
})();
var statearr_47629_47647 = state_47620__$1;
(statearr_47629_47647[(2)] = null);

(statearr_47629_47647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47621 === (9))){
var inst_47604 = (state_47620[(9)]);
var inst_47606 = (state_47620[(10)]);
var inst_47608 = inst_47606.call(null,inst_47604);
var state_47620__$1 = state_47620;
var statearr_47630_47648 = state_47620__$1;
(statearr_47630_47648[(2)] = inst_47608);

(statearr_47630_47648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47621 === (5))){
var inst_47600 = (state_47620[(7)]);
var inst_47602 = figwheel.client.file_reloading.blocking_load.call(null,inst_47600);
var state_47620__$1 = state_47620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47620__$1,(8),inst_47602);
} else {
if((state_val_47621 === (10))){
var inst_47604 = (state_47620[(9)]);
var inst_47610 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47604);
var state_47620__$1 = state_47620;
var statearr_47631_47649 = state_47620__$1;
(statearr_47631_47649[(2)] = inst_47610);

(statearr_47631_47649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47621 === (8))){
var inst_47606 = (state_47620[(10)]);
var inst_47600 = (state_47620[(7)]);
var inst_47604 = (state_47620[(2)]);
var inst_47605 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47606__$1 = cljs.core.get.call(null,inst_47605,inst_47600);
var state_47620__$1 = (function (){var statearr_47632 = state_47620;
(statearr_47632[(9)] = inst_47604);

(statearr_47632[(10)] = inst_47606__$1);

return statearr_47632;
})();
if(cljs.core.truth_(inst_47606__$1)){
var statearr_47633_47650 = state_47620__$1;
(statearr_47633_47650[(1)] = (9));

} else {
var statearr_47634_47651 = state_47620__$1;
(statearr_47634_47651[(1)] = (10));

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
});})(c__35839__auto__))
;
return ((function (switch__35727__auto__,c__35839__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35728__auto__ = null;
var figwheel$client$file_reloading$state_machine__35728__auto____0 = (function (){
var statearr_47638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47638[(0)] = figwheel$client$file_reloading$state_machine__35728__auto__);

(statearr_47638[(1)] = (1));

return statearr_47638;
});
var figwheel$client$file_reloading$state_machine__35728__auto____1 = (function (state_47620){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_47620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e47639){if((e47639 instanceof Object)){
var ex__35731__auto__ = e47639;
var statearr_47640_47652 = state_47620;
(statearr_47640_47652[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47653 = state_47620;
state_47620 = G__47653;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35728__auto__ = function(state_47620){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35728__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35728__auto____1.call(this,state_47620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35728__auto____0;
figwheel$client$file_reloading$state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35728__auto____1;
return figwheel$client$file_reloading$state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto__))
})();
var state__35841__auto__ = (function (){var statearr_47641 = f__35840__auto__.call(null);
(statearr_47641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto__);

return statearr_47641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto__))
);

return c__35839__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47654,callback){
var map__47657 = p__47654;
var map__47657__$1 = ((((!((map__47657 == null)))?((((map__47657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47657):map__47657);
var file_msg = map__47657__$1;
var namespace = cljs.core.get.call(null,map__47657__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47657,map__47657__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47657,map__47657__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47659){
var map__47662 = p__47659;
var map__47662__$1 = ((((!((map__47662 == null)))?((((map__47662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47662):map__47662);
var file_msg = map__47662__$1;
var namespace = cljs.core.get.call(null,map__47662__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30848__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__30848__auto__){
var or__30860__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30860__auto__)){
return or__30860__auto__;
} else {
var or__30860__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30860__auto____$1)){
return or__30860__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30848__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47664,callback){
var map__47667 = p__47664;
var map__47667__$1 = ((((!((map__47667 == null)))?((((map__47667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47667):map__47667);
var file_msg = map__47667__$1;
var request_url = cljs.core.get.call(null,map__47667__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47667__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__35839__auto___47771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto___47771,out){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto___47771,out){
return (function (state_47753){
var state_val_47754 = (state_47753[(1)]);
if((state_val_47754 === (1))){
var inst_47727 = cljs.core.seq.call(null,files);
var inst_47728 = cljs.core.first.call(null,inst_47727);
var inst_47729 = cljs.core.next.call(null,inst_47727);
var inst_47730 = files;
var state_47753__$1 = (function (){var statearr_47755 = state_47753;
(statearr_47755[(7)] = inst_47728);

(statearr_47755[(8)] = inst_47730);

(statearr_47755[(9)] = inst_47729);

return statearr_47755;
})();
var statearr_47756_47772 = state_47753__$1;
(statearr_47756_47772[(2)] = null);

(statearr_47756_47772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (2))){
var inst_47736 = (state_47753[(10)]);
var inst_47730 = (state_47753[(8)]);
var inst_47735 = cljs.core.seq.call(null,inst_47730);
var inst_47736__$1 = cljs.core.first.call(null,inst_47735);
var inst_47737 = cljs.core.next.call(null,inst_47735);
var inst_47738 = (inst_47736__$1 == null);
var inst_47739 = cljs.core.not.call(null,inst_47738);
var state_47753__$1 = (function (){var statearr_47757 = state_47753;
(statearr_47757[(10)] = inst_47736__$1);

(statearr_47757[(11)] = inst_47737);

return statearr_47757;
})();
if(inst_47739){
var statearr_47758_47773 = state_47753__$1;
(statearr_47758_47773[(1)] = (4));

} else {
var statearr_47759_47774 = state_47753__$1;
(statearr_47759_47774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (3))){
var inst_47751 = (state_47753[(2)]);
var state_47753__$1 = state_47753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47753__$1,inst_47751);
} else {
if((state_val_47754 === (4))){
var inst_47736 = (state_47753[(10)]);
var inst_47741 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47736);
var state_47753__$1 = state_47753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47753__$1,(7),inst_47741);
} else {
if((state_val_47754 === (5))){
var inst_47747 = cljs.core.async.close_BANG_.call(null,out);
var state_47753__$1 = state_47753;
var statearr_47760_47775 = state_47753__$1;
(statearr_47760_47775[(2)] = inst_47747);

(statearr_47760_47775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (6))){
var inst_47749 = (state_47753[(2)]);
var state_47753__$1 = state_47753;
var statearr_47761_47776 = state_47753__$1;
(statearr_47761_47776[(2)] = inst_47749);

(statearr_47761_47776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47754 === (7))){
var inst_47737 = (state_47753[(11)]);
var inst_47743 = (state_47753[(2)]);
var inst_47744 = cljs.core.async.put_BANG_.call(null,out,inst_47743);
var inst_47730 = inst_47737;
var state_47753__$1 = (function (){var statearr_47762 = state_47753;
(statearr_47762[(12)] = inst_47744);

(statearr_47762[(8)] = inst_47730);

return statearr_47762;
})();
var statearr_47763_47777 = state_47753__$1;
(statearr_47763_47777[(2)] = null);

(statearr_47763_47777[(1)] = (2));


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
});})(c__35839__auto___47771,out))
;
return ((function (switch__35727__auto__,c__35839__auto___47771,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35728__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35728__auto____0 = (function (){
var statearr_47767 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47767[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35728__auto__);

(statearr_47767[(1)] = (1));

return statearr_47767;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35728__auto____1 = (function (state_47753){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_47753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e47768){if((e47768 instanceof Object)){
var ex__35731__auto__ = e47768;
var statearr_47769_47778 = state_47753;
(statearr_47769_47778[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47779 = state_47753;
state_47753 = G__47779;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35728__auto__ = function(state_47753){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35728__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35728__auto____1.call(this,state_47753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35728__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35728__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto___47771,out))
})();
var state__35841__auto__ = (function (){var statearr_47770 = f__35840__auto__.call(null);
(statearr_47770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto___47771);

return statearr_47770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto___47771,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47780,opts){
var map__47784 = p__47780;
var map__47784__$1 = ((((!((map__47784 == null)))?((((map__47784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47784):map__47784);
var eval_body__$1 = cljs.core.get.call(null,map__47784__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47784__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30848__auto__ = eval_body__$1;
if(cljs.core.truth_(and__30848__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__30848__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47786){var e = e47786;
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
return (function (p1__47787_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47787_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__47796){
var vec__47797 = p__47796;
var k = cljs.core.nth.call(null,vec__47797,(0),null);
var v = cljs.core.nth.call(null,vec__47797,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47800){
var vec__47801 = p__47800;
var k = cljs.core.nth.call(null,vec__47801,(0),null);
var v = cljs.core.nth.call(null,vec__47801,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47807,p__47808){
var map__48055 = p__47807;
var map__48055__$1 = ((((!((map__48055 == null)))?((((map__48055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48055):map__48055);
var opts = map__48055__$1;
var before_jsload = cljs.core.get.call(null,map__48055__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__48055__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__48055__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__48056 = p__47808;
var map__48056__$1 = ((((!((map__48056 == null)))?((((map__48056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48056):map__48056);
var msg = map__48056__$1;
var files = cljs.core.get.call(null,map__48056__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__48056__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__48056__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35839__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35840__auto__ = (function (){var switch__35727__auto__ = ((function (c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_48209){
var state_val_48210 = (state_48209[(1)]);
if((state_val_48210 === (7))){
var inst_48071 = (state_48209[(7)]);
var inst_48070 = (state_48209[(8)]);
var inst_48073 = (state_48209[(9)]);
var inst_48072 = (state_48209[(10)]);
var inst_48078 = cljs.core._nth.call(null,inst_48071,inst_48073);
var inst_48079 = figwheel.client.file_reloading.eval_body.call(null,inst_48078,opts);
var inst_48080 = (inst_48073 + (1));
var tmp48211 = inst_48071;
var tmp48212 = inst_48070;
var tmp48213 = inst_48072;
var inst_48070__$1 = tmp48212;
var inst_48071__$1 = tmp48211;
var inst_48072__$1 = tmp48213;
var inst_48073__$1 = inst_48080;
var state_48209__$1 = (function (){var statearr_48214 = state_48209;
(statearr_48214[(7)] = inst_48071__$1);

(statearr_48214[(8)] = inst_48070__$1);

(statearr_48214[(11)] = inst_48079);

(statearr_48214[(9)] = inst_48073__$1);

(statearr_48214[(10)] = inst_48072__$1);

return statearr_48214;
})();
var statearr_48215_48301 = state_48209__$1;
(statearr_48215_48301[(2)] = null);

(statearr_48215_48301[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (20))){
var inst_48113 = (state_48209[(12)]);
var inst_48121 = figwheel.client.file_reloading.sort_files.call(null,inst_48113);
var state_48209__$1 = state_48209;
var statearr_48216_48302 = state_48209__$1;
(statearr_48216_48302[(2)] = inst_48121);

(statearr_48216_48302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (27))){
var state_48209__$1 = state_48209;
var statearr_48217_48303 = state_48209__$1;
(statearr_48217_48303[(2)] = null);

(statearr_48217_48303[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (1))){
var inst_48062 = (state_48209[(13)]);
var inst_48059 = before_jsload.call(null,files);
var inst_48060 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_48061 = (function (){return ((function (inst_48062,inst_48059,inst_48060,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47804_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47804_SHARP_);
});
;})(inst_48062,inst_48059,inst_48060,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48062__$1 = cljs.core.filter.call(null,inst_48061,files);
var inst_48063 = cljs.core.not_empty.call(null,inst_48062__$1);
var state_48209__$1 = (function (){var statearr_48218 = state_48209;
(statearr_48218[(13)] = inst_48062__$1);

(statearr_48218[(14)] = inst_48059);

(statearr_48218[(15)] = inst_48060);

return statearr_48218;
})();
if(cljs.core.truth_(inst_48063)){
var statearr_48219_48304 = state_48209__$1;
(statearr_48219_48304[(1)] = (2));

} else {
var statearr_48220_48305 = state_48209__$1;
(statearr_48220_48305[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (24))){
var state_48209__$1 = state_48209;
var statearr_48221_48306 = state_48209__$1;
(statearr_48221_48306[(2)] = null);

(statearr_48221_48306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (39))){
var inst_48163 = (state_48209[(16)]);
var state_48209__$1 = state_48209;
var statearr_48222_48307 = state_48209__$1;
(statearr_48222_48307[(2)] = inst_48163);

(statearr_48222_48307[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (46))){
var inst_48204 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
var statearr_48223_48308 = state_48209__$1;
(statearr_48223_48308[(2)] = inst_48204);

(statearr_48223_48308[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (4))){
var inst_48107 = (state_48209[(2)]);
var inst_48108 = cljs.core.List.EMPTY;
var inst_48109 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_48108);
var inst_48110 = (function (){return ((function (inst_48107,inst_48108,inst_48109,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47805_SHARP_){
var and__30848__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47805_SHARP_);
if(cljs.core.truth_(and__30848__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47805_SHARP_));
} else {
return and__30848__auto__;
}
});
;})(inst_48107,inst_48108,inst_48109,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48111 = cljs.core.filter.call(null,inst_48110,files);
var inst_48112 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_48113 = cljs.core.concat.call(null,inst_48111,inst_48112);
var state_48209__$1 = (function (){var statearr_48224 = state_48209;
(statearr_48224[(17)] = inst_48107);

(statearr_48224[(18)] = inst_48109);

(statearr_48224[(12)] = inst_48113);

return statearr_48224;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48225_48309 = state_48209__$1;
(statearr_48225_48309[(1)] = (16));

} else {
var statearr_48226_48310 = state_48209__$1;
(statearr_48226_48310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (15))){
var inst_48097 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
var statearr_48227_48311 = state_48209__$1;
(statearr_48227_48311[(2)] = inst_48097);

(statearr_48227_48311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (21))){
var inst_48123 = (state_48209[(19)]);
var inst_48123__$1 = (state_48209[(2)]);
var inst_48124 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_48123__$1);
var state_48209__$1 = (function (){var statearr_48228 = state_48209;
(statearr_48228[(19)] = inst_48123__$1);

return statearr_48228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48209__$1,(22),inst_48124);
} else {
if((state_val_48210 === (31))){
var inst_48207 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48209__$1,inst_48207);
} else {
if((state_val_48210 === (32))){
var inst_48163 = (state_48209[(16)]);
var inst_48168 = inst_48163.cljs$lang$protocol_mask$partition0$;
var inst_48169 = (inst_48168 & (64));
var inst_48170 = inst_48163.cljs$core$ISeq$;
var inst_48171 = (inst_48169) || (inst_48170);
var state_48209__$1 = state_48209;
if(cljs.core.truth_(inst_48171)){
var statearr_48229_48312 = state_48209__$1;
(statearr_48229_48312[(1)] = (35));

} else {
var statearr_48230_48313 = state_48209__$1;
(statearr_48230_48313[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (40))){
var inst_48184 = (state_48209[(20)]);
var inst_48183 = (state_48209[(2)]);
var inst_48184__$1 = cljs.core.get.call(null,inst_48183,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48185 = cljs.core.get.call(null,inst_48183,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48186 = cljs.core.not_empty.call(null,inst_48184__$1);
var state_48209__$1 = (function (){var statearr_48231 = state_48209;
(statearr_48231[(21)] = inst_48185);

(statearr_48231[(20)] = inst_48184__$1);

return statearr_48231;
})();
if(cljs.core.truth_(inst_48186)){
var statearr_48232_48314 = state_48209__$1;
(statearr_48232_48314[(1)] = (41));

} else {
var statearr_48233_48315 = state_48209__$1;
(statearr_48233_48315[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (33))){
var state_48209__$1 = state_48209;
var statearr_48234_48316 = state_48209__$1;
(statearr_48234_48316[(2)] = false);

(statearr_48234_48316[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (13))){
var inst_48083 = (state_48209[(22)]);
var inst_48087 = cljs.core.chunk_first.call(null,inst_48083);
var inst_48088 = cljs.core.chunk_rest.call(null,inst_48083);
var inst_48089 = cljs.core.count.call(null,inst_48087);
var inst_48070 = inst_48088;
var inst_48071 = inst_48087;
var inst_48072 = inst_48089;
var inst_48073 = (0);
var state_48209__$1 = (function (){var statearr_48235 = state_48209;
(statearr_48235[(7)] = inst_48071);

(statearr_48235[(8)] = inst_48070);

(statearr_48235[(9)] = inst_48073);

(statearr_48235[(10)] = inst_48072);

return statearr_48235;
})();
var statearr_48236_48317 = state_48209__$1;
(statearr_48236_48317[(2)] = null);

(statearr_48236_48317[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (22))){
var inst_48127 = (state_48209[(23)]);
var inst_48131 = (state_48209[(24)]);
var inst_48123 = (state_48209[(19)]);
var inst_48126 = (state_48209[(25)]);
var inst_48126__$1 = (state_48209[(2)]);
var inst_48127__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48126__$1);
var inst_48128 = (function (){var all_files = inst_48123;
var res_SINGLEQUOTE_ = inst_48126__$1;
var res = inst_48127__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_48127,inst_48131,inst_48123,inst_48126,inst_48126__$1,inst_48127__$1,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47806_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47806_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_48127,inst_48131,inst_48123,inst_48126,inst_48126__$1,inst_48127__$1,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48129 = cljs.core.filter.call(null,inst_48128,inst_48126__$1);
var inst_48130 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48131__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48130);
var inst_48132 = cljs.core.not_empty.call(null,inst_48131__$1);
var state_48209__$1 = (function (){var statearr_48237 = state_48209;
(statearr_48237[(23)] = inst_48127__$1);

(statearr_48237[(24)] = inst_48131__$1);

(statearr_48237[(26)] = inst_48129);

(statearr_48237[(25)] = inst_48126__$1);

return statearr_48237;
})();
if(cljs.core.truth_(inst_48132)){
var statearr_48238_48318 = state_48209__$1;
(statearr_48238_48318[(1)] = (23));

} else {
var statearr_48239_48319 = state_48209__$1;
(statearr_48239_48319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (36))){
var state_48209__$1 = state_48209;
var statearr_48240_48320 = state_48209__$1;
(statearr_48240_48320[(2)] = false);

(statearr_48240_48320[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (41))){
var inst_48184 = (state_48209[(20)]);
var inst_48188 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48189 = cljs.core.map.call(null,inst_48188,inst_48184);
var inst_48190 = cljs.core.pr_str.call(null,inst_48189);
var inst_48191 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_48190)].join('');
var inst_48192 = figwheel.client.utils.log.call(null,inst_48191);
var state_48209__$1 = state_48209;
var statearr_48241_48321 = state_48209__$1;
(statearr_48241_48321[(2)] = inst_48192);

(statearr_48241_48321[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (43))){
var inst_48185 = (state_48209[(21)]);
var inst_48195 = (state_48209[(2)]);
var inst_48196 = cljs.core.not_empty.call(null,inst_48185);
var state_48209__$1 = (function (){var statearr_48242 = state_48209;
(statearr_48242[(27)] = inst_48195);

return statearr_48242;
})();
if(cljs.core.truth_(inst_48196)){
var statearr_48243_48322 = state_48209__$1;
(statearr_48243_48322[(1)] = (44));

} else {
var statearr_48244_48323 = state_48209__$1;
(statearr_48244_48323[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (29))){
var inst_48127 = (state_48209[(23)]);
var inst_48163 = (state_48209[(16)]);
var inst_48131 = (state_48209[(24)]);
var inst_48123 = (state_48209[(19)]);
var inst_48129 = (state_48209[(26)]);
var inst_48126 = (state_48209[(25)]);
var inst_48159 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48162 = (function (){var all_files = inst_48123;
var res_SINGLEQUOTE_ = inst_48126;
var res = inst_48127;
var files_not_loaded = inst_48129;
var dependencies_that_loaded = inst_48131;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48127,inst_48163,inst_48131,inst_48123,inst_48129,inst_48126,inst_48159,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48161){
var map__48245 = p__48161;
var map__48245__$1 = ((((!((map__48245 == null)))?((((map__48245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48245):map__48245);
var namespace = cljs.core.get.call(null,map__48245__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48127,inst_48163,inst_48131,inst_48123,inst_48129,inst_48126,inst_48159,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48163__$1 = cljs.core.group_by.call(null,inst_48162,inst_48129);
var inst_48165 = (inst_48163__$1 == null);
var inst_48166 = cljs.core.not.call(null,inst_48165);
var state_48209__$1 = (function (){var statearr_48247 = state_48209;
(statearr_48247[(16)] = inst_48163__$1);

(statearr_48247[(28)] = inst_48159);

return statearr_48247;
})();
if(inst_48166){
var statearr_48248_48324 = state_48209__$1;
(statearr_48248_48324[(1)] = (32));

} else {
var statearr_48249_48325 = state_48209__$1;
(statearr_48249_48325[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (44))){
var inst_48185 = (state_48209[(21)]);
var inst_48198 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48185);
var inst_48199 = cljs.core.pr_str.call(null,inst_48198);
var inst_48200 = [cljs.core.str("not required: "),cljs.core.str(inst_48199)].join('');
var inst_48201 = figwheel.client.utils.log.call(null,inst_48200);
var state_48209__$1 = state_48209;
var statearr_48250_48326 = state_48209__$1;
(statearr_48250_48326[(2)] = inst_48201);

(statearr_48250_48326[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (6))){
var inst_48104 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
var statearr_48251_48327 = state_48209__$1;
(statearr_48251_48327[(2)] = inst_48104);

(statearr_48251_48327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (28))){
var inst_48129 = (state_48209[(26)]);
var inst_48156 = (state_48209[(2)]);
var inst_48157 = cljs.core.not_empty.call(null,inst_48129);
var state_48209__$1 = (function (){var statearr_48252 = state_48209;
(statearr_48252[(29)] = inst_48156);

return statearr_48252;
})();
if(cljs.core.truth_(inst_48157)){
var statearr_48253_48328 = state_48209__$1;
(statearr_48253_48328[(1)] = (29));

} else {
var statearr_48254_48329 = state_48209__$1;
(statearr_48254_48329[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (25))){
var inst_48127 = (state_48209[(23)]);
var inst_48143 = (state_48209[(2)]);
var inst_48144 = cljs.core.not_empty.call(null,inst_48127);
var state_48209__$1 = (function (){var statearr_48255 = state_48209;
(statearr_48255[(30)] = inst_48143);

return statearr_48255;
})();
if(cljs.core.truth_(inst_48144)){
var statearr_48256_48330 = state_48209__$1;
(statearr_48256_48330[(1)] = (26));

} else {
var statearr_48257_48331 = state_48209__$1;
(statearr_48257_48331[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (34))){
var inst_48178 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
if(cljs.core.truth_(inst_48178)){
var statearr_48258_48332 = state_48209__$1;
(statearr_48258_48332[(1)] = (38));

} else {
var statearr_48259_48333 = state_48209__$1;
(statearr_48259_48333[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (17))){
var state_48209__$1 = state_48209;
var statearr_48260_48334 = state_48209__$1;
(statearr_48260_48334[(2)] = recompile_dependents);

(statearr_48260_48334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (3))){
var state_48209__$1 = state_48209;
var statearr_48261_48335 = state_48209__$1;
(statearr_48261_48335[(2)] = null);

(statearr_48261_48335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (12))){
var inst_48100 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
var statearr_48262_48336 = state_48209__$1;
(statearr_48262_48336[(2)] = inst_48100);

(statearr_48262_48336[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (2))){
var inst_48062 = (state_48209[(13)]);
var inst_48069 = cljs.core.seq.call(null,inst_48062);
var inst_48070 = inst_48069;
var inst_48071 = null;
var inst_48072 = (0);
var inst_48073 = (0);
var state_48209__$1 = (function (){var statearr_48263 = state_48209;
(statearr_48263[(7)] = inst_48071);

(statearr_48263[(8)] = inst_48070);

(statearr_48263[(9)] = inst_48073);

(statearr_48263[(10)] = inst_48072);

return statearr_48263;
})();
var statearr_48264_48337 = state_48209__$1;
(statearr_48264_48337[(2)] = null);

(statearr_48264_48337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (23))){
var inst_48127 = (state_48209[(23)]);
var inst_48131 = (state_48209[(24)]);
var inst_48123 = (state_48209[(19)]);
var inst_48129 = (state_48209[(26)]);
var inst_48126 = (state_48209[(25)]);
var inst_48134 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48136 = (function (){var all_files = inst_48123;
var res_SINGLEQUOTE_ = inst_48126;
var res = inst_48127;
var files_not_loaded = inst_48129;
var dependencies_that_loaded = inst_48131;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48127,inst_48131,inst_48123,inst_48129,inst_48126,inst_48134,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48135){
var map__48265 = p__48135;
var map__48265__$1 = ((((!((map__48265 == null)))?((((map__48265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48265):map__48265);
var request_url = cljs.core.get.call(null,map__48265__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48127,inst_48131,inst_48123,inst_48129,inst_48126,inst_48134,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48137 = cljs.core.reverse.call(null,inst_48131);
var inst_48138 = cljs.core.map.call(null,inst_48136,inst_48137);
var inst_48139 = cljs.core.pr_str.call(null,inst_48138);
var inst_48140 = figwheel.client.utils.log.call(null,inst_48139);
var state_48209__$1 = (function (){var statearr_48267 = state_48209;
(statearr_48267[(31)] = inst_48134);

return statearr_48267;
})();
var statearr_48268_48338 = state_48209__$1;
(statearr_48268_48338[(2)] = inst_48140);

(statearr_48268_48338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (35))){
var state_48209__$1 = state_48209;
var statearr_48269_48339 = state_48209__$1;
(statearr_48269_48339[(2)] = true);

(statearr_48269_48339[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (19))){
var inst_48113 = (state_48209[(12)]);
var inst_48119 = figwheel.client.file_reloading.expand_files.call(null,inst_48113);
var state_48209__$1 = state_48209;
var statearr_48270_48340 = state_48209__$1;
(statearr_48270_48340[(2)] = inst_48119);

(statearr_48270_48340[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (11))){
var state_48209__$1 = state_48209;
var statearr_48271_48341 = state_48209__$1;
(statearr_48271_48341[(2)] = null);

(statearr_48271_48341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (9))){
var inst_48102 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
var statearr_48272_48342 = state_48209__$1;
(statearr_48272_48342[(2)] = inst_48102);

(statearr_48272_48342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (5))){
var inst_48073 = (state_48209[(9)]);
var inst_48072 = (state_48209[(10)]);
var inst_48075 = (inst_48073 < inst_48072);
var inst_48076 = inst_48075;
var state_48209__$1 = state_48209;
if(cljs.core.truth_(inst_48076)){
var statearr_48273_48343 = state_48209__$1;
(statearr_48273_48343[(1)] = (7));

} else {
var statearr_48274_48344 = state_48209__$1;
(statearr_48274_48344[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (14))){
var inst_48083 = (state_48209[(22)]);
var inst_48092 = cljs.core.first.call(null,inst_48083);
var inst_48093 = figwheel.client.file_reloading.eval_body.call(null,inst_48092,opts);
var inst_48094 = cljs.core.next.call(null,inst_48083);
var inst_48070 = inst_48094;
var inst_48071 = null;
var inst_48072 = (0);
var inst_48073 = (0);
var state_48209__$1 = (function (){var statearr_48275 = state_48209;
(statearr_48275[(7)] = inst_48071);

(statearr_48275[(8)] = inst_48070);

(statearr_48275[(9)] = inst_48073);

(statearr_48275[(10)] = inst_48072);

(statearr_48275[(32)] = inst_48093);

return statearr_48275;
})();
var statearr_48276_48345 = state_48209__$1;
(statearr_48276_48345[(2)] = null);

(statearr_48276_48345[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (45))){
var state_48209__$1 = state_48209;
var statearr_48277_48346 = state_48209__$1;
(statearr_48277_48346[(2)] = null);

(statearr_48277_48346[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (26))){
var inst_48127 = (state_48209[(23)]);
var inst_48131 = (state_48209[(24)]);
var inst_48123 = (state_48209[(19)]);
var inst_48129 = (state_48209[(26)]);
var inst_48126 = (state_48209[(25)]);
var inst_48146 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48148 = (function (){var all_files = inst_48123;
var res_SINGLEQUOTE_ = inst_48126;
var res = inst_48127;
var files_not_loaded = inst_48129;
var dependencies_that_loaded = inst_48131;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48127,inst_48131,inst_48123,inst_48129,inst_48126,inst_48146,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48147){
var map__48278 = p__48147;
var map__48278__$1 = ((((!((map__48278 == null)))?((((map__48278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48278):map__48278);
var namespace = cljs.core.get.call(null,map__48278__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48278__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48127,inst_48131,inst_48123,inst_48129,inst_48126,inst_48146,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48149 = cljs.core.map.call(null,inst_48148,inst_48127);
var inst_48150 = cljs.core.pr_str.call(null,inst_48149);
var inst_48151 = figwheel.client.utils.log.call(null,inst_48150);
var inst_48152 = (function (){var all_files = inst_48123;
var res_SINGLEQUOTE_ = inst_48126;
var res = inst_48127;
var files_not_loaded = inst_48129;
var dependencies_that_loaded = inst_48131;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48127,inst_48131,inst_48123,inst_48129,inst_48126,inst_48146,inst_48148,inst_48149,inst_48150,inst_48151,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48127,inst_48131,inst_48123,inst_48129,inst_48126,inst_48146,inst_48148,inst_48149,inst_48150,inst_48151,state_val_48210,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48153 = setTimeout(inst_48152,(10));
var state_48209__$1 = (function (){var statearr_48280 = state_48209;
(statearr_48280[(33)] = inst_48151);

(statearr_48280[(34)] = inst_48146);

return statearr_48280;
})();
var statearr_48281_48347 = state_48209__$1;
(statearr_48281_48347[(2)] = inst_48153);

(statearr_48281_48347[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (16))){
var state_48209__$1 = state_48209;
var statearr_48282_48348 = state_48209__$1;
(statearr_48282_48348[(2)] = reload_dependents);

(statearr_48282_48348[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (38))){
var inst_48163 = (state_48209[(16)]);
var inst_48180 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48163);
var state_48209__$1 = state_48209;
var statearr_48283_48349 = state_48209__$1;
(statearr_48283_48349[(2)] = inst_48180);

(statearr_48283_48349[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (30))){
var state_48209__$1 = state_48209;
var statearr_48284_48350 = state_48209__$1;
(statearr_48284_48350[(2)] = null);

(statearr_48284_48350[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (10))){
var inst_48083 = (state_48209[(22)]);
var inst_48085 = cljs.core.chunked_seq_QMARK_.call(null,inst_48083);
var state_48209__$1 = state_48209;
if(inst_48085){
var statearr_48285_48351 = state_48209__$1;
(statearr_48285_48351[(1)] = (13));

} else {
var statearr_48286_48352 = state_48209__$1;
(statearr_48286_48352[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (18))){
var inst_48117 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
if(cljs.core.truth_(inst_48117)){
var statearr_48287_48353 = state_48209__$1;
(statearr_48287_48353[(1)] = (19));

} else {
var statearr_48288_48354 = state_48209__$1;
(statearr_48288_48354[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (42))){
var state_48209__$1 = state_48209;
var statearr_48289_48355 = state_48209__$1;
(statearr_48289_48355[(2)] = null);

(statearr_48289_48355[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (37))){
var inst_48175 = (state_48209[(2)]);
var state_48209__$1 = state_48209;
var statearr_48290_48356 = state_48209__$1;
(statearr_48290_48356[(2)] = inst_48175);

(statearr_48290_48356[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48210 === (8))){
var inst_48083 = (state_48209[(22)]);
var inst_48070 = (state_48209[(8)]);
var inst_48083__$1 = cljs.core.seq.call(null,inst_48070);
var state_48209__$1 = (function (){var statearr_48291 = state_48209;
(statearr_48291[(22)] = inst_48083__$1);

return statearr_48291;
})();
if(inst_48083__$1){
var statearr_48292_48357 = state_48209__$1;
(statearr_48292_48357[(1)] = (10));

} else {
var statearr_48293_48358 = state_48209__$1;
(statearr_48293_48358[(1)] = (11));

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
});})(c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35727__auto__,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35728__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35728__auto____0 = (function (){
var statearr_48297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48297[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35728__auto__);

(statearr_48297[(1)] = (1));

return statearr_48297;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35728__auto____1 = (function (state_48209){
while(true){
var ret_value__35729__auto__ = (function (){try{while(true){
var result__35730__auto__ = switch__35727__auto__.call(null,state_48209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35730__auto__;
}
break;
}
}catch (e48298){if((e48298 instanceof Object)){
var ex__35731__auto__ = e48298;
var statearr_48299_48359 = state_48209;
(statearr_48299_48359[(5)] = ex__35731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48360 = state_48209;
state_48209 = G__48360;
continue;
} else {
return ret_value__35729__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35728__auto__ = function(state_48209){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35728__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35728__auto____1.call(this,state_48209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35728__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35728__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35728__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35728__auto__;
})()
;})(switch__35727__auto__,c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35841__auto__ = (function (){var statearr_48300 = f__35840__auto__.call(null);
(statearr_48300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35839__auto__);

return statearr_48300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35841__auto__);
});})(c__35839__auto__,map__48055,map__48055__$1,opts,before_jsload,on_jsload,reload_dependents,map__48056,map__48056__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35839__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48363,link){
var map__48366 = p__48363;
var map__48366__$1 = ((((!((map__48366 == null)))?((((map__48366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48366):map__48366);
var file = cljs.core.get.call(null,map__48366__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__48366,map__48366__$1,file){
return (function (p1__48361_SHARP_,p2__48362_SHARP_){
if(cljs.core._EQ_.call(null,p1__48361_SHARP_,p2__48362_SHARP_)){
return p1__48361_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__48366,map__48366__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48372){
var map__48373 = p__48372;
var map__48373__$1 = ((((!((map__48373 == null)))?((((map__48373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48373):map__48373);
var match_length = cljs.core.get.call(null,map__48373__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48373__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48368_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48368_SHARP_);
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
var args48375 = [];
var len__31935__auto___48378 = arguments.length;
var i__31936__auto___48379 = (0);
while(true){
if((i__31936__auto___48379 < len__31935__auto___48378)){
args48375.push((arguments[i__31936__auto___48379]));

var G__48380 = (i__31936__auto___48379 + (1));
i__31936__auto___48379 = G__48380;
continue;
} else {
}
break;
}

var G__48377 = args48375.length;
switch (G__48377) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48375.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48382_SHARP_,p2__48383_SHARP_){
return cljs.core.assoc.call(null,p1__48382_SHARP_,cljs.core.get.call(null,p2__48383_SHARP_,key),p2__48383_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__48384){
var map__48387 = p__48384;
var map__48387__$1 = ((((!((map__48387 == null)))?((((map__48387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48387):map__48387);
var f_data = map__48387__$1;
var file = cljs.core.get.call(null,map__48387__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48389,files_msg){
var map__48396 = p__48389;
var map__48396__$1 = ((((!((map__48396 == null)))?((((map__48396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48396):map__48396);
var opts = map__48396__$1;
var on_cssload = cljs.core.get.call(null,map__48396__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__48398_48402 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__48399_48403 = null;
var count__48400_48404 = (0);
var i__48401_48405 = (0);
while(true){
if((i__48401_48405 < count__48400_48404)){
var f_48406 = cljs.core._nth.call(null,chunk__48399_48403,i__48401_48405);
figwheel.client.file_reloading.reload_css_file.call(null,f_48406);

var G__48407 = seq__48398_48402;
var G__48408 = chunk__48399_48403;
var G__48409 = count__48400_48404;
var G__48410 = (i__48401_48405 + (1));
seq__48398_48402 = G__48407;
chunk__48399_48403 = G__48408;
count__48400_48404 = G__48409;
i__48401_48405 = G__48410;
continue;
} else {
var temp__4657__auto___48411 = cljs.core.seq.call(null,seq__48398_48402);
if(temp__4657__auto___48411){
var seq__48398_48412__$1 = temp__4657__auto___48411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48398_48412__$1)){
var c__31671__auto___48413 = cljs.core.chunk_first.call(null,seq__48398_48412__$1);
var G__48414 = cljs.core.chunk_rest.call(null,seq__48398_48412__$1);
var G__48415 = c__31671__auto___48413;
var G__48416 = cljs.core.count.call(null,c__31671__auto___48413);
var G__48417 = (0);
seq__48398_48402 = G__48414;
chunk__48399_48403 = G__48415;
count__48400_48404 = G__48416;
i__48401_48405 = G__48417;
continue;
} else {
var f_48418 = cljs.core.first.call(null,seq__48398_48412__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_48418);

var G__48419 = cljs.core.next.call(null,seq__48398_48412__$1);
var G__48420 = null;
var G__48421 = (0);
var G__48422 = (0);
seq__48398_48402 = G__48419;
chunk__48399_48403 = G__48420;
count__48400_48404 = G__48421;
i__48401_48405 = G__48422;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__48396,map__48396__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__48396,map__48396__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1471771452642