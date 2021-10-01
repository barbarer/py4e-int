

.. index:: class; multiple

Multiple Classes
--------------------

Object-oriented programs typically have many classes.  Each class describes
the data (attributes) that objects of that class have and their behaviors (methods).

Let's use the Point class that we created earlier to define a Rectangle class.
A rectangle can be defined by two points if we assume that one point is the top left
and the other is the bottom right.  That means the width of a rectangle is the difference
between the x values and the height is the difference between the y values.
The area of a rectangle is the width times the height.

.. activecode:: classb_point

   import math

   class Point:

        def __init__(self, initX, initY):
            """ Create a new point at the given coordinates. """
            self.x = initX
            self.y = initY

        def getX(self):
            return self.x

        def getY(self):
            return self.y

        def distanceFromOrigin(self):
            return ((self.x ** 2) + (self.y ** 2)) ** 0.5

        def __str__(self):
            return "x=" + str(self.x) + ", y=" + str(self.y)

        def halfway(self, target):
             mx = (self.x + target.x) / 2
             my = (self.y + target.y) / 2
             return Point(mx, my)


   class Rectangle:

        def __init__(self, p1, p2):
            """ Create a new rectangle with the given points """
            self.p1 = p1
            self.p2 = p2

        def area(self):
            """ Return the area of the rectangle """
            width = math.abs(self.p1.x - self.p2.x)
            height = math.abs(self.p2.y - self.p2.y)
            return width * height

   point1 = Point(0,0)
   point2 = Point(10,5)
   r1 = Rectangle(point1, point2)
   print(r1.area())
   point3 = Point(-5,-10)
   r2 = Rectangle(point2, point3)
   print(r2.area())



Object-Oriented Analysis and Design
=====================================

How do you determine the classes that you need and the attributes and methods that objects of each class should have?
In object-oriented analysis and design you often walk through a scenario of how the system will work.  Write down all the nouns and verbs that are mentioned.  Nouns are potential classes or attributes.  Verbs are potential methods.

.. note ::

   One recommended approach to object-oriented anlaysis and design is to use index cards to represent classes.  Write the class name at the top of the card.

How would you create software for a simple card game?  Play the Aces and Twos card game at https://www.mathsisfun.com/games/card-match-game.html

What things do you talk about?  What data does each thing need in order to play the game?  What behaviors?

.. image:: Figures/objectpic4.png
   :alt: Simple object has state and methods
