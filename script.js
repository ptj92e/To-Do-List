//Setting current date
let currentDate = moment().format("dddd MMMM D");
let dayText = $("#currentDay");
dayText.text(currentDate);

//Set up an on click event once that recognizes each button.
$(".saveBtn").on("click", saveContent); 

function saveContent() {
    let target = event.target;
    let hour = $(this).parent().parent().parent().attr("id");
    let task = $(this).siblings("textarea").val();
    
    console.log(task);
    console.log(hour);

    localStorage.setItem(hour, task);
    console.log(localStorage)
};

//Set up variables for text areas
let textNine = $("#9am").children(".row").children(".input-group").children("textarea");
let textTen = $("#textTen").children(".row").children(".input-group").children("textarea");
let textEleven = $("#textEleven").children(".row").children(".input-group").children("textarea");
let textTwelve = $("#textTwelve").children(".row").children(".input-group").children("textarea");
let textOne = $("#textOne").children(".row").children(".input-group").children("textarea");
let textTwo = $("#textTwo").children(".row").children(".input-group").children("textarea");
let textThree = $("#textThree").children(".row").children(".input-group").children("textarea");
let textFour = $("#textFour").children(".row").children(".input-group").children("textarea");
let textFive = $("#textFive").children(".row").children(".input-group").children("textarea");
