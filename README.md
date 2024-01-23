# Task Tracker

## Description

This project is a task tracker (or To-Do list). This project was built with React and is inspired by [this link](https://www.youtube.com/watch?v=w7ejDZ8SWv8). 

The application is simple to use. The user can add or delete tasks. A task has a title, a date (in day/month/year format), and a reminder attribute (activated by clicking on the bell) which highlights the task (and thus makes it easier to see important tasks).

## Additions

Various additions have been made to the full application. The basic application used a string to store dates, so I preferred to use Date objects to manipulate dates and display the number of days remaining before a task's due date. 

What's more, since the reminder was implemented with a double-click, I decided to change it to a bell button to activate or deactivate the reminder. 

All these additions also involved new additions to the HTML/CSS to be able to display these elements correctly.

## Usage

The application uses a JSON server on the backend to store tasks. To run the application, you first need to launch the JSON server and then open another terminal to launch the application. To do this, run the following commands: 
- Install dependencies: `npm install`
- Run the JSON server containing the recorded tasks (on http://localhost:5000): `npm run server`
- Launch the React application on another terminal (on http://localhost:3000): `npm start`
