# javascript

javascript is a programming language
you can use to program web pages
and command-line tools and servers

---

# install node

We'll be using node on the command-line to learn javascript.

Download and install node from:

https://nodejs.org

---

# write a program

Now let's make a program. Put this text into a file called robot.js:

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

`console.log(...)` is a function that prints its arguments to
stdout followed by a newline (`\n`) character

---

# recap: 'BEEP BOOP'

* `'BEEP BOOP'` is a string.
* `'BEEP BOOP'` is an argument to the `console.log()` function.

Note the single quotes on each side.

You can use double quotes too: `"BEEP BOOP"`

Sometimes an "argument" is called a "parameter".

---

# statements

In the previous program, we had a single statement.
You can have multiple statements, each on their own line:

``` js
console.log('Such')
console.log('wow.')
```

Now save this code to a file `suchwow.js` and run it with `node`:

```
$ node suchwow.js
Such
wow.
```

---

# statements

You might also see programs that use semicolons to separate
statements:

``` js
console.log('Such');
console.log('wow.');
```

Semicolons are optional. There are some cases where they are
necessary, but this is rare in practice.

Both including and omitting semicolons are popular code styles.

---

# variables

Another kind of statement is a variable declaration:

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

Strings like `'beep'` and numbers like `5` are values.

---

# operators

We used the `*` operator to multiply two numbers.

Here are some other operators you can try with numbers:

* `+` - add
* `-` - subtract
* `*` - multiply
* `/` - divide
* `%` - modulo (the remainder after division)

modulo is really handy when you need a value to "wrap around"

---

# assignment updates

You can change the value stored in a variable at any time by
assigning a new value.

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

There is a shorthand for running an operator and saving the
result back to a variable. Instead of `x = x + 10` we can do
`x += 10` instead:

``` js
var x = 5
x += 10
console.log(x)
```

Just take one of the arithmetic operators from earlier and add an
`=` at the end to do an update "in place":

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

---

---

---

# arrays

---

# 

---

# objects

We've already been using some objects:

* `process` is an object with a property `argv` that is an array.
* `console` is an object with a property `log` that is a function.

---

# functions



---

# builtins


---

# while loop

---

# for loop

---

# homework

Your homework is to get through the `javascripting` lesson on
nodeschool:

http://nodeschool.io/#javascripting

---

# links

http://jsforcats.com/

---

