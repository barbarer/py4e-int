Updating variables
------------------

A common pattern in assignment statements is an assignment statement
that updates a variable, where the new value of the variable depends on
the old.

.. code-block:: python

   x = x + 1


This means "get the current value of ``x``\ , add 1, and then
update ``x`` with the new value."

If you try to update a variable that doesn't exist, you get an error,
because Python evaluates the right side before it assigns a value to
``x``\ :

.. code-block:: python

   >>> x = x + 1
   NameError: name 'x' is not defined


Before you can update a variable, you have to
*initialize* it, usually with a simple assignment:

\index{initialization (before update)}

.. code-block:: python

   >>> x = 0
   >>> x = x + 1


Updating a variable by adding 1 is called an *increment*\ ;
subtracting 1 is called a *decrement*.

\index{increment}
\index{decrement}
