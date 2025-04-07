const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

const NameError = document.getElementById('NameError');
const EmailError = document.getElementById('EmailError');
const PasswordError = document.getElementById('PasswordError');
const successMessage = document.getElementById('successMessage'); // Add a success message element

form.addEventListener('submit', (e) => {
    let isValid = true; // Flag to check if form is valid

    // Name validation
    if (name.value.trim() === '') {
        e.preventDefault();
        NameError.innerHTML = 'Please enter your name';
        isValid = false;
    } else {
        NameError.innerHTML = '';
    }

    // Email validation
    const emailPattern = /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]+\.[A-Za-z]{2,4}$/;
    if (!email.value.match(emailPattern)) {
        e.preventDefault();
        EmailError.innerHTML = 'Invalid email id';
        isValid = false;
    } else {
        EmailError.innerHTML = '';
    }

    // Password validation
    if (password.value.trim() === '') {
        e.preventDefault();
        PasswordError.innerHTML = 'Please enter your password';
        isValid = false;
    } else if (password.value.length < 6) {
        e.preventDefault();
        PasswordError.innerHTML = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        PasswordError.innerHTML = '';
    }

    // If all validations pass, show success message
    if (isValid) {
        e.preventDefault(); // Prevent form submission for demonstration
        alert('Form submitted successfully!');

        // Optionally, reset the form
        form.reset();
    }
});
