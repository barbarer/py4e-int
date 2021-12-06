Peer Instruction: Strings Multiple Choice Questions
---------------------------------------------------

.. mchoice:: ctp-strings-11_Strings_05
   :practice: T
   :answer_a: “abcddd q”
   :answer_b: “abcddd” “” “” “q”
   :answer_c: “qdddabc”
   :answer_d: “dddabcq”
   :answer_e: I don’t know
   :correct: d
   :feedback_a: Incorrect!
   :feedback_b: Incorrect!
   :feedback_c: Incorrect!
   :feedback_d: Correct! The value of s changes in the following order from the first line- s="abc", s="dddabc", s="dddabc" and s="dddabcq".
   :feedback_e: Incorrect!
      
   What is the value of s after the following code runs?

   .. code-block:: python

      s = “abc”
      s = “d” * 3 + s
      s = s + ““*3
      s = s + “q”


.. mchoice:: ctp-strings-11_Strings_07
   :practice: T
   :answer_a: C
   :answer_b: t
   :answer_c: s
   :answer_d: Nothing, this will cause an error
   :answer_e: I don't know
   :correct: c
   :feedback_a: Incorrect! 
   :feedback_b: Incorrect!
   :feedback_c: Correct! Here, len(s) = 4 and s[len(s)-1] = s[3]. So, the value of y will be the fourth character in the string i.e. "s".
   :feedback_d: Incorrect!
   :feedback_e: Incorrect!
     
   At the end of this code, y will be

   .. code-block:: python

      s = “Cats”
      y = s[len(s)-1]


.. mchoice:: ctp-strings-11_Strings_09
   :practice: T
   :answer_a: ats
   :answer_b: bat
   :answer_c: bats
   :answer_d: This will throw an exception
   :answer_e: I don't know
   :correct: c
   :feedback_a: Incorrect! 
   :feedback_b: Incorrect!
   :feedback_c: Correct! Here len(s) = 4. So, s[0:4] = "bats" i.e. the first four characters. 
   :feedback_d: Incorrect!
   :feedback_e: Incorrect!

   This code will print

   .. code-block:: python

      s = “bats”
      print(s[0:len(s)])


.. mchoice:: ctp-strings-11_Strings_11
   :practice: T
   :answer_a: mpire
   :answer_b: pires
   :answer_c: pire
   :answer_d: pir
   :answer_e: I don't know
   :correct: c
   :feedback_a: Incorrect! 
   :feedback_b: Incorrect! 
   :feedback_c: Correct! Negative index- "-1" has been used in the slice. So, the slice will end at the second last character. 
   :feedback_d: Incorrect! 
   :feedback_e: Incorrect!

   This will print   

   .. code-block:: python

      s = “Vampires”
      print(s[3:-1]


.. mchoice:: ctp-strings-11_Strings_14
   :practice: T
   :answer_a: Return a copy of s
   :answer_b: Return the reverse of s
   :answer_c: Return a string with only the last character of s
   :answer_d: Return a string with only the first character of s
   :answer_e: I don't know
   :correct: b
   :feedback_a: Incorrect
   :feedback_b: Correct! For example, take s = "xyz". With each step in the loop, the value of new_s will change in the order- new_s = x, new_s = yx and new_s = zyx.
   :feedback_c: Incorrect
   :feedback_d: Incorrect
   :feedback_e: Incorrect


   What does this code do?

   .. code-block:: python

      def mystery(s):
         new_s = “”
         for c in s:
            new_s = c + new_s
         return new_s
