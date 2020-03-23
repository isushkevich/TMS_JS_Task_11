"use strict";


let allLis = document.querySelectorAll("li");


document.addEventListener("click", selectItems);


function selectItems() {
    let isLi = event.target["constructor"] == HTMLLIElement;

    if (isLi) {
        event.target.classList.add("bold");

        let canAlert = !event.target.parentElement.classList.contains("noalert");

        if (canAlert) {
            let firstItem = event.target.innerText.match(/^.*$/m)[0];
            alert("Selected: \n \n" + firstItem);
        }

    } else {
        allLis.forEach(li => li.classList.remove("bold"));
    }
}