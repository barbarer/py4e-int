Nested conditionals
-------------------

One conditional can also be nested within another. We could have written
the three-branch example like this:

.. activecode:: 03_nested_cond

   if x == y:
       print('x and y are equal')
   else:
       if x < y:
           print('x is less than y')
       else:
           print('x is greater than y')


The outer conditional contains two branches. The first branch contains a
simple statement. The second branch contains another ``if``
statement, which has two branches of its own. Those two branches are
both simple statements, although they could have been conditional
statements as well.

.. image:: height=2.0in@../images/nested
   :target: height=2.0in@../images/nested
   :alt: Nested If Statements



Although the indentation of the statements makes the structure apparent,
*nested conditionals* become difficult to read very
quickly. In general, it is a good idea to avoid them when you can.

Logical operators often provide a way to simplify nested conditional
statements. For example, we can rewrite the following code using a
single conditional:

.. activecode:: 03_nested_cond_pos_digit

   if 0 < x:
       if x < 10:
           print('x is a positive single-digit number.')


The ``print`` statement is executed only if we make it past
both conditionals, so we can get the same effect with the
``and`` operator:

.. activecode:: 03_cond_with_and

   if 0 < x and x < 10:
       print('x is a positive single-digit number.')
