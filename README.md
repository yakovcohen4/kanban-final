# Cyber4s 3rd Pre-Course Final Project

## What i built is 

Welcome to your pre-course final project. You are going to build a task-management application.
`https://yakovcohen4.github.io/kanban-final/solution/`

## Instructions

 1. In my Kanban you can add your tasks in the bottom of every section.
 2. You can move your tasks between the sections with Alt+1/2/3 (1-toDo,2-inProgress,3-Done).
    For your convenience you can do it with drag & drop function.
 3. In the save&load buttons you can save your data and in the next time you will 
    get in the web you load your data.
 4. In addition, you can clear all the tasks and add new tasks, do not forget to do save :)
 5. To edit task you can double click, the background will also change in this mode.


### Page Structure

There should be 3 `section` elements. One for to-do tasks, one for in-progress tasks, and one for done tasks.

Each `section` should contain:

- [ ] a `ul` element with the appropriate class - `to-do-tasks`/`in-progress-tasks`/`done-tasks`
- [ ] an `input` element with an appropriate id - `add-to-do-task`/`add-in-progress-task`/`add-done-task`
- [ ] a `button` element with an appropriate id - `submit-add-to-do`/`submit-add-in-progress`/`submit-add-done`
- [ ] Each `ul` should contain task elements, which are `li` elements with the `task` class.

In addition the page should contain:

- [ ] a heading with a `page-title` id
- [ ] a global input with the `search` id


### Storage

your tasks are saven in your localStorage. you can save it in the API, and load it in your next visit.
`https://json-bins.herokuapp.com/bin/614adb274021ac0e6c080c13`


## Submission

1. On GitHub, open a pull request from your branch to the main branch.
2. **Do not merge the pull request!**
3. Add the user `Cyber4sPopo` as collaborator to your repo.
4. Deploy your application to GitHub pages.
5. Submit in Google Classroom:
   - a link to the pull request
   - a link to your site on GitHub pages
   - a 5 minutes min selfie video, where you talk about yourself in a few words (age, location, military background, technological background). Think about this video as a part of your interview.
   - another 2-5 minute video where you talk about your submission solution, showing how your app works and any special features you added.
