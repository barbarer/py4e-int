List arguments
--------------

.. index::
    pair: Argument; List
    single: Argument
    single: Reference
    single: Parameter
    pair: Method; Append
    pair: List; Concatenate
    pair: Concatenation; List
    pair: Operator; Slice
    pair: Slice; Operator
    pair: Append; Method


When you pass a list to a function, the function gets a reference to the
list. If the function modifies a list parameter, the caller sees the
change. For example, ``delete_head`` removes the first element from a
list and is used like this:

.. activecode:: listArgument
    :caption: Using a list as an argument in a function.

    def delete_head(t):
        del t[0]

    letters = ['a', 'b', 'c']
    delete_head(letters)
    print(letters)

The parameter ``t`` and the variable ``letters`` are
aliases for the same object.

.. mchoice:: listArg_MC_del
    :practice: T
    :answer_a: ['a', 'b']
    :answer_b: ['b']
    :correct: b
    :feedback_a: myfun alters the state of the list object by removing the value at slot 0.
    :feedback_b: myfun alters the state of the list object by removing the value at slot 0.

    What would print when the following code executes?

    ::

      def myfun(lst):
          del lst[0]

      mylist = ['a', 'b']
      myfun(mylist)
      print(mylist)

It is important to distinguish between operations that modify lists and
operations that create new lists. For example, the ``append``
method modifies a list, but the ``+`` operator creates a new
list:

.. activecode:: listArgumentAppend
    :caption: Using append method and the + operator with lists.

    t1 = [1, 2]
    t2 = t1.append(3)
    print(t1)
    print(t2)

    t3 = t1 + [3]
    print(t3)
    print(t2 is t3)


This difference is important when you write functions that are supposed
to modify lists. For example, this function *does not* delete the head
of a list:

.. code-block:: python

   def bad_delete_head(t):
       t = t[1:]              # WRONG!


The slice operator creates a new list and the assignment makes
``t`` refer to it, but none of that has any effect on the list
that was passed as an argument.

.. mchoice:: listArg_MC_slice
    :practice: T
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: The slice operator creates a new list called "t", but that will not affect the list it was passed.
    :feedback_b: The slice operator creates a new list called "t", so it will not modify the original list.

    True or False. The following code block will **not** remove the first element from the list argument.

    ::

      def deleting_first(lst):
          lst = lst[1:]

An alternative is to write a function that creates and returns a new
list. For example, ``tail`` returns all but the first element
of a list and leaves the original list unmodified. Here's how it is used:

.. activecode:: listArgumentTail
    :caption: Using the function tail to return all but the first element of a list.

    def tail(t):
        return t[1:]

    letters = ['a', 'b', 'c']
    rest = tail(letters)
    print(rest)

.. mchoice:: listArg_MC_modify
    :practice: T
    :answer_a: +
    :answer_b: append
    :answer_c: slice
    :correct: b
    :feedback_a: Using the + operator will create a new list, not modify the original.
    :feedback_b: The append method modifies the original list, rather than creating a new one.
    :feedback_c: The slice operator creates a new list, rather than modifying the original.

    Which of the following list methods or operators will **not** create a new list when used.
