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
