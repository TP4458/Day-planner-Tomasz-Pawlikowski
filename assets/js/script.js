// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


const timeDispEl = $("#currentDay")
var scheduleWrap = $(".container")
var saveBtnEl = $(".saveBTN")   //cant be global so we know chich exact button is clicked
let workDay = {           //we will have 12 elements, 1 for each hr 6 to 18
    start: 6,
    finish: 18
}


//how will the shedule entry be stored? array ? object time:entry?

function timeNow(){
  var currentTime = dayjs().format("DD-MM-YYYY HH:mm:ss");
    timeDispEl.text(currentTime);
  }
setInterval(timeNow, 1000)

//create for loop using time from workDay - i=start hours, finishing codition end hours

  //wrap this in a for loop for the number of hours specs in workDay
for (var i=workDay.start; i <= workDay.finish; i++){
    //create objects to hold time/textarea/save btn
    let scheduleEntry = $("<div>");
    scheduleEntry.addClass("itsAWrap");
    scheduleWrap.append(scheduleEntry);

    //create hour display
    let hourDisp = $("<span>");
    hourDisp.addClass("hourDisp");
    hourDisp.text(i);
    scheduleEntry.append(hourDisp);

    //create textWrap
    let textArea = $("<textarea>");
    textArea.addClass("textArea")
    scheduleEntry.append(textArea)

    //create save btn
    let saveBtn = $("<button>");
    saveBtn.addClass("saveBtn");
    saveBtn.attr("hour",i);
    scheduleEntry.append(saveBtn)




}












// ```md
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```