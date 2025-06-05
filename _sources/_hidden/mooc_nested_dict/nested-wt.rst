Practice
=========

.. raw:: html

    <script>

        function triggerSaveClicks(callback) {
                console.log("Triggering all Save and Save & Run clicks...");

                let saveButtons = document.querySelectorAll('button');
                let saveCount = 0;

                saveButtons.forEach(button => {
                    if (button.innerText.includes('Save') || button.innerText.includes('Save & Run')) {
                        console.log(`Clicking button: ${button.innerText}`);
                        button.click();  // Simulate button click
                        saveCount++;
                    }
                });

                // Ensure logging is complete before proceeding
                setTimeout(() => {
                    console.log(`Triggered ${saveCount} Save clicks. Proceeding...`);
                    if (callback) callback();
                }, 1000);  // Wait 1 second for logging to process
        

        document.addEventListener("DOMContentLoaded", function() {
            let introLink = document.getElementById('posttest');  // Change ID if needed
            if (introLink) {
                introLink.addEventListener("click", function(event) {
                    event.preventDefault(); // Stop immediate navigation

                    console.log("User clicked the Introduction link. Saving first...");

                    // Trigger Save clicks, then navigate
                    triggerSaveClicks(() => {
                        window.location.href = introLink.href;  // Navigate after saving
                    });
                });
            }
        });

    </script>
    

.. selectquestion:: t1-mooc_nested
    :fromid: w1-mooc_nested, p1-mooc_nested
    :toggle: lock


.. selectquestion:: t2-mooc_nested
    :fromid: w2-mooc_nested, p2-mooc_nested
    :toggle: lock


.. selectquestion:: t3-mooc_nested
    :fromid: w3-mooc_nested, p3-mooc_nested
    :toggle: lock


.. selectquestion:: t4-mooc_nested
    :fromid: w4-mooc_nested, p4-mooc_nested
    :toggle: lock


What to do next
===============

.. raw:: html

    <p>Click on the following link to take the posttest: <b><a id="posttest"> <font size="+1">Posttest</font></a></b></p>

.. raw:: html

    <script type="text/javascript" >

      window.onload = function() {

        a = document.getElementById("posttest")
        a.href = "posttest.html"
      };

    </script>