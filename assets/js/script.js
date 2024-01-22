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

// Color change
var timeBlock = $(`.time-block`);
var now = dayjs().format(`h`)
function colorChange() {
    timeBlock.each(function(){
        var hour = timeBlock.attr(`data-time`);
        console.log(hour)

    })
}

console.log(now)
colorChange()