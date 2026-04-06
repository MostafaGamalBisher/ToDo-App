import checkmarkIcon from '../assets/img/icons/icon-checkmark.svg';
import basketIcon from '../assets/img/icons/icon-basket.svg';

const creatHTML = (task) => `
    <li class="TaskList__taskContent ${task.completed ? 'TaskList__taskContent--isActive' : ''}" data-id="${task.id}">
      <div class='TaskList__checkbox' tabindex="0" role="button">
        <img class='TaskList__checkboxImg' src="${checkmarkIcon}" alt="checkmark" />
      </div>
      <div class='TaskList__valueContent'>
        <p class='TaskList__value'>${task.value}</p>
        <img src="${basketIcon}" class='TaskList__deleteIcon' alt="basket-icon" />
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
    completed: false,
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

export const toggleTheme = (element) => {
  element.classList.toggle('App--isDark');
};

export const renderTheme = (element) => {
  const theme = localStorage.getItem('theme');

  if (!theme) {
    return;
  }
  toggleTheme(element);
};

export const renderEmptyState = (emptyElement) => {
  const tasks = getFromDB('tasks');
  emptyElement.classList.toggle('hidden', tasks.length > 0);
};

export const toggleComplete = (id) => {
  const tasks = getFromDB('tasks');

  const updtaedTasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  saveToDB('tasks', updtaedTasks);
};
