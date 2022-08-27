Peer Instruction: Function Multiple Choice Questions
---------------------------------------------------------

.. mchoice:: ctp-reviewtest1-14_review_05
    :author: Cynthia Taylor
    :practice: T
    :answer_a:
    :answer_b:
    :answer_c:
    :answer_d:
    :answer_e: I don't know
    :correct: a
    :feedback_a: Correct! Variable 'smallest' here will always be the smallest number among a, b and c.
    :feedback_b: Try again. Variable 'smallest' is not defined in this program.
    :feedback_c: Try again. This will give a type error because min() is missing positional arguments: a, b and c. And this question only requires to write a function. So min() is not necessary.
    :feedback_d: Try again. This will output the biggest number among a, b and c.
    :feedback_e: Try again. The hint is: we can compare a, b and c in pairs using If block. After each comparison, we make variable  'smallest' equal to the smaller number in the pair.

    Which of the following creates a function ``min(a, b, c)`` that takes in integers a, b, c and returns the smallest.

    .. code-block:: python

        A.
        def min(a, b, c):
            smallest = a
            if (b < smallest):
                smallest = b
            if (c < smallest):
                smallest = c
            return smallest

    ::

       B.

        def min(a, b, c):
            min = a
            if (b > min):
                min = b
            if (c < smallest):
                min = c

    ::

       C.

        def min(a, b, c):
            smallest = a
            if (b < smallest):
                smallest = b
            if (c < smallest):
                smallest = c
        min()


    ::

       D.

        def min(a, b, c):
            smallest = a
            if (b > smallest):
                smallest = b
            if (c > smallest):
                smallest = c
            return smallest


.. mchoice:: ctp-reviewtest1-14_review_08
    :practice: T
    :author: Cynthia Taylor
    :answer_a:
    :answer_b:
    :answer_c:
    :answer_d: None of the above
    :answer_e: I don't know
    :correct: b
    :feedback_a: Try again. Let's first break woot(3) down into four parts: print(3), yar(4), print(x) and yar(5). And your problem might be related to yar(4). Because 4 < 5, yar(4) jumps to Else block and leads to foo (5). foo(5) leads to prints(4) and yar(6). Because 6 > 5, yar(6) leads to print(6*2). So yar(4) outputs 4 and 12.
    :feedback_b: Correct! woot(3) can be broken down into four parts: print(3), yar(4), print(x) and yar (5).
    :feedback_c: Try again. Let's first break woot(3) down into four parts: print(3), yar(4), print(x) and yar (5).  And your problem might be related to yar(5). Because 7 > 5, yar(7) prints (7 * 2), which is 14.
    :feedback_d: Try again. woot(3) can be broken down into four parts: print(3), yar(4), print(x) and yar(5). The difficulty is that yar(4) and yar (5) satisfy different conditions. yar(4) activates foo() function while yar(5) doesn't. Try to calculate the output of each part based on the condition.
    :feedback_e: Try again. woot(3) can be broken down into four parts: print(3), yar(4), print(x) and yar(5). The difficulty is that yar(4) and yar (5) satisfy different conditions. Try to calculate the output of each part based on the condition.


    What does the following code print?

    .. code-block:: python

       def woot(x):
    	     print (x)
    	     yar(x + 1)
    	     print (x)
    	     yar(x + 2)

       def yar(y):
           if y > 5:
               print (y * 2)
           else:
               foo(y + 1)

       def foo(z):
    	     print(z - 1)
    	     yar(z + 1)

       def main():
    	     woot (3)

       main()


    ::

        A.
        3
        4
        12
        3
        10

    ::

        B.
        3
        4
        12
        3
        5
        14

    ::

        C.
        3
        4
        10
        10
        24


.. mchoice:: ctp-reviewtest1-14_review_07
    :practice: T
    :author: Cynthia Taylor
    :answer_a: 1
    :answer_b: 3
    :answer_c: 6
    :answer_d: This code will cause an error
    :answer_e: I don’t know
    :correct: c
    :feedback_a: Try again. Because n != 1, fact(3) returns 3 * fact(2). And 2 != 1, fact(2) returns 2 * fact(1). Since 1 == 1, fact(1) returns 1. fact(3) returns 3 * 2 * fact(1), which equals to 6.
    :feedback_b: Try again. Because n != 1, fact(3) returns 3 * fact(2). And 2 != 1, fact(2) returns 2 * fact(1). Since 1 == 1, fact(1) returns 1. fact(3) returns 3 * 2 * fact(1), which equals to 6.
    :feedback_c: Correct! The program returns the factorial of 3 which is 3 * fact(2) which is 2 * fact(1) which is 1.  So that is 2 * 1 = 2 * 3 = 6.
    :feedback_d: Try again. This code uses recursion but n gradually approaches 1. When n == 1, the program stops.
    :feedback_e: Try again. The program returns a value based on the value of n. When n != 1, it always returns n * fact(n-1), which leads to another round of recursion. But n gradually approaches 1 during the process. When n == 1, the program stops.

    What will the following code return from ``fact(3)``?

    .. code-block:: python

      def fact(n):
          if (n == 1):
              return 1
          else:
              return n * fact(n - 1)

.. mchoice:: ctp-recursion-15_recursion_06
    :practice: T
    :author: Cynthia Taylor
    :answer_a: 4, 3, 2, 1
    :answer_b: 4, 3, 2, 1, 2, 3, 4
    :answer_c: 4, 3, 2, 1, 1, 2, 3, 4
    :answer_d: This code has an infinite recursion
    :answer_e: I don't know
    :correct: d
    :feedback_a: Try again. Does the recursion ever stop?
    :feedback_b: Try again. Does the recursion ever stop?
    :feedback_c: Try again. Does the recursion ever stop?
    :feedback_d: Correct! This code has an infinite loop, since it does not have a base case.
    :feedback_e: Try again. You can focus on the num() function. There is an endless recursion here.

    What will the following code print?

    .. code-block:: python

     def num(x):
         print(x)
         num(x - 1)
         print(x)

     num(4)

.. mchoice:: ctp-recursion-15_recursion_09
    :practice: T
    :author: Cynthia Taylor
    :answer_a: 4 3 2 1 3 2 1 1 2 3 4
    :answer_b: 4 3 2 1 3 2 1 1 2 3 1 2 3 4
    :answer_c: 4 3 2 1 1 2 1 1 3 2 1 1 2 4
    :answer_d: This code will cause an error
    :answer_e: I don't know
    :correct: c
    :feedback_a: Try again. Because 4 > 0, num(4) --> 4 num(3) num(2) 4. Because there is only one num(3), number 3 will only show up twice.
    :feedback_b: Try again. Because 4 > 0, num(4) --> 4 num(3) num(2) 4. Because there is only one num(3), number 3 will only show up twice. And as we can see num(4) --> 4 num(3) num(2) 4, num(2) is before 4, so the last two number must be 2 and 4.
    :feedback_c: Correct! The recursion will stop when x < 0, but it has two functions embedded in num(4): num(3) and num(2), which makes it a little complicated.
    :feedback_d: Try again. This will not report an error because once x < 0 or x = 0, the function will stop.
    :feedback_e: Try again. Because 4 > 0, num(4) --> 4 num(3) num(2) 4. Since 3 > 0, num(3) --> 3 num(2) num(1) 3. Because 2 > 0, num(2)--> 2 num(1) num(0) 2. Becuase 1 > 0, num(1) --> 1 1. Try to detach each part as a block.

    What will the following code print?

    .. code-block:: python

     def num(x):
         if x > 0:
             print(x)
             num(x - 1)
             num(x - 2)
             print(x)

     num(4)

.. mchoice:: ctp-recursion-15_recursion_11
    :practice: T
    :author: Cynthia Taylor
    :answer_a: 1
    :answer_b: 2
    :answer_c: 5
    :answer_d: This code will cause an error
    :answer_e: I don't know
    :correct: d
    :feedback_a: Try again. Everything in Python is an object. So, your functions can return numeric values ( int , float , and complex values), collections and sequences of objects... But a + b here is not an object. So it will report an error.
    :feedback_b: Try again. Everything in Python is an object. So, your functions can return numeric values ( int , float , and complex values), collections and sequences of objects... But a + b here is not an object. So it will report an error.
    :feedback_c: Try again. Everything in Python is an object. So, your functions can return numeric values ( int , float , and complex values), collections and sequences of objects... But a + b here is not an object. So it will report an error.
    :feedback_d: Correct! Everything in Python is an object. So, your functions can return numeric values ( int , float , and complex values), collections and sequences of objects... But a + b here is not an object. So it will report an error.
    :feedback_e: Try again. Everything in Python is an object. So, your functions can return numeric values ( int , float , and complex values), collections and sequences of objects... But a + b here is not an object. So it will report an error.

    What is the value of ``y`` after the following code runs?

    .. code-block:: python

     def noob(x):
         if x < 2:
             return 1
         else:
             a = noob(x - 1)
             b = noob(x - 2)
             return a + b

     y = noob(4)

.. mchoice:: ctp-recursion-16_morerecursion_3
    :practice: T
    :author: Cynthia Taylor
    :answer_a:
    :answer_b:
    :answer_c:
    :answer_d: Both B and C
    :answer_e: I don't know
    :correct: d
    :feedback_a: Try again. This function has an infinite recursion.
    :feedback_b: Try again. Option B is correct! But option C is also correct. The else block in option C can be removed.
    :feedback_c: Try again. Option C is correct! But option B is also correct. The else block in option C can be removed.
    :feedback_d: Correct! Option B and C actually do the same thing.
    :feedback_e: Try again. Examine whether each option can end by itself! Some will cause a loop without an end.

    Which answer is correct?

    .. code-block:: python

        A.

        def fac(x):
            return x * fac(x - 1)

    ::

        B.

        def fac(x):
    	      if x == 0:
                return 1
    	      return x * fac(x - 1)

    ::

        C.

        def fac(x):
            if x == 0:
                return 1
            else:
                return x * fac(x - 1)



.. mchoice:: ctp-recursion-16_morerecursion_10
    :practice: T
    :author: Cynthia Taylor
    :answer_a: Yes
    :answer_b: No
    :answer_c: I don't know
    :correct: b
    :feedback_a: Try again. The function examines whether the sequence is symmetrical by comparing letters counrting backwards with the ranked order. However, if the word has an odd number of letters, when the function approaches the middle of the sequence, it will report string index out of range error. Becuase len(x) is equal to 0, leading x[1:len(x)-1] out of range.
    :feedback_b: Correct! The function will report an error when it encounters a word with an odd number of letters. Becuase len(x) is equal 0, leading x[1:len(x)-1] out of range.
    :feedback_c: Try again. The function examines whether the sequence is symmetrical by comparing letters counrting backwards with the ranked order. Try to test it with a word with odd number of letters.

    Will this code return ``True`` when ``x`` is a palidrome (a string that reads the same backwards as forwards like abba)?

    .. code-block:: python

        def pal(x):
            if x[0] != x[len(x) - 1]:
                return False
            else:
                return pal(x[1:len(x) - 1])

.. mchoice:: ctp-recursion-16_morerecursion_11
    :practice: T
    :author: Cynthia Taylor
    :answer_a:
    :answer_b:
    :answer_c:
    :answer_d:
    :answer_e: I don't know
    :correct: d
    :feedback_a: Try again. This function only examines whether the first letter is the same with the last one. It has no iteration.
    :feedback_b: Try again. This function will report an error. Because when len(x) <= 1, len(x) - 1 <= 0. return pal (x[1:len(x)-1]) will report string index out of range error.
    :feedback_c: Try again. When len(x) = 1, if the string satisfies comdition in the else block, it returns pal(x[1:len(x) - 1]). x[1:0] will report string index out of range error.
    :feedback_d: Correct! The function examines whether the string is a Palindromes. When len(x) = 1, the functions ends.
    :feedback_e: Try again. The function examines whether the string is a Palindromes. It first compares the first letter with the last letter, then the second letter with the seonc last one... Try to focus on how it iterates and its ending conditoon.

    Which answer is correct?

    .. code-block:: python

        A.

        def pal(x):
            if len(x) <= 1:
                return True
            elif x[0] != x[len(x) - 1]:
                return False
            else return pal(x)

    ::

       B.

       def pal(x):
           if x[0] != x[len(x) - 1]:
      		     return False
      	   else return pal(x[1:len(x) - 1])

    ::

      C.

      def pal(x):
          if len(x) <= 0:
              return True
          elif x[0] != x[len(x) - 1]:
              return False
          else return pal(x[1:len(x) - 1])


    ::

       D.

       def pal(x):
           if len(x) <= 1:
               return True
           elif x[0] != x[len(x) - 1]:
               return False
       	   else return pal(x[1:len(x)-1])

.. mchoice:: dz-lecture_3_4
   :practice: T
   :author: Dan Zingaro
   :answer_a: (3) only
   :answer_b: (2) and (3)
   :answer_c: (1), (3), and (4)
   :answer_d: All of (1), (2), (3), and (4) include a function call
   :correct: c
   :feedback_a: Try again. Function call is to invoke the program to execute the function. So (1), (3) and (4) are all function calls.
   :feedback_b: Try again. Function call is to invoke the program to execute the function. So (1), (3) and (4) are all function calls. (2) is a function that needs to be executed but not a function call.
   :feedback_c: Correct! Function call is to invoke the program to execute the function. So (1), (3) and (4) are all function calls.
   :feedback_d: Try again. Function call is to invoke the program to execute the function. So (1), (3) and (4) are all function calls. (2) is a function that needs to be executed but not a function call.

   Which of the following contains a function call?

   .. code-block:: python

        (1) type(4.5)
        (2) def add_one(x):
                return x + 1
        (3) area(2, 9)
        (4) print("Hello")

.. mchoice:: dz-lecture_3_5
   :practice: T
   :author: Dan Zingaro
   :answer_a: 5
   :answer_b: 9
   :answer_c: 0
   :answer_d: 3
   :correct: b
   :feedback_a: Try again. calculate(3, 2, 0) assigns different values to w, x and y. a = x = 2, b = w + 1 = 3 + 1 = 4. Therefore a + b + 3 = 9. The functions returns 9.
   :feedback_b: Correct! calculate(3, 2, 0) assigns different values to w, x and y. a = x = 2, b = w + 1 = 3 + 1 = 4. Therefore a + b + 3 = 9. The functions returns 9.
   :feedback_c: Try again. calculate(3, 2, 0) assigns different values to w, x and y. a = x = 2, b = w + 1 = 3 + 1 = 4. Therefore a + b + 3 = 9. The functions returns 9.
   :feedback_d: Try again. calculate(3, 2, 0) assigns different values to w, x and y. a = x = 2, b = w + 1 = 3 + 1 = 4. Therefore a + b + 3 = 9. The functions returns 9.

   What does the following code print?

   .. code-block:: python

      def calculate(w, x, y):
        a = x
        b = w + 1
        return a + b + 3

      print(calculate(3, 2, 0))


.. mchoice:: dz-lecture_3_6
   :practice: T
   :author: Dan Zingaro
   :answer_a: 3
   :answer_b: 4
   :answer_c: 5
   :answer_d: 6
   :correct: c
   :feedback_a: Try again. calculate(1, 2, 0) assigns values 1, 2 and 0 to w, x and y. a = x = 2, b = w + 1 = 1 + 1 = 2. Therefore a + b + 2 = 5. The functions returns 5.
   :feedback_b: Try again. calculate(1, 2, 0) assigns values 1, 2 and 0 to w, x and y. a = x = 2, b = w + 1 = 1 + 1 = 2. Therefore a + b + 2 = 5. The functions returns 5.
   :feedback_c: Correct! calculate(1, 2, 0) assigns values 1, 2 and 0 to w, x and y. a = x = 2, b = w + 1 = 1 + 1 = 2. Therefore a + b + 2 = 5. The functions returns 5.
   :feedback_d: Try again. calculate(1, 2, 0) assigns values 1, 2 and 0 to w, x and y. a = x = 2, b = w + 1 = 1 + 1 = 2. Therefore a + b + 2 = 5. The functions returns 5.

   What does the following code print?

   .. code-block:: python

      def calculate(w, x, y):
        a = x
        b = w + 1
        return a + b + w

      print(calculate(1, 2, 0))

.. mchoice:: dz-lecture_3_7
   :practice: T
   :author: Dan Zingaro
   :answer_a: No bugs. The code is fine
   :answer_b: The function body is not indented
   :answer_c: We are using x as a parameter and a variable, but we are not allowed to do that
   :answer_d: Both B and C are bugs
   :correct: b
   :feedback_a: Try again. It is required by Python that the body of the function should be indented.
   :feedback_b: Correct! The body of the function is not indented.
   :feedback_c: Try again! It is required by Python that the body of the function should be indented.
   :feedback_d: Try again! It is required by Python that the body of the function should be indented.

   Which of the following are true about this code.

   .. code-block:: python

      def add_one(x):
      return x + 1

      x = 2
      x = x + add_one(x)

.. mchoice:: dz-lecture_5_6
   :practice: T
   :author: Dan Zingaro
   :answer_a: 8
   :answer_b: 20
   :answer_c: Error, because a cannot be assigned in two places
   :answer_d: None
   :answer_e: 0
   :correct: b
   :feedback_a: Try again. In fucntions, changes to a in function first(a) do not change the value of a.
   :feedback_b: Correct! In fucntions, changes to a in function first(a) do not change the value of a.
   :feedback_c: Try again. Parameter passing is just like an assignment statement. When first starts running, a gets the value of 20. And in fucntions, changes to a in function first(a) do not change the value of a.
   :feedback_d: Try again. Parameter passing is just like an assignment statement. When first starts running, a gets the value of 20. And in fucntions, changes to a in function first(a) do not change the value of a.
   :feedback_e: Try again. Parameter passing is just like an assignment statement. When first starts running, a gets the value of 20. And in fucntions, changes to a in function first(a) do not change the value of a.

   What does the following code print?

   .. code-block:: python

      def first(a):
        a = 8
        return a

      a = 20
      first(a)
      print(a)

.. mchoice:: dz-lecture_5_7
   :practice: T
   :author: Dan Zingaro
   :answer_a: 8
   :answer_b: 20
   :correct: a
   :feedback_a: Correct! In function first(a), a has been assigned to a new value 8. So first(a) returns 8. And a = first(a) makes a equals to 8.
   :feedback_b: Try again. In function first(a), a has been assigned to a new value 8. So first(a) returns 8, however the value of a is still 20 outside the function until a has been assigned with a new value first(a). Therefore, a equals to 8.

   What does the following code print?

   .. code-block:: python

      def first(a):
        a = 8
        return a

      a = 20
      a= first(a)
      print(a)

.. mchoice:: dz-lecture_5_9
   :practice: T
   :author: Dan Zingaro
   :answer_a: x = f1()
   :answer_b: x = f2()
   :answer_c: x = f3()
   :answer_d: Two of the above
   :answer_e: All of the above
   :correct: a
   :feedback_a: Correct! f1() returns 5 and sets x to 5.
   :feedback_b: Try again. f2() only prints 5 but does not return the value.
   :feedback_c: Try again. f3() returns the result from print(5), but does not return the value 5.
   :feedback_d: Try again. There is only one function that sets x to 5.
   :feedback_e: Try again. There is only one function that sets x to 5.

   Which of the following sets ``x`` to 5 if ``x`` is set to the result from calling the function?

   .. code-block:: python

      def f1():
        return 5
      def f2():
        print(5)
      def f3():
        return print(5)

.. mchoice:: dz-lecture_5_11
   :practice: T
   :author: Dan Zingaro
   :answer_a: 1
   :answer_b: 2
   :answer_c: 4
   :answer_d: 8
   :answer_e: Error because of an undefined variable
   :correct: b
   :feedback_a: Try again. The output of b(2) is print(a(1)). In a(num), the function returns 2. Therefore, b(2) outputs 2. There is nothing to do with num here.
   :feedback_b: Correct! The output of b(2) is print(a(1)). In a(num), the function returns 2. Therefore, b(2) outputs 2. .
   :feedback_c: Try again. The output of b(2) is print(a(1)). In a(num), the function returns 2. Therefore, b(2) outputs 2. There is nothing to do with num here.
   :feedback_d: Try again. The output of b(2) is print(a(1)). In a(num), the function returns 2. Therefore, b(2) outputs 2. There is nothing to do with num here.
   :feedback_e: Try again. The output of b(2) is print(a(1)). In a(num), the function returns 2. Therefore, b(2) outputs 2. There is nothing to do with num here..

   What does the following code print?

   .. code-block:: python

      def a(num):
        num = 4
        return 2

      def b(val):
        num = 8
        print(a(1))

      b(2)

.. mchoice:: dz-lecture_5_12
   :practice: T
   :author: Dan Zingaro
   :answer_a: 1
   :answer_b: 2
   :answer_c: 4
   :answer_d: 8
   :answer_e: Error because of an undefined variable
   :correct: b
   :feedback_a: Try again. The output of b(2) is print(a(1)). In a(num), the function returns 2. Therefore, b(2) outputs 2. val and num do not play a role in the output of b(2).
   :feedback_b: Correct! The output of b(2) is print(a(1)). In a(num), the function returns 2. Therefore, b(2) outputs 2. .
   :feedback_c: Try again. The output of b(2) is print(a(1)). In a(num), the function returns 2. Therefore, b(2) outputs 2. val and num do not play a role in the output of b(2).
   :feedback_d: Try again. The output of b(2) is print(a(1)). In a(num), the function returns 2. Therefore, b(2) outputs 2. val and num do not play a role in the output of b(2).
   :feedback_e: Try again. The output of b(2) is print(a(1)). In a(num), the function returns 2. Therefore, b(2) outputs 2. val and num do not play a role in the output of b(2).

   What does the following code print?

   .. code-block:: python

      def a(num):
        num = 4
        return 2

      def b(val):
        val = 8
        print(a(1))

      b(2)
