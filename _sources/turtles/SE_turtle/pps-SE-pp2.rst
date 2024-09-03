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

        const linkElement = document.getElementById('pp-e2');
        if (linkElement) {
            linkElement.addEventListener('click', handleLinkClick);
        } else {
            console.error('Element with ID "pp-e2" not found.');
        }
    });

    </script>