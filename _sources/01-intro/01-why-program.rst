Why should you learn to write programs?
=======================================

Writing programs (or programming) is a very creative and rewarding
activity. You can write programs for many reasons, ranging from making
your living to solving a difficult data analysis problem to having fun
to helping someone else solve a problem. This book assumes that
*everyone* needs to know how to program, and that once you know how to
program you will figure out what you want to do with your newfound
skills.

We are surrounded in our daily lives with computers ranging from laptops
to cell phones. We can think of these computers as our "personal
assistants" who can take care of many things on our behalf. The hardware
in our current-day computers is essentially built to continuously ask us
the question, "What would you like me to do next?"

.. mchoice:: intro-whyprogram-mc-ask
    :practice: T
    :answer_a: "How can I help you?"
    :answer_b: "Where should I store this information?"
    :answer_c: "What would you like me to do next?"
    :answer_d: They are not built to ask anything.
    :correct: c
    :feedback_a: Today's computers are programmed to help, but they focus more on *doing things*.
    :feedback_b: Computers are used to store information, but more generally do tasks that we ask them to.
    :feedback_c: Today's computers are build to continuously ask the user "what would you like me to do next?".
    :feedback_d: Try again! They are programmed to continuously ask us what?

    Hardware in today's computers is built to continuously ask what?

.. figure:: Figures/pda.svg
   :alt: Personal Digital Assistant


Programmers add an operating system and a set of applications to the
hardware and we end up with a Personal Digital Assistant that is quite
helpful and capable of helping us do many different things.

.. mchoice:: intro-whyprogram-mc-add
    :practice: T
    :answer_a: an operating system and applications
    :answer_b: a computer and images
    :answer_c: images and applications
    :answer_d: a computer and an operating system
    :correct: a
    :feedback_a: Programmers add an operating system and applications to the hardware.
    :feedback_b: Try again, a computer is the machine itself.
    :feedback_c: Try again, programmers can add images within applications.
    :feedback_d: Try again, a computer is the machine itself.

    What does a programmer add to a computer's hardware?

Our computers are fast and have vast amounts of memory and could be very
helpful to us if we only knew the language to speak to explain to the
computer what we would like it to "do next". If we knew this language,
we could tell the computer to do tasks on our behalf that were
repetitive. Interestingly, the kinds of things computers can do best are
often the kinds of things that we humans find boring and mind-numbing.

For example, look at the first three paragraphs of this chapter and tell
me the most commonly used word and how many times the word is used.
While you were able to read and understand the words in a few seconds,
counting them is almost painful because it is not the kind of problem
that human minds are designed to solve. For a computer the opposite is
true, reading and understanding text from a piece of paper is hard for a
computer to do but counting the words and telling you how many times the
most used word was used is very easy for the computer:

.. code-block:: python

   python words.py
   Enter file:words.txt
   to 16


Our "personal information analysis assistant" quickly told us that the
word "to" was used sixteen times in the first three paragraphs of this
chapter.

This very fact that computers are good at things that humans are not is
why you need to become skilled at talking "computer language". Once you
learn this new language, you can delegate mundane tasks to your partner
(the computer), leaving more time for you to do the things that you are
uniquely suited for. You bring creativity, intuition, and inventiveness
to this partnership.

.. mchoice:: intro-whyprogram-mc-common
    :answer_a: the, 25
    :answer_b: to, 16
    :answer_c: computer, 19
    :answer_d: a, 21
    :correct: b
    :feedback_a: Try again! A program has already counted the words and listed them above!
    :feedback_b: Yes, the most common word is "to" and it appears 16 times in the first three paragraphs.
    :feedback_c: Try again! A program has already counted the words and listed them above!
    :feedback_d: Try again! A program has already counted the words and listed them above!

    What is the most commonly used word in the first three paragraphs of this page and how many times is it used?
