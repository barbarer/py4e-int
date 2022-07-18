Peer Instruction: Objects Multiple Choice Questions
-----------------------------------------------------------------------------

.. mchoice:: dz-lecture_26_2
   :author: Dan Zingaro
   :practice: T
   :answer_a: 20
   :answer_b: [20]
   :answer_c: 22
   :answer_d: [22]
   :answer_e: A memory address
   :correct: d
   :feedback_a: Try again. str is a string combination of '[', str(self.val + 2) and ']'. self.val equals to 20, which is the result of a*b. Therefore, t is [22].
   :feedback_b: Try again. str is a string combination of '[', str(self.val + 2) and ']'. self.val equals to 20, which is the result of a*b. Therefore, t is [22].
   :feedback_c: Try again. str is a string combination of '[', str(self.val + 2) and ']'. Therefore, t is a string that starts with '[' and ends with ']'. t is [22].
   :feedback_d: Correct! str is a string combination of '[', str(self.val + 2) and ']' and self.val equals to 20. Therefore, t equals to [22].
   :feedback_e: Try again. str is a string combination of '[', str(self.val + 2) and ']'. self.val equals to 20, which is the result of a*b. Therefore, t is [22].
   
    What is the output of this code?

   .. code-block:: python

      class Thing(object):

        def __init__(self, a, b):
            self.val = a * b
        def __str__(self):
            return '[' + str(self.val + 2) + ']'

      t = Thing(4, 5)
      print(t)

.. mchoice:: dz-lecture_26_6
   :author: Dan Zingaro
   :practice: T
   :answer_a: Account(50) == Account(50)
   :answer_b: Account(80) == Account(90)
   :answer_c: Account(0) == Account(5)
   :answer_d: Account(0) == Account(0)
   :answer_e: More than one of the above
   :correct: c
   :feedback_a: Try again. The equation only evaluates to True when self.gold equals to 0 and other.gold equals to 5. Account(50) == Account (50) returns False. 
   :feedback_b: Try again. The equation only evaluates to True when self.gold equals to 0 and other.gold equals to 5. Account(80) == Account (90) returns False.
   :feedback_c: Correct! The equation only evaluates to True when self.gold equals to 0 and other.gold equals to 5. Account(0) == Account (5) returns True.
   :feedback_d: Try again. The equation only evaluates to True when self.gold equals to 0 and other.gold equals to 5. Account(0) == Account (0) returns False.
   :feedback_e: Try again. There is only one right answer. The equation only evaluates to True when self.gold equals to 0 and other.gold equals to 5.
   
    Which of the following would evaluate to True?

   .. code-block:: python

      class Account(object):
        def __init__(self, val):
            '''(int) -> Account
            Create bank account with val gold.
            '''
            self.gold = val

        def __eq__(self, other):
            '''(Account) -> bool'''
            return self.gold == 0 and other.gold == 5

.. mchoice:: dz-lecture_26_7
   :author: Dan Zingaro
   :practice: T
   :answer_a: Account(50) == Account(50)
   :answer_b: Account(80) == Account(90)
   :answer_c: Account(0) == Account(5)
   :answer_d: Account(0) == Account(0)
   :answer_e: More than one of the above
   :correct: e
   :feedback_a: Try again. The equation evaluates to True when self.gold equals to 0. As long as the first object in the equation equals to 0, the equation evaluates True. 
   :feedback_b: Try again. The equation evaluates to True when self.gold equals to 0. As long as the first object in the equation equals to 0, the equation evaluates True. 
   :feedback_c: Try again. There is more than one answer. The equation evaluates to True when self.gold equals to 0. As long as the first object in the equation equals to 0, the equation evaluates True. 
   :feedback_d: Try again. There is more than one answer. The equation evaluates to True when self.gold equals to 0. As long as the first object in the equation equals to 0, the equation evaluates True. 
   :feedback_e: Correct! As long as the first object in the equation equals to 0, the equation evaluates True. Therefore, Account(0) == Account(0) and Account(0) == Account(5) are correct answers.
   
    Which of the following would evaluate to True?

   .. code-block:: python

      class Account(object):
        def __init__(self, val):
            '''(int) -> Account
            Create bank account with val gold.
            '''
            self.gold = val

        def __eq__(self, other):
            '''(Account) -> bool'''
            return self.gold == 0

.. mchoice:: dz-lecture_26_9
   :author: Dan Zingaro
   :practice: T
   :answer_a: Point(2, 3) < Point(4, 5)
   :answer_b: Point(2, 3) < Point(4, 1)
   :answer_c: Point(2, 3) < Point(1, 5)
   :answer_d: A and B
   :answer_e: All of the above
   :correct: d
   :feedback_a: Try again. The equation evaluates to True when self.x < other.x or (self.x == other.x and self.y < other.y). Therefore, A and B are both right since self.x equals to 2 and other.x equals to 4.
   :feedback_b: Try again. The equation evaluates to True when self.x < other.x or (self.x == other.x and self.y < other.y). Therefore, A and B are both right since self.x equals to 2 and other.x equals to 4.
   :feedback_c: Try again. The equation evaluates to True when self.x < other.x or (self.x == other.x and self.y < other.y). C is incorrect because it does not satisfy either of the options.
   :feedback_d: Correct! The equation evaluates to True when self.x < other.x or (self.x == other.x and self.y < other.y). Therefore, A and B are both right since self.x equals to 2 and other.x equals to 4.
   :feedback_e: Try again. The equation evaluates to True when self.x < other.x or (self.x == other.x and self.y < other.y). Therefore, A and B are both right since self.x equals to 2 and other.x equals to 4.
   
   Which of the following would evaluate to True?

   .. code-block:: python

      class Point(object):
        '''Two-dimensional points'''

        def __init__ (self, x, y):
            '''(int, int) -> Point
            Create two-dimensional Point at (x, y)
            '''
            self.x = x
            self.y = y

        def __lt__(self, other):
            return isinstance(other, Point) and (self.x < other.x \
            or (self.x == other.x and self.y < other.y))