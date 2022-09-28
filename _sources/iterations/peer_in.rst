Peer Instruction: Iterations Multiple Choice Questions
------------------------------------------------------

.. mchoice:: ctp-iterations-04_moreloops_05
   :author: Cynthia Taylor
   :practice: T

   Which of the following prints the numbers ``i`` through ``n``?

   -
       ::

         for i in range(1,i):

       -  Incorrect! Here the range printed is 1 to i-1

   -
       ::

         for i in range(1,n):

       -  Incorrect! Here the range printed is 1 to n-1

   -
       ::

         for i in range(1,n+1):

       -  Incorrect! Here the range printed is 1 to n

   -
       ::

         for i in range(i,n):

       -  Incorrect! Here the range printed is i to n-1

   -   None of the above

       +  Correct! Use range(i, n+1) to print numbers through i to n



.. mchoice:: ctp-iterations-04_moreloops_06
   :author: Cynthia Taylor
   :practice: T

   Which of the following adds up the numbers 1 through 4?

   -
       ::

         for i in range(1,5):
            sum = 0
            sum = sum + i

       -  Incorrect! Here the sum will be set to 0 each time the loop runs from 1 to 4.

   -
       ::

         sum = 0
         for i in range(1,5):
            sum = sum + 1

       -  Incorrect! sum needs to be added by i and not 1.

   -
       ::

         sum = 0
            for i in range(1,5):
            sum = sum + sum

       -  Incorrect! sum needs to added by i and not sum.

   -
       ::

         sum = 0
         for i in range(1,5):
            sum = sum + i

       +  Correct! The code will keep adding numbers from 1 to 4 with each iteration.

   -   I don't know

       -  Incorrect! Define a variable, say sum, and set it to 0. Run a loop from 1 to 4 and keep adding i to sum.


.. mchoice:: ctp-iterations-04_moreloops_08
   :author: Cynthia Taylor
   :practice: T
   :answer_a: 1 4 2 4 3 4
   :answer_b: 1 4 2 6 3 6
   :answer_c: 1 4 2 6 3 6 4 6 5 6
   :answer_d: This will cause an error
   :answer_e: I don't know
   :correct: b
   :feedback_a: Incorrect! n has been reset to 6 inside the loop. So, the code should print 6 from the second iteration. However, the n inside range will not be affected by this reset.
   :feedback_b: Correct! n has been reset to 6 inside the loop. So, the code should print 6 from the second iteration. However, the n inside range will not be affected by this reset.
   :feedback_c: Incorrect! n has been reset to 6 inside the loop. So, the code should print 6 from the second iteration. However, the n inside range will not be affected by this reset.
   :feedback_d: Incorrect! n has been reset to 6 inside the loop. So, the code should print 6 from the second iteration. However, the n inside range will not be affected by this reset.
   :feedback_e: Incorrect! n has been reset to 6 inside the loop. So, the code should print 6 from the second iteration. However, the n inside range will not be affected by this reset.

   What does the following code print?

   ::

      n = 4
      for i in range(1,n):
         print(i,n,end='')
         n = 6


.. mchoice:: ctp-iterations-04_moreloops_11
   :author: Cynthia Taylor
   :practice: T

   Which of the following generates this pattern for ``n = 5``?

   ::

       *****
       *****
       *****
       *****
       *****


   -
       ::

         for i in range(0,n):
            print("*" * i)

       -  Incorrect! Although there will be 5 iterations, it will not print 5 rows and columns of asterisks. With each iteration, i columns of asterisks will be printed. It will generate a staircase pattern.

   -
       ::

         for i in range(0,n):
            print("*" * n)

       +  Correct! This will print 5 rows and columns of asterisks. There will be 5 iterations. With each iteration, n=5 columns of asterisks will be printed.

   -
       ::

         for i in range(1,n):
            print("*" * i)

       -  Incorrect! This code will run 4 iterations, starting from 1 through n-1=4. Also, with each iteration, i columns of * will be printed. It will generate a staircase pattern.

   -
       ::

         for i in range(1,n):
            print("*" * n)

       -  Incorrect! This will print 4 rows and 5 columns of asterisks. There will be 4 iterations, starting from 1 through n-1=4. With each iteration, n=5 columns of asterisks will be printed.

   -   I don't know

       -  Incorrect! Print n=5 columns of asterisks. Run a for loop to print n=5 rows.


.. mchoice:: ctp-iterations-04_moreloops_13
   :author: Cynthia Taylor
   :practice: T
   :answer_a: frontspaces = (n-r) / 2, stars = r
   :answer_b: frontspaces = n - r, stars = 2 * r
   :answer_c: frontspaces = n - r, stars = 2 * r - 1
   :answer_d: frontspaces = r, stars = n - r
   :answer_e: I don't know
   :correct: c
   :feedback_a: Incorrect! (n - r) / 2 can output a non-integer. This will cause an error.
   :feedback_b: Incorrect! This will not print the correct pattern. For instance, take n = 5 and r = 1. To print the first row, we need 4 frontspaces and 1 star. But here, n-r = 4 and 2 * r = 2
   :feedback_c: Correct! This will print the correct pattern. For instance, take n = 5 and r = 1. To print the first row, we need 4 frontspaces and 1 star. Here, n-r = 4 and 2 * r - 1 = 1
   :feedback_d: Incorrect! This will not print the correct pattern. For instance, take n = 5 and r = 1. To print the first row, we need 4 frontspaces and 1 star. But here, r = 1 and n - r = 4.
   :feedback_e: Incorrect! For instance, to print the first row we need 4 frontspaces and 1 star. So, n - r = 5 - 1 = 4 and 2 * r - 1 = 2 * 1 - 1 = 1.

   For ``n = 5``, which of the following is the number of frontspaces and stars printed?

   .. code-block:: python

      for r in range(1, n + 1):
          print(' ' * frontspaces, '*' * stars)


         *
        ***
       *****
      *******
     *********


.. mchoice:: ctp-iterations-05_nestedloops_2
   :author: Cynthia Taylor
   :practice: T
   :answer_a: 1 1 2 2 3 3
   :answer_b: 1 2 3 1 2 3 1 2 3
   :answer_c: 1 1 1 2 1 3 2 1 2 2 2 3 3 1 3 2 3 3
   :answer_d: 1 1 2 1 3 1 2 1 2 2 2 3 3 1 3 2 3 3
   :answer_e: I don't know
   :correct: c
   :feedback_a: Incorrect! The nested for loop will run through j = 1 to 3 for every i.
   :feedback_b: Incorrect! The nested for loop will run through j = 1 to 3 for every i.
   :feedback_c: Correct! The nested for loop will run through j = 1 to 3 for every i.
   :feedback_d: Incorrect! The nested for loop will run through j = 1 to 3 for every i.
   :feedback_e: Incorrect!The nested for loop will run through j = 1 to 3 for every i.

   What does the following code print?

   ::

      for i in range(1, 4):
         for j in range(1, 4):
            print(i,j,end=‘ ')


.. mchoice:: ctp-iterations-05_nestedloops_4
   :author: Cynthia Taylor
   :practice: T

   Which of the following code generates the times table for any n as shown below?

   For n = 4,

   1 2 3 4
   2 4 6 8
   3 6 9 12
   4 8 12 16

   -
       ::

         for i in range(0, n):
            for j in range(0, n):
               print(i * j, end=‘ ')
         print()

       -  Incorrect! This will print a row of 0s in the first row and a row of n-1 times in the last row.

   -
       ::

         for i in range(1, n + 1):
            for j in range(1, n + 1):
               print(i * j, end=‘ ')

       -  Incorrect! This will print the times table but not in the format given above. There will be no break after the first line.

   -
       ::

         for i in range(1, n + 1):
            for j in range(1, n + 1):
               print(i * j, end=‘ ')
            print()

       +  Correct! This will print the times table in the right format due to an additional print in the end. The range in both loops in right and there will be a break after each line of the nested for loop.
   -
       ::

         for i in range(1, n + 1):
            for j in range(1, n + 1):
               print(i * j, end=‘ ')
         print()

       -  Incorrect! This will print the times table but not in the format given above. There will be no break after the each line but only after end of the last line.

   -   I don't know

       -  Incorrect! Use a nested for loop and use the * operator.


.. mchoice:: ctp-iterations-07_whileloops_2
   :author: Cynthia Taylor
   :practice: T
   :answer_a: C D E F G I
   :answer_b: D E F G
   :answer_c: E F G I
   :answer_d: E F H
   :answer_e: I don't know
   :correct: c
   :feedback_a: Incorrect! Since x=5, x<3 is False and x%3==2 is True. So, E F G I will print.
   :feedback_b: Incorrect! Since x=5, x<3 is False and x%3==2 is True. So, E F G I will print.
   :feedback_c: Correct! Since x=5, x<3 is False and x%3==2 is True. So, E F G I will print.
   :feedback_d: Incorrect! Since x=5, x<3 is False and x%3==2 is True. So, E F G I will print.
   :feedback_e: Incorrect! Since x=5, x<3 is False and x%3==2 is True. So, E F G I will print.

   What does the following code print?

   ::

        x = 5
        if (x < 3):
            x = 1
            print("A")
            if(x > 100):
                print("B")
            else:
                print("C")
            print("D")
        print("E")

        if (x > 2)
            print("F")
            if(x % 3 == 2)
                print("G")
            if (x % 3 == 1)
                print("H")
            else:
                print("I")


.. mchoice:: ctp-iterations-07_whileloops_7
   :author: Cynthia Taylor
   :practice: T
   :answer_a: 6 5
   :answer_b: 6 5 4
   :answer_c: 6 5 4 3
   :answer_d: 5 4 3
   :answer_e: I don't know
   :correct: a
   :feedback_a: Correct! Each time the loop runs, value of x decrements by 1. So, when its value gets down to 4, the loop condition is no longer satisfied.
   :feedback_b: Incorrect! Each time the loop runs, value of x decrements by 1. So, when its value gets down to 4, the loop condition is no longer satisfied.
   :feedback_c: Incorrect! Each time the loop runs, value of x decrements by 1. So, when its value gets down to 4, the loop condition is no longer satisfied.
   :feedback_d: Incorrect! Each time the loop runs, value of x decrements by 1. So, when its value gets down to 4, the loop condition is no longer satisfied.
   :feedback_e: Incorrect! Each time the loop runs, value of x decrements by 1. So, when its value gets down to 4, the loop condition is no longer satisfied.

   What does the following code print?

   ::

       x = 6
       while(x > 4)
        print(x, end=' ')
        x = x - 1


.. mchoice:: ctp-iterations-07_whileloops_8
   :author: Cynthia Taylor
   :practice: T
   :answer_a: 0 0 0
   :answer_b: 0 1 2
   :answer_c: 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 . . . .
   :answer_d: 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . .
   :answer_e: I don't know
   :correct: c
   :feedback_a: Incorrect! The value of i never changes from 0. So, the loop condition is always true and it will keep printing i=0.
   :feedback_b: Incorrect! The value of i never changes from 0. So, the loop condition is always true and it will keep printing i=0.
   :feedback_c: Correct! The value of i never changes from 0. So, the loop condition is always true and it will keep printing i=0.
   :feedback_d: Incorrect! The value of i never changes from 0. So, the loop condition is always true and it will keep printing i=0.
   :feedback_e: Incorrect!The value of i never changes from 0. So, the loop condition is always true and it will keep printing i=0.

   What does the following code print?

   ::

       i=0

       while(i < 3)
            print(i, end=' ')



.. mchoice:: ctp-iterations-05_whileloops_9
   :author: Cynthia Taylor
   :practice: T

   Which of the following correctly translates the for loop below to a while loop?

   for i in range(n):
     <body>

   -
       ::

         i = 0
         while(i < n)
            <body>

       -  Incorrect! This will be an infinite loop as the value of i never changes.

   -
       ::

         i = 0
         while(i < n)
            <body>
            i = i + 1

       +  Correct! The value of i increments by 1 in each iteration till it becomes equal to n at which point the loop condition won't be satisfied.

   -
       ::

         i = 0
         while(i < n)
            <body>
            n = n + 1

       -  Incorrect! This is not the right implementation of the given for loop as the value of i remains the same and the value of n keeps increasing with each iteration.
   -
       ::

         i = 1
         while(i < n)
            <body>
            i = i + 1

       -  Incorrect! This is not the right implementation of the given for loop as the value of i remains the same and the value of n keeps increasing with each iteration.

   -   I don't know

       -  Incorrect! The value of i should increment by 1 with each iteration of while loop.



.. mchoice:: ctp-iterations-07_whileloops_11
   :author: Cynthia Taylor
   :practice: T
   :answer_a: 2
   :answer_b: 9
   :answer_c: 6
   :answer_d: None of the above
   :answer_e: I don't know
   :correct: b
   :feedback_a: Incorrect! To get out of the loop, valid should be True. According to the condition provided, an odd number which is a multiple of 3 should work.
   :feedback_b: Correct! To get out of the loop, valid should be True. According to the condition provided, an odd number which is a multiple of 3 should work.
   :feedback_c: Incorrect! To get out of the loop, valid should be True. According to the condition provided, an odd number which is a multiple of 3 should work.
   :feedback_d: Incorrect! To get out of the loop, valid should be True. According to the condition provided, an odd number which is a multiple of 3 should work.
   :feedback_e: Incorrect! To get out of the loop, valid should be True. According to the condition provided, an odd number which is a multiple of 3 should work.

   Which of these numbers will stop the loop?

   ::

      valid = False
      while not valid:
        x = eval(input ("Enter a number: "))
        valid = (x % 2 == 1 and x % 3 == 0)


.. mchoice:: ctp-iterations-05_whileloops_13
   :author: Cynthia Taylor
   :practice: T

   Which of these will exit on 9?


   -
       ::

         x = eval(input ("Enter a number: "))
          while (x % 2 == 1 and x % 3 == 0):
            x = eval(input ("Enter a number: "))

       -  Incorrect! Incorrect! 9 is an odd multiple of 3. So, the condition would always hold true and will not exit the loop. There's no break statement in this option.

   -
       ::

         x = eval(input ("Enter a number: "))
          while True:
            if (x % 2 == 1 and x % 3 == 0):
                break;
            x = eval(input ("Enter a number: "))

       +  Correct! This will exit due to the break statement.

   -   Both!

       -  Incorrect! There's no break statement in option A.

   -   Neither

       -  Incorrect! There's a break statement in option B.

   -   I don't know

       -  Incorrect! A break statement can be used to exit the loop.
