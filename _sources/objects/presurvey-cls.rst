Pre Survey
-----------------------------------------------------

Think about **yourself and your learning** when answering the following questions.

==============

.. poll:: CS-self-efficacy-1-cls
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    Generally I have felt secure about attempting computer programming problems.

.. poll:: CS-self-efficacy-2-cls
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I am sure I could do advanced work in computer science.

.. poll:: CS-self-efficacy-3-cls
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I am sure that I can learn programming.

.. poll:: CS-self-efficacy-4-cls
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I think I could handle more difficult programming problems.

.. poll:: CS-self-efficacy-5-cls
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I can get good grades in computer science.

.. poll:: CS-self-efficacy-6-cls
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I have a lot of self-confidence when it comes to programming.


For the next questions please select the answer that best
matches your familiarity and confidence
about the specified concept(s).

.. poll:: class-obj-7
    :option_1: I am unfamiliar with these concepts
    :option_2: I know what they mean, but have not used them in a program
    :option_3: I have used these concepts in a program, but am not confident about my ability to use them
    :option_4: I am confident in my ability to use these concepts in simple programs
    :option_5: I am confident in my ability to use these concepts in complex programs
    :results: instructor

    Creating classes like <code>class Person:</code> and objects like <code>p = Person("Barb Ericson")</code>

.. poll:: class-obj-8
    :option_1: I am unfamiliar with these concepts
    :option_2: I know what they mean, but have not used them in a program
    :option_3: I have used these concepts in a program, but am not confident about my ability to use them
    :option_4: I am confident in my ability to use these concepts in simple programs
    :option_5: I am confident in my ability to use these concepts in complex programs
    :results: instructor

    Methods like <code>__init__</code> and <code>__str__</code>

.. poll:: class-obj-9
    :option_1: I am unfamiliar with this concept
    :option_2: I know what it means, but have not used it in a program
    :option_3: I have used this concept in a program, but am not confident about my ability to use it
    :option_4: I am confident in my ability to use this concept in simple programs
    :option_5: I am confident in my ability to use this concept in complex programs
    :results: instructor

    The use of  <code>self</code> in class

.. poll:: class-obj-10
    :option_1: I am unfamiliar with this concept
    :option_2: I know what it means, but have not used it in a program
    :option_3: I have used this concept in a program, but am not confident about my ability to use it
    :option_4: I am confident in my ability to use this concept in simple programs
    :option_5: I am confident in my ability to use this concept in complex programs
    :results: instructor

    Defining instance variables like <code>self.color = color</code>

Thanks for filling this survey and let us know you better!

What to do next
============================
.. raw:: html

     <h4>Click on the following link to start practice 👉 <b><a id="class-practice">Practice Problems</a></b></h4>

.. raw:: html

   <script type="text/javascript">

     function getCookie(cookieName) {
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
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

        a = document.getElementById("class-practice")

        // get prev set cookie
        var EXP_COOKIE = 'class-exp-we-or-pp'
        var cond = getCookie(EXP_COOKIE);

        // if no prev set cookie: generate random condition and set cookie
        if (cond != 'pp' && cond != 'we') {
           var v = Math.floor(Math.random() * 2);
           if (v < 1) {
               cond = 'pp';
           } else {
               cond = 'we';
           }
           setCookie(EXP_COOKIE, cond);
        }

        if (cond == 'pp') {
           a.href = "practice-toggle-pp-cls.html"
        } else if (cond == 'we') {
           a.href = "practice-toggle-we-cls.html"
        }
     };
   </script>

