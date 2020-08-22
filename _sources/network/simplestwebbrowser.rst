The world's simplest web browser
--------------------------------

Perhaps the easiest way to show how the HTTP protocol works is to write
a very simple Python program that makes a connection to a web server and
follows the rules of the HTTP protocol to request a document and
display what the server sends back.

\VerbatimInput{../code3/socket1.py}

First the program makes a connection to port 80 on the server
`www.py4e.com <http://www.py4e.com>`_. Since our program is playing the role
of the "web browser", the HTTP protocol says we must send the GET
command followed by a blank line. ``\r\n`` signifies an EOL (end of line),
so ``\r\n\r\n`` signifies nothing between two EOL sequences. That is the
equivalent of a blank line.

.. image:: height=2.0in@../images/socket
   :target: height=2.0in@../images/socket
   :alt: A Socket Connection



Once we send that blank line, we write a loop that receives data in
512-character chunks from the socket and prints the data out until there
is no more data to read (i.e., the recv() returns an empty string).

The program produces the following output:

.. code-block::

   HTTP/1.1 200 OK
   Date: Wed, 11 Apr 2018 18:52:55 GMT
   Server: Apache/2.4.7 (Ubuntu)
   Last-Modified: Sat, 13 May 2017 11:22:22 GMT
   ETag: "a7-54f6609245537"
   Accept-Ranges: bytes
   Content-Length: 167
   Cache-Control: max-age=0, no-cache, no-store, must-revalidate
   Pragma: no-cache
   Expires: Wed, 11 Jan 1984 05:00:00 GMT
   Connection: close
   Content-Type: text/plain

   But soft what light through yonder window breaks
   It is the east and Juliet is the sun
   Arise fair sun and kill the envious moon
   Who is already sick and pale with grief


The output starts with headers which the web server sends to describe
the document. For example, the ``Content-Type`` header
indicates that the document is a plain text document
(\ ``text/plain``\ ).

After the server sends us the headers, it adds a blank line to indicate
the end of the headers, and then sends the actual data of the file
*romeo.txt*.

This example shows how to make a low-level network connection with
sockets. Sockets can be used to communicate with a web server or with a
mail server or many other kinds of servers. All that is needed is to
find the document which describes the protocol and write the code to
send and receive the data according to the protocol.

However, since the protocol that we use most commonly is the HTTP web
protocol, Python has a special library specifically designed to support
the HTTP protocol for the retrieval of documents and data over the web.

One of the requirements for using the HTTP protocol is the need to send
and receive data as bytes objects, instead of strings. In the preceding
example, the ``encode()`` and ``decode()`` methods convert strings into bytes
objects and back again.

The next example uses ``b''`` notation to specify that a variable should
be stored as a bytes object. ``encode()`` and ``b''`` are equivalent.

.. code-block:: 

   >>> b'Hello world'
   b'Hello world'
   >>> 'Hello world'.encode()
   b'Hello world'