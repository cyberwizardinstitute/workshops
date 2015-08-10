# web application

---
# start a project

```
$ mkdir foo
$ cd foo
$ npm init
```

---

building a web application from zero

* http server
* static files
* routing
* client vs server
* rendering html
* sorting hash
* tween
* database

---
# http server

``` js
var http = require('http')
var server = http.createServer(function (req, res) {
  res.end('beep boop!\n')
})
server.listen(5000)
```

Run this program with node:

```
$ node server.js
```

then in a browser open `http://localhost:5000`

---
# static files: fs

using fs...

---
# static files: ecstatic

using ecstatic...

---
# routing: manually

doing routing manually with req.url

---
# routing: routes

using the routes module

---
# client-side, server-side

---
# browserify

---
# virtual-dom

---
# database

---
# starter projects

* [virtual-dom-starter](https://github.com/substack/virtual-dom-starter) - bare-bones client-side app setup using virtual dom
* [virtual-dom-universal-starter](https://github.com/substack/virtual-dom-universal-starter) - browser+node (universal) virtual-dom setup with routing
* [virtual-dom-unidirectional-example](https://github.com/substack/virtual-dom-unidirectional-example) - flow control example with virtual-dom
* [virtual-dom-starter-babel-es6](https://github.com/substack/virtual-dom-starter-babel-es6) - bare-bones client-side app setup using virtual dom with babel for es6
* [virtual-dom-starter-babel-es6-jsx](https://github.com/substack/virtual-dom-starter-babel-es6-jsx) - bare-bones client-side app setup using virtual dom with babel for es6 and jsx

* [react-starter](http://github.com/substack/react-starter) - bare-bones client-side app setup using react with jsx
* [react-starter-es6-babel](https://github.com/substack/react-starter-es6-babel) - bare-bones client-side app setup using react with babel for es6 and jsx

