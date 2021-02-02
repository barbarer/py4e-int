Questions for Experiment B
-------------------------------

Try to solve the following mixed up code problems. You can use the "Help Me" button
to make the problem easier if you have made at least three attempts to solve the
problem.  After you solve each problem, please answer the poll as well.

.. parsonsprob:: sum13_w6d_pp_exB
   :adaptive:
   :numbered: left

   Put the code blocks in order to return the sum of the numbers in the list ``nums``, returning ``0`` for an empty list. Except the number 13 is very unlucky, so  it does not count and a number that comes immediately after a 13 also does not count.  For example, ``sum13([13,1,2])`` returns ``2`` and ``sum13([1,13])`` returns ``1``.
   -----
   def sum_13(nums):
   =====
       index = 0
       sum = 0
   =====
       while index < len(nums):
   =====
       while index < len(nums) - 1: #paired
   =====
           if nums[index] == 13:
   =====
           if nums[index] = 13: #paired
   =====
               index += 2
   =====
           else:
   =====
               sum += nums[index]
   =====
               sum += nums #paired
   =====
               index += 1
   =====
       return sum



.. parsonsprob:: list_multiples_w3d_pp_exB
   :adaptive:
   :numbered: left

   Put the code blocks in order to create a function that takes two numbers as arguments (``num``, ``length``) and returns a list of multiples of ``num`` [``num * 1``, ``num * 2``, etc] until the list contains ``length`` elements. For example, ``list_of_multiples(8, 4)`` returns ``[8, 16, 24, 32]`` and ``list_of_multiples (11, 8)`` returns ``[11, 22, 33, 44, 55, 66, 77, 88]``.
   -----
   def list_of_multiples (num, length):
   =====
       count = 1
       a_list = []
   =====
       while count <= length:
   =====
       while count < length: #paired
   =====
           a_list.append(num * count)
   =====
           a_list.append(num + count) #paired
   =====
           count += 1
   =====
       return a_list



.. parsonsprob:: ibeforee_pp_wd_exB
   :adaptive:
   :numbered: left

   Put the code in order to define a function called grammarly that checks whether a word is spelled correctly using the rule "i before e except after c". For example, it should return ``False`` for ``grammarly('beleive')`` since the 'ei' does not follow a 'c', it should return ``True`` for ``grammarly ('receive')`` since the 'ei' follows a 'c'.
   -----
   def grammarly(word):
   =====
       index = 0
   =====
       index = 1 #paired
   =====
       while index < len(word) - 1:
   =====
       while index in word: #paired
   =====
           vowel_combo = word[index] + word[index + 1]
   =====
           vowel_combo = word[index] + [index - 1] #paired
   =====
           if vowel_combo == "ei" and \
           index > 0 and word[index - 1] == "c":
   =====
               return True
   =====
           elif vowel_combo == "ei":
   =====
               return False
   =====
           index += 1
   =====
           index -= 1 #paired
   =====
       return True



.. parsonsprob:: remove_target_pp_wd_exB
   :adaptive:
   :numbered: left

   Put the code blocks in order to remove all values from a list of numbers equal to the passed ``target`` value and return the modified list.  For example,
   ``remove_target([5, 2, 5])`` returns ``[2]``.
   -----
   def remove_target(nums, target):
   =====
       index = 0
   =====
       index = 1 #paired
   =====
       while index < len(nums):
   =====
       while index < nums: #paired
   =====
           if nums[index] == target:
   =====
           if nums[index] = target: #paired
   =====
               nums.pop(index)
   =====
           else:
   =====
               index += 1
   =====
               index -= 1 #paired
   =====
       return nums
