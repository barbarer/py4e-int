.. qnum::
   :prefix: 11-9-
   :start: 1
   
Exam Questions for Chapters 9 to 11
-------------------------------------

The following questions test what you have learned in chapters 9 to 11. Click the "Start" button when you are ready to begin the exam.  Click the "Pause" button to pause the exam (you will not be able to see the questions when the exam is paused).  It will show how much time you have used, but you have unlimited time.  Click on the "Finish Exam" button at the end when you are done.  The number correct, number wrong, and number skipped will be displayed at the bottom of the page.  Feedback for each answer will also be shown as well as your answer.

You will not be able to change your answers after you hit the "Finish Exam" button.

.. timed:: ch9t10ex
    
    .. mchoice:: e9t11_1
       :practice: T
       :answer_a: !We're off to see the Wizard!
       :answer_b: !draziW eht ees ot ffo er'eW!
       :answer_c: We're off to see the Wizard!!draziW eht ees ot ffo er'eW
       :answer_d: !draziW eht ees ot ffo er'eW!We're off to see the Wizard!
       :correct: d
       :feedback_a: This would be true if it was newString = newString + letter
       :feedback_b: This would be true if it was newString = letter + newString
       :feedback_c: This would be true if it was newString = letter + newString in the loop and you printed phrase + newString
       :feedback_d: This code adds each letter to the front and back of the string which will print the reverse of the string ! and the string.

       Given the following code, what will be printed? 
       
       ::

          newString = "!"
          phrase = "We're off to see the Wizard!"
          for letter in phrase:
              newString = letter + newString + letter
          print (newString)
           
    .. mchoice:: e9t11_2
       :practice: T
       :answer_a: X = 5 and Y = 72
       :answer_b: X = 36 and Y = 10
       :answer_c: X = 10 and Y = 36
       :answer_d: X = 12 and Y = 30
       :correct: c
       :feedback_a: This would be true if you were trying to draw a 5 sided figure.
       :feedback_b: This would be true if you were trying to draw a 36 sided figure.
       :feedback_c: The value of X is 10 to make a 10 sided figure and the amount to turn is 360 / 10 = 36.
       :feedback_d: This would be true if you were trying to draw a 12 sided figure.

       If we would like to draw a decagon (10 sided figure), what should the values of X and Y be in the code below?
       
       ::
       
          from turtle import *       # use the turtle library
          space = Screen()           # create a turtle space
          zoe = Turtle()             # create a turtle named zoe
          zoe.setheading(90)         # point due north
          for sides in range(X):     # repeat the indented lines X times
              zoe.forward(50)        # move forward by 50 units
              zoe.right(Y)           # And turn each one by Y
          
    .. mchoice:: e9t11_3
       :practice: T
       :answer_a: Pictures are made up of little pixels, laid out on an (x,y) grid.
       :answer_b: Each pixel is stored as a number between 0 and 255.
       :answer_c: Each color has a red part, a green part, and a blue part.
       :answer_d: Each color part is actually a number between 0 and 255.
       :correct: b
       :feedback_a: Pictures are grids of pixels.
       :feedback_b: A pixel has a color and the color has a red, green, and blue part.
       :feedback_c: One way to describe a color is a combination of red, green, and blue.
       :feedback_d: On a computer the value for red, green, and blue is between 0 and 255.

       Which of the following statements is false?
       
    .. mchoice:: e9t11_4
       :practice: T
       :answer_a: Double the blue and green values in the picture
       :answer_b: Halve the blue and green values in the picture
       :answer_c: Set the green values to half the original blue and the blue to half the original green
       :answer_d: Set the green to double half the original blue and the blue to double the original green
       :correct: c
       :feedback_a: This would be true if it was p.setGreen(g * 2) and p.setBlue(b * 2)
       :feedback_b: This would be true if it was p.setGreen(g / 2) and p.setBlue(b / 2)
       :feedback_c: This sets the green values to half the original blue values and the blue values to half the original green values.
       :feedback_d: This would be true if it was p.setGreen(b * 2) and p.setBlue(g * 2)

       What does the following code do?
       
       ::
       
          from image import *
          img = Image("beach.jpg")
          pixels = img.getPixels()
          for p in pixels:
              g = p.getGreen()
              b = p.getBlue()
              p.setGreen(b / 2)
              p.setBlue(g / 2)
              img.updatePixel(p)
          win = ImageWin(img.getWidth(), img.getHeight())
          img.draw(win)
          
    .. mchoice:: e9t11_5
       :practice: T
       :answer_a: <img src="../_static/turtleStamp5.png" alt="5 turtles facing out in a circle with one in the center facing east" width="300">
       :answer_b: <img src="../_static/turtleStamp5WithLines.png" alt="5 turtles facing out in a circle with one in the center facing east with lines from the center to each turtle on the circle" width="300">
       :answer_c: <img src="../_static/turtleStamp10.png" alt="10 turtles facing out in a circle with one in the center facing east" width="300">
       :answer_d: <img src="../_static/turtleStamp10WithLines.png" alt="10 turtles facing out in a circle with one in the center facing east with lines from the center to each turtle on the circle" width="300">
       :correct: a
       :feedback_a: This stamps 5 turtles on a circle with a radius of 25.
       :feedback_b: This would be true if the line zoe.penup() was removed.
       :feedback_c: This would be true if it was range(10) and right(36)
       :feedback_d: This would be true if it was range(10) and right(36) and if the line zoe.penup() was removed.

       What would the following draw?
       
       ::
       
          from turtle import *       
          space = Screen()           
          zoe = Turtle()            
          zoe.shape("turtle")       
          zoe.penup()
          for size in range(5):     
              zoe.forward(50)      
              zoe.stamp()  
              zoe.forward(-50)
              zoe.right(72)         
             

   