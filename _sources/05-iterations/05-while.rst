The ``while`` statement
---------------------------

Computers are often used to automate repetitive tasks. Repeating
identical or similar tasks without making errors is something that
computers do well and people do poorly. Because iteration is so common,
Python provides several language features to make it easier.

One form of iteration in Python is the ``while`` statement.
Here is a simple program that counts down from five and then says
"Blastoff!".

.. codelens:: codelens511
    :showoutput:

   n = 5
   while n > 0:
       print(n)
       n = n - 1
   print('Blastoff!')


You can almost read the ``while`` statement as if it were
English. It means, "While ``n`` is greater than 0, display the
value of ``n`` and then reduce the value of ``n`` by 1. When you get to 0, exit the ``while`` statement and display the word ``Blastoff!``

More formally, here is the flow of execution for a ``while``
statement:

1. Evaluate the condition, yielding ``True`` or
   ``False``.

2. If the condition is false, exit the ``while`` statement and
   continue execution at the next statement.

3. If the condition is true, execute the body and then go back to
   step 1.

This type of flow is called a *loop* because the third
step loops back around to the top. We call each time we execute the body
of the loop an *iteration*. For the above loop, we would
say, "It had five iterations", which means that the body of the loop was
executed five times.

The body of the loop should change the value of one or more variables so
that eventually the condition becomes false and the loop terminates. We
call the variable that changes each time the loop executes and controls
when the loop finishes the *iteration variable*. If there
is no iteration variable, the loop will repeat forever, resulting in an
*infinite loop*.

.. fillintheblank:: 05fill2_1

    We call each time we execute the body of the loop an ________.

    - :(?:i|I)(?:t|T)(?:e|E)(?:r|R)(?:a|A)(?:t|T)(?:i|I)(?:o|O)(?:n|N): Correct!
      :.*: Try again!

.. mchoice:: 05question2_1
   :answer_a: The program has five iterations but does not print anything.
   :answer_b: The loop will repeat forever and results in an infinite loop.
   :answer_c: The program compiles and prints "1 2 3 4 5 Blastoff!" where each space is a new line.
   :answer_d: The program compiles and prints "5 4 3 2 1 Blastoff!" where each space is a new line.
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct!
   :feedback_c: Try again!
   :feedback_d: Try again!

   Consider the code block below. What happens when you run this program?

   .. code-block:: python

    n = 5
    while n > 0:
        print(n)
        n = n + 1
    print('Blastoff!')

.. mchoice:: 05question2_2
   :answer_a: x = 2; y = 5
   :answer_b: x = 5; y = 2
   :answer_c: x = 4; y = 3
   :answer_d: x = 4; y = 2
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct!
   :feedback_d: Try again!

   Consider the code block below. What are the values of x and y when this while loop finishes executing?

   .. code-block:: python

    x = 2
    y = 5

    while (y > 2 and x < y):
      x = x + 1
      y = y - 1
