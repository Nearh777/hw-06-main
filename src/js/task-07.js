const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
  spanEl.style.fontSize = `${e.currentTarget.value}px`;
}
