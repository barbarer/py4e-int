Classes as types
----------------


As we have seen, in Python all variables have a type.  We can use the built-in
``dir`` function to examine the capabilities of a variable.  We can also use ``type`` and
``dir`` with the classes that we create.

.. activecode:: partyanimal_types
    :coach:

    class PartyAnimal:
        x = 0

        def party(self) :
            self.x = self.x + 1
            print("So far",self.x)

    an = PartyAnimal()
    print ("Type", type(an))
    print ("Dir ", dir(an))
    print ("Type", type(an))
    print ("Type", type(an.party))



You can see that using the ``class`` keyword, we have created a new type.
From the ``dir`` output, you can see both the ``x`` integer attribute and the ``party``
method are available in the object.
