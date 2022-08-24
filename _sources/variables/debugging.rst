Debugging
---------
.. index::
    single: Debugging
    single: Syntax Error
    single: Error Message
    single: Use Before Def
    single: Exception
    single: Runtime Error
    single: Semantic Error
    pair: Case-sensitivity; Variable Names
    single: Order of Operations


At this point, the syntax error you are most likely to make is an
illegal variable name, like ``class`` and ``yield``\ ,
which are keywords, or ``odd~job`` and ``US$``\ , which contain illegal
characters.

If you put a space in a variable name, Python thinks it is two operands
without an operator:

.. activecode:: var-ac-12-badname
  :caption: Using an illegal variable name

  bad name = 5

.. mchoice:: var-debug-mc-name
   :practice: T
   :answer_a: NameError
   :answer_b: SyntaxError
   :answer_c: TypeError
   :answer_d: There will not be an error
   :correct: b
   :feedback_a: No, a NameError occurs when a variable is used before it is defined.
   :feedback_b: This error comes from bad input.
   :feedback_c: No, a TypeError occurs when an operation or function is applied to an object of inappropriate type.
   :feedback_d: No, this will cause an error - see above for an example.

   Which error will you get if you name a variable "bad name"?

For syntax errors, the error messages don't help much. The most common
messages are ``SyntaxError: invalid syntax`` and
``SyntaxError: invalid token``\ , neither of which is very
informative.

The runtime error you are most likely to make is a "use before def;"
that is, trying to use a variable before you have assigned a value. This
can happen if you spell a variable name wrong:

.. activecode:: var-ac-13-definition
  :caption: Using an undefined variable

  principal = 327.68
  interest = principle * rate


Variables names are case sensitive, so ``LaTeX`` is not the
same as ``latex``.

At this point, the most likely cause of a semantic error is the order of
operations. For example, to evaluate ``1/2pi`` (which is .159), you might be tempted to write

.. activecode:: var-ac-14-pi
  :caption: Order of operations

  print(1.0 / 2.0 * 3.14)


But the division happens first, so you would get ``pi / 2``, which is not
the same thing! There is no way for Python to know what you meant to
write, so in this case you don't get an error message; you just get the
wrong answer. *Try adding parentheses to the code above to return the correct answer.*

.. fillintheblank:: var-debug-fitb-fix
    :practice: T

    ________ is the process of fixing errors in your code.

    - :[Dd]ebugging: Debugging is the process of fixing errors in your code.
      :.*: Try again!

.. mchoice:: var-debug-mc-equation
   :practice: T
   :answer_a: NameError
   :answer_b: SyntaxError
   :answer_c: TypeError
   :answer_d: There will not be an error
   :correct: d
   :feedback_a: No, a NameError occurs when a variable is used before it is defined.
   :feedback_b: No, a SyntaxError occurs when the program cannot understand a line of code.
   :feedback_c: No, a TypeError occurs when an operation or function is applied to an object of inappropriate type.
   :feedback_d: This will still compute, but will not return the expected result.

   Which error will you get if you use the equation 1/2*3.14 instead of 1/(2*3.14)?
