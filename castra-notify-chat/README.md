# castra-notify-chat

A [Hoplon][4] chat project that builds on [Castra][2] and [Notify][8].

## Dependencies

- java 1.8+
- [boot][1]

## Usage
### Development
1. Start the `dev` task. In a terminal run:
    ```bash
    $ boot dev
    ```
    This will give you a  Hoplon development setup with:
    - auto compilation on file changes
    - audible warning for compilation success or failures
    - auto reload the html page on changes
    - Clojurescript REPL

2. Go to [http://localhost:8000][3] in your browser. You should see "Hello,

Several accounts are seeded: `able`, `baker`, and `charlie` are a few that
work.  The password for each of is the same as the username.

3. If you edit and save a file, the task will recompile the code and reload the
   browser to show the updated version.

.### Production
1. Run the `prod` task. In a terminal run:
    ```bash
    $ boot prod
    ```
2. The compiled files will be on the `target/` directory. This will use
   advanced compilation and prerender the html.

### Deployment

You can easily deploy this application for free to [Heroku][5].

1. Get a Heroku account and install the [Heroku toolbelt][6]
1. Create an application in the Heroku dashboard
1. Build a WAR file with `boot make-war`
1. Follow [these instructions][7] to deploy the WAR to Heroku using the `heroku` tool.

[1]: http://boot-clj.com
[2]: https://github.com/hoplon/castra
[3]: http://localhost:8000
[4]: https://hoplon.io
[5]: https://www.heroku.com/
[6]: https://toolbelt.heroku.com/
[7]: https://devcenter.heroku.com/articles/war-deployment#deployment-with-the-heroku-toolbelt
[8]: https://github.com/hoplon/notify
