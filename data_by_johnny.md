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

Objects and arrays are useful containers for data.

They may contain any kind of data, including objects and arrays.

Objects and arrays, they store data differently, analogous to books and scrolls.

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

var data = [0, "one", {'two': 2}, function(){return Math.sqrt(9)}]

// data is an array, which contains four items
// a number
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

__It is easy to confuse code syntax, with the data that the code represents.__

This is foolish.

It is foolish because you know it is foolish, for now you have been told what it is.

For instance: A string does not contain the quotes surrounding it.

Objects are an organization of data, yet the object and its properties can be expressed through several variations of syntax.

Supposedly, this is helpful.

Javascripts make moderate use of symbol in its syntax.

Notably, the curly braces: { } 

As ever, curcly braces simply indicate that what happens between them is important and relative.

Objects can be declared using curly braces.

As you will see, the contexts of functions, loops, and iterators, all go between curly braces.

In all there are less than a dozen sytnaxes to understand.  

So you see how foolish it would be to let computer code syntax separate from you understaning of data?

Syntax is but a formality, and computers are totally formal.

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
