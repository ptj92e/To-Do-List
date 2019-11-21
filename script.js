//This block of code is pulling time information from Moment.js and adding it to the page to update whenever the day changes. 
let currentDate = moment().format("dddd MMMM D");
let dayText = $("#currentDay");
dayText.text(currentDate);

//Set up an on click event once that recognizes each button. Each time a button is clicked, it pulls the id from the row and the text from the text area and puts them into variables. It then pairs them into a key and a value needed to push and pull from local storage.
$(".saveBtn").on("click", saveContent); 

function saveContent() {
    let hour = $(this).parent().parent().parent().attr("id");
    let list = $(this).siblings("textarea").val();
    localStorage.setItem(hour, list);
};

//Set up variables for text areas. This line is reaching down through the divs to access the child text areas inside. This will allow for attribute and text changes.
let textNine = $("#9").children(".row").children(".input-group").children("textarea");
let textTen = $("#10").children(".row").children(".input-group").children("textarea");
let textEleven = $("#11").children(".row").children(".input-group").children("textarea");
let textTwelve = $("#12").children(".row").children(".input-group").children("textarea");
let textOne = $("#13").children(".row").children(".input-group").children("textarea");
let textTwo = $("#14").children(".row").children(".input-group").children("textarea");
let textThree = $("#15").children(".row").children(".input-group").children("textarea");
let textFour = $("#16").children(".row").children(".input-group").children("textarea");
let textFive = $("#17").children(".row").children(".input-group").children("textarea");

//Adding the text from local storage to the text area. This allows the page to keep the text when refreshed.
textNine.val(localStorage.getItem("9"));
textTen.val(localStorage.getItem("10"));
textEleven.val(localStorage.getItem("11"));
textTwelve.val(localStorage.getItem("12"));
textOne.val(localStorage.getItem("13"));
textTwo.val(localStorage.getItem("14"));
textThree.val(localStorage.getItem("15"));
textFour.val(localStorage.getItem("16"));
textFive.val(localStorage.getItem("17"));

//This function changes the background color of the text areas depending on different parameters. If it is before the time on the time block, the background is green. If it is the same time as the time block, the background is red. If it is the time after the time block, the background is grey. 
function backgroundChange() {
    let currentHour = moment().hour();

    $(".time-block").each(function() {
        if ($("id") > currentHour) {
            $("#textarea").addClass("future");
            console.log("yes");
        } else if ($("id") === currentHour) {
            $("#textarea").addClass("present");
            console.log("maybe");
        } else {
            $("#textarea").addClass("past");
            console.log("no");
        }
    });  
}

// This is calling the function to actually change the backgrounds based off of the time. 
backgroundChange();
