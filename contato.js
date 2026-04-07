const contactForm = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}

function validateEmailField() {
    const value = emailInput.value.trim();

    if (!value) {
        emailError.textContent = "Digite um e-mail.";
        return false;
    }

    if (!isValidEmail(value)) {
        emailError.textContent = "Digite um e-mail valido. Ex: nome@dominio.com";
        return false;
    }

    emailError.textContent = "";
    return true;
}

emailInput.addEventListener("blur", validateEmailField);
emailInput.addEventListener("input", () => {
    if (emailError.textContent) {
        validateEmailField();
    }
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const isEmailValid = validateEmailField();
    if (!isEmailValid) {
        emailInput.focus();
        return;
    }

    alert("ENTRAREMOS EM CONTATO");
    contactForm.reset();
});
