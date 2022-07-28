function initial() {
    const strJsonNotes =
        '[{"id":"1","text":"Nueva nota de texto, nota 1"},{"id":"2","text":"Nota 2 solo para prueba"}]';
    if (strJsonNotes != "") {
        const arrayNotes = JSON.parse(strJsonNotes);
        for (const iterator of arrayNotes) {
            let newDiv = document.createElement("div");
            let newButton = document.createElement("button");
            let newTextArea = document.createElement("textarea");
            let parent = document.getElementById("content");
            parent.appendChild(newDiv);
            newDiv.id = iterator.id;
            newDiv.appendChild(newButton);
            newButton.className = "del-itself";
            newButton.innerText = "-";
            newButton.addEventListener("click", () => {
                deleteElement(iterator.id);
            });
            newDiv.appendChild(newTextArea);
            newTextArea.name = iterator.id;
            newTextArea.cols = 12;
            newTextArea.rows = 15;
            newTextArea.placeholder = "New Note";
            newTextArea.value = iterator.text;
        }
    }
}

function addNote() {
    let newDiv = document.createElement("div");
    let newButton = document.createElement("button");
    let newTextArea = document.createElement("textarea");
    let number = 0;
    if (document.getElementById("content").lastElementChild.id == "menu") {
        number = 1;
    } else {
        number =
            Number(document.getElementById("content").lastElementChild.id) + 1;
    }
    let parent = document.getElementById("content");

    parent.appendChild(newDiv);
    newDiv.id = number;
    newDiv.appendChild(newButton);
    newButton.className = "del-itself";
    newButton.innerText = "-";
    newButton.addEventListener("click", () => {
        deleteElement(number);
    });
    newDiv.appendChild(newTextArea);
    newTextArea.name = number;
    newTextArea.cols = 12;
    newTextArea.rows = 15;
    newTextArea.placeholder = "New Note";
}
function deleteElement(id) {
    document.getElementById(id).remove();
}
function visible() {
    let allButtons = document.getElementsByClassName("del-itself");
    if (allButtons[0].style.visibility == "visible") {
        for (const i of allButtons) {
            i.style.visibility = "hidden";
        }
    } else {
        for (const i of allButtons) {
            i.style.visibility = "visible";
        }
    }
}
function save() {
    const notes = document.getElementById("content").children;
    const jsonArray = [];
    let jump = 0;
    for (const iterator of notes) {
        if (jump >= 2) {
            jsonArray.push({ id: iterator.id, text: iterator.lastChild.value });
        }
        jump++;
    }
    const fileJson = JSON.stringify(jsonArray);
    console.log(fileJson);
}
window.addEventListener("load", () => {
    initial();
    document.getElementById("delete").addEventListener("click", visible);
    document.getElementById("add").addEventListener("click", addNote);
    document.getElementById("save").addEventListener("click", save);
});
