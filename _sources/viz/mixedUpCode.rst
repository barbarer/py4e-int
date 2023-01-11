Mixed-Up Code Questions
------------------------

.. parsonsprob:: matplotlib_1-v2
    :numbered: left
    :practice: T
    :adaptive:

    Create code to plot a line graph for the average yearly temperatures in US from 2015 to 2020. The x-axis should include years [2015, 2016, 2017, 2018, 2019, 2020]. The average temperatures during these years were [54.4, 54.9, 54.6, 53.5, 52.7, 54.4] respectively.
    Be sure to show the plot after you create it.
    -----
    import matplotlib
    import matplotlib.pyplot as plt
    =====
    x = ['2015', '2016', '2017', '2018', '2019', '2020']
    y = [54.4, 54.9, 54.6, 53.5, 52.7, 54.4]
    =====
    plt.plot(x, y)
    =====
    plt.line(x, y) #paired
    =====
    plt.show()


.. parsonsprob:: matplotlib_2
    :numbered: left
    :practice: T
    :adaptive:

    Create code to plot a line graph for the average company sales per month from January to March.
    Do the following in order: set the xlabel to "Months", the ylabel to "Sales (in Dollars)", the title
    to 'Total Sales by Month' and show the plot.
    -----
    import matplotlib
    import matplotlib.pyplot as plt
    =====
    x = ['Jan', 'Feb', 'Mar']
    y = [5000, 7000, 8000]
    =====
    plt.plot(x, y)
    =====
    plt.xlabel('Months')
    =====
    plt.ylabel('Sales (in Dollars)')
    =====
    plt.title('Total Sales by Month')
    =====
    plt.set_title('Total Sales by Month') #paired
    =====
    plt.show()

.. parsonsprob:: matplotlib_3
    :numbered: left
    :practice: T
    :adaptive:

    Create code to plot two line graphs and plot them side-by-side. The first line graph uses the data where x= [1, 2, 3, 4, 5] and y= [9.3, 4.4, 5.2, 6, 7]. The second line graph uses x= [5, 10, 15, 20] and y= [6.7, 8.2, 7.4, 8.6]. Set figsize = 10,5. Add x-axis labels 'Number of Miles', y-axis labels of 'Running Speed (in MPH)', and a title 'Marathon Running Speed in MPH by Mile'.
    -----
    import matplotlib
    import matplotlib.pyplot as plt
    =====
    fig = plt.figure(figsize=(10, 5))
    =====
    ax1 = fig.add_subplot(121)
    ax2 = fig.add_subplot(122)
    =====
    ax1.plot([1, 2, 3, 4, 5], [9.3, 4.4, 5.2, 6, 7])
    =====
    ax2.plot([5, 10, 15, 20], [6.7, 8.2, 7.4, 8.6])
    =====
    ax1.set_xlabel('Number of Miles')
    ax2.set_xlabel('Number of Miles')
    =====
    ax1.set_ylabel('Running Speed (in MPH)')
    ax2.set_ylabel('Running Speed (in MPH)')
    =====
    plt.suptitle('Marathon Running Speed in MPH by Mile')
    =====
    plt.show()

.. parsonsprob:: matplotlib_4
    :numbered: left
    :practice: T
    :adaptive:

    Create code to plot a vertical bar chart showing the number of people who like each movie genre. The x-axis is each movie genre including ['Comedy', 'Action', 'Romance', 'Drama', 'SciFi'] with number of people who like each respective genre as [4.4, 5.9, 6.2, 1.7, 4.5] in thousands. Plot this as a singular subplot. Add x and y axes titles -- 'Movie Genre' and 'Number of People (in thousands)' respectively -- and the title 'Movie Genre Preferences'.
    -----
    import matplotlib
    import matplotlib.pyplot as plt
    =====
    fig = plt.figure()
    =====
    ax = fig.add_subplot(111)
    =====
    ax.bar(['Comedy', 'Action', 'Romance', 'Drama', 'SciFi'], [4.4, 5.9, 6.2, 1.7, 4.5])
    =====
    ax.barh(['Comedy', 'Action', 'Romance', 'Drama', 'SciFi'], [4.4, 5.9, 6.2, 1.7, 4.5]) #paired
    =====
    ax.set_xlabel('Movie Genre')
    ax.set_ylabel('Number of People (in thousands)')
    =====
    ax.xlabel('Movie Genre')
    ax.ylabel('Number of People (in thousands)') #paired
    =====
    ax.set_title('Movie Genre Preferences')
    =====
    ax.title('Movie Genre Preferences') #paired
    =====
    plt.show()

.. parsonsprob:: matplotlib_5
    :numbered: left
    :practice: T
    :adaptive:

    Create code to plot two horizontal bar charts and plot them side-by-side. The first bar chart uses the data with x values of [9.3, 8.8, 7.9] and y values of [1, 2, 3]. The second horizontal bar chart has uses data with x values of [9.6, 6.8, 6.9, 6.2] and y values of [5, 10, 15, 20]. Set figsize = 10,5. Set axis labels for each graph so that the x-axis reads 'Number of Mistakes' and the y-axis reads 'Hours of Practice'. Finally, add the title 'Average Number of Mistakes in Code After Hours of Practice'.
    -----
    import matplotlib
    import matplotlib.pyplot as plt
    =====
    fig = plt.figure(figsize=(10, 5))
    =====
    ax1 = fig.add_subplot(121)
    ax2 = fig.add_subplot(122)
    =====
    ax1.barh([1, 2, 3], [9.3, 8.8, 7.9])
    =====
    ax1.barh([9.3, 8.8, 7.9], [1, 2, 3]) #paired
    =====
    ax2.barh([5, 10, 15, 20], [9.6, 6.8, 6.9, 6.2])
    =====
    ax2.plot_barh([5, 10, 15, 20], [9.6, 6.8, 6.9, 6.2]) #paired
    =====
    ax1.set_xlabel('Number of Mistakes')
    ax2.set_xlabel('Number of Mistakes')
    ax1.set_ylabel('Hours of Practice')
    ax2.set_ylabel('Hours of Practice')
    =====
    plt.suptitle('Average Number of Mistakes in Code After Hours of Practice')
    =====
    plt.show()

.. parsonsprob:: matplotlib_6
    :numbered: left
    :practice: T
    :adaptive:

    Create code to plot a line graph with x values of [0, 10, 20, 30] and y values [105, 89, 70, 113]. Change the color of the line to red, set line width equal to 5, and add gridlines.
    -----
    import matplotlib
    import matplotlib.pyplot as plt
    =====
    plt.plot([0, 10, 20, 30], [105, 89, 70, 113], color = 'red', linewidth = 5)
    =====
    plt.plot([0, 10, 20, 30], [105, 89, 70, 113], linecolor = 'red', linewidth = 5) #paired
    =====
    plt.grid(True)
    =====
    plt.show()

.. parsonsprob:: matplotlib_7
    :numbered: left
    :practice: T
    :adaptive:

    Create code to plot a pie chart that shows the popularity distribution for different genres of films. First specify the labels for the pie chart to be 'Action', 'Adventure', 'Thriller', 'Drama', 'Romance', 'Comedy', followed by their respective sizes [182, 164, 93, 22, 143, 88] and colors ['red', 'green', 'gray', 'blue', 'pink', 'yellow']. Add the title 'Popularity Distribution of Movie Genres'.
    -----
    import matplotlib
    import matplotlib.pyplot as plt
    =====
    labels = 'Action', 'Adventure', 'Thriller', 'Drama', 'Romance', 'Comedy'
    =====
    sizes = [182, 164, 93, 22, 143, 88]
    =====
    colors = ['red', 'green', 'gray', 'blue', 'pink', 'yellow']
    =====
    plt.pie(sizes, labels=lables, colors=colors, autopct='%1.1f%%')
    =====
    plt.title('Popularity Distribution by Movie Genres')
    =====
    plt.show()

.. parsonsprob:: matplotlib_8
    :numbered: left
    :practice: T
    :adaptive:

    Create code to plot a line graph with two lines. The x values should reflect years ['2020', '2021', '2022'] and y values should reflect the average student GPA. 'ABC College' should have y values of [3.42, 3.37, 3.44] and a green line color while 'XYZ University' has y values of [3.23, 3.57, 3.61] and a blue line color. Both lines have square markers represented by 's'. Set an x-label 'Year', y-label 'Average Student GPA', and title 'Average Student GPA per Year'. Lastly, create a legend.
    -----
    import matplotlib
    import matplotlib.pyplot as plt
    =====
    fig, ax = plt.subplots()
    =====
    years = ['2020', '2021', '2022']
    gpa1 = [3.42, 3.37, 3.44]
    gpa2 = [3.23, 3.57, 3.61]
    =====
    ax.plot(years, gpa1, 'g-', label = 'ABC College', marker = 's')
    ax.plot(years, gpa2, 'b-', label = 'XYZ University', marker = 's')
    =====
    ax.set_xlabel('Year')
    =====
    ax.set_ylabel('Average Student GPA')
    =====
    ax.set_title('Average Student GPA per Year')
    =====
    ax.legend()
    =====
    plt.legend() #paired
    =====
    plt.show()

.. parsonsprob:: matplotlib_9
    :numbered: left
    :practice: T
    :adaptive:

    Create code to plot two vertical bar charts on the same plot. One bar will represent the annual cost incurred by a store and the other bar will represent the annual revenue earned by the store, from 2014 to 2018. The x-axis will be the 'Year' and the y-axis is the 'Amount (in Dollars)'. The first bar chart should be red and represented as 'Cost' with y values of [13000, 16000, 18000, 21000, 17000]. The second bar chart should be yellow and represented by 'Revenue' with y values of [41000, 33000, 67000, 73000, 66000]. Set the xticklabels equal to the years [2014, 2015, 2016, 2017, 2018]. Set width to 0.5 and figsize of 10,5. Add a legend and set the x-axis to 'Year', y-axis to 'Amount (in Dollars)' and the title to 'Total Cost and Revenue Generated from 2014 to 2018'. Finally, add a grid.
    -----
    import matplotlib
    import matplotlib.pyplot as plt
    =====
    import numpy as np
    =====
    n = 5
    width = 0.5
    ind = np.arange(n)
    =====
    fig = plt.figure(figsize=(10, 5))
    =====
    ax = fig.subplots()
    =====
    p1 = ax.bar(ind, [13000, 16000, 18000, 21000, 17000], width, color='red')
    =====
    p2 = ax.bar(ind + width, [41000, 33000, 67000, 73000, 66000], width, color='yellow')
    =====
    p2 = ax[121].bar([41000, 33000, 67000, 73000, 66000], width, color='yellow') #paired
    =====
    ax.legend((p1[0], p2[0]), ('Costs', 'Revenue'))
    =====
    ax.legend((p1[0] = 'Costs', p2[0] = 'Revenue')) #paired
    =====
    ax.set(xlabel='Year', ylabel='Amount (in Dollars)', title='Total Cost and Revenue Generated from 2014 to 2018')
    =====
    ax.grid()

.. parsonsprob:: matplotlib_10
    :numbered: left
    :practice: T
    :adaptive:

    Create code to make a 2x2 subplot each with a different type of graph, all with the same values. To do this, create a figure with figsize of (10,5). The x-values are letters ['X, 'Y', 'Z'] and the y-values are numbers [35, 65, 70]. The top left graph should be a vertical bar chart. The top right graph should be a scatterplot with magenta colored points and star markers represented by an asterisk (*). The bottom left graph should be an indigo colored line graph with line width of 3. The bottom right graph should be a horizontal bar chart. Title the graph 'Categorical Plotting'.
    -----
    import matplotlib
    import matplotlib.pyplot as plt
    =====
    letters = ['X', 'Y', 'Z']
    numbers = [35, 65, 70]
    =====
    plt.figure(1, figsize = (10,5))
    =====
    plt.subplot(221)
    =====
    plt.bar(letters, numbers)
    =====
    plt.subplot(222)
    =====
    plt.scatter(letters, numbers, color = 'magenta', marker = '*')
    =====
    plt.subplot(223)
    =====
    plt.plot(letters, numbers, color = 'indigo', linewidth = 3)
    =====
    plt.subplot(224)
    =====
    plt.barh(letters, numbers)
    =====
    plt.suptitle('Categorical Plotting')
    =====
    plt.show()
