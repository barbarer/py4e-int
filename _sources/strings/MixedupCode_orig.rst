Mixed-up Code Questions
-----------------------
.. parsonsprob:: str-mixed-emotion
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following function should return your feelings by using the variable 
    "emotion". For example, if you're feeling "So happy" the statement should 
    return "So happy 4 you!" The blocks have been mixed up, and include an 
    extra block that are not correct. Drag the blocks from the left and put 
    them in the correct order on the right.  Click the "Check Me" button to 
    check your solution.
    -----
    def mood(emotion):
    =====
        return emotion + " " +  str(4) + " you!"
    =====
        return emotion + " " + 4 + " you!" #paired


.. activecode::  str-mixed-emotion-ac

    Finish the function below to return how you're feeling by using the variable emotion. 
    For example, if you're feeling "So happy" the statement should print "So happy 4 you!"
    ~~~~
    def mood(emotion):

    
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(mood("So happy"), "So happy 4 you!", "Testing mood() with correct string output")
            self.assertEqual(mood("So HaPpY"), "So HaPpY 4 you!", "Testing mood() with correct string output")
            self.assertEqual(mood("HAPPY"), "HAPPY 4 you!", "Testing mood() with correct string output")
            self.assertEqual(mood("happy"), "happy 4 you!", "Testing mood() with correct string output")
            self.assertEqual(mood("Happy"), "Happy 4 you!", "Testing mood() with correct string output")
            self.assertEqual(mood("So glad"), "So glad 4 you!", "Testing mood() with correct string output")
        
    myTests().main()



.. parsonsprob:: str-mixed-book
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following function should return the object purchased and the price of it. For example, 
    if the object is a "new book" and the price was "12" dollars, then the statement should be 
    "My new book cost $12". But, the blocks have been mixed up and include an extra block that isn't 
    correct.  Drag the needed blocks from the left and put them in the correct order on the right.  
    Click the "Check Me" button to check your solution.
    -----
    def item_purchase(item, price):
    =====
        return "My " + item + " cost $" + price
    =====
        return "My " item " cost $" price #paired


.. activecode::  str-mixed-book-ac

    Finish the code below to return the object purchased and the price of it. For example, 
    if the object is a "new book" and the price was "12" dollars, then the statement should 
    be "My new book cost $12".
    ~~~~
    def item_purchase(item, price):
    

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(item_purchase("new book", "12"), "My new book cost $12")
            self.assertEqual(item_purchase("makeup", "14"), "My makeup cost $14")
            self.assertEqual(item_purchase("new bag", "12.31"), "My new bag cost $12.31")
            self.assertEqual(item_purchase("backpack", "0"), "My backpack cost $0")

    myTests().main()



.. parsonsprob:: str-mixed-code
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following function should return a phrase about a person and what they like to do combining the variables
    "person" and "thing". For example, if the "person" is called "Sam" and "thing" is "likes to code", the
    returned phrase must be "Sam likes to code". But, the blocks have been mixed up and include two extra blocks that isn't correct.  
    Drag the needed blocks from the left and put them in the correct order on the right.  Click the "Check Me"
    button to check your solution.
    -----
    def phrase(person, thing):
    =====
        return person + thing
    =====
        return person thing #paired
    =====
        return "person + thing" #paired


.. activecode::  str-mixed-code-ac

    Finish the function below to return a phrase about a person and what they like to do combining the variables
    "person" and "thing". For example, if the "person" is called "Sam" and "thing" is "likes to code", the
    returned phrase must be "Sam likes to code".
    ~~~~
    def phrase(person, thing):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(phrase("Sam", " likes to code"), "Sam likes to code")
            self.assertEqual(phrase("mary-anne", " likes to sing"), "mary-anne likes to sing")
            self.assertEqual(phrase("ANNA", " likes to dance"), "ANNA likes to dance")


    myTests().main()


.. parsonsprob:: str-mixed-time
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    Let's imagine that last weekend you went on a camping trip with your family. Now you're
    writing a function that says how long it took you to get home from camp. Using the variables
    numHours and numMinutes, return a phrase that says how long it took you to get home from camp. 
    For example, if "numHours" was "3" hours and "numMinutes" was "13" minutes, the phrase should be, 
    "It takes us 3 hours and 13 minutes to get home from camp". But, the blocks have been mixed up and 
    include two extra blocks that aren't correct.  Drag the needed blocks from the left and put them 
    in the correct order on the right.  Click the "Check Me" button to check your solution.
    -----
    def timeFromCamp(numHours, numMinutes):
    =====
        return "It takes us " + str(numHours) + " hours and " + str(int(numMinutes)) + " minutes to get home from camp"
    =====
        return "It takes us " + numHours + " hours and " + numMinutes + " minutes to get home from camp" #paired
    =====
        return "It takes us " + str(numHours) + " hours and " + str(numMinutes) + " minutes to get home from camp" #paired



.. activecode::  str-mixed-time-ac

    Let's imagine that last weekend you went on a camping trip with your family. Now you're
    writing a function that says how long it took you to get home from camp. Using the variables
    numHours and numMinutes, return a phrase that says how long it took you to get home from camp. 
    For example, if "numHours" was "3" hours and "numMinutes" was "13" minutes, the phrase 
    should be, "It takes us 3 hours and 13 minutes to get home from camp".
    ~~~~
    def timeFromCamp(numHours, numMinutes):

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(timeFromCamp(2, 45.0), "It takes us 2 hours and 45 minutes to get home from camp")
            self.assertEqual(timeFromCamp(2, 45), "It takes us 2 hours and 45 minutes to get home from camp")
            self.assertEqual(timeFromCamp(1, 23), "It takes us 1 hours and 23 minutes to get home from camp")

    myTests().main()


.. parsonsprob:: str-mixed-feeling
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following function should return your favorite and least favorite food using the variables "fave" and
    "unfave". For example, if your "fave" food is "pizza" but your "unfave" is "broccoli", the function 
    should return, "My favorite food is pizza but I don't like broccoli". But, the blocks have been mixed up and include 
    an extra block that isn't correct. Drag the needed blocks from the left and put them in the correct order on the right. 
    Click the "Check Me" button to check your solution.
    -----
    def food(fave, unfave):
    =====
        return "My favorite food is " + fave + " but I don't like " + unfave
    =====
        return "My favorite food is" + fave "but I don't like " + unfave #paired


.. activecode::  str-mixed-feeling-ac

    Finish the function below to return your favorite and least favorite food using the variables "fave" and
    "unfave". For example, if your "fave" food is "pizza" but your "unfave" is "broccoli", you 
    should return, "My favorite food is pizza but I don't like broccoli".
    ~~~~
    def food(fave, unfave):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(food("pizza", "broccoli"), "My favorite food is pizza but I don't like broccoli")
            self.assertEqual(food("pizza", "pizza"), "My favorite food is pizza but I don't like pizza")
            self.assertEqual(food("HAMBURGER", "caRrOts"), "My favorite food is HAMBURGER but I don't like caRrOts")

    myTests().main()


.. parsonsprob:: str-mixed-animal
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following function should return the phrase, "My 'type_animal' looks like a Muppet" with 'type_animal' being
    any animal of your choosing. For example, if your 'type_animal' is "sheepdog", then the returned statement should 
    be "My sheepdog looks like a Muppet". But, the blocks have been mixed up and include an extra block that are not 
    correct.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the "Check Me" 
    button to check your solution.
    -----
    def animal(type_animal):
    =====
        return "My " + type_animal + " looks like a Muppet"
    =====
        return "My + type_animal + looks like a Muppet" #paired


.. activecode::  str-mixed-animal-ac

    Finish the function below to return the phrase, "My 'type_animal' looks like a Muppet" with 'type_animal' being
    any animal of your choosing. For example, if your 'type_animal' is "sheepdog", then the returned statement should 
    be "My sheepdog looks like a Muppet".
    ~~~~
    def animal(type_animal):


    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(animal("sheepdog"), "My sheepdog looks like a Muppet")
            self.assertEqual(animal("FROG"), "My FROG looks like a Muppet")
            self.assertEqual(animal("c a t"), "My c a t looks like a Muppet")

    myTests().main()


.. parsonsprob:: str-mixed-add
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    Let's imagine you went on a huge shopping spree. To double-check how much you spent, you are adding up 
    how much money you used at each store. In the following function, return how much you spent at the first 
    three stores and then the total using the variables "store1", "store2", "store3", and "ans". 
    For example, if you spent $30 in the first store, $13 in the second store, and $56 in the last store, the function
    should return, "$30 + $13 + $56 = $99". But, the blocks have been mixed up and include an extra block that isn't correct.  
    Drag the needed blocks from the left and put them in the correct order on the right. Click the "Check Me" button to 
    check your solution.
    -----
    def addition(store1, store2, store3, ans):
    =====
        return "$" + str(store1) + " + " + "$" + str(store2) + " + " + "$" + str(store3) + " = " + "$" + str(ans)
    =====
        return "$" + str(num1) + "$" + str(num2) + "$" + str(num3) = "$" + str(ans) #paired


.. activecode::  str-mixed-add-ac

    Let's imagine you went on a huge shopping spree. To double-check how much you spent, you are adding up 
    how much money you used at each store. In the following function, return how much you spent at the first 
    three stores and then the total using the variables "store1", "store2", "store3", and "ans". 
    For example, if you spent $30 in the first store, $13 in the second store, and $56 in the last store, the function
    should return, "$30 + $13 + $56 = $99".
    ~~~~
    def addition(store1, store2, store3, ans):


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(addition(30,13,56,99), "$30 + $13 + $56 = $99")
            self.assertEqual(addition(1.5,3.5,13,17), "$1.5 + $3.5 + $13 = $17")
            self.assertEqual(addition(1,1,1,3), "$1 + $1 + $1 = $3")


    myTests().main()


.. parsonsprob:: str-mixed-wizard
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following function should return any phrase by combining the two variables "var1" and "var2". For example, 
    if "var1" is "I am a " and "var2" is "CS wizard", the function should return "I am a CS wizard".
    But, the blocks have been mixed up and include an extra block that isn't correct.  Drag the needed blocks from 
    the left and put them in the correct order on the right.  Click the "Check Me" button to check your solution.
    -----
    def combination(var1, var2):
    =====
        return var1 + var2
    =====
        return var1 + " " + var2 #paired


.. activecode::  str-mixed-wizard-ac

    Finish the function below to return any phrase by combining the two variables "var1" and "var2". For example, 
    if "var1" is "I am a " and "var2" is "CS wizard", the function should return "I am a CS wizard".
    ~~~~
    def combination(var1, var2):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(combination("I am a ", "CS wizard"), "I am a CS wizard")
            self.assertEqual(combination("Potatos ", "are cool"), "Potatos are cool")
            self.assertEqual(combination("I am a ", "meatloaf"), "I am a meatloaf")
            self.assertEqual(combination("I like", " bubbles"), "I like bubbles")

    myTests().main()


.. parsonsprob:: str-mixed-colors
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following program segment should return two primary colors using the variables col1 and col2. For example, 
    if col1 and col2 is "'Red'" and "'blue'", then the function should return "'Red' is a primary color and so is 'blue'". 
    But, the blocks have been mixed up and include an extra block that isn't correct.  Drag the needed blocks from the 
    left and put them in the correct order on the right. Click the "Check Me" button to check your solution.
    -----
    def colors(col1, col2):
    =====
        return col1 + " is a primary color, and so is " + col2
    =====
        return col1 is a primary color, and so is col2 #paired


.. activecode::  str-mixed-colors-ac

    Fix and complete the function below to return two primary colors using the variables col1 and col2. For example, 
    if col1 and col2 is "'Red'" and "'blue'", then the function should return "'Red' is a primary color and so is 'blue'". 
    ~~~~
    def colors(col1, col2):
        


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(colors("'Red'", "'blue'"), "'Red' is a primary color, and so is 'blue'")
            self.assertEqual(colors("'Yellow'", "'Blue'"), "'Yellow' is a primary color, and so is 'Blue'")
            self.assertEqual(colors("'Yellow'", "'red'"), "'Yellow' is a primary color, and so is 'red'")
            self.assertEqual(colors("'Red'", "'yellow'"), "'Red' is a primary color, and so is 'yellow'")
            self.assertEqual(colors("'blue'", "'red'"), "'blue' is a primary color, and so is 'red'")

    myTests().main()


.. parsonsprob:: str-mixed-dogs
    :adaptive:
    :numbered: left
    :practice: T
    :noindent:

    The following function should print, "Petting 'animal' makes me happier than anything else" where 'animal' is any animal
    of your choice. For example, if 'animal' is "dogs", then the function should return "Petting dogs makes me happier than 
    anything else". But, the blocks have been mixed up and include several extra blocks that are not correct. Drag the needed 
    blocks from the left and put them in the correct order on the right.  Click the "Check Me" button to check your solution.
    -----
    def fave_animal(animal):
    =====
        return "Petting " + animal + " makes me happier than anything else"
    =====
        return "Petting animal makes me happier than anything else" #paired
    =====
        return "Petting  + animal +  makes me happier than anything else" #paired

.. activecode::  str-mixed-dogs-ac

    Finish the code below to print, "Petting 'animal' makes me happier than anything else" where 'animal' is any animal
    of your choice. For example, if 'animal' is "dogs", then the function should return "Petting dogs makes me happier than 
    anything else".
    ~~~~
    def fave_animal(animal):

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(fave_animal("dogs"), "Petting dogs makes me happier than anything else")
            self.assertEqual(fave_animal("ca ts"), "Petting ca ts makes me happier than anything else")
            self.assertEqual(fave_animal("Horses"), "Petting Horses makes me happier than anything else")

    myTests().main()