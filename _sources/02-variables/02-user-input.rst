Asking the user for input
-------------------------

Sometimes we would like to take the value for a variable from the user
via their keyboard. Python provides a built-in function called
``input`` that gets input from the keyboard^[In Python 2.0, this function was named ``raw_input``.].
When this function is
called, the program stops and waits for the user to type something. When
the user presses ``Return`` or ``Enter``\ , the program
resumes and ``input`` returns what the user typed as a string.

.. activecode:: 02-ac-10-input

   inp = input()
   print(inp)


Before getting input from the user, it is a good idea to print a prompt
telling the user what to input. You can pass a string to ``input`` to
be displayed to the user before pausing for input:

.. activecode:: 02-ac-11-print-name

   name = input('What is your name?\n')
   What is your name?
   print(name)

The sequence ``\n`` at the end of the prompt represents a
*newline*\ , which is a special character that causes a
line break. That's why the user's input appears below the prompt.

If you expect the user to type an integer, you can try to convert the
return value to ``int`` using the ``int()`` function:

.. activecode:: 02-ac-11-swallow

   prompt = 'What...is the airspeed velocity of an unladen swallow?\n'
   speed = input(prompt)
   int(speed)
   int(speed) + 5


But if the user types something other than a string of digits, you get
an error:

.. code-block:: python

   >>> speed = input(prompt)
   What...is the airspeed velocity of an unladen swallow?
   What do you mean, an African or a European swallow?
   >>> int(speed)
   ValueError: invalid literal for int() with base 10:


We will see how to handle this kind of error later.
