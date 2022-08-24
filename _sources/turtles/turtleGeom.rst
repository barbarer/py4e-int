..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. |bigteachernote| image:: Figures/apple.jpg
    :width: 50px
    :align: top
    :alt: teacher note

.. 	qnum::
	:start: 1
	:prefix: csp-10-2-

|bigteachernote| Teacher Note: Turtle Geometry
===============================================
The turtle is actually useful for exploring a wide variety of ideas in geometry.  The book `Turtle Geometry <http://www.amazon.com/Turtle-Geometry-Mathematics-Artificial-Intelligence/dp/0262510375>`_ does a wonderful job of showing how turtles can be used to explore a wide variety of geometric, mathematical, and scientific ideas (e.g., using turtles to model insect behavior).  The example **pattern** below is drawn from that book.

.. figure:: Figures/turtle-geometry.jpg
    :width: 200px
    :align: center
    :alt: a scan of the cover of the book about turtle geometry
    :figclass: align-center

    Figure 1: A scan of Mark's copy of the book


Total Turtle Trip Theorem
===========================

That last piece of code is actually a **pattern** for a wide variety of geometric shapes.  Here's a triangle.  It may not be obvious why we turn 120 in this program, but it will be soon.

.. activecode:: Turtle_Triangle
    :tour_1: "Lines of code"; 1: tR3-line1; 2: tR3-line2; 3: tR3-line3; 4: tR3-line4; 5: tR3-line5; 6: tR3-line6; 7: tR3-line7;
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *    # use the turtle library
    space = Screen()        # create a turtle space
    avery = Turtle()        # create a turtle named avery
    avery.setheading(90)    # point due north
    for sides in range(3):  # repeat the indented lines 3 times
      	avery.forward(100)  # move forward by 100 units
      	avery.right(120)    # turn by 120 degrees

And here's a pentagon.

.. activecode:: Turtle_Pentagon
    :tour_1: "Lines of code"; 1: tR3-line1; 2: tR3-line2; 3: tR4-line3; 4: tR4-line4; 5: tR4-line5; 6: tR4-line6; 7: tR4-line7;
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *    # use the turtle library
    space = Screen()        # create a turtle space
    will = Turtle()         # create a turtle named will
    will.setheading(90)     # point due north
    for sides in range(5):  # repeat the indented lines 5 times
      	will.forward(100)   # move forward by 100 units
      	will.right(72)      # turn by 72 degrees

The **Total Turtle Trip Theorem** states that the turtle will draw a closed figure with *n* sides when the sum of the angles turned is a multiple of 360.  In the triangle example ``3 * 120 = 360`` and in the pentagon example ``5 * 72 = 360``.

Change the ``??`` in line 7 below to the amount to turn each time to draw a 12 sided polygon, which is called a dodecagon.  If you get it right the turtle will draw a 12 sided closed polygon.

.. activecode:: Turtle_Dodecagon
    :tour_1: "Lines of code"; 1: tR3-line1; 2: tR3-line2; 3: tR5-line3; 4: tR5-line4; 5: tR5-line5; 6: tR5-line6; 7: tR5-line7;
    :nocodelens:

    You will need to replace the '??' on line 7 to have the code correctly draw a dodecagon (a polygon with 12 sides).
    ~~~~
    from turtle import *  # use the turtle library
    space = Screen()      # create a turtle space
    mia = Turtle()        # create a turtle named maria
    mia.setheading(90)    # point due north
    for sides in range(12):  # repeat the indented lines 12 times
      	mia.forward(40)      # move forward by 40 units
      	mia.right(??)        # change ?? to the amount to turn

.. mchoice:: turtle_2_1_Turtle_Dodecagon_Q1
   :answer_a: 15
   :answer_b: 30
   :answer_c: 12
   :answer_d: 90
   :correct: b
   :feedback_a: This one will not close
   :feedback_b: Exactly! 12 * 30 = 360
   :feedback_c: No, 12 * 12 is 144, which is not a multiple of 360
   :feedback_d: This one will generate a square, three times. 12 * 90 = 1080 = 360 * 3

   How much does ``mia`` need to turn in the program above to create a closed dodecagon (12-sided figure)?  Only one of these works.

.. parsonsprob:: turtle_2_2_Triangle
   :numbered: left
   :adaptive:

   The following program uses a turtle to draw a triangle as shown below, but the lines are mixed up.  The program should do all necessary set-up and create the turtle.  After that, iterate (loop) 3 times, and each time through the loop the turtle should go forward 100 pixels, and then turn left 120 degrees. Drag the needed blocks of statements from the left column to the right column and put them in the right order with the correct indention.  There may be additional blocks that are not needed in a correct solution.  Click on *Check* to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.

   .. image:: Figures/TurtleTriangle.png
      :width: 240px
      :align: center
   -----
   from turtle import *
   =====
   space = Screen()
   =====
   space = screen() #paired
   =====
   marie = Turtle()
   =====
   # repeat 3 times
   for i in range(3):
   =====
   # repeat 3 times
   for i in range(3) #paired
   =====
       marie.forward(100)
   =====
       marie.forward(100 #paired
   =====
       marie.left(120)
   =====
       marie.turn(120) #paired


.. tabbed:: turtle_2_3_WSt

   .. tab:: Question

      Write a function which takes in a turtle object and the number of sides as parameters to draw a polygon. Call the function to test it.

      .. activecode:: turtle_2_3_WSq
         :nocodelens:

   .. tab:: Answer

      .. activecode:: turtle_2_3_WSa
         :nocodelens:

         Run the code to see what it draws.
         ~~~~
         # Define the function
         def polygon(turtle, sides):
             degree = 360 / sides
             for side in range(sides):
                 mia.forward(40)
                 mia.right(degree)

         # Do the set-up
         from turtle import *
         space = Screen()
         mia = Turtle()
         mia.setheading(90)

         # Execute the function
         polygon(mia,5)
