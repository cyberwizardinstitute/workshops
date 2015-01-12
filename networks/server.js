var ecstatic = require('ecstatic');
var http = require('http');
var parseform = require('body/any');
var st = ecstatic(__dirname + '/static');

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        parseform(req, res, function (err, params) {
            console.log(params);
            res.end('ok\n');
        });
    }
    else st(req, res)
});
server.listen(5000);
