The ``while`` statement
---------------------------

\index{statement!while}
\index{while loop}
\index{loop!while}
\index{iteration}

Computers are often used to automate repetitive tasks. Repeating
identical or similar tasks without making errors is something that
computers do well and people do poorly. Because iteration is so common,
Python provides several language features to make it easier.

One form of iteration in Python is the ``while`` statement.
Here is a simple program that counts down from five and then says
"Blastoff!".

.. code-block:: python

   n = 5
   while n > 0:
       print(n)
       n = n - 1
   print('Blastoff!')


You can almost read the ``while`` statement as if it were
English. It means, "While ``n`` is greater than 0, display the
value of ``n`` and then reduce the value of ``n`` by

. When you get to 0, exit the ``while`` statement and display
=================================================================

   the word ``Blastoff!``\ "

\index{flow of execution}

More formally, here is the flow of execution for a ``while``
statement:

.
=

   Evaluate the condition, yielding ``True`` or
   ``False``.

.
=

   If the condition is false, exit the ``while`` statement and
   continue execution at the next statement.

.
=

   If the condition is true, execute the body and then go back to
   step 1.

This type of flow is called a *loop* because the third
step loops back around to the top. We call each time we execute the body
of the loop an *iteration*. For the above loop, we would
say, "It had five iterations", which means that the body of the loop was
executed five times.

\index{condition}
\index{loop}
\index{body}

The body of the loop should change the value of one or more variables so
that eventually the condition becomes false and the loop terminates. We
call the variable that changes each time the loop executes and controls
when the loop finishes the *iteration variable*. If there
is no iteration variable, the loop will repeat forever, resulting in an
*infinite loop*.
