;
document.getElementById('submitBtn').addEventListener('click', (event)=>{
    event.preventDefault();
   
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    let fieldsError = document.getElementById('fieldsError');

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        fieldsError.innerHTML = 'Please input all fields';
        return;
    } else {
        fieldsError.innerHTML = ''
    }
    
    let passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.innerHTML = '';
        passwordError.innerHTML = `<p class= "text-danger fw-bold" style = "font-size: 0.7rem;">Password must be at least 6 characters</p>`;

        return;
    }
    if (password != confirmPassword) {
        document.getElementById('confirmPasswordError').innerHTML = `<p>passwords do not match</p>`;
        return;
    }else{
        window.location.href = '/pages/login.html';
    }

    localStorage.setItem('inputValue', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);



})




