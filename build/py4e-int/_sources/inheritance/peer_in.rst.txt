Peer Instruction: Inheritance Multiple Choice Questions
-------------------------------------------------------

.. mchoice:: ctp-inheritance-20_Inheritance_5
   :author: Cynthia Taylor
   :practice: T
   :answer_a: dog, cat
   :answer_b: dog, animal
   :answer_c: animal, dog
   :answer_d: dog, tail
   :answer_e: None of the above
   :correct: b
   :feedback_a: Incorrect! A Dog is not a Cat.
   :feedback_b: Correct! A Dog is an Animal where Dog is the subclass and Animal is the superclass.
   :feedback_c: Incorrect! A Dog is an Animal where Dog is the subclass and Animal is the superclass and not the other way around.
   :feedback_d: Incorrect! A Dog has a Tail. It's not a "is-a" relationship.
   :feedback_e: Incorrect! A Dog is an Animal where Dog is the subclass and Animal is the superclass.
      
   In the following pairs of words, the first is the subclass and the second is the superclass. Which of them is a correct example of inheritance?


.. mchoice:: ctp-inheritance-20_Inheritance_7
   :author: Cynthia Taylor
   :practice: T
   :answer_a: 5
   :answer_b: 10
   :answer_c: 510
   :answer_d: This will cause an error
   :answer_e: I don't know
   :correct: b
   :feedback_a: Incorrect! A Subclass only specifies what is different from its Superclass. Here B is the subclass and A is the superclass where only the "__init__" method is different them. Since "b = B(5)" has been called, the "__init__" method from B will be executed and not A. So, "x=5" will be multuplied by 2.
   :feedback_b: Correct! A Subclass only specifies what is different from its Superclass. Here B is the subclass and A is the superclass where only the "__init__" method is different them. Since "b = B(5)" has been called, the "__init__" method from B will be executed and not A. So, "x=5" will be multuplied by 2.
   :feedback_c: Incorrect! A Subclass only specifies what is different from its Superclass. Here B is the subclass and A is the superclass where only the "__init__" method is different them. Since "b = B(5)" has been called, the "__init__" method from B will be executed and not A. So, "x=5" will be multuplied by 2.
   :feedback_d: Incorrect! This will not cause an error. A Subclass only specifies what is different from its Superclass. Here B is the subclass and A is the superclass where only the "__init__" method is different them. Since "b = B(5)" has been called, the "__init__" method from B will be executed and not A. So, "x=5" will be multuplied by 2.
   :feedback_e: Incorrect! A Subclass only specifies what is different from its Superclass. Here B is the subclass and A is the superclass where only the "__init__" method is different them. Since "b = B(5)" has been called, the "__init__" method from B will be executed and not A. So, "x=5" will be multuplied by 2.
     
   What is the output of this code?

   .. code-block:: python

      class A:
         def __init__(self, x):
            self.x = x
         def __str__(self):
            return str(self.x)

      class B(A):
         def __init__(self, x):
            self.x = x * 2

      b = B(5)
      print(b)


.. mchoice:: ctp-inheritance-20_Inheritance_9
   :author: Cynthia Taylor
   :practice: T
   :answer_a: "Need to study...but...Internet!” will print twice
   :answer_b: "Need to study... but...Internet!” will print once
   :answer_c: Nothing will print
   :answer_d: This will cause an error
   :answer_e: I don't know
   :correct: b
   :feedback_a: Incorrect! There's a "study" attribute in Student but not in Person.
   :feedback_b: Correct! There's a "study" attribute in Student but not in Person.
   :feedback_c: Incorrect! There's a "study" attribute in Student but not in Person.
   :feedback_d: Incorrect! There's a "study" attribute in Student but not in Person.
   :feedback_e: Incorrect! There's a "study" attribute in Student but not in Person.


   What is the output of this code?

   .. code-block:: python

      class Person:
    
         count = 0

         def __init__(self,first="J",last="Doe"):
           self.first = first
           self.last = last
           Person.count = Person.count + 1
           
         def __str__(self):
           return self.first + " " + self.last

         def work(self):
           print("Gotta pay the bills")

         def play(self):
           print("TV time!")

         def eat(self):
           print("Woohoo, fast food!")
           
         def sleep(self):
           print("Zzzzzzzzzzzzzzzz")
        
      class Student(Person):
          
         def __init__(self,first,last,year):
           Person.__init__(self,first,last)
           self.year = year

         def sleep(self):
           print("So tired.... but... Internet!")

         def study(self):
           print("Need to study... but... Internet!")
           
         def __str__(self):
           return Person.__str__(self)+" '"+str(self.year%100)

      
      p = Person(“George”, “Williker”)
      s = Student(“Buddy”,”Bob”, "2014")
      s.study()
      p.study()



.. mchoice:: ctp-inheritance-20_Inheritance_13
   :author: Cynthia Taylor
   :practice: T
   :answer_a: 3, 1, 1
   :answer_b: 3, 1, 3
   :answer_c: 3, 3, 3
   :answer_d: 2, 1, 1
   :answer_e: I don't know
   :correct: c
   :feedback_a: Incorrect! Here "count" is a class variable which is shared by all objects of type A. It can be accessed by using A.count, A1.count, A2.count, and A3.count. "self.x" is unique for each object. So, "A1.x = 2 + 1 = 3" whereas "count" gets added by "1" thrice.
   :feedback_b: Incorrect! Here "count" is a class variable which is shared by all objects of type A. It can be accessed by using A.count, A1.count, A2.count, and A3.count. "self.x" is unique for each object. So, "A1.x = 2 + 1 = 3" whereas "count" gets added by "1" thrice.
   :feedback_c: Correct! Here "count" is a class variable which is shared by all objects of type A. It can be accessed by using A.count, A1.count, A2.count, and A3.count. "self.x" is unique for each object. So, "A1.x = 2 + 1 = 3" whereas "count" gets added by "1" thrice.
   :feedback_d: Incorrect! Here "count" is a class variable which is shared by all objects of type A. It can be accessed by using A.count, A1.count, A2.count, and A3.count. "self.x" is unique for each object. So, "A1.x = 2 + 1 = 3" whereas "count" gets added by "1" thrice.
   :feedback_e: Incorrect! Here "count" is a class variable which is shared by all objects of type A. It can be accessed by using A.count, A1.count, A2.count, and A3.count. "self.x" is unique for each object. So, "A1.x = 2 + 1 = 3" whereas "count" gets added by "1" thrice.


   What is the output of this code?

   .. code-block:: python

      class A:
         count = 0
         def __init__(self, x):
            self.x = x+1
            A.count = A.count+1

      A1 = A(2)
      A2 = A(4)
      A3 = A(5)

      print(A1.x, A1.count, A.count)