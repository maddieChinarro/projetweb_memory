import { storageAvailable } from "../userStorage/storageChecker.js";
import { getRandomArray } from "./shuffle.js";


// Attributes the right memory images based on user's settings
export function setupCards(gridSize) {
    const nbrChiens = 23;
    const nbrAnimauxAnimes = 8;
    const min = 1;
    let randArray;
    let cardImages = document.querySelectorAll(".back > img");
    
    let i = 0; // Used to navigate the random array
    
    if (storageAvailable("sessionStorage")) { // Check if we can use sessionStorage and is it isnt empty
        if (sessionStorage.getItem("user")) {
            const user = JSON.parse(sessionStorage.getItem("user")); // Parse the user stored       
            
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
            return 0;
        }
    }
    const defaultArray = getRandomArray(min, nbrAnimauxAnimes, 12);
    i = 0; // Set cpt back to start
    for (const card of cardImages) { // Set images to default in case of empty storage
        card.setAttribute("src", `assets/img/animauxAnimes/${defaultArray[i]}.webp`)
        console.log(defaultArray[i]);
        
        i++;
    };
}