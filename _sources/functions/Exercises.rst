Multiple Choice Questions
-------------------------

.. mchoice:: functEx_1_v2
    :practice: T
    :answer_a: a, b
    :answer_b: -3, b
    :answer_c: a, 5
    :answer_d: -3, 5
    :answer_e: -3 5
    :correct: e
    :feedback_a: It will print the value of a and b.
    :feedback_b: It will print -3 and the value of b.
    :feedback_c: It will print the value of a and 5.
    :feedback_d: It looks like it will print this, but it will actually print the values with a space between them.
    :feedback_e: It prints the values of a and b with a space between them.  The default value of b is 5.

    What will be printed when the following code executes?

    .. code-block:: python

        def test(a, b = 5):
            print(a, b)

        test(-3)

.. mchoice:: functEx_2
    :practice: T
    :answer_a: Zap ABC jane fred jane
    :answer_b: Zap ABC Zap
    :answer_c: ABC Zap jane
    :answer_d: ABC Zap ABC
    :answer_e: Zap Zap Zap
    :correct: d
    :feedback_a: Incorrect! This code will only print the strings "Zap" or "ABC", not "jane" or "fred". Try again.
    :feedback_b: Incorrect! This would be correct if the call was fred() jane() fred(). Try again.
    :feedback_c: Incorrect! This code will only print the strings "Zap" or "ABC", not "jane" or "fred". Try again.
    :feedback_d: Correct! jane() fred() jane() will print ABC Zap ABC.
    :feedback_e: Incorrect! This would be correct if the call was fred() fred() fred(). Try again.

    What will the following Python program print out? (Given that each word will actually print on a new line)

    .. code-block:: python

        def fred():
            print("Zap")

        def jane():
            print("ABC")

        jane()
        fred()
        jane()

.. mchoice:: functEx_3
    :practice: T
    :answer_a: value
    :answer_b: Second
    :answer_c: parameter
    :answer_d: First
    :answer_e: Jane Doe
    :correct: b
    :feedback_a: Incorrect! "value" is the name of a variable. This code will print what "value" is assigned to. Try again.
    :feedback_b: Correct! "value" is assigned to the value of parameter which is "Second", so that's what will print.
    :feedback_c: Incorrect! "parameter" is equal to the function call's argument. Try again.
    :feedback_d: Incorrect! Although the variable value is assigned to "First" initially, it is then reassigned to be equal to the parameter. Try again.
    :feedback_e: Incorrect! The "name" variable is unused in the function call, so it does not affect what is printed. Try again.

    What value is printed when the following code is executed?

    .. code-block:: python

        name = "Jane Doe"
        def myFunction(parameter):
            value = "First"
            value = parameter
            print (value)

        myFunction("Second")

.. mchoice:: functEx_4_v2
    :practice: T
    :answer_a: definition
    :answer_b: method
    :answer_c: turtle
    :answer_d: module
    :answer_e: function
    :correct: e
    :feedback_a: Incorrect! A definition is used to create functions. Try again.
    :feedback_b: Incorrect! A method is a function that is defined in a class.
    :feedback_c: Incorrect! "turtle" is a specific Python module that lets you draw lines and shapes. Try again.
    :feedback_d: Incorrect! A module is a file that contains Python statements and definitions. Try again.
    :feedback_e: Correct! A function is a named sequence of statements in Python.

    A named sequence of statements is known as which of the following?

.. mchoice:: functEx_5_v2
    :practice: T
    :answer_a: 5
    :answer_b: 10
    :answer_c: 25
    :answer_d: 32
    :answer_e: 3125
    :correct: c
    :feedback_a: This would be true if it first printed the value of x.
    :feedback_b: This would be true if it printed 5 * 2 but it is 5 ** 2 which is 5 * 5.
    :feedback_c: It prints the value of 5 raised to the 2nd power which is 5 * 5 = 25.
    :feedback_d: This would be true if it was 2 raised to the 5th power (2 * 2 * 2 * 2 * 2) = 32.
    :feedback_e: This would be ture if it was 5 raised to the 5th power (5 * 5 * 5 * 5 * 5) = 3125.

    What will the following code print?

    .. code-block:: python
        :linenos:

        def pow(b, p):
            y = b ** p
            return y

        def square(x):
            a = pow(x, 2)
            return a

        n = 5
        result = square(n)
        print(result)

.. mchoice:: functEx_6_v2
    :practice: T
    :answer_a: 0
    :answer_b: 3
    :answer_c: 7
    :answer_d: 1
    :correct: b
    :feedback_a: This would be true if it was rem(3,3).  The value 3 would go into 3 one time with 0 remainder.
    :feedback_b: The value 7 goes into 3 zero times, so the remainder is 3.
    :feedback_c: How many times does 7 go evenly into 3 and what is the remainder?
    :feedback_d: This would be true if it was rem(7,3)

    Consider the following Python code. What does this code print?

    .. code-block:: python
        :linenos:

        def rem(a, b):
            return a % b

        print(rem(3,7))

.. mchoice:: functEx_7
    :practice: T
    :answer_a: a
    :answer_b: len
    :answer_c: length
    :answer_d: x
    :correct: b
    :feedback_a: Incorrect! a is a valid variable name. Try again.
    :feedback_b: Correct! This would not work as a variable name because it is already reserved as a built-in function name.
    :feedback_c: Incorrect! length would work as a variable because it is not a reserved word or a built-in function. Try again.
    :feedback_d: Incorrect! x is a valid variable name. Try again.

    Which of the following would NOT work as a variable name?

.. mchoice:: functEx_8
    :practice: T
    :answer_a: 34.0
    :answer_b: 34
    :answer_c: 33.70
    :answer_d: 33
    :correct: d
    :feedback_a: Incorrect! The int function converts a floating point number to an integer. Try again.
    :feedback_b: Incorrect! The int function does not round up. Try again.
    :feedback_c: Incorrect! The int function converts a floating point number to an integer. Try again.
    :feedback_d: Correct! The int function always truncates floating point numbers.

    Consider the code below. What prints?

    .. code-block:: python
        :linenos:

        print(int(33.7))

.. mchoice:: functEx_9
    :practice: T
    :answer_a: the function header
    :answer_b: the function body
    :answer_c: the function definition
    :answer_d: the function named
    :correct: a
    :feedback_a: Correct! The first line of a function definition is the header.
    :feedback_b: Incorrect! Everything but the first line of a function definition is the function body. Try again.
    :feedback_c: Incorrect! Lines 1 and 2 collectively are the function definition. Try again.
    :feedback_d: Incorrect! The name is printWeather.

    Consider the code below. Line 1 is called...

    .. code-block:: python
        :linenos:

        def printWeather():
            print("It is sunny!")

.. mchoice:: functEx_10
    :practice: T
    :answer_a: The lyrics print like normal.
    :answer_b: We get a TypeError.
    :answer_c: We get a NameError.
    :answer_d: The program compiles but nothing prints.
    :correct: c
    :feedback_a: Incorrect! An error occurs when you call a function before it is defined. Try again.
    :feedback_b: Incorrect! This will not cause a TypeError because there is not an issue with the variable types. Try again.
    :feedback_c: Correct! You get a NameError when you call a function before it is defined.
    :feedback_d: Incorrect! This program will not compile. Try again.

    Consider the code block below. What happens when you run this program?

    .. code-block:: python

        repeat_lyrics()

        def repeat_lyrics():
            print_lyrics()
            print_lyrics()

        def print_lyrics():
            print("I'm a lumberjack, and I'm okay.")
            print('I sleep all night and I work all day.')
