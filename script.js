let errorElement = document.getElementById('error');
errorElement.style.display = 'none';
// Reference to the form element
const form = document.getElementById('signup-form');
const submitButton = document.getElementById('submit');

// Event listener for form submission
submitButton.addEventListener('click', function () {
  // Check if all requirements are fulfilled
  if (checkRequirements()) {
    // If requirements are fulfilled, submit the form
    submitButton.type = 'submit';
    form.submit();
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
    }
}

// Function to check requirements
function checkRequirements() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;

    // Return true if all requirements are fulfilled, otherwise return false
    return (
        email.trim() !== '' &&
        password.trim() !== '' &&
        confirmPassword.trim() !== '' &&
        password === confirmPassword
    );
}