Debugging
---------
.. index::
    single: Debugging
    single: Typographical Error
    single: Experimental Debugging
    single: Random Walk Programming


When you Python spits out an error or even when it gives you a result that is different from
what you had intended, then begins the hunt for the cause of the error. Debugging is the process
of finding the cause of the error in your code. When you are debugging a program, and especially
if you are working on a hard bug, there are four things to try:

* Reading
    Examine your code, read it back to yourself, and check that it says
    what you meant to say.

* Running
    Experiment by making changes and running different versions. Often
    if you display the right thing at the right place in the program,
    the problem becomes obvious, but sometimes you have to spend some
    time to build scaffolding.

* Ruminating
    Take some time to think! What kind of error is it: syntax, runtime,
    semantic? What information can you get from the error messages, or
    from the output of the program? What kind of error could cause the
    problem you're seeing? What did you change last, before the problem
    appeared?

* Retreating
    At some point, the best thing to do is back off, undoing recent
    changes, until you get back to a program that works and that you
    understand. Then you can start rebuilding.

Beginning programmers sometimes get stuck on one of these activities and
forget the others.  Finding a hard bug requires reading, running, ruminating, and sometimes retreating.
If you get stuck on one of these activities, try the others. Each activity comes with its own failure mode.

For example, reading your code might help if the problem is a
typographical error, but not if the problem is a conceptual
misunderstanding. If you don't understand what your program does, you
can read it 100 times and never see the error, because the error is in
your head.

Running experiments can help, especially if you run small, simple tests.
But if you run experiments without thinking or reading your code, you
might fall into a pattern I call "random walk programming", which is the
process of making random changes until the program does the right thing.
Needless to say, random walk programming can take a long time.

You have to take time to think. Debugging is like an experimental
science. You should have at least one hypothesis about what the problem
is. If there are two or more possibilities, try to think of a test that
would eliminate one of them.

Taking a break helps with the thinking. So does talking. If you explain
the problem to someone else (or even to yourself), you will sometimes
find the answer before you finish asking the question.

But even the best debugging techniques will fail if there are too many
errors, or if the code you are trying to fix is too big and complicated.
Sometimes the best option is to retreat, simplifying the program until
you get to something that works and that you understand.

Beginning programmers are often reluctant to retreat because they can't
stand to delete a line of code (even if it's wrong). If it makes you
feel better, copy your program into another file before you start
stripping it down. Then you can paste the pieces back in a little bit at
a time.

.. mchoice:: intro-debug-mc-definition
    :practice: T
    :answer_a: The process of finding the cause of the error in your code.
    :answer_b: The process of making random changes until the program does the right thing.
    :answer_c: The process of exterminating pests from your house.
    :answer_d: The process of detecting and removing concealed microphones from (an area).
    :correct: a
    :feedback_a: Correct!
    :feedback_b: Nope, that is *random walk programming.*
    :feedback_c: What is debugging in terms of programming?
    :feedback_d: What is debugging in terms of programming?

    What is debugging?

.. mchoice:: intro-debug-mc-randomwalk
    :practice: T
    :answer_a: Stepping through the program to find bugs.
    :answer_b: Changing the names of variables in your code randomly.
    :answer_c: Going for a walk without a map.
    :answer_d: Making random changes until the program does the right thing
    :correct: d
    :feedback_a: Reread above to find the answer.
    :feedback_b: Reread above to find the answer.
    :feedback_c: Reread above to find the answer.
    :feedback_d: Correct!

    What is "random walk programming?"


.. dragndrop:: intro-debug-dnd-terms
    :feedback: Look above for these terms.
    :match_1: Reading|||Examine your code, read it back to yourself, and check that it says what you meant to say.
    :match_2: Running|||Experiment by making changes and running different versions.
    :match_3: Ruminating|||Take some time to think! What kind of error is it and how can you interpret the error or output?
    :match_4: Retreating|||At some point, the best thing to do is back off, undoing recent changes, until you get back to a program that works and that you understand.

    Match each term with its meaning.
