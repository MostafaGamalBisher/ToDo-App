const creatHTML = (task) => `
    <li class="TaskList__taskContent" data-id="${task.id}">
      <div class='TaskList__checkbox' tabindex="0" role="button">
        <img class='TaskList__checkboxImg' src="./src/assets/img/icons/icon-checkmark.svg" alt="checkmark" />
      </div>
      <div class='TaskList__valueContent'>
        <p class='TaskList__value'>${task.value}</p>
        <img src="./src/assets/img/icons/icon-basket.svg" class='TaskList__deleteIcon' alt="basket-icon" />
      </div>
    </li>`;

export const saveToDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromDB = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const addTask = (value, valuePlace) => {
  if (!value.trim()) {
    return;
  }

  const task = {
    id: Date.now(),
    value: value,
  };

  const tasks = getFromDB('tasks');
  tasks.push(task);

  saveToDB('tasks', tasks);

  valuePlace.innerHTML += creatHTML(task);
};

export const renderTasks = (valuePlace) => {
  const tasks = getFromDB('tasks');

  if (!tasks.length) {
    return;
  }

  tasks.forEach((task) => {
    valuePlace.innerHTML += creatHTML(task);
  });
};
