Peer Instruction: Strings Multiple Choice Questions
---------------------------------------------------------

.. mchoice:: dz-lecture_11_4
   :author: Dan Zingaro
   :practice: T
   :answer_a: kings
   :answer_b: king
   :answer_c: Viking
   :answer_d: Vikings
   :answer_e: ikings
   :correct: c
   :feedback_a: Try again. s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. And the first index in a string is index 0.
   :feedback_b: Try again. s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. And the first index in a string is index 0. Index -1 is the right 1 character.
   :feedback_c: Correct! s[i:j] extracts characters beginning at s[i] and ending about not including s[j].
   :feedback_d: Try again. s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. Index -1 is the right 1 character. So 's' is not included.
   :feedback_e: Try again. s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. And the first index in a string is index 0.

   What does the following code print?

   .. code-block:: python

        game = 'Lost Vikings'
        print(game[5:-1])

.. mchoice:: dz-lecture_11_5
   :author: Dan Zingaro
   :practice: T
   :answer_a: st V
   :answer_b: ost V
   :answer_c: iking
   :answer_d: st Vi
   :answer_e: Viking
   :correct: a
   :feedback_a: Correct! s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. s[2] is the third character from left, and s[-6] is the sixth character from right. s[2] = 's' and s[-6] = 'i'.
   :feedback_b: Try again. s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. s[2] is the third character from left. s[2] = 's'.
   :feedback_c: Try again. s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. s[2] is the third character from left, and s[6] is the sixth character from right. s[2] = 's' and s[-6] = 'i'.
   :feedback_d: Try again. s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. s[-6] is the sixth character from right. s[-6] = 'i'.
   :feedback_e: Try again. s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. s[2] is the third character from left, and s[-6] is the sixth character from right. s[2] = 's' and s[-6] = 'i'.

   What does the following code print?

   .. code-block:: python

        game = 'Lost Vikings'
        print(game[2:-6])


.. mchoice:: dz-lecture_11_6
   :author: Dan Zingaro
   :practice: T
   :answer_a: ost Vikings
   :answer_b: ost Viking
   :answer_c: ikings
   :answer_d: iking
   :answer_e: Vikings
   :correct: d
   :feedback_a: Try again. s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. s[-6] is the sixth character from right, and s[-1] is the first character from right. There is no index 0 when counting from right to left.
   :feedback_b: Try again. s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. s[-6] is the sixth character from right, and s[-1] is the first character from right. There is no index 0 when counting from right to left.
   :feedback_c: Try again. s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. s[-1] is the first character from right. There is no index 0 when counting from right to left.
   :feedback_d: Correct! s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. We can use negative indices in the slice syntax as well.
   :feedback_e: Try again. s[i:j] extracts characters beginning at s[i] and ending about not including s[j]. s[-1] is the first character from right. There is no index 0 when counting from right to left.

   What does the following code print?

   .. code-block:: python

        game = 'Lost Vikings'
        print(game[-6:-1])

.. mchoice:: dz-lecture_11_9
   :author: Dan Zingaro
   :practice: T
   :answer_a: 11
   :answer_b: ss
   :answer_c: 10
   :answer_d: Miaaiaaauga'
   :answer_e: None of the above
   :correct: e
   :feedback_a: Try again. s.replace(old, new): return s but with all occurrences of old replaced by new. The new s = 'Miaiaauga'. And the length of new s is 9.
   :feedback_b: Try again. t is the length of the new string because it equals to len(s).
   :feedback_c: Try again. s.replace(old, new): return s but with all occurrences of old replaced by new. The new s = 'Miaiaauga'. And the length of new s is 9.
   :feedback_d: Try again. t is the length of the new string because it equals to len(s).
   :feedback_e: Correct! s.replace(old, new): return s but with all occurrences of old replaced by new. The new s = 'Miaiaauga'. And the length of new s is 9.

   What does the following code print?

   .. code-block:: python

      s = 'Mississauga'
      t = len(s.replace('ss', 'a'))
      print(t)

.. mchoice:: dz-lecture_11_10
   :author: Dan Zingaro
   :practice: T
   :answer_a: 'xxcavexx'
   :answer_b: '  cave  '
   :answer_c: 'xxxxcavexxxx'
   :answer_d: '    cave    '
   :correct: a
   :feedback_a: Correct! In string.center(length, character), the length is the length of the returned string and the character to fill the missing space on each side.
   :feedback_b: Try again. In string.center(length, character), the character to fill the missing space on each side. Here the character is 'x'.
   :feedback_c: Try again. In string.center(length, character), the length is the length of the returned string. The length here should be 8 rather than 12.
   :feedback_d: Try again. In string.center(length, character), the length is the length of the returned string and the character to fill the missing space on each side. The length here should be 8 rather than 12 and the filling character is 'x'.

   What string is produced by the following code?

   .. code-block:: python

      'cave'.center(8, 'x')

.. mchoice:: dz-lecture_12_3
   :author: Dan Zingaro
   :practice: T
   :answer_a: 'a'
   :answer_b: 'b'
   :answer_c: 'c'
   :answer_d: 'd'
   :answer_e: 'e'
   :correct: c
   :feedback_a: Try again. ord converts characters to codes and chr converts codes to characters. ord('a') = 97, ord('z') = 122, ord(ch) = 119, val = 99. Therefore, mystery = 'c'.
   :feedback_b: Try again. ord converts characters to codes and chr converts codes to characters. ord('a') = 97, ord('z') = 122, ord(ch) = 119, val = 99. Therefore, mystery = 'c'.
   :feedback_c: Correct! ord converts characters to codes and chr converts codes to characters. ord('a') = 97, ord('z') = 122, ord(ch) = 119, val = 99. Therefore, mystery = 'c'.
   :feedback_d: Try again. ord converts characters to codes and chr converts codes to characters. ord('a') = 97, ord('z') = 122, ord(ch) = 119, val = 99. Therefore, mystery = 'c'.
   :feedback_e: Try again. ord converts characters to codes and chr converts codes to characters. ord('a') = 97, ord('z') = 122, ord(ch) = 119, val = 99. Therefore, mystery = 'c'.

   What is the value of ``mystery``?

   .. code-block:: python

      ch = 'w'
      val = ord('a') + 6 - (ord('z') - ord(ch) + 1)
      mystery = chr(val)


.. mchoice:: dz-lecture_12_4
   :author: Dan Zingaro
   :practice: T
   :answer_a: 'a'
   :answer_b: 'b'
   :answer_c: 'c'
   :answer_d: 'd'
   :answer_e: 'e'
   :correct: b
   :feedback_a: Try again. ord converts characters to codes and chr converts codes to characters. ord('a') = 97, ord('z') = 122, ord(ch) = 128, val = 98. Therefore, mystery = 'b'.
   :feedback_b: Correct! ord converts characters to codes and chr converts codes to characters. ord('a') = 97, ord('z') = 122, ord(ch) = 128, val = 98. Therefore, mystery = 'b'.
   :feedback_c: Try again. ord converts characters to codes and chr converts codes to characters. ord('a') = 97, ord('z') = 122, ord(ch) = 128, val = 98. Therefore, mystery = 'b'
   :feedback_d: Try again. ord converts characters to codes and chr converts codes to characters. ord('a') = 97, ord('z') = 122, ord(ch) = 128, val = 98. Therefore, mystery = 'b'
   :feedback_e: Try again. ord converts characters to codes and chr converts codes to characters. ord('a') = 97, ord('z') = 122, ord(ch) = 128, val = 98. Therefore, mystery = 'b'

   What is the value of ``mystery``?

   .. code-block:: python

      ch = 'x'
      val = ord('a') + 4 - (ord('z') - ord(ch) + 1)
      mystery = chr(val)

.. mchoice:: dz-lecture_12_7
   :author: Dan Zingaro
   :practice: T
   :answer_a: a{0}b
   :answer_b: ab
   :answer_c: a4b
   :answer_d: The code does not run
   :correct: c
   :feedback_a: Try again. The format(4) method formats the specified value(4) and insert them inside the string's placeholder. The placeholder is defined using curly brackets: {}.
   :feedback_b: Try again. s2 = a{0}b. The format(4) method formats the specified value(4) and insert them inside the string's placeholder. The placeholder is defined using curly brackets: {}.
   :feedback_c: Correct! The format(4) method formats the specified value(4) and insert them inside the string's placeholder.
   :feedback_d: Try again. The code can run. {n} inserts the argument, thereefore s2 = a{0}b. The format(4) method formats the specified value(4) and insert them inside the string's placeholder. The placeholder is defined using curly brackets: {}.

   What does the following code print?

   .. code-block:: python

      s1 = '0'
      s2 = 'a{' + s1 + '}b'
      print(s2.format(4))
