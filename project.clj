(defproject jellydb "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[com.mchange/c3p0 "0.9.5"]
                 [clojure.jdbc/clojure.jdbc-c3p0 "0.3.2"]
                 [org.clojars.hozumi/clj-commons-exec "1.2.0"]
                 [com.taoensso/nippy "2.10.0"]
                 [postgresql "9.3-1102.jdbc41"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [org.clojure/java.jdbc "0.4.2"]
                 [clj-biosequence "0.5.1"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/tools.reader "0.10.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [cljs-http "0.1.37"]
                 [org.clojure/data.json "0.2.6"]
                 [quil "2.2.6"]
                 [me.raynes/fs "1.4.6"]
                 [cljs-ajax "0.5.1"]
                 [hiccup "1.0.5"]
                 [om "0.7.3"]
                 [compojure "1.4.0"]
                 [com.cognitect/transit-cljs "0.8.232"]
                 [ring-server "0.4.0"]
                 [ring/ring-core "1.4.0"]
                 [ring/ring-json "0.4.0"]
                 [ring/ring-defaults "0.1.5"]]
  :plugins [[cider/cider-nrepl "0.10.0-SNAPSHOT"]
            [lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.5.0-1"]]
  :source-paths ["src/clj" "src/cljs"]
  :resource-paths ["resources"]
  :clean-targets ^{:protect false} ["resources/public/js/out"
                                    "resources/public/js/app.js"]
  :figwheel {:ring-handler jellydb.handler/app}
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/clj" "src/cljs"]
                        :figwheel true
                        :compiler {:output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"
                                   :main jellydb.core
                                   :asset-path "js/out"
                                   :optimizations :none
                                   :source-map true}}]})
