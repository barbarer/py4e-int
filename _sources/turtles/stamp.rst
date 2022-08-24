..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. 	qnum::
	:start: 1
	:prefix: csp-10-4-

The Turtle Stamp Procedure
============================

You can change the shape of the turtle using the ``shape`` procedure.  In the program below we set it to look more like a turtle.

A turtle can also **stamp** a copy of itself on the screen (turtle drawing area), and this will remain after the turtle has moved somewhere else.  Do this with the ``stamp`` procedure.  Stamping works even when the pen is up.  You can ask the turtle to pick up the pen using the ``up`` procedure as shown below.  When the pen is up the turtle will not draw a line when it moves.

Here is an example that shows off these new features.

.. activecode:: stampex
   :tour_1: "Line-by-line Tour"; 1: stamp1-line1; 2: stamp1-line2; 3: stamp1-line3; 4: stamp1-line4; 5: stamp1-line5; 7: stamp1-line7; 8: stamp1-line8; 9: stamp1-line9; 10: stamp1-line10; 11: stamp1-line11; 12: stamp1-line12;
   :nocodelens:

   Run the code to see what it draws.
   ~~~~
   from turtle import *
   space = Screen()
   tess = Turtle()
   tess.color("blue")
   tess.shape("turtle")

   print(range(5, 60, 2))
   tess.penup()                  # ask tess to pick up her pen
   for size in range(5, 60, 2):  # start with size = 5 and grow by 2
       tess.stamp()                # leave an impression on the canvas
       tess.forward(size)          # move tess along
       tess.right(24)              # and turn her

The list of integers shown under the picture above is created by printing the ``range(5,60,2)`` result.  This shows you the distances used to move the turtle forward each time through the ``for`` loop.

All except one of the shapes you see on the screen here are copies of the turtle shape created by ``stamp``.  But the program still only has *one* turtle instance --- can you figure out which one is the real tess?  (Hint: if you're
not sure, write a new line of code after the ``for`` loop to change tess' color, or to put her pen down and draw a line, or to change her shape, etc.)

**Mixed up program**

.. parsonsprob:: turtle_4_1_turtle-stamp
   :numbered: left
   :adaptive:

   The following program uses the stamp method to create a line of turtle shapes as shown below, but the lines are mixed up.  The program should do all necessary set-up, create the turtle, set the shape to "turtle", and pick up the pen.  Then the turtle should repeat the following three times: go forward 50 pixels and leave a copy of the turtle at the current position.  Drag the needed blocks of statements from the left column to the right column and put them in the right order with the correct indention.  Click on *Check* to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.

   .. image:: Figures/Turtle3Stamp.png
      :width: 200px
      :align: center

   -----
   from turtle import *
   space = Screen()
   space.setup(400,400)
   =====
   nikea = Turtle()
   =====
   nikea.shape("turtle")
   =====
   nikea.shape(turtle) #paired
   =====
   nikea.penup()
   =====
   nikea.penUp() #paired
   =====
   for size in range(3):
   =====
   for size in range(3)  #paired
   =====
       nikea.forward(50)
   =====
       nikea.stamp()
   =====
       nikea.stamp #paired

.. parsonsprob:: turtle_4_2_turtle-circle
   :numbered: left
   :adaptive:

   The following program uses the stamp method to create a circle of turtle shapes as shown to the left, but the lines are mixed up.  The program should do all necessary set-up, create the turtle, set the shape to "turtle", and pick up the pen.  Then the turtle should repeat the following ten times: go forward 50 pixels, leave a copy of the turtle at the current position, reverse for 50 pixels, and then turn right 36 degrees. Drag the needed blocks of statements from the left column to the right column and put them in the right order with the correct indention.  Click on *Check* to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks

   .. image:: Figures/TurtleCircle.png
      :width: 200px
      :align: center

   -----
   from turtle import *
   space = Screen()
   jose = Turtle()
   =====
   jose.shape("turtle")
   jose.penup()
   =====
   jose.shape("turtle")
   jose.penup #paired
   =====
   for size in range(10):
   =====
   for size in range(10) #paired
   =====
       jose.forward(50)
   =====
       jose.stamp()
   =====
       jose.Stamp() #paired
   =====
       jose.forward(-50)
   =====
       jose.forward(-25) #paired
   =====
       jose.right(36)
   =====
       jose.right(20) #paired
