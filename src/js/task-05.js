const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  outputEl.textContent = event.currentTarget.value.trim();

  if (event.currentTarget.value === '') {
    outputEl.textContent = 'Anonymous';
  }
}
