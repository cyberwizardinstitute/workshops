var loadsvg = require('load-svg')

loadsvg('game.svg', function (err, svg) {
  var player = svg.querySelector('#player')
  var physics = {
    position: [0,700],
    velocity: [0,0],
    acceleration: [0,0.1]
  }
  document.body.appendChild(svg)
  var prev = Date.now()
  loop()
  function loop () {
    var now = Date.now()
    var dt = now - prev
    prev = now
    physics.position[0] += physics.velocity[0] * dt
    physics.position[1] += physics.velocity[1] * dt
    physics.velocity[0] += physics.acceleration[0] * dt
    physics.velocity[1] += physics.acceleration[1] * dt
    physics.velocity[0] *= 0.9
    if (physics.position[1] > 0) {
      physics.position[1] = 0
      physics.velocity[1] = 0
    }
    player.setAttribute('transform', 'translate('
      + physics.position[0] + ',' + physics.position[1] + ')')
    window.requestAnimationFrame(loop)
  }
  window.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 0x20) {
      physics.velocity[1] -= 10
    } else if (ev.keyCode === 37) {
      physics.velocity[0] = -2
    } else if (ev.keyCode === 39) {
      physics.velocity[0] = +2
    }
  })
})
