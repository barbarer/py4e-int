Objects and values
------------------

..	index::
    single: Object
	  single: Value
	  pair: Operator; Is
	  single: Aliasing
    single: Is
    single: Equivalence
    single: Identity

If we execute these assignment statements:

.. code-block:: python

   a = 'banana'
   b = 'banana'

we know that ``a`` and ``b`` both refer to a string,
but we don't know whether they refer to the *same* string. There are two
possible states:

.. figure:: ../images/list1.svg
   :alt: Variables and Objects

In one case, ``a`` and ``b`` refer to two different
objects that have the same value. In the second case, they refer to the
same object.

To check whether two variables refer to the same object, you can use the
``is`` operator.

.. activecode:: listStringIs
    :caption: Using is to compare strings.

    a = 'banana'
    b = 'banana'
    print(a is b)

.. fillintheblank:: listOb_fill1
    :practice: T

    What operator can be used to see if two variables refer to the same object?

    - :[Ii]s: The is operator will check if two variables refer to the same object.
      :.*: Try again.

In this example, Python only created one string object, and both
``a`` and ``b`` refer to it.

But when you create two lists, you get two objects:

.. activecode:: listIs
    :caption: Using is to compare list objects.

    a = [1, 2, 3]
    b = [1, 2, 3]
    print(a is b)

In this case we would say that the two lists are
*equivalent*, because they have the same elements, but
not *identical*, because they are not the same object. If
two objects are identical, they are also equivalent, but if they are
equivalent, they are not necessarily identical.

.. fillintheblank:: listOb_fill2
    :practice: T

    When two lists have the same elements, but are different objects we say they are __________.

    - :[Ee]quivalent: These lists are equivalent because they look the same, but actually refer to different objects.
      :[Ii]dentical: In order for lists to be identical, they must refer to the same object. For example, a = [1, 2, 3] and b = a
      :.*: Try again.

Until now, we have been using "object" and "value" interchangeably, but
it is more precise to say that an object has a value. If you execute
``a = [1,2,3]``, ``a`` refers to a list object whose
value is a particular sequence of elements. If another list has the same
elements, we would say it has the same value.

.. dragndrop:: listOb_dnd
    :practice: T
    :feedback: Try again.
    :match_1: Equivalent||| a = [1, 2, 3] b = [1, 2, 3]
    :match_2: Identical||| a = [1, 2, 3] b = a

    Match the terms to the code examples.
