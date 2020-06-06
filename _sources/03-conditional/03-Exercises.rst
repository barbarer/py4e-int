Exercises
---------

**Exercise 1: Rewrite your pay computation to give the employee 1.5 times
the hourly rate for hours worked above 40 hours.**

.. code-block::

   Enter Hours: 45
   Enter Rate: 10
   Pay: 475.0


**Exercise 2: Rewrite your pay program using ``try`` and
``except`` so that your program handles non-numeric input
gracefully by printing a message and exiting the program. The following
shows two executions of the program:**

.. code-block::

   Enter Hours: 20
   Enter Rate: nine
   Error, please enter numeric input


.. code-block::

   Enter Hours: forty
   Error, please enter numeric input


**Exercise 3: Write a program to prompt for a score between 0.0 and 1.0.
If the score is out of range, print an error message. If the score is
between 0.0 and 1.0, print a grade using the following table:**

.. code-block::

    Score   Grade
   >= 0.9     A
   >= 0.8     B
   >= 0.7     C
   >= 0.6     D
    < 0.6     F


.. code-block::

   Enter score: 0.95
   A


.. code-block::

   Enter score: perfect
   Bad score


.. code-block::

   Enter score: 10.0
   Bad score


.. code-block::

   Enter score: 0.75
   C


.. code-block::

   Enter score: 0.5
   F


Run the program repeatedly as shown above to test the various different
values for input.
