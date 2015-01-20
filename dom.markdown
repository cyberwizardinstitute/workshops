# the dom

(D)ocument (O)bject (M)odel:

the data structure of web pages.

---
# one big tree

``` html
<html>
  <head><title>wow</title></head>
  <body>
    <h1 id="top">very tree</h1>
    <div class="msg">
      so <span>tall</span>
    </div>
  </body>
</html>
```

---
# document

* document.head -> `<head>...</head>`
* document.body -> `<body>...</body>`

---
# elements

Each html tag is called an element.

When you have an element reference, you get:

* `elem.childNodes` - an array of children
* `elem.parentNode` - the parent of the current element

---

`document.head.childNodes[0]`
=== `<title>wow</title>`

---

`document.body.childNodes[0]`
=== `<h1 id="top">very tree</h1>`

---

`document.body.childNodes[1]`
=== `<div class="msg">so <span>tall</span></div>`

---

`document.body.childNodes[1].childNodes[0]`
=== `<span>tall</span>`

---
# query selector

Using `document.body.[...]` to fetch every element is not
very flexible!

Instead, we can fetch elements with a css selector:

`document.querySelector('h1')` === `<h1>very tree</h1>`

---
# css selectors

Select an element by a tag name:

* `span` -> `<span>tall</span>`

Select an element by its class name:

* `.msg` -> `<div class="msg">...</div>`

Select an element by its `id`:

* `#top` -> `<h1 id="top">very tree</h1>`

Select an element by attribute:

* `[id="top"]` -> `<h1 id="top">very tree</h1>`

---
# css selector combinations

You can combine id, class, attribute, and element selectors.

All of the constraints must match:

``` js
document.querySelector('h1#cool.row[x="5"]')
```

will match:

``` html
<h1 id="cool" class="row" x="5">whatever</h1>
```

but not:

``` html
<h1 id="sweet" class="row" x="5">hey</h1>
```

---
# nested css selectors

* `.msg span` -> `<span>tall</span>`

* `#top span` -> null (matches nothing)

---
# querySelector, querySelectorAll

* `document.querySelector()` -> first matching element
* `document.querySelectorAll()` -> all matching elements

---
# elem.querySelector, elem.querySelectorAll

If you have an element, you can also call `.querySelector()`
on that element to query its descendents:

* `elem.querySelector()` -> first matching element
* `elem.querySelectorAll()` -> all matching elements

---
# some other ways of querying

* `document.getElementById()`
* `document.getElementsByClassName()`

---

once you have an element reference,
you can modify the contents in plenty of ways:

* set the inner text or html
* add and remove children
* set and remove attributes

---
# setting text

``` js
var elem = document.querySelector('.msg');
elem.textContent = 'purr cats <3 <3 <3'
```

With `textContent` you don't need to worry about elements
being interpreted as html.

---
# setting html

``` js
var elem = document.querySelector('.msg');
elem.innerHTML = '<h1>wow</h1>'
```

---
# construct elements with code

```
var div = document.createElement('div');
```

---
# construct elements with a string of html

``` js
var div = document.createElement('div');
div.innerHTML = '<b>wow such inner</b>';
```

---
# add children with `.appendChild()`

``` js
var div = document.createElement('div');
var b = document.createElement('b');
b.textContent = 'wowsers';

div.appendChild(b);
document.body.appendChild(b);
```

---
# remove children with `.removeChild()`

suppose we have some html:

``` html
<html>
  <body>
    <div>
      cool cool
      <span>get rid of me</span>
    </div>
  </body>
</html>
```

---
# remove children with `.removeChild()`

we can get rid of the inner span by fetching references to
the span and its parent, then on the parent we can call
`.removeChild()`:

``` js
var div = document.querySelector('div');
var span = div.querySelector('span');
div.removeChild(span);
```

---
# remove children with `.removeChild()`

and now the html will be:

``` html
<html>
  <body>
    <div>
      cool cool
    </div>
  </body>
</html>
```

---
# set an attribute with `.setAttribute()`

``` js
var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('value', 'wow');
document.body.appendChild(input);
```

---
# set an attribute with `.setAttribute()`

and now the body will have an `input` element with
`type="text"` and `value="wow"`:

``` html
<html>
  <body>
    <input type="text" value="wow">
  </body>
</html>
```

---
# `.insertBefore()`

We can also insert elements before another element.
Given this html:

``` html
<html>
  <body>
    <ul>
      <li class="zero">zero</li>
      <li class="one">one</li>
      <li class="three">three</li>
    </ul>
  </body>
</html>
```

---
# `.insertBefore()`

We can insert an element before `<li>three</li>`:

``` js
var ul = document.querySelector('ul');
var three = ul.querySelector('.three');

var two = document.createElement('li');
two.textContent = 'two';
two.setAttribute('class', 'two');

ul.insertBefore(two, three);
```
---
# `.insertBefore()`

and now the html will be:

``` html
<html>
  <body>
    <ul>
      <li class="zero">zero</li>
      <li class="one">one</li>
      <li class="two">two</li>
      <li class="three">three</li>
    </ul>
  </body>
</html>
```

---
# `.style`

We can adjust css on the fly with `.style`.
Using the html from the previous example, we can do:

``` js
var zero = document.querySelector('.zero');
zero.style.color = 'purple';
```

and now the first element in the list will have purple text.

---
# events

We can respond to page actions by using
`.addEventListener()`. With this html:

``` html
<body>
  <button>wow</button>
</body>
```

---
# events

we can insert an element when somebody clicks the button:

``` js
var button = document.querySelector('button');
button.addEventListener('click', function (ev) {
    var msg = document.createElement('div');
    msg.textContent = new Date().toISOString();
    document.body.appendChild(msg);
});
```

---
# forms and preventDefault

Sometimes events have default actions, like forms will send
a GET or POST request when the submit button is clicked. You
can override these actions by calling `preventDefault()` on
the event object.

Given this html:

``` html
<form>
  <input type="text" name="cool">
  <input type="submit">
</form>
```

---
# forms and preventDefault

We can capture the submit event and prevent the default
action:

``` js
var form = document.querySelector('form');
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    form.querySelector('[name=cool]')
});
```

---
# registering events for multiple elements

Suppose we have some html:

``` html
<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>
```

There are two ways we can register a "click" event for each
`li` element.

---
# register a listener on each element

We can register a "click" listener on each element:

``` js
var items = document.querySelectorAll('ul li');
for (var i = 0; i < items.length; i++) (function (elem) {
    elem.addEventListener('click', function (ev) {
        ev.target.style.fontWeight = 'bold';
    });
})(items[i]);
```

This is kind of messy. We need to use a closure because the
for loop modifies the `i` index before the events fire so it
is always the last index.

---
# ev.target

A simpler way to register a listener for many elements is to
register a listener on the parent `ul` and check the
`ev.target`:

``` js
var ul = document.querySelector('ul');
ul.addEventListener('click', function (ev) {
    ev.target.style.fontWeight = 'bold';
});
```

---
# xhr

We can make http requests with the DOM too!

It's really awkward to do this with raw javascript:

``` js
var xhr = new XMLHttpRequest;
xhr.addEventListener('readystatechange', function (ev) {
    if (xhr.readyState === 4) {
        console.log('body=', xhr.responseText);
    }
});
xhr.open('POST', '/', true);
xhr.send('foo=bar&x=5');
```

---
# xhr

Luckily, there is a package on npm we can use. First do:

```
npm install xhr
```

then in your browser code you can do:

``` js
var xhr = require('xhr');
var opts = {
    method: 'POST',
    uri: '/',
    body: 'foo=bar&x=5'
};
xhr(opts, function (err, res, body) {
    console.log('body=', body);
});
```

---
# xhr

or with the help of the built-in querystring module:

``` js
var xhr = require('xhr');
var qs = require('querystring');
var opts = {
    method: 'POST',
    uri: '/',
    body: qs.stringify({ foo: 'bar', x: 5 })
};
xhr(opts, function (err, res, body) {
    console.log('body=', body);
});
```

---

If you want to use `require()` to load modules from npm,
you'll need to use a tool like
[browserify](http://browserify.org):

```
$ browserify browser.js > bundle.js
```

then in your html:

``` html
<script src="bundle.js"></script>
```

