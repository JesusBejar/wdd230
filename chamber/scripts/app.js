let ul = document.querySelector("ul");
let x = document.querySelector('.x');
let hamburgerBtn = document.querySelector("#hamburgerBtn");

hamburgerBtn.addEventListener("click", function () {
    ul.classList.add("showListItems");

    x.addEventListener("click", function () {
        ul.classList.remove("showListItems");
    })
})


