const tasks = []






export function addTask(taskContent) {
    const listDiv = document.querySelector(".list-item");
    const ul = document.createElement("ul");

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // Définit le type de l'input comme une case à cocher
    const label = document.createElement("label");
    label.textContent = taskContent;

    const iconRemove = document.createElement("i");
    iconRemove.classList.add("fa-solid", "fa-eraser");
    iconRemove.addEventListener("click", function() {
        ul.removeChild(li); // Supprime l'élément <li> de la liste <ul>
    });

    li.appendChild(checkbox); // Ajoute la case à cocher à l'élément <li>
 li.appendChild(label); // Ajoute le texte de la tâche à l'élément <li>
    li.appendChild(iconRemove); // Ajoute l'icône de suppression à l'élément <li>
    ul.appendChild(li); // Ajoute l'élément <li> à la liste <ul>

    listDiv.appendChild(ul); // Ajoute la liste <ul> à la liste
}
