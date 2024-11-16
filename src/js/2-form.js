const formData = {
  email: '',
  message: '',
};

function saveDataToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveDataToLocalStorage();
});

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const { email, message } = JSON.parse(savedData);

    document.querySelector("[name='email']").value = email;
    document.querySelector("[name='message']").value = message;

    formData.email = email;
    formData.message = message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';

    form.reset();
  }
});
