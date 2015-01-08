# html

Hyper-Text Markup Language!

---

# your first web page

Save this text as a file:

```
<b>whatever</b>
```

give it a `.html` extension and open your file in a web browser.

---

# more tags:

* `<i>...</i>` - make text italicized
* `<u>...</u>` - underline some text
* `<br>` - line break (aka "blank line")
* `<img src="whatever.png">` - show an image!
* `<a href="http://cool.com">cool</a>` - link!
* `<h1>...</h1>` - headers (big text)

---

# tags have attributes

attributes are modifications/specifications that you can
make to the tag.

`<img src="cat.jpg" height="100" width="100">`

all `img` attributes: http://www.w3schools.com/tags/tag_img.asp

---

# what tags are there?

there are loads of tags.

full list:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element

many are rarely used.

a few common ones are in this talk, but you can explore more
tags with *view source* and *inspect element*

---

# div

`<div>...</div>`

a box for text. it goes all the way across the screen.

---

# span

`<span>...</span>`

a chunk of a single line.

useful if you want to style a small section of text within a
div

---

# table

``` html
<table>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr> 
</table>
```
---

# wow bullet points

``` html
<ul>
    <li>...</li>
    <li>...</li>
    <li>...</li>
</ul>
```

---

# form

``` html
<form method="post" action="/">
  <p>
    cats? 
  </p>
  <input type="text" name="cats">
  <p>
    <input type="submit" value="submit!">
  </p>
</form>
```

---

# css

modify how your elements appear with *styles*

remember *attributes*?

some elements have attributes specific to them, but there
are also "global" attributes that apply to every element.

* style
* class
* id

(all global attributes:
http://www.w3schools.com/tags/ref_standardattributes.asp)

---

# the "style" attribute

`<h1 style="color:blue">...</h1>`

`<h1 style="color:blue;text-align:center">...</h1>`

---

# where to specify styles

* Inline - using a style attribute in HTML elements
* Internal - using a `<style>` element in the HTML `<head>` section
* External - using one or more external CSS files

(the above is from
http://www.w3schools.com/html/html_css.asp)

---

# styles per element

``` html
<html>
<head>
<style>
h1 {
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
</style>
</head>
<body>
<h1>...</h1>
</body>
</html>
```

(from http://www.w3schools.com/tags/tag_hn.asp)

---

# styles for ids

use an id when there will only be a single element

``` css
<html>
<head>
<style>
#msg {
    font-weight: bold;
    font-size: 72px;
    color: magenta;
}
</style>
</head>
<body>
<div id="msg">wow!</div>
</body>
</html>
```
---
# styles for class

use a class when there could be many elements

``` css
<html><head>
<style>
.msg {
    font-weight: bold;
    font-size: 72px;
    color: magenta;
}
</style>
</head>
<body>
<div class="cool">wow!</div>
<div class="cool">neat!</div>
<div class="cool">super!</div>
</body></html>
```
---
# external style sheets

`<link rel="stylesheet" href="style.css">`

view the source on http://cyber.wizard.institute & explore
the stylesheet.
---
# css selectors

You can create blocks of css rules that apply to more than
just individual classes and ids with css selectors.

``` css
#page .row .title {
    color: cyan;
}
```

will match `<div class="title"></div>` in:

``` html
<div id="page">
  <div class="row">
    <div class="header">
      <div class="title"></div>
      <div class="date"></div>
      <div class="author"></div>
    </div>
  </div>
</div>
```
---
# css selectors

We just used spaces between elements in `#page .row .title`,
but we can do lots of other things with css:

* `E` - match an element E by its tag name (example: `h1`)
* `E F` - matches F, a descendant of E
* `E > F` - matches F, a direct child of E
* `E#abc` - matches an element E with an id of abc
* `E.xyz` - matches an element E with a class of xyz
* `E[foo="bar"]` - match an element E with an attribute
  `foo` equal to "bar"

and more! http://www.w3.org/TR/CSS2/selector.html#pattern-matching
---
# neocities

You can host your html on neocities for free!

https://neocities.org
