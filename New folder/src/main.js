function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}
function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "admin@gmail.com" && password === "user") {
        window.location="./src/upload.html";

    } else {
        alert("Invalid information");
        return;
    }

}
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {

        e.preventDefault();
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            const target = e.target;
            const value = target.value;
    
            if (target.id === "signupUsername" && (value.length === 0 || value.length < 9)) {
                setInputError(inputElement, "Username must be at least 9 characters in length");
            }
    
            if (target.id === "email") {
                const email = value;
                const regex = /^[a-zA-Z0-9._-]+@vitstudent\.ac\.in$/;
    
                if (!regex.test(email)) {
                    setInputError(target, "Please enter a valid VIT student email address!");
                }
            }
    
            if (target.id === "password" && value.length < 8) {
                setInputError(target, "Password must be at least 8 characters in length");
            }
    
            if (target.id === "confirmPassword" && value !== document.getElementById("password").value) {
                setInputError(target, "Passwords do not match");
            }
        });
    
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
    

});