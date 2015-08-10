var wsock = require('websocket-stream')
var router = require('../router.js')
var main = require('main-loop')
var h = require('virtual-dom/h')
var EventEmitter = require('events').EventEmitter
var split = require('split2')
var through = require('through2')

var state = {
  path: location.pathname,
  messages: []
}
var bus = new EventEmitter

var parts = location.pathname.split('/')
if (parts[1] === 'house' && parts[3] === 'chat') {
  var house = parts[2]
  var ws = wsock('ws://' + location.host)
  bus.on('message', function (msg) {
    ws.write(JSON.stringify(msg) + '\n')
  })
  ws.pipe(split(JSON.parse)).pipe(through.obj(function (row, enc, next) {
    state.messages.push(row)
    loop.update(state)
    next()
  }))
}

var loop = main(state, render, require('virtual-dom'))
var content = document.querySelector('#content')
content.replaceChild(loop.target, content.childNodes[0])

var singlePage = require('single-page')
var show = singlePage(function (href) {
  state.path = href
  loop.update(state)
})
require('catch-links')(window, show)

function render (state) {
  var m = router.match(state.path)
  if (m) {
    m.state = state
    m.bus = bus
    return m.fn(m)
  }
  else return h('div', 'not found')
}
