module.exports = 500

setTimeout(function () {
  throw new Error('whatever')
}, 1000)
