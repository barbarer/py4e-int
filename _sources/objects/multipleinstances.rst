Multiple instances
------------------

So far, we have defined a class, constructed a single object, used
that object, and then thrown the object away. However, the real power
in object-oriented programming happens when we construct multiple instances
of our class.

When we construct multiple objects from our class, we might want to set
up different initial values for each of the objects. We can
pass data to the constructors to give each object a different initial
value:

.. codelens:: partyanimal_multipleinstances
    :showoutput:

    class PartyAnimal:

        def __init__(self, nam):
            self.name = nam
            print(self.name,'constructed')

        def party(self, x) :
            self.x = x
            self.x = self.x + 1
            print(self.name,'party count',self.x)

    s = PartyAnimal('Sally')
    j = PartyAnimal('Jim')

    s.party(0)
    j.party(0)
    s.party(1)

The constructor has both a ``self`` parameter that points to the object instance
and additional parameters that are passed into the constructor as the
object is constructed:

.. code-block::

   s = PartyAnimal('Sally')


Within the constructor, the second line copies the parameter (\ ``nam``\ ) that is
passed into the ``name`` attribute within the object instance.

.. code-block::

   self.name = nam


The output of the program shows that each of the objects (\ ``s`` and ``j``\ ) contain their own
independent copies of ``x`` and ``nam``\ :

.. code-block::

   Sally constructed
   Sally party count 1
   Jim constructed
   Jim party count 1
   Sally party count 2

.. fillintheblank:: multipleinstances

  When using multiple instances, we can set different initial values for the instances by using a
  |blank|.

  - :[Cc]onstructor: Yes, constructors can be used to initialize objects with initial values.
    :.*: Try again!
