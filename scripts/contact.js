var form = "contactForm";
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");

function validateForm() {
    var firstNameFromForm = document.forms[form]["firstName"].value;
    var lastNameFromForm = document.forms[form]["lastName"].value;
    var emailFromForm = document.forms[form]["email"].value;

    if (checkString(firstNameFromForm)) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
    if (checkString(lastNameFromForm)) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }
    if (validateEmail(emailFromForm)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    function checkString(textFromInput) {
        if (textFromInput === "") {
            return false;
        } else {
            return true;
        }

    }

    function validateEmail(email) {
        const regEx = /\S+@\S+\.\S+/;
        const patternMatches = regEx.test(email);
        return patternMatches;
    }
}