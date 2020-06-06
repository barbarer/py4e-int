Logical operators
-----------------

There are three *logical operators*\ : ``and``\ ,
``or``\ , and ``not``. The semantics (meaning) of these
operators is similar to their meaning in English. For example,

``x > 0 and x < 10``

is true only if ``x`` is greater than 0 *and* less than 10.

``n%2 == 0 or n%3 == 0`` is true if *either* of the conditions
is true, that is, if the number is divisible by 2 *or* 3.

Finally, the ``not`` operator negates a boolean expression, so
``not (x > y)`` is true if ``x > y`` is false; that
is, if ``x`` is less than or equal to ``y``.

Strictly speaking, the operands of the logical operators should be
boolean expressions, but Python is not very strict. Any nonzero number
is interpreted as "true."

.. code-block:: python

   >>> 17 and True
   True


This flexibility can be useful, but there are some subtleties to it that
might be confusing. You might want to avoid it until you are sure you
know what you are doing.
