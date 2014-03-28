# hoplife

This project demonstrates [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life) in Hoplon.

Christophe Grand's [extremely elegant and terse method](http://clj-me.cgrand.net/2011/08/19/conways-game-of-life/) is used to implement the game rules.

[See this demo.](http://alandipert.github.io/hoplon-demos/hoplife/)

## Dependencies

- java 1.7+
- [boot][1]
- [leiningen][2]

## Usage

You'll probably want to have two terminals open in your project's
directory.

1. Start the auto-compiler.

```bash
$ boot dev
```

2. Connect to the local dev server on [http://localhost:8000]

[1]: https://github.com/tailrecursion/boot
[2]: https://github.com/technomancy/leiningen
