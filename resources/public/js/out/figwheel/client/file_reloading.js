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
var or__29414__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__29414__auto__){
return or__29414__auto__;
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
var or__29414__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40141_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40141_SHARP_));
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
var seq__40146 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40147 = null;
var count__40148 = (0);
var i__40149 = (0);
while(true){
if((i__40149 < count__40148)){
var n = cljs.core._nth.call(null,chunk__40147,i__40149);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40150 = seq__40146;
var G__40151 = chunk__40147;
var G__40152 = count__40148;
var G__40153 = (i__40149 + (1));
seq__40146 = G__40150;
chunk__40147 = G__40151;
count__40148 = G__40152;
i__40149 = G__40153;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40146);
if(temp__4425__auto__){
var seq__40146__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40146__$1)){
var c__30217__auto__ = cljs.core.chunk_first.call(null,seq__40146__$1);
var G__40154 = cljs.core.chunk_rest.call(null,seq__40146__$1);
var G__40155 = c__30217__auto__;
var G__40156 = cljs.core.count.call(null,c__30217__auto__);
var G__40157 = (0);
seq__40146 = G__40154;
chunk__40147 = G__40155;
count__40148 = G__40156;
i__40149 = G__40157;
continue;
} else {
var n = cljs.core.first.call(null,seq__40146__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40158 = cljs.core.next.call(null,seq__40146__$1);
var G__40159 = null;
var G__40160 = (0);
var G__40161 = (0);
seq__40146 = G__40158;
chunk__40147 = G__40159;
count__40148 = G__40160;
i__40149 = G__40161;
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

var seq__40200_40207 = cljs.core.seq.call(null,deps);
var chunk__40201_40208 = null;
var count__40202_40209 = (0);
var i__40203_40210 = (0);
while(true){
if((i__40203_40210 < count__40202_40209)){
var dep_40211 = cljs.core._nth.call(null,chunk__40201_40208,i__40203_40210);
topo_sort_helper_STAR_.call(null,dep_40211,(depth + (1)),state);

var G__40212 = seq__40200_40207;
var G__40213 = chunk__40201_40208;
var G__40214 = count__40202_40209;
var G__40215 = (i__40203_40210 + (1));
seq__40200_40207 = G__40212;
chunk__40201_40208 = G__40213;
count__40202_40209 = G__40214;
i__40203_40210 = G__40215;
continue;
} else {
var temp__4425__auto___40216 = cljs.core.seq.call(null,seq__40200_40207);
if(temp__4425__auto___40216){
var seq__40200_40217__$1 = temp__4425__auto___40216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40200_40217__$1)){
var c__30217__auto___40218 = cljs.core.chunk_first.call(null,seq__40200_40217__$1);
var G__40219 = cljs.core.chunk_rest.call(null,seq__40200_40217__$1);
var G__40220 = c__30217__auto___40218;
var G__40221 = cljs.core.count.call(null,c__30217__auto___40218);
var G__40222 = (0);
seq__40200_40207 = G__40219;
chunk__40201_40208 = G__40220;
count__40202_40209 = G__40221;
i__40203_40210 = G__40222;
continue;
} else {
var dep_40223 = cljs.core.first.call(null,seq__40200_40217__$1);
topo_sort_helper_STAR_.call(null,dep_40223,(depth + (1)),state);

var G__40224 = cljs.core.next.call(null,seq__40200_40217__$1);
var G__40225 = null;
var G__40226 = (0);
var G__40227 = (0);
seq__40200_40207 = G__40224;
chunk__40201_40208 = G__40225;
count__40202_40209 = G__40226;
i__40203_40210 = G__40227;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40204){
var vec__40206 = p__40204;
var x = cljs.core.nth.call(null,vec__40206,(0),null);
var xs = cljs.core.nthnext.call(null,vec__40206,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40206,x,xs,get_deps__$1){
return (function (p1__40162_SHARP_){
return clojure.set.difference.call(null,p1__40162_SHARP_,x);
});})(vec__40206,x,xs,get_deps__$1))
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
var seq__40240 = cljs.core.seq.call(null,provides);
var chunk__40241 = null;
var count__40242 = (0);
var i__40243 = (0);
while(true){
if((i__40243 < count__40242)){
var prov = cljs.core._nth.call(null,chunk__40241,i__40243);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40244_40252 = cljs.core.seq.call(null,requires);
var chunk__40245_40253 = null;
var count__40246_40254 = (0);
var i__40247_40255 = (0);
while(true){
if((i__40247_40255 < count__40246_40254)){
var req_40256 = cljs.core._nth.call(null,chunk__40245_40253,i__40247_40255);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40256,prov);

var G__40257 = seq__40244_40252;
var G__40258 = chunk__40245_40253;
var G__40259 = count__40246_40254;
var G__40260 = (i__40247_40255 + (1));
seq__40244_40252 = G__40257;
chunk__40245_40253 = G__40258;
count__40246_40254 = G__40259;
i__40247_40255 = G__40260;
continue;
} else {
var temp__4425__auto___40261 = cljs.core.seq.call(null,seq__40244_40252);
if(temp__4425__auto___40261){
var seq__40244_40262__$1 = temp__4425__auto___40261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40244_40262__$1)){
var c__30217__auto___40263 = cljs.core.chunk_first.call(null,seq__40244_40262__$1);
var G__40264 = cljs.core.chunk_rest.call(null,seq__40244_40262__$1);
var G__40265 = c__30217__auto___40263;
var G__40266 = cljs.core.count.call(null,c__30217__auto___40263);
var G__40267 = (0);
seq__40244_40252 = G__40264;
chunk__40245_40253 = G__40265;
count__40246_40254 = G__40266;
i__40247_40255 = G__40267;
continue;
} else {
var req_40268 = cljs.core.first.call(null,seq__40244_40262__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40268,prov);

var G__40269 = cljs.core.next.call(null,seq__40244_40262__$1);
var G__40270 = null;
var G__40271 = (0);
var G__40272 = (0);
seq__40244_40252 = G__40269;
chunk__40245_40253 = G__40270;
count__40246_40254 = G__40271;
i__40247_40255 = G__40272;
continue;
}
} else {
}
}
break;
}

var G__40273 = seq__40240;
var G__40274 = chunk__40241;
var G__40275 = count__40242;
var G__40276 = (i__40243 + (1));
seq__40240 = G__40273;
chunk__40241 = G__40274;
count__40242 = G__40275;
i__40243 = G__40276;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40240);
if(temp__4425__auto__){
var seq__40240__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40240__$1)){
var c__30217__auto__ = cljs.core.chunk_first.call(null,seq__40240__$1);
var G__40277 = cljs.core.chunk_rest.call(null,seq__40240__$1);
var G__40278 = c__30217__auto__;
var G__40279 = cljs.core.count.call(null,c__30217__auto__);
var G__40280 = (0);
seq__40240 = G__40277;
chunk__40241 = G__40278;
count__40242 = G__40279;
i__40243 = G__40280;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40240__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40248_40281 = cljs.core.seq.call(null,requires);
var chunk__40249_40282 = null;
var count__40250_40283 = (0);
var i__40251_40284 = (0);
while(true){
if((i__40251_40284 < count__40250_40283)){
var req_40285 = cljs.core._nth.call(null,chunk__40249_40282,i__40251_40284);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40285,prov);

var G__40286 = seq__40248_40281;
var G__40287 = chunk__40249_40282;
var G__40288 = count__40250_40283;
var G__40289 = (i__40251_40284 + (1));
seq__40248_40281 = G__40286;
chunk__40249_40282 = G__40287;
count__40250_40283 = G__40288;
i__40251_40284 = G__40289;
continue;
} else {
var temp__4425__auto___40290__$1 = cljs.core.seq.call(null,seq__40248_40281);
if(temp__4425__auto___40290__$1){
var seq__40248_40291__$1 = temp__4425__auto___40290__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40248_40291__$1)){
var c__30217__auto___40292 = cljs.core.chunk_first.call(null,seq__40248_40291__$1);
var G__40293 = cljs.core.chunk_rest.call(null,seq__40248_40291__$1);
var G__40294 = c__30217__auto___40292;
var G__40295 = cljs.core.count.call(null,c__30217__auto___40292);
var G__40296 = (0);
seq__40248_40281 = G__40293;
chunk__40249_40282 = G__40294;
count__40250_40283 = G__40295;
i__40251_40284 = G__40296;
continue;
} else {
var req_40297 = cljs.core.first.call(null,seq__40248_40291__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40297,prov);

var G__40298 = cljs.core.next.call(null,seq__40248_40291__$1);
var G__40299 = null;
var G__40300 = (0);
var G__40301 = (0);
seq__40248_40281 = G__40298;
chunk__40249_40282 = G__40299;
count__40250_40283 = G__40300;
i__40251_40284 = G__40301;
continue;
}
} else {
}
}
break;
}

var G__40302 = cljs.core.next.call(null,seq__40240__$1);
var G__40303 = null;
var G__40304 = (0);
var G__40305 = (0);
seq__40240 = G__40302;
chunk__40241 = G__40303;
count__40242 = G__40304;
i__40243 = G__40305;
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
var seq__40310_40314 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40311_40315 = null;
var count__40312_40316 = (0);
var i__40313_40317 = (0);
while(true){
if((i__40313_40317 < count__40312_40316)){
var ns_40318 = cljs.core._nth.call(null,chunk__40311_40315,i__40313_40317);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40318);

var G__40319 = seq__40310_40314;
var G__40320 = chunk__40311_40315;
var G__40321 = count__40312_40316;
var G__40322 = (i__40313_40317 + (1));
seq__40310_40314 = G__40319;
chunk__40311_40315 = G__40320;
count__40312_40316 = G__40321;
i__40313_40317 = G__40322;
continue;
} else {
var temp__4425__auto___40323 = cljs.core.seq.call(null,seq__40310_40314);
if(temp__4425__auto___40323){
var seq__40310_40324__$1 = temp__4425__auto___40323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40310_40324__$1)){
var c__30217__auto___40325 = cljs.core.chunk_first.call(null,seq__40310_40324__$1);
var G__40326 = cljs.core.chunk_rest.call(null,seq__40310_40324__$1);
var G__40327 = c__30217__auto___40325;
var G__40328 = cljs.core.count.call(null,c__30217__auto___40325);
var G__40329 = (0);
seq__40310_40314 = G__40326;
chunk__40311_40315 = G__40327;
count__40312_40316 = G__40328;
i__40313_40317 = G__40329;
continue;
} else {
var ns_40330 = cljs.core.first.call(null,seq__40310_40324__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40330);

var G__40331 = cljs.core.next.call(null,seq__40310_40324__$1);
var G__40332 = null;
var G__40333 = (0);
var G__40334 = (0);
seq__40310_40314 = G__40331;
chunk__40311_40315 = G__40332;
count__40312_40316 = G__40333;
i__40313_40317 = G__40334;
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
goog.require_figwheel_backup_ = (function (){var or__29414__auto__ = goog.require__;
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
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
var G__40335__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40336__i = 0, G__40336__a = new Array(arguments.length -  0);
while (G__40336__i < G__40336__a.length) {G__40336__a[G__40336__i] = arguments[G__40336__i + 0]; ++G__40336__i;}
  args = new cljs.core.IndexedSeq(G__40336__a,0);
} 
return G__40335__delegate.call(this,args);};
G__40335.cljs$lang$maxFixedArity = 0;
G__40335.cljs$lang$applyTo = (function (arglist__40337){
var args = cljs.core.seq(arglist__40337);
return G__40335__delegate(args);
});
G__40335.cljs$core$IFn$_invoke$arity$variadic = G__40335__delegate;
return G__40335;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40339 = cljs.core._EQ_;
var expr__40340 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40339.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40340))){
var path_parts = ((function (pred__40339,expr__40340){
return (function (p1__40338_SHARP_){
return clojure.string.split.call(null,p1__40338_SHARP_,/[\/\\]/);
});})(pred__40339,expr__40340))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__40339,expr__40340){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40342){if((e40342 instanceof Error)){
var e = e40342;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40342;

}
}})());
});
;})(path_parts,sep,root,pred__40339,expr__40340))
} else {
if(cljs.core.truth_(pred__40339.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40340))){
return ((function (pred__40339,expr__40340){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__40339,expr__40340){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__40339,expr__40340))
);

return deferred.addErrback(((function (deferred,pred__40339,expr__40340){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__40339,expr__40340))
);
});
;})(pred__40339,expr__40340))
} else {
return ((function (pred__40339,expr__40340){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40339,expr__40340))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40343,callback){
var map__40346 = p__40343;
var map__40346__$1 = ((((!((map__40346 == null)))?((((map__40346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40346):map__40346);
var file_msg = map__40346__$1;
var request_url = cljs.core.get.call(null,map__40346__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__40346,map__40346__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40346,map__40346__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto__){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto__){
return (function (state_40370){
var state_val_40371 = (state_40370[(1)]);
if((state_val_40371 === (7))){
var inst_40366 = (state_40370[(2)]);
var state_40370__$1 = state_40370;
var statearr_40372_40392 = state_40370__$1;
(statearr_40372_40392[(2)] = inst_40366);

(statearr_40372_40392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (1))){
var state_40370__$1 = state_40370;
var statearr_40373_40393 = state_40370__$1;
(statearr_40373_40393[(2)] = null);

(statearr_40373_40393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (4))){
var inst_40350 = (state_40370[(7)]);
var inst_40350__$1 = (state_40370[(2)]);
var state_40370__$1 = (function (){var statearr_40374 = state_40370;
(statearr_40374[(7)] = inst_40350__$1);

return statearr_40374;
})();
if(cljs.core.truth_(inst_40350__$1)){
var statearr_40375_40394 = state_40370__$1;
(statearr_40375_40394[(1)] = (5));

} else {
var statearr_40376_40395 = state_40370__$1;
(statearr_40376_40395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (6))){
var state_40370__$1 = state_40370;
var statearr_40377_40396 = state_40370__$1;
(statearr_40377_40396[(2)] = null);

(statearr_40377_40396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (3))){
var inst_40368 = (state_40370[(2)]);
var state_40370__$1 = state_40370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40370__$1,inst_40368);
} else {
if((state_val_40371 === (2))){
var state_40370__$1 = state_40370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40370__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40371 === (11))){
var inst_40362 = (state_40370[(2)]);
var state_40370__$1 = (function (){var statearr_40378 = state_40370;
(statearr_40378[(8)] = inst_40362);

return statearr_40378;
})();
var statearr_40379_40397 = state_40370__$1;
(statearr_40379_40397[(2)] = null);

(statearr_40379_40397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (9))){
var inst_40356 = (state_40370[(9)]);
var inst_40354 = (state_40370[(10)]);
var inst_40358 = inst_40356.call(null,inst_40354);
var state_40370__$1 = state_40370;
var statearr_40380_40398 = state_40370__$1;
(statearr_40380_40398[(2)] = inst_40358);

(statearr_40380_40398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (5))){
var inst_40350 = (state_40370[(7)]);
var inst_40352 = figwheel.client.file_reloading.blocking_load.call(null,inst_40350);
var state_40370__$1 = state_40370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40370__$1,(8),inst_40352);
} else {
if((state_val_40371 === (10))){
var inst_40354 = (state_40370[(10)]);
var inst_40360 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40354);
var state_40370__$1 = state_40370;
var statearr_40381_40399 = state_40370__$1;
(statearr_40381_40399[(2)] = inst_40360);

(statearr_40381_40399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40371 === (8))){
var inst_40356 = (state_40370[(9)]);
var inst_40350 = (state_40370[(7)]);
var inst_40354 = (state_40370[(2)]);
var inst_40355 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40356__$1 = cljs.core.get.call(null,inst_40355,inst_40350);
var state_40370__$1 = (function (){var statearr_40382 = state_40370;
(statearr_40382[(9)] = inst_40356__$1);

(statearr_40382[(10)] = inst_40354);

return statearr_40382;
})();
if(cljs.core.truth_(inst_40356__$1)){
var statearr_40383_40400 = state_40370__$1;
(statearr_40383_40400[(1)] = (9));

} else {
var statearr_40384_40401 = state_40370__$1;
(statearr_40384_40401[(1)] = (10));

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
});})(c__31439__auto__))
;
return ((function (switch__31418__auto__,c__31439__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31419__auto__ = null;
var figwheel$client$file_reloading$state_machine__31419__auto____0 = (function (){
var statearr_40388 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40388[(0)] = figwheel$client$file_reloading$state_machine__31419__auto__);

(statearr_40388[(1)] = (1));

return statearr_40388;
});
var figwheel$client$file_reloading$state_machine__31419__auto____1 = (function (state_40370){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_40370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e40389){if((e40389 instanceof Object)){
var ex__31422__auto__ = e40389;
var statearr_40390_40402 = state_40370;
(statearr_40390_40402[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40403 = state_40370;
state_40370 = G__40403;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31419__auto__ = function(state_40370){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31419__auto____1.call(this,state_40370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31419__auto____0;
figwheel$client$file_reloading$state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31419__auto____1;
return figwheel$client$file_reloading$state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto__))
})();
var state__31441__auto__ = (function (){var statearr_40391 = f__31440__auto__.call(null);
(statearr_40391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto__);

return statearr_40391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto__))
);

return c__31439__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40404,callback){
var map__40407 = p__40404;
var map__40407__$1 = ((((!((map__40407 == null)))?((((map__40407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40407):map__40407);
var file_msg = map__40407__$1;
var namespace = cljs.core.get.call(null,map__40407__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40407,map__40407__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40407,map__40407__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40409){
var map__40412 = p__40409;
var map__40412__$1 = ((((!((map__40412 == null)))?((((map__40412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40412):map__40412);
var file_msg = map__40412__$1;
var namespace = cljs.core.get.call(null,map__40412__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__29402__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__29402__auto__){
var or__29414__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29414__auto__)){
return or__29414__auto__;
} else {
var or__29414__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29414__auto____$1)){
return or__29414__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__29402__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40414,callback){
var map__40417 = p__40414;
var map__40417__$1 = ((((!((map__40417 == null)))?((((map__40417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40417):map__40417);
var file_msg = map__40417__$1;
var request_url = cljs.core.get.call(null,map__40417__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40417__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31439__auto___40505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto___40505,out){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto___40505,out){
return (function (state_40487){
var state_val_40488 = (state_40487[(1)]);
if((state_val_40488 === (1))){
var inst_40465 = cljs.core.nth.call(null,files,(0),null);
var inst_40466 = cljs.core.nthnext.call(null,files,(1));
var inst_40467 = files;
var state_40487__$1 = (function (){var statearr_40489 = state_40487;
(statearr_40489[(7)] = inst_40467);

(statearr_40489[(8)] = inst_40465);

(statearr_40489[(9)] = inst_40466);

return statearr_40489;
})();
var statearr_40490_40506 = state_40487__$1;
(statearr_40490_40506[(2)] = null);

(statearr_40490_40506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (2))){
var inst_40467 = (state_40487[(7)]);
var inst_40470 = (state_40487[(10)]);
var inst_40470__$1 = cljs.core.nth.call(null,inst_40467,(0),null);
var inst_40471 = cljs.core.nthnext.call(null,inst_40467,(1));
var inst_40472 = (inst_40470__$1 == null);
var inst_40473 = cljs.core.not.call(null,inst_40472);
var state_40487__$1 = (function (){var statearr_40491 = state_40487;
(statearr_40491[(11)] = inst_40471);

(statearr_40491[(10)] = inst_40470__$1);

return statearr_40491;
})();
if(inst_40473){
var statearr_40492_40507 = state_40487__$1;
(statearr_40492_40507[(1)] = (4));

} else {
var statearr_40493_40508 = state_40487__$1;
(statearr_40493_40508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (3))){
var inst_40485 = (state_40487[(2)]);
var state_40487__$1 = state_40487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40487__$1,inst_40485);
} else {
if((state_val_40488 === (4))){
var inst_40470 = (state_40487[(10)]);
var inst_40475 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40470);
var state_40487__$1 = state_40487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40487__$1,(7),inst_40475);
} else {
if((state_val_40488 === (5))){
var inst_40481 = cljs.core.async.close_BANG_.call(null,out);
var state_40487__$1 = state_40487;
var statearr_40494_40509 = state_40487__$1;
(statearr_40494_40509[(2)] = inst_40481);

(statearr_40494_40509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (6))){
var inst_40483 = (state_40487[(2)]);
var state_40487__$1 = state_40487;
var statearr_40495_40510 = state_40487__$1;
(statearr_40495_40510[(2)] = inst_40483);

(statearr_40495_40510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40488 === (7))){
var inst_40471 = (state_40487[(11)]);
var inst_40477 = (state_40487[(2)]);
var inst_40478 = cljs.core.async.put_BANG_.call(null,out,inst_40477);
var inst_40467 = inst_40471;
var state_40487__$1 = (function (){var statearr_40496 = state_40487;
(statearr_40496[(7)] = inst_40467);

(statearr_40496[(12)] = inst_40478);

return statearr_40496;
})();
var statearr_40497_40511 = state_40487__$1;
(statearr_40497_40511[(2)] = null);

(statearr_40497_40511[(1)] = (2));


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
});})(c__31439__auto___40505,out))
;
return ((function (switch__31418__auto__,c__31439__auto___40505,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto____0 = (function (){
var statearr_40501 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40501[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto__);

(statearr_40501[(1)] = (1));

return statearr_40501;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto____1 = (function (state_40487){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_40487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e40502){if((e40502 instanceof Object)){
var ex__31422__auto__ = e40502;
var statearr_40503_40512 = state_40487;
(statearr_40503_40512[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40513 = state_40487;
state_40487 = G__40513;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto__ = function(state_40487){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto____1.call(this,state_40487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto___40505,out))
})();
var state__31441__auto__ = (function (){var statearr_40504 = f__31440__auto__.call(null);
(statearr_40504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto___40505);

return statearr_40504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto___40505,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40514,opts){
var map__40518 = p__40514;
var map__40518__$1 = ((((!((map__40518 == null)))?((((map__40518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40518):map__40518);
var eval_body__$1 = cljs.core.get.call(null,map__40518__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40518__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__29402__auto__ = eval_body__$1;
if(cljs.core.truth_(and__29402__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__29402__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40520){var e = e40520;
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
return (function (p1__40521_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40521_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__40526){
var vec__40527 = p__40526;
var k = cljs.core.nth.call(null,vec__40527,(0),null);
var v = cljs.core.nth.call(null,vec__40527,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40528){
var vec__40529 = p__40528;
var k = cljs.core.nth.call(null,vec__40529,(0),null);
var v = cljs.core.nth.call(null,vec__40529,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40533,p__40534){
var map__40781 = p__40533;
var map__40781__$1 = ((((!((map__40781 == null)))?((((map__40781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40781):map__40781);
var opts = map__40781__$1;
var before_jsload = cljs.core.get.call(null,map__40781__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40781__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40781__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40782 = p__40534;
var map__40782__$1 = ((((!((map__40782 == null)))?((((map__40782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40782):map__40782);
var msg = map__40782__$1;
var files = cljs.core.get.call(null,map__40782__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40782__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40782__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31439__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31440__auto__ = (function (){var switch__31418__auto__ = ((function (c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40935){
var state_val_40936 = (state_40935[(1)]);
if((state_val_40936 === (7))){
var inst_40799 = (state_40935[(7)]);
var inst_40797 = (state_40935[(8)]);
var inst_40796 = (state_40935[(9)]);
var inst_40798 = (state_40935[(10)]);
var inst_40804 = cljs.core._nth.call(null,inst_40797,inst_40799);
var inst_40805 = figwheel.client.file_reloading.eval_body.call(null,inst_40804,opts);
var inst_40806 = (inst_40799 + (1));
var tmp40937 = inst_40797;
var tmp40938 = inst_40796;
var tmp40939 = inst_40798;
var inst_40796__$1 = tmp40938;
var inst_40797__$1 = tmp40937;
var inst_40798__$1 = tmp40939;
var inst_40799__$1 = inst_40806;
var state_40935__$1 = (function (){var statearr_40940 = state_40935;
(statearr_40940[(7)] = inst_40799__$1);

(statearr_40940[(8)] = inst_40797__$1);

(statearr_40940[(11)] = inst_40805);

(statearr_40940[(9)] = inst_40796__$1);

(statearr_40940[(10)] = inst_40798__$1);

return statearr_40940;
})();
var statearr_40941_41027 = state_40935__$1;
(statearr_40941_41027[(2)] = null);

(statearr_40941_41027[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (20))){
var inst_40839 = (state_40935[(12)]);
var inst_40847 = figwheel.client.file_reloading.sort_files.call(null,inst_40839);
var state_40935__$1 = state_40935;
var statearr_40942_41028 = state_40935__$1;
(statearr_40942_41028[(2)] = inst_40847);

(statearr_40942_41028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (27))){
var state_40935__$1 = state_40935;
var statearr_40943_41029 = state_40935__$1;
(statearr_40943_41029[(2)] = null);

(statearr_40943_41029[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (1))){
var inst_40788 = (state_40935[(13)]);
var inst_40785 = before_jsload.call(null,files);
var inst_40786 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40787 = (function (){return ((function (inst_40788,inst_40785,inst_40786,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40530_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40530_SHARP_);
});
;})(inst_40788,inst_40785,inst_40786,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40788__$1 = cljs.core.filter.call(null,inst_40787,files);
var inst_40789 = cljs.core.not_empty.call(null,inst_40788__$1);
var state_40935__$1 = (function (){var statearr_40944 = state_40935;
(statearr_40944[(13)] = inst_40788__$1);

(statearr_40944[(14)] = inst_40786);

(statearr_40944[(15)] = inst_40785);

return statearr_40944;
})();
if(cljs.core.truth_(inst_40789)){
var statearr_40945_41030 = state_40935__$1;
(statearr_40945_41030[(1)] = (2));

} else {
var statearr_40946_41031 = state_40935__$1;
(statearr_40946_41031[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (24))){
var state_40935__$1 = state_40935;
var statearr_40947_41032 = state_40935__$1;
(statearr_40947_41032[(2)] = null);

(statearr_40947_41032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (39))){
var inst_40889 = (state_40935[(16)]);
var state_40935__$1 = state_40935;
var statearr_40948_41033 = state_40935__$1;
(statearr_40948_41033[(2)] = inst_40889);

(statearr_40948_41033[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (46))){
var inst_40930 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
var statearr_40949_41034 = state_40935__$1;
(statearr_40949_41034[(2)] = inst_40930);

(statearr_40949_41034[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (4))){
var inst_40833 = (state_40935[(2)]);
var inst_40834 = cljs.core.List.EMPTY;
var inst_40835 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40834);
var inst_40836 = (function (){return ((function (inst_40833,inst_40834,inst_40835,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40531_SHARP_){
var and__29402__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40531_SHARP_);
if(cljs.core.truth_(and__29402__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40531_SHARP_));
} else {
return and__29402__auto__;
}
});
;})(inst_40833,inst_40834,inst_40835,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40837 = cljs.core.filter.call(null,inst_40836,files);
var inst_40838 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40839 = cljs.core.concat.call(null,inst_40837,inst_40838);
var state_40935__$1 = (function (){var statearr_40950 = state_40935;
(statearr_40950[(17)] = inst_40833);

(statearr_40950[(18)] = inst_40835);

(statearr_40950[(12)] = inst_40839);

return statearr_40950;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40951_41035 = state_40935__$1;
(statearr_40951_41035[(1)] = (16));

} else {
var statearr_40952_41036 = state_40935__$1;
(statearr_40952_41036[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (15))){
var inst_40823 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
var statearr_40953_41037 = state_40935__$1;
(statearr_40953_41037[(2)] = inst_40823);

(statearr_40953_41037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (21))){
var inst_40849 = (state_40935[(19)]);
var inst_40849__$1 = (state_40935[(2)]);
var inst_40850 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40849__$1);
var state_40935__$1 = (function (){var statearr_40954 = state_40935;
(statearr_40954[(19)] = inst_40849__$1);

return statearr_40954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40935__$1,(22),inst_40850);
} else {
if((state_val_40936 === (31))){
var inst_40933 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40935__$1,inst_40933);
} else {
if((state_val_40936 === (32))){
var inst_40889 = (state_40935[(16)]);
var inst_40894 = inst_40889.cljs$lang$protocol_mask$partition0$;
var inst_40895 = (inst_40894 & (64));
var inst_40896 = inst_40889.cljs$core$ISeq$;
var inst_40897 = (inst_40895) || (inst_40896);
var state_40935__$1 = state_40935;
if(cljs.core.truth_(inst_40897)){
var statearr_40955_41038 = state_40935__$1;
(statearr_40955_41038[(1)] = (35));

} else {
var statearr_40956_41039 = state_40935__$1;
(statearr_40956_41039[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (40))){
var inst_40910 = (state_40935[(20)]);
var inst_40909 = (state_40935[(2)]);
var inst_40910__$1 = cljs.core.get.call(null,inst_40909,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40911 = cljs.core.get.call(null,inst_40909,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40912 = cljs.core.not_empty.call(null,inst_40910__$1);
var state_40935__$1 = (function (){var statearr_40957 = state_40935;
(statearr_40957[(20)] = inst_40910__$1);

(statearr_40957[(21)] = inst_40911);

return statearr_40957;
})();
if(cljs.core.truth_(inst_40912)){
var statearr_40958_41040 = state_40935__$1;
(statearr_40958_41040[(1)] = (41));

} else {
var statearr_40959_41041 = state_40935__$1;
(statearr_40959_41041[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (33))){
var state_40935__$1 = state_40935;
var statearr_40960_41042 = state_40935__$1;
(statearr_40960_41042[(2)] = false);

(statearr_40960_41042[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (13))){
var inst_40809 = (state_40935[(22)]);
var inst_40813 = cljs.core.chunk_first.call(null,inst_40809);
var inst_40814 = cljs.core.chunk_rest.call(null,inst_40809);
var inst_40815 = cljs.core.count.call(null,inst_40813);
var inst_40796 = inst_40814;
var inst_40797 = inst_40813;
var inst_40798 = inst_40815;
var inst_40799 = (0);
var state_40935__$1 = (function (){var statearr_40961 = state_40935;
(statearr_40961[(7)] = inst_40799);

(statearr_40961[(8)] = inst_40797);

(statearr_40961[(9)] = inst_40796);

(statearr_40961[(10)] = inst_40798);

return statearr_40961;
})();
var statearr_40962_41043 = state_40935__$1;
(statearr_40962_41043[(2)] = null);

(statearr_40962_41043[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (22))){
var inst_40852 = (state_40935[(23)]);
var inst_40849 = (state_40935[(19)]);
var inst_40857 = (state_40935[(24)]);
var inst_40853 = (state_40935[(25)]);
var inst_40852__$1 = (state_40935[(2)]);
var inst_40853__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40852__$1);
var inst_40854 = (function (){var all_files = inst_40849;
var res_SINGLEQUOTE_ = inst_40852__$1;
var res = inst_40853__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40852,inst_40849,inst_40857,inst_40853,inst_40852__$1,inst_40853__$1,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40532_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40532_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40852,inst_40849,inst_40857,inst_40853,inst_40852__$1,inst_40853__$1,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40855 = cljs.core.filter.call(null,inst_40854,inst_40852__$1);
var inst_40856 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40857__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40856);
var inst_40858 = cljs.core.not_empty.call(null,inst_40857__$1);
var state_40935__$1 = (function (){var statearr_40963 = state_40935;
(statearr_40963[(23)] = inst_40852__$1);

(statearr_40963[(24)] = inst_40857__$1);

(statearr_40963[(26)] = inst_40855);

(statearr_40963[(25)] = inst_40853__$1);

return statearr_40963;
})();
if(cljs.core.truth_(inst_40858)){
var statearr_40964_41044 = state_40935__$1;
(statearr_40964_41044[(1)] = (23));

} else {
var statearr_40965_41045 = state_40935__$1;
(statearr_40965_41045[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (36))){
var state_40935__$1 = state_40935;
var statearr_40966_41046 = state_40935__$1;
(statearr_40966_41046[(2)] = false);

(statearr_40966_41046[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (41))){
var inst_40910 = (state_40935[(20)]);
var inst_40914 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40915 = cljs.core.map.call(null,inst_40914,inst_40910);
var inst_40916 = cljs.core.pr_str.call(null,inst_40915);
var inst_40917 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40916)].join('');
var inst_40918 = figwheel.client.utils.log.call(null,inst_40917);
var state_40935__$1 = state_40935;
var statearr_40967_41047 = state_40935__$1;
(statearr_40967_41047[(2)] = inst_40918);

(statearr_40967_41047[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (43))){
var inst_40911 = (state_40935[(21)]);
var inst_40921 = (state_40935[(2)]);
var inst_40922 = cljs.core.not_empty.call(null,inst_40911);
var state_40935__$1 = (function (){var statearr_40968 = state_40935;
(statearr_40968[(27)] = inst_40921);

return statearr_40968;
})();
if(cljs.core.truth_(inst_40922)){
var statearr_40969_41048 = state_40935__$1;
(statearr_40969_41048[(1)] = (44));

} else {
var statearr_40970_41049 = state_40935__$1;
(statearr_40970_41049[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (29))){
var inst_40852 = (state_40935[(23)]);
var inst_40849 = (state_40935[(19)]);
var inst_40857 = (state_40935[(24)]);
var inst_40855 = (state_40935[(26)]);
var inst_40889 = (state_40935[(16)]);
var inst_40853 = (state_40935[(25)]);
var inst_40885 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40888 = (function (){var all_files = inst_40849;
var res_SINGLEQUOTE_ = inst_40852;
var res = inst_40853;
var files_not_loaded = inst_40855;
var dependencies_that_loaded = inst_40857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40849,inst_40857,inst_40855,inst_40889,inst_40853,inst_40885,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40887){
var map__40971 = p__40887;
var map__40971__$1 = ((((!((map__40971 == null)))?((((map__40971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40971):map__40971);
var namespace = cljs.core.get.call(null,map__40971__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40849,inst_40857,inst_40855,inst_40889,inst_40853,inst_40885,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40889__$1 = cljs.core.group_by.call(null,inst_40888,inst_40855);
var inst_40891 = (inst_40889__$1 == null);
var inst_40892 = cljs.core.not.call(null,inst_40891);
var state_40935__$1 = (function (){var statearr_40973 = state_40935;
(statearr_40973[(28)] = inst_40885);

(statearr_40973[(16)] = inst_40889__$1);

return statearr_40973;
})();
if(inst_40892){
var statearr_40974_41050 = state_40935__$1;
(statearr_40974_41050[(1)] = (32));

} else {
var statearr_40975_41051 = state_40935__$1;
(statearr_40975_41051[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (44))){
var inst_40911 = (state_40935[(21)]);
var inst_40924 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40911);
var inst_40925 = cljs.core.pr_str.call(null,inst_40924);
var inst_40926 = [cljs.core.str("not required: "),cljs.core.str(inst_40925)].join('');
var inst_40927 = figwheel.client.utils.log.call(null,inst_40926);
var state_40935__$1 = state_40935;
var statearr_40976_41052 = state_40935__$1;
(statearr_40976_41052[(2)] = inst_40927);

(statearr_40976_41052[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (6))){
var inst_40830 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
var statearr_40977_41053 = state_40935__$1;
(statearr_40977_41053[(2)] = inst_40830);

(statearr_40977_41053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (28))){
var inst_40855 = (state_40935[(26)]);
var inst_40882 = (state_40935[(2)]);
var inst_40883 = cljs.core.not_empty.call(null,inst_40855);
var state_40935__$1 = (function (){var statearr_40978 = state_40935;
(statearr_40978[(29)] = inst_40882);

return statearr_40978;
})();
if(cljs.core.truth_(inst_40883)){
var statearr_40979_41054 = state_40935__$1;
(statearr_40979_41054[(1)] = (29));

} else {
var statearr_40980_41055 = state_40935__$1;
(statearr_40980_41055[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (25))){
var inst_40853 = (state_40935[(25)]);
var inst_40869 = (state_40935[(2)]);
var inst_40870 = cljs.core.not_empty.call(null,inst_40853);
var state_40935__$1 = (function (){var statearr_40981 = state_40935;
(statearr_40981[(30)] = inst_40869);

return statearr_40981;
})();
if(cljs.core.truth_(inst_40870)){
var statearr_40982_41056 = state_40935__$1;
(statearr_40982_41056[(1)] = (26));

} else {
var statearr_40983_41057 = state_40935__$1;
(statearr_40983_41057[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (34))){
var inst_40904 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
if(cljs.core.truth_(inst_40904)){
var statearr_40984_41058 = state_40935__$1;
(statearr_40984_41058[(1)] = (38));

} else {
var statearr_40985_41059 = state_40935__$1;
(statearr_40985_41059[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (17))){
var state_40935__$1 = state_40935;
var statearr_40986_41060 = state_40935__$1;
(statearr_40986_41060[(2)] = recompile_dependents);

(statearr_40986_41060[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (3))){
var state_40935__$1 = state_40935;
var statearr_40987_41061 = state_40935__$1;
(statearr_40987_41061[(2)] = null);

(statearr_40987_41061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (12))){
var inst_40826 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
var statearr_40988_41062 = state_40935__$1;
(statearr_40988_41062[(2)] = inst_40826);

(statearr_40988_41062[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (2))){
var inst_40788 = (state_40935[(13)]);
var inst_40795 = cljs.core.seq.call(null,inst_40788);
var inst_40796 = inst_40795;
var inst_40797 = null;
var inst_40798 = (0);
var inst_40799 = (0);
var state_40935__$1 = (function (){var statearr_40989 = state_40935;
(statearr_40989[(7)] = inst_40799);

(statearr_40989[(8)] = inst_40797);

(statearr_40989[(9)] = inst_40796);

(statearr_40989[(10)] = inst_40798);

return statearr_40989;
})();
var statearr_40990_41063 = state_40935__$1;
(statearr_40990_41063[(2)] = null);

(statearr_40990_41063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (23))){
var inst_40852 = (state_40935[(23)]);
var inst_40849 = (state_40935[(19)]);
var inst_40857 = (state_40935[(24)]);
var inst_40855 = (state_40935[(26)]);
var inst_40853 = (state_40935[(25)]);
var inst_40860 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40862 = (function (){var all_files = inst_40849;
var res_SINGLEQUOTE_ = inst_40852;
var res = inst_40853;
var files_not_loaded = inst_40855;
var dependencies_that_loaded = inst_40857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40849,inst_40857,inst_40855,inst_40853,inst_40860,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40861){
var map__40991 = p__40861;
var map__40991__$1 = ((((!((map__40991 == null)))?((((map__40991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40991):map__40991);
var request_url = cljs.core.get.call(null,map__40991__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40849,inst_40857,inst_40855,inst_40853,inst_40860,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40863 = cljs.core.reverse.call(null,inst_40857);
var inst_40864 = cljs.core.map.call(null,inst_40862,inst_40863);
var inst_40865 = cljs.core.pr_str.call(null,inst_40864);
var inst_40866 = figwheel.client.utils.log.call(null,inst_40865);
var state_40935__$1 = (function (){var statearr_40993 = state_40935;
(statearr_40993[(31)] = inst_40860);

return statearr_40993;
})();
var statearr_40994_41064 = state_40935__$1;
(statearr_40994_41064[(2)] = inst_40866);

(statearr_40994_41064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (35))){
var state_40935__$1 = state_40935;
var statearr_40995_41065 = state_40935__$1;
(statearr_40995_41065[(2)] = true);

(statearr_40995_41065[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (19))){
var inst_40839 = (state_40935[(12)]);
var inst_40845 = figwheel.client.file_reloading.expand_files.call(null,inst_40839);
var state_40935__$1 = state_40935;
var statearr_40996_41066 = state_40935__$1;
(statearr_40996_41066[(2)] = inst_40845);

(statearr_40996_41066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (11))){
var state_40935__$1 = state_40935;
var statearr_40997_41067 = state_40935__$1;
(statearr_40997_41067[(2)] = null);

(statearr_40997_41067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (9))){
var inst_40828 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
var statearr_40998_41068 = state_40935__$1;
(statearr_40998_41068[(2)] = inst_40828);

(statearr_40998_41068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (5))){
var inst_40799 = (state_40935[(7)]);
var inst_40798 = (state_40935[(10)]);
var inst_40801 = (inst_40799 < inst_40798);
var inst_40802 = inst_40801;
var state_40935__$1 = state_40935;
if(cljs.core.truth_(inst_40802)){
var statearr_40999_41069 = state_40935__$1;
(statearr_40999_41069[(1)] = (7));

} else {
var statearr_41000_41070 = state_40935__$1;
(statearr_41000_41070[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (14))){
var inst_40809 = (state_40935[(22)]);
var inst_40818 = cljs.core.first.call(null,inst_40809);
var inst_40819 = figwheel.client.file_reloading.eval_body.call(null,inst_40818,opts);
var inst_40820 = cljs.core.next.call(null,inst_40809);
var inst_40796 = inst_40820;
var inst_40797 = null;
var inst_40798 = (0);
var inst_40799 = (0);
var state_40935__$1 = (function (){var statearr_41001 = state_40935;
(statearr_41001[(7)] = inst_40799);

(statearr_41001[(32)] = inst_40819);

(statearr_41001[(8)] = inst_40797);

(statearr_41001[(9)] = inst_40796);

(statearr_41001[(10)] = inst_40798);

return statearr_41001;
})();
var statearr_41002_41071 = state_40935__$1;
(statearr_41002_41071[(2)] = null);

(statearr_41002_41071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (45))){
var state_40935__$1 = state_40935;
var statearr_41003_41072 = state_40935__$1;
(statearr_41003_41072[(2)] = null);

(statearr_41003_41072[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (26))){
var inst_40852 = (state_40935[(23)]);
var inst_40849 = (state_40935[(19)]);
var inst_40857 = (state_40935[(24)]);
var inst_40855 = (state_40935[(26)]);
var inst_40853 = (state_40935[(25)]);
var inst_40872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40874 = (function (){var all_files = inst_40849;
var res_SINGLEQUOTE_ = inst_40852;
var res = inst_40853;
var files_not_loaded = inst_40855;
var dependencies_that_loaded = inst_40857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40849,inst_40857,inst_40855,inst_40853,inst_40872,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40873){
var map__41004 = p__40873;
var map__41004__$1 = ((((!((map__41004 == null)))?((((map__41004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41004):map__41004);
var namespace = cljs.core.get.call(null,map__41004__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40849,inst_40857,inst_40855,inst_40853,inst_40872,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40875 = cljs.core.map.call(null,inst_40874,inst_40853);
var inst_40876 = cljs.core.pr_str.call(null,inst_40875);
var inst_40877 = figwheel.client.utils.log.call(null,inst_40876);
var inst_40878 = (function (){var all_files = inst_40849;
var res_SINGLEQUOTE_ = inst_40852;
var res = inst_40853;
var files_not_loaded = inst_40855;
var dependencies_that_loaded = inst_40857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40849,inst_40857,inst_40855,inst_40853,inst_40872,inst_40874,inst_40875,inst_40876,inst_40877,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40849,inst_40857,inst_40855,inst_40853,inst_40872,inst_40874,inst_40875,inst_40876,inst_40877,state_val_40936,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40879 = setTimeout(inst_40878,(10));
var state_40935__$1 = (function (){var statearr_41006 = state_40935;
(statearr_41006[(33)] = inst_40872);

(statearr_41006[(34)] = inst_40877);

return statearr_41006;
})();
var statearr_41007_41073 = state_40935__$1;
(statearr_41007_41073[(2)] = inst_40879);

(statearr_41007_41073[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (16))){
var state_40935__$1 = state_40935;
var statearr_41008_41074 = state_40935__$1;
(statearr_41008_41074[(2)] = reload_dependents);

(statearr_41008_41074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (38))){
var inst_40889 = (state_40935[(16)]);
var inst_40906 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40889);
var state_40935__$1 = state_40935;
var statearr_41009_41075 = state_40935__$1;
(statearr_41009_41075[(2)] = inst_40906);

(statearr_41009_41075[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (30))){
var state_40935__$1 = state_40935;
var statearr_41010_41076 = state_40935__$1;
(statearr_41010_41076[(2)] = null);

(statearr_41010_41076[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (10))){
var inst_40809 = (state_40935[(22)]);
var inst_40811 = cljs.core.chunked_seq_QMARK_.call(null,inst_40809);
var state_40935__$1 = state_40935;
if(inst_40811){
var statearr_41011_41077 = state_40935__$1;
(statearr_41011_41077[(1)] = (13));

} else {
var statearr_41012_41078 = state_40935__$1;
(statearr_41012_41078[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (18))){
var inst_40843 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
if(cljs.core.truth_(inst_40843)){
var statearr_41013_41079 = state_40935__$1;
(statearr_41013_41079[(1)] = (19));

} else {
var statearr_41014_41080 = state_40935__$1;
(statearr_41014_41080[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (42))){
var state_40935__$1 = state_40935;
var statearr_41015_41081 = state_40935__$1;
(statearr_41015_41081[(2)] = null);

(statearr_41015_41081[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (37))){
var inst_40901 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
var statearr_41016_41082 = state_40935__$1;
(statearr_41016_41082[(2)] = inst_40901);

(statearr_41016_41082[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (8))){
var inst_40809 = (state_40935[(22)]);
var inst_40796 = (state_40935[(9)]);
var inst_40809__$1 = cljs.core.seq.call(null,inst_40796);
var state_40935__$1 = (function (){var statearr_41017 = state_40935;
(statearr_41017[(22)] = inst_40809__$1);

return statearr_41017;
})();
if(inst_40809__$1){
var statearr_41018_41083 = state_40935__$1;
(statearr_41018_41083[(1)] = (10));

} else {
var statearr_41019_41084 = state_40935__$1;
(statearr_41019_41084[(1)] = (11));

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
});})(c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31418__auto__,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto____0 = (function (){
var statearr_41023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41023[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto__);

(statearr_41023[(1)] = (1));

return statearr_41023;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto____1 = (function (state_40935){
while(true){
var ret_value__31420__auto__ = (function (){try{while(true){
var result__31421__auto__ = switch__31418__auto__.call(null,state_40935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31421__auto__;
}
break;
}
}catch (e41024){if((e41024 instanceof Object)){
var ex__31422__auto__ = e41024;
var statearr_41025_41085 = state_40935;
(statearr_41025_41085[(5)] = ex__31422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41086 = state_40935;
state_40935 = G__41086;
continue;
} else {
return ret_value__31420__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto__ = function(state_40935){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto____1.call(this,state_40935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31419__auto__;
})()
;})(switch__31418__auto__,c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31441__auto__ = (function (){var statearr_41026 = f__31440__auto__.call(null);
(statearr_41026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31439__auto__);

return statearr_41026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31441__auto__);
});})(c__31439__auto__,map__40781,map__40781__$1,opts,before_jsload,on_jsload,reload_dependents,map__40782,map__40782__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31439__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41089,link){
var map__41092 = p__41089;
var map__41092__$1 = ((((!((map__41092 == null)))?((((map__41092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41092):map__41092);
var file = cljs.core.get.call(null,map__41092__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__41092,map__41092__$1,file){
return (function (p1__41087_SHARP_,p2__41088_SHARP_){
if(cljs.core._EQ_.call(null,p1__41087_SHARP_,p2__41088_SHARP_)){
return p1__41087_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__41092,map__41092__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41098){
var map__41099 = p__41098;
var map__41099__$1 = ((((!((map__41099 == null)))?((((map__41099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41099):map__41099);
var match_length = cljs.core.get.call(null,map__41099__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41099__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41094_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41094_SHARP_);
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
var args41101 = [];
var len__30472__auto___41104 = arguments.length;
var i__30473__auto___41105 = (0);
while(true){
if((i__30473__auto___41105 < len__30472__auto___41104)){
args41101.push((arguments[i__30473__auto___41105]));

var G__41106 = (i__30473__auto___41105 + (1));
i__30473__auto___41105 = G__41106;
continue;
} else {
}
break;
}

var G__41103 = args41101.length;
switch (G__41103) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41101.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41108_SHARP_,p2__41109_SHARP_){
return cljs.core.assoc.call(null,p1__41108_SHARP_,cljs.core.get.call(null,p2__41109_SHARP_,key),p2__41109_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__41110){
var map__41113 = p__41110;
var map__41113__$1 = ((((!((map__41113 == null)))?((((map__41113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41113):map__41113);
var f_data = map__41113__$1;
var file = cljs.core.get.call(null,map__41113__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41115,files_msg){
var map__41122 = p__41115;
var map__41122__$1 = ((((!((map__41122 == null)))?((((map__41122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41122):map__41122);
var opts = map__41122__$1;
var on_cssload = cljs.core.get.call(null,map__41122__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__41124_41128 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__41125_41129 = null;
var count__41126_41130 = (0);
var i__41127_41131 = (0);
while(true){
if((i__41127_41131 < count__41126_41130)){
var f_41132 = cljs.core._nth.call(null,chunk__41125_41129,i__41127_41131);
figwheel.client.file_reloading.reload_css_file.call(null,f_41132);

var G__41133 = seq__41124_41128;
var G__41134 = chunk__41125_41129;
var G__41135 = count__41126_41130;
var G__41136 = (i__41127_41131 + (1));
seq__41124_41128 = G__41133;
chunk__41125_41129 = G__41134;
count__41126_41130 = G__41135;
i__41127_41131 = G__41136;
continue;
} else {
var temp__4425__auto___41137 = cljs.core.seq.call(null,seq__41124_41128);
if(temp__4425__auto___41137){
var seq__41124_41138__$1 = temp__4425__auto___41137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41124_41138__$1)){
var c__30217__auto___41139 = cljs.core.chunk_first.call(null,seq__41124_41138__$1);
var G__41140 = cljs.core.chunk_rest.call(null,seq__41124_41138__$1);
var G__41141 = c__30217__auto___41139;
var G__41142 = cljs.core.count.call(null,c__30217__auto___41139);
var G__41143 = (0);
seq__41124_41128 = G__41140;
chunk__41125_41129 = G__41141;
count__41126_41130 = G__41142;
i__41127_41131 = G__41143;
continue;
} else {
var f_41144 = cljs.core.first.call(null,seq__41124_41138__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41144);

var G__41145 = cljs.core.next.call(null,seq__41124_41138__$1);
var G__41146 = null;
var G__41147 = (0);
var G__41148 = (0);
seq__41124_41128 = G__41145;
chunk__41125_41129 = G__41146;
count__41126_41130 = G__41147;
i__41127_41131 = G__41148;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__41122,map__41122__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__41122,map__41122__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map