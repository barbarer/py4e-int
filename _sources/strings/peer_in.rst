Peer Instruction: Strings Multiple Choice Questions
---------------------------------------------------

.. mchoice:: ctp-strings-11_Strings_05
   :author: Cynthia Taylor
   :practice: T
   :answer_a: "abcddd q"
   :answer_b: "abcddd" "" "" "q"
   :answer_c: "qdddabc"
   :answer_d: "dddabcq"
   :answer_e: I don't know
   :correct: d
   :feedback_a: Incorrect! The value of s changes in the following order from the first line- s="abc", s="dddabc", s="dddabc" and s="dddabcq".
   :feedback_b: Incorrect! The value of s changes in the following order from the first line- s="abc", s="dddabc", s="dddabc" and s="dddabcq".
   :feedback_c: Incorrect! The value of s changes in the following order from the first line- s="abc", s="dddabc", s="dddabc" and s="dddabcq".
   :feedback_d: Correct! The value of s changes in the following order from the first line- s="abc", s="dddabc", s="dddabc" and s="dddabcq".
   :feedback_e: Incorrect! The value of s changes in the following order from the first line- s="abc", s="dddabc", s="dddabc" and s="dddabcq".

   What is the value of ``s`` after the following code runs?

   .. code-block:: python

      s = "abc"
      s = "d" * 3 + s
      s = s + "" * 3
      s = s + "q"


.. mchoice:: ctp-strings-11_Strings_07
   :author: Cynthia Taylor
   :practice: T
   :answer_a: C
   :answer_b: t
   :answer_c: s
   :answer_d: Nothing, this will cause an error
   :answer_e: I don't know
   :correct: c
   :feedback_a: Incorrect! Here, len(s) = 4 and s[len(s)-1] = s[3]. So, the value of y will be the fourth character in the string i.e. "s".
   :feedback_b: Incorrect! Here, len(s) = 4 and s[len(s)-1] = s[3]. So, the value of y will be the fourth character in the string i.e. "s".
   :feedback_c: Correct! Here, len(s) = 4 and s[len(s)-1] = s[3]. So, the value of y will be the fourth character in the string i.e. "s".
   :feedback_d: Incorrect! Here, len(s) = 4 and s[len(s)-1] = s[3]. So, the value of y will be the fourth character in the string i.e. "s".
   :feedback_e: Incorrect! Here, len(s) = 4 and s[len(s)-1] = s[3]. So, the value of y will be the fourth character in the string i.e. "s".

   What is the value of ``y`` after the following code runs?

   .. code-block:: python

      s = "Cats"
      y = s[len(s)-1]


.. mchoice:: ctp-strings-11_Strings_09
   :author: Cynthia Taylor
   :practice: T
   :answer_a: ats
   :answer_b: bat
   :answer_c: bats
   :answer_d: This will throw an exception
   :answer_e: I don't know
   :correct: c
   :feedback_a: Incorrect! Here len(s) = 4. So, s[0:4] = "bats" i.e. the first four characters.
   :feedback_b: Incorrect! Here len(s) = 4. So, s[0:4] = "bats" i.e. the first four characters.
   :feedback_c: Correct! Here len(s) = 4. So, s[0:4] = "bats" i.e. the first four characters.
   :feedback_d: Incorrect! Here len(s) = 4. So, s[0:4] = "bats" i.e. the first four characters.
   :feedback_e: Incorrect! Here len(s) = 4. So, s[0:4] = "bats" i.e. the first four characters.

   What will the following code print?

   .. code-block:: python

      s = "bats"
      print(s[0:len(s)])


.. mchoice:: ctp-strings-11_Strings_11
   :author: Cynthia Taylor
   :practice: T
   :answer_a: mpire
   :answer_b: pires
   :answer_c: pire
   :answer_d: pir
   :answer_e: I don't know
   :correct: c
   :feedback_a: Incorrect! Negative index- "-1" has been used in the slice. So, the slice will end at the second last character.
   :feedback_b: Incorrect! Negative index- "-1" has been used in the slice. So, the slice will end at the second last character.
   :feedback_c: Correct! Negative index- "-1" has been used in the slice. So, the slice will end at the second last character.
   :feedback_d: Incorrect! Negative index- "-1" has been used in the slice. So, the slice will end at the second last character.
   :feedback_e: Incorrect! Negative index- "-1" has been used in the slice. So, the slice will end at the second last character.

   What will the following code print?

   .. code-block:: python

      s = "Vampires"
      print(s[3:-1]


.. mchoice:: ctp-strings-11_Strings_14
   :author: Cynthia Taylor
   :practice: T
   :answer_a: Returns a copy of s
   :answer_b: Returns the reverse of s
   :answer_c: Returns a string with only the last character of s
   :answer_d: Returns a string with only the first character of s
   :answer_e: I don't know
   :correct: b
   :feedback_a: Incorrect! For example, take s = "xyz". With each step in the loop, the value of new_s will change in the order- new_s = x, new_s = yx and new_s = zyx.
   :feedback_b: Correct! For example, take s = "xyz". With each step in the loop, the value of new_s will change in the order- new_s = x, new_s = yx and new_s = zyx.
   :feedback_c: Incorrect! For example, take s = "xyz". With each step in the loop, the value of new_s will change in the order- new_s = x, new_s = yx and new_s = zyx.
   :feedback_d: Incorrect! For example, take s = "xyz". With each step in the loop, the value of new_s will change in the order- new_s = x, new_s = yx and new_s = zyx.
   :feedback_e: Incorrect! For example, take s = "xyz". With each step in the loop, the value of new_s will change in the order- new_s = x, new_s = yx and new_s = zyx.


   What does the following code return?

   .. code-block:: python

      def mystery(s):
         new_s = ""
         for c in s:
            new_s = c + new_s
         return new_s


.. mchoice:: dz-lecture10_Strings_03_v2
   :author: Dan Zingaro
   :practice: T
   :answer_a: "abcddd   q"
   :answer_b: "abcddd   q"
   :answer_c: "abcdddq"
   :answer_d: "qdddabc"
   :answer_e: "dddabc   q"
   :correct: e
   :feedback_a: Incorrect! Here, 'd' * 3 + s = 'ddd' + 'abc' = 'dddabc'. Then ' ' adds three spaces at the end of the string followed by a 'q' at the end.
   :feedback_b: Incorrect! Here, 'd' * 3 + s = 'ddd' + 'abc' = 'dddabc'. Then ' ' adds three spaces at the end of the string followed by a 'q' at the end.
   :feedback_c: Incorrect! Here, 'd' * 3 + s = 'ddd' + 'abc' = 'dddabc'. Then ' ' adds three spaces at the end of the string followed by a 'q' at the end.
   :feedback_d: Incorrect! Here, 'd' * 3 + s = 'ddd' + 'abc' = 'dddabc'. Then ' ' adds three spaces at the end of the string followed by a 'q' at the end.
   :feedback_e: Correct! Here, 'd' * 3 + s = 'ddd' + 'abc' = 'dddabc'. Then ' ' adds three spaces at the end of the string followed by a 'q' at the end.

   What is the value of ``s`` after the following code runs?

   .. code-block:: python

      s = 'abc'
      s = 'd' * 3 + s
      s = s + ' ' * 3
      s = s + 'q'


.. mchoice:: dz-lecture10_Strings_07
   :author: Dan Zingaro
   :practice: T
   :answer_a: Returns a copy of s
   :answer_b: Returns the reverse of s
   :answer_c: Returns a string consisting of only the final character of s
   :answer_d: Returns a string consisting of only the first character of s
   :correct: b
   :feedback_a: Incorrect! Consider s = 'abc'. In the first iteration, new_s = c + new_s = 'a' + '' = 'a'. In the second iteration, new_s = 'b' + 'a' = 'ba' and so on. So, it will return the reverse of s.
   :feedback_b: Correct! Consider s = 'abc'. In the first iteration, new_s = c + new_s = 'a' + '' = 'a'. In the second iteration, new_s = 'b' + 'a' = 'ba' and so on. So, it will return the reverse of s.
   :feedback_c: Incorrect! Consider s = 'abc'. In the first iteration, new_s = c + new_s = 'a' + '' = 'a'. In the second iteration, new_s = 'b' + 'a' = 'ba' and so on. So, it will return the reverse of s.
   :feedback_d: Incrrect! Consider s = 'abc'. In the first iteration, new_s = c + new_s = 'a' + '' = 'a'. In the second iteration, new_s = 'b' + 'a' = 'ba' and so on. So, it will return the reverse of s.

   What is a good description of what the following function does?

   .. code-block:: python

      def mystery(s):
         new_s = ''
         for c in s:
            new_s = c + new_s
         return new_s


.. mchoice:: dz-lecture10_Strings_08
   :author: Dan Zingaro
   :practice: T
   :answer_a: 1
   :answer_b: 2
   :answer_c: 4
   :answer_d: 8
   :answer_e: 16
   :correct: c
   :feedback_a: Incorrect! For each 'a' and 'b', the nested for loop will run twice. Thus, val gets incremented by 1 four times resulting in val = 4.
   :feedback_b: Incorrect! For each 'a' and 'b', the nested for loop will run twice. Thus, val gets incremented by 1 four times resulting in val = 4.
   :feedback_c: Correct! For each 'a' and 'b', the nested for loop will run twice. Thus, val gets incremented by 1 four times resulting in val = 4.
   :feedback_d: Incorrect! For each 'a' and 'b', the nested for loop will run twice. Thus, val gets incremented by 1 four times resulting in val = 4.
   :feedback_e: Incorrect! For each 'a' and 'b', the nested for loop will run twice. Thus, val gets incremented by 1 four times resulting in val = 4.

   What is the value of ``val`` after this code executes?

   .. code-block:: python

      val = 0
      for i in 'ab':
         for j in 'cd':
            val += 1


.. mchoice:: dz-lecture10_Strings_09
   :author: Dan Zingaro
   :practice: T
   :answer_a: 1
   :answer_b: 3
   :answer_c: 6
   :answer_d: 9
   :answer_e: 27
   :correct: d
   :feedback_a: Incorrect! For each 'a', 'b' and 'c', the nested for loop will run thrice. Thus, val gets incremented by 1 nine times resulting in val = 9.
   :feedback_b: Incorrect! For each 'a', 'b' and 'c', the nested for loop will run thrice. Thus, val gets incremented by 1 nine times resulting in val = 9.
   :feedback_c: Incorrect! For each 'a', 'b' and 'c', the nested for loop will run thrice. Thus, val gets incremented by 1 nine times resulting in val = 9.
   :feedback_d: Correct! For each 'a', 'b' and 'c', the nested for loop will run thrice. Thus, val gets incremented by 1 nine times resulting in val = 9.
   :feedback_e: Incorrect! For each 'a', 'b' and 'c', the nested for loop will run thrice. Thus, val gets incremented by 1 nine times resulting in val = 9.

   What is the value of ``val`` after this code executes?

   .. code-block:: python

      val = 0
      for i in 'abc':
         for j in 'def':
         val += 1
