Advanced Text Parsing
----------------------

.. index::
   single: Translate Method


.. activecode:: fileOpen2
   :available_files: romeo.txt

   with open("romeo2.txt", "r") as filename:
       lines = filename.readlines()
       counts = {}
       for line in lines:
           for word in line.split():
               if word not in counts.keys():
                   counts[word] = 1
               else:
                   counts[word] += 1
   print(counts)

In the above example using the file *romeo.txt*\ , we made the
file as simple as possible by removing all punctuation by hand. The
actual text has lots of punctuation, as shown below.

.. code-block::

   But, soft! what light through yonder window breaks?
   It is the east, and Juliet is the sun.
   Arise, fair sun, and kill the envious moon,
   Who is already sick and pale with grief,


Since the Python ``split`` function looks for spaces and treats
words as tokens separated by spaces, we would treat the words "soft!"
and "soft" as *different* words and create a separate dictionary entry
for each word.

Also since the file has capitalization, we would treat "who" and "Who"
as different words with different counts.

We can solve both these problems by using the string methods
``lower``\ , ``punctuation``\ , and
``translate``. The ``translate`` is the most subtle of
the methods. Here is the documentation for ``translate``\ :

``line.translate(str.maketrans(fromstr, tostr, deletestr))``

*Replace the characters in ``fromstr`` with the character in the same position in ``tostr``
and delete all characters that are in ``deletestr``.
The ``fromstr`` and ``tostr`` can be empty strings and the ``deletestr``
parameter can be omitted.*

We will not specify the ``tostr`` but we will use the
``deletestr`` parameter to delete all of the punctuation. We
will even let Python tell us the list of characters that it considers
"punctuation":

.. mchoice:: question9_5_1
   :practice: T
   :answer_a: line.translate(str.maketrans(fromstr, tostr, deletestr))
   :answer_b: line.translate(fromstr, tostr, deletestr)
   :answer_c: line.translate(str.translate(fromstr, tostr, deletestr))
   :correct: a
   :feedback_a: Correct! In order to use .translate(), you have to map the translation using the .maketrans() method.
   :feedback_b: Try again! In order to use .translate(), you have to map the translation
   :feedback_c: Try again! You have to map the translation using the .maketrans() method.

   Which line of code correctly uses the .translate() method?

.. code-block:: python

   >>> import string
   >>> string.punctuation
   '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'


.. note::

   The parameters used by ``translate`` were different in Python 2.0.

We make the following modifications to our program:


.. activecode:: fileOpen3_v2
   :language: python3
   :datafile: romeo-full.txt

   import string

   with open("romeo-full.txt", "r") as fhand:
       lines = fhand.readlines()
   counts = {}
   table = str.maketrans("", "", string.punctuation)
   for line in lines:
       line = line.translate(table)
       for word in line.split():
           if word not in counts.keys():
               counts[word] = 1
           else:
               counts[word] += 1
   print(counts)

.. mchoice:: question9_5_2
   :answer_a: line 7
   :answer_b: line 8
   :answer_c: line 9
   :answer_d: line 10
   :correct: b, c
   :feedback_a: Try again! This line iterate line.split
   :feedback_b: Correct! This line creates the table, which tells the translate method what to change/remove.
   :feedback_c: Correct! This line runs the translate method, which is where the punctuation is filtered out.
   :feedback_d: Try again! This line translates the punctuation, but does not remove them.

   Which line(s) in the above activecode remove the punctuation from the text?

Part of learning the "Art of Python" or "Thinking Pythonically" is
realizing that Python often has built-in capabilities for many common
data analysis problems. Over time, you will see enough example code and
read enough of the documentation to know where to look to see if someone
has already written something that makes your job much easier.

The following is an abbreviated version of the output:

.. code-block::

   Enter the file name: romeo-full.txt
   {'swearst': 1, 'all': 6, 'afeard': 1, 'leave': 2, 'these': 2,
   'kinsmen': 2, 'what': 11, 'thinkst': 1, 'love': 24, 'cloak': 1,
   a': 24, 'orchard': 2, 'light': 5, 'lovers': 2, 'romeo': 40,
   'maiden': 1, 'whiteupturned': 1, 'juliet': 32, 'gentleman': 1,
   'it': 22, 'leans': 1, 'canst': 1, 'having': 1, ...}


Looking through this output is still unwieldy and we can use Python to
give us exactly what we are looking for, but to do so, we need to learn
about Python *tuples*. We will pick up this example once
we learn about tuples.
