// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  let currentDay = dayjs();
  let currentHour = currentDay.hour();


  $("#currentDay").text(currentDay.format("MMMM D, YYYY"));


  $(".time-block").each(function () {

    let hour = parseInt($(this).attr("id"));

    if (hour < currentHour) {
      $(this).addClass("past");
    }
    else if (hour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }

  });

  $(".saveBtn").on("click", function () {
    const time = $(this).parent().attr("id")
    const userInput = $(this).siblings(".description").val()
    localStorage.setItem(time, userInput)


  });

  for (let i = 9; i < 18; i++) {
    $(`#${i}`).children(".description").val(localStorage.getItem(i))
  }



});

