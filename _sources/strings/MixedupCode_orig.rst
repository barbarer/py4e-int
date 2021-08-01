Mixed-up Code Questions
-----------------------
.. parsonsprob:: str-mixed-emotion
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following segment should print your feelings by using the variable 
    "emotion" in the variable "feeling". For example, if you're feeling
    "So happy" the statement should print "So happy 4 you!" The blocks 
    have been mixed up, and include two extra blocks that are not correct.  
    Drag the blocks from the left and put them in the correct order on the 
    right.  Click the "Check Me" button to check your solution.
    -----
    def mood(emotion):
    =====
    feeling = emotion + str(4) + " you!"
    =====
    feeling = emotion + 4 + " you!" #paired
    =====
    print(feeling)
    =====
    return feeling


.. activecode::  str-mixed-emotion-ac

    Finish the code below to print how you're feeling by using the variable emotion 
    in the variable "feeling". For example, if you're feeling "So happy" the statement 
    should print "So happy 4 you!"
    ~~~~
    def mood(emotion):

    
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(mood("So happy"), "So happy 4 you!", "Testing mood() with correct string output")
        
    myTests().main()



.. parsonsprob:: str-mixed-book
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print the object purchased and the price of it by using 
    the variable "statement". For example, if the object is a "new book" and costed 12 dollars, 
    then the statement should be "My new book cost $12". But, the blocks have been mixed up and 
    include an extra block that isn't correct.  Drag the needed blocks from the left and put them 
    in the correct order on the right.  Click the "Check Me" button to check your solution.
    -----
    def item_purchase(item, price):
    =====
        statement = "My " + item + " cost $" + price
    =====
        statement = "My " item " cost $" price # paired
    =====
        print(statement)
    =====
        return statement


.. activecode::  str-mixed-book-ac

    Finish the code below to print the object purchased and the price of it by using 
    the variable "statement". For example, if the object is a "new book" and costed 12 dollars, 
    then the statement should be "My new book cost $12".
    ~~~~
    def item_purchase(item, price):
    

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(item_purchase("new book", "12"), "My new book cost $12")

    myTests().main()



.. parsonsprob:: str-mixed-code
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print a phrase about a person and what they like to do combining the variables
    "person" and "thing". For example, if the "person" is called "Sam" and they like to code, thing must be "likes
    to code", resulting in "Sam likes to code". But, the blocks have been mixed up and include an extra block that isn't correct.  
    Drag the needed blocks from the left and put them in the correct order on the right.  Click the "Check Me"
    button to check your solution.
    -----
    def phrase(person, thing):
    =====
        print(person + thing)
    =====
        print(person thing) #paired
    =====
        print("person + thing") #paired
    =====
        return person + thing


.. activecode::  str-mixed-code-ac

    Finish the code below to print a phrase about a person and what they like to do combining the variables
    "person" and "thing". For example, if the "person" is called "Sam" and they like to code, thing must be "likes
    to code", resulting in "Sam likes to code".
    ~~~~
    def phrase(person, thing):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(phrase("Sam", " likes to code"), "Sam likes to code")

    myTests().main()


.. parsonsprob:: str-mixed-time
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    Let's imagine that last weekend you went on a camping trip with your family. Now you're
    writing a program segment that says how long it took you to get home from camp. Using the variables
    numHours and numMinutes, print a phrase with the variable "phrase" that says how long it took you to 
    get home from camp. For example, if numHours was 3 hours and numMinutes was 13 minutes, the phrase 
    should be, "It takes us 3 hours and 13 minutes to get home from camp". But, the blocks have been mixed 
    up and include two extra blocks that aren't correct.  Drag the needed blocks from the left and put them 
    in the correct order on the right.  Click the "Check Me" button to check your solution.
    -----
    def timeFromCamp(numHours, numMinutes):
    =====
        phrase = "It takes us " + str(numHours) + " hours and " + str(int(numMinutes)) + " minutes to get home from camp"
    =====
        phrase = "It takes us " + numHours + " hours and " + numMinutes + " minutes to get home from camp" #paired
    =====
        phrase = "It takes us " + str(numHours) + " hours and " + str(numMinutes) + " minutes to get home from camp" #paired
    ====
        print(phrase)
    ====
        return phrase


.. activecode::  str-mixed-time-ac

    Let's imagine that last weekend you went on a camping trip with your family. Now you're
    writing a program segment that says how long it took you to get home from camp. Using the variables
    numHours and numMinutes, print a phrase with the variable "phrase" that says how long it took you to 
    get home from camp. For example, if numHours was 3 hours and numMinutes was 13 minutes, the phrase 
    should be, "It takes us 3 hours and 13 minutes to get home from camp".
    ~~~~
    def timeFromCamp(numHours, numMinutes):

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(timeFromCamp(2, 45.0), "It takes us 2 hours and 45 minutes to get home from camp")

    myTests().main()


.. parsonsprob:: str-mixed-feeling
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print your favorite and least favorite food using the variables "fave" and
    "unfave" in the variable "feeling". For example, if your fave food is pizza but your unfave is broccoli, you 
    should print, "My favorite food is pizza but I don't like broccoli". But, the blocks have been mixed up and include 
    an extra block that isn't correct. Drag the needed blocks from the left and put them in the correct order on the right. 
    Click the "Check Me" button to check your solution.
    -----
    def food(fave, unfave):
    =====
        feeling = "My favorite food is " + fave " but I don't like " + unfave
    =====
        feeling = "My favorite food is" + fave "but I don't like " + unfave #paired
    =====
        print(feeling)
    =====
        return feeling


.. activecode::  str-mixed-feeling-ac

    Finish the code below to print your favorite and least favorite food using the variables "fave" and
    "unfave" in the variable "feeling". For example, if your fave food is pizza but your unfave is broccoli, you 
    should print, "My favorite food is pizza but I don't like broccoli".
    ~~~~
    def food(fave, unfave):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(food("pizza", "broccoli"), "My favorite food is pizza but I don't like broccoli")

    myTests().main()


.. parsonsprob:: str-mixed-animal
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print the phrase, "My sheepdog looks like a Muppet". But, the blocks have 
    been mixed up and include two extra blocks that are not correct.  Drag the needed blocks from the left and put 
    them in the correct order on the right.  Click the "Check Me" button to check your solution.
    -----
    animal = "sheepdog"
    =====
    animal = [sheepdog] #distractor
    =====
    animal = "sheepdog #distractor
    =====
    print("My " + animal + " looks like a Muppet")


.. activecode::  str-mixed-animal-ac

    Finish the code below to print "My sheepdog looks like a Muppet" using the variable animal in the variable "comparison".
    For example, if the animal is sheepdog, comparison should be "My sheepdog looks like a Muppet".
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

    Let's imagine you went on a huge shopping spree. To double-check how much you spent, you are adding up 
    how much money you used at each store. In the following program segment, print how much you spent at the first 
    three stores and then the total using the variables "store1", "store2", "store3", and "ans" in the "total" variable. 
    For example, if you spent $30 in the first store, $13 in the second store, and $56 in the last store, you should 
    print, "$30 + $13 + $56 = $99". But, the blocks have been mixed up and include an extra block that isn't correct.  
    Drag the needed blocks from the left and put them in the correct order on the right. Click the Check Me button to 
    check your solution.
    -----
    def addition(store1, store2, store3, ans):
    =====
        total = "$" + str(store1) + " + " + "$" + str(store2) + " + " + "$" + str(store3) + " = " + "$" + str(ans)
    =====
        total = "$" + str(num1) + "$" + str(num2) + "$" + str(num3) = "$" + str(ans) #paired
    =====
        print(total)
    =====
        return total


.. activecode::  str-mixed-add-ac

    Let's imagine you went on a huge shopping spree. To double-check how much you spent, you are adding up 
    how much money you used at each store. In the following program segment, print how much you spent at the first 
    three stores and then the total using the variables "store1", "store2", "store3", and "ans" in the "total" variable. 
    For example, if you spent $30 in the first store, $13 in the second store, and $56 in the last store, you should 
    print, "$30 + $13 + $56 = $99".
    ~~~~
    def addition(store1, store2, store3, ans):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(addition(30,13,56,99), "$30 + $13 + $56 = $99")
    myTests().main()


.. parsonsprob:: str-mixed-wizard
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should print any phrase by combining the two variables "var1" and "var2" in
    the variable var3. For example, if var1 is "I am a " and var2 is "CS wizard", var3 should be "I am a CS wizard".
    But, the blocks have been mixed up and include an extra block that isn't correct.  Drag the needed blocks from 
    the left and put them in the correct order on the right.  Click the "Check Me" button to check your solution.
    -----
    def combination(var1, var2):
    =====
        var3 = var1 + var2
    =====
        var3 = var1 + " " + var2 #paired
    =====
        print(var3)
    =====
        return var3


.. activecode::  str-mixed-wizard-ac

    Finish the code below to print any phrase by combining the two variables "var1" and "var2" in
    the variable var3. For example, if var1 is "I am a " and var2 is "CS wizard", var3 should be "I am a CS wizard".
    ~~~~
    def combination(var1, var2):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(var1, "I am a ")
            self.assertEqual(var2, "CS wizard")
            self.assertEqual(combination("I am a ", "CS wizard"), "I am a CS wizard")

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
    col2 = "blue" #paired
    =====
    print(col1 + " is a primary color, and so is " + col2)


.. activecode::  str-mixed-colors-ac

    Fix and complete the code below to print "'Red' is a primary color, and so is 'blue'" by fixing the variables col1 and col2 and then combining them in the variables colors.
    ~~~~
    col1 = Red
    col2 = blue
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