import { addTask } from './task.js';

const taskForm = document.getElementById("form");
const todoInput = document.getElementById("todo");


taskForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const taskContent = todoInput.value.trim(); 
    if (taskContent !== "") {
        addTask(taskContent); 
        todoInput.value = ""; 
    }
});