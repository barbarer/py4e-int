Introduction to Inheritance - Point and LabeledPoint
-------------------------------------------------------

Recall the Point class from earlier in the book:

.. activecode:: pointclass_1

    class Point:

        def __init__(self, initX, initY):
            self.x = initX
            self.y = initY

        def distanceFromOrigin(self):
            return ((self.x ** 2) + (self.y ** 2)) ** 0.5

        def __str__(self):
            return "x=" + str(self.x) + ", y=" + str(self.y)

    p = Point(7, 6)
    print(p)

Now, suppose we want to create a class that works like ``Point``
in every respect, but also keeps track of a short description for the point.
We could create a ``LabeledPoint`` class by copying and pasting the definition for
``Point``,
changing the name to ``LabeledPoint``, and modifying the class to suit our
purposes. However, any time you copy and paste code, keep in mind that
you are copying and pasting bugs that may exist in the code. Inheritance
provides a way to reuse the definition of Point without having to copy and
paste.

We begin like this:

.. activecode:: labeledpoint
    :include: pointclass_1

    class LabeledPoint(Point):
        pass

This example defines a class named ``LabeledPoint`` that inherits from the ``Point`` class.
Putting the name ``Point`` in parenthesis tells Python that the new class,
``LabeledPoint``, begins with all of the methods defined in its parent, ``Point``.
For example, we can instantiate LabeledPoint using the Point constructor, and
invoke any Point methods we want to on it:

.. sourcecode:: python

    p = LabeledPoint(7,6)
    dist = p.distanceFromOrigin()

.. mchoice:: intro_inher_define_mcq1
   :practice: T
   :answer_a: def class Student(Person):
   :answer_b: def class Student extends Person:
   :answer_c: class Student(Person):
   :answer_d: class Student extends Person:
   :correct: c
   :feedback_a: You do not use the def keyword to define a class
   :feedback_b: You do not use the def keyword to create a class and use (Parent) to inherit
   :feedback_c: Correct!
   :feedback_d: Use (Parent) to inherit from a Parent class

   Which of the following correctly declares a Student class that inherits from a Person class?

Now, let's refine LabeledPoint so that it holds a label, along with the x and y
coordinates:

.. activecode:: labeledpoint_2
    :include: pointclass_1

    class LabeledPoint(Point):

        def __init__(self, initX, initY, label):
            self.x = initX
            self.y = initY
            self.label = label

        def __str__(self):
            return "x=" + str(self.x) + ", y=" + str(self.y) + " (" + self.label + ")"

    labeledPt = LabeledPoint(7,6,"Here")
    print(labeledPt)

Here, we have redefined two of the methods that LabeledPoint inherits from Point:
``__init__()`` and ``__str__()``.
This is called *overriding*. When a child class redefines methods that are defined
in its parent, we say that the child *overrides* the functionality inherited from
its parent. When both the parent class and child class have a method with the
same name, an invocation of the method on an instance of the child class
executes code in the child's class; an invocation of the method on an instance
of the parent class executes code in the parent's class. For example,
consider the following:

.. activecode:: combinedpts
    :include: pointclass_1, labeledpoint_2

    pt = Point(5,10)
    labeledPt = LabeledPoint(7, 6, "Here")

    ptStr = str(pt)
    labeledPtStr = str(labeledPt)

In Line 4, the call to ``str(pt)`` invokes the ``__str__()`` method in ``Point``, because
pt refers to an instance of ``Point``. In Line 5, the call to ``str(labeledPt)``
invokes the ``__str__()`` method in ``LabeledPoint``, because ``labeledPt``
refers to an instance of ``LabeledPoint``.

.. dragndrop:: inhert_vocab_dnd
    :practice: T
    :feedback: Read the chapter on functions and try again.
    :match_1: child||| A class that inherits from another class
    :match_2: parent||| The class being inherited from
    :match_3: override||| Defining a method with the same name as a parent method.  This method will be called instead of the parent method.
    :match_4: inheritance||| A way to reuse code from another class without having to copy and paste code

    Drag each item to its definition
