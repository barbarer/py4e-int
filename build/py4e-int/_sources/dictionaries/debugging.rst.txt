Debugging
---------

.. index::
   single: Debugging Dictionaries

As you work with bigger datasets it can become unwieldy to debug by
printing and checking data by hand. Here are some suggestions for
debugging large datasets:

Scale down the input
:   If possible, reduce the size of the dataset. For example if the program reads a text file, start with just the first 10 lines, or with the smallest example you can find. You can either edit the files themselves, or (better) modify the program so it reads only the first ``n`` lines.

.. code-block::

   If there is an error, you can reduce `n` to the smallest
   value that manifests the error, and then increase it gradually as
   you find and correct errors.



Check summaries and types
:   Instead of printing and checking the entire dataset, consider printing summaries of the data: for example, the number of items in a dictionary or the total of a list of numbers.

.. code-block::

   A common cause of runtime errors is a value that is not the right
   type. For debugging this kind of error, it is often enough to print
   the type of a value.



Write self-checks
:   Sometimes you can write code to check for errors automatically. For example, if you are computing the average of a list of numbers, you could check that the result is not greater than the largest element in the list or less than the smallest. This is called a "sanity check" because it detects results that are "completely illogical".

.. code-block::

   Another kind of check compares the results of two different
   computations to see if they are consistent. This is called a
   "consistency check".



Pretty print the output
:   Formatting debugging output can make it easier to spot an error.

Again, time you spend building scaffolding can reduce the time you spend
debugging.

.. mchoice:: question9_6_1
   :practice: T
   :answer_a: Run through the entire code all at once to try and find bugs
   :answer_b: Split the debugging into stages by scaling down the input
   :answer_c: Assume your code is perfect and move on
   :correct:  b
   :feedback_a: Try again!
   :feedback_b: Correct! When dealing with large portions of data, it is best to separate testing into smaller pieces so you can more clearly see where the errors might be coming from.
   :feedback_c: Try again!

   If you are trying to debug a program that reads in a lot of data, what is the best way to debug the code?

.. mchoice:: question9_6_2
   :practice: T
   :answer_a: Python is performing a string concatenation and not integer addition
   :answer_b: There is nothing wrong with this code
   :answer_c: There is a parenthesis that was never closed
   :correct: a
   :feedback_a: Correct! The input function returns a string not an integer. For this to be correct, you would need to initialize input as an integer like so: int(input(...))
   :feedback_b: Try again!
   :feedback_c: Try again!

   What error (if any) appears when the following code is run?

   .. activecode:: example9_6_2

      current_time = input("What is the current time in hours?")
      wait_time = input("How many hours do you want to wait?")

      print(current_time)
      print(wait_time)

      final_time = current_time + wait_time
      print(final_time)

.. mchoice:: question9_6_3
   :practice: T
   :answer_a: Scale down the input
   :answer_b: Check summaries and types
   :answer_c: The debugger will tell you what is wrong and how to fix it
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct! The code above was not adding two integers together, it was trying to concatenate two strings. It is crucial to always check summaries and types to make sure your code is doing exactly what you want it to do.
   :feedback_c: Try again!

   How could the error found in the previous problem been detected?
