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
var or__30819__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30819__auto__){
return or__30819__auto__;
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
var or__30819__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__30819__auto__)){
return or__30819__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47249_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47249_SHARP_));
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
var seq__47254 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47255 = null;
var count__47256 = (0);
var i__47257 = (0);
while(true){
if((i__47257 < count__47256)){
var n = cljs.core._nth.call(null,chunk__47255,i__47257);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47258 = seq__47254;
var G__47259 = chunk__47255;
var G__47260 = count__47256;
var G__47261 = (i__47257 + (1));
seq__47254 = G__47258;
chunk__47255 = G__47259;
count__47256 = G__47260;
i__47257 = G__47261;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47254);
if(temp__4657__auto__){
var seq__47254__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47254__$1)){
var c__31630__auto__ = cljs.core.chunk_first.call(null,seq__47254__$1);
var G__47262 = cljs.core.chunk_rest.call(null,seq__47254__$1);
var G__47263 = c__31630__auto__;
var G__47264 = cljs.core.count.call(null,c__31630__auto__);
var G__47265 = (0);
seq__47254 = G__47262;
chunk__47255 = G__47263;
count__47256 = G__47264;
i__47257 = G__47265;
continue;
} else {
var n = cljs.core.first.call(null,seq__47254__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47266 = cljs.core.next.call(null,seq__47254__$1);
var G__47267 = null;
var G__47268 = (0);
var G__47269 = (0);
seq__47254 = G__47266;
chunk__47255 = G__47267;
count__47256 = G__47268;
i__47257 = G__47269;
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

var seq__47320_47331 = cljs.core.seq.call(null,deps);
var chunk__47321_47332 = null;
var count__47322_47333 = (0);
var i__47323_47334 = (0);
while(true){
if((i__47323_47334 < count__47322_47333)){
var dep_47335 = cljs.core._nth.call(null,chunk__47321_47332,i__47323_47334);
topo_sort_helper_STAR_.call(null,dep_47335,(depth + (1)),state);

var G__47336 = seq__47320_47331;
var G__47337 = chunk__47321_47332;
var G__47338 = count__47322_47333;
var G__47339 = (i__47323_47334 + (1));
seq__47320_47331 = G__47336;
chunk__47321_47332 = G__47337;
count__47322_47333 = G__47338;
i__47323_47334 = G__47339;
continue;
} else {
var temp__4657__auto___47340 = cljs.core.seq.call(null,seq__47320_47331);
if(temp__4657__auto___47340){
var seq__47320_47341__$1 = temp__4657__auto___47340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47320_47341__$1)){
var c__31630__auto___47342 = cljs.core.chunk_first.call(null,seq__47320_47341__$1);
var G__47343 = cljs.core.chunk_rest.call(null,seq__47320_47341__$1);
var G__47344 = c__31630__auto___47342;
var G__47345 = cljs.core.count.call(null,c__31630__auto___47342);
var G__47346 = (0);
seq__47320_47331 = G__47343;
chunk__47321_47332 = G__47344;
count__47322_47333 = G__47345;
i__47323_47334 = G__47346;
continue;
} else {
var dep_47347 = cljs.core.first.call(null,seq__47320_47341__$1);
topo_sort_helper_STAR_.call(null,dep_47347,(depth + (1)),state);

var G__47348 = cljs.core.next.call(null,seq__47320_47341__$1);
var G__47349 = null;
var G__47350 = (0);
var G__47351 = (0);
seq__47320_47331 = G__47348;
chunk__47321_47332 = G__47349;
count__47322_47333 = G__47350;
i__47323_47334 = G__47351;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47324){
var vec__47328 = p__47324;
var seq__47329 = cljs.core.seq.call(null,vec__47328);
var first__47330 = cljs.core.first.call(null,seq__47329);
var seq__47329__$1 = cljs.core.next.call(null,seq__47329);
var x = first__47330;
var xs = seq__47329__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47328,seq__47329,first__47330,seq__47329__$1,x,xs,get_deps__$1){
return (function (p1__47270_SHARP_){
return clojure.set.difference.call(null,p1__47270_SHARP_,x);
});})(vec__47328,seq__47329,first__47330,seq__47329__$1,x,xs,get_deps__$1))
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
var seq__47364 = cljs.core.seq.call(null,provides);
var chunk__47365 = null;
var count__47366 = (0);
var i__47367 = (0);
while(true){
if((i__47367 < count__47366)){
var prov = cljs.core._nth.call(null,chunk__47365,i__47367);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47368_47376 = cljs.core.seq.call(null,requires);
var chunk__47369_47377 = null;
var count__47370_47378 = (0);
var i__47371_47379 = (0);
while(true){
if((i__47371_47379 < count__47370_47378)){
var req_47380 = cljs.core._nth.call(null,chunk__47369_47377,i__47371_47379);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47380,prov);

var G__47381 = seq__47368_47376;
var G__47382 = chunk__47369_47377;
var G__47383 = count__47370_47378;
var G__47384 = (i__47371_47379 + (1));
seq__47368_47376 = G__47381;
chunk__47369_47377 = G__47382;
count__47370_47378 = G__47383;
i__47371_47379 = G__47384;
continue;
} else {
var temp__4657__auto___47385 = cljs.core.seq.call(null,seq__47368_47376);
if(temp__4657__auto___47385){
var seq__47368_47386__$1 = temp__4657__auto___47385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47368_47386__$1)){
var c__31630__auto___47387 = cljs.core.chunk_first.call(null,seq__47368_47386__$1);
var G__47388 = cljs.core.chunk_rest.call(null,seq__47368_47386__$1);
var G__47389 = c__31630__auto___47387;
var G__47390 = cljs.core.count.call(null,c__31630__auto___47387);
var G__47391 = (0);
seq__47368_47376 = G__47388;
chunk__47369_47377 = G__47389;
count__47370_47378 = G__47390;
i__47371_47379 = G__47391;
continue;
} else {
var req_47392 = cljs.core.first.call(null,seq__47368_47386__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47392,prov);

var G__47393 = cljs.core.next.call(null,seq__47368_47386__$1);
var G__47394 = null;
var G__47395 = (0);
var G__47396 = (0);
seq__47368_47376 = G__47393;
chunk__47369_47377 = G__47394;
count__47370_47378 = G__47395;
i__47371_47379 = G__47396;
continue;
}
} else {
}
}
break;
}

var G__47397 = seq__47364;
var G__47398 = chunk__47365;
var G__47399 = count__47366;
var G__47400 = (i__47367 + (1));
seq__47364 = G__47397;
chunk__47365 = G__47398;
count__47366 = G__47399;
i__47367 = G__47400;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47364);
if(temp__4657__auto__){
var seq__47364__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47364__$1)){
var c__31630__auto__ = cljs.core.chunk_first.call(null,seq__47364__$1);
var G__47401 = cljs.core.chunk_rest.call(null,seq__47364__$1);
var G__47402 = c__31630__auto__;
var G__47403 = cljs.core.count.call(null,c__31630__auto__);
var G__47404 = (0);
seq__47364 = G__47401;
chunk__47365 = G__47402;
count__47366 = G__47403;
i__47367 = G__47404;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47364__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47372_47405 = cljs.core.seq.call(null,requires);
var chunk__47373_47406 = null;
var count__47374_47407 = (0);
var i__47375_47408 = (0);
while(true){
if((i__47375_47408 < count__47374_47407)){
var req_47409 = cljs.core._nth.call(null,chunk__47373_47406,i__47375_47408);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47409,prov);

var G__47410 = seq__47372_47405;
var G__47411 = chunk__47373_47406;
var G__47412 = count__47374_47407;
var G__47413 = (i__47375_47408 + (1));
seq__47372_47405 = G__47410;
chunk__47373_47406 = G__47411;
count__47374_47407 = G__47412;
i__47375_47408 = G__47413;
continue;
} else {
var temp__4657__auto___47414__$1 = cljs.core.seq.call(null,seq__47372_47405);
if(temp__4657__auto___47414__$1){
var seq__47372_47415__$1 = temp__4657__auto___47414__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47372_47415__$1)){
var c__31630__auto___47416 = cljs.core.chunk_first.call(null,seq__47372_47415__$1);
var G__47417 = cljs.core.chunk_rest.call(null,seq__47372_47415__$1);
var G__47418 = c__31630__auto___47416;
var G__47419 = cljs.core.count.call(null,c__31630__auto___47416);
var G__47420 = (0);
seq__47372_47405 = G__47417;
chunk__47373_47406 = G__47418;
count__47374_47407 = G__47419;
i__47375_47408 = G__47420;
continue;
} else {
var req_47421 = cljs.core.first.call(null,seq__47372_47415__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47421,prov);

var G__47422 = cljs.core.next.call(null,seq__47372_47415__$1);
var G__47423 = null;
var G__47424 = (0);
var G__47425 = (0);
seq__47372_47405 = G__47422;
chunk__47373_47406 = G__47423;
count__47374_47407 = G__47424;
i__47375_47408 = G__47425;
continue;
}
} else {
}
}
break;
}

var G__47426 = cljs.core.next.call(null,seq__47364__$1);
var G__47427 = null;
var G__47428 = (0);
var G__47429 = (0);
seq__47364 = G__47426;
chunk__47365 = G__47427;
count__47366 = G__47428;
i__47367 = G__47429;
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
var seq__47434_47438 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47435_47439 = null;
var count__47436_47440 = (0);
var i__47437_47441 = (0);
while(true){
if((i__47437_47441 < count__47436_47440)){
var ns_47442 = cljs.core._nth.call(null,chunk__47435_47439,i__47437_47441);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47442);

var G__47443 = seq__47434_47438;
var G__47444 = chunk__47435_47439;
var G__47445 = count__47436_47440;
var G__47446 = (i__47437_47441 + (1));
seq__47434_47438 = G__47443;
chunk__47435_47439 = G__47444;
count__47436_47440 = G__47445;
i__47437_47441 = G__47446;
continue;
} else {
var temp__4657__auto___47447 = cljs.core.seq.call(null,seq__47434_47438);
if(temp__4657__auto___47447){
var seq__47434_47448__$1 = temp__4657__auto___47447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47434_47448__$1)){
var c__31630__auto___47449 = cljs.core.chunk_first.call(null,seq__47434_47448__$1);
var G__47450 = cljs.core.chunk_rest.call(null,seq__47434_47448__$1);
var G__47451 = c__31630__auto___47449;
var G__47452 = cljs.core.count.call(null,c__31630__auto___47449);
var G__47453 = (0);
seq__47434_47438 = G__47450;
chunk__47435_47439 = G__47451;
count__47436_47440 = G__47452;
i__47437_47441 = G__47453;
continue;
} else {
var ns_47454 = cljs.core.first.call(null,seq__47434_47448__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47454);

var G__47455 = cljs.core.next.call(null,seq__47434_47448__$1);
var G__47456 = null;
var G__47457 = (0);
var G__47458 = (0);
seq__47434_47438 = G__47455;
chunk__47435_47439 = G__47456;
count__47436_47440 = G__47457;
i__47437_47441 = G__47458;
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
goog.require_figwheel_backup_ = (function (){var or__30819__auto__ = goog.require__;
if(cljs.core.truth_(or__30819__auto__)){
return or__30819__auto__;
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
var G__47459__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47460__i = 0, G__47460__a = new Array(arguments.length -  0);
while (G__47460__i < G__47460__a.length) {G__47460__a[G__47460__i] = arguments[G__47460__i + 0]; ++G__47460__i;}
  args = new cljs.core.IndexedSeq(G__47460__a,0);
} 
return G__47459__delegate.call(this,args);};
G__47459.cljs$lang$maxFixedArity = 0;
G__47459.cljs$lang$applyTo = (function (arglist__47461){
var args = cljs.core.seq(arglist__47461);
return G__47459__delegate(args);
});
G__47459.cljs$core$IFn$_invoke$arity$variadic = G__47459__delegate;
return G__47459;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47463 = cljs.core._EQ_;
var expr__47464 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47463.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47464))){
var path_parts = ((function (pred__47463,expr__47464){
return (function (p1__47462_SHARP_){
return clojure.string.split.call(null,p1__47462_SHARP_,/[\/\\]/);
});})(pred__47463,expr__47464))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__47463,expr__47464){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47466){if((e47466 instanceof Error)){
var e = e47466;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47466;

}
}})());
});
;})(path_parts,sep,root,pred__47463,expr__47464))
} else {
if(cljs.core.truth_(pred__47463.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47464))){
return ((function (pred__47463,expr__47464){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__47463,expr__47464){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__47463,expr__47464))
);

return deferred.addErrback(((function (deferred,pred__47463,expr__47464){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__47463,expr__47464))
);
});
;})(pred__47463,expr__47464))
} else {
return ((function (pred__47463,expr__47464){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47463,expr__47464))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47467,callback){
var map__47470 = p__47467;
var map__47470__$1 = ((((!((map__47470 == null)))?((((map__47470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47470):map__47470);
var file_msg = map__47470__$1;
var request_url = cljs.core.get.call(null,map__47470__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__47470,map__47470__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47470,map__47470__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__35798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto__){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto__){
return (function (state_47494){
var state_val_47495 = (state_47494[(1)]);
if((state_val_47495 === (7))){
var inst_47490 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
var statearr_47496_47516 = state_47494__$1;
(statearr_47496_47516[(2)] = inst_47490);

(statearr_47496_47516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (1))){
var state_47494__$1 = state_47494;
var statearr_47497_47517 = state_47494__$1;
(statearr_47497_47517[(2)] = null);

(statearr_47497_47517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (4))){
var inst_47474 = (state_47494[(7)]);
var inst_47474__$1 = (state_47494[(2)]);
var state_47494__$1 = (function (){var statearr_47498 = state_47494;
(statearr_47498[(7)] = inst_47474__$1);

return statearr_47498;
})();
if(cljs.core.truth_(inst_47474__$1)){
var statearr_47499_47518 = state_47494__$1;
(statearr_47499_47518[(1)] = (5));

} else {
var statearr_47500_47519 = state_47494__$1;
(statearr_47500_47519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (6))){
var state_47494__$1 = state_47494;
var statearr_47501_47520 = state_47494__$1;
(statearr_47501_47520[(2)] = null);

(statearr_47501_47520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (3))){
var inst_47492 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47494__$1,inst_47492);
} else {
if((state_val_47495 === (2))){
var state_47494__$1 = state_47494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47494__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47495 === (11))){
var inst_47486 = (state_47494[(2)]);
var state_47494__$1 = (function (){var statearr_47502 = state_47494;
(statearr_47502[(8)] = inst_47486);

return statearr_47502;
})();
var statearr_47503_47521 = state_47494__$1;
(statearr_47503_47521[(2)] = null);

(statearr_47503_47521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (9))){
var inst_47480 = (state_47494[(9)]);
var inst_47478 = (state_47494[(10)]);
var inst_47482 = inst_47480.call(null,inst_47478);
var state_47494__$1 = state_47494;
var statearr_47504_47522 = state_47494__$1;
(statearr_47504_47522[(2)] = inst_47482);

(statearr_47504_47522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (5))){
var inst_47474 = (state_47494[(7)]);
var inst_47476 = figwheel.client.file_reloading.blocking_load.call(null,inst_47474);
var state_47494__$1 = state_47494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47494__$1,(8),inst_47476);
} else {
if((state_val_47495 === (10))){
var inst_47478 = (state_47494[(10)]);
var inst_47484 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47478);
var state_47494__$1 = state_47494;
var statearr_47505_47523 = state_47494__$1;
(statearr_47505_47523[(2)] = inst_47484);

(statearr_47505_47523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (8))){
var inst_47480 = (state_47494[(9)]);
var inst_47474 = (state_47494[(7)]);
var inst_47478 = (state_47494[(2)]);
var inst_47479 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47480__$1 = cljs.core.get.call(null,inst_47479,inst_47474);
var state_47494__$1 = (function (){var statearr_47506 = state_47494;
(statearr_47506[(9)] = inst_47480__$1);

(statearr_47506[(10)] = inst_47478);

return statearr_47506;
})();
if(cljs.core.truth_(inst_47480__$1)){
var statearr_47507_47524 = state_47494__$1;
(statearr_47507_47524[(1)] = (9));

} else {
var statearr_47508_47525 = state_47494__$1;
(statearr_47508_47525[(1)] = (10));

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
});})(c__35798__auto__))
;
return ((function (switch__35686__auto__,c__35798__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35687__auto__ = null;
var figwheel$client$file_reloading$state_machine__35687__auto____0 = (function (){
var statearr_47512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47512[(0)] = figwheel$client$file_reloading$state_machine__35687__auto__);

(statearr_47512[(1)] = (1));

return statearr_47512;
});
var figwheel$client$file_reloading$state_machine__35687__auto____1 = (function (state_47494){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_47494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e47513){if((e47513 instanceof Object)){
var ex__35690__auto__ = e47513;
var statearr_47514_47526 = state_47494;
(statearr_47514_47526[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47527 = state_47494;
state_47494 = G__47527;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35687__auto__ = function(state_47494){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35687__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35687__auto____1.call(this,state_47494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35687__auto____0;
figwheel$client$file_reloading$state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35687__auto____1;
return figwheel$client$file_reloading$state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto__))
})();
var state__35800__auto__ = (function (){var statearr_47515 = f__35799__auto__.call(null);
(statearr_47515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto__);

return statearr_47515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto__))
);

return c__35798__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47528,callback){
var map__47531 = p__47528;
var map__47531__$1 = ((((!((map__47531 == null)))?((((map__47531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47531):map__47531);
var file_msg = map__47531__$1;
var namespace = cljs.core.get.call(null,map__47531__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47531,map__47531__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47531,map__47531__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47533){
var map__47536 = p__47533;
var map__47536__$1 = ((((!((map__47536 == null)))?((((map__47536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47536):map__47536);
var file_msg = map__47536__$1;
var namespace = cljs.core.get.call(null,map__47536__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30807__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__30807__auto__){
var or__30819__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30819__auto__)){
return or__30819__auto__;
} else {
var or__30819__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30819__auto____$1)){
return or__30819__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30807__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47538,callback){
var map__47541 = p__47538;
var map__47541__$1 = ((((!((map__47541 == null)))?((((map__47541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47541):map__47541);
var file_msg = map__47541__$1;
var request_url = cljs.core.get.call(null,map__47541__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47541__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__35798__auto___47645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto___47645,out){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto___47645,out){
return (function (state_47627){
var state_val_47628 = (state_47627[(1)]);
if((state_val_47628 === (1))){
var inst_47601 = cljs.core.seq.call(null,files);
var inst_47602 = cljs.core.first.call(null,inst_47601);
var inst_47603 = cljs.core.next.call(null,inst_47601);
var inst_47604 = files;
var state_47627__$1 = (function (){var statearr_47629 = state_47627;
(statearr_47629[(7)] = inst_47604);

(statearr_47629[(8)] = inst_47602);

(statearr_47629[(9)] = inst_47603);

return statearr_47629;
})();
var statearr_47630_47646 = state_47627__$1;
(statearr_47630_47646[(2)] = null);

(statearr_47630_47646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47628 === (2))){
var inst_47604 = (state_47627[(7)]);
var inst_47610 = (state_47627[(10)]);
var inst_47609 = cljs.core.seq.call(null,inst_47604);
var inst_47610__$1 = cljs.core.first.call(null,inst_47609);
var inst_47611 = cljs.core.next.call(null,inst_47609);
var inst_47612 = (inst_47610__$1 == null);
var inst_47613 = cljs.core.not.call(null,inst_47612);
var state_47627__$1 = (function (){var statearr_47631 = state_47627;
(statearr_47631[(10)] = inst_47610__$1);

(statearr_47631[(11)] = inst_47611);

return statearr_47631;
})();
if(inst_47613){
var statearr_47632_47647 = state_47627__$1;
(statearr_47632_47647[(1)] = (4));

} else {
var statearr_47633_47648 = state_47627__$1;
(statearr_47633_47648[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47628 === (3))){
var inst_47625 = (state_47627[(2)]);
var state_47627__$1 = state_47627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47627__$1,inst_47625);
} else {
if((state_val_47628 === (4))){
var inst_47610 = (state_47627[(10)]);
var inst_47615 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47610);
var state_47627__$1 = state_47627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47627__$1,(7),inst_47615);
} else {
if((state_val_47628 === (5))){
var inst_47621 = cljs.core.async.close_BANG_.call(null,out);
var state_47627__$1 = state_47627;
var statearr_47634_47649 = state_47627__$1;
(statearr_47634_47649[(2)] = inst_47621);

(statearr_47634_47649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47628 === (6))){
var inst_47623 = (state_47627[(2)]);
var state_47627__$1 = state_47627;
var statearr_47635_47650 = state_47627__$1;
(statearr_47635_47650[(2)] = inst_47623);

(statearr_47635_47650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47628 === (7))){
var inst_47611 = (state_47627[(11)]);
var inst_47617 = (state_47627[(2)]);
var inst_47618 = cljs.core.async.put_BANG_.call(null,out,inst_47617);
var inst_47604 = inst_47611;
var state_47627__$1 = (function (){var statearr_47636 = state_47627;
(statearr_47636[(7)] = inst_47604);

(statearr_47636[(12)] = inst_47618);

return statearr_47636;
})();
var statearr_47637_47651 = state_47627__$1;
(statearr_47637_47651[(2)] = null);

(statearr_47637_47651[(1)] = (2));


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
});})(c__35798__auto___47645,out))
;
return ((function (switch__35686__auto__,c__35798__auto___47645,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35687__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35687__auto____0 = (function (){
var statearr_47641 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47641[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35687__auto__);

(statearr_47641[(1)] = (1));

return statearr_47641;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35687__auto____1 = (function (state_47627){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_47627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e47642){if((e47642 instanceof Object)){
var ex__35690__auto__ = e47642;
var statearr_47643_47652 = state_47627;
(statearr_47643_47652[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47653 = state_47627;
state_47627 = G__47653;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35687__auto__ = function(state_47627){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35687__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35687__auto____1.call(this,state_47627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35687__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35687__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto___47645,out))
})();
var state__35800__auto__ = (function (){var statearr_47644 = f__35799__auto__.call(null);
(statearr_47644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto___47645);

return statearr_47644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto___47645,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47654,opts){
var map__47658 = p__47654;
var map__47658__$1 = ((((!((map__47658 == null)))?((((map__47658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47658):map__47658);
var eval_body__$1 = cljs.core.get.call(null,map__47658__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47658__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30807__auto__ = eval_body__$1;
if(cljs.core.truth_(and__30807__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__30807__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47660){var e = e47660;
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
return (function (p1__47661_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47661_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__47670){
var vec__47671 = p__47670;
var k = cljs.core.nth.call(null,vec__47671,(0),null);
var v = cljs.core.nth.call(null,vec__47671,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47674){
var vec__47675 = p__47674;
var k = cljs.core.nth.call(null,vec__47675,(0),null);
var v = cljs.core.nth.call(null,vec__47675,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47681,p__47682){
var map__47929 = p__47681;
var map__47929__$1 = ((((!((map__47929 == null)))?((((map__47929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47929):map__47929);
var opts = map__47929__$1;
var before_jsload = cljs.core.get.call(null,map__47929__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47929__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47929__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47930 = p__47682;
var map__47930__$1 = ((((!((map__47930 == null)))?((((map__47930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47930):map__47930);
var msg = map__47930__$1;
var files = cljs.core.get.call(null,map__47930__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47930__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47930__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35799__auto__ = (function (){var switch__35686__auto__ = ((function (c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_48083){
var state_val_48084 = (state_48083[(1)]);
if((state_val_48084 === (7))){
var inst_47945 = (state_48083[(7)]);
var inst_47944 = (state_48083[(8)]);
var inst_47947 = (state_48083[(9)]);
var inst_47946 = (state_48083[(10)]);
var inst_47952 = cljs.core._nth.call(null,inst_47945,inst_47947);
var inst_47953 = figwheel.client.file_reloading.eval_body.call(null,inst_47952,opts);
var inst_47954 = (inst_47947 + (1));
var tmp48085 = inst_47945;
var tmp48086 = inst_47944;
var tmp48087 = inst_47946;
var inst_47944__$1 = tmp48086;
var inst_47945__$1 = tmp48085;
var inst_47946__$1 = tmp48087;
var inst_47947__$1 = inst_47954;
var state_48083__$1 = (function (){var statearr_48088 = state_48083;
(statearr_48088[(7)] = inst_47945__$1);

(statearr_48088[(8)] = inst_47944__$1);

(statearr_48088[(9)] = inst_47947__$1);

(statearr_48088[(10)] = inst_47946__$1);

(statearr_48088[(11)] = inst_47953);

return statearr_48088;
})();
var statearr_48089_48175 = state_48083__$1;
(statearr_48089_48175[(2)] = null);

(statearr_48089_48175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (20))){
var inst_47987 = (state_48083[(12)]);
var inst_47995 = figwheel.client.file_reloading.sort_files.call(null,inst_47987);
var state_48083__$1 = state_48083;
var statearr_48090_48176 = state_48083__$1;
(statearr_48090_48176[(2)] = inst_47995);

(statearr_48090_48176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (27))){
var state_48083__$1 = state_48083;
var statearr_48091_48177 = state_48083__$1;
(statearr_48091_48177[(2)] = null);

(statearr_48091_48177[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (1))){
var inst_47936 = (state_48083[(13)]);
var inst_47933 = before_jsload.call(null,files);
var inst_47934 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47935 = (function (){return ((function (inst_47936,inst_47933,inst_47934,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47678_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47678_SHARP_);
});
;})(inst_47936,inst_47933,inst_47934,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47936__$1 = cljs.core.filter.call(null,inst_47935,files);
var inst_47937 = cljs.core.not_empty.call(null,inst_47936__$1);
var state_48083__$1 = (function (){var statearr_48092 = state_48083;
(statearr_48092[(14)] = inst_47934);

(statearr_48092[(13)] = inst_47936__$1);

(statearr_48092[(15)] = inst_47933);

return statearr_48092;
})();
if(cljs.core.truth_(inst_47937)){
var statearr_48093_48178 = state_48083__$1;
(statearr_48093_48178[(1)] = (2));

} else {
var statearr_48094_48179 = state_48083__$1;
(statearr_48094_48179[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (24))){
var state_48083__$1 = state_48083;
var statearr_48095_48180 = state_48083__$1;
(statearr_48095_48180[(2)] = null);

(statearr_48095_48180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (39))){
var inst_48037 = (state_48083[(16)]);
var state_48083__$1 = state_48083;
var statearr_48096_48181 = state_48083__$1;
(statearr_48096_48181[(2)] = inst_48037);

(statearr_48096_48181[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (46))){
var inst_48078 = (state_48083[(2)]);
var state_48083__$1 = state_48083;
var statearr_48097_48182 = state_48083__$1;
(statearr_48097_48182[(2)] = inst_48078);

(statearr_48097_48182[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (4))){
var inst_47981 = (state_48083[(2)]);
var inst_47982 = cljs.core.List.EMPTY;
var inst_47983 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47982);
var inst_47984 = (function (){return ((function (inst_47981,inst_47982,inst_47983,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47679_SHARP_){
var and__30807__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47679_SHARP_);
if(cljs.core.truth_(and__30807__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47679_SHARP_));
} else {
return and__30807__auto__;
}
});
;})(inst_47981,inst_47982,inst_47983,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47985 = cljs.core.filter.call(null,inst_47984,files);
var inst_47986 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47987 = cljs.core.concat.call(null,inst_47985,inst_47986);
var state_48083__$1 = (function (){var statearr_48098 = state_48083;
(statearr_48098[(17)] = inst_47981);

(statearr_48098[(12)] = inst_47987);

(statearr_48098[(18)] = inst_47983);

return statearr_48098;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48099_48183 = state_48083__$1;
(statearr_48099_48183[(1)] = (16));

} else {
var statearr_48100_48184 = state_48083__$1;
(statearr_48100_48184[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (15))){
var inst_47971 = (state_48083[(2)]);
var state_48083__$1 = state_48083;
var statearr_48101_48185 = state_48083__$1;
(statearr_48101_48185[(2)] = inst_47971);

(statearr_48101_48185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (21))){
var inst_47997 = (state_48083[(19)]);
var inst_47997__$1 = (state_48083[(2)]);
var inst_47998 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47997__$1);
var state_48083__$1 = (function (){var statearr_48102 = state_48083;
(statearr_48102[(19)] = inst_47997__$1);

return statearr_48102;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48083__$1,(22),inst_47998);
} else {
if((state_val_48084 === (31))){
var inst_48081 = (state_48083[(2)]);
var state_48083__$1 = state_48083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48083__$1,inst_48081);
} else {
if((state_val_48084 === (32))){
var inst_48037 = (state_48083[(16)]);
var inst_48042 = inst_48037.cljs$lang$protocol_mask$partition0$;
var inst_48043 = (inst_48042 & (64));
var inst_48044 = inst_48037.cljs$core$ISeq$;
var inst_48045 = (inst_48043) || (inst_48044);
var state_48083__$1 = state_48083;
if(cljs.core.truth_(inst_48045)){
var statearr_48103_48186 = state_48083__$1;
(statearr_48103_48186[(1)] = (35));

} else {
var statearr_48104_48187 = state_48083__$1;
(statearr_48104_48187[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (40))){
var inst_48058 = (state_48083[(20)]);
var inst_48057 = (state_48083[(2)]);
var inst_48058__$1 = cljs.core.get.call(null,inst_48057,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48059 = cljs.core.get.call(null,inst_48057,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48060 = cljs.core.not_empty.call(null,inst_48058__$1);
var state_48083__$1 = (function (){var statearr_48105 = state_48083;
(statearr_48105[(20)] = inst_48058__$1);

(statearr_48105[(21)] = inst_48059);

return statearr_48105;
})();
if(cljs.core.truth_(inst_48060)){
var statearr_48106_48188 = state_48083__$1;
(statearr_48106_48188[(1)] = (41));

} else {
var statearr_48107_48189 = state_48083__$1;
(statearr_48107_48189[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (33))){
var state_48083__$1 = state_48083;
var statearr_48108_48190 = state_48083__$1;
(statearr_48108_48190[(2)] = false);

(statearr_48108_48190[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (13))){
var inst_47957 = (state_48083[(22)]);
var inst_47961 = cljs.core.chunk_first.call(null,inst_47957);
var inst_47962 = cljs.core.chunk_rest.call(null,inst_47957);
var inst_47963 = cljs.core.count.call(null,inst_47961);
var inst_47944 = inst_47962;
var inst_47945 = inst_47961;
var inst_47946 = inst_47963;
var inst_47947 = (0);
var state_48083__$1 = (function (){var statearr_48109 = state_48083;
(statearr_48109[(7)] = inst_47945);

(statearr_48109[(8)] = inst_47944);

(statearr_48109[(9)] = inst_47947);

(statearr_48109[(10)] = inst_47946);

return statearr_48109;
})();
var statearr_48110_48191 = state_48083__$1;
(statearr_48110_48191[(2)] = null);

(statearr_48110_48191[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (22))){
var inst_48005 = (state_48083[(23)]);
var inst_48001 = (state_48083[(24)]);
var inst_48000 = (state_48083[(25)]);
var inst_47997 = (state_48083[(19)]);
var inst_48000__$1 = (state_48083[(2)]);
var inst_48001__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48000__$1);
var inst_48002 = (function (){var all_files = inst_47997;
var res_SINGLEQUOTE_ = inst_48000__$1;
var res = inst_48001__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_48005,inst_48001,inst_48000,inst_47997,inst_48000__$1,inst_48001__$1,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47680_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47680_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_48005,inst_48001,inst_48000,inst_47997,inst_48000__$1,inst_48001__$1,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48003 = cljs.core.filter.call(null,inst_48002,inst_48000__$1);
var inst_48004 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48005__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48004);
var inst_48006 = cljs.core.not_empty.call(null,inst_48005__$1);
var state_48083__$1 = (function (){var statearr_48111 = state_48083;
(statearr_48111[(23)] = inst_48005__$1);

(statearr_48111[(24)] = inst_48001__$1);

(statearr_48111[(26)] = inst_48003);

(statearr_48111[(25)] = inst_48000__$1);

return statearr_48111;
})();
if(cljs.core.truth_(inst_48006)){
var statearr_48112_48192 = state_48083__$1;
(statearr_48112_48192[(1)] = (23));

} else {
var statearr_48113_48193 = state_48083__$1;
(statearr_48113_48193[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (36))){
var state_48083__$1 = state_48083;
var statearr_48114_48194 = state_48083__$1;
(statearr_48114_48194[(2)] = false);

(statearr_48114_48194[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (41))){
var inst_48058 = (state_48083[(20)]);
var inst_48062 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48063 = cljs.core.map.call(null,inst_48062,inst_48058);
var inst_48064 = cljs.core.pr_str.call(null,inst_48063);
var inst_48065 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_48064)].join('');
var inst_48066 = figwheel.client.utils.log.call(null,inst_48065);
var state_48083__$1 = state_48083;
var statearr_48115_48195 = state_48083__$1;
(statearr_48115_48195[(2)] = inst_48066);

(statearr_48115_48195[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (43))){
var inst_48059 = (state_48083[(21)]);
var inst_48069 = (state_48083[(2)]);
var inst_48070 = cljs.core.not_empty.call(null,inst_48059);
var state_48083__$1 = (function (){var statearr_48116 = state_48083;
(statearr_48116[(27)] = inst_48069);

return statearr_48116;
})();
if(cljs.core.truth_(inst_48070)){
var statearr_48117_48196 = state_48083__$1;
(statearr_48117_48196[(1)] = (44));

} else {
var statearr_48118_48197 = state_48083__$1;
(statearr_48118_48197[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (29))){
var inst_48005 = (state_48083[(23)]);
var inst_48001 = (state_48083[(24)]);
var inst_48003 = (state_48083[(26)]);
var inst_48000 = (state_48083[(25)]);
var inst_47997 = (state_48083[(19)]);
var inst_48037 = (state_48083[(16)]);
var inst_48033 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48036 = (function (){var all_files = inst_47997;
var res_SINGLEQUOTE_ = inst_48000;
var res = inst_48001;
var files_not_loaded = inst_48003;
var dependencies_that_loaded = inst_48005;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48005,inst_48001,inst_48003,inst_48000,inst_47997,inst_48037,inst_48033,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48035){
var map__48119 = p__48035;
var map__48119__$1 = ((((!((map__48119 == null)))?((((map__48119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48119):map__48119);
var namespace = cljs.core.get.call(null,map__48119__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48005,inst_48001,inst_48003,inst_48000,inst_47997,inst_48037,inst_48033,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48037__$1 = cljs.core.group_by.call(null,inst_48036,inst_48003);
var inst_48039 = (inst_48037__$1 == null);
var inst_48040 = cljs.core.not.call(null,inst_48039);
var state_48083__$1 = (function (){var statearr_48121 = state_48083;
(statearr_48121[(28)] = inst_48033);

(statearr_48121[(16)] = inst_48037__$1);

return statearr_48121;
})();
if(inst_48040){
var statearr_48122_48198 = state_48083__$1;
(statearr_48122_48198[(1)] = (32));

} else {
var statearr_48123_48199 = state_48083__$1;
(statearr_48123_48199[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (44))){
var inst_48059 = (state_48083[(21)]);
var inst_48072 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48059);
var inst_48073 = cljs.core.pr_str.call(null,inst_48072);
var inst_48074 = [cljs.core.str("not required: "),cljs.core.str(inst_48073)].join('');
var inst_48075 = figwheel.client.utils.log.call(null,inst_48074);
var state_48083__$1 = state_48083;
var statearr_48124_48200 = state_48083__$1;
(statearr_48124_48200[(2)] = inst_48075);

(statearr_48124_48200[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (6))){
var inst_47978 = (state_48083[(2)]);
var state_48083__$1 = state_48083;
var statearr_48125_48201 = state_48083__$1;
(statearr_48125_48201[(2)] = inst_47978);

(statearr_48125_48201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (28))){
var inst_48003 = (state_48083[(26)]);
var inst_48030 = (state_48083[(2)]);
var inst_48031 = cljs.core.not_empty.call(null,inst_48003);
var state_48083__$1 = (function (){var statearr_48126 = state_48083;
(statearr_48126[(29)] = inst_48030);

return statearr_48126;
})();
if(cljs.core.truth_(inst_48031)){
var statearr_48127_48202 = state_48083__$1;
(statearr_48127_48202[(1)] = (29));

} else {
var statearr_48128_48203 = state_48083__$1;
(statearr_48128_48203[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (25))){
var inst_48001 = (state_48083[(24)]);
var inst_48017 = (state_48083[(2)]);
var inst_48018 = cljs.core.not_empty.call(null,inst_48001);
var state_48083__$1 = (function (){var statearr_48129 = state_48083;
(statearr_48129[(30)] = inst_48017);

return statearr_48129;
})();
if(cljs.core.truth_(inst_48018)){
var statearr_48130_48204 = state_48083__$1;
(statearr_48130_48204[(1)] = (26));

} else {
var statearr_48131_48205 = state_48083__$1;
(statearr_48131_48205[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (34))){
var inst_48052 = (state_48083[(2)]);
var state_48083__$1 = state_48083;
if(cljs.core.truth_(inst_48052)){
var statearr_48132_48206 = state_48083__$1;
(statearr_48132_48206[(1)] = (38));

} else {
var statearr_48133_48207 = state_48083__$1;
(statearr_48133_48207[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (17))){
var state_48083__$1 = state_48083;
var statearr_48134_48208 = state_48083__$1;
(statearr_48134_48208[(2)] = recompile_dependents);

(statearr_48134_48208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (3))){
var state_48083__$1 = state_48083;
var statearr_48135_48209 = state_48083__$1;
(statearr_48135_48209[(2)] = null);

(statearr_48135_48209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (12))){
var inst_47974 = (state_48083[(2)]);
var state_48083__$1 = state_48083;
var statearr_48136_48210 = state_48083__$1;
(statearr_48136_48210[(2)] = inst_47974);

(statearr_48136_48210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (2))){
var inst_47936 = (state_48083[(13)]);
var inst_47943 = cljs.core.seq.call(null,inst_47936);
var inst_47944 = inst_47943;
var inst_47945 = null;
var inst_47946 = (0);
var inst_47947 = (0);
var state_48083__$1 = (function (){var statearr_48137 = state_48083;
(statearr_48137[(7)] = inst_47945);

(statearr_48137[(8)] = inst_47944);

(statearr_48137[(9)] = inst_47947);

(statearr_48137[(10)] = inst_47946);

return statearr_48137;
})();
var statearr_48138_48211 = state_48083__$1;
(statearr_48138_48211[(2)] = null);

(statearr_48138_48211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (23))){
var inst_48005 = (state_48083[(23)]);
var inst_48001 = (state_48083[(24)]);
var inst_48003 = (state_48083[(26)]);
var inst_48000 = (state_48083[(25)]);
var inst_47997 = (state_48083[(19)]);
var inst_48008 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48010 = (function (){var all_files = inst_47997;
var res_SINGLEQUOTE_ = inst_48000;
var res = inst_48001;
var files_not_loaded = inst_48003;
var dependencies_that_loaded = inst_48005;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48005,inst_48001,inst_48003,inst_48000,inst_47997,inst_48008,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48009){
var map__48139 = p__48009;
var map__48139__$1 = ((((!((map__48139 == null)))?((((map__48139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48139):map__48139);
var request_url = cljs.core.get.call(null,map__48139__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48005,inst_48001,inst_48003,inst_48000,inst_47997,inst_48008,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48011 = cljs.core.reverse.call(null,inst_48005);
var inst_48012 = cljs.core.map.call(null,inst_48010,inst_48011);
var inst_48013 = cljs.core.pr_str.call(null,inst_48012);
var inst_48014 = figwheel.client.utils.log.call(null,inst_48013);
var state_48083__$1 = (function (){var statearr_48141 = state_48083;
(statearr_48141[(31)] = inst_48008);

return statearr_48141;
})();
var statearr_48142_48212 = state_48083__$1;
(statearr_48142_48212[(2)] = inst_48014);

(statearr_48142_48212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (35))){
var state_48083__$1 = state_48083;
var statearr_48143_48213 = state_48083__$1;
(statearr_48143_48213[(2)] = true);

(statearr_48143_48213[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (19))){
var inst_47987 = (state_48083[(12)]);
var inst_47993 = figwheel.client.file_reloading.expand_files.call(null,inst_47987);
var state_48083__$1 = state_48083;
var statearr_48144_48214 = state_48083__$1;
(statearr_48144_48214[(2)] = inst_47993);

(statearr_48144_48214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (11))){
var state_48083__$1 = state_48083;
var statearr_48145_48215 = state_48083__$1;
(statearr_48145_48215[(2)] = null);

(statearr_48145_48215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (9))){
var inst_47976 = (state_48083[(2)]);
var state_48083__$1 = state_48083;
var statearr_48146_48216 = state_48083__$1;
(statearr_48146_48216[(2)] = inst_47976);

(statearr_48146_48216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (5))){
var inst_47947 = (state_48083[(9)]);
var inst_47946 = (state_48083[(10)]);
var inst_47949 = (inst_47947 < inst_47946);
var inst_47950 = inst_47949;
var state_48083__$1 = state_48083;
if(cljs.core.truth_(inst_47950)){
var statearr_48147_48217 = state_48083__$1;
(statearr_48147_48217[(1)] = (7));

} else {
var statearr_48148_48218 = state_48083__$1;
(statearr_48148_48218[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (14))){
var inst_47957 = (state_48083[(22)]);
var inst_47966 = cljs.core.first.call(null,inst_47957);
var inst_47967 = figwheel.client.file_reloading.eval_body.call(null,inst_47966,opts);
var inst_47968 = cljs.core.next.call(null,inst_47957);
var inst_47944 = inst_47968;
var inst_47945 = null;
var inst_47946 = (0);
var inst_47947 = (0);
var state_48083__$1 = (function (){var statearr_48149 = state_48083;
(statearr_48149[(7)] = inst_47945);

(statearr_48149[(8)] = inst_47944);

(statearr_48149[(9)] = inst_47947);

(statearr_48149[(10)] = inst_47946);

(statearr_48149[(32)] = inst_47967);

return statearr_48149;
})();
var statearr_48150_48219 = state_48083__$1;
(statearr_48150_48219[(2)] = null);

(statearr_48150_48219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (45))){
var state_48083__$1 = state_48083;
var statearr_48151_48220 = state_48083__$1;
(statearr_48151_48220[(2)] = null);

(statearr_48151_48220[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (26))){
var inst_48005 = (state_48083[(23)]);
var inst_48001 = (state_48083[(24)]);
var inst_48003 = (state_48083[(26)]);
var inst_48000 = (state_48083[(25)]);
var inst_47997 = (state_48083[(19)]);
var inst_48020 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48022 = (function (){var all_files = inst_47997;
var res_SINGLEQUOTE_ = inst_48000;
var res = inst_48001;
var files_not_loaded = inst_48003;
var dependencies_that_loaded = inst_48005;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48005,inst_48001,inst_48003,inst_48000,inst_47997,inst_48020,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48021){
var map__48152 = p__48021;
var map__48152__$1 = ((((!((map__48152 == null)))?((((map__48152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48152):map__48152);
var namespace = cljs.core.get.call(null,map__48152__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48152__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48005,inst_48001,inst_48003,inst_48000,inst_47997,inst_48020,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48023 = cljs.core.map.call(null,inst_48022,inst_48001);
var inst_48024 = cljs.core.pr_str.call(null,inst_48023);
var inst_48025 = figwheel.client.utils.log.call(null,inst_48024);
var inst_48026 = (function (){var all_files = inst_47997;
var res_SINGLEQUOTE_ = inst_48000;
var res = inst_48001;
var files_not_loaded = inst_48003;
var dependencies_that_loaded = inst_48005;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48005,inst_48001,inst_48003,inst_48000,inst_47997,inst_48020,inst_48022,inst_48023,inst_48024,inst_48025,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48005,inst_48001,inst_48003,inst_48000,inst_47997,inst_48020,inst_48022,inst_48023,inst_48024,inst_48025,state_val_48084,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48027 = setTimeout(inst_48026,(10));
var state_48083__$1 = (function (){var statearr_48154 = state_48083;
(statearr_48154[(33)] = inst_48025);

(statearr_48154[(34)] = inst_48020);

return statearr_48154;
})();
var statearr_48155_48221 = state_48083__$1;
(statearr_48155_48221[(2)] = inst_48027);

(statearr_48155_48221[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (16))){
var state_48083__$1 = state_48083;
var statearr_48156_48222 = state_48083__$1;
(statearr_48156_48222[(2)] = reload_dependents);

(statearr_48156_48222[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (38))){
var inst_48037 = (state_48083[(16)]);
var inst_48054 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48037);
var state_48083__$1 = state_48083;
var statearr_48157_48223 = state_48083__$1;
(statearr_48157_48223[(2)] = inst_48054);

(statearr_48157_48223[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (30))){
var state_48083__$1 = state_48083;
var statearr_48158_48224 = state_48083__$1;
(statearr_48158_48224[(2)] = null);

(statearr_48158_48224[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (10))){
var inst_47957 = (state_48083[(22)]);
var inst_47959 = cljs.core.chunked_seq_QMARK_.call(null,inst_47957);
var state_48083__$1 = state_48083;
if(inst_47959){
var statearr_48159_48225 = state_48083__$1;
(statearr_48159_48225[(1)] = (13));

} else {
var statearr_48160_48226 = state_48083__$1;
(statearr_48160_48226[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (18))){
var inst_47991 = (state_48083[(2)]);
var state_48083__$1 = state_48083;
if(cljs.core.truth_(inst_47991)){
var statearr_48161_48227 = state_48083__$1;
(statearr_48161_48227[(1)] = (19));

} else {
var statearr_48162_48228 = state_48083__$1;
(statearr_48162_48228[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (42))){
var state_48083__$1 = state_48083;
var statearr_48163_48229 = state_48083__$1;
(statearr_48163_48229[(2)] = null);

(statearr_48163_48229[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (37))){
var inst_48049 = (state_48083[(2)]);
var state_48083__$1 = state_48083;
var statearr_48164_48230 = state_48083__$1;
(statearr_48164_48230[(2)] = inst_48049);

(statearr_48164_48230[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48084 === (8))){
var inst_47944 = (state_48083[(8)]);
var inst_47957 = (state_48083[(22)]);
var inst_47957__$1 = cljs.core.seq.call(null,inst_47944);
var state_48083__$1 = (function (){var statearr_48165 = state_48083;
(statearr_48165[(22)] = inst_47957__$1);

return statearr_48165;
})();
if(inst_47957__$1){
var statearr_48166_48231 = state_48083__$1;
(statearr_48166_48231[(1)] = (10));

} else {
var statearr_48167_48232 = state_48083__$1;
(statearr_48167_48232[(1)] = (11));

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
});})(c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35686__auto__,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35687__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35687__auto____0 = (function (){
var statearr_48171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48171[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35687__auto__);

(statearr_48171[(1)] = (1));

return statearr_48171;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35687__auto____1 = (function (state_48083){
while(true){
var ret_value__35688__auto__ = (function (){try{while(true){
var result__35689__auto__ = switch__35686__auto__.call(null,state_48083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35689__auto__;
}
break;
}
}catch (e48172){if((e48172 instanceof Object)){
var ex__35690__auto__ = e48172;
var statearr_48173_48233 = state_48083;
(statearr_48173_48233[(5)] = ex__35690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48234 = state_48083;
state_48083 = G__48234;
continue;
} else {
return ret_value__35688__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35687__auto__ = function(state_48083){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35687__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35687__auto____1.call(this,state_48083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35687__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35687__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35687__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35687__auto__;
})()
;})(switch__35686__auto__,c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35800__auto__ = (function (){var statearr_48174 = f__35799__auto__.call(null);
(statearr_48174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35798__auto__);

return statearr_48174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35800__auto__);
});})(c__35798__auto__,map__47929,map__47929__$1,opts,before_jsload,on_jsload,reload_dependents,map__47930,map__47930__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35798__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48237,link){
var map__48240 = p__48237;
var map__48240__$1 = ((((!((map__48240 == null)))?((((map__48240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48240):map__48240);
var file = cljs.core.get.call(null,map__48240__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__48240,map__48240__$1,file){
return (function (p1__48235_SHARP_,p2__48236_SHARP_){
if(cljs.core._EQ_.call(null,p1__48235_SHARP_,p2__48236_SHARP_)){
return p1__48235_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__48240,map__48240__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48246){
var map__48247 = p__48246;
var map__48247__$1 = ((((!((map__48247 == null)))?((((map__48247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48247):map__48247);
var match_length = cljs.core.get.call(null,map__48247__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48247__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48242_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48242_SHARP_);
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
var args48249 = [];
var len__31894__auto___48252 = arguments.length;
var i__31895__auto___48253 = (0);
while(true){
if((i__31895__auto___48253 < len__31894__auto___48252)){
args48249.push((arguments[i__31895__auto___48253]));

var G__48254 = (i__31895__auto___48253 + (1));
i__31895__auto___48253 = G__48254;
continue;
} else {
}
break;
}

var G__48251 = args48249.length;
switch (G__48251) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48249.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48256_SHARP_,p2__48257_SHARP_){
return cljs.core.assoc.call(null,p1__48256_SHARP_,cljs.core.get.call(null,p2__48257_SHARP_,key),p2__48257_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__48258){
var map__48261 = p__48258;
var map__48261__$1 = ((((!((map__48261 == null)))?((((map__48261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48261):map__48261);
var f_data = map__48261__$1;
var file = cljs.core.get.call(null,map__48261__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48263,files_msg){
var map__48270 = p__48263;
var map__48270__$1 = ((((!((map__48270 == null)))?((((map__48270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48270):map__48270);
var opts = map__48270__$1;
var on_cssload = cljs.core.get.call(null,map__48270__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__48272_48276 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__48273_48277 = null;
var count__48274_48278 = (0);
var i__48275_48279 = (0);
while(true){
if((i__48275_48279 < count__48274_48278)){
var f_48280 = cljs.core._nth.call(null,chunk__48273_48277,i__48275_48279);
figwheel.client.file_reloading.reload_css_file.call(null,f_48280);

var G__48281 = seq__48272_48276;
var G__48282 = chunk__48273_48277;
var G__48283 = count__48274_48278;
var G__48284 = (i__48275_48279 + (1));
seq__48272_48276 = G__48281;
chunk__48273_48277 = G__48282;
count__48274_48278 = G__48283;
i__48275_48279 = G__48284;
continue;
} else {
var temp__4657__auto___48285 = cljs.core.seq.call(null,seq__48272_48276);
if(temp__4657__auto___48285){
var seq__48272_48286__$1 = temp__4657__auto___48285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48272_48286__$1)){
var c__31630__auto___48287 = cljs.core.chunk_first.call(null,seq__48272_48286__$1);
var G__48288 = cljs.core.chunk_rest.call(null,seq__48272_48286__$1);
var G__48289 = c__31630__auto___48287;
var G__48290 = cljs.core.count.call(null,c__31630__auto___48287);
var G__48291 = (0);
seq__48272_48276 = G__48288;
chunk__48273_48277 = G__48289;
count__48274_48278 = G__48290;
i__48275_48279 = G__48291;
continue;
} else {
var f_48292 = cljs.core.first.call(null,seq__48272_48286__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_48292);

var G__48293 = cljs.core.next.call(null,seq__48272_48286__$1);
var G__48294 = null;
var G__48295 = (0);
var G__48296 = (0);
seq__48272_48276 = G__48293;
chunk__48273_48277 = G__48294;
count__48274_48278 = G__48295;
i__48275_48279 = G__48296;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__48270,map__48270__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__48270,map__48270__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1471343716762