const tasks = [];
const listDiv = document.querySelector(".list-item");
const ul = document.createElement("ul");

export function addTask(taskContent) {

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox"; 
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.classList.add("completed");
    }
  });
  const label = document.createElement("label");
  label.textContent = taskContent;
  const iconRemove = document.createElement("i");
  iconRemove.classList.add("fa-solid", "fa-eraser");
  iconRemove.addEventListener("click", function () {
    ul.removeChild(li); 
    const test = document.querySelectorAll("li.completed");
    test.forEach((item) => {
      item.remove();
    });
  });

  li.appendChild(checkbox); 
  li.appendChild(label);
  li.appendChild(iconRemove); 
  ul.appendChild(li); 
  listDiv.appendChild(ul); 
}
