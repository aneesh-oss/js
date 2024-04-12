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
  const emailInput =  document.getElementById('emailInput').value;
  if(!nameInput || !emailInput){
    formMessage.style.color='red';
    formMessage.innerHTML="Please fill out all fields.";
  } 
  else{
    formMessage.style.color='green';
    if(validateEmail(emailInput)) {
        alert("Invalid Email");
    }
    else{
        formMessage.textContent = `Name: ${nameInput} , Email:${emailInput}`;
        formMessage.textContent = `Hello, ${nameInput}! and ${emailInput} Form Submitted.`;
    }
  }
});
function validateEmail(email) {
    const emailRegex = /^[a-z0-9.]+@[a-z]+\.[a-zA-Z]{2,}$/;
    return!emailRegex.test(email);
}
//   if(validateEmail(emailInput)) {
//     alert("Invalid Email");
//     } else if (!nameInput || !emailInput ) {
//       alert ("Please fill out all fields");
//     } else{
//       formMessage.textContent = `Name: ${nameInput} , Email:${emailInput}`;
//       formMessage.textContent = `Hello, ${nameInput}! and ${emailInput} Form Submitted.`;
//     }
// });
//   } else {
//     formMessage.textContent = `Name: ${nameInput} Email: ${emailInput}`;
//     formMessage.textContent = `Hello, ${nameInput}! and ${emailInput} Form Submitted.`;
//   }
// });

function validateEmail(email) {
    const emailRegex = /^[a-z0-9.]+@[a-z]+\.[a-zA-Z]{2,}$/;
    return!emailRegex.test(email);
}

