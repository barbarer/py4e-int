Tuples are Immutable
--------------------

.. index::
   single: Tuple
   single: Sequence
   single: Immutable
   single: Slice Operator
   single: Item Assignment


A tuple is a sequence of values much like a list. The values stored
in a tuple can be any type, and they are indexed by integers. The
important difference is that tuples are *immutable*.
Tuples are also *comparable* and
*hashable* so we can sort lists of them and use tuples as
key values in Python dictionaries.

Fun fact: The word "tuple" comes from the names given to sequences
of numbers of varying lengths: single, double, triple, quadruple,
quintuple, sextuple, septuple, etc.


Syntactically, a tuple is a comma-separated list of values:

.. code-block:: python

   t = 'a', 'b', 'c', 'd', 'e'


Although it is not necessary, it is common to enclose tuples in
parentheses to help us quickly identify tuples when we look at Python
code:


.. code-block:: python

   t = ('a', 'b', 'c', 'd', 'e')


To create a tuple with a single element, you have to include the final
comma:

.. activecode:: tuplesareimmutable_exercise_1

   t1 = ('a',)
   print(type(t1))


Without the comma Python treats ``('a')`` as an expression with a string
in parentheses that evaluates to a string:

.. activecode:: tuplesareimmutable_exercise_2

   t2 = ('a')
   print(type(t2))


If you want to create an empty tuple, you don't need to include a comma:

.. activecode:: tuplesareimmutable_exercise_3

   t = ()
   print(type(t))


Another way to construct a tuple is the built-in function
``tuple``. With no argument, it creates an empty tuple:

.. activecode:: tuplesareimmutable_exercise_4

   t = tuple()
   print(t) #should print ()


.. mchoice:: question10_1_1
   :practice: T
   :answer_a: t = ()
   :answer_b: t = tuple()
   :answer_c: t = tup()
   :answer_d: t = 'a', 'b', 'c', 'd'
   :correct: a,b,d
   :feedback_a: Correct! This is one way to create a tuple.
   :feedback_b: Correct! This is one way to create a tuple.
   :feedback_c: Incorrect! This is a syntax error. Try again.
   :feedback_d: Correct! This is one way to create a tuple.

   Which of these lines of code correctly creates a tuple? (select all answers)

If the argument is a sequence (string, list, or tuple), the result of
the call to ``tuple`` is a tuple with the elements of the
sequence:

.. activecode:: tuplesareimmutable_exercise_5

   t = tuple('lupins')
   print(t) #should print ('l', 'u', 'p', 'i', 'n', 's')


Because ``tuple`` is the name of a constructor, you should
avoid using it as a variable name.

Most list operators also work on tuples. The bracket operator indexes an
element:

.. activecode:: tuplesareimmutable_exercise6

   t = ('a', 'b', 'c', 'd', 'e')
   print(t[0]) #should print 'a'


And the slice operator selects a range of elements.

.. activecode:: tuplesareimmutable_exercise7

   t = ('a', 'b', 'c', 'd', 'e')
   print(t[1:3]) #should print ('b', 'c')

.. mchoice:: question10_1_2
   :practice: T
   :answer_a: t['e ']
   :answer_b: t[3]
   :answer_c: t[4]
   :correct: b
   :feedback_a: Incorrect! The bracket operator takes the index of a value as its parameter, not the value itself. Try again.
   :feedback_b: Correct! The index 3 grabs the fourth item in tuple t.
   :feedback_c: Incorrect! Remember, indices start at 0, not 1. Try again.

   Which line of code correctly grabs the fourth element of tuple t?

   .. code-block:: python

      t = ('Ep', 'is', 'od', 'e ', 'III')

But if you try to modify one of the elements of the tuple, you get an
error:

.. activecode:: tuplesareimmutable_exercise8

   t = ('a', 'b', 'c', 'd', 'e')
   t[0] = 'A'
   print(t) #TypeError: object doesn't support item assignment


You can't modify the elements of a tuple, but you can replace one tuple
with another:

.. activecode:: tuplesareimmutable_exercise9

   t = ('a', 'b', 'c', 'd', 'e')
   t = ('A',) + t[1:]
   print(t) #should print ('A', 'b', 'c', 'd', 'e')



.. activecode:: question10_1_3
   :practice: T
   :nocodelens:

   Write code that replaces the third and sixth elements of tuple t with their capitalized versions.
   ~~~~
   t = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(t, ('a', 'b', 'C', 'd', 'e', 'F', 'g', 'h'), "Making sure 'C' and 'F' are capitalized.")

   myTests().main()
