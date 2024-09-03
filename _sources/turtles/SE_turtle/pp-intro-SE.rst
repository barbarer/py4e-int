Introduction to Practice Problem Types
======================================

Please read the following, watch the videos, and try to solve the problems.


💻 Solve a mixed-up code problem
--------------------------------

If you see a problem like the one below you will need to put the mixed-up
code in the correct order on the right side. You
may need to indent the blocks as well.  There may also be extra blocks that are not
needed in a correct solution that you can leave on the left side. Click the "Check" button
to check your solution.

Try to solve the following mixed-up code problem.  This problem doesn't require any indentation.

.. parsonsprob:: intro-simple-parsons-ppse-1
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

.. parsonsprob:: intro-simple-parsons-ppse-2
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

.. parsonsprob:: intro-simple-parsons-ppse-3
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
    :divid: iwgex1-parsons2-ppse
    :optional:
    :width: 500
    :height: 415
    :align: center



💻 Finish an explanation question
---------------------------------

If you see a problem like the one below, you will need to select the correct option from a list of options to answer the question.
The clicable area are those with a dark gray background and a border around them. Click on the correct option to select it. You can click on the option again to deselect it.
You will then receive a completed explanatoin of the solution you got from solving the mixed-up puzzle.


.. image:: https://i.postimg.cc/DvVqXB8F/SE-introduction.png
    :width: 450
    :align: center

Four types of feedback will be provided for each option you select.

👉 Correct / Incorrect feedback
   If you see a feedback message like "You are correct!" or "Incorrect.", it means you have selected the correct or incorrect option.

👉 Detailed feedback on how many options you got correct or wrong.
   If you see a feedback message like "You clicked on 1 of the 2 correct elements and 0 of the 3 incorrect elements.", it tells you the number of correct and incorrect options you selected.

👉 Hints on how to correct the wrong options.
    If you see a feedback message like "Think about the type of the input parameter.", it provides hints on how to correct the incorrect options you selected.

👉 Highlighted incorrect options
    The Incorrect options you selected will be highlighted in pink background with a red border. You need to deselect the incorrect options and select the correct options.


Try to solve the following explanation problem. You can click on the options to select them and see feedback.

.. clickablearea:: introduction_MSE
    :question: Complete the following sections to provide an explanation for the solution in the completed puzzle:
    :prim_comp: ASSIGNMENT
    :iscode:
    :feedback: (1) Think about the type of the input parameter. (2) Think about the operator used to concatenate two strings.

    Here is a completed function:
    <img src="https://i.postimg.cc/fTbCh4Rc/join-Strings-solution.png" width="300">



    (1) <b>Function Definition —— def joinStrings(str1, str2):</b>
        Defines a new function and takes two parameters as inputs: str1 and str2. Both parameters are <b style="background-color:#d9d9d9">[:click-correct:string:endclick: / :click-incorrect:list:endclick:]</b>.
    (2) <b>Concatenate Strings —— joined = str1 + str2</b>
        Creates a new variable called joined. It assigns to joined the result of concatenating str1 and str2 using the <b style="background-color:#d9d9d9">[:click-correct:+:endclick: or :click-incorrect:&&:endclick: or :click-incorrect:%:endclick:]</b> operator.
        This operation ensures that str1 comes before str2 in the resulting string.    
    (3) <b>Return the Result —— return joined</b>
        This line returns the value stored in variable joined.



What to do next
^^^^^^^^^^^^^^^

.. raw:: html

    <p>Click on the following link to start the practice: <b><a id="pps-practice_SE"> <font size="+1">Practice Problem</font></a></b></p>

.. raw:: html

    <script type="text/javascript" >

      window.onload = function() {

        a = document.getElementById("pps-practice_SE")
        a.href = "pps-SE-pp1.html"
      };

    </script>
