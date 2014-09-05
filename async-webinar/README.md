# async-webinar

A Hoplon demo that performs the examples from [Designing Front End Applications with core.async][4] Cognitect's webinar. The original code can be found [here][5].

Examples 4 & 5 were not reproduced as they seemed explicitly core.async-centric. Also, I believe
that example 6 exposes a bug in the original, wherein if you click the B button before the A button,
the click is queued and immediately triggers the next message. It seems that the proper behavior should
be to discard clicks to B until the A button has been clicked and then wait for a click to B.


## Dependencies

- java 1.7+
- [boot][1]
- [leiningen][2]

## Usage

1. Start the auto-compiler with audio feedback. In a terminal:

    ```bash
    $ boot development
    ```

2. Go to [http://localhost:8000][3] in your browser.

[1]: https://github.com/tailrecursion/boot
[2]: https://github.com/technomancy/leiningen
[3]: http://localhost:8000
[4]: http://go.cognitect.com/core_async_webinar_recording
[5]: https://github.com/cognitect/async-webinar


