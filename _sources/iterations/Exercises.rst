Multiple Choice Questions
-------------------------

.. mchoice:: e5mc1
    :practice: T
    :answer_a: The program will loop indefinitely
    :answer_b: The value of number will be printed exactly 1 time
    :answer_c: The while loop will never get executed
    :answer_d: The value of number will be printed exactly 5 times
    :correct: a
    :feedback_a: This code loops while number is less than or equal to 5 and number only increments if it is less than 5 and it is originally set to 5 so number never changes.
    :feedback_b: This would be true if it was if number <= 5.
    :feedback_c: This would be true if number was set to a number larger than 5 to start.
    :feedback_d: This would be true if number was set to 1 to start.

    What is the result of executing the following code?

    ::

      number = 5
      while number <= 5:
          if number < 5:
              number = number + 1
          print(number)

.. mchoice:: e5mc2
    :practice: T
    :answer_a: 12
    :answer_b: 9
    :answer_c: 7
    :answer_d: 8
    :correct: b
    :feedback_a: This would be true if counter started off with a value of 0.
    :feedback_b: This loop executes 3 times.  After the first loop sum = 1 and counter = 3, after the second loop sum = 4 and counter = 5, and after the third loop sum = 9 and counter = 7.
    :feedback_c: This is the value of counter, but this code prints the value of sum.
    :feedback_d: This would be the value of counter after the loop if counter started at 0.

    What will the following code print?

    ::

      counter = 1
      sum = 0
      while counter <= 6:
          sum = sum + counter
          counter = counter + 2
      print (sum)

.. mchoice:: e5mc3
    :practice: T
    :answer_a: 4
    :answer_b: 0
    :answer_c: 7
    :answer_d: 16
    :correct: d
    :feedback_a: This would be true if it was sum = sum + 1
    :feedback_b: This would be true if sum never changed, but each time through the loop number is added to the current sum.
    :feedback_c: This would be true if it printed the number.
    :feedback_d: This adds up the numbers in values and prints the sum.

    What will be printed by the following code when it executes?

    ::

      sum = 0
      values = [1,3,5,7]
      for number in values:
          sum = sum + number
      print (sum)

.. mchoice:: e5mc4
    :practice: T
    :answer_a: Number: 10
    :answer_b: Number: number
    :answer_c: Number: 0
    :answer_d: Number: 11
    :correct: a
    :feedback_a: Since this while loop continues while number is less than or equal to 10 the last time in the loop it will print Number: 10.
    :feedback_b: This would be true if it was print ("Number: ", "number"). But since there are no quotes around number it will print the value of number.
    :feedback_c: While number is set to 0 to start it increments each time inside the loop.
    :feedback_d: This would be true if the print statement was after number was incremented by 1, but it is before.

    What is the last thing printed when the following code is run?

    ::

      number = 0
      while number <= 10:
          print ("Number: ", number)
          number = number + 1

.. mchoice:: e5mc5
    :practice: T
    :answer_a: 1
    :answer_b: 2
    :answer_c: 3
    :answer_d: 4
    :correct: c
    :feedback_a: This would be true if the print was outside of the loop, but it is in the loop.
    :feedback_b: This would be true if it was range(1,3)
    :feedback_c: The range(1,4) returns a list with the values 1, 2, and 3. So this will print hello 3 times.
    :feedback_d: This would be true if it was range(1,5). Remember that it includes the first value and ends before the second value.

    When the following code is run, how many times is hello printed?

    ::

      helloArray = range(1,4)
      for x in helloArray:
          print ("hello")

.. mchoice:: e5mc6
    :practice: T
    :answer_a: 5 4 3 2 1
    :answer_b: -4 -3 -2 -1 0
    :answer_c: -5 -4 -3 -2 -1
    :answer_d: This is an infinite loop so it will never print anything.
    :correct: b
    :feedback_a: Try again! If x starts at -5 how can the first value printed be 5?
    :feedback_b: Correct! The value of x is incremented before it is printed so the first value printed is -4.
    :feedback_c: Try again! This would be true if the print statement was before we incremented x.
    :feedback_d: Try again! This would be true if it was x = x - 1.

    What does the following code print?

    ::

      output = ""
      x = -5
      while x < 0:
          x = x + 1
          output = output + str(x) + " "
      print(output)

.. mchoice:: e5mc7
    :practice: T
    :answer_a: var1 = -2, var2 = 0
    :answer_b: var1 = 0, var2 = -2
    :answer_c: var1 = 0, var2 = -1
    :answer_d: This is an infinite loop so it will never print anything.
    :correct: b
    :feedback_a: Try again! These are the initial values, but they change during the loop
    :feedback_b: Correct! This loop will execute two times so var1 will be 0 and var2 will be -2 after the loop finishes.
    :feedback_c: Try again! This would be true if the loop stopped executing as soon as var1 was equal to 0, but that isn't what happens. The body of the loop will finish executing before the value of var1 is tested again.
    :feedback_d: Try again! This would be true if it was var1 = var1 - 1.

    What are the values of var1 and var2 that are printed when the following code executes?

    ::

      output = ""
      var1 = -2
      var2 = 0
      while var1 != 0:
          var1 = var1 + 1
          var2 = var2 - 1
      print("var1: " + str(var1) + " var2 " + str(var2))

.. mchoice:: e5mc8
    :practice: T
    :answer_a: var1 = -2, var2 = 0
    :answer_b: var1 = 0, var2 = -2
    :answer_c: var1 = 0, var2 = -1
    :answer_d: This is an infinite loop so it will never print anything.
    :correct: b
    :feedback_a: Try again! These are the initial values, but they change during the loop
    :feedback_b: Correct! This loop will execute two times so var1 will be 0 and var2 will be -2 after the loop finishes.
    :feedback_c: Try again! This would be true if the loop stopped executing as soon as var1 was equal to 0, but that isn't what happens. The body of the loop will finish executing before the value of var1 is tested again.
    :feedback_d: Try again! This would be true if it was var1 = var1 - 1.

    What are the values of var1 and var2 that are printed when the following code executes?

    ::

      for x in range(0,3):
          for y in range(0,4):
              print('*')

.. mchoice:: e5mc9
    :practice: T
    :answer_a: n starts at 10 and is incremented by 1 each time through the loop, so it will always be positive
    :answer_b: answer starts at 1 and is incremented by n each time, so it will always be positive
    :answer_c: You cannot compare n to 0 in while loop.  You must compare it to another variable.
    :answer_d: In the while loop body, we must set n to False, and this code does not do that.
    :correct: a
    :feedback_a: The loop will run as long as n is positive.  In this case, we can see that n will never become non-positive.
    :feedback_b: While it is true that answer will always be positive, answer is not considered in the loop condition.
    :feedback_c: It is perfectly valid to compare n to 0.  Though indirectly, this is what causes the infinite loop.
    :feedback_d: The loop condition must become False for the loop to terminate, but n by itself is not the condition in this case.

    The following code contains an infinite loop.  Which is the best explanation for why the loop does not terminate?

    .. code-block:: python

        n = 10
        answer = 1
        while n > 0:
            answer = answer + n
            n = n + 1
        print(answer)

.. mchoice:: e5mc10
    :practice: T
    :answer_a: a for-loop or a while-loop
    :answer_b: only a for-loop
    :answer_c: only a while-loop
    :correct: a
    :feedback_a: Although you do not know how many iterations you loop will run before the program starts running, once you have chosen your random integer, Python knows exactly how many iterations the loop will run, so either a for-loop or a while-loop will work.
    :feedback_b: As you learned in section 7.2, a while-loop can always be used for anything a for-loop can be used for.
    :feedback_c: Although you do not know how many iterations you loop will run before the program starts running, once you have chosen your random integer, Python knows exactly how many iterations the loop will run, so this is an example of definite iteration.

    Which type of loop can be used to perform the following iteration: You choose a positive integer at random and then print the numbers from 1 up to and including the selected integer.
