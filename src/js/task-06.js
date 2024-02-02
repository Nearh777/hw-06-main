const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
  if (e.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}
