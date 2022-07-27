function addNote() {
    let newDiv = document.createElement("div");
    let newButton = document.createElement("button");
    let newTextArea = document.createElement("textarea");
    let number =
        Number(document.getElementById("content").lastElementChild.id) + 1;
    let parent = document.getElementById("content");

    parent.appendChild(newDiv);
    newDiv.id = number;
    newDiv.appendChild(newButton);
    newButton.className = "del-itself";
    newButton.innerText = "-";
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
window.addEventListener("load", () => {
    document.getElementById("delete").addEventListener("click", visible);
    document.getElementById("add").addEventListener("click", addNote);
});
