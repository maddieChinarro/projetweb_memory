export const visible = (id) => document.getElementById(id).style.visibility = "visible";
export const hidden = (id) => document.getElementById(id).style.visibility = "hidden";
export const testRegex = (regex, str) => regex.test(str);

const inputName = document.getElementById("userName");
const inputEmail = document.getElementById("userEmail");
const inputPassword = document.getElementById("userPassword");
const confirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("submit");

const verifyPassword = () => confirmPassword.value === inputPassword.value;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,32}$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexName = /^[a-zA-Z0-9-_]{3,}$/;

export function formChecker() {
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

    inputPassword.addEventListener("focusout", () => {
        
        if (!testRegex(regexPassword, inputPassword.value)) {
            document.getElementById("passCheck").style.color = "rgb(226, 33, 33)";
        }
    })
    inputPassword.addEventListener("input", () => {
        if (testRegex(regexPassword, inputPassword.value)) {
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