What could possibly go wrong?
-----------------------------
.. index::
    single: Syntax Error
    single: Semantic Error
    single: Logic Error

As we saw in our earliest conversations with Python, we must communicate
very precisely when we write Python code. The smallest deviation or
mistake will cause Python to give up looking at your program.

Beginning programmers often take the fact that Python leaves no room for
errors as evidence that Python is mean, hateful, and cruel. While Python
seems to like everyone else, Python knows them personally and holds a
grudge against them. Because of this grudge, Python takes our perfectly
written programs and rejects them as "unfit" just to torment us.

.. code-block:: python

   >>> primt 'Hello world!'
   File "<stdin>", line 1
     primt 'Hello world!'
                        ^
   SyntaxError: invalid syntax
   >>> primt ('Hello world')
   Traceback (most recent call last):
   File "<stdin>", line 1, in <module>
   NameError: name 'primt' is not defined

   >>> I hate you Python!
   File "<stdin>", line 1
     I hate you Python!
          ^
   SyntaxError: invalid syntax
   >>> if you come out of there, I would teach you a lesson
   File "<stdin>", line 1
     if you come out of there, I would teach you a lesson
               ^
   SyntaxError: invalid syntax
   >>>


There is little to be gained by arguing with Python. It is just a tool.
It has no emotions and it is happy and ready to serve you whenever you
need it. Its error messages sound harsh, but they are just Python's call
for help. It has looked at what you typed, and it simply cannot
understand what you have entered.

Python is much more like a dog, loving you unconditionally, having a few
key words that it understands, looking you with a sweet look on its face
(\ ``>>>``\ ), and waiting for you to say something it
understands. When Python says "SyntaxError: invalid syntax", it is
simply wagging its tail and saying, "You seemed to say something but I
just don't understand what you meant, but please keep talking to me
(\ ``>>>``\ )."

As your programs become increasingly sophisticated, you will encounter
three general types of errors:

* Syntax errors
    These are the first errors you will make and the easiest to fix. A
    syntax error means that you have violated the "grammar" rules of
    Python. Python does its best to point right at the line and
    character where it noticed it was confused. The only tricky bit of
    syntax errors is that sometimes the mistake that needs fixing is
    actually earlier in the program than where Python
    *noticed* it was confused. So the line and character
    that Python indicates in a syntax error may just be a starting point
    for your investigation.

* Logic errors
    A logic error is when your program has good syntax but there is a
    mistake in the order of the statements or perhaps a mistake in how
    the statements relate to one another. A good example of a logic
    error might be, "take a drink from your water bottle, put it in your
    backpack, walk to the library, and then put the top back on the
    bottle."

* Semantic errors
    A semantic error is when your description of the steps to take is
    syntactically perfect and in the right order, but there is simply a
    mistake in the program. The program is perfectly correct but it does
    not do what you *intended* for it to do. A simple
    example would be if you were giving a person directions to a
    restaurant and said, "...when you reach the intersection with the
    gas station, turn left and go one mile and the restaurant is a red
    building on your left." Your friend is very late and calls you to
    tell you that they are on a farm and walking around behind a barn,
    with no sign of a restaurant. Then you say "did you turn left or
    right at the gas station?" and they say, "I followed your directions
    perfectly, I have them written down, it says turn left and go one
    mile at the gas station." Then you say, "I am very sorry, because
    while my instructions were syntactically correct, they sadly
    contained a small but undetected semantic error.".

Again in all three types of errors, Python is merely trying its hardest
to do exactly what you have asked.

.. mchoice:: intro-gowrong-mc-error
    :practice: T
    :answer_a: Logic error
    :answer_b: Semantic error
    :answer_c: Syntax error
    :answer_d: No error
    :correct: c
    :feedback_a: Try again! This will not cause a logic error - something is missing from the code.
    :feedback_b: Try again! This will not cause a semantic error - something is missing from the code.
    :feedback_c: Print statements need parentheses.
    :feedback_d: This will throw an error.

    What type of error would this code produce?

    ::

      print "Hello world!"

.. mchoice:: intro-gowrong-mc-semantic
    :practice: T
    :answer_a: Forgetting to multiply by pi when calculating the circumference of a circle.
    :answer_b: Forgetting to use quotation marks around a string.
    :answer_c: Trying to use the string "32" in math equations.
    :correct: a
    :feedback_a: This will produce the wrong answer because the programmer implemented the solution incorrectly. This is a semantic error.
    :feedback_b: Try again! This will cause a syntax error and not run.
    :feedback_c: Try again!

    Which of the following is a semantic error?

.. mchoice:: intro-gowrong-mc-syntax
    :practice: T
    :answer_a: The programmer
    :answer_b: The interpreter/compiler.
    :answer_c: The user.
    :correct: b
    :feedback_a: Try again! The programmer might find syntax errors if they look through their code, but the interpreter/compiler will find them when the code is run.
    :feedback_b: The interpreter/compiler will find syntax errors.
    :feedback_c: Try again! The user will run into syntax errors if they exist, but the interpreter/compiler will find them.

    Who/what finds syntax errors?
