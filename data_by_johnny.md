___Data and Data Types in Javascript___

Writing programs is the manipulation of data.

You receieve, save, change, and send, data.

You post, get, set, and update, data.

Your friend, pics, and posts are all data.

You listen for events, which alert you of some data.

All is data.

Therefor, an understanding of data is necessary.  

Proceed.

Javascript, like most programming languages, offers many types of data, for you to use.

Surely you understand that the phrase "thx :)" is fundamentally different to the number 3.141.

One is a number, the other is string of letters, or simply: strings.

```js
var pieceOfPi = 3.141
var stringOfText = 'thx :)'
```

Usually, you want to do something different with each kind of data.

The most common data types in Javascript are strings, numbers, objects, and arrays.

You already know what strings are, and numbers.  

Later you will discover unique properties for each.

Objects and Arrays are helpful containers for data.

They can contain any kind of data, including objects and arrays.

Which are useful containers for data, including objects and arrays.

:^)

Objects, and arrays, store data differently, analogous to books and scrolls.

Or a million other analogies.  Ask around.

Functions are also a type of data. 

Functions exist to perform some action, but the function itself is also data.

What are the programs you write, those functions and variables?  

Merely strings of text!

Data.

Note:  Comments are not data.  Comments are meta data.  Forget about it.

```js
// This is a single line comment, indicated by the two slashes
// The computer wouldn't understand this anyway

var data = [1, "two", {'three': 3}, function(){return Math.sqrt(16)}]

// data is an array, which contains four items
// the number 1
// a string,
// an object
// and a function

// data, push another entry into the bucket
data.push(data)

// now data has 5 entries, including itself
// no big deal

```
There are many ways to declare data.

There are shorthands, and there are ways to be clever.

Programming offers you endless ways to show that you are clever.

It is easy to confuse the syntax of a programming language, with the data types they represent.

This is a foolish, now that I have told it is foolish. 

For now you know, that it is is foolish to mistake syntax and code for the data itself.

For instance, a string does not contain the quotes surrounded it.

Javascripts makes somehwat heavy use of symbol in its syntax, especially the curly braces.

As ever, curcly braces simply indicate that what happens between them is important and relative.

Objects can be declared using curly braces.

As you will see, the context of functions, loops, and iterators, all go between curly braces.

In all there are less than a dozen sytnaxes to understand.  

So you see how foolish it would be to let computer code syntax separate from you understaning of data?

Syntax is a formality, and computers are totally formal.

Now, consider the following script.

```js
// I am the narrator

var robot = {name: "i"} 

// I have declared robot, and robot is an object.
// And the robots name has also been delcared.
// I will now declare that the robot has a motto.

robot.motto = 'Algorithms really get me going.'

// robot needs a way to express his motto

robot.speak = function(){
  console.log(robot.motto)
}

robot.showOff = function(){
  for(var eachProperty in robot){
    console.log(eachProperty)
  }
}

robot.showOff()
robot.speak()

// domo arrigato for your motto mr roboto
```
