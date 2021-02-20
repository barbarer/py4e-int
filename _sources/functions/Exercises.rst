Multiple Choice Questions
-------------------------

.. mchoice:: functEx_1
    :answer_a: It is slang that means "the following code is really cool"
    :answer_b: It indicates the start of a function
    :answer_c: It indicates that the following indented section of code is to be stored for later
    :answer_d: b and c are both true
    :answer_e: None of the above
    :correct: d
    :feedback_a: Incorrect! Unfortunately, def is not a cool slang word. Try again.
    :feedback_b: Incorrect! This is true, but something else is too. Try again.
    :feedback_c: Incorrect! This is true, but something else is too. Try again.
    :feedback_d: Correct! def indicates the start of a function and that the following code is to be stored for later as a function object.
    :feedback_e: Incorrect! At least one of the above is true. Try again.

    What is the purpose of the "def" keyword in Python?

.. mchoice:: functEx_2
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

    What will the following Python program print out? (Given that each word is on its own line)

    .. code-block:: python

        def fred():
            print("Zap")

        def jane():
            print("ABC")

        jane()
        fred()
        jane()

.. mchoice:: functEx_3
    :answer_a: value
    :answer_b: Second
    :answer_c: parameter
    :answer_d: First
    :answer_e: Jane Doe
    :correct: b
    :feedback_a: Incorrect! "value" is the name of a variable. This code will print what "value" is assigned to. Try again.
    :feedback_b: Correct! "value" is assigned to the parameter "Second", so that's what will print.
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

.. mchoice:: functEx_4
    :answer_a: definition
    :answer_b: procedure
    :answer_c: turtle
    :answer_d: module
    :answer_e: function
    :correct: e
    :feedback_a: Incorrect! A definition is used to create functions. Try again.
    :feedback_b: Incorrect! Procedures exist in Python, but they are less common than functions. Try again.
    :feedback_c: Incorrect! "turtle" is a specific Python module that lets you draw lines and shapes. Try again.
    :feedback_d: Incorrect! A module is a file that contains Python statements and definitions. Try again.
    :feedback_e: Correct! A function is a named sequence of statements that returns a result.

    A named sequence of statements that returns a result is known as which of the following?

.. mchoice:: functEx_5
    :practice: T
    :answer_a: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
    :answer_b: 1, 2, 3, 5, 6, 7, 9, 10, 11
    :answer_c: 9, 10, 11, 1, 2, 3, 5, 6, 7
    :answer_d: 9, 10, 5, 6, 1, 2, 3, 6, 7, 10, 11
    :answer_e: 1, 5, 9, 10, 5, 6, 1, 2, 3, 6, 7, 10, 11
    :correct: e
    :feedback_a: Incorrect! Although Python typically processes lines in order from top to bottom, function definitions and calls are an exception to this rule. Try again.
    :feedback_b: Incorrect! Although Python typically processes lines in order from top to bottom, function definitions and calls are an exception to this rule.  Although this order skips blank lines, it still lists the lines of code in order. Try again.
    :feedback_c: Incorrect! This is close, in that Python will not execute functions until after they are called, but there are two problems here.  First, Python does not know which lines are function definitions until it processes them, so it must at least process the function headers before skipping over the functions. Second, notice that line 10 involves a function call. Python must execute "square" before moving on to line 11. Try again.
    :feedback_d: Incorrect! This is close, in that Python will not execute the functions until after they are called, but there is one problem here.  Python does not know which lines are function definitions until it processes them, so it must at least process the function headers before skipping over the functions. Try again.
    :feedback_e: Correct! Python starts at line 1, notices that it is a function definition and skips over all of the lines in the function definition until it finds a non-empty line that it no longer included in the function (line 5). It then notices line 5 is also a function definition and again skips over the function body to line 9. On line 10, it notices it has a function to execute, so it goes back and executes that function. That function includes another function call. It returns from the function call and completes the assignment in line 6. Then, it returns the result of line 7 and completes the assignment in line 10. Finally, it will go to line 11 after "square" and the assignment are complete.

    Consider the following Python code. Which of the following best reflects the order in which these
    lines of code are processed in Python? Note that line numbers are included on the left.

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

.. mchoice:: functEx_6
    :practice: T
    :answer_a: 25
    :answer_b: 5
    :answer_c: 125
    :answer_d: 10
    :correct: a
    :feedback_a: Correct! The function "square" returns the square of its input (via a call of the "pow" function).
    :feedback_b: Incorrect! This is the value of n, but result is equal to the return value of "square" with n as its input. Try again.
    :feedback_c: Incorrect! Notice that "pow" is called from within "square" with a base (b) of 5 and a power (p) of two. Try again.
    :feedback_d: Incorrect! Notice that "pow" is called from within "square" with a base (b) of 5 and a power (p) of two. Try again.

    Consider the following Python code. What does this function print?
    Note that line numbers are included on the left.

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
    :correct: a
    :feedback_a: Correct! The first line of a function definition is the header.
    :feedback_b: Incorrect! Everything but the first line of a function definition is the function body. Try again.
    :feedback_c: Incorrect! Lines 1 and 2 collectively are the function definition. Try again.

    Consider the code below. Line 1 is called...

    .. code-block:: python
        :linenos:

        def printWeather():
            print("It is sunny!")

.. mchoice:: functEx_10
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
