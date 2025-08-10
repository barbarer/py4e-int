Python 3 with Nested Dictionaries
=====================================
Welcome to the Python 3 with Nested Dictionaries study! 
This study is part of a research project at the University of Michigan, and your participation will contribute to our understanding of how students learn programming concepts.
We are researchers at the University of Michigan who are trying to improve the teaching and learning of programming.

Purpose of this Study
^^^^^^^^^^^^^^^^^^^^^^^^^^
The purpose of this study is to understand how students learn to write code in Python, specifically focusing on nested dictionaries. We are exploring the effect of different types of help on students' coding skills.

Study Procedure
^^^^^^^^^^^^^^^^^^^^^^^
This study has five parts. It will take approximately 55 minutes to complete it. Please do the parts in order and answer questions to the best of your ability.

The five parts are:
   - Brief Knowledge Review (5 mins) - A brief overview of nested dictionaries.
   - Pre survey (3 mins) - a self-efficacy survey for computing (6 questions) and 5 self-evaluation questions about your familiarity with nested dictionaries.
   - Introduction to the Practice Types (3 mins) - An introduction to the type of practice problems you may see during practice.
   - Practice (32 mins) - Complete 4 write-code practice problems, followed by a survey question if applicable.
   - Wrap-Up Check (12 mins) - Help is not available during the wrap-up check. It includes 1 short answer, and 2 write-code problems.

Participant Requirements
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To participate in this study you must
   - be at least 18 years old
   - have a basic understanding of Python programming, including concepts such as variables, loops, and functions.
   - be able to use a web browser to access the study materials and complete the tasks.
   - be able to complete the study in one sitting, as it is designed to be completed in approximately 55 minutes.
   - not use any external resources, such as textbooks or online forums, to complete the tasks in the study. This includes not using AI tools like ChatGPT for assistance.

Confidentiality
^^^^^^^^^^^^^^^^^^^^^^^
We may use your anonymized log data for our research studies. No personally identifiable information will be included in the log file. Your responses will be kept confidential and will not be linked to your identity. The data will be stored securely.

Risks
^^^^^^^^^^^^^^^^^
The risks and discomfort associated with participation in this study are no greater than those ordinarily encountered in daily life or during other online activities.

Benefits
^^^^^^^^^^^^^^^^^
You will receive additional practice with Python programming, specifically with nested dictionaries.

Rights
^^^^^^^^^^^^^^^^^
Your participation in this study is voluntary. You have the right to withdraw at any time without penalty. Refusal to participate or withdrawal of your consent or discontinued participation in the study will not result in any penalty or loss of benefits or rights to which you might otherwise be entitled.

If you have any questions about the study, please contact the research team at barbarer@umich.edu or xyhou@umich.edu.

Voluntary Consent
^^^^^^^^^^^^^^^^^

By clicking below, you agree that the above information has been explained to you and all your current questions have been answered. You are encouraged to ask questions about any aspect of this research study during the course of the study and in the future. By clicking below, you agree to participate in this research study. 

.. poll:: consent
   :option_1: I am at least 18 years old. I confirm that I meet the eligibility criteria for this study to the best of my knowledge and understand its purpose, potential benefits, and risks. All my questions have been answered, and I know I can ask more at any time.
   :results: instructor
   
   Please check the box below to indicate that you have read and understood the information provided above and agree to participate in this study.


What to do next
===================

.. raw:: html


      <p> Click on the following link to take the knowledge review:
      <b><a id="review"><font size="+1">Knowledge Review</font></a></b>
      </p>

      <script type="text/javascript">
      window.onload = function() {
         const reviewLink = document.getElementById("review");
         reviewLink.href = "#"; // Prevent default navigation for now

         reviewLink.onclick = function(event) {
            const consent_sent = document.getElementById('consent_sent');

            if (!consent_sent) {
            alert('Please check the consent form before moving to the next.');
            event.preventDefault();
            return false;
            }

            // If all elements exist, proceed to review.html
            window.location.href = "mc_review.html";
         };
      };
      </script>
