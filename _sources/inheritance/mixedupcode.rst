Mixed-Up Code Exercises
------------------------
.. parsonsprob:: inheritance_mixedupcode_1
    :numbered: left
    :practice: T
    :adaptive:

   The following program should have a subclass of the ``Parent`` class named ``Child``, and put a pass statement in the subclass. 
   Then, create a ``Child`` object named ``lil_child``, and call the ``Parent`` method on the ``Child`` object to see what color 
   eyes the ``lil_child`` has. The blocks have been mixed up and include a few extra blocks that aren't needed in the solution. Drag 
   the needed blocks from the left and put them in the correct order on the right, indenting them correctly.
   ----
   class Parent:
   =====
   class Parent #paired
   =====
     def eye_color(self):
   =====
        return "I have hazel eyes."
   =====
   class Child(Parent):
   =====
   class Child(): #paired
   =====
     def eye_color(self):
   =====
        super().eye_color()
   =====
   lil_child = Child()

..activecode:: inheritance_mixedupcode_1-ac

   Write the following program should have a subclass of the ``Parent`` class named ``Child``, and put a pass statement in the subclass. 
   Then, create a ``Child`` object named ``lil_child``, and call the ``Parent`` method on the ``Child`` object to see what color 
   eyes the ``lil_child`` has.
   ----
   class Parent:
        # write code here
  
  
   class Child:
        # write code here
      
   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):
       def testOne(self):
           self.assertEqual(lil_child.eye_color(), "I have hazel eyes")

   myTests().main()