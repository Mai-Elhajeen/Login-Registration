const signInBtn = document.querySelector('#signIn-btn');
const signUpBtn = document.querySelector('#signup-btn');
const container = document.querySelector('.container');

signUpBtn.addEventListener('click', () => {
    container.classList.add('sign-up-mode')
})

signInBtn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode')
})