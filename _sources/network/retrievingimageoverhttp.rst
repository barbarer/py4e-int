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

Now other than the first and last calls to ``recv()``\ , we now
get 5120 characters each time we ask for new data.

There is a buffer between the server making ``send()`` requests
and our application making ``recv()`` requests. When we run the
program with the delay in place, at some point the server might fill up
the buffer in the socket and be forced to pause until our program starts
to empty the buffer. The pausing of either the sending application or
the receiving application is called "flow control."

.. mchoice:: jpeg_slow
    :answer_a: time.sleep()
    :answer_b: mysock.sendall()
    :answer_c: picture.find()
    :answer_d: mysock.recv()
    :correct: a
    :feedback_a: Uncommenting time.sleep() will make the program wait a quarter of a second before sending the next call.
    :feedback_b: This command does exactly what it says: it sends all the data included in the ().
    :feedback_c: This command does exactly what it says: it finds the contents of the () in the picture variable.
    :feedback_d: The recv() method receives the message, it is what we want to slow down our requests to. How do we do that?

    Which of the following methods will slow down the requests made in the program above? 
