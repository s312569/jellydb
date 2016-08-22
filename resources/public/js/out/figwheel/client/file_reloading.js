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
var or__30861__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30861__auto__){
return or__30861__auto__;
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
var or__30861__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47426_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47426_SHARP_));
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
var seq__47431 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47432 = null;
var count__47433 = (0);
var i__47434 = (0);
while(true){
if((i__47434 < count__47433)){
var n = cljs.core._nth.call(null,chunk__47432,i__47434);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47435 = seq__47431;
var G__47436 = chunk__47432;
var G__47437 = count__47433;
var G__47438 = (i__47434 + (1));
seq__47431 = G__47435;
chunk__47432 = G__47436;
count__47433 = G__47437;
i__47434 = G__47438;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47431);
if(temp__4657__auto__){
var seq__47431__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47431__$1)){
var c__31672__auto__ = cljs.core.chunk_first.call(null,seq__47431__$1);
var G__47439 = cljs.core.chunk_rest.call(null,seq__47431__$1);
var G__47440 = c__31672__auto__;
var G__47441 = cljs.core.count.call(null,c__31672__auto__);
var G__47442 = (0);
seq__47431 = G__47439;
chunk__47432 = G__47440;
count__47433 = G__47441;
i__47434 = G__47442;
continue;
} else {
var n = cljs.core.first.call(null,seq__47431__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47443 = cljs.core.next.call(null,seq__47431__$1);
var G__47444 = null;
var G__47445 = (0);
var G__47446 = (0);
seq__47431 = G__47443;
chunk__47432 = G__47444;
count__47433 = G__47445;
i__47434 = G__47446;
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

var seq__47497_47508 = cljs.core.seq.call(null,deps);
var chunk__47498_47509 = null;
var count__47499_47510 = (0);
var i__47500_47511 = (0);
while(true){
if((i__47500_47511 < count__47499_47510)){
var dep_47512 = cljs.core._nth.call(null,chunk__47498_47509,i__47500_47511);
topo_sort_helper_STAR_.call(null,dep_47512,(depth + (1)),state);

var G__47513 = seq__47497_47508;
var G__47514 = chunk__47498_47509;
var G__47515 = count__47499_47510;
var G__47516 = (i__47500_47511 + (1));
seq__47497_47508 = G__47513;
chunk__47498_47509 = G__47514;
count__47499_47510 = G__47515;
i__47500_47511 = G__47516;
continue;
} else {
var temp__4657__auto___47517 = cljs.core.seq.call(null,seq__47497_47508);
if(temp__4657__auto___47517){
var seq__47497_47518__$1 = temp__4657__auto___47517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47497_47518__$1)){
var c__31672__auto___47519 = cljs.core.chunk_first.call(null,seq__47497_47518__$1);
var G__47520 = cljs.core.chunk_rest.call(null,seq__47497_47518__$1);
var G__47521 = c__31672__auto___47519;
var G__47522 = cljs.core.count.call(null,c__31672__auto___47519);
var G__47523 = (0);
seq__47497_47508 = G__47520;
chunk__47498_47509 = G__47521;
count__47499_47510 = G__47522;
i__47500_47511 = G__47523;
continue;
} else {
var dep_47524 = cljs.core.first.call(null,seq__47497_47518__$1);
topo_sort_helper_STAR_.call(null,dep_47524,(depth + (1)),state);

var G__47525 = cljs.core.next.call(null,seq__47497_47518__$1);
var G__47526 = null;
var G__47527 = (0);
var G__47528 = (0);
seq__47497_47508 = G__47525;
chunk__47498_47509 = G__47526;
count__47499_47510 = G__47527;
i__47500_47511 = G__47528;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47501){
var vec__47505 = p__47501;
var seq__47506 = cljs.core.seq.call(null,vec__47505);
var first__47507 = cljs.core.first.call(null,seq__47506);
var seq__47506__$1 = cljs.core.next.call(null,seq__47506);
var x = first__47507;
var xs = seq__47506__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47505,seq__47506,first__47507,seq__47506__$1,x,xs,get_deps__$1){
return (function (p1__47447_SHARP_){
return clojure.set.difference.call(null,p1__47447_SHARP_,x);
});})(vec__47505,seq__47506,first__47507,seq__47506__$1,x,xs,get_deps__$1))
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
var seq__47541 = cljs.core.seq.call(null,provides);
var chunk__47542 = null;
var count__47543 = (0);
var i__47544 = (0);
while(true){
if((i__47544 < count__47543)){
var prov = cljs.core._nth.call(null,chunk__47542,i__47544);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47545_47553 = cljs.core.seq.call(null,requires);
var chunk__47546_47554 = null;
var count__47547_47555 = (0);
var i__47548_47556 = (0);
while(true){
if((i__47548_47556 < count__47547_47555)){
var req_47557 = cljs.core._nth.call(null,chunk__47546_47554,i__47548_47556);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47557,prov);

var G__47558 = seq__47545_47553;
var G__47559 = chunk__47546_47554;
var G__47560 = count__47547_47555;
var G__47561 = (i__47548_47556 + (1));
seq__47545_47553 = G__47558;
chunk__47546_47554 = G__47559;
count__47547_47555 = G__47560;
i__47548_47556 = G__47561;
continue;
} else {
var temp__4657__auto___47562 = cljs.core.seq.call(null,seq__47545_47553);
if(temp__4657__auto___47562){
var seq__47545_47563__$1 = temp__4657__auto___47562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47545_47563__$1)){
var c__31672__auto___47564 = cljs.core.chunk_first.call(null,seq__47545_47563__$1);
var G__47565 = cljs.core.chunk_rest.call(null,seq__47545_47563__$1);
var G__47566 = c__31672__auto___47564;
var G__47567 = cljs.core.count.call(null,c__31672__auto___47564);
var G__47568 = (0);
seq__47545_47553 = G__47565;
chunk__47546_47554 = G__47566;
count__47547_47555 = G__47567;
i__47548_47556 = G__47568;
continue;
} else {
var req_47569 = cljs.core.first.call(null,seq__47545_47563__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47569,prov);

var G__47570 = cljs.core.next.call(null,seq__47545_47563__$1);
var G__47571 = null;
var G__47572 = (0);
var G__47573 = (0);
seq__47545_47553 = G__47570;
chunk__47546_47554 = G__47571;
count__47547_47555 = G__47572;
i__47548_47556 = G__47573;
continue;
}
} else {
}
}
break;
}

var G__47574 = seq__47541;
var G__47575 = chunk__47542;
var G__47576 = count__47543;
var G__47577 = (i__47544 + (1));
seq__47541 = G__47574;
chunk__47542 = G__47575;
count__47543 = G__47576;
i__47544 = G__47577;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47541);
if(temp__4657__auto__){
var seq__47541__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47541__$1)){
var c__31672__auto__ = cljs.core.chunk_first.call(null,seq__47541__$1);
var G__47578 = cljs.core.chunk_rest.call(null,seq__47541__$1);
var G__47579 = c__31672__auto__;
var G__47580 = cljs.core.count.call(null,c__31672__auto__);
var G__47581 = (0);
seq__47541 = G__47578;
chunk__47542 = G__47579;
count__47543 = G__47580;
i__47544 = G__47581;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47541__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47549_47582 = cljs.core.seq.call(null,requires);
var chunk__47550_47583 = null;
var count__47551_47584 = (0);
var i__47552_47585 = (0);
while(true){
if((i__47552_47585 < count__47551_47584)){
var req_47586 = cljs.core._nth.call(null,chunk__47550_47583,i__47552_47585);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47586,prov);

var G__47587 = seq__47549_47582;
var G__47588 = chunk__47550_47583;
var G__47589 = count__47551_47584;
var G__47590 = (i__47552_47585 + (1));
seq__47549_47582 = G__47587;
chunk__47550_47583 = G__47588;
count__47551_47584 = G__47589;
i__47552_47585 = G__47590;
continue;
} else {
var temp__4657__auto___47591__$1 = cljs.core.seq.call(null,seq__47549_47582);
if(temp__4657__auto___47591__$1){
var seq__47549_47592__$1 = temp__4657__auto___47591__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47549_47592__$1)){
var c__31672__auto___47593 = cljs.core.chunk_first.call(null,seq__47549_47592__$1);
var G__47594 = cljs.core.chunk_rest.call(null,seq__47549_47592__$1);
var G__47595 = c__31672__auto___47593;
var G__47596 = cljs.core.count.call(null,c__31672__auto___47593);
var G__47597 = (0);
seq__47549_47582 = G__47594;
chunk__47550_47583 = G__47595;
count__47551_47584 = G__47596;
i__47552_47585 = G__47597;
continue;
} else {
var req_47598 = cljs.core.first.call(null,seq__47549_47592__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47598,prov);

var G__47599 = cljs.core.next.call(null,seq__47549_47592__$1);
var G__47600 = null;
var G__47601 = (0);
var G__47602 = (0);
seq__47549_47582 = G__47599;
chunk__47550_47583 = G__47600;
count__47551_47584 = G__47601;
i__47552_47585 = G__47602;
continue;
}
} else {
}
}
break;
}

var G__47603 = cljs.core.next.call(null,seq__47541__$1);
var G__47604 = null;
var G__47605 = (0);
var G__47606 = (0);
seq__47541 = G__47603;
chunk__47542 = G__47604;
count__47543 = G__47605;
i__47544 = G__47606;
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
var seq__47611_47615 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47612_47616 = null;
var count__47613_47617 = (0);
var i__47614_47618 = (0);
while(true){
if((i__47614_47618 < count__47613_47617)){
var ns_47619 = cljs.core._nth.call(null,chunk__47612_47616,i__47614_47618);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47619);

var G__47620 = seq__47611_47615;
var G__47621 = chunk__47612_47616;
var G__47622 = count__47613_47617;
var G__47623 = (i__47614_47618 + (1));
seq__47611_47615 = G__47620;
chunk__47612_47616 = G__47621;
count__47613_47617 = G__47622;
i__47614_47618 = G__47623;
continue;
} else {
var temp__4657__auto___47624 = cljs.core.seq.call(null,seq__47611_47615);
if(temp__4657__auto___47624){
var seq__47611_47625__$1 = temp__4657__auto___47624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47611_47625__$1)){
var c__31672__auto___47626 = cljs.core.chunk_first.call(null,seq__47611_47625__$1);
var G__47627 = cljs.core.chunk_rest.call(null,seq__47611_47625__$1);
var G__47628 = c__31672__auto___47626;
var G__47629 = cljs.core.count.call(null,c__31672__auto___47626);
var G__47630 = (0);
seq__47611_47615 = G__47627;
chunk__47612_47616 = G__47628;
count__47613_47617 = G__47629;
i__47614_47618 = G__47630;
continue;
} else {
var ns_47631 = cljs.core.first.call(null,seq__47611_47625__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47631);

var G__47632 = cljs.core.next.call(null,seq__47611_47625__$1);
var G__47633 = null;
var G__47634 = (0);
var G__47635 = (0);
seq__47611_47615 = G__47632;
chunk__47612_47616 = G__47633;
count__47613_47617 = G__47634;
i__47614_47618 = G__47635;
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
goog.require_figwheel_backup_ = (function (){var or__30861__auto__ = goog.require__;
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
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
var G__47636__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47637__i = 0, G__47637__a = new Array(arguments.length -  0);
while (G__47637__i < G__47637__a.length) {G__47637__a[G__47637__i] = arguments[G__47637__i + 0]; ++G__47637__i;}
  args = new cljs.core.IndexedSeq(G__47637__a,0);
} 
return G__47636__delegate.call(this,args);};
G__47636.cljs$lang$maxFixedArity = 0;
G__47636.cljs$lang$applyTo = (function (arglist__47638){
var args = cljs.core.seq(arglist__47638);
return G__47636__delegate(args);
});
G__47636.cljs$core$IFn$_invoke$arity$variadic = G__47636__delegate;
return G__47636;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47640 = cljs.core._EQ_;
var expr__47641 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47640.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47641))){
var path_parts = ((function (pred__47640,expr__47641){
return (function (p1__47639_SHARP_){
return clojure.string.split.call(null,p1__47639_SHARP_,/[\/\\]/);
});})(pred__47640,expr__47641))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__47640,expr__47641){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47643){if((e47643 instanceof Error)){
var e = e47643;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47643;

}
}})());
});
;})(path_parts,sep,root,pred__47640,expr__47641))
} else {
if(cljs.core.truth_(pred__47640.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47641))){
return ((function (pred__47640,expr__47641){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__47640,expr__47641){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__47640,expr__47641))
);

return deferred.addErrback(((function (deferred,pred__47640,expr__47641){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__47640,expr__47641))
);
});
;})(pred__47640,expr__47641))
} else {
return ((function (pred__47640,expr__47641){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47640,expr__47641))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47644,callback){
var map__47647 = p__47644;
var map__47647__$1 = ((((!((map__47647 == null)))?((((map__47647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47647):map__47647);
var file_msg = map__47647__$1;
var request_url = cljs.core.get.call(null,map__47647__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__47647,map__47647__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47647,map__47647__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__35841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto__){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto__){
return (function (state_47671){
var state_val_47672 = (state_47671[(1)]);
if((state_val_47672 === (7))){
var inst_47667 = (state_47671[(2)]);
var state_47671__$1 = state_47671;
var statearr_47673_47693 = state_47671__$1;
(statearr_47673_47693[(2)] = inst_47667);

(statearr_47673_47693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (1))){
var state_47671__$1 = state_47671;
var statearr_47674_47694 = state_47671__$1;
(statearr_47674_47694[(2)] = null);

(statearr_47674_47694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (4))){
var inst_47651 = (state_47671[(7)]);
var inst_47651__$1 = (state_47671[(2)]);
var state_47671__$1 = (function (){var statearr_47675 = state_47671;
(statearr_47675[(7)] = inst_47651__$1);

return statearr_47675;
})();
if(cljs.core.truth_(inst_47651__$1)){
var statearr_47676_47695 = state_47671__$1;
(statearr_47676_47695[(1)] = (5));

} else {
var statearr_47677_47696 = state_47671__$1;
(statearr_47677_47696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (6))){
var state_47671__$1 = state_47671;
var statearr_47678_47697 = state_47671__$1;
(statearr_47678_47697[(2)] = null);

(statearr_47678_47697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (3))){
var inst_47669 = (state_47671[(2)]);
var state_47671__$1 = state_47671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47671__$1,inst_47669);
} else {
if((state_val_47672 === (2))){
var state_47671__$1 = state_47671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47671__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47672 === (11))){
var inst_47663 = (state_47671[(2)]);
var state_47671__$1 = (function (){var statearr_47679 = state_47671;
(statearr_47679[(8)] = inst_47663);

return statearr_47679;
})();
var statearr_47680_47698 = state_47671__$1;
(statearr_47680_47698[(2)] = null);

(statearr_47680_47698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (9))){
var inst_47655 = (state_47671[(9)]);
var inst_47657 = (state_47671[(10)]);
var inst_47659 = inst_47657.call(null,inst_47655);
var state_47671__$1 = state_47671;
var statearr_47681_47699 = state_47671__$1;
(statearr_47681_47699[(2)] = inst_47659);

(statearr_47681_47699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (5))){
var inst_47651 = (state_47671[(7)]);
var inst_47653 = figwheel.client.file_reloading.blocking_load.call(null,inst_47651);
var state_47671__$1 = state_47671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47671__$1,(8),inst_47653);
} else {
if((state_val_47672 === (10))){
var inst_47655 = (state_47671[(9)]);
var inst_47661 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47655);
var state_47671__$1 = state_47671;
var statearr_47682_47700 = state_47671__$1;
(statearr_47682_47700[(2)] = inst_47661);

(statearr_47682_47700[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47672 === (8))){
var inst_47651 = (state_47671[(7)]);
var inst_47657 = (state_47671[(10)]);
var inst_47655 = (state_47671[(2)]);
var inst_47656 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47657__$1 = cljs.core.get.call(null,inst_47656,inst_47651);
var state_47671__$1 = (function (){var statearr_47683 = state_47671;
(statearr_47683[(9)] = inst_47655);

(statearr_47683[(10)] = inst_47657__$1);

return statearr_47683;
})();
if(cljs.core.truth_(inst_47657__$1)){
var statearr_47684_47701 = state_47671__$1;
(statearr_47684_47701[(1)] = (9));

} else {
var statearr_47685_47702 = state_47671__$1;
(statearr_47685_47702[(1)] = (10));

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
});})(c__35841__auto__))
;
return ((function (switch__35729__auto__,c__35841__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35730__auto__ = null;
var figwheel$client$file_reloading$state_machine__35730__auto____0 = (function (){
var statearr_47689 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47689[(0)] = figwheel$client$file_reloading$state_machine__35730__auto__);

(statearr_47689[(1)] = (1));

return statearr_47689;
});
var figwheel$client$file_reloading$state_machine__35730__auto____1 = (function (state_47671){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_47671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e47690){if((e47690 instanceof Object)){
var ex__35733__auto__ = e47690;
var statearr_47691_47703 = state_47671;
(statearr_47691_47703[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47704 = state_47671;
state_47671 = G__47704;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35730__auto__ = function(state_47671){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35730__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35730__auto____1.call(this,state_47671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35730__auto____0;
figwheel$client$file_reloading$state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35730__auto____1;
return figwheel$client$file_reloading$state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto__))
})();
var state__35843__auto__ = (function (){var statearr_47692 = f__35842__auto__.call(null);
(statearr_47692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto__);

return statearr_47692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto__))
);

return c__35841__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47705,callback){
var map__47708 = p__47705;
var map__47708__$1 = ((((!((map__47708 == null)))?((((map__47708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47708):map__47708);
var file_msg = map__47708__$1;
var namespace = cljs.core.get.call(null,map__47708__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47708,map__47708__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47708,map__47708__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47710){
var map__47713 = p__47710;
var map__47713__$1 = ((((!((map__47713 == null)))?((((map__47713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47713):map__47713);
var file_msg = map__47713__$1;
var namespace = cljs.core.get.call(null,map__47713__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30849__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__30849__auto__){
var or__30861__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30861__auto__)){
return or__30861__auto__;
} else {
var or__30861__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30861__auto____$1)){
return or__30861__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30849__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47715,callback){
var map__47718 = p__47715;
var map__47718__$1 = ((((!((map__47718 == null)))?((((map__47718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47718):map__47718);
var file_msg = map__47718__$1;
var request_url = cljs.core.get.call(null,map__47718__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47718__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__35841__auto___47822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto___47822,out){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto___47822,out){
return (function (state_47804){
var state_val_47805 = (state_47804[(1)]);
if((state_val_47805 === (1))){
var inst_47778 = cljs.core.seq.call(null,files);
var inst_47779 = cljs.core.first.call(null,inst_47778);
var inst_47780 = cljs.core.next.call(null,inst_47778);
var inst_47781 = files;
var state_47804__$1 = (function (){var statearr_47806 = state_47804;
(statearr_47806[(7)] = inst_47780);

(statearr_47806[(8)] = inst_47779);

(statearr_47806[(9)] = inst_47781);

return statearr_47806;
})();
var statearr_47807_47823 = state_47804__$1;
(statearr_47807_47823[(2)] = null);

(statearr_47807_47823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (2))){
var inst_47787 = (state_47804[(10)]);
var inst_47781 = (state_47804[(9)]);
var inst_47786 = cljs.core.seq.call(null,inst_47781);
var inst_47787__$1 = cljs.core.first.call(null,inst_47786);
var inst_47788 = cljs.core.next.call(null,inst_47786);
var inst_47789 = (inst_47787__$1 == null);
var inst_47790 = cljs.core.not.call(null,inst_47789);
var state_47804__$1 = (function (){var statearr_47808 = state_47804;
(statearr_47808[(10)] = inst_47787__$1);

(statearr_47808[(11)] = inst_47788);

return statearr_47808;
})();
if(inst_47790){
var statearr_47809_47824 = state_47804__$1;
(statearr_47809_47824[(1)] = (4));

} else {
var statearr_47810_47825 = state_47804__$1;
(statearr_47810_47825[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (3))){
var inst_47802 = (state_47804[(2)]);
var state_47804__$1 = state_47804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47804__$1,inst_47802);
} else {
if((state_val_47805 === (4))){
var inst_47787 = (state_47804[(10)]);
var inst_47792 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47787);
var state_47804__$1 = state_47804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47804__$1,(7),inst_47792);
} else {
if((state_val_47805 === (5))){
var inst_47798 = cljs.core.async.close_BANG_.call(null,out);
var state_47804__$1 = state_47804;
var statearr_47811_47826 = state_47804__$1;
(statearr_47811_47826[(2)] = inst_47798);

(statearr_47811_47826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (6))){
var inst_47800 = (state_47804[(2)]);
var state_47804__$1 = state_47804;
var statearr_47812_47827 = state_47804__$1;
(statearr_47812_47827[(2)] = inst_47800);

(statearr_47812_47827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (7))){
var inst_47788 = (state_47804[(11)]);
var inst_47794 = (state_47804[(2)]);
var inst_47795 = cljs.core.async.put_BANG_.call(null,out,inst_47794);
var inst_47781 = inst_47788;
var state_47804__$1 = (function (){var statearr_47813 = state_47804;
(statearr_47813[(12)] = inst_47795);

(statearr_47813[(9)] = inst_47781);

return statearr_47813;
})();
var statearr_47814_47828 = state_47804__$1;
(statearr_47814_47828[(2)] = null);

(statearr_47814_47828[(1)] = (2));


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
});})(c__35841__auto___47822,out))
;
return ((function (switch__35729__auto__,c__35841__auto___47822,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35730__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35730__auto____0 = (function (){
var statearr_47818 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47818[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35730__auto__);

(statearr_47818[(1)] = (1));

return statearr_47818;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35730__auto____1 = (function (state_47804){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_47804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e47819){if((e47819 instanceof Object)){
var ex__35733__auto__ = e47819;
var statearr_47820_47829 = state_47804;
(statearr_47820_47829[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47830 = state_47804;
state_47804 = G__47830;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35730__auto__ = function(state_47804){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35730__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35730__auto____1.call(this,state_47804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35730__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35730__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto___47822,out))
})();
var state__35843__auto__ = (function (){var statearr_47821 = f__35842__auto__.call(null);
(statearr_47821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto___47822);

return statearr_47821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto___47822,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47831,opts){
var map__47835 = p__47831;
var map__47835__$1 = ((((!((map__47835 == null)))?((((map__47835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47835):map__47835);
var eval_body__$1 = cljs.core.get.call(null,map__47835__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47835__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30849__auto__ = eval_body__$1;
if(cljs.core.truth_(and__30849__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__30849__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47837){var e = e47837;
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
return (function (p1__47838_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47838_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__47847){
var vec__47848 = p__47847;
var k = cljs.core.nth.call(null,vec__47848,(0),null);
var v = cljs.core.nth.call(null,vec__47848,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47851){
var vec__47852 = p__47851;
var k = cljs.core.nth.call(null,vec__47852,(0),null);
var v = cljs.core.nth.call(null,vec__47852,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47858,p__47859){
var map__48106 = p__47858;
var map__48106__$1 = ((((!((map__48106 == null)))?((((map__48106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48106):map__48106);
var opts = map__48106__$1;
var before_jsload = cljs.core.get.call(null,map__48106__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__48106__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__48106__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__48107 = p__47859;
var map__48107__$1 = ((((!((map__48107 == null)))?((((map__48107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48107):map__48107);
var msg = map__48107__$1;
var files = cljs.core.get.call(null,map__48107__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__48107__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__48107__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35841__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35842__auto__ = (function (){var switch__35729__auto__ = ((function (c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_48260){
var state_val_48261 = (state_48260[(1)]);
if((state_val_48261 === (7))){
var inst_48121 = (state_48260[(7)]);
var inst_48124 = (state_48260[(8)]);
var inst_48123 = (state_48260[(9)]);
var inst_48122 = (state_48260[(10)]);
var inst_48129 = cljs.core._nth.call(null,inst_48122,inst_48124);
var inst_48130 = figwheel.client.file_reloading.eval_body.call(null,inst_48129,opts);
var inst_48131 = (inst_48124 + (1));
var tmp48262 = inst_48121;
var tmp48263 = inst_48123;
var tmp48264 = inst_48122;
var inst_48121__$1 = tmp48262;
var inst_48122__$1 = tmp48264;
var inst_48123__$1 = tmp48263;
var inst_48124__$1 = inst_48131;
var state_48260__$1 = (function (){var statearr_48265 = state_48260;
(statearr_48265[(7)] = inst_48121__$1);

(statearr_48265[(8)] = inst_48124__$1);

(statearr_48265[(9)] = inst_48123__$1);

(statearr_48265[(10)] = inst_48122__$1);

(statearr_48265[(11)] = inst_48130);

return statearr_48265;
})();
var statearr_48266_48352 = state_48260__$1;
(statearr_48266_48352[(2)] = null);

(statearr_48266_48352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (20))){
var inst_48164 = (state_48260[(12)]);
var inst_48172 = figwheel.client.file_reloading.sort_files.call(null,inst_48164);
var state_48260__$1 = state_48260;
var statearr_48267_48353 = state_48260__$1;
(statearr_48267_48353[(2)] = inst_48172);

(statearr_48267_48353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (27))){
var state_48260__$1 = state_48260;
var statearr_48268_48354 = state_48260__$1;
(statearr_48268_48354[(2)] = null);

(statearr_48268_48354[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (1))){
var inst_48113 = (state_48260[(13)]);
var inst_48110 = before_jsload.call(null,files);
var inst_48111 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_48112 = (function (){return ((function (inst_48113,inst_48110,inst_48111,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47855_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47855_SHARP_);
});
;})(inst_48113,inst_48110,inst_48111,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48113__$1 = cljs.core.filter.call(null,inst_48112,files);
var inst_48114 = cljs.core.not_empty.call(null,inst_48113__$1);
var state_48260__$1 = (function (){var statearr_48269 = state_48260;
(statearr_48269[(14)] = inst_48111);

(statearr_48269[(13)] = inst_48113__$1);

(statearr_48269[(15)] = inst_48110);

return statearr_48269;
})();
if(cljs.core.truth_(inst_48114)){
var statearr_48270_48355 = state_48260__$1;
(statearr_48270_48355[(1)] = (2));

} else {
var statearr_48271_48356 = state_48260__$1;
(statearr_48271_48356[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (24))){
var state_48260__$1 = state_48260;
var statearr_48272_48357 = state_48260__$1;
(statearr_48272_48357[(2)] = null);

(statearr_48272_48357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (39))){
var inst_48214 = (state_48260[(16)]);
var state_48260__$1 = state_48260;
var statearr_48273_48358 = state_48260__$1;
(statearr_48273_48358[(2)] = inst_48214);

(statearr_48273_48358[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (46))){
var inst_48255 = (state_48260[(2)]);
var state_48260__$1 = state_48260;
var statearr_48274_48359 = state_48260__$1;
(statearr_48274_48359[(2)] = inst_48255);

(statearr_48274_48359[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (4))){
var inst_48158 = (state_48260[(2)]);
var inst_48159 = cljs.core.List.EMPTY;
var inst_48160 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_48159);
var inst_48161 = (function (){return ((function (inst_48158,inst_48159,inst_48160,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47856_SHARP_){
var and__30849__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47856_SHARP_);
if(cljs.core.truth_(and__30849__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47856_SHARP_));
} else {
return and__30849__auto__;
}
});
;})(inst_48158,inst_48159,inst_48160,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48162 = cljs.core.filter.call(null,inst_48161,files);
var inst_48163 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_48164 = cljs.core.concat.call(null,inst_48162,inst_48163);
var state_48260__$1 = (function (){var statearr_48275 = state_48260;
(statearr_48275[(12)] = inst_48164);

(statearr_48275[(17)] = inst_48160);

(statearr_48275[(18)] = inst_48158);

return statearr_48275;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48276_48360 = state_48260__$1;
(statearr_48276_48360[(1)] = (16));

} else {
var statearr_48277_48361 = state_48260__$1;
(statearr_48277_48361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (15))){
var inst_48148 = (state_48260[(2)]);
var state_48260__$1 = state_48260;
var statearr_48278_48362 = state_48260__$1;
(statearr_48278_48362[(2)] = inst_48148);

(statearr_48278_48362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (21))){
var inst_48174 = (state_48260[(19)]);
var inst_48174__$1 = (state_48260[(2)]);
var inst_48175 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_48174__$1);
var state_48260__$1 = (function (){var statearr_48279 = state_48260;
(statearr_48279[(19)] = inst_48174__$1);

return statearr_48279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48260__$1,(22),inst_48175);
} else {
if((state_val_48261 === (31))){
var inst_48258 = (state_48260[(2)]);
var state_48260__$1 = state_48260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48260__$1,inst_48258);
} else {
if((state_val_48261 === (32))){
var inst_48214 = (state_48260[(16)]);
var inst_48219 = inst_48214.cljs$lang$protocol_mask$partition0$;
var inst_48220 = (inst_48219 & (64));
var inst_48221 = inst_48214.cljs$core$ISeq$;
var inst_48222 = (inst_48220) || (inst_48221);
var state_48260__$1 = state_48260;
if(cljs.core.truth_(inst_48222)){
var statearr_48280_48363 = state_48260__$1;
(statearr_48280_48363[(1)] = (35));

} else {
var statearr_48281_48364 = state_48260__$1;
(statearr_48281_48364[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (40))){
var inst_48235 = (state_48260[(20)]);
var inst_48234 = (state_48260[(2)]);
var inst_48235__$1 = cljs.core.get.call(null,inst_48234,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48236 = cljs.core.get.call(null,inst_48234,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48237 = cljs.core.not_empty.call(null,inst_48235__$1);
var state_48260__$1 = (function (){var statearr_48282 = state_48260;
(statearr_48282[(20)] = inst_48235__$1);

(statearr_48282[(21)] = inst_48236);

return statearr_48282;
})();
if(cljs.core.truth_(inst_48237)){
var statearr_48283_48365 = state_48260__$1;
(statearr_48283_48365[(1)] = (41));

} else {
var statearr_48284_48366 = state_48260__$1;
(statearr_48284_48366[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (33))){
var state_48260__$1 = state_48260;
var statearr_48285_48367 = state_48260__$1;
(statearr_48285_48367[(2)] = false);

(statearr_48285_48367[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (13))){
var inst_48134 = (state_48260[(22)]);
var inst_48138 = cljs.core.chunk_first.call(null,inst_48134);
var inst_48139 = cljs.core.chunk_rest.call(null,inst_48134);
var inst_48140 = cljs.core.count.call(null,inst_48138);
var inst_48121 = inst_48139;
var inst_48122 = inst_48138;
var inst_48123 = inst_48140;
var inst_48124 = (0);
var state_48260__$1 = (function (){var statearr_48286 = state_48260;
(statearr_48286[(7)] = inst_48121);

(statearr_48286[(8)] = inst_48124);

(statearr_48286[(9)] = inst_48123);

(statearr_48286[(10)] = inst_48122);

return statearr_48286;
})();
var statearr_48287_48368 = state_48260__$1;
(statearr_48287_48368[(2)] = null);

(statearr_48287_48368[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (22))){
var inst_48178 = (state_48260[(23)]);
var inst_48182 = (state_48260[(24)]);
var inst_48174 = (state_48260[(19)]);
var inst_48177 = (state_48260[(25)]);
var inst_48177__$1 = (state_48260[(2)]);
var inst_48178__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48177__$1);
var inst_48179 = (function (){var all_files = inst_48174;
var res_SINGLEQUOTE_ = inst_48177__$1;
var res = inst_48178__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_48178,inst_48182,inst_48174,inst_48177,inst_48177__$1,inst_48178__$1,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47857_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47857_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_48178,inst_48182,inst_48174,inst_48177,inst_48177__$1,inst_48178__$1,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48180 = cljs.core.filter.call(null,inst_48179,inst_48177__$1);
var inst_48181 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48182__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48181);
var inst_48183 = cljs.core.not_empty.call(null,inst_48182__$1);
var state_48260__$1 = (function (){var statearr_48288 = state_48260;
(statearr_48288[(23)] = inst_48178__$1);

(statearr_48288[(24)] = inst_48182__$1);

(statearr_48288[(26)] = inst_48180);

(statearr_48288[(25)] = inst_48177__$1);

return statearr_48288;
})();
if(cljs.core.truth_(inst_48183)){
var statearr_48289_48369 = state_48260__$1;
(statearr_48289_48369[(1)] = (23));

} else {
var statearr_48290_48370 = state_48260__$1;
(statearr_48290_48370[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (36))){
var state_48260__$1 = state_48260;
var statearr_48291_48371 = state_48260__$1;
(statearr_48291_48371[(2)] = false);

(statearr_48291_48371[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (41))){
var inst_48235 = (state_48260[(20)]);
var inst_48239 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48240 = cljs.core.map.call(null,inst_48239,inst_48235);
var inst_48241 = cljs.core.pr_str.call(null,inst_48240);
var inst_48242 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_48241)].join('');
var inst_48243 = figwheel.client.utils.log.call(null,inst_48242);
var state_48260__$1 = state_48260;
var statearr_48292_48372 = state_48260__$1;
(statearr_48292_48372[(2)] = inst_48243);

(statearr_48292_48372[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (43))){
var inst_48236 = (state_48260[(21)]);
var inst_48246 = (state_48260[(2)]);
var inst_48247 = cljs.core.not_empty.call(null,inst_48236);
var state_48260__$1 = (function (){var statearr_48293 = state_48260;
(statearr_48293[(27)] = inst_48246);

return statearr_48293;
})();
if(cljs.core.truth_(inst_48247)){
var statearr_48294_48373 = state_48260__$1;
(statearr_48294_48373[(1)] = (44));

} else {
var statearr_48295_48374 = state_48260__$1;
(statearr_48295_48374[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (29))){
var inst_48214 = (state_48260[(16)]);
var inst_48178 = (state_48260[(23)]);
var inst_48182 = (state_48260[(24)]);
var inst_48174 = (state_48260[(19)]);
var inst_48180 = (state_48260[(26)]);
var inst_48177 = (state_48260[(25)]);
var inst_48210 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48213 = (function (){var all_files = inst_48174;
var res_SINGLEQUOTE_ = inst_48177;
var res = inst_48178;
var files_not_loaded = inst_48180;
var dependencies_that_loaded = inst_48182;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48214,inst_48178,inst_48182,inst_48174,inst_48180,inst_48177,inst_48210,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48212){
var map__48296 = p__48212;
var map__48296__$1 = ((((!((map__48296 == null)))?((((map__48296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48296):map__48296);
var namespace = cljs.core.get.call(null,map__48296__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48214,inst_48178,inst_48182,inst_48174,inst_48180,inst_48177,inst_48210,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48214__$1 = cljs.core.group_by.call(null,inst_48213,inst_48180);
var inst_48216 = (inst_48214__$1 == null);
var inst_48217 = cljs.core.not.call(null,inst_48216);
var state_48260__$1 = (function (){var statearr_48298 = state_48260;
(statearr_48298[(28)] = inst_48210);

(statearr_48298[(16)] = inst_48214__$1);

return statearr_48298;
})();
if(inst_48217){
var statearr_48299_48375 = state_48260__$1;
(statearr_48299_48375[(1)] = (32));

} else {
var statearr_48300_48376 = state_48260__$1;
(statearr_48300_48376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (44))){
var inst_48236 = (state_48260[(21)]);
var inst_48249 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48236);
var inst_48250 = cljs.core.pr_str.call(null,inst_48249);
var inst_48251 = [cljs.core.str("not required: "),cljs.core.str(inst_48250)].join('');
var inst_48252 = figwheel.client.utils.log.call(null,inst_48251);
var state_48260__$1 = state_48260;
var statearr_48301_48377 = state_48260__$1;
(statearr_48301_48377[(2)] = inst_48252);

(statearr_48301_48377[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (6))){
var inst_48155 = (state_48260[(2)]);
var state_48260__$1 = state_48260;
var statearr_48302_48378 = state_48260__$1;
(statearr_48302_48378[(2)] = inst_48155);

(statearr_48302_48378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (28))){
var inst_48180 = (state_48260[(26)]);
var inst_48207 = (state_48260[(2)]);
var inst_48208 = cljs.core.not_empty.call(null,inst_48180);
var state_48260__$1 = (function (){var statearr_48303 = state_48260;
(statearr_48303[(29)] = inst_48207);

return statearr_48303;
})();
if(cljs.core.truth_(inst_48208)){
var statearr_48304_48379 = state_48260__$1;
(statearr_48304_48379[(1)] = (29));

} else {
var statearr_48305_48380 = state_48260__$1;
(statearr_48305_48380[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (25))){
var inst_48178 = (state_48260[(23)]);
var inst_48194 = (state_48260[(2)]);
var inst_48195 = cljs.core.not_empty.call(null,inst_48178);
var state_48260__$1 = (function (){var statearr_48306 = state_48260;
(statearr_48306[(30)] = inst_48194);

return statearr_48306;
})();
if(cljs.core.truth_(inst_48195)){
var statearr_48307_48381 = state_48260__$1;
(statearr_48307_48381[(1)] = (26));

} else {
var statearr_48308_48382 = state_48260__$1;
(statearr_48308_48382[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (34))){
var inst_48229 = (state_48260[(2)]);
var state_48260__$1 = state_48260;
if(cljs.core.truth_(inst_48229)){
var statearr_48309_48383 = state_48260__$1;
(statearr_48309_48383[(1)] = (38));

} else {
var statearr_48310_48384 = state_48260__$1;
(statearr_48310_48384[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (17))){
var state_48260__$1 = state_48260;
var statearr_48311_48385 = state_48260__$1;
(statearr_48311_48385[(2)] = recompile_dependents);

(statearr_48311_48385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (3))){
var state_48260__$1 = state_48260;
var statearr_48312_48386 = state_48260__$1;
(statearr_48312_48386[(2)] = null);

(statearr_48312_48386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (12))){
var inst_48151 = (state_48260[(2)]);
var state_48260__$1 = state_48260;
var statearr_48313_48387 = state_48260__$1;
(statearr_48313_48387[(2)] = inst_48151);

(statearr_48313_48387[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (2))){
var inst_48113 = (state_48260[(13)]);
var inst_48120 = cljs.core.seq.call(null,inst_48113);
var inst_48121 = inst_48120;
var inst_48122 = null;
var inst_48123 = (0);
var inst_48124 = (0);
var state_48260__$1 = (function (){var statearr_48314 = state_48260;
(statearr_48314[(7)] = inst_48121);

(statearr_48314[(8)] = inst_48124);

(statearr_48314[(9)] = inst_48123);

(statearr_48314[(10)] = inst_48122);

return statearr_48314;
})();
var statearr_48315_48388 = state_48260__$1;
(statearr_48315_48388[(2)] = null);

(statearr_48315_48388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (23))){
var inst_48178 = (state_48260[(23)]);
var inst_48182 = (state_48260[(24)]);
var inst_48174 = (state_48260[(19)]);
var inst_48180 = (state_48260[(26)]);
var inst_48177 = (state_48260[(25)]);
var inst_48185 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48187 = (function (){var all_files = inst_48174;
var res_SINGLEQUOTE_ = inst_48177;
var res = inst_48178;
var files_not_loaded = inst_48180;
var dependencies_that_loaded = inst_48182;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48178,inst_48182,inst_48174,inst_48180,inst_48177,inst_48185,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48186){
var map__48316 = p__48186;
var map__48316__$1 = ((((!((map__48316 == null)))?((((map__48316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48316):map__48316);
var request_url = cljs.core.get.call(null,map__48316__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48178,inst_48182,inst_48174,inst_48180,inst_48177,inst_48185,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48188 = cljs.core.reverse.call(null,inst_48182);
var inst_48189 = cljs.core.map.call(null,inst_48187,inst_48188);
var inst_48190 = cljs.core.pr_str.call(null,inst_48189);
var inst_48191 = figwheel.client.utils.log.call(null,inst_48190);
var state_48260__$1 = (function (){var statearr_48318 = state_48260;
(statearr_48318[(31)] = inst_48185);

return statearr_48318;
})();
var statearr_48319_48389 = state_48260__$1;
(statearr_48319_48389[(2)] = inst_48191);

(statearr_48319_48389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (35))){
var state_48260__$1 = state_48260;
var statearr_48320_48390 = state_48260__$1;
(statearr_48320_48390[(2)] = true);

(statearr_48320_48390[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (19))){
var inst_48164 = (state_48260[(12)]);
var inst_48170 = figwheel.client.file_reloading.expand_files.call(null,inst_48164);
var state_48260__$1 = state_48260;
var statearr_48321_48391 = state_48260__$1;
(statearr_48321_48391[(2)] = inst_48170);

(statearr_48321_48391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (11))){
var state_48260__$1 = state_48260;
var statearr_48322_48392 = state_48260__$1;
(statearr_48322_48392[(2)] = null);

(statearr_48322_48392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (9))){
var inst_48153 = (state_48260[(2)]);
var state_48260__$1 = state_48260;
var statearr_48323_48393 = state_48260__$1;
(statearr_48323_48393[(2)] = inst_48153);

(statearr_48323_48393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (5))){
var inst_48124 = (state_48260[(8)]);
var inst_48123 = (state_48260[(9)]);
var inst_48126 = (inst_48124 < inst_48123);
var inst_48127 = inst_48126;
var state_48260__$1 = state_48260;
if(cljs.core.truth_(inst_48127)){
var statearr_48324_48394 = state_48260__$1;
(statearr_48324_48394[(1)] = (7));

} else {
var statearr_48325_48395 = state_48260__$1;
(statearr_48325_48395[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (14))){
var inst_48134 = (state_48260[(22)]);
var inst_48143 = cljs.core.first.call(null,inst_48134);
var inst_48144 = figwheel.client.file_reloading.eval_body.call(null,inst_48143,opts);
var inst_48145 = cljs.core.next.call(null,inst_48134);
var inst_48121 = inst_48145;
var inst_48122 = null;
var inst_48123 = (0);
var inst_48124 = (0);
var state_48260__$1 = (function (){var statearr_48326 = state_48260;
(statearr_48326[(7)] = inst_48121);

(statearr_48326[(32)] = inst_48144);

(statearr_48326[(8)] = inst_48124);

(statearr_48326[(9)] = inst_48123);

(statearr_48326[(10)] = inst_48122);

return statearr_48326;
})();
var statearr_48327_48396 = state_48260__$1;
(statearr_48327_48396[(2)] = null);

(statearr_48327_48396[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (45))){
var state_48260__$1 = state_48260;
var statearr_48328_48397 = state_48260__$1;
(statearr_48328_48397[(2)] = null);

(statearr_48328_48397[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (26))){
var inst_48178 = (state_48260[(23)]);
var inst_48182 = (state_48260[(24)]);
var inst_48174 = (state_48260[(19)]);
var inst_48180 = (state_48260[(26)]);
var inst_48177 = (state_48260[(25)]);
var inst_48197 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48199 = (function (){var all_files = inst_48174;
var res_SINGLEQUOTE_ = inst_48177;
var res = inst_48178;
var files_not_loaded = inst_48180;
var dependencies_that_loaded = inst_48182;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48178,inst_48182,inst_48174,inst_48180,inst_48177,inst_48197,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48198){
var map__48329 = p__48198;
var map__48329__$1 = ((((!((map__48329 == null)))?((((map__48329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48329):map__48329);
var namespace = cljs.core.get.call(null,map__48329__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48329__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48178,inst_48182,inst_48174,inst_48180,inst_48177,inst_48197,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48200 = cljs.core.map.call(null,inst_48199,inst_48178);
var inst_48201 = cljs.core.pr_str.call(null,inst_48200);
var inst_48202 = figwheel.client.utils.log.call(null,inst_48201);
var inst_48203 = (function (){var all_files = inst_48174;
var res_SINGLEQUOTE_ = inst_48177;
var res = inst_48178;
var files_not_loaded = inst_48180;
var dependencies_that_loaded = inst_48182;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48178,inst_48182,inst_48174,inst_48180,inst_48177,inst_48197,inst_48199,inst_48200,inst_48201,inst_48202,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48178,inst_48182,inst_48174,inst_48180,inst_48177,inst_48197,inst_48199,inst_48200,inst_48201,inst_48202,state_val_48261,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48204 = setTimeout(inst_48203,(10));
var state_48260__$1 = (function (){var statearr_48331 = state_48260;
(statearr_48331[(33)] = inst_48197);

(statearr_48331[(34)] = inst_48202);

return statearr_48331;
})();
var statearr_48332_48398 = state_48260__$1;
(statearr_48332_48398[(2)] = inst_48204);

(statearr_48332_48398[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (16))){
var state_48260__$1 = state_48260;
var statearr_48333_48399 = state_48260__$1;
(statearr_48333_48399[(2)] = reload_dependents);

(statearr_48333_48399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (38))){
var inst_48214 = (state_48260[(16)]);
var inst_48231 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48214);
var state_48260__$1 = state_48260;
var statearr_48334_48400 = state_48260__$1;
(statearr_48334_48400[(2)] = inst_48231);

(statearr_48334_48400[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (30))){
var state_48260__$1 = state_48260;
var statearr_48335_48401 = state_48260__$1;
(statearr_48335_48401[(2)] = null);

(statearr_48335_48401[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (10))){
var inst_48134 = (state_48260[(22)]);
var inst_48136 = cljs.core.chunked_seq_QMARK_.call(null,inst_48134);
var state_48260__$1 = state_48260;
if(inst_48136){
var statearr_48336_48402 = state_48260__$1;
(statearr_48336_48402[(1)] = (13));

} else {
var statearr_48337_48403 = state_48260__$1;
(statearr_48337_48403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (18))){
var inst_48168 = (state_48260[(2)]);
var state_48260__$1 = state_48260;
if(cljs.core.truth_(inst_48168)){
var statearr_48338_48404 = state_48260__$1;
(statearr_48338_48404[(1)] = (19));

} else {
var statearr_48339_48405 = state_48260__$1;
(statearr_48339_48405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (42))){
var state_48260__$1 = state_48260;
var statearr_48340_48406 = state_48260__$1;
(statearr_48340_48406[(2)] = null);

(statearr_48340_48406[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (37))){
var inst_48226 = (state_48260[(2)]);
var state_48260__$1 = state_48260;
var statearr_48341_48407 = state_48260__$1;
(statearr_48341_48407[(2)] = inst_48226);

(statearr_48341_48407[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48261 === (8))){
var inst_48121 = (state_48260[(7)]);
var inst_48134 = (state_48260[(22)]);
var inst_48134__$1 = cljs.core.seq.call(null,inst_48121);
var state_48260__$1 = (function (){var statearr_48342 = state_48260;
(statearr_48342[(22)] = inst_48134__$1);

return statearr_48342;
})();
if(inst_48134__$1){
var statearr_48343_48408 = state_48260__$1;
(statearr_48343_48408[(1)] = (10));

} else {
var statearr_48344_48409 = state_48260__$1;
(statearr_48344_48409[(1)] = (11));

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
});})(c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35729__auto__,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35730__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35730__auto____0 = (function (){
var statearr_48348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48348[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35730__auto__);

(statearr_48348[(1)] = (1));

return statearr_48348;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35730__auto____1 = (function (state_48260){
while(true){
var ret_value__35731__auto__ = (function (){try{while(true){
var result__35732__auto__ = switch__35729__auto__.call(null,state_48260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35732__auto__;
}
break;
}
}catch (e48349){if((e48349 instanceof Object)){
var ex__35733__auto__ = e48349;
var statearr_48350_48410 = state_48260;
(statearr_48350_48410[(5)] = ex__35733__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48411 = state_48260;
state_48260 = G__48411;
continue;
} else {
return ret_value__35731__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35730__auto__ = function(state_48260){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35730__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35730__auto____1.call(this,state_48260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35730__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35730__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35730__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35730__auto__;
})()
;})(switch__35729__auto__,c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35843__auto__ = (function (){var statearr_48351 = f__35842__auto__.call(null);
(statearr_48351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35841__auto__);

return statearr_48351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35843__auto__);
});})(c__35841__auto__,map__48106,map__48106__$1,opts,before_jsload,on_jsload,reload_dependents,map__48107,map__48107__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35841__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48414,link){
var map__48417 = p__48414;
var map__48417__$1 = ((((!((map__48417 == null)))?((((map__48417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48417):map__48417);
var file = cljs.core.get.call(null,map__48417__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__48417,map__48417__$1,file){
return (function (p1__48412_SHARP_,p2__48413_SHARP_){
if(cljs.core._EQ_.call(null,p1__48412_SHARP_,p2__48413_SHARP_)){
return p1__48412_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__48417,map__48417__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48423){
var map__48424 = p__48423;
var map__48424__$1 = ((((!((map__48424 == null)))?((((map__48424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48424):map__48424);
var match_length = cljs.core.get.call(null,map__48424__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48424__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48419_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48419_SHARP_);
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
var args48426 = [];
var len__31936__auto___48429 = arguments.length;
var i__31937__auto___48430 = (0);
while(true){
if((i__31937__auto___48430 < len__31936__auto___48429)){
args48426.push((arguments[i__31937__auto___48430]));

var G__48431 = (i__31937__auto___48430 + (1));
i__31937__auto___48430 = G__48431;
continue;
} else {
}
break;
}

var G__48428 = args48426.length;
switch (G__48428) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48426.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48433_SHARP_,p2__48434_SHARP_){
return cljs.core.assoc.call(null,p1__48433_SHARP_,cljs.core.get.call(null,p2__48434_SHARP_,key),p2__48434_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__48435){
var map__48438 = p__48435;
var map__48438__$1 = ((((!((map__48438 == null)))?((((map__48438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48438):map__48438);
var f_data = map__48438__$1;
var file = cljs.core.get.call(null,map__48438__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48440,files_msg){
var map__48447 = p__48440;
var map__48447__$1 = ((((!((map__48447 == null)))?((((map__48447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48447):map__48447);
var opts = map__48447__$1;
var on_cssload = cljs.core.get.call(null,map__48447__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__48449_48453 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__48450_48454 = null;
var count__48451_48455 = (0);
var i__48452_48456 = (0);
while(true){
if((i__48452_48456 < count__48451_48455)){
var f_48457 = cljs.core._nth.call(null,chunk__48450_48454,i__48452_48456);
figwheel.client.file_reloading.reload_css_file.call(null,f_48457);

var G__48458 = seq__48449_48453;
var G__48459 = chunk__48450_48454;
var G__48460 = count__48451_48455;
var G__48461 = (i__48452_48456 + (1));
seq__48449_48453 = G__48458;
chunk__48450_48454 = G__48459;
count__48451_48455 = G__48460;
i__48452_48456 = G__48461;
continue;
} else {
var temp__4657__auto___48462 = cljs.core.seq.call(null,seq__48449_48453);
if(temp__4657__auto___48462){
var seq__48449_48463__$1 = temp__4657__auto___48462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48449_48463__$1)){
var c__31672__auto___48464 = cljs.core.chunk_first.call(null,seq__48449_48463__$1);
var G__48465 = cljs.core.chunk_rest.call(null,seq__48449_48463__$1);
var G__48466 = c__31672__auto___48464;
var G__48467 = cljs.core.count.call(null,c__31672__auto___48464);
var G__48468 = (0);
seq__48449_48453 = G__48465;
chunk__48450_48454 = G__48466;
count__48451_48455 = G__48467;
i__48452_48456 = G__48468;
continue;
} else {
var f_48469 = cljs.core.first.call(null,seq__48449_48463__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_48469);

var G__48470 = cljs.core.next.call(null,seq__48449_48463__$1);
var G__48471 = null;
var G__48472 = (0);
var G__48473 = (0);
seq__48449_48453 = G__48470;
chunk__48450_48454 = G__48471;
count__48451_48455 = G__48472;
i__48452_48456 = G__48473;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__48447,map__48447__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__48447,map__48447__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1471840478742