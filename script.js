//Creating Variables
let taNine = $("#textNine");
let taTen = $("#textTen");
let taEleven = $("#textEleven");
let taTwelve = $("#textTwelve");
let taOne = $("#textOne");
let taTwo = $("#textTwo");
let taThree = $("#textThree");
let taFour = $("#textFour");
let taFive = $("#textFive");

let currentDate = moment().format("dddd, MMMM DD");

//Object for saving text
let toDoList = {
    nineAm: "",
    tenAm: "",
    elevenAm: "",
    twelveAm: "",
    onePm: "",
    twoPm: "",
    threePm: "",
    fourPm: "",
    fivePm: "",
}

//Click Listeners for Save
$("#nineSave").on("click", saveContent);
$("#tenSave").on("click", saveContent);
$("#elevenSave").on("click", saveContent);
$("#twelveSave").on("click", saveContent);
$("#oneSave").on("click", saveContent);
$("#twoSave").on("click", saveContent);
$("#threeSave").on("click", saveContent);
$("#fourSave").on("click", saveContent);
$("#fiveSave").on("click", saveContent);

//Adding the current day to the HTML
$("#currentDay").text(currentDate);

//Setting up a function to save the content to the object. 
function saveContent() {
    event.preventDefault();
    let nineAmText = taNine.val();
    toDoList.nineAm = nineAmText;
    console.log(toDoList.nineAm);
}