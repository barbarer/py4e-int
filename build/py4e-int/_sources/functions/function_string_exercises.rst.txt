Functions and Strings Multiple Choice Questions
------------------------------------------------

.. mchoice:: Exercises_function_string_mc1
   :practice: T
   :answer_a: final_string = string1[:4] + string2[-3:]
   :answer_b: final_string = string1[:4] + string2[6:]
   :answer_c: final_string = string1[:3] + string2[6:]
   :answer_d: final_string = string1[:3] + string2[6:-1]
   :answer_e: final_string = string1[:4].append(string2[-3:])
   :correct: a, b
   :feedback_a: Correct! Using the slice operator [start:end], the starting index is inclusive, while the ending index is exclusive.
   :feedback_b: Correct! Using the slice operator [start:end], the starting index is inclusive, while the ending index is exclusive.
   :feedback_c: Try again! This would assign final_string to "yeling".
   :feedback_d: Try again! This would assign final_string to "yelin".
   :feedback_e: Try again! String objects do not have the attribute "append".

   Given the below code snippet, which of the following options would create a variable called ``final_string`` that is assigned to the word "yelling"?

   .. code-block:: python

      string1 = "yellow"
      string2 = "screaming"


.. mchoice:: Exercises_function_string_mc2_v4
   :practice: T
   :answer_a: print("I have " + num_of_apples + " apples.")
   :answer_b: print("I have " + str("num_of_apples") + " apples.")
   :answer_c: print("I have 4 apples.")
   :answer_d: print("I have " + str(num_of_apples) + " apples.")
   :correct: d
   :feedback_a: Try again! You can't concatenate a string and an integer together.
   :feedback_b: Try again! Do not enclose the variable name in a string or you will get just those characters.
   :feedback_c: Try again! This doesn't use the variable num_of_apples.
   :feedback_d: Correct! By using str, the integer variable is converted into a string.

   Which of the following choices correctly prints a sentence using the variable ``num_of_apples``?

   .. code-block:: python

      num_of_apples = 4


.. mchoice:: Exercises_function_string_mc3
   :practice: T
   :answer_a: split()
   :answer_b: lower()
   :answer_c: append()
   :answer_d: startswith()
   :answer_e: sort()
   :correct: a, b, d
   :feedback_a: Correct!
   :feedback_b: Correct!
   :feedback_c: Try again! This is a list method, not a string method.
   :feedback_d: Correct!
   :feedback_e: Try again! This is a list method, not a string method.

   Which of the following are string methods?


.. mchoice:: Exercises_function_string_mc4_v2
   :practice: T
   :answer_a: count(string)
   :answer_b: len(string)
   :answer_c: int(string)
   :answer_d: length(string)
   :correct: b
   :feedback_a: Try again! Count is a python string method that counts the amount of occurrences of a substring.
   :feedback_b: Correct!
   :feedback_c: Try again! String with words cannot be converted to ints.
   :feedback_d: Try again! Instead of length, it should be len, because length is not a built-in python function.

   Which of the following code corresponds to the amount of characters in the following ``string`` variable?

   .. code-block:: python

      string = "I love coding!"


.. mchoice:: Exercises_function_string_mc5
   :practice: T
   :answer_a: J. Weathers
   :answer_b: Jo. Weathers
   :answer_c: oa. Weathers
   :answer_d: J. weathers
   :answer_e: j. weathers
   :correct: d
   :feedback_a: Try again! The first letter in the last name should be lowercase.
   :feedback_b: Try again! The end of a slice operator is exclusive (e.g., 1 is exclusive in this example).
   :feedback_c: Try again! Strings are indexed starting at 0.
   :feedback_d: Correct!
   :feedback_e: Try again! Only the last name should be lowercase.

   What does the following code output?

   .. code-block:: python

      def abbrev(first_name, last_name):
         print(first_name[0:1] + ". " + last_name.lower())

      abbrev("Joanne", "Weathers")


.. mchoice:: Exercises_function_string_mc6
   :practice: T
   :answer_a: Hello KatiePe.
   :answer_b: Nothing.
   :answer_c: Hello Katie Pe.
   :answer_d: Hello KatiePE.
   :correct: b
   :feedback_a: Try again! This would be correct if there was a print statement.
   :feedback_b: Correct! Nothing would be outputted because there is no print statement.
   :feedback_c: Try again! There shouldn't be a space between the first and last name.
   :feedback_d: Try again! The E should not be capitalized. The upper() method would capitalize the E, but not the capitalize() method.

   After running this code, what would be the output if the input was ``first_name = "Katie"`` and ``last_name = "perkins"``?

   .. code-block:: python

      def abbrev():
         first_name = input("What is your first name? ")
         last_name = input("What is your last name? ")
         return("Hello " + first_name + last_name[0:2].capitalize() + ". ")

      def main():
         abbrev()

      main()


.. mchoice:: Exercises_function_string_mc7
   :practice: T
   :answer_a: print(item[2:7])
   :answer_b: print(item[2:6])
   :answer_c: print(item[-6:-2])
   :answer_d: print(item[3] + item[4] + item[5] + item[6])
   :answer_e: print(item[3:7])
   :correct: b, c
   :feedback_a: Try again! This would print "teboo".
   :feedback_b: Correct!
   :feedback_c: Correct!
   :feedback_d: Try again! This would print "eboo".
   :feedback_e: Try again! This would print "eboo".

   Given the variable ``item``, how would you grab the letters "tebo"?

   .. code-block:: python

      def notebook():
         item = "notebook"
         # What goes here?

      notebook()
