Reuse Through Association
-------------------------

Inheritance is not the only way to reuse code. *Association* occurs when
an object stores a reference to one or more objects from a different class in one of its instance
variables (attributes). The object is thus able to execute code on the objects it
embeds within itself.

For example, our ``LabeledPoint`` example could have been implemented as follows:

.. activecode:: pt_composition_1

    class Point:

        def __init__(self, initX, initY):
            self.x = initX
            self.y = initY

        def distanceFromOrigin(self):
            return ((self.x ** 2) + (self.y ** 2)) ** 0.5

        def __str__(self):
            return "x=" + str(self.x) + ", y=" + str(self.y)

    class LabeledPoint:

        def __init__(self, initX, initY, label):
            self.point = Point(initX, initY)
            self.label = label

        def distanceFromOrigin(self):
            return self.point.distanceFromOrigin()

        def __str__(self):
            return str(self.point) + " (" + self.label + ")"

    p = LabeledPoint(7,6,"Here")
    print(p)
    print(p.distanceFromOrigin())

The first thing to notice is that ``LabeledPoint``
does not inherit from ``Point`` in the code above. Instead, its constructor
creates a ``Point`` and stores a reference to it in its ``point``
instance variable so that it can be used by the other methods.

Next, notice how the ``distanceFromOrigin()`` method uses the code in
``Point` by invoking it. We say that ``LabeledPoint``'s ``distanceFromOrigin()``
delegates its implementation to ``Point``'s implementation.

Finally, notice how the ``__str__()`` method also uses the code in
``Point`` by calling ``str(self.point)``.

.. mchoice:: reuse_with_assoc_mcq
   :practice: T
   :answer_a: A class includes objects from another class as an attribute.
   :answer_b: A class inherits attributes from another class.
   :answer_c: A class can execute code on an object from another class.
   :answer_d: A class can override a method from another class.
   :correct: a, c
   :feedback_a: In association one class with include objects from another class as an attribute.
   :feedback_b: This is only true for inheritance.
   :feedback_c: In association one class can execute code on an object from another class.
   :feedback_d: This is only true for inheritance.   A class can not override a method from another class unless it inherits from that class.

   Which of the following are true about association?
