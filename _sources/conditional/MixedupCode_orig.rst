Mixed-up Code Questions
-----------------------
.. parsonsprob:: cndtnl-mixed-three
    :practice: T
    :adaptive:
    :numbered: left

    Create code that sets the variable ``result`` equal to “x is less than 3” when ``x`` is less than 3. Otherwise, set it to “All done”.
    -----
    x = 0
    =====
    if x < 3:
    =====
        result = "x is less than 3"
    =====
    else:
    =====
        result = "All done"

.. activecode:: cndtnl-mixed-three_write
   :practice: T
   :autograde: unittest

   Write code that sets the variable ``result`` equal to “x is less than 3” when ``x`` is less than 3. Otherwise, set it to “All done”.
   ~~~~
   x = 0

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(result, "x is less than 3", "Testing result when the value of x is less than 3")

   myTests().main()


.. parsonsprob:: cndtnl-mixed-hi
    :adaptive:
    :practice: T
    :numbered: left

    Create code that sets the variable ``message`` to “Hello” if ``x`` is less than ``2``, "Hey" if ``x`` is greater than ``2``, and "Hi" if ``x`` is ``2``.
    -----
    x = 2
    =====
    if x < 2:
    =====
    if x < 2: #paired
    =====
        message = "Hello"
    =====
    elif x > 2:
    =====
    else x > 2: #paired
    =====
        message = "Hey"
    =====
    else:
    =====
        message = "Hi"
    =====
        message == "Hi" #paired

.. activecode:: cndtnl-mixed-hi_write
   :practice: T
   :autograde: unittest

   Write code that sets the variable ``message`` to “Hello” if ``x`` is less than ``2``, "Hey" if ``x`` is greater than ``2``, and "Hi" if ``x`` is ``2``.
   ~~~~
   x = 2

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(message,"Hi", "Testing that the value of message when 'x' equals 2")

   myTests().main()

.. parsonsprob:: cndtnl-mixed-price_v2
   :practice: T
   :adaptive:
   :numbered: left

   Create code that sets ``price`` to 1.5 if ``weight`` is less than 2, otherwise set ``price`` to 1.3, then set ``total`` to the ``weight`` times ``price``. For example, if ``weight`` is 0.5 then ``price`` should be set to 1.5 and ``total`` will be 0.75.
   -----
   weight = 0.5
   numItems = 5
   if weight < 2:
   =====
       price = 1.50
   =====
   if weight >= 2:
   =====
       price = 1.30
   =====
   total = weight * price
   =====


.. activecode:: cndtnl-mixed-price_write
   :practice: T
   :autograde: unittest

   Write code that sets ``price`` to 1.5 if ``weight`` is less than 2, otherwise set ``price`` to 1.3, then set ``total`` to the ``weight`` times ``price``. For example, if ``weight`` is 0.5 then ``price`` should be set to 1.5 and ``total`` will be 0.75.
   ~~~~
   weight = 0.5
   numItems = 5

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(price,1.5, "Testing that the price is 1.5")
           self.assertEqual(total,0.75, "Testing that the total is 0.75")

   myTests().main()

.. parsonsprob:: cndtnl-mixed-ten
    :practice: T
    :adaptive:
    :numbered: left

    Create code that sets the variable ``number`` to ``x is a number from 1 to 10`` if the value of x is 1-10, ``x is a number less than 1`` if the value of x is zero or below, and ``x is a number greater than 10`` if the value of x is more than 10.
    -----
    x = 3
    =====
    if x >= 1 and x <= 10:
    =====
        number = "x is a number from 1 to 10"
    =====
    elif x < 1:
    =====
        number = "x is a number less than 1"
    =====
        number = "x is greater than 1" #paired
    =====
    else:
    =====
        number = "x is a number greater than 10"
    =====
    else x < 1: #paired


.. activecode:: cndtnl-mixed-ten_write
   :practice: T
   :autograde: unittest

   Write code that sets the variable ``number`` to ``x is a number from 1 to 10`` if the value of x is 1-10, ``x is a number less than 1`` if the value of x is zero or below, and ``x is a number greater than 10`` if the value of x is more than 10.
   ~~~~
   x = 3

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(number,"x is a number from 1 to 10", "Testing number when x is a number from 1 to 10")

   myTests().main()

.. parsonsprob:: cndtnl-mixed-twelve
    :practice: T
    :adaptive:
    :numbered: left

    Create code that sets the variable ``rate`` to the cost of a 14 mile cab ride. If the distance traveled is less than or equal to 12 miles, then ``rate`` cost is $2.00 a mile, and if the distance traveled is more than 12 miles then ``rate`` cost is $1.50 a mile. Assign the final cost to the variable ``total``.
    -----
    distance = 14
    =====
    if distance <= 12:
    =====
    if distance is 12: #paired
    =====
        rate = 2.00
    =====
    if distance > 12:
    =====
    if distance < 12: #paired
    =====
        rate = 1.50
    =====
    total = distance * rate
    =====
    total = distance / rate #paired
    =====
    print("Total cost of trip: " + str(total))


.. activecode:: cndtnl-mixed-twelve_write
   :practice: T
   :autograde: unittest

   Write code that sets the variable ``rate`` to the cost of a 14 mile cab ride. If the distance traveled is less than or equal to 12 miles, then ``rate`` cost is $2.00 a mile, and if the distance traveled is more than 12 miles then ``rate`` cost is $1.50 a mile. Assign the final cost to the variable ``total``.
   ~~~~
   distance = 14

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(total, 21.0, "Testing total is equal to 21.0")

   myTests().main()

.. parsonsprob:: cndtnl-mixed-nested
    :practice: T
    :adaptive:
    :numbered: left

    Create code so that after x and y are defined, they are compared and if the value of x is less than y it sets the variable ``result`` to ``"x is less than y"``; if x is greater than y then ``result`` is set to ``"x is greater than y"``; and ``result`` is ``"x and y must be equal"`` if the values are equal.
    -----
    x = 10
    =====
    y = 10
    =====
    if x < y:
    =====
        result = "x is less than y"
    =====
    else:
    =====
        if x > y:
    =====
            result = "x is greater than y"
    =====
        else:
    =====
            result = "x and y must be equal"


.. activecode:: cndtnl-mixed-nested_write
   :practice: T
   :autograde: unittest

   Write code so that after x and y are defined, they are compared and if the value of x is less than y it sets the variable ``result`` to ``"x is less than y"``; if x is greater than y then ``result`` is set to ``"x is greater than y"``; and ``result`` is ``"x and y must be equal"`` if the values are equal.
   ~~~~
   x = 10

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(result, "x and y must be equal", "Testing result when x and y are equal")

   myTests().main()


.. parsonsprob:: cndtnl-mixed-logical
    :practice: T
    :adaptive:
    :numbered: left


	Write code so that after x and y are defined, they are compared and if the value of x and y are the same object the variable ``value`` will be set to ``"x and y are the same"``; if x and y have the same value then ``value`` is ``"x and y have the same value"``; and ``value`` is ``"x and y are not similar"`` if x and y do not fit the other conditionals.
    -----
    x = 12
    =====
    y = x
    =====
    if x is y:
    =====
        value = "x and y are the same"
    =====
    elif x == y:
    =====
        value = "x and y have the same value"
    =====
    else:
    =====
        value = "x and y have different values"


.. activecode:: cndtnl-mixed-logical_write
   :practice: T
   :autograde: unittest

   Write code so that after x and y are defined, they are compared and if the value of x and y are the same object the variable ``value`` will be set to ``"x and y are the same"``; if x and y have the same value then ``value`` is ``"x and y have the same value"``; and ``value`` is ``"x and y are not similar"`` if x and y do not fit the other conditionals.
   ~~~~
   x = 12

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(value, "x and y are the same", "Testing value when the x and y are the same")

   myTests().main()

.. parsonsprob:: cndtnl-mixed-grade
    :practice: T
    :adaptive:
    :numbered: left

    Create code that will set the variable ``grade`` to the grade equivalent (string) for a score. It should set ``grade`` to E for any value below 60, D for 61 to 69, C for 70 to 79, B for 80 to 89 and A for 90 and above. For example, if the score is above 90, ``grade`` should be A.
    -----
    score = 93
    =====
    if score >= 90:
    =====
        grade = "A"
    =====
    elif score >= 80:
    =====
        grade = "B"
    =====
    elif score >= 70:
    =====
        grade = "C"
    =====
    elif score >= 60:
    =====
        grade = "D"
    =====
    else:
    =====
        grade = "E"
    =====
    print(grade)
    =====
        elif grade >= 90: #distractor
    =====
        score = "c" #distractor


.. activecode:: cndtnl-mixed-grade_write
   :practice: T
   :autograde: unittest

   Write code that will set the variable ``grade`` to the grade equivalent (string) for a score. It should set ``grade`` to E for any value below 60, D for 61 to 69, C for 70 to 79, B for 80 to 89 and A for 90 and above. For example, if the score is above 90, ``grade`` should be A.
   ~~~~
   score = 93

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(grade,'A',"Testing that grade equals A")


   myTests().main()


.. parsonsprob:: cndtnl-mixed-even
    :practice: T
    :adaptive:
    :numbered: left

    Create code that should set the variable ``result`` to determine whether a number is odd or even.
    -----
    x = 3
    =====
    if x % 2 == 0:
    =====
    if x / 2 == 0: #paired
    =====
        result = "x is even!"
    =====
    else:
    =====
        result = "x is odd"
    =====
    elif x % 2 == 1: #paired


.. activecode:: cndtnl-mixed-even_write
   :practice: T
   :autograde: unittest

   Write code that should set the variable ``result`` to determine whether a number is odd or even.
   ~~~~
   x = 3

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(result, "x is odd", "Testing result when the value of x is odd")

   myTests().main()

.. parsonsprob:: cndtnl-mixed-goodJob
    :practice: T
    :adaptive:
    :numbered: left

    Create code that should set the variable ``result`` equal to "Good job" when the number is between 1 and 10 (inclusive) or is 15 and ``result`` should be set to "Fail" when it is not.
    -----
    x = 8
    =====
    if x >= 1 and x <= 10 or x == 15:
    =====
        result = "Good job"
    =====
    else:
    =====
        result = "Fail"
    =====
    elif x == 15: #paired


.. activecode:: cndtnl-mixed-goodJob_write
   :practice: T
   :autograde: unittest

   Write code that should set the variable ``result`` equal to "Good job" when the number is between 1 and 10 (inclusive) or is 15 and ``result`` should be set to "Fail" when it is not.
   ~~~~
   x = 8

   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(result, "Good job", "Testing result when the value of x is between 1 and 10")


   myTests().main()
