Choosing mnemonic variable names
--------------------------------
.. index::
    single: Mnemonic
    single: Reserved Words

As long as you follow the simple rules of variable naming, and avoid
reserved words, you have a lot of choice when you name your variables.
In the beginning, this choice can be confusing both when you read a
program and when you write your own programs. For example, the following
three programs are identical in terms of what they accomplish, but very
different when you read them and try to understand them.

.. activecode:: var-ac-10-names1
  :caption: Variables with simple names

  a = 35.0
  b = 12.50
  c = a * b
  print(c)


.. activecode:: o2-ac-10-names2
  :caption: Variables with mnemonic names

  hours = 35.0
  rate = 12.50
  pay = hours * rate
  print(pay)


.. activecode:: var-ac-10-names3
  :caption: Variables with obscure names

  x1q3z9ahd = 35.0
  x1q3z9afd = 12.50
  x1q3p9afd = x1q3z9ahd * x1q3z9afd
  print(x1q3p9afd)


The Python interpreter sees all three of these programs as *exactly the
same* but humans see and understand these programs quite differently.
Humans will most quickly understand the *intent* of the
second program because the programmer has chosen variable names that
reflect their intent regarding what data will be stored in each
variable.

We call these wisely chosen variable names "mnemonic variable names".
The word *mnemonic*\ [See https://en.wikipedia.org/wiki/Mnemonic for an extended
description of the word "mnemonic".] means "memory aid". We choose mnemonic variable
names to help us remember why we created the variable in the first
place.

.. mchoice:: var-mnemonic-mc-definition
   :answer_a: memory aid
   :answer_b: nickname
   :answer_c: remember this
   :answer_d: useful
   :correct: a
   :feedback_a: We choose mnemonic variable names to help us remember why we created the variable in the first place.
   :feedback_b: No, reread above.
   :feedback_c: No, reread above.
   :feedback_d: No, reread above.

   Mnemonic means:

While this all sounds great, and it is a very good idea to use mnemonic
variable names, mnemonic variable names can get in the way of a
beginning programmer's ability to parse and understand code. This is
because beginning programmers have not yet memorized the reserved words
(there are only 33 of them) and sometimes variables with names that are
too descriptive start to look like part of the language and not just
well-chosen variable names.

Take a quick look at the following Python sample code which loops
through some data. We will cover loops soon, but for now try to just
puzzle through what this means:

.. code-block:: python

   for word in words:
       print(word)


What is happening here? Which of the tokens (for, word, in, etc.) are
reserved words and which are just variable names? Does Python understand
at a fundamental level the notion of words? Beginning programmers have
trouble separating what parts of the code *must* be the same as this
example and what parts of the code are simply choices made by the
programmer.

The following code is equivalent to the above code:

.. code-block:: python

   for slice in pizza:
       print(slice)


It is easier for the beginning programmer to look at this code and know
which parts are reserved words defined by Python and which parts are
simply variable names chosen by the programmer. It is pretty clear that
Python has no fundamental understanding of pizza and slices and the fact
that a pizza consists of a set of one or more slices.

But if our program is truly about reading data and looking for words in
the data, ``pizza`` and ``slice`` are very un-mnemonic
variable names. Choosing them as variable names distracts from the
meaning of the program.

After a pretty short period of time, you will know the most common
reserved words and you will start to see the reserved words jumping out
at you:

.. raw:: html

   <pre>
   <b>for</b> word <b>in</b> words<b>:</b>
       <b>print</b>(word)
   </pre>


The parts of the code that are defined by Python (\ ``for``\ ,
``in``\ , ``print``\ , and ``:``\ ) are in bold and
the programmer-chosen variables (\ ``word`` and
``words``\ ) are not in bold. Many text editors are aware of
Python syntax and will color reserved words differently to give you
clues to keep your variables and reserved words separate. After a while
you will begin to read Python and quickly determine what is a variable
and what is a reserved word.


.. mchoice:: var-mnemonic-mc-name-v2
   :practice: T
   :answer_a: word
   :answer_b: ingredients
   :answer_c: gelPens
   :answer_d: pizza
   :correct: b
   :feedback_a: No, which variable name would be useful when talking about the number of ingredients?
   :feedback_b: Yes, the variable ingredients would be handy for counting the ingredients in a cookie.
   :feedback_c: No, which variable name would be useful when talking about the number of ingredients?
   :feedback_d: No, which variable name would be useful when talking about the number of ingredients?

   Which variable name would best be used for counting the ingredients in cookies?
