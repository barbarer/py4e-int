Parameters and arguments
------------------------

\index{parameter}
\index{function parameter}
\index{argument}
\index{function argument}

Some of the built-in functions we have seen require arguments. For
example, when you call ``math.sin`` you pass a number as an
argument. Some functions take more than one argument:
``math.pow`` takes two, the base and the exponent.

Inside the function, the arguments are assigned to variables called
*parameters*. Here is an example of a user-defined
function that takes an argument:

\index{parentheses!parameters in}

.. code-block:: python

   def print_twice(bruce):
       print(bruce)
       print(bruce)


This function assigns the argument to a parameter named
``bruce``. When the function is called, it prints the value of
the parameter (whatever it is) twice.

This function works with any value that can be printed.

.. code-block:: python

   >>> print_twice('Spam')
   Spam
   Spam
   >>> print_twice(17)
   17
   17
   >>> import math
   >>> print_twice(math.pi)
   3.141592653589793
   3.141592653589793


The same rules of composition that apply to built-in functions also
apply to user-defined functions, so we can use any kind of expression as
an argument for ``print_twice``\ :

\index{composition}

.. code-block:: python

   >>> print_twice('Spam '*4)
   Spam Spam Spam Spam
   Spam Spam Spam Spam
   >>> print_twice(math.cos(math.pi))
   -1.0
   -1.0


The argument is evaluated before the function is called, so in the
examples the expressions ``'Spam '*4`` and ``math.cos(math.pi)``
are only evaluated once.

\index{argument}

You can also use a variable as an argument:

.. code-block:: python

   >>> michael = 'Eric, the half a bee.'
   >>> print_twice(michael)
   Eric, the half a bee.
   Eric, the half a bee.


The name of the variable we pass as an argument (\ ``michael``\ )
has nothing to do with the name of the parameter (\ ``bruce``\ ).
It doesn't matter what the value was called back home (in the caller);
here in ``print_twice``\ , we call everybody ``bruce``.
