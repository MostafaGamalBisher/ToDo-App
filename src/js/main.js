import '../scss/main.scss';
import {
  main,
  searchBarButton,
  searchBarInput,
  taskList,
  themeToggleButton,
} from './elements';
import { addTask } from './utils';

themeToggleButton.addEventListener('click', () => {
  main.classList.toggle('App--isDark');
});

searchBarButton.addEventListener('click', (e) => {
  e.preventDefault();
  addTask(searchBarInput.value, taskList);
});
