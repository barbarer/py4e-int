Using objects
-------------

As it turns out, we have been using objects all along in this book. Python
provides us with many built-in objects. Here is some simple code
where the first few lines should feel very simple and natural to you.

.. activecode:: usingobjects
   :coach:

   stuff = list()
   stuff.append('python')
   stuff.append('chuck')
   stuff.sort()
   print (stuff[0])
   print (stuff.__getitem__(0))
   print (list.__getitem__(stuff,0))

Instead of focusing on what these lines accomplish, let's look at what is
really happening from the point of view of object-oriented programming.
Don't worry if the following paragraphs don't make any sense the
first time you read them because we have not yet defined all of these terms.

The first line *constructs* an object of type ``list``\ , the second and third
lines *call* the ``append()`` *method*\ , the fourth line calls
the ``sort()`` method, and the fifth line *retrieves* the item at position 0.

The sixth line calls the ``__getitem__()\ ``method in the``\ stuff`` list
with a parameter of zero.

.. code-block:: python

   print (stuff.__getitem__(0))


The seventh line is an even more verbose way of retrieving the 0th item
in the list.

.. code-block:: python

   print (list.__getitem__(stuff,0))


In this code, we call the ``__getitem__\ ``method in the``\ list`` class
and *pass* the list and the item we want retrieved from the list
as parameters.

The last three lines of the program are equivalent, but it is more
convenient to simply use the square bracket syntax to look up an item at
a particular position in a list.

We can take a look at the capabilities of an object by
looking at the output of the ``dir()`` function:

.. activecode:: dir_activecode
   :coach:

   stuff = list()
   print(dir(stuff))
   



The rest of this chapter will define all of the above terms so make sure to
come back after you finish the chapter and re-read the above paragraphs to
check your understanding.