// Get and print current day
var currentDay = dayjs().format(`dddd[,] MMMM D`);
var dayFST = dayjs().format(`D`);
// Add prefix to the day number
var prefix = ``;
if(dayFST === 2 || dayFST === 22) {
    prefix = `nd`;
} else if(dayFST === 3 || dayFST === 23) {
    prefix = `rd`;
} else {
    prefix = `st`;
}
$(`#currentDay`).text(currentDay+prefix);

// Set event listener to save button
$(`.saveBtn`).on(`click`, function (e) {
    // Get time and task  from form
    var time = $(e.target).parent().attr(`data-time`);
    var task = $(e.target).siblings(`.description`).val();

    //save in local storage
    localStorage.setItem(time, task);
  });

// Get from local storage if exist
    // am format 
for (i=8; i < 12; i++) {
    $(`.`+i+`am .description`).val(localStorage.getItem(i+`AM`));
}
    // pm format 
for (i=1; i < 5; i++) {
    $(`.`+i+`pm .description`).val(localStorage.getItem(i+`PM`));
}
// Change color 
function changeColor () {
    // Get current hour
  var now = dayjs().format(`H`);
  console.log(now);

  $('.time-block').each(function () {
    var time = $(this).parent().attr(`data-time`);

    if (time < now) {
      $(this).addClass('past');
    } 
    else if (time === now) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } 
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}
function changeColor ();