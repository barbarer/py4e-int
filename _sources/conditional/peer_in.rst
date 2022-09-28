Peer Instruction: Conditionals Multiple Choice Questions
--------------------------------------------------------

.. mchoice:: ctp-conditionals-06_Conditionals_04
   :author: Cynthia Taylor
   :practice: T
   :answer_a: Nothing
   :answer_b: 1
   :answer_c: 5
   :answer_d: 1 5
   :answer_e: I don't know
   :correct: d
   :feedback_a: Incorrect! Here, x=1 which is less than 3 making the condition true. It will first print x = 1 and then x = x+4 = 1+4 = 5.
   :feedback_b: Incorrect! Here, x=1 which is less than 3 making the condition true. It will first print x = 1 and then x = x+4 = 1+4 = 5.
   :feedback_c: Incorrect! Here, x=1 which is less than 3 making the condition true. It will first print x = 1 and then x = x+4 = 1+4 = 5.
   :feedback_d: Correct! Here, x=1 which is less than 3 making the condition true. It will first print x = 1 and then x = x+4 = 1+4 = 5.
   :feedback_e: Incorrect! Here, x=1 which is less than 3 making the condition true. It will first print x = 1 and then x = x+4 = 1+4 = 5.

   What does the following code print?

   .. code-block:: python

      x = 1
      if (x < 3):
         print(x)
         x = x + 4
         print(x)


.. mchoice:: ctp-conditionals-06_Conditionals_06
   :author: Cynthia Taylor
   :practice: T
   :answer_a: Nothing
   :answer_b: 1
   :answer_c: 8
   :answer_d: 1 8
   :answer_e: I don't know
   :correct: b
   :feedback_a: Incorrect! Here, x = 1 which is less than 3 making the 'if' condition true. So, the code will print x = 1.
   :feedback_b: Correct! Here, x = 1 which is less than 3 making the 'if' condition true. So, the code will print x = 1.
   :feedback_c: Incorrect! Here, x = 1 which is less than 3 making the 'if' condition true. So, the code will print x = 1.
   :feedback_d: Incorrect! Here, x = 1 which is less than 3 making the 'if' condition true. So, the code will print x = 1.
   :feedback_e: Incorrect! Here, x = 1 which is less than 3 making the 'if' condition true. So, the code will print x = 1.

   What does the following code print?

   .. code-block:: python

      x = 1
      if (x < 3):
         print(x)
      else:
         print(x+7)


.. mchoice:: ctp-conditionals-06_Conditionals_10
   :author: Cynthia Taylor
   :practice: T
   :answer_a: You got an A!
   :answer_b: You got a B!
   :answer_c: You got something else!
   :answer_d: More than one of the above
   :answer_e: I don't know
   :correct: d
   :feedback_a: Incorrect! Here, grade=98 which is greater than both 90 and 80 making both the 'if' conditions true. So, the code will print 'You got an A!' and 'You got a B!' respectively.
   :feedback_b: Incorrect! Here, grade=98 which is greater than both 90 and 80 making both the 'if' conditions true. So, the code will print 'You got an A!' and 'You got a B!' respectively.
   :feedback_c: Incorrect! Here, grade=98 which is greater than both 90 and 80 making both the 'if' conditions true. So, the code will print 'You got an A!' and 'You got a B!' respectively.
   :feedback_d: Correct! Here, grade=98 which is greater than both 90 and 80 making both the 'if' conditions true. So, the code will print 'You got an A!' and 'You got a B!' respectively.
   :feedback_e: Incorrect! Here, grade=98 which is greater than both 90 and 80 making both the 'if' conditions true. So, the code will print 'You got an A!' and 'You got a B!' respectively.

   What does the following code print?

   .. code-block:: python

      grade = 98
      if (grade >= 90):
         print(“You got an A!”)
      if (grade >= 80):
         print(“You got a B!”)
      else:
         print(“You got something else”)



.. mchoice:: ctp-conditionals-06_Conditionals_11
   :author: Cynthia Taylor
   :practice: T
   :answer_a: You got an A!
   :answer_b: You got a B!
   :answer_c: You got something else!
   :answer_d: More than one of the above
   :answer_e: I don't know
   :correct: d
   :feedback_a: Incorrect! Here, grade=98 which is greater than 90 making the first 'if' condition true and will print 'You got an A!'. However, the second 'if' condition is not satisfied as grade doesn't lie between 80 and 90. So, the code will execute the statements under 'else' and print 'You got something else!'. Note that True 'and' False equals 'False' in boolean logic.
   :feedback_b: Incorrect! Here, grade=98 which is greater than 90 making the first 'if' condition true and will print 'You got an A!'. However, the second 'if' condition is not satisfied as grade doesn't lie between 80 and 90. So, the code will execute the statements under 'else' and print 'You got something else!'. Note that True 'and' False equals 'False' in boolean logic.
   :feedback_c: Incorrect! Here, grade=98 which is greater than 90 making the first 'if' condition true and will print 'You got an A!'. However, the second 'if' condition is not satisfied as grade doesn't lie between 80 and 90. So, the code will execute the statements under 'else' and print 'You got something else!'. Note that True 'and' False equals 'False' in boolean logic.
   :feedback_d: Correct! Here, grade=98 which is greater than 90 making the first 'if' condition true and will print 'You got an A!'. However, the second 'if' condition is not satisfied as grade doesn't lie between 80 and 90. So, the code will execute the statements under 'else' and print 'You got something else!'. Note that True 'and' False equals 'False' in boolean logic.
   :feedback_e: Incorrect! Here, grade=98 which is greater than 90 making the first 'if' condition true and will print 'You got an A!'. However, the second 'if' condition is not satisfied as grade doesn't lie between 80 and 90. So, the code will execute the statements under 'else' and print 'You got something else!'. Note that True 'and' False equals 'False' in boolean logic.

   What does the following code print?

   .. code-block:: python

      grade = 98
      if (grade >= 90):
         print(“You got an A!”)
      if (grade >= 80 and grade < 90):
         print(“You got a B!”)
      else:
         print(“You got something else”)



.. mchoice:: ctp-conditionals-06_Conditionals_12
   :author: Cynthia Taylor
   :practice: T

   Which code prints the correct value? If grade >= 90 it should print "You got an A!".
   If grade < 90 and >= 80 it should print "You got a B!". If you got less than
   80 it should print "You got something else".

   -
       ::

         grade = 98
         if (grade >= 90):
            print("You got an A!")
         if (grade >= 80 and grade < 90):
            print("You got a B!")
         if (grade < 80):
            print("You got something else")

       +   Correct! Here, grade = 98 which is greater than 90 satisfying the first 'if' condition. So, this code will output 'You got an A!'

   -
       ::

         grade = 98
         if (grade >= 90):
            print("You got an A!")
         elif (grade >= 80):
            print("You got a B!")
         else:
            print("You got something else")

       +   Correct! Here, grade = 98 which is greater than 90 satisfying the first 'if' condition. So, this code will output 'You got an A!'

   -
       ::

         grade = 98
         if (grade >= 90):
            print("You got an A!")
         elif (grade >= 80):
            print("You got a B!")
         elif(grade < 80):
            print("You got something else")

       + Correct! Here, grade = 98 which is greater than 90 satisfying the first 'if' condition. So, this code will output 'You got an A!'

   -   None of the above

       - Incorrect! Here, grade = 98 which is greater than 90 satisfying the first 'if' condition in all the options above.

   -   I don't know

       - Incorrect! Here, grade = 98 which is greater than 90 satisfying the first 'if' condition in all the options above.


.. mchoice:: ctp-conditionals-06_Conditionals_14
   :author: Cynthia Taylor
   :practice: T
   :answer_a: Spaces before * = r, Spaces after * = r
   :answer_b: Spaces before * = r, Spaces after * = n-r
   :answer_c: Spaces before * = n-r, Spaces after * = r
   :answer_d: Spaces before * = r, Spaces after * = n-r-1
   :answer_e: I don't know
   :correct: d
   :feedback_a: Incorrect! Skipping rows with 2 stars, the total no. of rows n = 3. If r = 1, the spaces before * = r = 1 and the spaces after * =  n-r-1 = 3-1-1 = 1. The same can be computed with r=0 and r=3.
   :feedback_b: Incorrect! Skipping rows with 2 stars, the total no. of rows n = 3. If r = 1, the spaces before * = r = 1 and the spaces after * =  n-r-1 = 3-1-1 = 1. The same can be computed with r=0 and r=3.
   :feedback_c: Incorrect! Skipping rows with 2 stars, the total no. of rows n = 3. If r = 1, the spaces before * = r = 1 and the spaces after * =  n-r-1 = 3-1-1 = 1. The same can be computed with r=0 and r=3.
   :feedback_d: Correct! Skipping rows with 2 stars, the total no. of rows n = 3. If r = 1, the spaces before * = r = 1 and the spaces after * =  n-r-1 = 3-1-1 = 1. The same can be computed with r=0 and r=3.
   :feedback_e: Incorrect! Skipping rows with 2 stars, the total no. of rows n = 3. If r = 1, the spaces before * = r = 1 and the spaces after * =  n-r-1 = 3-1-1 = 1. The same can be computed with r=0 and r=3.

   How do we print row ``r`` of this pattern? Skip rows with 2 stars.

   .. code-block:: python


      *   *
      **  *
      * * *
      *  **
      *   *



.. mchoice:: ctp-conditionals-06_Conditionals_16
   :author: Cynthia Taylor
   :practice: T
   :answer_a: Yes
   :answer_b: No
   :answer_c: Sometimes
   :answer_d: I don't know
   :correct: a
   :feedback_a: Correct! Try inserting n=3 and running the code for any value of row and col.
   :feedback_b: Incorrect! Try inserting n=3 and running the code for any value of row and col.
   :feedback_c: Incorrect! Try inserting n=3 and running the code for any value of row and col.
   :feedback_d: Incorrect! Try inserting n=3 and running the code for any value of row and col.

   Will the codeblock print the following pattern?

   .. code-block:: python

      for row in range(n+2):
         for col in range(n+2):
            if (row == col or col == 0 or col == n+1):
               print("*", end='')
            else:
               print(" ",end='')

         print()


      Output-

      *   *
      **  *
      * * *
      *  **
      *   *


.. mchoice:: dz-lecture7_Conditionals_03
   :author: Dan Zingaro
   :practice: T
   :answer_a: -3
   :answer_b: 1
   :answer_c: 2
   :answer_d: 3
   :answer_e: 5
   :correct: b
   :feedback_a: Incorrect! Here x = 5 which is greater than 2. So, the 'if' condition is satisfied. The value of x is first assigned -3 and then finally 1.
   :feedback_b: Correct! Here x = 5 which is greater than 2. So, the 'if' condition is satisfied. The value of x is first assigned -3 and then finally 1.
   :feedback_c: Incorrect! Here x = 5 which is greater than 2. So, the 'if' condition is satisfied. The value of x is first assigned -3 and then finally 1.
   :feedback_d: Incorrect! Here x = 5 which is greater than 2. So, the 'if' condition is satisfied. The value of x is first assigned -3 and then finally 1.
   :feedback_e: Incorrect! Here x = 5 which is greater than 2. So, the 'if' condition is satisfied. The value of x is first assigned -3 and then finally 1.

   What is the value of ``x`` after this code runs?

   .. code-block:: python

      x = 5
      if x > 2:
         x = -3
         x = 1
      else:
         x = 3
         x = 2


.. mchoice:: dz-lecture7_Conditionals_04
   :author: Dan Zingaro
   :practice: T
   :answer_a: -3
   :answer_b: 1
   :answer_c: 2
   :answer_d: 3
   :answer_e: 5
   :correct: c
   :feedback_a: Incorrect! Here x = 1 which is smaller than 2. So, the 'else' condition is satisfied. The value of x is first assigned 3 and then finally 2.
   :feedback_b: Incorrect! Here x = 1 which is smaller than 2. So, the 'else' condition is satisfied. The value of x is first assigned 3 and then finally 2.
   :feedback_c: Correct! Here x = 1 which is smaller than 2. So, the 'else' condition is satisfied. The value of x is first assigned 3 and then finally 2.
   :feedback_d: Incorrect! Here x = 1 which is smaller than 2. So, the 'else' condition is satisfied. The value of x is first assigned 3 and then finally 2.
   :feedback_e: Incorrect! Here x = 1 which is smaller than 2. So, the 'else' condition is satisfied. The value of x is first assigned 3 and then finally 2.

   What is the value of ``x`` after this code runs?

   .. code-block:: python

      x = 1
      if x > 2:
         x = -3
         x = 1
      else:
         x = 3
         x = 2


.. mchoice:: dz-lecture7_Conditionals_06
   :author: Dan Zingaro
   :practice: T
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: Correct! In both Code 1 and Code 2, the else and elif conditions at the end are essentially the same i.e. temperature < 0.
   :feedback_b: Incorrect! In both Code 1 and Code 2, the else and elif conditions at the end are essentially the same i.e. temperature < 0.

   Does Code 1 do exactly the same thing as Code 2? (Assume temperature already refers to some numeric value.)

   .. code-block:: python

      Code 1-

      if temperature > 0:
         print("above freezing")
      elif temperature == 0:
         print("at freezing")
      else:
         print("below freezing")



      Code 2-

      if temperature > 0:
         print("above freezing")
      elif temperature == 0:
         print("at freezing")
      elif temperature < 0:
         print("below freezing")


.. mchoice:: dz-lecture7_Conditionals_07
   :author: Dan Zingaro
   :practice: T
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: Incorrect! In Code 1, "below freezing" prints only if the other two conditions don't satisfy. However in Code 2, "below freezing" prints everytime as it is not bound to any condition.
   :feedback_b: Correct! In Code 1, "below freezing" prints only if the other two conditions don't satisfy. However in Code 2, "below freezing" prints everytime as it is not bound to any condition.

   Does Code 1 do exactly the same thing as Code 2? (Assume temperature already refers to some numeric value.)

   .. code-block:: python

      Code 1-

      if temperature > 0:
         print("above freezing")
      elif temperature == 0:
         print("at freezing")
      else:
         print("below freezing")



      Code 2-

      if temperature > 0:
         print("above freezing")
      elif temperature == 0:
         print("at freezing")
      print("below freezing")


.. mchoice:: dz-lecture7_Conditionals_08
   :author: Dan Zingaro
   :practice: T
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: Incorrect! Code 2 will print "below freezing" for temperature <= 0.
   :feedback_b: Correct! Code 2 will print "below freezing" for temperature <= 0.

   Does Code 1 do exactly the same thing as Code 2? (Assume temperature already refers to some numeric value.)

   .. code-block:: python

      Code 1-

      if temperature > 0:
         print("above freezing")
      elif temperature == 0:
         print("at freezing")
      else:
         print("below freezing")



      Code 2-

      if temperature == 0:
         print("at freezing")
      elif temperature <= 0:
         print("below freezing")
      else:
         print("above freezing")


.. mchoice:: dz-lecture7_Conditionals_09
   :author: Dan Zingaro
   :practice: T
   :answer_a: one
   :answer_b: two
   :answer_c: three
   :answer_d: More than one of the above
   :answer_e: No output
   :correct: b
   :feedback_a: Incorrect! Here, x = 5 which is smaller than 15 satistying the 'if' condition and smaller than 8 satisfying the nested 'else' condition. So, the output is 'two'.
   :feedback_b: Correct! Here, x = 5 which is smaller than 15 satistying the 'if' condition and smaller than 8 satisfying the nested 'else' condition. So, the output is 'two'.
   :feedback_c: Incorrect! Here, x = 5 which is smaller than 15 satistying the 'if' condition and smaller than 8 satisfying the nested 'else' condition. So, the output is 'two'.
   :feedback_d: Incorrect! Here, x = 5 which is smaller than 15 satistying the 'if' condition and smaller than 8 satisfying the nested 'else' condition. So, the output is 'two'.
   :feedback_e: Incorrect! Here, x = 5 which is smaller than 15 satistying the 'if' condition and smaller than 8 satisfying the nested 'else' condition. So, the output is 'two'.

   What does the following code print?

   .. code-block:: python

      x = 5
      if x < 15:
         if x > 8:
            print('one')
         else:
            print('two')
      else:
         print('three')


.. mchoice:: dz-lecture8_Conditionals_06
   :author: Dan Zingaro
   :practice: T
   :answer_a: def is_odd(x): return x % 2
   :answer_b: def is_odd(x): return x % 2 == 1
   :answer_c: def is_odd(x): return x % 2 == 0
   :answer_d: None of the above
   :correct: b
   :feedback_a: Incorrect! This will return either 1 or 0.
   :feedback_b: Correct! This will return True if x is Odd and False if x is Even.
   :feedback_c: Incorrect! This will return True if x is Even and False if x is Odd.
   :feedback_d: Incorrect! Option B will return True if x is Odd and False if x is Even.

   What does the following code print?

   .. code-block:: python

      def is_odd(x):
         if x % 2 == 1:
            return True
         else:
            return False


.. mchoice:: dz-lecture8_Conditionals_08
   :author: Dan Zingaro
   :practice: T
   :answer_a: 'age >= 18 and' can be removed
   :answer_b: 'else: print("ageless")' can be removed
   :answer_c: Both A and B
   :answer_d: Nothing can be removed
   :correct: b
   :feedback_a: Incorrect! This will print both 'minor' and 'adult' for ages less than 18.
   :feedback_b: Correct! This will not change the output of the code regardless of the age entered.
   :feedback_c: Incorrect! If 'age >= 18 and' is removed, it will print both 'minor' and 'adult' for ages less than 18.
   :feedback_d: Incorrect! Option B will not change the output of the code regardless of the age entered.

   What parts of the code can be removed without changing what the code does? Assume that the user enters a non-negative integer.

   .. code-block:: python

      age = int(input("Enter your age: "))
      if age < 18:
         print("minor")
      elif age >= 18 and age < 30:
         print("adult")
      elif age >= 30:
         print("older than Dan")
      else:
         print("ageless")


.. mchoice:: dz-lecture9_Conditionals_02
   :author: Dan Zingaro
   :practice: T
   :answer_a: (1) experience > 0, (2) experience >= 1
   :answer_b: (1) age < 18, (2) experience != 3
   :answer_c: (1) age < 18, (2) experience == 1 or experience == 2
   :correct: c
   :feedback_a: Incorrect! In this option, wages for experience > 0 and experience >= 1 encomapes wages $12 and $11 as well.
   :feedback_b: Incorrect! In this option, age < 18 and experience !=3 includes wages $6.5, and $12 as well.
   :feedback_c: Correct! Wages $9.5 and $11 are for ages less than 18. So, (1) = age < 18. Wage $9.5 is for experience 1-2. So, experience == 1 or experience == 2.

   What goes in the two numbered blanks?

   .. image:: ../images/dz-lecture9_Conditionals_02.png

   .. code-block:: python

      if experience == 0:
         wage = 6.5
      elif (1) :
         if (2) :
            wage = 9.5
         else:
            wage = 11
      else:
         wage = 12


.. mchoice:: dz-lecture9_Conditionals_03
   :author: Dan Zingaro
   :practice: T
   :answer_a: (1) plan == 'silver', (2) months >= 2 and months <= 6
   :answer_b: (1) plan == 'silver', (2) months >= 6
   :answer_c: (1) months >= 2 and months <= 6, (2) plan == 'gold'
   :correct: a
   :feedback_a: Correct! Here, cost = $60 for plan = 'silver' and months != 1. So, (1) plan = 'silver'. And cost = $70 for plan = 'gold' and months 2-6. The former is inherent to the 'else' condition while the latter is encompassed through (2) months >= 2 and months <= 6.
   :feedback_b: Incorrect! Here, cost = $60 for plan = 'silver' and months != 1. So, (1) plan = 'silver'. And cost = $70 for plan = 'gold' and months 2-6. The former is inherent to the 'else' condition while the latter is encompassed through (2) months >= 2 and months <= 6 but not months >=6.
   :feedback_c: Incorrect! This option doesn't include cost = $60 for months >= 7. Furthermore, plan = 'gold' also includes $35 in addition to $70. Here, cost = $60 for plan = 'silver' and months != 1. So, (1) plan = 'silver' and not . And cost = $70 for plan = 'gold' and months 2-6. The former is inherent to the 'else' condition while the latter is encompassed through (2) months >= 2 and months <= 6.

   What goes in the two numbered blanks?

   .. image:: ../images/dz-lecture9_Conditionals_03.png

   .. code-block:: python

      if months == 1:
         cost = 90
      elif (1) :
         cost = 60
      else:
         if (2) :
            cost = 70
         else:
            cost = 35
