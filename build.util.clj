(ns build.util
  (:require
   [clojure.java.io :as io]))

(defn deps []
  (->> "deps"
    io/file
    file-seq
    (filter #(.isFile %))
    (sort-by #(.getName %))
    (map (comp read-string slurp))
    (reduce into [])))
