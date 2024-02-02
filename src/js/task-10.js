const bodyRef = document.querySelector('body');
const buttonCreateRef = document.querySelector('button[data-create]');
const buttonDestroyRef = document.querySelector('button[data-destroy]');
const divRef = document.querySelector('#boxes');
const inputRef = document.querySelector('input');

buttonCreateRef.addEventListener('click', onButtonClickCreate);
buttonDestroyRef.addEventListener('click', onButtonClickDestroy);
inputRef.addEventListener('input', onInput);

let amount = 0;
let width = 30;
let height = 30;

function onButtonClickCreate() {
  amount = Number(inputRef.value);
  createBoxes(amount);
}

function onButtonClickDestroy() {
  divRef.innerHTML = '';
  amount = 0;
  width = 30;
  height = 30;
}

function onInput(e) {
  amount = Number(e.target.value);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();

    divRef.append(div);
    width += 10;
    height += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
