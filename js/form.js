function setMessageForm(formElement, type, message) {
    const message_div = formElement.querySelector(".form-message");

    message_div.textContent = message;
    message_div.classList.remove("form-message-success", "form-message-error");
    message_div.classList.add(`form-message-${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";
}

document.addEventListener('DOMContentLoaded', () => {
    const signIn_Form = document.querySelector("#signIn");
    const createAccount_Form = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        signIn_Form.classList.add("form-hidden");
        createAccount_Form.classList.remove("form-hidden");
    });

    document.querySelector("#linkSignIn").addEventListener("click", e => {
        e.preventDefault();
        signIn_Form.classList.remove("form-hidden");
        createAccount_Form.classList.add("form-hidden");
    });

    signIn_Form.addEventListener('submit', e => {
        e.preventDefault();
        
        setMessageForm(signIn_Form, "error", "Invalid username or password");
    });

    document.querySelectorAll(".form-input").forEach(inputElement => {
        let signupPassword;
        let signupConfirm;

        inputElement.addEventListener("blur", e => {

            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 5) {
                setInputError(inputElement, "Username must be at least 5 characters in length");
            }
        });

        inputElement.addEventListener("blur", e => {
            signupPassword = e.target.value;
            if (e.target.id === "signupPassword" && e.target.value.length > 0 && e.target.value.length < 5) {
                setInputError(inputElement, "Password must be at least 8 characters in length");
            }
        });

        inputElement.addEventListener("blur", e => {
            signupConfirm = e.target.value;
            if (e.target.id === "signupConfirm" && signupPassword != signupConfirm) {
                setInputError(inputElement, "Incorrect password");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

