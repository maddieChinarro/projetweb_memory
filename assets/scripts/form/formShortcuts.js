export const visible = (id) => document.getElementById(id).style.visibility = "visible";
export const hidden = (id) => document.getElementById(id).style.visibility = "hidden";
export const testRegex = (regex, str) => regex.test(str);
export const password = document.getElementById("userPassword");
export const confirmPassword = document.getElementById("confirmPassword");
export const verifyPassword = () => confirmPassword.value === password.value;