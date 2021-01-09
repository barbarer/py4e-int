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
	:prefix: csp-5-6-
	
.. highlight:: java
   :linenothreshold: 4

Changing Turtle Programs
==============================

Run the following program.  

.. activecode:: Turtle_Names4
    :tour_1: "Line-by-line Tour"; 1: first-turtle-line-1; 2: first-turtle-line-2; 3: first-turtle-line-3; 4: first-turtle-line-4; 5: first-turtle-line-5; 6: first-turtle-line-6;
    :nocodelens:
	
    from turtle import * 	# use the turtle library
    space = Screen()    	# create a turtle screen (space)
    alex = Turtle()      	# create a turtle named alex
    alex.forward(150)     	# tell alex to move forward by 150 units
    alex.left(90)       	# turn by 90 degrees
    alex.forward(75)      	# tell alex to move forward by 75 units

.. mchoice:: 5_6_1_Turtle_Names4_Q1
   :answer_a: Change the 150 to 90
   :answer_b: Change the 75 to 90
   :answer_c: Change the 75 to 150
   :correct: c
   :feedback_a: The turtle moves forward 150 units and turns 90 degrees.
   :feedback_b: The turtle moves forward 75 units and turns 90 degrees.
   :feedback_c: Then both sides would be 150 units long.

   If you wanted to make both of the turtle lines in that last program the same length, what change would you make to the program?  (Feel free to actually make the change in the program and click *Run* to try it!)


**Slightly Harder Problem:** Now, let's connect the end point to the starting point.  The shape we'll create is a right triangle (a triangle that has a 90 degree interior angle).  The number 57 isn't guesswork -- it is roughly the square root of 40^2 + 40^2.  However, there is an error in this program and it won't work as intended.  **Can you fix it?**  

.. activecode:: Turtle_Names5
    :nocodelens:
	
    from turtle import * 	# use the turtle library
    space = Screen()     	# create a turtle screen (space)
    alex = Turtle()      	# create a turtle named alex
    alex.forward(40)     	# tell alex to move forward by 150 units
    alex.left(90)       	# turn by 90 degrees
    alex.forward(40)     	# complete the second leg of a triangle
    alex.left(0)         	# ZERO won't actually work
    alex.forward(57)      	# Close the triangle


.. mchoice:: 5_6_2_Turtle_Names5_Q1
   :answer_a: alex.left(45)
   :answer_b: alex.left(90)
   :answer_c: alex.left(135)
   :correct: c
   :feedback_a: The turtle turns the exterior angle, not the interior angle.
   :feedback_b: That would make another right angle. Which would be more like a square shape.
   :feedback_c: The interior angles of a triangle need to add up to 180.  So far we have one angle of 90 so the other two must be equal and must total 90.  They both have to be 45, but we tell the turtle to turn the exterior angle so 180 - 45 = 135.

   The code ``alex.left(0)`` will not turn the turtle toward the starting point.  Which of these will?
   
.. note::

    Discuss topics in this section with classmates. 

      .. disqus::
          :shortname: cslearn4u
          :identifier: studentcsp_5_6
