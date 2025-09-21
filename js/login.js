
    document.getElementById('loginBtn').addEventListener('click', (e)=>{
        e.preventDefault();
        const inputValue = document.getElementById('loginName').value.trim();
        const loginPassword = document.getElementById('loginPassword').value.trim();

        const getUsername = localStorage.getItem('inputValue');
        const getPassword = localStorage.getItem('password');

    

        if (inputValue != getUsername) {
            document.getElementById('nameErrorLogin').innerHTML = 'Username not registered';
            return;
        } else {
            document.getElementById('nameErrorLogin').innerHTML = '';
        }

        if (loginPassword != getPassword) {
            document.getElementById('passwordErrorLoggin').innerHTML = 'Incorrect password';
            return;
        } else {
            document.getElementById('passwordErrorLoggin').innerHTML = '';
        }

        if (getUsername && getPassword) {
            alert('Login Successful')
            window.location.href = '/pages/weather.html'
            return;
        }   
    })
 