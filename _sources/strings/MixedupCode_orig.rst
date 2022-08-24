Mixed-up Code Questions
-----------------------
.. parsonsprob:: str-mixed-emotion
    :adaptive:
    :numbered: left
    :practice: T

    Create the function, ``mood(emotion)``, to return a string with the ``emotion``
    followed by ``" 4 you"``. For example, if ``emotion`` is "So happy" it should
    return ``"So happy 4 you!"``.
    -----
    def mood(emotion):
    =====
        out = emotion + " 4 you!"
    =====
        out = emotion + "4 you!" #paired
    =====
        return out
    =====
        return emotion #paired


.. activecode::  str-mixed-emotion-ac
    :practice: T
    :autograde: unittest

    Write the function, ``mood(emotion)``, to return a string with the ``emotion``
    followed by ``" 4 you"``. For example, if ``emotion`` is "So happy" it should
    return ``"So happy 4 you!"``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(mood("So happy"), "So happy 4 you!", 'mood("So happy")')
            self.assertEqual(mood("So HaPpY"), "So HaPpY 4 you!",  'mood("So HaPpY")')
            self.assertEqual(mood("HAPPY"), "HAPPY 4 you!", 'mood("HAPPY")')
            self.assertEqual(mood("happy"), "happy 4 you!", 'mood("happy")')
            self.assertEqual(mood("Happy"), "Happy 4 you!", 'mood("Happy")')
            self.assertEqual(mood("So glad"), "So glad 4 you!", 'mood("So glad")')

    myTests().main()



.. parsonsprob:: str-mixed-book
    :adaptive:
    :numbered: left
    :practice: T

    Create the function, ``item_purchase(item, price)``, to return a string with the ``item`` purchased followed by the ``price``.
    For example if ``item`` is "new book" and price is ``12`` the function should return ``"My new book cost $12"``.
    -----
    def item_purchase(item, price):
    =====
    def item_purchase(price, item): #paired
    =====
        out = "My " + item + " cost $" + str(price)
    =====
        out = "My " + item + " cost $" + price #paired
    =====
        return out
    =====
        Return out #paired



.. activecode::  str-mixed-book-ac
    :practice: T
    :autograde: unittest

    Write the function, ``item_purchase(item, price)``, to return a string with the ``item`` purchased followed by the ``price``.
    For example if ``item`` is "new book" and price is ``12`` the function should return ``"My new book cost $12"``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(item_purchase("new book", "12"), "My new book cost $12", 'item_purchase("new book", "12")')
            self.assertEqual(item_purchase("makeup", "14"), "My makeup cost $14", 'item_purchase("makeup", "14")')
            self.assertEqual(item_purchase("new bag", "12.31"), "My new bag cost $12.31", 'item_purchase("new bag", "12.31")')
            self.assertEqual(item_purchase("backpack", "0"), "My backpack cost $0", 'item_purchase("backpack", "0")')

    myTests().main()



.. parsonsprob:: str-mixed-code
    :adaptive:
    :numbered: left
    :practice: T

    Create the function ``phrase(person, thing)``, to return a string with a ``person`` of your choosing followed by a ``thing``
    of what that person likes to do. For example, if the ``person`` is ``sam`` and ``thing`` is ``Likes to code``, the
    returned string should be ``"Sam likes to code"``. Make sure that ``person`` is capitalized and ``thing`` is lowercase.
    -----
    def phrase(person, thing):
    =====
    def phrase(person, thing) #paired
    =====
        person = person.capitalized()
        thing = thing.lower()
    =====
        person.capitalized() #paired
        thing.lower()
    =====
        return person + " " + thing
    =====
        return person + thing #paired


.. activecode::  str-mixed-code-ac
    :practice: T
    :autograde: unittest

    Write the function, ``phrase(person, thing)``, to return a string with a ``person`` of your choosing followed by a ``thing``
    of what that person likes to do. For example, if the ``person`` is ``Sam`` and ``thing`` is ``Likes to code``, the
    returned string should be ``"Sam likes to code"``.  Make sure that ``person`` is capitalized and ``thing`` is lowercase.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(phrase("sam", "Likes to code"), "Sam likes to code", 'phrase("sam", " Likes to code")')
            self.assertEqual(phrase("mary-anne", "likes to sing"), "Mary-anne likes to sing", 'phrase("mary-anne", " likes to sing")')
            self.assertEqual(phrase("ANNA", "likes to dance"), "Anna likes to dance", 'phrase("ANNA", " likes to dance")')


    myTests().main()


.. parsonsprob:: str-mixed-time
    :adaptive:
    :numbered: left
    :practice: T

    Let's imagine that last weekend you went on a camping trip with your family. Create a function
    ``time(hours, minutes)``. Return a string that says how long it took you to get home in minutes. For example,
    if ``hours`` was ``3`` and ``minutes`` was ``13``, the returned string should be, ``"It took us 193 minutes to get home"``.
    -----
    def time(hours, minutes):
    =====
    def time(hours, minutes) #paired
    =====
        total = hours * 60 + minutes
    =====
        total = hours + 60 * minutes #paired
    =====
        return "It took us " + str(total) + " minutes to get home"
    =====
        return "It took us " + str(total) " minutes to get home"  #paired


.. activecode::  str-mixed-time-ac
    :practice: T
    :autograde: unittest

    Let's imagine that last weekend you went on a camping trip with your family. Write a function
    ``time(hours, minutes)``.  Return a string that says how long it took you to get home in minutes. For example,
    if ``hours`` was ``3`` and ``minutes`` was ``13``, the returned string should be, ``"It took us 193 minutes to get home"``.

    ~~~~


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(time(2, 45), "It took us 165 minutes to get home", 'time(2, 45)')
            self.assertEqual(time(2, 15), "It took us 135 minutes to get home", 'time(2, 15)')
            self.assertEqual(time(1, 23), "It took us 83 minutes to get home", 'time(1, 23)')

    myTests().main()


.. parsonsprob:: str-mixed-feeling
    :adaptive:
    :numbered: left
    :practice: T

    Create the function, ``food(fave, least_fave)``, to return a string with your ``fave`` food followed by your ``least_fave`` food both in lowercase.
    For example, if your ``fave`` food is "PIZZA" and your ``least_fave`` is "broccoli", return
    ``"My favorite food is pizza, but I don't like broccoli"``. Be sure to change ``fave`` and ``least_fave`` to lowercase.
    -----
    def food(fave, least_fave):
    =====
        fave_l = fave.lower()
        least_l = least_fave.lower()
        start = "My favorite food is "
        end = ", but I don't like "
    =====
        fave.lower() #paired
        least_fave.lower()
        start = "My favorite food is "
        end = ", but I don't like "
    =====
        return start + fave_l + end + least_l
    =====
        return start + fave_l + least_l + end #paired


.. activecode::  str-mixed-feeling-ac
    :practice: T
    :autograde: unittest

    Write the function, ``food(fave, least_fave)``, to return a string with your ``fave`` food followed by your ``least_fave`` food both in lowercase.
    For example, if your ``fave`` food is "PIZZA" and your ``least_fave`` is "broccoli", return
    ``"My favorite food is pizza, but I don't like broccoli"``. Be sure to change ``fave`` and ``least_fave`` to lowercase.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(food("pizza", "broccoli"), "My favorite food is pizza, but I don't like broccoli", 'food("pizza", "broccoli")')
            self.assertEqual(food("pizza", "pizza"), "My favorite food is pizza, but I don't like pizza", 'food("pizza", "pizza")')
            self.assertEqual(food("HAMBURGER", "caRrOts"), "My favorite food is hamburger, but I don't like carrots", 'food("HAMBURGER", "caRrOts")')

    myTests().main()


.. parsonsprob:: str-mixed-animal
    :adaptive:
    :numbered: left
    :practice: T

    Create the function, ``animal(type)``, to return the string, "My ``type_animal`` looks like a Muppet" with ``type`` being
    any animal of your choosing. For example, if your ``type`` is "sheepdog", then the returned string should
    be ``"My sheepdog looks like a Muppet"``.
    -----
    def animal(type):
    =====
        end = " looks like a Muppet"
    =====
        end = "looks like a Muppet" #paired
    =====
        return "My " + type + end
    =====
        return "My" + type + end #paired


.. activecode::  str-mixed-animal-ac
    :practice: T
    :autograde: unittest

    Finish the function, ``animal(type)``, to return the string, "My ``type_animal`` looks like a Muppet" with ``type`` being
    any animal of your choosing. For example, if your ``type`` is "sheepdog", then the returned string should
    be ``"My sheepdog looks like a Muppet"``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(animal("sheepdog"), "My sheepdog looks like a Muppet", 'animal("sheepdog")')
            self.assertEqual(animal("FROG"), "My FROG looks like a Muppet", 'animal("FROG")')
            self.assertEqual(animal("c a t"), "My c a t looks like a Muppet", 'animal("c a t")')

    myTests().main()


.. parsonsprob:: str-mixed-add
    :adaptive:
    :numbered: left
    :practice: T

    Let's imagine you went on a huge shopping spree. Create the function, ``total(store1, store2, store3)``,
    to return the total of how much you spent at the three stores. For example, if you spent ``30`` in ``store1``, ``13`` in ``store2``, and ``56`` in ``store3``,
    ``ans`` return ``"$30 + $13 + $56 = $99"``.
    -----
    def total(store1, store2, store3):
    =====
        total = store1 + store2 + store3
    =====
        s1 = "$" + str(store1)
        s2 = "$" + str(store2)
        s3 = "$" + str(store3)
        t = "$" + str(total)
    =====
        return s1 + " + " + s2 + " + " + s3 + " = " + t
    =====
        return s1 + s2 + s3 + t #paired


.. activecode::  str-mixed-add-ac
    :practice: T
    :autograde: unittest

    Let's imagine you went on a huge shopping spree. Write the function, ``total(store1, store2, store3)``,
    to return the total of how much you spent at the three stores. For example, if you spent ``30`` in ``store1``, ``13`` in ``store2``, and ``56`` in ``store3``,
    ``ans`` return ``"$30 + $13 + $56 = $99"``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(total(30,13,56), "$30 + $13 + $56 = $99", 'total(30,13,56,99)')
            self.assertEqual(total(1.5,3.5,13), "$1.5 + $3.5 + $13 = $18.0", 'total(1.5,3.5,13,17)')
            self.assertEqual(total(1,1,1), "$1 + $1 + $1 = $3", 'total(1,1,1,3)')


    myTests().main()


.. parsonsprob:: str-mixed-wizard
    :adaptive:
    :numbered: left
    :practice: T

    Create the function ``combine(var1, var2)``, to return a string by combining the two variables ``var1`` and ``var2``.
    For example, if ``var1`` is "i am a" and ``var2`` is "CS wizard", the function should return the string, ``"I am a cs wizard"``.
    Make sure ``var1`` is capitalized and ``var2`` is lowercase.
    -----
    def combine(var1, var2):
    =====
        var1 = var1.capitalize()
        var2 = var2.lower()
    =====
        var1.capitalize() #paired
        var2.lower()
    =====
        return var1 + " " + var2
    =====
        return var1 + var2 #paired


.. activecode::  str-mixed-wizard-ac
    :practice: T
    :autograde: unittest

    Write the function, ``combine(var1, var2)``, to return a string by combining the two variables ``var1`` and ``var2``.
    For example, if ``var1`` is "i am a " and ``var2`` is "CS wizard", the function should return the string, ``"I am a cs wizard"``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(combine("i am a", "CS wizard"), "I am a cs wizard", 'combine("i am a", "CS wizard")')
            self.assertEqual(combine("Potatos", "are cool"), "Potatos are cool", 'combine("Potatos", "are cool")')
            self.assertEqual(combine("i am a", "Meatloaf"), "I am a meatloaf", 'combine("i am a", "Meatloaf")')
            self.assertEqual(combine("I like", "bubbles"), "I like bubbles", 'combine("I like", "bubbles")')

    myTests().main()


.. parsonsprob:: str-mixed-colors
    :adaptive:
    :numbered: left
    :practice: T

    Create the function, ``colors(col1, col2)``, should return a string combining the variables ``col1`` and ``col2``. For example,
    if ``col1`` and ``col2`` is "'red'" and "'blue'", then the function should return ``Red is a primary color and
    so is blue``.  Be sure to capitalize the first color and lowercase at second.
    -----
    def colors(col1, col2):
    =====
        mid = " is a primary color, and so is "
    =====
        mid = "is a primary color, and so is" #paired
    =====
        col1 = col1.capitalize() + mid
        col2 = col2.lower()
    =====
        col1 = col1.lower() + mid #paired
        col2 = col2.capitalize()
    =====
        return col1 + col2
    =====
        return col1 + " " + col2 #paired


.. activecode::  str-mixed-colors-ac
    :practice: T
    :autograde: unittest

    Write the function, ``colors(col1, col2)``, to return a string combining the variables ``col1`` and ``col2``.
    For example, if ``col1`` and ``col2`` is "'Red'" and "'blue'", then the function should return ``Red is a primary color and
    so is blue``.  Be sure to capitalize the first color and lowercase the second.
    ~~~~

    ====
    from unittest.gui import TestCaseGui


    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(colors("red", "blue"), "Red is a primary color, and so is blue", "colors('red', 'blue')")
            self.assertEqual(colors("yellow", "Blue"), "Yellow is a primary color, and so is blue", "colors('yellow', 'Blue')")
            self.assertEqual(colors("Yellow", "red"), "Yellow is a primary color, and so is red", "colors('Yellow', 'red')")
            self.assertEqual(colors("Red", "Yellow"), "Red is a primary color, and so is yellow", "colors('Red', 'Yellow')")
            self.assertEqual(colors("blue", "RED"), "Blue is a primary color, and so is red", "colors('blue', 'RED')")

    myTests().main()


.. parsonsprob:: str-mixed-dogs
    :adaptive:
    :numbered: left
    :practice: T

    Create the function, ``fave_animal(animal)``, to return the string, "Petting ``animal`` makes me happier than anything else" where ``animal``
    is any animal of your choice. For example, if ``animal`` is "dogs", then the function should return, ``"Petting dogs makes
    me happier than anything else"``.
    -----
    def fave_animal(animal):
    =====
        end = " makes me happier than anything else"
    =====
        end = "makes me happier than anything else" #paired
    =====
        return "Petting " + animal + end
    =====
        return "Petting " + "animal" + end #paired

.. activecode::  str-mixed-dogs-ac
    :practice: T
    :autograde: unittest

    Finish the function, ``fave_animal(animal)``, to return the string, "Petting ``animal`` makes me happier than anything else" where ``animal``
    is any animal of your choice. For example, if ``animal`` is "dogs", then the function should return, ``"Petting dogs makes
    me happier than anything else"``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(fave_animal("dogs"), "Petting dogs makes me happier than anything else", "fave_animal('dogs')")
            self.assertEqual(fave_animal("ca ts"), "Petting ca ts makes me happier than anything else", 'fave_animal("ca ts")')
            self.assertEqual(fave_animal("Horses"), "Petting Horses makes me happier than anything else", 'fave_animal("Horses")')

    myTests().main()
