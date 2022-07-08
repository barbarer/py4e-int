Variable names and keywords
---------------------------
.. index::
    single: Keyword
    single: Underscore Character
    single: Reserved Words

Programmers generally choose names for their variables that are
meaningful and document what the variable is used for.

Variable names can be arbitrarily long. They can contain both letters
and numbers, but they cannot start with a number. It is legal to use
uppercase letters, but it is a good idea to begin variable names with a
lowercase letter (you'll see why later).

The underscore character ( _ ) can appear in a name. It is often used in
names with multiple words, such as ``my_name`` or
``airspeed_of_unladen_swallow``. Variable names can start with an
underscore character, but we generally avoid doing this unless we are
writing library code for others to use.


If you give a variable an illegal name, you get a syntax error when you try to execute the code.


.. clickablearea:: var-keywords-ca-error
  :practice: T
  :question: Click the portion of the variable names that cause syntax errors.
  :iscode:
  :feedback: Remember that variables cannot start with a number. If you're stuck, look at the list of keywords below.

  :click-correct:76:endclick::click-incorrect:trombones:endclick: = "big parade"
  :click-incorrect:more:endclick::click-correct:@:endclick: = 1000000
  :click-correct:class:endclick: = "Advanced Theoretical Zymurgy"


The variable name ``76trombones`` is illegal because it begins with a number.
The name ``more@`` is illegal because it contains an illegal character,
@. But what's wrong with ``class``?

It turns out that ``class`` is one of Python's
*keywords*. The interpreter uses keywords to recognize
the structure of the program, and they cannot be used as variable names.


Python reserves 33 keywords:

.. code-block::

   and       del       from      None      True
   as        elif      global    nonlocal  try
   assert    else      if        not       while
   break     except    import    or        with
   class     False     in        pass      yield
   continue  finally   is        raise
   def       for       lambda    return


You might want to keep this list handy. If the interpreter complains
about one of your variable names and you don't know why, see if it is on
this list.

.. mchoice:: var-keywords-mc-illegal
   :practice: T
   :answer_a: _a1
   :answer_b: my_name
   :answer_c: amountOfStuff
   :answer_d: BMP
   :answer_e: 1A
   :correct: e
   :feedback_a: You can use an underscore as the first character in a variable name
   :feedback_b: You can use an underscore between words in a variable name.
   :feedback_c: You can use both uppercase and lowercase letters in a variable name.
   :feedback_d: You can use only uppercase letters in a variable name.
   :feedback_e: You can't use a digit as the first letter in a variable name.

   Which of the following is **not** a legal variable name?

.. mchoice:: var-keywords-mc-name
  :practice: T
  :answer_a: _my_name
  :answer_b: my name
  :answer_c: myname
  :answer_d: myName
  :answer_e: my_name
  :correct: b
  :feedback_a: This is legal, but you don't usually start a variable name with an underscore.
  :feedback_b: You can't have a space in a variable name.
  :feedback_c: This may be hard to read, but it is legal.
  :feedback_d: Since you can't have spaces in names, one way to make variable names easier to read is to use camel case (uppercase the first letter of each new word).
  :feedback_e: Since you can't have spaces in names, one way to make variable names easier to read is to use an underscore between two words.

  Which of the following is **not** a legal variable name?
