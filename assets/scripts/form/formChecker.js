import { hidden, verifyPassword } from "./formShortcuts.js";

const reset = document.getElementById("cancel");
// Reset form error messages on cancel form
export function resetForm() {
    reset.addEventListener("click", () => {
        hidden("nameCheck");
        hidden("mailCheck");
        hidden("passConfirm");
        document.getElementById("passCheck").style.color = "rgb(173, 173, 173)";
    })
}

const form = document.getElementById("formID");
// Checks if the form is valid html-patern-wise and if the passwords match
export function verifyForm() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (verifyPassword() && form.reportValidity()) {
            form.submit();
        } else {
            console.log(verifyPassword());
        }
    });
}