var router = require('routes')()
var h = require('virtual-dom/h')
var sorthash = require('./lib/sorthash.js')
var houses = require('./lib/houses.json')
module.exports = router

router.addRoute('/apply', function (m) {
  return h('form', { method: 'POST', action: '/apply' }, [
    h('div', [
      'name',
      h('input', { type: 'text', name: 'name' }),
    ]),
    h('input', { type: 'submit', value: 'apply' })
  ])
})

router.addRoute('/students', function (m) {
  return h('div', m.state.students.map(function (s) {
    var name = s.key.split('!')[1]
    return h('div.student',
      h('a', { href: '/student/' + name }, name)
    )
  }))
})

router.addRoute('/student/:name', function (m) {
  var house = sorthash(m.params.name)
  return h('div', [
    h('h1', m.params.name),
    h('div', 'a student of house ' + house)
  ])
})

router.addRoute('/houses', function (m) {
  return h('div', houses.map(function (name) {
    return h('div',
      h('a', { href: '/house/' + name }, name)
    )
  }))
})

router.addRoute('/house/:name', function (m) {
  return h('div', [
    h('h1', 'house ' + m.params.name),
    h('img', { src: '/' + m.params.name + '.svg' }),
    h('div', m.state.students.map(function (s) {
      var name = s.key.split('!')[2]
      return h('div', name)
    }))
  ])
})
