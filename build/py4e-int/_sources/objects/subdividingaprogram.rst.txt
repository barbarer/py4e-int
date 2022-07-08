Subdividing a problem
---------------------

One of the advantages of the object-oriented approach is that it can
hide complexity. For example, while we need to know how to use the
``urllib`` and BeautifulSoup code, we do not need to know how those libraries
work internally. This allows us to focus on the part of the problem we need to
solve and ignore the other parts of the program.

.. image:: ../images/program-oo-code.svg
   :align: center
   :scale: 7%
   :alt: Ignoring Detail When Using an Object

.. fillintheblank:: subdividing_complexity

   One of the advantages of the __________ approach is that it can hide complexity.

   - :[Oo]bject[- ][Oo]riented: Yes, we do not need to know how the object classes
      work internally when we use them.
     :.*: Try again!

This ability to focus exclusively on the part of a program that we care about
and ignore the rest is also helpful to the developers of the objects that we use.
For example, the programmers developing BeautifulSoup do not need to
know or care about how we retrieve our HTML page, what parts we want to
read, or what we plan to do with the data we extract from the web page.

.. image:: ../images/program-oo-bs4.svg
   :align: center
   :scale: 7%
   :alt: Ignoring Detail When Building an Object
