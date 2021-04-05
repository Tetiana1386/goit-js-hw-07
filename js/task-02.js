const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');
const foodIngredients = ingredients.forEach(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.innerHTML = ingredient;
  listEl.append(itemEl);
  console.log(itemEl);
  });