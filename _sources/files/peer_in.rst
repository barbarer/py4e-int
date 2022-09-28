Peer Instruction: Text Files Multiple Choice Questions
------------------------------------------------------

.. mchoice:: dz-lecture_17_3
   :author: Dan Zingaro
   :practice: T
   :answer_a: open
   :answer_b: A loop or method for reading (e.g. read)
   :answer_c: write
   :answer_d: close
   :answer_e: All should be called
   :correct: e
   :feedback_a: Incorrect! Open will be called to open the file to be read.
   :feedback_b: Incorrect! A loop or method for reading is required to read an open file.
   :feedback_c: Incorrect! Write will be called to write text on to another file.
   :feedback_d: Incorrect! Close will be called to after the program is done reading or writing a file.
   :feedback_e: Correct! All these functions/methods will be called by the program.

   A program is designed to retrieve some data from a file, process it, and output the revised data to another file. Which of the following functions/methods will not be called in the program?



.. mchoice:: dz-lecture_17_6
   :author: Dan Zingaro
   :practice: T
   :answer_a: The first line
   :answer_b: The second line
   :answer_c: The third line
   :answer_d: The fourth line
   :answer_e: The fifth line
   :correct: e
   :feedback_a: Incorrect! Because readline() has been called five times. So skip will return the fifth line.
   :feedback_b: Incorrect! Because readline() has been called five times. So skip will return the fifth line.
   :feedback_c: Incorrect! Because readline() has been called five times. So skip will return the fifth line.
   :feedback_d: Incorrect! Because readline() has been called five times. So skip will return the fifth line.
   :feedback_e: Correct! Because readline() has been called five times. So skip will return the fifth line.

   Here are the first few lines from a file- songs.txt:

      Songs Chosen this Semester
      #Game names for the songs
      #All ridiculously good soundtracks
      Sep, 17, Chrono Cross
      Sep, 19, Zelda 3

   f refers to this file and has just been opened. What does skip return?

   .. code-block:: python

      def skip(f):
         line = f.readline()
         line = f.readline()
         while line.startswith('#' ):
            line = f.readline()
         return f.readline()



.. mchoice:: dz-lecture_17_7
   :author: Dan Zingaro
   :practice: T
   :answer_a: The first line
   :answer_b: The second line
   :answer_c: The third line
   :answer_d: The fourth line
   :answer_e: The fifth line
   :correct: d
   :feedback_a: Incorrect! Because line was last assigned to the fourth iteration of readline().
   :feedback_b: Incorrect! Because line was last assigned to the fourth iteration of readline().
   :feedback_c: Incorrect! Because line was last assigned to the fourth iteration of readline().
   :feedback_d: Correct! Because line was last assigned to the fourth iteration of readline().
   :feedback_e: Incorrect! Because line was last assigned to the fourth iteration of readline().

   Here are the first few lines from a file- songs.txt:

      Songs Chosen this Semester
      #Game names for the songs
      #All ridiculously good soundtracks
      Sep, 17, Chrono Cross
      Sep, 19, Zelda 3

   f refers to this file and has just been opened. What does skip return?

   .. code-block:: python

      def skip(f):
         line = f.readline()
         line = f.readline()
         while line.startswith('#' ):
            line = f.readline()
         return line
