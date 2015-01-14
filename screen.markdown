# screen

You can use screen to run command-line programs and keep
them running, even when you go away.

---
# install screen

    $ sudo apt-get install screen

---
# create a new named screen

    $ screen -S website

---
# list screens

    $ screen -list

---
# connect to a screen

    $ screen -x website

---
# detach from a screen

From inside of a screen, press CTRL+A then `d`.

---
# create a new window inside screen

CTRL+A c

---
# go to the next window

CTRL+A n

---
# go to the previous window

CTRL+A p

---
# close a window

Just type `exit` to close a window.

---
# irc from the command-line

Install irssi:

    $ sudo apt-get install irssi

Then create a screen for irc:

    $ screen -S irc

---
Then in a screen, you can run `irssi` to use irc from the
command line.

* `/nick robowizard` - set your nickname on the server
* `/connect irc.freenode.net` - connect to irc.freenode.net
* `/join #cyberwizard` - join the channel called cyberwizard
* ESC+N or `/win N` - to jump to the window at number N

Once you're in a channel, type text like usual.
`CTRL+A d` to detach and `screen -x irc` to resume.

---
# run a web server

Make a web server.js:

``` js
var http = require('http');
var server = http.createServer(function (req, res) {
    res.end("YOU'RE A WIZARD.\n");
});
server.listen(8000);
```

now run your server with node from inside a screen:

```
$ node server.js
```

then detach the screen with CTRL+A d.

