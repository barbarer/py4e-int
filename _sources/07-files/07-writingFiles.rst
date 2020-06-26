Writing files
-------------

To write a file, you have to open it with mode "w" as a second
parameter:

.. code-block:: python

   >>> fout = open('output.txt', 'w')
   >>> print(fout)
   <_io.TextIOWrapper name='output.txt' mode='w' encoding='cp1252'>


If the file already exists, opening it in write mode clears out the old
data and starts fresh, so be careful! If the file doesn't exist, a new
one is created.

The ``write`` method of the file handle object puts data into
the file, returning the number of characters written. The default write
mode is text for writing (and reading) strings.

.. code-block:: python

   >>> line1 = "This here's the wattle,\n"
   >>> fout.write(line1)
   24


Again, the file object keeps track of where it is, so if you call
``write`` again, it adds the new data to the end.

We must make sure to manage the ends of lines as we write to the file by
explicitly inserting the newline character when we want to end a line.
The ``print`` statement automatically appends a newline, but
the ``write`` method does not add the newline automatically.

.. code-block:: python

   >>> line2 = 'the emblem of our land.\n'
   >>> fout.write(line2)
   24


When you are done writing, you have to close the file to make sure that
the last bit of data is physically written to the disk so it will not be
lost if the power goes off.

.. code-block:: python

   >>> fout.close()


We could close the files which we open for read as well, but we can be a
little sloppy if we are only opening a few files since Python makes sure
that all open files are closed when the program ends. When we are
writing files, we want to explicitly close the files so as to leave
nothing to chance.
