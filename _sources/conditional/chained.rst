Chained conditionals
--------------------
.. index::
    single: Chained Conditional
    pair: Keyword; Elif


Sometimes there are more than two possibilities and we need more than
two branches. One way to express a computation like that is a
*chained conditional*:

.. codelens:: cndtnl_elif
    :showoutput:

    x = 12
    y = 12.0
    if x < y:
        print('x is less than y')
    elif x > y:
        print('x is greater than y')
    else:
        print('x and y are equal')
    print('All done.')


``elif`` is an abbreviation of "else if." Again, exactly one
branch will be executed.

.. figure:: ../images/elif.svg
    :alt: If-Then-ElseIf Logic

There is no limit on the number of ``elif`` statements. If
there is an ``else`` clause, it has to be at the end, but there
doesn't have to be one.

.. codelens:: cndtnl_elif2
    :showoutput:
    :question: After the line with the red arrow is executed, which line will be next?
    :breakline: 2
    :feedback: Remember that in an if/else statement only one block is executed.
    :correct: line

    choice = 'b'
    if choice == 'a':
        print('Bad guess')
    elif choice == 'b':
        print('Good guess')
    elif choice == 'c':
        print('Close, but not correct')


Each condition is checked in order. If the first is false, the next is
checked, and so on. If one of them is true, the corresponding branch
executes, and the statement ends. Even if more than one condition is
true, only the first true branch executes.

.. mchoice:: cndtnl-chain-mc-elif
    :practice: T
    :answer_a: a
    :answer_b: b
    :answer_c: c
    :correct: c
    :feedback_a: While the value in x is less than the value in y (3 is less than 5) it is not less than the value in z (3 is not less than 2).
    :feedback_b: The value in y is not less than the value in x (5 is not less than 3).
    :feedback_c: Since the first two Boolean expressions are false the else will be executed.

    What will the following code print if x = 3, y = 5, and z = 2?

    .. code-block:: python

      if x < y and x < z:
          print("a")
      elif y < x and y < z:
          print("b")
      else:
          print("c")

.. mchoice:: cndtnl-chain-mc-grades
    :practice: T
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :answer_d: D
    :answer_e: E
    :correct: a
    :feedback_a: Because the first statement is satisfied, it does not continue to the following elif or else statements.
    :feedback_b: Try again. This code skips the elif/else statements once an if/elif statement has been satisfied.
    :feedback_c: Try again. This code skips the elif/else statements once an if/elif statement has been satisfied.
    :feedback_d: Try again. This code skips the elif/else statements once an if/elif statement has been satisfied.
    :feedback_e: This will only be true when score does not satisfy the other if/elif statements (so it will only execute when score < 60).

    If score = 93, what will print when the following code executes?

    ::

      if score >= 90:
          grade = "A"
      elif score >= 80:
          grade = "B"
      elif score >= 70:
          grade = "C"
      elif score >= 60:
          grade = "D"
      else:
          grade = "E"
      print(grade)

.. mchoice:: cndtnl-chain-mc-ifGrades
    :practice: T
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :answer_d: D
    :answer_e: E
    :correct: d
    :feedback_a: Notice that each of the first 4 statements start with an if.  What is the value of grade when it is printed?
    :feedback_b: Each of the first 4 if statements will execute.
    :feedback_c: Copy this code to an activecode window and run it.
    :feedback_d: Each of the first 4 if statements will be executed. So grade will be set to A, then B then C and finally D.
    :feedback_e: This will only be true when score is less than 60.

    If score = 93, what will print when the following code executes?

    ::

      if score >= 90:
          grade = "A"
      if score >= 80:
          grade = "B"
      if score >= 70:
          grade = "C"
      if score >= 60:
          grade = "D"
      if score < 60:
          grade = "E"
      print(grade)
