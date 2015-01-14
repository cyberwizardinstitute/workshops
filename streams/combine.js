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
