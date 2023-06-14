
let registrationForm = document.querySelector('#registration-form');
document.addEventListener('DOMContentLoaded', function() {
    registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let isValid = true;

    // Name validation
    let name = document.querySelector('#name').value.trim();
    if (name === '') {
      document.querySelector('#name-error').textContent = 'Please enter your name';
      isValid = false;
    } else {
      document.querySelector('#name-error').textContent = '';
    }

    // Email validation
    let email = document.querySelector('#email').value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      document.querySelector('#email-error').textContent = 'Please enter your email address';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.querySelector('#email-error').textContent = 'Please enter a valid email address';
      isValid = false;
    } else {
      document.querySelector('#email-error').textContent = '';
    }

    // Password validation
    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirm-password').value;
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w.!@#$%^&*]{8,}$/;

    if (password === '') {
      document.querySelector('#password-error').textContent = 'Please enter a password';
      isValid = false;
    } else if (!passwordPattern.test(password)) {
      document.querySelector('#password-error').textContent = 'Password must be at least 8 characters long and contain at least one number, one uppercase letter, one lowercase letter, and one special character';
      isValid = false;
    } else {
      document.querySelector('#password-error').textContent = '';
    }

    // Confirm Password validation
    if (confirmPassword === '') {
      document.querySelector('#confirm-password-error').textContent = 'Please confirm your password';
      isValid = false;
    } else if (password !== confirmPassword) {
      document.querySelector('#confirm-password-error').textContent = 'Passwords do not match';
      isValid = false;
    } else {
      document.querySelector('#confirm-password-error').textContent = '';
    }

    if (isValid) {
      // Form passed validation, you can clear the form or redirect to a new page
      registrationForm.reset();
      window.location.href = 'success.html'; // Redirect to success page
      console.log(isValid);
    }
  });
});
