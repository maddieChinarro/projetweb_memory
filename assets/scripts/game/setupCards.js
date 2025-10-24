import { storageAvailable } from "../userStorage/storageChecker.js";
import { getRandomArray } from "./shuffle.js";

// Attributes the right memory images based on user's settings
export function setupCards(gridSize) {
	const NBR_CHIENS = 23;
	const NBR_ANIMAUX_ANIMES = 8;
	const MIN = 1;
	let randArray;
	let cardImages = document.querySelectorAll(".back > img");
	let i = 0;

	if (storageAvailable("sessionStorage") && sessionStorage.getItem("user")) {
		const user = JSON.parse(sessionStorage.getItem("user"));
		switch (user.memory) {
			case "animauxAnimes":
				randArray = getRandomArray(MIN, NBR_ANIMAUX_ANIMES, gridSize);
				break;
			case "chiens":
				randArray = getRandomArray(MIN, NBR_CHIENS, gridSize);
				break;
			default:
				break;
		}
		for (const card of cardImages) {
			card.setAttribute("src", `assets/img/${user.memory}/${randArray[i]}.webp`);
			i++;
		}
		return 0;
	} else {
		// Set to default
		const defaultArray = getRandomArray(MIN, NBR_ANIMAUX_ANIMES, 12);
		for (const card of cardImages) {
			card.setAttribute("src", `assets/img/animauxAnimes/${defaultArray[i]}.webp`);
			i++;
		}
	}
}