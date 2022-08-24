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
	:prefix: csp-10-1-

Using Repetition with Turtles
===============================

*Learning Objectives:*

- Use a ``for-each`` loop to repeat steps with turtles.
- Introduce the range function
- Generalize how to draw a polygon.

..	index::
	pair: statements; for

We already had a turtle draw a square.  We repeated the lines in order to make the turtle go forward and turn four times.  Another way to do this is to tell the computer to do something explicitly for a certain number of times by using a ``for`` loop. The lines that you want to repeat in the ``for`` loop must be indented by 4 spaces as shown below.

.. activecode:: Turtle_For
    :tour_1: "Lines of code"; 1: tR1-line1; 2: tR1-line2; 3: tR1-line3; 4: tR1-line4; 5: tR1-line5; 6: tR1-line6; 7: tR1-line7;
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *     # use the turtle library
    space = Screen()         # create a turtle space
    alisha = Turtle()        # create a turtle named alisha
    alisha.setheading(90)    # point due north
    for sides in [1,2,3,4]:  # repeat the indented lines 4 times
    	alisha.forward(100)    # move forward by 100 units
      	alisha.right(90)     # turn by 90 degrees

.. mchoice:: turtle_1_1_Turtle_For_Q1
   :answer_a: [0,1,2,3]
   :answer_b: [0,1,2]
   :answer_c: [2,3,4,5]
   :answer_d: [1,2,3,4,5]
   :correct: b
   :feedback_a: This still has four sides -- they are just numbered differently.
   :feedback_b: This would only draw 3 side since there are only 3 items in the list.
   :feedback_c: This still has four sides -- they are just numbered differently.
   :feedback_d: This <i>will</i> draw a square. The turtle will just go on to trace the first side twice.

   The numbers in the list ``[1,2,3,4]`` are not important.  It's the fact that there are *four* items in the list that is important.  Only one of these choices does *not* make a square.  Which one?  (It's not cheating to actually try each of them and run the program each time!)

.. parsonsprob:: turtle_1_2_Rectangle
   :numbered: left
   :adaptive:

   The following program uses a turtle to draw a rectangle as shown below, but the lines are mixed up.  The program should do all necessary set-up and create the turtle.  After that, iterate (loop) 2 times, and each time through the loop the turtle should go forward 175 pixels, turn right 90 degrees, go forward 150 pixels, and turn right 90 degrees. Drag the needed blocks of statements from the left column to the right column and put them in the right order with the correct indention.  There may be additional blocks that are not needed in a correct solution.   Click on *Check* to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.

   .. image:: Figures/TurtleRect.png
      :width: 200px
      :align: center
   -----
   from turtle import *
   =====
   from Turtle import * #paired
   =====
   space = Screen()
   carlos = Turtle()
   =====
   # repeat 2 times
   for i in [1,2]:
   =====
   # repeat 2 times
   for i in [1,2]  #paired
   =====
       carlos.forward(175)
   =====
       carlos.Forward(175) #paired
   =====
       carlos.right(90)
   =====
       carlos.forward(150)
       carlos.right(90)
   =====
       carlos.forward(150)
       carlos.turn(90) #paired

Since it doesn't matter what's in the list, just as long as there are *four* items, there is a special way of writing that loop.  We use a ``range`` function.

.. activecode:: Turtle_For_Range
  :tour_1: "Line-by-line tour"; 1: tR2-line1; 2: tR2-line2; 3: tR2-line3; 4: tR2-line4; 7: tR2-line7; 8: tR2-line8; 9: tR2-line9;
  :nocodelens:

  Run the code to see what it draws.
  ~~~~
  from turtle import *   # use the turtle library
  space = Screen()       # create a turtle space
  marcus = Turtle()      # create a turtle named marcus
  marcus.setheading(90)  # point due north

  # Now make a square
  for sides in range(4):   # repeat the indented lines 4 times
      marcus.forward(100)  # move forward by 100 units
      marcus.right(90)     # turn by 90 degrees


The ``range(n)`` function returns an object (a range object) that produces the value from 0 to n - 1 when you use it in a for-each loop as shown below.

.. activecode:: Turtle_Print_Range
  :nocodelens:

  Run this code to see what it prints.
  ~~~~
  # print the type (class name)
  print(type(range(4)))
  print() # empty line

  # print the values in the range from 0 to end - 1
  for i in range(4):
      print(i)

  # print an empty line
  print()

  # print the values in the range from 0 to end - 1
  for i in range(10):
      print(i)


.. |turtlegeometry| image:: Figures/turtle-geometry.jpg
    :width: 200px
    :align: top
    :alt: teachernote
