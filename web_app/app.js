// app.js

// Initialize an empty array to store tasks
const tasks = [];

// Add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
    }
}


// Create a new task object and add it to the tasks array
function createTask(description) {
    const task = {
        description: description,
        completed: false,
        dateAdded: new Date().toLocaleDateString(),
    };

    tasks.push(task);
    renderTasks();
}

// Render tasks in the UI
function renderTasks() {
    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");

    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <label>
                <input type="checkbox" onchange="toggleTaskCompletion(${index})" ${task.completed ? "checked" : ""}>
                ${task.description}
                <span class="task-date">(Added on ${task.dateAdded})</span>
                <button class="edit-button" onclick="editTask(${index})"></button>
                <button class="delete-button" onclick="deleteTask(${index})"></button>
            </label>
        `;

        listItem.classList.add("task-item"); // Add a class for consistent styling

        if (task.completed) {
            completedTasksList.appendChild(listItem);
        } else {
            pendingTasksList.appendChild(listItem);
        }
    });
}

// ... (rest of the code)

// Toggle task completion status
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Edit a task
function editTask(index) {
    const taskItem = document.querySelectorAll("li")[index];
    const label = taskItem.querySelector("label");
    const input = document.createElement("input");
    input.type = "text";
    input.value = label.textContent.trim().split(" (")[0]; // Extract only the task description
    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            label.textContent = input.value;
            const taskId = index; 
            const updatedTaskDescription = input.value;
            updateTask(taskId, updatedTaskDescription);
        }
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.onclick = function () {
        label.textContent = input.value; // Restore the original task description
        cancelButton.remove(); // Remove the cancel button
    };

    label.textContent = "";
    label.appendChild(input);
    label.appendChild(cancelButton);
    input.focus();
}

// Update a task description
function updateTask(taskId, updatedTaskDescription) {
    tasks[taskId].description = updatedTaskDescription;
    renderTasks();
}

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Initial rendering
renderTasks();

