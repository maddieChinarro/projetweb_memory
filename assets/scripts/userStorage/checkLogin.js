import { storageAvailable } from "./storageChecker.js";
// Check if a user is already connected
export function checkLogin() {
    if (storageAvailable("sessionStorage")) {
        if (sessionStorage.getItem("user")) {
            const disconnect = confirm("Vous êtes déjà connecté. Souhaitez-vous vous déconnecter ?");
            if (disconnect) { // If the user wants to disconnect
                sessionStorage.clear("user");
            }
        }
    }
}