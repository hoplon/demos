# ws-simple

A [Hoplon][2] demo that shows a contacts websocket example. It shares a contacts list with any
number of clients. Changes made by one client are immediately broadcast by the server to all
other clients.

See [Hoplon with Sente][5]

## Dependencies

- java 1.7+
- [boot][1]
- [sente][4]

## Usage

1. Start the auto-compiler. In a terminal:

    ```bash
    $ boot dev
    ```

2. Go to [http://localhost:8000][3] in your browser.

[1]: https://boot-clj.com
[2]: https://hoplon.io
[3]: http://localhost:8000
[4]: https://github.com/ptaoussanis/sente
[5]: https://github.com/hoplon/hoplon/wiki/Hoplon-with-Sente
