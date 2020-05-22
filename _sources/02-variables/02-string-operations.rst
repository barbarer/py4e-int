String operations
-----------------

The ``+`` operator works with strings, but it is not addition
in the mathematical sense. Instead it performs
*concatenation*\ , which means joining the strings by
linking them end to end. For example:

.. activecode:: 02-ac-8-strings

   first = 10
   second = 15
   print(first+second)
   first = '100'
   second = '150'
   print(first + second)


The ``*`` operator also works with strings by multiplying the content
of a string by an integer. For example:

.. activecode:: 02-ac-9-mult

   first = 'Test '
   second = 3
   print(first * second)


As an example, imagine that you were planning to drive from Chicago to Dallas. If you know how many miles-per-gallon your car gets, and how many miles it is, you can estimate the number of gallons it will take.

Use the *CodeLens* below to trace through what it would look like for a computer to execute this program:

- Press |codelensfwd| to go forward executing a single line of the program.
- Press |codelenslast| to execute all the lines of the program.

.. codelens:: Chicago_2_Dallas

   distance = 924.7
   mpg = 35.5
   gallons = distance / mpg

Now, if we know the average cost of a gallon of gas, we can figure out the cost of the trip from Chicago to Dallas in your car.

.. Note::

   Notice that in the code below that we are using variable names like ``costPerGallon`` and ``costTrip``.  A variable name can't contain any spaces in it, so one way to make a variable name more readable when it contains more than one word is to use uppercase the first letter of each new word, as you see in ``costPerGallon`` and ``costTrip``.  This is also called **camel case**. Also be aware that case does matter in Python:  ``costTrip`` is a different name than ``costtrip``.

.. codelens:: Chicago_2_Dallas_Cost

   distance = 924.7
   mpg = 35.5
   gallons = distance / mpg
   costPerGallon = 3.65
   costTrip = gallons * costPerGallon

What we're doing above is **tracing** a program.  Normally, we **run** a program -- tell the computer to execute each step of the program as fast as possible. When we do that, we don't see individual variable values, as we can above.  We can check values (including the values for variables) by printing them.  The function ``print`` can take an *input* (a variable name inside of parentheses) whose value will be displayed. The ``print`` function can also print a **string** (like ``"Cost to get from Chicago to Dallas"``) which is a sequence of characters inside a pair of double quotes as seen in line 6.  It will print the exact contents of the string.  This is useful for explaining the values that you are printing.

Press the |runbutton| below to see this program run at full speed.

.. activecode:: Trip_Calculator
   :tour_1: "Line by line tour"; 1: trp-line1; 2: trp-line2; 3: trp-line3; 4: trp-line4; 5: trp-line5; 6: trp-line6; 7: trp-line7;

   distance = 924.7
   mpg = 35.5
   gallons = distance / mpg
   costPerGallon = 3.65
   costTrip = gallons * costPerGallon
   print("Cost to get from Chicago to Dallas")
   print(costTrip)

How does this program work?  Try pressing the |audiobutton| button above to listen to an explanation of the program.

Try editing the program above and running it to answer this question:

.. mchoice:: 02-mc-8-lessthan90
   :answer_a: Yes
   :answer_b: No
   :answer_c: We should fly instead.
   :correct: a
   :feedback_a: Yes, the cost would be $89.86 (which you knew by editing the program above and running it)
   :feedback_b: Try it -- it's just under $90.
   :feedback_c: You might be right, but figure out the cost by editing the above program

   If the cost per gallon drops to $3.45, can we drive from Chicago to Dallas for less than $90 in gas?

.. mchoice:: 02-mc-9-costpergallon
   :answer_a: 3.45
   :answer_b: 3.65
   :answer_c: costPerGallon
   :correct: c
   :feedback_a: This would be true if it was printing the value of original variable.
   :feedback_b: This would be true if it was printing the value of the variable after you changed it to figure out the previous question.
   :feedback_c: Since <code>costPerGallon</code> is in double quotes it is a string, and it will print out those exact characters.

   What would be printed by ``print("costPerGallon")`` if this line was added to the end of the last program?

.. mchoice:: 02-mc-10-camelcase
   :answer_a: BLUEDOGS
   :answer_b: redDogs
   :answer_c: GreenDogs
   :answer_d: yellowdogs
   :correct: b
   :feedback_a: All uppercase letters means that a variable is constant and cannot be changed.
   :feedback_c: This is legal but we usually don't start variables with an uppercase letter.
   :feedback_d: This is legal but how can we change it to use camelCase?

   Which of the following variable names use camel case?
