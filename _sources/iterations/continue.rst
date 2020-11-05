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

.. mchoice:: itContinue_MC_line
    :answer_a: nothing prints
    :answer_b: 'Done!'
    :answer_c: '#'
    :answer_d: '> '
    :correct: d
    :feedback_a: Incorrect! Something will print, regardless of what is inputted. Try again.
    :feedback_b: Incorrect! '#' does not 'break' the loop, it 'continue's. Try again.
    :feedback_c: Incorrect! This will not print "#". Try again.
    :feedback_d: Correct! 'continue' will cause a new iteration of the loop to start, which will always print '> ' to prompt the user.

    What prints if the user's input is '#'?

    .. code-block:: python

        while True:
            line = raw_input('> ')
            if line[0] == '#' :
                continue
            if line == 'done':
                break
            else:
                print(line)
        print ('Done!')

.. parsonsprob:: itContinue_PP_not8
    :numbered: left
    :practice: T
    :adaptive:

    Construct a block of code that prints the numbers 1 through 10, but skips the number 8.
    The loop will start by incrementing n, before doing anything else. Look out for the
    three extra code pieces and watch your indentation!
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
