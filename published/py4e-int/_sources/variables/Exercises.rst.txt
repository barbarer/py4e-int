Multiple Choice Questions
-------------------------

.. mchoice:: var-ex-mc-division
    :practice: T
    :answer_a: 1
    :answer_b: 1.25
    :answer_c: 1.5
    :answer_d: 3
    :correct: b
    :feedback_a: Try again, this is the answer for 15 // 12.
    :feedback_b: 15 / 12 will result in 1.25.  The / operator returns a floating point result.
    :feedback_c: Try running this in your python interpreter.
    :feedback_d: Try again, this is the answer for 15 % 12.

    What is the value of ``15 / 12``?

.. mchoice:: var-ex-mc-floored
    :practice: T
    :answer_a: 1
    :answer_b: 1.25
    :answer_c: 1.5
    :answer_d: 3
    :correct: a
    :feedback_a: The // operator returns an integer result (the floor).
    :feedback_b: Try again, this is the answer for 15 / 12.
    :feedback_c: Try running this in your python interpreter.
    :feedback_d: Try again, this is the answer for 15 % 12.

    What is the value of ``15 // 12``?

.. mchoice:: var-ex-mc-mod
    :practice: T
    :answer_a: 1
    :answer_b: 1.25
    :answer_c: 1.5
    :answer_d: 3
    :correct: d
    :feedback_a: Try again, this is the answer for 15 // 12.
    :feedback_b: Try again, this is the answer for 15 / 12.
    :feedback_c: Try running this in your python interpreter.
    :feedback_d: The % (modulo) operator returns the remainder and 12 goes into 15 one time with a remainder of 3.

    What is the value of ``15 % 12``?

.. mchoice:: var-ex-mc-type
    :practice: T
    :answer_a: Character
    :answer_b: Integer
    :answer_c: Float
    :answer_d: String
    :correct: d
    :feedback_a: It is not a single character.
    :feedback_b: The data is not numeric.
    :feedback_c: The value is not numeric with a decimal point.
    :feedback_d: Strings can be enclosed in single quotes.

    What is the data type of ``'this is what kind of data'``?

.. mchoice:: var-ex-mc-assign
    :practice: T
    :answer_a: Nothing is printed. A runtime error occurs.
    :answer_b: Thursday
    :answer_c: 32.5
    :answer_d: 19
    :correct: d
    :feedback_a: It is legal to change the type of data that a variable holds in Python.
    :feedback_b: This is the first value assigned to the variable day, but the value is changed.
    :feedback_c: This is the second value assigned to the variable day, but the value is changed.
    :feedback_d: The current value of the variable day will be printed.

    What is printed when the following statements execute?

    .. code-block:: python

      day = "Thursday"
      day = 32.5
      day = 19
      print(day)

.. mchoice:: var-ex-mc-input
    :practice: T
    :answer_a: &lt;class 'str'&gt;
    :answer_b: &lt;class 'int'&gt;
    :answer_c: &lt;class 18&gt;
    :answer_d: 18
    :correct: a
    :feedback_a: All input from users is read in as a string.
    :feedback_b: Even though the user typed in an integer, it does not come into the program as an integer.
    :feedback_c: 18 is the value of what the user typed, not the type of the data.
    :feedback_d: 18 is the value of what the user typed, not the type of the data.

    What is printed when the following statements execute?

    .. code-block:: python

      n = input("Please enter your age: ")
      # user types in 18
      print ( type(n) )

.. mchoice:: var-ex-mc-order
    :practice: T
    :answer_a: 14
    :answer_b: 24
    :answer_c: 3
    :answer_d: 13.667
    :correct: a
    :feedback_a: Using parentheses, the expression is evaluated as (2*5) first, then (10 // 3), then (16-3), and then (13+1).
    :feedback_b: Remember that * has precedence over -.
    :feedback_c: Remember that // has precedence over -.
    :feedback_d: Remember that // does integer division.

    What is the value of the following expression:

    .. code-block:: python

      16 - 2 * 5 // 3 + 1

.. mchoice:: var-ex-mc-reassign
    :practice: T
    :answer_a: x is 15 and y is 15
    :answer_b: x is 22 and y is 22
    :answer_c: x is 15 and y is 22
    :answer_d: x is 22 and y is 15
    :correct: d
    :feedback_a: Look at the last assignment statement which gives x a different value.
    :feedback_b: No, x and y are two separate variables.  Just because x changes in the last assignment statement, it does not change the value that was copied into y in the second statement.
    :feedback_c: Look at the last assignment statement, which reassigns x, and not y.
    :feedback_d: Yes, x has the value 22 and y the value 15.


    After the following statements, what are the values of x and y?

    .. code-block:: python

      x = 15
      y = x
      x = 22

.. mchoice:: var-ex-mc-print
    :practice: T
    :answer_a: The address is street
    :answer_b: The address is 125 Main Street
    :answer_c: It won't execute
    :correct: a
    :feedback_a: Since street is in double quotes it will print the string street rather than the value of the variable street.
    :feedback_b: This would be true if it was print("The address is " + street)
    :feedback_c: While this isn't printing what we probably want it to, it will print something.


    Given the following code segment, what will be printed?

    ::

      street = "125 Main Street"
      print("The address is " + "street")

.. dragndrop:: var-ex-dnd-types
    :practice: T
    :feedback: Try running these commands in your terminal window.
    :match_1: (width//2)|||8, integer
    :match_2: (width/2.0)|||8.5, float
    :match_3: (height/3)|||4.0, float
    :match_4: (1 + 2 * 5)|||11, integer

    Assume that width = 17 and height = 12.0. For each of the following expressions, match them up with the value of
    the expression and the type (of the value of the expression).


.. mchoice:: var-string-var-print-in-quotes
    :practice: T
    :answer_a: Derrick has 4 friends
    :answer_b: name has 4 friends
    :answer_c: name has friends friends
    :answer_d: There will be an error
    :correct: b
    :feedback_a: Since name is in quotes it will print those characters rather than the value of name.
    :feedback_b: Since name is in quotes it will print those characters rather than the value of name, but it will print the value of friends after it converts it to a string.
    :feedback_c: This would be true if both name and friends were in quotes.
    :feedback_d: This would be true if the friends can not been converted to a string


    Given the following code segment, what will be printed?

    ::

      friends = 4
      name = "Derrik"
      print("name" + " has " + str(friends) + " friends")

.. mchoice:: var-string-print-no-convert-int
    :practice: T
    :answer_a: Mariah has 2 pets
    :answer_b: name has 2 pets
    :answer_c: Mariah has pets pets
    :answer_d: There will be an error
    :correct: d
    :feedback_a: This would be true if there wasn't an error
    :feedback_b: This would be true if name was in quotes
    :feedback_c: This would be true if pets was in quotes
    :feedback_d: You can't concatenate an integer with a string.  You need to convert it to a string first.


    Given the following code segment, what will be printed?

    ::

      pets = 2
      name = "Mariah"
      print(name + " has " + pets + " pets")
