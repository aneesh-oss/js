document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const userDetails = `Name: ${name}<br>Email: ${email}`;
    document.getElementById('userDetails').innerHTML = userDetails;
  });
  