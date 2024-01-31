const listEl = document.querySelectorAll('.item');

console.log('Кількість категорій:', listEl.length);
listEl.forEach(item => {
  console.log('Категорія:', item.firstElementChild.textContent);
  console.log('Кількість елементів:', item.lastElementChild.children.length);
});
