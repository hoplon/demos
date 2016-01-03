# async-webinar

A [Hoplon][5] demo that performs the examples from [Designing Front End Applications with core.async][3]
Cognitect's webinar. The original code can be found [here][4].

Examples 4 & 5 were not reproduced as they seemed explicitly core.async-centric. Also, I believe
that example 6 exposes a bug in the original, wherein if you click the B button before the A button,
the click is queued and immediately triggers the next message. It seems that the proper behavior should
be to discard clicks to B until the A button has been clicked and then wait for a click to B.


## Dependencies

- java 1.7+
- [boot][1]

## Usage

1. Start the auto-compiler with audio feedback. In a terminal:

    ```bash
    $ boot dev
    ```

2. Go to [http://localhost:8000][2] in your browser.

[1]: http://boot-clj.com
[2]: http://localhost:8000
[3]: http://go.cognitect.com/core_async_webinar_recording
[4]: https://github.com/cognitect/async-webinar
[5]: https://hoplon.io


