const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(
  ...ingredients.map(ingredient => {
    const itemEl = document.createElement('Li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');
    return itemEl;
  })
);
