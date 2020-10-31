The ``while`` statement
---------------------------
.. index::
    pair: While; Statement
    pair: While; Loop
    single: Iteration
    single: Flow of Execution
    single: Condition
    single: Loop
    single: Body

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
value of ``n`` and then reduce the value of ``n`` by 1. When you get
to 0, exit the ``while`` statement and display the word ``Blastoff!``

.. mchoice:: itWhile_MC_blastoff
    :practice: T
    :answer_a: The program has five iterations but does not print anything.
    :answer_b: The loop will repeat forever and results in an infinite loop.
    :answer_c: The program compiles and prints "1 2 3 4 5 Blastoff!" where each space is a new line.
    :answer_d: The program compiles and prints "5 4 3 2 1 Blastoff!" where each space is a new line.
    :correct: b
    :feedback_a: Incorrect! The program both prints things and has more than five iterations. Try again.
    :feedback_b: Correct! Because the loop is incrementing, rather than decrementing, n will always be greater than 0 and the loop will never end.
    :feedback_c: Incorrect! The program will compile, but will not start with 1 and won't ever reach "Blastoff!". Try again.
    :feedback_d: Incorrect! The program will compile, but it won't ever reach "Blastoff!". Try again.

    Consider the code block below. What happens when you run this program?

    .. code-block:: python

        n = 5
        while n > 0:
            print(n)
            n = n + 1
        print('Blastoff!')

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

.. fillintheblank:: itWhile_fill1
    :practice: T

    We call each time we execute the body of the loop an ________.

    - :[Ii]teration: Each time we execute the body of a loop, we are completing an iteration.
      :.*: Incorrect! Read the text above this to find the answer. Try again!

The body of the loop should change the value of one or more variables so
that eventually the condition becomes false and the loop terminates. We
call the variable that changes each time the loop executes and controls
when the loop finishes the *iteration variable*. If there
is no iteration variable, the loop will repeat forever, resulting in an
*infinite loop*.

.. mchoice:: itWhile_MC_xy2
    :practice: T
    :answer_a: x = 2; y = 5
    :answer_b: x = 5; y = 2
    :answer_c: x = 4; y = 3
    :answer_d: x = 4; y = 2
    :correct: c
    :feedback_a: Incorrect! These were the values of x and y at first, but they changed by the time the loop finished executing. Try again.
    :feedback_b: Incorrect! The while loop will finish executing before x and y reach these values. Try again.
    :feedback_c: Correct! The loop will terminate at x = 4 and y = 3 because at this point, x is not less than y.
    :feedback_d: Incorrect! The way the loop modifies x and y, it is impossible for y to be 2 while x is 4. Try again.

    Consider the code block below. What are the values of x and y when this while loop finishes executing?

    .. code-block:: python

        x = 2
        y = 5

        while (y > 2 and x < y):
            x = x + 1
            y = y - 1
