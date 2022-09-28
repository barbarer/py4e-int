Peer Instruction: Classes Multiple Choice Questions
---------------------------------------------------

.. mchoice:: ctp-classes-18_Classes_11
   :author: Cynthia Taylor
   :practice: T
   :answer_a: open_window
   :answer_b: accelerate
   :answer_c: num_wheels
   :answer_d: turn_right
   :answer_e: I don't know
   :correct: c
   :feedback_a: Incorrect! Method describes a specific action associated with a Class. "open_window" is a possbile action.
   :feedback_b: Incorrect! Method describes a specific action associated with a Class. "accelerate" is a possbile action
   :feedback_c: Correct! "num_wheels" is a possible attribute which describes a specific feature.
   :feedback_d: Incorrect! Method describes a specific action associated with a Class. "turn_right" is a possbile action.
   :feedback_e: Incorrect! Method describes a specific action associated with a Class.

   Which of the following is not a possible method for a ``Car`` class?


.. mchoice:: ctp-classes-18_Classes_15
   :author: Cynthia Taylor
   :practice: T
   :answer_a: 0 0
   :answer_b: 4 0
   :answer_c: 2 3
   :answer_d: 7 3
   :answer_e: I don't know
   :correct: b
   :feedback_a: Incorrect! Here, p2.x = 0 + 4 = 4 and p2.y = 0.
   :feedback_b: Correct! Here, p2.x = 0 + 4 = 4 and p2.y = 0.
   :feedback_c: Incorrect! Here, p2.x = 0 + 4 = 4 and p2.y = 0.
   :feedback_d: Incorrect! Here, p2.x = 0 + 4 = 4 and p2.y = 0.
   :feedback_e: Incorrect! Here, p2.x = 0 + 4 = 4 and p2.y = 0.

   What does this code output?

   .. code-block:: python

      class Point:

         def __init__ (self):
            self.x = 0
            self.y = 0

      p1 = Point()
      p1.x = p1.x + 2
      p1.y = p1.x + 3
      p2 = Point()
      p2.x = p2.x + 4
      print(p2.x, p2.y)


.. mchoice:: ctp-methods-19_Methods_5
   :author: Cynthia Taylor
   :practice: T
   :answer_a: do_it(d, e, f)
   :answer_b: do_it(self, d, e, f)
   :answer_c: do_it(t, d, e, f)
   :answer_d: t.do_it(d, e, f)
   :answer_e: t.do_it(t, d, e, f)
   :correct: d
   :feedback_a: Incorrect! You call a method using dot notation.
   :feedback_b: Incorrect! You call a method using dot notation.
   :feedback_c: Incorrect! You call a method using dot notation.
   :feedback_d: Correct! Use dot notation on the object to call a method.
   :feedback_e: Incorrect! Use dot notation and this will implicitly pass in the object as the first item, you don't also pass it in explicitly.

   If ``t`` is an object of class ``Thing`` and ``d``, ``e``, and ``f`` are defined, what is the proper way to call ``do_it``?

   .. code-block:: python

      class Thing(object):
         def do_it(self, a, b, c):
            ...



.. mchoice:: ctp-methods-19_Methods_7
   :author: Cynthia Taylor
   :practice: T
   :answer_a: 20
   :answer_b: [20]
   :answer_c: 22
   :answer_d: [22]
   :answer_e: I don't know
   :correct: d
   :feedback_a: Incorrect! Here, a = 4, b = 5 and self.val = a*b = 20. So, '[' + str(20 + 2) + ']' = [22].
   :feedback_b: Incorrect! Here, a = 4, b = 5 and self.val = a*b = 20. So, '[' + str(20 + 2) + ']' = [22].
   :feedback_c: Incorrect! Here, a = 4, b = 5 and self.val = a*b = 20. So, '[' + str(20 + 2) + ']' = [22].
   :feedback_d: Correct! Here, a = 4, b = 5 and self.val = a*b = 20. So, '[' + str(20 + 2) + ']' = [22].
   :feedback_e: Incorrect! Here, a = 4, b = 5 and self.val = a*b = 20. So, '[' + str(20 + 2) + ']' = [22].

   What does this code output?

   .. code-block:: python

      class Thing(object):

         def __init__(self, a, b):
            self.val = a * b

         def __str__(self):
            return '[' + str(self.val + 2) + ']'

      t = Thing(4, 5)
      print(t)


.. mchoice:: ctp-methods-19_Methods_9
   :author: Cynthia Taylor
   :practice: T
   :answer_a: Account(50) == Account(50)
   :answer_b: Account(80) == Account(90)
   :answer_c: Account(0) == Account(5)
   :answer_d: Account(0) == Account(0)
   :answer_e: More than one of the above
   :correct: c
   :feedback_a: Incorrect! Account(50) assigns 50 to self.gold and when called again assigns 50 to other.gold too. So, the return statement evaluates to False (False and False).
   :feedback_b: Incorrect! Account(80) assigns 80 to self.gold and Account(90) assigns 90 to other.gold. So, the return statement evaluates to False (False and False).
   :feedback_c: Correct! Account(0) assigns 0 to self.gold and Account(5) assigns 5 to other.gold. So, the return statement evaluates to True.
   :feedback_d: Incorrect! Account(0) assigns 0 to self.gold and and when called again assigns 0 to other.gold too. So, the return statement evaluates to False (True and False).
   :feedback_e: Incorrect! Account(0) assigns 0 to self.gold and Account(5) assigns 5 to other.gold. So, the return statement evaluates to True.

   What does this code output?

   .. code-block:: python

      class Account(object):
         def __init__(self, val):
            self.gold = val
         def __eq__(self, other):
            return self.gold==0 and other.gold==5


.. mchoice:: ctp-methods-19_Methods_12
   :author: Cynthia Taylor
   :practice: T

   Which code for ``__ne__`` is correct?

   -
       ::

         def __ne__(self, p):
            return not self == p

       +   Correct! self == p calls "__eq__". So, it essentially returns self != p.

   -
       ::

         def __ne__(self, p):
            return self.x == p.x and self.y == p.y

       -   Incorrect! It would return the opposite.

   -
       ::

         def __ne__(self, p):
            if self.x =! p.x or self.y != p.y:
               return True
            return False

       + Correct! If self != p, then the "if" condition would evaluate to True returning True. Otherwise, it would return False.

   -   I don't know

       - Incorrect!


.. mchoice:: ctp-methods-19_Methods_13
   :author: Cynthia Taylor
   :practice: T

   We want the point closer to the origin to be the lesser point. Which code is correct?

   -
       ::

         def __lt__(self, p):
            if self.x < p.x and self.y < p.y:
               return True
            return False

       -   Incorrect! Consider negative numbers as well. For instance, (self.x = -1) > (p.x = -5) but self.x is near closer to the origin.

   -
       ::

         def __lt__(self, p):
            if self.magnitude() < p.magnitude():
               return True
            return False

       +   Correct! This option uses magnitude and thus the relation stands true for negative numbers as well.

   -
       ::

         def __lt__(self, p):
            my_val = math.sqrt(self.x**2 + self.y**2)
            p_val = math.sqrt(p.x**2 + p.y**2)
            if my_val < p_val:
               return True
            return False

       + Correct! The equation "math.sqrt(x**2 + y**2)" measures the absolute distance of point (x, y) from (0, 0).

   -   I don't know

       - Incorrect!


.. mchoice:: ctp-methods-19_Methods_14
   :author: Cynthia Taylor
   :practice: T

   Which implementation for ``(__le__)`` is correct?

   -
       ::

         def __le__(self, p):
            if self < p or self == p:
               return True
            return False

       +  Correct! self < p will invoke "__lt__" and self == p will invoke "__eq__"

   -
       ::

         def __le__(self, p):
            if self.magnitude() <= p.magnitude():
               return True
            return False

       -  Incorrect! This will lead to erroneous results in case of negative co-ordinates.

   -
       ::

         def __le__(self, p):
            if self.x <= p.x and self.y <= p.y:
               return True
            return False

       -  Incorrect! This would have been correct if "and" is replaced by "or"

   -   I don't know

       -  Incorrect! Option A is correct. self < p will invoke "__lt__" and self == p will invoke "__eq__"
