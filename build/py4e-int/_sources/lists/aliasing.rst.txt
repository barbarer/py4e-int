Aliasing
--------
.. index::
    single: Aliasing
    pair: Reference; Aliasing
    single: Reference
    pair: List; Mutability
    pair: String; Immutable


If ``a`` refers to an object and you assign ``b = a``,
then both variables refer to the same object:

.. codelens:: listAliasing

    a = [1, 2, 3]
    b = a
    print(b is a)

The association of a variable with an object is called a
*reference*. In this example, there are two references to
the same object.

An object with more than one reference has more than one name, so we say
that the object is *aliased*.

If the aliased object is mutable, changes made with one alias affect the
other:

.. codelens:: listChange
    :question: What is the value of a[0] after the line with the red arrow executes?
    :breakline: 4
    :feedback: Think about what it means that b is a.
    :correct: gobals.a[0]

    a = [1, 2, 3]
    b = a
    b[0] = 17
    print(a)


Although this behavior can be useful, it is error-prone. In general, it
is safer to avoid aliasing when you are working with mutable objects.

For immutable objects like strings, aliasing is not as much of a
problem. In this example:

.. code-block:: python

   a = 'banana'
   b = 'banana'


it almost never makes a difference whether ``a`` and
``b`` refer to the same string or not.

.. mchoice:: listAlias_MC_999
    :practice: T
    :answer_a: [4, 2, 8, 6, 5]
    :answer_b: [4, 2, 8, 999, 5]
    :answer_c: [999]
    :answer_d: [4, 2, 8, 6, 5, 999]
    :correct: b
    :feedback_a: blist is not a copy of alist, it is a reference to the list alist refers to.
    :feedback_b: Yes, since alist and blist both reference the same list, changes to one also change the other.
    :feedback_c: alist has more than one element.
    :feedback_d: 999 does not get added to the end of the list.
    
    What is printed by the following statements?

    ::

      alist = [4, 2, 8, 6, 5]
      blist = alist
      blist[3] = 999
      print(alist)

.. mchoice:: listAlias_MC_party
    :answer_a: ['Jamboree', 'get-together', 'party']
    :answer_b: ['celebration']
    :answer_c: ['celebration', 'Jamboree', 'get-together', 'party']
    :answer_d: ['Jamboree', 'get-together', 'party', 'celebration']
    :correct: a
    :feedback_a: Yes, the value of y has been reassigned to the value of w.
    :feedback_b: No, that was the inital value of y, but y has changed.
    :feedback_c: No, when we assign a list to another list it does not concatenate the lists together.
    :feedback_d: No, when we assign a list to another list it does not concatenate the lists together.
    :practice: T

    What is the value of y after the following code has been evaluated:

    ::

      w = ['Jamboree', 'get-together', 'party']
      y = ['celebration']
      y = w
