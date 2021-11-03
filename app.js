const icon = document.getElementById('icon');
const password = document.getElementById('password')

icon.addEventListener('click', function() {
    if(password.type == 'password'){
        password.type = 'text'
        icon.classList.add("fa-eye-slash");
    } else {
        password.type = 'password'
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});