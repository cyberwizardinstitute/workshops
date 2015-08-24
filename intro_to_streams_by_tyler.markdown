#Intro To Using Streams

* What is a stream?

* Why use streams?

* How do I use streams?
---
#What is a stream?

* The idea that programs that modify data should have a standard interface for communicating with each other.

* Data is passed as it is retrieved.
---
#Why use streams?

* Your program can use and be used by other programs, with little extra work.

* Encourages design of small programs that do one thing well, which has proven itself to be a dependable way to compose large systems.

* Seperation of concerns which helps reduce overall complexity of the code.

* Streams are used in many different languages and situations, and familiarity with the concept will allow you to flow easily between the details of the situation at hand.
---
#What is a stream?

Visualizing streams

* The garden hose:

	> We should have some ways of connecting programs like garden hose--screw in another segment when it becomes necessary to massage data in another way.
- Doug Mcilroy, Oct. 11, 1964 (thanks substack!)

* Water analogies ("back pressure", "overflow", etc.)
---
#How do I use streams? Experiment 1

You already know how! Streams have long been implemented in your operating system. Pull up a terminal and try this experiment.

```bash
ls | grep x
```
where x is a part of a file name in your current directory.
---
#How do I use streams? Experiment 1

What just happened? First, some definitions:
---
#How do I use streams? Experiment 1

What just happened? First, some definitions:

The utility `ls` is a program that lists files in the current directory.
---
#How do I use streams? Experiment 1

What just happened? First, some definitions:

The utility `ls` is a program that lists files in the current directory.

The utility `grep` finds files that match the `pattern` of the text to the right of the word `grep`.
---
#How do I use streams? Experiment 1

What just happened? First, some definitions:

The utility `ls` is a program that lists files in the current directory.

The utility `grep` finds files that match the `pattern` of the text to the right of the word `grep`.

`|`, pronounced "pipe", will take the *output* of the program on the left and use it as the *input* of the program on the right.
---
#How do I use streams? Experiment 1

What just happened?

`ls` outputs -> 
	which `|` takes and puts into the input of ->
		 `grep` outputs -> 
			text to your screen.
---
#How do I use streams? Experiment 1

`ls` and `grep` were solely designed to manipulate data.

`|` is designed to communicate that data between programs that know how to deal with `streams`. How does it do this? Here be dragons.
---
#How do I use streams? Experiment 2

To demonstrate the idea of `blocking` and how streams actually communicate to each other, lets try another experiment.
---
#How do I use streams? Experiment 2

First, create a "named pipe" using the utility `mkfifo`.

```bash
mkfifo mypipe
```

`ls` to see that there is a file called "mypipe" in your current directory.

`ls -l` gives you a bit more detail about the type of file "mypipe" is. Notice the "p", which notates that the file is a "pipe", in front of the typical file permissions.
---
#How do I use streams? Experiment 2

Now instead of using `|` to magically communicate between programs, we now have a sort of file representation of a pipe that we can "look at".

```bash
ls -l > mypipe
```
in one terminal window and

```bash
cat < mypipe
```
in another terminal window.
---
#How do I use streams? Experiment 2

The output of the command run on the first terminal shows up on the second, after you run the second command. It seems we have "slowed down" the process of `|`.

The order in which the run the commands doesn't matter. What matters is that one program is "writing" to the pipe, and the other is "reading." Both the writing and reading needs to happen in order for the pipe to finish `blocking` the control being returned to the user.
---
#What is a stream?

* An abstract definition with specific implementations that helps programs talk to each other!

And, in Node,

* An asynchronous, non-blocking implementation of unix-style `|`
---
#How do I use streams? Node

Node has its own `|` command, called pipe(). 

Lets see how pipe() works.
---
#How do I use streams? Node experiment 1

Borrowing from substacks `stream-adventure` module on npm, lets write some JavaScript that creates a very simple stream that takes input from the user and outputs it to the console, similar to our first pipe experiment.
---
#How do I use streams? Node experiment 1

First, create a JavaScript file:

```bash
touch in-out.js
```
---
#How do I use streams? Node experiment 1

Now, lets edit it to create a simple stream using Node's pipe().

Add this to "in-out.js":

```JavaScript
process.stdin.pipe(process.stdout);
```
---
#How do I use streams? Node experiment 1

Run "in-out.js" with Node:

```bash
node in-out.js
```

Notice that everytime you type something and press enter, the program responds by typing that same thing back to you!
---
#How do I use streams? Node experiment 1

In our very first experiment, this happened:

`ls` outputs -> 
	which `|` takes and puts into the input of ->
		 `grep` outputs -> 
			text to your screen.

And in this experiment, this is happening:

stdin outputs ->
	which .pipe() takes and puts into the input of ->
		stdout outputs ->
			text to your screen.

(stdin and stdout are defined abstractly, but stand for "standard input / output" which, in this example, means keyboard input and terminal screen text output)
---
#How do I use streams? Node experiment 1

Notice how similar these two examples were!

Node has some differences then the unix `|`, most of which are sweet bonuses that you will come to appreciate. 
---
#How do I use streams? Node

Oh, so I can just pipe anything and it will magically be "picked up"?
---
#How do I use streams? Node

Oh, so I can just pipe anything and it will magically be "picked up"?

No, but almost.
---
#How do I use streams? Node

pipe() is just a function that Node provides that takes a "readable stream" as its input and channels the output to a "writable stream."

There are five types of Node `stream`s: readable, writeable, transform, duplex and "classic." Each has its own purpose, though all of them can be pipe()'d. 
---
#How do I use streams? Node
 
Notice that in our previous example:

```JavaScript
process.stdin.pipe(process.stdout);
```

`process.stdin` is a readable stream and process.stdout is a writeable stream, so pipe() knows what to do with them.

When you want your data to be piped, you will have to "streamify" your data. 
---
#How do I use streams? Node

From a high level, "all you will need to do" is create the correct type of stream you want your data to be represented by and follow its conventions for using it.

Of course, the details can be a bit messier then that. Details for a future talk!
---
# Continued learning and citations.

For an excellent beginner to pro Node-style streams manual, see substack's [stream-handbook](https://github.com/substack/stream-handbook)

For more on the first two experiments, see this article on the [Linux Journal](http://www.linuxjournal.com/article/2156) which goes into much greater detail named pipes in unix.

For some great practice with creating and using pipes in Node (and where I got the idea for the first Node experiment), checkout the [stream-adventures](https://www.npmjs.com/package/stream-adventure) module by substack.
