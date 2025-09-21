let displayError = document.getElementById('emailForgotError');

document.getElementById('forgotPasswordBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    const forgotEmail = document.getElementById('confirmEmail').value.trim();
    const confirmEmail = localStorage.getItem('email');

    if (forgotEmail != confirmEmail) {
        displayError.innerHTML = 'No account found for this email'
    } else {
        displayError.innerHTML = '';
        alert("Email found! Redirecting you to the reset page");
        window.location.href = '/pages/resetPassword.html'
    }
})