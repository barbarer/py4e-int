Alternative execution
---------------------

A second form of the ``if`` statement is *alternative
execution*\ , in which there are two possibilities and the
condition determines which one gets executed. The syntax looks like
this:

.. activecode:: 03_simple_cond

   if x % 2 == 0 :
       print('x is even')
   else :
       print('x is odd')


If the remainder when ``x`` is divided by 2 is 0, then we know
that ``x`` is even, and the program displays a message to that
effect. If the condition is false, the second set of statements is
executed.

.. image:: height=1.5in@../images/if-else.svg
   :target: height=1.5in@../images/if-else.svg
   :alt: If-Then-Else Logic



Since the condition must either be true or false, exactly one of the
alternatives will be executed. The alternatives are called
*branches*\ , because they are branches in the flow of
execution.
