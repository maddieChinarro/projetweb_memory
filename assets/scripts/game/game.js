import { memory } from "./memory.js";
import { setupCards } from "./setupCards.js";
import { setupGrid } from "./setupGrid.js";

const gridSize = setupGrid();
setupCards(gridSize);
memory(gridSize);