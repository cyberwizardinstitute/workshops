It's a well known fact that cyberwizards do a lot of writing.

---
A lot of that writing tends to be spells (programs) or potions (modules).

---
That's great if you're talking to the Great Void (the computer).

---
But what about when you need to communicate with fellow wizards?

---
Chat and IRC and email are swell for NOW, but how about the future?


How about when you've created a fabulous spell..


..but expect others to use it too?


How about if you aren't around to show them how?

---
Spells are cryptic by nature.


They need to be well documented so that other wizards

can understand them.

---
# Equally importantly:

Since cyberwizards work in the terminal and in the browser

a format is needed that plays nicely with both!

---
# Enter Markdown

A markup format for humans to read and write to each other.

---
# Enter Markdown

It retains the benefits of plain text

 - readable in any editor (and human)
 - not binary
 - can be happily piped to and from any program that supports plain text


While gaining many of the benefits of a markup language like HTML:

 - expresses rich text
 - web ready (unlike plain text)

---
HTML alone is not enough!


Humans can read it, but the source is only legible with great effort.

---

<CUE: side by side comparison>

---
# Why do I care?


- Not owned by any company -- open 'standard'


- Rich open source toolset across many languages


- Maintained and extended by a loving community

---
# Why do I care?


- Easily parsed and convertable to many different formats (HTML, PDF, ...)


- Trivial to edit markdown by hand in any editor; no special tools needed!


- The /lingua franca/ of GitHub documentation (READMEs, Wikis)


- Syntax highlighting (minimum) for just about every editor and IDE!

---
# A Brief History


John Gruber drafted the first doc on Markdown in 2004.


He wrote a reference implementation in Perl.

---
# A Brief History


11 years later, there are **TONS** of flavors

GitHub (GFM), Pandoc, Markdown Extra, CommonMark

---
# State of Affairs


2014: still no standard spec for Markdown.

Gruber's spec is ambiguous and he doesn't seem interested in changing it.


Some folks pushed for a well-defined spec: *Standard Markdown*.

tl;dr: Gruber didn't like it, so now it's *CommonMark*.

---
# State of Affairs


2015: still no /real/ de facto standard. Adoption is slow.


WHAT WILL THE FUTURE HOLD?!

---
# State of Affairs


Regardless, various types of Markdown are used all over the web:


* GitHub

* Slack

* Stack Overflow

* Reddit

---
# Let's Write Some Markdown!

* text is text (but paragraphs are tricksy)
* bold and italics look like what they are
* headings
* bullet points
* links
* code
* images


<CUE: demo time!>

---
# How can I render a markdown file to HTML?

## marked

GitHub flavoured markdown by default.

https://github.com/chjj/marked


<CUE: let's see it in action!>

---
# Markdown + Vim


Since GitHub uses Markdown for READMEs: let's use that for an example!


>  curl -sL https://github.com/watson/npm-geoversion/raw/master/README.md

---
# Markdown + Vim


{ and } move between paragraphs


<< and >> shifts text (like bullet points or code)


o and O open lines below and above

---
# Markdown + Vim


Vim's markdown plugin doesn't recognize .md as vim.


(Because hey, you probably wanted highlighting for Modula-2)


`  autocmd BufNewFile,BufRead *.md set filetype=markdown   `

---
# Markdown + Vim


Column width of 80 for ease of viewing in the terminal.


(HTML ends up formatted the same anyways).


`  autocmd FileType markdown setlocal textwidth=80   `

---
# Markdown + Vim


**Aside: use autocommand groups!**


```
augroup markdown
  au!
  autocmd BufNewFile,BufRead *.md set filetype=markdown
  autocmd FileType markdown setlocal textwidth=80
augroup END
```

---
# Handy Markdown Tools


Some handy tools to make your new life with Markdown more pleasant.

---
# Handy Markdown Tools

## vmd


Electron-based markdown viewer.

https://github.com/yoshuawuyts/vmd

```
augroup markdown
  au!
  autocmd FileType markdown nnoremap <Leader>v :w !vmd<CR><CR>
augroup END
```

<demo: show github page>
<demo: take some previous md file and view it>

---
# Handy Markdown Tools

## strapdown


Converts markdown to HTML *and* applies a pre-made CSS theme.

http://strapdownjs.com

<demo: show page>
<demo: convert a readme to a strapdown doc and open in chrome>

---
# Handy Markdown Tools

## tslide


Presentation slides (like these!) produced from markdown.

https://github.com/dominictarr/tslide

```
augroup markdown
  au!
  autocmd FileType markdown nnoremap <Leader>p :w !tslide<CR><CR>
augroup END
```

<demo: show github page>
<demo: kill current presentation and show them THIS VERY FILE>

---
# Fin


It's over!




I'm Stephen Whitmore!

@noffle on the interwebs.


I do open source and indie games.


http://www.stephenwhitmore.com

