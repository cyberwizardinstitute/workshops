# svg

svg is an image format that browsers understand

---
# `<svg>`

svg looks a lot like html:

``` html
<svg viewbox="0 0 100 100" width="800" height="500" xmlns="http://www.w3.org/2000/svg">
  <circle cx="300" cy="200" r="5" fill="purple">
</svg>
```

---
# viewbox

All coordinates are in terms of the viewbox:

"0 0 100 100"

"left top right bottom"

---
# viewbox

If you wanted to use a coordinate system with x and y
between -1 and 1, you could do:

"-1 -1 1 1"

---

Most visible elements have these attributes:

* `fill`
* `stroke`
* `stroke-width`

---
# `<circle>`

``` html
<circle cx="300" cy="200" r="5" fill="purple">
```

* `cx` - center x coordinate
* `cy` - center y coordinate
* `r` - radius

---
# `<rect>`

``` html
<rect x="1" y="1" width="998" height="298"
  fill="orange" stroke-width="2">
```

---
# `<text>`

``` html
<text x="250" y="150" font-family="Verdana" font-size="55">
  whatever
</text>
```

---
# transforms

Set the "transform" attribute to any of these:

* transform
* scale
* rotate
* scaleX
* scaleY
* matrix

---
# translate

``` html
<svg viewbox="0 0 500 500" width="100%" height="100%">
  <circle transform="translate(30,20)" cx="100" cy="200" r="20">
</svg>
```

shifts the y down 30 units and the x right 20 units 

---
# scale

``` html
<svg viewbox="0 0 1000 1000" width="100%" height="100%">
  <circle transform="scale(0.5,2)" cx="100" cy="200" r="100">
</svg>
```

halves the radius along the x and doubles the radius along
the y

---
# rotate

``` html
<svg width="100%" height="100%" viewbox="0 0 1000 1000">
<rect x="1" y="1" width="998" height="298"
  fill="orange" stroke-width="2" transform="rotate(30)">
</svg>
```

---
# `<g>`

Create a group of elements.

You can transform all the child nodes of a g by setting a
transform on a `<g>` element.

---
# `<path>`

create a shape from a path string

``` html
<path d="M 100 100 L 300 100 L 200 300 z"
  fill="orange" stroke="black" stroke-width="3">
```

---
# path string syntax

* `M x,y` - move to (absolute)
* `m dx,dy` - move to (relative)

* `L x,y` - line to (absolute)
* `l dx,dy` - line to (relative)

* `C c1x,c1y c2x,c2y x,y` - curve to (absolute)
* `c dc1x,dc1y dc2x,dc2y dx,dy` - curve to (relative)

* `z` / `Z` - close path

Some others:

* A/a - elliptical arc
* T/t - quadratic bezier curve
* S/s - cubic bezier curve

---
# `<polygon>`

create a closed shape from line segments

``` html
<polygon points="60,20 100,40 100,80 60,100 20,80 20,40">
```

---
# `<polyline>`

create an open shape from line segments

``` html
<polyline points="60,20 100,40 100,80 60,100 20,80 20,40">
```

---

paths, polylines, and polygons are great for interactive
graphs and visualizations

---

You can also dynamically construct elements with javascript!

---
# document.createElementNS()

Constructing elements is a bit weird:

``` js
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
```

---
# svg dom methods

All of the usual dom methods work on svg:

``` js
var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('fill', 'cyan');

var circle2 = elem.cloneNode(true);
circle2.style.backgroundColor = 'orange';
```

---
# svg dom methods

some useful methods:

* `elem.cloneNode(true)` - copy a node and its children
* `elem.setAttribute(name, value)` - set an attribute

---
# svg-create-element

with the `svg-create-element` module, we can create svg
attributes more tersely with less remembering w3 urls:

``` js
var createElement = require('svg-create-element');
var svg = createElement('svg');
var circle = createElement('circle');
```

---
# svg-create-element

You can also create attributes on created elements in one
stroke with svg-create-element:

``` js
var createElement = require('svg-create-element');
var svg = createElement('svg', {
    viewbox: '0 0 100 100', width: 500, height: 300
});
var circle = createElement('circle', {
    cx: 250, cy: 150, r: 80, fill: 'purple'
});
svg.appendChild(circle);
document.body.appendChild(svg);
```

---
# inserting svgs into the page

Inlining svg into your html is annoying if you create the
svgs in an image program.

This works to display an image:

``` html
<img src="cats.svg">
```

but you won't be able to manipulate the svg with javascript.

---
# loading an svg

Instead, we can use xhr to load an svg image, putting the
contents into a constructed `<div>` to pull out the `<svg>`
element:

``` js
var xhr = require('xhr');

xhr('cats.svg', function (err, res, body) {
    if (err) return console.error(err);
    if (/^2/.test(res.statusCode)) {
        return console.error(res.statusCode + ': ' + body);
    }
    var div = document.createElement('div');
    div.innerHTML = body;
    var svg = div.querySelector('svg');
    if (!svg) return console.error('no svg found');
    document.body.appendChild(svg);
});
```

---
# load-svg

or just use the `load-svg` package instead:

``` js
var loadsvg = require('load-svg');

loadsvg('cool.svg', function (err, svg) {
    document.body.appendChild(svg);
});
```

---
# window.requestAnimationFrame()

We can make animations using
`window.requestAnimationFrame()`:

``` js
window.requestAnimationFrame(loop);

function loop () {
    // update the scene here
}
```

---
# time delta

Not all computers are capable of running a simulation at 60
fps. By computing a time delta, you can make your simulation
work even on systems that can't keep up at 60 fps.

---
# time delta

``` js
var last = Date.now();
window.requestAnimationFrame(loop);

function loop () {
    var now = Date.now();
    var dt = last - now;
    last = now;
    
    // update the scene here based on dt
}
```

---
# frame-loop

Use frame-loop to automatically set up the request animation
frame loop with the time difference `dt`:

```
var loop = require('frame-loop');
var engine = loop(function (dt) {
    // ...
});
engine.run();
```
---
# frame-loop

You can also set timers and intervals based on game time:

``` js
var loop = require('frame-loop');
var engine = loop(function (dt) {
    // ...
});

engine.setInterval(function () {
    console.log('beep');
}, 1000);

engine.setTimeout(function () {
    engine.pause();
}, 5000);

engine.run();
```

These timers can be paused with `engine.pause()`.

---
# 2d physics

``` js
position.x += velocity.x * dt;
position.y += velocity.y * dt;

velocity.x += acceleration.x * dt;
velocity.y += acceleration.y * dt;
```

---
# box-sprite-svg

Wrap an svg element with physics!

``` js
var sprite = require('box-sprite-svg');
var player = sprite(document.querySelector('svg #player'));

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
```

---
# .getBoundingClientRect()

You can get a bounding box on any svg element:

``` js
document.querySelector('#player').getBoundingClientRect()
```

prints:

```
ClientRect {height: 100, width: 100, left: 250, bottom: 350, right: 350…}
```

---
# box-sprite-svg bbox()

Handily, box-sprite-svg exposes a `.bbox()` method that
calls `.getBoundingClientRect()`:

``` js
var sprite = require('box-sprite-svg');
var player = sprite(document.querySelector('svg #player'));
console.log(player.bbox());
```

prints:

```
{ bottom: 350, height: 100, left: 250, right: 350, top: 250, width: 100 }
```

---
# box-collide

Given two bounding boxes, the box-collide module will tell
you if they collide:

``` js
var collide = require('box-collide');
var a = document.querySelector('#a');
var b = document.querySelector('#b');
console.log(collide(a, b));
```

---
# a simple game!

Now that we've seen basic physics and collision detection,
we can build a simple game!
