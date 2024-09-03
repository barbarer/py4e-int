
.. clickablearea:: SE_tutles_1
    :question: Complete this section to get an explanation for the previous puzzle
    :prim_comp: ASSIGNMENT
    :iscode:
    :feedback: (1) Think about how to import all functions from the Turtle graphics library. (5) Think about what .penup() does. (6) Think about the meaning of - in the context of moving the turtle. (7) Think about the purpose of .pendown() function. (8) Think about the purpose of the .forward() function. (9) Think about the output of the / operation in a division between two numbers. (10) Think about the purpose of the .right() function.
    
    
    <img src="https://i.postimg.cc/rFSvDDNp/create-T.png" width="450">

    (1) <b>from turtle import * -- Importing Turtle Graphicss</b>
        Use <b style="background-color:#d9d9d9">[:click-correct:import *:endclick: / :click-incorrect:import all:endclick: / :click-incorrect:Import All:endclick:]</b> to import all functions, classes, and variables from the Turtle graphics library into the current namespace.
    (2) <b>def create_T(turtle_obj): -- Define Function</b>
        Creates a function create_T that takes turtle_obj as an argument to draw the letter T.
    (3) <b>width = 100 -- Set Width</b>
        Sets the variable width to 100, which represents the width of the letter T.
    (4) <b>height = 150 -- Set Height</b>
        Sets the variable height to 150, which represents the height of the letter T.
    (5) <b>turtle_obj.penup() -- Lift Pen</b> 
        Use .penup() to <b style="background-color:#d9d9d9">[:click-incorrect:lower:endclick: / :click-correct:lift:endclick:]</b> the turtle's pen to move it without drawing.
    (6) <b>turtle_obj.goto(-width / 2, height / 2) -- Move to Start Position</b> 
        Moves the turtle to the starting position at the top-left part of the T.
        -width / 2: Moves the turtle half the width to the <b style="background-color:#d9d9d9">[:click-incorrect:right:endclick: / :click-correct:left:endclick:]</b> of the origin (center of the screen). 
        This ensures the horizontal line of the T is centered horizontally.
        height / 2: Moves the turtle to half the height upwards from the origin. 
        This places the turtle at the highest point needed to start drawing the letter T.
        The goto function thus moves the turtle to the point (-50, 75), which is the left end of the top horizontal line of the T.
    (7) <b>turtle_obj.pendown() -- Lower Pen</b> 
        Use .pendown() to <b style="background-color:#d9d9d9">[:click-correct:lower:endclick: / :click-incorrect:lift:endclick:]</b> the turtle's pen to start drawing.
    (8) <b>turtle_obj.forward(width) -- Draw Top Horizontal Line</b>
        Moves the turtle <b style="background-color:#d9d9d9">[:click-incorrect:backward:endclick: / :click-correct:forward:endclick:]</b>  by the value of width to draw the top horizontal line of the T.
    (9) <b>turtle_obj.backward(width / 2) -- Move to Middle</b>
        Use / to perform standard division and returns the <b style="background-color:#d9d9d9">[:click-correct:quotient:endclick: / :click-incorrect:reminder:endclick:]</b> as a floating-point number. 
        However, operator % performs division and returns the remainder of that division.
        Moves the turtle backward by half the width to the middle of the top horizontal line.
    (10) <b>turtle_obj.right(90) -- Turn Right</b>
        Rotates the turtle 90 degrees to the <b style="background-color:#d9d9d9">[:click-incorrect:counterclockwise(left):endclick: / :click-correct:clockwise(right):endclick:]</b> to prepare for drawing the vertical line.
    (11) <b>turtle_obj.forward(height) -- Draw Vertical Line</b>
        Moves the turtle forward by the value of height to draw the vertical line of the T.

.. raw:: html

    <p>Click on the following link to finish the next puzzle: <a id="pp2" href="pps-SE-pp2.html"><font size="+1"><b>Mixed-up Puzzle 2</b></font></a></p>

.. raw:: html

    <script type="text/javascript">

    document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('pp2');

    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        
        // Find all elements with class 'alert alert-info'
        const alerts = document.querySelectorAll('.alert.alert-info');

        // Check if any of these elements contain the text "You are Correct!"
        const isTextPresent = Array.from(alerts).some(alert => alert.textContent.trim() === 'You are Correct!');

        if (isTextPresent) {
            // Allow navigation
            window.location.href = 'pps-SE-pp2.html'; // Change this to your actual link
        } else {
            // Show a pop-up message
            alert('Please try again to complete the explanation question. Remember, you can use the feedback to help you finish it.');
            
            }
        });
    });

    </script>
