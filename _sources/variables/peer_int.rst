Peer Instruction: Variable Multiple Choice Questions
---------------------------------------------------------
.. mchoice:: ctp-reviewtest1-14_review_11
   :practice: T
   :answer_a: Ints only have 2 decimal places
   :answer_b: Ints don’t have any decimals
   :answer_c: It’s easier to multiply ints
   :answer_d: Funsies
   :answer_e: I don't know
   :correct: b
   :feedback_a: Try again. Ints do not have any decimal places.
   :feedback_b: Correct! Because ints do not have any decimal places,therefore by multipling it with 100, the two decimal places can be transformed into ones and tens place. 
   :feedback_c: Try again. Try to consider why we multiply the number by 100. Becausen we want the two decimal places to be transformed into ones and tens place. 	
   :feedback_d: Try again. Good point but we want the funsies?
   :feedback_e: Try again. Try to consider why we multiply the number by 100. Because ints do not have any decimal places,therefore by multipling it with 100, the two decimal places can be transformed into ones and tens place.
 
 
   Recall that when we wanted to cut off all but two decimal places of a float, we multiplied it by 100, cast it as a integer, and then divided it by 100 using float division. Why did we cast it as an int?

.. mchoice:: dz-lecture_2_5
   :practice: T
   :answer_a: Yes
   :answer_b: No, because it contains an infinite number of steps
   :answer_c: No, because it never halts
   :answer_d: No, because step 3 is not well-defined
   :correct: c
   :feedback_a: Try again. Step 3 ends with returning to step 1. It never ends. But an algorithm must halt.
   :feedback_b: Try again. B is incorrect because there are three steps.
   :feedback_c: Correct! Because step 3 ends with returning to step 1. It never ends.
   :feedback_d: Try again. It is true that there are problems with step 3. But it is because step 3 makes it never halt.
   
   .. code-block:: python

      Step 1: write down the number 0
      Step 2: add 3
      Step 3: return to step 1
      Is this an algorithm?

.. mchoice:: dz-lecture_2_8
   :practice: T
   :answer_a: Nothing. They are both 1
   :answer_b: Nothing. They might be of different types, but types don’t matter in programming
   :answer_c: 1 is an integer and 1.0 is a string, because of the character
   :answer_d: 1 is an integer and 1.0 is a floating-point number
   :answer_e: 1.0 is an integer and 1 is a floating-point number
   :correct: d
   :feedback_a: Try again. 1 and 1.0 represent different types in programming.
   :feedback_b: Try again. 1 and 1.0 are different types. And types are very important in programming.
   :feedback_c: Try again. 1 is an integer but 1.0 is not a string. It has a decimal place, so 1.0 is a float.
   :feedback_d: Correct! 1 and 1.0 represent different types in programming. And 1.0 with a decimal place is a float.
   :feedback_e: Try again. An integer does not have any decimal place but a float does.
 
   What is the difference between the literals 1 and 1.0?

.. mchoice:: dz-lecture_2_12
   :practice: T
   :answer_a: 39
   :answer_b: 22
   :answer_c: 35
   :answer_d: 20
   :answer_e: 18
   :correct: a
   :feedback_a: Correct! + operator adds x and 2 together, and x equals to 37. Therefore, y equals to the sum of 37 and 2.
   :feedback_b: Try again. + operator adds x and 2 together, and x equals to 37. Therefore, y equals to the sum of 37 and 2. Integers are immutable in Python. The later changes in x do not affect the value of y.
   :feedback_c: Try again. + operator adds x and 2 together, and x equals to 37. Therefore, y equals to the sum of 37 and 2. 
   :feedback_d: Try again. + operator adds x and 2 together, and x equals to 37. Therefore, y equals to the sum of 37 and 2. Integers are immutable in Python. The later changes in x do not affect the value of y.
   :feedback_e: Try again. + operator adds x and 2 together, and x equals to 37. Therefore, y equals to the sum of 37 and 2. Integers are immutable in Python. The later changes in x do not affect the value of y.
   
   .. code-block:: python

      x = 37
      y = x + 2
      x = 20   
      What is the value of y after the execution of this code?

.. mchoice:: dz-lecture_2_13
   :practice: T
   :answer_a: 39
   :answer_b: 22
   :answer_c: 35
   :answer_d: 20
   :answer_e: 18
   :correct: c
   :feedback_a: Try again. - operator means x substracts 2, and x equals to 37. Therefore, y equals to the 35.
   :feedback_b: Try again. - operator means x substracts 2, and x equals to 37. Therefore, y equals to the 35. Integers are immutable in Python. The later changes in x do not affect the value of y.
   :feedback_c: Correct! - operator means x substracts 2, and x equals to 37. Therefore, y equals to the 35.
   :feedback_d: Try again. - operator means x substracts 2, and x equals to 37. Therefore, y equals to the 35. Integers are immutable in Python. The later changes in x do not affect the value of y.
   :feedback_e: Try again. - operator means x substracts 2, and x equals to 37. Therefore, y equals to the 35. Integers are immutable in Python. The later changes in x do not affect the value of y.
   
   .. code-block:: python

      x = 37
      y = x - 2
      x = 20   
      What is the value of y after the execution of this code?