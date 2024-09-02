Practice Problems
=================

.. parsonsprob:: PP_IE_tutles_1
    :numbered: left
    :adaptive:

    Create a function called ``create_T`` that takes in ``turtle`` as a parameter and moves the turtle to create the letter T.
    The width of the letter should be 100, and the height of the letter should be 150. 
    -----
    from turtle import *
    =====
    def create_T(turtle_obj):
    =====
        width = 100
        height = 150
    =====
        turtle_obj.penup()
        turtle_obj.goto(-width / 2, height / 2)
        turtle_obj.pendown()
    =====
        turtle_obj.forward(width)
    =====
        turtle_obj.backward(width / 2) 
    =====
        turtle_obj.backward(width % 2)  #paired
    =====
        turtle_obj.right(90)
    =====
        turtle_obj.forward(height)



.. raw:: html

    <p>Click on the following link to go to the explanation: <a id="ie1" href="pps-ie1.html"><font size="+1"><b>Explanation</b></font></a></p>


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
            
        if ((alertElement && alertElement.textContent.includes('Perfect!')) || clickCount >= 8) {
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
    document.getElementById('ie1').addEventListener('click', handleLinkClick);

    document.addEventListener('DOMContentLoaded', () => {
        // Get references to the button and the display element
        const checkButton = document.getElementById('parsons-1-check');
        
        // Add an event listener to the button
        checkButton.addEventListener('click', updateClickCount);
    });

    </script>