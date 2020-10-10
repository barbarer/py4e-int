HyperText Transfer Protocol - HTTP
----------------------------------

The network protocol that powers the web is actually quite simple and
there is built-in support in Python called ``sockets`` which
makes it very easy to make network connections and retrieve data over
those sockets in a Python program.

A *socket* is much like a file, except that a single
socket provides a two-way connection between two programs. You can both
read from and write to the same socket. If you write something to a
socket, it is sent to the application at the other end of the socket. If
you read from the socket, you are given the data which the other
application has sent.

.. fillintheblank:: http_connection

  A ______ is much like a file, except that a single socket provides a two-way
  connection between two programs.

  - :[Ss]ocket: Yes, a socket provides a two-way connection between two programs.
    :.*: Try again!


But if you try to read a socket when the program on the other end of the
socket has not sent any data, you just sit and wait. If the programs on
both ends of the socket simply wait for some data without sending
anything, they will wait for a very long time, so an important part of programs
that communicate over the Internet is to have some sort of protocol.

A protocol is a set of precise rules that
determine who is to go first, what they are to do, and then what the
responses are to that message, and who sends next, and so on. In a sense
the two applications at either end of the socket are doing a dance and
making sure not to step on each other's toes.

.. fillintheblank:: http_rules

  A ________ is a set of practice rules that determine who is to go first,
  what they are to do, and then what the responses are to that message, and
  who sends next, and so on.

  - :[Pp]rotocol: A protocol is a set of rules that determines order and responses. 
    :.*: Try again!

There are many documents that describe these network protocols. The
HyperText Transfer Protocol is described in the following document:

https://www.w3.org/Protocols/rfc2616/rfc2616.txt

This is a long and complex 176-page document with a lot of detail. If
you find it interesting, feel free to read it all. But if you take a
look around page 36 of RFC2616 you will find the syntax for the GET
request. To request a document from a web server, we make a connection
to the ``www.pr4e.org`` server on port 80, and then send a
line of the form

``GET http://data.pr4e.org/romeo.txt HTTP/1.0``

where the second parameter is the web page we are requesting, and then
we also send a blank line. The web server will respond with some header
information about the document and a blank line followed by the document
content.
