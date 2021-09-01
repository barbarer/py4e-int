Write Code Questions
---------------------
#.
    .. tabbed:: inheritance_writecode1

        .. tab:: Question

            .. activecode:: inheritance_writecode1q
                :practice: T
                :nocodelens:
                :language: python3

                Create a subclass of the Parent class named Child, and create a method eye_color() to override the parent method and print "I have green eyes." Then, create a Child object named lil_child, and call the method on the Child object.
                ~~~~
                class Parent:
                    def eye_color(self):
                        print("I have blue eyes, and my spouse has green eyes.")

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(lil_child.eye_color(), print("I have green eyes."), "Making sure the print statement is correct.")

                myTests().main()

        .. tab:: Answer

            .. activecode:: inheritance_writecode1a
                :optional:
                :language: python3

                Create a subclass of the Parent class named Child, and create a method eye_color() to override the parent method and print "I have green eyes." Then, create a Child object named lil_child, and call the method on the Child object.
                ~~~~
                class Parent:
                    def eye_color(self):
                        print("I have blue eyes, and my spouse has green eyes.")

                class Child(Parent):
                    def eye_color(self):
                        print("I have green eyes.")

                lil_child = Child()
                lil_child.eye_color()

#.
    .. tabbed:: inheritance_writecode2

        .. tab:: Question

            .. activecode:: inheritance_writecode2q
                :practice: T
                :nocodelens:
                :language: python3

                Create a subclass of the Parent class named Child, and put a pass statement in the subclass. Then, create a Child object named lil_child, and call the Parent method on the Child object to see what color eyes the lil_child has.
                ~~~~
                class Parent:
                    def eye_color(self):
                        print("I have hazel eyes.")

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(lil_child.eye_color(), print("I have hazel eyes."), "Making sure the print statement is correct.")

                myTests().main()

        .. tab:: Answer

            .. activecode:: inheritance_writecode2a
                :optional:
                :language: python3

                Create a subclass of the Parent class named Child, and put a pass statement in the subclass. Then, create a Child object named lil_child, and call the Parent method on the Child object to see what color eyes the lil_child has.
                ~~~~
                class Parent:
                    def eye_color(self):
                        print("I have hazel eyes.")

                class Child(Parent):
                    def eye_color(self):
                        super().eye_color()

                lil_child = Child()
                lil_child.eye_color()

#.
    .. tabbed:: inheritance_writecode3

        .. tab:: Question

            .. activecode:: inheritance_writecode3q
                :practice: T
                :nocodelens:
                :language: python3

                Create a subclass of the Parent class named Child, and use super() to inherit the eye_color method. Then, create a Child object named lil_child, and call the eye_color method on the Child object to see what color eyes the lil_child has.
                ~~~~
                class Parent:
                    def eye_color(self):
                        print("I have hazel eyes.")

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(lil_child.eye_color(), print("I have hazel eyes."), "Making sure the print statement is correct.")

                myTests().main()

        .. tab:: Answer

            .. activecode:: inheritance_writecode3a
                :optional:
                :language: python3

                Create a subclass of the Parent class named Child, and use super() to inherit the eye_color method. Then, create a Child object named lil_child, and call the eye_color method on the Child object to see what color eyes the lil_child has.
                ~~~~
                class Parent:
                    def eye_color(self):
                        print("I have hazel eyes.")

                class Child(Parent):
                    def eye_color(self):
                        super().eye_color()

                lil_child = Child()
                lil_child.eye_color()

#.
    .. tabbed:: inheritance_writecode4

        .. tab:: Question

            .. activecode:: inheritance_writecode4q
                :practice: T
                :nocodelens:
                :language: python3

                Create a subclass of the Parent class named Child, and use the format Parent_Class.method to inherit the eye_color method. Then, create a Child object named lil_child, and call the eye_color method on the Child object to see what color eyes the lil_child has.
                ~~~~
                class Parent:
                    def eye_color(self):
                        print("I have hazel eyes.")

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(lil_child.eye_color(), print("I have hazel eyes."), "Making sure the print statement is correct.")

                myTests().main()

        .. tab:: Answer

            .. activecode:: inheritance_writecode4a
                :optional:
                :language: python3

                Create a subclass of the Parent class named Child, and use the format Parent_Class.method to inherit the eye_color method. Then, create a Child object named lil_child, and call the eye_color method on the Child object to see what color eyes the lil_child has.
                ~~~~
                class Parent:
                    def eye_color(self):
                        print("I have hazel eyes.")

                class Child(Parent):
                    def eye_color(self):
                        Parent.eye_color(self)

                lil_child = Child()
                lil_child.eye_color()
