const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
  form.reset();
  showThankYouPopup();
});

function showThankYouPopup() {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  const message = document.createElement('p');
  message.textContent = 'Thank you for contacting us!';
  popup.appendChild(message);
  document.body.appendChild(popup);
  setTimeout(() => {
    document.body.removeChild(popup);
  }, 4000);
}
