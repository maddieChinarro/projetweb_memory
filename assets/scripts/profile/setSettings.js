// Change the user's settings on demand
export function setSettings(user, memory, grid) {
	const $btn = document.getElementById("saveBtn");
	const $userID = JSON.parse(sessionStorage.getItem("userID"));
	let userObject = JSON.parse(localStorage.getItem("userArray"))[$userID];

	$btn.addEventListener("click", () => {
		if (memory.value == "animauxAnimes" && grid.value != "4 * 3") {
			alert("Erreur, ce memory n'est pas utilisable avec cette taille !");
		} else {
			user.memory = memory.value;
			user.grid = grid.value;
			sessionStorage.setItem("user", JSON.stringify(user));
			userObject = user;
			localStorage.setItem("userArray", JSON.stringify(userObject));
			alert("Vos choix ont étés enregistrés.");
		}
	});
}