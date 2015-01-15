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



---
# `.style`

---
# .classList
---
# events

---
# xhr

---
# 

