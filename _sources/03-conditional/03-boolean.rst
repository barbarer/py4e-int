Boolean expressions
-------------------

A *boolean expression* is an expression that is either
true or false. The following examples use the operator ``==``\ ,
which compares two operands and produces ``True`` if they are
equal and ``False`` otherwise:

.. activecode:: 03_boolean_equal

   5 == 5
   5 == 6

``True`` and ``False`` are special values that belong
to the class ``bool``\ ; they are not strings:

.. activecode:: 03_boolean_types

   type(True)
   type(False)


The ``==`` operator is one of the *comparison
operators*\ ; the others are:

.. code-block:: python

   x != y               # x is not equal to y
   x > y                # x is greater than y
   x < y                # x is less than y
   x >= y               # x is greater than or equal to y
   x <= y               # x is less than or equal to y
   x is y               # x is the same as y
   x is not y           # x is not the same as y


Although these operations are probably familiar to you, the Python
symbols are different from the mathematical symbols for the same
operations. A common error is to use a single equal sign
(\ ``=``\ ) instead of a double equal sign (\ ``==``\ ).
Remember that ``=`` is an assignment operator and
``==`` is a comparison operator. There is no such thing as
``=<`` or ``=>``.
