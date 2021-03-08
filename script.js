// Projec: Work Day Scheduler - Thomas Schmidt

$("#currentDay").text(moment().format('LLLL'));  // https://momentjs.com/


$(document).ready(function () {
  console.log("Ready!");
  // saveBtn click listener 
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var time = $(this).parent().attr("id");
    console.log(time);
    console.log(typeof time);

    var text = $(this).siblings(".description").val();
    console.log(text);

    // Save text in local storage
    localStorage.setItem(time, text);
  })

  // Enables to save all entries at one time. 
  $(".saveFormBtn").on("click", function (event) {
    event.preventDefault();
    console.log($(this));
    $(".description").each(function () {  // applying class ".description" reference eliminates the need to code "text = $(this).siblings(".description").val()"
      console.log($(this));
      var time = $(this).parent().attr("id");
      var text = $(this).val();
      localStorage.setItem(time, text);
   })
  }
  )

  // Help from after class hours helped getting to this point, together with "Google" and Book references

  function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();
    console.log(timeNow); //Why are all future hours logged?

    // loop over time blocks
    $(".time-block").each(function () {                                 //Book JAVASCRIPT & JQUERY by "Jon Ducket" p 324
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);  //Book JAVASCRIPT & JQUERY by "Jon Ducket" p 128
      console.log(blockTime);

      // To check the time and add the classes for background indicators
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

      }
    })
  }

  // Get item from local storage if any
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  $("#hour18 .description").val(localStorage.getItem("hour18"));

  timeTracker();
})
