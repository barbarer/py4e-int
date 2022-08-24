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
	:prefix: csp-10-3-

Making Patterns within Patterns
===============================

We now know the pattern for creating any polygon.  We can wrap that pattern in another loop to create `spirograph <http://en.wikipedia.org/wiki/Spirograph>`_ like patterns.  The example below uses pentagons, but you can use other polygons instead.

..	index::
	  pair: for loops; nested
	  single: setExecutionLimit

.. note::
   The outer ``for`` loop in the code below on line 8 executes 20 times and the inner ``for`` loop on line 13 executes 5 times *for each* of the outer loop values, 5 times when the outer loop value is 0, 5 times when the outer loop value is 1, 5 times when the outer loop value is 2, and so on.  The inner loop is executed a total of 20 * 5 = 100 times.  The turtle can take a long time to finish drawing this pattern.  Normally code in the browser is limited to only running in 10 seconds or less.  But, we can use the ``sys`` library (short for system) ``setExecutionLimit(milliseconds)`` procedure which will let the code run for up to the specified number of milliseconds.  One second is 1,000 milliseconds, so 50,0000 milliseconds is 50 seconds.

.. activecode:: Turtle_Spirograph1
    :tour_1: "Lines of code"; 1-2: tr3-1-line1-2; 3: tr3-1-line3; 4: tr3-1-line4; 5: tr3-1-line5; 6: tr3-1-line6; 8: tr3-1-line8; 9: tr3-1-line9; 10: tr3-1-line10; 13: tr3-1-line13; 14: tr3-1-line14; 15: tr3-1-line15;
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *     # use the turtle library
    from sys import *        # use the system library
    setExecutionLimit(50000) # let this take up to 50 seconds
    space = Screen()         # create a turtle space
    zoe = Turtle()           # create a turtle named zoe
    zoe.setheading(90)       # point due north

    # This part makes the circle
    for repeats in range(20):     # draw the pattern 20 times
      	zoe.forward(10)           # Offset the shapes a bit
      	zoe.right(18)             # And turn each one a bit

      	# This part makes a pentagon
      	for sides in range(5):    # repeat 5 times
      	    zoe.forward(50)       # move forward by 50 unit
      	    zoe.right(72)         # turn by 72 degrees

By setting the pen color differently, we can distinguish the part that draws the shape, from the part that draws *between* the shapes.

.. activecode:: Turtle_Spirograph2
    :tour_1: "Lines of code"; 1-2: tr3-1-line1-2; 3: tr3-1-line3; 4: tr3-1-line4; 5: tr3-1-line5; 6: tr3-1-line6; 8: tr3-1-line8; 9: ts2-line9; 10: ts2-line10; 11: ts2-line11; 12: ts2-line12; 15: ts2-line15; 16: ts2-line16; 17: ts2-line17;
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *     # use the turtle library
    from sys import *        # use the system library
    setExecutionLimit(50000) # let this take up to 50 seconds
    space = Screen()         # create a turtle space
    zoe = Turtle()           # create a turtle named zoe
    zoe.setheading(90)       # point zoe due north

    # This part makes the circle
    for repeats in range(20):   # 20 times to draw the pattern
      	zoe.color("green")      # set the color to green
      	zoe.forward(10)           # Offset the shapes a bit
      	zoe.right(18)             # And turn each one a bit
      	zoe.color("red")          # set the color to red

     	# This part makes a pentagon
      	for sides in range(5):    # repeat 5 times
            zoe.forward(50)         # move forward 50 units
            zoe.right(72)           # turn by 72 degrees

You can use the coloring in the picture below to help you figure out the correct order of the lines below.

.. parsonsprob:: turtle_3_1_Turtle_Spiro
   :numbered: left
   :adaptive:

   There is a way of arranging the statements below such that this image is created. The turtle will draw many triangles.  Move the needed pieces of the program from the left into the space on the right.  Indent lines as needed.

   .. image:: Figures/BlueTrianglesRedCircle.png
      :width: 200px
      :align: center
   -----
   from turtle import *
   from sys import *
   setExecutionLimit(50000)
   =====
   wn = Screen()
   mateo = Turtle()
   mateo.setheading(90)
   =====
   for repeats in range(20):
   =====
   for repeats in range(20) #distractor
   =====
       mateo.color("red")
       mateo.forward(10)
       mateo.left(18)
   =====
       mateo.color("red")
       mateo.forward(10)
       mateo.left(12) #distractor
   =====
       for sides in range(3):
       =====
       for sides in range(4): #distractor
   =====
           mateo.color("blue")
           mateo.forward(50)
           mateo.right(120)


You can use the coloring in the picture below to help you figure out the correct order of the lines below.

.. parsonsprob:: turtle_3_2_Turtle_Spiro_Blue_Red
   :numbered: left
   :adaptive:

   There is a way of arranging the statements below such that this image is created. The turtle will draw many triangles. Move the needed pieces of the program from the left into the space on the right.  Indent lines as needed.

   .. image:: Figures/RedTrianglesBlueCircle.png
      :width: 200px
      :align: center
   -----
   from turtle import *
   from sys import *
   setExecutionLimit(50000)
   =====
   wn = Screen()
   mateo = Turtle()
   mateo.setheading(90)
   =====
   for repeats in range(20):
   =====
   for repeats in range(20) #distractor
   =====
       mateo.color("blue")
       mateo.forward(10)
       mateo.left(18)

   =====
       for sides in range(3):
   =====
       for sides in range(3) #distractor
   =====
           mateo.color("red")
           mateo.forward(50)
           mateo.right(120)
   =====
           mateo.color("red")
           mateo.forward(50)
           mateo.right(60) #distractor



.. activecode:: Turtle_Nested_Error1
    :nocodelens:

    The following example has 4 errors.  Can you fix the errors so that the code compiles and runs?
    ~~~~
    from turtle import *    # use the turtle library
    from sys import *
    setExecutionLimit(50000)

    wn = screen()
    mateo = Turtle()
    mateo.setheading(90)

    for repeats in range(20)
        mateo.color("red")
        mateo.forward(10)
        mateo.left(18)

        for sides in range(3):
            mateo.Color("blue")
            mateo.forward(50)
            mateo.Right(120)



.. activecode:: Turtle_Nested_Error2
    :nocodelens:

    The following example has 4 errors.  Can you fix the errors so that the code compiles and runs?
    ~~~~
    from turtle import *    # use the turtle library
    from sys import *
    setExecutionLimit(50000)

    wn = screen()
    mateo = turtle()
    mateo.setheading(90)

    for repeats in range(20):
        mateo.color("red")
        mateo.forward(10)
        mateo.left(18)

        for sides in range(3)
            mateo.color("blue")
            mateo.Forward(50)
            mateo.right(120)
