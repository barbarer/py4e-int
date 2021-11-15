Inheritance
-----------

Another powerful feature of object-oriented programming is the ability to
create a new class by extending an existing class.  When extending a class,
we call the original class the *parent class* and the new class the
*child class*.

.. fillintheblank:: inheritance_extendclass

   A new class can be created by extending an exisiting class. When extending a class,
   we call the original class the |blank| class and the new class the |blank| class.

   - :[Pp]arent: Yes, the original class is the 'parent' class.
     :.*: Try again!
   - :[Cc]hild: Yes, the extending class is the 'child' class.
     :.*: Try again!

For this example, we move our ``PartyAnimal`` class into its own file.
Then, we can 'import' the ``PartyAnimal`` class in a new file and extend it, as follows:

.. datafile:: party.py
    :fromfile: party.py
    :hide:

.. activecode:: inherit_cricketfan
    :language: python3
    :available_files: party.py

    from party import PartyAnimal

    class CricketFan(PartyAnimal):
        points = 0
        def six(self):
            self.points = self.points + 6
            self.party()
            print(self.name,"points",self.points)

    s = PartyAnimal("Sally")
    s.party()
    j = CricketFan("Jim")
    j.party()
    j.six()
    print(dir(j))

When we define the ``CricketFan`` class, we indicate that we are extending
the ``PartyAnimal`` class.  This means that all of the variables (\ ``x``\ ) and methods
(\ ``party``\ ) from the ``PartyAnimal`` class are *inherited* by the ``CricketFan`` class.
For example, within the ``six`` method in the ``CricketFan`` class, we
call the ``party`` method from the ``PartyAnimal`` class.

As the program executes, we create ``s`` and ``j`` as independent instances
of ``PartyAnimal`` and ``CricketFan``. The ``j`` object has additional capabilities beyond
the ``s`` object.

.. code-block::

   Sally constructed
   Sally party count 1
   Jim constructed
   Jim party count 1
   Jim party count 2
   Jim points 6
   ['__class__', '__delattr__', ... '__weakref__',
   'name', 'party', 'points', 'six', 'x']


In the ``dir`` output for the ``j`` object (instance of the ``CricketFan`` class), we see
that it has the attributes and methods of the parent class, as well as the attributes
and methods that were added when the class was extended to create the ``CricketFan`` class.
