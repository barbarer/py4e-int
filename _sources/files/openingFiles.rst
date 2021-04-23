Opening files
-------------
.. index::
    pair: Function; Open
    pair: File; Open
    single: File Handle


When we want to read or write a file (say on your hard drive), we first
must *open* the file. Opening the file communicates with
your operating system, which knows where the data for each file is
stored. When you open a file, you are asking the operating system to
find the file by name and make sure the file exists. In this example, we
open the file *mbox.txt*, which should be stored in the same
folder that you are in when you start Python. You can download this file
from `www.py4e.com/code3/mbox.txt <http://www.py4e.com/code3/mbox.txt>`_
For learning purposes, we are using the shortened version of this file
``mbox-short.txt`` This file can be found and downloaded from
`www.py4e.com/code3/mbox-short.txt <http://www.py4e.com/code3/mbox-short.txt>`_


.. datafile:: mbox-short.txt
    :fromfile: mbox-short.txt
    :hide:

.. activecode:: fileOpen
    :caption: Opening a file
    :datafile: mbox-short.txt

    fhand = open('mbox-short.txt')
    print(fhand)

.. fillintheblank:: file-open-fitb-start

    Complete this line to open the file for reading: fhand = ______('mbox-short.txt')

    - :open: Yes, "open" is used to open a file.
      :.*: Try again.

If the ``open`` is successful, the operating system returns
a *file handle* object. The file handle object is not the actual data
contained in the file, but instead it is a "handle" that we can use to
read the data. You are given a handle if the requested file exists and
you have the proper permissions to read the file.

.. figure:: ../images/handle.svg
    :alt: A File Handle

.. fillintheblank:: file-open-fitb-object
    :practice: T

    A file |blank| is an object that is used to read or modify a file, not the actual data in a file.

    - :[Hh]andle: A file handle is used to read the data of a file.
      :.*: Try again.

If the file does not exist, ``open`` will fail with a traceback
and you will not get a file handle object.

.. code-block:: python

    >>> fhand = open('stuff.txt')
    Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
    FileNotFoundError: [Errno 2] No such file or directory: 'stuff.txt'

Later we will use ``try`` and ``except`` to deal more
gracefully with the situation where we attempt to open a file that does
not exist.

.. mchoice:: file-open-mc-exist
    :practice: T
    :answer_a: the program will close
    :answer_b: nothing
    :answer_c: open will fail
    :answer_d: the program will create a new file
    :correct: c
    :feedback_a: If a file does not exist, the program will not close, but cannot run as expected.
    :feedback_b: Something *will* happen if the file does not exist.
    :feedback_c: If a file does not exist, open will fail and you will get an error.
    :feedback_d: The program will not make a new file on its own if it tries to open a file that does not exist.

    What will happen if you try to open a file that does not exist?
