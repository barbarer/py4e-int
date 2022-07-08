Tuple Assignment
----------------

.. index::
   single: Tuple Assignment
   single: Swap Pattern

One of the unique syntactic features of Python is the
ability to have a tuple on the left side of an assignment statement.
This allows you to assign more than one variable at a time when the left
side is a sequence.

In this example we have a two-element list (which is a sequence) and
assign the first and second elements of the sequence to the variables
``x`` and ``y`` in a single statement.

.. activecode:: tuplesassignment_exercise_1
   :nocodelens:

   m = [ 'have', 'fun' ]
   x, y = m
   print(x) #should print 'have'
   print(y) #should print 'fun'


This isn't magic! Python *roughly* translates the tuple assignment syntax
to the following:

.. activecode:: tupleassignment_exercise_2
   :nocodelens:

   m = [ 'have', 'fun' ]
   x = m[0]
   y = m[1]
   print(x) #should print 'have'
   print(y) #should print 'fun'

It's worth noting that Python does not translate the syntax literally. For example, if
you try this with a dictionary, it won't work as you might expect.


Stylistically, when we use a tuple on the left side of the assignment
statement, we omit the parentheses, but the following is an equally
valid syntax:

.. activecode:: tupleassignment_exercise_3
   :nocodelens:

   m = [ 'have', 'fun' ]
   (x, y) = m
   print(x) #should print 'have'
   print(y) #should print 'fun'

.. mchoice:: question10_3_1
   :practice: T
   :answer_a: ['Harden']
   :answer_b: 'James'
   :answer_c: 'Harden'
   :correct: c
   :feedback_a: Incorrect! The values in random_list are strings, not lists. Try again.
   :feedback_b: Incorrect! x is listed before y in the tuple on the left side of the assignment statement, so the first value in random_list should be assigned to x. Try again.
   :feedback_c: Correct! This properly assigns the first element of the list to 'x'.

   What is associated with the variable 'x' once the following code is run?

   .. code-block:: python

      random_list = ['Harden', 'James']
      (x, y) = random_list


A particularly clever application of tuple assignment allows us to
*swap* the values of two variables in a single statement:

.. code-block:: python

   >>> a, b = b, a


Both sides of this statement are tuples, but Python interprets the left side to be a tuple of
variables and the right side to be a tuple of expressions. All of
the expressions on the right side are evaluated before any of the
assignments. This means that the values of ``b`` and ``a`` on the right side are evaluated,
then ``a`` and ``b`` on the left side take on their values.


The number of variables on the left and the number of values on the
right must be the same:

.. code-block:: python

   >>> a, b = 1, 2, 3
   ValueError: too many values to unpack

.. activecode:: question10_3_2
   :nocodelens:
   :practice: T

   Write code to swap the values of tuple t.
   ~~~~
   t = ('Antetokounmpo', 'Giannis')

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(t, ('Giannis', 'Antetokounmpo'), "Checking that the two values of the tuple were swapped.")

   myTests().main()

More generally, the right side can be any kind of sequence (string,
list, or tuple). For example, to split an email address into a username
and a domain, you could write:

.. code-block:: python

   >>> addr = 'monty@python.org'
   >>> uname, domain = addr.split('@')


The return value from ``split()`` is a list with two elements;
the first element is assigned to ``uname``\ , the second to
``domain``.

.. code-block:: python

   >>> print(uname)
   monty
   >>> print(domain)
   python.org

.. mchoice:: question10_3_3
   :practice: T
   :answer_a: hotmail.com
   :answer_b: @hotmail.com
   :answer_c: ['hotmail.com']
   :correct: a
   :feedback_a: Correct! The split() method splits the email address at '@'.
   :feedback_b: Incorrect! The split() method doesn't include its parameter in any of the elements of its returned list. Try again.
   :feedback_c: Incorrect! The split() method returns a list of strings, not a list of lists. Try again.

   What is associated with the variable 'domain' once the following code is run?

   .. code-block:: python

      email = yeezy@hotmail.com
      uname, domain = email.split('@')
