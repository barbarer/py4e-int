Multiple Choice Questions
--------------------------

.. mchoice:: Exercises_question10_1
   :practice: T
   :answer_a: 1234
   :answer_b: 2341
   :answer_c: 3142
   :answer_d: 2314
   :correct: d
   :feedback_a: Incorrect! Remember what are necessary things required before creating a turtle object. Try again.
   :feedback_b: Incorrect! Remember what are necessary things required before creating a turtle object. Try again.
   :feedback_c: Incorrect! Remember what are necessary things required before creating a turtle object. Try again
   :feedback_d: Correct! A turtle objects needs to be first imported and then a screen needs to be created before initializing a turtle.

   What order do these four statements need to appear in to not give nay errors

   .. code-block:: python

      Statement 1 : alex = Turtle()
      Statement 2 : from turtle import *
      Statement 3 : space = Screen()
      Statement 4 : Alex.forward(50)

.. mchoice:: Exercises_question10_2
   :practice: T
   :answer_a: L
   :answer_b: A
   :answer_c: I
   :answer_d: H
   :correct: c
   :feedback_a: Incorrect! Follow every step and try to recreate the shape. Try again.
   :feedback_b: Incorrect! Follow every step and try to recreate the shape. Try again.
   :feedback_c: Correct! The given code would create an I shape.
   :feedback_d: Incorrect! Follow every step and try to recreate the shape. Try again.

   What letter will this code make?

   .. code-block:: python

      from turtle import *
      space = Screen()
      alex = Turtle()
      alex.forward(100)
      alex.left(180)
      alex.forward(50)
      alex.left(90)
      alex.forward(150)
      alex.right(90)
      alex.forward(50)
      alex.left(180)
      alex.forward(100)


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
   :feedback_d: Correct! The turtle always start from facing the East side by default.

   Which way does a turtle (object of the Turtle class) face at the end of this code?

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
   :feedback_a: Incorrect! Hint: What does penup() and pendown() do? Try again.
   :feedback_b: Correct! Remember, that due to penup() some lines won't be printed.
   :feedback_c: Incorrect! Hint: What does penup() and pendown() do? Try again.
   :feedback_d: Incorrect! Hint: What does penup() and pendown() do? Try again.

   Based on the given code, how many lines will be printed on the screen?

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
   :answer_a: 4, "Green"
   :answer_b: 2, "Red"
   :answer_c: 10, "Blue"
   :answer_d: 2, "Green"
   :correct: d
   :feedback_a: Incorrect! Follow every step and try to recreate the shape. Try again.
   :feedback_b: Incorrect! Follow every step and try to recreate the shape. Try again.
   :feedback_c: Incorrect! Follow every step and try to recreate the shape. Try again.
   :feedback_d: Correct! The given code would have the turtle with these values at the end of the code.

   What would be the final pensize and pencolor at the end of this code?

   .. code-block:: python

      from turtle import *
      space = Screen()
      alex = Turtle()
      alex.forward(30)
      alex.left(90)
      alex.color("blue")
      alex.pensize(10)
      alex.forward(50)
      alex.left(90)
      alex.color("red")
      alex.forward(20)
      alex.right(90)
      alex.pensize(5)
      alex.forward(50)
      alex.left(180)
      alex.forward(10)
      alex.right(30)
      alex.pensize(2)
      alex.right(90)
      alex.color("green")
      alex.forward(50)

.. mchoice:: Exercises_question10_7
   :practice: T
   :answer_a: (30, 10)
   :answer_b: (10, 30)
   :answer_c: (30, 30)
   :answer_d: (50, 30)
   :correct: b
   :feedback_a: Incorrect! Follow every step and try to recreate the shape. Also see what goto() does. Try again.
   :feedback_b: Correct! The given code would have the turtle's final coordinates be these values at the end of the code.
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
   :answer_a: A blue square with only outline
   :answer_b: A blue rectangle with only outline
   :answer_c: A blue square filled with blue color
   :answer_d: A blue rectangle filled with blue color.
   :correct: d
   :feedback_a: Incorrect! Think what the .begin_fill() method does. Try again.
   :feedback_b: Incorrect! Think what the .begin_fill() method does. Try again.
   :feedback_c: Incorrect! Look at the height and width parameters of the function. Try again.
   :feedback_d: Correct! This is the correct shape that will be printed from this code.

   What shape would the following code print Using for loop?

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
   :answer_c: draw_rectangle(alex, 'green', -100, 80, 80, 50, 7)
   :answer_d: draw_rectangle(alex, 'green', 7, 80, 50, -100, 80)
   :correct: b
   :feedback_a: Incorrect! See that parameters are correctly assigned. Try again.
   :feedback_b: Correct! The printed shape follows the question requirements.
   :feedback_c: Incorrect! See that parameters are correctly assigned. Try again.
   :feedback_d: Incorrect! See that parameters are correctly assigned. Try again.

   Given the function. What parameters would you choose to create a green rectangle of pen size 7 with a width 80 and height 50 from location (-100, 80)?

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
   :correct: b
   :feedback_a: Incorrect! Think of what the heading would be for each triangle. Try again.
   :feedback_b: Correct! This is the correct shape that will be printed from this code.
   :feedback_c: Incorrect! Think of what the heading would be for each triangle. Try again.

   What is printed when this code is run. output of combining two different shape funtions?

   .. code-block:: python

      from turtle import *
      def draw_triangle(turtle, xpos, ypos, width, color, heading):
          turtle.penup()
          turtle.goto(xpos, ypos)
          turtle.setheading(heading)
          turtle.pendown()
          turtle.pencolor(color)
          turtle.color(color)
          turtle.begin_fill()
          for side in range(3):
              turtle.forward(width)
              turtle.left(120)
          turtle.end_fill()

      space = Screen()
      alex = Turtle()
      draw_triangle(alex, -120,30,60, 'green', 60)
      draw_triangle(alex, -120,30,60, 'green', 240)
