Finishing iterations with ``continue``
------------------------------------------
.. index::
    pair: Continue; Statement


Sometimes, you are in a loop and want to finish the
current iteration and immediately jump to the next. In that
case, you can use the ``continue`` statement to skip to the next
iteration without finishing the body of the loop for the current
iteration.

Here is an example of a loop that copies its input until the user types
"done", but treats lines that start with the hash character as lines not
to be printed (kind of like Python comments).

Here is a sample run of this new program with ``continue``
added:

.. activecode:: itr-section4_1
    :coach:
    :caption: A sample run of this new program with ``continue`` added.

    while True:
        line = input('> ')
        if line[0] == '#' :
            continue
        if line == 'done':
            break
        else:
            print(line)
    print ('Done!')


Try the code block above using the input below as well as your own input.

.. code-block:: python

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

.. mchoice:: itContinue_MC_line_v2
    :answer_a: nothing prints
    :answer_b: 'Done!'
    :answer_c: '#'
    :answer_d: it will prompt the user for input with '> '
    :correct: b
    :feedback_a: Incorrect! Something will print, regardless of what is inputted. Try again.
    :feedback_b: Entering 'done' will print 'Done!'.
    :feedback_c: Incorrect! This will not print "#". Try again.
    :feedback_d: Incorrect! This would be true if the user entered '#'.

    What prints if the user's input is 'done'?

    .. code-block:: python

        while True:
            line = input('> ')
            if line[0] == '#' :
                continue
            if line == 'done':
                break
            else:
                print(line)
        print ('Done!')

.. parsonsprob:: itContinue_PP_not8_v2
    :numbered: left
    :practice: T
    :adaptive:

    Construct a block of code that prints the numbers 1 through 10, but skips the number 8.
    The loop will start by incrementing n, before doing anything else. Look out for the
    three extra code pieces and watch your indentation!
    -----
    n = 0
    =====
    while (n < 10):
    =====
    while (n <= 10): #paired
    =====
        n = n + 1
    =====
        if n == 8:
    =====
        if n = 8: #paired
    =====
            continue
    =====
        print(n)
