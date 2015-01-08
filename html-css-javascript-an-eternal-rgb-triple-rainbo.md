__The Front End__
or,
__Who Put The End In The Front__

Writing a program, there are a million ways to do everything. 

Think about it.

And then pick the easiest.

It won't be easy enough.

A funny thing about programming the front end, 

is that you can do everything with a blank page, 

and some javascript.

There is this thing, called the DOM.

You will read of it, hear speak of it.

Many a coder of front ends speak snark of the DOM.

That is because the DOM is the master.


The DOM controls every website, from within the browser.

All that HTML you wrote, with its funny carets, 

and all that CSS, with its mysteries,

Those strings of goofy text get translated into OBJECTS

OBJECTS with PROPERTIES

Another way to phrase that, is

Your HTML "tags" become "elements".

Living creatures, almost... spririts.

And the DOM can manipulate these OBJECT spirits. 

by changing the properties.

The DOM can create new OBJECTS.

The DOM can talk to the internet.

The DOM can send messages to other people.

The DOM is the browser's API.



Javascript manipulates the DOM.

Javascript does much more than that.

But it does that, too.


Because true hackers detest a master, such as the DOM

They invented a thing called the Shadow DOM

If you ever hear of a Shadow DOM,

Know that it is Javascript by another name.

And do not speak again to the person who uttered that phrase.

Nevertheless, it is not always advisable to do everything with javascript.

Sometimes you have to write HTML and CSS.

This is perfectly acceptable, because both are simple, and forgiving.

CSS is powerful and mysterious, a fount for creativity.

You can write perfectly functional sites in HTML only.

As with all programming, HTML and CSS will riddle you with bugs.

And in this regard, they are the worst of all, 

for they do not provide good clues.

For instance, the line number in your program where you made a typo.


### HTML

HTML gives you tags, which become ELEMENT OBJECTS

Each of which, supposedly, serve a pupose
```html 
<a href="cyber.wizard.institute" style=background:green>radness</a>
<video src=...></video>
<img src=...></img>
```
many will come with some basic styling

which can be altered.

It is common, sometimes necessary 

to nest an element inside another

HTML today has evolved a long way.

It began, humbly, as a "markup language".

A language for marking up your data with meta-data.

It performs this way still,

HTML performs crucial markup for CSS and Javascripts,

providing ways to easily identify particular elements.

There are two basic ways to identify an element:
* uniquely
* classically 

These are done by adding id and class attributes

These are done by adding id and class properties

This is done looking like this:

```html
<a id="element-9" class="rad edtech anotherClass" href="cyber.wizard.insitutue" style="background:green">radness</a>
```

SO much for HTML

### CSS

CSS allows you to identify individual and grouped elements

and cascade styles upon styles over them.

CSS is like, img #element-9: your background is green;
```css
#element-9{background:green}
```

And it will be so.

In such a pick and choose fashion,

you can dictate colors, fonts, positions, animations, 

shadows, filters, gradients, and many more.


So much for CSS

### Javascript

In the context of "thefrontend"

where we find our weary selfies,

Javascript accesses an element,

by way of the DOM, 

and transforms it, 

by directly manipulating attributes 

of the ELEMENT OBJECT.

One such attribute of ELEMENT OBJECTS 

is the style attribute, where all the CSS for that style lives

```js
var element = document.getElementById('element-9')
element.style.background = 'green'
```

