Retrieving web pages with ``urllib``
----------------------------------------

While we can manually send and receive data over HTTP using the socket
library, there is a much simpler way to perform this common task in
Python by using the ``urllib`` library.

Using ``urllib``, you can treat a web page much like a file.
You simply indicate which web page you would like to retrieve and
``urllib`` handles all of the HTTP protocol and header details.

.. fillintheblank:: network_retrieve_fitb
    :practice: T

    The _______ library is used to simplify sending and receiving data from a web page.

    - :urllib: The urllib library treats a web page like a file and makes it much easier to parse the page.
      :.*: Try again! What python library would be most useful for parsing a web page?

The equivalent code to read the *romeo.txt* file from the web
using ``urllib`` is as follows:

.. activecode:: urllib1
    :language: python3

    import urllib.request

    fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
    for line in fhand:
        print(line.decode().strip())

Once the web page has been opened with ``urllib.urlopen``, we
can treat it like a file and read through it using a ``for``
loop.

When the program runs, we only see the output of the contents of the
file. The headers are still sent, but the ``urllib`` code
consumes the headers and only returns the data to us.

.. mchoice:: network_retrieve_tf
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Try again.
    :feedback_b: The urllib code consumes the headers and only returns the data to us - the data being the contents.

    True or False? The program above shows the headers and contents of the file.

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

.. mchoice:: network_retrieve_tf2
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Correct! urllib makes it possible to treat a web page like a local file.
    :feedback_b: Try again.

    True or False? The urllib library opens a web page and allows it to be read like a file.
