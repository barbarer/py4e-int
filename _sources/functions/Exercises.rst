Multiple Choice Questions
-------------------------

.. mchoice:: functEx_1
    :answer_a: It is slang that means "the following code is really cool"
    :answer_b: It indicates the start of a function
    :answer_c: It indicates that the following indented section of code is to be stored for later
    :answer_d: b and c are both true
    :answer_e: None of the above
    :correct: d
    :feedback_a: Unfortunately, def is not slang in coding.
    :feedback_b: This is true, but there is something more.
    :feedback_c: This is true, but there is something more.
    :feedback_d: def indicates the start of a function and that the following code is to be stored for later.
    :feedback_e: At least one of the above is true.

    What is the purpose of the "def" keyword in Python?

.. mchoice:: functEx_2
    :answer_a: Zap ABC jane fred jane
    :answer_b: Zap ABC Zap
    :answer_c: ABC Zap jane
    :answer_d: ABC Zap ABC
    :answer_e: Zap Zap Zap
    :correct: d
    :feedback_a: The code will not print the strings "jane" or "fred" only "Zap" or "ABC"
    :feedback_b: This would be correct if the call was fred() jane() fred()
    :feedback_c: The code will not print the strings "jane" or "fred" only "Zap" or "ABC"
    :feedback_d: jane() fred() jane() will print ABC Zap ABC
    :feedback_e: This would be correct if the call was fred() fred() fred()

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
    :correct: b
    :feedback_a: value is the name of a variable. This code will print what value is assigned to.
    :feedback_b: value is assigned to the parameter "Second", so that's what will print.
    :feedback_c: parameter will end up equalling the value sent with the function call.
    :feedback_d: Although, the variable value is assigned to "First" initially, it is reassigned to the parameter.

    What value is printed when the following code is executed?

    .. code-block:: python

        name = "John Smith"
        def myFunction(parameter):
            value = "First"
            value = parameter
            print (value)

        myFunction("Second")

.. mchoice:: functEx_4
    :answer_a: definition
    :answer_b: procedure
    :answer_c: turtle
    :answer_d: function
    :correct: d
    :feedback_a: A definition is used to create functions.
    :feedback_b: Some things in Python are procedures, but they are less common than functions.
    :feedback_c: A turtle is a specific moving module in Python.
    :feedback_d: A function is a named sequence of statements that returns a result.

    A named sequence of statements that returns a result is known as which of the following?

.. mchoice:: functEx_5
    :practice: T
    :answer_a: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
    :answer_b: 1, 2, 3, 5, 6, 7, 9, 10, 11
    :answer_c: 9, 10, 11, 1, 2, 3, 5, 6, 7
    :answer_d: 9, 10, 5, 6, 1, 2, 3, 6, 7, 10, 11
    :answer_e: 1, 5, 9, 10, 5, 6, 1, 2, 3, 6, 7, 10, 11
    :correct: e
    :feedback_a: Although Python typically processes lines in order from top to bottom, function definitions and calls are an exception to this rule.
    :feedback_b: Although Python typically processes lines in order from top to bottom, function definitions and calls are an exception to this rule.  Although this order skips blank lines, it still lists the lines of code in order.
    :feedback_c: This is close, in that Python will not execute the functions until after they are called, but there are two problems here.  First, Python does not know which lines are function definitions until it processes them, so it must at least process the function headers before skipping over the functions. Section, notice that line 10 involves a function call.  Python must execute the function square before moving on to line 11.
    :feedback_d: This is close, in that Python will not execute the functions until after they are called, but there is one problem here.  Python does not know which lines are function definitions until it processes them, so it must at least process the function headers before skipping over the functions.
    :feedback_e: Python starts at line 1, notices that it is a function definition and skips over all of the lines in the function definition until it finds a line that it no longer included in the function (line 5).  It then notices line 5 is also a function definition and again skips over the function body to line 9.  On line 10 it notices it has a function to execute, so it goes back and executes that function.  Notice that that function includes another function call. It returns from the function call and completes the assignment in line 6. Then it returns the result of line 7 and completes the assignment in line 10.  Finally, it will go to line 11 after the function square and the assignment are complete.

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
    :answer_d: 32
    :correct: a
    :feedback_a: The function square returns the square of its input (via a call to pow)
    :feedback_b: What is printed is the output of the square function.  5 is the input to the square function.
    :feedback_c: Notice that pow is called from within square with a base (b) of 5 and a power (p) of two.
    :feedback_d: Notice that pow is called from within square with a base (b) of 5 and a power (p) of two.

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
    :feedback_a: a would work as a variable.
    :feedback_b: This would not work as a variable name because it is already reserved as a built-in function name.
    :feedback_c: length would work as a variable because it is not a reserved word or a built-in function.
    :feedback_d: x would work as a variable.

    Which of the following would NOT work as a variable name?

.. mchoice:: functEx_8
    :practice: T
    :answer_a: 34.0
    :answer_b: 34
    :answer_c: 33.70
    :answer_d: 33
    :correct: d
    :feedback_a: The int function converts a floating point number to an integer (whole number).
    :feedback_b: The int function does not round up.
    :feedback_c: The int function converts a floating point number to an integer (whole number).
    :feedback_d: The int function rounds down to an integer (whole number).

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
    :feedback_a: The first line of a function definition is the header.
    :feedback_b: Everything but the first line of a function definition is the function body.
    :feedback_c: Lines 1 and 2 collectively can be called the function definition.

    Consider the code below. Line 1 can be called...

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
    :feedback_a: What happens when you call a function before it is defined?
    :feedback_b: This will not cause a TypeError, because there is not an issue with the variable types.
    :feedback_c: You get a NameError when you call a function before it is defined.
    :feedback_d: This program will not compile.

    Consider the code block below. What happens when you run this program?

    .. code-block:: python

        repeat_lyrics()

        def repeat_lyrics():
            print_lyrics()
            print_lyrics()

        def print_lyrics():
            print("I'm a lumberjack, and I'm okay.")
            print('I sleep all night and I work all day.')
