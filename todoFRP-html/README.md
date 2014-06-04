# TodoFRP

An implementation of [TodoMVC][1] using [Hoplon][2], this time using regular
HTML markup instead of s-expressions.

See the [demo][3].

## Dependencies

- java 1.7+
- [boot][4]
- [leiningen][6]

## Usage

1. Start the auto-compiler. In a terminal:

    ```bash
    $ boot development
    ```

2. Go to [http://localhost:8000][7] in your browser.

* HTML and JavaScript files will be created in the `resources/public` directory.
* [See the code with syntax highlighting here.][5]

[1]: http://todomvc.com
[2]: http://github.com/tailrecursion/hoplon
[3]: http://tailrecursion.github.io/hoplon-demos/todoFRP-html/
[4]: https://github.com/tailrecursion/boot
[5]: doc/index.html
[6]: https://github.com/technomancy/leiningen
[7]: http://localhost:8000
