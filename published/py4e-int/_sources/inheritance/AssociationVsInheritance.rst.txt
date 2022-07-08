Association vs. Inheritance
-----------------------------

Now you have seen two ways for a class to reuse code in another class. So,
is one better than the other? When do you use inheritance, and when is
association the better choice?

Although the subject of this chapter is inheritance, the truth is that
association is usually a better choice than inheritance.
Perhaps 95% of cases where you are debating about choosing inheritance or
association, you should choose association. It's hard to go wrong with
association, but you can get into all kinds of trouble if you go with
inheritance and inheritance is not an appropriate choice.

So, it's easier to address the question of which technique to use by
determining when inheritance is an appropriate choice.
Inheritance is appropriate when the proposed child class (the one reusing
the functionality in its parent) represents a *specialization* of its parent.
You can test this by filling in the names of the child and parent class in the following sentence.

**(child class) is a type of (parent class).**

Let's try an example. Using the ``LabeledPoint`` example from the previous
section: "``LabeledPoint`` is a type of ``Point``." Since a
``LabeledPoint`` is a specific type of ``Point``--a point that has a label--that
sentence makes sense. ``LabeledPoint`` is a specialization of ``Point``, and
inheritance is an appropriate choice. You can also use the substitution test.
Inheritance is appropriate if a child object can substitute for a parent object.
If I ask for a ``Point`` object and you give me a ``LabeledPoint`` object is that okay?
Yes, they both are points.

.. mchoice:: assocVsInher_mcq1
   :practice: T
   :answer_a: Card and Deck
   :answer_b: Car and ElectricCar
   :answer_c: Person and Student
   :answer_d: Address and Person
   :correct: b,c
   :feedback_a: A deck has cards and is not a type of card.
   :feedback_b: An electric car is a type of car.
   :feedback_c: A student is a type of person.
   :feedback_d: A person has an address or several addresses.

   Which of the following should use inheritance?  Select all that apply.

Now, suppose you wanted to define a class that represents a rectangle.
Like a ``Point``, a ``Rectangle`` would need to keep track of an x and y location
to determine its position, and might also have a width and a height.
You're thinking about defining ``Rectangle`` to inherit from ``Point``, so that it
reuses all of the functionality in ``Point`` (like knowing its position and calculating its
distance from origin), and adding just the two new instance variables it
needs for its width and height. From a pure code reuse standpoint,
inheritance seems plausible. But wait--let's apply the "is-a-type-of" linguistic test.
Filling in the blanks in the sentence template above, we get: "Rectangle
is a type of Point." Most people would feel there is something wrong with
that statement.  A rectangle *has* a point, but is not itself
a point. Thus, it fails the linguistic test; association is the better
choice here.  The test for association is also called a *has-a* relationship.
You can test this by filling in the names of the two classes in the following sentence.

**(class one) has a (class two).**

.. mchoice:: assocVsInher_mcq2
   :practice: T
   :answer_a: Point and Triangle
   :answer_b: Shape and Triangle
   :answer_c: Account and SavingsAccount
   :answer_d: Patient and Doctor
   :correct: a, d
   :feedback_a: A triangle has a point or several points.
   :feedback_b: A triangle is a type of shape.
   :feedback_c: A savings account is a type of account.
   :feedback_d: A doctor has a patient (or several).  

   Which of the following should use association?  Select all that apply.

So what happens if you decide to ignore the linguistic test and go ahead
and make ``Rectangle`` inherit from ``Point``? In some cases, you won't run into
trouble right away. Often, the difficulties don't start to crop up until
later, when you decide to add more methods to ``Point`` (the parent) that
aren't appropriate for Rectangle (the child). This leads to a program
that is confusing to understand and contains bugs that occur when
methods intended for ``Point`` are invoked on ``Rectangle`` instances by
mistake. Also, since inheritance is the strongest form of relationship
between classes, changes to code in a parent class have a stronger
likelihood of breaking code in its children than would tend to occur
if composition were used.

Inheritance is a powerful feature and, when used appropriately, a
terrific way to reuse code. But, like most power tools, it can cut
you up pretty badly if you don't know what you are doing.
Use it with caution and respect.

.. mchoice:: assocVsInher_mcq3
   :practice: T
   :answer_a: If you aren't sure of the relationship use inheritance
   :answer_b: Test for inheritance using *is-a-type-of*
   :answer_c: Test for association using *has-a*
   :answer_d: Test for association using substitution (can you substitute one class for another)
   :correct: a, d
   :feedback_a: If you aren't sure use association
   :feedback_b: The test for inheritance is *is-a-type-of*
   :feedback_c: The test for association is *has-a*
   :feedback_d: Use substitution to test for inheritance

   Which of the following are *false*? Select all that apply.
