# Hoplon Uberwar Example

An example project that uses Hoplon and Castra, with tasks to help you package
it up as an uberwar file or work locally during development.

## Usage

Build uberwar for production:

```
$ boot uberwar
```

Build for development with local Jetty server:

```
$ boot development
```

Then open [http://localhost:8000](http://localhost:8000) in your browser. Your
backend RPC namespaces will be reloaded automatically whenever they are modified.
Live reload can be enabled in the client, as well, by uncommenting a line in the
`index.cljs.hl` file. Have fun!

## License

Copyright © 2013 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
