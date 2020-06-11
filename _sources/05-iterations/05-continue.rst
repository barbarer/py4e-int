Finishing iterations with ``continue``
------------------------------------------

Sometimes you are in an iteration of a loop and want to finish the
current iteration and immediately jump to the next iteration. In that
case you can use the ``continue`` statement to skip to the next
iteration without finishing the body of the loop for the current
iteration.

Here is an example of a loop that copies its input until the user types
"done", but treats lines that start with the hash character as lines not
to be printed (kind of like Python comments).

Here is a sample run of this new program with ``continue``
added:

.. activecode:: 05section4_1
   :coach:
   :caption: A sample run of this new program with ``continue`` added.

   while True:
       line = raw_input('> ')
       if line[0] == '#' :
            continue
       if line == 'done':
            break
       else:
            print(line)
   print ('Done!')



Try the code block above using the input below as well as your own input.

.. code-block::

   > hello there
   hello there
   > # don't print this
   > print this!
   print this!
   > done
   Done!


All the lines are printed except the one that starts with the hash sign
because when the ``continue`` is executed, it ends the current
iteration and jumps back to the ``while`` statement to start
the next iteration, thus skipping the ``print`` statement.

.. mchoice:: 05question4_1
   :answer_a: nothing prints
   :answer_b: 'Done!'
   :answer_c: '#'
   :answer_d: 'break'
   :correct: b
   :feedback_a: Try again!
   :feedback_b: Correct!
   :feedback_c: Try again!
   :feedback_d: Try again!

   What prints if the user's input is '#'?

   .. code-block:: python

    while True:
        line = raw_input('> ')
        if line[0] == '#' :
            break
        if line == 'done':
            break
        else:
            print(line)
    print ('Done!')

.. mchoice:: 05question4_2
   :answer_a: Current Letter : P
   :answer_b: Current Letter : y
   :answer_c: Current Letter : t
   :answer_d: Current Letter : h
   :correct: d
   :feedback_a: Try again!
   :feedback_b: Try again!
   :feedback_c: Try again!
   :feedback_d: Correct!

   Which of the following statements does not print?

   .. code-block:: python

    for letter in 'Python':
        if letter == 'h':
            continue
        print ('Current Letter : ' + letter)

.. parsonsprob:: question5_4_1
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that prints the numbers 1 through 10, but skips the number 8.
   -----
   n = 0
   =====
   n = 1 #distractor
   =====
   while (n < 10):
   =====
   while (n < 10) #distractor
   =====
   while (n <= 10): #distractor
   =====
    n = n + 1
   =====
    if n == 8:
   =====
      continue
   =====
    print(n)
