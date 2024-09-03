Practice Problems
=================

.. parsonsprob:: PP_SE_tutles_1
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

    <p>Click on the following link to go to the explanation question: <a id="pp-e1" href="pps-ppe1.html"><font size="+1"><b>Explanation Question</b></font></a></p>


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

        const linkElement = document.getElementById('pp-e1');
        if (linkElement) {
            linkElement.addEventListener('click', handleLinkClick);
        } else {
            console.error('Element with ID "pp-e1" not found.');
        }
    });

    </script>