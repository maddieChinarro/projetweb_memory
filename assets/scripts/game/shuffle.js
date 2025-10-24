// Gives a random array between min and max to fit the grid
export function getRandomArray(min, max, gridSize) {
	if (max - min + 1 < gridSize / 2) {
		throw new Error(`Not enough unique images (${max - min + 1}) for a grid of ${gridSize} cards.`);
	}
	const randArray = [];
	while (randArray.length < gridSize) {
		let rand = getRandomInt(min, max);
		if (!randArray.includes(rand)) {
			randArray.push(rand, rand);
		}
	}
	return randArray.sort(() => Math.random() - 0.5);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}