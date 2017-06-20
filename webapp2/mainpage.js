var html = require('choo/html')

module.exports = function (state, emit) {
  return html`<body>
    <h1>hello</h1>
    you are the <span id="count">${state.count++}</span>th visitor
    <hr>
    <form method="POST" action="/guestbook"
    onsubmit=${onsubmit}>
      <input type="text" name="name"
        placeholder="name">
      <textarea name="msg" placeholder="message"></textarea>
      <button type="submit">POST</button>
    </form>
    ${state.messages.map(function (doc) {
      return html`<div>
        <div>${doc.name}</div>
        <pre>${doc.msg}</pre>
      </div>`
    })}
    <script>initState = ${JSON.stringify(state)}</script>
    <script src="bundle.js"></script>
  </body>`
  function onsubmit (ev) {
    ev.preventDefault()
    emit('sign-guestbook', {
      name: ev.target.name.value,
      msg: ev.target.msg.value
    })
  }
}
