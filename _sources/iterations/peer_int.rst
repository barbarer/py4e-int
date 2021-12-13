Peer Instruction: Iterations Multiple Choice Questions
-----------------------------------------------------------------------------

.. mchoice:: ctp-reviewtest1-14_review_06
    :practice: T
    :answer_a:
    :answer_b:
    :answer_c:
    :answer_d: None of the above
    :answer_e: I don't know
    :correct: b
    :feedback_a: Try again! The string s changes after every iterations. First 'pirate ship', 'pirate ship', then 'irate ship'...
    :feedback_b: Correct! In every iteration, i adds one up. Therefore, s[i:] begins with next letter in the string. However, the string s also changes after every iterations. So the final printing obmits several letters.
    :feedback_c: Try again! The string s changes after every iterations. First 'pirate ship', 'pirate ship', then 'irate ship'... It does not follow the rule that printing the first letter in 'pirate ship', then the second letter in 'pirate ship'... Some letters are obmitted.
    :feedback_d: Try again! In every iteration, i adds one up. Therefore, s[i:] begins with next letter in the string. However, the string s also changes after every iterations. It does not follow the rule that printing the first letter in 'pirate ship', then the second letter in 'pirate ship'...
    :feedback_e: Try again! In every iteration, i adds one up. Therefore, s[i:] begins with next letter in the string. However, the string s also changes after every iterations. It does not follow the rule that printing the first letter in 'pirate ship', then the second letter in 'pirate ship'...

    What does this print?

    .. code-block:: python

        s = 'pirate ship'
        i = 0
        while(len(s) > i ):
            s = s[i:]
            i = i + 1
            print (s , i )

    ::

       A.
       pirate ship 1
       irate ship 2
       rate ship 3
       ate ship 4
       te ship 5
       e ship 6

    ::

        B.
        pirate ship 1
        irate ship 2
        ate ship 3
         ship 4
        p 5

    ::

        C.
        pirate ship 1
        irate ship 2
        rate ship 3
        ate ship 4
        te ship 5
        e ship 6
         ship 7
        ship 8
        hip 9
        ip 10
        p 11


.. mchoice:: ctp-reviewtest1-14_review_10
    :practice: T
    :answer_a: y == 11
    :answer_b: y != 11
    :answer_c: y > 11
    :answer_d: y and 11
    :answer_e: I don't know
    :correct: b
    :feedback_a: Try again! This will evaluate to False if y is not equal to 11.
    :feedback_b: Correct! This will evaluate to False if and only if y is equal to 11.
    :feedback_c: Try again! This will evaluate to False if y is equal to or smaller than 11.
    :feedback_d: Try again! This is not a boolean expression.
    :feedback_e: Try again! An expression evaluates to False means its opposite expression is True. Therefore, try to find an expression that will evaluate to True if y it not equal to 11.

    Write a boolean expression that will evaluate to False if and only if y is equal to 11.
