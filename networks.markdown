# networking


---
# servers and clients

Any networked computer can be a server,
any networked computer can be a client!

---
# packets

tiny chunks of data

For example, if we have a payload:

```
This is the message we want to send. It contains
information. XXXX YYyY ZZzZ QRSTUV ABCDEFG BLAH BLAH.
```

it might get broken up into multiple packets:

    This is the message we want to send. It conta

and:

    ins
    information. XXXX YYyY ZZzZ QRSTUV ABCDEFG BLAH BLAH.

---
# tcp vs udp

TCP - reliable transport: if a packet is not acknowledged
(ACK) on the other end, it gets resent

UDP - unreliable transport: packets are sent but there is no
confirmation that the packet was received at the other end

---
# tcp vs udp uses

UDP - sometimes used for streaming video and audio, some games

TCP - everything else

---
# protocols

the language that computer programs speak to each other

Examples of network protocols:

* HTTP - browse web pages
* HTTPS - browse web pages with encryption
* SMTP - send and receive emails
* IMAP, POP3 - load emails from an inbox
* IRC - chat
* FTP - file transfer
* SSH - remote shell over an encrypted connection
* SSL - low-level secure data transfer (used by HTTPS)

---
# ports

Each computer can have many services.

A port is a number between 1 and 65535 that 
differentiates among the services on a system.

---
# customary ports

Any service can listen on any port, but there are customary
ports for many protocols:

* 21 - ftp (control port)
* 22 - ssh
* 25 - smtp
* 80 - http
* 443 - https
* 3306 - mysql
* 5432 - postgresql
* 5984 - couchdb
* 6667 - irc

---
# port and permissions

By default, systems can only listen to ports below 1024 as
the root user:

```
$ nc -lp 1024
^C
$ nc -lp 1023
Can't grab 0.0.0.0:1023 with bind : Permission denied
```

---
# servers

Sometimes when people say "server" they mean a computer
program that listens for incoming connections.

Other times when people say "server" they mean a computer
that is configured to run server programs.

Any computer can be a server!

---
# clients

Clients are computer programs that connect to servers.

initiate a connection

Any computer can be a client!

---
# peer to peer

Aside from servers and clients, there is a third role in
computer networks: peer.

In a peer to peer network, clients establish connections
directly to other clients. Nodes in the network are
symmetric with no fixed central servers.

Examples of peer to peer protocols:

* bittorrent
* webrtc

---
# netcat

netcat can create tcp and udp connections and servers

```
sudo apt-get install netcat
```

With netcat you can speak tcp directly.

---
# netcat server and client

```
$ nc -lp 5000
```

then connect to your server in another terminal:

```
$ nc localhost 5000
```

Type messages in each session and see the messages on the
other session.

---
# http

hypertext transfer protocol

how web servers and web browsers communicate

---
# http verbs

HTTP requests begin with a VERB.
Here are some things each VERB is used for:

* GET - fetch a document
* POST - submit a form
* HEAD - fetch metadata about a document
* PUT - upload a file

---
# http headers

Next come the headers.

Headers have a key followed by a colon followed by a value:

```
key: value
```

---
# http

```
$ nc google.com 80
GET / HTTP/1.0
Host: google.com


```

Make sure to hit `return` twice after `Host: google.com`.

---
The server responds with a version and status code
(301 means redirect) followed by some headers.

The body is separated from the headers by an empty line:

```
HTTP/1.0 301 Moved Permanently
Location: http://www.google.com/
Content-Type: text/html; charset=UTF-8
Date: Mon, 12 Jan 2015 01:26:19 GMT
Expires: Wed, 11 Feb 2015 01:26:19 GMT
Cache-Control: public, max-age=2592000
Server: gws
Content-Length: 219
X-XSS-Protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
Alternate-Protocol: 80:quic,p=0.02

<HTML><HEAD><meta http-equiv="content-type"
content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="http://www.google.com/">here</A>.
</BODY></HTML>
```

---
```
$ nc google.com 80
GET / HTTP/1.0
Host: www.google.com

HTTP/1.0 200 OK
Date: Mon, 12 Jan 2015 01:26:34 GMT
Expires: -1
Cache-Control: private, max-age=0
Content-Type: text/html; charset=ISO-8859-1
Set-Cookie: PREF=ID=ef742f69ec142ebf:FF=0:TM=1421025994:LM=1421025994:S=F1aTCyHJIJ82Pk1n; expires=Wed, 11-Jan-2017 01:26:34 GMT; path=/; domain=.google.com
Set-Cookie: NID=67=bsMXxsgStx4qF_9eM34aG2sYr_-tJpQsh2IW0CUQx3I2K8-HAfbAm1LKcuHZUMfFwupYqdrthJAN-PguV9ftUtEtr5Tb3NUvJ6zIutDXtEQxb_SDoSpYiHpYrPpkJW1x; expires=Tue, 14-Jul-2015 01:26:34 GMT; path=/; domain=.google.com; HttpOnly
P3P: CP="This is not a P3P policy! See http://www.google.com/support/accounts/bin/answer.py?hl=en&answer=151657 for more info."
Server: gws
X-XSS-Protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
Alternate-Protocol: 80:quic,p=0.02
Accept-Ranges: none
Vary: Accept-Encoding
```
---
# http post

Forms in html are often delivered with a POST:

```
POST /form HTTP/1.1
Host: localhost
Content-Length: 51

title=whatever&date=1421044443&body=beep%20boop%21
```
---
using this simple node http server,
we can decode the POST body:

``` js
var http = require('http');
var parseform = require('body/any');

var server = http.createServer(function (req, res) {
    parseform(req, res, function (err, params) {
        console.log(params);
        res.end('ok\n');
    });
});
server.listen(5000);
```
---
When the POST payload arrives and is decoded, we get:

```
$ node server.js
{ title: 'whatever', date: '1421044443', body: 'beep boop!\n' }
```
---
and the server responds with:

```
HTTP/1.1 200 OK
Date: Mon, 12 Jan 2015 06:37:51 GMT
Connection: keep-alive
Transfer-Encoding: chunked

3
ok

0
```
---
# curl

You can also send http requests with the curl command:

```
$ curl -s http://substack.net
```

issues a GET request to substack.net and prints the body.

To see just the headers, use `-I`:

```
$ curl -sI http://substack.net
```

The `-s` gets rid of annoying progress output.

---
# curl: issuing a POST

Use `-X` to set the http verb (POST) and `-d` to set
form parameters:

```
$ curl -X POST http://localhost:5000 -d title=whatever \
  -d date=1421044443 -d body='beep boop!'
```

---
# smtp

smtp is the protocol used to deliver email messages.

Here we can send an email from `barak@whitehouse.gov` to
`substack@localhost`.

The lines that start with a number are messages from the
server:

```
$ nc localhost 25
220 1x1px ESMTP Exim 4.80 Sun, 11 Jan 2015 22:46:30 -0800
helo localhost
250 1x1px Hello localhost [127.0.0.1]
mail from: barak@whitehouse.gov
250 OK
rcpt to: substack@localhost
250 Accepted
data
354 Enter message, ending with "." on a line by itself
Subject: HELLO THIS IS THE PRESIDENT

Greetings citizen. I am the president. For real. Keep on keeping on.
.
250 OK id=1YAYmI-0008H2-LC
quit
221 1x1px closing connection
```

---
Since this email was sent locally, I can read the message
with the `mail` command:

```
$ mail
Heirloom mailx version 12.5 6/20/10.  Type ? for help.
"/var/mail/substack": 1 message 1 new
>N  1 barak@whitehouse.g Sun Jan 11 22:47   16/566   HELLO THIS IS THE PRESIDENT
```
---
Seems legit:

```
? n
Message  1:
From barak@whitehouse.gov Sun Jan 11 22:47:36 2015
Return-path: <barak@whitehouse.gov>
Envelope-to: substack@localhost
Delivery-date: Sun, 11 Jan 2015 22:47:36 -0800
Subject: HELLO THIS IS THE PRESIDENT
From: barak@whitehouse.gov
Date: Sun, 11 Jan 2015 22:47:22 -0800
Status: R

Greetings citizen. I am the president. For real. Keep on keeping on.

```
---
# irc

---
# text protocols

So far, we've seen a number of text protocols:

* http
* smtp
* irc

These are nice protocols to implement because you can
inspect the data going over the wire visually and type
requests using the keyboard.

---
# binary protocols

In binary protocols, you can't just type messages with the
keyboard like we've been doing. You've got to write programs
that unpack the incoming bytes and pack outgoing bytes
according to the specification.

---
# ssh

```
$ nc substack.net 22
SSH-2.0-OpenSSH_6.0p1 Debian-4+deb7u2
help
Protocol mismatch.
```

Aside from the initial greeting, the rest of the ssh
protocol expects binary.

---
Luckily, the ssh command does the work of speaking the
protocol for us:

```
$ ssh substack.net
substack@origin : ~ $ 
```

---
EOF
