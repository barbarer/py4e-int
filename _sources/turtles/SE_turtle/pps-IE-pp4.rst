Practice Problems
=================

.. parsonsprob:: PP_IE_tutles_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``draw_diamond`` that takes in parameters ``turtle``, ``xpos``, ``ypos``, ``length``, and ``color`` and creates a diamond
    at any given position with color ``color`` and side lengths of ``length``. 
    -----
    from turtle import *
    def draw_diamond(turtle, xpos, ypos, length, color):
    =====
        turtle.penup()
        turtle.goto(xpos, ypos)
    =====
        turtle.left(45)
    =====
        turtle.left(90) #paired
    =====
        turtle.pendown()
    =====
        turtle.color(color)
    =====
        turtle.side(color) #paired
    =====
        turtle.begin_fill()
    =====
        for i in range(4):
            turtle.forward(length)
            turtle.left(90)
    =====
        turtle.end_fill()

.. raw:: html

    <p>Click on the following link to go to the explanation: <a id="ie4" href="pps-ie4.html"><font size="+1"><b>Explanation</b></font></a></p>


.. raw:: html

    <script type="text/javascript">

    // Initialize a counter variable at a higher scope
    let clickCount = 0;

    // Function to update the click count
    function updateClickCount() {
        clickCount++;
        document.getElementById('clickCount').textContent = `Times Clicked: ${clickCount}`;
    }

    // Function to check for presence of button and handle the link click
    function handleLinkClick(event) {
        // Check if an element with the class 'alert alert-info' contains the text 'Perfect!'
        const alertElement = document.querySelector('.alert');
            
        if ((alertElement && alertElement.textContent.includes('Perfect!')) || clickCount >= 5) {
            // Allow the link to be followed
            return true;
        } else {
            // Prevent the default link action
            event.preventDefault();
            
            // Display a popup window
            alert('Please try again to complete the mixed-up puzzle first.' + "\n" + 'Remember, you can click the "Help me" button to remove an unnecessary block or combine two blocks.' + "\n" + ' You can skip the puzzle after 8 attempts.');
            return false;
        }
    }

    // Attach the click event handler to the link
    document.getElementById('ie4').addEventListener('click', handleLinkClick);

    document.addEventListener('DOMContentLoaded', () => {
        // Get references to the button and the display element
        const checkButton = document.getElementById('parsons-1-check');
        
        // Add an event listener to the button
        checkButton.addEventListener('click', updateClickCount);
    });

    </script>