___Data and Data Types in Javascript___

Writing programs is the manipulation of data.

You receieve, save, change, and send, data.

You post, set, get, and update, data.

Your friends, pics, and vids are all data.

You listen for events, which alert you of some data.

All is data.

Therefor, an understanding of data is necessary.  

Proceed.

Javascript, like most programming languages, offers many types of data for you to use.

Surely you understand that the phrase "thx :)" is fundamentally different to the number 3.141.

One is a number, the other is a string of grafitti, or simply: a string.

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

ENTER SYNTAX

There are many ways to declare data.

There are shorthands, and there are ways to be clever.

Programming offers you endless ways to be clever.

Declarations and instrctions, the stuff of programs, are written with syntax.

__When learning to code, it is easy to confuse code syntax with the data that the code represents.__

This is foolish.

For instance: A string does not contain the quotes surrounding it.  The quotes declare the string.

Objects are an organization of data, yet the object and its properties can be expressed through several variations of syntax.

```js
var data = {}
data.type = 'I am an Object'
data['gender'] = 'kewl'
data['one'] = 1
if(data.one == 1){
  console.log(data.gender)
}
```

Supposedly, this is helpful.

Javascripts make moderate use of symbols in its syntax.

Notably, the curly braces: { } 

As ever, curly braces simply indicate that what happens between them is important and relative.

Objects can be declared using curly braces.

As you will see, the contexts of functions, loops, and iterators, all go between curly braces.

In all there are less than a dozen sytnaxes to understand.  

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
