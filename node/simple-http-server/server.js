var http = require('http')
var server = http.createServer(function (req, res) {
  console.log(req.method, req.url)
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('content-type', 'text/html')
    res.end('<h1>HOWDY</h1>\n')
  } else {
    res.statusCode = 404
    res.setHeader('content-type', 'text/plain')
    res.end('not found\n')
  }
})
server.listen(3000)
