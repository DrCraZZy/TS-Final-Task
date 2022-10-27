// Create a "close" button and append it to each list item
const myNodeList: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
for (let i = 0; i < myNodeList.length; i++) {
    const span: HTMLElement = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeElements: HTMLCollectionOf<Element> = document.getElementsByClassName("close");
for (let i = 0; i < closeElements.length; i++) {
    let closeElement: Element = closeElements[i];
    closeElement.addEventListener("click", () => {
        const li = closeElement.parentElement;
        if (li) {
            li.style.display = "none";
        }
    })
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (ev) {
        let target: HTMLElement = <HTMLElement> ev.target;
        if (target.tagName === 'LI') {
            target.classList.toggle('checked');
        }
    }, false);
}

// Create a new list item when clicking on the "Add" button
function newElement(): void {
    const li: HTMLLIElement = document.createElement("li");
    const input: HTMLElement | null = document.getElementById("myInput");
    if(!!input) {
        const inputValue: string = (<HTMLInputElement>input).value;
        const t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            const myUL = document.getElementById("myUL");
            if(myUL) {
                myUL.appendChild(li);
            }
        }
        const myInput = document.getElementById("myInput");
        if(myInput){
            (<HTMLInputElement>myInput).value = "";
        }
    }

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < closeElements.length; i++) {
        let closeElement: Element = closeElements[i];
        closeElement.addEventListener("click", () => {
            const li = closeElement.parentElement;
            if (li) {
                li.style.display = "none";
            }
        })
    }
}