Multiple Choice Questions
-------------------------

.. mchoice:: e5mc1
    :practice: T
    :answer_a: The program will loop indefinitely
    :answer_b: The value of number will be printed exactly 1 time
    :answer_c: The while loop will never get executed
    :answer_d: The value of number will be printed exactly 5 times
    :correct: a
    :feedback_a: Correct! This code loops while number is less than or equal to 5. number only increments if it is less than 5, and it's originally set to 5, so 'number' never changes.
    :feedback_b: Incorrect! This would be true if line 3 said "if number <= 5:". Try again.
    :feedback_c: Incorrect! This would be true if number was initialized as a number larger than 5 to start. Try again.
    :feedback_d: Incorrect! This would be true if number was initialized as 0. Try again.

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
    :feedback_a: Incorrect! This would be true if counter was initialized as 0. Try again.
    :feedback_b: Correct! This loop executes 3 times.  After the first loop sum = 1 and counter = 3, after the second loop sum = 4 and counter = 5, and after the third loop sum = 9 and counter = 7.
    :feedback_c: Incorrect! This is the value of counter, but this code prints the value of sum. Try again.
    :feedback_d: Incorrect! This would be the value of counter after the loop if counter was initialized as 0. Try again.

    What will the following code print?

    ::

      counter = 1
      sum = 0
      while counter <= 6:
          sum = sum + counter
          counter = counter + 2
      print(sum)

.. mchoice:: e5mc3
    :practice: T
    :answer_a: 4
    :answer_b: 0
    :answer_c: 7
    :answer_d: 16
    :correct: d
    :feedback_a: Incorrect! This would be true if line 4 said "sum = sum + 1". Try again.
    :feedback_b: Incorrect! Sum increases every iteration of the loop. Try again.
    :feedback_c: Incorrect! This would be true if line 4 said "sum = number". Try again.
    :feedback_d: Correct! This adds up the numbers in values and prints the sum.

    What will be printed by the following code when it executes?

    ::

      sum = 0
      values = [1,3,5,7]
      for number in values:
          sum = sum + number
      print(sum)

.. mchoice:: e5mc4
    :practice: T
    :answer_a: Number: 10
    :answer_b: Number: number
    :answer_c: Number: 0
    :answer_d: Number: 11
    :correct: a
    :feedback_a: Correct! Since this while loop continues while number is less than or equal to 10, the last iteration of the loop will print "Number: 10".
    :feedback_b: Incorrect! Because number is an variable, the print statement will print its value, not its name. Try again.
    :feedback_c: Incorrect! Although number is initialized as 0, it increments each iteration. Try again.
    :feedback_d: Incorrect! This would be true if number was incremented before each print statement instead of after. Try again.

    What is the last thing printed when the following code is run?

    ::

      number = 0
      while number <= 10:
          print("Number: ", number)
          number = number + 1

.. mchoice:: e5mc5
    :practice: T
    :answer_a: 5 4 3 2 1
    :answer_b: -4 -3 -2 -1 0
    :answer_c: -5 -4 -3 -2 -1
    :answer_d: This is an infinite loop, so nothing will be printed
    :correct: b
    :feedback_a: Incorrect! x is initialized as -5, not 5. Try again.
    :feedback_b: Correct! The value of x is incremented before it is printed, so the first value printed is -4.
    :feedback_c: Incorrect! x is incremented before it is printed. Try again.
    :feedback_d: Incorrect! x increases each loop and will eventually be positive. Try again.

    What does the following code print?

    ::

      output = ""
      x = -5
      while x < 0:
          x = x + 1
          output = output + str(x) + " "
      print(output)

.. mchoice:: e5mc6
    :practice: T
    :answer_a: var1 = -2, var2 = 0
    :answer_b: var1 = 0, var2 = -2
    :answer_c: var1 = 0, var2 = -1
    :answer_d: This is an infinite loop, so nothing will be printed
    :correct: b
    :feedback_a: Incorrect! These are the initial values, but they change during the loop. Try again.
    :feedback_b: Correct! This loop will execute two times, so var1 will be 0 and var2 will be -2 when the loop is exited.
    :feedback_c: Incorrect! The body of the loop will finish executing before the value of var1 is re-tested. Try again.
    :feedback_d: Incorrect! var1 will eventually equal 0, so this loop isn't infinite. Try again.

    What are the values of var1 and var2 that are printed when the following code executes?

    ::

      output = ""
      var1 = -2
      var2 = 0
      while var1 != 0:
          var1 = var1 + 1
          var2 = var2 - 1
      print("var1: " + str(var1) + " var2 " + str(var2))

.. mchoice:: e5mc7
    :practice: T
    :answer_a: 0
    :answer_b: 4
    :answer_c: 5
    :answer_d: 20
    :answer_e: This is an infinite loop, so nothing will be printed
    :correct: d
    :feedback_a: Incorrect! Each loop will iterate as many times as there are elements in its list. Try again.
    :feedback_b: Incorrect! The print statement is inside of both loops. Try again.
    :feedback_c: Incorrect! The print statement is inside of both loops. Try again.
    :feedback_d: Correct! The outer loop will iterate 4 times and the inner loop will iterate 5 times. 4 times 5 = 20.
    :feedback_e: Incorrect! This loop is not infinite. Try again.

    How many asterisks will be printed when the following code executes?

    ::

      for x in [0, 1, 2, 3]:
          for y in [0, 1, 2, 3, 4]:
              print('*')

.. mchoice:: e5mc8
    :practice: T
    :answer_a: n starts at 10 and is incremented by 1 each time through the loop, so it will always be positive.
    :answer_b: answer starts at 1 and is incremented by n each time, so it will always be positive.
    :answer_c: You cannot compare n to 0 in the while loop. You must compare it to another variable.
    :answer_d: In the while loop body, we must set n to False, and this code does not do that.
    :correct: a
    :feedback_a: Correct! The loop will run as long as n is positive.  In this case, we can see that n will never become non-positive, so it will run infinitely.
    :feedback_b: Incorrect! While it is true that answer will always be positive, answer is not considered in the loop condition. Try again.
    :feedback_c: Incorrect! It is perfectly valid to compare n to 0. Try again.
    :feedback_d: Incorrect! The loop condition must become False for the loop to terminate, but n by itself is not the condition in this case. Try again.

    The following code contains an infinite loop.  Which is the best explanation for why the loop does not terminate?

    .. code-block:: python

        n = 10
        answer = 1
        while n > 0:
            answer = answer + n
            n = n + 1
        print(answer)

.. mchoice:: e5mc9
    :practice: T
    :answer_a: a for-loop or a while-loop
    :answer_b: only a for-loop
    :answer_c: only a while-loop
    :correct: a
    :feedback_a: Correct! Although you do not know how many iterations you loop will run before the program starts running, once you have chosen your random integer, Python knows exactly how many iterations the loop will run, so either a for-loop or a while-loop will work.
    :feedback_b: Incorrect! As you learned in section 7.2, a while-loop can always be used for anything a for-loop can be used for. Try again.
    :feedback_c: Incorrect! Although you do not know how many iterations you loop will run before the program starts running, once you have chosen your random integer, Python knows exactly how many iterations the loop will run, so this is an example of definite iteration. Try again.

    Which type of loop can be used to perform the following iteration: You choose a positive integer at random and then print the numbers from 1 up to and including the selected integer.

.. mchoice:: e5mc10
    :answer_a: Current Letter : P
    :answer_b: Current Letter : t
    :answer_c: Current Letter : h
    :answer_d: Current Letter : o
    :correct: c
    :feedback_a: Incorrect! This will be printed. Try again.
    :feedback_b: Incorrect! This will be printed. Try again.
    :feedback_c: Correct! Because continue sends the loop to the next iteration at h, it will not print "Current Letter: h".
    :feedback_d: Incorrect! This will be printed. Try again.

    Which of the following statements won't be printed when this Python code is run?

    .. code-block:: python

        for letter in 'Python':
            if letter == 'h':
                continue
            print('Current Letter : ' + letter)
