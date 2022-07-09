Multiple Choice Questions
--------------------------

.. mchoice:: Exercises_question10_1_v2
   :practice: T
   :answer_a: 1234
   :answer_b: 2341
   :answer_c: 3142
   :answer_d: 2314
   :correct: d
   :feedback_a: You must first import the turtle module.
   :feedback_b: You must create a turtle object before you ask it to do things using dot notation.
   :feedback_c: You must first import the turtle module.
   :feedback_d: Correct! The turtle module needs to be imported and then a screen needs to be created before creating a turtle object.

   What order do these four statements need to appear in to not give any errors?

   .. code-block:: python

      Statement 1 : alex = Turtle()
      Statement 2 : from turtle import *
      Statement 3 : space = Screen()
      Statement 4 : alex.forward(50)

.. mchoice:: Exercises_question10_2
   :practice: T
   :answer_a: L
   :answer_b: A
   :answer_c: T
   :answer_d: H
   :correct: c
   :feedback_a: Incorrect! Follow every step and try to recreate the shape. Try again.
   :feedback_b: Incorrect! Follow every step and try to recreate the shape. Try again.
   :feedback_c: Correct! The code would create an T shape.
   :feedback_d: Incorrect! Follow every step and try to recreate the shape. Try again.

   What letter will this code draw?

   .. code-block:: python

      from turtle import *
      space = Screen()
      alex = Turtle()
      alex.forward(100)
      alex.left(180)
      alex.forward(50)
      alex.left(90)
      alex.forward(150)


.. mchoice:: Exercises_question10_3
   :practice: T
   :answer_a: East
   :answer_b: South
   :answer_c: West
   :answer_d: North
   :correct: d
   :feedback_a: Incorrect! Remember where the turtle initially faces when it is created. Try again.
   :feedback_b: Incorrect! Remember where the turtle initially faces when it is created. Try again
   :feedback_c: Incorrect! Remember where the turtle initially faces when it is created. Try again.
   :feedback_d: Correct! The turtle always start from facing east by default.

   Which way does a turtle (object of the Turtle class) face after this code executes?

   .. code-block:: python

      from turtle import *
      space = Screen()
      alex = Turtle()
      alex.forward(150)
      alex.left(180)
      alex.forward(75)
      alex.right(45)
      alex.left(315)
      alex.forward(50)

.. mchoice:: Exercises_question10_4
   :practice: T
   :answer_a: 4 errors
   :answer_b: 7 errors
   :answer_c: 6 errors
   :answer_d: 5 errors
   :correct: b
   :feedback_a: Incorrect! Hint: Remember the correct syntax for creating turtles. Try again.
   :feedback_b: Correct! Every row in the code has atleast one problem.
   :feedback_c: Incorrect! Hint: Remember the correct syntax for creating turtles. Try again.
   :feedback_d: Incorrect! Hint: Remember the correct syntax for creating turtles. Try again.

   How many errors are present in the following code?

   .. code-block:: python

      from Turtle Import *
      space = Screen
      alex = turtle()
      alexes.Forward('150')

.. mchoice:: Exercises_question10_5
   :practice: T
   :answer_a: 2 lines
   :answer_b: 3 lines
   :answer_c: 4 lines
   :answer_d: 5 lines
   :correct: b
   :feedback_a: Incorrect! Hint: What do penup() and pendown() do? Try again.
   :feedback_b: Correct! Remember, that due to penup() some lines won't be printed.
   :feedback_c: Incorrect! Hint: What do penup() and pendown() do? Try again.
   :feedback_d: Incorrect! Hint: What do penup() and pendown() do? Try again.

   Based on the given code, how many lines will be drawn on the screen?

   .. code-block:: python

      from turtle import *
      space = Screen()
      alex = Turtle()
      alex.forward(30)
      alex.left(90)
      alex.penup()
      alex.forward(50)
      alex.left(90)
      alex.pendown()
      alex.forward(20)
      alex.right(90)
      alex.penup()
      alex.forward(50)
      alex.left(180)
      alex.forward(10)
      alex.right(30)
      alex.pendown()
      alex.right(90)
      alex.forward(30)

.. mchoice:: Exercises_question10_6
   :practice: T
   :answer_a: alex : 5, "Red", james : 4, "Green"
   :answer_b: alex : 10, "Blue", james : 10, "Red"
   :answer_c: alex : 2, "Green", james : 10, "Blue"
   :answer_d: alex : 10, "Red", james : 2, "Green"
   :correct: d
   :feedback_a: Incorrect! Follow every step and try to recreate the shape. Try again.
   :feedback_b: Incorrect! Follow every step and try to recreate the shape. Try again.
   :feedback_c: Incorrect! Follow every step and try to recreate the shape. Try again.
   :feedback_d: Correct! The given code would have the turtle with these values at the end of the code.

   What would be the final pensize and pencolor after this code executes for both the turtles?

   .. code-block:: python

      from turtle import *
      space = Screen()
      alex = Turtle()
      james = Turtle()
      alex.forward(30)
      alex.left(90)
      alex.color("blue")
      alex.pensize(10)
      alex.forward(50)
      alex.left(90)
      alex.color("red")
      alex.forward(20)
      alex.right(90)
      james.pensize(5)
      james.forward(50)
      james.left(180)
      james.forward(10)
      james.right(30)
      james.pensize(2)
      james.right(90)
      james.color("green")
      james.forward(50)

.. mchoice:: Exercises_question10_7
   :practice: T
   :answer_a: (30, 10)
   :answer_b: (10, 30)
   :answer_c: (30, 30)
   :answer_d: (50, 30)
   :correct: b
   :feedback_a: Incorrect! Follow every step and try to recreate the shape. Also see what goto() does. Try again.
   :feedback_b: Correct! The turtle is facing west at (30,30) when it goes forward 20 which decreases x to 10.
   :feedback_c: Incorrect! Follow every step and try to recreate the shape. Also see what goto() does. Try again.
   :feedback_d: Incorrect! Follow every step and try to recreate the shape. Also see what goto() does. Try again.

   What are the final coordinates of the turtle at the end of this code?

   .. code-block:: python

      from turtle import *
      space = Screen()
      alex = Turtle()
      alex.forward(30)
      alex.left(90)
      alex.goto(120, 50)
      alex.forward(50)
      alex.left(90)
      alex.goto(30, 30)
      alex.forward(20)
      alex.right(90)

.. mchoice:: Exercises_question10_8
   :practice: T
   :answer_a: The outline of a square in blue
   :answer_b: The outline of a rectangle in blue
   :answer_c: A blue square
   :answer_d: A blue rectangle
   :correct: d
   :feedback_a: Incorrect! Think what the .begin_fill() method does. Try again.
   :feedback_b: Incorrect! Think what the .begin_fill() method does. Try again.
   :feedback_c: Incorrect! Look at the height and width parameters of the function. Try again.
   :feedback_d: It will draw a filled blue rectangle.

   What shape would the following code draw?

   .. code-block:: python

      from turtle import *

      def draw_shape(turtle, xpos, ypos, width, height, color, size):
          turtle.penup()
          turtle.goto(xpos, ypos)
          turtle.pendown()
          turtle.color(color)
          turtle.pensize(size)
          turtle.begin_fill()
          for x in range(2):
              turtle.forward(width)
              turtle.right(90)
              turtle.forward(height)
              turtle.right(90)
          turtle.end_fill()

      space = Screen()
      alex = Turtle()
      draw_shape(alex, 10, 20, 50, 20, 'blue', 5)


.. mchoice:: Exercises_question10_9
   :practice: T
   :answer_a: draw_rectangle(alex, 80, 50, -100, 80, 'green', 7)
   :answer_b: draw_rectangle(alex, -100, 80, 80, 50, 'green', 7)
   :answer_c: draw_rectangle(alex, -100, 80, 80, 50, green, 7)
   :answer_d: draw_rectangle(alex, 80, 100, 80, 50, 'green', 7)
   :correct: b
   :feedback_a: Incorrect! The parameters are assigned in order. Try again.
   :feedback_b: This assigns the parameters correctly.
   :feedback_c: Incorrect! The color must be a string.
   :feedback_d: Incorrect! The xpos is before the ypos.

   Given the function below. What parameters would you use to create a green rectangle of pen size 7 with a width 80 and height 50 at location (-100, 80)?

   .. code-block:: python

      from turtle import *

      def draw_rectangle(turtle, xpos, ypos, width, height, color, size):
          turtle.penup()
          turtle.goto(xpos, ypos)
          turtle.pendown()
          turtle.color(color)
          turtle.pensize(size)
          turtle.begin_fill()
          for x in range(2):
              turtle.forward(width)
              turtle.right(90)
              turtle.forward(height)
              turtle.right(90)
          turtle.end_fill()

      space = Screen()
      alex = Turtle()


.. mchoice:: Exercises_question10_10
   :practice: T
   :answer_a: Tree
   :answer_b: Hourglass
   :answer_c: Diamond
   :answer_d: Rectangle
   :correct: b
   :feedback_a: Incorrect! Think of what the heading would be for each triangle. Try again.
   :feedback_b: Correct! This is the correct shape that will be printed from this code.
   :feedback_c: Incorrect! Think of what the heading would be for each triangle. Try again.
   :feedback_d: Incorrect! Try to draw it yourself.

   What is drawn when the following code runs?

   .. code-block:: python

      from turtle import *
      def draw_triangle(turtle, xpos, ypos, width, color, heading):
          turtle.penup()
          turtle.goto(xpos, ypos)
          turtle.setheading(heading)
          turtle.pendown()
          turtle.color(color)
          turtle.begin_fill()
          for side in range(3):
              turtle.forward(width)
              turtle.left(120)
          turtle.end_fill()

      space = Screen()
      alex = Turtle()
      draw_triangle(alex, -120, 30, 60, 'green', 60)
      draw_triangle(alex, -120, 30, 60, 'green', 240)




 
