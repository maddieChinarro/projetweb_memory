import { memory } from "./memory.js";

memory();

// Reset memory on Escape
globalThis.addEventListener("keydown", (event) => {
    if (event.key == " " || event.key == "Escape") {
        // Add reset function call later
    }
    event.preventDefault();
});
