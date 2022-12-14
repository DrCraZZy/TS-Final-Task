"use strict";
// Create a "close" button and append it to each list item
const myNodeList = document.getElementsByTagName("LI");
for (let i = 0; i < myNodeList.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}
// Click on a close button to hide the current list item
const closeElements = document.getElementsByClassName("close");
for (let i = 0; i < closeElements.length; i++) {
    let closeElement = closeElements[i];
    closeElement.addEventListener("click", () => {
        const li = closeElement.parentElement;
        if (li) {
            li.style.display = "none";
        }
    });
}
// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (ev) {
        let target = ev.target;
        if (target.tagName === 'LI') {
            target.classList.toggle('checked');
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li");
    const input = document.getElementById("myInput");
    if (!!input) {
        const inputValue = input.value;
        const t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        }
        else {
            const myUL = document.getElementById("myUL");
            if (myUL) {
                myUL.appendChild(li);
            }
        }
        const myInput = document.getElementById("myInput");
        if (myInput) {
            myInput.value = "";
        }
    }
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < closeElements.length; i++) {
        let closeElement = closeElements[i];
        closeElement.addEventListener("click", () => {
            const li = closeElement.parentElement;
            if (li) {
                li.style.display = "none";
            }
        });
    }
}
