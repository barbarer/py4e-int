Your self-efficacy in Computer Science
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. poll:: SE-CS-self-efficacy-1
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    Generally I have felt secure about attempting computer programming problems.

.. poll:: SE-CS-self-efficacy-2
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I am sure I could do advanced work in computer science.

.. poll:: SE-CS-self-efficacy-3
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I am sure that I can learn programming.

.. poll:: SE-CS-self-efficacy-4
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I think I could handle more difficult programming problems.

.. poll:: SE-CS-self-efficacy-5
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I can get good grades in computer science.

.. poll:: SE-CS-self-efficacy-6
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I have a lot of self-confidence when it comes to programming.


Your familiarity with the turtle module
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

For the next four questions, please select the answer that best matches your familiarity and confidence about the specified concept(s).

.. poll:: turtle-1
    :option_1: I am unfamiliar with this concept
    :option_2: I know what it means, but have not used it in a program
    :option_3: I have used this concept in a program, but am not confident about my ability to use it
    :option_4: I am confident in my ability to use this concept in simple programs
    :option_5: I am confident in my ability to use this concept in complex programs
    :results: instructor

    Moves the turtle forward like <code>forward()</code>

.. poll:: turtle-2
    :option_1: I am unfamiliar with this concept
    :option_2: I know what it means, but have not used it in a program
    :option_3: I have used this concept in a program, but am not confident about my ability to use it
    :option_4: I am confident in my ability to use this concept in simple programs
    :option_5: I am confident in my ability to use this concept in complex programs
    :results: instructor

    Creates a turtle drawing area like <code>Screen()</code>

.. poll:: turtle-3
    :option_1: I am unfamiliar with this concept
    :option_2: I know what it means, but have not used it in a program
    :option_3: I have used this concept in a program, but am not confident about my ability to use it
    :option_4: I am confident in my ability to use this concept in simple programs
    :option_5: I am confident in my ability to use this concept in complex programs
    :results: instructor

    Turns the turtle like <code>left(angle)</code>

.. poll:: turtle-4
    :option_1: I am unfamiliar with this concept
    :option_2: I know what it means, but have not used it in a program
    :option_3: I have used this concept in a program, but am not confident about my ability to use it
    :option_4: I am confident in my ability to use this concept in simple programs
    :option_5: I am confident in my ability to use this concept in complex programs
    :results: instructor

    Sets the turtle's pen color like <code>color(color)</code>



What to do next
^^^^^^^^^^^^^^^^
.. raw:: html

    <p>Click on the following link to learn how to solve different types of problems in this ebook : <b><a id="tutle_SE-intro"><font size="+1">Introduction to Problem Types</font></a></b></p>

.. raw:: html

   <script type="text/javascript">

        function getCookie(cookieName) {
            let name = cookieName + "=";
            // console.log("name", name)
            // console.log("Raw document.cookie:", document.cookie);
            let decodedCookie = decodeURIComponent(document.cookie);
            // console.log("decodedCookie",decodedCookie)
            let ca = decodedCookie.split(';');
            // console.log("ca",ca)
            for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
            }
            return "";
        }

        function setCookie(cookieName, cvalue) {
            document.cookie = cookieName + "=" + cvalue + ";";
        }

        window.onload = function() {

            a = document.getElementById("tutle_SE-intro")

            // get prev set cookie
            // Example:
            // console.log("Code is running");

            var cond = getCookie(EXP_COOKIE);
            // console.log("Condition from cookie: " + cond);

            var EXP_COOKIE = 'turtle_SE-sept45'
            var cond = getCookie(EXP_COOKIE);
            // console.log("Condition from cookie: " + cond);

            // if no prev set cookie: generate random condition and set cookie
            if (cond != 'ppse' && cond != 'pp'  && cond != 'ppie') {
            // Generate a random number between 0 and 1
            var randomIndex = Math.floor(Math.random() * 3);
            // Define the groups in an array
            var groups = ['ppse', 'pp', 'ppie'];
            // Use the random index to select a group
            var cond = groups[randomIndex];
            setCookie(EXP_COOKIE, cond);
            }

            if (cond == 'ppse') {
            a.href = "pp-intro-SE.html"
            } else if (cond == 'pp') {
            a.href = "pp-intro-PP.html"
            } else if (cond == 'ppie') {
            a.href = "pp-intro-IE.html"
            }
        };
   </script>


