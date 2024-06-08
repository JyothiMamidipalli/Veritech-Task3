document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const newTaskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");

  addTaskBtn.addEventListener("click", addTask);
  newTaskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
            <span>${taskText}</span>
            <div class="task-actions">
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

    taskList.appendChild(li);
    newTaskInput.value = "";

    const completeBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    completeBtn.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });
  }
});
