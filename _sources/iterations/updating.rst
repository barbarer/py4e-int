Updating variables
------------------
.. index::
    single: Update
    pair: Updating; Variable
    pair: Initialize; Before Update
    single: Increment
    single: Decrement

Commonly, assignment statements are used to update a variable, where the
new value of the variable depends on the old.

.. code-block:: python

   x = x + 1


This means "get the current value of ``x``, add 1, and then
update ``x`` with the new value."

If you try to update a variable that doesn't exist, you get an error,
because Python evaluates the right side before it assigns a value to
``x``:

.. activecode:: itr-section1_1
    :coach:
    :caption: NameError: name 'x' is not defined

    x = x + 1
    print(x)


Before you can update a variable, you have to
*initialize* it, usually with a simple assignment:

.. activecode:: itr-section1_2
    :coach:
    :caption: Defining and updating x

    x = 0
    x = x + 1
    print(x)


When you update a variable by adding 1 it's called an *increment*\ ;
subtracting 1 is called a *decrement*.

.. fillintheblank:: itUpdate_fill1
    :practice: T

    Before you can update a variable, you have to ________ it.

    - :[Ii]nitialize: Before updating a variable, you need to initialize the variable.
      :.*: Incorrect! Hint: what are you doing to variable 'x' when you say 'x = 0'? Try again!

.. fillintheblank:: itUpdate_fill2
    :practice: T

    When you subtract 1 from a variable, you ________ it.

    - :[Dd]ecrement: Subtracting 1 from a varaible is called decrementing, the opposite of adding 1 (incrementing).
      :.*: Incorrect! Hint: the answer is the opposite of "increment". Try again!

.. mchoice:: itUpdate_MC_y
    :practice: T
    :answer_a: The integer "2" prints.
    :answer_b: We get a TypeError.
    :answer_c: We get a NameError.
    :answer_d: The program compiles with no errors but nothing prints.
    :correct: c
    :feedback_a: Incorrect! Take another look at the second line. Try again!
    :feedback_b: Incorrect! This will not cause a TypeError because x, y, and 1 are all integers. Try again!
    :feedback_c: Correct! This will cause a NameError because x has not been initialized yet.
    :feedback_d: Incorrect! This program will not compile. Try again!

    Consider the code block below. What happens when you run this program?

    .. code-block:: python

        y = 1
        x = x + 1
        print(x)
