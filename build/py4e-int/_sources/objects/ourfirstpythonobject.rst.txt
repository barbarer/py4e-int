Our first Python object
-----------------------

At a basic level, an object is simply some code plus data structures that are
smaller than a whole program. Defining a function allows us to store
a bit of code and give it a name and then later invoke that code using the
name of the function.

An object can contain a number of functions (which we call *methods*\ ) as
well as data that is used by those functions.  We call data items that are
part of the object *attributes*.

We use the ``class`` keyword to define the data and code that will make up each
of the objects. The class keyword includes the name of the class and begins
an indented block of code where we include the attributes (data)
and methods (code).

.. fillintheblank:: object_contents

   An object can contain a number of functions as well as |blank| that is used by
   those functions.

   - :[Dd]ata: Correct, these data can be initialized within the class or when object
      is constructed.
     :.*: Try again!


.. fillintheblank:: keyword_object

 The |blank| keyword is used to define the data and code that will make up each of the
 objects.

 - :[c]lass: Correct, we use the keyword 'class'.
   :.*: Try again! Note that keywords are case-sensitive.

.. activecode:: partyanimal

   Run the code below.
   ~~~~
   class PartyAnimal:

       def party(self, x):
           self.x = x
           self.x += 1
           print("So far",self.x)

   an = PartyAnimal()
   an.party(1)
   an.party(2)
   an.party(3)
   PartyAnimal.party(an, 12)



Each method looks like a function, starting with the ``def`` keyword and
consisting of an indented block of code.  This object has one attribute (\ ``x``\ )
and one method (\ ``party``\ ).  The methods have a special first parameter that
we name by convention ``self``.

Just as the ``def`` keyword does not cause function code to be executed, the
``class`` keyword does not create an object.  Instead, the ``class``
keyword defines a template indicating what data and code will be contained
in each object of type ``PartyAnimal``.  The class is like a cookie cutter
and the objects created using the class are the
cookies.
You don't put frosting on the cookie cutter;
you put frosting on the cookies, and you can put different frosting
on each cookie.

.. image:: ../images/cookie_cutter_flickr_Didriks.png
   :align: center
   :alt: A Class and Two Objects



If we continue through this sample program, we see the first executable line of
code:

.. code-block:: python

   an = PartyAnimal()


This is where we instruct Python to construct (i.e., create) an *object* or
*instance* of the class ``PartyAnimal``. It looks like a function call to the
class itself. Python constructs the object with the right data and methods
and returns the object which is then assigned to the variable ``an``.
In a way this is quite similar to the following line which we have
been using all along:

.. code-block:: python

   counts = dict()


Here we instruct Python to construct an object using the ``dict`` template
(already present in Python), return the instance of dictionary,
and assign it to the variable ``counts``.

When the ``PartyAnimal`` class is used to construct an object, the variable ``an``
is used to point to that object.  We use ``an`` to access the code and data for that
particular instance of the ``PartyAnimal`` class.

Each Partyanimal object/instance contains within it a variable ``x``
and a method/function named ``party``. We call the ``party`` method in this line:

.. code-block:: python

   an.party()


When the ``party`` method is called, the first parameter (which we call by convention ``self``\ )
points to the particular instance of the PartyAnimal object that ``party`` is called from.
Within the ``party`` method, we see the line:

.. code-block:: python

   self.x = self.x + 1


This syntax using the *dot* operator is saying 'the x within self.' Each time ``party()`` is
called, the internal ``x`` value is incremented by 1 and the value is printed out.

The following line is another way to call the ``party`` method within the ``an``
object:

.. code-block:: python

   PartyAnimal.party(an)


In this variation, we access the code from within the class and explicitly
pass the object pointer ``an`` as the first parameter (i.e., ``self`` within the method).
You can think of ``an.party()`` as shorthand for the above line.

When the program executes, it produces the following output:

.. code-block::

   So far 1
   So far 2
   So far 3
   So far 4


The object is constructed, and the ``party`` method is called four times, both
incrementing and printing the value for ``x`` within the ``an`` object.
