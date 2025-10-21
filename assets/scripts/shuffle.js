export function shuffle(min, max, gridSize) {
    let cardImages = document.querySelectorAll(".back > img");
    let randArray = getRandomArray(min, max, gridSize);
    let i = 0; // Used to navigate the random array
    cardImages.forEach((card) => { // Attributes an image based on the random array
        card.setAttribute("src", `assets/img/animauxAnimes/${randArray[i]}.webp`)
        i++;
    });
}

function getRandomArray(min, max, gridSize) {
    const randArray = [];
    while (randArray.length < gridSize) { // Fill an array of the grid size with pairs of random numbers
        let rand = getRandomInt(min, max);
        if (!randArray.includes(rand)) {
            randArray.push(rand, rand);
        }
    }

    return randArray.sort(() => Math.random() - 0.5);;
}

function getRandomInt(min, max) { // Gives a random number between the limit of the imgs number
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}
