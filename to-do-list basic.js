let tasks = [];  // array to store tasks

// function to add task
function addTask() {
  let input = document.getElementById("taskInput").value;

  // use string trim() method
  let task = input.trim();

  if (task !== "") {
    tasks.push(task); // add to array
    showTasks();      // display updated list
    document.getElementById("taskInput").value = ""; // clear input
  } else {
    alert("Please enter a valid task!");
  }
}

// function to display all tasks
function showTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = ""; // clear previous list

  // loop using forEach
  tasks.forEach(function(task, index) {
    let li = document.createElement("li");
    li.innerText = `${index + 1}. ${task}`;
    list.appendChild(li);
  });
}
