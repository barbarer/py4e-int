Managing larger programs
------------------------
At the beginning of this book, we came up with four basic programming
patterns which we use to construct programs:


* Sequential code
* Conditional code (if statements)
* Repetitive code (loops)
* Store and reuse (functions)

In later chapters, we explored simple variables as well as collection
data structures like lists, tuples, and dictionaries.

As we build programs, we design data structures and write code
to manipulate those data structures.   There are many ways to write programs
and by now, you probably have written some programs that are "not so elegant"
and other programs that are "more elegant". Even though your programs
may be small, you are starting to see how there is a bit of art and
aesthetic to writing code.

As programs get to be millions of lines long, it becomes increasingly important
to write code that is easy to understand.  If you are working on a million-line
program, you can never keep the entire program in your mind at the same time.
We need ways to break large programs into multiple smaller pieces so that
we have less to look at when solving a problem, fix a bug, or add a new feature.

In a way, object oriented programming is a way to arrange your code
so that you can zoom into 50 lines of the code and understand it
while ignoring the other 999,950 lines of code for the moment.


.. mchoice:: large_programs_mchoice
    :practice: T
    :answer_a: Object Oriented Programming
    :answer_b: Sequential code
    :answer_c: Conditional Code
    :answer_d: Repetitive code
    :correct: a
    :feedback_a: Yes, object oriented programming helps you arrange your code so that you
           can only see and work on a part of your code, specially if your code is 
           millions of lines long.
    :feedback_b:  No, you can only look at parts of your code but you are not arranging your
           codes in a way that makes reuse of the code and make them 'more elegant'.
    :feedback_c:  No, Conditional code perform different actions depending whether the 
           specified criteria is true or false.
    :feedback_d: No, Repetitive coding means repeating a set of instructions for a certain
           number of times or until a certain condition is met.
    
    What is a way to arrange your code so that you can see parts of your code 
    and understand it while ignoring rest of the code for the moment?
        
    

    

    
     