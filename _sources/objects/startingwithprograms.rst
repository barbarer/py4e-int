Starting with programs
----------------------

A program in its most basic form takes some input, does some processing, and
produces some output.  Our elevator conversion program demonstrates a very
short but complete program showing all three of these steps.

.. activecode:: startingprograms_elev
   :coach:

   usf = input('Enter the US Floor Number: ')
   wf = int(usf) - 1
   print('Non-US Floor Number is',wf)

If we think a bit more about this program, there is the "outside world" and
the program. The input and output aspects are where the program interacts
with the outside world.  Within the program we have code and data to accomplish
the task the program is designed to solve.

.. image:: ../images/program.svg
   :align: center
   :scale: 15%
   :alt: A Program



One way to think about object-oriented programming is that it separates
our program into multiple "zones." Each zone contains some code and data
(like a program) and has well defined interactions with the outside world
and the other zones within the program.

If we look back at the link extraction application where we used the
BeautifulSoup library, we can see a program that is constructed by connecting
different objects together to accomplish a task:

.. activecode:: urllinksparser
   :language: python3

   import urllib.request, urllib.parse, urllib.error
   from bs4 import BeautifulSoup
   import ssl

   # Ignore SSL certificate errors
   ctx = ssl.create_default_context()
   ctx.check_hostname = False
   ctx.verify_mode = ssl.CERT_NONE

   url = "https://www.nytimes.com/"
   html = urllib.request.urlopen(url, context=ctx).read()
   soup = BeautifulSoup(html, 'html.parser')

   # Retrieve all of the anchor tags
   tags = soup('a')
   for tag in tags:
       print(tag.get('href', None))


We pass the url into ``urllib`` to retrieve
the data from the web.  The ``urllib`` library uses the ``socket`` library to
make the actual network connection to retrieve the data. We take the string
that ``urllib`` returns and hand it to BeautifulSoup for parsing.
BeautifulSoup makes use of the object
``html.parser``\ ^[https://docs.python.org/3/library/html.parser.html] and returns an object.
We call the ``tags()`` method on the returned object that returns a dictionary of tag
objects. We loop through the tags and call the ``get()`` method for each tag
to print out the ``href`` attribute.

We can draw a picture of this program and how the objects work together.

.. image:: ../images/program-oo.svg
   :align: center
   :scale: 10%
   :alt: A Program as Network of Objects


.. mchoice:: urllib_objects
   :practice: T
   :answer_a: BeautifulSoup creates and returns an object to soup
   :answer_b: The following program is sequential and not object oriented.
   :answer_c: The following program is an example of procedural programming.
   :answer_d: The program will give a 'NameError' as function BeautifulSoup
              is called before its defined.
   :correct: a
   :feedback_a: BeautifulSoup makes use of the object 'html.parser'
                and returns an object.
   :feedback_b: The program may look sequential but it also calls on other classes to return
                objects.
   :feedback_c: The program inherits functions from other classes with the import statements instead
                of using procedures.
   :feedback_d: BeautifulSoup is imported to the program.

   Which of the following is true about the following code?

   ::

     import urllib.request, urllib.parse, urllib.error
     from bs4 import BeautifulSoup
     import ssl

     # Ignore SSL certificate errors
      ctx = ssl.create_default_context()
      ctx.check_hostname = False
      ctx.verify_mode = ssl.CERT_NONE

     url = "https://www.nytimes.com/"
     html = urllib.request.urlopen(url, context=ctx).read()
     soup = BeautifulSoup(html, 'html.parser')
     print(soup('a'))


The key here is not to understand perfectly how this program works but to see
how we build a network of interacting objects and orchestrate the movement
of information between the objects to create a program.  It is also important
to note that when you looked at that program several chapters back, you could
fully understand what was going on in the program without even realizing
that the program was "orchestrating the movement of data between objects."
It was just lines of code that got the job done.
