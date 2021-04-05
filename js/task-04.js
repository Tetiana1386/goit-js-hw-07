const subBtnEl = document.querySelector('[data-action="decrement"]');
const addBtnEl = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
};

subBtnEl.addEventListener('click', decrement);
addBtnEl.addEventListener('click', increment);