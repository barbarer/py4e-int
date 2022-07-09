Debugging
---------

Python has some simple and rudimentary built-in documentation that can
be quite helpful if you need a quick refresher to trigger your memory
about the exact name of a particular method. This documentation can be
viewed in the Python interpreter in interactive mode.

You can bring up an interactive help system using ``help()``.

.. code-block:: python

   >>> help()

   help> modules


If you know what module you want to use, you can use the
``dir()`` command to find the methods in the module as follows:

.. code-block:: python

   import re
   dir(re)
   [.. 'compile', 'copy_reg', 'error', 'escape', 'findall',
   'finditer', 'match', 'purge', 'search', 'split', 'sre_compile',
   'sre_parse', 'sub', 'subn', 'sys', 'template']

.. mchoice:: re-debug-mc1
    :practice: T
    :answer_a: dir(time)
    :answer_b: import time
    :answer_c: help(time)
    :correct: a
    :feedback_a: Correct! The dir() command helps to find the methods of a given module.
    :feedback_b: This will import the time module.
    :feedback_c: This will not work.

    Which of these options will find the methods of the time library?

You can also get a small amount of documentation on a particular method
using the dir command.

.. code-block:: python

   help (re.search)
   Help on function search in module re:

   search(pattern, string, flags=0)
       Scan through string looking for a match to the pattern, returning
       a match object, or None if no match was found.



The built-in documentation is not very extensive, but it can be helpful
when you are in a hurry or don't have access to a web browser or search
engine.

.. activecode:: re-debug-ac1
    :practice: T
    :nocodelens:

    Fix the regex equation so that the code matches any dollar sign ($) followed by an integer or float.
    ~~~~
    import re
    x = 'The apples cost $9.99, whereas the bananas were only $5 and the oranges were $2.50 each.'
    y = re.findall('$[0_9\.]', x)

    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(y, ['$9.99', '$5', '$2.50'], "Testing that the regex equation matches the proper parts of the string.")

    MyTests().main()
