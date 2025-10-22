import { visible, hidden, testRegex, verifyPassword, password, confirmPassword } from "./formShortcuts.js";

const inputName = document.getElementById("userName");
const inputEmail = document.getElementById("userEmail");

const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,32}$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexName = /^[a-zA-Z0-9-_]{3,}$/;

export function formValidation() {
    inputName.addEventListener("focusout", () => { // Check if regex is false on leave input
        if (!testRegex(regexName, inputName.value)) {
            visible("nameCheck");
        }
    })
    inputName.addEventListener("input", () => { // Check if true on input
        if (testRegex(regexName, inputName.value)) {
            hidden("nameCheck");
        }
    })

    inputEmail.addEventListener("focusout", () => {
        if (!testRegex(regexEmail, inputEmail.value)) {
            visible("mailCheck");
        }
    })
    inputEmail.addEventListener("input", () => {
        if (testRegex(regexEmail, inputEmail.value)) {
            hidden("mailCheck");
        }
    })

    password.addEventListener("focusout", () => {
        
        if (!testRegex(regexPassword, password.value)) {
            document.getElementById("passCheck").style.color = "rgb(226, 33, 33)";
        }
    })
    password.addEventListener("input", () => {
        if (testRegex(regexPassword, password.value)) {
            document.getElementById("passCheck").style.color = "rgb(173, 173, 173)";
        }
        if (verifyPassword()) { // Verify the confirm in case user changes first pass to match second
            hidden("passConfirm");
        }
    })
    // Verify both password input are the same
    confirmPassword.addEventListener("focusout", () => {
        if (!verifyPassword()) {
            visible("passConfirm");
        }
    })
    confirmPassword.addEventListener("input", () => {
        if (verifyPassword()) {
            hidden("passConfirm");
        }
    })
}