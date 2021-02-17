Why functions?
--------------

.. index::
    pair: function; reasons for

It may not be clear why it is worth the trouble to divide a program into
functions. There are several reasons:


*
  Creating a new function gives you an opportunity to name a group of
  statements, which makes your program easier to read, understand, and
  debug.

*
  Functions can make a program smaller by eliminating repetitive code.
  Later, if you make a change, you only have to make it in one place.

*
  Dividing a long program into functions allows you to debug the parts
  one at a time and then assemble them into a working whole.

*
  Well-designed functions are often useful for many programs. Once you
  write and debug one, you can reuse it.

Part of the skill of creating and using functions is to have a function
properly capture an idea, so throughout the rest of the book, we will
often use a function definition to explain a concept. For example, later,
we will show you code that finds the smallest value in a list of values
and we will present it to you as a function named ``min``, which takes a
list of values as its argument and returns the list's smallest value.
