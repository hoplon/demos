# TodoFRP

An implementation of [TodoMVC](http://todomvc.com) using
[hoplon](http://github.com/tailrecursion/hoplon/).

## Demo

[View the demo here](http://micha.github.com/todofrp/).

## Doit

Install [Leiningen2](https://github.com/technomancy/leiningen)

Install dependencies:

    lein deps

You can start watcher-based ClojureScript compilation:

    lein hoplon auto

HTML and JavaScript files will be created in the `resources/public` directory.