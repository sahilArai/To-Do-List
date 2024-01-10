let addTaskBar = document.querySelector(".addTaskBar");
let addBtn = document.querySelector(".addBtn");
let taskslist = document.querySelector(".taskslist");
let task = document.querySelector(".task");

addBtn.addEventListener("click", () => {
    let newTask = document.createElement("li");
    
    newTask.innerHTML = `
    <img src="square (1).png" class="checkBox">dd
    ${addTaskBar.value}
    <img src="trash-bin.png" class="removeTask">
    <img src="edit.png" class="editTask">
    `
    taskslist.appendChild(newTask);
    addTaskBar.value="";

    newTask.addEventListener("click", () => {
        newTask.classList.toggle("checked"); 
      });
    newTask.querySelector(".removeTask").addEventListener("click", (event) => {
        event.target.parentElement.remove();
     });

    })
    




