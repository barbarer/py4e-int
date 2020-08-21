Retrieving web pages with ``urllib``
----------------------------------------

While we can manually send and receive data over HTTP using the socket
library, there is a much simpler way to perform this common task in
Python by using the ``urllib`` library.

Using ``urllib``\ , you can treat a web page much like a file.
You simply indicate which web page you would like to retrieve and
``urllib`` handles all of the HTTP protocol and header details.

The equivalent code to read the *romeo.txt* file from the web
using ``urllib`` is as follows:

.. activecode:: urllib1
     :language: python3

      import urllib.request

      fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
      for line in fhand:
         print(line.decode().strip())

Once the web page has been opened with ``urllib.urlopen``\ , we
can treat it like a file and read through it using a ``for``
loop.

When the program runs, we only see the output of the contents of the
file. The headers are still sent, but the ``urllib`` code
consumes the headers and only returns the data to us.

.. code-block::

   But soft what light through yonder window breaks
   It is the east and Juliet is the sun
   Arise fair sun and kill the envious moon
   Who is already sick and pale with grief


As an example, we can write a program to retrieve the data for
``romeo.txt`` and compute the frequency of each word in the
file as follows:

.. activecode:: urlwords
      :language: python3

      import urllib.request, urllib.parse, urllib.error

      fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')

      counts = dict()
      for line in fhand:
         words = line.decode().split()
         for word in words:
            counts[word] = counts.get(word, 0) + 1
      print(counts)

Again, once we have opened the web page, we can read it like a local
file.
