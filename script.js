const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const category = document.querySelector("#category");
const taskContainer = document.querySelector("#taskContainer");

const searchInput = document.querySelector("#searchInput");
const filterCategory = document.querySelector("#filterCategory");

const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");
const pendingTasks = document.querySelector("#pendingTasks");

const clearAllBtn = document.querySelector("#clearAllBtn");
const themeBtn = document.querySelector("#themeBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

/* --------------------------
   ADD TASK
--------------------------- */

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = taskInput.value.trim();

  if (!title) return;

  const task = {
    id: Date.now(),
    title,
    category: category.value,
    status: "pending",
  };

  tasks.push(task);

  saveTasks();
  renderTasks();

  taskForm.reset();
});

/* --------------------------
   RENDER TASKS
--------------------------- */

function renderTasks() {
  taskContainer.innerHTML = "";

  tasks.forEach((task) => {
    const card = document.createElement("div");

    card.classList.add("task-card");

    if (task.status === "completed") {
      card.classList.add("completed");
    }

    card.setAttribute("data-id", task.id);
    card.setAttribute("data-status", task.status);
    card.setAttribute("data-category", task.category);

    const title = document.createElement("h3");
    title.classList.add("task-title");

    const text = document.createTextNode(task.title);
    title.append(text);

    const categoryText = document.createElement("p");
    categoryText.classList.add("task-category");
    categoryText.textContent = task.category;

    const actions = document.createElement("div");
    actions.classList.add("task-actions");

    actions.innerHTML = `
      <button class="edit-btn"><span aria-hidden="true">✎</span>Edit</button>
      <button class="complete-btn"><span aria-hidden="true">✓</span>Complete</button>
      <button class="delete-btn"><span aria-hidden="true">×</span>Delete</button>
    `;

    card.append(title);
    card.append(categoryText);
    card.append(actions);

    taskContainer.append(card);
  });

  updateCounters();
}

/* --------------------------
   EVENT DELEGATION
--------------------------- */

taskContainer.addEventListener("click", (e) => {
  const card = e.target.closest(".task-card");
  const actionBtn = e.target.closest("button");

  if (!card || !actionBtn) return;

  const id = Number(card.dataset.id);

  /* DELETE */

  if (actionBtn.classList.contains("delete-btn")) {
    tasks = tasks.filter((task) => task.id !== id);

    saveTasks();
    renderTasks();
  }

  /* COMPLETE */

  if (actionBtn.classList.contains("complete-btn")) {
    const task = tasks.find((task) => task.id === id);

    task.status =
      task.status === "completed"
        ? "pending"
        : "completed";

    saveTasks();
    renderTasks();
  }

  /* EDIT */

  if (actionBtn.classList.contains("edit-btn")) {
    const task = tasks.find((task) => task.id === id);

    const newTitle = prompt(
      "Edit Task",
      task.title
    );

    if (newTitle) {
      task.title = newTitle;

      saveTasks();
      renderTasks();
    }
  }
});

/* --------------------------
   SEARCH
--------------------------- */

searchInput.addEventListener("input", () => {
  const value =
    searchInput.value.toLowerCase();

  document
    .querySelectorAll(".task-card")
    .forEach((card) => {
      const text =
        card.querySelector(".task-title")
        .textContent
        .toLowerCase();

      card.style.display =
        text.includes(value)
          ? "block"
          : "none";
    });
});

/* --------------------------
   FILTER CATEGORY
--------------------------- */

filterCategory.addEventListener(
  "change",
  () => {
    const value =
      filterCategory.value;

    document
      .querySelectorAll(".task-card")
      .forEach((card) => {
        if (
          value === "all" ||
          card.dataset.category === value
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
  }
);

/* --------------------------
   COUNTERS
--------------------------- */

function updateCounters() {
  totalTasks.textContent =
    tasks.length;

  const completed =
    tasks.filter(
      (task) =>
        task.status === "completed"
    ).length;

  completedTasks.textContent =
    completed;

  pendingTasks.textContent =
    tasks.length - completed;
}

/* --------------------------
   LOCAL STORAGE
--------------------------- */

function saveTasks() {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
}

/* --------------------------
   CLEAR ALL
--------------------------- */

clearAllBtn.addEventListener(
  "click",
  () => {
    if (
      confirm(
        "Delete all tasks?"
      )
    ) {
      tasks = [];

      saveTasks();
      renderTasks();
    }
  }
);

/* --------------------------
   THEME TOGGLE
--------------------------- */

themeBtn.addEventListener(
  "click",
  () => {
    document.body.classList.toggle(
      "light"
    );

    const theme =
      document.body.classList.contains(
        "light"
      )
        ? "light"
        : "dark";

    document.body.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "theme",
      theme
    );

    updateThemeButton(theme);
  }
);

const savedTheme =
  localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add(
    "light"
  );
}

document.body.setAttribute(
  "data-theme",
  savedTheme === "light"
    ? "light"
    : "dark"
);

updateThemeButton(
  document.body.dataset.theme
);

function updateThemeButton(theme) {
  const icon =
    themeBtn.querySelector(".theme-icon");

  const text =
    themeBtn.querySelector(".theme-text");

  if (theme === "light") {
    icon.textContent = "☀";
    text.textContent = "Light";
    themeBtn.setAttribute(
      "aria-label",
      "Switch to dark theme"
    );
  } else {
    icon.textContent = "☾";
    text.textContent = "Dark";
    themeBtn.setAttribute(
      "aria-label",
      "Switch to light theme"
    );
  }
}

/* --------------------------
   EVENT BUBBLING
--------------------------- */

const grandparent =
  document.querySelector(
    "#grandparent"
  );

const parentBox =
  document.querySelector(
    "#parent"
  );

const child =
  document.querySelector(
    "#childBtn"
  );

child.addEventListener(
  "click",
  () => {
    console.log("Child");
  }
);

parentBox.addEventListener(
  "click",
  () => {
    console.log("Parent");
  }
);

grandparent.addEventListener(
  "click",
  () => {
    console.log("Grandparent");
  }
);

/* --------------------------
   EVENT CAPTURING
--------------------------- */

grandparent.addEventListener(
  "click",
  () => {
    console.log(
      "Capturing Grandparent"
    );
  },
  true
);

parentBox.addEventListener(
  "click",
  () => {
    console.log(
      "Capturing Parent"
    );
  },
  true
);

child.addEventListener(
  "click",
  () => {
    console.log(
      "Capturing Child"
    );
  },
  true
);

