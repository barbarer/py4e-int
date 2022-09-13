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

     <h4>Click on the following link to start practice 👉 <b><a id="fl-next-cls">Practice Problems</a></b></h4>

.. raw:: html

    <script type="text/javascript" >

      window.onload = function() {

        a = document.getElementById("fl-next-cls")

        // randomly pick one of two relative urls
        var v = Math.floor(Math.random() * 9) + 1;
        if (v % 2 == 0)
        {
              a.href = "fl-toggle-cls.html"
        }
        else
        {
               a.href = "fl-write-cls.html"
        }

        };
    </script>
