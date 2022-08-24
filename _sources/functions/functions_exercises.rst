Functions Multiple Choice Questions
-----------------------------------

.. mchoice:: func_exercise_1
    :answer_a: function header (including the definition and the name)
    :answer_b: function body
    :answer_c: variables
    :answer_d: return statement
    :answer_e: function call
    :correct: a, b, e
    :feedback_a: Correct!
    :feedback_b: Correct!
    :feedback_c: Variables are not absolutely needed to create a function. For example, a function can just contain a print statement.
    :feedback_d: A return statement is not absolutely needed to create a function. For example, a print statement can be used instead of a return statement.
    :feedback_e: Correct!

    Select all the parts that are absolutely needed to create and call a function.


.. mchoice:: func_exercise_2
    :answer_a: 5 and 5.2 and 1
    :answer_b: 5 and 95.3 and 0
    :answer_c: 100 and 95.3 and 12
    :answer_d: 95 and 100.5 and 0
    :answer_e: 5 and 100.5 and 1
    :correct: b
    :feedback_a: Incorrect! When you do a smaller number % a larger number, the answer will always be the smaller number. When you do a number % the same number, the answer will always be 0.
    :feedback_b: Correct!
    :feedback_c: Incorrect! When you do a larger number % a smaller number, the answer will be the remainder of the larger number divided by the smaller number. When you do a number % the same number, the answer will always be 0.
    :feedback_d: Incorrect! When you do a larger number % a smaller number, the answer will be the remainder of the larger number divided by the smaller number. When you do a smaller number % a larger number, the answer will always be the smaller number.
    :feedback_e: Incorrect! When you do a smaller number % a larger number, the answer will always be the smaller number. When you do a number % the same number, the answer will always be 0.

    What will be returned after calling ``modulus(100,95)`` and ``modulus(95.3,100.5)`` and ``modulus(12,12)``?

    .. code-block:: python

        def modulus(num1, num2):
            answer = num1 % num2
            return answer

.. mchoice:: func_exercise_3
    :answer_a: 1, 1.05, 0, 0.71, 1, 1.4
    :answer_b: 1.05, 5, 0.71, 5, 1.4, 2
    :answer_c: 1.05, 2, 0.71, 1, 1.4, 2
    :answer_d: 1.05, 1, 0.71, 1, 1.4, 1
    :answer_e: 1.05, 1, 0.71, 0, 1.4, 1
    :correct: e
    :feedback_a: Incorrect! Single division is floating point division. Double division is integer division, and it outputs the floor of the value.
    :feedback_b: Incorrect! Single division is floating point division. Double division is integer division, and it outputs the floor of the value.
    :feedback_c: Incorrect! Single division is floating point division. Double division is integer division, and it outputs the floor of the value.
    :feedback_d: Incorrect! Single division is floating point division. Double division is integer division, and it outputs the floor of the value.
    :feedback_e: Correct!

    What will be printed after calling ``divide(100, 95)`` and ``divide(5, 7)`` and ``divide(7, 5)``? (Note: Ignore whitespaces.)

    .. code-block:: python

        def divide(num1, num2):
            single_div_answer = num1 / num2
            print(round(single_div_answer, 2))
            double_div_answer = num1 // num2
            print(round(double_div_answer, 2))


.. mchoice:: func_exercise_4
    :answer_a: None will be outputted after printing and calling multiplication_one(5, 10). Nothing will be outputted after calling multiplication_two(5, 10).
    :answer_b: Nothing will be outputted after printing and calling multiplication_one(5, 10). None will be outputted after calling multiplication_two(5, 10).
    :answer_c: 50 will be outputted after printing and calling multiplication_one(5, 10) and after calling multiplication_two(5, 10).
    :answer_d: None will be outputted after printing and calling multiplication_one(5, 10). 50 will be outputted after calling multiplication_two(5, 10).
    :answer_e: 50 will be outputted after printing and calling multiplication_one(5, 10). Nothing will be outputted after calling multiplication_two(5, 10).
    :correct: a
    :feedback_a: Correct!
    :feedback_b: Incorrect! None is printed when you print and call a function and there is no return statement in the function body. Nothing is outputted when you call a function that only has a return statement and you don't print the function call.
    :feedback_c: Incorrect! None is printed when you print and call a function and there is no return statement in the function body. Nothing is outputted when you call a function that only has a return statement and you don't print the function call.
    :feedback_d: Incorrect! Nothing is outputted when you call a function that only has a return statement and you don't print the function call.
    :feedback_e: Incorrect! None is printed when you print and call a function and there is no return statement in the function body.

    After running the following code, what will the output be?

    .. code-block:: python

        def multiplication_one(num1, num2):
            num1 * num2

        print(multiplication_one(5, 10))

        def multiplication_two(num1, num2):
            return num1 * num2

        multiplication_two(5, 10)

.. mchoice:: func_exercise_5
    :answer_a: None and -89
    :answer_b: None
    :answer_c: -89
    :answer_d: -89 and None
    :correct: d
    :feedback_a: Incorrect! When you print a function call (e.g., print(subtraction(new_add_answer, 200))) and the function prints an output (e.g., def subtraction(num1, num2): print(num1 - num2)), the output will be printed first due to the function call. Then, printing the function call will output None because the function does not have a return statement.
    :feedback_b: Incorrect! When you print a function call (e.g., print(subtraction(new_add_answer, 200))) and the function prints an output (e.g., def subtraction(num1, num2): print(num1 - num2)), the output will be printed first due to the function call. Then, printing the function call will output None because the function does not have a return statement.
    :feedback_c: Incorrect! When you print a function call (e.g., print(subtraction(new_add_answer, 200))) and the function prints an output (e.g., def subtraction(num1, num2): print(num1 - num2)), the output will be printed first due to the function call. Then, printing the function call will output None because the function does not have a return statement.
    :feedback_d: Correct!

    What would be outputted after running the code below? (Note: Ignore whitespaces.)

    .. code-block:: python

        def addition(num1, num2):
            return(num1 + num2)

        def subtraction(num1, num2):
            print(num1 - num2)

        def main():
            add_answer = addition(2, 4)
            new_add_answer = addition(add_answer, 105)
            print(subtraction(new_add_answer, 200))

        main()
