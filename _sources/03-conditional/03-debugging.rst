Debugging
---------

The traceback Python displays when an error occurs contains a lot of
information, but it can be overwhelming. The most useful parts are
usually:


*
  What kind of error it was, and

*
  Where it occurred.

Syntax errors are usually easy to find, but there are a few gotchas.
Whitespace errors can be tricky because spaces and tabs are invisible
and we are used to ignoring them.

.. code-block:: python

   >>> x = 5
   >>>  y = 6
     File "<stdin>", line 1
       y = 6
       ^
   IndentationError: unexpected indent


In this example, the problem is that the second line is indented by one
space. But the error message points to ``y``\ , which is
misleading. In general, error messages indicate where the problem was
discovered, but the actual error might be earlier in the code, sometimes
on a previous line.

In general, error messages tell you where the problem was discovered,
but that is often not where it was caused.
