String comparison
-----------------
The comparison operators work on strings. To see if two strings are
equal:

.. code-block:: python

   if word == 'banana':
       print('All right, bananas.')


Other comparison operations are useful for putting words in alphabetical
order:

.. activecode:: str-comparison
   :caption: Comparing strings

   word = "Pineapple"
   if word < 'banana':
       print('Your word, ' + word + ', comes before banana.')
   elif word > 'banana':
       print('Your word, ' + word + ', comes after banana.')
   else:
       print('All right, bananas.')


Python does not handle uppercase and lowercase letters the same way that
people do. All the uppercase letters come before all the lowercase
letters, so "Pineapple" comes before "banana".

A common way to address this problem is to convert strings to a standard
format, such as all lowercase, before performing the comparison. Keep
that in mind in case you have to defend yourself against a man armed
with a Pineapple.

.. mchoice:: str-comp-mc-dog1
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Both match up to the g but Dog is shorter than Doghouse so it comes first in the dictionary.
   :feedback_b: Strings are compared character by character.

   Evaluate the following comparison:

   .. code-block:: python

      "Dog" < "Doghouse"



.. mchoice:: str-comp-mc-dog2
   :practice: T
   :answer_a: True
   :answer_b: False
   :answer_c: They are the same word
   :correct: b
   :feedback_a: d is greater than D according to the ord function (68 versus 100).
   :feedback_b: Yes, upper case is less than lower case according to the ordinal values of the characters.
   :feedback_c: Python is case sensitive meaning that upper case and lower case characters are different.

   Evaluate the following comparison:

   .. code-block:: python

      "dog" < "Dog"



.. mchoice:: str-comp-mc-dog3
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: d is greater than D.
   :feedback_b: The length does not matter.  Lower case d is greater than upper case D.

   Evaluate the following comparison:

   .. code-block:: python

      "dog" < "Doghouse"
