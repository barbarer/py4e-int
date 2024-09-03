Practice Problems
=================

.. parsonsprob:: PP_SE_tutles_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``draw_triangle`` that takes in parameters ``turtle``, ``length``, and ``three_colors_list`` and moves the ``turtle``
    to create a triangle with side lengths of ``length`` and in which the pen color changes for each side. Create a Screen object and a Turtle object first. 
    After creating the function, call ``draw_triangle`` with arguments ``length = 50``, ``three_colors_list = ["blue", "green", "yellow"]``, and the Turtle object.
    -----
    from turtle import *
    space = Screen()
    alex = Turtle()
    =====
    def draw_triangle(turtle, length, three_colors_list):
    =====
        for color in three_colors_list:
    =====
        for i in range(3): #paired
    =====
            turtle.color(color)
    =====
            turtle.side(three_colors_list[i]) #paired
    =====
            turtle.forward(length)
    =====
            turtle.right(120)
    =====
    draw_triangle(alex, 50, ["blue", "green", "yellow"])



.. raw:: html

    <p>Click on the following link to go to the explanation question: <a id="pp-e3" href="pps-ppe3.html"><font size="+1"><b>Explanation Question</b></font></a></p>


.. raw:: html

    <script type="text/javascript">

    // Initialize a counter variable at a higher scope
    let clickCount = 0;

    // Function to update the click count
    function updateClickCount() {
        clickCount++;
        // Here you would usually update the UI, but it's not needed now
        console.log(`Button clicked ${clickCount} times`);
    }

    // Function to check for presence of button and handle the link click
    function handleLinkClick(event) {
        // Check if an element with the class 'alert alert-info' contains the text 'Perfect!'
        const alertElement = document.querySelector('.alert');
            
        if ((alertElement && alertElement.textContent.includes('Perfect!')) || clickCount >= 8) {
            // Allow the link to be followed
            return true;
        } else {
            // Prevent the default link action
            event.preventDefault();
            
            // Display a popup window
            alert('Please try again to complete the mixed-up puzzle first.' + "\n" + 'Remember, you can click the "Help me" button to remove an unnecessary block or combine two blocks.' + "\n" + 'You can skip the puzzle after 8 attempts.');
            return false;
        }
    }

    // Attach the click event handler to the link
    document.getElementById('pp-e1').addEventListener('click', handleLinkClick);

    document.addEventListener('DOMContentLoaded', () => {
        // Get references to the button
        const checkButton = document.getElementById('parsons-1-check');
        
        // Check if the button was found
        if (checkButton) {
            // Add an event listener to the button
            checkButton.addEventListener('click', updateClickCount);
        } else {
            console.error('Button with ID "parsons-1-check" not found.');
        }
    });

    </script>