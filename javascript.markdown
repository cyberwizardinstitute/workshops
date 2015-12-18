# javascript

javascript is a programming language
you can use to program web pages
and command-line tools and servers

---
# install node

We'll be using node on the command-line
to learn javascript.

Download and install node from:

https://nodejs.org

---
# write a program

Now let's make a program. Put this text
into a file called robot.js:

``` js
console.log('BEEP BOOP')
```
---
# run a program

Now use `node` to run your program:

```
$ node robot.js
BEEP BOOP
```
---
# recap: console.log

`console.log(...)` is a function that
prints its arguments to stdout followed
by a newline (`\n`) character
---
# recap: 'BEEP BOOP'

* `'BEEP BOOP'` is a string.
* `'BEEP BOOP'` is an argument
  to the `console.log()` function.

Note the single quotes on each side.

You can use double quotes too: `"BEEP BOOP"`

Sometimes an "argument" is called a "parameter".

---
# statements

In the previous program, we had a single
statement. You can have multiple statements,
each on their own line:

``` js
console.log('Such')
console.log('wow.')
```

Now save this code to a file `suchwow.js`
and run it with `node`:

```
$ node suchwow.js
Such
wow.
```
---
# statements

You might also see programs that use
semicolons to separate statements:

``` js
console.log('Such');
console.log('wow.');
```

Semicolons are optional. There are some
cases where they are necessary, but this
is rare in practice. 

Both including and omitting semicolons
are popular code styles.

---
# variables

Another kind of statement is a variable
declaration:

``` js
var x = 5
var y = 111
console.log(x * y)

var a = 'beep'
var b = 'boop'
console.log(a + b)
```

which prints:

```
$ node vars.js
555
beepboop
```
---
# variables

Variables are containers that can hold values.

Strings like `'beep'` and numbers like `5`
are values.

---
# operators

We used the `*` operator to multiply
two numbers.

Here are some other operators you can try with
numbers:

* `+` - add
* `-` - subtract
* `*` - multiply
* `/` - divide
* `%` - modulo (the remainder after division)

modulo is really handy when you need a value
to "wrap around"
---
# the REPL

There is another way of evaluating expressions as you type
them in: the REPL.

The REPL is like calculator mode.

Just type `node` to get into a REPL.

Then type an expression and you will see its result:

```
> 1+2
3
```

Type ctrl+d to exit the REPL.

---
# assignment updates

You can change the value stored in a variable
at any time by assigning a new value.

``` js
var x = 5;
x = x + 10;
console.log(x);
```

which prints `15`:

```
$ node x.js
15
```
---
# assignment operators

There is a shorthand for running an operator
and saving the result back to a variable.
Instead of `x = x + 10` we can do
`x += 10` instead:

``` js
var x = 5
x += 10
console.log(x)
```

Just take one of the arithmetic operators
from earlier and add an `=` at the end to
do an update "in place":

* `+=` - add in place
* `-=` - subtract in place
* `*=` - multiply in place
* `/=` - divide in place
* `%=` - modulo in place

---
# increment, decrement

There are two other operators for convenience:

* `x++` - increment x by 1 in place
Same as: `x += 1` or `x = x + 1`

* `x--` - decrement x by 1 in place
Same as: `x += 1` or `x = x + 1`

You might also see `++x` and `--x` which
are similar to `x++` and `x--` but have
slightly different uses. More on them later.

---
# booleans

`true` or `false`
---
# comparison operators

The comparison operators all return a boolean:

* `===` - strict equality
* `!==` - not strict equality
* `<` - less than
* `<=` - less than or equal to
* `>` - greater than
* `>=` - greater than or equal to

You might also see coercive equality operators:

* `==` - coercive equality
* `!=` - not coercive equality

but you should avoid these operators until
learning about type coercion.

---
# comparison operators: example

```
var x = 5;
console.log(x < 6);
console.log(x === 2);
console.log(x !== 5);
console.log(x >= 5);
```

output:

```
$ node cmp.js
true
false
false
true
```
---
# logical operators

* `&&` - AND
* `||` - OR
* `!` - NOT (the opposite truth value)

`!` is a "unary" operator like `++` and `--`
because it binds to a single value.

`&&` and `||` are "binary" operators
because they bind to two values:
one on the left and one on the right.
---
# logical operators: example

``` js
var x = true
var y = false
console.log(x && y) // false
console.log(x || y) // true
console.log(!(x || y)) // false
console.log(!y) // true
```

outputs:

```
$ node bool.js
false
true
false
true
```
---
# comments

By the way, `//` is the comment operator.
Anything that follows `//` on a line is
ignored by the computer.

You can even have whole blocks of comments
by putting text between `/*` and `*/`:

``` js
// this is a comment
console.log('beep boop'); // wow
/*
  and this is a comment that
  spans multiple
  lines
*/
```
---
# if

You can make a block of code execute when
a conditional expression is true using an
`if` statement.

The conditional expression is the expression
surrounded by parenethesis following the word
`if`:

``` js
var x = 5;
if (x < 10) {
    console.log('wow');
}
```

this program will print:

```
$ node if.js
wow
```
---
but if we change the program to be:

``` js
var x = 11;
if (x < 10) {
    console.log('wow');
}
```

then it won't print anything since the
conditional expression evaluated to false:

```
$ node if.js
```
---
# else

You can put an `else` statement after an
`if` statement to tell the computer what
to do if the `if` conditional expression
wasn't true:

``` js
var x = 11;
if (x < 10) {
    console.log('wow');
}
else {
    console.log('cool');
}
```

will print:

```
$ node else.js
cool
```
---
# else if

Use `else if` to chain together fall-through cases:

``` js
var x = 22;
if (x < 10) {
    console.log('wow');
}
else if (x === 22) {
    console.log('twotwo');
}
else {
    console.log('cool');
}
```
---
# nesting conditionals

``` js
var x = 5;
if (x < 5) {
    console.log('lt');
}
else {
    var y = x * 333 + 22;
    if (y > 1000) {
        console.log('y > 1000!!!');
    }
    else {
        console.log('y otherwise...');
    }
}
```
---
# indentation

Now is a good time to talk about indentation.

First, you'll need to pick an amount of indentation to use
for each level.

4 spaces, 2 spaces, and tabs are all common amounts of
indentation.
---
# 4 spaces

```
if (true) {
    if (true) {
        if (true) {
            // ...
        }
    }
}
```
---
# 2 spaces

```
if (true) {
  if (true) {
    if (true) {
      // ...
    }
  }
}
```
---
# first rule of indentation

However you choose to indent, be consistent!

Your code will be much easier for others and yourself to
read.

Remember to line up closing braces at the same level as
opening statements!

---
# arrays

Arrays are ordered lists of values.
You can make an array with square brackets:

``` js
var arr = [ 3, 2, 5 ]
console.log(arr)
```
---
# arrays: indexing

To get at individual elements, use square brackets and an
integer index starting from zero:

``` js
var arr = [ 1, 4, 9 ];
console.log('first:', arr[0]);
console.log('second:', arr[1]);
console.log('third:', arr[2]);
```

outputs:

```
first: 1
second: 4
third: 9
```
---
# arrays: indexing with variables

You can use variables for indexing too, not just constant
integers:

``` js
var arr = [ 1, 4, 9 ];
var n = 2;
console.log(arr[n]);
```

prints:

```
9
```

Any expression inside the square brackets will work.
---
# arrays: length

To get the length of an array, just use `.length`:

``` js
var arr = [ 1, 4, 9 ];
console.log(arr.length);
```

which is the same as:

``` js
console.log([ 1, 4, 9 ].length);
```
---
# arrays: push

To add an item to the end of an array,
use `arr.push()`:

``` js
var arr = [ 8, 1 ];
arr.push(5);
console.log(arr);
```

prints:

```
[ 8, 1, 5 ]
```
---
`arr.push()` is an example of a builtin
method, a function you can call that has
been defined by the language itself.

Later we'll see how to inspect what
methods are available.

---
# arrays: pop

You can also remove an element from the
end of an array with `arr.pop()`:

``` js
var xs = [ 10, 6, 3 ];
console.log('popped:', xs.pop());
console.log('now xs=', xs);
```

prints:

```
popped: 3
now xs= [ 10, 6 ]
```
---
# arrays: shift

Remove an element from the beginning of an array with shift:

``` js
var xs = [ 1, 2, 3 ];
console.log('shifted:', xs.shift());
console.log('xs=', xs);
```
---
# arrays: slice

Return a new array between a start index and an end index.
If you don't provide an end index, the array length is used.

``` js
var xs = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ];
console.log(xs.slice(2, 3));
console.log(xs.slice(2));
```

prints:

```
[ 'c', 'd', 'e' ]
[ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]
```
---

# arrays: more!

To see everything you can do with arrays, visit:

http://mzl.la/14BlbiN

---
# process.argv

So far, all of our examples have used hard-coded variables
defined in the source code itself.

In node you can read arguments given from the command line
using the `process.argv` array.
---
``` js
console.log(process.argv);
```

will print:

```
$ node args.js one two three
[ 'node',
  '/home/substack/projects/workshops/args.js',
  'one',
  'two',
  'three' ]
```

The first 2 arguments aren't too useful, just `node` and the
full path to our script, but the remaining arguments are
everything that follows `args.js` on the command-line.

---
To get only the useful arguments, we can use `.slice(2)`:

``` js
var args = process.argv.slice(2);
console.log(args);
```

now we can do:

```
$ node args.js beep boop xyz
[ 'beep', 'boop', 'xyz' ]
```
---
or to get at a single argument, you could use square
brackets:

``` js
var x = Number(process.argv[2]);
var y = Number(process.argv[3]);
console.log(x + y);
```

prints:

```
$ node add.js 3 5
8
```

Note that every element in `process.argv` is a string, so we
can use the built-in `Number` function to convert from a
string to a number.

---
# objects

We've already been using some objects:

* `process` is an object with a property
`argv` that is an array.
* `console` is an object with a property
`log` that is a function.

---
# objects

Objects map keys to values.

Like how a phone book maps names to telephone numbers:

```
key                     value
----------------------|---------
Benjamin Franklin     | 123-4142
Alexander Graham Bell | 214-6821
Marie Curie           | 615-2904
```
---
# objects

To create the same structure in javascript we could do:

``` js
var phonebook = {
    'Benjamin Franklin': '123-4142',
    'Alexander Graham Bell': '214-6821',
    'Marie Curie': '615-2904'
};
```
---
# objects

If a key is only letters, numbers, underscores, and dollar
signs (but doesn't start with a number), you can leave off
the quotes:

``` js
var obj = {
    abc: 555,
    def: 123,
    x1: 1000,
    y1: 5000,
    $x: 4444,
    "x y z": 12 // otherwise you'll need to use quotes
}
```

This way of building objects is sometimes called
"object literal" syntax.

---
# objects: pick out a single record

Once an object exists, you can reference an individual value
by its key using a `.` followed by the key name. Here we use
`obj.y` to get at the `y` key:

``` js
var obj = { x: 7, y: 8, z: 9 };
console.log(obj.y);
```

will print:

```
8
```
---
# objects: create a new record

Reference a key with a `.` followed by a key then use an
equal sign to create a new value under that key:

``` js
var obj = { a: 3, b: 4 };
obj.c = 5;
console.log(obj);
```

prints:

```
{ a: 3, b: 4, c: 5 }
```
---
# objects: update an existing record

The same `obj.c = 5` syntax works even if a key already
exists:

``` js
var obj = { x: 500, y: 200 };
obj.y = 300;
console.log(obj);
```

prints:

```
{ x: 500, y: 300 }
```
---
# objects: assignment operators

All of the assignment operators work for object keys just
like for variables!

``` js
var obj = { x: 500, y: 200 };
obj.y += 1000;
obj.x *= 3;
console.log(obj);
```

prints:

```
{ x: 1500, y: 1200 }
```
---
# objects: square brackets

Using the `.` operator to access keys is handy, but what
about special characters in keys?

We can use square brackets with a string to reference
keys with special characters:

```
var obj = { 'a b c': 123, 'x#y*z': 456 };
console.log(obj['a b c']);
```

prints:

```
123
```
---
# objects: square brackets

We can also use square brackets to reference dynamic keys.
For example, if we want to load a key from a variable:

``` js
var key = 'def';
var obj = {
    abc: 555,
    def: 333,
    xyz: 222
};
console.log(obj[key]);
```

prints:

```
333
```

Everything we can do with dot (updates, assignment
operators, etc) works with square bracket notation.

---
# objects: delete

To delete items from an object, use the `delete` keyword:

``` js
var obj = { a: 4, b: 5, d: 700, x: 6 };
delete obj.d;
console.log(obj);
```

prints:

```
{ a: 4, b: 5, x: 6 }
```

If you try to delete a key that doesn't exist, nothing
happens.

---
# Object.keys

Use `Object.keys()` to get an array of all the keys that an
object has:

``` js
var obj = { x: 5, y: 6, abc: 3 };
console.log(Object.keys(obj));
```

prints:

```
[ 'x', 'y', 'abc' ]
```
---
# nested data structures

Now that we've seen objects and arrays, it's worth noting
that you can nest these data structures as much as you
like.

To reference the nested properties, you can stack dot and
square bracket notation to read keys and array indexes:

``` js
var root = {
    a: 3,
    b: [ { x: 4, y: 6 }, { d: 1, e: 2 } ],
    c: { q: [ 7, 8, 9 ], r: [ 1, 2, 3 ]
};
console.log(root.a); // 3
console.log(root.b[1].e); // 2
console.log(root.c.q); // [ 7, 8, 9 ]
console.log(root.c.r[2]); // 3
```
---
# while loop

Use a while loop to repeat a command while a conditional is
true:

``` js
var x = 4;
while (x > 0) {
    console.log(x);
    x --;
}
```

prints:

```
4
3
2
1
```
---
# while loop: break

This program will never stop!

``` js
while (true) {
    console.log('wow');
}
```

But inside the loop we can use `break` to quit the loop:

```
var x = 4;
while (true) {
    console.log(x);
    x --;
    if (x <= 0) break;
}
```

prints:

```
4
3
2
1
```
---
# for loop

For loops are like while loops but provide a place for
initialization and an expression to advance the loop.

```
for (var i = 0; i < 4; i++) {
    console.log(i);
}
```

prints:

```
0
1
2
3
```
---
Or you can jump by tens starting from 50:

``` js
for (var i = 50; i < 100; i += 10) {
    console.log(i);
}
```

prints:

```
50
60
70
80
90
```
---
# looping over an array

A very common use-case for `for` loops is to loop over each
element in an array:

``` js
var xs = [ 'a', 'b', 'c', 'd' ];
for (var i = 0; i < xs.length; i++) {
    console.log(xs[i]);
}
```

prints:

```
a
b
c
d
```
---
# functions

You can think of functions as little factories that take
input as arguments and return output.

``` js
function add (x, y) {
    return x + y;
}
console.log(add(3, 4));
```

prints:

```
7
```
---
# function hoisting

You can define a function lower down in a file than where
you use it too:

``` js
console.log(add(3, 4));

function add (x, y) {
    return x + y;
}
```
---
# function scope

Any variables declared inside a function are only accessible
inside of that function.

``` js
function fff (a, b) {
    var c = 500;
    return a + b + c;
}

console.log(fff(3,4));
console.log(c); // will raise an error
```
---
# functions as values

Functions can appear in any expression. You can assign them
to variables:

``` js
var add = function (a, b) {
    return a + b;
};
console.log(add(5, 2)); // 7
```

When you declare functions in expressions you don't need to
give them a name.

---
# higher-order functions

Because functions are ordinary values that can appear in
expressions, you can pass a function as an argument to
another function.

``` js
function binary (a, b, operator) {
    return operator(a, b);
}
function add (a, b) {
    return a + b;
}
console.log(binary(3, 4, add));
```
---
# higher-order functions: inline version

We could write the previous example with the `add` function
declared inline:

``` js
function binary (a, b, operator) {
    return operator(a, b);
}
console.log(binary(3, 4, function (a, b) {
    return a + b;
}));
```
---
# higher-order functions: everything inline why not

We could even define the binary function inline, although
this is not very readable:

``` js
console.log(
    function (a, b, operator) {
        return operator(a, b);
    }(3, 4, function (a, b) {
        return a + b;
    })
);
```
---
# higher-order functions: Array.prototype.map

There are some built-in functions that accept functions as
arguments. `.map()` takes a function that transforms the
contents of an array, creating a new array:

``` js
var first = [ 3, 4, 5 ];
var second = first.map(plusFifty);
console.log(second);

function plusFifty (x) { return x + 50 }
```

prints:

```
[ 53, 54, 55 ]
```
---
# higher-order functions: Array.prototype.forEach

You can also use `forEach` to loop over items in an array
without having to whip up a `for` loop:

``` js
[ 7, 8, 9 ].forEach(function (x) {
    console.log(x);
});
```
---
# returning a function

Functions can return any javascript value: numbers, strings,
arrays, objects, even other functions!

When you return a function from another function, the
variables you declare persist in the inner function.

``` js
function counter () {
    var times = 0;
    return function () {
        times ++;
        return times;
    };
}

var c = counter(); // c is a function
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3
```
---
# returning an object with functions

Another common pattern is to return an object with functions
as values:

```js
function Num (value) {
    return {
        add: function (x) {
            value += x;
            return value;
        },
        multiply: function (x) {
            value *= x;
            return value;
        };
    };
}

var n = Num(100);
console.log(n.add(5)); // 105
console.log(n.multiply(3)); // 315
```

---
# asynchrony

Often, javascript APIs make use of callbacks:

``` js
var fs = require('fs');
fs.readFile('foo.txt', function (err, src0) {
  fs.readFile('bar.txt', function (err, src1) {
    console.log(src0.length + src1.length);
  });
});
```

---
# callback order of operations

``` js
console.log(1);
var fs = require('fs');
fs.readFile('foo.txt', function (err, src0) {
  console.log(3);
  fs.readFile('bar.txt', function (err, src1) {
    console.log(5);
    console.log(src0.length + src1.length);
  });
  console.log(4);
});
console.log(2);
```

prints: 1, 2, 3, 4, 5

---
# the event loop

Only after the current block of code has
"run to completion" do callbacks scheduled
on the event loop execute.

---
# constructors

Another way to create objects with properties is to use a
constructor. The previous example is pretty much the same
as: 

``` js
function Num (value) {
    this.value = value;
}

Num.prototype.add = function (x) {
    this.value += x;
    return this.value;
}

Num.prototype.multiply = function (x) {
    this.value *= x;
    return this.value;
}

var n = new Num(100);
console.log(n.add(5)); // 105
console.log(n.multiply(3)); // 315
```

`n` is an "instance" of Num. You can make as many instances
as you like and they will all have separate values.

---
# constructors: new trick

If you use a constructor, don't forget to use `new`!

Here is one weird trick discovered by a bus driver for
making constructor instances without `new`:

``` js
function Num (value) {
    if (!(this instanceof Num)) return new Num(value);
    this.value = value;
}

Num.prototype.add = function (x) {
    this.value += x;
    return this.value;
}

Num.prototype.multiply = function (x) {
    this.value *= x;
    return this.value;
}

var n = Num(100); // you don't need to remember `new` now
console.log(n.add(5)); // 105
console.log(n.multiply(3)); // 315
```
---
# builtins

The javascript language has many features built into the
basic types.

For example, did you know that for any string you can do:

``` js
console.log('beep boop'.toUpperCase());
```

which prints:

```
BEEP BOOP
```
---
# builtin prototype methods

* [strings](http://mzl.la/1xOnD0H)
* [arrays](http://mzl.la/14BlbiN)
* [numbers](http://mzl.la/1Ds51Xe)
* [functions](http://mzl.la/1w5e33P)
* [dates](http://mzl.la/1APfcTB)

---
# builtin global objects

[complete list](http://mzl.la/1APf72e)

---
# builtin type conversions

* string to number: `Number('123') === 123`
* number to string: `(123).toString() === '123'`
* number to binary string: `(123).toString(2) === '1111011'
* number to hex string: `(123).toString(16) === '7b'
* binary string to number: `parseInt('1111011',2) === 123`
* hex string to number: `parseInt('7b',16) === 123`

---
# JSON: stringify

turn (most) any object into a string:

``` js
var obj = [ 1, 2, 'xy', { z: 3 } ];
var str = JSON.stringify(obj);
console.log(str);
```

prints:

```
[1,2,"xy",{"z":3}]
```
---
# JSON: parse

turn stringified json back into an object:

``` js
var obj = JSON.parse('[1,2,"xy",{"z":3}]');
console.log(obj);
```

prints:

```
[ 1, 2, 'xy', { z: 3 } ]
```
---
# String: split

Split a string into an array of strings at a delimiter with
`.split()`:

``` js
var str = 'abc:def:h:ij:klmnop'
console.log(str.split(':'));
```

prints:

```
[ 'abc', 'def', 'h', 'ij', 'klmnop' ]
```
---
# builtin: Math

* `Math.pow(base, exp)` - exponentiation
* `Math.log(n)` - natural log (base e)
* `Math.exp(n)` - e raised to the power n
* `Math.PI`
* `Math.E`
* `Math.sin(x)` - sine of x in radians
* `Math.cos(x)` - cosine of x in radians

log base 2 of 255 = `Math.log(255) / Math.log(2)`

[read more](http://mzl.la/148HnQj)

---
# builtin: Date

``` js
// create a new date instance (now)
var d1 = new Date

// date from milliseconds
var d2 = new Date(1420821045321)

// date from a string
var d3 = new Date('2015-01-04 15:00')

// number of milliseconds since 1970-01-01:
var now = Date.now()
```
---
# builtin: Date methods

``` js
var d = new Date
console.log(d.toString())
// 'Fri Jan 09 2015 10:18:26 GMT-0800 (PST)'

console.log(d.toISOString())
// '2015-01-09T18:18:26.194Z'

console.log(d.valueOf())
// 1420827506194

console.log([ d.getFullYear(), d.getMonth(), d.getDay() ])
// [ 2015, 0, 5 ]

console.log([ d.getHours(), d.getMinutes(), d.getSeconds() ])
// [ 10, 18, 26 ]
```
---
# homework

Your entirely optional homework is to get through the
`javascripting` lesson on nodeschool:

http://nodeschool.io/#javascripting

---
# links

- [jsforcats.com](http://jsforcats.com/)
- [learn more about function hoisting here](https://gist.github.com/maxogden/4bed247d9852de93c94c)
