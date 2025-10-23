import { storageAvailable } from "../userStorage/storageChecker.js";
// Build the grid and return it's size

export function setupGrid() {
    let gridSize = 12; // Initialise to default 
    let gridHeight = 3;
    let gridWidth = 4;
    if (storageAvailable("sessionStorage")) { // Check if we can use sessionStorage and is it isnt empty
        if (sessionStorage.getItem("user")) {
            const user = JSON.parse(sessionStorage.getItem("user")); // Parse the user stored
            if (sessionStorage.getItem("user")) {
                switch (user.grid) { // Set the grid size based on user's setting
                    case "4 * 3":
                        buildGrid(gridSize, gridHeight, gridWidth);
                        break;
                    case "5 * 4":
                        gridSize = 20;
                        gridHeight = 4;
                        gridWidth = 5;
                        buildGrid(gridSize, gridHeight, gridWidth);
                        break;
                    default:
                        buildGrid(gridSize, gridHeight, gridWidth);
                        break;
                }
            }
        } else { // Else set to default
        buildGrid(gridSize, gridHeight, gridWidth);
        }
    } else {
        buildGrid(gridSize, gridHeight, gridWidth);
    }
    
    return gridSize;
}

function buildGrid(gridSize, gridHeight, gridWidth) {
    const grid = document.getElementById("memoryGridID");
    let card = "";
    // Add the nbr of cards
    for (let i = 0; i < gridSize; i++) {
       card += `<div class="card">
					<div class="content">
						<div class="front">
							<img src="assets/img/question.svg" alt="Carte face cachée">
						</div>
						<div class="back">
							<img src="" alt="Carte ${i+1}">
						</div>
					</div>
				</div>`;
    }
    // Push to html
    grid.innerHTML = card;
    // Add CSS
    grid.style.gridTemplate = `repeat(${gridHeight}, 1fr)/repeat(${gridWidth}, 1fr)`;
}