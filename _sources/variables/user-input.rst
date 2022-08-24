Asking the user for input
-------------------------
.. index::
    single: Keyboard Input
    single: Python 2.0
    single: Prompt
    single: Newline
    single: ValueError

Sometimes we would like to take the value for a variable from the user
via their keyboard. Python provides a built-in function called ``input`` that gets input from
the keyboard (in Python 2.0, this function was named ``raw_input``). When this function is called,
the program stops and waits for the user to type something. When the user presses ``Return`` or
``Enter``, the program resumes and ``input`` returns what the user typed as a string.

.. activecode:: var-ac-10-input
    :caption: Using the input function

    inp = input()
    print(inp)


Before getting input from the user, it is a good idea to print a prompt
telling the user what to input. You can pass a string to ``input`` to
be displayed to the user before pausing for input:

.. activecode:: var-ac-11-print-name
  :caption: Using the input function with a prompt

  name = input('What is your name?')
  print(name)


If you expect the user to type an integer, you can try to convert the
return value to ``int`` using the ``int()`` function:

.. activecode:: var-ac-11-swallow
  :caption: Converting an input to an integer

  prompt = 'What...is the airspeed velocity of an unladen swallow?'
  speed = input(prompt)
  print(int(speed))
  print(int(speed) + 5)

But if the user types something other than a string of digits, you get
an error:

.. code-block:: python

   >>> prompt = 'What...is the airspeed velocity of an unladen swallow?\n'
   >>> speed = input(prompt)
   What...is the airspeed velocity of an unladen swallow?
   What do you mean, an African or a European swallow?
   >>> int(speed)
   ValueError: invalid literal for int() with base 10:

.. note ::

   If you are typing Python code in interpreter you might want to add a new line using "\\n" as shown above.


We will see how to handle this kind of error later.

.. fillintheblank:: var-input-fitb-int
    :practice: T

    What function is used to convert string values to integers?

    - :int(\(\))*: int() converts values to integers
      :integer: Close, but not quite!
      :.*: Try again.

.. fillintheblank:: var-input-fitb-nl
    :practice: T

    What sequence is used to create a newline at the end of statements?

    - :\\n: \n creates a newline.
      :n: Close, but there is a symbol that goes with it.
      :.*: Try again.

.. parsonsprob:: var-input-pp-prompt
   :adaptive:
   :practice: T
   :numbered: left

   Construct a block of code that asks the user for a number and prints three times that number.
   There is extra code to watch out for.
   -----
   prompt = 'Please enter a number\n'
   =====
   userNumber = input(prompt)
   =====
   user number = input(prompt) #paired
   =====
   print(3 * int(userNumber))
   =====
   print(3 * userNumber) #paired
   =====
   print(userNumber) #distractor

One limitation in Python is that you can't add (concatenate) a number and a string. You
must first convert the number to a string using the built-in ``str`` method.

.. activecode:: var-ac-12-birth-year-with-str
  :caption: Using the str function

  from datetime import datetime
  today = datetime.today()
  age_str = input('What is your age?\n')
  age = int(age_str)
  birth_year = today.year - age
  print("You were born in " + str(birth_year) + " or " + str(birth_year - 1))
