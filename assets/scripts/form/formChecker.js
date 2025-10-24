import { hidden, verifyPassword } from "./formShortcuts.js";
import { recordUser } from "../userStorage/recordUser.js";

const $reset = document.getElementById("cancel");
export function resetForm() {
	$reset.addEventListener("click", () => {
		hidden("nameCheck");
		hidden("mailCheck");
		hidden("passConfirm");
		document.getElementById("passCheck").style.color = "rgb(173, 173, 173)";
	});
}

const $form = document.getElementById("formID");
export function verifyForm() {
	$form.addEventListener("submit", (event) => {
		event.preventDefault();
		verifyPassword() && $form.reportValidity() ? recordUser($form) : alert("Veuillez vérifier vos entrées.");
	});
}