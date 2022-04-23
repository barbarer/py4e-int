..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Write Code Exercises
---------------------------

.. note::

   Remember that it can take a bit of time to process all the pixels in a picture!  Check for errors below the code if it is taking a long time, but if you don't see any errors just wait.


.. question:: pictures_ac_1
   :number: 1

   .. tabbed:: q1

     .. tab:: Question

       .. activecode:: pictures_ac_q1
          :datafile: gal2.jpg

          Fix 4 syntax errors in the code below so that it correctly sets the red in all pixels to 0.
          ~~~~
          from image import

          # CREATE AN IMAGE FROM A FILE
          img = Image("gal2.jpg")

          # LOOP THROUGH THE PIXELS
          pixelList = img.getPixels()
          for p in pixelList:

            # SET THE RED TO 0
            p.setRed()

            # UPDATE THE IMAGE
            img.updatePixel()

          # SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a1
          :datafile: gal2.jpg

          Fix 4 syntax errors in the code below so that it correctly sets the red in all pixels to 0.
          ~~~~
          # Import everything from the Image class
          from image import *

          # Add a closing parentheses
          img = Image("gal2.jpg")

          pixelList = img.getPixels()
          for p in pixelList:

          # Add 0 inside setRed() parentheses to set all red pixels to 0
            p.setRed(0)

            #Add a p inside updatePixel() parentheses
            img.updatePixel(p)

          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)




.. question:: pictures_ac_2
   :number: 2

   .. tabbed:: q2

     .. tab:: Question

       .. activecode:: pictures_ac_q2
          :datafile: kitten.jpg

          The code below makes the image have a green-blue tint. Change 1 thing in order to make it have a red tint instead.
          ~~~~
          # USE THE IMAGE LIBRARY
          from image import *

          # PICK THE IMAGE
          img = Image("kitten.jpg")

          # LOOP THROUGH THE PIXELS
          pixelList = img.getPixels()
          for p in pixelList:
              # SET THE COLOR
              p.setRed(0)

              # UPDATE THE PIXEL
              img.updatePixel(p)

          # SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a2
          :datafile: kitten.jpg

          The code below makes the image have a green-blue tint. Change 1 thing in order to make it have a red tint instead.
          ~~~~
          from image import *

          img = Image("kitten.jpg")

          pixelList = img.getPixels()
          for p in pixelList:

              # Red tint
              # Set red pixels to 255, not 0
              p.setRed(255)

              img.updatePixel(p)

          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)




.. question:: pictures_ac_3
   :number: 3

   .. tabbed:: q3

     .. tab:: Question

       .. activecode:: pictures_ac_q3
          :datafile: gal2.jpg

          Fix the indention below to correctly set the red to the green, the green to the blue, and the blue to the red.
          ~~~~
          # STEP 1: USE THE IMAGE LIBRARY
          from image import *

          # STEP 2: PICK THE IMAGE
          img = Image("gal2.jpg")

          # STEP 3: LOOP THROUGH THE PIXELS
          pixels = img.getPixels()
          for p in pixels:

          # STEP 4: GET THE DATA
          r = p.getRed()
          g = p.getGreen()
          b = p.getBlue()

          # STEP 5: MODIFY THE COLOR
          p.setRed(g)
          p.setGreen(b)
          p.setBlue(r)

          # STEP 6: UPDATE THE IMAGE
          img.updatePixel(p)

          # STEP 7: SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a3
          :datafile: gal2.jpg

          Fix the indention below to correctly set the red to the green, the green to the blue, and the blue to the red.
          ~~~~
          from image import *
          img = Image("gal2.jpg")

          pixels = img.getPixels()
          for p in pixels:

              # Need to indent inside a for loop
              # Indent every line of code that modifies pixel values.
              r = p.getRed()
              g = p.getGreen()
              b = p.getBlue()

              p.setRed(g)
              p.setGreen(b)
              p.setBlue(r)

              img.updatePixel(p)

          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)




.. question:: pictures_ac_4
   :number: 4

   .. tabbed:: q4

     .. tab:: Question

       .. activecode:: pictures_ac_q4
          :datafile: kitten.jpg

          Fix the 5 errors in the code, so that the red pixels get the value of the green, the green get the value of blue, and the blue get the value of the red. (The cat should look purple and gray)
          ~~~~
          # STEP 1: USE THE IMAGE LIBRARY
          from image import *

          # STEP 2: PICK THE IMAGE
          img = Image("kitten.jpg")

          # STEP 3: LOOP THROUGH THE PIXELS
          pixels = img.getPixels()
          for p in pixel:

              # STEP 4: GET THE DATA
              r = p.getred()
              b = p.getGreen()
              g = p.getBlue()

              # STEP 5: MODIFY THE COLOR
              p.setRed(g)
              p.setGreen(b)
              p.set.Blue(r)

              # STEP 6: UPDATE THE IMAGE
              img.updatepixel(p)

          # STEP 7: SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          Img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a4
          :datafile: kitten.jpg

          Fix the 5 errors in the code, so that the red pixels get the value of the green, the green get the value of blue, and the blue get the value of the red. (The cat should look purple and gray)
          ~~~~
          from image import *

          img = Image("kitten.jpg")

          pixels = img.getPixels()

          # pixels, not pixel, to match variable name
          for p in pixels:

              # getRed() has a capital R
              r = p.getRed()
              b = p.getGreen()
              g = p.getBlue()

              p.setRed(g)
              p.setGreen(b)
              # The function is setBlue, instead of set.Blue
              p.setBlue(r)

              # updatePixel should have capitalized P
              img.updatePixel(p)

          win = ImageWin(img.getWidth(),img.getHeight())
          # img is lowercased
          img.draw(win)






.. question:: pictures_ac_5
   :number: 5

   .. tabbed:: q5

     .. tab:: Question

       .. activecode:: pictures_ac_q5
          :datafile: gal2.jpg

          Fill in the missing code on lines 9, 12, and 18 below to set the red to half the original value in all pixels in the picture.
          ~~~~
          # STEP 1: USE THE IMAGE LIBRARY
          from image import *

          # STEP 2: PICK THE IMAGE
          img = Image("gal2.jpg")

          # STEP 3: LOOP THROUGH THE PIXELS
          pixels = img.getPixels();
          for p

              # STEP 4: GET THE DATA
              r = p.

              # STEP 5: MODIFY THE COLOR
              p.setRed(r * 0.5);

              # STEP 6: UPDATE THE IMAGE
              img.

          # STEP 7: SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a5
          :datafile: gal2.jpg

          Fill in the missing code on lines 9, 12, and 18 below to set the red to half the original value in all pixels in the picture.
          ~~~~
          from image import *

          img = Image("gal2.jpg")

          pixels = img.getPixels();
          # Add loop condition
          for p in pixels:

              # Get current red value
              r = p.getRed()

              p.setRed(r * 0.5);

              # Update image with new pixels
              img.updatePixel(p)

          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)



.. question:: pictures_ac_6
  :number: 6

   .. tabbed:: q6

     .. tab:: Question

       .. activecode:: pictures_ac_q6
          :datafile: swan.jpg

          Complete the code in order to set the blue value to an eighth of the green value plus an eighth of the red value.
          ~~~~
          # STEP 1: USE THE IMAGE LIBRARY
          from image import *

          # STEP 2: PICK THE IMAGE
          img = Image("swan.jpg")

          # STEP 3: LOOP THROUGH THE PIXELS
          pixels = img.getPixels()
          for
              # STEP 4: GET THE DATA
              b = p.get
              g = p.get
              r = p.get

              # STEP 5: MODIFY THE COLOR
              p.set

              # STEP 6: UPDATE THE IMAGE
              img.updatePixel(p)

          # STEP 7: SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a6
          :datafile: swan.jpg

          Complete the code in order to set the blue value to an eighth of the green value plus an eighth of the red value.
          ~~~~
          from image import *

          img = Image("swan.jpg")

          pixels = img.getPixels()

          # Loop through each pixel in pixels
          for p in pixels:

              # Add getBlue(), getGreen() and getRed()
              b = p.getBlue()
              g = p.getGreen()
              r = p.getRed()

              # Set blue to 1/8 of green and 1/8 of red
              p.setBlue((g / 8) + (r / 8))

              img.updatePixel(p)

          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)



.. question:: pictures_ac_7
   :number: 7

   .. tabbed:: q7

     .. tab:: Question

       .. activecode:: pictures_ac_q7
          :datafile: gal2.jpg

          Fix the indention in the code below so that it correctly increases the red in each pixel in the picture by 1.5.
          ~~~~
          # STEP 1: USE THE IMAGE LIBRARY
          from image import *

          # STEP 2: PICK THE IMAGE
          img = Image("gal2.jpg")

          # STEP 3: LOOP THROUGH THE PIXELS
          pixels = img.getPixels();
          for p in pixels:

          # STEP 4: GET THE DATA
          r = p.getRed()

          # STEP 5: MODIFY THE COLOR
          p.setRed(r * 1.5);

          # STEP 6: UPDATE THE IMAGE
          img.updatePixel(p)

          # STEP 7: SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a7
          :datafile: gal2.jpg

          Fix the indention in the code below so that it correctly increases the red in each pixel in the picture by 1.5.
          ~~~~
          from image import *

          img = Image("gal2.jpg")

          pixels = img.getPixels();
          for p in pixels:


              # Need to indent inside a for loop
              # Indent every line of code that modifies pixel values.
              r = p.getRed()
              p.setRed(r * 1.5);
              img.updatePixel(p)

          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)




.. question:: pictures_ac_8
   :number: 8

   .. tabbed:: q8

     .. tab:: Question

       .. activecode:: pictures_ac_q8
          :datafile: motorcycle.jpg

          Fix the code (without adding anything new) to make the picture completely black.
          ~~~~
          # STEP 1: USE THE IMAGE LIBRARY
          from image import *

          # STEP 2: PICK THE IMAGE
          img = Image("motorcycle.jpg")

          # STEP 3: LOOP THROUGH THE PIXELS
          pixels = img.getPixels()
          for p in pixels:

              # STEP 4: GET THE DATA
              r = p.getRed()
              b = p.getBlue()
              g = p.getGreen()

              # STEP 5: MODIFY THE COLOR
              p.setRed(0)
              p.setGreen(0)
              p.setBlue(0)

              # STEP 6: UPDATE THE IMAGE
              img.updatePixel(p)

          # STEP 7: SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a8
          :datafile: motorcycle.jpg

          Fix the code (without adding anything) to make the picture completely black.
          ~~~~
          from image import *

          img = Image("motorcycle.jpg")

          pixels = img.getPixels()
          for p in pixels:

              # Removed getRed(), getGreen() and getBlue()
              #We are setting the pixel values to 0 regardless of current value

              p.setRed(0)
              p.setGreen(0)
              p.setBlue(0)

              img.updatePixel(p)

          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)











.. question:: pictures_ac_9
   :number: 9

   .. tabbed:: q9

     .. tab:: Question

       .. activecode:: pictures_ac_q9
          :datafile: gal2.jpg

          Fix the code below to correctly set the green and blue values to 0.75 times their current values.
          ~~~~
          # STEP 1: USE THE IMAGE LIBRARY
          from image import *

          # STEP 2: PICK THE IMAGE
          img = Image("gal2.jpg")

          # STEP 3: LOOP THROUGH THE PIXELS
          pixels = img.getPixels();
          for p in pixels:

              p.setGreen(g * 0)
              p.setBlue(b * 0)
              g = p.getGreen()
              b = p.getBlue()

              # STEP 6: UPDATE THE IMAGE
              img.updatePixel(p)

          # STEP 7: SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a9
          :datafile: gal2.jpg

          Fix the code below to correctly set the green and blue values to 0.75 times their current values.
          ~~~~
          from image import *
          img = Image("gal2.jpg")

          pixels = img.getPixels();
          for p in pixels:

              # You need to first get current pixel values and theen modify to new values
              g = p.getGreen()
              b = p.getBlue()
              p.setGreen(g * 0.75)
              p.setBlue(b * 0.75)

              img.updatePixel(p)

          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)





.. question:: pictures_ac_10
   :number: 10

   .. tabbed:: q10

     .. tab:: Question

       .. activecode:: pictures_ac_q10
          :datafile: baby.jpg

          The code below sets all the pixels to half their original values with one for loop. Change the code so it uses 2 for loops that utilize the range function (1 for loop should be nested in the other).
          ~~~~
          # STEP 1: USE THE IMAGE LIBRARY
          from image import *

          # STEP 2: PICK THE IMAGE
          img = Image("baby.jpg")

          # STEP 3: LOOP THROUGH THE PIXELS
          pixels = img.getPixels()
          for p in pixels:

              # STEP 4: GET THE DATA
              r = p.getRed()
              b = p.getBlue()
              g = p.getGreen()

              # STEP 5: MODIFY THE COLOR
              p.setRed(r/2)
              p.setGreen(g/2)
              p.setBlue(b/2)

              # STEP 6: UPDATE THE IMAGE
              img.updatePixel(p)

          # STEP 7: SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a10
          :datafile: baby.jpg

          The code below sets all the pixels to half their original values with one for loop. Change the code so it uses 2 for loops that utilize the range function (1 for loop should be nested in the other).
          ~~~~
          # STEP 1: USE THE IMAGE LIBRARY
          from image import *

          # STEP 2: PICK THE IMAGE
          img = Image("baby.jpg")

          # STEP 3: LOOP THROUGH THE PIXELS
          pixels = img.getPixels()
          for p in pixels:

              # STEP 4: GET THE DATA
              r = p.getRed()
              b = p.getBlue()
              g = p.getGreen()

              # STEP 5: MODIFY THE COLOR
              p.setRed(r/2)
              p.setGreen(g/2)
              p.setBlue(b/2)

              # STEP 6: UPDATE THE IMAGE
              img.updatePixel(p)

          # STEP 7: SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)









.. question:: pictures_ac_11
   :number: 11

   .. tabbed:: q11

     .. tab:: Question

       .. activecode:: pictures_ac_q11
          :datafile: gal2.jpg

          Change the following code to set the red to 0 for all pixels in the left half of the picture.
          ~~~~
          from image import *

          # CREATE AN IMAGE FROM A FILE
          img = Image("gal2.jpg")

          # LOOP THROUGH THE PIXELS
          for x in range(img.getWidth()):
              for y in range(img.getHeight()):

                  # GET THE DATA
                  p = img.getPixel(x, y)


                  # SET THE RED TO 0
                  p.setRed(0)

                  # UPDATE THE IMAGE
                  img.updatePixel(p)

          # SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a11
          :datafile: gal2.jpg

          Change the following code to set the red to 0 for all pixels in the left half of the picture.
          ~~~~
          from image import *
          img = Image("gal2.jpg")

          # Since we need first half, only consider range for first half pixel values
          # Range takes integer parameters, so need to convert float type to int
          for x in range(int(img.getWidth()/2)):
              for y in range(img.getHeight()):

                  p = img.getPixel(x, y)
                  p.setRed(0)
                  img.updatePixel(p)

          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)







.. question:: pictures_ac_12
   :number: 12

   .. tabbed:: q12

     .. tab:: Question

       .. activecode:: pictures_ac_q12
          :datafile: swan.jpg

          The code below makes the whole image have a blue-green tint. Change the code so that it makes an only blue tint in the bottom left corner.
          ~~~~
          from image import *

          # CREATE AN IMAGE FROM A FILE
          img = Image("swan.jpg")

          # LOOP THROUGH THE PIXELS
          for x in range(int(img.getWidth())):
              for y in range(int(img.getHeight())):
                  # GET THE DATA
                  p = img.getPixel(x, y)

                  # SET THE PIXEL
                  p.setRed(0)

                  # UPDATE THE PIXEL
                  img.updatePixel(p)

          # SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a12
          :datafile: swan.jpg

          The code below makes the whole image have a blue-green tint. Change the code so that it makes an only blue tint in the bottom left corner.
          ~~~~
          from image import *
          img = Image("swan.jpg")

          # Range should be the left 1/2 of the image
          for x in range(int(img.getWidth()/2)):

              #Range should be bottom 1/2 of the image
              for y in range(int(img.getHeight()/2),int(img.getHeight())):

                  p = img.getPixel(x, y)
                  p.setRed(0)
                  p.setGreen(0)
                  img.updatePixel(p)

          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)






.. question:: pictures_ac_13
   :number: 13

   .. tabbed:: q13

     .. tab:: Question

       .. activecode:: pictures_ac_q13
          :datafile: gal2.jpg

          Change the code below to set the red value in the pixels in the bottom half of the picture to 0.
          ~~~~
          from image import *

          # CREATE AN IMAGE FROM A FILE
          img = Image("gal2.jpg")

          # LOOP THROUGH THE PIXELS
          for x in range(img.getWidth()):
              for y in range(img.getHeight()):

                  # GET THE DATA
                  p = img.getPixel(x, y)

                  # SET THE RED TO 0
                  p.setRed(0)

                  # UPDATE THE IMAGE
                  img.updatePixel(p)

          # SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a13
          :datafile: gal2.jpg

          Change the code below to set the red value in the pixels in the bottom half of the picture to 0.
          ~~~~
          from image import *
          img = Image("gal2.jpg")

          # Since we need first half, only consider range for first half pixel values
          # Range takes integer parameters, so need to convert float type to int
          for x in range(int(img.getWidth()/2), int(img.getWidth())):
              for y in range(int(img.getHeight()/2), int(img.getHeight())):

                  p = img.getPixel(x, y)
                  p.setRed(0)
                  img.updatePixel(p)

          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)





.. question:: pictures_ac_14
   :number: 14

   .. tabbed:: q14

     .. tab:: Question

       .. activecode:: pictures_ac_q14
          :datafile: guy1.jpg

          The code below makes the whole image seem red. Change it, so that only every 5 pixels get changed, so that it will look like a red grid.
          ~~~~
          from image import *

          # CREATE AN IMAGE FROM A FILE
          img = Image("guy1.jpg")

          # LOOP THROUGH THE PIXELS
          for x in range(int(img.getWidth())):
              for y in range(img.getHeight()):
                  # GET THE DATA
                  p = img.getPixel(x, y)

                  # SET THE PIXEL
                  p.setGreen(0)
                  p.setBlue(0)

                  # UPDATE THE IMAGE
                  img.updatePixel(p)
          # SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a14
          :datafile: guy1.jpg

          The code below makes the whole image seem red. Change it, so that only every 5 pixels get changed, so that it will look like a red grid.
          ~~~~
          from image import *

          # CREATE AN IMAGE FROM A FILE
          img = Image("guy1.jpg")

          # LOOP THROUGH THE PIXELS
          for x in range(0, int(img.getWidth()), 5):
              for y in range(0, img.getHeight(), 5):
                  # GET THE DATA
                  p = img.getPixel(x, y)

                  # SET THE PIXEL
                  p.setGreen(0)
                  p.setBlue(0)

                  # UPDATE THE IMAGE
                  img.updatePixel(p)
          # SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)







.. question:: pictures_ac_15
   :number: 15

   .. tabbed:: q15

     .. tab:: Question

       .. activecode:: pictures_ac_q15
          :datafile: gal2.jpg

          Change the following code into a procedure to keep only the green values in all pixels in a picture.
          ~~~~
          # STEP 1: USE THE IMAGE LIBRARY
          from image import *

          # STEP 2: PICK THE IMAGE
          img = Image("gal2.jpg")

          # STEP 3: LOOP THROUGH THE PIXELS
          pixels = img.getPixels();
          for p in pixels:

              # STEP 5: MODIFY THE COLOR


              # STEP 6: UPDATE THE IMAGE
              img.updatePixel(p)

          # STEP 7: SHOW THE RESULT
          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)

     .. tab:: Answer

       .. activecode:: pictures_ac_a15
          :datafile: gal2.jpg

          Change the following code into a procedure to keep only the green values in all pixels in a picture.
          ~~~~
          from image import *
          img = Image("gal2.jpg")

          pixels = img.getPixels();
          for p in pixels:

              # Set Red and Blue values to 0
              p.setRed(0)
              p.setBlue(0)

              img.updatePixel(p)

          win = ImageWin(img.getWidth(),img.getHeight())
          img.draw(win)


.. selectquestion:: pictures_writecode_16
   :fromid: pictures_ac_16, pictures_ac_16_pp
   :toggle:

.. selectquestion:: pictures_writecode_17
   :fromid: pictures_ac_17, pictures_ac_17_pp
   :toggle:

.. selectquestion:: pictures_writecode_18
   :fromid: pictures_ac_18, pictures_ac_18_pp
   :toggle:

.. selectquestion:: pictures_writecode_19
   :fromid: pictures_ac_19, pictures_ac_19_pp
   :toggle:

.. selectquestion:: pictures_writecode_20
   :fromid: pictures_ac_20, pictures_ac_20_pp
   :toggle:


.. question:: picture_ac_21
   :number: 21

   .. tabbed:: q21

     .. tab:: Question

       .. activecode:: pictures_ac_q21
          :datafile: gal2.jpg

          Write code to create a subclass of the Image class with three different image effect functions and use each effect on a different part of the image.  For example, you could turn the image into grayscale, keep only the green values, swap the red and green values, negate the image, etc. This is one possible solution. For example, the image shown below has one image effect on the first third of the image (negate), one on the second third (clear blue), and one on the final third (reduce red).  It is using the image ``gal2.jpg``
          ~~~~

     .. tab:: Answer

       .. activecode:: pictures_ac_a21
          :datafile: gal2.jpg

          Create a subclass of the Image class with three different image effect functions and use each effect on a different part of the image.  For example, you could turn the image into grayscale, keep only the green values, swap the red and green values, negate the image, etc. This is one possible solution. For example, the image shown below has one image effect on the first third of the image (negate), one on the second third (clear blue), and one on the final third (reduce red).  It is using the image ``gal2.jpg``
          ~~~~
          from image import *
          class MyImage(Image):
              def __init__(self, file):
                  super().__init__(file)

              def negate(self):
                  for x in range(self.getWidth()):
                      for y in range(int(self.getHeight() / 3)):
                          p = self.getPixel(x,y)
                          r = p.getRed()
                          b = p.getBlue()
                          g = p.getGreen()
                          newPixel = Pixel(255 - r, 255 - b, 255 - g)

                          self.setPixel(x, y, newPixel)

              def removeBlue(self):
                  for x in range(self.getWidth()):
                      for y in range(int(self.getWidth() / 3), int((self.getWidth() / 3)*2)):

                          p = self.getPixel(x,y)
                          p.setBlue(0)
                          self.updatePixel(p)

              def reduceRed(self):
                  for x in range(self.getWidth()):
                      for y in range(int((self.getWidth() / 3)*2), self.getHeight()):
                          p = self.getPixel(x,y)
                          r = p.getRed()
                          p.setRed(r/2)
                          self.updatePixel(p)

          def main():
              # CREATE AN IMAGE FROM A FILE
              img = MyImage("gal2.jpg")

              img.negate()
              img.removeBlue()
              img.reduceRed()

              # SHOW THE RESULT
              win = ImageWin(img.getWidth(),img.getHeight())
              img.draw(win)
          main()
