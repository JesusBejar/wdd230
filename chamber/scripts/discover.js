let lastVisit = document.querySelector(".lastVisit");
let currentDate = new Date();
let lastVariable = localStorage.getItem("LastVisit");

// displays the amount of time in days (rounded to a whole number) between user visits to this page by the user's agent browser
if (!lastVariable) {
    localStorage.setItem("LastVisit", currentDate);
    lastVisit.innerHTML = "Welcome to Loveland! Nice to see again :)"
}
else {
    console.log(lastVariable);
    let lastVisitDateObject = new Date(lastVariable);
    let calculation = (currentDate - lastVisitDateObject) / 86400000;
    localStorage.setItem("LastVisit", currentDate);
    lastVisit.innerHTML = `It has been ${calculation.toFixed(0)} days since you visited!`;

}
// counter for how many times the user has visited the site
let userVisitsElement = document.querySelector(".userVisits");
let counter = localStorage.getItem("userVisits");
if (!counter) {
    localStorage.setItem("userVisits", 1);
    userVisitsElement.innerHTML = "Welcome to Loveland! This is your first visit :)"
}
else {
    let counterInt = Number(counter);
    localStorage.setItem("userVisits", counterInt+1);
    userVisitsElement.innerHTML = `Welcome to Loveland! This is your ${counterInt+1} visit :)`

}