const tasks = [];
const listDiv = document.querySelector(".list-item");
const ul = document.createElement("ul");

window.addEventListener("load", function(){
    const savedTask = JSON.parse(localStorage.getItem("tasks"))
    if (savedTask) {
        savedTask.forEach(tasks => {
            addTask(tasks)
        })
    
    }
    
    
    })

export function addTask(taskContent) {

  const li = document.createElement("li");

  const couleurBackgroundLi =  ["#1f82f2", "#617e8c"];
  const couleurIndex = Math.floor(Math.random()*2)
  const couleurRandom = couleurBackgroundLi[couleurIndex]
  li.style.backgroundColor = couleurRandom
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox"; 
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.classList.add("completed");
    }else{
        li.classList.remove("completed")
    }
    saveTask()
  });
  const label = document.createElement("label");
  label.textContent = taskContent;
  const iconRemove = document.createElement("i");
  iconRemove.classList.add("fa-solid", "fa-eraser");
  iconRemove.addEventListener("click", function () {
    ul.removeChild(li); 
    saveTask()
    const test = document.querySelectorAll("li.completed");
    test.forEach((item) => {
      item.remove();
    });
  });

  li.appendChild(checkbox); 
  li.appendChild(label);
  li.appendChild(iconRemove); 
  ul.appendChild(li); 
  saveTask()
  listDiv.appendChild(ul); 
}


function saveTask () {
    const tasks = [];
    ul.querySelectorAll("li").forEach(li => {
        tasks.push(li.querySelector("label").textContent)
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}