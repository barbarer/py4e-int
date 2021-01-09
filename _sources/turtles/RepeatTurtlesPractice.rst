..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. 	qnum::
	:start: 1
	:prefix: csp-10-5-

More Turtle Stamp Practice
============================

This section provides more practice using the **stamp** procedure.

**Mixed up program**

.. parsonsprob:: 10_5_1_turtle-x
   :numbered: left
   :adaptive:

   The following program uses the stamp method to create an X of turtle shapes as shown to the left, <img src="../_static/TurtleStampX.png" width="150" align="left" hspace="10" vspace="5" /> but the lines are mixed up.  The program should do all necessary set-up, create the turtle, set the shape to "turtle", and pick up the pen. Stamp the blue turtles before you stamp the green ones.   <br /><br /><p>Drag the needed blocks of statements from the left column to the right column and put them in the right order with the correct indention.  Click on <i>Check Me</i> to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.</p>
   -----
   from turtle import *
   =====
   space = Screen()
   =====
   space = screen() #distractor
   =====
   nick = Turtle()
   nick.shape("turtle")
   =====
   nick.penup()
   =====
   nick.penUp() #distractor
   =====
   nick.goto(-150,-150)
   nick.left(45)
   =====
   nick.goto(-150,-150)
   nick.left(90) #distractor
   =====
   nick.color("blue")
   for num in range(15):
       nick.stamp()
       nick.forward(30)
   =====
   nick.goto(150,-150)
   nick.left(90)
   =====
   nick.goto(150,-150)
   nick.left(45) #distractor
   =====
   nick.color("green")
   for num in range(14):
   =====
       nick.stamp()
       nick.forward(30)

.. parsonsprob:: 10_5_2_turtle-squares
   :numbered: left
   :adaptive:

   The following program uses the stamp method to create two squares of turtle shapes as shown to the left, <img src="../_static/TurtleStampDoubleSquare.png" width="150" align="left" hspace="10" vspace="5" /> but the lines are mixed up.  The program should do all necessary set-up, create the turtle, set the shape to "turtle", and pick up the pen.  Draw the blue square before you draw the green one.<br /><br /><p>Drag the needed blocks of statements from the left column to the right column and put them in the right order with the correct indention.  Click on <i>Check Me</i> to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.</p>
   -----
   from turtle import *
   space = Screen()
   =====
   nick = Turtle()
   nick.shape("turtle")
   =====
   nick = Turtle()
   nick.shape("Turtle") #distractor
   =====
   nick.penup()
   =====
   nick.goto(-150,-150)
   nick.left(90)
   =====
   nick.goto(-150,-150)
   nick.right(90) #distractor
   =====
   nick.color("blue")
   for count in range(4):
       for num in range(5):
           nick.stamp()
           nick.forward(30)
       nick.right(90)
   =====
   nick.goto(-120,-120)
   nick.color("green")
   for count in range(4):
   =====
       for num in range(3):
   =====
       for num in range(2): #distractor
   =====
           nick.stamp()
           nick.forward(30)
   =====
       nick.right(90)
   =====
       nick.left(90) #distractor

Use the area below to try to draw a pattern using a ``for`` loop and the ``stamp`` procedure.

.. activecode:: Turtle_Stamp_Open
    :nocodelens:

.. note::

    Discuss topics in this section with classmates.

      .. disqus::
          :shortname: cslearn4u
          :identifier: studentcsp_10_5
