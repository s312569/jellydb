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
var or__28279__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28279__auto__){
return or__28279__auto__;
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
var or__28279__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39989_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39989_SHARP_));
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
var seq__39994 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39995 = null;
var count__39996 = (0);
var i__39997 = (0);
while(true){
if((i__39997 < count__39996)){
var n = cljs.core._nth.call(null,chunk__39995,i__39997);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39998 = seq__39994;
var G__39999 = chunk__39995;
var G__40000 = count__39996;
var G__40001 = (i__39997 + (1));
seq__39994 = G__39998;
chunk__39995 = G__39999;
count__39996 = G__40000;
i__39997 = G__40001;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39994);
if(temp__4657__auto__){
var seq__39994__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39994__$1)){
var c__29090__auto__ = cljs.core.chunk_first.call(null,seq__39994__$1);
var G__40002 = cljs.core.chunk_rest.call(null,seq__39994__$1);
var G__40003 = c__29090__auto__;
var G__40004 = cljs.core.count.call(null,c__29090__auto__);
var G__40005 = (0);
seq__39994 = G__40002;
chunk__39995 = G__40003;
count__39996 = G__40004;
i__39997 = G__40005;
continue;
} else {
var n = cljs.core.first.call(null,seq__39994__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40006 = cljs.core.next.call(null,seq__39994__$1);
var G__40007 = null;
var G__40008 = (0);
var G__40009 = (0);
seq__39994 = G__40006;
chunk__39995 = G__40007;
count__39996 = G__40008;
i__39997 = G__40009;
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

var seq__40060_40071 = cljs.core.seq.call(null,deps);
var chunk__40061_40072 = null;
var count__40062_40073 = (0);
var i__40063_40074 = (0);
while(true){
if((i__40063_40074 < count__40062_40073)){
var dep_40075 = cljs.core._nth.call(null,chunk__40061_40072,i__40063_40074);
topo_sort_helper_STAR_.call(null,dep_40075,(depth + (1)),state);

var G__40076 = seq__40060_40071;
var G__40077 = chunk__40061_40072;
var G__40078 = count__40062_40073;
var G__40079 = (i__40063_40074 + (1));
seq__40060_40071 = G__40076;
chunk__40061_40072 = G__40077;
count__40062_40073 = G__40078;
i__40063_40074 = G__40079;
continue;
} else {
var temp__4657__auto___40080 = cljs.core.seq.call(null,seq__40060_40071);
if(temp__4657__auto___40080){
var seq__40060_40081__$1 = temp__4657__auto___40080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40060_40081__$1)){
var c__29090__auto___40082 = cljs.core.chunk_first.call(null,seq__40060_40081__$1);
var G__40083 = cljs.core.chunk_rest.call(null,seq__40060_40081__$1);
var G__40084 = c__29090__auto___40082;
var G__40085 = cljs.core.count.call(null,c__29090__auto___40082);
var G__40086 = (0);
seq__40060_40071 = G__40083;
chunk__40061_40072 = G__40084;
count__40062_40073 = G__40085;
i__40063_40074 = G__40086;
continue;
} else {
var dep_40087 = cljs.core.first.call(null,seq__40060_40081__$1);
topo_sort_helper_STAR_.call(null,dep_40087,(depth + (1)),state);

var G__40088 = cljs.core.next.call(null,seq__40060_40081__$1);
var G__40089 = null;
var G__40090 = (0);
var G__40091 = (0);
seq__40060_40071 = G__40088;
chunk__40061_40072 = G__40089;
count__40062_40073 = G__40090;
i__40063_40074 = G__40091;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40064){
var vec__40068 = p__40064;
var seq__40069 = cljs.core.seq.call(null,vec__40068);
var first__40070 = cljs.core.first.call(null,seq__40069);
var seq__40069__$1 = cljs.core.next.call(null,seq__40069);
var x = first__40070;
var xs = seq__40069__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40068,seq__40069,first__40070,seq__40069__$1,x,xs,get_deps__$1){
return (function (p1__40010_SHARP_){
return clojure.set.difference.call(null,p1__40010_SHARP_,x);
});})(vec__40068,seq__40069,first__40070,seq__40069__$1,x,xs,get_deps__$1))
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
var seq__40104 = cljs.core.seq.call(null,provides);
var chunk__40105 = null;
var count__40106 = (0);
var i__40107 = (0);
while(true){
if((i__40107 < count__40106)){
var prov = cljs.core._nth.call(null,chunk__40105,i__40107);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40108_40116 = cljs.core.seq.call(null,requires);
var chunk__40109_40117 = null;
var count__40110_40118 = (0);
var i__40111_40119 = (0);
while(true){
if((i__40111_40119 < count__40110_40118)){
var req_40120 = cljs.core._nth.call(null,chunk__40109_40117,i__40111_40119);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40120,prov);

var G__40121 = seq__40108_40116;
var G__40122 = chunk__40109_40117;
var G__40123 = count__40110_40118;
var G__40124 = (i__40111_40119 + (1));
seq__40108_40116 = G__40121;
chunk__40109_40117 = G__40122;
count__40110_40118 = G__40123;
i__40111_40119 = G__40124;
continue;
} else {
var temp__4657__auto___40125 = cljs.core.seq.call(null,seq__40108_40116);
if(temp__4657__auto___40125){
var seq__40108_40126__$1 = temp__4657__auto___40125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40108_40126__$1)){
var c__29090__auto___40127 = cljs.core.chunk_first.call(null,seq__40108_40126__$1);
var G__40128 = cljs.core.chunk_rest.call(null,seq__40108_40126__$1);
var G__40129 = c__29090__auto___40127;
var G__40130 = cljs.core.count.call(null,c__29090__auto___40127);
var G__40131 = (0);
seq__40108_40116 = G__40128;
chunk__40109_40117 = G__40129;
count__40110_40118 = G__40130;
i__40111_40119 = G__40131;
continue;
} else {
var req_40132 = cljs.core.first.call(null,seq__40108_40126__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40132,prov);

var G__40133 = cljs.core.next.call(null,seq__40108_40126__$1);
var G__40134 = null;
var G__40135 = (0);
var G__40136 = (0);
seq__40108_40116 = G__40133;
chunk__40109_40117 = G__40134;
count__40110_40118 = G__40135;
i__40111_40119 = G__40136;
continue;
}
} else {
}
}
break;
}

var G__40137 = seq__40104;
var G__40138 = chunk__40105;
var G__40139 = count__40106;
var G__40140 = (i__40107 + (1));
seq__40104 = G__40137;
chunk__40105 = G__40138;
count__40106 = G__40139;
i__40107 = G__40140;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40104);
if(temp__4657__auto__){
var seq__40104__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40104__$1)){
var c__29090__auto__ = cljs.core.chunk_first.call(null,seq__40104__$1);
var G__40141 = cljs.core.chunk_rest.call(null,seq__40104__$1);
var G__40142 = c__29090__auto__;
var G__40143 = cljs.core.count.call(null,c__29090__auto__);
var G__40144 = (0);
seq__40104 = G__40141;
chunk__40105 = G__40142;
count__40106 = G__40143;
i__40107 = G__40144;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40104__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40112_40145 = cljs.core.seq.call(null,requires);
var chunk__40113_40146 = null;
var count__40114_40147 = (0);
var i__40115_40148 = (0);
while(true){
if((i__40115_40148 < count__40114_40147)){
var req_40149 = cljs.core._nth.call(null,chunk__40113_40146,i__40115_40148);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40149,prov);

var G__40150 = seq__40112_40145;
var G__40151 = chunk__40113_40146;
var G__40152 = count__40114_40147;
var G__40153 = (i__40115_40148 + (1));
seq__40112_40145 = G__40150;
chunk__40113_40146 = G__40151;
count__40114_40147 = G__40152;
i__40115_40148 = G__40153;
continue;
} else {
var temp__4657__auto___40154__$1 = cljs.core.seq.call(null,seq__40112_40145);
if(temp__4657__auto___40154__$1){
var seq__40112_40155__$1 = temp__4657__auto___40154__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40112_40155__$1)){
var c__29090__auto___40156 = cljs.core.chunk_first.call(null,seq__40112_40155__$1);
var G__40157 = cljs.core.chunk_rest.call(null,seq__40112_40155__$1);
var G__40158 = c__29090__auto___40156;
var G__40159 = cljs.core.count.call(null,c__29090__auto___40156);
var G__40160 = (0);
seq__40112_40145 = G__40157;
chunk__40113_40146 = G__40158;
count__40114_40147 = G__40159;
i__40115_40148 = G__40160;
continue;
} else {
var req_40161 = cljs.core.first.call(null,seq__40112_40155__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40161,prov);

var G__40162 = cljs.core.next.call(null,seq__40112_40155__$1);
var G__40163 = null;
var G__40164 = (0);
var G__40165 = (0);
seq__40112_40145 = G__40162;
chunk__40113_40146 = G__40163;
count__40114_40147 = G__40164;
i__40115_40148 = G__40165;
continue;
}
} else {
}
}
break;
}

var G__40166 = cljs.core.next.call(null,seq__40104__$1);
var G__40167 = null;
var G__40168 = (0);
var G__40169 = (0);
seq__40104 = G__40166;
chunk__40105 = G__40167;
count__40106 = G__40168;
i__40107 = G__40169;
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
var seq__40174_40178 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40175_40179 = null;
var count__40176_40180 = (0);
var i__40177_40181 = (0);
while(true){
if((i__40177_40181 < count__40176_40180)){
var ns_40182 = cljs.core._nth.call(null,chunk__40175_40179,i__40177_40181);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40182);

var G__40183 = seq__40174_40178;
var G__40184 = chunk__40175_40179;
var G__40185 = count__40176_40180;
var G__40186 = (i__40177_40181 + (1));
seq__40174_40178 = G__40183;
chunk__40175_40179 = G__40184;
count__40176_40180 = G__40185;
i__40177_40181 = G__40186;
continue;
} else {
var temp__4657__auto___40187 = cljs.core.seq.call(null,seq__40174_40178);
if(temp__4657__auto___40187){
var seq__40174_40188__$1 = temp__4657__auto___40187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40174_40188__$1)){
var c__29090__auto___40189 = cljs.core.chunk_first.call(null,seq__40174_40188__$1);
var G__40190 = cljs.core.chunk_rest.call(null,seq__40174_40188__$1);
var G__40191 = c__29090__auto___40189;
var G__40192 = cljs.core.count.call(null,c__29090__auto___40189);
var G__40193 = (0);
seq__40174_40178 = G__40190;
chunk__40175_40179 = G__40191;
count__40176_40180 = G__40192;
i__40177_40181 = G__40193;
continue;
} else {
var ns_40194 = cljs.core.first.call(null,seq__40174_40188__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40194);

var G__40195 = cljs.core.next.call(null,seq__40174_40188__$1);
var G__40196 = null;
var G__40197 = (0);
var G__40198 = (0);
seq__40174_40178 = G__40195;
chunk__40175_40179 = G__40196;
count__40176_40180 = G__40197;
i__40177_40181 = G__40198;
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
goog.require_figwheel_backup_ = (function (){var or__28279__auto__ = goog.require__;
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
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
var G__40199__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40200__i = 0, G__40200__a = new Array(arguments.length -  0);
while (G__40200__i < G__40200__a.length) {G__40200__a[G__40200__i] = arguments[G__40200__i + 0]; ++G__40200__i;}
  args = new cljs.core.IndexedSeq(G__40200__a,0);
} 
return G__40199__delegate.call(this,args);};
G__40199.cljs$lang$maxFixedArity = 0;
G__40199.cljs$lang$applyTo = (function (arglist__40201){
var args = cljs.core.seq(arglist__40201);
return G__40199__delegate(args);
});
G__40199.cljs$core$IFn$_invoke$arity$variadic = G__40199__delegate;
return G__40199;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40203 = cljs.core._EQ_;
var expr__40204 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40203.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40204))){
var path_parts = ((function (pred__40203,expr__40204){
return (function (p1__40202_SHARP_){
return clojure.string.split.call(null,p1__40202_SHARP_,/[\/\\]/);
});})(pred__40203,expr__40204))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__40203,expr__40204){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40206){if((e40206 instanceof Error)){
var e = e40206;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40206;

}
}})());
});
;})(path_parts,sep,root,pred__40203,expr__40204))
} else {
if(cljs.core.truth_(pred__40203.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40204))){
return ((function (pred__40203,expr__40204){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__40203,expr__40204){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__40203,expr__40204))
);

return deferred.addErrback(((function (deferred,pred__40203,expr__40204){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__40203,expr__40204))
);
});
;})(pred__40203,expr__40204))
} else {
return ((function (pred__40203,expr__40204){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40203,expr__40204))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40207,callback){
var map__40210 = p__40207;
var map__40210__$1 = ((((!((map__40210 == null)))?((((map__40210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40210):map__40210);
var file_msg = map__40210__$1;
var request_url = cljs.core.get.call(null,map__40210__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__40210,map__40210__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40210,map__40210__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__34572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto__){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto__){
return (function (state_40234){
var state_val_40235 = (state_40234[(1)]);
if((state_val_40235 === (7))){
var inst_40230 = (state_40234[(2)]);
var state_40234__$1 = state_40234;
var statearr_40236_40256 = state_40234__$1;
(statearr_40236_40256[(2)] = inst_40230);

(statearr_40236_40256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40235 === (1))){
var state_40234__$1 = state_40234;
var statearr_40237_40257 = state_40234__$1;
(statearr_40237_40257[(2)] = null);

(statearr_40237_40257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40235 === (4))){
var inst_40214 = (state_40234[(7)]);
var inst_40214__$1 = (state_40234[(2)]);
var state_40234__$1 = (function (){var statearr_40238 = state_40234;
(statearr_40238[(7)] = inst_40214__$1);

return statearr_40238;
})();
if(cljs.core.truth_(inst_40214__$1)){
var statearr_40239_40258 = state_40234__$1;
(statearr_40239_40258[(1)] = (5));

} else {
var statearr_40240_40259 = state_40234__$1;
(statearr_40240_40259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40235 === (6))){
var state_40234__$1 = state_40234;
var statearr_40241_40260 = state_40234__$1;
(statearr_40241_40260[(2)] = null);

(statearr_40241_40260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40235 === (3))){
var inst_40232 = (state_40234[(2)]);
var state_40234__$1 = state_40234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40234__$1,inst_40232);
} else {
if((state_val_40235 === (2))){
var state_40234__$1 = state_40234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40234__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40235 === (11))){
var inst_40226 = (state_40234[(2)]);
var state_40234__$1 = (function (){var statearr_40242 = state_40234;
(statearr_40242[(8)] = inst_40226);

return statearr_40242;
})();
var statearr_40243_40261 = state_40234__$1;
(statearr_40243_40261[(2)] = null);

(statearr_40243_40261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40235 === (9))){
var inst_40218 = (state_40234[(9)]);
var inst_40220 = (state_40234[(10)]);
var inst_40222 = inst_40220.call(null,inst_40218);
var state_40234__$1 = state_40234;
var statearr_40244_40262 = state_40234__$1;
(statearr_40244_40262[(2)] = inst_40222);

(statearr_40244_40262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40235 === (5))){
var inst_40214 = (state_40234[(7)]);
var inst_40216 = figwheel.client.file_reloading.blocking_load.call(null,inst_40214);
var state_40234__$1 = state_40234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40234__$1,(8),inst_40216);
} else {
if((state_val_40235 === (10))){
var inst_40218 = (state_40234[(9)]);
var inst_40224 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40218);
var state_40234__$1 = state_40234;
var statearr_40245_40263 = state_40234__$1;
(statearr_40245_40263[(2)] = inst_40224);

(statearr_40245_40263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40235 === (8))){
var inst_40220 = (state_40234[(10)]);
var inst_40214 = (state_40234[(7)]);
var inst_40218 = (state_40234[(2)]);
var inst_40219 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40220__$1 = cljs.core.get.call(null,inst_40219,inst_40214);
var state_40234__$1 = (function (){var statearr_40246 = state_40234;
(statearr_40246[(9)] = inst_40218);

(statearr_40246[(10)] = inst_40220__$1);

return statearr_40246;
})();
if(cljs.core.truth_(inst_40220__$1)){
var statearr_40247_40264 = state_40234__$1;
(statearr_40247_40264[(1)] = (9));

} else {
var statearr_40248_40265 = state_40234__$1;
(statearr_40248_40265[(1)] = (10));

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
});})(c__34572__auto__))
;
return ((function (switch__34460__auto__,c__34572__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34461__auto__ = null;
var figwheel$client$file_reloading$state_machine__34461__auto____0 = (function (){
var statearr_40252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40252[(0)] = figwheel$client$file_reloading$state_machine__34461__auto__);

(statearr_40252[(1)] = (1));

return statearr_40252;
});
var figwheel$client$file_reloading$state_machine__34461__auto____1 = (function (state_40234){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_40234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e40253){if((e40253 instanceof Object)){
var ex__34464__auto__ = e40253;
var statearr_40254_40266 = state_40234;
(statearr_40254_40266[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40267 = state_40234;
state_40234 = G__40267;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34461__auto__ = function(state_40234){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34461__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34461__auto____1.call(this,state_40234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34461__auto____0;
figwheel$client$file_reloading$state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34461__auto____1;
return figwheel$client$file_reloading$state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto__))
})();
var state__34574__auto__ = (function (){var statearr_40255 = f__34573__auto__.call(null);
(statearr_40255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto__);

return statearr_40255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto__))
);

return c__34572__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40268,callback){
var map__40271 = p__40268;
var map__40271__$1 = ((((!((map__40271 == null)))?((((map__40271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40271):map__40271);
var file_msg = map__40271__$1;
var namespace = cljs.core.get.call(null,map__40271__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40271,map__40271__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40271,map__40271__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40273){
var map__40276 = p__40273;
var map__40276__$1 = ((((!((map__40276 == null)))?((((map__40276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40276):map__40276);
var file_msg = map__40276__$1;
var namespace = cljs.core.get.call(null,map__40276__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28267__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__28267__auto__){
var or__28279__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28279__auto__)){
return or__28279__auto__;
} else {
var or__28279__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28279__auto____$1)){
return or__28279__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28267__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40278,callback){
var map__40281 = p__40278;
var map__40281__$1 = ((((!((map__40281 == null)))?((((map__40281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40281):map__40281);
var file_msg = map__40281__$1;
var request_url = cljs.core.get.call(null,map__40281__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40281__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34572__auto___40385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto___40385,out){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto___40385,out){
return (function (state_40367){
var state_val_40368 = (state_40367[(1)]);
if((state_val_40368 === (1))){
var inst_40341 = cljs.core.seq.call(null,files);
var inst_40342 = cljs.core.first.call(null,inst_40341);
var inst_40343 = cljs.core.next.call(null,inst_40341);
var inst_40344 = files;
var state_40367__$1 = (function (){var statearr_40369 = state_40367;
(statearr_40369[(7)] = inst_40343);

(statearr_40369[(8)] = inst_40344);

(statearr_40369[(9)] = inst_40342);

return statearr_40369;
})();
var statearr_40370_40386 = state_40367__$1;
(statearr_40370_40386[(2)] = null);

(statearr_40370_40386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (2))){
var inst_40350 = (state_40367[(10)]);
var inst_40344 = (state_40367[(8)]);
var inst_40349 = cljs.core.seq.call(null,inst_40344);
var inst_40350__$1 = cljs.core.first.call(null,inst_40349);
var inst_40351 = cljs.core.next.call(null,inst_40349);
var inst_40352 = (inst_40350__$1 == null);
var inst_40353 = cljs.core.not.call(null,inst_40352);
var state_40367__$1 = (function (){var statearr_40371 = state_40367;
(statearr_40371[(11)] = inst_40351);

(statearr_40371[(10)] = inst_40350__$1);

return statearr_40371;
})();
if(inst_40353){
var statearr_40372_40387 = state_40367__$1;
(statearr_40372_40387[(1)] = (4));

} else {
var statearr_40373_40388 = state_40367__$1;
(statearr_40373_40388[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (3))){
var inst_40365 = (state_40367[(2)]);
var state_40367__$1 = state_40367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40367__$1,inst_40365);
} else {
if((state_val_40368 === (4))){
var inst_40350 = (state_40367[(10)]);
var inst_40355 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40350);
var state_40367__$1 = state_40367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40367__$1,(7),inst_40355);
} else {
if((state_val_40368 === (5))){
var inst_40361 = cljs.core.async.close_BANG_.call(null,out);
var state_40367__$1 = state_40367;
var statearr_40374_40389 = state_40367__$1;
(statearr_40374_40389[(2)] = inst_40361);

(statearr_40374_40389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (6))){
var inst_40363 = (state_40367[(2)]);
var state_40367__$1 = state_40367;
var statearr_40375_40390 = state_40367__$1;
(statearr_40375_40390[(2)] = inst_40363);

(statearr_40375_40390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40368 === (7))){
var inst_40351 = (state_40367[(11)]);
var inst_40357 = (state_40367[(2)]);
var inst_40358 = cljs.core.async.put_BANG_.call(null,out,inst_40357);
var inst_40344 = inst_40351;
var state_40367__$1 = (function (){var statearr_40376 = state_40367;
(statearr_40376[(12)] = inst_40358);

(statearr_40376[(8)] = inst_40344);

return statearr_40376;
})();
var statearr_40377_40391 = state_40367__$1;
(statearr_40377_40391[(2)] = null);

(statearr_40377_40391[(1)] = (2));


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
});})(c__34572__auto___40385,out))
;
return ((function (switch__34460__auto__,c__34572__auto___40385,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34461__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34461__auto____0 = (function (){
var statearr_40381 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40381[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34461__auto__);

(statearr_40381[(1)] = (1));

return statearr_40381;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34461__auto____1 = (function (state_40367){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_40367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e40382){if((e40382 instanceof Object)){
var ex__34464__auto__ = e40382;
var statearr_40383_40392 = state_40367;
(statearr_40383_40392[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40393 = state_40367;
state_40367 = G__40393;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34461__auto__ = function(state_40367){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34461__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34461__auto____1.call(this,state_40367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34461__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34461__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto___40385,out))
})();
var state__34574__auto__ = (function (){var statearr_40384 = f__34573__auto__.call(null);
(statearr_40384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto___40385);

return statearr_40384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto___40385,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40394,opts){
var map__40398 = p__40394;
var map__40398__$1 = ((((!((map__40398 == null)))?((((map__40398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40398):map__40398);
var eval_body__$1 = cljs.core.get.call(null,map__40398__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40398__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28267__auto__ = eval_body__$1;
if(cljs.core.truth_(and__28267__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__28267__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40400){var e = e40400;
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
return (function (p1__40401_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40401_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__40410){
var vec__40411 = p__40410;
var k = cljs.core.nth.call(null,vec__40411,(0),null);
var v = cljs.core.nth.call(null,vec__40411,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40414){
var vec__40415 = p__40414;
var k = cljs.core.nth.call(null,vec__40415,(0),null);
var v = cljs.core.nth.call(null,vec__40415,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40421,p__40422){
var map__40669 = p__40421;
var map__40669__$1 = ((((!((map__40669 == null)))?((((map__40669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40669):map__40669);
var opts = map__40669__$1;
var before_jsload = cljs.core.get.call(null,map__40669__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40669__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40669__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40670 = p__40422;
var map__40670__$1 = ((((!((map__40670 == null)))?((((map__40670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40670):map__40670);
var msg = map__40670__$1;
var files = cljs.core.get.call(null,map__40670__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40670__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40670__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34573__auto__ = (function (){var switch__34460__auto__ = ((function (c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40823){
var state_val_40824 = (state_40823[(1)]);
if((state_val_40824 === (7))){
var inst_40684 = (state_40823[(7)]);
var inst_40685 = (state_40823[(8)]);
var inst_40687 = (state_40823[(9)]);
var inst_40686 = (state_40823[(10)]);
var inst_40692 = cljs.core._nth.call(null,inst_40685,inst_40687);
var inst_40693 = figwheel.client.file_reloading.eval_body.call(null,inst_40692,opts);
var inst_40694 = (inst_40687 + (1));
var tmp40825 = inst_40684;
var tmp40826 = inst_40685;
var tmp40827 = inst_40686;
var inst_40684__$1 = tmp40825;
var inst_40685__$1 = tmp40826;
var inst_40686__$1 = tmp40827;
var inst_40687__$1 = inst_40694;
var state_40823__$1 = (function (){var statearr_40828 = state_40823;
(statearr_40828[(11)] = inst_40693);

(statearr_40828[(7)] = inst_40684__$1);

(statearr_40828[(8)] = inst_40685__$1);

(statearr_40828[(9)] = inst_40687__$1);

(statearr_40828[(10)] = inst_40686__$1);

return statearr_40828;
})();
var statearr_40829_40915 = state_40823__$1;
(statearr_40829_40915[(2)] = null);

(statearr_40829_40915[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (20))){
var inst_40727 = (state_40823[(12)]);
var inst_40735 = figwheel.client.file_reloading.sort_files.call(null,inst_40727);
var state_40823__$1 = state_40823;
var statearr_40830_40916 = state_40823__$1;
(statearr_40830_40916[(2)] = inst_40735);

(statearr_40830_40916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (27))){
var state_40823__$1 = state_40823;
var statearr_40831_40917 = state_40823__$1;
(statearr_40831_40917[(2)] = null);

(statearr_40831_40917[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (1))){
var inst_40676 = (state_40823[(13)]);
var inst_40673 = before_jsload.call(null,files);
var inst_40674 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40675 = (function (){return ((function (inst_40676,inst_40673,inst_40674,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40418_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40418_SHARP_);
});
;})(inst_40676,inst_40673,inst_40674,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40676__$1 = cljs.core.filter.call(null,inst_40675,files);
var inst_40677 = cljs.core.not_empty.call(null,inst_40676__$1);
var state_40823__$1 = (function (){var statearr_40832 = state_40823;
(statearr_40832[(13)] = inst_40676__$1);

(statearr_40832[(14)] = inst_40674);

(statearr_40832[(15)] = inst_40673);

return statearr_40832;
})();
if(cljs.core.truth_(inst_40677)){
var statearr_40833_40918 = state_40823__$1;
(statearr_40833_40918[(1)] = (2));

} else {
var statearr_40834_40919 = state_40823__$1;
(statearr_40834_40919[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (24))){
var state_40823__$1 = state_40823;
var statearr_40835_40920 = state_40823__$1;
(statearr_40835_40920[(2)] = null);

(statearr_40835_40920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (39))){
var inst_40777 = (state_40823[(16)]);
var state_40823__$1 = state_40823;
var statearr_40836_40921 = state_40823__$1;
(statearr_40836_40921[(2)] = inst_40777);

(statearr_40836_40921[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (46))){
var inst_40818 = (state_40823[(2)]);
var state_40823__$1 = state_40823;
var statearr_40837_40922 = state_40823__$1;
(statearr_40837_40922[(2)] = inst_40818);

(statearr_40837_40922[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (4))){
var inst_40721 = (state_40823[(2)]);
var inst_40722 = cljs.core.List.EMPTY;
var inst_40723 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40722);
var inst_40724 = (function (){return ((function (inst_40721,inst_40722,inst_40723,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40419_SHARP_){
var and__28267__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40419_SHARP_);
if(cljs.core.truth_(and__28267__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40419_SHARP_));
} else {
return and__28267__auto__;
}
});
;})(inst_40721,inst_40722,inst_40723,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40725 = cljs.core.filter.call(null,inst_40724,files);
var inst_40726 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40727 = cljs.core.concat.call(null,inst_40725,inst_40726);
var state_40823__$1 = (function (){var statearr_40838 = state_40823;
(statearr_40838[(17)] = inst_40723);

(statearr_40838[(18)] = inst_40721);

(statearr_40838[(12)] = inst_40727);

return statearr_40838;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40839_40923 = state_40823__$1;
(statearr_40839_40923[(1)] = (16));

} else {
var statearr_40840_40924 = state_40823__$1;
(statearr_40840_40924[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (15))){
var inst_40711 = (state_40823[(2)]);
var state_40823__$1 = state_40823;
var statearr_40841_40925 = state_40823__$1;
(statearr_40841_40925[(2)] = inst_40711);

(statearr_40841_40925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (21))){
var inst_40737 = (state_40823[(19)]);
var inst_40737__$1 = (state_40823[(2)]);
var inst_40738 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40737__$1);
var state_40823__$1 = (function (){var statearr_40842 = state_40823;
(statearr_40842[(19)] = inst_40737__$1);

return statearr_40842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40823__$1,(22),inst_40738);
} else {
if((state_val_40824 === (31))){
var inst_40821 = (state_40823[(2)]);
var state_40823__$1 = state_40823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40823__$1,inst_40821);
} else {
if((state_val_40824 === (32))){
var inst_40777 = (state_40823[(16)]);
var inst_40782 = inst_40777.cljs$lang$protocol_mask$partition0$;
var inst_40783 = (inst_40782 & (64));
var inst_40784 = inst_40777.cljs$core$ISeq$;
var inst_40785 = (inst_40783) || (inst_40784);
var state_40823__$1 = state_40823;
if(cljs.core.truth_(inst_40785)){
var statearr_40843_40926 = state_40823__$1;
(statearr_40843_40926[(1)] = (35));

} else {
var statearr_40844_40927 = state_40823__$1;
(statearr_40844_40927[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (40))){
var inst_40798 = (state_40823[(20)]);
var inst_40797 = (state_40823[(2)]);
var inst_40798__$1 = cljs.core.get.call(null,inst_40797,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40799 = cljs.core.get.call(null,inst_40797,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40800 = cljs.core.not_empty.call(null,inst_40798__$1);
var state_40823__$1 = (function (){var statearr_40845 = state_40823;
(statearr_40845[(21)] = inst_40799);

(statearr_40845[(20)] = inst_40798__$1);

return statearr_40845;
})();
if(cljs.core.truth_(inst_40800)){
var statearr_40846_40928 = state_40823__$1;
(statearr_40846_40928[(1)] = (41));

} else {
var statearr_40847_40929 = state_40823__$1;
(statearr_40847_40929[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (33))){
var state_40823__$1 = state_40823;
var statearr_40848_40930 = state_40823__$1;
(statearr_40848_40930[(2)] = false);

(statearr_40848_40930[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (13))){
var inst_40697 = (state_40823[(22)]);
var inst_40701 = cljs.core.chunk_first.call(null,inst_40697);
var inst_40702 = cljs.core.chunk_rest.call(null,inst_40697);
var inst_40703 = cljs.core.count.call(null,inst_40701);
var inst_40684 = inst_40702;
var inst_40685 = inst_40701;
var inst_40686 = inst_40703;
var inst_40687 = (0);
var state_40823__$1 = (function (){var statearr_40849 = state_40823;
(statearr_40849[(7)] = inst_40684);

(statearr_40849[(8)] = inst_40685);

(statearr_40849[(9)] = inst_40687);

(statearr_40849[(10)] = inst_40686);

return statearr_40849;
})();
var statearr_40850_40931 = state_40823__$1;
(statearr_40850_40931[(2)] = null);

(statearr_40850_40931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (22))){
var inst_40745 = (state_40823[(23)]);
var inst_40741 = (state_40823[(24)]);
var inst_40740 = (state_40823[(25)]);
var inst_40737 = (state_40823[(19)]);
var inst_40740__$1 = (state_40823[(2)]);
var inst_40741__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40740__$1);
var inst_40742 = (function (){var all_files = inst_40737;
var res_SINGLEQUOTE_ = inst_40740__$1;
var res = inst_40741__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40745,inst_40741,inst_40740,inst_40737,inst_40740__$1,inst_40741__$1,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40420_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40420_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40745,inst_40741,inst_40740,inst_40737,inst_40740__$1,inst_40741__$1,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40743 = cljs.core.filter.call(null,inst_40742,inst_40740__$1);
var inst_40744 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40745__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40744);
var inst_40746 = cljs.core.not_empty.call(null,inst_40745__$1);
var state_40823__$1 = (function (){var statearr_40851 = state_40823;
(statearr_40851[(23)] = inst_40745__$1);

(statearr_40851[(24)] = inst_40741__$1);

(statearr_40851[(25)] = inst_40740__$1);

(statearr_40851[(26)] = inst_40743);

return statearr_40851;
})();
if(cljs.core.truth_(inst_40746)){
var statearr_40852_40932 = state_40823__$1;
(statearr_40852_40932[(1)] = (23));

} else {
var statearr_40853_40933 = state_40823__$1;
(statearr_40853_40933[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (36))){
var state_40823__$1 = state_40823;
var statearr_40854_40934 = state_40823__$1;
(statearr_40854_40934[(2)] = false);

(statearr_40854_40934[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (41))){
var inst_40798 = (state_40823[(20)]);
var inst_40802 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40803 = cljs.core.map.call(null,inst_40802,inst_40798);
var inst_40804 = cljs.core.pr_str.call(null,inst_40803);
var inst_40805 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40804)].join('');
var inst_40806 = figwheel.client.utils.log.call(null,inst_40805);
var state_40823__$1 = state_40823;
var statearr_40855_40935 = state_40823__$1;
(statearr_40855_40935[(2)] = inst_40806);

(statearr_40855_40935[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (43))){
var inst_40799 = (state_40823[(21)]);
var inst_40809 = (state_40823[(2)]);
var inst_40810 = cljs.core.not_empty.call(null,inst_40799);
var state_40823__$1 = (function (){var statearr_40856 = state_40823;
(statearr_40856[(27)] = inst_40809);

return statearr_40856;
})();
if(cljs.core.truth_(inst_40810)){
var statearr_40857_40936 = state_40823__$1;
(statearr_40857_40936[(1)] = (44));

} else {
var statearr_40858_40937 = state_40823__$1;
(statearr_40858_40937[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (29))){
var inst_40745 = (state_40823[(23)]);
var inst_40741 = (state_40823[(24)]);
var inst_40740 = (state_40823[(25)]);
var inst_40743 = (state_40823[(26)]);
var inst_40777 = (state_40823[(16)]);
var inst_40737 = (state_40823[(19)]);
var inst_40773 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40776 = (function (){var all_files = inst_40737;
var res_SINGLEQUOTE_ = inst_40740;
var res = inst_40741;
var files_not_loaded = inst_40743;
var dependencies_that_loaded = inst_40745;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40745,inst_40741,inst_40740,inst_40743,inst_40777,inst_40737,inst_40773,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40775){
var map__40859 = p__40775;
var map__40859__$1 = ((((!((map__40859 == null)))?((((map__40859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40859):map__40859);
var namespace = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40745,inst_40741,inst_40740,inst_40743,inst_40777,inst_40737,inst_40773,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40777__$1 = cljs.core.group_by.call(null,inst_40776,inst_40743);
var inst_40779 = (inst_40777__$1 == null);
var inst_40780 = cljs.core.not.call(null,inst_40779);
var state_40823__$1 = (function (){var statearr_40861 = state_40823;
(statearr_40861[(28)] = inst_40773);

(statearr_40861[(16)] = inst_40777__$1);

return statearr_40861;
})();
if(inst_40780){
var statearr_40862_40938 = state_40823__$1;
(statearr_40862_40938[(1)] = (32));

} else {
var statearr_40863_40939 = state_40823__$1;
(statearr_40863_40939[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (44))){
var inst_40799 = (state_40823[(21)]);
var inst_40812 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40799);
var inst_40813 = cljs.core.pr_str.call(null,inst_40812);
var inst_40814 = [cljs.core.str("not required: "),cljs.core.str(inst_40813)].join('');
var inst_40815 = figwheel.client.utils.log.call(null,inst_40814);
var state_40823__$1 = state_40823;
var statearr_40864_40940 = state_40823__$1;
(statearr_40864_40940[(2)] = inst_40815);

(statearr_40864_40940[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (6))){
var inst_40718 = (state_40823[(2)]);
var state_40823__$1 = state_40823;
var statearr_40865_40941 = state_40823__$1;
(statearr_40865_40941[(2)] = inst_40718);

(statearr_40865_40941[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (28))){
var inst_40743 = (state_40823[(26)]);
var inst_40770 = (state_40823[(2)]);
var inst_40771 = cljs.core.not_empty.call(null,inst_40743);
var state_40823__$1 = (function (){var statearr_40866 = state_40823;
(statearr_40866[(29)] = inst_40770);

return statearr_40866;
})();
if(cljs.core.truth_(inst_40771)){
var statearr_40867_40942 = state_40823__$1;
(statearr_40867_40942[(1)] = (29));

} else {
var statearr_40868_40943 = state_40823__$1;
(statearr_40868_40943[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (25))){
var inst_40741 = (state_40823[(24)]);
var inst_40757 = (state_40823[(2)]);
var inst_40758 = cljs.core.not_empty.call(null,inst_40741);
var state_40823__$1 = (function (){var statearr_40869 = state_40823;
(statearr_40869[(30)] = inst_40757);

return statearr_40869;
})();
if(cljs.core.truth_(inst_40758)){
var statearr_40870_40944 = state_40823__$1;
(statearr_40870_40944[(1)] = (26));

} else {
var statearr_40871_40945 = state_40823__$1;
(statearr_40871_40945[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (34))){
var inst_40792 = (state_40823[(2)]);
var state_40823__$1 = state_40823;
if(cljs.core.truth_(inst_40792)){
var statearr_40872_40946 = state_40823__$1;
(statearr_40872_40946[(1)] = (38));

} else {
var statearr_40873_40947 = state_40823__$1;
(statearr_40873_40947[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (17))){
var state_40823__$1 = state_40823;
var statearr_40874_40948 = state_40823__$1;
(statearr_40874_40948[(2)] = recompile_dependents);

(statearr_40874_40948[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (3))){
var state_40823__$1 = state_40823;
var statearr_40875_40949 = state_40823__$1;
(statearr_40875_40949[(2)] = null);

(statearr_40875_40949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (12))){
var inst_40714 = (state_40823[(2)]);
var state_40823__$1 = state_40823;
var statearr_40876_40950 = state_40823__$1;
(statearr_40876_40950[(2)] = inst_40714);

(statearr_40876_40950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (2))){
var inst_40676 = (state_40823[(13)]);
var inst_40683 = cljs.core.seq.call(null,inst_40676);
var inst_40684 = inst_40683;
var inst_40685 = null;
var inst_40686 = (0);
var inst_40687 = (0);
var state_40823__$1 = (function (){var statearr_40877 = state_40823;
(statearr_40877[(7)] = inst_40684);

(statearr_40877[(8)] = inst_40685);

(statearr_40877[(9)] = inst_40687);

(statearr_40877[(10)] = inst_40686);

return statearr_40877;
})();
var statearr_40878_40951 = state_40823__$1;
(statearr_40878_40951[(2)] = null);

(statearr_40878_40951[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (23))){
var inst_40745 = (state_40823[(23)]);
var inst_40741 = (state_40823[(24)]);
var inst_40740 = (state_40823[(25)]);
var inst_40743 = (state_40823[(26)]);
var inst_40737 = (state_40823[(19)]);
var inst_40748 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40750 = (function (){var all_files = inst_40737;
var res_SINGLEQUOTE_ = inst_40740;
var res = inst_40741;
var files_not_loaded = inst_40743;
var dependencies_that_loaded = inst_40745;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40745,inst_40741,inst_40740,inst_40743,inst_40737,inst_40748,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40749){
var map__40879 = p__40749;
var map__40879__$1 = ((((!((map__40879 == null)))?((((map__40879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40879):map__40879);
var request_url = cljs.core.get.call(null,map__40879__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40745,inst_40741,inst_40740,inst_40743,inst_40737,inst_40748,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40751 = cljs.core.reverse.call(null,inst_40745);
var inst_40752 = cljs.core.map.call(null,inst_40750,inst_40751);
var inst_40753 = cljs.core.pr_str.call(null,inst_40752);
var inst_40754 = figwheel.client.utils.log.call(null,inst_40753);
var state_40823__$1 = (function (){var statearr_40881 = state_40823;
(statearr_40881[(31)] = inst_40748);

return statearr_40881;
})();
var statearr_40882_40952 = state_40823__$1;
(statearr_40882_40952[(2)] = inst_40754);

(statearr_40882_40952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (35))){
var state_40823__$1 = state_40823;
var statearr_40883_40953 = state_40823__$1;
(statearr_40883_40953[(2)] = true);

(statearr_40883_40953[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (19))){
var inst_40727 = (state_40823[(12)]);
var inst_40733 = figwheel.client.file_reloading.expand_files.call(null,inst_40727);
var state_40823__$1 = state_40823;
var statearr_40884_40954 = state_40823__$1;
(statearr_40884_40954[(2)] = inst_40733);

(statearr_40884_40954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (11))){
var state_40823__$1 = state_40823;
var statearr_40885_40955 = state_40823__$1;
(statearr_40885_40955[(2)] = null);

(statearr_40885_40955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (9))){
var inst_40716 = (state_40823[(2)]);
var state_40823__$1 = state_40823;
var statearr_40886_40956 = state_40823__$1;
(statearr_40886_40956[(2)] = inst_40716);

(statearr_40886_40956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (5))){
var inst_40687 = (state_40823[(9)]);
var inst_40686 = (state_40823[(10)]);
var inst_40689 = (inst_40687 < inst_40686);
var inst_40690 = inst_40689;
var state_40823__$1 = state_40823;
if(cljs.core.truth_(inst_40690)){
var statearr_40887_40957 = state_40823__$1;
(statearr_40887_40957[(1)] = (7));

} else {
var statearr_40888_40958 = state_40823__$1;
(statearr_40888_40958[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (14))){
var inst_40697 = (state_40823[(22)]);
var inst_40706 = cljs.core.first.call(null,inst_40697);
var inst_40707 = figwheel.client.file_reloading.eval_body.call(null,inst_40706,opts);
var inst_40708 = cljs.core.next.call(null,inst_40697);
var inst_40684 = inst_40708;
var inst_40685 = null;
var inst_40686 = (0);
var inst_40687 = (0);
var state_40823__$1 = (function (){var statearr_40889 = state_40823;
(statearr_40889[(7)] = inst_40684);

(statearr_40889[(8)] = inst_40685);

(statearr_40889[(32)] = inst_40707);

(statearr_40889[(9)] = inst_40687);

(statearr_40889[(10)] = inst_40686);

return statearr_40889;
})();
var statearr_40890_40959 = state_40823__$1;
(statearr_40890_40959[(2)] = null);

(statearr_40890_40959[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (45))){
var state_40823__$1 = state_40823;
var statearr_40891_40960 = state_40823__$1;
(statearr_40891_40960[(2)] = null);

(statearr_40891_40960[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (26))){
var inst_40745 = (state_40823[(23)]);
var inst_40741 = (state_40823[(24)]);
var inst_40740 = (state_40823[(25)]);
var inst_40743 = (state_40823[(26)]);
var inst_40737 = (state_40823[(19)]);
var inst_40760 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40762 = (function (){var all_files = inst_40737;
var res_SINGLEQUOTE_ = inst_40740;
var res = inst_40741;
var files_not_loaded = inst_40743;
var dependencies_that_loaded = inst_40745;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40745,inst_40741,inst_40740,inst_40743,inst_40737,inst_40760,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40761){
var map__40892 = p__40761;
var map__40892__$1 = ((((!((map__40892 == null)))?((((map__40892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40892):map__40892);
var namespace = cljs.core.get.call(null,map__40892__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40892__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40745,inst_40741,inst_40740,inst_40743,inst_40737,inst_40760,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40763 = cljs.core.map.call(null,inst_40762,inst_40741);
var inst_40764 = cljs.core.pr_str.call(null,inst_40763);
var inst_40765 = figwheel.client.utils.log.call(null,inst_40764);
var inst_40766 = (function (){var all_files = inst_40737;
var res_SINGLEQUOTE_ = inst_40740;
var res = inst_40741;
var files_not_loaded = inst_40743;
var dependencies_that_loaded = inst_40745;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40745,inst_40741,inst_40740,inst_40743,inst_40737,inst_40760,inst_40762,inst_40763,inst_40764,inst_40765,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40745,inst_40741,inst_40740,inst_40743,inst_40737,inst_40760,inst_40762,inst_40763,inst_40764,inst_40765,state_val_40824,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40767 = setTimeout(inst_40766,(10));
var state_40823__$1 = (function (){var statearr_40894 = state_40823;
(statearr_40894[(33)] = inst_40765);

(statearr_40894[(34)] = inst_40760);

return statearr_40894;
})();
var statearr_40895_40961 = state_40823__$1;
(statearr_40895_40961[(2)] = inst_40767);

(statearr_40895_40961[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (16))){
var state_40823__$1 = state_40823;
var statearr_40896_40962 = state_40823__$1;
(statearr_40896_40962[(2)] = reload_dependents);

(statearr_40896_40962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (38))){
var inst_40777 = (state_40823[(16)]);
var inst_40794 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40777);
var state_40823__$1 = state_40823;
var statearr_40897_40963 = state_40823__$1;
(statearr_40897_40963[(2)] = inst_40794);

(statearr_40897_40963[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (30))){
var state_40823__$1 = state_40823;
var statearr_40898_40964 = state_40823__$1;
(statearr_40898_40964[(2)] = null);

(statearr_40898_40964[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (10))){
var inst_40697 = (state_40823[(22)]);
var inst_40699 = cljs.core.chunked_seq_QMARK_.call(null,inst_40697);
var state_40823__$1 = state_40823;
if(inst_40699){
var statearr_40899_40965 = state_40823__$1;
(statearr_40899_40965[(1)] = (13));

} else {
var statearr_40900_40966 = state_40823__$1;
(statearr_40900_40966[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (18))){
var inst_40731 = (state_40823[(2)]);
var state_40823__$1 = state_40823;
if(cljs.core.truth_(inst_40731)){
var statearr_40901_40967 = state_40823__$1;
(statearr_40901_40967[(1)] = (19));

} else {
var statearr_40902_40968 = state_40823__$1;
(statearr_40902_40968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (42))){
var state_40823__$1 = state_40823;
var statearr_40903_40969 = state_40823__$1;
(statearr_40903_40969[(2)] = null);

(statearr_40903_40969[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (37))){
var inst_40789 = (state_40823[(2)]);
var state_40823__$1 = state_40823;
var statearr_40904_40970 = state_40823__$1;
(statearr_40904_40970[(2)] = inst_40789);

(statearr_40904_40970[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40824 === (8))){
var inst_40684 = (state_40823[(7)]);
var inst_40697 = (state_40823[(22)]);
var inst_40697__$1 = cljs.core.seq.call(null,inst_40684);
var state_40823__$1 = (function (){var statearr_40905 = state_40823;
(statearr_40905[(22)] = inst_40697__$1);

return statearr_40905;
})();
if(inst_40697__$1){
var statearr_40906_40971 = state_40823__$1;
(statearr_40906_40971[(1)] = (10));

} else {
var statearr_40907_40972 = state_40823__$1;
(statearr_40907_40972[(1)] = (11));

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
});})(c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34460__auto__,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34461__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34461__auto____0 = (function (){
var statearr_40911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40911[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34461__auto__);

(statearr_40911[(1)] = (1));

return statearr_40911;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34461__auto____1 = (function (state_40823){
while(true){
var ret_value__34462__auto__ = (function (){try{while(true){
var result__34463__auto__ = switch__34460__auto__.call(null,state_40823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34463__auto__;
}
break;
}
}catch (e40912){if((e40912 instanceof Object)){
var ex__34464__auto__ = e40912;
var statearr_40913_40973 = state_40823;
(statearr_40913_40973[(5)] = ex__34464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40974 = state_40823;
state_40823 = G__40974;
continue;
} else {
return ret_value__34462__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34461__auto__ = function(state_40823){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34461__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34461__auto____1.call(this,state_40823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34461__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34461__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34461__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34461__auto__;
})()
;})(switch__34460__auto__,c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34574__auto__ = (function (){var statearr_40914 = f__34573__auto__.call(null);
(statearr_40914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34572__auto__);

return statearr_40914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34574__auto__);
});})(c__34572__auto__,map__40669,map__40669__$1,opts,before_jsload,on_jsload,reload_dependents,map__40670,map__40670__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34572__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40977,link){
var map__40980 = p__40977;
var map__40980__$1 = ((((!((map__40980 == null)))?((((map__40980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40980):map__40980);
var file = cljs.core.get.call(null,map__40980__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__40980,map__40980__$1,file){
return (function (p1__40975_SHARP_,p2__40976_SHARP_){
if(cljs.core._EQ_.call(null,p1__40975_SHARP_,p2__40976_SHARP_)){
return p1__40975_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__40980,map__40980__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40986){
var map__40987 = p__40986;
var map__40987__$1 = ((((!((map__40987 == null)))?((((map__40987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40987):map__40987);
var match_length = cljs.core.get.call(null,map__40987__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40987__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40982_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40982_SHARP_);
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
var args40989 = [];
var len__29354__auto___40992 = arguments.length;
var i__29355__auto___40993 = (0);
while(true){
if((i__29355__auto___40993 < len__29354__auto___40992)){
args40989.push((arguments[i__29355__auto___40993]));

var G__40994 = (i__29355__auto___40993 + (1));
i__29355__auto___40993 = G__40994;
continue;
} else {
}
break;
}

var G__40991 = args40989.length;
switch (G__40991) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40989.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40996_SHARP_,p2__40997_SHARP_){
return cljs.core.assoc.call(null,p1__40996_SHARP_,cljs.core.get.call(null,p2__40997_SHARP_,key),p2__40997_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__40998){
var map__41001 = p__40998;
var map__41001__$1 = ((((!((map__41001 == null)))?((((map__41001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41001):map__41001);
var f_data = map__41001__$1;
var file = cljs.core.get.call(null,map__41001__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41003,files_msg){
var map__41010 = p__41003;
var map__41010__$1 = ((((!((map__41010 == null)))?((((map__41010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41010):map__41010);
var opts = map__41010__$1;
var on_cssload = cljs.core.get.call(null,map__41010__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__41012_41016 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__41013_41017 = null;
var count__41014_41018 = (0);
var i__41015_41019 = (0);
while(true){
if((i__41015_41019 < count__41014_41018)){
var f_41020 = cljs.core._nth.call(null,chunk__41013_41017,i__41015_41019);
figwheel.client.file_reloading.reload_css_file.call(null,f_41020);

var G__41021 = seq__41012_41016;
var G__41022 = chunk__41013_41017;
var G__41023 = count__41014_41018;
var G__41024 = (i__41015_41019 + (1));
seq__41012_41016 = G__41021;
chunk__41013_41017 = G__41022;
count__41014_41018 = G__41023;
i__41015_41019 = G__41024;
continue;
} else {
var temp__4657__auto___41025 = cljs.core.seq.call(null,seq__41012_41016);
if(temp__4657__auto___41025){
var seq__41012_41026__$1 = temp__4657__auto___41025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41012_41026__$1)){
var c__29090__auto___41027 = cljs.core.chunk_first.call(null,seq__41012_41026__$1);
var G__41028 = cljs.core.chunk_rest.call(null,seq__41012_41026__$1);
var G__41029 = c__29090__auto___41027;
var G__41030 = cljs.core.count.call(null,c__29090__auto___41027);
var G__41031 = (0);
seq__41012_41016 = G__41028;
chunk__41013_41017 = G__41029;
count__41014_41018 = G__41030;
i__41015_41019 = G__41031;
continue;
} else {
var f_41032 = cljs.core.first.call(null,seq__41012_41026__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41032);

var G__41033 = cljs.core.next.call(null,seq__41012_41026__$1);
var G__41034 = null;
var G__41035 = (0);
var G__41036 = (0);
seq__41012_41016 = G__41033;
chunk__41013_41017 = G__41034;
count__41014_41018 = G__41035;
i__41015_41019 = G__41036;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__41010,map__41010__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__41010,map__41010__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1470645905848