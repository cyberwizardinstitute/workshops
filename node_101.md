# Node.js, Events, and Callbacks

A computer program can run in many host environments.

Programs run on desktops, smart phones, and tiny devices everywhere.

Some programs run across various operating systems; this is useful.

This is possible because the language of your program has interpretters and compilers that work in a particular host environment, usually on top of an operating system.

It's all very environmental, programming;  behind the curtain, hacks upon hacks to make programs and environments compatible.  

Javascript programs run inside every web page, inside every browser, on any device which has one.  

On billions of devices, across all operating systems.

Node.js created an environment for running javascript outside of the browser as well.

This allowed for many new kinds of applications to be written in Javascript, applications which use systems and resources not available inside the safe, sandboxed environment of the web browser.

Node.js was a very clever hack, and has become a invaluable tool for web developers.

Node.js performs very well for what it was intended, which is writing web server applications, aka the back-end.

Node.js also performs well enough for many things it was never intended, because it made writing myriad various programs much less brutal.

This is entirely due to a large commnity of open source programmers, chiseling away at complicated system designs.

These designs and practices became the conventions of Node.js and its modules; and it influenced code writing for front-end apps.

Node.js has set the bar for community backed open source project development, as much as it sets a bar for high performance web apps.

Perhaps best of all, Node.js allows the intrepid hacker to create full stack, web applications with a single language:  javascript.

# Events

EVENTS are an important concept for the javascript and Node.js programmer, as well as designers of interfaces, or systems with sesnors.

What is an event?  Unlike some programming concepts, an event here is exactly what you should expect.

An event is when something happens.  

Javascript is the language of the browser, and that includes user interactions--events.

Therefor Javascript has always been event oriented.

Almost everything is an event.

A click, a key press, a swipe motion, are events.

A connection, an update, an interval, are events.

Some events can be broken down into several events.

A button is pressed, is held, and then is released.

A conncection is opened, is upgraded, and then is closed.

You may have different directives for each event, or one for all.

Many programmers failed to realize this nature of javasctipt, because they write most of their code in another "back end" language, which did not emphesize events.

The result are several confusing paradigms for wriring javasctipt programs, such as Model-View-Controller, or MVC.

With Node.js, events are fundamental, the basis for all higher order constructs, most importantly STREAMS.

A stream takes a pattern of events, and creates a flow out them, and allows you to program in the context of that flow.

More on streams in another discussion.

So, how do you write a program that anticipates various events, and then does something with the potentially unknown consequences of these events, such as an error, or the receipt of arbitrary data?

There is only one answer.

You must write functions that listen for various events, and you must write functions that handle the result of these events, if and when they occur.

The first kind is a "listener".

The second is a CALLBACK.

# Callbacks

A CALLBACK is simply a function--no different than any other function--which is called upon an event.

Most confusion about javascript callbacks stems from confusion and lazioness about javascipt functional syntax.

Consider the following:

```js
event.on('update', function(data){
  console.log(data)
})
```
To the uninitiated, this may look like a pinata of inscruotable syntax; and hlaf of it comprises the callback.

There, a function is being called, which takes two arguments.  One argument is the string, 'update'.  The next argument is a function.  This is confusing because that function is written out within the parenthesis of the function being called.

Look at another way to write the same thing:
```js
// I literally cut and copied everything after the = from the previous example
var callback_Function = function(data){
  console.log(data)
}

event.on('update', callback_Function)
```

Here, you can see that the callback is a basic function, and event.on is a function being called with two arguments, one of them a function.

When an 'update' event happens, call the supplied function, in this case 'callback_Function', which was reference above.

It is very common in javascript to supply a function as an argument to another function, like in real life you might give directions "in the event" something occurs.

Node.js is built on top of events.  This is because there is often some time between the initiation of a sequence, and it the events which are produced; for instance when you fetch data from a far away server, and wait for the response.

so much for events and callbacks.





