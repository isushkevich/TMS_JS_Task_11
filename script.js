"use strict";

let allLis = document.querySelectorAll("li");


document.addEventListener("click", selectItems);


function selectItems() {
    let element = event.target["constructor"];

    if (element == HTMLLIElement) {
        event.target.classList.add("bold");
        alert("Selected: \n \n" + event.target.innerText);

    } else {
        allLis.forEach(li => li.classList.remove("bold"));
    }
}