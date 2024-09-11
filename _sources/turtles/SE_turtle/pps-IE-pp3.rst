Practice Problems
=================

.. parsonsprob:: PP_IE_tutles_3
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


What to do next
^^^^^^^^^^^^^^^

.. raw:: html

    <p>Click on the following link to go to the explanation: <a id="ie3" href="pps-ie3.html"><font size="+1"><b>Explanation</b></font></a></p>


.. raw:: html

       <script type="text/javascript">

    document.addEventListener('DOMContentLoaded', () => {
        let isC8 = false;

        // Override the console.log function to capture the log event
        const originalConsoleLog = console.log;
        console.log = function (message) {
            // Call the original console.log function to ensure the message still appears in the console
            originalConsoleLog.apply(console, arguments);

            // Check if the message contains the specific pattern
            if (message.includes('Save logging event')) {
                // Extract the JSON part from the log message
                const jsonString = message.substring(message.indexOf('{'));
                checkActValue(jsonString);
            }
        };

        function checkActValue(loggingEvent) {
            try {
                const eventObj = JSON.parse(loggingEvent);
                const actValue = eventObj.act;
                const lastPart = actValue.split('|').pop();
                if (lastPart === "c8") {
                    isC8 = true;
                }
                console.log(`Last part of act: ${lastPart}, isC8: ${isC8}`);
            } catch (error) {
                console.error('Error parsing the logging event:', error);
            }
        }

        function handleLinkClick(event) {
            const alertElement = document.querySelector('.alert');
            if ((alertElement && alertElement.textContent.includes('Perfect!')) || isC8) {
                return true;
            } else {
                event.preventDefault();
                alert('Please try again to complete the mixed-up puzzle first.' + "\n" + 'Remember, you can click the "Help me" button to remove an unnecessary block or combine two blocks.' + "\n" + 'You can skip the puzzle after 8 attempts.');
                return false;
            }
        }

        const linkElement = document.getElementById('ie3');
        if (linkElement) {
            linkElement.addEventListener('click', handleLinkClick);
        } else {
            console.error('Element with ID "ie3" not found.');
        }
    });

    </script>