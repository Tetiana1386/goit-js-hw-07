const refs = {
  render: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]'),
  boxes: document.getElementById('boxes'),
  divBox: document.querySelector('#controls input')
};

refs.render.addEventListener('click', onClickRenderBtn);
refs.destroy.addEventListener('click', onClickDestroyBtn);

function onClickRenderBtn() {
  let amount = +refs.divBox.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let divEl = document.createElement('div');
    divEl.style.cssText = `width: ${size}px; height: ${size}px;`;
    divEl.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
    }

    refs.boxes.appendChild(divEl);
  }
};

function onClickDestroyBtn() {
  refs.divBox.value = '';
  boxes.innerHTML = '';
};