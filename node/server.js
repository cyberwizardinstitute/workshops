var net = require('net')
var server = net.createServer(function (stream) {
  stream.pipe(stream)
})
server.listen(3000)
