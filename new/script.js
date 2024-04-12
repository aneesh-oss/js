// Form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const formInfo = `
    Contact Information:
    - Name: ${name}
    - Email: ${email}
    - Message: ${message}
  `;

  printFormInfo(formInfo);
    
    alert('Form submitted successfully!');
  });
  

function printFormInfo(info) {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`<html><head><title>Contact Form Information</title></head><body><pre>${info}</pre></body></html>`);
  printWindow.document.close();
  printWindow.print();
}
  // Counter using setInterval and void operator
  let count = 0;
  const counterButton = document.getElementById('counterButton');
  const counterInterval = setInterval(() => {
    count++;
    counterButton.textContent = count;
    if (count === 15) {
      clearInterval(counterInterval);
      count = 0;
    }
  }, 1000);
  
  // Show message after 3 seconds using setTimeout and void operator
  setTimeout(() => {
    alert('Welcome to our website!');
  }, 3000);
  