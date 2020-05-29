Function calls
--------------

In the context of programming, a *function* is a named
sequence of statements that performs a computation. When you define a
function, you specify the name and the sequence of statements. Later,
you can "call" the function by name. We have already seen one example of
a *function call*\ :

.. activecode:: 04section1
   :coach:
   :caption: An example of a function call.

   result = type(32)
   print(result)


The name of the function is ``type``. The expression in
parentheses is called the *argument* of the function. The
argument is a value or variable that we are passing into the function as
input to the function. The result, for the ``type`` function,
is the type of the argument.


It is common to say that a function "takes" an argument and "returns" a
result. The result is called the *return value*.

.. clickablearea:: 04click1_1
    :question: Click on the name of the function.
    :iscode:

    :click-correct:addTwo:endclick:(:click-incorrect:23:endclick:)

.. clickablearea:: 04click1_2
    :question: Click on the argument of the function.
    :iscode:

    :click-incorrect:addTwo:endclick:(:click-correct:23:endclick:)

.. fillintheblank:: 04fill1

    A _________ is a named sequence of statements that performs a computation.

    - :(?:f|F)(?:u|U)(?:n|N)(?:c|C)(?:t|T)(?:i|I)(?:o|O)(?:n|N): Is the correct answer!
      :.*: Try again!
