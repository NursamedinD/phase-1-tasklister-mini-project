document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");


  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newTaskText = taskInput.value;

    if (newTaskText === "") {
      alert("Task description cannot be empty!");
      return;
    }


    const newTaskItem = document.createElement("li");


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";


    newTaskItem.textContent = newTaskText + " ";
    newTaskItem.appendChild(deleteButton);


    taskList.appendChild(newTaskItem);


    taskInput.value = "";

    deleteButton.addEventListener("click", function () {
      taskList.removeChild(newTaskItem);
    });
  });
});

