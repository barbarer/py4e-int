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

The picture below are used in the following exercises.

.. datafile:: gal2.jpg
   :image:
   :fromfile: Figures/gal2.jpg
   :hide:

.. datafile:: kitten.jpg
   :image:
   :fromfile: Figures/kitten.jpg
   :hide:

.. datafile:: swan.jpg
   :image:
   :fromfile: Figures/swan.jpg
   :hide:

.. datafile:: motorcycle.jpg
   :image:
   :fromfile: Figures/motorcycle.jpg
   :hide:

.. datafile:: baby.jpg
   :image:
   :fromfile: Figures/baby.jpg
   :hide:

.. datafile:: guy1.jpg
   :image:
   :fromfile: Figures/guy1.jpg
   :hide:

.. note::

   Remember that it can take a bit of time to process all the pixels in a picture!  Check for errors below the code if it is taking a long time, but if you don't see any errors just wait.

#.
    .. activecode:: ch11ex1q
       :nocodelens:

       Fix 4 syntax errors in the code below so that it correctly sets the red in all pixels to 0.
       ~~~~
       from image import

       # CREATE AN IMAGE FROM A FILE
       img = Image("gal2.jpg"

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

#.

    .. activecode::  ch11ex2q
       :nocodelens:

       The code below makes the image have a green-blue tint. Change 1 thing in order to make it have a red tint instead.
       ~~~~
       # USE THE IMAGE LIBRARY
       from image import *

       # PICK THE IMAGE
       img = Image("puppy.jpg")

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

#.

    .. activecode::  ch11ex3q
         :nocodelens:

         Fix the indention below to correctly set the red to the green, the green to the blue, and the blue to the red.
         ~~~~
         # STEP 1: USE THE IMAGE LIBRARY
         from image import *

         # STEP 2: PICK THE IMAGE
         img = Image("beach.jpg")

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






#.

    .. activecode::  ch11ex4q
        :nocodelens:

        Fix the 5 errors in the code, so that the Red pixels get the value of the green, the green get the value of blue, and the blue get the value of the red. (The cat should look purple and gray)
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
            p.setBlue(r)

            # STEP 6: UPDATE THE IMAGE
            img.updatePixel(p)

        # STEP 7: SHOW THE RESULT
        win = ImageWin(img.getWidth(),img.getHeight())
        img.draw(win)

#.

    .. activecode::  ch11ex5q
         :nocodelens:

         Fill in the missing code on lines 9, 12, and 18 below to set the red to half the original value in all pixels in the picture.
         ~~~~
         # STEP 1: USE THE IMAGE LIBRARY
         from image import *

         # STEP 2: PICK THE IMAGE
         img = Image("beach.jpg")

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




#.

    .. activecode::  ch11ex6q
        :nocodelens:

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




#.

    .. activecode::  ch11ex7q
         :nocodelens:

         Fix the indention in the code below so that it correctly increases the red in each pixel in the picture by 1.5.
         ~~~~
         # STEP 1: USE THE IMAGE LIBRARY
         from image import *

         # STEP 2: PICK THE IMAGE
         img = Image("beach.jpg")

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

#.

    .. activecode::  ch11ex8q
        :nocodelens:

        This code is supposed to make the picture completely black; however, it is taking forever when it should only take a few seconds. Fix the code (without adding anything new) so that it runs in a few seconds.
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




#.

    .. activecode::  ch11ex9q
         :nocodelens:

         Fix the code below to correctly set the green and blue values to 0.75 times their current values.
         ~~~~
         # STEP 1: USE THE IMAGE LIBRARY
         from image import *

         # STEP 2: PICK THE IMAGE
         img = Image("beach.jpg")

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


#.

    .. activecode::  ch11ex10q
        :nocodelens:

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




#.

    .. activecode::  ch11ex11q
         :nocodelens:

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




#.

    .. activecode::  ch11ex12q
        :nocodelens:

        The code below makes the whole image have a blue-green tint. Change the code so that it makes an only blue tint in the bottom left corner.
        ~~~~
        from image import *

        # CREATE AN IMAGE FROM A FILE
        img = Image("vangogh.jpg")

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


#.

    .. activecode::  ch11ex13q
         :nocodelens:

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



#.

    .. activecode::  ch11ex14q
        :nocodelens:

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




#.

    .. activecode::  ch11ex15q
         :nocodelens:

         Change the following code into a procedure to keep only the green values in all pixels in a picture.
         ~~~~
         # STEP 1: USE THE IMAGE LIBRARY
         from image import *

         # STEP 2: PICK THE IMAGE
         img = Image("beach.jpg")

         # STEP 3: LOOP THROUGH THE PIXELS
         pixels = img.getPixels();
         for p in pixels:

             # STEP 5: MODIFY THE COLOR
             p.setRed(0)
             p.setBlue(0)

             # STEP 6: UPDATE THE IMAGE
             img.updatePixel(p)

         # STEP 7: SHOW THE RESULT
         win = ImageWin(img.getWidth(),img.getHeight())
         img.draw(win)



#.

    .. activecode::  ch11ex16q
        :nocodelens:

        A grayscale picture is when the red, green, and blue value of a pixel are all equal to the average of the original pixel value. Write the code to turn the left half of an image into gray scale.
        ~~~~




#.

    .. activecode::  ch11ex17q
         :nocodelens:

         Define a procedure to negate an image.  You can negate an image by setting each color value to 255 minus the current value.
         ~~~~



#.

    .. activecode::  ch11ex18q
        :nocodelens:

        Write code that copies the top half of an image to the bottom half.
        ~~~~




#.

    .. activecode::  ch11ex19q
        :nocodelens:

        Write a function to mirror an image from left to right around a vertical line in the middle of the image.  Pass the image to the function.  Do the import, create the image, call the function, and show the result.
        ~~~~


#.

    .. activecode::  ch11ex20q
        :nocodelens:

        Write code that flips the image across a horizontal line.
        ~~~~

#.

    .. activecode::  ch11ex21q
        :nocodelens:

        Create a subclass of the Image class with three different image effect functions and use each effect on a different part of the image.  For example, you could turn the image into grayscale, keep only the green values, swap the red and green values, negate the image, etc. For example, the image shown below has one image effect on the first third of the image (negate), one on the second third (clear blue), and one on the final third (reduce red).  You will also need to create an __init__ method and a main function that creates an object of your class and calls the three functions on that object.  Be sure to call the main function.  You can use any of the images shown in chapter 18 like arch.jpg or beach.jpg.
        ~~~~
        from image import *
