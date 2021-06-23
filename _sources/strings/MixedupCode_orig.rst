Mixed-up Code Questions
-----------------------
.. parsonsprob:: str-mixed-emotion
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following segment should print the statement, "So happy 4 you!". The blocks have been mixed up, and include two extra blocks that are not correct.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
    -----
    emotion = "So happy "
    =====
    emotion = "So happy ' #distractor
    =====
    print(emotion + 4 + " you!") #distractor
    =====
    print(emotion + str(4) + " you!")


.. activecode::  str-mixed-emotion-ac

    Finish the code below to print "So happy 4 you!" using the variable emotion.
    ~~~~
    emotion = "So happy "
    feeling = 
    print(feeling)
   
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(feeling, "So happy 4 you!", "Testing feeling with correct string output")
            self.assertEqual(emotion,"So happy ", "Testing emotion to be equal to 'So happy '")
        
    myTests().main()



.. parsonsprob:: str-mixed-book
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print the phrase, "My new book cost $12". But, the blocks have been mixed up and include an extra block that isn't correct.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
    -----
    item = "new book"
    price = "12"
    =====
    print("My " + item + " cost $" + price)
    =====
    print("My " item " cost $" price) #paired


.. activecode::  str-mixed-book-ac

    Finish the code below to print "My new book cost $12" using the variables item and price.
    ~~~~
    item = "new book"
    price = "12"
    total =

    print(total)
    

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(total, "My new book cost $12")
            self.assertEqual(item,"new book")
            self.assertEqual(price, "12")

    myTests().main()



.. parsonsprob:: str-mixed-code
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print the phrase, "Sam likes to code". But, the blocks have been mixed up and include an extra block that isn't correct.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
    -----
    person = "Sam "
    thing = "likes to code"
    =====
    print(person + thing)
    =====
    print(person thing) #paired
    =====
    print("person + thing") #paired


.. activecode::  str-mixed-code-ac

    Finish the code below to print "Sam likes to code" using the variables var1 and var2.
    ~~~~
    person = "Sam"
    thing = "likes to code"
    sentence = 
    print(sentence)

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(sentence, "Sam likes to code")
            self.assertEqual(person, "Sam")
            self.assertEqual(thing, "likes to code")

    myTests().main()


.. parsonsprob:: str-mixed-time
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print the phrase, "It takes us 2 hours and 45 minutes to get home from camp". But, the blocks have been mixed up and include two extra blocks that aren't correct.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
    -----
    numHours = 2
    numMinutes = 45.0
    =====
    print("It takes us " + str(numHours) + " hours and " + str(int(numMinutes)) + " minutes to get home from camp")
    =====
    print("It takes us " + numHours + " hours and " + numMinutes + " minutes to get home from camp") #paired
    =====
    print("It takes us " + str(numHours) + " hours and " + str(numMinutes) + " minutes to get home from camp") #paired


.. activecode::  str-mixed-time-ac

    Finish the code below to print "It takes us 2 hours and 45 minutes to get home from camp" using the variables numHours and numMinutes.
    ~~~~
    numHours = 2
    numMinutes = 45.0
    numTotal = 

    print(numTotal)

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(numTotal, "It takes us 2 hours and 45 minutes to get home from camp")
            self.assertEqual(numHours, 2)
            self.assertEqual(numMinutes, 45.0)

    myTests().main()


.. parsonsprob:: str-mixed-feeling
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print the phrase, "Grace loves grapes". But, the blocks have been mixed up and include an extra block that isn't correct.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
    -----
    feeling = "loves"
    =====
    print("Grace" + feeling + "grapes") #distractor
    =====
    print("Grace " + feeling + " grapes")


.. activecode::  str-mixed-feeling-ac

    Finish the code below to print "Grace loves grapes" using the variable feeling.
    ~~~~
    feeling = "loves"
    phrase =

    print(phrase)

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(phrase, "Grace loves grapes")
            self.assertEqual(feeling, "loves")

    myTests().main()


.. parsonsprob:: str-mixed-animal
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print the phrase, "My sheepdog looks like a Muppet". But, the blocks have been mixed up and include two extra blocks that are not correct.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
    -----
    animal = "sheepdog"
    =====
    animal = [sheepdog] #distractor
    =====
    animal = "sheepdog #distractor
    =====
    print("My " + animal + " looks like a Muppet")


.. activecode::  str-mixed-animal-ac

    Finish the code below to print "My sheepdog looks like a Muppet" using the variable animal.
    ~~~~
    animal = 
    comparison = 

    print(comparison)

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(comparison, "My sheepdog looks like a Muppet")
            self.assertEqual(animal, "sheepdog")

    myTests().main()


.. parsonsprob:: str-mixed-add
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print the phrase, "3 + 300 + 7 = 310". But, the blocks have been mixed up and include an extra block that isn't correct.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
    -----
    num1 = 3
    num2 = 300
    num3 = 7
    ans = 310
    =====
    print(str(num1) + " + " + str(num2) + " + " + str(num3) + " = " + str(ans))
    =====
    print(str(num1) + str(num2) + str(num3) = str(ans)) #distractor


.. activecode::  str-mixed-add-ac

    Finish the code below to print "3 + 300 + 7 = 310" using the variables num1, num2, num3, and ans.
    ~~~~
    num1 = 
    num2 = 
    num3 = 
    ans = 
    total = 

    print(total)
    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(total, "3 + 300 + 7 = 310")
            self.assertEqual(num1, 3)
            self.assertEqual(num2, 300)
            self.assertEqual(num3, 7)
            self.assertEqual(ans, 310)
    myTests().main()


.. parsonsprob:: str-mixed-wizard
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print the phrase, "I am a CS wizard". But, the blocks have been mixed up and include an extra block that isn't correct.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
    -----
    var1 = "I am a "
    var2 = "CS wizard"
    =====
    print(var1 + var2)
    =====
    print(var1 + " " + var2) #paired


.. activecode::  str-mixed-wizard-ac

    Finish the code below to print "Sam likes to code" using the variables var1 and var2.
    ~~~~
    var1 = "I am a "
    var2 = 
    var3 =

    print(var3)

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(var1, "I am a ")
            self.assertEqual(var2, "CS wizard")
            self.assertEqual(var3, "Sam likes to code")

    myTests().main()


.. parsonsprob:: str-mixed-colors
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print the phrase, "'Red' is a primary color, and so is 'blue'". But, the blocks have been mixed up and include an extra block that isn't correct.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
    -----
    col1 = "'Red'"
    col2 = "'blue'"
    =====
    col1 = "Red"
    col2 = "blue" #distractor
    =====
    print(col1 + " is a primary color, and so is " + col2)


.. activecode::  str-mixed-colors-ac

    Write the code below to print "'Red' is a primary color, and so is 'blue'" using the variables col1 and col2.
    ~~~~
    col1 =
    col2 =
    colors = 

    print(colors)

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(colors, "'Red' is a primary color, and so is 'blue'")
            self.assertEqual(col1, "'Red'")
            self.assertEqual(col2, "'blue'")

    myTests().main()


.. parsonsprob:: str-mixed-dogs
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print the phrase, "Petting dogs makes me happier than anything else". But, the blocks have been mixed up and include several extra blocks that are not correct.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
    -----
    var1 = "dogs"
    =====
    var1 = dogs #distractor
    =====
    var1 = "dogs' #distractor
    =====
    var1 = [dogs] #distractor
    =====
    print("Petting " + var1 + " makes me happier than anything else")

.. activecode::  str-mixed-dogs-ac

    Finish the code below to print "Petting dogs makes me happier than anything else" using the variable var1.
    ~~~~
    var1 = "dogs"
    doggo =

    print(doggo)
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(doggo, "Petting dogs makes me happier than anything else")
            self.assertEqual(var1, "dogs")

    myTests().main()