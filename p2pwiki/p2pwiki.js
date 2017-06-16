var level = require('level-browserify')
var hyperlog = require('hyperlog')
var hyperkv = require('hyperkv')
var log = hyperlog(level('kvlog.db'), { valueEncoding: 'json' })
var kv = hyperkv({
  log: log,
  db: level('kvstore.db')
})

var wswarm = require('webrtc-swarm')
var signalhub = require('signalhub')

var app = require('choo')()
var html = require('choo/html')
var to = require('to2')

app.use(function (state, emitter) {
  var swarm = wswarm(signalhub('kvswarm',
    ['https://signalhub.mafintosh.com']))
  swarm.on('peer', function (peer) {
    peer.pipe(log.replicate({ live: true })).pipe(peer)
  })
})
app.use(function (state, emitter) {
  state.page = {}
  emitter.on('open', function (title) {
    kv.get(title, function (err, values) {
      state.page = values
      emitter.emit('render')
    })
  })
  emitter.on('save', function (edit) {
    kv.put(edit.title, edit.body, function (err, node) {
      console.log(err, node)
    })
  })
})

app.route('/', function (state, emit) {
  return html`<body>
    <h1>p2p social network log</h1>
    <form onsubmit=${onsubmit}>
      <div><input type="text" name="title"></div>
      <textarea name="body"></textarea>
      <div><button type="submit">POST</button></div>
    </form>
    <hr>
    <form onsubmit=${read}>
      <input type="text" name="title">
      <button type="submit">open</button>
    </form>
    ${Object.keys(state.page).map(function (key) {
      return html`<div>
        <hr>
        <div>${key}</div>
        <pre>${state.page[key].value}</pre>
      </div>`
    })}
  </body>`
  function read (ev) {
    ev.preventDefault()
    emit('open', ev.target.title.value)
  }
  function onsubmit (ev) {
    ev.preventDefault()
    emit('save', {
      title: ev.target.title.value,
      body: ev.target.body.value
    })
    ev.target.reset()
  }
})
app.mount('body')
