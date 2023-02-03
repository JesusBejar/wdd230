const inputE = document.querySelector("#favchap");
const buttonE = document.querySelector("button");
const listE = document.querySelector("#list");

buttonE.addEventListener("click", function() {

    if (inputE.value == "" || inputE.value == " ") {
    
        return }

    else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.append(span);
    span.textContent = inputE.value;

    let deleteB = document.createElement("button");
    deleteB.textContent = "❌"

    li.append(deleteB)

    listE.append(li);

    deleteB.addEventListener("click", function() {
        listE.removeChild(li);
        console.log(li);
    })

    inputE.focus();
    inputE.value = "";
    }
})

// In the function block for adding a chapter,
// make sure the input is not blank before doing the following remaining tasks in this list
// create an li element
// create a delete button
// populate the li elements textContent or innerHTML with the input
// populate the button textContent with an ❌

// append the li element with the delete button
// append the list element with the li element just created and appended with text and the delete button
// add an event listener to the delete button that removes the li element when clicked
// send the focus to the input element
// change the input value to nothing or the empty string to clean up the interface for the user