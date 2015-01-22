# regular expressions

---

```
. - matches any character

? - zero or one time
* - zero or more times
+ - one or more times

[] - character class
^ - anchor at the beginning
$ - anchor to the end

(a|b) - match a or b

() capture group
(?:) non capture group

\d -> digit [0-9]
\w -> word [A-Za-z0-9_]
\s -> whitespace [ \t\r\n\f]
```

---
# regular expression form

``` js
/PATTERN/FLAGS
```

Some FLAGS are:

* i - case insensitive
* g - match all occurences (global)

---
# regex.test()

Use `regex.test()` to check whether a pattern matches.

```
var str = process.argv[2];
if (/c(at|ow)/.test(str)) {
    console.log('match');
}
else console.log('no match');
```

```
$ node test.js cow
match
$ node test.js dog
no match
```

---
# regex.exec(str)

Use `regex.exec(str)` or `str.match(regex)` to return a match object
with any capture groups that matched.

Use square brackets to refer to a capture group by number
starting at 1:

``` js
var str = process.argv[2];
var m = /best in the (\w+)/i.exec(str);
console.log(m[1]);
````

```
$ node exec.js 'Best in the west.'
west
$ node exec.js 'Best in the forest.'
forest
```

---
# str.replace(regex, rep)

Replace occurences of `regex` with `rep`:

```
var str = process.argv[2];
var newstr = str.replace(/whal(e|ing)/gi, 'SPACE');
console.log(newstr);
```

```
$ node replace 'Whale, the final frontier. Whaling.'
SPACE, the final frontier. SPACE.
```
