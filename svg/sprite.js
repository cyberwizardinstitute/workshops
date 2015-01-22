var sprite = require('box-sprite-svg');
var player = sprite(document.querySelector('svg #player'));
console.log(player.bbox());

var loop = require('frame-loop');
var engine = loop(function (dt) {
    player.tick(dt);
});
engine.run();

window.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 37) {
        player.velocity.x = -400;
    }
    else if (ev.keyCode === 39) {
        player.velocity.x = 400;
    }
});
window.addEventListener('keyup', function (ev) {
    if (ev.keyCode === 37 || ev.keyCode === 39) {
        player.velocity.x = 0;
    }
});
