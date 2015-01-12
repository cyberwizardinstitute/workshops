# Node.js

A computer program can run in many hosts.

Javascript programs run inside every browser tab.

Programs run on small devices, smart devices, across various operating systems.

This is possible because the language of your program has interpretters and compilers that work in a particular host environment.

It's very environmental.

Node.js creates an environment for running javascript.  

This allowed for many new kinds of applications to be written in Javascript, which previously worked only in the browser.

Node.js was a very clever hack, and has become a invaluable tool for web developers.

Node.js performs very well for what it was intended.  Node.js was intended for writing web server applications, the back-end.

Node.js also performs well enough for many things it was never intended, because it made writing myriad various programs much less painful.

This is entirely due to a large commnity of open source programmers, slowly chiseling at good forms, styles, and practices.

Many of these would be codified into Node.js, and from there influence code writing for front-end apps.  

And there is no doubt Node.js has set the bar for community backed open source development, as much as it sets a bar for high performance web apps.

Perhaps best of all, Node.js allows the intrepid hacker to create full stack, web applications with a single language:  javascript.

# Events

EVENTS are an important concept for the javascript and Node.js programmer, as well as designers of interfaces, or machines with sesnors.

What is an event?  Unlike many programming concepts, an event is exactly what you should expect.

An event is when something happens.  

Javascript is the language of the browser, and that includes user interactions--events.

Therefor Javascript has always been event oriented.

Node.js took this evented straight to the core, creating an event driven architecture, which turned out to be a brilliant idea.

Almost everything is an event.

A click, a key press, a scroll motion, are events.

A connection, an update, an interval, are events.

Some events can be broken down into several events.

A button is pressed, is held, is released.

A conncection is opened, is upgraded, is closed.

Many programmers failed to realize this nature of javasctipt, because they wrote most of their code in another language, which did not emphesize events.

The result are many confusing paradigms for wriring javasctipt programs, such as Model-View-Controller, or MVC.

With Node.js, events are fundamental, the basis for all higher order constructs, most importantly STREAMS.

A stream takes a pattern of events, and creates a flow out them.

But how do you write a program that anticipates various events, and then does something with the potentially unknown consequences of these events, such as an error, or the receipt of arbitrary data?

There is only one answer.

You must write functions that listen for verious, specified events, and you must write functions that handle the result of the events, if and when they occur.

The first kind is a "listener".

The second is a CALLBACK.

# Callbacks

A CALLBACK is simply a function, no different than any other function.  

All confusion about calbacks stem from confusion, or laziness, about javascipt functional syntax.









