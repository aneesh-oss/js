// Button Interaction
const clickButton = document.getElementById('clickButton');
const clickMessage = document.getElementById('clickMessage');

clickButton.addEventListener('click', () => {
  clickMessage.textContent = 'Button Clicked!';
});

// Form Interaction
const sampleForm = document.getElementById('sampleForm');
const formMessage = document.getElementById('formMessage');

sampleForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('nameInput').value;
  formMessage.textContent = `Hello, ${nameInput}! Form Submitted.`;
});
