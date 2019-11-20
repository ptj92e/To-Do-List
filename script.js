//Setting current date
let currentDate = moment().format("dddd MMMM D");
let dayText = $("#currentDay");
dayText.text(currentDate);

//Set up an on click event once that recognizes each button.
$(".saveBtn").on("click", saveContent); 

function saveContent() {
    let hour = $(this).parent().parent().parent().attr("id");
    let task = $(this).siblings("textarea").val();

    localStorage.setItem(hour, task);
    console.log(localStorage);
};

//Set up variables for text areas
let textNine = $("#9am").children(".row").children(".input-group").children("textarea");
let textTen = $("#10am").children(".row").children(".input-group").children("textarea");
let textEleven = $("#11am").children(".row").children(".input-group").children("textarea");
let textTwelve = $("#12pm").children(".row").children(".input-group").children("textarea");
let textOne = $("#1pm").children(".row").children(".input-group").children("textarea");
let textTwo = $("#2pm").children(".row").children(".input-group").children("textarea");
let textThree = $("#3pm").children(".row").children(".input-group").children("textarea");
let textFour = $("#4pm").children(".row").children(".input-group").children("textarea");
let textFive = $("#5pm").children(".row").children(".input-group").children("textarea");

textNine.val(localStorage.getItem("9am"));
textTen.val(localStorage.getItem("10am"));
textEleven.val(localStorage.getItem("11am"));
textTwelve.val(localStorage.getItem("12pm"));
textOne.val(localStorage.getItem("1pm"));
textTwo.val(localStorage.getItem("2pm"));
textThree.val(localStorage.getItem("3pm"));
textFour.val(localStorage.getItem("4pm"));
textFive.val(localStorage.getItem("5pm"));
