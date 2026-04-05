import '../scss/main.scss';
import {
  main,
  searchBarButton,
  searchBarInput,
  taskList,
  themeToggleButton,
} from './elements';
import { addTask, getFromDB, renderTasks } from './utils';

themeToggleButton.addEventListener('click', () => {
  main.classList.toggle('App--isDark');
});

renderTasks(taskList);

searchBarButton.addEventListener('click', (e) => {
  e.preventDefault();
  addTask(searchBarInput.value, taskList);

  searchBarInput.value = '';
});

const newArray = (item, parentID, array) => {
  if (item.id === parentID) {
    array.filter(item.id !== array);
  }
};

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('TaskList__deleteIcon')) {
    const parent = e.target.closest('.TaskList__taskContent');

    const parentID = parent.dataset.id;

    parent.remove();

    const tasks = getFromDB('tasks');
    const newTasks = newArray(parent, parentID, tasks);
  } else {
    return;
  }
});
