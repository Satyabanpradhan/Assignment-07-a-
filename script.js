let taskForm = document.querySelector("#taskForm");
let taskInput = document.querySelector("#taskInput");
let categoryInput = document.querySelector("#category");
let taskContainer = document.querySelector("#taskContainer");

let searchInput = document.querySelector("#searchInput");
let filterCategory = document.querySelector("#filterCategory");

let totalTasks = document.querySelector("#totalTasks");
let completedTasks = document.querySelector("#completedTasks");
let pendingTasks = document.querySelector("#pendingTasks");
let clearAllBtn = document.querySelector("#clearAllBtn");
let themeBtn = document.querySelector("#themeBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "Light Mode";
}

showTasks();

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let taskName = taskInput.value.trim();

    if (taskName === "") {
        return;
    }

    let newTask = {
        id: Date.now(),
        title: taskName,
        category: categoryInput.value,
        status: "pending"
    };

    tasks.push(newTask);
    saveTasks();
    showTasks();

    taskInput.value = "";
});

function showTasks() {
    taskContainer.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];

        let card = document.createElement("div");
        card.className = "task-card";

        if (task.status === "completed") {
            card.classList.add("completed");
        }

        card.dataset.id = task.id;
        card.dataset.category = task.category;

        let title = document.createElement("h3");
        title.className = "task-title";
        title.textContent = task.title;

        let category = document.createElement("p");
        category.className = "task-category";
        category.textContent = task.category;

        let actions = document.createElement("div");
        actions.className = "task-actions";

        let editButton = document.createElement("button");
        editButton.className = "edit-btn";
        editButton.textContent = "Edit";

        let completeButton = document.createElement("button");
        completeButton.className = "complete-btn";
        completeButton.textContent = "Complete";

        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";

        actions.append(editButton);
        actions.append(completeButton);
        actions.append(deleteButton);

        card.append(title);
        card.append(category);
        card.append(actions);

        taskContainer.append(card);
    }

    countTasks();
    searchAndFilter();
}

taskContainer.addEventListener("click", function (event) {
    let button = event.target;
    let card = button.closest(".task-card");

    if (card === null) {
        return;
    }

    let id = Number(card.dataset.id);

    if (button.classList.contains("delete-btn")) {
        deleteTask(id);
    }

    if (button.classList.contains("complete-btn")) {
        completeTask(id);
    }

    if (button.classList.contains("edit-btn")) {
        editTask(id);
    }
});

function deleteTask(id) {
    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });

    saveTasks();
    showTasks();
}

function completeTask(id) {
    let task = tasks.find(function (task) {
        return task.id === id;
    });

    if (task.status === "completed") {
        task.status = "pending";
    } else {
        task.status = "completed";
    }

    saveTasks();
    showTasks();
}

function editTask(id) {
    let task = tasks.find(function (task) {
        return task.id === id;
    });

    let newTitle = prompt("Edit task", task.title);

    if (newTitle !== null && newTitle.trim() !== "") {
        task.title = newTitle.trim();
        saveTasks();
        showTasks();
    }
}

searchInput.addEventListener("input", searchAndFilter);
filterCategory.addEventListener("change", searchAndFilter);

function searchAndFilter() {
    let searchText = searchInput.value.toLowerCase();
    let selectedCategory = filterCategory.value;
    let cards = document.querySelectorAll(".task-card");

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let title = card.querySelector(".task-title").textContent.toLowerCase();
        let category = card.dataset.category;

        let matchSearch = title.includes(searchText);
        let matchCategory = selectedCategory === "all" || selectedCategory === category;

        if (matchSearch && matchCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

function countTasks() {
    let completeCount = 0;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status === "completed") {
            completeCount++;
        }
    }

    totalTasks.textContent = tasks.length;
    completedTasks.textContent = completeCount;
    pendingTasks.textContent = tasks.length - completeCount;
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

clearAllBtn.addEventListener("click", function () {
    let answer = confirm("Delete all tasks?");

    if (answer === true) {
        tasks = [];
        saveTasks();
        showTasks();
    }
});

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

let grandparent = document.querySelector("#grandparent");
let parentBox = document.querySelector("#parent");
let childBtn = document.querySelector("#childBtn");
let eventLog = document.querySelector("#eventLog");

let eventText = "";

function addEventText(text) {
    if (eventText === "") {
        eventText = text;
    } else {
        eventText = eventText + " -> " + text;
    }

    eventLog.textContent = eventText;
}

grandparent.addEventListener("click", function () {
    eventText = "";
    addEventText("Capturing: Grandparent");
}, true);

parentBox.addEventListener("click", function () {
    addEventText("Capturing: Parent");
}, true);

childBtn.addEventListener("click", function () {
    addEventText("Capturing: Child");
}, true);

childBtn.addEventListener("click", function () {
    addEventText("Bubbling: Child");
});

parentBox.addEventListener("click", function () {
    addEventText("Bubbling: Parent");
});

grandparent.addEventListener("click", function () {
    addEventText("Bubbling: Grandparent");
});
