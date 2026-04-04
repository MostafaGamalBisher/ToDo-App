export const addTask = (value, valuePlace) => {
  if (!value.trim()) {
    return;
  }

  const taskHTML = `
    <li class="TaskList__taskContent">
      <div class='TaskList__checkbox' tabindex="0" role="button">
        <img class='TaskList__checkboxImg' src="./src/assets/img/icons/icon-checkmark.svg" alt="checkmark" />
      </div>
      <div class='TaskList__valueContent'>
        <p class='TaskList__value'>${value}</p>
        <img src="./src/assets/img/icons/icon-basket.svg" class='TaskList__deleteIcon' alt="basket-icon" />
      </div>
    </li>`;

  valuePlace.innerHTML = taskHTML;
};
