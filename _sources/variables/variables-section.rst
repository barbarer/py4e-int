Variables
---------
.. index::
    single: Variable
    single: Assignment
    pair: Assignment; Statement

One of the most powerful features of a programming language is the
ability to manipulate *variables*. A variable is a name
that refers to a value.

An *assignment statement* creates new variables and gives
them values:

.. activecode:: var-ac-4-assign
  :caption: Assigning values to variables

  message = 'And now for something completely different'
  n = 17
  pi = 3.1415926535897931
  print(message)
  print(n)
  print(pi)

This example makes three assignments and then prints the value of each of the variables. The first assigns a string to a
new variable named ``message``; the second assigns the integer
17 to a variable named ``n``; and the third assigns the (approximate)
value of pi to a variable named ``pi``.


The type of a variable is the type of the value it refers to.

.. dragndrop:: var-variables-dnd-type
    :feedback: Look at the variable assignments above.
    :match_1: message|||string
    :match_2: n|||integer
    :match_3: pi|||float

    Using the code above, match the variables up with their type.


.. clickablearea:: var-variables-ca-string
  :practice: T
  :question: Click the variables representing strings in this block.
  :iscode:
  :feedback: Remember that the type of a variable is the type of the value it refers to.

  :click-correct:message:endclick: = :click-incorrect:'And now for something completely different':endclick:
  :click-incorrect:n:endclick: = :click-incorrect:17:endclick:
  :click-correct:number:endclick: = :click-incorrect:"123456789":endclick:
  :click-incorrect:pi:endclick: = :click-incorrect:3.1415926535897931:endclick:


.. mchoice:: var-variables-mc-assign
   :practice: T
   :answer_a: name = 'Penelope"
   :answer_b: name = "Penelope"
   :answer_c: name = Penelope
   :answer_d: name, "Penelope"
   :correct: b
   :feedback_a: The quotation marks on each side of the string need to be the same, either single or double, not a mix.
   :feedback_b: An equals sign is needed to assign a variable and quotation marks tell the program that the value is a string.
   :feedback_c: What symbols are missing to make ``Penelope`` a string?
   :feedback_d: Look at the variable assignments above, what's missing?

   How would you assign the variable ``name`` to the string ``Penelope``?
