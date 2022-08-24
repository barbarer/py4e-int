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
	:prefix: csp-5-3-

.. highlight:: java
   :linenothreshold: 4



Turtle Methods
=======================================

Turtles can do more than go forward, turn left, and turn right.  The table below lists the turtle methods.  Methods are functions that are defined in a class.  A class defines what all objects of the class know (the data each object keeps track of) and can do (the behaviors an object can execute).  You can think of a class as like a classification (type of thing).

==========  ==========  =========================
Name        Input       Description
==========  ==========  =========================
backward    amount        Moves the turle backward by the specified amount
color       colorname     Sets the pen color for drawing.  Use 'red', 'black', etc
forward     amount        Moves the turtle forward by the specified amount
goto        x,y           Moves the turtle to position x,y
left        angle         Turns the turtle counter clockwise by the specified angle
pendown     None          Puts down the turtles tail so that it draws when it moves
penup       None          Picks up the turtles tail so that it doesn't draw when it moves
pensize     width         Sets the width of the pen for drawing
right       angle         Turns the turtle clockwise by the specified angle
setheading  angle         Turns the turtle to face the given heading.  East is 0, north is 90, west is 180, and south is 270.
Turtle      None          Creates and returns a new turtle object
==========  ==========  =========================

You can draw a block style C with a turtle.  Can you draw more than one letter?  You would have to use the ``penup()`` procedure to pick up the pen and then move to the new location to draw the second letter and then put the pen down using ``pendown()`` as shown in the example below.

.. activecode:: Turtle_CandL
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *    # use the turtle library
    space = Screen()        # create a turtle space
    ji = Turtle()           # create a turtle named ji
    ji.right(180)           # turn right by 180 degrees
    ji.forward(75)          # move forward by 75 units
    ji.right(90)            # turn right 90 degrees
    ji.forward(100)         # more forward by 90 units
    ji.right(90)            # turn right 90 degrees
    ji.forward(75)          # move forward by 75 units
    ji.penup()              # pick up the pen
    ji.forward(50)          # move forward 50 units
    ji.pendown()            # put the pen down
    ji.right(90)            # turn right 90 degrees
    ji.forward(100)         # go forward 100 units
    ji.left(90)             # turn left 90 degrees
    ji.forward(75)          # go forward 75 units

The space that the turtle draws in is 320 by 320 pixels.  The center of the space is at x=0, y=0.

.. figure:: Figures/spaceCoord.png
    :width: 400px
    :align: center
    :alt: the space coordinate system
    :figclass: align-center

    Figure 1: The coordinates for the drawing space.  Note that the center is x = 0 and y = 0.

The program below uses the ``goto(x,y)`` to move to the top left corner before drawing a C.

.. activecode:: Turtle_Bounds
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *  # use the turtle library
    space = Screen()      # create a turtle space
    anu = Turtle()        # create a turtle named anu
    anu.penup()           # pick up the pen (don't draw)
    anu.goto(-75,150)     # go to a location
    anu.pendown()         # put down the pen
    anu.right(180)        # turn to face west
    anu.forward(75)       # move forward by 75 units
    anu.left(90)          # turn right 90 degrees
    anu.forward(100)      # more forward by 90 units
    anu.left(90)          # turn right 90 degrees
    anu.forward(75)       # move forward by 75 units


.. note ::

   Remember to put the pen down again after you have picked it up if you want to draw a line!

**Mixed up programs**

.. parsonsprob:: turtle_3_1_DrawF
   :numbered: left
   :adaptive:

   The following program uses a turtle to draw a capital F as shown in the picture below, but the lines are mixed up.  The program should do all necessary set-up: import the turtle module, get the screen/space to draw on, and create the turtle.  It should draw the lines in the order shown by the numbers in the picture on the left. Drag the needed blocks of statements from the left column to the right column and put them in the right order.  There may be extra blocks that are not needed in a correct solution.  Then click on *Check* to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.

   .. image:: Figures/DrawFwGT.png
      :width: 240px
      :align: center
   -----
   from turtle import *
   space = Screen()
   anu = Turtle()
   =====
   anu.left(90)
   anu.forward(100)
   =====
   anu.right(90)
   anu.forward(50)
   =====
   anu.left(90)
   anu.forward(50) #paired
   =====
   anu.penup()
   =====
   anu.penUp() #paired
   =====
   anu.goto(0,60)
   =====
   anu.goTo(0,60) #paired
   =====
   anu.pendown()
   =====
   anu.penDown() #paired
   =====
   anu.forward(50)

.. parsonsprob:: turtle_3_2_DrawA
   :numbered: left
   :adaptive:

   The following program uses a turtle to draw a capital A as shown in the picture below, but the lines are mixed up.  The program should do all necessary set-up: import the turtle module, get the screen/space to draw on, and create the turtle.  It should draw the lines in the order shown by the numbers in the picture on the left. Drag the needed blocks of statements from the left column to the right column and put them in the right order. There may be additional blocks that are not needed in a correct solution. Then click on *Check* to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.

   .. image:: Figures/DrawABig.png
      :width: 240px
      :align: center
   -----
   from turtle import *
   =====
   space = Screen()
   =====
   space = screen() #paired
   =====
   ella = Turtle()
   =====
   ella = Turtle #paired
   =====
   ella.left(60)
   ella.forward(100)
   =====
   ella.left(60)
   ella.forward() #paired
   =====
   ella.right(120)
   ella.forward(100)
   =====
   ella.penup()
   ella.goto(30,50)
   ella.pendown()
   =====
   ella.left(60)
   ella.forward(40)
   =====
   ella.Left(60)
   ella.forward(40) #paired

You can change the color and pensize that you draw with as well.

.. activecode:: Turtle_Color
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *   # use the turtle library
    space = Screen()       # create a turtle space
    anu = Turtle()         # create a turtle named anu
    anu.color('red')       # set the pen color to red
    anu.pensize(25)        # set the size of the pen
    anu.right(180)         # turn right by 180 degrees
    anu.forward(75)        # move forward by 75 units
    anu.right(90)          # turn right 90 degrees
    anu.color('blue')      # set the pen color to blue
    anu.pensize(50)        # set the pen size to 10
    anu.forward(100)       # move forward by 100 units



.. activecode:: Turtle_Initials
    :nocodelens:

    Use the area below to try to draw to draw your initials in block style with two different colors.
    ~~~~
