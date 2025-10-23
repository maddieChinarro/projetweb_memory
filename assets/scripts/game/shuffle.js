// Gives a random array between min and max to fit the grid
export function getRandomArray(min, max, gridSize) {
    if (max - min + 1 < (gridSize/2)) { // Catch error if there isnt enough img for the grid to load
        throw new Error(`Not enough unique images (${max - min + 1}) for a grid of ${gridSize} cards.`);
    }
    
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
