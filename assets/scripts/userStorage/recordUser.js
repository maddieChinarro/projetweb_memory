import { storageAvailable } from "./storageChecker.js";


export function recordUser(form) {
    const user = new Map(new FormData(form));
    let userTable = [];
    let checkSimilarUser = 0;

    if (storageAvailable("localStorage")) {
        if (localStorage.getItem("userTable")) {
            const userParsed = JSON.parse(localStorage.getItem("userTable")); // Parse the user array stored
            userTable = userParsed.map(item => new Map(Object.entries(item))); // Turns back the stored array into a map

            for (const map of userTable) {
                if (map.get("username") == user.get("username") || map.get("email") == user.get("email")) {
                    checkSimilarUser++;
                    alert("Ce nom d'utilisateur ou cet adresse-email est déjà lié à un compte.");
                }
            }
            if (checkSimilarUser === 0) {
                userTable.push(user); // Add the new user map
                const objetTable = userTable.map(item => Object.fromEntries(item)); // Turns the map back into an array
                localStorage.setItem("userTable", JSON.stringify(objetTable)); // Store the result
                success(form);
            }
        } else { // If there isnt any user stored
            userTable.push(user); // Add the new user map
            const objetTable = userTable.map(item => Object.fromEntries(item)); // Turns the map into an array
            localStorage.setItem("userTable", JSON.stringify(objetTable)); // Store the result
            success(form);
        }
    }
}

const success = (form) => {
    alert("Votre compte à bien été crée ! Vous pouvez à présent vous connecter.");
    globalThis.location.href = "../connection.html";
}