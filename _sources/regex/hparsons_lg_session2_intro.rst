Introduction to Problem Types
-----------------------------------------------------

Please read the following, watch the videos, and try to solve the problems.

Solving Regex Write Code Problems
==================================

If you see a problem like the one below you will need to replace your regex with "YOUR_REGEX" in the code.
Please do not replace other symbols such as "^" and "$" if they exist.

See the video below for an example.

.. youtube:: bNyHBwPA8Xk
    :divid: hparsons_lg_regex_intro_write_video
    :optional:
    :width: 425
    :height: 344
    :align: center

Try to finish writing the code for the following problem.

.. activecode:: hparsons_lg_regex_intro_write
    :practice: T
    :autograde: unittest

    Please write a regex that would match the word "apple".
    Replace "YOUR_REGEX" with your answer, but do not remove other symbols.

    ~~~~
    import re

    def match_apple(word):
        if re.match('^YOUR_REGEX$', word) != None:
            return True
        else:
            return False
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(match_apple('apple'), True, 'Should match "apple"')
            self.assertEqual(match_apple('apples'), False, 'Should not match "apples"')
            self.assertEqual(match_apple('Apple'), False, 'Should not match "Apple"')
    myTests().main()


Solving Mixed-up Code Problems
==================================

If you see a problem like the one below you will need to put the mixed-up
code in the correct order on the bottom.
There will also be extra blocks that are not needed in a correct solution that you can leave on the top row. 
Click the "Check" button to check your solution.

See the video below for an example.

.. youtube:: YehVhjxLae0
    :divid: hparsons_lg_regex_intro_hparsons_video
    :optional:
    :width: 650
    :height: 415
    :align: center

Try to solve the following mixed-up code problem.

.. hparsons:: hparsons_lg_regex_intro_parsons
    :language: regex
    :randomize:
    :blockanswer: 0 1

    Please write a regex that would match the word "apple".

    ~~~~
    --blocks--
    app
    le
    s


What to do next
============================

.. raw:: html

    <p>Click on the following link to go the practice problems: <a id="hparsons_lg_session2_practice"><font size="+2">Practice Problems</font></a></p>

.. raw:: html

    <script type="text/javascript" >

      window.onload = function() {

        a = document.getElementById("hparsons_lg_session2_practice")

        // randomly pick one of two relative urls
        var v = Math.floor(Math.random() * 9) + 1;
        if (v % 2 == 0)
        {
              a.href = "hparsons_lg_session2_practice_write.html"
        }
        else
        {
              a.href = "hparsons_lg_session2_practice_parsons.html"
        }

        };
    </script>
