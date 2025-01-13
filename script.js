const input = document.getElementById('input');
const button = document.getElementById('button');
const ul = document.getElementById('unordered');

loadTask();
// adds a task
function addEntry() {
    const trimmedText = input.value.trim()
    const list = document.createElement("li");
    list.innerHTML = `<li>${trimmedText}</li>`;
    if (trimmedText === "") {
        alert("You must enter text if you want to add it to your list!")
    } else {
        ul.appendChild(list);
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

//prio 1
// crossmark next to task to delete task


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

