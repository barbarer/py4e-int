
Pre Survey
==============

Please answer the following questions.

.. poll:: mooc_nested-CS-self-efficacy-1
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    Generally I have felt secure about attempting computer programming problems.

.. poll:: mooc_nested-CS-self-efficacy-2
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I am sure I could do advanced work in computer science.

.. poll:: mooc_nested-CS-self-efficacy-3
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I am sure that I can learn programming.

.. poll:: mooc_nested-CS-self-efficacy-4
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I think I could handle more difficult programming problems.

.. poll:: mooc_nested-CS-self-efficacy-5
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I can get good grades in computer science.

.. poll:: mooc_nested-CS-self-efficacy-6
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

.. poll:: mooc_nested-obj-1
    :option_1: I am unfamiliar with these concepts
    :option_2: I know what they mean, but have not used them in a program
    :option_3: I have used these concepts in a program, but am not confident about my ability to use them
    :option_4: I am confident in my ability to use these concepts in simple programs
    :option_5: I am confident in my ability to use these concepts in complex programs
    :results: instructor

    Familiarity with nested dictionaries in Python (dictionaries within dictionaries) and how they are structured.

.. poll:: mooc_nested-obj-2
    :option_1: I am unfamiliar with these concepts
    :option_2: I know what they mean, but have not used them in a program
    :option_3: I have used these concepts in a program, but am not confident about my ability to use them
    :option_4: I am confident in my ability to use these concepts in simple programs
    :option_5: I am confident in my ability to use these concepts in complex programs
    :results: instructor

    How to access values in a inner dictionary like <code>value_for_inner_key1 = nested_dict['outer_key']['inner_key1']</code>


.. poll:: mooc_nested-obj-3
    :option_1: I am unfamiliar with these concepts
    :option_2: I know what they mean, but have not used them in a program
    :option_3: I have used these concepts in a program, but am not confident about my ability to use them
    :option_4: I am confident in my ability to use these concepts in simple programs
    :option_5: I am confident in my ability to use these concepts in complex programs
    :results: instructor

    How to add a new key-value pair to a inner dictionary of the given nested dictionary like <code>nested_dict['outer_key']['new_key'] = 'new_value'</code>

.. poll:: mooc_nested-obj-4
    :option_1: I am unfamiliar with these concepts
    :option_2: I know what they mean, but have not used them in a program
    :option_3: I have used these concepts in a program, but am not confident about my ability to use them
    :option_4: I am confident in my ability to use these concepts in simple programs
    :option_5: I am confident in my ability to use these concepts in complex programs
    :results: instructor

    How to loop through the outer items (key-value pairs) of a nested dictionary like for <code>outer_key, outer_value in nested_dict.items():</code>

.. poll:: mooc_nested-obj-5
    :option_1: I am unfamiliar with these concepts
    :option_2: I know what they mean, but have not used them in a program
    :option_3: I have used these concepts in a program, but am not confident about my ability to use them
    :option_4: I am confident in my ability to use these concepts in simple programs
    :option_5: I am confident in my ability to use these concepts in complex programs
    :results: instructor

    How to loop through the inner items of a nested dictionary like for <code>inner_key, inner_value in nested_dict['outer_key'].items():</code>

What to do next
===================

.. raw:: html

   <p>Click on the following link to go the practice problems: <b><a id="nested-practice"> <font size="+1">Practice</font></a></b></p>

.. raw:: html

   <script type="text/javascript">

     function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
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

     function setCookie(cname, cvalue) {
        document.cookie = cname + "=" + cvalue + ";";
     }

     window.onload = function() {

        a = document.getElementById("nested-practice")

        // get prev set cookie
        var EXP_COOKIE = 'mooc_nested'
        var cond = getCookie(EXP_COOKIE);

        // if no prev set cookie: generate random condition and set cookie
        if (cond != 'wt' && cond != 'nt') {
           var v = Math.floor(Math.random() * 2);
           if (v < 1) {
               cond = 'wt';
           } else {
               cond = 'nt';
           }
           setCookie(EXP_COOKIE, cond);
        }

        if (cond == 'wt') {
           a.href = "mc_nested-wt.html"
        } else if (cond == 'nt') {
           a.href = "mc_nested-nt.html"
        }
     };
   </script>