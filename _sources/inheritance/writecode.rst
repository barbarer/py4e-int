Write Code Questions
---------------------
#.

            .. activecode:: inheritance_writecode1q_v2
                :practice: T
                :autograde: unittest

                Create a subclass of the ``Parent`` class named ``Child`` that overrides the inherited ``eye_color()`` method to return ``"I have green eyes."``
                ~~~~
                class Parent:

                    def eye_color(self):
                        return "I have blue eyes."


                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        lil_child = Child()
                        parent = Parent()
                        self.assertEqual(lil_child.eye_color(), "I have green eyes.", "Testing Child eye_color")
                        self.assertEqual(parent.eye_color(), "I have blue eyes.", "Testing Parent eye_color")
                        self.assertIsInstance(lil_child, type(parent), "Testing Child inherits from Parent")

                myTests().main()

#.

            .. activecode:: inheritance_greeter_grumpy_ac
                :practice: T
                :autograde: unittest

                Create a subclass of the ``Greeter`` class named ``GrumpyGreeter`` that overrides the inherited ``greet`` method to return ``"Go Away!"``.
                ~~~~
                class Greeter:

                    def greet(self):
                        return "Welcome!"



                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        gg = GrumpyGreeter()
                        g = Greeter()
                        self.assertEqual(g.greet(), "Welcome!", "Testing Greeter greet")
                        self.assertEqual(gg.greet(), "Go Away!", "Testing GrumpyGreeter greet")
                        self.assertIsInstance(gg, type(g), "Testing GrumpyGreeter inherits from Greeter")

                myTests().main()


#.

            .. activecode:: inheritance_animal_cow_ac
                :practice: T
                :autograde: unittest

                Create a subclass of the ``Animal`` class named ``Cow`` that overrides the inherited ``noise`` method to return ``"Moo"``.
                ~~~~
                class Animal:

                    def noise(self):
                        return "Unknown"



                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        cow = Cow()
                        p = Animal()
                        self.assertEqual(p.noise(), "Unknown", "Testing Animal noise")
                        self.assertEqual(c.noise(), "Moo", "Testing Cow noise")
                        self.assertIsInstance(cow, type(p), "Testing Cow inherits from Animal")

                myTests().main()

#.

            .. activecode:: inheritance_actor_over_actor_ac
                :practice: T
                :autograde: unittest

                Create a subclass of the ``Actor`` class named ``OverActor`` that overrides the inherited ``act`` method to return ``"I am super happy!"``.
                ~~~~
                class Actor:

                    def act(self):
                        return "I am happy!"



                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        a = Actor()
                        oa = OverActor()
                        self.assertEqual(a.act(), "I am happy!", "Testing Actor act")
                        self.assertEqual(oa.act(), "I am super happy!", "Testing OverActor act")
                        self.assertIsInstance(oa, type(a), "Testing OverActor inherits from Actor")


                myTests().main()

#.

            .. activecode:: inheritance_student_grad_student_ac
                :practice: T
                :autograde: unittest

                Create a subclass of the ``Student`` class named ``GradStudent`` that calls the ``__init__`` method in ``Student`` to initialize the first and last name and overrides the inherited ``fav_food`` method to return ``"Sushi"``.
                ~~~~
                class Student:

                    def __init__(self, first, last):
                        self.first = first
                        self.last = last

                    def fav_food(self):
                        return "Pizza"


                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        s = Student("Carl", "X")
                        gs = GradStudent("Anjali", "Kumar")
                        self.assertEqual(s.fav_food(), "Pizza", "Testing Student fav_food")
                        self.assertEqual(s.first, "Carl", "Testing Student first name")
                        self.assertEqual(s.last, "X", "Testing Student last name")
                        self.assertEqual(gs.first, "Anjali", "Testing GradStudent first name")
                        self.assertEqual(gs.last, "Kumar", "Testing GradStudent last name")
                        self.assertEqual(gs.fav_food(), "Sushi", "Testing GradStudent fav_food")
                        self.assertIsInstance(gs, type(s), "Testing GradStudent inherits from Student")

                myTests().main()



#.

    .. activecode:: ut_is_ascending_ac
        :autograde: unittest

        Write a function ``is_ascending(nums)`` that returns ``True`` if the numbers in the list ``nums`` are sorted in ascending order and ``False`` otherwise. If the list ``nums`` has less than two numbers in it return ``True``.  For example, ``is_ascending([1,2,3])`` should return ``True``, ``is_ascending([1])`` should also return ``True``, and ``is_ascending([3,2,1])`` should return ``False``.
        ~~~~
        def is_ascending(nums):


        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(is_ascending([1,2,3]),True,"is_ascending([1,2,3])")
                self.assertEqual(is_ascending([3,2,1]),False,"is_ascending([3,2,1])")
                self.assertEqual(is_ascending([3,1,2]),False,"is_ascending([3,1,2])")
                self.assertEqual(is_ascending([2,3,1]),False,"is_ascending([2,3,1])")
                self.assertEqual(is_ascending([1,2,4,3]),False,"is_ascending([1,2,4,3])")
                self.assertEqual(is_ascending([1,2,3,0]),False,"is_ascending([1,2,3,0])")
                self.assertEqual(is_ascending([4,1,2,3]),False,"is_ascending(4,1,2,3])")
                self.assertEqual(is_ascending([1,4,2,3]),False,"is_ascending(1,4,2,3])")
                self.assertEqual(is_ascending([1,2,3,4]),True,"is_ascending([1,2,3,4])")
                self.assertEqual(is_ascending([1]),True,"is_ascending([1])")
                self.assertEqual(is_ascending([]),True,"is_ascending([])")


        myTests().main()


#.

    .. activecode:: ut_sum_lists_ac
        :autograde: unittest

        Write a function ``sum_lists(l1,l2)`` that take two lists of numbers, ``l1`` and ``l2`` and returns a list with the sum of the corresponding items in ``l1`` and ``l2``.  For example, ``sum_lists([1,2],[3,4])`` would return [4,6]. If the two lists are of different length then returned list should be the same length as the shortest list. For example, ``sum_lists([1],[4,3])`` should return ``[5]``.
        ~~~~
        def sum_lists(l1,l2):


        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(sum_lists([1,2],[3,4]),[4,6],"sum_lists([1,2],[3,4])")
                self.assertEqual(sum_lists([1],[2]),[3],"sum_lists([1],[2])")
                self.assertEqual(sum_lists([-1,-2],[3,4]),[2,2],"sum_lists([-1,-2],[3,4])")
                self.assertEqual(sum_lists([2,1],[4,3]),[6,4],"sum_lists([2,1],[4,3])")
                self.assertEqual(sum_lists([1],[4,3]),[5],"sum_lists([1],[4,3])")
                self.assertEqual(sum_lists([1,2],[4]),[5],"sum_lists([1,2],[4])")
                self.assertEqual(sum_lists([],[4,3]),[],"sum_lists([],[4,3])")



        myTests().main()





#.

    .. activecode:: ut_avg_pos_ac
        :autograde: unittest

        Write a function ``avg_pos(nums)`` that returns the average of the positive numbers in the list ``nums``.  For example, ``avg_pos([80, -20, 90])`` should return ``85.0``.
        ~~~~
        def avg_pos(nums):


        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertAlmostEqual(avg_pos([80, -20, 90]),85.0,1,"avg_pos([80, -20, 90])")
                self.assertAlmostEqual(avg_pos([-1, 50, 93]),71.5,1,"avg_pos([-1, 50, 93])")
                self.assertAlmostEqual(avg_pos([-1, -20, 93]),93,1,"avg_pos([-1, -20, 93])")
                self.assertAlmostEqual(avg_pos([27, 34, 93]),51.3,1,"avg_pos([27, 34, 93])")
                self.assertAlmostEqual(avg_pos([83, 95, 93]),90.3,1,"avg_pos([83, 95, 93])")
                self.assertAlmostEqual(avg_pos([72, 81]),76.5,1,"avg_pos([72, 81])")


        myTests().main()

#.

    .. activecode:: ut_quartile_ac
        :autograde: unittest

        Write a function ``quartile(value)`` that returns ``0`` if ``value`` is <= 0.25, ``1`` if ``value`` is > 0.25 and <= 0.5, ``2`` if ``value`` is > 0.5 and <= 0.75, and ``3`` if ``value`` > 0.75.
        ~~~~
        def quartille(value):


        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(quartile(-3),0,"quartile(-3)")
                self.assertEqual(quartile(0),0,"quartile(0)")
                self.assertEqual(quartile(0.1),0,"quartile(0.1)")
                self.assertEqual(quartile(0.25),0,"quartile(0.25)")
                self.assertEqual(quartile(0.26),1,"quartile(0.26)")
                self.assertEqual(quartile(0.3),1,"quartile(0.3)")
                self.assertEqual(quartile(0.49),1,"quartile(0.49)")
                self.assertEqual(quartile(0.5),1,"quartile(0.5)")
                self.assertEqual(quartile(0.6),2,"quartile(0.6)")
                self.assertEqual(quartile(0.75),3,"quartile(0.75)")
                self.assertEqual(quartile(0.8),3,"quartile(0.8)")
                self.assertEqual(quartile(2),3,"quartile(2)")


        myTests().main()


#.

    .. activecode:: ut_dup_adjacent_fix_ac
        :autograde: unittest

        Fix the function ``dup_adjacent(nums)`` to return ``True`` if there are duplicate adjacent values in ``nums``. For example, ``dup_adjacent([1,2,1])`` should return ``False`` and ``dup_adjacent([4, 3, 3, 2])`` should return ``True``  because of the adjacent 3's.  Return ``False`` if the length of the list is less than two.
        ~~~~
        def dup_adjacent(nums):
            if len(nums) == 2:
                return False
            for i in range(len(nums)):
                curr = nums[i]
                prev = nums[i-1]
                if curr == prev:
                    return True
                else:
                    return False


        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(dup_adjacent([1,2,1]),False,"dup_adjacent([1,2,1])")
                self.assertEqual(dup_adjacent([4, 3, 3, 2]),True,"dup_adjacent([4, 3, 3, 2])")
                self.assertEqual(dup_adjacent([2, 2, 3, 4]),True,"dup_adjacent([2, 2, 3, 4])")
                self.assertEqual(dup_adjacent([2, 1, 4, 4]),True,"dup_adjacent([2, 1, 4, 4])")
                self.assertEqual(dup_adjacent([2, 2]),True,"dup_adjacent([2, 2])")
                self.assertEqual(dup_adjacent([4, 3, 2, 3]),False,"dup_adjacent([4, 3, 2, 3])")
                self.assertEqual(dup_adjacent([]),False,"dup_adjacent([])")
                self.assertEqual(dup_adjacent([3]),False,"dup_adjacent([3])")


        myTests().main()
