var http = require('http')
var fs = require('fs')
var ecstatic = require('ecstatic')
var st = ecstatic('public')
var router = require('./router.js')
var hyperstream = require('hyperstream')
var createElement = require('virtual-dom/create-element')
var body = require('body/any')
var level = require('level')
var db = level('students.db', { valueEncoding: 'json' })
var collect = require('collect-stream')
var sorthash = require('./lib/sorthash.js')

var server = http.createServer(function (req, res) {
  var m = router.match(req.url)
  if (req.url === '/apply' && req.method === 'POST') {
    body(req, res, function (err, params) {
      var key = 'student!' + params.name
      var house = sorthash(params.name)
      db.batch([
        { type: 'put', key: key, value: {
          house: house
        } },
        { type: 'put',
          key: 'house!' + house + '!' + params.name,
          value: 0
        }
      ], function (err) {
        if (err) res.end('error: ' + err)
        else res.end('ok!')
      })
    })
  }
  else if (m) {
    m.state = {}
    if (req.url === '/students') {
      var r = db.createReadStream({
        gt: 'student!',
        lt: 'student!~'
      })
      collect(r, function (err, rows) {
        m.state.students = rows
        render(m)
      })
    }
    else if (req.url.split('/')[1] === 'house') {
      var house = req.url.split('/')[2]
      var r = db.createReadStream({
        gt: 'house!' + house + '!',
        lt: 'house!' + house + '!~',
      })
      collect(r, function (err, rows) {
        m.state.students = rows
        render(m)
      })
    }
    else render(m)
  } else st(req, res)
  
  function render (m) {
    var html = createElement(m.fn(m)).toString()
    fs.createReadStream('public/index.html')
      .pipe(hyperstream({
        '#content': html
      }))
      .pipe(res)
  }
})
server.listen(5000)
