document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Basic validation
    if (email === '' || password === '') {
        message.textContent = 'Please fill in all fields.';
    } else if (!validateEmail(email)) {
        message.textContent = 'Please enter a valid email address.';
    } else {
        message.textContent = 'Login successful!'; // You can replace this with actual login logic
        // Here you can add logic to handle the login, e.g., sending data to a server
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}