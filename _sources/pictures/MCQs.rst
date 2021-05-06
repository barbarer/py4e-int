Multiple Choice Questions
---------------------------

.. mchoice:: pictures-mc-q1
	:practice: T
    :answer_a: red, blue and yellow
    :answer_b: red, green and blue
    :answer_c: red, white and blue
    :answer_d: blue, black and red
    :correct: b
    :feedback_a: Try again.
    :feedback_b: Correct.
    :feedback_c: Try again.
    :feedback_d: Try again.

	What are the three colors parts that make up each pixel?

.. mchoice:: pictures-mc-q2
    :practice: T
    :answer_a: Sets the red pixels to the value of the green.
    :answer_b: Switches the green and red pixel values.
    :answer_c: Creates a green filter on the image.
    :answer_d: The code has no effect on pixel color.
    :correct: a
    :feedback_a: Correct.
    :feedback_b: Try again.
    :feedback_c: Try again.
    :feedback_d: Try again. 

    What does the following code block do?
    
    .. code-block:: python
    
	  from image import *
	  
	  img = Image('beach.jpg')
	  pixels = img.getPixels()
	  
	  for p in pixels:
	  	r = p.getRed()
	  	p.setGreen(r)
	  	img.updatePixel(p)
          
.. mchoice:: pictures-mc-q3
	:practice: T
    :answer_a: 0 to 100
    :answer_b: 0 to 255
    :answer_c: 1 to 10
    :answer_d: 1 to 255
    :correct: b
    :feedback_a: Try again. The minimum value is 0.
    :feedback_b: Correct.
    :feedback_c: Try again. Neither 1 or 10 is the maximum or minimum values in the range.
    :feedback_d: Try again. The maximum value is 255.
	
	Every pixel has a color with a red part, a green part and a blue part. Each color part has a numeric value. What is the range of these values?
	
.. mchoice:: pictures-mc-q4
	:practice: T
    :answer_a: Red
    :answer_b: Green
    :answer_c: Black
    :answer_d: Blue
    :answer_e: White
    :correct: b
    :feedback_a: Try again. If red=0, there will be no red color in the resulting pixel. 
    :feedback_b: Correct. Since green=255 and the other two values =0, the resulting pixel will be green.
    :feedback_c: Try again. All values must be 0 for the pixel to be black. 
    :feedback_d: Try again. If blue=0, there will be no blue color in the resulting pixel.
    :feedback_e: Try again. All values must be 255 for the pixel to be white.
	
	If a pixel is red=0, green=255, and blue=0, what color will it be?
	
.. mchoice:: pictures-mc-q5
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
	  p.setRed(r * 1.8)      
    
    
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
      
	  p.setBlue(b * 180)
	  
.. mchoice:: pictures-mc-q6
	:practice: T
    :answer_a: while loop
    :answer_b: if statement
    :answer_c: for loop
    :answer_d: All of the above
    :correct: c
    :feedback_a: Try again.
    :feedback_b: Try again.
    :feedback_c: Correct.  
    :feedback_d: Try again.
    
	Which of the following can we used to repeat actions on all pixels in a picture?	
   
.. mchoice:: pictures-mc-q7
	:practice: T
    :answer_a: I
    :answer_b: II
    :answer_c: III
    :answer_d: IV
    :correct: a
    :feedback_a: Correct.
    :feedback_b: Try again. This code block would accomplish side-by-side copying.
    :feedback_c: Try again. This code block would copy the top right quadrant to the bottom right quadrant.  
    :feedback_d: Try again. This code block would copy the top of the image onto the bottom of the image.
    
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
       
	  halfway = (int) (img.getHeight() / 2)
	  for x in range(img.getWidth()):
	    for y in range(halfway, img.getHeight()):
	      p = img.getPixel(x, y)
	      r = p.getRed()
	      g = p.getGreen()
	      b = p.getBlue()
	      newPixel = Pixel(r, g, b)
	      img.setPixel(x, halfway + y, newPixel)

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
	  
.. fillintheblank:: pictures-fillin-q8

   To make a pixel white, you would set red= ``|blank|``, blue= ``|blank|``, and green= ``|blank|``.
	
   - :255: Correct.
	  :.*: Incorrect. Try again.
   - :255: Correct.
   - :255: Correct.
     
     
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


.. mchoice:: pictures-mc-q10
	:practice: T
    :answer_a: setPixel(r, g, b)
    :answer_b: Pixel(r, g, b)
    :answer_c: setAll(r, g, b)
    :answer_d: This cannot be accomplished using a single line of code.
    :correct: b
    :feedback_a: Try again.
    :feedback_b: Correct.
    :feedback_c: Try again.
    :feedback_d: Try again. There is a single line of code that allows you to set all colors at the same time.

	What line of code sets the red, green and blue values simultaneously?
	

                  
