(ns macros.core
  (:require
   [clojure.java.io :as io]))

(defmacro demo-dirs []
  (->> (. (io/file "../") listFiles)
    (filter #(and (.isDirectory %)
               (not (. (.getName %) (startsWith ".")))
               (not (.exists (io/file % ".no-demo")))))
    (map #(.getName %))
    sort
    vec))
