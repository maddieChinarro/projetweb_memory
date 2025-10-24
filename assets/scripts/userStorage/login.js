import { storageAvailable } from "./storageChecker.js";
import { checkLogin } from "./checkLogin.js";

const password = document.getElementById("userPassword");
const email = document.getElementById("userEmail");
const form = document.getElementById("formLogin");
let userID = 0;

checkLogin();

form.addEventListener("submit", (event) => {
	event.preventDefault();
	if (storageAvailable("localStorage") && storageAvailable("sessionStorage") && localStorage.getItem("userArray")) {
		const userArray = [JSON.parse(localStorage.getItem("userArray"))];
		try {
			for (const array of userArray) {
				checkAccount(array);
			}
		} catch (error) {
			// If the localStorage sends back an item instead of an array
			checkAccount(userArray);
		}
	} else {
		// Redirect the user to register
		noAccountFound();
	}
});

function checkAccount(array) {
	for (const user of array) {
		if (user.email == email.value) {
			if (user.password == password.value) {
				sessionStorage.setItem("user", JSON.stringify(user));
				sessionStorage.setItem("userID", JSON.stringify(userID));
				alert("Connection réussie !");
				globalThis.location.href = "../profil.html";
				break;
			} else {
				alert("Mot de passe incorrect.");
				break;
			}
		} else if (noAccountFound()) {
			break;
		}
		userID++;
	}
}

function noAccountFound() {
	const choice = confirm("Aucun compte n'est lié à cette adresse e-mail, voulez-vous en créer un ?");
	return choice ? (globalThis.location.href = "../inscription.html") : true;
}