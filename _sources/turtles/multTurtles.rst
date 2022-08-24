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
	:prefix: csp-5-4-

.. highlight:: java
   :linenothreshold: 4

Single and Multiple Turtles
=================================

.. fillintheblank:: turtle_shape_square_fitb
   :casei:

   What shape will the following code draw?

   -    :square: Correct!
        :.*: Try to follow the directions as if you are the turtle

.. activecode:: Turtle_shape_1_ac
    :tour_1: "Line-by-line Tour"; 1: t1-line1; 2: t1-line2; 3: t1-line3; 4: t1-line4; 5: t1-line5; 6: t1-line6; 7: t1-for100-1; 8: t1-right90-1; 9: t1-for100-2; 10: t1-right90-2; 11: t1-for100-3; 12: t1-right90-3;
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *	# use the turtle library
    space = Screen()		# create a turtle screen (space)
    zari = Turtle() 		# create a turtle named zari
    zari.setheading(90)		# Point due north
    zari.forward(100)		# tell zari to move forward by 100 units
    zari.right(90)   		# turn right by 90 degrees
    zari.forward(100)		# tell zari to move forward by 100 units
    zari.right(90)   		# turn right by 90 degrees
    zari.forward(100)		# tell zari to move forward by 100 units
    zari.right(90)   		# turn right by 90 degrees
    zari.forward(100)		# tell zari to move forward by 100 units
    zari.right(90)    		# turn right by 90 degrees

.. fillintheblank:: turtle_4_1_triangle_fill
   :casei:

   What shape will the program below draw when you click on the Run button?

   -    :triangle: Correct!
        :.*: Try to follow the directions as if you are the turtle

.. activecode:: Turtle_Names2
    :tour_1: "Line-by-line Tour"; 1: tri-line1; 2: tri-line2; 3: tri-line3; 4: tri-line4; 5: tri-line5; 6: tri-line6; 7: tri-line7; 8: tri-line8; 9: tri-line9; 10: tri-line10;
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *   	# use the turtle library
    space = Screen()     	# create a turtle screen (space)
    zari = Turtle()      	# create a turtle named zari
    zari.setheading(90) 	# Point due north
    zari.forward(100)  		# tell zari to move forward by 100 units
    zari.right(120) 		# turn right by 120 degrees
    zari.forward(100)		# tell zari to move forward by 100 units
    zari.right(120)   		# turn right by 120 degrees
    zari.forward(100) 		# tell zari to move forward by 100 units
    zari.right(120)   		# turn right by 120 degrees

This works because ``zari`` is a turtle, and each statement gets executed, one right after the other.  If we introduce another turtle and another name, it doesn't work the same

.. activecode:: Two_Turtles
    :tour_1: "Line-by-line Tour"; 1: tt-line1; 2: tt-line2; 3: tt-line3; 4: tt-line4; 5: tt-line5; 6: tt-line6; 7: tt-line7; 8: tt-line8; 9: tt-line9; 10: tt-line10; 11: tt-line11; 12: tt-line12;
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import * 	# use the turtle library
    space = Screen()     	# create a turtle screen (space)
    zari = Turtle()     	# create a turtle named zari
    zari.setheading(90) 	# Point due north
    zari.forward(100)   	# tell zari to move forward by 100 units
    zari.right(120)     	# turn right by 120 degrees
    zari.forward(100)     	# tell zari to move forward by 100 units
    zari.right(120)      	# turn right by 120 degrees
    chad = Turtle()     	# create a new turtle named chad
    chad.color("orange")  	# change the color chad draws with
    chad.forward(100)     	# tell chad to move forward by 100 units
    chad.right(120)     	# turn chad by 120 degrees

Every turtle object has its own attributes like its current position and color.  So, when we created chad his position was different from zari's.  Turtles start off in the center of the drawing space when they are first created.

**Mixed up programs**

.. parsonsprob:: turtle_4_2_JandT
   :numbered: left
   :adaptive:

   The following program has one turtle, "jamal", draw a capital L in blue and then another, "tina", draw a line to the west in orange as shown to the left.  The program should do all set-up, have "jamal" draw the L, and then have "tina" draw the line.  Drag the blocks of statements from the left column to the right column and put them in the right order.  Then click on *Check* to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.

   .. image:: Figures/TwoTurtles1N.png
      :width: 240px
      :align: center
   -----
   from turtle import *
   wn = Screen()
   =====
   jamal = Turtle()
   jamal.pensize(10)
   jamal.color("blue")
   =====
   jamal.right(90)
   jamal.forward(150)
   =====
   jamal.left(90)
   jamal.forward(150) #paired
   =====
   jamal.left(90)
   jamal.forward(75)
   =====
   jamal.right(90)
   jamal.forward(75) #paired
   =====
   tina = Turtle()
   tina.pensize(10)
   tina.color("orange")
   =====
   tina = Turtle()
   tina.pensize(10)
   tina.color(orange) #paired
   =====
   tina.left(180)
   tina.forward(75)

.. parsonsprob:: turtle_4_3_JandT2
   :numbered: left
   :adaptive:

   The following program has one turtle, "jamal", draw a line to the north in blue and then another, "tina", draw a line to the east in orange as shown to the left.  The program should import the turtle module, get the window to draw on, create the turtle "jamal", have it draw a line to the north, then create the turtle "tina", and have it draw a line to the east.  Drag the blocks of statements from the left column to the right column and put them in the right order.  Then click on *Check* to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.

   .. image:: Figures/TwoTurtlesLN.png
      :width: 240px
      :align: center
   -----
   from turtle import *
   =====
   from turtle #paired
   =====
   wn = Screen()
   =====
   jamal = Turtle()
   =====
   jamal = turtle() #paired
   =====
   jamal.color("blue")
   jamal.pensize(10)
   jamal.left(90)
   jamal.forward(150)
   =====
   tina = Turtle()
   tina.pensize(10)
   =====
   tina.color("orange")
   tina.forward(150)
   =====
   tina.color("orange")
   tina.Forward(150) #paired
