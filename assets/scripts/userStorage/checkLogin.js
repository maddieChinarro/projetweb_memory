import { storageAvailable } from "./storageChecker.js";

// Check if a user is already connected
export function checkLogin() {
	if (storageAvailable("sessionStorage") && sessionStorage.getItem("user")) {
        setTimeout(() => {
            const disconnect = confirm("Vous êtes déjà connecté. Souhaitez-vous vous déconnecter ?");
            if (disconnect) {
                sessionStorage.clear();
            }
        }, 200);
	}
}