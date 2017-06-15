var http = require('http')
var fs = require('fs')
var ecstatic = require('ecstatic')
var st = ecstatic(__dirname + '/public')
var count = 0

var server = http.createServer(function (req, res) {
  console.log(req.method, req.url)
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('content-type', 'text/html')
    res.end(`<h1>HOWDY</h1>
      <div>you are the ${count++}th visitor</div>
      <div>sign my guestbook</div>
    `)
  } else st(req, res)
})
server.listen(3000)
