Peer Instruction: Files Multiple Choice Questions
-----------------------------------------------------------------------------
.. mchoice:: dz-lecture_29_2
   :author: Dan Zingaro
   :practice: T
   :answer_a: [['a', 'b'], ['c', 'd', 'e'], ['f']]
   :answer_b: [['a', 'b'], ['c', 'd', 'e']]
   :answer_c: [['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c', 'd', 'e', 'f']]
   :answer_d: Nothing returned; infinite loop
   :correct: c
   :feedback_a: Try again. Python is passed by object reference. Therefore, anything changes in the small list will be reflected in the big list. The final small list is ['a', 'b', 'c', 'd', 'e', 'f']. There are two blanks in the file, therefore the small list is appended to the big list twice. 
   :feedback_b: Try again. Python is passed by object reference. Therefore, anything changes in the small list will be reflected in the big list. The final small list is ['a', 'b', 'c', 'd', 'e', 'f']. There are two blanks in the file, therefore the small list is appended to the big list twice. 
   :feedback_c: Correct! Python is passed by object reference. Therefore, anything changes in the small list will be reflected in the big list.
   :feedback_d: Try again. The loop will end after all lines in the fine are read.
   
   .. code-block:: python

      def build_grocery_list(f):
        line = f.readline()
        big = []
        small = []
        while line:
            if line != '\n':
                small.append(line.strip())
            else:
                big.append(small)
            line = f.readline()
        return big

      Here is a sample file. <blank> means that the line is blank.
      a
      b
      <blank>
      c
      d
      e
      <blank>
      f

      What does the function return for the sample file?


.. mchoice:: dz-lecture_29_3
   :author: Dan Zingaro
   :practice: T
   :answer_a: [['a', 'b'], ['c', 'd', 'e'], ['f']]
   :answer_b: [['a', 'b'], ['c', 'd', 'e']]
   :answer_c: [['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c', 'd', 'e', 'f']]
   :answer_d: Nothing returned; infinite loop
   :correct: b
   :feedback_a: Try again. When the line 'f' is read, the list small turns into 'f' but it is not appended to the big list. 
   :feedback_b: Correct! When the line 'f' is read, the list small turns into 'f' but it is not appended to the big list. 
   :feedback_c: Try again. After small list is given to a new value [ ], the small list does not point to the list saved into the list big anymore. Therefore, the change does not change the value of the previous small list saved in the big list.
   :feedback_d: Try again. The loop will end after all lines in the fine are read.

   .. code-block:: python

      def build_grocery_list(f):
        line = f.readline()
        big = []
        small = []
        while line:
            if line != '\n':
                small.append(line.strip())
            else:
                big.append(small)
                small = []
            line = f.readline()
        return big

      Here is a sample file. <blank> means that the line is blank.
      a
      b
      <blank>
      c
      d
      e
      <blank>
      f

      What does the function return for the sample file?

.. mchoice:: dz-lecture_29_4
   :author: Dan Zingaro
   :practice: T
   :answer_a: [['a', 'b'], ['c', 'd', 'e'], ['f']]
   :answer_b: [['a', 'b'], ['c', 'd', 'e']]
   :answer_c: [['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c', 'd', 'e', 'f']]
   :answer_d: Nothing returned; infinite loop
   :correct: a
   :feedback_a: Correct! When the line 'f' is read, the list small turns into 'f'. And the small list is appended to the big list after the loop ends. So 'f' is appended.
   :feedback_b: Try again. When the line 'f' is read, the list small turns into 'f'. And the small list is appended to the big list after the loop ends. So 'f' is appended.
   :feedback_c: Try again. After small list is given to a new value [ ], the small list does not point to the list saved into the list big anymore. Therefore, the change does not change the value of the previous small list saved in the big list.
   :feedback_d: Try again. The loop will end after all lines in the fine are read.

   .. code-block:: python

      def build_grocery_list(f):
        line = f.readline()
        big = []
        small = []
        while line:
            if line != '\n':
                small.append(line.strip())
            else:
                big.append(small)
                small = []
            line = f.readline()
        big.append(small)
        return big

      Here is a sample file. <blank> means that the line is blank.
      a
      b
      <blank>
      c
      d
      e
      <blank>
      f

      What does the function return for the sample file?
       
.. mchoice:: dz-lecture_29_5
   :author: Dan Zingaro
   :practice: T
   :answer_a: [['a', 'b'], ['c', 'd', 'e'], ['f']]
   :answer_b: [['a', 'b'], ['c', 'd', 'e']]
   :answer_c: [['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c', 'd', 'e', 'f']]
   :answer_d: Nothing returned; infinite loop
   :correct: d
   :feedback_a: Try again. In the inner loop, after all lines are read, it would move to an empty string. Since it does not equal to '/n', the loop keeps running. 
   :feedback_b: Try again. In the inner loop, after all lines are read, it would move to an empty string. Since it does not equal to '/n', the loop keeps running. 
   :feedback_c: Try again. In the inner loop, after all lines are read, it would move to an empty string. Since it does not equal to '/n', the loop keeps running. 
   :feedback_d: Correct! In the inner loop, after all lines are read, it would move to an empty string. Since it does not equal to '/n', the loop keeps running. 

   .. code-block:: python

      def build_grocery_list(f):
        big = []
        line = f.readline()
        while line:
            small = []
            while line != '\n':
                small.append(line.strip())
                line = f.readline()
            big.append(small)             
            line = f.readline()
        return big

      Here is a sample file. <blank> means that the line is blank.
      a
      b
      <blank>
      c
      d
      e
      <blank>
      f

      What does the function return for the sample file?