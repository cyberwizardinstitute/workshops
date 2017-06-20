var http = require('http')
var fs = require('fs')
var ecstatic = require('ecstatic')
var st = ecstatic(__dirname + '/public')
var router = require('routes')()
var count = 0

router.addRoute('GET /', function (req, res, m) {
  res.setHeader('content-type', 'text/html')
  res.end(`<h1>HOWDY</h1>
    <div>you are the ${count++}th visitor</div>
    <div>sign my guestbook</div>
    <form action="/guestbook" method="POST">
      <input type="text" placeholder="your name"
        name="name">
      <textarea name="msg"></textarea>
    </form>
  `)
})
router.addRoute('POST /guestbook', function (req, res, m) {
  var w = fs.createWriteStream('guestbook.txt', { flags: 'a+' })
  req.pipe(w, { end: false })
  req.on('end', function () { w.end('\n') })
  w.on('error', function (err) {
    res.statusCode = 500
    res.end(err + '\n')
  })
  w.on('finish', function () {
    res.end('thank you for signing my guestbook\n')
  })
})

var server = http.createServer(function (req, res) {
  console.log(req.method, req.url)
  var m = router.match(req.method + ' ' + req.url)
  if (m) m.fn(req, res, m)
  else st(req, res)
})
server.listen(3000)
