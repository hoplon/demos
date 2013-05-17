(defproject
  hoplon-demo-todofrp "1.0.0-SNAPSHOT"
  :description  "TodoFRP using hoplon."
  :license      {:name "Eclipse Public License"
                 :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj"]
  :plugins      [[tailrecursion/hoplon "0.1.0-SNAPSHOT"]]
  :dependencies [[tailrecursion/hoplon "0.1.0-SNAPSHOT"]]
  :eval-in      :leiningen
  :hoplon       {:html-out    "resources/public"
                 :cljsc-opts  {:pretty-print   true
                               :optimizations  :whitespace}})
