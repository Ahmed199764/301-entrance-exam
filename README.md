# 301 Entrance Exam

### Instructions:
### Make sure before starting to:
- turn off any means of communication (phone, slack, email).
- start your screen recording.
- you are not allowed to use previous projects, notes or GitHub.
- you can use google search engine.
- use the console to debug.

## First:
create a new repository on your github and name it '301-entrance-exam'.

## Q1) solve the following problem.
Create a js file and name it 'q1.js' on 'q1-solution' branch then do the following:

Write a function named 'greaterThan' that will take an array of numbers and a number as parameters then
return the number of numbers that are greater than that number in the array
```
example_1: greaterThan([4,2,3,1],3) => 1
example_2: greaterThan([2,8,-1],8) => 0
```

Once you finish, create a Pull Request from your current branch to master then merge.


## Q2) solve the following problem.
Create a js file and name it 'q2.js' on 'q2-solution' branch then do the following:

Write a function that will print out the following pattern in the console
```
*
**
***
****
*****
```
Please note your solution should be dynamic and not hardcoded using console logs ( Do NOT use five console logs in order to solve it )

Once you finish, create a Pull Request from your current branch to master then merge.



### Q3) Convert the attached wireframe to html, css and js code. 
You will be building a simple webpage "To-Do List" which contains all of the tasks that you need to complete on a given day.

As a user, I would like to add my daily tasks so I can manage my time and oraganize my randomness.
- Create a form in order to add the task name and the date to the local storage.

As a user, I would like to view all of my tasks that I already added so that I can quickly view my To-Do List in order to do all of them.
- Whenever you add a task using the form, you should use the local storage in order to get all the tasks from it and convert it to an ordered list using DOM.

**Strech Goal:** As a user, I would like to delete any task after being done so that I can handle my daily done tasks.
- When you press on the 'X' button, the task should be deleted from the DOM and the local storage

**Your final result should look like some how as the result at the attached video (201-assessment-exam-recording.mov)**

#### Do this work on a branch called 'q3-solution'.

1. Create an HTML file and convert the wireframe into HTML structure.
2. Create a CSS file to apply the style.
- The used font is "Roboto" -> google font.
- The used colors are "#6d8adbc7" , "#dae4ff" and "#eee".
3. Create a js file to handle the functionality.
- Handle getting the current date.
- Handle adding the tasks to the list and local storage.
- Handle getting the tasks from the local storage and display them.
- Handle removing tasks from the list **(Strech Goal)**.

#### P.S.: you MUST use constructor and local storage in order to solve this question PLUS when you refresh the page, all the data should be persistent.


## Submission Instructions:
- Submit the link of your GitHub repo.
- Submit your live url after deploying your site with GitHub pages.
- Submit the link of your recordered video (you can upload it to your google drive or dropbox then share the link).
- **Summary**: at the end, you have to submit (link of Github repo, live url and recording).
- After completion the exam, do **NOT** commit or push anything to your repo.