import { addTask } from './task.js'; // Importez la fonction addTask depuis le fichier task.js

const taskForm = document.getElementById("form");
const todoInput = document.getElementById("todo");


taskForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre et de recharger la page
    const taskContent = todoInput.value.trim(); // Récupère la valeur de l'input en supprimant les espaces vides au début et à la fin
    if (taskContent !== "") {
        addTask(taskContent); // Appelle la fonction addTask pour ajouter la tâche à la liste
        todoInput.value = ""; // Efface le contenu de l'input après l'ajout de la tâche
    }
});