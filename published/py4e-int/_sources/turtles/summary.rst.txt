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


Summary
============================

This chapter included the following concepts from computing.

..	index::
    single: body syntonic
    single: comment
    single: function
	single: object
	single: procedure
	single: string

- **Body Syntonic** - Body syntonic means experiences related to knowledge of your body.  You can use your knowledge of how to move your body to help you understand how to move the turtle objects.
- **Comment** - A comment describes one or more lines of code.  Comments are ignored by the computer.  A comment in Python starts with ``#``.  The computer will ignore everything from the start of the comment to the end of that line.
- **Object** - Turtles are objects in Python.  Objects can have data and behavior.  A turtle object knows its heading (data) and can go forward and turn (behavior).
- **Method** - Functions that are defined in the Turtle class are called methods.  Methods define the behaviors for the objects of a class (what they can do).

Summary of Turtle Methods
--------------------------------------------

The table below shows some of the turtle methods that you might find useful.  See https://docs.python.org/3/library/turtle.html for a complete list.

==========  ==========    =========================
Name        Input         Description
==========  ==========    =========================
backward    amount        Moves the turle backward by the specified amount
begin_fill  None          Starts a shape to fill
circle      radius        Draws a circle with the specified radius 
color       colorname     Sets the color for the pen.  Use 'red', 'black', etc. If you give it two colors the second is the fill color.
end_fill    None          Ends a shape to fill
fillcolor   colorname     Sets the fill color to the specified color.  Use 'red', 'black', etc.
forward     amount        Moves the turtle forward by the specified amount
goto        x,y           Moves the turtle to position x,y
left        angle         Turns the turtle counter clockwise by the specified angle
pendown     None          Puts down the turtles tail so that it draws when it moves
penup       None          Picks up the turtles tail so that it doesn't draw when it moves
pensize     width         Sets the width of the pen for drawing
right       angle         Turns the turtle clockwise by the specified angle
setheading  angle         Turns the turtle to face the given heading.  East is 0, north is 90, west is 180, and south is 270.
Turtle      None          Creates and returns a new turtle object
==========  ==========    =========================

Summary of Screen Methods
--------------------------------------------

The table below shows the screen methods that you might find useful.

============  ==============  =============================================================================================================
Name          Input           Description
============  ==============  =============================================================================================================
bgcolor       color           Sets the color for the screen background
bgpic         file_name       Save a picture of the screen to the file_name
exitonclick   none            Stops the program from exiting until you click the window - use if running turtle code outside of the ebook
============  ==============  =============================================================================================================
