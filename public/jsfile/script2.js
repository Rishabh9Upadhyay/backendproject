function signup() {
    // You can add your user registration logic here.
    // For this example, we'll just display an alert.
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        alert('Sign Up successful! Redirecting to login...');
        // You can redirect the user to the login page after successful registration.
        window.location.href = 'login.html';
    } else {
        alert('Please fill in all the required fields.');
    }
}