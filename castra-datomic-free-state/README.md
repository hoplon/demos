# castra-datomic-free-state

A [Hoplon][2] demo that shows a castra example with [Datomic][4]. 

It shows a form with random data from an in-memory Datomic DB.

You can update the data and have it stored in the DB (temporarily at least!).

The email address is updated server-side to confirm that state is brought back from the server.

## Dependencies

- java 1.7+
- [boot][1]

## Usage

1. Start the auto-compiler. In a terminal:

    ```bash
    $ boot dev
    ```

2. Go to [http://localhost:8000][3] in your browser.

[1]: https://boot-clj.com
[2]: https://hoplon.io
[3]: http://localhost:8000
[4]: http://www.datomic.com
