import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const sevedForm = localStorage.getItem('feedback-form-state');
if (sevedForm) {
  const { email, message } = JSON.parse(sevedForm);
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
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log('Form Data:', {
    email: emailInput.value,
    message: messageInput.value,
  });
});
