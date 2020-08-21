Retrieving an image over HTTP
-----------------------------

In the above example, we retrieved a plain text file which had newlines
in the file and we simply copied the data to the screen as the program
ran. We can use a similar program to retrieve an image across using
HTTP. Instead of copying the data to the screen as the program runs, we
accumulate the data in a string, trim off the headers, and then save the
image data to a file as follows:

.. activecode:: urljpeg
     :language: python3

      import socket
      import time

      HOST = 'data.pr4e.org'
      PORT = 80
      mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
      mysock.connect((HOST, PORT))
      mysock.sendall(b'GET http://data.pr4e.org/cover3.jpg HTTP/1.0\r\n\r\n')
      count = 0
      picture = b""

      while True:
         data = mysock.recv(5120)
         if len(data) < 1: break
         #time.sleep(0.25)
         count = count + len(data)
         print(len(data), count)
         picture = picture + data

      mysock.close()

      # Look for the end of the header (2 CRLF)
      pos = picture.find(b"\r\n\r\n")
      print('Header length', pos)
      print(picture[:pos].decode())

      # Skip past the header and save the picture data
      picture = picture[pos+4:]
      fhand = open("stuff.jpg", "wb")
      fhand.write(picture)
      fhand.close()

When the program runs, it produces the following output:

.. code-block::

   5120 5120
   5120 10240
   4240 14480
   5120 19600
   ...
   5120 214000
   3200 217200
   5120 222320
   5120 227440
   3167 230607
   Header length 393
   HTTP/1.1 200 OK
   Date: Wed, 11 Apr 2018 18:54:09 GMT
   Server: Apache/2.4.7 (Ubuntu)
   Last-Modified: Mon, 15 May 2017 12:27:40 GMT
   ETag: "38342-54f8f2e5b6277"
   Accept-Ranges: bytes
   Content-Length: 230210
   Vary: Accept-Encoding
   Cache-Control: max-age=0, no-cache, no-store, must-revalidate
   Pragma: no-cache
   Expires: Wed, 11 Jan 1984 05:00:00 GMT
   Connection: close
   Content-Type: image/jpeg


You can see that for this url, the ``Content-Type`` header
indicates that body of the document is an image
(\ ``image/jpeg``\ ). Once the program completes, you can view the
image data by opening the file ``stuff.jpg`` in an image
viewer.

.. fillintheblank:: image_header

    The ________ header indicates that the boday of the document is a jpeg image.

   - :Content-Type: Yes, the 'Content-Type' header has value "image/jpeg" to denote its a jpeg image.
     :.*: Try again! This has to be an exact match.

As the program runs, you can see that we don't get 5120 characters each
time we call the ``recv()`` method. We get as many characters
as have been transferred across the network to us by the web server at
the moment we call ``recv()``. In this example, we either get
as few as 3200 characters each time we request up to 5120 characters of
data.

Your results may be different depending on your network speed. Also note
that on the last call to ``recv()`` we get 3167 bytes, which is
the end of the stream, and in the next call to ``recv()`` we
get a zero-length string that tells us that the server has called
``close()`` on its end of the socket and there is no more data
forthcoming.

We can slow down our successive ``recv()`` calls by
uncommenting the call to ``time.sleep()``. This way, we wait a
quarter of a second after each call so that the server can "get ahead"
of us and send more data to us before we call ``recv()`` again.
With the delay, in place the program executes as follows:

.. code-block::

   5120 5120
   5120 10240
   5120 15360
   ...
   5120 225280
   5120 230400
   207 230607
   Header length 393
   HTTP/1.1 200 OK
   Date: Wed, 11 Apr 2018 21:42:08 GMT
   Server: Apache/2.4.7 (Ubuntu)
   Last-Modified: Mon, 15 May 2017 12:27:40 GMT
   ETag: "38342-54f8f2e5b6277"
   Accept-Ranges: bytes
   Content-Length: 230210
   Vary: Accept-Encoding
   Cache-Control: max-age=0, no-cache, no-store, must-revalidate
   Pragma: no-cache
   Expires: Wed, 11 Jan 1984 05:00:00 GMT
   Connection: close
   Content-Type: image/jpeg


Now other than the first and last calls to ``recv()``\ , we now
get 5120 characters each time we ask for new data.

There is a buffer between the server making ``send()`` requests
and our application making ``recv()`` requests. When we run the
program with the delay in place, at some point the server might fill up
the buffer in the socket and be forced to pause until our program starts
to empty the buffer. The pausing of either the sending application or
the receiving application is called "flow control."

