import '../scss/main.scss';
import {
  EmptyList,
  main,
  searchBarButton,
  searchBarInput,
  taskList,
  themeToggleButton,
} from './elements';
import {
  addTask,
  getFromDB,
  renderEmptyState,
  renderTasks,
  renderTheme,
  saveToDB,
  toggleTheme,
} from './utils';

themeToggleButton.addEventListener('click', () => {
  toggleTheme(main);

  if (main.classList.contains('App--isDark')) {
    localStorage.setItem('theme', 'App--isDark');
  } else {
    localStorage.removeItem('theme');
  }
});

renderEmptyState(EmptyList);
renderTheme(main);
renderTasks(taskList);

searchBarButton.addEventListener('click', (e) => {
  e.preventDefault();
  addTask(searchBarInput.value, taskList);

  searchBarInput.value = '';
  renderEmptyState(EmptyList);
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('TaskList__deleteIcon')) {
    const parent = e.target.closest('.TaskList__taskContent');
    const parentID = parent.dataset.id;

    const confirmed = confirm('هل تريد حذف هذه المهمة؟');
    if (!confirmed) {
      return;
    }

    parent.remove();

    const tasks = getFromDB('tasks');
    const newTasks = tasks.filter((task) => task.id !== Number(parentID));

    saveToDB('tasks', newTasks);

    renderEmptyState(EmptyList);
  } else {
    return;
  }
});
