import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const savedFormState = localStorage.getItem('feedback-form-state');
if (savedFormState) {
  const { email, message } = JSON.parse(savedFormState);
  emailInput.value = email;
  messageInput.value = message;
}
const updateFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);
form.addEventListener('input', updateFormState);
form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log('Form Data:', formData);
});
