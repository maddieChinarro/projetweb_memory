// Handle the reset of the memory
export function resetGame(event, gridSize) {
	if (event.key == " " || event.key == "Escape") {
		document.querySelectorAll(".content").forEach((card) => {
			// Set all cards to default
			card.classList.remove("clicked");
			card.style = "pointer-events: auto";
		});
		document.getElementById("currentScore").textContent = `${score}`;
		setTimeout(() => {
			setupCards(gridSize); // Reset card position
		}, 500);
	}
	event.preventDefault();
}