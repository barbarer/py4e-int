Mixed-Up Code Questions
------------------------

.. parsonsprob:: mixed_up_code_turtles_question10_1
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that creates a turtle object successfully and asks it to move 50 steps in forward direction. Note: there are two blocks that won't be used in the solution!
   -----
   from turtle import *
   =====
   from math import * #distractor
   =====
   space = Screen()
   =====
   James = Turtle()
   =====
   James.forward(50)
   =====
   James.turtle(forward(50)) #paired

.. parsonsprob:: mixed_up_code_turtles_question10_2
   :numbered: left
   :adaptive:

   Reorder the blocks of code to create a turtle object that will print out the letter T. The width of the letter should be 100 and the height of the letter should be 150. Note: there are two blocks that won't be used in the solution!
   -----
   from turtle import *
   =====
   space = Screen()
   alex = Turtle()
   =====
   alex.forward(100)
   =====
   alex.left(180)
   =====
   alex.forward(50)
   alex.left(90)
   =====
   alex.forward(150)
   =====
   alex.left(145) #distractor
   =====
   alex.forward(250) #distractor


.. parsonsprob:: mixed_up_code_turtles_question10_3
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code that creates a rectangle of height 40 and width 90.
   -----
   from turtle import *
   space = Screen()
   =====
   alex = Turtle()
   =====
   alex = turtle() #paired
   =====
   for i in range(2):
   =====
   for i in turtle.range(2): #paired
   =====
    alex.forward(40)
    alex.left(90)
   =====
    alex.forward(90)
    alex.left(90)


.. parsonsprob:: mixed_up_code_turtles_question10_4
   :numbered: left
   :practice: T
   :adaptive:

   Reorder the blocks of code to construct a turtle line of length 50 at the location x = 80, y = 100. Use penup function of the turtle object to go to that location.
   -----
   from turtle import *
   space = Screen()
   =====
   alex = Turtle()
   =====
   alex.penup()
   =====
   alex.pen(up) #paired
   =====
   alex.goto(80, 100)
   =====
   alex.goto(100, 80) #paired
   =====
   alex.pendown()
   =====
   alex.forward(50)

.. parsonsprob:: mixed_up_code_turtles_question10_5
   :numbered: left
   :adaptive:
   :practice: T

   Reorder the blocks of code to create a V using a turtle object. First create the right side of the V and then create the left side. Note: there is one block that won't be used in the solution!
   -----
   from turtle import *
   space = Screen()
   =====
   alex = Turtle()
   =====
   alex.left(60)
   =====
   alex.forward(100)
   =====
   alex.goto(0,0)
   =====
   alex.backwards(100) #distractor
   =====
   alex.left(120)
   =====
   alex.left(300) #paired
   =====
   alex.forward(100)

.. parsonsprob:: mixed_up_code_turtles_question10_6
   :numbered: left
   :adaptive:
   :practice: T

   Construct a block of code to create a turtle object that draws a hexagon of width 50. Note: there are two blocks that won't be used in the solution!
   -----
   from turtle import *
   space = Screen()
   alex = Turtle()
   =====
   james = turtle() #distractor
   =====
   for x in range(6):
   =====
    alex.forward(50)
   =====
    alex.left(60)
   =====
    alex.left(80) #paired


.. parsonsprob:: mixed_up_code_turtles_question10_7
   :numbered: left
   :practice: T
   :adaptive:

   Reorder the code blocks to create a turtle function draw_rectangle that creates a rectangle of width 50 and height 80 with a pen size of 10. Note: there is one block that won't be used in the solution!
   -----
   def draw_rectangle(turtle, width, height, size):
   =====
   def draw_rectangle(turtle, 50, 80, 10): #paired
   =====
    turtle.pensize(size)
   =====
    turtle.size(size) #paired
   =====
    for x in range(2):
   =====
     turtle.forward(width)
     turtle.right(90)
   =====
     turtle.forward(height)
     turtle.right(90)
   =====
     turtle.forward(50) #distractor

.. parsonsprob:: mixed_up_code_turtles_question10_8
   :numbered: left
   :practice: T
   :adaptive:

   Reorder the code blocks to create a turtle function draw_triangle that creates a triangle of length 50 and in which the pen color changes for each side.
   -----
   from turtle import *
   =====
   def draw_triangle(turtle, length):
   =====
    colors = ["blue", "green", "yellow"]
    for side in colors:
   =====
     turtle.color(side)
   =====
     turtle.forward(length)
   =====
     turtle.right(120)


.. parsonsprob:: mixed_up_code_turtles_question10_9
   :numbered: left
   :adaptive:
   :practice: T

   Construct an hourglass from a turtle object by reordering the blocks provided. Note: there are two blocks that won't be used in the solution!
   -----
   from turtle import *
   =====
   def draw_triangle(turtle, xpos, ypos, width, color, heading):
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
      turtle.forward(width)
      turtle.left(120)
   =====
    turtle.end_fill()
   =====
   space = Screen()
   alex = Turtle()
   =====
   james = Turtle #distractor
   =====
   draw_triangle(alex, -120,30,60, 'green', 60)
   draw_triangle(alex, -120,30,60, 'green', 240)

.. parsonsprob:: mixed_up_code_turtles_question10_10
   :numbered: left
   :practice: T
   :adaptive:

   Construct a block of code to create a function that produces turtle drawing of a diamond at any given position. Fill the diamond with green color. Note: there are two blocks that won't be used in the solution!
   -----
   def draw_diamond(turtle, xpos, ypos, width, color):
   =====
    turtle.penup()
    turtle.goto(xpos, ypos)
   =====
    turtle.pendown()
    turtle.goto(xpos, ypos) #paired
   =====
    turtle.setheading(0)
    turtle.pendown()
    turtle.left(45)
   =====
    turtle.color(color)
    turtle.begin_fill()
   =====
    for i in range(4):
   =====
      turtle.forward(200) #distractor
   =====
      turtle.forward(width)
      turtle.left(90)
   =====
    turtle.end_fill()
