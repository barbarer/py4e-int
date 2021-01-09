..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. setup for automatic question numbering.

.. 	qnum::
	:start: 1
	:prefix: csp-5-7-


Chapter 5 - Summary
============================

Chapter 5 included the following concepts from computing.

..	index::
    single: body syntonic
    single: comment
    single: function
	single: object
	single: procedure
	single: string

- **Body Syntonic** - Body syntonic means experiences related to knowledge of your body.  You can use your knowledge of how to move your body to help you understand how to move the turtle objects.  
- **Comment** - A comment describes one or more lines of code.  Comments are ignored by the computer.  A comment in Python starts with ``#``.  The computer will ignore everything from the start of the comment to the end of that line.
- **Function** - A function returns a value. An example of a function is ``Screen()`` which creates and returns a screen (drawing space) object.
- **Object** - Turtles are objects in Python.  Objects can have data and behavior.  A turtle object knows its heading (data) and can go forward and turn (behavior).
- **Procedure** - A procedure does an action, but doesn't return a value.  An example of a procedure is ``forward(100)`` which makes the turtle go forward by 100 pixels.

Summary of Turtle Functions and Procedures
--------------------------------------------

The table below shows the turtle functions and procedures that we have covered so far.

==========  ==========  =========================
Name        Input       Description
==========  ==========  =========================
backward    amount        Moves the turle backward by the specified amount
color       colorname     Sets the color for drawing.  Use 'red', 'black', etc
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

.. note::  

   This is the end of chapter 5.   We would love it if you could give us some feedback on this chapter at https://www.surveymonkey.com/r/ch5-student-fb.  You might want to open this link in a new tab to make it easier for you to return to your place in this ebook.