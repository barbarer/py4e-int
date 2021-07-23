Debugging
---------
.. index::
    single: Debugging
    pair: Debugging; By Bisection

As you start writing bigger programs, you might find yourself spending
more time debugging. More code means more chances to make an error and
more places for bugs to hide.

One way to cut your debugging time is "debugging by bisection." For
example, if there are 100 lines in your program and you check them one
at a time, it would take 100 steps.

Instead, try to break the problem in half. Look at the middle of the
program, or near it, for an intermediate value you can check. Add a
``print`` statement (or something else that has a verifiable
effect) and run the program.

If the mid-point check is incorrect, the problem must be in the first
half of the program. If it is correct, the problem is in the second
half.

Every time you perform a check like this, you halve the number of lines
you have to search. After six steps (which is much less than 100), you
would be down to one or two lines of code, at least in theory.

In practice it is not always clear what the "middle of the program" is
and not always possible to check it. It doesn't make sense to count
lines and find the exact midpoint. Instead, think about places in the
program where there might be errors and places where it is easy to put a
check. Then choose a spot where you think the chances are about the same
that the bug is before or after the check.

.. mchoice:: itDebug_MC_bisection
    :answer_a: writing the entire program at once and looking at the code collectively to find the error
    :answer_b: breaking the problem in half and doing "mid-point checks"
    :answer_c: purposely creating errors in your code to test sections
    :correct: b
    :feedback_a: Incorrect! Debugging the entire program at once is not an example of debugging by bisection. Try again.
    :feedback_b: Correct! Debugging by bisection means to split the program in half (or bisections) and debug those separately.
    :feedback_c: Incorrect! Purposefully creating errors is not an example of debugging by bisection (nor is it useful). Try again.

    An example of "debugging by bisection" is...

.. fillintheblank:: itDebug_fill1

    When debugging, if the mid-point check is incorrect, the problem must be in the _______ half of the program.

    - :[Ff]irst: Correct! If the mid-point check is incorrect the problem must be in the first half of the program.
      :.*: Incorrect! Hint: the problem won't be in the second half. Try again.
