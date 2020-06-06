Chained conditionals
--------------------

Sometimes there are more than two possibilities and we need more than
two branches. One way to express a computation like that is a
*chained conditional*\ :

.. activecode:: 03_if_elif_else

   if x < y:
       print('x is less than y')
   elif x > y:
       print('x is greater than y')
   else:
       print('x and y are equal')


``elif`` is an abbreviation of "else if." Again, exactly one
branch will be executed.

.. image:: height=2.0in@../images/elif
   :target: height=2.0in@../images/elif
   :alt: If-Then-ElseIf Logic



There is no limit on the number of ``elif`` statements. If
there is an ``else`` clause, it has to be at the end, but there
doesn't have to be one.

.. activecode:: 03_if_elif_another_elif

   if choice == 'a':
       print('Bad guess')
   elif choice == 'b':
       print('Good guess')
   elif choice == 'c':
       print('Close, but not correct')


Each condition is checked in order. If the first is false, the next is
checked, and so on. If one of them is true, the corresponding branch
executes, and the statement ends. Even if more than one condition is
true, only the first true branch executes.
