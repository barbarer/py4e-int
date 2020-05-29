Asking the user for input
-------------------------

Sometimes we would like to take the value for a variable from the user
via their keyboard. Python provides a built-in function called ``input`` that gets input from
the keyboard (in Python 2.0, this function was named ``raw_input``). When this function is called,
the program stops and waits for the user to type something. When the user presses ``Return`` or
``Enter``\ , the program resumes and ``input`` returns what the user typed as a string.

.. activecode:: 02-ac-10-input
  :caption: Using the input function

  inp = input()
  print(inp)


Before getting input from the user, it is a good idea to print a prompt
telling the user what to input. You can pass a string to ``input`` to
be displayed to the user before pausing for input:

.. activecode:: 02-ac-11-print-name
  :caption: Using the input fuction with a prompt

  name = input('What is your name?\n')
  print(name)

The sequence ``\n`` at the end of the prompt represents a
*newline*\ , which is a special character that causes a
line break. That's why the user's input appears below the prompt.

If you expect the user to type an integer, you can try to convert the
return value to ``int`` using the ``int()`` function:

.. activecode:: 02-ac-11-swallow
  :caption: Converting input to an integer

  prompt = 'What...is the airspeed velocity of an unladen swallow?\n'
  speed = input(prompt)
  print(int(speed))
  print(int(speed) + 5)


But if the user types something other than a string of digits, you get
an error:

.. code-block:: python

   >>> speed = input(prompt)
   What...is the airspeed velocity of an unladen swallow?
   What do you mean, an African or a European swallow?
   >>> int(speed)
   ValueError: invalid literal for int() with base 10:


We will see how to handle this kind of error later.

.. fillintheblank:: 02-fitb-7-input

    What function is used to convert string values to integers?

    - :"int()": Correct!
      :"integer": Close, but not quite!
      :.*: Check out what is used above to convert the airspeed velocity.

.. fillintheblank:: 02-fitb-8-input

    What sequence is used to create a newline at the end of statements?

    - :"\n": Correct!
      :"n": Close, but there is a symbol that goes with it
      :.*: Check out what is used above to convert the airspeed velocity.

.. parsonsprob:: 02-pp-2-input

   Construct a block of code that asks the user for a number and prints three times that number.
   There is an extra piece of code to watch out for.
   -----
   prompt = 'Please enter a number\n'
   userNumber = input(prompt)
   user number = input(prompt) #paired
   print(3 * int(userNumber))
   print(3 * userNumber) #paired
   print(userNumber) #distractor
