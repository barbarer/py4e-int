..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


.. setup for automatic question numbering.

.. 	qnum::
	:start: 1
	:prefix: 5-9-

Write Code Questions
--------------------

#.

    .. tabbed:: ch5ex1t

        .. tab:: Question

            .. activecode:: ch5ex1q
                :nocodelens:

                There are 3 syntax errors in the following code.  Fix it to work correctly without errors.
                ~~~~
                from turtle import *
                space = screen()
                alex = Turtle
                alex.Forward(150)

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: teachercsp_ch5ex1q

#.

    .. tabbed:: ch5ex2t

        .. tab:: Question


            .. activecode::  ch5ex2q
                :nocodelens:

                The code below is correct, but the lines are in the wrong order. Fix it so that it runs properly.
                ~~~~
                alex = Turtle()
                alex.forward(150)
                from turtle import *
                alex.left(90)
                space = Screen()
                alex.forward(75)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex2q

#.

    .. tabbed:: ch5ex3t

        .. tab:: Question

           .. activecode::  ch5ex3q
                :nocodelens:

                The following program is missing things on lines 1, 2, and 3.  Add the missing parts.
                ~~~~
                from
                space =
                alex =
                alex.forward(150)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex3q

#.

    .. tabbed:: ch5ex4t

        .. tab:: Question

            .. activecode::  ch5ex4q
                :nocodelens:

                Rearrange the code so it draws a square.
                ~~~~
                from turtle import *
                franklin = Turtle()
                space = Screen()
                franklin.left(90)
                franklin.forward(100)
                franklin.forward(100)
                franklin.left(90)
                franklin.forward(100)
                franklin.left(90)
                franklin.forward(100)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex4q

#.

    .. tabbed:: ch5ex5t

        .. tab:: Question

           .. activecode::  ch5ex5q
                :nocodelens:

                The following code has 3 syntax errors.  Fix the errors so that the code runs.
                ~~~~
                from turtle import *
                space = Screen()
                alex = turtle()
                alex.Forward(150)
                alex.turn(90)
                alex.forward(75)

        .. tab:: Discussion

            .. disqus::
                :shortname: cslearn4u
                :identifier: teachercsp_ch5ex5q

#.

    .. tabbed:: ch5ex6t

        .. tab:: Question

            .. activecode::  ch5ex6q
                :nocodelens:

                Fix the 6 errors in the following code.
                ~~~~
                from turtle import
                space = Screen
                john = turtle()
                john.Forward(100)
                john.Left(120)
                john.forward(100)
                john.left(120)
                john.Forward(100)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex6q

#.

    .. tabbed:: ch5ex7t

        .. tab:: Question

           .. activecode::  ch5ex7q
                :nocodelens:

                The following code draws two lines of a rectangle.  Add code to finish drawing the rectangle.
                ~~~~
                from turtle import *
                space = Screen()
                alex = Turtle()
                alex.forward(150)
                alex.left(90)
                alex.forward(75)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex7q

#.

    .. tabbed:: ch5ex8t

        .. tab:: Question

            .. activecode::  ch5ex8q
                :nocodelens:

                You need to fix or add 4 things so that the code runs.
                ~~~~
                space = Screen()
                hi = Turtle()
                hi.color(red)
                hi.Forward("50")
                hi.right(90)
                hi.color("BLUE")
                hi.forward(50)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex8q

#.

    .. tabbed:: ch5ex9t

        .. tab:: Question

           .. activecode::  ch5ex9q
                :nocodelens:

                The following code is missing 3 lines that do the required set-up.  Add them so that the code runs.
                ~~~~
                alex.forward(150)
                alex.left(90)
                alex.forward(75)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex9q

#.

    .. tabbed:: ch5ex10t

        .. tab:: Question

            .. activecode::  ch5ex10q
                :nocodelens:

                Finish the code so that it draws an equilateral triangle.
                ~~~~
                from turtle import *
                space = Screen()
                alex = Turtle()
                alex.forward(150)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex10q

#.

    .. tabbed:: ch5ex11t

        .. tab:: Question

           .. activecode::  ch5ex11q
                :nocodelens:

                Create a drawing that includes penup, pendown, and pensize.
                ~~~~


        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex11q

#.

    .. tabbed:: ch5ex12t

        .. tab:: Question

            .. activecode::  ch5ex12q
                :nocodelens:

                Fix the 5 errors.
                ~~~~
                From turtle Import *
                space = screen()
                bob = turtle
                Bob.forward("100")

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex12q

#.

    .. tabbed:: ch5ex13t

        .. tab:: Question

           .. activecode::  ch5ex13q
                :nocodelens:

                Create a drawing with at least 3 colors and using at least 3 turtles.
                ~~~~

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex13q

#.

    .. tabbed:: ch5ex14t

        .. tab:: Question

            .. activecode::  ch5ex14q
                :nocodelens:

                Fix the errors.
                ~~~~
                from turtle import *
                jack = Screen()
                jill = Turtle()
                jill.sizepen(10)
                jill.forward(10)
                jack.sizepen(15)
                jack.forward(10)

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex14q

#.

    .. tabbed:: ch5ex15t

        .. tab:: Question

           .. activecode::  ch5ex15q
                :nocodelens:

                Write code below to draw a diamond shape.
                ~~~~

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex15q

#.

    .. tabbed:: ch5ex16t

        .. tab:: Question

            .. activecode::  ch5ex16q
                :nocodelens:

                Write code that spells CS in block letters (it will look more like C5).
                ~~~~

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex16q

#.

    .. tabbed:: ch5ex17t

        .. tab:: Question

           .. image:: Figures/star.png

           .. activecode::  ch5ex17q
                :nocodelens:

                Write code below to draw a star like this picture.
                ~~~~

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex17q

#.

    .. tabbed:: ch5ex18t

        .. tab:: Question

            .. activecode::  ch5ex18q
                :nocodelens:

                Write code to draw a "V" starting from the center with each side a different color and only turning the turtle twice and no using penup or pendown.
                ~~~~

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex18q

#.

    .. tabbed:: ch5ex19t

        .. tab:: Question

           .. activecode::  ch5ex19q
               :nocodelens:

               Write code below to draw at least one of your initials in block style.
               ~~~~

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex19q

#.

    .. tabbed:: ch5ex20t

        .. tab:: Question

            .. activecode::  ch5ex20q
                :nocodelens:

                Use 4 turtles and 4 colors to draw a big plus sign with each segment
                of the plus sign being a different color.
                ~~~~

        .. tab:: Discussion

            .. disqus::
                :shortname: teachercsp
                :identifier: teachercsp_ch5ex20q
