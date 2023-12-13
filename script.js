let errorElement = document.getElementById('error');
errorElement.style.display = 'none';

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