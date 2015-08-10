var houses = require('./houses.json')
var crypto = require('crypto')

module.exports = function (name) {
  var h = crypto.createHash('sha256')
  var hash = h.update(name).digest('hex')
  
  var houseIndex = parseInt(hash.charAt(0), 16) % 4
  return houses[houseIndex]
}
