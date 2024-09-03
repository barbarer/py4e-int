Here is an explanation for the completed puzzle
================================================

.. clickablearea:: IE_tutles_3
    :question: An explanation for the completed puzzle:
    :prim_comp: ASSIGNMENT
    :iscode:
    :feedback: 

    Here is a completed function:
    <img src="https://i.postimg.cc/W18C7xKL/draw-triangle.png" width="500">

    (1) <b>from turtle import * -- Importing Turtle Graphicss</b>
        Use import * to import all functions, classes, and variables from the Turtle graphics library into the current namespace.
    (2) <b>space = Screen() -- Screen Initialization</b>
        Initializes a Screen() object named space. This object creates a window where the turtle graphics will be displayed.
    (3) <b>alex = Turtle() -- Turtle Initialization</b>
        Initializes a Turtle object named alex using Turtle(). 
        alex is a variable used to name an object of the Turtle class.
        This allows you to control and use that specific turtle object to perform various drawing operations.
    (4) <b>def draw_triangle(turtle, length, three_colors_list): -- Function Definition</b>
        Defines a function called draw_triangle that takes in a turtle object, the length of the triangle sides, and a list of three colors.
    (5) <b>for i in range(3): -- Loop for Three Sides</b>
        Sets up a loop to iterate three times (i.e., 0, 1, 2), once for each side of the triangle.    
        i will take on values 0, 1, and 2 in successive iterations.
    (6) <b>turtle.color(three_colors_list[i]) -- Set Pen Color</b>
        By iterating over the index 0 to 2, the loop variable i is used to access each color in three_colors_list.
        Each three_colors_list[i] access the current color in the list and change the pen color of the turtle to that color.
    (7) <b>turtle.forward(length) -- Draw Side</b> 
        Moves the turtle forward by the specified length to draw a side of the triangle.    
    (8) <b>turtle.right(120) -- Turn Turtle to the right</b> 
        Rotates the turtle to the right by a 120 degrees.
        This determines the direction the turtle will face for the next iteration.
    (9) <b>draw_triangle(alex, 50, ["blue", "green", "yellow"]) -- Call Function</b> 
        Calls the draw_triangle function with the specified turtle object, side length, and list of colors to draw an equilateral triangle.


.. raw:: html

    <p>Click on the following link to finish the next puzzle: <a id="pp4" href="pps-IE-pp4.html"><font size="+1"><b>Mixed-up Puzzle 4</b></font></a></p>

.. .. raw:: html

..     <script type="text/javascript">

..     document.addEventListener('DOMContentLoaded', () => {
..     const link = document.getElementById('pp4');

..     link.addEventListener('click', (event) => {
..         event.preventDefault(); // Prevent default link behavior
        
..         // Find all elements with class 'alert alert-info'
..         const alerts = document.querySelectorAll('.alert.alert-info');

..         // Check if any of these elements contain the text "You are Correct!"
..         const isTextPresent = Array.from(alerts).some(alert => alert.textContent.trim() === 'You are Correct!');

..         if (isTextPresent) {
..             // Allow navigation
..             window.location.href = 'pps-IE-pp4.html'; // Change this to your actual link
..         } else {
..             // Show a pop-up message
..             alert('Please try again to complete the explanation question. Remember, you can use the feedback to help you finish it.');
            
..             }
..         });
..     });

..     </script>