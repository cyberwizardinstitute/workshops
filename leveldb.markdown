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

``` js
var level = require('level');
var db = level('./whatever.db');
db.put('key', 'value', function (err) {
    if (err) console.error(err);
});
```

---
# get

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

---
# batch

``` js
```

---
# createReadStream

---
# thinking lexicographically

---
# organizing your keys

---
# secondary indexes

---
# bytewise

---
# subleveldown

---
# modularity

* accountdown
* subleveldown
* cookie-auth

---
# 

