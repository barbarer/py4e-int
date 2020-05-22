Fruitful functions and void functions
-------------------------------------

\index{fruitful function}
\index{void function}
\index{function, fruitful}
\index{function, void}

Some of the functions we are using, such as the math functions, yield
results; for lack of a better name, I call them *fruitful
functions*. Other functions, like ``print_twice``\ , perform an
action but don't return a value. They are called *void
functions*.

When you call a fruitful function, you almost always want to do
something with the result; for example, you might assign it to a
variable or use it as part of an expression:

.. code-block:: python

   x = math.cos(radians)
   golden = (math.sqrt(5) + 1) / 2


When you call a function in interactive mode, Python displays the
result:

.. code-block:: python

   >>> math.sqrt(5)
   2.23606797749979


But in a script, if you call a fruitful function and do not store the
result of the function in a variable, the return value vanishes into the
mist!

.. code-block:: python

   math.sqrt(5)


This script computes the square root of 5, but since it doesn't store
the result in a variable or display the result, it is not very useful.

\index{interactive mode}
\index{script mode}

Void functions might display something on the screen or have some other
effect, but they don't have a return value. If you try to assign the
result to a variable, you get a special value called ``None``.

\index{None special value}
\index{special value!None}

.. code-block:: python

   >>> result = print_twice('Bing')
   Bing
   Bing
   >>> print(result)
   None


The value ``None`` is not the same as the string "None". It
is a special value that has its own type:

.. code-block:: python

   >>> print(type(None))
   <class 'NoneType'>


To return a result from a function, we use the ``return``
statement in our function. For example, we could make a very simple
function called ``addtwo`` that adds two numbers together and
returns a result.

\VerbatimInput{../code3/addtwo.py}

When this script executes, the ``print`` statement will print
out "8" because the ``addtwo`` function was called with 3 and 5
as arguments. Within the function, the parameters ``a`` and
``b`` were 3 and 5 respectively. The function computed the sum
of the two numbers and placed it in the local function variable named
``added``. Then it used the ``return`` statement to
send the computed value back to the calling code as the function result,
which was assigned to the variable ``x`` and printed out.
