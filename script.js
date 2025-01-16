const input = document.getElementById('input');
const button = document.getElementById('button');
const ul = document.getElementById('unordered');

loadTask();
// adds a task
function addEntry() {
    //creates text and adds it into the li element
    const trimmedText = input.value.trim()
    const list = document.createElement("li");
    list.innerHTML = `${trimmedText}`;

    //creates a span element
    const span = document.createElement("span");
    span.innerHTML = `&#x2715`;
    if (trimmedText === "") {
        alert("You must enter text if you want to add it to your list!")
    } else {
        ul.appendChild(list);
        ul.appendChild(span)
        input.value = "";
        localStorage.setItem("taskList", ul.innerHTML);
        console.log("Added task: " + trimmedText);
    }
}

// line through text
    ul.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  });

// removes a task
ul.addEventListener("click", function(event) {
    if (event.target.tagName === "SPAN") {
        event.target.previousElementSibling.remove();
        event.target.remove();
        localStorage.setItem("taskList", ul.innerHTML);
    }
});

// localStorage
function loadTask() {
    ul.innerHTML = localStorage.getItem("taskList");
}

// makes the user able to press enter to add task
function handleKeyPress(event) {
    if (event.key === "Enter") {
        addEntry();
    }
}