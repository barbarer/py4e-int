Definite loops using ``for``
---------------------------------

Sometimes we want to loop through a *set* of things such
as a list of words, the lines in a file, or a list of numbers. When we
have a list of things to loop through, we can construct a *definite*
loop using a ``for`` statement. We call the ``while``
statement an *indefinite* loop because it simply loops until some
condition becomes ``False``, whereas the ``for`` loop
is looping through a known set of items so it runs through as many
iterations as there are items in the set.

.. mchoice:: itFor_MC_while
    :practice: T
    :answer_a: it loops through a known set of items so it runs through as many iterations as there are items in the set
    :answer_b: it loops until some condition becomes True
    :answer_c: it loops until some condition becomes False
    :answer_d: it loops until it reaches a "break" statement
    :correct: c
    :feedback_a: A while loop does not run through a known set of items.
    :feedback_b: A while loop continues until the condition is False.
    :feedback_c: A while loop continues until the condition is False. There is not a definite answer to when that happens, it all depends on the incrementation.
    :feedback_d: A while loop can stop at a break statement, but so can any other loop.

    The while loop is an "indefinite" loop because...

.. mchoice:: itFor_MC_for
    :practice: T
    :answer_a: it loops through a known set of items so it runs through as many iterations as there are items in the set
    :answer_b: it loops until some condition becomes True
    :answer_c: it loops until some condition becomes False
    :answer_d: it loops until it reaches a "break" statement
    :correct: a
    :feedback_a: A for loop only runs through a distinct set of items.
    :feedback_b: A while loop will run until a condition becomes False.
    :feedback_c: This is the condition for a while loop.
    :feedback_d: A for loop can stop at a break statement, but so can any other loop.

    The for loop is not an "indefinite" loop because...

The syntax of a ``for`` loop is similar to the
``while`` loop in that there is a ``for`` statement
and a loop body:

.. activecode:: 05section5_1
    :coach:
    :caption: An example of using a for loop to iterate through a list.

    friends = ['Joseph', 'Glenn', 'Sally']
    for friend in friends:
        print('Happy New Year:', friend)
    print('Done!')


In Python terms, the variable ``friends`` is a list [We will examine lists
in more detail in a later chapter.] of
three strings and the ``for`` loop goes through the list and
executes the body once for each of the three strings in the list
resulting in this output:

.. code-block:: python

    Happy New Year: Joseph
    Happy New Year: Glenn
    Happy New Year: Sally
    Done!


Translating this ``for`` loop to English is not as direct as
the ``while``, but if you think of friends as a *set*, it goes
like this: "Run the statements in the body of the for loop once
for each friend *in* the set named friends."

Looking at the ``for`` loop, *for* and
*in* are reserved Python keywords, and
``friend`` and ``friends`` are variables.

.. code-block:: python

    for friend in friends:
        print('Happy New Year:', friend)


In particular, ``friend`` is the *iteration
variable* for the for loop. The variable ``friend``
changes for each iteration of the loop and controls when the
``for`` loop completes. The *iteration variable*
steps successively through the three strings stored in the
``friends`` variable.

.. parsonsprob:: itFor_PP_friends
    :numbered: left
    :practice: T
    :adaptive:

    Construct a block of code that prints "Hello, Prisha", "Hello, Kahlil", "Hello, Nirav",
    "Hello, Aliyah", and "Hello, Antonella", in that order. After saying hello to each name in
    the list, print "All done!" Watch for extra pieces of code and correct indentation.
    -----
    names = ['Prisha', 'Kahlil', 'Nirav', 'Aliyah', 'Antonella']
    =====
    for name in names:
    =====
    for names in names: #distractor
    =====
        print("Hello,", name)
    =====
        print("Hello", name) #distractor
    =====
    print("All done!")
    =====
    print(All done!) #distractor
