Multiple Choice Questions
--------------------------

.. mchoice:: viz_MC1
    :practice: T
    :answer_a: import matplot as plt
    :answer_b: import matplotlib.pyplot as plt
    :answer_c: from matplotlib import pyplot as plt
    :answer_d: import matplotlib pyplot as plt
    :correct: b
    :feedback_a: Incorrect! matplot is not a library.
    :feedback_b: Correct! This is the correct way to import the library.
    :feedback_c: Incorrect! This is not the correct way to import.
    :feedback_d: Incorrect! There is a period between matplotlib and pyplot instead of space.

    What is the standard way to import matplotlib's pyplot library in python?


.. mchoice:: viz_MC2
    :practice: T
    :answer_a: plot(x, y)
    :answer_b: plt.plot(x, y)
    :answer_c: plt(x, y)
    :answer_d: plot.plt(x, y)
    :correct: b
    :feedback_a: Incorrect!
    :feedback_b: Correct! This is the correct way.
    :feedback_c: Incorrect!
    :feedback_d: Incorrect!

    What is the correct way to plot a line graph?


.. mchoice:: viz_MC3
    :practice: T
    :answer_a: plt.set.title("Title")
    :answer_b: plt.Title("Title")
    :answer_c: plt.title("Title")
    :answer_d: plt.set_title("Title")
    :correct: c
    :feedback_a: Incorrect! plt has no function set.
    :feedback_b: Incorrect! Title needs to be lowercased.
    :feedback_c: Correct! This is the correct way to set a title.
    :feedback_d: Incorrect! plt has no function set_title.

    How do you set a title for a plot using matplotlib library?



.. mchoice:: viz_MC4
    :practice: T
    :answer_a: ax.set_title("Axis Title")
    :answer_b: ax.title("Axis Title")
    :answer_c: ax.axis_title("Axis Title")
    :answer_d: ax.setTitle("Axis Title")
    :correct: a
    :feedback_a: Correct! This is the correct way to set axis title.
    :feedback_b: Incorrect! ax has no method title.
    :feedback_c: Incorrect! ax has no method axis_title.
    :feedback_d: Incorrect! ax has no method setTitle.

    How do you set a title for the axis using matplotlib library?



.. mchoice:: viz_MC5
    :practice: T
    :answer_a: ax1 = fig.add_subplot(123)
    :answer_b: ax1 = fig.add_subplot(231)
    :answer_c: ax1 = fig.add_subplot(321)
    :answer_d: ax1 = fig.add_subplot(3*2)
    :correct: b
    :feedback_a: Incorrect! This means row 1, column 2, and plot 3, which is not possible in a 1 * 2 figure.
    :feedback_b: Correct! This is the correct way to create a subplot for this case.
    :feedback_c: Incorrect! This means row 3, column 2 and plot 1. Row and column need to be switched.
    :feedback_d: Incorrect! This is incorrect way to create subplot.

    How to create a subplot in a figure with three plots side by side and two rows of subplots?



.. mchoice:: viz_MC6
    :practice: T
    :answer_a: plt.bar_hor(x, y)
    :answer_b: plt.hbar(x, y)
    :answer_c: plt.barh(x, y)
    :answer_d: plt.bar(x, y)
    :correct: c
    :feedback_a: Incorrect! There is no function bar_hor.
    :feedback_b: Incorrect! There is no function hbar.
    :feedback_c: Correct! This is the correct way to create a horizontal bar.
    :feedback_d: Incorrect! This is to create a vertical bar.

    What is the function for creating a horizontal bar plot?




.. mchoice:: viz_MC7
   :practice: T
   :answer_a: ax.plot(x, y, 'red', marker = 'square')
   :answer_b: ax.plot(x, y, 'R-', marker = 'sqr')
   :answer_c: ax.plot(x, y, 'r', 's')
   :answer_d: ax.plot(x, y, 'r-', marker = 's')
   :correct: d
   :feedback_a: Incorrect!
   :feedback_b: Incorrect!
   :feedback_c: Incorrect!
   :feedback_d: Correct! This is the correct way.

   Which line of code would create a line plot in form of red squares with x = x and y = y?


.. mchoice:: viz_MC8
   :practice: T
   :answer_a: ax.set((xlabel, ylabel, title), ('Year', 'Amount', 'Title of Graph'))
   :answer_b: ax.(xlabel='Year', ylabel='Amount', title='Title of Graph')
   :answer_c: ax.set(xlabel='Year', ylabel='Amount', title='Title of Graph')
   :answer_d: ax.set(xlabel='Year'), ax.set(ylabel='Amount'), ax.set(title='Title of Graph')
   :correct: c
   :feedback_a: Incorrect!
   :feedback_b: Incorrect!
   :feedback_c: Correct! This is the correct way.
   :feedback_d: Incorrect!

   What single line of code will set the x and y labels and the title of a plot?
