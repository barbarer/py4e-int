Practice Problems
=================

.. parsonsprob:: PP_SE_tutles_2
    :numbered: left
    :adaptive:
    :practice: T

    Create a function called ``create_hexagon`` that takes in ``turtle`` as a parameter and moves the ``turtle`` to create a hexagon.
    Each side of the hexagon should be of length 50. Create a Screen object and a Turtle object first. After creating the function, call ``create_hexagon``.
    -----
    from turtle import *
    space = Screen()
    alex = Turtle()
    =====
    def create_hexagon(turtle):
    =====
        for i in range(0, 6):
    =====
            turtle.forward(50)
    =====
            turtle = turtle.forward(50) #paired
    =====
            turtle.left(60)
    =====
            turtle = turtle.left(60) #paired
    =====
    create_hexagon(alex)

.. raw:: html

    <p>Click on the following link to go to the explanation question: <a id="pp-e2" href="pps-ppe2.html"><font size="+1"><b>Explanation Question</b></font></a></p>


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