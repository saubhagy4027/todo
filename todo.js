const inputBox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        inputBox.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
}
listcontainer.addEventListener(("click"), function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        console.log(e.target);
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
                console.log(e.target);

    }
    saveData();
}, false)

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showData(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showData();