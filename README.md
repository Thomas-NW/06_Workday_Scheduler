# 06_Workday_Scheduler
Homework Assignment Workday Scheduler





## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

Image:

![06 Workday Scheduler Image TS](06_Workday_Scheduler_Image_TS-1.PNG)
![Homework Image](C:\Users\Thomas\documents\01_Bootcamp_NW\01_NW_Homework\06_Workday_Scheduler\06_Workday_Scheduler_Image_TS-1.PNG)


## Programming Notes:

$( document ).ready():
  A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).on( "load", function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.

parse():
  Parsing in its most general sense is the extraction of the necessary information from some piece of data, most often textual data. What is parse in Java? There are many Java classes that have the parse() method. Usually the parse() method receives some string as input, "extracts" the necessary information from it and converts it into an object of the calling class. For example, it received a string and returned the date that was "hiding" in this string. 

.each() Method:
  Allows to perform one or more statements on each of the items in the selection of elements that is returned by a selector - rather like a loop in JavaScript
  It takes one parameter: a function contanining the statements that shall run on each element. 
  $('li').each(function() {
    var ids = this.id;
    $(this).append(' <em class="order">' + ids + '</em>');
  });
  1: The jQuery selection contains all of the <li> elements
  2: .each() applies the ssame code to each element in the selection
  3: Any anonymous function iis run for each of the itmens in the list.


## Resources

Book: JAVASCRIPT & JQUERY by "Jon Ducket" -- e.g. Global Objects: String Object
Web: parse(): https://codegym.cc/groups/posts/parse-methods-in-java
