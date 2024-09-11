Here is an explanation for the completed puzzle
================================================

.. clickablearea:: IE_tutles_2
    :question: An explanation for the completed puzzle:
    :prim_comp: ASSIGNMENT
    :iscode:
    :feedback: 


    Here is a completed function:
    <img src="https://i.postimg.cc/L6dc4tf7/create-hexagon.png" width="400">

    (1) <b>from turtle import * -- Importing Turtle Graphicss</b>
        Use import * to import all functions, classes, and variables from the Turtle graphics library into the current namespace.
    (2) <b>space = Screen() -- Screen Initialization</b>
        Initializes a Screen() object named space. This object creates a window where the turtle graphics will be displayed.
    (3) <b>alex = Turtle() -- Turtle Initialization</b>
        Initializes a Turtle object named alex using Turtle(). 
        alex is a variable used to name an object of the Turtle class.
        This allows you to control and use that specific turtle object to perform various drawing operations.
    (4) <b>def create_hexagon(turtle): -- Hexagon Function Definition</b>
        Defines a function called create_hexagon that takes a Turtle object (turtle) as an argument.
    (5) <b>for i in range(0, 6): -- Loop for Hexagon Sides</b>
        Initializes a loop that will iterate 6 times, corresponding to the 6 sides of a hexagon.
        The range(0, 6) function generates a sequence of numbers starting from 0 and stopping before 6 (i.e., 0, 1, 2, 3, 4, 5).
    (6) <b>turtle.forward(50) -- Draw One Side</b>
        During each iteration, the Turtle object moves forward by 50 units, drawing one side of the hexagon.
    (7) <b>turtle.left(60) -- Turn for Next Side</b> 
        The turtle.left(angle) rotates the turtle counterclockwise(left) by the specified angle in degrees
        After drawing each side, the Turtle object turns 60 degrees to the left, setting up the correct angle for the next side of the hexagon.
    (8) <b>create_hexagon(alex) -- Call Hexagon Function</b> 
        Calls the create_hexagon function, passing the Turtle object alex as an argument. This initiates the drawing of the hexagon.

What to do next
^^^^^^^^^^^^^^^


.. raw:: html

    <p>Click on the following link to finish the next puzzle: <a id="pp3" href="pps-IE-pp3.html"><font size="+1"><b>Mixed-up Puzzle 3</b></font></a></p>

.. .. raw:: html

..     <script type="text/javascript">


..     document.addEventListener('DOMContentLoaded', () => {
..     const link = document.getElementById('pp3');

..     link.addEventListener('click', (event) => {
..         event.preventDefault(); // Prevent default link behavior
        
..         // Find all elements with class 'alert alert-info'
..         const alerts = document.querySelectorAll('.alert.alert-info');

..         // Check if any of these elements contain the text "You are Correct!"
..         const isTextPresent = Array.from(alerts).some(alert => alert.textContent.trim() === 'You are Correct!');

..         if (isTextPresent) {
..             // Allow navigation
..             window.location.href = 'pps-IE-pp3.html'; // Change this to your actual link
..         } else {
..             // Show a pop-up message
..             alert('Please try again to complete the explanation question. Remember, you can use the feedback to help you finish it.');
            
..             }
..         });
..     });

..     </script>