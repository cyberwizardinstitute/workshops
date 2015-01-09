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

However you choose to indent,
be consistent!

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

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

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
# functions

You can think of functions as little factories.

---
# builtins


---
# while loop

---
# for loop

---
# the REPL

---
# homework

Your entirely optional homework is to get through the
`javascripting` lesson on nodeschool:

http://nodeschool.io/#javascripting
---
# links

http://jsforcats.com/
