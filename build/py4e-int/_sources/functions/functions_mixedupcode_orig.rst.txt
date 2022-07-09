Functions Mixed-Up Code Questions
---------------------------------

.. parsonsprob:: Functions_MixedUpCode_1P_v2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``exp`` that takes in two parameters, ``num1`` and ``num2``, and returns ``num1`` raised to the
    power of ``num2``. For example, ``exp(2,3)`` should return ``8``.
    -----
    def exp(num1, num2):
    =====
    def exp(num1, num2) #paired
    =====
        value = num1 ** num2
    =====
        value = num1 * num2 #paired
    =====
        return value

.. activecode:: Functions_MixedUpCode_1P_v2_ac
    :practice: T
    :autograde: unittest

    Write a function called ``exp`` that takes in two parameters, ``num1`` and ``num2``, and returns ``num1`` raised to the
    power of ``num2``. For example, ``exp(2,3)`` should return ``8``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(exp(2,3),8,0, "exp(2,3)")
            self.assertAlmostEqual(exp(1,1),1,0,"exp(1,1)")
            self.assertAlmostEqual(exp(2,-2),0.25,2,"exp(2,-2)")
            self.assertAlmostEqual(exp(0,0),1,0, "exp(0,0)")
            self.assertAlmostEqual(exp(1.2,4),2.0736,2,"exp(1.2,4)")
            self.assertAlmostEqual(exp(2,4.1),17.148375400580687,2,"exp(2,4.1)")

    myTests().main()

.. parsonsprob:: Functions_MixedUpCode_2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``poly_perimeter`` that takes in two parameters, ``len_side`` and ``num_sides``, and
    returns the perimeter of the polygon.  The perimeter of a polygon is the length of each side times the number of sides.  For example, ``poly_perimeter(4,5)``
    should return ``20``.
    -----
    def poly_perimeter(len_side, num_sides):
    =====
    Def poly_perimeter(len_side, num_sides): #paired
    =====
        per = len_side * num_sides
    =====
        per = len_side ** num_sides #paired
    =====
        return per

.. activecode:: Functions_MixedUpCode_2_ac
    :practice: T
    :autograde: unittest

    Write a function called ``poly_perimeter`` that takes in two parameters, ``len_side`` and ``num_sides``, and
    returns the perimeter of the polygon.  The perimeter of a polygon is the length of each side times the number of sides.  For example, ``poly_perimeter(4,5)``
    should return ``20``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(poly_perimeter(4,5),20,0,"poly_perimeter(4,5)")
            self.assertAlmostEqual(poly_perimeter(2,3),6,0,"poly_perimeter(2,3)")
            self.assertAlmostEqual(poly_perimeter(0.1,6),0.6000000000000001,2,"poly_perimeter(0.1,6)")
            self.assertAlmostEqual(poly_perimeter(2,9999),19998,0,"poly_perimeter(2,9999)")

    myTests().main()

.. parsonsprob:: Functions_MixedUpCode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``sphere_volume`` that takes in one parameter, ``radius``, and
    returns the volume of a sphere with the given ``radius``.  The volume of a sphere is 4 / 3 times PI (in which 3.14 should be used) times the ``radius`` cubed.
    For example, ``sphere_volume(3)`` should return ``113.04``.
    -----
    def sphere_volume(radius):
    =====
        volume = (4/3) * (3.14) * radius ** 3
    =====
        volume = (4/3) * (3.14) * (radius * 3) #paired
    =====
        return volume
    =====
        ret volume #paired

.. activecode:: Functions_MixedUpCode_3_ac
    :practice: T
    :autograde: unittest

    Write a function called ``sphere_volume`` that takes in one parameter, ``radius``, and
    returns the volume of a sphere with the given ``radius``.  The volume of a sphere is 4 / 3 times PI (in which 3.14 should be used) times the ``radius`` cubed.
    For example, ``sphere_volume(3)`` should return ``113.04``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(sphere_volume(3),113.04,2,"sphere_volume(3)")
            self.assertAlmostEqual(sphere_volume(0.1),0.004186666666666668,5,"sphere_volume(0.1)")
            self.assertAlmostEqual(sphere_volume(5),523.3333333333334,2,"sphere_volume(5)")
            self.assertAlmostEqual(sphere_volume(10),4186.666666666667,2,"sphere_volume(10)")

    myTests().main()

.. parsonsprob:: Functions_MixedUpCode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``circle_circumference`` that takes in one parameter, ``radius``, and returns the
    circumference of a circle with the given ``radius``.  The circumference of a circle is 2 times PI (in which 3.14 should be used) times the ``radius``. For example,
    ``circle_circumference(3)`` should return ``18.84``.
    -----
    def circle_circumference(radius):
    =====
    def circle_circumference(radius: #paired
    =====
        value = 2 * 3.14 * radius
    =====
        value = 2 ** 3.14 * radius #paired
    =====
        return value

.. activecode:: Functions_MixedUpCode_4_ac
    :practice: T
    :autograde: unittest

    Write a function called ``circle_circumference`` that takes in one parameter, ``radius``, and returns the
    circumference of a circle with the given ``radius``.  The circumference of a circle is 2 times PI (in which 3.14 should be used) times the ``radius``. For example,
    ``circle_circumference(3)`` should return ``18.84``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(circle_circumference(3),18.84,2,"circle_circumference(3)")
            self.assertAlmostEqual(circle_circumference(0.1),0.6280000000000001,3,"circle_circumference(0.1)")
            self.assertAlmostEqual(circle_circumference(5),31.400000000000002,2,"circle_circumference(5)")
            self.assertAlmostEqual(circle_circumference(10),62.800000000000004,2,"circle_circumference(10)")

    myTests().main()


.. parsonsprob:: Functions_MixedUpCode_5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``slope`` that takes in four parameters, ``x1``, ``x2``, ``y1``, and ``y2``, and 
    returns the slope of a line formed by the two points.  The slope is ``y2`` minus ``y1`` divided by ``x2`` minus ``x1``.
    For example, ``slope(4, 3, 7, 8)`` should return ``-1``.
    -----
    def slope(x1, x2, y1, y2):
    =====
    def slope(x1, x2, y1, y2) #paired
    =====
        value = (y2 - y1) / (x2 - x1)
    =====
        value = (x2 - x1) / (y2 - y1) #paired
    =====
        return value
    =====
        return Value #paired

.. activecode:: Functions_MixedUpCode_5_ac
    :practice: T
    :autograde: unittest

    Write a function called ``slope`` that takes in four parameters, ``x1``, ``x2``, ``y1``, and ``y2``, and 
    returns the slope of a line formed by the two points.  The slope is ``y2`` minus ``y1`` divided by ``x2`` minus ``x1``.
    For example, ``slope(4, 3, 7, 8)`` should return ``-1``.
    ~~~~

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(slope(4,3,7,8), -1.0, 1, "slope(4,3,7,8)")
            self.assertAlmostEqual(slope(1,2,0,0), 0.0, 1, "slope(1,2,0,0)")
            self.assertAlmostEqual(slope(0,1,1,1), 0.0, 1,"slope(0,1,1,1)")
            self.assertAlmostEqual(slope(-1,2,3,4.4), 0.4666666666666668, 2, "slope(-1,2,3,4.4)")

    myTests().main()

.. parsonsprob:: Functions_MixedUpCode_6
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``get_hypotenuse`` that takes in two parameters, ``angle`` and ``opposite_side``, and 
    returns the hypotenuse of a right triangle. ``angle`` contains the angle facing the opposite side in degrees. 
    The sine function takes in a value in radians. The sine of an angle is equal to the opposite side over the hypotenuse.
    -----
    import math
    =====
    def get_hypotenuse(angle, opposite_side):
    =====
    def get_hypotenuse(angle, opposite_side) #paired
    =====
        sine = math.sin(math.radians(angle))
    =====
        sine = math.sin(angle) #paired
    =====
        hypotenuse = opposite_side / sine
    =====
        hypotenuse = sine / opposite_side #paired
    =====
        return hypotenuse

.. activecode:: Functions_MixedUpCode_6_ac
    :practice: T
    :autograde: unittest

    Write a function called ``get_hypotenuse`` that takes in two parameters, ``angle`` and ``opposite_side``, and 
    returns the hypotenuse of a right triangle. ``angle`` contains the angle facing the opposite side in degrees. 
    The sine function takes in a value in radians. The sine of an angle is equal to the opposite side over the hypotenuse.
    ~~~~
    import math


    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(get_hypotenuse(45, 1), 1.41421356237, 5, "get_hypotenuse(45, 1)")
            self.assertAlmostEqual(get_hypotenuse(16, 7), 25.3991291727, 1, "get_hypotenuse(16, 7)")
            self.assertAlmostEqual(get_hypotenuse(34, 14), 25.035765379, 2,"get_hypotenuse(34, 14)")
            self.assertAlmostEqual(get_hypotenuse(32, 15.9), 30, 2,"get_hypotenuse(32, 15.9)")

    myTests().main()


.. parsonsprob:: Functions_MixedUpCode_7
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``convert_to_miles`` that takes in ``feet`` as a parameter and 
    returns the value in miles. ``feet`` contains the length of an object in feet. 1 mile is equal to 5280 feet.
    -----
    def convert_to_miles(feet):
    =====
    def convert_to_miles(feet) #paired
    =====
        miles = feet / 5280
    =====
        miles = 5280 / feet #paired
    =====
        return miles

.. activecode:: Functions_MixedUpCode_7_ac
    :practice: T
    :autograde: unittest

    Write a function called ``convert_to_miles`` that takes in ``feet`` as a parameter and 
    returns the value in miles. ``feet`` contains the length of an object in feet. 1 mile is equal to 5280 feet.
    ~~~~


    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(convert_to_miles(32451), 6.1460227, 5, "convert_to_miles(32451)")
            self.assertAlmostEqual(convert_to_miles(4), 0.000757576, 9, "convert_to_miles(4)")
            self.assertAlmostEqual(convert_to_miles(5280), 1, 1,"convert_to_miles(5280)")
            self.assertAlmostEqual(convert_to_miles(12475), 2.3626894, 4,"convert_to_miles(12475)")

    myTests().main()

.. parsonsprob:: Functions_MixedUpCode_8
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``even_odd`` that takes in ``integer`` as a parameter and 
    returns 1 if the integer is even, 2 if the integer is odd, or 3 if neither is true.
    -----
    def even_odd(integer):
    =====
    def even_odd(integer) #paired
    =====
        if integer == 0:
            return 3
    =====
        if integer = 0: #paired
            return 3
    =====
        elif integer % 2 == 0:
            return 1
    =====
        else:
            return 2


.. activecode:: Functions_MixedUpCode_8_ac
    :practice: T
    :autograde: unittest

    Write a function called ``even_odd`` that takes in ``integer`` as a parameter and 
    returns 1 if the integer is even, 2 if the integer is odd, or 3 if neither is true.
    ~~~~


    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(even_odd(0), 3, "even_odd(0)")
            self.assertEqual(even_odd(32), 1, "even_odd(32)")
            self.assertEqual(even_odd(5), 2, "even_odd(5)")

    myTests().main()

.. parsonsprob:: Functions_MixedUpCode_9
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``larger_string`` that takes in two parameters, ``str1`` and ``str2``, and 
    returns the string that has the larger length. If the lengths are equal, return ``str1``.
    -----
    def larger_string(str1, str2):
    =====
    def larger_string(str1, str2) #paired
    =====
        if len(str1) >= len(str2):
            return str1
    =====
        if len(str1) > len(str2): #paired
            return str1
    =====
        else:
            return str2


.. activecode:: Functions_MixedUpCode_9_ac
    :practice: T
    :autograde: unittest

    Write a function called ``larger_string`` that takes in two parameters, ``str1`` and ``str2``, and 
    returns the string that has the larger length. If the lengths are equal, return ``str1``.
    ~~~~


    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(larger_string("Three", "Four"), "Three", "larger_string('Three', 'Four')")
            self.assertEqual(larger_string("That", "Knew"), "That", "larger_string('That', 'Knew')")
            self.assertEqual(larger_string("Cat", "People"), "People", "larger_string('Cat', 'People')")

    myTests().main()

.. parsonsprob:: Functions_MixedUpCode_10
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``find_distance`` that takes in four parameters, ``x1``, ``y1``, ``x2``, and ``y2``, and 
    returns the distance between these two points.
    -----
    import math
    =====
    def find_distance(x1, y1, x2, y2):
    =====
    def find_distance(x1, y1, x2, y2) #paired
    =====
        sqr_dist = (x1 - x2)**2 + (y1 - y2)**2
    =====
        sqr_dist = (x1 - y1)**2 + (x2 - y2)**2 #paired
    =====
        return math.sqrt(sqr_dist)
    =====
        return sqrt(sqr_distance) #paired

.. activecode:: Functions_MixedUpCode_10_ac
    :practice: T
    :autograde: unittest

    Write a function called ``find_distance`` that takes in four parameters, ``x1``, ``y1``, ``x2``, and ``y2``, and 
    returns the distance between these two points.
    ~~~~
    import math

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(find_distance(1, 2, 21, 14), 23.3238, 4, "find_distance(1, 2, 21, 14)")
            self.assertAlmostEqual(find_distance(5, 4, 15, 345), 341.1466, 4, "find_distance(5, 4, 15, 345)")
            self.assertAlmostEqual(find_distance(51, 42, 75, 12), 38.41875, 3, "find_distance(51, 42, 75, 12)")
            self.assertAlmostEqual(find_distance(1, 2, 3, 4), 2.828427, 3, "find_distance(1, 2, 3, 4)")


    myTests().main()