var http = require('http')
var fs = require('fs')
var count = 0
var server = http.createServer(function (req, res) {
  console.log(req.method, req.url)
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('content-type', 'text/html')
    res.end(`<h1>HOWDY</h1>
      <div>you are the ${count++}th visitor</div>
      <div>sign my guestbook</div>
    `)
  } else {
    fs.readFile('404.html', function (err, src) {
      if (err) {
        res.statusCode = 500
        res.setHeader('content-type', 'text/plain')
        res.end(err + '\n')
      } else {
        res.statusCode = 404
        res.setHeader('content-type', 'text/html')
        res.end(src)
      }
    })
  }
})
server.listen(3000)
