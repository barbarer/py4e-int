Mixed-up Code Questions
-----------------------
.. parsonsprob:: cndtnl-mixed-three
    :practice: T
    :adaptive:
    :numbered: left

<<<<<<< HEAD
    The following code should set the variable ``result`` equal to “x is less than 3” when ``x`` is less than 3. Otherwise, set it to “All done”.
=======
    The following program should print ``x is less than 3`` and then ``All done`` when ``x`` is less than ``3``.
>>>>>>> upstream/master
    Be sure to indent correctly!
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

<<<<<<< HEAD
.. activecode:: cndtnl-mixed-three_write
   
   Write code that sets the variable ``result`` equal to “x is less than 3” when ``x`` is less than 3. Otherwise, set it to “All done”.
   ~~~~
   x = 0
    
   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(result, "x is less than 3", "Testing result when the value of x is less than 3")
           
           


   myTests().main()

=======
>>>>>>> upstream/master
.. parsonsprob:: cndtnl-mixed-hi
    :adaptive:
    :practice: T
    :numbered: left

<<<<<<< HEAD
    The following program should set the variable ``message`` to “Hello” if x is less than 2, "Hey" if x is greater than 2,
    and "Hi" if x is 2. Be sure to indent correctly and look out for extra code blocks!
=======
    The following program should prints ``Hello`` if ``x`` is less than ``2``, ``Hey`` if ``x`` is greater than ``2``,
    and ``Hi`` if ``x`` is ``2``. Be sure to indent correctly and look out for extra code blocks!
>>>>>>> upstream/master
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

<<<<<<< HEAD
.. activecode:: cndtnl-mixed-hi_write
   
   Write code that sets the variable ``message`` to “Hello” if ``x`` is less than ``2``, "Hey" if ``x`` is greater than ``2``, and "Hi" if ``x`` is ``2``. 
   ~~~~
   x = 2
    
   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(message,"Hi", "Testing that the value of message when 'x' equals 2")
          
           


   myTests().main()

=======
>>>>>>> upstream/master
.. parsonsprob:: cndtnl-mixed-price
   :practice: T
   :adaptive:
   :numbered: left

<<<<<<< HEAD
   The following code should set ``price`` to 1.5 if ``weight`` is less than 2, otherwise set ``price`` to 1.3, then set ``total`` to the ``weight`` times ``price``. For example, if ``weight`` is 0.5 then ``price`` should be set to 1.5 and ``total`` will be 0.75. Be sure to indent correctly!
=======
   The following program should calculate the total price, but the lines are mixed up. The price is
   based on the weight. Items that weigh less than ``2`` pounds should cost ``1.5``. Items that weigh more
   than ``2`` pounds should cost ``1.3``. Be sure to indent correctly!
>>>>>>> upstream/master
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
  

<<<<<<< HEAD
.. activecode:: cndtnl-mixed-price_write
   
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

=======
>>>>>>> upstream/master
.. parsonsprob:: cndtnl-mixed-ten
    :practice: T
    :adaptive:
    :numbered: left

    The following program should print ``x is a number from 1 to 10`` if the value of ``x`` is ``1-10``,
    ``x is a number less than 1`` if the value of ``x`` is zero or below, and ``x is a number greater than 10``
    if the value of ``x`` is more than ``10``. Be sure to indent correctly and look out for extra code blocks!
    -----
    x = 3
    =====
    if x >= 1 and x <= 10:
    =====
        print ("x is a number from 1 to 10")
    =====
    elif x < 1:
    =====
        print("x is a number less than 1")
    =====
        print("x is greater than 1") #paired
    =====
    else:
    =====
        print("x is a number greater than 10")
    =====
    else x < 1: #distractor


.. parsonsprob:: cndtnl-mixed-twelve
    :practice: T
    :adaptive:
    :numbered: left

    Arrange the code to calculate and print the cost of a 14 mile cab ride. If the distance traveled
    is less than or equal to ``12`` miles the cost is ``$2.00`` a mile, and if the distance traveled is more
    than ``12`` miles the cost is ``$1.50 a mile``. Be sure to indent correctly and look out for extra code blocks!
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


<<<<<<< HEAD
.. activecode:: cndtnl-mixed-twelve_write
   
   Write code to calculate and print the cost of a 14 mile cab ride. If the distance traveled is less than or equal to 12 miles, the cost is $2.00 a mile, and if the distance traveled is more than 12 miles the cost is $1.50 a mile. Assign the final cost to the variable ``total``.

   ~~~~
   distance = 14
    
   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(total, 21.0, "Testing total is equal to 21.0")



   myTests().main()

=======
>>>>>>> upstream/master
.. parsonsprob:: cndtnl-mixed-nested
    :practice: T
    :adaptive:
    :numbered: left

    Arrange the following code so that after ``x`` and ``y`` are defined, they are compared and if the value of ``x``
    is less than ``y`` it prints ``"x is less than y"``; if x is greater than ``y`` it prints ``"x is greater
    than y"``; and prints ``"x and y must be equal"`` if the values are equal. Be sure to indent correctly!
    -----
    x = 10
    =====
    y = 10
    =====
    if x < y:
    =====
        print("x is less than y")
    =====
    else:
    =====
        if x > y:
    =====
            print("x is greater than y")
    =====
        else:
    =====
            print("x and y must be equal")


<<<<<<< HEAD
.. activecode:: cndtnl-mixed-nested_write
   
   Write code so that  after x and y are defined, they are compared and if the value of x is less than y it prints ``"x is less than y"``; if x is greater than y it prints ``"x is greater than y"``; and prints ``"x and y must be equal"`` if the values are equal. 
   ~~~~
   
    
   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual()
           self.assertEqual()
           self.assertEqual()
           


   myTests().main()

=======
>>>>>>> upstream/master

.. parsonsprob:: cndtnl-mixed-logical
    :practice: T
    :adaptive:
    :numbered: left

<<<<<<< HEAD
    Arrange the following code so that after x and y are defined, they are compared and if the value of x
    and y are the same object then the variable ``value`` will be set to ``"x and y are the same"``; if x and y have the same value then ``value`` will be ``"x and y have the same value"``; and ``value`` is ``"x and y are not similar"`` if x and y do not
=======
    Arrange the following code so that after ``x`` and ``y`` are defined, they are compared and if the value of ``x``
    and ``y`` are the same object it prints ``"x and y are the same object"``; if ``x`` and ``y`` have the same value it
    prints ``x and y have the same value``; and prints ``x and y are not similar`` if ``x`` and ``y`` do not
>>>>>>> upstream/master
    fit the other conditionals. Be sure to indent correctly!
    -----
    x = 12
    =====
    y = x
    =====
    if x is y:
    =====
<<<<<<< HEAD
        value = "x and y are the same"
=======
        print("x and y are the same object")
>>>>>>> upstream/master
    =====
    elif x == y:
    =====
        value = "x and y have the same value"
    =====
    else:
    =====
        value = "x and y have different values"


.. activecode:: cndtnl-mixed-logical_write
   
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

    Arrange the code to print the grade equivalent (string) for a score. It should return ``E`` for any value
    below ``60``, ``D`` for ``61 to 69``, ``C`` for ``70 to 79``, ``B`` for ``80 to 89`` and ``A`` for ``90`` and above.
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


<<<<<<< HEAD
.. activecode:: cndtnl-mixed-grade_write
   
   Write code that will print the grade equivalent (string) for a score. It should return E for any value below 60, D for 61 to 69, C for 70 to 79, B for 80 to 89 and A for 90 and above.
   ~~~~
   score = 93
    
   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(score(95),'A',"Tested input: score(95)")
           self.assertEqual(score(85),'B',"Tested input: score(85)")
           self.assertEqual(score(75),'C',"Tested input: score(75)")
           self.assertEqual(score(63),'D',"Tested input: score(63)")
           self.assertEqual(score(55),'E',"Tested input: score(55)")
           
           


   myTests().main()

=======
>>>>>>> upstream/master

.. parsonsprob:: cndtnl-mixed-even
    :practice: T
    :adaptive:
    :numbered: left

    The following program should set the variale ``result`` to determine whether a number is odd or even, but the lines are mixed up.
    Be sure to indent correctly and watch out for extra pieces of code!
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

<<<<<<< HEAD

.. activecode:: cndtnl-mixed-even_write
   
   Write code that should set the variable ``result`` to determine whether a number is odd or even. 
   ~~~~
   x = 3
    
   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(result, "x is odd", "Testing result when the value of x is odd")
        
           


   myTests().main()

=======
>>>>>>> upstream/master
.. parsonsprob:: cndtnl-mixed-goodJob
    :practice: T
    :adaptive:
    :numbered: left

<<<<<<< HEAD
    The following program should set the variable ``result`` equal to "Good job" when the number is between 1 and 10 (inclusive) or is 15
    and ``result`` should be set to "Fail" when it is not. Be sure to indent correctly and watch out for extra pieces of code!
=======
    The following program should print ``Good job`` when the number is between ``1`` and ``10`` (inclusive) or is ``15``
    and ``Fail`` when it is not. Be sure to indent correctly and watch out for extra pieces of code!
>>>>>>> upstream/master
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
<<<<<<< HEAD
    elif x == 15: #paired


.. activecode:: cndtnl-mixed-goodJob_write
   
   Write code that should set the variable ``result`` equal to "Good job" when the number is between 1 and 10 (inclusive) or is 15 and ``result`` should be set to "Fail" when it is not. 
   ~~~~
   x = 8
    
   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(result, "Good job", "Testing result when the value of x is between 1 and 10")
          
           


   myTests().main()
=======
    elif x == 15: #distractor
>>>>>>> upstream/master
