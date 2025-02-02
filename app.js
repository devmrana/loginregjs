// Switching between login and registration forms
const showLoginBtn = document.getElementById('showLoginBtn');
const showRegisterBtn = document.getElementById('showRegisterBtn');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

showLoginBtn.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

showRegisterBtn.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

// Register Functionality
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the email already exists in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.find(user => user.email === email);
    if (userExists) {
        alert('User with this email already exists. Please login.');
    } else {
        const newUser = { fullName, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful. You can now login!');
        // Switch to login form after successful registration
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
});

// Login Functionality
const loginFormElement = document.getElementById('loginForm');

loginFormElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === loginEmail && user.password === loginPassword);

    if (user) {
        alert(`Login successful. Welcome ${user.fullName}!`);
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
