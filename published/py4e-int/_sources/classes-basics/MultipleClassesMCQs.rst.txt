

.. index:: class; multiple

Multiple Choice Questions for Multiple Classes
------------------------------------------------

.. mchoice:: mult_class_point_object_methods_mcq

   Given the ``Point`` class below.  What are the object methods in the ``Point`` class?  Pick all that apply.

   ::

      class Point:

          def __init__(self, initX, initY):
              """ Create a new point at the given coordinates. """
              self.x = initX
              self.y = initY

          def distanceFromOrigin(self):
              return ((self.x ** 2) + (self.y ** 2)) ** 0.5

          def __str__(self):
              return f"x = {self.x}, y = {self.y}"

          def halfway(self, target):
              mx = (self.x + target.x) / 2
              my = (self.y + target.y) / 2
              return Point(mx, my)

   -   self.x

       -   This stores the x position for the point. It is an object attribute.

   -   self.distanceFromOrigin

       +   This is an object method in the Point class

   -   self.y

       -   This stores the y position for the point. It is an object attribute.

   -   self.halfway

       +   This is an object method in the Point class

.. mchoice:: mult_class_rectangle_object_attributes_mcq

   Given the code below, what are the object attribute(s) in the ``Rectangle`` class?  Pick all that apply.

   ::

      class Rectangle:

          def __init__(self, p1, p2):
              """ Create a new rectangle with the given points """
              self.p1 = p1
              self.p2 = p2

          def area(self):
              """ Return the area of the rectangle """
              width = abs(self.p1.x - self.p2.x)
              height = abs(self.p1.y - self.p2.y)
              return width * height

   -   self.p1

       +   This is an object attribute in the Rectangle class.

   -   self.__init__

       -   This is an object method in the Rectangle class.

   -   self.p2

       +   This is an object attribute in the Rectangle class.

   -   self.area

       -   This is an object method in the Rectangle class.



.. mchoice:: mult_class_dog_breed_types_mcq
    :practice: T
    :answer_a: class attribute
    :answer_b: class method
    :answer_c: object attribute
    :answer_d: object method
    :correct: a
    :feedback_a: Correct! It is a class attribute (only exists in the class).
    :feedback_b: It is not a class method.
    :feedback_c: It is not an object attribute.
    :feedback_d: It is not an object method.


    Given the following code, what is ``breeds``?

    ::

        class Dog:

            breeds = ["Bulldog", "Poodle", "Chihuahua", "Dachshund"]

            def __init__(self, name, breed):
                self.name = name
                if breed not in Dog.breeds:
                    Dog.breeds.append(breed)
                self.breed_index = Dog.breeds.index(breed)

            def speak(self):
                return "bark"


.. mchoice:: mult_class_dog_speak_mcq
    :practice: T
    :answer_a: class attribute
    :answer_b: class method
    :answer_c: object attribute
    :answer_d: object method
    :correct: d
    :feedback_a: It is not a class attribute.
    :feedback_b: It is not a class method.
    :feedback_c: It is not an object attribute.
    :feedback_d: Correct!  It is an object method.

    Given the following code, what is ``speak``?

    ::

        class Dog:

            breeds = ["Bulldog", "Poodle", "Chihuahua", "Dachshund"]

            def __init__(self, name, breed):
                self.name = name
                if breed not in Dog.breeds:
                    Dog.breeds.append(breed)
                self.breed_index = Dog.breeds.index(breed)

            def speak(self):
                return "bark"

.. mchoice:: mult_class_dog_breed_index_mcq
    :practice: T
    :answer_a: class attribute
    :answer_b: class method
    :answer_c: object attribute
    :answer_d: object method
    :correct: c
    :feedback_a: It is not a class attribute.
    :feedback_b: It is not a class method.
    :feedback_c: Correct! It is an object attribute.
    :feedback_d: It is not an object method.

    Given the following code, what is ``self.breed_index``?

    ::

        class Dog:

            breeds = ["Bulldog", "Poodle", "Chihuahua", "Dachshund"]

            def __init__(self, name, breed):
                self.name = name
                if breed not in Dog.breeds:
                    Dog.breeds.append(breed)
                self.breed_index = Dog.breeds.index(breed)

            def speak(self):
                return "bark"
