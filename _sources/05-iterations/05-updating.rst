Updating variables
------------------

A common pattern in assignment statements is an assignment statement
that updates a variable, where the new value of the variable depends on
the old.

.. code-block:: python

   x = x + 1


This means "get the current value of ``x``\ , add 1, and then
update ``x`` with the new value."

If you try to update a variable that doesn't exist, you get an error,
because Python evaluates the right side before it assigns a value to
``x``\ :

.. activecode:: 05section1_1
   :coach:
   :caption: An example of when an error like this comes up: NameError: name 'x' is not defined

   x = x + 1
   print(x)


Before you can update a variable, you have to
*initialize* it, usually with a simple assignment:

.. activecode:: 05section1_2
   :coach:
   :caption: An example of when an error like this comes up: NameError: name 'x' is not defined

   x = 0
   x = x + 1
   print(x)


Updating a variable by adding 1 is called an *increment*\ ;
subtracting 1 is called a *decrement*.

.. fillintheblank:: 05fill1_1

    Before you can update a variable, you have to ________ it.

    - :(?:i|I)(?:n|N)(?:i|I)(?:t|T)(?:i|I)(?:a|A)(?:L|l)(?:i|I)(?:z|Z)(?:e|E): Correct!
      :.*: Try again!

.. fillintheblank:: 05fill1_2

    Subtracting 1 from a variable is called a ________.

    - :(?:d|D)(?:e|E)(?:c|C)(?:r|R)(?:e|E)(?:m|M)(?:e|E)(?:n|N)(?:t|T): Correct!
      :.*: Try again!

.. mchoice:: 05question1_1
   :answer_a: The integer "2" prints.
   :answer_b: We get a TypeError.
   :answer_c: We get a NameError.
   :answer_d: The program compiles with no errors but nothing prints.
   :correct: c
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Correct!
   :feedback_d: Try again!

   Consider the code block below. What happens when you run this program?

   .. code-block:: python

    y = 1
    x = x + 1
    print(x)
