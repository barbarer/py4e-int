..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


History of Turtles
=========================

The idea of a virtual turtle, dates back to the 1960's.  Seymour Papert and his group at MIT created the programming language LOGO which could control a robot turtle with a physical pen in it.  Kids would steer the robot around, and it would draw as it moved. Seymour said that the Turtle was, "an object to think with".  Many modern programming languages support Turtles, including Python.

.. figure:: Figures/mindstorms_turtle.jpg
    :width: 200px
    :align: center
    :alt: Children playing with a Logo turtle robot that can draw with a pen
    :figclass: align-center

    Figure 3: Children playing with a Logo turtle robot that could draw with a pen

..	index::
	single: comment
	single: library
	single: screen
	pair: turtle; screen
	pair: turtle; library
	pair: programming; comment
	pair: program; comment

Today, we can play with virtual turtles in a fully-graphical and non-robotic way. Below is a Python program that first creates a Screen object (object of the Screen class) for the turtle to draw on and then creates a Turtle object (object of the Turtle class).
The program asks the turtle object to perform some of its behaviors (methods) like moving forward a set amount and turning. The turtle draws as it moves.

.. activecode:: Turtle_ex_1
    :tour_1: "Line-by-line Tour"; 1: first-turtle-line-1; 2: first-turtle-line-2; 3: first-turtle-line-3; 4: first-turtle-line-4; 5: first-turtle-line-5; 6: first-turtle-line-6;
    :nocodelens:

    Click the Run button to see what this code does.  The drawing will happen below the code.
    ~~~~
    from turtle import *  # use the turtle library
    space = Screen()      # create a Screen object named space
    alex = Turtle()       # create a Turtle object named alex
    alex.forward(150)     # ask alex to move forward by 150 units
    alex.left(90)         # ask alex to turn by 90 degrees
    alex.forward(75)      # ask alex to move forward by 75 units

.. mchoice:: Turtle_Init_Dir_mc_q1
   :practice: T
   :answer_a: North
   :answer_b: South
   :answer_c: East
   :answer_d: West
   :correct: c
   :feedback_a: Some systems start with the turtle facing North, but not this one.
   :feedback_b: Which way does the turtle first move in the example above?  North is at the top of the page.
   :feedback_c: Turtles start off facing east which is toward the right side of the page.
   :feedback_d: Which way does the turtle first move in the example above?   North is at the top of the page.

   Which way does a turtle (object of the Turtle class) face when it is first created?

..	index::
	single: dot notation

.. Note::
   Notice that we tell ``alex`` the turtle what to do in the code above using **dot notation**: ``alex.forward(150)``, 	``alex.left(90)``, and ``alex.forward(75)``.  That is how you communicate with an object.  You use the name of the turtle object followed by a ``.`` and then the name of the method that you want to execute.

Just by going forward and turning we can have a turtle object draw many things.

What does a left turn of 90 mean?
----------------------------------

When we ask a turtle to turn left, it will turn left based on the direction it is currently heading. A turtle object keeps track of its heading (direction it is facing). Use the figure below to help you understand how much the turtle will turn if asked to turn left 90 degrees and it is currently heading east (0 degrees).

.. figure:: Figures/turnDegrees.png
    :width: 600px
    :align: center
    :alt: shows what a turn of each degrees means for left and right turns
    :figclass: align-center

    Figure 1: The amount of turn for specified degrees for left and right turns

Practice with Turtles
=========================

.. note::

   The following problems have a *Help Me* button.  You can click on the *Help Me* button after you have made at least 3 full and distinct attempts to solve the problem to make the problem easier.

.. parsonsprob:: turtle_1_1_Turtle_L
   :numbered: left
   :adaptive:

   The following program uses a turtle to draw a capital L as shown below, but the lines are mixed up.  The program should do all necessary set-up: import the turtle module, get the screen/space to draw on, and create the turtle.  The turtle should turn to face south, draw a line that is 150 pixels long, then turn to face east, and draw a line that is 75 pixels long.  We have added a compass to the picture to indicate the directions north, south, west, and east. Drag the needed blocks of statements from the left column to the right column and put them in the right order.  There may be additional blocks that are not needed in a correct solution.  Then click on *Check* to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.

   .. image:: Figures/TurtleL4.png
      :width: 200px
      :align: center
   -----
   from turtle import *
   =====
   from turtle Import * #paired
   =====
   space = Screen()
   =====
   space = screen() #paired
   =====
   ella = Turtle()
   =====
   ella.right(90)
   =====
   ella.turn(90) #paired
   =====
   ella.forward(150)
   =====
   ella.left(90)
   =====
   ella.forward(75)
   =====
   ella.go(75) #paired



.. parsonsprob:: turtle_1_2_Turtle_Check
   :numbered: left
   :adaptive:

   The following program uses a turtle to draw a checkmark as shown below but the lines are mixed up.  The program should do all necessary set-up: import the turtle module, get the screen/space to draw on, and create the turtle.  The turtle should turn to face southeast, draw a line that is 75 pixels long, then turn to face northeast, and draw a line that is 150 pixels long.  We have added a compass to the picture to indicate the directions north, south, west, and east.  Northeast is between north and east. Southeast is between south and east. Drag the needed blocks of statements from the left column to the right column and put them in the right order.  There may be additional blocks that are not needed in a correct solution.  Then click on *Check* to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.

   .. image:: Figures/checkMark.png
      :width: 200px
      :align: center
   -----
   from turtle import *
   =====
   space = Screen()
   =====
   maria = Turtle()
   =====
   maria = Turtle #paired
   =====
   maria.right(45)
   =====
   maria.left(45) #paired
   =====
   maria.forward(75)
   =====
   maria.Forward(75) #paired
   =====
   maria.left(90)
   =====
   maria.right(90) #paired
   =====
   maria.forward(150)

.. fillintheblank:: turtle_2_1_LetterC_fill

   What letter (like A, B, C, D, etc) will the program below draw in block style when you click on the Run button?

   -    :^c$|^C$: Correct!
        :.*: Try to follow the directions as if you are the turtle

.. activecode:: Turtle_C
    :nocodelens:

    Click the Run button to see what this code does.  The drawing will happen below the code.
    ~~~~
    from turtle import *    # use the turtle library
    space = Screen()        # create a Screen object named space
    alex = Turtle()         # create a Turtle object named alex
    alex.left(180)          # turn alex by 180 degrees
    alex.forward(75)        # move forward by 75 units
    alex.left(90)           # turn left 90 degrees
    alex.forward(100)       # more forward by 100 units
    alex.left(90)           # turn left 90 degrees
    alex.forward(75)        # move forward by 75 units

The following example has 4 errors.  Can you fix the errors so that the code runs correctly to print a capital L?

.. activecode:: Turtle_Error1
    :nocodelens:

    Fix the code below.  Error messages will shown up below the code.  The drawing will also happen below the code.
    ~~~~
    from turtle import *    # use the turtle library
    space = screen()        # create a Screen object named space
    alisha = Turtle         # create a Turtle object named alisha
    alisha.right(90)        # turn alisha south
    alisha.forward          # move forward by 150 units
    alisha.left(90)         # turn to face east
    alisha.Forward(75)      # move forward by 75 units

The following example has 4 errors.  Can you fix the errors so that the code runs correctly to print a capital C?

.. activecode:: Turtle_Error2
    :nocodelens:

    Fix the code below.  Error messages will shown up below the code.  The drawing will also happen below the code.
    ~~~~

    from turtle Import *    # use the turtle library
    space = Screen()        # create a Screen object named space
    alex = Turtle           # create a Turtle object named alex
    alex.left(180)          # turn alex by 180 degrees
    alex.forward(75)        # move forward by 75 units
    alex.turn(90)           # turn left 90 degrees
    alex.forward(100)       # more forward by 100 units
    alex.left(90)           # turn left 90 degrees
    alex.forward            # move forward by 75 units

.. note::
   Case matters in Python so ``screen`` is not the same as ``Screen``. Also the open and close parentheses are required after every function and procedure call, even if it doesn't take any input.



.. activecode:: Turtle_Letter
    :nocodelens:

    Use the area below to try to draw a letter or number.  Use block style rather than curves.
    ~~~~
