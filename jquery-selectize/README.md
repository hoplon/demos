# jquery-selectize

This project demonstrates the creation and use of a custom `selectize`
element backed by the
[selectize.js](http://brianreavis.github.io/selectize.js/) jQuery
plugin, from the [Hoplon contrib library][4].

The `selectize` element is used to search for movies by title on
[Rotten Tomatoes](http://www.rottentomatoes.com/) with their
[Movies Search API](http://developer.rottentomatoes.com/docs/read/json/v10/Movies_Search).

[See this demo.](http://tailrecursion.github.io/hoplon-demos/jquery-selectize/)

## Dependencies

- java 1.7+
- [boot][1]
- [leiningen][2]

## Usage

1. Start the auto-compiler. In a terminal:

    ```bash
    $ boot development
    ```

2. Go to [http://localhost:8000][3] in your browser.

[1]: https://github.com/tailrecursion/boot
[2]: https://github.com/technomancy/leiningen
[3]: http://localhost:8000
[4]: http://github.com/tailrecursion/hoplon/tree/master/contrib/jquery.selectize
