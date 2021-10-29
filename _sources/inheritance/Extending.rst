Call a Parent Method
---------------------

If you compare the code in the __init__ methods of ``Point`` and ``LabeledPoint``, you can
see that there is some duplication--the initialization of x and y. We can
eliminate the duplication by having ``LabeledPoint``'s ``__init__()`` method call (execute)
``Point``'s ``__init__()`` method. That way, each class will be responsible for
initializing its own instance variables.

All objects keep a reference to the class that created them and every class has a reference to its parent class.
You can get an object that represents the parent class using ``super()`` and then call a method on that object.

.. sourcecode:: python
   :emphasize-lines: 4
   :linenos:

    class LabeledPoint(Point):

        def __init__(self, initX, initY, label):
            super().__init__(initX, initY)
            self.label = label

In this example, line 4 invokes the ``__init__()`` method in ``Point``,
passing the values of ``initX`` and ``initY``
to be used in initializing the ``x`` and ``y`` instance variables.

Here is a complete code listing showing both classes, with a version
of ``__str__()`` for ``LabeledPoint`` that invokes its parent's implementation
using ``super()`` to avoid duplicating the functionality provided in ``Point``.

.. activecode:: combined_pts_1

    class Point:

        def __init__(self, initX, initY):
            self.x = initX
            self.y = initY

        def distanceFromOrigin(self):
            return ((self.x ** 2) + (self.y ** 2)) ** 0.5

        def __str__(self):
            return "x=" + str(self.x) + ", y=" + str(self.y)

    class LabeledPoint(Point):

        def __init__(self, initX, initY, label):
            super().__init__(initX, initY)
            self.label = label

        def __str__(self):
            return super().__str__() + " (" + self.label + ")"

    p = LabeledPoint(7,6,"Here")
    print(p)
    print(p.distanceFromOrigin())

Finish the code for the ``Student`` class below.  In the ``__init__`` method for ``Student`` call the ``__init__`` method for ``Person`` and pass in a first and last name.  Then also set the id. In the ``__str__`` method for ``Student`` return the id in the form (id: actual_id,) followed by the string returned from the ``__str__`` method in ``Person``.  For example, if ``s = Student("Abby", "Lane", 1)`` then ``print(s)`` should print "id: 1, name: Abby Lane".

.. activecode:: inherit_person_student_super_ac

    class Person:

        def __init__(self, first, last):
            self.first = first
            self.last = last

        def __str__(self):
            return f"name: {self.first} {self.last}"

    class Student(Person):

        def __init__(self, first, last, id):

        def __str__(self):

    s = Student("Abby", "Lane", 1)
    print(s)

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            s = Student("Abby", "Lane", 1)
            self.assertEqual(s.__str__(),"id: 1, name: Abby Lane","Test of Abby Lane with id of 1")
            s = Student("Sam", "Brown", 2)
            self.assertEqual(s.__str__(),"id: 2, name: Sam Brown","Test of Sam Brown with id of 2")
            s = Student("Julia", "Pai", 3)
            self.assertEqual(s.__str__(),"id: 3, name: Julia Pai","Test of Julia Pai with id of 3")


    myTests().main()
