var gamma = require('gamma')
var foo = require('foo')
console.log(require('./data.json'))
var fs = require('fs')
var xhr = require('xhr')
xhr('/hello.txt', function (err, res, body) {
  console.log(body)
})

var img = document.createElement('img')
img.src = 'data:image/jpg;base64,'
  + fs.readFileSync(__dirname + '/tinycat.jpg', 'base64')
document.body.appendChild(img)

foo(3, function (err, n) {
  document.body.innerHTML += '<u>' + n + '</u>'
})
