The world's simplest web browser
--------------------------------

Perhaps the easiest way to show how the HTTP protocol works is to write
a very simple Python program that makes a connection to a web server and
follows the rules of the HTTP protocol to request a document and
display what the server sends back.

.. activecode:: simplewebbrowser
    :language: python3

    import socket

    mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    mysock.connect(('data.pr4e.org', 80))
    cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
    mysock.send(cmd)

    while True:
        data = mysock.recv(512)
        if len(data) < 1:
            break
        print(data.decode(),end='')

    mysock.close()

First the program makes a connection to port 80 on the server
`www.py4e.com <http://www.py4e.com>`_. Since our program is playing the role
of the "web browser", the HTTP protocol says we must send the GET
command followed by a blank line. ``\r\n`` signifies an EOL (end of line),
so ``\r\n\r\n`` signifies nothing between two EOL sequences. That is the
equivalent of a blank line.

.. image:: ../images/socket.svg
    :align: center
    :scale: 7%
    :alt: A Socket Connection



Once we send that blank line, we write a loop that receives data in
512-character chunks from the socket and prints the data out until there
is no more data to read (i.e., the recv() returns an empty string).

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

.. mchoice:: http_protocol
    :practice: T
    :answer_a: HTTP protocol sends and receives data as string types over sockets.
    :answer_b: Sockets can be used to connect with many kinds of servers using different protocols.
    :answer_c: Python does not support HTTP so we made a simple web browser to connect with web servers.
    :answer_d: b'' notation specifies that a variable is stored as a beta object.
    :correct: b
    :feedback_a: HTTP only supports byte objects, that's why they are encoded to be byte objects and decoded as strings.
    :feedback_b: Sockets support different types of servers with codes describing the protocol used and required send and recive data.
    :feedback_c: HTTP is a commonly used protocol for web servers, python has its own library for http protocols.
    :feedback_d: b'' notation specifies that a variable is stored as a bytes object. 

    Which of the following statements is correct?
