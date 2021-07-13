Functions Mixed-Up Code Questions
---------------------------------

.. parsonsprob:: Functions_MixedUpCode_1
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``exponentiate`` that takes in two parameters, ``num1`` and ``num2`` that raises ``num`` to the 
    power of ``num2`` and returns that value. For example, ``exponentiate(2,3)`` should return ``8``.
    
    -----
    def exponentiate(num1, num2):
    =====
        exponentiated_value = num1 ** num2
    =====
        exponentiated_value = num1 * num2 #paired
    =====
        exponentiated_value *= num1/ num2 #paired
    =====
        return exponentiated_value 

.. activecode:: funct_muc_to_writecode1
   :practice: T
   :autograde: unittest

   Create a function called ``exponentiate`` that takes in two parameters, ``num1`` and ``num2`` that raises ``num`` to the 
   power of ``num2`` and returns that value. For example, ``exponentiate(2,3)`` should return ``8``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(exponentiate(2,3),8,"Tested exponentiate with inputs 2 and 3.")
           self.assertEqual(exponentiate(1,1),1,"Tested exponentiate with inputs 1 and 1.")
           self.assertEqual(exponentiate(2,-2),0.25,"Tested exponentiate with inputs 2 and -2.")
           self.assertEqual(exponentiate(0,0),1,"Tested exponentiate with inputs 0 and 0.")
           self.assertEqual(exponentiate(1.2,4),2.0736,"Tested exponentiate with inputs 1.2 and 4.")
           self.assertEqual(exponentiate(2,4.1),17.148375400580687,"Tested exponentiate with inputs 2 and 4.1.")

   myTests().main()

.. parsonsprob:: Functions_MixedUpCode_2
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``perimeter_of_polygon`` that takes in two parameters, ``len_of_side`` and ``num_of_sides`` that 
    returns the perimeter of the polygon. The polygon can be determined by ``num_of_sides``. Ignore values of ``len_of_side`` 
    and ``num_of_sides`` that are not greater than 0. (Note: ``num_of_sides`` will be 10,000 at most.)  For example, ``perimeter_of_polygon(4,5)`` 
    should return ``20``.

    -----
    def perimeter_of_polygon(len_of_side, num_of_sides):
    =====
    Def perimeter_of_polygon(len_of_side, num_of_sides): #paired
    =====
        perimeter = len_of_side * num_of_sides
    =====
        perimeter = len_of_side ** num_of_sides #distractor
    =====
        perimeter = len_of_side/ num_of_sides #distractor
    =====
        return perimeter

.. activecode:: funct_muc_to_writecode2
   :practice: T
   :autograde: unittest

   Create a function called ``perimeter_of_polygon`` that takes in two parameters, ``len_of_side`` and ``num_of_sides`` that 
   returns the perimeter of the polygon. The polygon can be determined by ``num_of_sides``. Ignore values of ``len_of_side`` and 
   ``num_of_sides`` that are not greater than 0. (Note: ``num_of_sides`` will be between 3 and 10,000.)  For example, ``perimeter_of_polygon(4,5)`` 
   should return ``20``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(perimeter_of_polygon(4,5),20,"Tested perimeter_of_polygon on inputs 4 and 5.")
           self.assertEqual(perimeter_of_polygon(2,3),6,"Tested perimeter_of_polygon on inputs 2 and 3.")
           self.assertEqual(perimeter_of_polygon(0.1,6),0.6000000000000001,"Tested perimeter_of_polygon on inputs 0.1 and 6.")
           self.assertEqual(perimeter_of_polygon(2,9999),19998,"Tested perimeter_of_polygon on inputs 2 and 9999.")

   myTests().main()

.. parsonsprob:: Functions_MixedUpCode_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``volume_of_sphere`` that takes in one parameter, ``radius`` that 
    returns the volume of a sphere with the given radius. (Note: a radius must be greater than 0.)
    For example, ``volume_of_sphere(3)`` should return ``113.04``.

    -----
    def volume_of_sphere(radius):
    =====
        volume = (4/3) * (3.14) * radius * radius * radius
    =====
        volume = (4/3) * (3.14) * (radius * 3) #distractor 
    =====
        volume = (3.14 * 4) * 3 * radius * radius * radius #distractor
    =====
        volume = (3.14 * 4) * 3 * (radius * 2) #distractor
    =====
        return volume

.. activecode:: funct_muc_to_writecode3
   :practice: T
   :autograde: unittest

   Create a function called ``volume_of_sphere`` that takes in one parameter, ``radius`` that 
   returns the volume of a sphere with the given radius. (Note: a radius must be greater than 0.)
   For example, ``volume_of_sphere(3)`` should return ``113.04``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(volume_of_sphere(3),226.07999999999998,"Tested volume_of_sphere on input 3.")
           self.assertEqual(volume_of_sphere(0.1),7.5360000000000005,"Tested volume_of_sphere on input 0.1.")
           self.assertEqual(volume_of_sphere(5),376.8,"Tested volume_of_sphere on input 5.")
           self.assertEqual(volume_of_sphere(10),753.6,"Tested volume_of_sphere on input 10.")

   myTests().main()

.. parsonsprob:: Functions_MixedUpCode_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``circumference_of_circle`` that takes in one parameter, ``radius`` that returns the 
    circumference of a circle with the given radius. (Note: a radius must be greater than 0.) For example, 
    ``circumference_of_circle(3)`` should return ``18.84``.

    -----
    def circumference_of_circle(radius):
    =====
        circumference_value = 2 * 3.14 * radius
    =====
        circumference_value = 2 * 3.14 * (radius * 2) #distractor 
    =====
        circumference_value = 2 ** 3.14 * radius #distractor 
    =====
        circumference_value = 2 ** 3.14 ** radius #distractor 
    =====
        return circumference_value

.. activecode:: funct_muc_to_writecode4
   :practice: T
   :autograde: unittest

   Create a function called ``circumference_of_circle`` that takes in one parameter, ``radius`` that returns the 
   circumference of a circle with the given radius. (Note: a radius must be greater than 0.) For example, 
   ``circumference_of_circle(3)`` should return ``18.84``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(circumference_of_circle(3),18.84,"Tested circumference_of_circle on input 3.")
           self.assertEqual(circumference_of_circle(0.1),0.6280000000000001,"Tested circumference_of_circle on input 0.1.")
           self.assertEqual(circumference_of_circle(5),31.400000000000002,"Tested circumference_of_circle on input 5.")
           self.assertEqual(circumference_of_circle(10),62.800000000000004,"Tested circumference_of_circle on input 10.")

   myTests().main()


.. parsonsprob:: Functions_MixedUpCode_5
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``slope`` that takes in four parameters, ``x1``, ``x2``, ``y1``, and ``y2``that 
    returns the slope of a line formed by the four points. (Note: Disregard any scenario where``x2`` - ``x1`` = 0.) 
    For example, ``slope(4,3,7,8)`` should return ``-1``.

    -----
    def slope(x1, x2, y1, y2):
    =====
    Def slope(x1, x2, y1, y2): #distractor
    =====
        slope_value = (y2 - y1)/(x2 - x1)
    =====
        slope_value = (x2 - x1)/(y2 - y1) #distractor
    =====
        slope_value = (y2 - x2)/(y1 - x1) #distractor
    =====
        slope_value = (y2 + y1)/(x2 + x1) #distractor
    =====
        slope_value = (y1 - x1)/(y2 - x2) #distractor
    =====
        return slope_value

.. activecode:: funct_muc_to_writecode5
   :practice: T
   :autograde: unittest

   Create a function called ``slope`` that takes in four parameters, ``x1``, ``x2``, ``y1``, and ``y2``that 
   returns the slope of a line formed by the four points. (Note: Disregard any scenario where``x2`` - ``x1`` = 0.) 
   For example, ``slope(4,3,7,8)`` should return ``-1``.
   ~~~~

   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(slope(4,3,7,8), 1.0,"Tested slope on inputs 4, 3, 7, 8.")
           self.assertEqual(slope(1,2,0,0), 0.0,"Tested slope on inputs 1, 2, 0, 0.")
           self.assertEqual(slope(0,1,1,1), 0.0,"Tested slope on inputs 0, 1, 1, 1.")
           self.assertEqual(slope(-1,2,3,4.4), 0.4666666666666668,"Tested slope on inputs -1, 2, 3, 4.4.")

   myTests().main()
