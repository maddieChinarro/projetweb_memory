import { storageAvailable } from "../userStorage/storageChecker.js";
import { setSettings } from "./setSettings.js";
import { displayProfile } from "./displayProfile.js";

const memory = document.getElementById("memorySelect");
const grid = document.getElementById("memorySize");


if (storageAvailable("sessionStorage") && storageAvailable("localStorage")) {
    if (sessionStorage.getItem("user")) { // If a user is logged-in
        const user = JSON.parse(sessionStorage.getItem("user")); // Parse the user stored 
        
        displayProfile(user, memory, grid);
        setSettings(user, memory, grid);

    } else { // Is no user is logged-in, redirect to loggin
            globalThis.location.href = "../connection.html";
    }
}