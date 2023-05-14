# Hoplon • Infinite Scroll Demo with pagination

A potentially infinitely scrollable container built using [Hoplon][1].
Keep scrolling to see more numbers divided in pages; when you almost reach
the bottom it'll fetch more pages full of numbers and append them so you can
continue scrolling and seeing more numbers... until page 99.

The address bar will change to show in witch page you are. If you type an
already loaded page on address bar it will scroll to that page. If you
type a page that isn't loaded the browser will refresh and take you there.
If didn't start on the first page you can scroll up too.

It's not really connecting to a server, all the data is fake.

## Demo

[View the demo here][3].

## Dependencies

- java 1.8+
- npm

## Setup

Run:

    ```bash
    $ npm install
    ```

## Usage

1. Start the auto-compiler. In a terminal:

    ```bash
    $ npx shadow-cljs watch app
    ```


2. Go to [http://localhost:8000][2] in your browser.

[1]: https://hoplon.io
[2]: http://localhost:8000
[3]: http://hoplon.github.io/demos/infinite-scroll-paginated
