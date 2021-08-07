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

Creating Functions with Turtles
===============================

*Learning Objectives:*

- Create functions that take a turtle object and draw a shape
- Add parameters to make functions more reusable
- Use ``begin_fill`` and ``end_fill`` to fill a shape
- Use ``bgcolor`` on the screen to change the background color of the screen object.

..	index::
	pair: functions; turtle

Here is code that draws a square with a turtle using a ``for`` loop with ``range``.

.. activecode:: Turtle_square_orig_ac
    :tour_1: "Lines of code"; 1: tR1-line1; 2: tR1-line2; 3: tR1-line3; 4: tR1-line4; 5: tR1-line5; 6: tR1-line6; 7: tR1-line7;
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *     # use the turtle library
    space = Screen()         # create a turtle space
    alisha = Turtle()        # create a turtle named alisha
    alisha.setheading(90)    # point due north
    for sides in range(4):   # repeat the indented lines 4 times
    	alisha.forward(100)    # move forward by 100 units
      	alisha.right(90)     # turn by 90 degrees


We can create a function out of the code that draws the square.

- Keep the import at the top of the code
- Move the code that draws the square after the import
- Add a function definition and pass in a turtle object.  You can call it anything, but ``turtle`` is a good name for an object of the  ``Turtle`` class.
- Modify the code in the function to  use the local name (``turtle``).
- Add a call to the function after you create the ``turtle`` and pass in the ``turtle`` object. Use whatever name you gave the turtle when you created it.

When we execute ``square(alisha)`` the local variable ``turtle`` is set to
the same object as ``alisha``.  Notice that we still need to import the library, create the screen object,
create the turtle object, and call the function.

.. activecode:: Turtle_square_function_ac
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *     # use the turtle library

    def square(turtle):
        turtle.setheading(0)     # set the heading to east
        for sides in range(4):   # repeat the indented lines 4 times
            turtle.forward(100)    # move forward by 100 units
            turtle.right(90)       # turn by 90 degrees

    space = Screen()         # create a turtle space
    alisha = Turtle()        # create a turtle named alisha
    square(alisha)           # call the square function

We can change the ``square`` function to take a ``length`` to make it more reusable.  We can
change the ``length`` when we call the function to draw different squares. We can even set a default value for length in case a value isn't specified for it.

.. activecode:: Turtle_square_function_with_length
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *     # use the turtle library

    def square(turtle, length = 100):
        turtle.setheading(0)    # set the heading to east
        for sides in range(4):   # repeat the indented lines 4 times
            turtle.forward(length)    # move forward by 100 units
            turtle.right(90)          # turn by 90 degrees

    space = Screen()         # create a turtle space
    alisha = Turtle()        # create a turtle named alisha
    square(alisha, 20)       # call the square function
    alisha.penup()           # pick up the pen
    alisha.goto(40,0)        # move to (40, 0)
    alisha.pendown()         # put down the pen
    square(alisha,40)        # draw another square
    alisha.penup()           # pick up the pen
    alisha.goto(-100,0)      # move to (-100, 0)
    alisha.pendown()         # put down the pen
    square(alisha)           # draw another square


Let's practice creating reusable functions from code that draws a shape with a ``turtle`` object.

.. activecode:: Turtle_triangle_orig_ac
    :nocodelens:

    Run the code first to see what it draws and then modify it to create a ``triangle`` function and pass in the ``length`` of each side. Then draw several triangles with the function.
    ~~~~
    from turtle import *     # use the turtle library
    space = Screen()         # create a turtle space
    alisha = Turtle()        # create a turtle named alisha
    alisha.setheading(60)    # set the heading
    for sides in range(3):   # repeat the indented lines 3 times
    	alisha.forward(100)    # move forward by 100 units
      	alisha.right(120)    # turn by 120 degrees


We can add even more parameters to set the fill color.  We can make the default fill color green. Use ``begin_fill()`` to start the shape you want to fill and ``end_fill()`` after the shape is finished.

.. activecode:: Turtle_square_function_with_color
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *       # use the turtle library

    def square(turtle, length = 100, color = 'green'):
        turtle.setheading(0)    # set the heading to east
        turtle.fillcolor(color)
        turtle.begin_fill()
        for sides in range(4):   # repeat the indented lines 4 times
            turtle.forward(length)    # move forward by length
            turtle.right(90)          # turn by 90 degrees
        turtle.end_fill()

    space = Screen()           # create a turtle space
    alisha = Turtle()          # create a turtle named alisha
    square(alisha, 20, 'red')  # call the square function
    alisha.penup()             # pick up the pen
    alisha.goto(40,0)          # move to (40, 0)
    alisha.pendown()           # put down the pen
    square(alisha,40)          # draw another square
    alisha.penup()             # pick up the pen
    alisha.goto(-100,0)        # move to (-100, 0)
    alisha.pendown()           # put down the pen
    square(alisha,100, 'blue') # draw another square

You can change the size of the screen object, set a background color for the screen, and set the code to not exit until you click the window.  You need to do this when you run turtle code outside of the ebook otherwise the program will run but exit before you can even see the result.

.. activecode:: Turtle_square_function_with_screen_methods
    :nocodelens:

    Run the code to see what it draws.
    ~~~~
    from turtle import *       # use the turtle library

    def square(turtle, length = 100, color = 'green'):
        turtle.setheading(0)    # set the heading to east
        turtle.fillcolor(color)
        turtle.begin_fill()
        for sides in range(4):   # repeat the indented lines 4 times
            turtle.forward(length)    # move forward by length
            turtle.right(90)          # turn by 90 degrees
        turtle.end_fill()

    space = Screen(200,200)    # create a larger turtle space
    space.bgcolor('yellow')    # set the background color
    #space.exitonclick()        # use outside of the ebook
    alisha = Turtle()          # create a turtle named alisha
    square(alisha, 20, 'red')  # call the square function
    alisha.penup()             # pick up the pen
    alisha.goto(40,0)          # move to (40, 0)
    alisha.pendown()           # put down the pen
    square(alisha,40)          # draw another square
    alisha.penup()             # pick up the pen
    alisha.goto(-100,0)        # move to (-100, 0)
    alisha.pendown()           # put down the pen
    square(alisha,100, 'blue') # draw another square


.. activecode:: Turtle_draw_house
    :nocodelens:

    Add a function to draw an equilateral triangle and then write a function
    to draw a simple house by calling the functions to draw a triangle and a square.
    ~~~~
    from turtle import *       # use the turtle library

    def square(turtle, length = 100, color = 'green'):
        turtle.setheading(0)    # set the heading to east
        turtle.fillcolor(color)
        turtle.begin_fill()
        for sides in range(4):   # repeat the indented lines 4 times
            turtle.forward(length)    # move forward by length
            turtle.right(90)          # turn by 90 degrees
        turtle.end_fill()

    space = Screen()         # create a turtle space
    t1 = Turtle()            # create a turtle named t1
