const registerFormEl = document.querySelector('.login-form');

registerFormEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  e.currentTarget.reset();
}
