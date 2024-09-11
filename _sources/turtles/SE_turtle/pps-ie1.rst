Here is an explanation for the completed puzzle
================================================

.. clickablearea:: IE_tutles_1
    :question: An explanation for the completed puzzle:
    :prim_comp: ASSIGNMENT
    :iscode:
    :feedback: 


    Here is a completed function:
    <img src="https://i.postimg.cc/rFSvDDNp/create-T.png" width="400">

    (1) <b>from turtle import * -- Importing Turtle Graphicss</b>
        Use import * to import all functions, classes, and variables from the Turtle graphics library into the current namespace.
    (2) <b>def create_T(turtle_obj): -- Define Function</b>
        Creates a function create_T that takes turtle_obj as an argument to draw the letter T.
    (3) <b>width = 100 -- Set Width</b>
        Sets the variable width to 100, which represents the width of the letter T.
    (4) <b>height = 150 -- Set Height</b>
        Sets the variable height to 150, which represents the height of the letter T.
    (5) <b>turtle_obj.penup() -- Lift Pen</b> 
        Use .penup() to lift the turtle's pen to move it without drawing.
    (6) <b>turtle_obj.goto(-width / 2, height / 2) -- Move to Start Position</b> 
        Moves the turtle to the starting position at the top-left part of the T, which is the point (-50, 75).
        -width / 2: Moves the turtle half the width to the left of the origin (center of the screen). This ensures the horizontal line of the T is centered horizontally.
        This ensures the horizontal line of the T is centered horizontally.
        height / 2: Moves the turtle to half the height upwards from the origin. 
        This places the turtle at the highest point needed to start drawing the letter T.    
    (7) <b>turtle_obj.pendown() -- Lower Pen</b> 
        Use .pendown() to lower the turtle's pen to start drawing.
    (8) <b>turtle_obj.forward(width) -- Draw Top Horizontal Line</b>
        Moves the turtle forward by the value of width to draw the top horizontal line of the T.
    (9) <b>turtle_obj.backward(width / 2) -- Move to Middle</b>
        Use / to perform standard division and returns the quotient as a floating-point number. 
        However, operator % performs division and returns the remainder of that division.
        Moves the turtle backward by half the width to the middle of the top horizontal line.
    (10) <b>turtle_obj.right(90) -- Turn Right</b>
        Rotates the turtle 90 degrees to the clockwise(right) to prepare for drawing the vertical line.
    (11) <b>turtle_obj.forward(height) -- Draw Vertical Line</b>
        Moves the turtle forward by the value of height to draw the vertical line of the T.


What to do next
^^^^^^^^^^^^^^^

.. raw:: html

    <p>Click on the following link to finish the next puzzle: <a id="pp2" href="pps-IE-pp2.html"><font size="+1"><b>Mixed-up Puzzle 2</b></font></a></p>

.. .. raw:: html

..     <script type="text/javascript">

..     document.addEventListener('DOMContentLoaded', () => {
..     const link = document.getElementById('pp2');

..     link.addEventListener('click', (event) => {
..         event.preventDefault(); // Prevent default link behavior
        
..         // Find all elements with class 'alert alert-info'
..         const alerts = document.querySelectorAll('.alert.alert-info');

..         // Check if any of these elements contain the text "You are Correct!"
..         const isTextPresent = Array.from(alerts).some(alert => alert.textContent.trim() === 'You are Correct!');

..         if (isTextPresent) {
..             // Allow navigation
..             window.location.href = 'pps-IE-pp2.html'; // Change this to your actual link
..         } else {
..             // Show a pop-up message
..             alert('Please try again to complete the explanation question. Remember, you can use the feedback to help you finish it.');
            
..             }
..         });
..     });

..     </script>
