let errorElement = document.getElementById('error');
errorElement.style.display = 'none';
// Reference to the form element
const form = document.getElementById('signup-form');

// Event listener for form submission
form.addEventListener('submit', function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Check if all requirements are fulfilled (add your validation conditions here)
  const isRequirementsFulfilled = checkRequirements();

  if (isRequirementsFulfilled) {
    // If requirements are fulfilled, submit the form
    form.submit();
  } else {
    // If requirements are not fulfilled, you can show an error message or take appropriate action
    alert('Please fill in all required fields and ensure password matching.');
  }
});

function checkPasswords() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        // Passwords don't match
        errorElement.style.display = 'block';
        document.getElementById('password').style.border = '1px solid red';
        document.getElementById('confirm-password').style.border = '1px solid red';
    } else {
        // Passwords match
        errorElement.style.display = 'none';
        document.getElementById('password').style.border = '1px solid #ccc';
        document.getElementById('confirm-password').style.border = '1px solid #ccc';
        document.querySelector('#submit').setAttribute('type', 'submit');
    }
}

// Function to check requirements (customize this based on your validation criteria)
function checkRequirements() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Add your validation logic here, e.g., check if fields are not empty, passwords match, etc.
  // Return true if all requirements are fulfilled, otherwise return false
  return (
    firstName.trim() !== '' &&
    lastName.trim() !== '' &&
    email.trim() !== '' &&
    phoneNumber.trim() !== '' &&
    password.trim() !== '' &&
    confirmPassword.trim() !== '' &&
    password === confirmPassword
  );
}