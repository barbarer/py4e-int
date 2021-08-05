Function and String Mixed-Up Code Questions
--------------------------------------------

.. parsonsprob:: Function_String_MixedUpCode_1_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``joinStrings(str1, str2)`` that takes two different strings
    as parameters, ``str1`` and ``str2``, and returns them as one string with ``str1`` before ``str2``.
    For example, ``joinStrings('he','llo')`` returns ``hello``.
    -----
    def joinStrings(str1, str2):
    =====
    def joinStrings(): #paired
    =====
        joined = str1 + str2
    =====
        joined = str1.join(str2) #paired
    =====
        return joined
    =====
        Return joined #paired

.. activecode:: Function_String_MixedUpCode_1_v2_ac
    :practice: T
    :autograde: unittest

    Write a function ``joinStrings(str1, str2)`` that takes two different strings
    as parameters, ``str1`` and ``str2``, and returns them as one string with ``str1`` before ``str2``.
    For example, ``joinStrings('he','llo')`` returns ``hello``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(joinStrings('he', 'llo'),"hello","joinStrings('he', 'llo')")
            self.assertEqual(joinStrings('bye', 'bye'),"byebye","joinStrings('bye', 'bye')")
            self.assertEqual(joinStrings('Walk', 'Away'),"WalkAway","joinStrings('Walk', 'Away')")

    myTests().main()

.. parsonsprob:: Function_String_MixedUpCode_2_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``rect_per(w, h)`` that takes the width, ``w``, and the height, ``h``, as parameters. Calculate the perimeter, which is the width plus the height times two,
    and return a string in the form - ``Perimeter of rectangle with width of (w) and height of (h) is (perimeter)``.  For example, ``rect_per(5,10)``
    returns ``Perimeter of rectangle with width of 5 and height of 10 is 30``.
    -----
    def rect_per(w, h):
    =====
    def rect_per(w, h) #paired
    =====
        perimeter = (w + h) * 2
    =====
        perimeter = w + h * 2 #paired
    =====
        answer = "Perimeter of rectangle with width of " + str(w) + " and height of " + str(h) + " is " + str(perimeter)
    =====
        answer = "Perimeter of rectangle with width of " + str(w) + " and height of " + str(h) + " is " + perimeter #paired
    =====
        return answer

.. activecode:: Function_String_MixedUpCode_2_v2_ac
    :practice: T
    :autograde: unittest

    Write a function ``rect_per(w, h)`` that takes the width, ``w``, and the height, ``h``, as parameters. Calculate the perimeter, which is the width plus the height times two,
    and return a string in the form - ``Perimeter of rectangle with width of (w) and height of (h) is (perimeter)``.  For example, ``rect_per(5,10)``
    returns ``Perimeter of rectangle with width of 5 and height of 10 is 30``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(rect_per(5, 10),"Perimeter of rectangle with width of 5 and height of 10 is 30","rect_per(5, 10)")
            self.assertEqual(rect_per(2, 3),"Perimeter of rectangle with width of 2 and height of 3 is 10","rect_per(2, 3)")
            self.assertEqual(rect_per(2.5, 3.5),"Perimeter of rectangle with width of 2.5 and height of 3.5 is 12.0","rect_per(2.5, 3.5)")
            self.assertEqual(rect_per(1.3, 2.6),"Perimeter of rectangle with width of 1.3 and height of 2.6 is 7.8","rect_per(1.3, 2.6)")

    myTests().main()

.. parsonsprob:: Function_String_MixedUpCode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``cube(n)`` that takes a number, ``n``, and cubes it and returns a string in the form
    ``Cube of (n) is (n cubed)``.  For example, ``cube(4)`` returns ``Cube of 4 is 64``.
    -----
    def cube(n):
    =====
        cube_num = n ** 3
    =====
        cube_num = n * 3 #paired
    =====
        answer = "Cube of " + str(n) + " is " + str(cube_num)
    =====
        return answer
    =====
        return cube_num #paired

.. activecode:: Function_String_MixedUpCode_3_ac
    :practice: T
    :autograde: unittest

    Write a function ``cube(n)`` that takes a number, ``n``, and cubes it and returns a string in the form
    ``Cube of (n) is (n cubed)``.  For example, ``cube(4)`` returns ``Cube of 4 is 64``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(cube(3),"Cube of 3 is 27","cube(3)")
            self.assertEqual(cube(4),"Cube of 4 is 64","cube(4)")
            self.assertEqual(cube(5),"Cube of 5 is 125","cube(5)")
            self.assertEqual(cube(1),"Cube of 1 is 1","cube(1)")
            self.assertEqual(cube(1.5),"Cube of 1.5 is 3.375","cube(1.5)")

    myTests().main()


.. parsonsprob:: Function_String_MixedUpCode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``atlas(c_name)`` that takes a country name, ``c_name``, 
    as a parameter and returns a string in the form of
    ``The last letter of (c_name) is (last)``.  For example, ``atlas('Germany')`` returns
    ``The last letter of Germany is y``.
    -----
    def atlas(c_name):
    =====
        last = c_name[-1]
    =====
        last = c_name[:-1] #paired
    =====
        return("The last letter of " + c_name + " is " + last)
    =====
        return("The last letter of" + c_name + "is" + last) #paired

.. activecode:: Function_String_MixedUpCode_4_ac
    :practice: T
    :autograde: unittest

    Write a function ``atlas(c_name)`` that takes a country name, ``c_name``, 
    as a parameter and returns a string in the form of
    ``The last letter of (c_name) is (last)``.  For example, ``atlas('Germany')`` returns
    ``The last letter of Germany is y``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(atlas('Germany'),"The last letter of Germany is y","atlas('Germany')")
            self.assertEqual(atlas('USA'),"The last letter of USA is A","atlas('USA')")
            self.assertEqual(atlas('India'),"The last letter of India is a","atlas('India')")
            self.assertEqual(atlas('China'),"The last letter of China is a","atlas('China')")
            self.assertEqual(atlas('Ghana'),"The last letter of Ghana is a","atlas('Ghana')")

    myTests().main()

.. parsonsprob:: Function_String_MixedUpCode_5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``dateYear(date)`` that takes a string, ``date``, in the format MM/DD/YYYY and returns the year.
    For example, ``dateYear(11/07/2000)`` should return ``2000``.
    -----
    def dateYear(date):
    =====
        year = date[6:]
    =====
        year = date[7:] #paired
    =====
        return year

.. activecode:: Function_String_MixedUpCode_5_ac
    :practice: T
    :autograde: unittest

    Write a function ``dateYear(date)`` that takes a string, ``date``, in the format MM/DD/YYYY and returns the year.
    For example, ``dateYear(11/07/2000)`` should return ``2000``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(dateYear('03/07/1961'),"1961","dateYear('03/07/1961')")
            self.assertEqual(dateYear('12/24/1945'),"1945","dateYear('12/24/1945')")
            self.assertEqual(dateYear('11/07/2000'),"2000","dateYear('11/07/2000')")

    myTests().main()

.. parsonsprob:: Function_String_MixedUpCode_6
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``capitalize(str)``, that takes a string, ``str``, and returns the string with the first letter capitalized.
    For example, ``capitalize('america')`` would return ``America``.
    -----
    def capitalize(str):
    =====
    Def Capitalize(str): #paired
    =====
        answer = str[0].upper() + str[1:]
    =====
        answer = str.upper() + str[1:] #paired
    =====
        return answer

.. activecode:: Function_String_MixedUpCode_6_ac
    :practice: T
    :autograde: unittest

    Write a function ``capitalize(str)``, that takes a string, ``str``, and returns the string with the first letter capitalized.
    For example, ``capitalize('america')`` would return ``America``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(capitalize('america'),"America","capitalize('america')")
            self.assertEqual(capitalize('walk'),"Walk","capitalize('walk')")
            self.assertEqual(capitalize('Bend'),"Bend","capitalize('Bend')")
            self.assertEqual(capitalize('flower'),"Flower","capitalize('flower')")

    myTests().main()

.. parsonsprob:: Function_String_MixedUpCode_7
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``mod_password(password)``, that takes a string, ``password``, and returns a new string that replaces all ``'s'`` in the string with ``'$'``.
    For example, ``mod_password('suspense')`` returns ``$u$pen$e``.
    -----
    def mod_password(password):
    =====
        new = password.replace('s', '$')
    =====
        new = password.remove('s') + '$' #paired
    =====
        return new

.. activecode:: Function_String_MixedUpCode_7_ac
    :practice: T
    :autograde: unittest

    Write a function ``mod_password(password)``, that takes a string, ``password``, and returns a new string that replaces all ``'s'`` in the string with ``'$'``.
    For example, ``mod_password('suspense')`` returns ``$u$pen$e``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(mod_password('suspense'),"$u$pen$e","mod_password('suspense')")
            self.assertEqual(mod_password('sue'),"$ue","mod_password('sue')")
            self.assertEqual(mod_password('sass'),"$a$$","mod_password('sass')")
            self.assertEqual(mod_password('away'),"away","mod_password('away')")
            self.assertEqual(mod_password('apples'),"apple$","mod_password('apples')")

    myTests().main()

.. parsonsprob:: Function_String_MixedUpCode_8
    :numbered: left
    :practice: T
    :adaptive:

    Create a function ``first_last(str)``, that takes a string, ``str``, and returns a new string with the first two characters of the word
    followed by the last two characters. Assume ``str`` is four characters or more. 
    For example, ``first_last('wander')`` returns ``waer``.
    -----
    def first_last(str):
    =====
        out = str[:2] + str[-2:]
    =====
        out = str[-2:] + str[:2] #paired
    =====
        return out

.. activecode:: Function_String_MixedUpCode_8_ac
    :practice: T
    :autograde: unittest

    Write a function ``first_last(str)``, that takes a string, ``str``, and returns a new string with the first two characters of the word
    followed by the last two characters. Assume ``str`` is four characters or more. 
    For example, ``first_last('wander')`` returns ``waer``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(first_last('wander'),"waer","first_last('wander')")
            self.assertEqual(first_last('hope'),"hope","first_last('hope')")
            self.assertEqual(first_last('through'),"thgh","first_last('through')")

    myTests().main()
