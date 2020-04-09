# To-Do-List

This app is a dynamic to-do list that changes color based off what time it is. It makes use of Moment.js which allowed for date changes and checking hours as well as JQuery.

![To Do List](/images/ToDoList.png)

## Technologies:
Moment.js, JQuery, CSS, HTML, JavaScript

# Heading

In this section of the page, there is the title, as well as the current date. The date changes when a new day dawns and the page is refreshed. For this to work, I set up a variable which saved the current date and added it using JQuery. 

# To Do List

This part of the assignment proved to be a bit tricky with labeling. When creating the rows and the different elements on the page, each had a specific class or id which made it possible to change the background color based off the time of day. 

First, I had to solve the issue with the save buttons to pull the text from the textarea into the local storage. I achieved this by adding a click event to "this" ("this" being the button that was clicked) and associating that to the sibling textarea in the input group. The text from that textarea was then sent to the local storage and is appended to the textarea it was pulled from so that the text is displayed when the page reloads. 

Second, I have to solve the issue of how to get the backgrounds to change. For this, I had to label each row according to military time because Moment.js is read according to that. Then, I parseInt() the id of each row using the .each() method and compared that to the current hour. If the number was bigger than the currentHour variable, it would add the class of the textarea to "future". If the number was the same as the variable, the class would be set to "present". If the number was smaller than the variable, the class would be set to "past". All of these classes came preset in a css sheet that pulls the attributes. 

