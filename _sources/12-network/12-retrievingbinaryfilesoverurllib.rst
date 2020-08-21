Reading binary files using ``urllib``
-----------------------------------------

Sometimes you want to retrieve a non-text (or binary) file such as an
image or video file. The data in these files is generally not useful to
print out, but you can easily make a copy of a URL to a local file on
your hard disk using ``urllib``.

The pattern is to open the URL and use ``read`` to download the
entire contents of the document into a string variable
(\ ``img``\ ) then write that information to a local file as
follows:

.. activecode:: curl1
      :language: python3

      import urllib.request, urllib.parse, urllib.error

      img = urllib.request.urlopen('http://data.pr4e.org/cover3.jpg').read()
      fhand = open('cover3.jpg', 'wb')
      fhand.write(img)
      fhand.close()

This program reads all of the data in at once across the network and
stores it in the variable ``img`` in the main memory of your
computer, then opens the file ``cover.jpg`` and writes the data
out to your disk. The ``wb`` argument for ``open()`` opens a binary file
for writing only. This program will work if the size of the file is less than
the size of the memory of your computer.

However if this is a large audio or video file, this program may crash
or at least run extremely slowly when your computer runs out of memory.
In order to avoid running out of memory, we retrieve the data in blocks
(or buffers) and then write each block to your disk before retrieving
the next block. This way the program can read any size file without
using up all of the memory you have in your computer.

.. activecode:: curl2
      :language: python3

      import urllib.request, urllib.parse, urllib.error

      img = urllib.request.urlopen('http://data.pr4e.org/cover3.jpg')
      fhand = open('cover3.jpg', 'wb')
      size = 0
      while True:
         info = img.read(100000)
         if len(info) < 1: break
         size = size + len(info)
         fhand.write(info)

      print(size, 'characters copied.')
      fhand.close()

In this example, we read only 100,000 characters at a time and then
write those characters to the ``cover.jpg`` file before
retrieving the next 100,000 characters of data from the web.