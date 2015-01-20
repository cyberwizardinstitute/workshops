// first do:
// curl -s http://www.gutenberg.org/cache/epub/2701/pg2701.txt > mobydick.txt

var fs = require('fs');
var path = require('path');
var through = require('through2');
var combine = require('stream-combiner2')
var split = require('split');

read('mobydick.txt')
    .pipe(replace(/\s+/g, '\n'))
    .pipe(filter(/whale/i))
    .pipe(linecount(function (count) {
        console.log(count)
    }))
;

function read (file) {
    return fs.createReadStream(path.join(__dirname, file));
}

function replace (pattern, replacement) {
    return combine(split(), through(function (buf, enc, next) {
        var line = buf.toString('utf8');
        this.push(line.replace(pattern, replacement) + '\n');
        next();
    }));
}

function filter (pattern) {
    return combine(split(), through(function (buf, enc, next) {
        var line = buf.toString('utf8');
        if (pattern.test(line)) this.push(line + '\n');
        next();
    }));
}

function linecount (cb) {
    var count = 0;
    return combine(split(), through(write, end));
    function write (buf, enc, next) { count ++; next() }
    function end () { cb(count) }
}
