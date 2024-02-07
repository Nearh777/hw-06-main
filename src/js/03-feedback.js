const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(e) {
  e.preventDefault();
  console.log('відправляєм форму');
}

function onTextareaInput(e) {
  const message = e.target.value;
  localStorage.setItem('feedback-form-state', message);
  console.log(message);
}
