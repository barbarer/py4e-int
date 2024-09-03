Introduction to Practice Problem Types
======================================

Please read the following, watch the videos, and try to solve the problems.


💻 Solve a mixed-up code problem
--------------------------------

If you see a problem like the one below you will need to put the mixed-up code in the correct order on the right side. 
You may need to indent the blocks as well.  There may also be extra blocks that are not
needed in a correct solution that you can leave on the left side. Click the "Check" button
to check your solution.

Try to solve the following mixed-up code problem.  This problem doesn't require any indentation.

.. parsonsprob:: intro-simple-parsons-ppie-1
   :numbered: left
   :adaptive:
   :practice: T
   :order: 3, 1, 2, 0

   Drag the blocks from the left and put them in the correct order on the right. The text in each block
   defines the order.
   -----
   First block
   =====
   Second block
   =====
   Third block

Try to solve the following mixed-up code problem. This problem requires indentation.

.. parsonsprob:: intro-simple-parsons-ppie-2
   :numbered: left
   :adaptive:
   :practice: T
   :order: 3, 1, 2, 0

   Drag the blocks from the left and put them in the correct order on the right with the correct indentation.
   The text in each block defines the order and indentation.
   -----
   First block
   =====
   Second block
   =====
       Third block that needs to be indented

Try to solve the following mixed-up code problem. This problem requires indentation and has extra blocks that are not needed in a correct solution.

.. parsonsprob:: intro-simple-parsons-ppie-3
   :numbered: left
   :adaptive:
   :practice: T
   :order: 3, 1, 2, 0

   Drag the blocks from the left and put them in the correct order on the right with the correct indentation.
   There is an extra block that is not needed in the correct solution.
   -----
   First block
   =====
   Second block
   =====
   Extra block that is not needed #paired: This block is not needed
   =====
       Third block that needs to be indented

The mixed-up code problems have a "Help me" button at the bottom of the
problem. Once you have checked at least three incorrect solutions you can
click the button for help.  It will remove an incorrect code block, if you used
one in your solution, or combine two blocks into one if there are more
than three blocks left.

See the video below for an example.

.. youtube:: QejZ7u642IU
    :divid: iwgex1-parsons2-ppie
    :optional:
    :width: 500
    :height: 415
    :align: center


💻 Receive an explanation of the solved puzzle 
----------------------------------------------

After solving a mixed-up code problem, you can click on the following link to receive an explanation of the solved puzzle. An explanation will look like the following:


.. clickablearea:: introduction_IE
    :question: Here is an explanation for the solution in the completed puzzle:
    :prim_comp: ASSIGNMENT
    :iscode:

    Here is a completed function:
    <img src="https://i.postimg.cc/fTbCh4Rc/join-Strings-solution.png" width="300">

    (1) <b>Function Definition —— def joinStrings(str1, str2):</b>
        Defines a new function and takes two parameters as inputs: str1 and str2. Both parameters are string.
    (2) <b>Concatenate Strings —— joined = str1 + str2</b>
        Creates a new variable called joined. It assigns to joined the result of concatenating str1 and str2 using the / operator.
        This operation ensures that str1 comes before str2 in the resulting string.    
    (3) <b>Return the Result —— return joined</b>
        This line returns the value stored in variable joined.


What to do next
^^^^^^^^^^^^^^^

.. raw:: html

    <p>Click on the following link to start the practice: <b><a id="pps-practice_IE"> <font size="+1">Practice Problem</font></a></b></p>

.. raw:: html

    <script type="text/javascript" >

      window.onload = function() {

        a = document.getElementById("pps-practice_IE")
        a.href = "pps-IE-pp1.html"
      };

    </script>