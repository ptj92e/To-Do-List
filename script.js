//This block of code is pulling time information from Moment.js and adding it to the page to update whenever the day changes. 
let currentDate = moment().format("dddd MMMM D");
let dayText = $("#currentDay");
dayText.text(currentDate);

//Set up an on click event once that recognizes each button.
//Each time a button is clicked, it pulls the id from the row and the text from the text area and puts them into variables. 
//It then pairs them into a key and a value needed to push and pull from local storage.
$(".saveBtn").on("click", saveContent); 

function saveContent() {
    let hour = $(this).parent().parent().parent().attr("id");
    let task = $(this).siblings("textarea").val();
    localStorage.setItem(hour, task);
};

//Set up variables for text areas.
//This line is reaching down through the divs to access the child text areas inside. This will allow for attribute and text changes.
let textNine = $("#9am").children(".row").children(".input-group").children("textarea");
let textTen = $("#10am").children(".row").children(".input-group").children("textarea");
let textEleven = $("#11am").children(".row").children(".input-group").children("textarea");
let textTwelve = $("#12pm").children(".row").children(".input-group").children("textarea");
let textOne = $("#1pm").children(".row").children(".input-group").children("textarea");
let textTwo = $("#2pm").children(".row").children(".input-group").children("textarea");
let textThree = $("#3pm").children(".row").children(".input-group").children("textarea");
let textFour = $("#4pm").children(".row").children(".input-group").children("textarea");
let textFive = $("#5pm").children(".row").children(".input-group").children("textarea");

//Adding the text from local storage to the text area.
//This allows the page to keep the text when refreshed.
textNine.val(localStorage.getItem("9am"));
textTen.val(localStorage.getItem("10am"));
textEleven.val(localStorage.getItem("11am"));
textTwelve.val(localStorage.getItem("12pm"));
textOne.val(localStorage.getItem("1pm"));
textTwo.val(localStorage.getItem("2pm"));
textThree.val(localStorage.getItem("3pm"));
textFour.val(localStorage.getItem("4pm"));
textFive.val(localStorage.getItem("5pm"));

//This function changes the background color of the text areas depending on different parameters. If it is before the time on the time block, the background is green. If it is the same time as the time block, the background is red. If it is the time after the time block, the background is grey. 
function backgroundChange() {
        
}

backgroundChange();