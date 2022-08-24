Group Work - Loops (For, Range, While)
--------------------------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

A loop allows you to execute the same statements multiple times. Python has two
kinds of loop structures: ``for`` loops, which iterate over the items of a
sequence, and ``while`` loops, which continue to execute as long as a condition is true.

**Content Learning Objectives**

*After completing this activity, students should be able to:*

* Explain the syntax and the purpose of a ``for`` statement.
* Predict how ``range()`` works given 1, 2, or 3 arguments.
* Identify the three main components of a ``while`` loop.

**Process Skill Goals:**

*During the activity, students should make progress toward:*

* Tracing the execution of while/for loops and predict their final output (Critical Thinking).

for Statements
======================================================

A ``for`` loop executes the same block of code "for each item in a sequence."

.. activecode:: loops_ac_pogil_basicfor
    :caption: A basic "for" loop

    Run this code to see what it prints.
    ~~~~
    print("hello")
    for x in [2, 7, 1]:
        print("the number is", x)
    print("goodbye")

.. mchoice:: loops_MC_pogil_indented
    :answer_a: 0
    :answer_b: 1
    :answer_c: 2
    :answer_d: 3
    :answer_e: 4
    :correct: d
    :feedback_a: Incorrect! Remember, the body of a "for" loop executes as many times as there are items in a sequence. Try again.
    :feedback_b: Incorrect! Remember, the body of a "for" loop executes as many times as there are items in a sequence. Try again.
    :feedback_c: Incorrect! Remember, the body of a "for" loop executes as many times as there are items in a sequence. Try again.
    :feedback_d: Correct! There are three items in the sequence [2, 7, 1], so the body of the "for" loop executes 3 times.
    :feedback_e: Incorrect! The question is asking only about the indented line of code under the "for" loop, so Line 4 does not count. Try again.

    How many times does the indented line of code execute under the ``for`` loop?

.. mchoice:: loops_MC_pogil_notindented
    :answer_a: 0
    :answer_b: 1
    :answer_c: 2
    :answer_d: 3
    :answer_e: 4
    :correct: b
    :feedback_a: Incorrect! After the "for" loop terminates (finishes executing), the program continues to execute the non-indented lines of code beneath it. Try again.
    :feedback_b: Correct! The not indented line of code executes only once, as it is not part of the "for" loop and therefore does not execute multiple times.
    :feedback_c: Incorrect! The absence of an indent in Line 4 means that it is not part of the "for" loop. Try again.
    :feedback_d: Incorrect! The absence of an indent in Line 4 means that it is not part of the "for" loop. Try again.
    :feedback_e: Incorrect! The absence of an indent in Line 4 means that it is not part of the "for" loop. Try again.

    How many times does the line of code NOT indented execute after the ``for`` loop?

.. dragndrop:: loops_dnd_pogil_xvalue
    :feedback: Keep trying!
    :match_1: 1st time|||x = 2
    :match_2: 2nd time|||x = 7
    :match_3: 3rd time|||x = 1

    Match each execution of Line 3 to the value "x" has after Line 3 is executed.

.. dragndrop:: loops_dnd_pogil_modifiedlist
    :feedback: Keep trying!
    :match_1: [5, -7, 0]|||3 times
    :match_2: [3, 2, 1, 0]|||4 times
    :match_3: [4, 4]|||2 times
    :match_4: [8]|||1 time

    Imagine that the list [2, 7, 1] from the code above was modified to one of the lists below. Match each new list to the amount of times it would make the "for" loop execute.

In general, the length of the list determines the number of times that the loop repeats.
The value of the variable ``x`` is selected from the list. Each time the loop runs, the
next value from the list is assigned to ``x``.

Before your ``for`` statement, you can assign your list to a variable and your program
will run the same way:

.. activecode:: loops_ac_pogil_assigninglist
    :caption: Assigning a list to a variable

    Run this code to see what it prints.
    ~~~~
    print("hello")
    numbers = [2, 7, 1]
    for x in numbers:
        print("the number is", x)
    print("goodbye")

In addition, ``for`` loops can be used with strings:

.. activecode:: loops_ac_pogil_string
    :caption: Using a for loop with a string

    Run this code to see what it prints.
    ~~~~
    for c in "Hi!":
        print(c)

With strings, a ``for`` statement iterates over each character in the string.
The length of the string determines how many times the body of the loop will run.

``for`` loops can also handle many other data types, like tuples and dictionaries.
Experiment on your own to see this in action!


The range Function
============================

The Python ``range`` function will generate a list of numbers. The ``range`` function
can take up to three numbers as arguments.

.. activecode:: loops_ac_pogil_output_range
    :caption: Exploring the use of the range function

    Run this code to see what it prints.
    ~~~~
    print(type(range(5)))
    print(range(5))
    print(list(range(5)))
    x = range(3) #this line prints nothing
    print(x)
    print(list(x))
    print(list(range(5, 10)))
    print(list(range(-3, 4)))
    print(list(range(4, 10, 2)))
    for i in range(5): #this line prints nothing
        print(i)

The first line of output describes the range as a function, whereas the second line
shows the actual range of values as a list by using the ``list`` function.

If the argument of the ``range`` function specifies a single number, like ``range(x)``,
the first number listed will be 0, the last number listed will be x - 1, and there
will be x numbers in the list.

.. fillintheblank:: loops_fitb_pogil_oneparamrange

    Use the ``range`` function with one parameter to generate the sequence 0, 1, 2, 3.

    - :range\(4\): Correct! With one parameter, the sequence will start at 0 and end at one less than the specified value.
      :range\(3\): Incorrect! The last number of the sequence is equal to the specified value - 1. Try again.
      :.*: Incorrect! Make sure you only use one parameter and write your answer in the form "range(x)". Try again.

If the argument of the ``range`` function specifies two numbers, like ``range(x, y)``,
the first number listed will be x, the last number listed will be y - 1, and there will
be y - x numbers in the list.

.. fillintheblank:: loops_fitb_pogil_twoparamrange

    Use the ``range`` function with two parameters to generate the sequence 1, 2, 3, 4.

    - :range\(1, 5\)|range\(1,5\): Correct! The sequence will start at 1 and end at one less than the second value.
      :range\(1, 5\)|range\(1,4\): Incorrect! Remember that the range starts at the first value but ends before the second value.
      :.*: Incorrect! Make sure you use two parameters and write your answer in the form "range(x, y)". Try again.

If the argument of the ``range`` function specifies three numbers, like ``range(x, y, z)``,
the first number listed will still be x, just like the two parameter version. The third
argument represents how much to increment the number by each time. To calculate how many
numbers will be in the list, take the result of (y - x) / z and round it up to the nearest
whole number.

.. fillintheblank:: loops_fitb_pogil_threeparamrange

    Use the ``range`` function with three parameters to generate the sequence 1, 3, 5, 7.

    - :range\(1, 8, 2\)|range\(1, 9, 2\)|range\(1,8,2\)|range\(1,9,2\): Correct! With three parameters, the sequence will start at 1 and increment by 2 until it lists 7.
      :.*: Incorrect! Make sure you use three parameters and write your answer in the form "range(x, y, z)". Try again.

.. mchoice:: loops_MC_pogil_whichtype1
    :practice: T
    :answer_a: for i in range(x)
    :answer_b: for i in range(x, y)
    :answer_c: for i in range(x, y, z)
    :answer_d: for i in list
    :correct: a
    :feedback_a: Correct! This is the simplest way to write it and makes your code easiest to read.
    :feedback_b: Incorrect! Although this could work, it can be done more simply. Try again.
    :feedback_c: Incorrect! Although this could work, it can be done more simply. Try again.
    :feedback_d: Incorrect! You don't have a preexisting list, so you should use the range function to generate one for you. Try again.

    If you wanted to execute a loop 100 times, which type of ``for`` statement should you use?

.. mchoice:: loops_MC_pogil_whichtype2
    :practice: T
    :answer_a: for i in range(x)
    :answer_b: for i in range(x, y)
    :answer_c: for i in range(x, y, z)
    :answer_d: for i in list
    :correct: d
    :feedback_a: Incorrect! The list exists already, so there is no need to generate one using the range function. Try again.
    :feedback_b: Incorrect! The list exists already, so there is no need to generate one using the range function. Try again.
    :feedback_c: Incorrect! The list exists already, so there is no need to generate one using the range function. Try again.
    :feedback_d: Correct! Because your list exists already, you can use this format to iterate through each item inside it.

    If you wanted to use each item of an existing list inside the loop, which type of ``for`` statement should you use?

The arguments to ``range`` must be integers, so ``range`` does not work with strings.
However, if you wanted to print the letters A to Z in a loop, you could do something
like this:

.. activecode:: loops_ac_pogil_output_printatoz
    :caption: Printing the letters A to Z

    You can use the built-in function ``chr`` to convert integers to their corresponding Unicode characters.
    ~~~~
    for i in range(65, 91):
        print(chr(i))


while Statements
============================

A more general looping structure is the ``while`` statement.

.. activecode:: loops_ac_pogil_output_while
    :caption: A basic while loop

    Run this code to observe the behavior of a basic while loop and answer the questions below.
    ~~~~
    i = 0
    while i < 3:
        print(i)
        i = i + 1
    print("goodbye")

.. mchoice:: loops_mc_pogil_loopcondition
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Correct! The body of the while loop will execute as long as the loop condition is True.
    :feedback_b: Incorrect! You've got it backwards. Try again.

    What must the value of the Boolean expression (after the ``while``) be in order
    for the first ``print`` statement to execute?

In the above code, the variable ``i`` is incremented by 1 each time the loop body
is executed. Because the value of ``i`` steadily grows, the "loop condition" (the
Boolean expression after the ``while``) eventually becomes false when i = 3, which
causes the loop body to stop executing.

.. mchoice:: loops_mc_pogil_swappedlines
    :answer_a: 0 1 2
    :answer_b: 1 2 3
    :answer_c: 0 1 2 3
    :answer_d: 1 2 3 4
    :answer_e: There would be no output
    :correct: b
    :feedback_a: Incorrect! This is what it printed before, but swapping the lines would change the output. Try again.
    :feedback_b: Correct! "i" is incremented before it is printed, so the numbers it prints are one higher than before.
    :feedback_c: Incorrect! The loop still terminates when the end of the loop body is reached while i < 3. Try again.
    :feedback_d: Incorrect! The loop still terminates when the end of the loop body is reached while i < 3. Try again.
    :feedback_e: Incorrect! Something would still be printed. Try again.

    Imagine that lines 3 and 4 in the above code were swapped. What is the new output of the code?

.. mchoice:: loops_mc_pogil_twice
    :answer_a: Change line 1 to "i = 1"
    :answer_b: Change the loop condition to "i < 2"
    :answer_c: Change line 4 to "i = i + 2"
    :answer_d: Swap lines 1 and 2
    :correct: a,b,c
    :feedback_a: Correct! This would print "1 2".
    :feedback_b: Correct! This would print "0 1".
    :feedback_c: Correct! This would print "0 2".
    :feedback_d: Incorrect! This would cause a NameError because "i" wouldn't be defined when the program tries to run the "while" line for the first time. Try again.

    Which of these modifications would make the loop in the above code only run twice? There are one or more answers.

A ``while`` loop has three parts that control the number of times it executes.
The first part initializes the variable or condition, the second part tests
whether the end has been reached, and the third part updates the variable or
condition.

.. mchoice:: loops_mc_pogil_noincrement
    :answer_a: 0 1 2
    :answer_b: 1 2 3
    :answer_c: 0 would print infinitely
    :answer_d: SyntaxError
    :correct: c
    :feedback_a: Incorrect! "i" does not increase anywhere in the code. Try again.
    :feedback_b: Incorrect! "i" begins at 0, not 1. Try again.
    :feedback_c: Correct! Because the value of "i" never changes, the program will never leave the while loop.
    :feedback_d: Incorrect! The compiler can interpret your code, but it may not do what you intended. Try again.

    If you deleted line 4 of the code above, what would print?

When writing a ``while`` loop, it's helpful to answer a few
questions before you start:

*What needs to be initialized before the loop?*

*What condition must be true for the loop to repeat?*

*What will change so that the loop eventually ends?*

For example, consider the code below. The ``add(n)`` function
prompts the user for ``n`` numbers and returns the sum of these
values. For example, when ``add(5)`` is called, the user is
asked to input five numbers. If the user inputs 3, 1, 5, 2, and
4, the function would return the value 15.

.. activecode:: loops_ac_pogil_output_addn
    :caption: add(n), a function using a while loop

    Observe the behavior of this code to see how it answers the the three bullet points above.
    ~~~~
    def add(n):
        i = 0
        total = 0
        while i < n:
            total = total + int(input('Enter a value:'))
            i = i + 1
        print(total)

    add(5)


Before the loop begins, the ``i`` variable, which counts how many
times the loop runs, must be initialized. However, the ``total``
variable must also be initialized outside of the ``while`` loop,
or else it would reset to 0 each time the loop ran.

The loop repeats ``n`` times, so the Boolean expression that must
be true for the loop to continue is ``i < n``.

Finally, for the loop to eventually end, ``i`` must be incremented,
so we include the statement ``i = i + 1``.

Making sure you answer these questions helps you write better
(and less buggy) ``while`` loops.

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: loops-for-range-while_groupsub
   :limit: 3
