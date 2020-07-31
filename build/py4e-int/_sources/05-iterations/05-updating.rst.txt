Updating variables
------------------

A common pattern in assignment statements is an assignment statement
that updates a variable, where the new value of the variable depends on
the old.

.. code-block:: python

   x = x + 1


This means "get the current value of ``x``, add 1, and then
update ``x`` with the new value."

If you try to update a variable that doesn't exist, you get an error,
because Python evaluates the right side before it assigns a value to
``x``:

.. activecode:: 05section1_1
    :coach:
    :caption: NameError: name 'x' is not defined

    x = x + 1
    print(x)


Before you can update a variable, you have to
*initialize* it, usually with a simple assignment:

.. activecode:: 05section1_2
    :coach:
    :caption: Defining and updating x

    x = 0
    x = x + 1
    print(x)


Updating a variable by adding 1 is called an *increment*\ ;
subtracting 1 is called a *decrement*.

.. fillintheblank:: itUpdate_fill1
    :practice: T

    Before you can update a variable, you have to ________ it.

    - :[Ii]nitialize: Before updating a variable, you need to initialize the variable.
      :.*: Try again!

.. fillintheblank:: itUpdate_fill2
    :practice: T

    Subtracting 1 from a variable is called a ________.

    - :[Dd]ecrement: Subtracting 1 from a varaible is called a decrement, the opposite of adding 1 (an increment).
      :.*: Try again!

.. mchoice:: itUpdate_MC_y
    :practice: T
    :answer_a: The integer "2" prints.
    :answer_b: We get a TypeError.
    :answer_c: We get a NameError.
    :answer_d: The program compiles with no errors but nothing prints.
    :correct: c
    :feedback_a: Take another look at the second line.
    :feedback_b: This will not cause a TypeError because x and y are both integers.
    :feedback_c: This will cause a NameError because x has not been initialized yet.
    :feedback_d: This program will not compile.

    Consider the code block below. What happens when you run this program?

    .. code-block:: python

        y = 1
        x = x + 1
        print(x)
