let ul = document.querySelector("ul");
let x = document.querySelector('.x');
let hamburgerBtn = document.querySelector("#hamburgerBtn");

hamburgerBtn.addEventListener("click", function () {
    ul.classList.add("showListItems");

    x.addEventListener("click", function () {
        ul.classList.remove("showListItems");
    })
})
const date = new Date();
let dayOfWeek = date.getDay();

let messageDisplayed = "";

if (dayOfWeek == 1 || dayOfWeek == 2 ) {
    messageDisplayed = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}
else if (dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5 || dayOfWeek == 6 || dayOfWeek == 7) {
    messageDisplayed = "We hope you have a great day!";
}
let AnotherMessage = "";
switch (dayOfWeek) {
    case 1:
        AnotherMessage = "Monday";
    break;
    case 2:
        AnotherMessage = "Tuesday";
    break;
    case 3:
        AnotherMessage = "Wednesday";
    break;
    case 4:
        AnotherMessage = "Thursday";
    break;
    case 5:
        AnotherMessage = "Friday";
    break;
    case 6:
        AnotherMessage = "Saturday";
    break;
    case 7:
        AnotherMessage = "Sunday";
    break;
}

let message1 = document.querySelector('#message1');
message1.innerHTML = messageDisplayed;
// let message2 = document.querySelector('#message2');
// message2.innerHTML = AnotherMessage;

