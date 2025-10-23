import { storageAvailable } from "./storageChecker.js";

export function recordUser(form) {
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    let checkSimilarUser = 0;
    let userArray = [];

    if (storageAvailable("localStorage")) {
        if (localStorage.getItem("userArray")) {

            userArray = [JSON.parse(localStorage.getItem("userArray"))]; // Parse the user array stored

            try {
                for (const array of userArray) {
                    for (const u of array) { // Check if email or name is taken
                        if (u.username == user.username || u.email == user.email) {
                            checkSimilarUser = 1;
                            alert("Ce nom d'utilisateur ou cet adresse-email est déjà lié à un compte.");
                            break;
                        }
                    }
                }
            } catch (error) { // If the localStorage sends back an item instead of an array
                console.error("Can't iterate")
                for (const u of userArray) { // Check if email or name is taken
                    if (u.username == user.username || u.email == user.email) {
                        checkSimilarUser = 1;
                        alert("Ce nom d'utilisateur ou cet adresse-email est déjà lié à un compte.");
                        break;
                    }
                }
            }

            if (checkSimilarUser === 0) {
                user.memory = "animauxAnimes"; // Set the user's settings to default
                user.grid = "4 * 3";
                userArray.push(user); // Add the new user to the array
                localStorage.setItem("userArray", JSON.stringify(userArray)); // Store the result
                success(form); // Tell the user
            }
            
        } else { // If there isnt any user stored
            user.memory = "animauxAnimes"; // Set the user's settings to default
            user.grid = "4 * 3";
            userArray.push(user);
            localStorage.setItem("userArray", JSON.stringify(userArray));
            success(form);
        }
    }
}

const success = (form) => {
    alert("Votre compte à bien été crée ! Vous pouvez à présent vous connecter.");
    globalThis.location.href = "../connection.html";
}