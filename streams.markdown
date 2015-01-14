# streams

node.js has a handy interface for shuffling data around
called streams

---
# reference materials!

https://github.com/substack/stream-handbook
http://nodeschool.io/#stream-adventure

---
# stream origins

```
"We should have some ways of connecting programs like garden
hose--screw in another segment when it becomes necessary to
massage data in another way. This is the way of IO also."
```

[Doug McIlroy. October 11, 1964](
http://cm.bell-labs.com/who/dmr/mdmpipe.html)

---
# why streams?

* we can compose streaming abstractions
* we can operate on data chunk by chunk

---
# composition

Just like how in unix we can pipe commands together:

```
$ <mobydick.txt sed -r 's/\s+/\n/g' | grep -i whale | wc -l
1691
```

we can pipe abstractions together with streams using
`.pipe()`:

``` js
read('mobydick.txt')
    .pipe(replace(/\s+/g, '\n'))
    .pipe(filter(/whale/i))
    .pipe(linecount(function (count) {
        console.log(count)
    }))
;
```

---
# chunk by chunk

With streams, we can operate on data chunk by chunk, without
buffering everything into memory.

This means we can write programs that operate on very large
files!

It also means we can have hundreds or thousands of
concurrent streams without using much memory.

---
# fs

We can read a file and stream the file contents to stdout:

``` js
var fs = require('fs');


fs.createReadStream('greetz.txt')
    .pipe(process.stdout)
;
```

---

```
$ echo beep boop > greetz.txt
$ node greetz.js
beep boop
```

---

now let's transform the data before we print it out!

---
# fs

You can chain `.pipe()` calls together just like the `|`
operator in bash:

``` js
var fs = require('fs');


fs.createReadStream('greetz.txt')
    .pipe(...)
    .pipe(process.stdout)
;
```

---
# fs

``` js
var fs = require('fs');
var through = require('through2');

fs.createReadStream('greetz.txt')
    .pipe(through(toUpper))
    .pipe(process.stdout)
;

function toUpper (buf, enc, next) {
    var up = buf.toString().toUpperCase();
    
    
}
```

---
# fs

``` js
var fs = require('fs');
var through = require('through2');

fs.createReadStream('greetz.txt')
    .pipe(through(toUpper))
    .pipe(process.stdout)
;

function toUpper (buf, enc, next) {
    var up = buf.toString().toUpperCase();
    this.push(up);
    
}
```

---
# fs

``` js
var fs = require('fs');
var through = require('through2');

fs.createReadStream('greetz.txt')
    .pipe(through(toUpper))
    .pipe(process.stdout)
;

function toUpper (buf, enc, next) {
    var up = buf.toString().toUpperCase();
    this.push(up);
    next();
}
```

---
# fs

```
$ node greetz.js
BEEP BOOP
```

---
# stdin

What if we want to read from stdin instead of a file?
Just pipe from `process.stdin` instead of
`fs.createReadStream()`.

---

before:

``` js
var fs = require('fs');
var through = require('through2');

fs.createReadStream('greetz.txt')
    .pipe(through(toUpper))
    .pipe(process.stdout)
;

function toUpper (buf, enc, next) {
    var up = buf.toString().toUpperCase();
    this.push(up);
    next();
}
```

---

after:

``` js

var through = require('through2');

process.stdin
    .pipe(through(toUpper))
    .pipe(process.stdout)
;

function toUpper (buf, enc, next) {
    var up = buf.toString().toUpperCase();
    this.push(up);
    next();
}
```

---
# through2

through2 is a module you can install with npm:

```
$ npm install through2
```

It makes setting up a transform stream less verbose than
using the core methods.

---

a version of our program using core streams:

``` js
var Transform = require('stream').Transform;
var toUpper = new Transform;
toUpper._transform = function (buf, enc, next) {
    var up = buf.toString().toUpperCase();
    this.push(up);
    next();
};

process.stdin
    .pipe(toUpper)
    .pipe(process.stdout)
;
```

---
# through2 vs stream.Transform

rules of thumb:

* use through when you only want to transform some data
* use core Transform when you want to use inheritance

---
# through(write, end)

With through there are 2 parameters: `write` and `end`.
Both are optional.

* `function write (buf, enc, next) {}`
* `function end () {}`

Call `next()` when you're ready for the next chunk.
If you don't call `next()`, your stream will hang!

Call `this.push(VALUE)` inside the callback to put VALUE
into the stream's output.

Use a `VALUE` of `null` to end the stream. 

---

---
# concat-stream



---
# http

---
# readable

---
# writable

---
# through

```
process.stdin.pipe(process.stdout)
```

