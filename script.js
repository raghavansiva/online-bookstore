let loginText = document.querySelector(".login-text");
let login = document.querySelector(".login");
let Create = document.querySelector(".Create");
let LoginCreate = document.querySelector(".LoginAccount");
let qn = document.querySelector(".qn");
let password = document.querySelector(".password")

function register() {
    loginText.textContent = "Create new Account"
    login.textContent = "CREATE";
    Create.style.display = "none"
    LoginCreate.style.display = "block"
    qn.textContent = "Already have an account?"
}

function loginF() {
    loginText.textContent = "Login to your Account"
    login.textContent = "LOGIN";
    Create.style.display = "block";
    LoginCreate.style.display = "none"
    password.style.
    qn.textContent = "Don't you have an account?"
}