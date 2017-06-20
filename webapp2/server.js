var http = require('http')
var level = require('level')
var db = level('counter.db', { valueEncoding: 'json' })
var ecstatic = require('ecstatic')(__dirname + '/public')
var body = require('body/any')
var collect = require('collect-stream')
var mainpage = require('./mainpage.js')

var count = 0
db.get('count', function (err, value) {
  count = Number(value || 0) + count
})
var router = require('routes')()
router.addRoute('GET /', function (req, res, m) {
  res.setHeader('content-type', 'text/html')
  var opts = { gt: 'guestbook!', lt: 'guestbook!~' }
  collect(db.createReadStream(opts), function (err, docs) {
    if (err) {
      res.end(err + '\n')
      return console.error(err)
    }
    var state = { 
      count: count,
      messages: docs.map(function (doc) { return doc.value })
    }
    res.end(mainpage(state).toString())
  })
  db.put('count', count, function (err) {
    if (err) console.error(err)
  })
})
router.addRoute('POST /guestbook', function (req, res, m) {
  body(req, res, function (err, params) {
    if (err) return console.error(err)
    var key = 'guestbook!' + new Date().toISOString()
    db.put(key, params, function (err) {
      if (err) res.end('not ok')
      else res.end('ok')
    })
  })
})

router.addRoute('*', function (req, res, m) {
  ecstatic(req, res)
})

var server = http.createServer(function (req, res) {
  console.log(req.method, req.url)
  var m = router.match(req.method + ' ' + req.url)
  if (m) m.fn(req, res, m)
  else res.end('error')
})
server.listen(5000)
