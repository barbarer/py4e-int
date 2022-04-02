Peer Instruction: Inheritance Multiple Choice Questions
-----------------------------------------------------------------------------

.. mchoice:: dz-lecture_27_5
   :author: Dan Zingaro
   :practice: T
   :answer_a: dog, cat
   :answer_b: dog, animal
   :answer_c: animal, dog
   :answer_d: dog, tail
   :answer_e: None of the above
   :correct: b
   :feedback_a: Try again. Dog and cat are both the subclass of animal.
   :feedback_b: Correct! Dog is the subclass of animal.
   :feedback_c: Try again. Dog is the subclass of animal and the question wants the first is subclass.
   :feedback_d: Try again. Tail is a part of the dog but it does not belong to the subclass.
   :feedback_e: Try again. There is one answer correct. Try to think about the relationship between category and subcategory.

    In the following pairs of words, the first is the subclass and the second is the superclass. Which of them is a correct example of inheritance?

.. mchoice:: dz-lecture_27_6
   :author: Dan Zingaro
   :practice: T
   :answer_a: school, building
   :answer_b: school, student
   :answer_c: student, school
   :answer_d: school, computer
   :answer_e: None of the above
   :correct: a
   :feedback_a: Correct! School is the subclass of building.
   :feedback_b: Try again. School is an object but student is not.
   :feedback_c: Try again. School is an object but student is not.
   :feedback_d: Try again. School is a building but computer is not.
   :feedback_e: Try again. There is one answer correct. Try to think about the relationship between category and subcategory.

    In the following pairs of words, the first is the subclass and the second is the superclass. Which of them is a correct example of inheritance?

.. mchoice:: dz-lecture_27_8
   :author: Dan Zingaro
   :practice: T
   :answer_a: 5
   :answer_b: 10
   :answer_c: 510
   :answer_d: 105
   :correct: b
   :feedback_a: Try again. A is defined by the first class, which returns self.x. self.x equals to x, so class B inherits A whose value is 5. B(5) = 5 * 2 = 10.
   :feedback_b: Correct! Class B inherits A, whose value is 5. B(5) = 5 * 2 = 10.
   :feedback_c: Try again. A is defined by the first class, which returns self.x. self.x equals to x, so class B inherits A whose value is 5. B(5) = 5 * 2 = 10.
   :feedback_d: Try again. A is defined by the first class, which returns self.x. self.x equals to x, so class B inherits A whose value is 5. B(5) = 5 * 2 = 10.
   
   What is the output of this code?

   .. code-block:: python

      class A(object):
        def __init__(self, x):
            self.x = x

        def __str__(self):
            return str(self.x)

      class B(A):
        def __init__(self, x):
        self.x = x * 2

      b = B(5)
      print(b)