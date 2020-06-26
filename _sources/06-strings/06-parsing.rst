Parsing strings
---------------

Often, we want to look into a string and find a substring. For example
if we were presented a series of lines formatted as follows:

``From stephen.marquard@uct.ac.za Sat Jan 5 09:14:16 2008``

and we wanted to pull out only the second half of the address (i.e.,
``uct.ac.za``) from each line, we can do this by using the
``find`` method and string slicing.

First, we will find the position of the at-sign in the string. Then we
will find the position of the first space *after* the at-sign. And then
we will use string slicing to extract the portion of the string which we
are looking for.

.. codelens:: strParsing
   :question: What is the value of sppos after the line with the red arrow executes?
   :breakline: 4
   :feedback: The second argument in find() is the start position.
   :correct: globals.sppos

   data = 'From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008'
   atpos = data.find('@')
   print(atpos)
   sppos = data.find(' ',atpos)
   print(sppos)
   host = data[atpos+1:sppos]
   print(host)


We use a version of the ``find`` method which allows us to
specify a position in the string where we want ``find`` to
start looking. When we slice, we extract the characters from "one beyond
the at-sign through up to *but not including* the space character".

The documentation for the ``find`` method is available at

https://docs.python.org/library/stdtypes.html#string-methods.

.. mchoice:: str-parse-mc-return
    :practice: T
    :answer_a: true
    :answer_b: false
    :correct: b
    :feedback_a: Parsing is used to look into a string and find a substring.
    :feedback_b: Parsing is used to look into a string and find a substring.

    True or false? Parsing is used only to look into a string?

.. fillintheblank:: str-parse-fitb-select
    :practice: T

    What method is used to parse through and select segments of a string?

    - :[Ff]ind: find is used to search through a string and select a certain part.
      :.*: Try again! How will we *find* what we're looking for?
