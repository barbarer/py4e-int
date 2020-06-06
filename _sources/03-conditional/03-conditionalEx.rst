Conditional execution
---------------------

In order to write useful programs, we almost always need the ability to
check conditions and change the behavior of the program accordingly.
*Conditional statements* give us this ability. The
simplest form is the ``if`` statement:

.. code-block:: python

   if x > 0 :
       print('x is positive')


The boolean expression after the ``if`` statement is called the
*condition*. We end the ``if`` statement with a
colon character (:) and the line(s) after the if statement are indented.

.. image:: height=1.5in@../images/if
   :target: height=1.5in@../images/if
   :alt: If Logic



If the logical condition is true, then the indented statement gets
executed. If the logical condition is false, the indented statement is
skipped.

``if`` statements have the same structure as function
definitions or ``for`` loops^[We will learn about functions in Chapter 4 and loops in Chapter 5.].
The statement consists of a
header line that ends with the colon character (:) followed by an
indented block. Statements like this are called *compound
statements* because they stretch across more than one line.

There is no limit on the number of statements that can appear in the
body, but there must be at least one. Occasionally, it is useful to have
a body with no statements (usually as a place holder for code you haven't
written yet). In that case, you can use the ``pass`` statement,
which does nothing.

.. code-block:: python

   if x < 0 :
       pass          # need to handle negative values!


If you enter an ``if`` statement in the Python interpreter, the
prompt will change from three chevrons to three dots to indicate you are
in the middle of a block of statements, as shown below:

.. code-block:: python

   >>> x = 3
   >>> if x < 10:
   ...    print('Small')
   ...
   Small
   >>>


When using the Python interpreter, you must leave a blank line at the end of a block, otherwise Python will return an error:

.. code-block:: python

   >>> x = 3
   >>> if x < 10:
   ...    print('Small')
   ... print('Done')
     File "<stdin>", line 3
       print('Done')
           ^
   SyntaxError: invalid syntax


A blank line at the end of a block of statements is not necessary when writing and executing a script, but it may improve readability of your code.
