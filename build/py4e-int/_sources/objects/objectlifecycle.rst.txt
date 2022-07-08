Object lifecycle
----------------

In the previous examples, we define a class (template), use that class
to create an instance of that class (object), and then use the instance.  When
the program finishes, all of the variables are discarded.  Usually, we don't think
much about the creation and destruction of variables, but often as our objects
become more complex, we need to take some action within the object to set things
up as the object is constructed and possibly clean things up as the object is
discarded.

If we want our object to be aware of these moments of construction and destruction,
we add specially named methods to our object:


.. activecode:: partyanimal_lifecycle

   class PartyAnimal:

       def __init__(self):
           print('I am constructed')

       def party(self, x):
           self.x = x
           self.x = self.x + 1
           print('So far',self.x)

       def __del__(self, x):
           self.x = x
           print('I am destructed', self.x)

   an = PartyAnimal()
   an.party(1)
   an.party(2)
   an = 42
   print('an contains',an)



As Python constructs our object, it calls our ``__init__`` method to
give us a chance to set up some default or initial values for the object.
When Python encounters the line:

.. code-block::

   an = 42


It actually "thows our object away" so it can reuse the ``an`` variable
to store the value ``42``.  Just at the moment when our ``an`` object is
being "destroyed" our destructor code (\ ``__del__``\ ) is called.  We cannot
stop our variable from being destroyed, but we can do any necessary
cleanup right before our object no longer exists.

When developing objects, it is quite common to add a constructor to an object
to set up initial values for the object. It is relatively rare to need a
destructor for an object.

.. mchoice:: python_lifecycle
  :practice: T
  :answer_a: True
  :answer_b: False
  :correct: b
  :feedback_a: Try again! python objects do not require constructor or
               destructor functions.
  :feedback_b: Correct, constructor functions are often created to initialize
               variables but not required and python automatically destroys any
               object if its reference count changes to a zero.

  True or False? It is required to have constructor and destructor functions
  for an object.
