Here is an explanation for the completed puzzle
================================================

.. clickablearea:: IE_tutles_4
    :question: Complete the following sections to get an explanation for the completed puzzle:
    :prim_comp: ASSIGNMENT
    :iscode:
    :feedback:  

    Here is a completed function:
    <img src="https://i.postimg.cc/0N3YRDTP/create-rectangle.png" width="400">

    (1) <b>from turtle import * -- Importing Turtle Graphicss</b>
        Use import * to import all functions, classes, and variables from the Turtle graphics library into the current namespace.
    (2) <b>space = Screen() -- Screen Initialization</b>
        Initializes a Screen() object named space. This object creates a window where the turtle graphics will be displayed.
    (3) <b>alex = Turtle() -- Turtle Initialization</b>
        Initializes a Turtle object named alex using Turtle(). 
        alex is a variable used to name an object of the Turtle class.
        This allows you to control and use that specific turtle object to perform various drawing operations.
    (4) <b>def create_rectangle(turtle): -- Function Definition</b>
        Defines a function named create_rectangle that takes a single parameter turtle, which is expected to be a Turtle object.
    (5) <b>for i in range(2): -- Loop Through Iterations</b>
        Starts a loop that will iterate twice. 
        Each iteration draws two sides of the rectangle.
    (6) <b>turtle.forward(40) -- Draw Width of Rectangle</b>
        Moves the turtle forward by 40 units to draw one of the shorter sides of the rectangle (width).
    (7) <b>turtle.left(90) -- Turn 90 Degrees Left</b>
        Turns the turtle left by 90 degrees to prepare for drawing the next side of the rectangle.
    (8) <b>turtle.forward(90) -- Draw Height of Rectangle</b>
        Moves the turtle forward by 90 units to draw one of the longer sides of the rectangle (height).
    (9) <b>turtle.left(90) -- Turn 90 Degrees Left Again</b> 
        Turns the turtle left by 90 degrees to prepare for drawing the next side. 
        This completes one iteration of the loop and half of the rectangle.
    (10) <b>create_rectangle(alex) -- Call Function</b> 
        Calls the create_rectangle function after creating it with the specified turtle object alex to draw a rectangle.



.. raw:: html

    <p>Click on the following link to finish the posttest: <a id="posttest" href="pps-posttest.html"><font size="+1"><b>Posttest</b></font></a></p>

.. .. raw:: html

..     <script type="text/javascript">


..     document.addEventListener('DOMContentLoaded', () => {
..     const link = document.getElementById('posttest');

..     link.addEventListener('click', (event) => {
..         event.preventDefault(); // Prevent default link behavior
        
..         // Find all elements with class 'alert alert-info'
..         const alerts = document.querySelectorAll('.alert.alert-info');

..         // Check if any of these elements contain the text "You are Correct!"
..         const isTextPresent = Array.from(alerts).some(alert => alert.textContent.trim() === 'You are Correct!');

..         if (isTextPresent) {
..             // Allow navigation
..             window.location.href = 'pps-posttest.html'; // Change this to your actual link
..         } else {
..             // Show a pop-up message
..             alert('Please try again to complete the explanation question. Remember, you can use the feedback to help you finish it.');
            
..             }
..         });
..     });

..     </script>