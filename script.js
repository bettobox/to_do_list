// Hämta referenser till HTML-elementen vi kommer att använda
const taskInput = document.getElementById("taskInput"); // Textinput för nya uppgifter
const addTaskButton = document.getElementById("addTaskButton"); // Knapp för att lägga till uppgifter
const taskList = document.getElementById("taskList"); // Lista för att visa uppgifter


// Lägg till en händelselyssnare på knappen "Lägg till uppgift"
addTaskButton.addEventListener("click", () => {
    addTask();
});

// Lägg till en händelselyssnare för tangenttrycket "Enter" i textinput-fältet
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
    }
}


// Lägg till en händelselyssnare på knappen "Lägg till uppgift"
addTaskButton.addEventListener("click", () => {
    // Hämta texten från textinput och ta bort eventuell överflödig mellanslag
    const taskText = taskInput.value.trim();

    // Kontrollera om texten inte är tom
    if (taskText !== "") {
        // Skapa en ny uppgift med den angivna texten
        createTask(taskText);

        // Rensa textinput-fältet
        taskInput.value = "";
    }
});

// Funktion för att skapa en ny uppgift
function createTask(text) {
    // Skapa en ny listpunkt (li-element)
    const li = document.createElement("li");

    // Ange texten för listpunkten till den angivna uppgiften
    li.textContent = text;

    // Skapa en knapp för att ta bort uppgiften
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    // Lägg till knappen i listpunkten
    li.appendChild(deleteButton);

    // Lägg till en händelselyssnare på knappen för att ta bort uppgiften
    deleteButton.addEventListener("click", () => {
        // Ta bort den överordnade listpunkten när knappen klickas
        li.remove();
    });

    // Lägg till en händelselyssnare på listpunkten för att markera som slutförd
    li.addEventListener("click", () => {
        // Byt klassen "completed" på listpunkten för att ändra dess stil
        li.classList.toggle("completed");
    });

    // Lägg till den nya listpunkten i listan för att visa uppgifter
    taskList.appendChild(li);
}




