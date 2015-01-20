var fs = require('fs');
var http = require('http');
var blob = require('content-addressable-blob-store');
var through = require('through2');
var store = blob({ dir: './blobs' });
var level = require('level');
var db = level('./db', { valueEncoding: 'json' });

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var w = store.createWriteStream();
        req.pipe(w);
        w.on('finish', function () {
            var now = new Date().toISOString();
            var nowkey = 'images-recent!' + now + '!' + w.key;
            db.batch([
                { type: 'put', key: 'images!' + w.key, value: 0 },
                { type: 'put', key: nowkey, value: 0 }
            ], function (err) {
                if (err) res.end(err + '\n')
                else res.end(w.key + '\n')
            });
        });
    }
    else if (req.url === '/images') {
        var r = db.createReadStream({
            gt: 'images-recent!',
            lt: 'images-recent!~'
        })
        r.pipe(through.obj(function (row, enc, next) {
            this.push(row.key.split('!')[2] + '\n');
            next();
        })).pipe(res);
    }
    else {
        var r = store.createReadStream({ key: req.url.slice(1) });
        r.on('error', function (err) { res.end(err + '\n') });
        r.pipe(res);
    }
});
server.listen(5000);
