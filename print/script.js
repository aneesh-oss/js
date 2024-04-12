// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    alert('Form submitted successfully!');
  });
  
  // Email validation
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  // Counter using setInterval
  let count = 0;
  const counterElement = document.getElementById('counter');
  const counterInterval = setInterval(() => {
    count++;
    counterElement.textContent = count;
    if (count === 15) {
      clearInterval(counterInterval);
      count = 0;
    }
  }, 1000);
  
  // Print message using setTimeout and void operator
  //setTimeout(()
  