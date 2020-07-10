Tuple assignment
----------------

One of the unique syntactic features of the Python language is the
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


It is not magic, Python *roughly* translates the tuple assignment syntax
to be the following. (Python does not translate the syntax literally. For example, if
you try this with a dictionary, it will not work as might expect.)

.. activecode:: tupleassignment_exercise_2
   :nocodelens:

   m = [ 'have', 'fun' ]
   x = m[0]
   y = m[1]
   print(x) #should print 'have'
   print(y) #should print 'fun'

Stylistically when we use a tuple on the left side of the assignment
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
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct! This properly assigns the first element of the list with 'x'.

   What is associated with the variable 'x' once the following code is run?

   .. code-block:: python

      random_list = ['Harden', 'James']
      (x, y) = random_list


A particularly clever application of tuple assignment allows us to
*swap* the values of two variables in a single statement:

.. code-block:: python

   >>> a, b = b, a


Both sides of this statement are tuples, but the left side is a tuple of
variables; the right side is a tuple of expressions. Each value on the
right side is assigned to its respective variable on the left side. All
the expressions on the right side are evaluated before any of the
assignments.

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
           self.assertEqual(t, ('Giannis', 'Antetokounmpo'), "Use the application of tuple assignment shown above.")

   myTests().main()

More generally, the right side can be any kind of sequence (string,
list, or tuple). For example, to split an email address into a user name
and a domain, you could write:

.. code-block:: python

   >>> addr = 'monty@python.org'
   >>> uname, domain = addr.split('@')


The return value from ``split`` is a list with two elements;
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
   :feedback_a: Correct! The .split() method splits the email address at '@'.
   :feedback_b: Try again!
   :feedback_c: Try again!

   What is associated with the variable 'domain' once the following code is run?

   .. code-block:: python

      email = yeezy@hotmail.com
      uname, domain = email.split('@')
