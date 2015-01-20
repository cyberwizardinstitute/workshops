# leveldb!

an embedded key/value database

---
# embedded vs standalone

* embedded - in-process library
* standalone - separate service

---
# embedded databases

* leveldb
* sqlite
* berkeleydb

---
# standalone databases

* postgresql
* mysql
* mongodb
* couchdb

---
# install

Since leveldb is a standalone databse,
you can just install it with npm:

```
npm install level
```

---
# and then

``` js
var level = require('level');
var db = level('./whatever.db');
```

---
# level methods

* `db.get()`
* `db.put()`
* `db.del()`
* `db.batch()`
* `db.createReadStream()`

---
# put

set a value for a key with `.put()`

``` js
var level = require('level');
var db = level('./whatever.db');
db.put('key', 'value', function (err) {
    if (err) console.error(err);
});
```

---
# get

load a value for a key with `.get()`

``` js
var level = require('level');
var db = level('./whatever.db');
db.get('key', function (err, value) {
    if (err) console.error(err);
    else console.log('value=', value);
});
```

---
# del

delete a value at a key with `.del()`:

---
# atomicity

either all transactions succeed
or all transactions fail

---
# consistency

atomicity is important to enforce consistency

Suppose a user has just signed up.
We might need to create:

* a record for their 
* a record for their login username and password

---
# batch

insert multiple records at a time, atomically

``` js
db.batch([
    {"key":"foo","value":"123"},
    {"key":"bar","value":"456"}
])
```

---
# createReadStream

```
db.createReadStream({
    gt: "a",
    lt: "m"
})
```

* gt - greater than
* lt - less than

---
# thinking lexicographically

keys are sorted by their string values:

* aaaaa
* bb
* ccccc

---
# numbers get converted into strings!

* "1"
* "12"
* "3"
* "4"
* "555"
* "6"

---
# bytewise

a nicer way of handling lexicographic values

sorting for numbers happens as you might expect:

* 1
* 3
* 4
* 6
* 12
* 555

---
# bytewise hierarchy

and there is also a hierarchy of types.
`null` is the first type to sort and `undefined` is the
last.

* null
* numbers
* strings
* arrays
* objects
* undefined

---
# bytewise

Arrays are sorted component-wise, which means we can make
keys like:

    [ 'user', 'substack' ]

and then to query all users we can do:

``` js
db.createReadStream({
    gt: [ 'user', null ],
    lt: [ 'user', undefined ]
})
```

---
# organizing your keys

key/value structure we might use for
a user/post system:

``` json
[{"key":"user!substack","value":{"bio":"beep boop"}},
{"key":"user!maxogden","value":{"bio":"cats."}},
{"key":"post!substack!2015-01-04 11:45","value":"cool beans"}]
{"key":"post!maxogden!2015-01-03 17:33","value":"soup."}]
```

---

This will let us efficiently query for a user's posts:

``` js
db.createReadStream({
    gt: "post!substack",
    lt: "post!substack!~"
})
```

---
# organizing keys with bytewise

or with bytewise:

``` json
[{"key":["user","substack"],"value":{"bio":"beep boop"}},
{"key":["user","maxogden"],"value":{"bio":"cats."}},
{"key":["post","substack","2015-01-04 11:45"],"value":"cool beans"}]
{"key":["post","maxogden","2015-01-03 17:33"],"value":"soup."}]
```

---
# and querying with bytewise:

``` js
db.createReadStream({
    gt: ["post","substack",null],
    lt: ["post","substack",undefined]
})
```

---

In either case,
what if we want to get ALL the posts on the system?

---
# secondary indexes

We can use `.batch()` to create multiple keys for each post:

``` js
var now = new Date().toISOString();
var id = crypto.randomBytes(16).toString('hex');
var subkey = now + '!' + id;
db.batch([
    {type:'post',key:'post!substack!'+subkey,value:msg},
    {type:'post',key:'post!'+subkey,value:msg},
]);
```

---
# querying our indexes

now to get all the posts system-wide sorted by date,
we can do:

``` js
db.createReadStream({
    start: "post!",
    end: "post!~"
})
```

---
# subleveldown

we can create nested sub-databases with subleveldown:

``` js
var level = require('level');
var sublevel = require('subleveldown');
var db = level('whatever.db');

var catsdb = sublevel(db, 'cats');
var robodb = sublevel(db, 'robots');

catsdb.put('msg', 'meow');
robodb.put('msg', 'beep boop');
```

and `catsdb` and `robodb` will each key a unique namespace
for a `msg` key.

---
# modularity

Instead of building in a lot of features, in leveldb you can
use npm to install packages:

* [subleveldown](https://npmjs.org/package/subleveldown)
* [cookie-auth](https://npmjs.org/package/cookie-auth)
* [accountdown](https://npmjs.org/package/accountdown)
* [forkdb](https://npmjs.org/package/forkdb)

---
# accountdown

Making user accounts is actually surprisingly tricky!

You've got to remember:

* only create a user if the name hasn't been taken
* hash passwords with a unique salt for each user
* lock records to prevent account creation race conditions
* extensibility points for more login methods in the future

---
# links

* [levelup docs](https://github.com/rvagg/node-levelup)
* [example leveldb website with accountdown](https://github.com/substack/example-user-website)

---
# homework

http://nodeschool.io/#levelmeup
