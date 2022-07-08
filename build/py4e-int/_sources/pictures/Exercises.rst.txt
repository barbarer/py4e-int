Multiple Choice Questions
---------------------------

.. mchoice:: pictures-mc-q1
    :practice: T
    :answer_a: red, blue and yellow
    :answer_b: red, green and blue
    :answer_c: red, white and blue
    :answer_d: blue, black and red
    :correct: b
    :feedback_a: These are the primary colors for paint, but computers use light.
    :feedback_b: Correct. Computers use red, green, and blue light to make all of the colors.
    :feedback_c: Try again.
    :feedback_d: Try again.

    What are the three colors parts that make up each pixel?

.. mchoice:: pictures-mc-q2_v2
    :practice: T
    :answer_a: Sets the green value in every pixel to the red value.
    :answer_b: Switches the green and red values in every pixel.
    :answer_c: Creates a green filter on the image.
    :answer_d: The code has no effect on pixel color.
    :correct: a
    :feedback_a: Correct. It sets the green value to the red value.
    :feedback_b: It only sets the green value, not the red value.
    :feedback_c: What does it set the green value to?
    :feedback_d: It does change the pixel color.

    What does the following code block do?

    .. code-block:: python

       from image import *
       img = Image('beach.jpg')
       pixels = img.getPixels()
       for p in pixels:
           r = p.getRed()
           p.setGreen(r)
           img.updatePixel(p)

.. mchoice:: pictures-mc-q3-v2
    :practice: T
    :answer_a: 0 to 100
    :answer_b: 0 to 255
    :answer_c: 1 to 10
    :answer_d: 1 to 255
    :correct: b
    :feedback_a: The maximum value is not 100.
    :feedback_b: Correct.  The minimum value is 0 and the maximum is 255.
    :feedback_c: Neither of these is correct.
    :feedback_d: The minimum value is not 1.

    Every pixel has a color with a red value, a green value and a blue value. What is the range (minimum value and maximum value)?

.. mchoice:: pictures-mc-q4-v2
    :practice: T
    :answer_a: Red
    :answer_b: Green
    :answer_c: Black
    :answer_d: Blue
    :answer_e: White
    :correct: b
    :feedback_a: Try again. If red equals 0, there will be no red color in the resulting pixel.
    :feedback_b: Correct. Since green equals 255 and the other two values equal 0, the resulting pixel color will be green.
    :feedback_c: Try again. All values must be 0 for the pixel to be black.
    :feedback_d: Try again. If blue equals 0, there will be no blue color in the resulting pixel.
    :feedback_e: Try again. All values must be 255 for the pixel to be white.

    If a pixel has red=0, green=255, and blue=0, what color will it be?

.. mchoice:: pictures-mc-q5-v2
    :practice: T
    :answer_a: I
    :answer_b: II
    :answer_c: III
    :answer_d: IV
    :correct: b
    :feedback_a: No, this code would increase red, not blue, by 180%.
    :feedback_b: Correct.
    :feedback_c: No, you have to convert the percentage you want to increase by into a decimal. If you want to increase a color by 180%, you would multiply by 1.8.
    :feedback_d: No, you have to get the blue value first in order to increase it by a certain amount.

    Which code block should you insert in the for loop below to correctly increase the blue by 180%?

    .. code-block:: python

       from image import *

       img = Image("motorcycle.jpg")
       pixels = img.getPixels()

       for p in pixels:
           #INSERT LINES HERE
           img.updatePixel(p)
       win = ImageWin(img.getWidth(), img.getHeight())
       img.draw(win)

    .. code-block:: python

       I.

       r = p.getRed()
       p.setRed(r * 180)


    .. code-block:: python

       II.

       b = p.getBlue()
       p.setBlue(b * 1.8)


    .. code-block:: python

       III.

       b = p.getBlue()
       p.setBlue(b * 180)

    .. code-block:: python

       IV.

       p.setBlue(b * 1.8)

.. mchoice:: pictures-mc-reduce-25-percent-q6-v2
    :practice: T
    :answer_a: multiply the green value by 25
    :answer_b: multiply the green value by 0.25
    :answer_c: multiply the green value by 0.5
    :answer_d: multiply the green value by 0.75
    :correct: d
    :feedback_a: To reduce the green value you must multiply by a value that is less than 1.
    :feedback_b: This would reduce it by 75%.
    :feedback_c: This would reduce it by 50%.
    :feedback_d: This would reduce it by 25%.

    Which of the following would reduce the green value by 25%?

.. mchoice:: pictures-mc-q7
    :practice: T
    :answer_a: I
    :answer_b: II
    :answer_c: III
    :answer_d: IV
    :correct: a
    :feedback_a: Correct. This code block copies from the bottom half of the image to the top half.
    :feedback_b: Try again. This code block copies from the left half to the right half.
    :feedback_c: Try again. This code block copies the top left quadrant to the bottom left quadrant.
    :feedback_d: Try again. This code block copies the top half of the image onto the bottom of the image.

    Which code block would allow you to copy the bottom half of the image onto the top half?

    .. code-block:: python

       I.

       from image import *
       img = Image("vangogh.jpg")

       halfway = (int) (img.getHeight() / 2)
       for x in range(img.getWidth()):
           for y in range(halfway, img.getHeight()):
               p = img.getPixel(x, y)
               r = p.getRed()
               g = p.getGreen()
               b = p.getBlue()
               newPixel = Pixel(r, g, b)
               img.setPixel(x, y - halfway, newPixel)

       win = ImageWin(img.getWidth(),img.getHeight())
       img.draw(win)


    .. code-block:: python

       II.

       from image import *
       img = Image("vangogh.jpg")

       halfway = (int) (img.getWidth() / 2)
       for x in range(halfway):
           for y in range(img.getHeight()):
               p = img.getPixel(x, y)
               r = p.getRed()
               g = p.getGreen()
               b = p.getBlue()
               newPixel = Pixel(r, g, b)
               img.setPixel(halfway + x, y, newPixel)

       win = ImageWin(img.getWidth(),img.getHeight())
       img.draw(win)


    .. code-block:: python

       III.

       from image import *
       img = Image("vangogh.jpg")

       halfway_x = (int) (img.getWidth() / 2)
       halfway_y = (int) (img.getHeight() / 2)
       for x in range(halfway_x):
           for y in range(halfway_y):
               p = img.getPixel(x, y)
               r = p.getRed()
               g = p.getGreen()
               b = p.getBlue()
               newPixel = Pixel(r, g, b)
               img.setPixel(x, halfway_y + y, newPixel)

       win = ImageWin(img.getWidth(),img.getHeight())
       img.draw(win)


    .. code-block:: python

       IV.

       from image import *
       img = Image("vangogh.jpg")

       halfway = (int) (img.getHeight() / 2)
       for x in range(img.getWidth()):
           for y in range(halfway):
               p = img.getPixel(x, y)
               r = p.getRed()
               g = p.getGreen()
               b = p.getBlue()
               newPixel = Pixel(r, g, b)
               img.setPixel(x, halfway + y, newPixel)

       win = ImageWin(img.getWidth(),img.getHeight())
       img.draw(win)

.. mchoice:: pictures-make-white-q8
    :practice: T
    :answer_a: r = 255, g = 0, b = 0
    :answer_b: r = 0, g = 0, b = 0
    :answer_c: r = 0, g = 255, b = 0
    :answer_d: r = 255, g = 255, b = 255
    :correct: d
    :feedback_a: This would be red.
    :feedback_b: This would be black (no light).
    :feedback_c: This would be green
    :feedback_d: Correct.  To make white set all values to 255.

    Which of the following combinations of red (r), green (g), and blue (b) values makes white?

.. mchoice:: pictures-mc-q9
    :practice: T
    :answer_a: The image is rotated 90 degree to the right.
    :answer_b: The image is mirrored around a diagonal line from the top left to the bottom right.
    :answer_c: The image is mirrored vertically.
    :answer_d: The image is mirrored around a diagonal line from the top right to the bottom left.
    :correct: d
    :feedback_a: We would have to create a new image and set the values in the new image from the old pixel values for this to be true.
    :feedback_b: Close, try again!
    :feedback_c: This would be true if the pixels were copied to the same row.
    :feedback_d: Correct.

    What happens when we run the following code?

    .. code-block:: python

       from image import *
       img = Image("vangogh.jpg")

       for x in range(img.getWidth()):
           for y in range(img.getHeight()):
               p = img.getPixel(x, y)
               img.setPixel(img.getWidth() - 1 - y,
                            img.getHeight() - 1 - x,
                            p)

       win = ImageWin(img.getWidth(),img.getHeight())
       img.draw(win)


.. mchoice:: pictures-mc-q10-v2
    :practice: T
    :answer_a: setPixel(r, g, b)
    :answer_b: Pixel(r, g, b)
    :answer_c: setAll(r, g, b)
    :answer_d: This cannot be accomplished using a single line of code.
    :correct: b
    :feedback_a: There is no setPixel method.
    :feedback_b: Correct. You can set the red, blue, and green when you create a Pixel.
    :feedback_c: There is no setAll method.
    :feedback_d: You can actually set the red, blue, and green at the same time.

  	What line of code sets the red, green and blue values simultaneously?
