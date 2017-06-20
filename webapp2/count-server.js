var http = require('http')
var level = require('level')
var db = level('counter.db')
var count = 0
db.get('count', function (err, value) {
  count = Number(value || 0) + count
})
var router = require('routes')()
router.addRoute('GET /', function (req, res, m) {
  res.setHeader('content-type', 'text/html')
  res.end('<h1>hello</h1>\n'
    + 'you are the ' + (count++) + 'th visitor')
  db.put('count', count, function (err) {
    if (err) console.error(err)
  })
})
router.addRoute('*', function (req, res, m) {
  res.statusCode = 404
  res.setHeader('content-type', 'text/plain')
  res.end('not found\n')
})

var server = http.createServer(function (req, res) {
  console.log(req.method, req.url)
  var m = router.match(req.method + ' ' + req.url)
  if (m) m.fn(req, res, m)
  else res.end('error')
})
server.listen(5000)
