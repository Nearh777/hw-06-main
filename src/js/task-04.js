const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;
valueEl.textContent = counterValue;

decrementBtn.addEventListener('click', onButtonDecrementClick);
incrementBtn.addEventListener('click', onButtonIncrementClick);

function onButtonDecrementClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onButtonIncrementClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
