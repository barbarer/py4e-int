Peer Instruction: Iterations Multiple Choice Questions
-----------------------------------------------------------------------------

.. mchoice:: ctp-reviewtest1-14_review_06
    :author: Cynthia Taylor
    :practice: T
    :answer_a:
    :answer_b:
    :answer_c:
    :answer_d: None of the above
    :answer_e: I don't know
    :correct: b
    :feedback_a: Try again! The string s changes after every iterations. First 'pirate ship', 'pirate ship', then 'irate ship'...
    :feedback_b: Correct! In every iteration, i adds one up. Therefore, s[i:] begins with next letter in the string. However, the string s also changes after every iterations. So the final printing obmits several letters.
    :feedback_c: Try again! The string s changes after every iterations. First 'pirate ship', 'pirate ship', then 'irate ship'... It does not follow the rule that printing the first letter in 'pirate ship', then the second letter in 'pirate ship'... Some letters are obmitted.
    :feedback_d: Try again! In every iteration, i adds one up. Therefore, s[i:] begins with next letter in the string. However, the string s also changes after every iterations. It does not follow the rule that printing the first letter in 'pirate ship', then the second letter in 'pirate ship'...
    :feedback_e: Try again! In every iteration, i adds one up. Therefore, s[i:] begins with next letter in the string. However, the string s also changes after every iterations. It does not follow the rule that printing the first letter in 'pirate ship', then the second letter in 'pirate ship'...

    What does the following code print?

    .. code-block:: python

        s = 'pirate ship'
        i = 0
        while(len(s) > i ):
            s = s[i:]
            i = i + 1
            print (s , i )

    ::

       A.
       pirate ship 1
       irate ship 2
       rate ship 3
       ate ship 4
       te ship 5
       e ship 6

    ::

        B.
        pirate ship 1
        irate ship 2
        ate ship 3
         ship 4
        p 5

    ::

        C.
        pirate ship 1
        irate ship 2
        rate ship 3
        ate ship 4
        te ship 5
        e ship 6
         ship 7
        ship 8
        hip 9
        ip 10
        p 11


.. mchoice:: ctp-reviewtest1-14_review_10
    :author: Cynthia Taylor
    :practice: T
    :answer_a: y == 11
    :answer_b: y != 11
    :answer_c: y > 11
    :answer_d: y and 11
    :answer_e: I don't know
    :correct: b
    :feedback_a: Try again! This will evaluate to False if y is not equal to 11.
    :feedback_b: Correct! This will evaluate to False if and only if y is equal to 11.
    :feedback_c: Try again! This will evaluate to False if y is equal to or smaller than 11.
    :feedback_d: Try again! This is not a boolean expression.
    :feedback_e: Try again! An expression evaluates to False means its opposite expression is True. Therefore, try to find an expression that will evaluate to True if y it not equal to 11.

    Which of these will evaluate to ``False`` if and only if ``y`` is equal to 11.

.. mchoice:: dz-lecture_13_4
   :author: Dan Zingaro
   :practice: T
   :answer_a: 6 5
   :answer_b: 6 5 4
   :answer_c: 5 4
   :answer_d: 5 4 3
   :answer_e: 6 5 4 3
   :correct: a
   :feedback_a: Correct! When x = 4, the loop stops.
   :feedback_b: Try again. When x = 4, the loop stops. Therefore, 4 will not be printed.
   :feedback_c: Try again. When x = 6, the loop runs. Therefore, 6 will be printed. And when x = 4, the loop stops. Therefore, 4 will not be printed.
   :feedback_d: Try again. When x = 6, the loop runs. Therefore, 6 will be printed. And when x = 4, the loop stops. Therefore, 4 and 3 will not be printed.
   :feedback_e: Try again. When x = 4, the loop stops. Therefore, 4 and 3 will not be printed.

   .. code-block:: python

      What is printed by the following code? (Output is on one line to save space.)

      x = 6
      while x > 4:
        print(x)
        x = x - 1

.. mchoice:: dz-lecture_13_5
   :author: Dan Zingaro
   :practice: T
   :answer_a: 6 5
   :answer_b: 6 5 4
   :answer_c: 5 4
   :answer_d: 5 4 3
   :answer_e: 6 5 4 3
   :correct: c
   :feedback_a: Try again. x = x - 1 comes before print(x). Therefore, 6 will never be printed. And when x = 5, the loop will continue and print(x - 1). So, 4 will be printed.
   :feedback_b: Try again. x = x - 1 comes before print(x). Therefore, 6 will never be printed.
   :feedback_c: Correct! When x = 4, the loop will stop. Because x = x - 1 comes before print(x), the code prints 5 and 4.
   :feedback_d: Try again.  x = x - 1 comes before print(x). When x = 5, the loop will continue and print(x - 1). So, 4 will be printed while 3 will not.
   :feedback_e: Try again. x = x - 1 comes before print(x). Therefore, 6 will never be printed. And when x = 5, the loop will continue and print(x - 1). So, 4 will be printed and 3 will not.

   .. code-block:: python

      What is printed by the following code? (Output is on one line to save space.)

      x = 6
      while x > 4:
        x = x - 1
        print(x)

.. mchoice:: dz-lecture_13_7
   :author: Dan Zingaro
   :practice: T
   :answer_a: xyz
   :answer_b: abcxyz
   :answer_c: xyabc
   :answer_d: More than one of the above passwords get us out of the loop.
   :answer_e: None; the loop never executes and no passwords are obtained.
   :correct: c
   :feedback_a: Try again. while not valid means the loop will not stop until valid equals to True. And 'xyz' does not satisfy the requirement: len(5) == 5.
   :feedback_b: Try again. while not valid means the loop will not stop until valid equals to True. And 'abcxyz' does not satisfy the requirement: s[:2] == 'xy'.
   :feedback_c: Correct! 'xyzabc' satisfies two requirements: len(5) == 5 and s[:2] == 'xy'.
   :feedback_d: Try again. There is only one password that satisfy the two requirements of getting out of the loop.
   :feedback_e: Try again. There is one password that satisfy the two requirements of getting out of the loop.

   .. code-block:: python

      Which of the following passwords stops the loop?

      valid = False
      while not valid:
        s = input ("Enter a password: ")
        valid = len(s) == 5 and s[:2] == 'xy'


.. mchoice:: dz-lecture_13_9
    :author: Dan Zingaro
    :practice: T
    :answer_a:
    :answer_b:
    :answer_c: Both are correct
    :answer_d: None is correct
    :correct: a
    :feedback_a: Correct! When the length is 5 and it starts with xy, break helps the string get out of the loop.
    :feedback_b: Try again. When a string meets both of the requirements, being the length 5 and starting with xy, the while loop continues.
    :feedback_c: Try again. There is only one correct answer.
    :feedback_d: Try again. There is a correct answer.

    A valid password is one that is length 5 and starts with xy. Such passwords should get us out of the loop. Which of these does this?

    .. code-block:: python

       A.
       while True:
           s = input ("Enter a password: ")
           if len(s) == 5 and s[:2] == 'xy':
               break

    ::

        B.
        s = input ("Enter a password: ")
        while len(s) == 5 and s[:2] == 'xy':
            s = input ("Enter a password: ")

.. mchoice:: dz-lecture_13_10
   :author: Dan Zingaro
   :practice: T
   :answer_a: 3 4
   :answer_b: 3 4 5
   :answer_c: 3 4 -99
   :answer_d: 3 4 5 -99
   :correct: c
   :feedback_a: Try again. When n = 5, n satisfies the if condition, and n turns to -99. And print(n) outputs -99.
   :feedback_b: Try again. When n = 5, n satisfies the if condition, and n turns to -99. And print(n) outputs -99 rather than 5.
   :feedback_c: Correct! When n = 5, n satisfies the if condition, and n turns to -99. So the code outputs 3, 4 and -99.
   :feedback_d: Try again. When n = 5, n satisfies the if condition, and n turns to -99. And print(n) outputs -99 rather than 5.

   .. code-block:: python

      What is the output of this code? (Output is on one line here to save space.)

      n = 3
      while n > 0:
          if n == 5:
              n = -99
          print(n)
          n = n + 1
