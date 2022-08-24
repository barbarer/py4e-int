Group Work - Conditionals and Logic
--------------------------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Content Learning Objectives**

*After completing this activity, students should be able to:*

* Evaluate boolean expressions with comparison operators (**<**, **>**, **<=**, **>=**, **==**, **!=**).
* Explain the syntax and meaning of **if/else** statements and indented blocks.
* Evaluate boolean expressions that involve comparisons with **and**, **or**, and **not**.

**Process Skill Goals:**

*During the activity, students should make progress toward:*

* Evaluating complex logic expressions based on operator precedence (Critical Thinking).

Comparison Operators
======================================================

In Python, a comparison (e.g., 100 < 200) will yield a Boolean value of either ``True`` or ``False``.
Most data types (including ``int``, ``float``, ``str``, ``list``, and ``tuple``) can be compared
using the following operators:

Less than (**<**), less than or equal (**<=**), greater than (**>**),
greater than or equal (**>=**), equal (**==**), and not equal (**!=**).

.. activecode:: cond_ac_pogil_output_bool
    :caption: Output of Boolean expressions

    Run this code to see what it prints. Each line of code may or may not print something.
    ~~~~
    print(type(True))
    print(type(3 < 4))
    print(3 < 4)
    three = 3
    four = 4
    print(three == four)
    check = three > four
    print(check)
    print(type(check))
    three = four
    print(three == four)
    # print(three = four)

.. mchoice:: cond_MC_pogil_comment
    :answer_a: True
    :answer_b: False
    :answer_c: class 'bool'
    :answer_d: TypeError
    :correct: d
    :feedback_a: Incorrect! Although the variable "three" does equal "four", the == operator has a return value, while the = operator does not. Try again.
    :feedback_b: Incorrect! "three" has been set equal to "four", but this is irrelevant because the = operator does not have a return value. Try again.
    :feedback_c: Incorrect! "print(type())" prints output that looks like that, not just "print()". Try again.
    :feedback_d: Correct! "three = four" (with a single equals sign) doesn't return anything, so it cannot be printed and a TypeError occurs.

    What would be printed if the commented line above was uncommented?

.. fillintheblank:: cond_fitb_pogil_booltype

    What is the name of the data type that represents Boolean values?

    - :bool: Correct! They are called "bool", with an uncapitalized B.
      :Bool: Incorrect! The B is not capitalized. Try again.
      :.*: Incorrect! Hint: what was the name of the class printed when the line ``print(type(True))`` was run? Try again.

.. dragndrop:: cond_dnd_pogil_boolean
    :feedback: Incorrect - keep trying!
    :match_1: check|||Boolean variables
    :match_2: <, ==, >|||Boolean operators
    :match_3: 3 < 4, three == four, three > four|||Boolean expressions

    Match examples from the previous code block to their appropriate term.

.. mchoice:: cond_MC_pogil_notequal
    :practice: T
    :answer_a: 5 != 6
    :answer_b: 2 + 2 != 5
    :answer_c: 4 + 6 != 11 - 1
    :correct: c
    :feedback_a: Incorrect! 5 does not equal 6, which makes this expression True. Try again.
    :feedback_b: Incorrect! 4 does not equal 5, so this expression is True. Try again.
    :feedback_c: Correct! 10 equals 10, so the statement "10 != 10" is False.

    Which of these Boolean expressions evaluates to ``False``?

if/else Statements
============================

An ``if`` statement makes it possible to control what code will be executed in a
program, based on a condition. For example:

.. activecode:: cond_ac_pogil_output_ifelse
    :caption: Basic if/else

    Run this code to see what it prints.
    ~~~~
    number = int(input("Enter an integer: "))
    if number < 0:
    	print(number, "is negative")
    else:
    	print(number, "is a fine number")
    print("Until next time...")

Python uses **indentation** to define the structure of programs. The line indented
under the ``if`` statement is executed only when ``number < 0`` is ``True``.
Likewise, the line indented under the ``else`` statement is executed only when
``number < 0`` is ``False``.

.. fillintheblank:: cond_fitb_pogil_boolexpress

    Which line of the previous code block contains a Boolean expression?

    - :2: Correct! ``number < 0`` is a Boolean expression.
      :.*: Incorrect! Think about the definition of a Boolean expression. Try again.

Statements that are indented under an if/else statement are executed based on the
status of the if's condition. Statements indented at the same level as the if/else
statement later in the program are always executed. If you indent code incorrectly
or inconsistently, a ``SyntaxError: unexpected indent`` may be in your future.

.. fillintheblank:: cond_fitb_pogil_indent

    What must each line preceding an indented block of code end with?

    - :colon|a colon|\:: Correct! A colon is necessary to begin an indented block of code.
      :.*: Incorrect! Hint: it's one character. Try again.

.. activecode:: cond_ac_pogil_isten
    :caption: Using if/else.

    Modify this code to print ``(number) is 10`` if ``number`` equals 10, and ``(number) is not 10`` otherwise.
    ~~~~
    number = int(input("Enter an integer: "))
    # add your code here

.. mchoice:: cond_MC_pogil_mandatoryelse
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: b
    :feedback_a: Incorrect! An if statement does not necessarily need to be followed by an else statement. Try again.
    :feedback_b: Correct! An else statement must follow an if statement, however.

    True or False: An ``if`` statement must always be followed by an ``else`` statement.

Boolean Operations
============================

Expressions may include Boolean operators to implement basic logic. If all three
operators appear in the same expression, Python will evaluate ``not`` first, then
``and``, and finally ``or``. If there are multiple of the same operator, they are
evaluated from left to right.

.. activecode:: cond_ac_pogil_output_booleanops
    :caption: Boolean operations

    Run this code to see what it prints.
    ~~~~
    a = 3
    b = 4
    c = 5
    print(a < b and b < c)
    print(a < b or b < c)
    print(a < b and b > c)
    print(a < b or b > c)
    print(not a < b)
    print(a > b or not a > c and b > c)

.. mchoice:: cond_mc_pogil_opsvalue
    :practice: T
    :answer_a: bool, bool
    :answer_b: True, bool
    :answer_c: True, True
    :answer_d: bool, True
    :correct: a
    :feedback_a: Correct! The type of each is bool; both are Boolean expressions.
    :feedback_b: Incorrect! True is not a data type. Try again.
    :feedback_c: Incorrect! True is not a data type. Try again.
    :feedback_d: Incorrect! True is not a data type. Try again.

    What data type would be the result of ``a < b``? What about the result of ``a < b and b < c``? Use the values of ``a``, ``b``, and ``c`` from the code block above.

.. mchoice:: cond_mc_pogil_opsdatatype
    :practice: T
    :answer_a: True, True
    :answer_b: True, False
    :answer_c: False, False
    :answer_d: False, True
    :correct: a
    :feedback_a: Correct! The value of each statement is True.
    :feedback_b: Incorrect! 4 is less than 5, so "b < c" is True. Try again.
    :feedback_c: Incorrect! 3 is less than 4 and 4 is less than 5. Try again.
    :feedback_d: Incorrect! 3 is less than 4, so "a < b" is True. Try again.

    What would be the value of ``a < b``? What about the value of ``a < b and b < c``? Use the values of ``a``, ``b``, and ``c`` from the code block above.

.. mchoice:: cond_mc_pogil_andproperties
    :practice: T
    :answer_a: True, True
    :answer_b: True, False
    :answer_c: False, False
    :answer_d: False, True
    :correct: b
    :feedback_a: Incorrect! "and" only returns True if the expressions on both sides are True. Try again.
    :feedback_b: Correct! "and" only returns True if the expressions on both sides are True and returns False in any other situation.
    :feedback_c: Incorrect! "and" only returns True if the expressions on both sides are True. Try again.
    :feedback_d: Incorrect! "and" only returns True if the expressions on both sides are True. Try again.

    If two ``True`` Boolean expressions are compared using the ``and`` operator, what is the resulting Boolean value? What if you compare two ``False`` expressions instead?

.. mchoice:: cond_mc_pogil_orproperties
    :practice: T
    :answer_a: True, True
    :answer_b: True, False
    :answer_c: False, False
    :answer_d: False, True
    :correct: b
    :feedback_a: Incorrect! "or" only returns True if the expressions on one or both sides are True. Try again.
    :feedback_b: Correct! "or" only returns True if the expressions on one or both sides are True and returns False if both sides are false.
    :feedback_c: Incorrect! "or" only returns True if the expressions on one or both sides are True. Try again.
    :feedback_d: Incorrect! "or" only returns True if the expressions on one or both sides are True. Try again.

    If two ``True`` Boolean expressions are compared using the ``or`` operator, what is the resulting Boolean value? What if you compare two ``False`` expressions instead?

.. mchoice:: cond_mc_pogil_trueandfalse
    :practice: T
    :answer_a: True, True
    :answer_b: True, False
    :answer_c: False, False
    :answer_d: False, True
    :correct: d
    :feedback_a: Incorrect! "and" only returns True if the expressions on both sides are True. Try again.
    :feedback_b: Incorrect! "or" returns True if the expressions on one or both sides are True. Try again.
    :feedback_c: Incorrect! "or" returns True if the expressions on one or both sides are True. Try again.
    :feedback_d: Correct! "and" needs both sides to be True, while "or" only needs of of them.

    If a ``True`` and a ``False`` Boolean expression are compared using the ``and`` operator, what is the resulting Boolean value? What if you use the ``or`` operator instead?

.. activecode:: cond_ac_pogil_arepositive
    :caption: Using a Boolean expression in code

    Suppose you wanted to print the sum of ``x`` and ``y`` only when both ``x`` and ``y`` are positive. Write a block of code to achieve this that uses only one ``if`` statement.
    ~~~~
    x = int(input("Enter an integer: "))
    y = int(input("Enter an integer: "))
    # add your code here

.. activecode:: cond_ac_pogil_usingnot
    :caption: Using the ``not`` operator in code

    Rewrite your code from the previous code block using the ``not`` operator. Your answer should yield the same result as before, not the opposite, and still only use one ``if`` statement. Hint: you'll need to change the > signs!
    ~~~~
    x = int(input("Enter an integer: "))
    y = int(input("Enter an integer: "))
    # add your code here

.. activecode:: cond_ac_pogil_notpositive
    :caption: Using "except when" logic in code

    Suppose that you instead wanted to print the sum of ``x`` and ``y`` *except* when both ``x`` and ``y`` are positive. Write a block of code to achieve this that only uses one ``if`` statement.
    ~~~~
    x = int(input("Enter an integer: "))
    y = int(input("Enter an integer: "))
    # add your code here

If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: cond_logic_groupsub
   :limit: 3
