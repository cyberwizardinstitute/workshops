var app = require('choo')()
var html = require('choo/html')
var mainpage = require('./mainpage.js')
var xhr = require('xhr')

app.use(function (state, emitter) {
  Object.keys(initState).forEach(function (key) {
    state[key] = initState[key]
  })
  emitter.on('sign-guestbook', function (doc) {
    xhr({
      method: 'POST',
      host: location.host,
      url: '/guestbook',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(doc)
    }, function (err, res, body) {
      if (err) console.error(err)
      state.messages.push(doc)
      emitter.emit('render')
    })
  })
})
app.route('/', require('./mainpage.js'))
app.mount('body')
