import { resetGame } from "./resetGame.js";

let storedCard;
let cardCpt = 0;
let victoryCpt = 0;
let score = 0;
let isTimeOutDone = true;

export function memory(gridSize) {
    let cards = document.querySelectorAll(".content");
	// Add click event to all cards of the memory
	for (const card of cards) {
		card.addEventListener("click", () => {
			handleCardClick(card, gridSize);
		});
	}
	// Reset memory on Escape
	globalThis.addEventListener("keydown", (event) => {
		resetGame(event, gridSize);
        cardCpt = 0;
        victoryCpt = 0;
        score = 0;
	});
}
const getSrc = (card) => card.querySelector(".back > img").getAttribute("src");

// Handles the click event
function handleCardClick(card, gridSize) {
	if (isTimeOutDone) {
		card.classList.toggle("clicked");
		card.style = "pointer-events: none";

		if (cardCpt == 1) {
            isTimeOutDone = false;
			if (getSrc(card) === getSrc(storedCard)) {
				victoryCpt++;
				isTimeOutDone = true;
				if (victoryCpt == gridSize / 2) {
					setTimeout(() => {
						alert(`Bravo ! Vous avez finis en ${score} coups !`);
					}, 200);
				}
			} else {
				// Wait 1sc then toggle back the cards
				setTimeout(() => {
					card.classList.toggle("clicked");
					card.style = "pointer-events: auto";
					storedCard.classList.toggle("clicked");
					storedCard.style = "pointer-events: auto";
					isTimeOutDone = true;
				}, 1000);
			}
            
			cardCpt--;
			score++;
			document.getElementById("currentScore").textContent = `${score}`;
		} else {
			storedCard = card;
			cardCpt++;
		}
	}
}