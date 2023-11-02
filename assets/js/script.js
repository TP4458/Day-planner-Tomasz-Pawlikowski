var startTime = dayjs().hour(9).format("HH");
var endTime = dayjs().hour(17).format("HH");
const timeDispEl = $("#currentDay")
var scheduleWrap = $(".container")

let workDay = {           
    start: startTime,
    finish: endTime
}

//current time and date
function timeNow(){
  var currentTime = dayjs().format("DD-MM-YYYY HH:mm:ss");
    timeDispEl.text(currentTime);
  }
setInterval(timeNow, 1000)

//current hour to use in the IF
var hourNow = dayjs().hour()
console.log(hourNow)

for (var i=workDay.start; i <= workDay.finish; i++){
    //create objects to hold time/textarea/save btn
    let scheduleEntry = $("<div>");
    scheduleEntry.addClass("itsAWrap");
    scheduleWrap.append(scheduleEntry);

    //create hour display
    let hourDisp = $("<span>");
    hourDisp.addClass("hourDisp");
    hourDisp.text(dayjs().hour(i).format("HH[:00]"));
    scheduleEntry.append(hourDisp);

    //create textWrap
    let textArea = $("<textarea>");
    textArea.addClass("textArea");
    textArea.attr("id",i);
    scheduleEntry.append(textArea);
    textArea.val(localStorage.getItem(i))

    if (i > hourNow){
      textArea.addClass("future");
    } else if (i < hourNow) {
      textArea.addClass("past");
    } else {textArea.addClass("present")}
   
    //create save btn
    let saveBtn = $("<button>");
    saveBtn.addClass("saveBtn");
    saveBtn.attr("data-hour",i);
    saveBtn.text("save")
    scheduleEntry.append(saveBtn)
    saveBtn.on("click", saveBtnHndlr)

    //save button functionality
    function saveBtnHndlr(save){
      let button = $(save.currentTarget)
      let hour = button.attr("data-hour")
      let textArea = $(`#${hour}`)

      if (textArea.val().trim() === "") {
        localStorage.removeItem(hour)
      }else {
        localStorage.setItem(hour, textArea.val());
    }
  }
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