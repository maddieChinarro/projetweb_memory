import { shuffle } from "./shuffle.js";

export function memory () {
    let cards = document.querySelectorAll(".content");
    let storedCard;
    let cardCpt = 0;
    let victoryCpt = 0;
    let score = 0;
    let timeOutID;
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("clicked"); // Display the other side of the card
            card.style = "pointer-events: none"; // Disable the click-ability
            if (cardCpt == 1) {
                if (getSrc(card) != getSrc(storedCard)) { // Unless the previous card's link is equal to the new one's, flip them both back after 1sc
                    timeOutID = setTimeout(() => {
                        card.classList.toggle("clicked");
                        card.style = "pointer-events: auto";
                        storedCard.classList.toggle("clicked");
                        storedCard.style = "pointer-events: auto";
                    }, 1000);
                } else {
                    victoryCpt++;
                    if (victoryCpt == 6) {
                        alert("Bravo !");
                    }
                }
                cardCpt--;
                score++; // Increment scoring each 2 card flipped
                document.getElementById("currentScore").textContent = `${score}`; // Update the score display
            } else { // Store the card for next check
                storedCard = card;
                cardCpt++;
            }
        });
    });

    let getSrc = (card) => card.querySelector('.back > img').getAttribute("src"); 

    // Reset memory on Escape
    globalThis.addEventListener("keydown", (event) => {
    if (event.key == " " || event.key == "Escape") {
       document.querySelectorAll(".content").forEach((card) => {
            card.classList.remove("clicked");
            card.style = "pointer-events: auto";
       });
       cardCpt = 0;
       victoryCpt = 0;
       score = 0;
       document.getElementById("currentScore").textContent = `${score}`; // Update the score display
       setTimeout(() => {
        shuffle(1, 8, 12); // Reset card position
       }, 500);
    }
    event.preventDefault(); // Stops the default function of escape key
    });
};
