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
