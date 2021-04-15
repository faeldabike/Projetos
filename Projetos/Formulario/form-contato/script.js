let email =  document.getElementById('email');
let password = document.getElementById('password');

email.addEventListener('focus',()=>{
    email.style.borderColor = "#41545e";
})
email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc";
})
password.addEventListener('focus',()=>{
    password.style.borderColor = "#41545e";
})
password.addEventListener('blur',()=>{
    password.style.borderColor = "#ccc";
})