#!/bin/bash
# to run: ./server.sh | nc -lp 9000
# then go to http://localhost:9000
FILE=$HOME/media/photo/tux-kitty.jpg
echo HTTP/1.1 200 OK
echo Content-Type: image/jpeg
echo Content-Length: `wc -c $FILE`
echo
cat $FILE
