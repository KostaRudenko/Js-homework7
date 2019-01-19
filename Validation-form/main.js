let email = document.getElementById('email-Js');
let password = document.getElementById('password-Js');
let confirmPassword = document.getElementById('confirm-password-Js');
let submit = document.getElementById('submit');

let checkEmail = () => {
    if (email.value.endsWith('@yandex.ru') || email.value.endsWith('@gmail.com')) {
        email.setCustomValidity('');
        email.style.border = '2px solid green';
    } else {
        email.setCustomValidity("Domain should be @yandex.ru or @gmail.com");
    }
}
email.onkeyup = checkEmail;

let checkPass = () => {
    var symbols = new RegExp(/(?=.*[!@#$%^&*])/g);

    if (symbols.test(password.value) == false || password.value.length <= 6) {
        password.setCustomValidity("Password must containt at least 1 spec symbol [!@#$%^&*] and length should be more then 6");
    } else {
        password.style.border = '2px solid green';
        password.setCustomValidity('');
    }
}
password.onkeyup = checkPass;

let validatePassword = () => {
     if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match");
        confirmPassword.style.border = '2px solid red';
    } else {
        confirmPassword.setCustomValidity('');
        confirmPassword.style.border = '2px solid green';
    }
}
password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;

