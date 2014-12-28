
# unix

UNIX was an operating system developed at AT&T Bell Labs
in the 1960s through the 1980s. 

https://www.youtube.com/watch?v=tc4ROCJYbm0

Linux, MacOSX, and Android are all based on ideas and
specifications created by UNIX.

https://en.wikipedia.org/wiki/File:Unix_history-simple.svg

---

# time-sharing

UNIX was originally built for large mainframe computers
that many people would use at the same time.

---

# teleprinter

The first interfaces for these mainframe computers were
called teleprinters.

These machines had a keyboard to send commands and data to
the computer and a feed of paper to print the output of
programs.

---

# terminals

Later, monochrome monitors replaced teleprinters.
These machines were called dumb terminals because they
didn't have any processing power of their own.

Terminals might be connected to a mainframe by dedicated
cables or over the telephone network.

---

# micro-computers

Later, micro-computers replaced dumb terminals.
On a micro-computer, programs run on the micro-computer's
central processor instead of running on a remote shared
mainframe.

---

# teletype legacy

Nowadays, we don't use teleprinters or mainframes.

However, many of the ideas from this era are still relevant.

---

# teletype legacy: standard input and output

Every program on a UNIX system can read input from the
standard input device (stdin) and write to standard output
(stdout).

By default, stdin comes from the keyboard and stdout gets
"printed" to the graphical display.

---

# organization

The UNIX operating system is just a collection of programs,
each with a special role:

* kernel
* shell
* utilities

---

# kernel

The kernel's job is to mediate access to the computer's
resources among all the user programs that are running. 

* I/O to computer hardware
* CPU
* memory

User programs can request resources from the kernel by
making a system call (syscall). Many syscalls are
standardized across different UNIX implementations.
This makes UNIX programs relatively portable.

---

# kernel: I/O access

Computer hardware can be very different across
manufacturers.

The kernel can provide a simple, consistent interface to
user programs for different hardware configurations.

---

# kernel: CPU scheduling

Many computers only have a single CPU, but users might want
to run many programs at once.

The kernel must schedule processes so that each running
program gets enough CPU time.

---

# kernel: memory management

A computer only has so much RAM to go around. User programs
can request blocks of memory from the kernel.

The kernel maintains a table of which pages of memory map to
which user programs.

If there isn't enough RAM, the kernel might be configured to
use the hard disk instead (swap space).

---

# shell

A shell is a computer program that can execute other
programs from a text-based interface.

In a text-based interface, you interact with a program
completely from the command-line with text commands and text
output.

Most modern shells are strongly influenced by the first UNIX
shells.

---

# utilities

Any distribution of UNIX will come with dozens of other
programs that perform narrow single-purpose tasks.

The available utilities on a given system vary widely but
some utilities are very common.

For example, there is a command to make new directories and
another to move files.

---

# why UNIX still matters

* portable to many kinds of hardware
* consistent conventions
* vast software ecosystem
* text!

---

# why UNIX still matters: portable

UNIX can be found in all kinds of places:
a web server, a DSL modem, a laptop running Linux or MacOSX,

This is because UNIX is designed to be portable to many
different kinds of hardware.

That means you don't need to learn a whole new operating
system and suite of tools for each new system.

---

# why UNIX still matters: conventions

The conventions of command-line UNIX tools apply
consistently across many different tools.

This means that once you learn some common conventions, you
will be able to use those conventions across many different
tools.

---

# why UNIX still matters: ecosystem

There is a very vast ecosystem of free and open source
software available for UNIX systems to perform all kinds of
tasks.

When these tools use simple text-based interfaces, they can
be easily recombined with other tools in novel combinations.

---

# why UNIX still matters: text interface

To remotely access a UNIX system, you can use the same
command-line tools and interface that you use locally.
You can remotely access devices without a display.

Text is easy to read so you can poke around more easily to
figure out what's going on. Many aspects of computer
programming involve shuffling text around. UNIX excels at
these kinds of tasks.

---

# unix philosophy

Part of what made unix so successful is the consistent
design principles.

http://www.faqs.org/docs/artu/ch01s06.html

---

# unix philosophy (i)

Make each program do one thing well. To do a new job, build
afresh rather than complicate old programs by adding new
features.

---

# unix philosophy (ii)

Expect the output of every program to become the input to
another, as yet unknown, program. Don't clutter output with
extraneous information. Avoid stringently columnar or binary
input formats. Don't insist on interactive input.

---

# unix philosophy (iii)

Design and build software, even operating systems, to be
tried early, ideally within weeks. Don't hesitate to throw
away the clumsy parts and rebuild them.

---

# unix philosophy (iv)

Use tools in preference to unskilled help to lighten a
programming task, even if you have to detour to build the
tools and expect to throw some of them out after you've
finished using them.

---

# let's learn the command line!

bash is a popular shell for UNIX-like systems.

Open up a bash shell for the next sections to follow along.

If you're not sure which shell you're in, type:

```
echo $SHELL
```

If you're in bash, you sould see something like:

```
/bin/bash
```

---

# list files

You can use the `ls` command to show all the files in the current directory.

Type `ls` and you should see something like:

```
~ $ ls
doc  media  notes.txt  projects
```

---

# arguments

By default, `ls` lists files from the current directory.

You can list files from another directory by giving `ls` an argument.
An argument is just another piece of text after the `ls`.

For example, to list the files in `/` (the root) we can do:

```
~ $ ls /
bin   etc         lib         media  proc  sbin     sys  var
boot  home        lib64       mnt    root  selinux  tmp  vmlinuz
dev   initrd.img  lost+found  opt    run   srv      usr
```

In this example, `ls` is the command and `/` is the argument.

Commands can have multiple arguments separated by spaces or no arguments.

---

# print the current directory

To display the current directory, you can use the `pwd` command:

```
$ pwd
/home/substack
```

pwd stands for print working directory.

---

# change directory

To change the current working directory, use the `cd` command.
The `cd` command takes a single argument: the directory to move to.

After changing the current directory, list the files again with `ls`.

```
~ $ ls
doc  media  notes.txt  projects
~ $ cd media
~/media $ ls
3d  audio  avatars  vector  warp
~/media $ cd warp
~/media/warp $ ls
mac.sh*                      mac_startup.mp3  mac_warped.mp3  watch.js
Mac Startup-i9qOJqNjalE.mp4  mac_startup.wav  mac_warp.mp3
```

---

# special directories

There are two special directories: `..` and `.`:

* `..` - the parent directory
* `.` - the current directory

To navigate back up to the parent directory, do `cd ..`.

```
~/media/warp $ cd ..
~/media $ 
```

You can also list the parent directory without changing the current directory by
doing `ls ..`:

```
~/media $ ls ..
doc  notes.txt  media  projects
```

You can add paths after `..` too:

```
~/media $ ls ../projects/workshops
computers.markdown  unix.markdown
```

Or `ls .` is the same as `ls`:

```
~/media $ ls .
3d  audio  avatars  vector  warp
```

Jump back to your home directory at any time by typing `cd` with no arguments.

---

# cat

cat was originally written to concatenate all the files from its arguments:

```
~/doc $ cat beep.txt boop.txt
BEEP
BOOP
```

but it also a handy way to display single text files on the command-line:

```
~/doc $ cat beep.txt
BEEP
```

---

# cp

Copy a file to another directory or file name.

You can copy a single file to make a new duplicate file:

```
~/doc $ ls
a.txt
```

We can copy a.txt to b.txt:

```
~/doc $ cp a.txt b.txt
```

Now there are 2 identical files, `a.txt` and `b.txt`:

```
~/doc $ ls
a.txt  b.txt
```

---

# cp 

You can copy a file or a directory too. Here we'll copy `a.txt` to the directory
called `wow`:

```
~/doc $ mkdir wow
~/doc $ ls
a.txt  b.txt  wow
~/doc $ cp a.txt wow
```

now `wow/` has an `a.txt` file in it:

```
~/doc $ ls wow
a.txt
```

You can copy to a specific destination file:

```
~/doc $ cp a.txt wow/whatever.txt
~/doc $ ls wow
a.txt  whatever.txt
```

---

# cp (multiple files)

You can even copy multiple files at once to a new place:

```
~/doc $ mkdir xyz
~/doc $ cp a.txt b.txt xyz/
~/doc $ ls xyz
a.txt  b.txt
```

The last argument is the destination file or directory and the other arguments
are the source files.

---

# cp -r

If you have a directory full of files and directories you want to copy to a new
place, you can use `cp -r` to recursively copy a directory and all its
subdirectories to a new location:

```
~/doc $ mkdir xyz/123
~/doc $ cp a.txt xyz/123/
~/doc $ cp -r xyz newxyz
~/doc $ ls newxyz/
123  a.txt  b.txt
~/doc $ ls newxyz/123
a.txt
```

Likewise, there is a `-R` for the `ls` command that recursively lists
subdirectories:

```
~/doc $ ls -R newxyz
newxyz:
123  a.txt  b.txt

newxyz/123:
a.txt
```

---

# mv

The `mv` command is used to rename and overwrite files and directories.

To rename a file, set the first argument to the original file name and the
second argument to the new file name or destination directory.

We can rename `a.txt` to be `pigeon.txt`:

```
~/doc $ mv a.txt pigeon.txt
~/doc $ ls
b.txt  newxyz  pigeon.txt  xyz
```

Or we can move a file to a new directory:

```
~/doc $ mv pigeon.txt xyz
~/doc $ ls xyz
123  a.txt  b.txt  pigeon.txt
```

We can rename directories just the same as files:

```
~/doc $ mv xyz woo
~/doc $ ls
b.txt  newxyz  woo
~/doc $ ls woo
123  a.txt  b.txt  pigeon.txt
```

---

# mkdir

To make a new directory, just execute the `mkdir` command with a list of new
directory names to make as arguments:

```
$ mkdir hooray
```

and now a new directory called `hooray` exists.

You can create multiple directories at once:

```
$ mkdir one two
```

and now two new directories, `one` and `two`, exist.

---

# mkdir -p

Suppose we want to make the following nested directory structure:

```
foo/
  bar/
    baz/
    qrs/
```

Instead of doing:

```
~ $ mkdir foo foo/bar foo/bar/baz foo/bar/qrs
```

We can just do:

```
~/doc $ mkdir -p foo/bar/baz foo/bar/qrs
```

and the necessary parent directories `foo/` and `foo/bar/` will be created
automatically.

---

# brace expansion

There is a handy syntax built into bash for expanding patterns that would be
repetitive to type out by hand.

Instead of doing something like:

```
~/doc $ mkdir -p foo/bar/baz foo/bar/qrs
```

we can use a list of items between curly braces:

```
~/doc $ mkdir -p foo/bar/{baz,qrs}
```

which expands to the same command as before.

To prove this you can use `echo` to see what the expansion is:

```
~ $ echo mkdir -p foo/bar/{baz,qrs}
mkdir -p foo/bar/baz foo/bar/qrs
```
The items that a brace expansion generates are separated by spaces as if you had
typed out those words by hand.

You can have as many items as you like in a list:

```
~ $ echo robot-{one,two,three,four}-x
robot-one-x robot-two-x robot-three-x robot-four-x
```

---

# brace expansion fancy

With brace expansions, you can have multiple expansions:

```
~/doc $ echo robot/{c3po,r2d2}/{sound.mp3,info.txt}
robot/c3po/sound.mp3 robot/c3po/info.txt robot/r2d2/sound.mp3 robot/r2d2/info.txt
```

You can even nest the expansions!

```
~/doc $ echo x-{wing,b{ee,oo}p}
x-wing x-beep x-boop
```

---

# brace expansion sequences

It can be tedious to type out numerical lists by hand.

Brace expansions can help with that:

```
~/doc $ echo wow{1..10}
wow1 wow2 wow3 wow4 wow5 wow6 wow7 wow8 wow9 wow10
```

and you can even specify an amount to skip:

```
~/doc $ echo img{0..100..10}
img0 img10 img20 img30 img40 img50 img60 img70 img80 img90 img100
```

---

# rm

---

# rmdir

---

# wc

The `wc` command computes the number of lines, words, and bytes in a file:

```
~ $ wc notes.txt
 3  7 35 /home/substack/notes.txt
```

To see each field independently, you can use different options: arguments that
start with a `-` or `--` followed by a letter or word.

To get just the word counts, we can use `-w`:

```
~ $ wc -w notes.txt
7 notes.txt
```

To get just the number of lines in a file, use `-l`:

```
~ $ wc -l notes.txt
3 notes.txt
```

To get just the number of bytes in a file, use `-c`:

```
~ $ wc -c notes.txt
35 notes.txt
```

If you don't specify a file, `wc` will read from stdin. Type Ctrl+D (^D) to end
the input.

```
~ $ wc -l
one
two
three
four
^D
4
```

---

# man

All of these command options are a lot to remember!

You can pull up documentation at any time in your shell by typing `man foo`
for any command `foo`.

For example to read up on all the options you can give to the `wc` command, do:

```
~ $ man wc
```

The help page will open up in your `$PAGER`. Type `q` to exit back to your
shell.

---

# more on options

Options (also called flags or switches) are special arguments that start with a
`-` or `--` followed by a letter or word.

Generally speaking, they are distinct from other arguments in that their order
usually doesn't matter. For example:

```
grep -i wow
```

is the same as

```
grep wow -i
```

where `-i` just informs the `grep` command to perform a case-insensitive search.

Sometimes options have a value that follows:

```
head -n 1
```

means that `-n` has the value `1`.

Sometimes you can omit the space:

```
head -n1
```

but each program individually decides how to interpret its arguments.

---

# absolute and relative paths

Paths that start with `.` or `..` are relative paths.
Paths that start with `/` are absolute paths.

Relative paths are resolved according to the current working directory:

```
~/doc $ cat ../media/warp/mac.sh
#!/bin/bash
youtube-dl 'https://www.youtube.com/watch?v=i9qOJqNjalE'
ffmpeg -i *.mp4 -vn mac_startup.wav
sox mac_startup.wav mac_warp.mp3 chorus 0.6 0.9 25 0.9 1 8 -s \
  echos 0.8 0.7 40 0.25 63 0.3 phaser 1 0.7 3 0.7 0.5 -t
  play mac_startup.wav
```

Absolute paths are the same no matter what the current working directory is:

```
~/projects/workshops $ cat /etc/issue
Debian GNU/Linux 7 \n \l

```

---

# echo

The echo command just prints text from its arguments:

```
~ $ echo wow cool
wow cool
```

This is not very useful by itself, but becomes useful when combined with
redirects and pipes.

---

# write to a file

Using the `>` character, you can write the output of a command to a file.

For example, to make a new file `greetings.txt` with the contents "ahoy thar",
we can do:

```
~ $ echo ahoy thar > greetings.txt
```

and to print the contents of greetings.txt, use `cat`:

```
~ $ cat greetings.txt
ahoy thar
```

You can redirect the output of any program to a file:

```
~ $ ls / > list.txt
```

---

# append to a file

The `>` redirect operator will overwrite a file with new contents if it already
exists.

There is a `>>` operator that appends to the end of a file if it already exists:

```
~ $ echo wow > cool.txt
~ $ ls >> cool.txt
~ $ cat cool.txt
wow
cool.txt
doc
media
notes.txt
projects
```

---

# read from a file

You can read a file into the stdin of a program with `<`.

Remember that if `wc` doesn't get a file as an argument, it will read from
stdin. We can load a file in to `wc` with `<` instead:

```
~ $ wc -c < notes.txt
35
```

---

# pipes!

The last but most important kind of redirect is the pipe operator `|`.

With `|` you can feed the output of one program to the input of the next.

For example, the `ls -1` command will list files, one per line, to stdout.
The `wc -l` command, meanwhile, will count the number of lines.

By piping these two programs together, we can count the number of files and
subdirectories in a directory:

```
~ $ ls -1 | wc -l
5
```

and indeed, there are five files and subdirectories in this directory:

```
~ $ ls -1
cool.txt
doc
media
notes.txt
projects
```

You can chain together commands with `|` as much as you like.

Here's an example using two new commands `curl` and `sed` that will fetch 
Moby Dick from Project Gutenberg and count the number of occurences of "whale"
in any case:

```
~ $ curl -s http://www.gutenberg.org/cache/epub/2701/pg2701.txt
| sed -r 's/\s+/\n/g' | grep -i whale | wc -l
1691
```

We can even save that number of a file. Just add `> whale_count.txt` to the end
of the pipeline:

```
~ $ curl -s http://www.gutenberg.org/cache/epub/2701/pg2701.txt |
sed -r 's/\s+/\n/g' | grep -i whale | wc -l > whalecount.txt
```

---

# pipeline breakdown: curl

Here's a breakdown of each part of the pipeline and what it does:

```
curl -s http://www.gutenberg.org/cache/epub/2701/pg2701.txt
```

fetches Moby Dick from Project Gutenberg and prints the results to stdout.

---

# pipeline breakdown: sed

```
sed -r 's/\s+/\n/g'
```

converts all whitespace (tabs, spaces, newlines) into newlines.

This means that each word gets its own line:

```
~ $ echo one two three beep boop | sed -r 's/\s+/\n/g'
one
two
three
beep
boop
```

---

# pipeline breakdown: grep

```
grep -i whale
```

filters the output so that only lines that contain the word "whale" will be
shown. `-i` makes the search case-insensitive.

For example if we have a file `tale.txt`:

```
Wow
such
a
whale.
A
whale
of
a
WHALE!
```

then our grep command will show:

```
~ $ grep -i whale < tale.txt
whale.
whale
WHALE!
```

---

# pipeline breakdown: wc -l

```
wc -l
```

counts the number of lines from stdin and prints the result.

---

# head

The head command prints the first part of a file.

If a file isn't given, `head` reads from stdin.

Read the first 3 lines of a file with `head -n3`:

```
$ head -n3 mobydick.txt 
The Project Gutenberg EBook of Moby Dick; or The Whale, by Herman Melville

This eBook is for the use of anyone anywhere at no cost and with
```

Read the first 20 bytes of a file with `head -n3`:

```
~ $ head -c20 mobydick.txt 
The Project Guten
```

---

# tail

The tail command prints the last part of a file.

If a file isn't given, `tail` reads from stdin.

Read the last 4 lines of a file with `tail -n4`:

```
~ $ tail -n4 mobydick.txt 
This Web site includes information about Project Gutenberg-tm,
including how to make donations to the Project Gutenberg Literary
Archive Foundation, how to help produce our new eBooks, and how to
subscribe to our email newsletter to hear about new eBooks.
```

Read the last 9 bytes of a file with `tail -c9`:

```
~ $ tail -c9 mobydick.txt 
eBooks.
```

---

# cal

If you need a handy text calendar, just type `cal`:

```
~ $ cal
   December 2014      
Su Mo Tu We Th Fr Sa  
    1  2  3  4  5  6  
 7  8  9 10 11 12 13  
14 15 16 17 18 19 20  
21 22 23 24 25 26 27  
28 29 30 31           
```

You can show the current, previous, and next month:

```
~ $ cal -3
   November 2014         December 2014          January 2015      
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  
                   1      1  2  3  4  5  6               1  2  3  
 2  3  4  5  6  7  8   7  8  9 10 11 12 13   4  5  6  7  8  9 10  
 9 10 11 12 13 14 15  14 15 16 17 18 19 20  11 12 13 14 15 16 17  
16 17 18 19 20 21 22  21 22 23 24 25 26 27  18 19 20 21 22 23 24  
23 24 25 26 27 28 29  28 29 30 31           25 26 27 28 29 30 31  
30                                                                
```

Or you can show a whole year:

```
~ $ cal 2015
                            2015
      January               February               March          
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  
             1  2  3   1  2  3  4  5  6  7   1  2  3  4  5  6  7  
 4  5  6  7  8  9 10   8  9 10 11 12 13 14   8  9 10 11 12 13 14  
11 12 13 14 15 16 17  15 16 17 18 19 20 21  15 16 17 18 19 20 21  
18 19 20 21 22 23 24  22 23 24 25 26 27 28  22 23 24 25 26 27 28  
25 26 27 28 29 30 31                        29 30 31              
                                                                  

       April                  May                   June          
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  
          1  2  3  4                  1  2      1  2  3  4  5  6  
 5  6  7  8  9 10 11   3  4  5  6  7  8  9   7  8  9 10 11 12 13  
12 13 14 15 16 17 18  10 11 12 13 14 15 16  14 15 16 17 18 19 20  
19 20 21 22 23 24 25  17 18 19 20 21 22 23  21 22 23 24 25 26 27  
26 27 28 29 30        24 25 26 27 28 29 30  28 29 30              
                      31                                          

        July                 August              September        
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  
          1  2  3  4                     1         1  2  3  4  5  
 5  6  7  8  9 10 11   2  3  4  5  6  7  8   6  7  8  9 10 11 12  
12 13 14 15 16 17 18   9 10 11 12 13 14 15  13 14 15 16 17 18 19  
19 20 21 22 23 24 25  16 17 18 19 20 21 22  20 21 22 23 24 25 26  
26 27 28 29 30 31     23 24 25 26 27 28 29  27 28 29 30           
                      30 31                                       

      October               November              December        
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  
             1  2  3   1  2  3  4  5  6  7         1  2  3  4  5  
 4  5  6  7  8  9 10   8  9 10 11 12 13 14   6  7  8  9 10 11 12  
11 12 13 14 15 16 17  15 16 17 18 19 20 21  13 14 15 16 17 18 19  
18 19 20 21 22 23 24  22 23 24 25 26 27 28  20 21 22 23 24 25 26  
25 26 27 28 29 30 31  29 30                 27 28 29 30 31        
                                                                  
```

---

# date

To print the date, just do:

```
~ $ date
Sat Dec 27 20:43:13 PST 2014
```

You can format the date however you like:

```
~ $ date +'%Y-%m-%d %H:%M:%S'
2014-12-27 20:45:07
```

Check out the manual page (`man date`) for more info about what options are
available for date strings.

---

# fold

Sometimes it's handy to break long lines into shorter lines.

We can use the fold command to break some text at 30 characters:

```
can see a whale, for the first
 discoverer has a ducat for hi
s pains....
I was told of a whale taken ne
ar Shetland, that had above a 
barrel of
herrings in his belly.... One 
of our harpooneers told me tha
t he caught
```

or to break on spaces instead, use `-s`:

```
~ $ head -n250 mobydick.txt | tail -n3 | fold -sw 30
can see a whale, for the 
first discoverer has a ducat 
for his pains....
I was told of a whale taken 
near Shetland, that had above 
a barrel of
herrings in his belly.... One 
of our harpooneers told me 
that he caught
```

---

# curl

curl is a handy little tool for making HTTP requests.

Here's a simple snippet to fetch my most recent RSA public key from github,
wrapping the output to 75 character lines:

```
~ $ curl -s https://github.com/substack.keys | tail -n1 | fold -w75
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAEAQC7wF3cwpH+NVG+qNz0PLjEg9IqaNyXeeITme9
fksfJx/rTyoFAWW+JrJVKLPNBCe63JYvp3pTvPqJRg/8hEb/+uFlIIzUNhHAUSaS1mmKgnTHbb+
1d8CkFAZiZnDhFOKRkEXh5R9F9htNQVIjyzD3XL/H69mb8YzICItq/9klVTZ66s1thp7r3V5+qE
hbLB4yH6stXyuj2SZiMS+CJeVBJ8Pf/CCUH66NK2o7l1zliJwme+UJry1RtxWQBfEChj9qe36B/
bR3HACtx6ANMdYJsOxZm0znUjn/XJ9jxy22nVJY5otwZNeIZSSyA1lZB2mZRzTTWzPPx62VWdgH
eQdOmnqBP0YWpxPBSMJwn4kFt6aGImrm7WTU5sHwqqxRgNvcrecxPWgbdLcV+x/OWF5bug3s096
AWcP4wQI101w7QtI3cc5+JKHSGssuY17jyyNaHttE7GafBu3pbK93YolgNAMyYUHVicgK+uY6o+
sH4gcRx+RyQ4OkO7Js49wJi0AXPGhp5QRmIFpua/vVzhMTwMhqW+6luWgfPeAVqn95erc49cY+W
2B83ZgaDVSuRfDafVCSjUl+oXG/1KxzP2F/ZhGmNGmBRnF5N4OLHW6/KtVgxCpf3+1bcgye+yiq
NQuM5/NNWZRw3NJhk0XEppd5Ai4JpvguDLhWZ19/+XEvFj9kwKRMRbxf1M7hWDutAE46sQc9x4M
135M/SyuHW9asHBDCJPgD3nBAjYpMV0fQxIbcNiYWF+JsH6NzhRpLnsTNUvsfUcC/FQqX3VD0Xu
IEoYmKwDesv6PU60pQNEi6p4u+PnFHS/vvRASYLo/4s+99GQDWxqzi0jjYVWheQW9RLnTU+ghud
A+xPp7CK/tH8/RAutDdk3k0HdsNTsjHFN/HvM23UIHOpuY07yohayQididHt023IAZdys6m2daQ
RUKXM8cfaFdQqoj/vaby7pxBPWzO6tuXy1tI6gQ+nolZaXQfXUBHF1uBXo1UQI0dp8J5tCppty6
NvXmvv90PBGVXOlplyhXB9q0JXBInidATeT8zlgM4Iq1X6ZVlXN2OIU5CiWVA1NYmf05709e6SK
P0kK2oh19gA+qg1oPOw0WTpZGKz/9NCCw2ywK2/yNJRWuIbSE4RAv6N8v7qtPObwAU5Lohj8oQV
yC/bbLF6VuVJo6V/nfvP+EJKtsXlBBPBzdsmV1hikkGLJx7Up1s7WTZCwSeSGFPXCe7RdElz2mQ
YB6dwEbhaGl48MhuiIeER7KZqzQFOu74G0u5tyyCUeEc90BkeUcf/EhrxfS8R9ZRJ9ce7IpYQ4+
9wTBKFzVc1HinCSUwJTu7m+UHLaaNbK+WCIF+2fFvM1IJmTh2pWSMb
```

---

# grep

You can search for patterns in files or from stdin with the `grep` command.

The first argument is the pattern to search for as a regular expression.

Regular expressions are a language for pattern matching.

Here we can search for all lines matching "whaling" or "fishing":

```
~ $ grep -iE '(whal|fish)ing' mobydick.txt | tail -n5
Equatorial fishing-ground, and in the deep darkness that goes before the
the whaling season? See, Flask, only see how pale he looks--pale in the
preliminary cruise, Ahab,--all other whaling waters swept--seemed to
fixed upon her broad beams, called shears, which, in some whaling-ships,
years of continual whaling! forty years of privation, and peril, and
```

Check out the other workshop about regular expressions to learn more!

---

# backticks

Sometimes it's useful to include the output of a program in the arguments list
of another.

For example with the date command we can print the current year:

```
date +%Y
```

and we can use this value in a message with echo:

```
~ $ Greetings from the year `date +%Y`.
Greetings from the year 2014.
```

---

# arithmetic

With `$((...))` expressions, you can do simple arithmetic on the command line!

```
~ $ echo $((4*5+1))
21
```

I wouldn't go overboard with this feature, but it's handy sometimes.

---

# environment variables

Environment variables are defined by the shell and shell scripts.

To list the current environment variables, type `export`:

```
~ $ export
declare -x DISPLAY=":0"
declare -x HOME="/home/substack"
declare -x HUSHLOGIN="FALSE"
declare -x LANG="en_US.UTF-8"
declare -x LD_LIBRARY_PATH="/home/substack/prefix/lib:/usr/local/lib:/usr/lib/x86_64-linux-gnu:/usr/lib:/lib64:/lib"
declare -x LIBGL_DRIVERS_PATH="/usr/lib/i386-linux-gnu/dri:/usr/lib/x86_64-linux-gnu/dri"
declare -x LOGNAME="substack"
declare -x MAIL="/var/mail/substack"
declare -x OLDPWD="/home/substack/projects/workshops"
declare -x PATH="/home/substack/prefix/bin:/usr/local/bin:/usr/bin:/bin:/sbin:/usr/sbin:/usr/local/games:/usr/games"
declare -x PREFIX="/home/substack/prefix"
declare -x PWD="/home/substack"
declare -x ROXTERM_ID="0x43962f0"
declare -x ROXTERM_NUM="15"
declare -x ROXTERM_PID="2521"
declare -x SHELL="/bin/bash"
declare -x SHLVL="3"
declare -x TERM="xterm"
declare -x USER="substack"
declare -x WINDOWID="8684328"
declare -x WINDOWPATH="7"
declare -x XAUTHORITY="/home/substack/.Xauthority"
```

You can use any environment variable by refering to its `$NAME`.

For example to print the value of `$HOME` do:

```
~ $ echo $HOME
/home/substack
```

You can use environment variables in any command:

```
~ $ ls /home/$USER
doc  media  notes.txt  projects
```

To define your own environment variable, just put its name followed by an equal
sign (with no spaces) followed by its value:

```
~ $ ANIMAL=cats
~ $ echo $ANIMAL
cats
```

Environment variables are almost always capitalized to distinguish them from
variables in shell scripts but lower-case variables work too.

---

# quotes

If you want to use characters like `<` or `>` in the arguments to a program, you
will need to use quotes so that the shell doesn't try to interpret them.

For example, to echo the string `<b>wow</b>` we can use single quotes:

```
~ $ echo '<b>wow</b>'
<b>wow</b>
```

Double quotes are similar but environment variables and backticks will be
interpolated in-place (replaced with their value): 

```
~ $ echo "There's no place like $HOME."
There's no place like /home/substack.
~ $ echo "So long `date +%Y`..."
So long 2014...
~ $ echo "So long `date +%Y`... next stop $((`date +%Y`+1))"'!'
So long 2014... next stop 2015!
```

---

# scripts

---


# permissions

---

# job control

---

# screen

