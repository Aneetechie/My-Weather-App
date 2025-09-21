document.getElementById('resetBtn').addEventListener('click', ()=>{
    const resetPassword = document.getElementById('resetpassword').value.trim();
    const resetConfirmPassword = document.getElementById('resetconfirm-password').value.trim();

    if (resetPassword === '' || resetConfirmPassword === '') {
        document.getElementById('resetFieldError').innerHTML = 'please input all fields';
        return;
    }

    if (resetPassword.length < 6) {
        document.getElementById('passwordError').innerHTML = 'password must be atleast 6 characters';
       return;
    }

    if (resetPassword != resetConfirmPassword) {
        document.getElementById('confirmPasswordError').innerHTML = 'passwords do not match'
    } else {
        document.getElementById('confirmPasswordError').innerHTML = '';
        alert('password reset successful...')
        window.location.href = '/pages/login.html'
    }

    localStorage.setItem('password', resetPassword);
})