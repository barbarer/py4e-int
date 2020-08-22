Mixed-up code Questions
-----------------------

.. parsonsprob:: ch5ex1muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should print the value of n as long as n is less than 5. But the blocks have been mixed up and include an extra block that isn't needed in the solution. Drag the needed blocks from the left and put them in the correct order on the right.
   -----
   n = 0
   =====
   while n < 5:
   =====
   while n > 5: #distractor
   =====
       print(n)
   =====
       n = n + 1

.. parsonsprob:: ch5ex2muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should print 0, 2, 4, 6 on separate lines by using a while loop. Arrange the code so that "accum" prints before increasing its value. The blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   accum = 0
   =====
   while accum < 7:
   =====
       print(accum)
   =====
       accum = accum + 2
   =====
   while accum < 6 #distractor


.. parsonsprob:: ch5ex3muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should print all even numbers from 0 to 8 (this includes 0 and 8). But the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   def skipCount(start, increment, stop):
   =====
       counter = start
   =====
       while counter < stop:
   =====
           print(counter)
   =====
           counter += increment
   =====
       return counter
   =====
   print(skipCount(0,2,9))
   =====
   print(skipCount(0,2,8)) #distractor

.. parsonsprob:: ch5ex4muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should result in an infinite loop. But the blocks have been mixed up and include an extra block that ins't needed in the solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   def loopMe(first, second):
   =====
       while first > second:
   =====
       while first == second: #distractor
   =====
           print('Am I infinitely looping?')
   =====
       return True
   =====
   loopMe(7, 4)
   =====
   loopMe(1, 3) #distractor

.. parsonsprob:: ch5ex5muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should calculate and print the average of a list of numbers using a for loop. Start by initializing the variable <i>sum</i> and then create the list of numbers.  The blocks have been mixed up and include an extra block that ins't needed in the solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   sum = 0
   =====
   numbers = [90, 94, 85, 78, 87, 98]
   =====
   for number in numbers:
   =====
       sum = sum + number
   =====
   print(sum / 6)
   =====
   print(sum / 5) #distractor

.. parsonsprob:: ch5ex6muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should calculate and print the sum of all numbers between 0 and 30. Start by initializing the variable <i>sum</i>. The blocks have been mixed up and include an extra block that ins't needed in the solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   sum = 0
   =====
   numbers = range(31)
   =====
   numbers = range(30) #distractor
   =====
   for number in numbers:
   =====
       sum = sum + number
   =====
   print(sum)

.. parsonsprob:: ch5ex7muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should calculate the sum of all odd numbers between 0 and 30. Start by initializing the variable <i>sum</i> and loop through the odd numbers. The blocks have been mixed up and include an extra block that isn't needed in the solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   sum = 0
   =====
   numbers = range(1,30,2)
   =====
   numbers = range(0,29,2) #distractor
   =====
   for number in numbers:
   =====
       sum = sum + number
   =====
   print(sum)

.. parsonsprob:: ch5ex8muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program should find the sum of every multiple of 3 between 3 and 36 and print the sum after each addition.  But, the blocks have been mixed up and include an extra block that isn't needed in the solution. Drag the needed blocks from the left and put them in the correct order on the right. Click the <i>Check Me</i> button to check your solution.</p>
   -----
   sum = 0
   =====
   numbers = range(3, 37, 3)
   =====
   for number in numbers:
   =====
       sum = sum + number
   =====
       print(sum)
   =====
       print(number) #distractor

.. parsonsprob:: ch5ex9muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program should find the average pH of 6 water samples. But, the blocks have been mixed up and include an extra block that isn't needed in the solution. Drag the needed blocks from the left and put them in the correct order on the right. Click the <i>Check Me</i> button to check your solution.</p>
   -----
   total = 0
   =====
   pHvalues =  [7.0, 8.2, 6.7, 7.5, 8.0, 7.2]
   =====
   for number in pHValues:
   =====
       total = total + number
   =====
       total = total * number #distractor
   =====
   average = total / 6
   =====
   print(average)

.. parsonsprob:: ch5ex10muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program should print the numbers 5 to 1 starting with 5. But, the blocks have been mixed up and include an extra block that isn't needed in the solution. Drag the needed blocks from the left and put them in the correct order on the right. Click the <i>Check Me</i> button to check your solution.</p>
   -----
   counter = 5
   =====
   while counter > 0:
   =====
       print(counter)
   =====
       counter = counter - 1
   =====
       counter = counter + 1 #distractor
