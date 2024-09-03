
.. clickablearea:: SE_tutles_2
    :question: Complete this section to get an explanation for the previous puzzle
    :prim_comp: ASSIGNMENT
    :iscode:
    :feedback: (1) Think about how to import all functions from the Turtle graphics library. (3) Think about the type of alex in the function call. Think about the type of Turtle() from the turtle module. (5) Think about the loop range by start and stop values. (6) Think about the purpose of the left() function.
    
    Here is a completed function:
    <img src="https://i.postimg.cc/L6dc4tf7/create-hexagon.png" width="450">

    (1) <b>from turtle import * -- Importing Turtle Graphicss</b>
        Use <b style="background-color:#d9d9d9">[:click-correct:import *:endclick: / :click-incorrect:import all:endclick: / :click-incorrect:Import All:endclick:]</b> to import all functions, classes, and variables from the Turtle graphics library into the current namespace.
    (2) <b>space = Screen() -- Screen Initialization</b>
        Initializes a Screen object named space. This object creates a window where the turtle graphics will be displayed.
    (3) <b>alex = Turtle() -- Turtle Initialization</b>
        Initializes a Turtle object named alex using Turtle(). alex is a <b style="background-color:#d9d9d9">[:click-correct:variable:endclick: / :click-incorrect:method:endclick:]</b> used to name an object of the Turtle <b style="background-color:#d9d9d9">[:click-correct:class:endclick: / :click-incorrect:variable:endclick:]</b>.
        This allows you to control and use that specific turtle object to perform various drawing operations.
    (4) <b>def create_hexagon(turtle): -- Hexagon Function Definition</b>
        Defines a function called create_hexagon that takes a Turtle object (turtle) as an argument.
    (5) <b>for i in range(0, 6): -- Loop for Hexagon Sides</b>
        Initializes a loop that will iterate <b style="background-color:#d9d9d9">[:click-correct:6:endclick: / :click-incorrect:7:endclick: / :click-incorrect:5:endclick:]</b> times, corresponding to the 6 sides of a hexagon.
        The range(0, 6) function generates a sequence of numbers starting from <b style="background-color:#d9d9d9">[:click-correct:0:endclick: / :click-incorrect:1:endclick:]</b> and stopping before 6 (i.e., 0, 1, 2, 3, 4, 5).
    (6) <b>turtle.forward(50) -- Draw One Side</b>
        During each iteration, the Turtle object moves forward by 50 units, drawing one side of the hexagon.
    (7) <b>turtle.left(60) -- Turn for Next Side</b> 
        The turtle.left(angle) rotates the turtle <b style="background-color:#d9d9d9">[:click-correct:counterclockwise(left):endclick: / :click-incorrect:clockwise(right):endclick:]</b> by the specified angle in degrees
        After drawing each side, the Turtle object turns 60 degrees to the left, setting up the correct angle for the next side of the hexagon.
    (8) <b>create_hexagon(alex) -- Call Hexagon Function</b> 
        Calls the create_hexagon function, passing the Turtle object alex as an argument. This initiates the drawing of the hexagon.


.. raw:: html

    <p>Click on the following link to finish the next puzzle: <a id="pp3" href="pps-SE-pp3.html"><font size="+1"><b>Mixed-up Puzzle 3</b></font></a></p>

.. raw:: html

    <script type="text/javascript">


    document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('pp3');

    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        
        // Find all elements with class 'alert alert-info'
        const alerts = document.querySelectorAll('.alert.alert-info');

        // Check if any of these elements contain the text "You are Correct!"
        const isTextPresent = Array.from(alerts).some(alert => alert.textContent.trim() === 'You are Correct!');

        if (isTextPresent) {
            // Allow navigation
            window.location.href = 'pps-SE-pp3.html'; // Change this to your actual link
        } else {
            // Show a pop-up message
            alert('Please try again to complete the explanation question. Remember, you can use the feedback to help you finish it.');
            
            }
        });
    });

    </script>