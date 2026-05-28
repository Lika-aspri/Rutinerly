const timeline = document.getElementById("timeline");
const tasksContainer = document.getElementById("tasksContainer");
const addBtn = document.getElementById("addBtn");

/* TIMELINE */

for(let i = 0; i < 25; i++){

  const row = document.createElement("div");

  row.classList.add("time-row");

  const hour = i.toString().padStart(2, "0") + ":00";

  row.innerHTML = `
    <div class="time-label">${hour}</div>
    <div class="line"></div>
  `;

  timeline.appendChild(row);
}

/* EMPTY TASK ARRAY */

const tasks = [];

/* RENDER TASKS */

function renderTasks(){

  tasksContainer.innerHTML = "";

  tasks.forEach(task => {

    const taskCard = document.createElement("div");

    taskCard.classList.add("task");

    taskCard.style.top = `${task.start * 80}px`;

    taskCard.style.height = `${task.duration * 80}px`;

    taskCard.style.background = task.color;

    taskCard.innerHTML = `
      <div class="task-top">

        <div class="task-title">
          ${task.title}
        </div>

        <div class="task-icon">
          <i class="fa-solid ${task.statusIcon}"></i>
        </div>

      </div>

      <div class="task-time">
        ${task.time}
      </div>
    `;

    tasksContainer.appendChild(taskCard);

  });

}

/* ADD TASK */

addBtn.addEventListener("click", () => {

  const title = prompt("Task name:");
  if(!title) return;

  const start = prompt("Start hour (0-23):");
  if(start === null) return;

  const duration = prompt("Duration in hours:");
  if(duration === null) return;

  const color = prompt(
    "Color HEX (#ffb3b3):",
    "#d9d9d9"
  );

  const newTask = {

    title: title,

    start: Number(start),

    duration: Number(duration),

    color: color || "#d9d9d9",

    statusIcon: "fa-clock",

    time: `${start}:00`

  };

  tasks.push(newTask);

  renderTasks();

});
