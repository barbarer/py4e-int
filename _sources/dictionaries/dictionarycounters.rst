Dictionary as a Set of Counters
-------------------------------

.. index::
   single: Counter
   single: Implementation
   single: Get Method


Suppose you are given a string and you want to count how many times each
letter appears. There are several ways you could do it:

.  You could create 26 variables, one for each letter of the alphabet.
   Then you could traverse the string and, for each character,
   increment the corresponding counter, probably using a chained
   conditional.

.  You could create a list with 26 elements.
   Then you could convert each character to a number (using the built-in function
   ``ord``\ ), use the number as an index into the list, and
   increment the appropriate counter.

.  You could create a dictionary with characters as keys and counters as the corresponding values.
   The first time you see a character, you
   would add an item to the dictionary. After that you would increment
   the value of an existing item.

Each of these options performs the same computation, but each of them
implements that computation in a different way.


An *implementation* is a way of performing a computation;
some implementations are better than others. For example, an advantage
of the dictionary implementation is that we don't have to know ahead of
time which letters appear in the string and we only have to make room
for the letters that do appear.

Here is what the code might look like:

.. activecode:: brontosaurausexample

   word = 'brontosaurus'
   d = dict()
   for c in word:
       if c not in d:
           d[c] = 1
       else:
           d[c] = d[c] + 1
   print(d)


We are effectively computing a *histogram*, which is a
statistical term for a set of counters (or frequencies).


The `for` loop traverses the string. Each time through the
loop, if the character `c` is not in the dictionary, we
create a new item with key `c` and the initial value 1 (since
we have seen this letter once). If `c` is already in the
dictionary we increment `d[c]`.


Here's the output of the program:

.. code-block:: python

   {'a': 1, 'b': 1, 'o': 2, 'n': 1, 's': 2, 'r': 2, 'u': 2, 't': 1}



The histogram indicates that the letters "a" and "b"
appear once; "o" appears twice, and so on.

.. parsonsprob:: question9_2_1
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that prints a dictionary containing the amount of times a letter appears in the string 'word'.
   -----
   word = "cheerful"
   =====
   d = dictionary() #distractor
   =====
   d = dict()
   =====
   for char in word:
   =====
   for char in d: #distractor
   =====
    if char in d: #distractor
   =====
    if char not in d:
   =====
     d[char] = 1
   =====
    else:
   =====
     d[char] += 1
   =====
   print(d)


Dictionaries have a method called `get` that takes a key and
a default value. If the key appears in the dictionary, `get`
returns the corresponding value; otherwise it returns the default value.
For example:

.. code-block:: python

   >>> counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
   >>> print(counts.get('jan', 0))
   100
   >>> print(counts.get('tim', 0))
   0

.. mchoice:: question9_2_2
    :practice: T
    :answer_a: print(names.get('Russell'))
    :answer_b: names.get('Russell')
    :answer_c: print(names.get('Russell', 0))
    :answer_d: names.get('Russell', 0)
    :correct: c
    :feedback_a: Try again! There is no default value, so it will not print out anything
    :feedback_b: Try again! There is no default value, so it will not return anything. The statement is also not being printed out.
    :feedback_c: Correct! This line of code uses print so that the number is printed and not just returned, and it makes sure to include the default value in case 'Russell' does not appear in the dictionary.
    :feedback_d: Try again! This statement does not print out the number, just returns the number.

    Which use of the get method correctly returns the amount of times the name "Russell" appears in the dictionary names?

    .. code-block:: python

       names = {'James' : 10, 'Russell' : 2, 'Kevin' : 27}

We can use ``get`` to write our histogram loop more concisely.
Because the ``get`` method automatically handles the case where
a key is not in a dictionary, we can reduce four lines down to one and
eliminate the ``if`` statement.

.. code-block:: python

   word = 'brontosaurus'
   d = dict()
   for c in word:
       d[c] = d.get(c,0) + 1
   print(d)


The use of the ``get`` method to simplify this counting loop
ends up being a very commonly used "idiom" in Python and we will use it
many times in the rest of the book. So you should take a moment and
compare the loop using the ``if`` statement and ``in``
operator with the loop using the ``get`` method. They do
exactly the same thing, but one is more succinct.


.. mchoice:: question9_2_3
   :practice: T
   :answer_a: 0
   :answer_b: 1
   :answer_c: None
   :correct: a
   :feedback_a: Correct! Since there isn't a "d" in word, the code returns the default value.
   :feedback_b: Try again! The letter is not in the word so it will not enter the for loop.
   :feedback_c: Try again! If the letter does not appear in the word, it should print out the default value.

   What does the following code print?

   .. code-block:: python

      word = "incomprehensible"
      d = dict()
      for char in word:
          if char not in d:
              d[char] = 1
          else:
              d[char] = d[char] + 1
      print(d.get('d', 0))
