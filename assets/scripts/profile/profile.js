import { storageAvailable } from "../userStorage/storageChecker.js";
import { setSettings } from "./setSettings.js";
import { displayProfile } from "./displayProfile.js";

const memory = document.getElementById("memorySelect");
const grid = document.getElementById("memorySize");

if (storageAvailable("sessionStorage") && storageAvailable("localStorage")) {
	if (sessionStorage.getItem("user")) {
		const user = JSON.parse(sessionStorage.getItem("user"));
		displayProfile(user, memory, grid);
		setSettings(user, memory, grid);
	} else {
		globalThis.location.href = "../connection.html";
	}
}