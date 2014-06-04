# Hoplon • Infinite Scroll Demo

An infinitely scrollable container built using [Hoplon][2]. Keep scrolling
to see more images; when you reach the bottom it'll fetch more images and
append them so you can continue scrolling and seeing more images...forever.

## Demo

[View the demo here][3].

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

[2]: http://github.com/tailrecursion/hoplon
[3]: http://tailrecursion.github.io/hoplon-demos/infinite-scroll
[4]: https://github.com/tailrecursion/boot
[6]: https://github.com/technomancy/leiningen
[7]: http://localhost:8000
