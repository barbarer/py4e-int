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

.. mchoice:: network_binary_tf
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Correct! The 'wb' argument stands for <b>W</b>rite <b>B</b>inary.
    :feedback_b: Try again!

    True or False? The ``wb`` argument opens a binary file for writing only.

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

.. mchoice:: network_binary_mc
    :practice: T
    :answer_a: It deletes any characters past the first 100,000.
    :answer_b: It only reads 100,000 characters then stops.
    :answer_c: It only looks at 100,000 images.
    :answer_d: It limits how many characters are read at a time.
    :correct: d
    :feedback_a: This will not delete characters.
    :feedback_b: This will continue to read more characters, not stop after 100,000.
    :feedback_c: This line deals with the data characters of the images, not the images themselves.
    :feedback_d: read(100000) limits the number of characters read at a time to 100,000.

    What is the purpose of the line ``info = img.read(100000)`` in the following code?

    ::

      img = urllib.request.urlopen('http://data.pr4e.org/cover3.jpg')
      fhand = open('cover3.jpg', 'wb')
      size = 0
      while True:
          info = img.read(100000)
          if len(info) < 1: break
          size = size + len(info)
          fhand.write(info)
