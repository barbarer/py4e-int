Exercises
---------

.. mchoice:: inheritance_mchoice1
    :practice: T
    :answer_a: from party import PartyAnimal
    :answer_b: class CricketFan(PartyAnimal)
    :answer_c:  an = PartyAnimal()
    :correct: b
    :feedback_a: This is a necessary  step to import PartyAnimal class but it is not inherited by CricketFan class.
    :feedback_b: Correct! PartyAnimal class is inherited by CricketFan in the class definition.
    :feedback_c: This only creates an instance of the PartyAnimal claass.

    Which of the follwing inherits the PartyAnimal class.

.. clickablearea:: objects_click_name
   :practice: T
   :question: Click the elements where instances are created correctly.
   :iscode:
   :feedback:

   :click-incorrect:puppy:endclick: = :click-correct:Dog("Jamie"):endclick:
   :click-incorrect:pupper:endclick: =:click-incorrect: new Dog("Jamie"):endclick:
   :click-incorrect:jamie:endclick: = :click-correct:Person():endclick:

.. mchoice:: multipleinstances_code_output
  :practice: T 
  :answer_a: Sally 
  :answer_b: Louise
  :answer_c: Sally Louise
  :answer_d: person1
  :correct: a 
  :feedback_a: This prints the 'name' of the person1 instance.
  :feedback_b: 'Louise' is the 'name' of person2 but we are calling the person1 instance.
  :feedback_c: person1 and person2 are two different instances.
  :feedback_d: The output is not the name of the instace.

  What is the output of the following code?
  ::

    class People():
        name = ''

        def __init__(self, name):
          self.name = name
        
        def namePrint(self):
          print("Name: " + self.name)

      person1 = People("Sally")
      person2 = People("Louise")
      person1.namePrint()

.. mchoice:: multipleinstances_mchoice1
    :practice: T
    :answer_a: person1 and person2 are two different instances of the People class.
    :answer_b: The __init__ class is used to create instances and set initial values for its attributes.
    :answer_c: As we are not updating any values, 'self' is not needed in def namePrint(self):
    :answer_d: person2 cannot access the 'name' of person1.
    :correct: c
    :feedback_a: Since two different objects were created, this is correct.
    :feedback_b: __init__ is an optional method in classes that is used to set initial values for objects.
    :feedback_c: 'self' is used to represnt the current instace of the class.
    :feedback_d: Since they are two different instaces, they cannot access each other and have different initial values too

    Which of the following statements is incorrect about the following code?
    ::

      class People():
        name = ''

        def __init__(self, name):
          self.name = name
        
        def namePrint(self):
          print("Name: " + self.name)

      person1 = People("Sally")
      person2 = People("Louise")
      person1.namePrint()


.. mchoice:: objectoriented_subdividing
    :practice: T
    :answer_a: One of the benifits of object-oriented programming is that it can hide complexity.
    :answer_b: An object class contains a number of functions as well as the data that is used by those functions.
    :answer_c: Constructor methods are required to initialize an object and destrcutor methods are required to destroy the
               object when no longer required.
    :answer_d: A powerful feature of object-oriented programming is the ability to create a new class by extending an existing class.
    :correct: c
    :feedback_a: This is true, while using an object, we need to know how to use the object class but
                 not how it works internally.
    :feedback_b: This is true  as an object can contain a number of functions as well as data that is used by those functions.
    :feedback_c: This is false, a construtor is optional can be used to set initial values for an object and  python automatically
                 destroys any object if its reference count changes to a zero without needing a destructor.
    :feedback_d: This is true, we can extend a 'parent' class to create a new 'child' class and the new class has access to its functions
                 and can override them if needed.

    Which of the following statements is not true about object-oriented programming?



.. fillintheblank:: objectoriented_keyword
    
    The _________ keyword defines a template indicating what data and code will be contained in each object of type.

    - :class: Correct, the class keyword defines an object but does not create the object.
      :.*: Try again! Note that keywords are case-sensitive.

.. fillintheblank:: word_output
  
   _________ is a convention that is used to represent the instance of a class and to access the attributes and methods of the class. 

  - :[s]elf: Correct, 'self' is not a keyword but a convention that is used for this purpose
    :.*: Try again! 

   

.. mchoice:: object_oriented_output
    :practice: T
    :answer_a: Grass type pokemon name is Bulbasaur
               Pokemon name is Charizard and type is Fire 
    :answer_b: Pokemon name is Bulbasaur and type is Grass 
               Pokemon name is Charizard and type is Fire
    :answer_c: Grass type pokemon name is Bulbasaur
               Grass type pokemon name is Charizard
    :answer_d: Error because the extending class has a stringPokemon() function
               which already exists.
    :correct: a
    :feedback_a: A child class can inherit functions from parent class and also override them.
    :feedback_b: The stringPokemon() functions is changed inside the GrassType class.
    :feedback_c: The stringPokemon() functions is only changed for GrassType class but remains unchanged
                 in the original class.
    :feedback_d:  A class inherits functions from another class and override them in any way. Only the 
                  construtor class cannot be changed.

    What is the output of the following code?

    ::
     
      class Pokemon():
        name = ''
        type = ''

        def __init__(self, name, type):
            self.name = name
            self.type = type

        def stringPokemon(self):
            print("Pokemon name is {} and type is {}".format(self.name, self.type))
      
      class GrassType(Pokemon):
        
        # overrides the stringPokemon() function on 'Pokemon' class
        def stringPokemon(self): 
            print("Grass type pokemon name is {}".format(self.name))
            
     poke1 = GrassType('Bulbasaur', 'Grass')
     poke1.stringPokemon
     poke1.stringPokemon()
     poke2 = Pokemon('Charizard', 'Fire')
     poke2.stringPokemon
     poke2.stringPokemon()

.. mchoice:: tf_object_oriented
    :practice: T
    :answer_a: True 
    :answer_b: False 
    :correct: b
    :feedback_a: The child class does not need access to the all the inner workings in parent class.
    :feedback_b: The child class knows how to use the parent class and its functions but not its
                 data and the inner workings.

    True or False? In order to extend a class, the new class should have access to all the data and inner workings of
    the parent class.

.. clickablearea:: objects_correct
    :practice: T
    :question: Click the incorrect parts in the following code.
    :iscode:
    :feedback:

    :click-correct:Class:endclick::click-incorrect: Book::endclick:

            :click-correct:Self.title:endclick::click-incorrect: = '':endclick:
            author = ''

            :click-correct:def __init__(title, author):endclick:
                :click-correct:title:endclick::click-incorrect: = title:endclick:
                :click-correct:author:endclick::click-incorrect: = author:endclick:
                print("You book is " + :click-correct:title:endclick: + " by author " + :click-correct:author:endclick:)
        
        :click-incorrect:book = :endclick::click-correct:new:endclick::click-incorrect: Book("The Odyssey", "Homer"):endclick:

