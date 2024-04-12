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
  
  // Print message using setTimeout
  setTimeout(() => {
    console.log('Welcome to our website!');
  }, 3000);
  
  // Example of setInterval
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    console.log(`Counter: ${count}`);
    if (count === 10) {
      clearInterval(intervalId);
    }
  }, 1000);
  
  // Example of void operator
  void console.log('This message is logged using void operator.');
  