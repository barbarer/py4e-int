..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: state of an object

Objects Revisited
-----------------

In Python, every value is actually an object. Whether it be a turtle, a list, or even an integer, they are all objects.  Programs manipulate those objects either by performing
computation with them or by asking them to perform methods.  To be more specific, we say that an object has
a **state** (also called attributes or properties) and a collection of **methods** (also called behavior) that it can perform.  The state of an object represents those things
that the object knows about itself.  For example, as we have seen with turtle objects, each turtle has a state consisting
of the turtle's position, its color, its heading and so on.  Each turtle also has the ability to go forward, backward, or turn right or left.  Individual turtles are different in that even though they are
all turtles, they differ in the specific values of the individual state attributes (maybe they are in a different location or have a different heading).

.. image:: Figures/objectpic1.png
   :alt: Simple object has state and methods


.. mchoice:: class-basics-turtle-object-attributes
    :practice: T
    :answer_a: pos (x and y position)
    :answer_b: pen color
    :answer_c: forward
    :answer_d: left
    :correct: a, b
    :feedback_a: Turtle objects know their position.
    :feedback_b: Turtle objects know their pen color.
    :feedback_c: This is a behavior (something the object can do) not an attribute (data about itself).
    :feedback_d: This is a behavior (something the object can do) not an attribute (data about itself).

    Which of the following is/are attributes (state) for objects of the ``Turtle`` class?
