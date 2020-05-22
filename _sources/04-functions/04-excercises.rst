Exercises
---------

**Exercise 4: What is the purpose of the "def" keyword in Python?**

a) It is slang that means "the following code is really cool"\
b) It indicates the start of a function\
c) It indicates that the following indented section of code is to be
stored for later\
d) b and c are both true\
e) None of the above

**Exercise 5: What will the following Python program print out?**

.. code-block:: python

   def fred():
      print("Zap")

   def jane():
      print("ABC")

   jane()
   fred()
   jane()


a) Zap ABC jane fred jane\
b) Zap ABC Zap\
c) ABC Zap jane\
d) ABC Zap ABC\
e) Zap Zap Zap

**Exercise 6: Rewrite your pay computation with time-and-a-half for
overtime and create a function called ``computepay`` which
takes two parameters (\ ``hours`` and ``rate``\ ).**

.. code-block::

   Enter Hours: 45
   Enter Rate: 10
   Pay: 475.0


**Exercise 7: Rewrite the grade program from the previous chapter using a
function called ``computegrade`` that takes a score as its
parameter and returns a grade as a string.**

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


Run the program repeatedly to test the various different values for
input.
