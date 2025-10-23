import { storageAvailable } from "../userStorage/storageChecker.js";
import { getRandomArray } from "./shuffle.js";


// Attributes the right memory images based on user's settings
export function setupCards() {
    const nbrChiens = 23;
    const nbrAnimauxAnimes = 8;
    const gridSize = 12;
    const min = 1;
    let randArray;
    let cardImages = document.querySelectorAll(".back > img");
    let i = 0; // Used to navigate the random array
    const user = JSON.parse(sessionStorage.getItem("user")); // Parse the user stored

    if (storageAvailable("sessionStorage")) {
        if (sessionStorage.getItem("user")) {
            switch (user.memory) { // Set the number of possible cards based on memory choice
                case "animauxAnimes":
                    randArray = getRandomArray(min, nbrAnimauxAnimes, gridSize);
                    break;
                case "chiens":
                    randArray = getRandomArray(min, nbrChiens, gridSize);
                    break;
                default:
                    break;
            }
            // Attributes the images based on memory choice
            for (const card of cardImages) {
                card.setAttribute("src", `assets/img/${user.memory}/${randArray[i]}.webp`)
                i++;
            };
        } else { // Set to default is nothing stored
            setImageDefault(randArray);
        }
    } else { // Set to default is nothing stored 
        setImageDefault(randArray); 
    }
}

function setImageDefault(randArray) {
    randArray = getRandomArray(min, nbrAnimauxAnimes, gridSize);
    for (const card of cardImages) {
        card.setAttribute("src", `assets/img/animauxAnimes/${randArray[i]}.webp`)
        i++;
    };
}