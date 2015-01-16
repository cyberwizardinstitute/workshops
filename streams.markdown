# streams

node.js has a handy interface for shuffling data around
called streams

---
# reference materials!

* https://github.com/substack/stream-handbook
* http://nodeschool.io/#stream-adventure

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
files or lazily evaluate network data as it arrives!

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
# through()

If you don't give through any arguments, these are the
default values for write and end:

* `function write (buf, enc, next) { this.push(buf); next() }`
* `function end () { this.push(null) }`

This means that `through()` with no arguments will pass
everything written as input directly through to its output.

---
# concat-stream

`npm install concat-stream`

concat-stream buffers up all the data in the stream:

```
var concat = require('concat-stream');
process.stdin.pipe(concat(function (body) {
    console.log(body.length);
}));
```

You can only write to a concat-stream. You can't read from a
concat-stream.

Keep in mind that all the data will be in memory.

---
# stream types

There are many kinds of streams. We've seen two types
already: transform (through2) and writable (concat-stream).

* readable - produces data: you can pipe FROM it
* writable - consumes data: you can pipe TO it
* transform - consumes data, producing transformed data
* duplex - consumes data separately from producing data

---
# stream types in code

* readable: `readable.pipe(A)`
* writable: `A.pipe(writable)`
* transform: `A.pipe(transform).pipe(B)`
* duplex: `A.pipe(duplex).pipe(A)`

---
# duplex streams

You can write to and read from a duplex stream, but the
input doesn't directly drive the output.

Duplex streams are like having a conversation on a telephone
where both parties can talk and listen whenever they want.

If you can do:

    a.pipe(duplex).pipe(a)

then you have a duplex stream.

---
# writable stream methods

We've seen `.pipe()` which is a method of all readable
streams (readable, transform, and duplex).

Any stream you can write to (writable, transform, and duplex
streams) has these methods:

* `.write(buf)` - write some data
* `.end()` - close the stream
* `.end(buf)` - write some data and close the stream

---
# core streams in node

* `process.stdin` - readable stream
* `process.stdout` - writable stream
* `process.stderr` - writable stream
* http request object - readable stream
* http response object - writable stream
* net socket - duplex stream

---

```
process.stdin.pipe(process.stdout)
```

---
# http

req is a readable stream, res is a writable stream:

``` js
var http = require('http');
var server = http.createServer(function (req, res) {
    req.pipe(process.stdout);
    res.end('hello thar!\n');
});
server.listen(5000);
```

---
# net

``` js
var net = require('net');

```

---
# object streams

Normally you can only read and write buffers and strings
with streams. However, if you initialize a stream in
`objectMode`, you can use any kind of object (except for
`null`):

``` js
var through = require('through2');
var tr = through.obj(function (row, enc, next) {
    this.push((row.n * 1000) + '\n');
    next();
});
tr.pipe(process.stdout);
tr.write({ n: 5 });
tr.write({ n: 10 });
tr.write({ n: 3 });
tr.end();
```

---
output:

``` js
5000
10000
3000
```

---
# duplexer2

Sometimes you'll have a writable stream and a readable
stream, and you'll want to package up both streams into a
single readable+writable duplex stream.

Use `duplexer(writable, readable)` to make a new stream:

``` js
var duplexer = require('duplexer2');
var dup = duplexer(process.stdout, process.stdin);
dup.write('beep boop\n'); // writes beep boop to stdout
dup.pipe(process.stderr); // pipes stdin to stderr
```

---
# split

There is a handy module for splitting a stream into
newlines called split (`npm install split`):

``` js
var split = require('split');
var sp = split();
sp.pipe(through(function (buf, enc, next) {
    console.log('line=' + buf);
    next();
}));
sp.end('abc\ndef\nghi\n');
```

Even though we wrote a chunk with 3 newlines in it, on the
output side of split we get 3 separate chunks for each line.

---
# stream-combiner2

Similarly to duplexer2, you can combine many streams at once
in a pipeline using `stream-combiner2`. You'll get back a
single stream.

---

``` js
var split = require('split');
var combine = require('stream-combiner2');
var through = require('through2');

var stream = combine(
    split(),
    through(double),
    through(linecount)
);
stream.pipe(process.stdout);
stream.end('abc\ndefghi\nkl');

function double (buf, enc, next) {
    this.push(buf + buf + '\n');
    next();
}

function linecount (buf, enc, next) {
    this.push((buf.length - 1) + '\n');
    next();
}
```

---

```
$ node combine.js
6
12
4
```

---
# homework

```
$ npm install -g stream-adventure
```

Then type `stream-adventure`.

