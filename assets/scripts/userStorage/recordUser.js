import { storageAvailable } from "./storageChecker.js";

export function recordUser(form) {
	const user = Object.fromEntries(new FormData(form).entries());
	let userTaken = false;
	let userArray = [];

	if (storageAvailable("localStorage")) {
		if (localStorage.getItem("userArray")) {
			userArray = [JSON.parse(localStorage.getItem("userArray"))];
			try {
				for (const array of userArray) {
					userTaken = isUserTaken(array, user, userTaken);
				}
			} catch (error) {
				// If the localStorage sends back an item instead of an array
				userTaken = isUserTaken(userArray, user, userTaken);
			}
			if (!userTaken) {
				buildUser(user, userArray);
			}
		} else {
			buildUser(user, userArray);
		}
	}
}

const success = () => {
	alert("Votre compte à bien été crée ! Vous pouvez à présent vous connecter.");
	globalThis.location.href = "../connection.html";
};

function buildUser(user, userArray) {
	user.memory = "animauxAnimes";
	user.grid = "4 * 3";
	userArray.push(user);
	localStorage.setItem("userArray", JSON.stringify(userArray));
	success();
}

function isUserTaken(userArray, user, userTaken) {
	for (const u of userArray) {
		if (u.username == user.username || u.email == user.email) {
			userTaken = true;
			alert("Ce nom d'utilisateur ou cet adresse-email est déjà lié à un compte.");
			break;
		}
	}
	return userTaken;
}