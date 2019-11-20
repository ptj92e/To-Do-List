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
let textNine = $("#textNine");
let textTen = $("#textTen");
let textEleven = $("#textEleven");
let textTwelve = $("#textTwelve");
let textOne = $("#textOne");
let textTwo = $("#textTwo");
let textThree = $("#textThree");
let textFour = $("#textFour");
let textFive = $("#textFive");
