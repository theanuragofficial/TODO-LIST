document.getElementById("add-task-btn").addEventListener("click", function () {
  const taskText = document.getElementById("new-task").value;
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.parentElement.removeChild(li);
  });

  li.appendChild(deleteBtn);
  document.getElementById("todo-list").appendChild(li);

  document.getElementById("new-task").value = "";
});

// Example of using nextElementSibling and previousElementSibling
document
  .getElementById("todo-list")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const li = event.target;
      const nextLi = li.nextElementSibling;
      const prevLi = li.previousElementSibling;

      if (nextLi) {
        console.log("Next task:", nextLi.textContent);
      } else {
        console.log("No next task");
      }

      if (prevLi) {
        console.log("Previous task:", prevLi.textContent);
      } else {
        console.log("No previous task");
      }
    }
  });
