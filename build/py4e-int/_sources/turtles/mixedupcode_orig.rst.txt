Mixed-Up Code Questions
------------------------

.. parsonsprob:: mixedupcode_turtles_1
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``forward_50`` that takes in ``turtle`` as a parameter and moves the turtle forward 50.
    After creating the function, create a Screen object and a Turtle object and call ``forward_50``.
    -----
    from turtle import *
    =====
    from math import * #paired
    =====
    def forward_50(turtle):
    =====
        turtle.forward(50)
    =====
        Lilly.forward(50) #paired
    =====
    space = Screen()
    =====
    space = screen() #paired
    =====
    space = space() #paired
    =====
    Lilly = Turtle()
    =====
    Lilly = turtle() #paired
    =====
    forward_50(Lilly)

.. activecode::  mixedupcode_turtles_1_ac

    Write a function called ``forward_50`` that takes in ``turtle`` as a parameter and moves the turtle forward 50.
    After creating the function, create a Screen object and a Turtle object and call ``forward_50``.
    ~~~~


.. parsonsprob:: mixedupcode_turtles_2
    :numbered: left
    :adaptive:

    Create a function called ``create_T`` that takes in ``turtle`` as a parameter and moves the turtle to create the letter T. 
    The width of the letter should be 100, and the height of the letter should be 150. After creating the function, create a Screen object and a Turtle object and call ``create_T``.
    -----
    from turtle import *
    =====
    def create_T(turtle):
    =====
        turtle.forward(100)
    =====
        turtle.forward(150) #paired
    =====
        turtle.left(180)
    =====
        turtle.forward(50)
    =====
        turtle.left(90)
    =====
        turtle.forward(150)
    =====
        turtle.left(145) #paired
    =====
        turtle.forward(100) #paired
    =====
    space = Screen()
    =====
    alex = Turtle()
    =====
    create_T(alex)

.. activecode::  mixedupcode_turtles_2_ac

    Write a function called ``create_T`` that takes in ``turtle`` as a parameter and moves the turtle to create the letter T. 
    The width of the letter should be 100, and the height of the letter should be 150. After creating the function, create a Screen object and a Turtle object and call ``create_T``.
    ~~~~


.. parsonsprob:: mixedupcode_turtles_3
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``create_rectangle`` that takes in ``turtle`` as a parameter and creates a rectangle of width 40 and height 90.
    After creating the function, create a Screen object and a Turtle object and call ``create_rectangle``.
    -----
    from turtle import *
    =====
    def create_rectangle(turtle):
    =====
        for i in range(2):
    =====
        for i in turtle.range(2): #paired
    =====
            turtle.forward(40)
    =====
            turtle.left(90)
    =====
            turtle.forward(90)
    =====
            turtle.left(90)
    =====
    space = Screen()
    =====
    alex = Turtle()
    =====
    alex = turtle() #paired
    =====
    create_rectangle(alex)

.. activecode::  mixedupcode_turtles_3_ac

    Write a function called ``create_rectangle`` that takes in ``turtle`` as a parameter and creates a rectangle of width 40 and height 90.
    After creating the function, create a Screen object and a Turtle object and call ``create_rectangle``.
    ~~~~


.. parsonsprob:: mixedupcode_turtles_4
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``forward`` that takes in parameters ``x``, ``y``, ``amount``, and ``turtle``. 
    The ``turtle`` should draw a line of length ``amount`` at location ``x``, ``y``. 
    After creating the function, create a Screen object and a Turtle object and call ``forward`` with arguments ``x = 80``, ``y = 100``, ``amount = 50``, and the Turtle object.
    -----
    from turtle import *
    =====
    def forward(x, y, amount, turtle):
    =====
        turtle.penup()
    =====
        turtle.pen(up) #paired
    =====
        turtle.goto(x, y)
    =====
        turtle.go_to(x, y) #paired
    =====
        turtle.moveto(x, y) #paired
    =====
        turtle.move_to(x, y) #paired
    =====
        turtle.pendown()
    =====
        turtle.pen(down) #paired
    =====
        turtle.forward(amount)
    =====
    space = Screen()
    =====
    alex = Turtle()
    =====
    forward(80, 100, 50, alex)

.. activecode::  mixedupcode_turtles_4_ac

    Write a function called ``forward`` that takes in parameters ``x``, ``y``, ``amount``, and ``turtle``. 
    The ``turtle`` should draw a line of length ``amount`` at location ``x``, ``y``. 
    After creating the function, create a Screen object and a Turtle object and call ``forward`` with arguments ``x = 80``, ``y = 100``, ``amount = 50``, and the Turtle object.
    ~~~~


.. parsonsprob:: mixedupcode_turtles_5
    :numbered: left
    :adaptive:
    :practice: T

    Create a function called ``create_V`` that takes in ``turtle`` as a parameter and moves the ``turtle`` to create the letter V. 
    First, create the right side of the V. Then, create the left side of the V. Each side of the V should be of length 100. 
    After creating the function, create a Screen object and a Turtle object and call ``create_V``.
    -----
    from turtle import *
    =====
    def create_V(turtle):
    =====
        turtle.left(60)
    =====
        turtle.forward(100)
    =====
        turtle.goto(0,0)
    =====
        turtle.backwards(100) #paired
    =====
        turtle.left(60)
    =====
        turtle.right(60) #paired
    =====
        turtle.forward(100)
    =====
    space = Screen()
    =====
    alex = Turtle()
    =====
    create_V(alex)

.. activecode::  mixedupcode_turtles_5_ac

    Write a function called ``create_V`` that takes in ``turtle`` as a parameter and moves the ``turtle`` to create the letter V. 
    First, create the right side of the V. Then, create the left side of the V. Each side of the V should be of length 100. 
    After creating the function, create a Screen object and a Turtle object and call ``create_V``.
    ~~~~


.. parsonsprob:: mixedupcode_turtles_6
    :numbered: left
    :adaptive:
    :practice: T

    Create a function called ``create_hexagon`` that takes in ``turtle`` as a parameter and moves the ``turtle`` to create a hexagon. 
    Each side of the hexagon should be of length 50. After creating the function, create a Screen object and a Turtle object and call ``create_hexagon``.
    -----
    from turtle import *
    =====
    def create_hexagon(turtle):
    =====
        for i in range(6):
    =====
        for i in len(6): #paired
    =====
            turtle.forward(50)
    =====
            turtle.left(60)
    =====
            turtle.left(80) #paired
    =====
    space = Screen()
    =====
    alex = Turtle()
    =====
    create_hexagon(alex)

.. activecode::  mixedupcode_turtles_6_ac

    Write a function called ``create_hexagon`` that takes in ``turtle`` as a parameter and moves the ``turtle`` to create a hexagon. 
    Each side of the hexagon should be of length 50. After creating the function, create a Screen object and a Turtle object and call ``create_hexagon``.
    ~~~~


.. parsonsprob:: mixedupcode_turtles_7
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``draw_rectangle`` that takes in parameters ``turtle``, ``width``, ``height``, and ``size`` and moves the ``turtle`` 
    to create a rectangle of width ``width`` and height ``height`` with a pen size of ``size``. After creating the function, create a Screen object and 
    a Turtle object and call ``draw_rectangle`` with arguments ``width = 50``, ``height = 80``, ``size = 10``, and the Turtle object.
    -----
    from turtle import *
    =====
    def draw_rectangle(turtle, width, height, size):
    =====
    def draw_rectangle(turtle, 50, 80, 10): #paired
    =====
        turtle.pensize(size)
    =====
        turtle.pen_size(size) #paired
    =====
        turtle.size(size) #paired
    =====
        for i in range(2):
    =====
            turtle.forward(width)
    =====
            turtle.right(90)
    =====
            turtle.forward(height)
    =====
            turtle.right(90)
    =====
    space = Screen()
    =====
    alex = Turtle()
    =====
    draw_rectangle(alex, 50, 80, 10)

.. activecode::  mixedupcode_turtles_7_ac

    Write a function called ``draw_rectangle`` that takes in parameters ``turtle``, ``width``, ``height``, and ``size`` and moves the ``turtle`` 
    to create a rectangle of width ``width`` and height ``height`` with a pen size of ``size``. After creating the function, create a Screen object and 
    a Turtle object and call ``draw_rectangle`` with arguments ``width = 50``, ``height = 80``, ``size = 10``, and the Turtle object.
    ~~~~


.. parsonsprob:: mixedupcode_turtles_8
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``draw_triangle`` that takes in parameters ``turtle``, ``length``, and ``three_colors_list`` and moves the ``turtle`` 
    to create a triangle with side lengths of ``length`` and in which the pen color changes for each side. After creating the function, create a Screen object and 
    a Turtle object and call ``draw_triangle`` with arguments ``length = 50``, ``three_colors_list = ["blue", "green", "yellow"]``, and the Turtle object.
    -----
    from turtle import *
    =====
    def draw_triangle(turtle, length, three_colors_list):
    =====
        for color in three_colors_list:
    =====
        for i in range(3): #paired
    =====
            turtle.color(color)
    =====
            turtle.side(color) #paired
    =====
            turtle.forward(length)
    =====
            turtle.right(120)
    =====
    space = Screen()
    =====
    alex = Turtle()
    =====
    draw_triangle(alex, 50, ["blue", "green", "yellow"])

.. activecode::  mixedupcode_turtles_8_ac

    Write a function called ``draw_triangle`` that takes in parameters ``turtle``, ``length``, and ``three_colors_list`` and moves the ``turtle`` 
    to create a triangle with side lengths of ``length`` and in which the pen color changes for each side. After creating the function, create a Screen object and 
    a Turtle object and call ``draw_triangle`` with arguments ``length = 50``, ``three_colors_list = ["blue", "green", "yellow"]``, and the Turtle object.
    ~~~~


.. parsonsprob:: mixedupcode_turtles_9
    :numbered: left
    :adaptive:
    :practice: T

    Create a function called ``draw_triangle`` that takes in parameters ``turtle``, ``xpos``, ``ypos``, ``length``, ``color``, and ``heading`` and moves the ``turtle`` 
    to location ``xpos``, ``ypos``, sets the ``heading``, changes the ``color`` of the pen, creates the triangle with side lengths of ``length``, and colors the entire triangle. 
    After creating the function, create a Screen object and a Turtle object and call ``draw_triangle`` with arguments 
    ``xpos = -120``, ``ypos = 30``, ``length = 60``, ``color = 'green'``, ``heading = 60``, and the Turtle object. Then, call ``draw_triangle`` again 
    with all of the same arguments with the exception of ``heading = 240``. In the end, an hourglass should be created. 
    -----
    from turtle import *
    =====
    def draw_triangle(turtle, xpos, ypos, length, color, heading):
    =====
        turtle.penup()
        turtle.goto(xpos, ypos)
        turtle.setheading(heading)
    =====
        turtle.pendown()
        turtle.color(color)
        turtle.begin_fill()
    =====
        for side in range(3):
    =====
        for side in len(3): #paired
    =====
            turtle.forward(length)
            turtle.left(120)
    =====
        turtle.end_fill()
    =====
        turtle.endfill() #paired
    =====
    space = Screen()
    alex = Turtle()
    =====
    draw_triangle(alex, -120,30,60, 'green', 60)
    draw_triangle(alex, -120,30,60, 'green', 240)

.. activecode::  mixedupcode_turtles_9_ac

    Write a function called ``draw_triangle`` that takes in parameters ``turtle``, ``xpos``, ``ypos``, ``length``, ``color``, and ``heading`` and moves the ``turtle`` 
    to location ``xpos``, ``ypos``, sets the ``heading``, changes the ``color`` of the pen, creates the triangle with side lengths of ``length``, and colors the entire triangle. 
    After creating the function, create a Screen object and a Turtle object and call ``draw_triangle`` with arguments 
    ``xpos = -120``, ``ypos = 30``, ``length = 60``, ``color = 'green'``, ``heading = 60``, and the Turtle object. Then, call ``draw_triangle`` again 
    with all of the same arguments with the exception of ``heading = 240``. In the end, an hourglass should be created. 
    ~~~~


.. parsonsprob:: mixedupcode_turtles_10
    :numbered: left
    :practice: T
    :adaptive:

    Create a function called ``draw_diamond`` that takes in parameters ``turtle``, ``xpos``, ``ypos``, ``length``, and ``color`` and creates a diamond 
    at any given position with color ``color`` and side lengths of ``length``. After creating the function, create a Screen object and a Turtle object and 
    call ``draw_diamond`` with arguments ``xpos = -120``, ``ypos = 30``, ``length = 60``, ``color = 'green'``, and the Turtle object. 
    -----
    from turtle import *
    def draw_diamond(turtle, xpos, ypos, length, color):
    =====
        turtle.penup()
        turtle.goto(xpos, ypos)
    =====
        turtle.left(45)
    =====
        turtle.left(90) #paired
    =====
        turtle.pendown()
    =====
        turtle.color(color)
    =====
        turtle.side(color) #paired
    =====
        turtle.begin_fill()
    =====
        turtle.beginfill() #paired
    =====
        for i in range(4):
            turtle.forward(length)
            turtle.left(90)
    =====
        turtle.end_fill()
    =====
        turtle.endfill() #paired
    =====
    space = Screen()
    alex = Turtle()
    draw_diamond(alex, -120,30,60, 'green')

.. activecode::  mixedupcode_turtles_10_ac

    Write a function called ``draw_diamond`` that takes in parameters ``turtle``, ``xpos``, ``ypos``, ``length``, and ``color`` and creates a diamond 
    at any given position with color ``color`` and side lengths of ``length``. After creating the function, create a Screen object and a Turtle object and 
    call ``draw_diamond`` with arguments ``xpos = -120``, ``ypos = 30``, ``length = 60``, ``color = 'green'``, and the Turtle object. 
    ~~~~


