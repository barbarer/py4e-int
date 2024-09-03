Complete the following sections to get an explanation for the completed puzzle
==============================================================================

.. clickablearea:: SE_tutles_4
    :question: Complete the following sections to get an explanation for the completed puzzle:
    :prim_comp: ASSIGNMENT
    :iscode:
    :feedback: 


    Here is a completed function:
    <img src="https://i.postimg.cc/wBBP408t/draw-diamond.png" width="500">

    (1) <b>from turtle import * -- Importing Turtle Graphicss</b>
        Use import * to import all functions, classes, and variables from the Turtle graphics library into the current namespace.
    (2) <b>def draw_diamond(turtle, xpos, ypos, length, color): -- Function Definition</b>
        Defines a function named draw_diamond that takes five parameters: turtle (a Turtle object), xpos and ypos (coordinates for position), length (side length of the diamond), and color (color of the diamond).
    (3) <b>turtle.penup() -- Lift Pen Up</b>
        Lifts the turtle's pen so that it <b style="background-color:#d9d9d9">[:click-correct:does now draw:endclick: / :click-incorrect:draws:endclick:]</b> while moving to the start position.
    (4) <b>turtle.goto(xpos, ypos) -- Move to Start Position</b>
        Use .goto() to move the turtle to the specified (xpos, ypos) coordinates.
    (5) <b>turtle.left(45) -- Rotate for Diamond Orientation</b>
        Rotates the turtle left by 45 degrees to orient it for drawing the diamond.
    (6) <b>turtle.pendown() -- Lower Pen Down</b>
        Lowers the pen so that the turtle will <b style="background-color:#d9d9d9">[:click-incorrect:not draw:endclick: / :click-correct:start drawing:endclick:]</b> when it moves.
    (7) <b>turtle.color(color) -- Set Pen Color</b> 
        Sets the color of the turtle’s pen to the specified color stored in the variable color.
    (8) <b>turtle.begin_fill() -- Start Filling a Shape with a Color</b> 
        Use <b style="background-color:#d9d9d9">[:click-incorrect:.beginfill():endclick: / :click-correct:.begin_fill():endclick:]</b> to start the filling process, so the shape will be filled with the specified color when completed.
    (9) <b>for i in range(4): -- A Loop to Draw the Outline of the Diamond</b> 
        Starts a loop that will iterate <b style="background-color:#d9d9d9">[:click-incorrect:five:endclick: / :click-correct:four:endclick:]</b> times to draw the four sides of the diamond.
    (10) <b>turtle.forward(length) -- Move Forward to Draw the Outline of the Shape</b> 
        Moves the turtle forward by the specified length to draw one side of the diamond.
    (11) <b>turtle.left(90) -- Turn 90 Degrees Left</b> 
        Turns the turtle left by 90 degrees to prepare for drawing the <b style="background-color:#d9d9d9">[:click-correct:next:endclick: / :click-incorrect:current:endclick:]</b> side.
    (12) <b>turtle.end_fill() -- End Filling the Shape with the Color</b> 
        Use <b style="background-color:#d9d9d9">[:click-incorrect:.beginfill():endclick: / :click-correct:.end_fill():endclick:]</b> to end the filling process, completing the filled shape with the specified color.


.. raw:: html

    <p>Click on the following link to finish the posttest: <a id="posttest" href="pps-posttest.html"><font size="+1"><b>Posttest</b></font></a></p>

.. raw:: html

    <script type="text/javascript">


    document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('posttest');

    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        
        // Find all elements with class 'alert alert-info'
        const alerts = document.querySelectorAll('.alert.alert-info');

        // Check if any of these elements contain the text "You are Correct!"
        const isTextPresent = Array.from(alerts).some(alert => alert.textContent.trim() === 'You are Correct!');

        if (isTextPresent) {
            // Allow navigation
            window.location.href = 'pps-posttest.html'; // Change this to your actual link
        } else {
            // Show a pop-up message
            alert('Please try again to complete the explanation question. Remember, you can use the feedback to help you finish it.');
            
            }
        });
    });

    </script>