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


