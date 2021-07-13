Debugging
---------
.. index::
    single: Debugging
    single: Whitespace
    

If you are using a text editor to write your scripts, you might run into
problems with spaces and tabs. The best way to avoid these problems is
to use spaces exclusively (no tabs). Most text editors that know about
Python do this by default, but some don't.

Tabs and spaces are usually invisible, which makes them hard to debug,
so try to find an editor that manages indentation for you.

Also, don't forget to save your program before you run it. Some
development environments do this automatically, but some don't. In that
case, the program you are looking at in the text editor is not the same
as the program you are running.

Debugging can take a long time if you keep running the same incorrect
program over and over!

Make sure that the code that you're looking at is the same code that you're running.
If you're not sure, put something like ``print("hello")`` at the beginning
of the program and run it again. If you don't see ``hello``, you're not
running the right program!

.. fillintheblank:: functDebug_spacing

    The best way to avoid problems with spaces and tabs is to use ______ exclusively.

    - :[Ss]paces: The best way to avoid problems with spacing is to use spaces exclusively.
      :.*: Incorrect! Which of those two options should you use? Try again.

.. fillintheblank:: functDebug_look

    Sometimes the program you are running can be different than the program you are looking at in the text editor if you forget to ____ your program.

    - :[Ss]ave: Saving frequently will keep your code up to date.
      :.*: Incorrect! When you make changes to your code, what do you have to do? Try again.
