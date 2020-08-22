Mixed-up Code Questions
-----------------------
.. parsonsprob:: cndtnl-mixed-three
    :practice: T
    :adaptive:
    :numbered: left

    The following program should prints “x is less than 3” and then “All done” when x is less than 3.
    Be sure to indent correctly!
    -----
    x = 0
    =====
    if x < 3:
    =====
        print ("x is less than 3")
    =====
    print ("All done")

.. parsonsprob:: cndtnl-mixed-hi
    :adaptive:
    :practice: T
    :numbered: left

    The following program should prints “Hello” if x is less than 2, "Hey" if x is greater than 2,
    and "Hi" if x is 2. Be sure to indent correctly and look out for extra code blocks!
    -----
    x = 2
    =====
    if x < 2:
    =====
    if x < 2 #paired
    =====
        print ("Hello")
    =====
    elif x > 2:
    =====
    else x > 2: #paired
    =====
        print ("Hey")
    =====
    else:
    =====
        print ("Hi")
    =====
        print "Hi" #paired
    =====
    elif x >= 2: #distractor

.. parsonsprob:: cndtnl-mixed-price
   :practice: T
   :adaptive:
   :numbered: left

   The following program should calculate the total price, but the lines are mixed up. The price is
   based on the weight. Items that weigh less than 2 pounds should cost 1.5. Items that weigh more
   than 2 pounds should cost 1.3. Be sure to indent correctly!
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
   print(weight)
   print(price)
   print(total)

.. parsonsprob:: cndtnl-mixed-ten
    :practice: T
    :adaptive:
    :numbered: left

    The following program should print ``x is a number from 1 to 10`` if the value of x is 1-10,
    ``x is a number less than 1`` if the value of x is zero or below, and ``x is a number greater than 10``
    if the value of x is more than 10. Be sure to indent correctly and look out for extra code blocks!
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
    is less than or equal to 12 miles the cost is $2.00 a mile, and if the distance traveled is more
    than 12 miles the cost is $1.50 a mile. Be sure to indent correctly and look out for extra code blocks!
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
    total = distance / rate #distractor
    =====
    print("Total cost of trip: " + str(total))

.. parsonsprob:: cndtnl-mixed-nested
    :practice: T
    :adaptive:
    :numbered: left

    Arrange the following code so that after x and y are defined, they are compared and if the value of x
    is less than y it prints ``"x is less than y"``; if x is greater than y it prints ``"x is greater
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

.. parsonsprob:: cndtnl-mixed-logical
    :practice: T
    :adaptive:
    :numbered: left

    Arrange the following code so that after x and y are defined, they are compared and if the value of x
    and y are the same object it prints ``"x and y are the same"``; if x and y have the same value it
    prints ``"x and y have the same value"``; and prints ``"x and y are not similar"`` if x and y do not
    fit the other conditionals. Be sure to indent correctly!
    -----
    x = 12
    =====
    y = x
    =====
    if x is y:
    =====
        print("x and y are the same")
    =====
    elif x == y:
    =====
        print("x and y have the same value")
    =====
    else:
    =====
        print("x and y have different values")

.. parsonsprob:: cndtnl-mixed-grade
    :practice: T
    :adaptive:
    :numbered: left

    Arrange the code to print the grade equivalent (string) for a score. It should return E for any value
    below 60, D for 61 to 69, C for 70 to 79, B for 80 to 89 and A for 90 and above.
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

.. parsonsprob:: cndtnl-mixed-even
    :practice: T
    :adaptive:
    :numbered: left

    The following program should determine whether a number is odd or even, but the lines are mixed up.
    Be sure to indent correctly and watch out for extra pieces of code!
    -----
    x = 3
    =====
    if x % 2 == 0:
    =====
    if x / 2 == 0: #paired
    =====
    print("x is even!")
    =====
    else:
    =====
    print("x is odd")
    =====
    elif x % 2 == 1: #distractor

.. parsonsprob:: cndtnl-mixed-goodJob
    :practice: T
    :adaptive:
    :numbered: left

    The following program should print "Good job" when the number is between 1 and 10 (inclusive) or is 15
    and "Fail" when it is not. Be sure to indent correctly and watch out for extra pieces of code!
    -----
    x = 8
    =====
    if x >= 1 and x <= 10 or x == 15:
    =====
    print("Good job")
    =====
    else:
    =====
    print("Fail")
    =====
    elif x == 15: #distractor
