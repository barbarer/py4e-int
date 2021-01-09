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
	:prefix: csp-5-2-1-
	
.. highlight:: java
   :linenothreshold: 4

Practice with Turtles
================================

As we have seen before turtles can draw letters like a capital C as shown below.  It draws each line without picking up the pen in between.  

.. activecode:: Turtle_C2
    :nocodelens:
	
    from turtle import *    # use the turtle library
    space = Screen()        # create a turtle space
    alex = Turtle()         # create a turtle named alex
    alex.left(180)          # turn alex by 180 degrees
    alex.forward(75)        # move forward by 75 units 
    alex.left(90)           # turn left 90 degrees
    alex.forward(100)       # more forward by 100 units
    alex.left(90)           # turn left 90 degrees
    alex.forward(75)        # move forward by 75 units 
    
**Mixed up programs**

.. parsonsprob:: 5_2_1_DrawZ
   :numbered: left
   :adaptive:

   The following program uses a turtle to draw a capital Z as shown in the picture to the left of this text, <img src="../_static/DrawZ.png" width="200" align="left" hspace="10" vspace="5" /> but the lines are mixed up.  The program should do all necessary set-up: import the turtle module, get the space to draw on, and create the turtle.  Then it should draw the lines for the Z in the order shown by the numbers on the picture.  <br /><br /><p>Drag the needed blocks of statements from the left column to the right column and put them in the right order.  There may be extra blocks that are not needed in a correct solution.  Then click on <i>Check Me</i> to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.</p>
   -----
   from turtle import *  
   =====
   from turtle Import * #paired 
   ===== 
   space = Screen()  
   ===== 
   space = screen() #paired 
   =====      
   alex = Turtle()  
   =====  
   alex = turtle() #paired  
   =====    
   alex.forward(50)
   alex.right(120)
   =====    
   alex.forward(50)
   alex.turn(120) #paired
   =====
   alex.forward(100)
   =====
   alex.left(120)
   =====
   alex.forward(50)
   
   
.. parsonsprob:: 5_2_1_DrawN
   :numbered: left
   :adaptive:

   The following program uses a turtle to draw a capital N as shown in the picture to the left of this text, <img src="../_static/DrawN4.png" width="200" align="left" hspace="10" vspace="5" /> but the lines are mixed up.  The program should do all necessary set-up: import the turtle module, get the space to draw on, and create the turtle.  Remember that the turtle starts off facing east when it is created.  Then it should draw the lines for the N in the order shown by the numbers on the picture.  <br /><br /><p>Drag the needed blocks of statements from the left column to the right column and put them in the right order. There may be some extra blocks that are not needed in a correct solution.  Then click on <i>Check Me</i> to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.</p>
   -----
   from turtle import *
   =====
   space = Screen()
   =====
   ella = Turtle()
   =====
   ella = Turtle #paired
   =====
   ella.left(90)
   ella.forward(100)
   =====
   ella.right(90)
   ella.forward(100) #paired
   =====
   ella.right(150)
   ella.forward(116)
   =====
   ella.left(150)
   ella.forward(116) #paired
   =====
   ella.left(150)
   =====
   ella.forward(100)
   =====
   ella.Forward(100) #paired

   
The following example has 4 errors.  Can you fix the errors so that the code runs correctly to print a capital L?
    
.. activecode:: Turtle_Error1
    :nocodelens:
	
    from turtle import *    # use the turtle library
    space = screen()        # create a turtle space
    alisha = Turtle         # create a turtle named alisha
    alisha.right(90)        # turn alisha south
    alisha.forward          # move forward by 150 units
    alisha.left(90)         # turn to face east
    alisha.Forward(75)      # move forward by 75 units 
    
The following example has 4 errors.  Can you fix the errors so that the code runs correctly to print a capital C?
    
.. activecode:: Turtle_Error2
    :nocodelens:
	
    from turtle Import *    # use the turtle library
    space = Screen()        # create a turtle space
    alex = Turtle           # create a turtle named alex
    alex.left(180)          # turn alex by 180 degrees
    alex.forward(75)        # move forward by 75 units
    alex.turn(90)           # turn left 90 degrees
    alex.forward(100)       # more forward by 100 units
    alex.left(90)           # turn left 90 degrees
    alex.forward            # move forward by 75 units
    
.. note::
   Case matters in Python so ``screen`` is not the same as ``Screen``. Also the open and close parentheses are required after every function and procedure call, even if it doesn't take any input.  
    
Use the area below to try to draw a letter or number.  Use block style rather than curves. 

.. activecode:: Turtle_Letter
    :nocodelens:
    
.. note::

    Discuss topics in this section with classmates. 

      .. disqus::
          :shortname: cslearn4u
          :identifier: studentcsp_5_2_1
    
