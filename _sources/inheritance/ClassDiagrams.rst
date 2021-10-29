Class Diagrams
--------------

The two major types of relationships between classes are *association* and *inheritance*.
The *Unified Modeling Language* (UML) is a graphical
notation that provides a standard for depicting classes and the relationships between them.
It gives software engineers a
way to record both their proposed designs, as well as the design of the
final product. Put another way, UML provides the notation for constructing
blueprints for software, and since it is widely used in both industry and
academia, it is important for you to have some familiarity with it.

UML defines notations for several different kinds of diagrams. Here, we
will introduce class diagrams, one of the most common UML diagrams. Class
diagrams can contain a number of different elements, but we will focus
on the basics: showing classes with their instance variables and methods,
and the relationships between classes.

On a UML class diagram, a class is depicted as a rectangle with three sections.
The top section contains the class name; the middle section, the instance
variables (attributes); and the bottom section, the methods (behaviors). The following diagram shows
the classes Point and LabeledPoint in an inheritance relationship where ``LabeledPoint`` is a child (subclass) of ``Point``.

.. image:: Figures/pointInheritance.png
   :alt: UML diagram showing class inheritance
   :width: 280
   :align: center

.. mchoice:: class_diagram_with_inheritance_attributes_mcq
   :practice: T
   :answer_a: x
   :answer_b: y
   :answer_c: label
   :answer_d: distanceFromOrigin
   :correct: a,b,c
   :feedback_a: LabeledPoint inherits this attribute from Point.
   :feedback_b: LabeledPoint inherits this attribute from Point.
   :feedback_c: This is an attribute of a LabeledPoint object.
   :feedback_d: LabeledPoint inherits this method (behavior) from Point.

   Which of the following are attributes of the ``LabeledPoint`` class as shown above.  Select all that apply.

The class diagram below shows an association relationship between ``Point`` and ``LabeledPoint``.

.. image:: Figures/pointAssocv3.png
   :alt: UML diagram showing association

.. mchoice:: class_diagram_with_association_attributes_mcq
   :practice: T
   :answer_a: x
   :answer_b: y
   :answer_c: label
   :answer_d: point
   :correct: c, d
   :feedback_a: This is an attribute of Point.
   :feedback_b: This is an attribute of Point.
   :feedback_c: This is an attribute of a LabeledPoint object.
   :feedback_d: This is an attribute of a LabeledPoint object.

   Which of the following are attributes of the ``LabeledPoint`` class as shown above.  Select all that apply.

.. dragndrop:: class_diagram_parts_dnd
    :practice: T
    :feedback: Read the chapter on functions and try again.
    :match_1: methods||| in the bottom section of a class diagram
    :match_2: attributes||| in the middle section of a class diagram
    :match_3: class name||| in the top section of a class diagram

    Drag each item to its location in a class diagram
